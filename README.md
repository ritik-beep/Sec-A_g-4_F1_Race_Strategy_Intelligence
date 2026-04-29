<div align="center">

<!-- HERO BANNER -->
<img src="assets/banner.png" alt="F1 Race Strategy Intelligence — Telemetry & Analytics" width="100%" />

<br/>

<!-- F1 LOGO -->
<img src="assets/f1-abu-dhabi-gp-2017-f1-logo-6614911.jpg" alt="Formula 1 Logo" width="120" />

<br/><br/>

# Formula 1 Race Strategy Intelligence

### _Decoding the Science Behind Every Pit Call, Grid Slot & Championship Point_

<br/>

**National School of Technology** &nbsp;·&nbsp; DVA Capstone Project &nbsp;·&nbsp; Gate 1 &nbsp;·&nbsp; Section A, Group 4

<br/>

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Jupyter](https://img.shields.io/badge/Jupyter-Notebooks-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org)
[![Tableau](https://img.shields.io/badge/Tableau-Dashboards-E97627?style=for-the-badge&logo=tableau&logoColor=white)](https://tableau.com)
[![Kaggle](https://img.shields.io/badge/Kaggle-Dataset-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://www.kaggle.com/datasets/jtrotman/formula-1-race-data)
[![License](https://img.shields.io/badge/License-Academic-red?style=for-the-badge)](#)

<br/>

<img src="assets/icons.png" alt="F1 Analytics Icons — Steering, Pit Timer, Data, Circuits, Flags" width="420"/>

</div>

<br/>

---

<br/>

## Project Overview

> **In Formula 1, races are won and lost in the data — not just on the track.**

This repository contains the comprehensive data analysis and visualization for the **Formula 1 Race Strategy Intelligence** project. This study examines the multi-faceted determinants of race outcomes, moving beyond raw car performance to evaluate how **strategic execution** — including qualifying precision, pit stop efficiency, and circuit-specific tactics — influences a constructor's position in the Championship standings.

<br/>

---

<br/>

## Master Documentation

<div align="center">

| Status | Document | Description |
| :---: | :--- | :--- |
| DOCUMENT | [**Master Project Document**](https://docs.google.com/document/d/1rMlTm188s5ELVhODmY1sF_PMzNEJwIwD1xeBISw3xlI/edit?tab=t.0) | Centralized repository for project progress and deep analysis notes. |
| DOCUMENT | [**Gate 1 Project Proposal**](https://docs.google.com/document/d/1hgF-8RlZUbNi2d4QI_K483mzBwbZpYF8/edit?usp=sharing&ouid=103256623304686024418&rtpof=true&sd=true) | Formal Gate 1 submission — problem statement, methodology & dataset quality. |

</div>

<br/>

---

<br/>

## Technical Problem Statement

### Sector: Motorsport & Predictive Analytics

<details>
<summary><b>Contextual Background</b> — <i>click to expand</i></summary>
<br/>

Formula 1 constructors inhabit a **hyper-competitive, data-saturated environment**. For mid-field teams (typically finishing between 4th and 7th in the Constructors' Championship), technical development budgets are often dwarfed by front-running teams. Consequently, **tactical optimization** — specifically regarding pit stop strategy and circuit-specific maneuvers — becomes the primary differentiator for maximizing season points and associated prize allocations.

</details>

<br/>

### Core Business Question

> *What is the measurable impact of starting grid position, pit stop efficiency (duration and frequency), and circuit topography on a driver's final classification? Furthermore, which controllable strategic variables should a mid-field constructor prioritize to optimize point accumulation across a diverse racing calendar?*

<br/>

### Strategic Decision Support

This analysis is designed to empower **Race Strategists** to:

| Priority | Objective | Description |
| :---: | :--- | :--- |
| OPTIMIZE | **Optimize Pit Strategy** | Determine the statistical efficacy of one-stop vs. two-stop strategies across various circuit categories. |
| ANALYZE | **Resource Allocation** | Quantify the "Points Dividend" of numeric improvements in pit crew efficiency versus qualifying pace. |
| BENCHMARK | **Benchmarking** | Evaluate the "Grid-to-Finish" performance delta against direct competitors to identify operational strengths. |

<br/>

---

<br/>

## Contribution Matrix & Team Leadership

<div align="center">

| Team Member | Dataset & Sourcing | ETL & Cleaning | EDA & Analysis | Statistical Analysis | Tableau Dashboard | Report Writing | PPT & Viva |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Mitul Bhatia (Lead)** | ✔️ | ✔️ | ✔️ | ✔️ | | ✔️ | ✔️ |
| **Kushal Sarkar** | | | | ✔️ | ✔️ | ✔️ | ✔️ |
| **Ramani Dhruv D.** | ✔️ | ✔️ | ✔️ | | | | ✔️ |
| **Vetriselvan R** | ✔️ | ✔️ | | | | ✔️ | ✔️ |
| **Agrim K. Malhotra**| | | ✔️ | ✔️ | | | ✔️ |
| **Ritik Ranjan** | | | | ✔️ | | ✔️ | ✔️ |
| **Palaparthi H.** | | | ✔️ | ✔️ | | | ✔️ |

*Note: As Team Lead, Mitul Bhatia oversaw and actively contributed to all technical and analytical aspects of the project, with the exception of the Tableau Dashboard creation which was led by Kushal Sarkar.*

</div>

<br/>

---

<br/>

## Dataset Methodology

<div align="center">

[![Ergast F1 Database](https://img.shields.io/badge/Primary_Source-Ergast_F1_Motor_Racing_Database_(Kaggle)-E10600?style=for-the-badge)](https://www.kaggle.com/datasets/jtrotman/formula-1-race-data)

</div>

<br/>

### Data Analytics Profile

<div align="center">

| Metric | Value |
| :--- | :--- |
| **Total Observations** | `726,600+` records across 14 relational entities |
| **Temporal Coverage** | 1950 — 2026 _(76 full seasons)_ |
| **Dimensionality** | `111` unique attributes |
| **Key Variables** | `grid` · `position` / `points` · `milliseconds` · `circuitId` |

</div>

<br/>

---

<br/>

## Preliminary Analytical Framework

### Key Performance Indicators (KPIs)

<table>
  <tr>
    <td width="50%">

**1 · Grid-to-Finish Excellence Delta**

```
Delta = Grid Position - Final Finishing Position
```

Isolates **race-day execution** from pure qualifying pace. A positive value indicates positions gained during the race.

</td>
    <td width="50%">

**2 · Operational Efficiency Score**

```
OES = Sum(avg pit stop duration) / season
```

A seasonally aggregated measure of average pit stop duration per constructor — tests correlation between mechanical speed and championship points.

</td>
  </tr>
</table>

<br/>

### Hypothesized Insights

> We anticipate that **qualifying position** will remain the dominant predictor of outcome on high-downforce, low-overtaking circuits. Conversely, on **power-sensitive circuits** with high overtaking frequency, pit stop strategy and efficiency will play a disproportionately larger role in determining final classification.

<br/>

---

<br/>

## Implementation Roadmap

To successfully transform the Ergast Database into actionable analytics, we follow a rigorously phased roadmap.

### ✅ What Has Been Implemented
- **Notebook 01 (Extraction):** Extracted `14` unedited relational CSV files while preserving text structures for accurate null tracking.
- **Notebook 02 (Cleaning):** Addressed data gaps, categorized DNFs, parsed string time data to robust continuous millisecond durations, and generated the fundamental `master_fact.csv`.
- **Notebook 03 (EDA Phase):** Derived and visualized **8 critical metrics** including points efficiency trends, DNF rates, Grid-to-Finish distributions (the hero metric), pit stop operational speeds, winning conversion scatter plots, and constructed correlation matrices specifically scaled for continuous numerical KPIs.
- **Notebook 04 (Statistical Methods):** Completed OLS Regression proving Grid Position yields a β ≈ -0.6 impact on points, conducted hypothesis testing on pit stop significance (p < 0.05), and launched **K-Means Clustering (K=3)** to successfully categorize all unique race tracks into `Qualifying-Dominant`, `Strategy-Dominant`, or `Mixed` archetypes.

### ⏳ Further Implementation & Next Steps
- **Notebook 05 (Tableau Load Prep):** Optimize outputs by casting booleans to binary integers and standardizing circuit identifiers into a comprehensive `circuit_strategy_profile.csv`.
- **Notebook 06 (Bonus Track Strategies):** Refine circuit analysis to determine compound/tire wear bias, pit window percentiles, and construct track radar charts logically mapped to the K-Means clusters.
- **Interactive Dashboards Formulation:** Hand-off processed outputs into the **4 Core Tableau Dashboards** (Executive View, Pit Strategy, Grid Delta Race Craft, and the Tactical Circuit Intelligence map). 
- **Presenting Actionable Outcomes:** Consolidating insights into the Final Project Reporting and our 10-slide strategy desk deployment. 

<br/>

---

<br/>

## Project Architecture

```
Sec-A_g-4_F1_Race_Strategy_Intelligence/
│
├── data/
│   ├── raw/                              # Original Ergast F1 dataset files
│   └── processed/                        # Cleaned and engineered feature sets
│
├── notebooks/
│   ├── 01_extraction.ipynb               # API/CSV data ingestion workflows
│   ├── 02_cleaning.ipynb                 # Handling missing values & schema alignment
│   ├── 03_eda.ipynb                      # Exploratory analysis & pit stop benchmarking
│   ├── 04_statistical_analysis.ipynb     # Hypothesis testing & predictive modeling
│   └── 05_final_load_prep.ipynb          # Final prep for Tableau integration
│
├── scripts/
│   └── etl_pipeline.py                   # Automated data processing scripts
│
├── tableau/
│   ├── screenshots/                      # Visual previews of dashboard components
│   └── dashboard_links.md                # Access URLs for interactive Tableau workbooks
│
├── docs/
│   └── data_dictionary.md                # Detailed mapping of relational variables
│
├── reports/
│   ├── project_report.pdf                # Comprehensive technical documentation
│   └── presentation.pdf                  # Stakeholder presentation deck
│
├── DVA-focused-Portfolio/              # Project-specific portfolio assets
├── DVA-oriented-Resume/               # Resume tailored for Data Analytics roles
├── assets/                            # Logo, banner & visual assets
│
└── README.md                          # Main project documentation
```

<br/>

---

<br/>

<div align="center">

<img src="assets/f1-abu-dhabi-gp-2017-f1-logo-6614911.jpg" alt="F1 Logo" width="60" />

<br/><br/>

**Built with precision. Driven by data.**

<sub>© 2026 Formula 1 Race Strategy Intelligence Team · National School of Technology · All Rights Reserved.</sub>

<br/><br/>

[![Made with Data](https://img.shields.io/badge/Made_with-Data_and_Analytics-E10600?style=flat-square)](#)

</div>
