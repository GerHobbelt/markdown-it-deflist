
/* eslint-env mocha, es6 */

let path     = require('path');
let generate = require('@gerhobbelt/markdown-it-testgen');


describe('markdown-it-deflist', function () {
  let md = require('@gerhobbelt/markdown-it')()
              .use(require('../'));

  generate(path.join(__dirname, 'fixtures/deflist.txt'), md);
});
