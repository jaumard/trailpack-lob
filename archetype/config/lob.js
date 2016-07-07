'use strict'

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
