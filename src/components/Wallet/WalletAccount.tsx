import { useContext, useMemo, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { formatDollarAmount } from "@w2e/utils";
import { Trans } from "@lingui/macro";
import { useSuccessTip } from "hooks/useTips";
import { useICPPrice } from "hooks/useUSDPrice";
import { ReactComponent as CopyIcon } from "assets/icons/Copy.svg";
import Copy, { CopyRef } from "components/Copy";
import { ReactComponent as RefreshIcon } from "assets/icons/refresh.svg";
import WalletContext from "./context";

export interface AddressWrapperProps {
  address: string | undefined;
  label: string;
}

export function AddressWrapper({ address, label }: AddressWrapperProps) {
  const copyRef = useRef<CopyRef>(null);

  const handleCopy = () => {
    if (copyRef) {
      copyRef?.current?.copy();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "286px",
        borderRadius: "8px",
        padding: "5px",
        border: "1px solid #29314F",
        height: "fit-content",
        "@media(max-width: 640px)": {
          maxWidth: "100%",
        },
      }}
    >
      <Box
        sx={{
          width: "70px",
          height: "20px",
          borderRadius: "30px",
          background: "#29314F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "12px", transform: "scale(0.9)" }}>{label}</Typography>
      </Box>

      <Box sx={{ margin: "8px 0 0 0", wordBreak: "break-all" }}>
        <Typography
          sx={{ fontSize: "10px", whiteSpace: "break-spaces", cursor: "pointer", userSelect: "none" }}
          component="span"
          onClick={handleCopy}
        >
          {address}
        </Typography>
        <Box component="span" sx={{ cursor: "pointer", margin: "0 0 0 4px", color: "#5669DC" }} onClick={handleCopy}>
          <CopyIcon />
        </Box>
      </Box>

      <Copy content={address ?? ""} hide ref={copyRef} />
    </Box>
  );
}

export default function WalletAccount() {
  const icpPrice = useICPPrice();

  const [openSuccessTip] = useSuccessTip();

  const {
    refreshTotalBalance,
    setRefreshTotalBalance,
    refreshCounter,
    setRefreshCounter,
    totalValue,
    totalUSDBeforeChange,
  } = useContext(WalletContext);

  const useTotalICPValue = useMemo(() => {
    if (icpPrice) return totalValue.dividedBy(icpPrice);
    return undefined;
  }, [totalValue, icpPrice]);

  const usdChange = useMemo(() => {
    if (totalValue.isEqualTo(0) || totalUSDBeforeChange.isEqualTo(0)) return undefined;
    return `${totalValue.minus(totalUSDBeforeChange).dividedBy(totalUSDBeforeChange).multipliedBy(100).toFixed(2)}%`;
  }, [totalUSDBeforeChange, totalValue]);

  const usdChangeType = usdChange && usdChange.includes("-") ? "down" : "up";
  const USDChangeColor = usdChangeType === "up" ? "#54C081" : "#D3625B";

  const handleRefreshBalance = () => {
    if (setRefreshTotalBalance) setRefreshTotalBalance(!refreshTotalBalance);
    setRefreshCounter(refreshCounter + 1);
    openSuccessTip("Refresh Success");
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0 30px 0",
        borderBottom: "1px solid #29314F",
        "@media(max-width: 286px)": {
          gap: "20px 0",
        },
      }}
    >
      <Box sx={{ paddingBottom: "10px" }}>
        <Box sx={{ display: "flex", gap: "0 8px", alignItems: "center" }}>
          <Typography sx={{ width: "100%", "@media(max-width: 640px)": { textAlign: "center" } }}>
            <Trans>Wallet Balance</Trans>
          </Typography>

          <RefreshIcon style={{ cursor: "pointer" }} onClick={handleRefreshBalance} />
        </Box>

        <Box sx={{ margin: "10px 0 0 0" }}>
          <Typography component="span" sx={{ fontSize: "32px", fontWeight: 600 }} color="text.primary">
            ≈{formatDollarAmount(totalValue.toString(), 2)}
            {/* {totalValue && ( // Conditionally render Peso amount
              <>
                &nbsp;/&nbsp;
                ≈{formatPesoAmount(totalValue.toString(), 2)}
              </>
            )} */}
          </Typography>
        </Box>

        <Box sx={{ margin: "6px 0 0 0", display: "flex", gap: "0 8px" }}>
          <Typography>≈{useTotalICPValue ? useTotalICPValue.toFormat(4) : 0}&nbsp;ICP</Typography>
          <Typography sx={{ color: USDChangeColor }} component="span">
            {usdChange ? `${usdChangeType === "down" ? "" : "+"}${usdChange}` : "--"}
          </Typography>
        </Box>
      </Box>

      <Grid container justifyContent="center" sx={{ gap: "5px" }}>
        <Typography sx={{
          width: "100%",
          "@media(max-width: 640px)": { textAlign: "center" }
        }}>Add our Canister Token under ICRC-2
        </Typography>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="n6j6v-cqaaa-aaaam-acjma-cai"
            label="W2E"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="mbbnc-biaaa-aaaam-acjiq-cai"
            label="wPlastic"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="mpdak-2yaaa-aaaam-acjjq-cai"
            label="wPaper"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="mug4p-aaaaa-aaaam-acjla-cai"
            label="wOrganic"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="m2erh-3qaaa-aaaam-acjka-cai"
            label="wMetal"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="m5fxt-wiaaa-aaaam-acjkq-cai"
            label="wGlass"
          />
        </Box>
        <Box
          sx={{
            minWidth: "100px",
          }}
        >
          <AddressWrapper
            address="mth23-nyaaa-aaaam-acjlq-cai"
            label="eWaste"
          />
        </Box>
      </Grid>

    </Box>
  );
}
