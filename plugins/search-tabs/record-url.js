/**
 * Add the tab parameters published on the record's exact target heading.
 * `parametersByAnchor` is an object keyed by heading id, whose values are the
 * heading's data-search-params attribute. This function is self-contained so a
 * hosted crawler configuration can embed it without importing site runtime code.
 */
function addTabQueryToRecordUrl(recordUrl, parametersByAnchor) {
  try {
    const url = new URL(recordUrl);
    if (!['http:', 'https:'].includes(url.protocol) || !url.hash) return recordUrl;
    const anchor = decodeURIComponent(url.hash.slice(1));
    if (!Object.prototype.hasOwnProperty.call(parametersByAnchor, anchor)) return recordUrl;
    const encodedParameters = parametersByAnchor[anchor];
    if (typeof encodedParameters !== 'string' || encodedParameters.length === 0) return recordUrl;

    for (const [name, value] of new URLSearchParams(encodedParameters)) {
      url.searchParams.set(name, value);
    }
    return url.href;
  } catch (error) {
    // Preserve records that are not absolute URLs or have malformed fragments.
    return recordUrl;
  }
}

module.exports = {addTabQueryToRecordUrl};
