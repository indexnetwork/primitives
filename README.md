# Primitives

Personal agents, messaging apps, feeds, CRMs, and calendars are historical artifacts of product boundaries — not fundamental coordination primitives. If natural language is the new API, primitives are bounded by human language, not technics. When language becomes the boundary, meaning replaces UI as the organizing principle.

This map tracks the human coordination primitives that surface when meaning, not software, organizes coordination: shared goals, common problems, intent, agreement, trust, and the broader elements of information exchange and social behavior.

37 primitives across 8 layers — Foundation, Context, Intent, Interaction, Trust, Value, Coordination, and Agents — each cataloged with formation rate, total addressable market, maturity stage, key instantiations, and composition relationships.

**[View the map](https://indexnetwork.github.io/primitives/)**

## Structure

- `data.js` — primitive data: definitions, layers, pillars, instantiations, composition edges
- `index.html` — rendering, filtering, interaction

No build step. No dependencies. Static HTML served via GitHub Pages.

## Contributing

Edit `data.js` to add, update, or reclassify primitives. Each primitive carries:

| Field | Description |
|---|---|
| `name` | Primitive name |
| `pillars` | Language, Money, and/or Coordination |
| `formationRate` | Estimated adoption as a programmable primitive |
| `tamUnlocked` | Total addressable market enabled |
| `maturity` | Theoretical, Experimental, Emerging, Growing, or Established |
| `definition` | What the primitive represents |
| `legacyEquivalent` | What it replaces in pre-crypto coordination |
| `instantiations` | Projects and protocols implementing the primitive |
| `composesWith` | Other primitives it naturally combines with |

## License

[MIT](LICENSE)
