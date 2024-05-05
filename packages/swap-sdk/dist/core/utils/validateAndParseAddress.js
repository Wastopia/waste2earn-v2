import { isValidPrincipal } from "@icpswap/utils";
/**
 * Validates an address and returns the address
 * @param address the principal address
 */
export function validateAndParseAddress(address) {
    if (isValidPrincipal(address))
        return address;
    throw new Error(`${address} is not a valid address.`);
}
//# sourceMappingURL=validateAndParseAddress.js.map