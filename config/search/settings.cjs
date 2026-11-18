/**
 * Explicit deltas for existing indices. initialIndexSettings only initializes
 * new indices; publish these through Algolia's supported setSettings API/UI.
 * Preserve other live index settings when applying these deltas.
 * https://www.algolia.com/doc/tools/crawler/apis/configuration/initial-index-settings
 */
const indexSettings = {
  phcode: {
    attributesForFaceting: ['type', 'lang', 'category', 'edition', 'editions'],
    attributesToRetrieve: [
      'hierarchy', 'content', 'anchor', 'url', 'url_without_anchor', 'type',
      'category', 'edition', 'editions',
    ],
    removeStopWords: ['en'],
    minProximity: 2,
    attributeCriteriaComputedBy: 'sum',
    // Nested article headings should not crowd out other matching sections.
    // section_url retains edition parameters; API entries keep their own URL.
    attributeForDistinct: 'section_url',
    distinct: true,
  },
  'markdown-index': {
    attributesForFaceting: [
      'lang', 'language', 'version', 'docusaurus_tag', 'category', 'edition', 'editions',
    ],
    attributesToRetrieve: [
      'title', 'heading', 'text', 'url', 'lang', 'language', 'version',
      'docusaurus_tag', 'category', 'edition', 'editions', 'editionSections', 'part',
    ],
  },
};

module.exports = {indexSettings};
