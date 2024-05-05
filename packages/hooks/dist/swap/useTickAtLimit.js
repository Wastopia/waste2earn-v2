import { useMemo } from "react";
import { nearestUsableTick, TickMath, TICK_SPACINGS } from "@icpswap/swap-sdk";
import { Bound } from "@icpswap/constants";
export function useTickAtLimit(feeAmount, tickLower, tickUpper) {
    return useMemo(() => ({
        [Bound.LOWER]: feeAmount && tickLower
            ? tickLower === nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount])
            : undefined,
        [Bound.UPPER]: feeAmount && tickUpper
            ? tickUpper === nearestUsableTick(TickMath.MAX_TICK, TICK_SPACINGS[feeAmount])
            : undefined,
    }), [feeAmount, tickLower, tickUpper]);
}
//# sourceMappingURL=useTickAtLimit.js.map