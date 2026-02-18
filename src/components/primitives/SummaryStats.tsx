"use client";

import { SUMMARY_STATS } from "@/data/primitives";

export function SummaryStats() {
  const stats = [
    { label: "Primitives", value: SUMMARY_STATS.totalPrimitives.toString() },
    { label: "Layers", value: SUMMARY_STATS.totalLayers.toString() },
    { label: "Formation Rate", value: SUMMARY_STATS.avgFormationRate },
    { label: "TAM Unlocked", value: SUMMARY_STATS.totalTAM },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border border-white/10 rounded-lg p-4 text-center"
        >
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
