import SDK, { util } from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const sdk = await SDK.initialize(ZTGNET);
  const poolAmountOut = "4000000000000";
  const assetIn = "BGYES";
  const assetAmountIn = "8000000000000";
  const assetOut = "BGYES";
  const minAmountOut = "4000000000000";
  const maxPrice = "10000000000000";
  const poolId = 1;

  // Generate signer based on seed
  const seed = "";
  const signer = util.signerFromSeed(seed);
  console.log("Sending transaction from", signer.address);

  const pool = await sdk.models.fetchPoolData(Number(poolId));
  const res = await pool.swapExactAmountOut(
    signer,
    assetIn,
    assetAmountIn,
    assetOut,
    minAmountOut,
    maxPrice,
    false
  );

  console.log(res);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
