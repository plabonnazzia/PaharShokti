# ⚡ PaharShokti (পাহাড়শক্তি — "Hill Power")

**An AI-driven solar microgrid flexibility prototype for off-grid Chittagong Hill Tracts (CHT) communities — prioritizing limited shared battery storage toward what matters most to women: emergency clinic power, evening income-generating lighting, and water access.**

🔗 **Live Demo:** [paharshokti.vercel.app](#)

---

## 🌄 The Problem

Off-grid villages in the Chittagong Hill Tracts rely on small, irregular solar capacity shared across an entire community. When a health emergency occurs — most critically, **childbirth complications** — there is often no mechanism to prioritize scarce stored power toward the health post over other loads like lighting or water pumping.

Women disproportionately bear the consequences of this gap: as primary caregivers, income earners (evening weaving work), and water collectors, they are first affected when the system fails to flex intelligently.

> ⚠️ *CHT-specific statistics are being independently verified before public citation. This prototype's purpose is to demonstrate a decision-support mechanism, not to make unverified claims.*

---

## 💡 The Solution

**PaharShokti** simulates a shared village microgrid where an explainable AI allocation engine continuously decides how to distribute solar + battery power across three competing community loads:

| Load | Priority | Normal Behavior |
|---|---|---|
| 🏥 Health Post | Critical | Always protected, especially during emergencies |
| 🧵 Women's Weaving Hub | High | Powered in evenings for income generation |
| 💧 Community Water Pump | Flexible | Scheduled/paused based on battery reserve |

### The centerpiece feature: "Simulate Maternal Emergency"

One click demonstrates the full decision-logic shift:
- Health Post is immediately protected and prioritized
- Water pump is paused to preserve battery reserve
- Weaving hub lighting is reduced to essential-only
- The AI explains *why* in plain language — no black box

---

## 🧠 How the AI Works

This is a **transparent, explainable rule/weight-based decision model** (not a black-box neural net) — intentionally, because in energy-critical, life-safety contexts, explainability matters more than raw complexity.

**Inputs considered:**
- Current battery state of charge (%)
- Real-time/forecasted solar generation
- Time of day
- Active emergency flag (manual trigger in this prototype; sensor/community-reported in a real deployment)

**Output:** A ranked power allocation decision + a human-readable explanation string, e.g.:

> *"Recommendation: Prioritize Health Post. Reason: Emergency mode is active; battery is below 50%; solar generation is declining. Action: Pause water pumping and preserve essential lighting only."*

Solar generation patterns are informed by real solar irradiance data structure (NASA POWER API methodology); demand and allocation scenarios in this prototype are **synthetic**, built to demonstrate the logic rather than reflect live village telemetry.

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js / React |
| Styling | CSS / Tailwind |
| Charts | Chart.js / Recharts |
| Hosting | Vercel |
| AI Logic | Rule-based explainable allocation model (client-side) |
| Data Reference | NASA POWER API (solar irradiance methodology) |

---

## 📊 Dashboard Sections

1. **Live KPI Cards** — Solar Generation, Battery %, Community Demand, AI Recommendation
2. **Energy Flow Diagram** — Solar → Battery → 3 prioritized loads
3. **Simulate Maternal Emergency** — interactive one-click scenario trigger
4. **AI Decision Explanation Panel** — plain-language reasoning, updates live
5. **Solar Forecast** — illustrative hourly generation curve
6. **Why PaharShokti?** — Health Resilience / Women's Livelihoods / Water Access
7. **Proof-of-Concept Disclaimer** — transparent about synthetic data and scope

---

## ⚠️ Responsible AI & Scope Disclosure

This is a **proof-of-concept prototype**, built for a hackathon/forum application, not a live energy-control or medical-decision system.

- Demand scenarios and the emergency trigger are **simulated**, not connected to real sensors or real village data.
- Solar generation patterns are illustrative, modeled on real-world solar data methodology (NASA POWER).
- A real-world pilot would require: local sensor hardware, community consent and co-design, NGO/government partnership, and clinical validation with health post staff.
- The AI model is intentionally simple and explainable — appropriate for a context where human oversight and trust are more important than opaque accuracy gains.

---

## 🎯 Alignment with SDG Objectives

| Objective | How PaharShokti Addresses It |
|---|---|
| Amplify youth voices | Centers an underrepresented group (CHT women) in energy equity policy discourse |
| Build technical understanding | Demonstrates grid storage, flexibility, and demand-prioritization concepts hands-on |
| Capacity building | Built as a working solo/team prototype under real time constraints |
| Financing the transition | Proposes realistic funding pathways: IDCOL, microfinance, climate adaptation funds, youth-led cooperative ownership |
| Partnerships | Identifies potential collaborators: SREDA, CHT Development Board, local universities, solar NGOs |

---

## 🚀 Running Locally

```bash
git clone https://github.com/plabonnazzia/PaharShokti.git
cd PaharShokti
npm install
npm run dev
