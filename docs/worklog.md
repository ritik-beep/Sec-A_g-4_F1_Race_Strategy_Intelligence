# Project Worklog — F1 Race Strategy Intelligence

## Project Overview
- **Goal:** Determine strategic levers (qualifying, pit stops, circuit type) that predict championship points for mid-field F1 constructors.
- **Decision-Maker:** Performance Analyst at a mid-field F1 constructor (4th–7th in ranking).
- **Final Output:** Tableau Dashboard and Capstone Report.

---

## Data Pipeline & Transformation Log

### [01] Extraction (`01_extraction.ipynb`)
- **Action:** Extracted 14 raw CSV files from Ergast F1 database.
- **Optimization:** Loaded all files with `dtype=str` to prevent the truncation of literal `\N` strings (Ergast's null convention).
- **Artifacts:** `results.csv`, `lap_times.csv`, `pit_stops.csv`, `qualifying.csv`, `races.csv`, `circuits.csv`, `drivers.csv`, `constructors.csv`, `status.csv`, `constructor_standings.csv`, `driver_standings.csv`, `constructor_results.csv`, `sprint_results.csv`, `seasons.csv`.

### [02] Cleaning & Transformation (`02_cleaning.ipynb`)
- **Action:** Structured the raw fact and dimension tables into the finalized analysis schema.
- **Key Transformations:**
    - **Null Handling:** Replaced literal `\N` with `pd.NA`.
    - **DNF Mapping:** Categorized `statusId` into `Finished`, `Accident`, `Mechanical`, `DNQ`, and `Other` using a custom mapping.
    - **KPI Definition:** Derived `grid_to_finish_delta` (Grid - PositionOrder).
    - **Circuit Profiling:** Aggregated historical race data (all 78 circuits) to calculate average position gains and degradation indicators.
    - **Scoping:** Filtered pit stop and qualifying performance analysis to 2010–2024 for data density.
- **Outputs:** 
    - `master_fact.csv` (Primary Fact Table)
    - `constructor_season_kpis.csv` (Team KPIs)
    - `circuit_strategy_profile.csv` (Circuit Dimensions)

### [03] Exploratory Data Analysis (`03_eda.ipynb`)
- **Action:** Visualized key strategic levers and verified distributions.
- **Insight focus:** Moved from generic labels to insight-driven titles (e.g., "Win Conversion from Pole significantly higher for Top 3 constructors").

### [04] Statistical Analysis (`04_statistical_analysis.ipynb`)
- **Action:** Performed regression, hypothesis testing, and clustering.
- **Key Transformations:**
    - **OLS Regression:** Modeled `points` against `grid`, `pit_stop_count`, and `avg_pit_ms`.
    - **K-Means Clustering:** Segmented circuits into 3 archetypes: `Qualifying-Dominant`, `Strategy-Dominant`, and `Mixed`.
- **Outputs:** Updated `circuit_strategy_profile.csv` with `cluster_label`.

### [05] Final Load Prep (`05_final_load_prep.ipynb`)
- **Action:** Applied strict formatting for Tableau and performed final data integrity assertions.
- **Tableau Optimization:**
    - **Boolean Casting:** Converted `is_win`, `is_pole`, `is_dnf` to `0/1` integers (enables direct aggregation in Tableau).
    - **NaN Safety:** Filled `grid` NaNs with `0` (mapping to pit-lane starts) to ensure integer consistency.
    - **String Normalization:** Formatted `driver_name_display` ("Surname, Forename") and mapped constructors to short codes (e.g., "RBR").
- **Outputs:** Final production CSVs in `data/processed/`.

---

## Technical Transformation Summary (LLM Optimized)

| Feature | Transformation Logic | Analysis Purpose |
| :--- | :--- | :--- |
| `grid_to_finish_delta` | `grid - positionOrder` | Measure of "race craft" independent of qualifying performance. |
| `is_dnf` | `1 if statusId not in {1,11..19} else 0` | Isolates mechanical and driver error from classified finishers. |
| `cluster_label` | K-Means (K=3) on delta, qual_gap, and variance | Categorizes circuits for filtered strategy recommendations. |
| `grid` (NaNs) | `fillna(0)` | Correctly classifies pit-lane starts for position-gain calculations. |
| `points_efficiency` | `SUM(points) / COUNT(races)` | Normalizes team performance across varying season lengths. |

---

## Maintenance Notes
- **Source of Truth:** All files in `data/processed/` are derived from notebooks 01-05. Manual edits to CSVs should be avoided.
- **Validation:** Notebook 05 must be run before any dashboard deployment to ensure schema consistency.
- **Dependencies:** `pandas`, `numpy`, `statsmodels`, `sklearn`.
