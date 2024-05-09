# Waste2Earn Pay

Waste2Earn Pay is a dapp to demonstrate a real world use case under ICRC2 on the Internet Computer. It is a simple Payment app that allows users to accept $wPl (waste plastic), $wPr (waste Paper), $wM (waste metal), $wG (waste glass), $wOx (organic waste), $eW (electronic waste) and $W2E (waste2earn for governance token)

Created Canister ID:
wPl - mbbnc-biaaa-aaaam-acjiq-cai
wPr - mpdak-2yaaa-aaaam-acjjq-cai
wM - m2erh-3qaaa-aaaam-acjka-cai
wG - m5fxt-wiaaa-aaaam-acjkq-cai
wOx - mug4p-aaaaa-aaaam-acjla-cai
eW - mth23-nyaaa-aaaam-acjlq-cai
W2E - n6j6v-cqaaa-aaaam-acjma-cai

## Features

- **Create Profile**: Users logs in with their Internet Identity and configure the store with a name and other settings.
- **Charge customer**: Users can charge a customer by entering an amount. This will generate and display a QR code for the customer to scan and pay. QR code follows the [ICRC-2](https://github.com/dfinity/ICRC/issues/22) standard.
- **Send tokens**: Users can send ckBTC tokens to other users.
- **Receive notifications**: Users can choose to receive notifications by email or SMS when a payment is received. This uses the [HTTP Outcall](https://internetcomputer.org/docs/current/developer-docs/integrations/https-outcalls/) feature of the Internet Computer.
- **Transaction history**: Users can view a list of transactions made to the store.

## Try it!

W2E Pay is trial deployed on the Internet Computer. You can try it out here:

## Architecture

### Backend

In addition to the public methods, the canister uses a [timer](https://internetcomputer.org/docs/current/motoko/main/timers/) to monitor ledger transactions. When a new transaction is found that matches a configured store – depending on the store settings – the canister will send a notification either by email or SMS.

### Frontend

The frontend is written in Typescript/React. Users authenticate using the Internet Identity to access their store. The first time a user logs in, a store is created for them.

The frontend interacts with the following IC canisters:

# Local deployment

## Prerequisites

- [x] Install the [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/index.mdx).
- [x] Install [Node.js](https://nodejs.org/en/).

### Step 1: Start a local instance of the Internet Computer

```bash
npm run dfx_install
```

```bash
dfx start --clean --background
```

### Step 2: Deploy the Internet Identity canister

Integration with the [Internet Identity](https://internetcomputer.org/internet-identity/) allows store owners to securely setup and manage their store. The Internet Identity canister is already deployed on the IC mainnet. For local development, you need to deploy it to your local instance of the IC.

```bash
dfx deploy --network local internet_identity
```

### Step 3: Save current principal as a variable

The principal will be used when deploying the ledger canister.

```bash
export OWNER=$(dfx identity get-principal)
```

### Step 4: Deploy the index canister

The index canister syncs the ledger transactions and indexes them by account.

```bash
dfx deploy --network local icrc1_index --argument '
  record {
   ledger_id = (principal "n6j6v-cqaaa-aaaam-acjma-cai");
  }
'
```

### Step 5: Deploy the icpos canister

The icpos canister manages the store configuration and sends notifications when a payment is received.

The `--argument '(0)'` argument is used to initialize the canister with `startBlock` set to 0. This is used to tell the canister to start monitoring the ledger from block 0. When deploying to the IC mainnet, this should be set to the current block height to prevent the canister from processing old transactions.

```bash
dfx deploy --network local icpos --argument '(0)'
```

### Step 6: Configure the icpos canister

ic-pos uses [Courier](https://courier.com/) to send email and SMS notifications. If you want to enable notifications, you need to sign up for a Courier account and and create and API key. Then issue the following command:

```bash
dfx canister --network local call icpos setCourierApiKey "pk_prod_..."
```

### Step 7: Build and run the frontend

Run npm to install dependencies and start the frontend. The frontend will be available at http://localhost:5173.

```bash
npm install
npm run dev
```

Why don't we deploy the frontend as a local canister? Vite uses lazy loading of modules. This does not work when deploying to a local canister. When deploying to the IC mainnet, this is not an issue. Also, running using `npm run dev` allows for hot reloading of the frontend code when making changes.

### Step 8: Make a transfer!

Now that everything is up and running, you can make a transfer to your newly created store.

Transfers made from the owner principal will not trigger notifications in the UI since they are regarded as `mint` transactions. To test notifications, you need to make a transfer from another principal.

The easiest way to do this is to create two stores using two different Internet Identity accounts, using two different web browsers. Then, transfer some tokens from one store to the other.

#### 8.1: Create the first store and supply it with some tokens

Log in to the frontend using the Internet Identity. Configure the store and navigate to the `Receive` page. Click on the principal pill to copy the address to your clipboard. Then, using the `dfx` command, mint some tokens from your owner principal to the store principal.

```bash
dfx canister --network local call icrc1_ledger icrc1_transfer '
  (record {
    to=(record {
      owner=(principal "[STORE PRINCIPAL 1 HERE]")
    });
    amount=100_000
  })
'
```

#### 8.2: Create the second store

Log in to the frontend using **a new Internet Identity on another web browser**. Configure the store and navigate to the `Receive` page. Click on the principal pill to copy the address to your clipboard.

Now, go back to the first browser/store, navigate to the `Send` page and transfer some tokens to the second store.

If everything is working, you should see a notification in the second store.

🎉

## Possible Improvements

- Login state is not persisted. Reloading the app will log the user out. This should be done using `localStorage` or `sessionStorage`.
- Show more information about transactions. A transaction detail page.
- Show a confirmation dialog after user clicks on `Send` button.

## Known issues

-

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

- [edmhok](mailto:waste2earn.io@gmail.com)
- Twitter: [@waste2earn](https://twitter.com/waste2earn)
- Discord: waste2earn

## License

[MIT](LICENSE)
