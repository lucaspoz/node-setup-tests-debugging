import '../src/types.js'
import assert from 'node:assert'
import { describe, it } from 'node:test'

import { parseUser } from '../src/service.js'

describe('service', () => {
  it('should parse user', () => {
    /** @type {IncomingUser} */
    const user = {
      name: 'john',
      email: 'john@doe.com',
      password: '123123',
    }

    const result = parseUser(user)
    assert.deepStrictEqual(result, {
      name: user.name.toUpperCase(),
      email: user.email,
    })
  })
})
