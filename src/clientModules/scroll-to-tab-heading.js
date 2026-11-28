let pendingScroll;

function onRouteDidUpdate({location, previousLocation}) {
  pendingScroll?.disconnect();
  pendingScroll = undefined;
  const {pathname, hash, search} = location;
  if (!hash || !search || (pathname === previousLocation?.pathname && hash === previousLocation.hash)) {
    return;
  }

  let heading;
  try {
    heading = document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return;
  }
  const tabParams = heading?.dataset.searchParams;
  if (!tabParams) {
    return;
  }
  const query = new URLSearchParams(search);
  for (const [key, value] of new URLSearchParams(tabParams)) {
    if (query.get(key) !== value) return;
  }

  // The browser can reach the anchor before Docusaurus opens the requested tab.
  const observer = new ResizeObserver(([entry]) => {
    if (entry.contentRect.height > 0) {
      observer.disconnect();
      pendingScroll = undefined;
      heading.scrollIntoView();
    }
  });
  pendingScroll = observer;
  observer.observe(heading);
}

module.exports = {onRouteDidUpdate};
