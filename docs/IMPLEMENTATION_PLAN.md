# F1 Project Implementation Plan

## Current Issues

### Notebook 03 (EDA)
- **Current**: 12 charts with descriptive titles
- **Required**: Exactly 8 sections with insight-driven titles
- **Problem**: Chart titles are descriptive (e.g., "Points by Constructor") instead of insight-driven (e.g., "McLaren and Alpine Have Highest Points Efficiency Among Mid-Field Teams Since 2018")

### Notebook 04 (Statistical Analysis)
- **Current**: Partially complete with some sections
- **Required**: 6 clear sections with plain English conclusions
- **Problem**: Missing clear section headers, needs plain English interpretations

### Notebook 05 (Final Load Prep)
- **Current**: Basic structure exists
- **Required**: Tableau-specific transformations
- **Problem**: Needs boolean to int conversion, driver_name_display, constructor_short codes

## Required 8 Sections for Notebook 03

According to the requirements (from pdf.txt), the 8 sections should be:

1. **Section 1**: Points Efficiency trend per constructor (2010-2024)
2. **Section 2**: DNF Rate by constructor and by dnf_category
3. **Section 3**: Grid-to-Finish Delta distribution per constructor (box plot)
4. **Section 4**: Pit Stop Efficiency: avg pit duration per constructor per year trend
5. **Section 5**: Win/Podium Conversion Rate by constructor
6. **Section 6**: Qualifying Gap to Pole by constructor (violin plot)
7. **Section 7**: Correlation matrix of all numeric KPIs
8. **Section 8**: Era comparison: key KPIs split by era column

## Required 6 Sections for Notebook 04

1. **Section 1**: Analysis Scope Definition (already exists)
2. **Section 2**: OLS Regression (points ~ grid + stop_count + avg_pit_ms)
3. **Section 3**: Hypothesis Test (fast vs slow pit stops → grid_to_finish_delta)
4. **Section 4**: K-Means Circuit Clustering (K=3)
5. **Section 5**: Pearson Correlation by Cluster + Stop Count Analysis
6. **Section 6**: Summary of Findings (5 Key Findings)

## Implementation Steps

1. Read complete notebooks 03, 04, 05
2. Restructure notebook 03 to have exactly 8 sections with insight-driven titles
3. Complete notebook 04 with 6 sections and plain English conclusions
4. Add Tableau transformations to notebook 05
5. Verify all outputs are correct

## Next Actions

Starting implementation now...
