var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { swapPool } from "@w2e/actor";
import { resultFormat } from "@w2e/utils";
export function getSwapPoolMeta(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield swapPool(canisterId)).metadata();
        return resultFormat(result).data;
    });
}
//# sourceMappingURL=useSwapMetadata.js.map