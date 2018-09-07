/* global describe it */

import {run} from '@syncano/test'
import {getFakeData} from './utils'

describe('add', function () {
  it('add without address', async () => {

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
    delete fakeArgs.address

    const result = await run('add', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })

  it('add with address', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          create: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        },
        address: {
          create: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
              id: 123
            })
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
