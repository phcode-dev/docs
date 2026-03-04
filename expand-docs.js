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

// Escape curly braces in API reference markdown files to prevent MDX parse errors.
// Upstream phoenix docs use {key: type} syntax which MDX interprets as JSX expressions.
function escapeCurlyBracesInDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            escapeCurlyBracesInDir(fullPath);
        } else if (entry.name.endsWith('.md')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            const escaped = content.replace(/\\?\{/g, '\\{').replace(/\\?\}/g, '\\}');
            if (escaped !== content) {
                fs.writeFileSync(fullPath, escaped, 'utf-8');
                console.log(`Escaped curly braces in ${fullPath}`);
            }
        }
    }
}

if (fs.existsSync(API_DOCS)) {
    const categoryJsonPath = path.join(API_DOCS, '_category_.json');
    fs.writeFileSync(categoryJsonPath, categoryJsonTemplate, 'utf-8');
    console.log('_category_.json created successfully!');
    escapeCurlyBracesInDir(API_DOCS);
}


