"use client";

import type { LayerGroup } from "@/data/primitives";
import { PrimitiveRow } from "./PrimitiveRow";

export function LayerSection({
  layerGroup,
  primitiveCount,
}: {
  layerGroup: LayerGroup;
  primitiveCount: number;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3 px-4 py-2 border-b border-white/10">
        <h2 className="text-sm font-bold text-white">{layerGroup.label}</h2>
        <span className="text-xs text-gray-500">{layerGroup.subtitle}</span>
        <span className="text-xs text-gray-600 ml-auto">
          {primitiveCount} primitive{primitiveCount !== 1 ? "s" : ""}
        </span>
      </div>
      <div>
        {layerGroup.primitives.map((p) => (
          <PrimitiveRow key={p.name} primitive={p} />
        ))}
      </div>
    </div>
  );
}
