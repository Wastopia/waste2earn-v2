# Waste2Earn

Waste2Earn is a decentralized apps to demonstrate a real world use case under ICRC2 on the Internet Computer ICP. It has token exchange, liquidity, wallet, wallet open to all app that allows users to accept $wPl (waste plastic), $wPr (waste Paper), $wM (waste metal), $wG (waste glass), $wOx (organic waste), $eW (electronic waste) and $W2E (waste2earn for governance token) under icpex.org using Controller id :

Created Canister ID ICRC-2 token :
wPl - mbbnc-biaaa-aaaam-acjiq-cai
wPr - mpdak-2yaaa-aaaam-acjjq-cai
wM - m2erh-3qaaa-aaaam-acjka-cai
wG - m5fxt-wiaaa-aaaam-acjkq-cai
wOx - mug4p-aaaaa-aaaam-acjla-cai
eW - mth23-nyaaa-aaaam-acjlq-cai
W2E - n6j6v-cqaaa-aaaam-acjma-cai

## Features included

- Tokens are ICRC-2 based
- Exchange and Liquidity for Token and also has Import Token
- Wallet Integration includes :
  SEND (QR Scanner and Weight)
  RECEIVE (QR generated)
  TRANSACTION (ICP explorer)
- Airdrop Token Claim - For Maintenance

## Features Improvement

- NFT -
- Voting
- Creating a RER DAO token under EXT standard token

## Architecture

The configuration is based in CRACO React JS, pnpm, typescript, lingui. With package for actor, candid, swap-sdk, token-adapter, types, tokens (EXT, ICRC1,ICRC2, DIP20). It has tracing using Sentry for issues.

### Interface to the ICP Blockchain

ICPex.org is our No-code Token Creation using ICRC-2
Token initial Supply :
wPlastic - 10M Burnable
wPaper - 50M
wMetal - 50M
wGlass - 50M
wOrganic - 50M
eWaste - 100M
W2E - 51M

### Frontend

The frontend is written in Typescript/React under src folder

### Backend

RER Token will be on EXT standard token using Motoko for improvement.
Under packages folder using typescript.

# Local deployment

```bash
pnpm i
```

```bash
pnpm run dev
```

## Prerequisites

- [x] Install the [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/index.mdx).
- [x] Install [Node.js](https://nodejs.org/en/).

## Known issues

- QR Scanning sometimes do not respond quickly. But Sending to the blockchain responds quickly.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

- [Email](mailto:hello@waste2earn.xyz)
- Twitter: [@waste2earn](https://twitter.com/waste2earn)
- Discord: [@waste2earn](https://discord.com/invite/GbnNzjQe)
- Telegram :[Mhok Serob] (https://t.me/waste2earn)
- Medium : [Ed Create](https://medium.com/@waste2earn.io)
- Gitbook : [Documentation](https://waste2earn.gitbook.io/waste2earn-documentation)
- Github : [Wastopia](https://github.com/Wastopia/waste2earn-v2)
- Form : [for Whitelisting] (https://forms.gle/A7NUvs66g8NiBTYQ8)

## License

[MIT](LICENSE)
