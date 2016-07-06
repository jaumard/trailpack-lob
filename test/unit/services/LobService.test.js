'use strict'
/* global describe, it */
const assert = require('assert')

describe('LobService', () => {
  it('should exist', () => {
    assert(global.app.api.services['LobService'])
    assert(global.app.services['LobService'])
  })
})
