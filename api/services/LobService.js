'use strict'

const Service = require('trails-service')
const _ = require('lodash')

/**
 * @module LobService
 * @description Lob services
 */
module.exports = class LobService extends Service {
  /**
   * Send a letter
   * @param to address to send the letter
   * @param file template
   * @param data to use to fill template
   * @param more object with all other lob option you want to set
   * @returns Promise
   */
  sendLetter(to, file, data, more) {
    return this.app.packs.Lob.api.letters.create(_.merge({
      to: to,
      from: this.app.config.lob.from,
      file: file,
      data: data,
      color: false
    }, more))
  }

  /**
   * Send a post card
   * @param to address to send the post card
   * @param front template
   * @param back template
   * @param data to use to fill templates
   * @param more object with all other lob option you want to set
   * @returns Promise
   */
  sendPostcard(to, front, back, data, more) {
    return this.app.packs.Lob.api.postcards.create(_.merge({
      to: to,
      front: front,
      back: back,
      data: data
    }, more))
  }
}

