import { ClaimConditionFactory } from "@3rdweb/sdk";
import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0x4e8a940D6cA3C92d2048Fc8A1b9CE6a0FE01E383"
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()