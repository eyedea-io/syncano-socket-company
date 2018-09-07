/* global describe it */
import {run} from '@syncano/test'

describe('delete', function () {
  it('delete existing', async () => {

    require('@syncano/core').__setMocks({
      data: {
        company: {
          delete: jest.fn().mockImplementationOnce(() => {
            return Promise.resolve()
          })
        }
      }
    })

    const result = await run('delete', {args: {id: 123}})
    expect(result).toHaveProperty('code', 204)
  })

  it('delete non-existing', async () => {

    const errorMessage = 'Object not found!'
    require('@syncano/core').__setMocks({
      data: {
        company: {
          delete: jest.fn().mockImplementationOnce(() => {
            return Promise.reject(new Error(errorMessage))
          })
        }
      }
    })

    const result = await run('delete', {args: {id: 123}})
    expect(result).toHaveProperty('code', 400)
    expect(result.data).toHaveProperty('message', errorMessage)
  })
})
