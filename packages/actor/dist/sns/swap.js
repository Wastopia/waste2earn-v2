var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SNS_SWAP_INTERFACE_FACTORY } from "@icpswap/candid";
import { actor } from "../actor";
export const sns_swap = (canisterId, identity) => __awaiter(void 0, void 0, void 0, function* () {
    return actor.create({
        canisterId,
        idlFactory: SNS_SWAP_INTERFACE_FACTORY,
        identity,
    });
});
//# sourceMappingURL=swap.js.map