import React from "react";

export function MountainBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Subtle warm solar glow behind upper horizon */}
      <div
        className="absolute -top-28 left-1/2 h-[420px] w-[960px] -translate-x-1/2 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 183, 0, 0.20) 0%, rgba(249, 115, 22, 0.08) 45%, rgba(247, 246, 241, 0) 75%)",
        }}
      />

      {/* Upper Chittagong Hill Tracts distant ridge silhouette */}
      <svg
        className="absolute top-14 left-0 w-full h-[290px] text-forest-900 opacity-[0.065]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 224L96 176C165 142 238 148 310 182L412 230L538 134C608 82 695 84 766 138L892 232L1018 146C1084 101 1168 98 1238 138L1356 205L1440 168V320H0V224Z"
          fill="currentColor"
        />
        <path
          d="M0 268L142 208C212 178 292 184 358 220L486 290L648 184C718 138 808 140 876 188L1024 292L1178 196C1242 156 1322 154 1388 190L1440 218V320H0V268Z"
          fill="#164E3B"
          fillOpacity="0.65"
        />
      </svg>

      {/* Bottom Rangamati layered hills silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[260px]"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Far ridge */}
        <path
          d="M0 178L118 118C184 85 262 88 326 125L448 196L592 98C664 49 758 51 828 102L968 204L1112 114C1178 73 1262 72 1329 112L1440 178V280H0V178Z"
          fill="#0F3D2E"
          fillOpacity="0.055"
        />
        {/* Mid ridge */}
        <path
          d="M0 212L165 152C232 128 306 134 368 168L516 248L690 146C758 106 842 108 908 150L1066 250L1224 164C1286 130 1360 129 1440 168V280H0V212Z"
          fill="#164E3B"
          fillOpacity="0.07"
        />
        {/* Foreground valley contour */}
        <path
          d="M0 246C180 212 340 218 520 250C710 284 910 210 1120 232C1255 246 1360 262 1440 242V280H0V246Z"
          fill="#0F3D2E"
          fillOpacity="0.085"
        />
      </svg>
    </div>
  );
}
