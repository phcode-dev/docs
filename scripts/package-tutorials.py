"""Rebuild the downloadable examples: python3 scripts/package-tutorials.py."""

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


TUTORIALS = Path(__file__).resolve().parents[1] / "static" / "tutorials"
PROJECTS = ("first-website", "bootstrap-starter")


def main():
    for project in PROJECTS:
        source = TUTORIALS / project
        archive = TUTORIALS / f"{project}.zip"
        # Stable entry order and metadata keep repeat builds byte-for-byte identical.
        with ZipFile(archive, "w", compression=ZIP_DEFLATED) as bundle:
            for path in sorted(source.rglob("*")):
                if not path.is_file():
                    continue
                info = ZipInfo(
                    f"{project}/{path.relative_to(source).as_posix()}",
                    date_time=(2026, 1, 1, 0, 0, 0),
                )
                info.compress_type = ZIP_DEFLATED
                info.create_system = 3
                info.external_attr = 0o100644 << 16
                bundle.writestr(info, path.read_bytes())
        print(f"Created {archive.relative_to(TUTORIALS.parent)}")


if __name__ == "__main__":
    main()
