import * as S from '@eyedea/syncano'

interface Args {
  id: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    await data.company.delete(args.id)
    response('', 204)
  }
  endpointDidCatch({message}: Error) {
    this.syncano.response.json({message}, 400)
  }
}

export default ctx => new Endpoint(ctx)
