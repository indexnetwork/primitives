// ---------------------------------------------------------------------------
// Primitive Map – Single Source of Truth
// ---------------------------------------------------------------------------

export type Pillar = "Language" | "Money" | "Coordination";

export type Layer =
  | "Foundation"
  | "Context"
  | "Intent"
  | "Interaction"
  | "Trust"
  | "Value"
  | "Coordination"
  | "Agents";

export type Maturity =
  | "Theoretical"
  | "Experimental"
  | "Emerging"
  | "Growing"
  | "Established";

export interface Instantiation {
  name: string;
  approach?: string;
}

export interface Primitive {
  name: string;
  pillars: Pillar[];
  layer: Layer;
  layerLabel: string;
  definition: string;
  legacyEquivalent: string;
  formationRate: string;
  tamUnlocked: string;
  maturity: Maturity;
  instantiations: Instantiation[];
  composesWith: string[];
}

export interface LayerGroup {
  layer: Layer;
  label: string;
  subtitle: string;
  primitives: Primitive[];
}

// ---------------------------------------------------------------------------
// Layer 1 – Foundation (Who)
// ---------------------------------------------------------------------------

const foundationPrimitives: Primitive[] = [
  {
    name: "Identity",
    pillars: ["Language", "Coordination"],
    layer: "Foundation",
    layerLabel: "L1 — Foundation",
    definition: "Verifiable self in digital space",
    legacyEquivalent: "Usernames, emails, phone numbers, government ID",
    formationRate: "~3%",
    tamUnlocked: "$30B+",
    maturity: "Emerging",
    instantiations: [
      { name: "ENS" },
      { name: "Worldcoin" },
      { name: "SpruceID/DID" },
      { name: "Farcaster ID" },
      { name: "Lens Protocol" },
    ],
    composesWith: ["Credential", "Consent", "Reputation", "Agent"],
  },
  {
    name: "Credential / Claim",
    pillars: ["Language", "Coordination"],
    layer: "Foundation",
    layerLabel: "L1 — Foundation",
    definition: "Provable attribute attached to identity",
    legacyEquivalent: "Diplomas, certificates, licenses, resumes",
    formationRate: "<1%",
    tamUnlocked: "$15B+",
    maturity: "Experimental",
    instantiations: [
      { name: "EAS" },
      { name: "Veramo" },
      { name: "Disco.xyz" },
      { name: "Ceramic" },
      { name: "Hypercerts" },
    ],
    composesWith: ["Identity", "Attestation", "Reputation", "Intent", "Agreement"],
  },
  {
    name: "Attestation",
    pillars: ["Language", "Coordination"],
    layer: "Foundation",
    layerLabel: "L1 — Foundation",
    definition: "Third-party verification of a claim",
    legacyEquivalent: "Notarization, background checks, audits",
    formationRate: "<1%",
    tamUnlocked: "$10B+",
    maturity: "Experimental",
    instantiations: [
      { name: "EAS" },
      { name: "Sign Protocol" },
      { name: "Clique" },
      { name: "Gitcoin Passport" },
      { name: "Verax" },
    ],
    composesWith: ["Credential", "Identity", "Reputation", "Credibility"],
  },
  {
    name: "Consent",
    pillars: ["Language", "Coordination"],
    layer: "Foundation",
    layerLabel: "L1 — Foundation",
    definition: "Permission boundary for interaction",
    legacyEquivalent:
      "Terms of service, opt-ins, cookie banners, GDPR consent forms",
    formationRate: "<1%",
    tamUnlocked: "$5B+",
    maturity: "Experimental",
    instantiations: [
      { name: "XMTP", approach: "messaging consent" },
      { name: "Lit Protocol" },
      { name: "Index" },
      { name: "Sign Protocol" },
    ],
    composesWith: [
      "Identity",
      "Appropriateness",
      "Conversation",
      "Opportunity",
      "Agreement",
    ],
  },
];

// ---------------------------------------------------------------------------
// Layer 2 – Context (What You Know)
// ---------------------------------------------------------------------------

const contextPrimitives: Primitive[] = [
  {
    name: "Memory",
    pillars: ["Language"],
    layer: "Context",
    layerLabel: "L2 — Context",
    definition: "Persistent context across interactions",
    legacyEquivalent:
      "CRM records, browsing history, note-taking, customer data platforms",
    formationRate: "~2%",
    tamUnlocked: "$80B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Mem0" },
      { name: "Ceramic" },
      { name: "Index", approach: "agent memory" },
      { name: "LangMem" },
      { name: "Recall.ai" },
    ],
    composesWith: ["Knowledge", "Preference", "Intent", "Agent"],
  },
  {
    name: "Knowledge",
    pillars: ["Language"],
    layer: "Context",
    layerLabel: "L2 — Context",
    definition: "Shared information layer",
    legacyEquivalent: "Wikis, databases, documentation, encyclopedias",
    formationRate: "~5%",
    tamUnlocked: "$25B+",
    maturity: "Emerging",
    instantiations: [
      { name: "The Graph" },
      { name: "Ceramic" },
      { name: "IPFS/Filecoin" },
      { name: "Dune Analytics" },
      { name: "Golden" },
    ],
    composesWith: ["Memory", "Oracle", "Proof"],
  },
  {
    name: "Preference",
    pillars: ["Language"],
    layer: "Context",
    layerLabel: "L2 — Context",
    definition: "Declared or inferred user desires",
    legacyEquivalent:
      "User profiles, settings, cookies, recommendation engines",
    formationRate: "<1%",
    tamUnlocked: "$40B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Index" },
      { name: "Ceramic" },
      { name: "Lens" },
      { name: "Farcaster" },
    ],
    composesWith: ["Intent", "Memory", "Appropriateness", "Opportunity"],
  },
  {
    name: "Appropriateness",
    pillars: ["Language"],
    layer: "Context",
    layerLabel: "L2 — Context",
    definition: "Privacy norms governing information flow",
    legacyEquivalent:
      "Social norms, privacy policies, data protection regulations",
    formationRate: "<1%",
    tamUnlocked: "$15B+",
    maturity: "Theoretical",
    instantiations: [
      { name: "Index", approach: "contextual integrity" },
      { name: "Lit Protocol" },
      { name: "Oasis Network" },
      { name: "Nym" },
    ],
    composesWith: ["Consent", "Preference", "Opportunity", "Perception"],
  },
];

// ---------------------------------------------------------------------------
// Layer 3 – Intent (What You Want)
// ---------------------------------------------------------------------------

const intentPrimitives: Primitive[] = [
  {
    name: "Intent",
    pillars: ["Language"],
    layer: "Intent",
    layerLabel: "L3 — Intent",
    definition: "Explicit expression of a goal",
    legacyEquivalent: "Search queries, RFPs, want ads, classified listings",
    formationRate: "<1%",
    tamUnlocked: "$600B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Index" },
      { name: "ERC-7683" },
      { name: "Anoma" },
      { name: "Essential" },
      { name: "SUAVE", approach: "Flashbots" },
    ],
    composesWith: ["Opportunity", "Appropriateness", "Memory", "Preference"],
  },
  {
    name: "Opportunity",
    pillars: ["Language"],
    layer: "Intent",
    layerLabel: "L3 — Intent",
    definition:
      "Matched mutual intents that conform to contextual integrity",
    legacyEquivalent: "Ads, job boards, matchmaking, marketplace listings",
    formationRate: "<1%",
    tamUnlocked: "$500B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Index" },
      { name: "Braintrust" },
      { name: "XMTP" },
      { name: "Farcaster Frames" },
    ],
    composesWith: ["Intent", "Consent", "Conversation", "Offer / Bid"],
  },
  {
    name: "Offer / Bid",
    pillars: ["Money", "Language"],
    layer: "Intent",
    layerLabel: "L3 — Intent",
    definition: "Priced commitment to fulfill an intent",
    legacyEquivalent:
      "Price quotes, proposals, auction bids, RFP responses",
    formationRate: "~3%",
    tamUnlocked: "$20B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Seaport" },
      { name: "CoW Protocol" },
      { name: "Uniswap" },
      { name: "Request Network" },
    ],
    composesWith: ["Intent", "Opportunity", "Transaction", "Smart Contract"],
  },
  {
    name: "Priority",
    pillars: ["Coordination"],
    layer: "Intent",
    layerLabel: "L3 — Intent",
    definition: "Ranked ordering of intents or commitments",
    legacyEquivalent:
      "Roadmaps, triage systems, backlogs, priority queues",
    formationRate: "<1%",
    tamUnlocked: "$10B+",
    maturity: "Theoretical",
    instantiations: [
      { name: "Conviction Voting" },
      { name: "Coordinape" },
      { name: "Jokerace" },
    ],
    composesWith: ["Intent", "Decision", "Vote", "Commitment"],
  },
];

// ---------------------------------------------------------------------------
// Layer 4 – Interaction (What Happens)
// ---------------------------------------------------------------------------

const interactionPrimitives: Primitive[] = [
  {
    name: "Conversation",
    pillars: ["Language", "Coordination"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Structured exchange between parties",
    legacyEquivalent: "Phone calls, emails, meetings, chat",
    formationRate: "~5%",
    tamUnlocked: "$50B+",
    maturity: "Emerging",
    instantiations: [
      { name: "XMTP" },
      { name: "Matrix/Element" },
      { name: "Waku" },
      { name: "Farcaster" },
      { name: "Push Protocol" },
    ],
    composesWith: ["Intent", "Consent", "Transaction", "Decision"],
  },
  {
    name: "Transaction",
    pillars: ["Money"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Value transfer between parties",
    legacyEquivalent: "Wire transfers, card payments, invoices, checks",
    formationRate: "~2%",
    tamUnlocked: "$200B+",
    maturity: "Growing",
    instantiations: [
      { name: "USDC/USDT" },
      { name: "Lightning Network" },
      { name: "Solana Pay" },
      { name: "Circle" },
      { name: "Stripe", approach: "crypto" },
    ],
    composesWith: ["Token", "Smart Contract", "Conversation", "Offer / Bid"],
  },
  {
    name: "Decision",
    pillars: ["Language", "Coordination"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Recorded choice with rationale",
    legacyEquivalent:
      "Meeting minutes, approval workflows, board resolutions",
    formationRate: "<1%",
    tamUnlocked: "$8B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Snapshot" },
      { name: "Tally" },
      { name: "Index" },
      { name: "Boardroom" },
    ],
    composesWith: ["Vote", "Proposal", "Commitment", "Memory"],
  },
  {
    name: "Commitment",
    pillars: ["Coordination"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Binding promise between parties",
    legacyEquivalent: "Contracts, handshakes, SLAs, MOUs",
    formationRate: "~1%",
    tamUnlocked: "$50B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Smart contracts" },
      { name: "Allo Protocol" },
      { name: "Superfluid" },
      { name: "ERC-7683" },
    ],
    composesWith: ["Smart Contract", "Escrow", "Priority", "Decision", "Agreement"],
  },
  {
    name: "Smart Contract",
    pillars: ["Money", "Coordination"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Self-executing agreement",
    legacyEquivalent: "Legal contracts + lawyers + escrow agents",
    formationRate: "~2%",
    tamUnlocked: "$1T+",
    maturity: "Growing",
    instantiations: [
      { name: "Ethereum" },
      { name: "Solana" },
      { name: "Arbitrum/Base" },
      { name: "CosmWasm" },
      { name: "Stylus" },
    ],
    composesWith: [
      "Transaction",
      "Commitment",
      "Escrow",
      "DeFi",
      "Token",
    ],
  },
  {
    name: "Agreement",
    pillars: ["Language", "Coordination"],
    layer: "Interaction",
    layerLabel: "L4 — Interaction",
    definition: "Formalized binding arrangement between parties with verifiable execution",
    legacyEquivalent:
      "DocuSign, NDAs, service agreements, legal contracts, MOUs",
    formationRate: "<1%",
    tamUnlocked: "$50B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Agreements Protocol" },
      { name: "EthSign" },
      { name: "Allo Protocol" },
    ],
    composesWith: [
      "Commitment",
      "Smart Contract",
      "Intent",
      "Consent",
      "Identity",
      "Credential / Claim",
      "Escrow",
    ],
  },
];

// ---------------------------------------------------------------------------
// Layer 5 – Trust (What You've Earned)
// ---------------------------------------------------------------------------

const trustPrimitives: Primitive[] = [
  {
    name: "Reputation",
    pillars: ["Language", "Coordination"],
    layer: "Trust",
    layerLabel: "L5 — Trust",
    definition: "Aggregated trust signal",
    legacyEquivalent:
      "Credit scores, Yelp reviews, professional references",
    formationRate: "<1%",
    tamUnlocked: "$50B+",
    maturity: "Experimental",
    instantiations: [
      { name: "EAS" },
      { name: "Gitcoin Passport" },
      { name: "Index" },
      { name: "DegenScore" },
      { name: "Farcaster" },
    ],
    composesWith: [
      "Credential",
      "Attestation",
      "Endorsement",
      "Vouch",
      "Perception",
    ],
  },
  {
    name: "Endorsement",
    pillars: ["Language", "Coordination"],
    layer: "Trust",
    layerLabel: "L5 — Trust",
    definition: "Explicit positive signal about another party",
    legacyEquivalent:
      "LinkedIn endorsements, testimonials, recommendations",
    formationRate: "<1%",
    tamUnlocked: "$5B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Farcaster" },
      { name: "Lens" },
      { name: "EAS" },
      { name: "Index" },
      { name: "Coordinape" },
    ],
    composesWith: ["Reputation", "Credential", "Vouch", "Credibility"],
  },
  {
    name: "Vouch",
    pillars: ["Coordination"],
    layer: "Trust",
    layerLabel: "L5 — Trust",
    definition: "Stake-backed trust delegation",
    legacyEquivalent: "Personal references, guarantors, co-signers",
    formationRate: "<1%",
    tamUnlocked: "$10B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Union Protocol" },
      { name: "Ethereum", approach: "staking" },
      { name: "Eigenlayer" },
      { name: "WorldID" },
    ],
    composesWith: ["Reputation", "Endorsement", "Commitment", "Risk"],
  },
  {
    name: "Perception",
    pillars: ["Language"],
    layer: "Trust",
    layerLabel: "L5 — Trust",
    definition: "Agent-interpreted social behavior",
    legacyEquivalent:
      "Gossip, social judgment, word of mouth, gut feeling",
    formationRate: "<1%",
    tamUnlocked: "$20B+",
    maturity: "Theoretical",
    instantiations: [
      { name: "Index", approach: "agent perception" },
      { name: "Neynar" },
      { name: "Kaito" },
    ],
    composesWith: [
      "Reputation",
      "Appropriateness",
      "Memory",
      "Endorsement",
    ],
  },
  {
    name: "Credibility",
    pillars: ["Language", "Coordination"],
    layer: "Trust",
    layerLabel: "L5 — Trust",
    definition: "Demonstrated reliability over time",
    legacyEquivalent:
      "Track record, brand trust, certifications, tenure",
    formationRate: "<1%",
    tamUnlocked: "$15B+",
    maturity: "Theoretical",
    instantiations: [
      { name: "On-chain history" },
      { name: "Gitcoin Passport" },
      { name: "DegenScore" },
      { name: "EAS" },
    ],
    composesWith: ["Reputation", "Attestation", "Commitment", "Vouch"],
  },
];

// ---------------------------------------------------------------------------
// Layer 6 – Value (What Flows)
// ---------------------------------------------------------------------------

const valuePrimitives: Primitive[] = [
  {
    name: "Token",
    pillars: ["Money"],
    layer: "Value",
    layerLabel: "L6 — Value",
    definition: "Programmable unit of value",
    legacyEquivalent:
      "Currency, loyalty points, shares, bonds, gift cards",
    formationRate: "~5%",
    tamUnlocked: "$400T+",
    maturity: "Growing",
    instantiations: [
      { name: "ETH" },
      { name: "USDC/USDT" },
      { name: "Ondo" },
      { name: "BlackRock BUIDL" },
      { name: "Uniswap" },
    ],
    composesWith: [
      "Transaction",
      "Stream",
      "DeFi",
      "Smart Contract",
      "Escrow",
    ],
  },
  {
    name: "Stream",
    pillars: ["Money", "Coordination"],
    layer: "Value",
    layerLabel: "L6 — Value",
    definition: "Continuous value flow over time",
    legacyEquivalent:
      "Salaries, subscriptions, recurring payments, royalties",
    formationRate: "<1%",
    tamUnlocked: "$30B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Superfluid" },
      { name: "Sablier" },
      { name: "Drips" },
      { name: "LlamaPay" },
      { name: "Splits" },
    ],
    composesWith: ["Token", "Commitment", "Smart Contract", "Task"],
  },
  {
    name: "Escrow",
    pillars: ["Money", "Coordination"],
    layer: "Value",
    layerLabel: "L6 — Value",
    definition: "Conditionally held value",
    legacyEquivalent: "Escrow agents, holding accounts, trust accounts",
    formationRate: "~2%",
    tamUnlocked: "$15B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Smart contract escrow" },
      { name: "Kleros" },
      { name: "Allo Protocol" },
      { name: "Safe" },
    ],
    composesWith: [
      "Smart Contract",
      "Commitment",
      "Arbitration",
      "Transaction",
      "Agreement",
    ],
  },
  {
    name: "DeFi (Liquidity)",
    pillars: ["Money", "Coordination"],
    layer: "Value",
    layerLabel: "L6 — Value",
    definition: "Automated market infrastructure",
    legacyEquivalent: "Banks, stock exchanges, market makers, brokers",
    formationRate: "~1%",
    tamUnlocked: "$100B+",
    maturity: "Growing",
    instantiations: [
      { name: "Uniswap" },
      { name: "Aave" },
      { name: "MakerDAO" },
      { name: "Curve" },
      { name: "Compound" },
    ],
    composesWith: [
      "Token",
      "Smart Contract",
      "Transaction",
      "Risk",
      "Oracle",
    ],
  },
  {
    name: "Risk",
    pillars: ["Money", "Language"],
    layer: "Value",
    layerLabel: "L6 — Value",
    definition: "Quantified uncertainty as a tradeable primitive",
    legacyEquivalent:
      "Insurance, credit ratings, hedging instruments",
    formationRate: "<1%",
    tamUnlocked: "$100B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Nexus Mutual" },
      { name: "Etherisc" },
      { name: "Polymarket" },
      { name: "Opyn" },
    ],
    composesWith: [
      "DeFi (Liquidity)",
      "Prediction Market",
      "Vouch",
      "Token",
      "Credibility",
    ],
  },
];

// ---------------------------------------------------------------------------
// Layer 7 – Coordination (How You Organize)
// ---------------------------------------------------------------------------

const coordinationPrimitives: Primitive[] = [
  {
    name: "Vote",
    pillars: ["Coordination"],
    layer: "Coordination",
    layerLabel: "L7 — Coordination",
    definition: "Weighted preference expression",
    legacyEquivalent:
      "Ballots, shareholder proxy votes, board votes, polls",
    formationRate: "~2%",
    tamUnlocked: "$5B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Snapshot" },
      { name: "Tally" },
      { name: "Aragon" },
      { name: "Governor", approach: "OpenZeppelin" },
      { name: "Jokerace" },
    ],
    composesWith: ["Proposal", "Decision", "Delegation", "Token"],
  },
  {
    name: "Proposal",
    pillars: ["Language", "Coordination"],
    layer: "Coordination",
    layerLabel: "L7 — Coordination",
    definition: "Formal request for collective action",
    legacyEquivalent: "Bills, motions, RFCs, budget requests",
    formationRate: "<1%",
    tamUnlocked: "$3B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Snapshot" },
      { name: "Tally" },
      { name: "Nouns" },
      { name: "Compound Governor" },
      { name: "Moloch DAO" },
    ],
    composesWith: ["Vote", "Decision", "Commitment", "Treasury"],
  },
  {
    name: "Delegation",
    pillars: ["Coordination"],
    layer: "Coordination",
    layerLabel: "L7 — Coordination",
    definition: "Transferring authority to act on behalf",
    legacyEquivalent:
      "Power of attorney, representative democracy, proxies",
    formationRate: "<1%",
    tamUnlocked: "$5B+",
    maturity: "Emerging",
    instantiations: [
      { name: "ENS delegation" },
      { name: "Compound delegation" },
      { name: "Agora" },
      { name: "Karma" },
      { name: "AI agent delegation" },
    ],
    composesWith: ["Vote", "Agent", "Identity", "Commitment"],
  },
  {
    name: "Arbitration",
    pillars: ["Coordination"],
    layer: "Coordination",
    layerLabel: "L7 — Coordination",
    definition: "Dispute resolution mechanism",
    legacyEquivalent:
      "Courts, mediators, customer service, chargeback systems",
    formationRate: "<1%",
    tamUnlocked: "$20B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Kleros" },
      { name: "Aragon Court" },
      { name: "UMA" },
      { name: "Reality.eth" },
    ],
    composesWith: ["Smart Contract", "Escrow", "Decision", "Commitment", "Agreement"],
  },
  {
    name: "Prediction Market",
    pillars: ["Money", "Language"],
    layer: "Coordination",
    layerLabel: "L7 — Coordination",
    definition: "Collective intelligence through priced beliefs",
    legacyEquivalent:
      "Polls, analyst forecasts, futures markets, expert panels",
    formationRate: "~2%",
    tamUnlocked: "$30B+",
    maturity: "Growing",
    instantiations: [
      { name: "Polymarket" },
      { name: "Kalshi" },
      { name: "Augur" },
      { name: "Metaculus" },
      { name: "Manifold Markets" },
    ],
    composesWith: ["Risk", "Token", "Knowledge", "Decision", "Oracle"],
  },
];

// ---------------------------------------------------------------------------
// Layer 8 – Agents (Who Acts For You)
// ---------------------------------------------------------------------------

const agentsPrimitives: Primitive[] = [
  {
    name: "Agent",
    pillars: ["Language"],
    layer: "Agents",
    layerLabel: "L8 — Agents",
    definition: "Autonomous actor on behalf of a human",
    legacyEquivalent: "Employees, brokers, assistants, contractors",
    formationRate: "<1%",
    tamUnlocked: "$500B+",
    maturity: "Emerging",
    instantiations: [
      { name: "Index" },
      { name: "Autonolas" },
      { name: "Fetch.ai" },
      { name: "Virtuals Protocol" },
      { name: "Eliza", approach: "ai16z" },
    ],
    composesWith: ["Intent", "Memory", "Delegation", "Task", "Identity"],
  },
  {
    name: "Task",
    pillars: ["Language", "Money"],
    layer: "Agents",
    layerLabel: "L8 — Agents",
    definition: "Delegated unit of work with value attached",
    legacyEquivalent:
      "Job postings, work orders, gig assignments, tickets",
    formationRate: "<1%",
    tamUnlocked: "$100B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Braintrust" },
      { name: "Keep3r Network" },
      { name: "Gelato" },
      { name: "Human Protocol" },
    ],
    composesWith: ["Agent", "Commitment", "Stream", "Token", "Workflow"],
  },
  {
    name: "Oracle",
    pillars: ["Language", "Coordination"],
    layer: "Agents",
    layerLabel: "L8 — Agents",
    definition: "Verified external data source",
    legacyEquivalent:
      "Data providers, auditors, fact-checkers, news agencies",
    formationRate: "~5%",
    tamUnlocked: "$10B+",
    maturity: "Growing",
    instantiations: [
      { name: "Chainlink" },
      { name: "Pyth" },
      { name: "UMA" },
      { name: "API3" },
      { name: "Pragma" },
    ],
    composesWith: [
      "Knowledge",
      "DeFi (Liquidity)",
      "Prediction Market",
      "Smart Contract",
      "Decision",
    ],
  },
  {
    name: "Workflow",
    pillars: ["Language", "Coordination"],
    layer: "Agents",
    layerLabel: "L8 — Agents",
    definition: "Composed sequence of tasks and decisions",
    legacyEquivalent:
      "Business processes, assembly lines, SOPs, IFTTT/Zapier",
    formationRate: "~1%",
    tamUnlocked: "$15B+",
    maturity: "Experimental",
    instantiations: [
      { name: "Autonolas" },
      { name: "LangChain/LangGraph" },
      { name: "Safe" },
      { name: "Geist" },
    ],
    composesWith: ["Agent", "Task", "Decision", "Smart Contract", "Oracle"],
  },
];

// ---------------------------------------------------------------------------
// Assembled layer groups
// ---------------------------------------------------------------------------

export const LAYERS: LayerGroup[] = [
  {
    layer: "Foundation",
    label: "L1 — Foundation",
    subtitle: "Who",
    primitives: foundationPrimitives,
  },
  {
    layer: "Context",
    label: "L2 — Context",
    subtitle: "What You Know",
    primitives: contextPrimitives,
  },
  {
    layer: "Intent",
    label: "L3 — Intent",
    subtitle: "What You Want",
    primitives: intentPrimitives,
  },
  {
    layer: "Interaction",
    label: "L4 — Interaction",
    subtitle: "What Happens",
    primitives: interactionPrimitives,
  },
  {
    layer: "Trust",
    label: "L5 — Trust",
    subtitle: "What You've Earned",
    primitives: trustPrimitives,
  },
  {
    layer: "Value",
    label: "L6 — Value",
    subtitle: "What Flows",
    primitives: valuePrimitives,
  },
  {
    layer: "Coordination",
    label: "L7 — Coordination",
    subtitle: "How You Organize",
    primitives: coordinationPrimitives,
  },
  {
    layer: "Agents",
    label: "L8 — Agents",
    subtitle: "Who Acts For You",
    primitives: agentsPrimitives,
  },
];

// ---------------------------------------------------------------------------
// Derived helpers
// ---------------------------------------------------------------------------

export const ALL_PRIMITIVES: Primitive[] = LAYERS.flatMap(
  (l) => l.primitives,
);

export const SUMMARY_STATS = {
  totalPrimitives: 37,
  totalLayers: 8,
  avgFormationRate: "~1.5%",
  totalTAM: "~$2.6T+",
};
