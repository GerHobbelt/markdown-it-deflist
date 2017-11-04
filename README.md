# markdown-it-deflist

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-deflist/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-deflist)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-deflist.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-deflist)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-deflist/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-deflist?branch=master)

> Definition list (`<dl>`) tag plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

__v2.+ requires `markdown-it` v5.+, see changelog.__

Syntax is based on [pandoc definition lists](http://johnmacfarlane.net/pandoc/README.html#definition-lists).


## Install

node.js, browser:

```bash
npm install @gerhobbelt/markdown-it-deflist --save
bower install @gerhobbelt/markdown-it-deflist --save
```

## Use

```js
var md = require('@gerhobbelt/markdown-it')()
            .use(require('@gerhobbelt/markdown-it-deflist'));

md.render(/*...*/);
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitDeflist`.


## License

[MIT](https://github.com/GerHobbelt/markdown-it-deflist/blob/master/LICENSE)
