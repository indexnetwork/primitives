# Primitives

Software historically organized human coordination around applications and interfaces. Language-based systems make it possible to organize coordination around meaning itself.

Personal agents, messaging apps, feeds, CRMs, and calendars are products shaped by historical software boundaries, not fundamental primitives of human coordination. The underlying building blocks are coordination primitives: identity, context, intent, trust, negotiation, agreement, delegation, and the many ways humans exchange information and organize collective action.

This map is an evolving attempt to identify, classify, and track those primitives across 8 layers: Foundation, Context, Intent, Interaction, Trust, Value, Coordination, and Agents. Each entry records a definition, legacy equivalent, maturity, key instantiations, and composition relationships, along with an estimated formation rate and market size. Those estimates are currently unsourced: rates are labeled speculative and market sizes unverified. See the Methodology section of the map.

**[View the map](https://indexnetwork.github.io/primitives/)**

## Structure

- `data.js`: primitive data (layers, primitives, maturity definitions, map metadata)
- `index.html`: rendering, filtering, interaction, lenses, methodology
- `og.png`: link preview image

No build step. No dependencies. Static HTML served via GitHub Pages. Counts shown on the map are derived from `data.js`.

## Contributing

Edit `data.js` to add, update, or reclassify primitives, or to add sources for existing estimates. When you review an entry against sources, set `reviewed` and `confidence`. Update `META.lastRevised` when you change the map.

| Field | Description |
|---|---|
| `name` | Primitive name |
| `pillars` | Language, Value, and/or Coordination |
| `formationRate` | Estimated share of the relevant activity already running through programmable, machine-readable forms of the primitive. Speculative unless sourced. |
| `tamUnlocked` | Market size: an estimate of the market tied to the primitive's legacy equivalent. Unverified unless sourced. Never summed across entries. |
| `maturity` | Theoretical, Experimental, Emerging, Growing, or Established, as defined in `MATURITY` in `data.js`. Describes implementation in agent-mediated coordination, not whether the human behavior exists. |
| `definition` | What the primitive represents |
| `legacyEquivalent` | How the same coordination happens today without programmable primitives |
| `instantiations` | Projects and protocols implementing the primitive |
| `composesWith` | Other primitives it naturally combines with |

Optional fields:

| Field | Description |
|---|---|
| `sources` | `[{ label, url }]`: public sources supporting the estimates |
| `confidence` | `High` (multiple independent recent sources), `Medium` (one credible source or a derivation with stated assumptions), or `Low` (no source). Defaults to `Low` when no sources are given. |
| `maturityAssessed` | Date (`YYYY-MM-DD`) the maturity label was last assessed against the definitions in `MATURITY` |
| `reviewed` | Date (`YYYY-MM-DD`) the entry was last checked against sources |
| `kind` | Abstraction-level flag for entries that are implementations, mechanisms, actors, or market categories rather than primitives |
| `taxonomyNote` | Why the entry is flagged and what the underlying primitive might be |
| `overlapNote` | How the entry differs from overlapping primitives |

Do not add figures, sources, or citations you cannot link to.

## License

[MIT](LICENSE)
