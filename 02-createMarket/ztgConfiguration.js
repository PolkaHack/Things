 /*******************/
 /* Mock Data Input */
 /*******************/
/* ---None-- */

 /*******************/
 /* Mock Data Output */
 /*******************/
/* ---None-- */

 /****************************/
 /* Main Function Declartion */
 /****************************/
import * as dotenv from 'dotenv';
import {swapFeeFromFloat, ZTG} from "@zeitgeistpm/sdk";
dotenv.config()


export class ZtgConfiguration {
    static signerSeed;
    static defaultPoolAmount = ZTG.mul(100).toString();
    static defaultSwapFee = swapFeeFromFloat(1).toString();
    static defaultDurationHours = 24 * 14;
    static tags = ["Governance", "Crypto", "Kusama", "Polkasembly", "Futurarchy"];

    static {
        if (process.env.seed == null) {
            throw new Error("The signer seed needs to be set. Set the env variable 'seed' for it")
        }
        ZtgConfiguration.signerSeed = process.env.seed
    }
}

 /*************************/
 /* Main Function Calling */
 /*************************/
/* ---None-- */

 /**********/
 /* Export */
 /**********/
/* ---None-- */

