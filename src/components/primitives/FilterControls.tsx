"use client";

import type { Pillar, Layer, Maturity } from "@/data/primitives";

const PILLARS: Pillar[] = ["Language", "Money", "Coordination"];
const LAYER_OPTIONS: Layer[] = [
  "Foundation",
  "Context",
  "Intent",
  "Interaction",
  "Trust",
  "Value",
  "Coordination",
  "Agents",
];
const MATURITY_OPTIONS: Maturity[] = [
  "Theoretical",
  "Experimental",
  "Emerging",
  "Growing",
  "Established",
];

interface FilterControlsProps {
  selectedPillars: Pillar[];
  selectedLayers: Layer[];
  selectedMaturities: Maturity[];
  onPillarToggle: (pillar: Pillar) => void;
  onLayerToggle: (layer: Layer) => void;
  onMaturityToggle: (maturity: Maturity) => void;
  onClear: () => void;
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
        active
          ? "border-white/40 bg-white/10 text-white"
          : "border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/20"
      }`}
    >
      {label}
    </button>
  );
}

export function FilterControls({
  selectedPillars,
  selectedLayers,
  selectedMaturities,
  onPillarToggle,
  onLayerToggle,
  onMaturityToggle,
  onClear,
}: FilterControlsProps) {
  const hasFilters =
    selectedPillars.length > 0 ||
    selectedLayers.length > 0 ||
    selectedMaturities.length > 0;

  return (
    <div className="space-y-3 mb-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-gray-500 w-16">Pillar</span>
        {PILLARS.map((p) => (
          <FilterChip
            key={p}
            label={p}
            active={selectedPillars.includes(p)}
            onClick={() => onPillarToggle(p)}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-gray-500 w-16">Layer</span>
        {LAYER_OPTIONS.map((l) => (
          <FilterChip
            key={l}
            label={l}
            active={selectedLayers.includes(l)}
            onClick={() => onLayerToggle(l)}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-gray-500 w-16">Maturity</span>
        {MATURITY_OPTIONS.map((m) => (
          <FilterChip
            key={m}
            label={m}
            active={selectedMaturities.includes(m)}
            onClick={() => onMaturityToggle(m)}
          />
        ))}
      </div>
      {hasFilters && (
        <button
          onClick={onClear}
          className="text-xs text-gray-500 hover:text-gray-300 underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
