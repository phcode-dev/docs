// Script that automatically adds _category_.json file to 
// API-Reference Dir to expand it by one level

const path = require('path');
const fs = require('fs');

const API_DOCS = path.join('api', 'API-Reference');

const categoryJsonTemplate = 
`{
    "collapsible": true,
    "collapsed": false
}`;

if (fs.existsSync(API_DOCS)) {
    const categoryJsonPath = path.join(API_DOCS, '_category_.json');
    fs.writeFileSync(categoryJsonPath, categoryJsonTemplate, 'utf-8');
    console.log('_category_.json created successfully!');
}


