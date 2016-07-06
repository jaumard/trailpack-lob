# trailpack-lob

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Trailpack to send physical mail with Lob API

## Install
With yo: 
```sh
$ yo trails:trailpack trailpack-lob
```

With npm:
```sh
$ npm install --save trailpack-lob
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-lob')
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/trailpack-lob.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-lob
[ci-image]: https://img.shields.io/travis//trailpack-lob/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-lob
[daviddm-image]: http://img.shields.io/david//trailpack-lob.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-lob
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-lob.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-lob

