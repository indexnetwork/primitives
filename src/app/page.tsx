"use client";

import { useState, useMemo } from "react";
import { LAYERS, type Pillar, type Layer, type Maturity } from "@/data/primitives";
import { SummaryStats } from "@/components/primitives/SummaryStats";
import { FilterControls } from "@/components/primitives/FilterControls";
import { LayerSection } from "@/components/primitives/LayerSection";

function toggleItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

export default function PrimitivesPage() {
  const [selectedPillars, setSelectedPillars] = useState<Pillar[]>([]);
  const [selectedLayers, setSelectedLayers] = useState<Layer[]>([]);
  const [selectedMaturities, setSelectedMaturities] = useState<Maturity[]>([]);

  const filteredLayers = useMemo(() => {
    return LAYERS.map((layerGroup) => {
      const filtered = layerGroup.primitives.filter((p) => {
        if (
          selectedPillars.length > 0 &&
          !p.pillars.some((pl) => selectedPillars.includes(pl))
        )
          return false;
        if (selectedLayers.length > 0 && !selectedLayers.includes(p.layer))
          return false;
        if (
          selectedMaturities.length > 0 &&
          !selectedMaturities.includes(p.maturity)
        )
          return false;
        return true;
      });
      return { ...layerGroup, primitives: filtered };
    }).filter((lg) => lg.primitives.length > 0);
  }, [selectedPillars, selectedLayers, selectedMaturities]);

  const totalVisible = filteredLayers.reduce(
    (sum, lg) => sum + lg.primitives.length,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Primitive Map</h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          Personal agents, messaging apps, feeds, CRMs, and calendars are
          historical artifacts of product boundaries&mdash;not fundamental
          coordination primitives.
          <br /><br />
          If natural language is the new API, primitives are bounded by human
          language, not technics.
          <br /><br />
          When language becomes the boundary, meaning replaces UI as the
          organizing principle. The question follows naturally: how does
          information organize around meaning?
          <br /><br />
          Human coordination primitives surface as the interface&mdash;shared
          goals, common problems, intent, agreement, trust, and the broader
          elements of information exchange and social behavior.
          <br /><br />
          This map tracks and catalogs them.
        </p>
      </div>

      <SummaryStats />
      <FilterControls
        selectedPillars={selectedPillars}
        selectedLayers={selectedLayers}
        selectedMaturities={selectedMaturities}
        onPillarToggle={(p) => setSelectedPillars(toggleItem(selectedPillars, p))}
        onLayerToggle={(l) => setSelectedLayers(toggleItem(selectedLayers, l))}
        onMaturityToggle={(m) =>
          setSelectedMaturities(toggleItem(selectedMaturities, m))
        }
        onClear={() => {
          setSelectedPillars([]);
          setSelectedLayers([]);
          setSelectedMaturities([]);
        }}
      />

      <div className="hidden sm:flex items-center gap-4 px-4 py-2 text-[10px] text-gray-600 uppercase tracking-wider border-b border-white/10">
        <span className="flex-1">Primitive</span>
        <span className="hidden md:block w-32">Pillars</span>
        <span className="w-16 text-right">Rate</span>
        <span className="w-20 text-right">TAM</span>
        <span className="hidden lg:block w-20 text-right">Maturity</span>
        <span className="w-4" />
      </div>

      {filteredLayers.length > 0 ? (
        filteredLayers.map((lg) => (
          <LayerSection
            key={lg.layer}
            layerGroup={lg}
            primitiveCount={lg.primitives.length}
          />
        ))
      ) : (
        <div className="text-center py-12 text-gray-500 text-sm">
          No primitives match the current filters.
        </div>
      )}

      <div className="text-center py-6 text-xs text-gray-600">
        Showing {totalVisible} of {LAYERS.reduce((sum, lg) => sum + lg.primitives.length, 0)} primitives
      </div>
    </div>
  );
}
