/* global describe it */

import {run} from '@syncano/test'
import {getFakeData} from './utils'

describe('add', function () {
  it('add with required only', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          create: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('add', {optionalsProbability: 0})

    const result = await run('add', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })

  it('add with optionals', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          create: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('add', {optionalsProbability: 1})

    const result = await run('add', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })
})
