#!/usr/bin/env node
const {extractSearchRecords} = require('../config/search/records.cjs');
const {addTabQueryToRecordUrl} = require('../plugins/search-tabs/record-url');
const {indexSettings} = require('../config/search/settings.cjs');

function renderRecordExtractor(format) {
  if (!['docsearch', 'markdown'].includes(format)) throw new Error(`Unknown format: ${format}`);
  return `function (context) {\n` +
    `  const resolveTabUrl = ${addTabQueryToRecordUrl.toString()};\n` +
    `  const extract = ${extractSearchRecords.toString()};\n` +
    `  return extract(context, ${JSON.stringify(format)}, resolveTabUrl);\n}`;
}

function renderActions() {
  return '[\n' + [['phcode', 'docsearch'], ['markdown-index', 'markdown']].map(([indexName, format]) =>
    `  {\n    indexName: ${JSON.stringify(indexName)},\n` +
    `    pathsToMatch: ["https://docs.phcode.dev/**"],\n` +
    `    recordExtractor: ${renderRecordExtractor(format)}\n  }`,
  ).join(',\n') + '\n]';
}

if (require.main === module) {
  const option = process.argv[2] || '--actions';
  if (option === '--actions') console.log(renderActions());
  else if (option === '--settings') console.log(JSON.stringify(indexSettings, null, 2));
  else {
    console.error('Usage: node scripts/search-crawler.cjs [--actions|--settings]');
    process.exitCode = 1;
  }
}

module.exports = {renderRecordExtractor, renderActions};
