'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: { },
    services: { }
  },
  config: {
    lob: {
      apiKey: 'test_8719ec89f1c14e7862714c39c2979fdc290',
      from: {
        name: 'Joe Smith from',
        address_line1: 'from 123 Main Street',
        address_city: 'Mountain View',
        address_state: 'CA',
        address_zip: '94041'
      }
    },
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('../')
      ]
    }
  }
}, smokesignals.FailsafeConfig)


