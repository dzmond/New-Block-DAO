import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x0E5827afaA78887e7da2D3d5478c6046401b7C2b");

(async () => {
    try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
        // What's your token's name? Ex. "Ethereum"
        name: "New Block Governance Token",
        // What's your token's symbol? Ex. "ETH"
        symbol: "NEWB",
      });
      console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address,
      );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();