"""Validate the built tutorial release using only Python's standard library."""

import argparse
import json
import re
import struct
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree
from zipfile import ZipFile


SITE = Path(__file__).resolve().parents[1]
ORIGIN = 'https://docs.phcode.dev'
GUIDES = ['tutorials', 'tutorials/add-images', 'tutorials/link-pages',
          'tutorials/share-website', 'tutorials/bootstrap', 'tutorials/run-python']


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.elements, self.ids, self.schemas = [], set(), []
        self.article = False
        self.script = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'article':
            self.article = True
        self.elements.append((tag, attrs, self.article))
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.script = []

    handle_startendtag = handle_starttag

    def handle_data(self, text):
        if self.script is not None:
            self.script.append(text)

    def handle_endtag(self, tag):
        if tag == 'article':
            self.article = False
        if tag == 'script' and self.script is not None:
            self.schemas.append(json.loads(''.join(self.script)))
            self.script = None

    def select(self, tag, article=False):
        return [attrs for name, attrs, inside in self.elements if name == tag and (inside or not article)]


def video_duration(path):
    """Read MP4 movie timing and ensure metadata precedes the video payload."""
    atoms = {}
    with path.open('rb') as video:
        while header := video.read(8):
            size, kind = struct.unpack('>I4s', header)
            start = video.tell() - 8
            if size == 1:
                size = struct.unpack('>Q', video.read(8))[0]
            assert size >= 8, f'Invalid MP4 atom in {path}'
            atoms[kind] = start
            if kind == b'moov':
                data = video.read(start + size - video.tell())
            video.seek(start + size)
    assert b'moov' in atoms and b'mdat' in atoms and atoms[b'moov'] < atoms[b'mdat'], f'MP4 is missing fast-start metadata: {path}'
    offset = 0
    while offset < len(data):
        size, kind = struct.unpack_from('>I4s', data, offset)
        assert size >= 8
        if kind == b'mvhd':
            value = data[offset + 8:offset + size]
            timescale, duration = struct.unpack_from('>IQ' if value[0] == 1 else '>II', value, 20 if value[0] == 1 else 12)
            return duration / timescale
        offset += size
    raise AssertionError(f'Missing MP4 duration: {path}')


def verify(build, release=False):
    pages = {}
    robots = RobotFileParser()
    robots.parse((build / 'robots.txt').read_text().splitlines())

    def page(file):
        if file not in pages:
            pages[file] = Page(file.read_text())
        return pages[file]

    def target(url, route='/'):
        absolute = urljoin(ORIGIN + route, url)
        parsed = urlparse(absolute)
        if parsed.netloc != 'docs.phcode.dev' or parsed.scheme not in ('http', 'https'):
            return None
        relative = unquote(parsed.path).lstrip('/')
        candidates = [build / (relative.rstrip('/') + '.html'), build / relative, build / relative / 'index.html']
        file = next((p for p in candidates if p.is_file()), None)
        assert file is not None, f'Missing local target: {absolute}'
        assert robots.can_fetch('Googlebot', absolute), f'Crawler blocked: {absolute}'
        if parsed.fragment and file.suffix == '.html':
            assert unquote(parsed.fragment) in page(file).ids, f'Missing anchor: {absolute}'
        return file

    sitemap = ElementTree.parse(build / 'sitemap.xml')
    indexed = {e.text for e in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
    for guide in GUIDES:
        route = '/docs/' + guide
        document = page(target(route))
        assert ORIGIN + route in indexed, f'Tutorial missing from sitemap: {route}'
        assert len(document.select('h1', article=True)) == 1, f'Expected one tutorial title: {route}'
        canonical = [a['href'] for a in document.select('link') if a.get('rel') == 'canonical']
        assert canonical == [ORIGIN + route], f'Incorrect canonical URL: {route}'
        assert not any('noindex' in a.get('content', '') for a in document.select('meta') if a.get('name') == 'robots')
        for tag, attrs, article in document.elements:
            if article and tag in ('a', 'img', 'source', 'track'):
                url = attrs.get('href' if tag == 'a' else 'src')
                if url:
                    target(url, route)
            if article and tag == 'img':
                assert attrs.get('alt') and attrs.get('width') and attrs.get('height'), f'Incomplete image attributes: {route}'
    image_page = page(target('/docs/tutorials/add-images'))
    assert len(image_page.select('details', article=True)) == 5, 'Expected five image FAQs'

    captures = json.loads((SITE / 'scripts/tutorial-media-manifest.json').read_text())
    publication_file = build / 'tutorials/video-publications.json'
    publications = json.loads(publication_file.read_text())['videos']
    schemas = [s for s in image_page.schemas if s.get('@type') == 'VideoObject']
    assert len(schemas) == len(captures['recordings']) == 2
    assert len({s['name'] for s in schemas}) == 2
    sources = {s['src'] for s in image_page.select('source', article=True)}
    posters = {s['poster'] for s in image_page.select('video', article=True)}
    tracks = {s['src'] for s in image_page.select('track', article=True)}
    for schema in schemas:
        source = urlparse(schema['contentUrl']).path
        assert source in sources and schema['description'] and schema['name']
        assert urlparse(schema['thumbnailUrl'][0]).path in posters
        assert urlparse(schema['caption']['contentUrl']).path in tracks
        for url in [schema['contentUrl'], schema['thumbnailUrl'][0], schema['caption']['contentUrl']]:
            target(url)
        duration = video_duration(target(source))
        assert abs(float(schema['duration'][2:-1]) - duration) < 0.02, f'Incorrect duration: {source}'
        captured = next(r for r in captures['recordings'] if '/' + r['file'].removeprefix('static/') == source)
        assert abs(captured['duration_seconds'] - duration) < 0.02
        assert schema.get('uploadDate') == publications.get(source), f'Publication date mismatch: {source}'
        if release:
            assert schema.get('uploadDate'), f'Release video has no first-publication date: {source}'
        captions = target(schema['caption']['contentUrl']).read_text()
        assert captions.startswith('WEBVTT')
        cues = re.findall(r'(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})\n([^\n]+)', captions)
        assert cues, f'Missing video captions: {source}'
        previous_end = 0
        for start, end, text in cues:
            def seconds(stamp):
                h, m, s = map(float, stamp.split(':'))
                return h * 3600 + m * 60 + s
            assert previous_end <= seconds(start) < seconds(end) <= duration + 0.02
            previous_end = seconds(end)

    index_links = 0
    for filename in ['llms.txt', 'api/llms.txt']:
        index = (build / filename).read_text()
        links = re.findall(r'^- \[(?:\\.|[^\\\]])*\]\(([^)]+)\)', index, re.M)
        assert index.startswith('# Phoenix Code') and links and len(links) == len(set(links))
        for link in links:
            target(link)
        index_links += len(links)
    for project in ['first-website', 'bootstrap-starter']:
        folder = SITE / 'static/tutorials' / project
        files = {p.relative_to(folder).as_posix(): p.read_bytes() for p in folder.rglob('*') if p.is_file()}
        with ZipFile(build / f'tutorials/{project}.zip') as archive:
            assert set(archive.namelist()) == {f'{project}/{name}' for name in files}, f'Stale practice ZIP: {project}'
            for name, content in files.items():
                assert archive.read(f'{project}/{name}') == content, f'Stale practice file: {project}/{name}'
    print(f'PASS: {len(GUIDES)} guides, local links and anchors, screenshots, 5 FAQs, 2 videos with captions, {index_links} AI-index links, and both practice ZIPs.'
          + (' Release publication dates are complete.' if release else ' Preview metadata verified.'))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--build-dir', type=Path, default=SITE / 'build')
    parser.add_argument('--release', action='store_true')
    args = parser.parse_args()
    verify(args.build_dir.resolve(), args.release)
