# Simple Project Breakdown: Notebooks 1 - 5

This document explains exactly what we did in each step of the pipeline and, more importantly, **why** we did it.

---

## [01] Data Extraction
**What we did:** Loaded 14 raw files from the Ergast database.
**Why we did it:** 
*   **The `\N` Problem:** F1 data uses `\N` to mean "empty." If we just loaded it normally, Python would get confused between numbers and text. We loaded everything as text first so we could find and fix every single one of these "ghost" values.

---

## [02] Data Cleaning & Feature Engineering
**What we did:** Turned messy lists into a single "Master Table."
**Why we did it:** 
*   **DNF Categories:** We didn't just want to know *if* a car stopped; we wanted to know *why*. We grouped "Engines," "Gearboxes," and "Hydraulics" into a **Mechanical** category. This helps a team see if they are losing points to reliability or crashes.
*   **The "Delta" Metric:** We created the `grid_to_finish_delta`. 
    *   *Calculation:* (Start Position) - (Finish Position). 
    *   *Rationale:* This is the purest measure of **Race Strategy**. If you start 10th and finish 6th, your strategy worked (+4). If you start 2nd and finish 5th, your strategy failed (-3).
*   **Circuit Profiling:** We calculated how hard it is to overtake at all 78 tracks in F1 history. This allows the Analyst to set different expectations for Monaco versus Silverstone.

---

## [03] Exploratory Data Analysis (EDA)
**What we did:** Created 12 specific charts to find patterns.
**Why we did it:** 
*   **Era Comparison:** We plotted gains across different "Eras" (Turbo, V10, Hybrid). 
    *   *The Discovery:* We proved that in the modern **Hybrid Era**, it is much harder to gain positions through strategy than it was in the 90s. This tells our Analyst: "Qualifying is now more important than ever."
*   **The Mid-Field Gap:** we compared Top-3 teams to the rest. This confirmed that our "Mid-field" target users are in a unique battle where one fast pit stop can change their entire championship standing.

---

## [04] Statistical Analysis
**What we did:** Used math to prove our theories.
**Why we did it:** 
*   **Regression (The Points Predictor):** We ran a model to see what predicts points best.
    *   *The Result:* It proved that **Qualifying** is the #1 predictor, but **Pit Stop Speed** is a statistically significant #2. This justifies spending money on a faster pit crew.
*   **Clustering (Track Archetypes):** We used an AI algorithm (K-Means) to group tracks into 3 types:
    1.  **Qualifying-Dominant:** (Start well or lose).
    2.  **Strategy-Dominant:** (Good tires and passing can win it).
    3.  **Mixed:** (A bit of both).
    *   *Rationale:* This tells a team exactly which "setup" to bring to a specific weekend.

---

## [05] Final Load & Prep
**What we did:** Polished the data for the Dashboard.
**Why we did it:** 
*   **Tableau Optimization:** Tableau (our dashboard tool) likes numbers better than "True/False" words. We converted all checkboxes into `1` (Yes) or `0` (No). This makes it easy to calculate "Win %" or "Finish %" with one click.
*   **The Safety Check:** We ran "Assertions" to make sure we still had exactly **27,304** rows. 
    *   *Rationale:* In big data projects, it's easy to accidentally "delete" a race while cleaning. This check ensures our final dashboard is 100% accurate.

---

### Summary
1.  **Notebook 1:** Get the data.
2.  **Notebook 2:** Make the data smart.
3.  **Notebook 3:** See the data trends.
4.  **Notebook 4:** Prove the data math.
5.  **Notebook 5:** Ship the data to the user.
