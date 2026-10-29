"use client";

import React from "react";
import { SunMedium, TrendingDown } from "lucide-react";

interface SolarForecastChartProps {
  isEmergency: boolean;
}

const FORECAST_POINTS = [
  {
    time: "12:00",
    level: "High",
    kw: "1.8 kW",
    heightPct: 92,
    badgeClass: "bg-amber-100 text-amber-950 ring-amber-400",
    barClass: "from-solar-400 via-amber-400 to-solar-500",
    sublabel: "Peak midday irradiance",
  },
  {
    time: "14:00",
    level: "Medium",
    kw: "1.2 kW",
    heightPct: 62,
    badgeClass: "bg-orange-100 text-orange-950 ring-orange-300",
    barClass: "from-amber-400 via-orange-400 to-terracotta-500",
    sublabel: "Afternoon shoulder",
  },
  {
    time: "16:00",
    level: "Low",
    kw: "0.5 kW",
    heightPct: 30,
    badgeClass: "bg-terracotta-100 text-terracotta-600 ring-orange-300",
    barClass: "from-orange-400 to-terracotta-600",
    sublabel: "Late-day decline",
  },
  {
    time: "18:00",
    level: "Near-zero",
    kw: "0.05 kW",
    heightPct: 8,
    badgeClass: "bg-slate-200 text-slate-800 ring-slate-300",
    barClass: "from-slate-400 to-slate-500",
    sublabel: "Dusk • Battery-only window",
  },
];

export function SolarForecastChart({ isEmergency }: SolarForecastChartProps) {
  return (
    <section
      aria-labelledby="forecast-heading"
      className="rounded-2xl border border-canvas-border bg-white/95 p-5 shadow-card backdrop-blur-sm sm:p-7"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-300/70">
            <SunMedium className="h-6 w-6" />
          </div>
          <div>
            <h2
              id="forecast-heading"
              className="text-lg font-extrabold tracking-tight text-forest-950 sm:text-xl"
            >
              Solar Forecast (Afternoon — Dusk Curve)
            </h2>
            <p className="text-sm text-slate-600">
              Projected village array generation guiding evening battery reserve
              decisions
            </p>
          </div>
        </div>

        {isEmergency && (
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold text-orange-900 ring-1 ring-orange-300">
            <TrendingDown className="h-4 w-4 text-orange-600" />
            Declining solar window factored into AI priority lock
          </div>
        )}
      </div>

      {/* Chart Plot Area */}
      <div className="relative rounded-2xl border border-slate-200/80 bg-canvas/70 px-4 pt-6 pb-5 sm:px-8">
        {/* Subtle horizontal reference grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-16 bottom-16 flex flex-col justify-between"
        >
          <div className="border-b border-dashed border-slate-300/70" />
          <div className="border-b border-dashed border-slate-300/70" />
          <div className="border-b border-dashed border-slate-300/70" />
          <div className="border-b border-slate-300" />
        </div>

        {/* Smooth SVG trend curve overlay behind/across columns on desktop */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-16 h-[180px] w-[calc(100%-4rem)] hidden sm:block"
          viewBox="0 0 800 180"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 100 16 C 210 24, 240 68, 300 72 C 390 78, 430 124, 500 128 C 585 132, 640 164, 700 166"
            stroke="#EA580C"
            strokeOpacity="0.35"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
        </svg>

        {/* 4 Time Point Columns */}
        <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {FORECAST_POINTS.map((point, idx) => {
            const isDecliningHighlight = isEmergency && idx >= 2;
            return (
              <div
                key={point.time}
                className={`flex flex-col items-center rounded-xl p-2 transition-colors ${
                  isDecliningHighlight
                    ? "bg-orange-100/50 ring-1 ring-orange-300/80"
                    : ""
                }`}
              >
                {/* Level Pill + kW */}
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-extrabold ring-1 ${point.badgeClass}`}
                >
                  {point.level}
                </span>
                <span className="mt-1 text-xs font-bold text-slate-600 tabular-nums">
                  {point.kw}
                </span>

                {/* Vertical Bar Track */}
                <div className="mt-3 flex h-44 w-full max-w-[92px] items-end justify-center rounded-xl bg-slate-200/65 p-1.5 inner-shadow">
                  <div
                    className={`w-full rounded-lg bg-gradient-to-t ${point.barClass} shadow-sm transition-all duration-500`}
                    style={{ height: `${point.heightPct}%` }}
                  />
                </div>

                {/* Time Point Label */}
                <div className="mt-3 text-center">
                  <div className="text-base font-extrabold text-forest-950 tabular-nums sm:text-lg">
                    {point.time}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-slate-600">
                    {point.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Required Prototype Data Note Caption */}
      <p className="mt-4 text-center text-sm font-medium text-slate-600">
        Prototype data note: Solar pattern is illustrative; real deployment
        would integrate live local solar and battery sensor data.
      </p>
    </section>
  );
}
