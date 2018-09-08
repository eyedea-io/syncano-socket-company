import * as S from '@eyedea/syncano'
import {Company} from './types'

interface Args extends Company {}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    await data.company.create(args)
    response.json({}, 204)
  }
}

export default ctx => new Endpoint(ctx)
