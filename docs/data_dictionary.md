# The Absolute Data Dictionary — F1 Race Strategy Intelligence
This document provides an exhaustive, row-by-row breakdown of every single column in the project pipeline.

# Section: RAW DATA

## circuits.csv
*Grain: 78 rows, 9 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| circuitId | int64 | Primary/Foreign key linkage | 1 | 0 |
| circuitRef | object | RAW DATA field | albert_park | 0 |
| name | object | Identifying name/label | Albert Park Grand Prix... | 0 |
| location | object | RAW DATA field | Melbourne | 0 |
| country | object | RAW DATA field | Australia | 0 |
| lat | float64 | RAW DATA field | -37.8497 | 0 |
| lng | float64 | RAW DATA field | 144.968 | 0 |
| alt | int64 | RAW DATA field | 10 | 0 |
| url | object | RAW DATA field | http://en.wikipedia.or... | 0 |

---

## constructor_results.csv
*Grain: 12898 rows, 5 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| constructorResultsId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| points | float64 | RAW DATA field | 14.0 | 0 |
| status | object | RAW DATA field | \N | 0 |

---

## constructor_standings.csv
*Grain: 13664 rows, 7 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| constructorStandingsId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| points | float64 | RAW DATA field | 14.0 | 0 |
| position | object | RAW DATA field | 1 | 0 |
| positionText | object | RAW DATA field | 1 | 0 |
| wins | int64 | RAW DATA field | 1 | 0 |

---

## constructors.csv
*Grain: 214 rows, 5 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| constructorRef | object | RAW DATA field | mclaren | 0 |
| name | object | Identifying name/label | McLaren | 0 |
| nationality | object | RAW DATA field | British | 0 |
| url | object | RAW DATA field | http://en.wikipedia.or... | 0 |

---

## driver_standings.csv
*Grain: 35427 rows, 7 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| driverStandingsId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 1 | 0 |
| points | float64 | RAW DATA field | 10.0 | 0 |
| position | object | RAW DATA field | 1 | 0 |
| positionText | object | RAW DATA field | 1 | 0 |
| wins | int64 | RAW DATA field | 1 | 0 |

---

## drivers.csv
*Grain: 865 rows, 9 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| driverId | int64 | Primary/Foreign key linkage | 1 | 0 |
| driverRef | object | RAW DATA field | hamilton | 0 |
| number | object | RAW DATA field | 44 | 0 |
| code | object | RAW DATA field | HAM | 0 |
| forename | object | Identifying name/label | Lewis | 0 |
| surname | object | Identifying name/label | Hamilton | 0 |
| dob | object | RAW DATA field | 1985-01-07 | 0 |
| nationality | object | RAW DATA field | British | 0 |
| url | object | RAW DATA field | http://en.wikipedia.or... | 0 |

---

## lap_times.csv
*Grain: 600,000+ rows, 6 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| raceId | int64 | Primary/Foreign key linkage | 841 | Var |
| driverId | int64 | Primary/Foreign key linkage | 20 | Var |
| lap | int64 | RAW DATA field | 1 | Var |
| position | int64 | RAW DATA field | 1 | Var |
| time | object | RAW DATA field | 1:38.109 | Var |
| milliseconds | int64 | Duration measured in seconds | 98109 | Var |

---

## pit_stops.csv
*Grain: 22193 rows, 7 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| raceId | int64 | Primary/Foreign key linkage | 258 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 100 | 0 |
| stop | int64 | RAW DATA field | 1 | 0 |
| lap | int64 | RAW DATA field | 1 | 0 |
| time | object | RAW DATA field | 14:01:34 | 0 |
| duration | object | RAW DATA field | 49.111 | 0 |
| milliseconds | object | Duration measured in seconds | 49111 | 0 |

---

## qualifying.csv
*Grain: 11036 rows, 9 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| qualifyId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 1 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| number | int64 | RAW DATA field | 22 | 0 |
| position | int64 | RAW DATA field | 1 | 0 |
| q1 | object | RAW DATA field | 1:26.572 | 0 |
| q2 | object | RAW DATA field | 1:25.187 | 0 |
| q3 | object | RAW DATA field | 1:26.714 | 0 |

---

## races.csv
*Grain: 1171 rows, 18 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| raceId | int64 | Primary/Foreign key linkage | 1 | 0 |
| year | int64 | Competition season year | 2009 | 0 |
| round | int64 | RAW DATA field | 1 | 0 |
| circuitId | int64 | Primary/Foreign key linkage | 1 | 0 |
| name | object | Identifying name/label | Australian Grand Prix | 0 |
| date | object | RAW DATA field | 2009-03-29 | 0 |
| time | object | RAW DATA field | 06:00:00 | 0 |
| url | object | RAW DATA field | http://en.wikipedia.or... | 0 |
| fp1_date | object | RAW DATA field | \N | 0 |
| fp1_time | object | RAW DATA field | \N | 0 |
| fp2_date | object | RAW DATA field | \N | 0 |
| fp2_time | object | RAW DATA field | \N | 0 |
| fp3_date | object | RAW DATA field | \N | 0 |
| fp3_time | object | RAW DATA field | \N | 0 |
| quali_date | object | RAW DATA field | \N | 0 |
| quali_time | object | RAW DATA field | \N | 0 |
| sprint_date | object | RAW DATA field | \N | 0 |
| sprint_time | object | RAW DATA field | \N | 0 |

---

## results.csv
*Grain: 27304 rows, 18 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| resultId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 1 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| number | object | RAW DATA field | 22 | 0 |
| grid | object | RAW DATA field | 1 | 0 |
| position | object | RAW DATA field | 1 | 0 |
| positionText | object | RAW DATA field | 1 | 0 |
| positionOrder | int64 | RAW DATA field | 1 | 0 |
| points | float64 | RAW DATA field | 10.0 | 0 |
| laps | int64 | RAW DATA field | 58 | 0 |
| time | object | RAW DATA field | 1:34:50.616 | 0 |
| milliseconds | object | Duration measured in seconds | 5690616 | 0 |
| fastestLap | object | RAW DATA field | 39 | 0 |
| rank | object | RAW DATA field | 2 | 0 |
| fastestLapTime | object | RAW DATA field | 1:27.452 | 0 |
| fastestLapSpeed | object | RAW DATA field | 218.3 | 0 |
| statusId | int64 | Primary/Foreign key linkage | 1 | 0 |

---

## seasons.csv
*Grain: 77 rows, 2 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| year | int64 | Competition season year | 2009 | 0 |
| url | object | RAW DATA field | http://en.wikipedia.or... | 0 |

---

## sprint_results.csv
*Grain: 502 rows, 17 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| resultId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 1061 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 830 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 9 | 0 |
| number | int64 | RAW DATA field | 33 | 0 |
| grid | int64 | RAW DATA field | 2 | 0 |
| position | object | RAW DATA field | 1 | 0 |
| positionText | object | RAW DATA field | 1 | 0 |
| positionOrder | int64 | RAW DATA field | 1 | 0 |
| points | int64 | RAW DATA field | 3 | 0 |
| laps | int64 | RAW DATA field | 17 | 0 |
| time | object | RAW DATA field | 25:38.426 | 0 |
| milliseconds | object | Duration measured in seconds | 1538426 | 0 |
| fastestLap | object | RAW DATA field | 14 | 0 |
| fastestLapTime | object | RAW DATA field | 1:30.013 | 0 |
| statusId | int64 | Primary/Foreign key linkage | 1 | 0 |
| rank | object | RAW DATA field | \N | 0 |

---

## status.csv
*Grain: 140 rows, 2 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| statusId | int64 | Primary/Foreign key linkage | 1 | 0 |
| status | object | RAW DATA field | Finished | 0 |

---

# Section: PROCESSED DATA

## circuit_strategy_profile.csv
*Grain: 77 rows, 19 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| circuitId | int64 | Primary/Foreign key linkage | 1 | 0 |
| circuit_name | object | Identifying name/label | Albert Park Grand Prix... | 0 |
| country | object | PROCESSED DATA field | Australia | 0 |
| lat | float64 | PROCESSED DATA field | -37.8497 | 0 |
| lng | float64 | PROCESSED DATA field | 144.968 | 0 |
| total_races | float64 | PROCESSED DATA field | 15.0 | 43 |
| avg_delta | float64 | Calculated mean average | 2.1818181818181817 | 43 |
| avg_qualifying_gap | float64 | Calculated mean average | 2327.714285714286 | 43 |
| lap_time_variance | float64 | PROCESSED DATA field | 36718.87700338754 | 43 |
| best_strategy_stops | float64 | PROCESSED DATA field | 1.0 | 43 |
| avg_1stop_position | float64 | Calculated mean average | 6.95 | 44 |
| avg_2stop_position | float64 | Calculated mean average | 8.580246913580247 | 44 |
| overtaking_score | object | PROCESSED DATA field | Medium | 43 |
| cluster_id | int64 | PROCESSED DATA field | 2 | 0 |
| cluster_label | object | PROCESSED DATA field | Strategy-Dominant | 44 |
| cluster | int64 | PROCESSED DATA field | 0 | 0 |
| qualifying_lock_in_score | float64 | PROCESSED DATA field | 43.1 | 43 |
| optimal_stop_count | int64 | PROCESSED DATA field | 1 | 0 |
| compound_bias | int64 | PROCESSED DATA field | 0 | 0 |

---

## constructor_season_kpis.csv
*Grain: 1132 rows, 17 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| constructor_name | object | Identifying name/label | McLaren | 0 |
| year | int64 | Competition season year | 1968 | 0 |
| total_points | float64 | PROCESSED DATA field | 0.0 | 0 |
| races_entered | float64 | PROCESSED DATA field | 2.0 | 0 |
| points_efficiency | float64 | PROCESSED DATA field | 0.0 | 0 |
| podium_rate | float64 | PROCESSED DATA field | 0.0 | 0 |
| win_rate | float64 | PROCESSED DATA field | 0.0 | 0 |
| pole_count | float64 | PROCESSED DATA field | 0.0 | 0 |
| pole_to_win_rate | float64 | PROCESSED DATA field | 0.0 | 0 |
| dnf_rate | float64 | PROCESSED DATA field | 0.5 | 0 |
| avg_grid | float64 | Calculated mean average | 10.5 | 33 |
| avg_delta | float64 | Calculated mean average | 3.0 | 170 |
| points_volatility | float64 | PROCESSED DATA field | 0.0 | 130 |
| avg_pit_ms | float64 | Duration measured in milliseconds | 30344.969696969692 | 774 |
| avg_stop_count | float64 | Calculated mean average | 1.6521739130434785 | 774 |
| era | object | PROCESSED DATA field | V10 Era | 0 |

---

## master_fact.csv
*Grain: 27304 rows, 62 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| resultId | int64 | Primary/Foreign key linkage | 1 | 0 |
| raceId | int64 | Primary/Foreign key linkage | 18 | 0 |
| driverId | int64 | Primary/Foreign key linkage | 1 | 0 |
| constructorId | int64 | Primary/Foreign key linkage | 1 | 0 |
| number | float64 | PROCESSED DATA field | 22.0 | 6 |
| grid | int64 | PROCESSED DATA field | 1 | 0 |
| position | float64 | PROCESSED DATA field | 1.0 | 10953 |
| positionText | object | PROCESSED DATA field | 1 | 0 |
| positionOrder | int64 | PROCESSED DATA field | 1 | 0 |
| points | float64 | PROCESSED DATA field | 10.0 | 0 |
| laps | int64 | PROCESSED DATA field | 58 | 0 |
| time | object | PROCESSED DATA field | 1:34:50.616 | 19252 |
| milliseconds | float64 | Duration measured in seconds | 5690616.0 | 19252 |
| fastestLap | float64 | PROCESSED DATA field | 39.0 | 18535 |
| rank | float64 | PROCESSED DATA field | 2.0 | 18277 |
| fastestLapTime | object | PROCESSED DATA field | 1:27.452 | 18535 |
| fastestLapSpeed | float64 | PROCESSED DATA field | 218.3 | 19052 |
| statusId | int64 | Primary/Foreign key linkage | 1 | 0 |
| is_finisher | int64 | Binary flag (0=No, 1=Yes) | 1 | 0 |
| is_dnf | int64 | Binary flag (0=No, 1=Yes) | 0 | 0 |
| is_pitlane_start | int64 | Binary flag (0=No, 1=Yes) | 0 | 0 |
| is_podium | int64 | Binary flag (0=No, 1=Yes) | 1 | 0 |
| is_win | int64 | Binary flag (0=No, 1=Yes) | 1 | 0 |
| is_pole | int64 | Binary flag (0=No, 1=Yes) | 1 | 0 |
| year | int64 | Competition season year | 2008 | 0 |
| round | int64 | PROCESSED DATA field | 1 | 0 |
| circuitId | int64 | Primary/Foreign key linkage | 1 | 0 |
| race_name | object | Identifying name/label | Australian Grand Prix | 0 |
| circuit_name | object | Identifying name/label | Albert Park Grand Prix... | 0 |
| location | object | PROCESSED DATA field | Melbourne | 0 |
| country | object | PROCESSED DATA field | Australia | 0 |
| lat | float64 | PROCESSED DATA field | -37.8497 | 0 |
| lng | float64 | PROCESSED DATA field | 144.968 | 0 |
| constructor_name | object | Identifying name/label | McLaren | 0 |
| constructor_nationality | object | PROCESSED DATA field | British | 0 |
| forename | object | Identifying name/label | Lewis | 0 |
| surname | object | Identifying name/label | Hamilton | 0 |
| driver_nationality | object | PROCESSED DATA field | British | 0 |
| stop_count | float64 | PROCESSED DATA field | 2.0 | 15997 |
| avg_pit_ms | float64 | Duration measured in milliseconds | 24525.5 | 15999 |
| total_pit_ms | float64 | Duration measured in milliseconds | 49051.0 | 15997 |
| fastest_pit_ms | float64 | Duration measured in milliseconds | 24254.0 | 15999 |
| best_q_ms | float64 | Duration measured in milliseconds | 86714.0 | 16430 |
| qualifying_gap_ms | float64 | Duration measured in milliseconds | 0.0 | 16430 |
| q1_ms | float64 | Duration measured in milliseconds | 86572.0 | 16432 |
| q2_ms | float64 | Duration measured in milliseconds | 85187.0 | 21056 |
| q3_ms | float64 | Duration measured in milliseconds | 86714.0 | 23411 |
| fastest_lap_ms | float64 | Duration measured in milliseconds | 118287.0 | 20537 |
| lap_count | float64 | PROCESSED DATA field | 49.0 | 20537 |
| lap_time_std | float64 | PROCESSED DATA field | 3033.240331281532 | 20599 |
| status | object | PROCESSED DATA field | Finished | 0 |
| dnf_category | object | PROCESSED DATA field | Finished | 0 |
| grid_to_finish_delta | float64 | PROCESSED DATA field | 0.0 | 11882 |
| driver_name | object | Identifying name/label | Lewis Hamilton | 0 |
| era | object | PROCESSED DATA field | V8 Era | 0 |
| driver_name_display | object | Identifying name/label | Hamilton, Lewis | 0 |
| constructor_short | object | PROCESSED DATA field | MCL | 0 |
| grid_delta_category | object | PROCESSED DATA field | Held Position | 0 |
| stop_count_bucket | object | PROCESSED DATA field | 2 stops | 0 |
| avg_pit_seconds | float64 | Duration measured in seconds | 24.5255 | 15999 |
| fastest_pit_seconds | float64 | Duration measured in seconds | 24.254 | 15999 |
| cluster_label | object | PROCESSED DATA field | Strategy-Dominant | 6958 |

---

## track_strategy_profiles.csv
*Grain: 33 rows, 42 columns*

| Column | Dtype | Description | Example | Nulls |
|:---|:---|:---|:---|:---|
| circuitId | int64 | Primary/Foreign key linkage | 1 | 0 |
| circuit_name | object | Identifying name/label | Albert Park Grand Prix... | 0 |
| country | object | PROCESSED DATA field | Australia | 0 |
| n_races | int64 | PROCESSED DATA field | 15 | 0 |
| avg_stop_count | float64 | Calculated mean average | 2.055 | 0 |
| pct_1stop | float64 | PROCESSED DATA field | 0.364 | 0 |
| pct_2stop | float64 | PROCESSED DATA field | 0.368 | 0 |
| pct_3stop | float64 | PROCESSED DATA field | 0.186 | 0 |
| avg_lap_std | float64 | Calculated mean average | 34341.487 | 0 |
| med_lap_std | float64 | PROCESSED DATA field | 10720.421 | 0 |
| avg_delta | float64 | Calculated mean average | 2.182 | 0 |
| avg_pit_ms | float64 | Duration measured in milliseconds | 105790.513 | 0 |
| fastest_pit_ms | float64 | Duration measured in milliseconds | 49565.105 | 0 |
| avg_qual_gap | float64 | Calculated mean average | 2329.315 | 0 |
| avg_position | float64 | Calculated mean average | 8.027 | 0 |
| deg_rank_pct | float64 | PROCESSED DATA field | 0.667 | 0 |
| compound_bias | object | PROCESSED DATA field | MEDIUM-biased | 0 |
| optimal_stops_x | int64 | PROCESSED DATA field | 1 | 0 |
| optimal_avg_pos | float64 | Calculated mean average | 6.95 | 0 |
| corr_r | float64 | PROCESSED DATA field | 0.793 | 0 |
| corr_p | float64 | PROCESSED DATA field | 0.0 | 0 |
| delta_std | float64 | PROCESSED DATA field | 3.681 | 0 |
| delta_mean | float64 | PROCESSED DATA field | 2.182 | 0 |
| lock_score | float64 | PROCESSED DATA field | 80.753 | 0 |
| qual_dominance | object | PROCESSED DATA field | Balanced | 0 |
| total_laps | int64 | PROCESSED DATA field | 57 | 0 |
| optimal_stops_y | int64 | PROCESSED DATA field | 1 | 0 |
| stop1_window_lo | int64 | PROCESSED DATA field | 5 | 0 |
| stop1_window_hi | int64 | PROCESSED DATA field | 23 | 0 |
| stop2_window_lo | int64 | PROCESSED DATA field | 8 | 0 |
| stop2_window_hi | int64 | PROCESSED DATA field | 40 | 0 |
| pit_window_src | object | PROCESSED DATA field | actual | 0 |
| mf_mean_delta | float64 | PROCESSED DATA field | 0.719 | 0 |
| mf_std_delta | float64 | PROCESSED DATA field | 2.902 | 0 |
| mf_p10_delta | float64 | PROCESSED DATA field | -3.0 | 0 |
| mf_p90_delta | float64 | PROCESSED DATA field | 4.0 | 0 |
| mf_n | int64 | PROCESSED DATA field | 57 | 0 |
| cluster_label | object | PROCESSED DATA field | Mixed | 0 |
| overtaking_score | object | PROCESSED DATA field | Medium | 0 |
| avg_1stop_position | float64 | Calculated mean average | 6.95 | 0 |
| avg_2stop_position | float64 | Calculated mean average | 8.58 | 0 |
| lap_time_variance | float64 | PROCESSED DATA field | 36718.877 | 0 |

---
