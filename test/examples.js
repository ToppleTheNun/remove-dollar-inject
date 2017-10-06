const eol = require('eol');
const fs = require('fs');
const path = require('path');

// Get all of the paths that we need for testing purposes
const examplePreJsEs5Path = path.join(__dirname, '../test/example-pre-es5.js');
const examplePostJsEs5Path = path.join(
  __dirname,
  '../test/example-post-es5.js'
);
const exampleIifePreJsEs5Path = path.join(
  __dirname,
  '../test/iife-example-pre-es5.js'
);
const exampleIifePostJsEs5Path = path.join(
  __dirname,
  '../test/iife-example-post-es5.js'
);
const examplePreJsEs6Path = path.join(__dirname, '../test/example-pre-es6.js');
const examplePostJsEs6Path = path.join(
  __dirname,
  '../test/example-post-es6.js'
);
const exampleIifePreJsEs6Path = path.join(
  __dirname,
  '../test/iife-example-pre-es6.js'
);
const exampleIifePostJsEs6Path = path.join(
  __dirname,
  '../test/iife-example-post-es6.js'
);

// Read all of the examples to strings
// Use eol in order to eliminate issues caused by line endings
const examplePreJsEs5String = eol.auto(
  fs
    .readFileSync(examplePreJsEs5Path, {
      encoding: 'utf8'
    })
    .trim()
);
const examplePostJsEs5String = eol.auto(
  fs
    .readFileSync(examplePostJsEs5Path, {
      encoding: 'utf8'
    })
    .trim()
);
const exampleIifePreJsEs5String = eol.auto(
  fs
    .readFileSync(exampleIifePreJsEs5Path, {
      encoding: 'utf8'
    })
    .trim()
);
const exampleIifePostJsEs5String = eol.auto(
  fs
    .readFileSync(exampleIifePostJsEs5Path, {
      encoding: 'utf8'
    })
    .trim()
);
const examplePreJsEs6String = eol.auto(
  fs
    .readFileSync(examplePreJsEs6Path, {
      encoding: 'utf8'
    })
    .trim()
);
const examplePostJsEs6String = eol.auto(
  fs
    .readFileSync(examplePostJsEs6Path, {
      encoding: 'utf8'
    })
    .trim()
);
const exampleIifePreJsEs6String = eol.auto(
  fs
    .readFileSync(exampleIifePreJsEs6Path, {
      encoding: 'utf8'
    })
    .trim()
);
const exampleIifePostJsEs6String = eol.auto(
  fs
    .readFileSync(exampleIifePostJsEs6Path, {
      encoding: 'utf8'
    })
    .trim()
);

export {
  examplePreJsEs5String,
  examplePostJsEs5String,
  exampleIifePreJsEs5String,
  exampleIifePostJsEs5String,
  examplePreJsEs6String,
  examplePostJsEs6String,
  exampleIifePreJsEs6String,
  exampleIifePostJsEs6String
};
