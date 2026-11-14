// ---------------------------------------------------------------------------
// Primitive Map v2 – Grammar
//
// v2 does not copy v1's entries. It loads ../data.js and overlays a
// classification keyed by primitive name, so definitions, instantiations and
// estimates stay in one place. Everything in this file is a hypothesis about
// structure. It adds no figures and no sources.
// ---------------------------------------------------------------------------

const V2_META = {
  lastRevised: "2026-11-14",
};

// The five kinds, plus a bucket for entries that are not a kind at all.
const KINDS = [
  { id: "Party", label: "Parties", gloss: "Who can bear the rest" },
  { id: "Attitude", label: "Attitudes", gloss: "Private states of one party" },
  { id: "Act", label: "Acts", gloss: "Utterances that make an attitude public and change something" },
  { id: "Position", label: "Positions", gloss: "Who now owes or may claim what" },
  { id: "Record", label: "Records", gloss: "Evidence that acts happened" },
  { id: "Composite", label: "Composites", gloss: "Not a kind: sequences and machines assembled from the five" },
];

const OPERATORS = [
  { id: "Aggregate", gloss: "Many parties' instances pooled into one" },
  { id: "Stake", gloss: "Value attached, lost if the statement fails" },
  { id: "Condition", gloss: "If-then, or over time" },
  { id: "Delegate", gloss: "On behalf of another party" },
  { id: "Scope", gloss: "Who the statement is for" },
];

// How an entry relates to the grammar.
const BASES = [
  { id: "Generator", gloss: "A base term. Not derived from anything else on the map." },
  { id: "Variant", gloss: "A near-form of a generator, or a generator seen from another side." },
  { id: "Derived", gloss: "An operator applied to a generator." },
  { id: "Composite", gloss: "A sequence or machine built from several entries." },
];

// The reliance tuple.
const SLOTS = [
  { id: "A", phrase: "A", gloss: "The party relied on, and the evidence about them." },
  { id: "B", phrase: "B", gloss: "The party who relies, and their private estimate of A." },
  { id: "X", phrase: "X", gloss: "What is relied on: the want it answers, the ability behind it, the evidence for it, and its performance." },
  { id: "F", phrase: "force F", gloss: "How the statement binds: assert, direct, commit or declare." },
  { id: "S", phrase: "audience S", gloss: "Who the statement is for, and what they mutually know." },
  { id: "V", phrase: "stake V", gloss: "What is lost if the reliance fails." },
  { id: "T", phrase: "T", gloss: "Until when, and on what condition. Time is implicit across v1 and named nowhere." },
];

// The loop. Phases follow the request, promise, perform, accept cycle.
const LOOP = [
  { phase: "Request", stages: ["Preference", "Intent", "Offer / Bid"] },
  { phase: "Promise", stages: ["Negotiation", "Agreement", "Commitment"] },
  { phase: "Perform", stages: ["Transaction"] },
  { phase: "Accept", stages: ["Attestation", "Reputation", "Trust"] },
];
const LOOP_GATE = "Opportunity";

// ---------------------------------------------------------------------------
// Classification of the 41 v1 entries, keyed by v1 name.
//   kind   one of KINDS
//   basis  one of BASES
//   ops    operators applied
//   form   the derivation, written as an expression
//   slots  which slots of the reliance tuple it fills
// ---------------------------------------------------------------------------
const CLASSIFICATION = {
  // Parties
  "Identity": {
    kind: "Party", basis: "Generator", ops: [], form: "party", slots: ["A", "B"],
    reading: "Fixes who A and B are. Every other entry is borne by a party.",
  },
  "Agent": {
    kind: "Party", basis: "Derived", ops: ["Delegate"], form: "delegate(Identity)", slots: ["A"],
    reading: "A party acting under a conferred power. \"On behalf of\" applies to every other entry, so v1's L8 is a recursion on L1 and not a layer above it.",
  },
  "Oracle": {
    kind: "Party", basis: "Derived", ops: ["Delegate"], form: "delegate(Attestation)", slots: ["A", "X"],
    reading: "Reliance for facts: a party others have agreed to count on for assertions about the world. Often aggregated across several reporters.",
  },

  // Attitudes
  "Memory": {
    kind: "Attitude", also: "Record", basis: "Generator", ops: [], form: "belief, retained", slots: ["X"],
    reading: "Belief kept from past interaction. It appears twice in the grammar: as a private attitude and as a record of what happened.",
  },
  "Knowledge": {
    kind: "Attitude", basis: "Derived", ops: ["Aggregate"], form: "aggregate(Memory)", slots: ["X"],
    reading: "Belief pooled and made shareable. v1 defines it as a shared layer, which makes it derived and not basic.",
  },
  "Preference": {
    kind: "Attitude", basis: "Generator", ops: [], form: "desire", slots: ["X"],
    reading: "The desire in belief–desire–intention. It is where the loop starts.",
  },
  "Taste": {
    kind: "Attitude", basis: "Variant", ops: [], form: "Preference, evaluative", slots: ["X"],
    reading: "An evaluative attitude that explains preferences. Both are the desire side of one mind.",
  },
  "Skill": {
    kind: "Attitude", basis: "Generator", ops: [], form: "ability", slots: ["X"],
    reading: "The private state that makes A worth relying on for X. It becomes public only through an attestation or a performance.",
  },
  "Priority": {
    kind: "Attitude", basis: "Variant", ops: [], form: "ordering over Intent", slots: ["X"],
    reading: "An ordering over one's own intents and commitments. Its v1 instantiations are mostly the aggregated form.",
  },
  "Intent": {
    kind: "Attitude", basis: "Generator", ops: [], form: "intention", slots: ["X"],
    reading: "A desire one has settled on pursuing. Private until an act makes it public.",
  },
  "Perception": {
    kind: "Attitude", basis: "Variant", ops: [], form: "belief about a party", slots: ["B"],
    reading: "An observer's private belief about another party. The unshared counterpart of Reputation.",
  },

  // Acts
  "Attestation": {
    kind: "Act", force: "assert", basis: "Generator", ops: [], form: "assert", slots: ["X"],
    reading: "An assertion made on the speaker's own authority. It is the evidence that X is the case, and the act that turns a performance into a record.",
  },
  "Endorsement": {
    kind: "Act", force: "assert", basis: "Variant", ops: [], form: "Attestation, about a party", slots: ["A"],
    reading: "An attestation whose subject is another party's worth. Add a stake and it becomes a Vouch.",
  },
  "Vouch": {
    kind: "Act", force: "assert", basis: "Derived", ops: ["Stake"], form: "stake(Endorsement)", slots: ["V"],
    reading: "An assertion about a party, backed by the speaker's own standing or value.",
  },
  "Gossip": {
    kind: "Act", force: "assert", basis: "Derived", ops: ["Scope"], form: "scope(Attestation)", slots: ["S"],
    reading: "An assertion about a third party, addressed to a chosen audience that usually excludes its subject.",
  },
  "Consent": {
    kind: "Act", force: "declare", basis: "Derived", ops: ["Scope"], form: "scope(waiver of a claim)", slots: ["F", "S"],
    reading: "A declaration that waives a claim one holds, for a stated audience and purpose.",
  },
  "Offer / Bid": {
    kind: "Act", force: "commit", basis: "Generator", ops: [], form: "commit, if accepted", slots: ["F"],
    reading: "A promise put to an audience: \"I will, if you accept.\" The first point at which an intent binds its holder.",
  },
  "Proposal": {
    kind: "Act", force: "direct", basis: "Derived", ops: ["Scope"], form: "scope(Request) to a group", slots: ["F", "S"],
    reading: "A directive addressed to a group. It is the only plain request on the v1 map, and it presupposes the group it is addressed to.",
  },
  "Vote": {
    kind: "Act", force: "declare", basis: "Derived", ops: ["Aggregate"], form: "aggregate(Preference)", slots: ["F"],
    reading: "One preference, cast so that it can be counted with others. v1's L7 is mostly Aggregate applied to L3 and L4.",
  },
  "Decision": {
    kind: "Act", force: "declare", basis: "Generator", ops: [], form: "declare", slots: ["F"],
    reading: "A declaration that settles an open question and changes what the parties are committed to.",
  },
  "Transaction": {
    kind: "Act", force: "perform", basis: "Generator", ops: [], form: "perform", slots: ["X"],
    reading: "Performance: the act that discharges a commitment by transferring a claim.",
  },
  "Task": {
    kind: "Act", force: "direct", basis: "Derived", ops: ["Delegate", "Stake"], form: "stake(delegate(Intent))", slots: ["F", "V"],
    reading: "A directive with value attached, addressed to a specific performer. Its open-audience form is the predicted Bounty cell.",
  },
  "Arbitration": {
    kind: "Act", force: "declare", basis: "Derived", ops: ["Delegate"], form: "delegate(Decision), on dispute", slots: [],
    reading: "A decision about a contested commitment, handed to a third party. It presupposes breach and dispute, neither of which v1 lists.",
  },

  // Positions
  "Commitment": {
    kind: "Position", basis: "Generator", ops: [], form: "duty", slots: ["F"],
    reading: "A duty one party owes another. The general form, obligation and its matching claim, is named in v1 only through instances like this one.",
  },
  "Agreement": {
    kind: "Position", basis: "Variant", ops: [], form: "Commitment × Commitment, mutually known", slots: ["F", "S"],
    reading: "Commitments on both sides that both sides know both sides hold. It differs from two matching intents only by that mutual knowledge.",
  },
  "Token": {
    kind: "Position", basis: "Generator", ops: [], form: "transferable claim", slots: ["V"],
    reading: "A claim that can change hands. It is what Stake attaches to a statement.",
  },
  "Escrow": {
    kind: "Position", basis: "Derived", ops: ["Stake", "Condition"], form: "condition(stake(Commitment))", slots: ["V", "T"],
    reading: "A promise plus value, released on a condition.",
  },
  "Smart Contract": {
    kind: "Position", basis: "Derived", ops: ["Condition"], form: "condition(Commitment), self-enforcing", slots: ["T"],
    reading: "A commitment whose if-then is executed by a machine and not by the party who made it.",
  },
  "Stream": {
    kind: "Position", basis: "Derived", ops: ["Condition"], form: "condition(Transaction), over time", slots: ["T"],
    reading: "A transfer conditioned on time passing.",
  },
  "Delegation": {
    kind: "Position", basis: "Derived", ops: ["Delegate"], form: "delegate(power)", slots: ["A"],
    reading: "A power conferred on another party: reliance for action. This is the Delegate operator, listed as an entry.",
  },
  "Credential / Claim": {
    kind: "Position", basis: "Variant", ops: [], form: "Attestation, held by its subject", slots: ["X"],
    reading: "What an attestation leaves with the party it is about: standing they can present to others.",
  },
  "Risk": {
    kind: "Position", basis: "Derived", ops: ["Stake"], form: "stake on a Commitment failing", slots: ["V"],
    reading: "A transferable exposure to someone's commitment failing. It is the one listed entry that prices an inverse.",
  },
  "Appropriateness": {
    kind: "Position", basis: "Derived", ops: ["Scope"], form: "scope(Knowledge), by role", slots: ["S"],
    reading: "A standing duty about where information may flow. It is fit to a role's norms, so it depends on Role, which v1 does not list.",
  },

  // Records
  "Reputation": {
    kind: "Record", basis: "Derived", ops: ["Aggregate"], form: "aggregate(Attestation)", slots: ["A"],
    reading: "The history of reliance honoured, pooled across the people who relied.",
  },
  "Credibility": {
    kind: "Record", basis: "Derived", ops: ["Scope"], form: "scope(Reputation) to assertions", slots: ["A"],
    reading: "Reputation narrowed to one question: whether this party's assertions in this domain can be relied on.",
  },

  // Composites
  "Conversation": {
    kind: "Composite", basis: "Composite", ops: [], form: "sequence of acts", slots: ["S"],
    reading: "A run of acts between the same parties. What it builds is common ground, which v1 does not list.",
  },
  "Negotiation": {
    kind: "Composite", basis: "Composite", ops: [], form: "Offer → counter-Offer → Agreement", slots: ["X"],
    reading: "Offers exchanged until X is settled. A stage of the loop and not a kind of thing.",
  },
  "Opportunity": {
    kind: "Composite", basis: "Composite", ops: ["Scope"], form: "scope(match(Intent, Intent))", slots: ["A", "B"],
    reading: "Two complementary intents paired within the norms of a context. Match is not one of the five operators: it pairs complements where Aggregate pools similars.",
  },
  "Prediction Market": {
    kind: "Composite", basis: "Composite", ops: ["Aggregate", "Stake"], form: "aggregate(stake(belief))", slots: ["X", "V"],
    reading: "Beliefs with value attached, pooled into a price.",
  },
  "DeFi (Liquidity)": {
    kind: "Composite", basis: "Composite", ops: ["Aggregate", "Condition"], form: "aggregate(Offer / Bid)", slots: ["V"],
    reading: "Standing offers pooled so that anyone can take the other side.",
  },
  "Workflow": {
    kind: "Composite", basis: "Composite", ops: ["Condition", "Delegate"], form: "condition(Task, Task, …)", slots: ["T"],
    reading: "Tasks ordered by if-then.",
  },
};

// ---------------------------------------------------------------------------
// Entries that are not among v1's 41.
//   Unlisted   v1 already leans on it but does not list it
//   Predicted  an empty cell the grammar generates
// No estimates and no instantiations: these are not tracked yet.
// `candidates` names projects v1 already tracks that may sit in the cell.
// The page shows only those that really appear in ../data.js.
// ---------------------------------------------------------------------------
const EXTRA = [
  {
    name: "Trust", status: "Unlisted", kind: "Attitude", basis: "Generator", ops: [], form: "disposition to rely", slots: ["B"],
    reading: "Willingness to rely when the outcome is uncertain. It is the attitude the whole tuple is addressed to, and it gates the next match.",
    seenIn: "v1 names layer L5 after it and defines it in the Relevancy ↔ Reputation ↔ Trust lens, but it is not one of the 41.",
  },
  {
    name: "Relevancy", status: "Unlisted", kind: "Attitude", basis: "Derived", ops: ["Scope"], form: "fit to Purpose", slots: ["X"],
    reading: "A judgment that something fits a purpose, here and now.",
    seenIn: "It carries two of v1's three lenses and is not one of the 41.",
  },
  {
    name: "Attention", status: "Unlisted", kind: "Attitude", basis: "Generator", ops: [], form: "scarce capacity to attend", slots: ["B"],
    reading: "The scarce resource that makes relevancy matter at all.",
    seenIn: "Implied wherever v1 talks about matching, discovery or noise.",
  },
  {
    name: "Purpose", status: "Unlisted", kind: "Attitude", basis: "Generator", ops: [], form: "shared end", slots: ["X"],
    reading: "What an interaction is for. Relevancy is fit to it, and taking more than it needs is a purpose-limitation violation.",
    seenIn: "Every scenario in v1's Relevancy × Appropriateness matrix has one: treatment, hiring, verifying income.",
  },
  {
    name: "Request", status: "Unlisted", kind: "Act", force: "direct", basis: "Generator", ops: [], form: "direct", slots: ["F"],
    reading: "The plain directive: asking another party to do something. The loop starts with one.",
    seenIn: "v1 has Intent (private) and Offer (a promise), then jumps to Proposal and Task, which are requests with something added.",
  },
  {
    name: "Obligation / Claim", status: "Unlisted", kind: "Position", basis: "Generator", ops: [], form: "duty ↔ claim", slots: ["F"],
    reading: "The general normative position: what one party owes and another may demand.",
    seenIn: "Named only through instances: Commitment, Agreement, Token, Escrow, Credential.",
  },
  {
    name: "Role", status: "Unlisted", kind: "Position", basis: "Generator", ops: [], form: "bundle of claims, duties and powers", slots: ["S"],
    reading: "A place in a context that carries its own norms. Appropriateness is fit to them.",
    seenIn: "Every scenario in v1's matrix runs on one: doctor, interviewer, landlord.",
  },
  {
    name: "Common ground", status: "Unlisted", kind: "Record", basis: "Generator", ops: [], form: "mutual knowledge of an audience", slots: ["S"],
    reading: "What an audience knows that it knows. It is the difference between an agreement and two matching intents.",
    seenIn: "v1's \"Context\" carries two meanings: what you know (L2) and the normative setting (Appropriateness). This is the shared part.",
  },
  {
    name: "Group / Membership", status: "Unlisted", kind: "Party", basis: "Derived", ops: ["Aggregate"], form: "aggregate(Identity)", slots: ["A", "B"],
    reading: "A collective party with a boundary: a \"we\" that can hold positions and perform acts.",
    seenIn: "v1's L7 has collective acts (Vote, Proposal) but no collective entity.",
  },
  {
    name: "Revocation", status: "Unlisted", kind: "Act", force: "declare", basis: "Derived", ops: ["Inverse"], form: "inverse(Consent | Delegation | Credential)", slots: [],
    reading: "Withdrawing a permission, a power or a standing.",
    seenIn: "Implied by Consent and Delegation, which v1 treats as one-way.",
  },
  {
    name: "Refusal", status: "Unlisted", kind: "Act", force: "declare", basis: "Derived", ops: ["Inverse"], form: "inverse(acceptance)", slots: [],
    reading: "Declining a request or an offer.",
    seenIn: "Implied by Offer / Bid and Negotiation.",
  },
  {
    name: "Breach", status: "Unlisted", kind: "Act", basis: "Derived", ops: ["Inverse"], form: "inverse(Transaction)", slots: [],
    reading: "A commitment not performed. Failure is where trust gets its meaning.",
    seenIn: "Risk prices it and Arbitration resolves it, but v1 does not list it.",
  },
  {
    name: "Dispute", status: "Unlisted", kind: "Act", force: "assert", basis: "Derived", ops: ["Inverse"], form: "inverse(Agreement)", slots: [],
    reading: "A claim that the other side has not kept its part.",
    seenIn: "Arbitration is defined in v1 as dispute resolution.",
  },
  {
    name: "Forgetting", status: "Unlisted", kind: "Act", basis: "Derived", ops: ["Inverse"], form: "inverse(Memory)", slots: [],
    reading: "Removing a record, or letting it lapse.",
    seenIn: "Implied by Memory and Reputation, which v1 treats as accumulating only.",
  },
  {
    name: "Exit", status: "Unlisted", kind: "Act", force: "declare", basis: "Derived", ops: ["Inverse"], form: "inverse(Membership)", slots: [],
    reading: "Leaving a group and taking one's claims along.",
    seenIn: "Needs Group / Membership, which v1 also does not list.",
  },
  {
    name: "Bounty", status: "Predicted", kind: "Act", force: "direct", basis: "Derived", ops: ["Stake"], form: "stake(Request), open audience", slots: ["F", "V"],
    reading: "A staked directive addressed to anyone. Task is the same act addressed to one performer.",
    candidates: ["Dework", "Layer3"],
  },
  {
    name: "Treasury / Organization", status: "Predicted", kind: "Position", basis: "Derived", ops: ["Aggregate"], form: "aggregate(Commitment)", slots: ["V"],
    reading: "Commitments pooled until they act as one party's resources.",
    candidates: ["Safe", "Moloch DAO", "Nouns", "Aragon"],
  },
  {
    name: "Challenge", status: "Predicted", kind: "Act", force: "assert", basis: "Derived", ops: ["Inverse"], form: "inverse(Attestation)", slots: [],
    reading: "A staked assertion that an attestation is false.",
    candidates: ["UMA", "Reality.eth", "Kleros"],
  },
  {
    name: "Confidentiality", status: "Predicted", kind: "Position", basis: "Derived", ops: ["Scope"], form: "scope(Knowledge)", slots: ["S"],
    reading: "A duty to keep knowledge inside an audience.",
    candidates: ["Lit Protocol", "Oasis Network", "Nym"],
  },
];

// ---------------------------------------------------------------------------
// Operator grid. Rows are bases, columns are the five operators plus Inverse,
// which is not one of the five and is where most of the unlisted entries sit.
// Every name must be a v1 entry or an EXTRA entry.
// ---------------------------------------------------------------------------
const GRID_COLUMNS = ["Aggregate", "Stake", "Condition", "Delegate", "Scope", "Inverse"];
const GRID = [
  {
    base: "Belief", of: ["Memory"],
    cells: { Aggregate: ["Knowledge"], Stake: ["Prediction Market"], Scope: ["Appropriateness", "Confidentiality"], Inverse: ["Forgetting"] },
  },
  {
    base: "Assertion", of: ["Attestation", "Endorsement"],
    cells: { Aggregate: ["Reputation"], Stake: ["Vouch"], Delegate: ["Oracle"], Scope: ["Gossip", "Credibility"], Inverse: ["Challenge"] },
  },
  {
    base: "Preference", of: ["Preference", "Taste", "Priority"],
    cells: { Aggregate: ["Vote"], Delegate: ["Delegation"] },
  },
  {
    base: "Directive", of: ["Intent", "Request"],
    cells: { Stake: ["Bounty"], Condition: ["Workflow"], Delegate: ["Task"], Scope: ["Proposal"], Inverse: ["Refusal"] },
  },
  {
    base: "Promise", of: ["Offer / Bid", "Commitment", "Agreement"],
    cells: { Aggregate: ["DeFi (Liquidity)", "Treasury / Organization"], Stake: ["Escrow", "Risk"], Condition: ["Smart Contract", "Stream"], Inverse: ["Breach", "Dispute"] },
  },
  {
    base: "Declaration", of: ["Decision"],
    cells: { Delegate: ["Arbitration"], Scope: ["Consent"], Inverse: ["Revocation"] },
  },
  {
    base: "Party", of: ["Identity"],
    cells: { Aggregate: ["Group / Membership"], Delegate: ["Agent"], Inverse: ["Exit"] },
  },
];

// v1's Market Relationships lens, written in the grammar.
const RELATIONSHIPS = [
  { v1: "intent ↔ intents", expr: "match(Intent, Intent)", note: "Pairs complements. Gives Opportunity. Match is not one of the five operators." },
  { v1: "intents ↔ agg(intents)", expr: "aggregate(Intent)", note: "Pools similars. No entry yet, and it needs Group / Membership." },
  { v1: "intent ↔ agents", expr: "delegate(Intent)", note: "Gives Agent and Task." },
  { v1: "intent ↔ value", expr: "stake(Intent)", note: "Gives Offer / Bid when the holder stakes, and the predicted Bounty when the asker does." },
  { v1: "value ↔ agents", expr: "delegate(stake(·))", note: "An agent holding Token or Escrow for its principal." },
  { v1: "agg(intent) ↔ value", expr: "stake(aggregate(Intent))", note: "The Prediction Market construction applied to wants and not beliefs. No entry yet." },
];

// v1's Relevancy × Appropriateness scenarios, with the role and purpose each
// one runs on made explicit.
const SCENARIOS = [
  { scene: "Doctor's visit: chatting about the weather", role: "Doctor, patient", purpose: "Treatment", fitsPurpose: false, fitsRole: true, v1: "Benign noise" },
  { scene: "Doctor's visit: which medications you take", role: "Doctor, patient", purpose: "Treatment", fitsPurpose: true, fitsRole: true, v1: "Ideal" },
  { scene: "Job interview: your religious beliefs", role: "Interviewer, candidate", purpose: "Assessing fit for the job", fitsPurpose: false, fitsRole: false, v1: "Context collapse" },
  { scene: "Renting: landlord asks for your bank login", role: "Landlord, applicant", purpose: "Verifying income", fitsPurpose: true, fitsRole: false, v1: "Coercive relevance" },
];
