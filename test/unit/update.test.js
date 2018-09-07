/* global describe it */

import {run} from '@syncano/test'
import {getFakeData} from './utils'

describe('update', function () {
  it('update existing', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          find: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({id: 123, address: 345})
          }),
          update: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('update', {optionalsProbability: 0})
    delete fakeArgs.address

    const result = await run('update', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })

  it('add with address', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          find: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({id: 123, address: 345})
          }),
          update: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        },
        address: {
          update: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
              id: 123
            })
          })
        }
      }
    })

    // Generate fake args
    const fakeArgs = await getFakeData('update', {optionalsProbability: 1})

    const result = await run('update', {args: fakeArgs})
    expect(result).toHaveProperty('code', 204)
  })
})
