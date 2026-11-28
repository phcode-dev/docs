let pendingScroll;

function onRouteDidUpdate({location, previousLocation}) {
  pendingScroll?.disconnect();
  pendingScroll = undefined;
  const {pathname, hash, search} = location;
  if (!hash || !search || (pathname === previousLocation?.pathname && hash === previousLocation.hash)) {
    return;
  }

  let id;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }
  const tabParams = document.getElementById(id)?.dataset.searchParams;
  if (!tabParams) {
    return;
  }
  const query = new URLSearchParams(search);
  for (const [key, value] of new URLSearchParams(tabParams)) {
    if (query.get(key) !== value) return;
  }

  // Hydration can replace the original heading before its tab becomes visible.
  function scrollWhenVisible() {
    if (document.documentElement.dataset.hasHydrated === 'false') return;
    const heading = document.getElementById(id);
    if (heading?.getClientRects().length) {
      observer.disconnect();
      pendingScroll = undefined;
      heading.scrollIntoView();
    }
  }
  const observer = new MutationObserver(scrollWhenVisible);
  pendingScroll = observer;
  observer.observe(document.documentElement, {
    subtree: true, childList: true, attributes: true, attributeFilter: ['hidden', 'data-has-hydrated'],
  });
  scrollWhenVisible();
}

module.exports = {onRouteDidUpdate};
