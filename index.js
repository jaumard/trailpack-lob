'use strict'

const Trailpack = require('trailpack')
const lob = require('lob')

module.exports = class LobTrailpack extends Trailpack {

  /**
   * Validate lob config
   */
  validate () {
    if (!this.app.config.lob) {
      return Promise.reject(
        new Error('config.lob is absent, check it\'s present and loaded under index.js'))
    }
  }

  /**
   * Initialize lob with API key
   */
  initialize () {
    this.lob = lob(this.app.config.lob.apiKey)
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

