"use client";

import React, { useState, useEffect } from "react";
import {
  Sun,
  BatteryCharging,
  Activity,
  BrainCircuit,
  MapPin,
  AlertTriangle,
  RotateCcw,
  HeartPulse,
  Sparkles,
  Droplets,
  CheckCircle2,
  Siren,
} from "lucide-react";
import { MountainBackdrop } from "@/components/MountainBackdrop";
import { EnergyAllocationDiagram } from "@/components/EnergyAllocationDiagram";
import { SolarForecastChart } from "@/components/SolarForecastChart";

const DEFAULT_BATTERY_PCT = 42;
const EMERGENCY_TARGET_BATTERY_PCT = 38;

export default function PaharShoktiDashboard() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [batteryPct, setBatteryPct] = useState(DEFAULT_BATTERY_PCT);

  // Smoothly tick battery down (42% -> 41% -> 40% -> 39% -> 38%) during emergency simulation
  useEffect(() => {
    if (!isEmergency) {
      setBatteryPct(DEFAULT_BATTERY_PCT);
      return;
    }

    setBatteryPct(41);
    const interval = setInterval(() => {
      setBatteryPct((prev) => {
        if (prev <= EMERGENCY_TARGET_BATTERY_PCT) {
          clearInterval(interval);
          return EMERGENCY_TARGET_BATTERY_PCT;
        }
        return prev - 1;
      });
    }, 320);

    return () => clearInterval(interval);
  }, [isEmergency]);

  const handleTriggerEmergency = () => {
    setIsEmergency(true);
  };

  const handleResetSimulation = () => {
    setIsEmergency(false);
    setBatteryPct(DEFAULT_BATTERY_PCT);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Subtle Chittagong Hill Tracts Mountain Silhouette Background */}
      <MountainBackdrop />

      {/* =====================================================================
          1. HEADER (+ Sticky Red Emergency Banner when triggered)
         ===================================================================== */}
      <header className="sticky top-0 z-40 shadow-md">
        <div className="bg-forest-900 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
            {/* Brand Logo + Subtitle */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 ring-1 ring-solar-400/40 shadow-inner">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 36 36"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="18" cy="13" r="6" fill="#F5B700" />
                  <path
                    d="M18 3.5V5.5M9 13H11M25 13H27M11.6 6.6L13 8M24.4 6.6L23 8"
                    stroke="#FDE047"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 27L11.5 17.5L18.5 24.5L25 18.5L33 27V31H3V27Z"
                    fill="#287D5F"
                  />
                  <path
                    d="M10 31L20 20L26.5 26L31 22L33 24.5V31H10Z"
                    fill="#F5B700"
                    fillOpacity="0.85"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="text-xl font-extrabold tracking-wider text-white sm:text-2xl">
                    PAHARSHOKTI
                  </h1>
                </div>
                <p className="text-xs font-medium text-emerald-100/90 sm:text-sm">
                  CHT Community Microgrid Prototype
                </p>
              </div>
            </div>

            {/* Right Status & Location Metadata */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-200 ring-1 ring-emerald-400/50 sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                System Online
              </span>

              <div className="inline-flex items-center gap-1.5 rounded-xl bg-forest-950/60 px-3 py-1.5 text-xs font-semibold text-amber-100 ring-1 ring-white/10 sm:text-sm">
                <MapPin className="h-4 w-4 text-solar-400 shrink-0" />
                <span>Rangamati • Demonstration Mode</span>
              </div>
            </div>
          </div>

          {/* Subtle solar-gold / terracotta CHT horizon accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-forest-700 via-solar-500 to-terracotta-500 opacity-85" />
        </div>

        {/* Emergency Alert Banner (appears immediately across top when triggered) */}
        {isEmergency && (
          <div
            role="alert"
            className="animate-banner-in border-b border-red-800 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 px-4 py-3 text-white shadow-lg"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 text-center text-sm font-extrabold tracking-wide sm:text-base">
              <span>
                ⚠ Maternal Emergency Reported — Health Post Priority Activated
              </span>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 space-y-4 px-4 py-4 sm:space-y-5 sm:px-6 sm:py-5 lg:px-8">
        {/* ===================================================================
            2. KPI CARDS ROW (4 cards)
           =================================================================== */}
        <section
          aria-label="Key Microgrid Metrics"
          className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {/* KPI 1: Solar Generation */}
          <div className="rounded-2xl border border-canvas-border bg-white/95 p-4 shadow-card backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">
                Solar Generation
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Sun className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-forest-950 tabular-nums">
              1.8 kW
            </div>
            <p className="mt-1.5 text-xs font-semibold text-slate-500">
              {isEmergency
                ? "Afternoon output tapering toward dusk"
                : "Sufficient midday-afternoon array yield"}
            </p>
          </div>

          {/* KPI 2: Shared Battery (with progress bar) */}
          <div
            className={`rounded-2xl border p-4 shadow-card backdrop-blur-sm transition-colors duration-300 ${
              isEmergency
                ? "border-orange-300 bg-orange-50/40"
                : "border-canvas-border bg-white/95"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">
                Shared Battery
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  isEmergency
                    ? "bg-orange-100 text-orange-700"
                    : "bg-forest-100 text-forest-800"
                }`}
              >
                <BatteryCharging className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span
                className={`text-3xl font-extrabold tracking-tight tabular-nums transition-colors ${
                  isEmergency ? "text-orange-700" : "text-forest-950"
                }`}
              >
                {batteryPct}%
              </span>
              <span
                className={`text-xs font-bold ${
                  isEmergency ? "text-orange-800" : "text-forest-700"
                }`}
              >
                {isEmergency ? "Reserve draw active" : "Below 50% evening guard"}
              </span>
            </div>

            {/* Battery Progress Bar */}
            <div
              role="progressbar"
              aria-valuenow={batteryPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Shared Battery Level"
              className="relative mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200"
            >
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isEmergency
                    ? "bg-gradient-to-r from-orange-500 to-amber-500"
                    : "bg-gradient-to-r from-forest-800 to-emerald-600"
                }`}
                style={{ width: `${batteryPct}%` }}
              />
              {/* 50% critical reserve threshold marker */}
              <div
                title="50% Reserve Threshold"
                className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-500/60"
              />
            </div>
          </div>

          {/* KPI 3: Community Demand */}
          <div className="rounded-2xl border border-canvas-border bg-white/95 p-4 shadow-card backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">
                Community Demand
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                <Activity className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-forest-950 tabular-nums">
              1.45 kW
            </div>
            <p className="mt-1.5 text-xs font-semibold text-slate-500">
              {isEmergency
                ? "Non-critical loads curtailed for clinic"
                : "3 community nodes monitored"}
            </p>
          </div>

          {/* KPI 4: AI Recommendation (dynamic) */}
          <div
            className={`rounded-2xl border p-4 shadow-card backdrop-blur-sm transition-all duration-300 ${
              isEmergency
                ? "border-red-300 bg-gradient-to-br from-red-50/90 to-orange-50/70"
                : "border-forest-700/25 bg-gradient-to-br from-forest-900 to-forest-800 text-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-bold ${
                  isEmergency ? "text-red-900" : "text-emerald-100"
                }`}
              >
                AI Recommendation
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  isEmergency
                    ? "bg-red-100 text-red-700"
                    : "bg-white/15 text-solar-300"
                }`}
              >
                <BrainCircuit className="h-5 w-5" />
              </span>
            </div>
            <div
              className={`mt-2 text-lg font-extrabold leading-snug sm:text-xl ${
                isEmergency ? "text-red-900" : "text-white"
              }`}
            >
              {isEmergency
                ? "Prioritize Health Post"
                : "Run water pump until 17:30"}
            </div>
            <p
              className={`mt-1.5 text-xs font-semibold ${
                isEmergency ? "text-red-800" : "text-solar-300"
              }`}
            >
              {isEmergency
                ? "Pause pump • Essential lighting only"
                : "Solar sufficient • Battery stable"}
            </p>
          </div>
        </section>

        {/* ===================================================================
            3. ENERGY ALLOCATION DIAGRAM
           =================================================================== */}
        <EnergyAllocationDiagram
          isEmergency={isEmergency}
          batteryPct={batteryPct}
        />

        {/* ===================================================================
            4. BIG BUTTON: Simulate Maternal Emergency (+ Reset Simulation)
           =================================================================== */}
        <section
          aria-label="Emergency Simulation Controls"
          className="flex flex-col items-center justify-center gap-3 py-0.5 sm:flex-row sm:gap-4"
        >
          <button
            type="button"
            onClick={handleTriggerEmergency}
            disabled={isEmergency}
            className={`group relative inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-3.5 text-base font-extrabold tracking-wide text-white transition-all duration-200 focus:outline-none focus:ring-4 sm:px-9 sm:text-lg ${
              isEmergency
                ? "cursor-default bg-red-700/90 ring-4 ring-red-300 shadow-md"
                : "bg-gradient-to-r from-red-600 via-terracotta-500 to-orange-500 shadow-lg shadow-orange-600/25 hover:-translate-y-0.5 hover:from-red-700 hover:via-red-600 hover:to-orange-600 hover:shadow-xl hover:shadow-red-600/30 focus:ring-red-300 active:translate-y-0"
            }`}
          >
            <Siren
              className={`h-5 w-5 shrink-0 ${
                isEmergency ? "animate-pulse" : "group-hover:scale-110 transition-transform"
              }`}
            />
            <span>Simulate Maternal Emergency</span>
          </button>

          {isEmergency && (
            <button
              type="button"
              onClick={handleResetSimulation}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-forest-900 bg-white px-6 py-3.5 text-base font-extrabold text-forest-950 shadow-sm transition-all hover:bg-forest-50 focus:outline-none focus:ring-4 focus:ring-forest-700/25 sm:text-lg"
            >
              <RotateCcw className="h-5 w-5 text-forest-800" />
              <span>Reset Simulation</span>
            </button>
          )}
        </section>

        {/* ===================================================================
            5. AI DECISION EXPLANATION PANEL
           =================================================================== */}
        <section
          aria-labelledby="ai-explanation-heading"
          aria-live="polite"
          className={`rounded-2xl border-2 p-4 shadow-card transition-all duration-300 sm:px-6 sm:py-4 ${
            isEmergency
              ? "border-red-300 bg-gradient-to-r from-red-50/95 via-white to-orange-50/90"
              : "border-forest-800/20 bg-white/95"
          }`}
        >
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                  isEmergency
                    ? "bg-red-600 text-white"
                    : "bg-forest-900 text-solar-400"
                }`}
              >
                <BrainCircuit className="h-[18px] w-[18px]" />
              </div>
              <h2
                id="ai-explanation-heading"
                className="text-sm font-extrabold uppercase tracking-wider text-forest-950 sm:text-base"
              >
                AI Decision Explanation
              </h2>
            </div>

            {isEmergency ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-red-900 ring-1 ring-red-300">
                <AlertTriangle className="h-3.5 w-3.5 text-red-700" />
                Emergency Priority Mode
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" />
                Standard Balanced Dispatch
              </span>
            )}
          </div>

          <div
            className={`rounded-xl border px-4 py-3 ${
              isEmergency
                ? "border-red-200 bg-white text-slate-900"
                : "border-slate-200/90 bg-canvas/70 text-slate-800"
            }`}
          >
            {isEmergency ? (
              <p className="text-base font-medium leading-relaxed">
                <strong className="font-extrabold text-red-800">
                  Recommendation:
                </strong>{" "}
                Prioritize Health Post.{" "}
                <strong className="font-extrabold text-forest-950">
                  Reason:
                </strong>{" "}
                Emergency mode is active; battery is below 50%; solar generation
                is declining.{" "}
                <strong className="font-extrabold text-orange-800">
                  Action:
                </strong>{" "}
                Pause water pumping and preserve essential lighting only.
              </p>
            ) : (
              <p className="text-base font-medium leading-relaxed">
                <strong className="font-extrabold text-forest-900">
                  Recommendation:
                </strong>{" "}
                Run water pump until 17:30.{" "}
                <strong className="font-extrabold text-forest-950">
                  Reason:
                </strong>{" "}
                Solar generation is sufficient and battery reserve is stable.
              </p>
            )}
          </div>
        </section>

        {/* ===================================================================
            6. SOLAR FORECAST
           =================================================================== */}
        <SolarForecastChart isEmergency={isEmergency} />

        {/* ===================================================================
            7. "WHY PAHARSHOKTI?" SECTION (3 columns with icons, 1 sentence each)
           =================================================================== */}
        <section
          aria-labelledby="why-paharshokti-heading"
          className="rounded-2xl border border-canvas-border bg-white/95 p-5 shadow-card backdrop-blur-sm sm:p-7"
        >
          <div className="mb-6 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-terracotta-600">
              Community Impact in Chittagong Hill Tracts
            </span>
            <h2
              id="why-paharshokti-heading"
              className="mt-1 text-xl font-extrabold tracking-tight text-forest-950 sm:text-2xl"
            >
              WHY PAHARSHOKTI?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Column 1: Health Resilience */}
            <div className="rounded-2xl border border-slate-200/80 bg-canvas/65 p-5 transition-shadow hover:shadow-md">
              <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-solar-400 shadow-sm">
                <HeartPulse className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-forest-950">
                Health Resilience
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-[15px]">
                Protects uninterrupted electricity for rural maternal care,
                emergency clinic lighting, and vaccine refrigeration when shared
                village battery reserves run low.
              </p>
            </div>

            {/* Column 2: Women's Livelihoods */}
            <div className="rounded-2xl border border-slate-200/80 bg-canvas/65 p-5 transition-shadow hover:shadow-md">
              <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-400/30 text-amber-800 ring-1 ring-amber-400/50 shadow-sm">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-forest-950">
                Women&apos;s Livelihoods
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-[15px]">
                Sustains dependable evening power for community weaving hubs so
                hill-tract women artisans can continue income-generating work
                safely after dusk.
              </p>
            </div>

            {/* Column 3: Water Access */}
            <div className="rounded-2xl border border-slate-200/80 bg-canvas/65 p-5 transition-shadow hover:shadow-md">
              <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-600 ring-1 ring-orange-300/60 shadow-sm">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-forest-950">
                Water Access
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-[15px]">
                Schedules high-draw community water pumping during peak sunshine
                hours so daily clean water collection never depletes critical
                nighttime reserves.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          8. FOOTER
         ===================================================================== */}
      <footer className="relative z-10 mt-6 border-t border-forest-900/15 bg-forest-950 text-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-emerald-100/95 sm:text-[15px]">
            Proof of Concept: This interface demonstrates energy-allocation
            logic using simulated community demand data. It is not a live
            energy-control system or medical decision tool.
          </p>
        </div>
      </footer>
    </div>
  );
}
