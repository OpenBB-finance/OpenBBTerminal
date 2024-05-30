"""Constants for the OECD provider."""

COUNTRY_TO_CODE_GDP = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area": "EA",
    "european_union": "EU",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "poland": "POL",
    "portugal": "PRT",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

CODE_TO_COUNTRY_GDP = {v: k for k, v in COUNTRY_TO_CODE_GDP.items()}

COUNTRY_TO_CODE_RGDP = {
    "G20": "G-20",
    "G7": "G-7",
    "argentina": "ARG",
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "bulgaria": "BGR",
    "canada": "CAN",
    "chile": "CHL",
    "china": "CHN",
    "colombia": "COL",
    "costa_rica": "CRI",
    "croatia": "HRV",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area_20": "EA20",
    "euro_area_19": "EA19",
    "europe": "OECDE",
    "european_union_27": "EU27_2020",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "india": "IND",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "oecd_total": "OECD",
    "poland": "POL",
    "portugal": "PRT",
    "romania": "ROU",
    "russia": "RUS",
    "saudi_arabia": "SAU",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

CODE_TO_COUNTRY_RGDP = {v: k for k, v in COUNTRY_TO_CODE_RGDP.items()}

COUNTRY_TO_CODE_GDP_FORECAST = {
    "argentina": "ARG",
    "asia": "DAE",
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "bulgaria": "BGR",
    "canada": "CAN",
    "chile": "CHL",
    "china": "CHN",
    "colombia": "COL",
    "costa_rica": "CRI",
    "croatia": "HRV",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area_17": "EA17",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "india": "IND",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "non-oecd": "NMEC",
    "norway": "NOR",
    "oecd_total": "OECD",
    "peru": "PER",
    "poland": "POL",
    "portugal": "PRT",
    "romania": "ROU",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
    "world": "WLD",
}

CODE_TO_COUNTRY_GDP_FORECAST = {v: k for k, v in COUNTRY_TO_CODE_GDP_FORECAST.items()}

COUNTRY_TO_CODE_CPI = {
    "G20": "G20",
    "G7": "G7",
    "argentina": "ARG",
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "china": "CHN",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area_20": "EA20",
    "europe": "OECDE",
    "european_union_27": "EU27_2020",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "india": "IND",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "oecd_total": "OECD",
    "poland": "POL",
    "portugal": "PRT",
    "russia": "RUS",
    "saudi_arabia": "SAU",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}
CODE_TO_COUNTRY_CPI = {v: k for k, v in COUNTRY_TO_CODE_CPI.items()}

COUNTRY_TO_CODE_BALANCE = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area": "EA",
    "european_union": "EU",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "poland": "POL",
    "portugal": "PRT",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

COUNTRY_TO_CODE_REVENUE = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "euro_area": "EA",
    "european_union": "EU",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "oecd_average": "OAVG",
    "oecd_europe": "OEU",
    "oecd_total": "OECD",
    "poland": "POL",
    "portugal": "PRT",
    "romania": "ROU",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

COUNTRY_TO_CODE_SPENDING = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "indonesia": "IDN",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "oecd_average": "OAVG",
    "oecd_europe": "OEU",
    "oecd_total": "OECD",
    "poland": "POL",
    "portugal": "PRT",
    "romania": "ROU",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

COUNTRY_TO_CODE_DEBT = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "oecd_average": "OAVG",
    "oecd_total": "OECD",
    "poland": "POL",
    "portugal": "PRT",
    "romania": "ROU",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

COUNTRY_TO_CODE_TRUST = {
    "australia": "AUS",
    "austria": "AUT",
    "belgium": "BEL",
    "brazil": "BRA",
    "canada": "CAN",
    "chile": "CHL",
    "colombia": "COL",
    "costa_rica": "CRI",
    "czech_republic": "CZE",
    "denmark": "DNK",
    "estonia": "EST",
    "finland": "FIN",
    "france": "FRA",
    "germany": "DEU",
    "greece": "GRC",
    "hungary": "HUN",
    "iceland": "ISL",
    "ireland": "IRL",
    "israel": "ISR",
    "italy": "ITA",
    "japan": "JPN",
    "korea": "KOR",
    "latvia": "LVA",
    "lithuania": "LTU",
    "luxembourg": "LUX",
    "mexico": "MEX",
    "netherlands": "NLD",
    "new_zealand": "NZL",
    "norway": "NOR",
    "poland": "POL",
    "portugal": "PRT",
    "russia": "RUS",
    "slovak_republic": "SVK",
    "slovenia": "SVN",
    "south_africa": "ZAF",
    "spain": "ESP",
    "sweden": "SWE",
    "switzerland": "CHE",
    "turkey": "TUR",
    "united_kingdom": "GBR",
    "united_states": "USA",
}

COUNTRY_TO_CODE_UNEMPLOYMENT = {
    "colombia": "COL",
    "new_zealand": "NZL",
    "united_kingdom": "GBR",
    "italy": "ITA",
    "luxembourg": "LUX",
    "sweden": "SWE",
    "oecd": "OECD",
    "south_africa": "ZAF",
    "denmark": "DNK",
    "canada": "CAN",
    "switzerland": "CHE",
    "slovakia": "SVK",
    "hungary": "HUN",
    "portugal": "PRT",
    "spain": "ESP",
    "france": "FRA",
    "czech_republic": "CZE",
    "costa_rica": "CRI",
    "japan": "JPN",
    "slovenia": "SVN",
    "russia": "RUS",
    "austria": "AUT",
    "latvia": "LVA",
    "netherlands": "NLD",
    "israel": "ISR",
    "iceland": "ISL",
    "united_states": "USA",
    "ireland": "IRL",
    "mexico": "MEX",
    "germany": "DEU",
    "greece": "GRC",
    "turkey": "TUR",
    "australia": "AUS",
    "poland": "POL",
    "korea": "KOR",
    "chile": "CHL",
    "finland": "FIN",
    "european_union27_2020": "EU27_2020",
    "norway": "NOR",
    "lithuania": "LTU",
    "euro_area20": "EA20",
    "estonia": "EST",
    "belgium": "BEL",
    "g7": "G7",
}

CODE_TO_COUNTRY_UNEMPLOYMENT = {v: k for k, v in COUNTRY_TO_CODE_UNEMPLOYMENT.items()}

COUNTRY_TO_CODE_CLI = {
    "united_states": "USA",
    "united_kingdom": "GBR",
    "japan": "JPN",
    "mexico": "MEX",
    "indonesia": "IDN",
    "australia": "AUS",
    "brazil": "BRA",
    "canada": "CAN",
    "italy": "ITA",
    "germany": "DEU",
    "turkey": "TUR",
    "france": "FRA",
    "south_africa": "ZAF",
    "south_korea": "KOR",
    "spain": "ESP",
    "india": "IND",
    "china": "CHN",
    "g7": "G7",
    "g20": "G20",
}

CODE_TO_COUNTRY_CLI = {v: k for k, v in COUNTRY_TO_CODE_CLI.items()}

COUNTRY_TO_CODE_IR = {
    "belgium": "BEL",
    "ireland": "IRL",
    "mexico": "MEX",
    "indonesia": "IDN",
    "new_zealand": "NZL",
    "japan": "JPN",
    "united_kingdom": "GBR",
    "france": "FRA",
    "chile": "CHL",
    "canada": "CAN",
    "netherlands": "NLD",
    "united_states": "USA",
    "south_korea": "KOR",
    "norway": "NOR",
    "austria": "AUT",
    "south_africa": "ZAF",
    "denmark": "DNK",
    "switzerland": "CHE",
    "hungary": "HUN",
    "luxembourg": "LUX",
    "australia": "AUS",
    "germany": "DEU",
    "sweden": "SWE",
    "iceland": "ISL",
    "turkey": "TUR",
    "greece": "GRC",
    "israel": "ISR",
    "czech_republic": "CZE",
    "latvia": "LVA",
    "slovenia": "SVN",
    "poland": "POL",
    "estonia": "EST",
    "lithuania": "LTU",
    "portugal": "PRT",
    "costa_rica": "CRI",
    "slovakia": "SVK",
    "finland": "FIN",
    "spain": "ESP",
    "russia": "RUS",
    "euro_area19": "EA19",
    "colombia": "COL",
    "italy": "ITA",
    "india": "IND",
    "china": "CHN",
    "croatia": "HRV",
}

CODE_TO_COUNTRY_IR = {v: k for k, v in COUNTRY_TO_CODE_IR.items()}

COUNTRY_TO_CODE_SHARES = {
    "slovenia": "SVN",
    "russia": "RUS",
    "latvia": "LVA",
    "korea": "KOR",
    "brazil": "BRA",
    "france": "FRA",
    "sweden": "SWE",
    "luxembourg": "LUX",
    "belgium": "BEL",
    "china": "CHN",
    "finland": "FIN",
    "euro_area19": "EA19",
    "japan": "JPN",
    "hungary": "HUN",
    "australia": "AUS",
    "switzerland": "CHE",
    "portugal": "PRT",
    "estonia": "EST",
    "canada": "CAN",
    "slovak_republic": "SVK",
    "turkey": "TUR",
    "croatia": "HRV",
    "denmark": "DNK",
    "italy": "ITA",
    "india": "IND",
    "south_africa": "ZAF",
    "czech_republic": "CZE",
    "new_zealand": "NZL",
    "netherlands": "NLD",
    "iceland": "ISL",
    "germany": "DEU",
    "indonesia": "IDN",
    "ireland": "IRL",
    "united_states": "USA",
    "chile": "CHL",
    "lithuania": "LTU",
    "greece": "GRC",
    "united_kingdom": "GBR",
    "colombia": "COL",
    "norway": "NOR",
    "spain": "ESP",
    "israel": "ISR",
    "poland": "POL",
    "austria": "AUT",
    "mexico": "MEX",
}
CODE_TO_COUNTRY_SHARES = {v: k for k, v in COUNTRY_TO_CODE_SHARES.items()}
