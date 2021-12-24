import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x0E5827afaA78887e7da2D3d5478c6046401b7C2b");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "New Block DAO Membership",
            description: "A DAO serving as a learning community for Web3.",
            image: readFileSync("scripts/assets/newblock.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );

        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );

    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})();