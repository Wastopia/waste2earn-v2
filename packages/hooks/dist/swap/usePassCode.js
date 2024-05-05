var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from "react";
import { useCallsData } from "../useCallData";
import { swapFactory } from "@icpswap/actor";
import { resultFormat } from "@icpswap/utils";
import { Principal } from "@dfinity/principal";
export function getPassCode(principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapFactory()).getPasscodesByPrincipal(Principal.fromText(principal))).data;
    });
}
export function usePassCode(principal, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal)
            return undefined;
        return getPassCode(principal);
    }), [principal]), reload);
}
//# sourceMappingURL=usePassCode.js.map