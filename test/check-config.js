// Sanity checks for this instance's config.js, run in CI with plain node (no dependencies).
const assert = require('assert');
const fs = require('fs');
const path = require('path');

global.window = {};
require(path.join(__dirname, '..', 'config.js'));
const c = window.SNORQL_CONFIG;

assert.ok(c, 'window.SNORQL_CONFIG is defined');
assert.strictEqual(c.endpoint, 'https://nanosafety.rdf.bigcat-bioinformatics.org/sparql');
assert.strictEqual(c.examplesRepo, 'https://github.com/h2020-riskgone/SPARQLQueries');
assert.strictEqual(c.examplesBranch, 'main');
assert.strictEqual(c.defaultGraph, 'http://nanosafety.org');
for (const p of ['obo', 'dcterms', 'rdfs', 'owl', 'wd', 'wdt', 'bao', 'aopo', 'sio', 'dc']) {
  assert.ok(c.namespaces[p], `namespace ${p} (used by the example queries) is defined`);
}

// Every local image referenced from config.js must be in images/.
const refs = [c.logo && c.logo.src, c.favicon].concat((c.footer || []).map((i) => i && i.image));
for (const ref of refs.filter((r) => typeof r === 'string' && r.startsWith('assets/images/'))) {
  const file = path.join(__dirname, '..', 'images', ref.slice('assets/images/'.length));
  assert.ok(fs.existsSync(file), `missing image ${ref}`);
}

// script.sh rewrites these keys line by line, so each must stay on one line.
const src = fs.readFileSync(path.join(__dirname, '..', 'config.js'), 'utf8');
for (const k of ['endpoint', 'examplesRepo', 'examplesBranch', 'defaultGraph', 'title', 'welcomeTitle', 'welcomeMessage', 'bitlyToken']) {
  assert.ok(new RegExp('^    ' + k + ': ".*",?$', 'm').test(src), `${k} is a single-line string`);
}

console.log('config.js OK');
