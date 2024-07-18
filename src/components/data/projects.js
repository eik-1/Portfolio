import {} from "lucide-react"

import { StoX, dBeats, TokenIndexer } from "../../assets/projects"

export const projects = [
    {
        id: 1,
        title: "StoX",
        des: "Tokenizing Stocks Using Chainlink",
        img: StoX,
        iconLists: [],
        link: "https://stox-tokenize.vercel.app",
        github: "https://github.com/eik-1/stox-foundry-contracts",
    },
    {
        id: 2,
        title: "dBeats",
        des: "NFT Marketplace For Music",
        img: dBeats,
        iconLists: [],
        link: "https://locs-nu.vercel.app",
        github: "https://locs-nu.vercel.app",
    },
    {
        id: 3,
        title: "Token Indexer",
        des: "App That Displays ERC-20 Token Balances",
        img: TokenIndexer,
        iconLists: [],
        link: "https://token-indexer-iota.vercel.app",
        github: "https://github.com/eik-1/Token-Indexer",
    },
]
