'use strict'
/* global describe, it */
const assert = require('assert')
const fs = require('fs')

describe('LobService', () => {
  const to = {
    name: 'Joe Smith',
    address_line1: '123 Main Street',
    address_city: 'Mountain View',
    address_state: 'CA',
    address_zip: '94041'
  }

  const fileLetter = fs.readFileSync('./test/files/letter_template.pdf')
  const filePostcard = fs.readFileSync('./test/files/4x6_postcard_template.pdf')

  it('should exist', () => {
    assert(global.app.api.services['LobService'])
    assert(global.app.services['LobService'])
  })

  it('should send a letter based on HTML', () => {
    return global.app.services.LobService.sendLetter(to, '<html><head></head><body><h1>{{name}}</h1></body></html>',
      {name: 'test'}, {}).then(letter => {
        assert(letter)
        assert.equal(letter.object, 'letter')
      })
  })

  it('should send a letter based on PDF', () => {
    return global.app.services.LobService.sendLetter(to, fileLetter, {name: 'test'}, {}).then(letter => {
      assert(letter)
      assert.equal(letter.object, 'letter')
    })
  })

  it('should send a postcard based on HTML', () => {
    return global.app.services.LobService.sendPostcard(to, '<html><head></head><body><h1>{{name}}</h1></body></html>',
      '<html><head></head><body><h1>{{name}}</h1></body></html>',
      {name: 'test'}, {}).then(postcard => {
        assert(postcard)
        assert.equal(postcard.object, 'postcard')
      })
  })
  it('should send a postcard based on PDF', () => {
    return global.app.services.LobService.sendPostcard(to, filePostcard, filePostcard, {name: 'test'}, {}).then(postcard => {
      assert(postcard)
      assert.equal(postcard.object, 'postcard')
    })
  })
})
