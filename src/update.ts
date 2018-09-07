import * as S from '@eyedea/syncano'
import {Company} from './types'

interface Args extends Company {
  id: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    const company = await data.company.find(args.id)

    let addressId = null
    if (args.address) {
      addressId = await data.address.update(company.address, args.address)
    }

    const companyProperties = Object.assign({}, args)
    delete companyProperties.address
    if (addressId) {
      companyProperties.address = addressId
    }
    delete companyProperties.address

    const updatedCompany = await data.company.update(companyProperties)
    response.json(updatedCompany, 204)
  }
}

export default ctx => new Endpoint(ctx)
