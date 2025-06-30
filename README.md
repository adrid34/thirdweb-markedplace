# NFT Marketplace With Thirdweb

A modern, multi-chain NFT marketplace built with Next.js 14, Chakra UI, and the latest thirdweb SDK (v5). Seamlessly trade, browse, and manage NFTs across multiple EVM-compatible blockchains, supporting both ERC721 and ERC1155 collections.

---

## 🚀 Features

- **Multi-chain support:** Trade and browse NFTs on multiple EVM chains (Avalanche Fuji, Polygon Amoy, Sepolia, and more)
- **Multiple collections:** View, list, and manage NFTs from several collections
- **ERC721 & ERC1155:** Full support for both major NFT standards
- **Wallet integration:** Connect with MetaMask and other wallets via thirdweb
- **ENS support:** Display ENS names and avatars for user profiles
- **Responsive UI:** Beautiful, mobile-friendly interface with Chakra UI
- **Upcoming:** ERC20 currency selection for listings, English auctions UI

---

## 🛠️ Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [thirdweb SDK v5](https://portal.thirdweb.com/)
- [Chakra UI](https://chakra-ui.com/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/adrid34/thirdweb-markedplace.git
cd thirdweb-markedplace
```

### 2. Install dependencies
```bash
yarn install
# or
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root with the following:
```env
NEXT_PUBLIC_TW_CLIENT_ID=your_thirdweb_client_id
```
You can get a client ID from [thirdweb dashboard](https://thirdweb.com/dashboard).

### 4. Run the development server
```bash
yarn dev
# or
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
thirdweb-markedplace/
├── public/
│   ├── erc20-icons/
│   └── native-token-icons/
├── src/
│   ├── app/                # Next.js app directory (routing, pages)
│   ├── components/         # UI components (collection, profile, token, shared)
│   ├── consts/             # Constants (chains, contracts, tokens)
│   ├── extensions/         # Custom thirdweb extensions
│   ├── hooks/              # Custom React hooks
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

---

## 📝 Contributing

We welcome all contributions from the community!
- Found a bug or have suggestions? [Open an issue](https://github.com/thirdweb-example/marketplace-template/issues)
- Want to add a feature? Fork the repo and submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 