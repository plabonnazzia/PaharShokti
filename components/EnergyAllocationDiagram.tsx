"use client";

import React from "react";
import {
  Sun,
  BatteryCharging,
  HeartPulse,
  Sparkles,
  Droplets,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  PauseCircle,
  AlertTriangle,
} from "lucide-react";

interface EnergyAllocationDiagramProps {
  isEmergency: boolean;
  batteryPct: number;
}

export function EnergyAllocationDiagram({
  isEmergency,
  batteryPct,
}: EnergyAllocationDiagramProps) {
  return (
    <section
      aria-labelledby="allocation-heading"
      className="rounded-2xl border border-canvas-border bg-white/95 p-4 shadow-card backdrop-blur-sm sm:px-6 sm:py-4"
    >
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-forest-800" />
            <h2
              id="allocation-heading"
              className="text-base font-extrabold tracking-tight text-forest-950 sm:text-lg"
            >
              Real-Time Energy Allocation Flow
            </h2>
          </div>
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Solar array → Shared battery → Community priority loads
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-800 ring-1 ring-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Active Power
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-amber-900 ring-1 ring-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Scheduled / Reduced
          </span>
          {isEmergency && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 text-red-800 ring-1 ring-red-200">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Paused Reserve Guard
            </span>
          )}
        </div>
      </div>

      {/* Flow Schematic: Solar Panel -> Arrow -> Shared Battery -> Branching Arrows -> 3 Load Cards */}
      <div className="grid grid-cols-1 items-center gap-3 lg:grid-cols-[168px_48px_178px_72px_minmax(0,1fr)] lg:gap-0">
        {/* 1. SOLAR PANEL NODE */}
        <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-amber-300/80 bg-gradient-to-b from-amber-50/90 to-white px-3 py-3.5 text-center shadow-sm">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-400/25 text-amber-700 ring-1 ring-amber-400/50">
            <svg
              className="h-7 w-7"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="23" cy="8" r="4" fill="#F59E0B" />
              <path
                d="M23 1.5V3M23 13V14.5M16.5 8H18M28 8H29.5"
                stroke="#D97706"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M5 14L8.5 25H23.5L20 14H5Z"
                fill="#0F3D2E"
                stroke="#0F3D2E"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M10.2 14L13.2 25M15.2 14L18.2 25M6.6 19.5H21.7"
                stroke="#FACC15"
                strokeWidth="1.3"
              />
              <path
                d="M14.2 25V28.5M10.5 28.5H18"
                stroke="#0F3D2E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900/80">
            Solar Array
          </span>
          <span className="mt-0.5 text-xl font-extrabold text-forest-950 tabular-nums sm:text-2xl">
            1.8 kW
          </span>
          <span className="mt-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-amber-100/90 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
            <Sun className="h-3.5 w-3.5 text-amber-600" />
            {isEmergency ? "Declining Sun" : "Generating"}
          </span>
        </div>

        {/* ARROW 1: Solar -> Battery */}
        <div className="flex items-center justify-center py-0.5 lg:py-0">
          <svg
            className="hidden h-9 w-full lg:block"
            viewBox="0 0 48 36"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="2"
              y1="18"
              x2="38"
              y2="18"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="18"
              x2="38"
              y2="18"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="energy-flow-active"
            />
            <path
              d="M34 11L44 18L34 25"
              stroke="#D97706"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col items-center text-amber-600 lg:hidden">
            <ArrowDown className="h-5 w-5 stroke-[2.5]" />
          </div>
        </div>

        {/* 2. SHARED BATTERY NODE */}
        <div
          className={`relative flex flex-col items-center justify-center rounded-2xl border-2 px-3 py-3.5 text-center shadow-sm transition-all duration-300 ${
            isEmergency
              ? "border-orange-400 bg-gradient-to-b from-orange-50/90 to-white"
              : "border-forest-700/35 bg-gradient-to-b from-forest-50/90 to-white"
          }`}
        >
          <div
            className={`mb-2 flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors ${
              isEmergency
                ? "bg-orange-100 text-orange-700 ring-orange-300"
                : "bg-forest-100 text-forest-800 ring-forest-700/25"
            }`}
          >
            <BatteryCharging className="h-7 w-7" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Shared Battery
          </span>
          <span
            className={`mt-0.5 text-xl font-extrabold tabular-nums transition-colors sm:text-2xl ${
              isEmergency ? "text-orange-700" : "text-forest-950"
            }`}
          >
            {batteryPct}%
          </span>
          <div className="mt-1.5 h-2 w-full max-w-[120px] overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isEmergency ? "bg-orange-500" : "bg-forest-700"
              }`}
              style={{ width: `${batteryPct}%` }}
            />
          </div>
          <span
            className={`mt-1 whitespace-nowrap text-xs font-semibold ${
              isEmergency ? "text-orange-800" : "text-forest-800"
            }`}
          >
            {isEmergency ? "Critical Reserve Guard" : "Reserve Stable"}
          </span>
        </div>

        {/* ARROW MANIFOLD 2: Battery -> 3 Load Cards */}
        <div className="flex items-center justify-center py-0.5 lg:h-full lg:py-0">
          <svg
            className="hidden h-[256px] w-full lg:block"
            viewBox="0 0 72 256"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Base tracks */}
            <path
              d="M2 128 C 32 128, 32 42, 62 42"
              stroke="#E2E8F0"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M2 128 L 62 128"
              stroke="#E2E8F0"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M2 128 C 32 128, 32 214, 62 214"
              stroke="#E2E8F0"
              strokeWidth="4"
              fill="none"
            />

            {/* Top Branch -> Health Post */}
            <path
              d="M2 128 C 32 128, 32 42, 62 42"
              stroke="#16A34A"
              strokeWidth={isEmergency ? "5" : "3.5"}
              fill="none"
              className={
                isEmergency ? "energy-flow-priority" : "energy-flow-active"
              }
            />
            <polygon points="58,35 70,42 58,49" fill="#16A34A" />

            {/* Middle Branch -> Women's Weaving Hub */}
            <path
              d="M2 128 L 62 128"
              stroke={isEmergency ? "#D97706" : "#16A34A"}
              strokeWidth="3.5"
              fill="none"
              className={
                isEmergency ? "energy-flow-throttled" : "energy-flow-active"
              }
            />
            <polygon
              points="58,121 70,128 58,135"
              fill={isEmergency ? "#D97706" : "#16A34A"}
            />

            {/* Bottom Branch -> Community Water Pump */}
            <path
              d="M2 128 C 32 128, 32 214, 62 214"
              stroke={isEmergency ? "#DC2626" : "#EAB308"}
              strokeWidth="3.5"
              strokeDasharray={isEmergency ? "4 6" : undefined}
              fill="none"
              className={isEmergency ? "" : "energy-flow-scheduled"}
            />
            {isEmergency ? (
              <g transform="translate(61, 214)">
                <circle r="7" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                <path
                  d="M-2.5 -2.5L2.5 2.5M2.5 -2.5L-2.5 2.5"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              <polygon points="58,207 70,214 58,221" fill="#CA8A04" />
            )}
          </svg>

          {/* Mobile 3-branch downward arrows */}
          <div className="flex items-center justify-center gap-6 py-0.5 lg:hidden">
            <ArrowDown className="h-5 w-5 stroke-[2.5] text-emerald-600" />
            <ArrowDown
              className={`h-5 w-5 stroke-[2.5] ${
                isEmergency ? "text-amber-600" : "text-emerald-600"
              }`}
            />
            <ArrowDown
              className={`h-5 w-5 stroke-[2.5] ${
                isEmergency ? "text-red-600" : "text-amber-500"
              }`}
            />
          </div>
        </div>

        {/* 3. THREE COMMUNITY LOAD CARDS */}
        <div className="flex flex-col gap-2.5">
          {/* LOAD CARD 1: Health Post */}
          <div
            className={`relative rounded-xl border-2 px-4 py-3 transition-all duration-300 ${
              isEmergency
                ? "animate-pulse-ring border-emerald-500 bg-emerald-50/80"
                : "border-emerald-200/90 bg-white hover:border-emerald-300"
            }`}
          >
            <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isEmergency
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-extrabold text-forest-950">
                      Health Post
                    </h3>
                    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-forest-900 px-2 py-0.5 text-xs font-bold text-white">
                      Priority: Critical
                    </span>
                    {isEmergency && (
                      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-md bg-red-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Priority Protected
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    Emergency lighting • Vaccine refrigeration
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center sm:justify-end">
                <span
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-extrabold ring-1 sm:text-sm ${
                    isEmergency
                      ? "bg-emerald-600 text-white ring-emerald-700 shadow-sm"
                      : "bg-emerald-100 text-emerald-900 ring-emerald-300"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      isEmergency ? "animate-ping bg-white" : "bg-emerald-600"
                    }`}
                  />
                  {isEmergency && (
                    <span className="-ml-4 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                  )}
                  <span>Status: Powered</span>
                </span>
              </div>
            </div>
          </div>

          {/* LOAD CARD 2: Women's Weaving Hub */}
          <div
            className={`rounded-xl border-2 px-4 py-3 transition-all duration-300 ${
              isEmergency
                ? "border-amber-300 bg-amber-50/65"
                : "border-emerald-200/80 bg-white hover:border-emerald-300"
            }`}
          >
            <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isEmergency
                      ? "bg-amber-100 text-amber-800"
                      : "bg-forest-100 text-forest-800"
                  }`}
                >
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-extrabold text-forest-950 whitespace-nowrap">
                      Women&apos;s Weaving Hub
                    </h3>
                    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-forest-100 px-2 py-0.5 text-xs font-bold text-forest-900 ring-1 ring-forest-700/20">
                      Priority: High
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    Evening income activity
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center sm:justify-end">
                {isEmergency ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-extrabold text-amber-950 ring-1 ring-amber-400 sm:whitespace-nowrap sm:text-[13px]">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-700" />
                    <span>Status: Reduced to essential lighting</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-extrabold text-emerald-900 ring-1 ring-emerald-300 sm:text-sm">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Status: Powered</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* LOAD CARD 3: Community Water Pump */}
          <div
            className={`rounded-xl border-2 px-4 py-3 transition-all duration-300 ${
              isEmergency
                ? "border-red-300 bg-red-50/70"
                : "border-amber-200/90 bg-white hover:border-amber-300"
            }`}
          >
            <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isEmergency
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  <Droplets className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-extrabold text-forest-950 whitespace-nowrap">
                      Community Water Pump
                    </h3>
                    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700 ring-1 ring-slate-300">
                      Priority: Flexible
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    Water collection
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center sm:justify-end">
                {isEmergency ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-extrabold text-red-900 ring-1 ring-red-400 sm:whitespace-nowrap sm:text-[13px]">
                    <PauseCircle className="h-3.5 w-3.5 shrink-0 text-red-700" />
                    <span>
                      Status: Paused — protecting critical battery reserve
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-extrabold text-amber-950 ring-1 ring-amber-400 sm:text-sm">
                    <ArrowRight className="h-4 w-4 shrink-0 text-amber-700" />
                    <span>Status: Scheduled</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
