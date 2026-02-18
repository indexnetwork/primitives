"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Primitive } from "@/data/primitives";

const PILLAR_COLORS: Record<string, string> = {
  Language: "text-blue-400 border-blue-400/30",
  Money: "text-green-400 border-green-400/30",
  Coordination: "text-purple-400 border-purple-400/30",
};

const MATURITY_COLORS: Record<string, string> = {
  Theoretical: "text-gray-500",
  Experimental: "text-yellow-500",
  Emerging: "text-orange-400",
  Growing: "text-green-400",
  Established: "text-emerald-400",
};

export function PrimitiveRow({ primitive }: { primitive: Primitive }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm font-medium text-white flex-1 min-w-0">
          {primitive.name}
        </span>
        <div className="hidden md:flex items-center gap-2">
          {primitive.pillars.map((p) => (
            <span
              key={p}
              className={`text-[10px] px-2 py-0.5 rounded-full border ${PILLAR_COLORS[p]}`}
            >
              {p}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-400 w-16 text-right hidden sm:block">
          {primitive.formationRate}
        </span>
        <span className="text-xs text-gray-400 w-20 text-right hidden sm:block">
          {primitive.tamUnlocked}
        </span>
        <span
          className={`text-xs w-20 text-right hidden lg:block ${MATURITY_COLORS[primitive.maturity]}`}
        >
          {primitive.maturity}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 space-y-3 text-sm">
              <p className="text-gray-300">{primitive.definition}</p>

              <div>
                <span className="text-gray-500 text-xs">Replaces: </span>
                <span className="text-gray-400 text-xs">
                  {primitive.legacyEquivalent}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="text-gray-500 text-xs block mb-1">
                    Formation
                  </span>
                  <span className="text-white text-sm">
                    {primitive.formationRate}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs block mb-1">
                    TAM Unlocked
                  </span>
                  <span className="text-white text-sm">
                    {primitive.tamUnlocked}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs block mb-1">
                    Maturity
                  </span>
                  <span
                    className={`text-sm ${MATURITY_COLORS[primitive.maturity]}`}
                  >
                    {primitive.maturity}
                  </span>
                </div>
              </div>

              <div className="md:hidden flex flex-wrap gap-1">
                {primitive.pillars.map((p) => (
                  <span
                    key={p}
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${PILLAR_COLORS[p]}`}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Key Instantiations
                </span>
                <div className="flex flex-wrap gap-1">
                  {primitive.instantiations.map((inst) => (
                    <span
                      key={inst.name}
                      className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-300"
                    >
                      {inst.name}
                      {inst.approach && (
                        <span className="text-gray-500">
                          {" "}
                          ({inst.approach})
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-gray-500 text-xs block mb-1">
                  Composes With
                </span>
                <div className="flex flex-wrap gap-1">
                  {primitive.composesWith.map((name) => (
                    <span
                      key={name}
                      className="text-xs px-2 py-0.5 rounded border border-white/10 text-gray-400"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
