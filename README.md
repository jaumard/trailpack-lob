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

```js
// config/lob.js
module.exports = {
  apiKey: 'Your API key',
  /**
   * Options to pass during lob initialisation
   * @see https://github.com/lob/lob-node#options
   */
  options: {},

  /**
   * From address used to send letters
   * Can be an object or an ID
   */
  from: {
    name: 'Person',
    address_line1: '123 Test',
    address_line2: 'Unit 200',
    address_city: 'Chicago',
    address_state: 'IL',
    address_zip: '60012',
    address_country: 'US'
  }
}
```

## Usage
Native usage of lob API : 
```
  this.app.packs.lob.api.letters.create({
     description: 'My First Letter',
     to: {
        name: 'Test Person',
        address_line1: '123 Test Street',
        address_line2: 'Unit 200',
        address_city: 'Chicago',
        address_state: 'IL',
        address_zip: '60012',
        address_country: 'US'
      },
     from: {
       name: 'Test Person',
       address_line1: '123 Test Street',
       address_line2: 'Unit 200',
       address_city: 'Chicago',
       address_state: 'IL',
       address_zip: '60012',
       address_country: 'US'
     },
     file: '<html>...</html>',
     data: {
       name: 'Robin'
     },
     color: false
   }).then(letter => {...})
```

Usage with the Trails service: 
```
this.app.services.LobService.sendLetter(to, file, data, more).then(letter => {...}) 

this.app.services.LobService.sendPostcard(to, front, back, data, more).then(postcard => {...}) 
```


## License
[MIT](https://github.com/jaumard/trailpack-lob/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-lob.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-lob
[ci-image]: https://img.shields.io/travis//trailpack-lob/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-lob
[daviddm-image]: http://img.shields.io/david//trailpack-lob.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-lob
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-lob.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-lob

