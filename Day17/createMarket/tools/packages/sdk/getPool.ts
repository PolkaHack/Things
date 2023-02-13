import SDK, {util} from "@zeitgeistpm/sdk"

async function main(){
  // const ZTGNET = "wss://bsr.zeigeist.pm"
  // const ZTGNET = "wss://bp-rpc.zeitgeist.pm"
  const ZTGNET = "wss://127.0.0.1:9944"
  const sdk = await SDK.initialize(ZTGNET)
  const marketId = 8
  const filter = ["question","tags"]

  const market = await sdk.models.fetchMarketData(Number(marketId))

  console.log(market.getPool())
}

main()