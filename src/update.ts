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
    const params = Object.assign({}, args)
    delete params.id

    const updatedCompany = await data.company.update(args.id)
    response.json(updatedCompany, 204)
  }
}

export default ctx => new Endpoint(ctx)
