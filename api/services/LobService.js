'use strict'

const Service = require('trails-service')
const _ = require('lodash')

/**
 * @module LobService
 * @description Lob services
 */
module.exports = class LobService extends Service {
  sendLetter(to, file, data, more) {
    return this.app.packs.Lob.lob.letters.create(_.merge({
      to: to,
      from: this.app.config.lob.from,
      file: file,
      data: data,
      color: false
    }, more))
  }
}

