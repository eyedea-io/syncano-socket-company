import * as S from '@eyedea/syncano'
import {Company} from './types'

interface Args extends Company {}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    let addressId = null
    if (args.address) {
      addressId = await data.address.create(args.address)
    }

    const companyProperties = Object.assign({}, args)
    delete companyProperties.address
    if (addressId) {
      companyProperties.address = addressId
    }

    delete companyProperties.address

    await data.company.create(companyProperties)
    response.json({}, 204)
  }
}

export default ctx => new Endpoint(ctx)
