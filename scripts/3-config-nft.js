import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x4e8a940D6cA3C92d2048Fc8A1b9CE6a0FE01E383"
);

(async () => {
    try {
      await bundleDrop.createBatch([
        {
          name: "New Block Card",
          description: "This NFT will give you access to New Block DAO",
          image: readFileSync("scripts/assets/newblock.png"),
        },
      ]);
      console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
      console.error("failed to create the new NFT", error);
    }
  })()
