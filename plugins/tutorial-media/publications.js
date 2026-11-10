const PUBLICATIONS_PATH = 'tutorials/video-publications.json';

function validatePublications(value) {
  if (!value || value.version !== 1 || !value.videos || Array.isArray(value.videos) || typeof value.videos !== 'object') {
    throw new Error('Invalid tutorial video publication manifest. Restore the previously deployed manifest before publishing.');
  }
  for (const [url, date] of Object.entries(value.videos)) {
    if (!/^\/tutorials\/media\/[a-z0-9-]+\.mp4$/.test(url) ||
        typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(date) ||
        !Number.isFinite(Date.parse(date))) {
      throw new Error(`Invalid publication record for ${url}. Publication dates must be ISO timestamps with a timezone.`);
    }
  }
  return value;
}

function addPublicationDates(previous, sources, now) {
  validatePublications(previous);
  const videos = {...previous.videos};
  for (const source of sources) videos[source] ??= now;
  return validatePublications({version: 1, videos});
}

module.exports = {PUBLICATIONS_PATH, validatePublications, addPublicationDates};
