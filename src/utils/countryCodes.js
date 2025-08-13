const countryCodes = [
    {
      "name": "Afghanistan",
      "dial_code": "+93",
      "code": "AF"
    },
    {
      "name": "Aland Islands",
      "dial_code": "+358",
      "code": "AX"
    },
    {
      "name": "Albania",
      "dial_code": "+355",
      "code": "AL"
    },
    {
      "name": "Algeria",
      "dial_code": "+213",
      "code": "DZ"
    },
    {
      "name": "AmericanSamoa",
      "dial_code": "+1684",
      "code": "AS"
    },
    {
      "name": "Andorra",
      "dial_code": "+376",
      "code": "AD"
    },
    {
      "name": "Angola",
      "dial_code": "+244",
      "code": "AO"
    },
    {
      "name": "Anguilla",
      "dial_code": "+1264",
      "code": "AI"
    },
    {
      "name": "Antarctica",
      "dial_code": "+672",
      "code": "AQ"
    },
    {
      "name": "Antigua and Barbuda",
      "dial_code": "+1268",
      "code": "AG"
    },
    {
      "name": "Argentina",
      "dial_code": "+54",
      "code": "AR"
    },
    {
      "name": "Armenia",
      "dial_code": "+374",
      "code": "AM"
    },
    {
      "name": "Aruba",
      "dial_code": "+297",
      "code": "AW"
    },
    {
      "name": "Australia",
      "dial_code": "+61",
      "code": "AU"
    },
    {
      "name": "Austria",
      "dial_code": "+43",
      "code": "AT"
    },
    {
      "name": "Azerbaijan",
      "dial_code": "+994",
      "code": "AZ"
    },
    {
      "name": "Bahamas",
      "dial_code": "+1242",
      "code": "BS"
    },
    {
      "name": "Bahrain",
      "dial_code": "+973",
      "code": "BH"
    },
    {
      "name": "Bangladesh",
      "dial_code": "+880",
      "code": "BD"
    },
    {
      "name": "Barbados",
      "dial_code": "+1246",
      "code": "BB"
    },
    {
      "name": "Belarus",
      "dial_code": "+375",
      "code": "BY"
    },
    {
      "name": "Belgium",
      "dial_code": "+32",
      "code": "BE"
    },
    {
      "name": "Belize",
      "dial_code": "+501",
      "code": "BZ"
    },
    {
      "name": "Benin",
      "dial_code": "+229",
      "code": "BJ"
    },
    {
      "name": "Bermuda",
      "dial_code": "+1441",
      "code": "BM"
    },
    {
      "name": "Bhutan",
      "dial_code": "+975",
      "code": "BT"
    },
    {
      "name": "Bolivia, Plurinational State of",
      "dial_code": "+591",
      "code": "BO"
    },
    {
      "name": "Bosnia and Herzegovina",
      "dial_code": "+387",
      "code": "BA"
    },
    {
      "name": "Botswana",
      "dial_code": "+267",
      "code": "BW"
    },
    {
      "name": "Brazil",
      "dial_code": "+55",
      "code": "BR"
    },
    {
      "name": "British Indian Ocean Territory",
      "dial_code": "+246",
      "code": "IO"
    },
    {
      "name": "Brunei Darussalam",
      "dial_code": "+673",
      "code": "BN"
    },
    {
      "name": "Bulgaria",
      "dial_code": "+359",
      "code": "BG"
    },
    {
      "name": "Burkina Faso",
      "dial_code": "+226",
      "code": "BF"
    },
    {
      "name": "Burundi",
      "dial_code": "+257",
      "code": "BI"
    },
    {
      "name": "Cambodia",
      "dial_code": "+855",
      "code": "KH"
    },
    {
      "name": "Cameroon",
      "dial_code": "+237",
      "code": "CM"
    },
    {
      "name": "Canada",
      "dial_code": "+1",
      "code": "CA"
    },
    {
      "name": "Cape Verde",
      "dial_code": "+238",
      "code": "CV"
    },
    {
      "name": "Cayman Islands",
      "dial_code": "+ 345",
      "code": "KY"
    },
    {
      "name": "Central African Republic",
      "dial_code": "+236",
      "code": "CF"
    },
    {
      "name": "Chad",
      "dial_code": "+235",
      "code": "TD"
    },
    {
      "name": "Chile",
      "dial_code": "+56",
      "code": "CL"
    },
    {
      "name": "China",
      "dial_code": "+86",
      "code": "CN"
    },
    {
      "name": "Christmas Island",
      "dial_code": "+61",
      "code": "CX"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "dial_code": "+61",
      "code": "CC"
    },
    {
      "name": "Colombia",
      "dial_code": "+57",
      "code": "CO"
    },
    {
      "name": "Comoros",
      "dial_code": "+269",
      "code": "KM"
    },
    {
      "name": "Congo",
      "dial_code": "+242",
      "code": "CG"
    },
    {
      "name": "Congo, The Democratic Republic of the Congo",
      "dial_code": "+243",
      "code": "CD"
    },
    {
      "name": "Cook Islands",
      "dial_code": "+682",
      "code": "CK"
    },
    {
      "name": "Costa Rica",
      "dial_code": "+506",
      "code": "CR"
    },
    {
      "name": "Cote d'Ivoire",
      "dial_code": "+225",
      "code": "CI"
    },
    {
      "name": "Croatia",
      "dial_code": "+385",
      "code": "HR"
    },
    {
      "name": "Cuba",
      "dial_code": "+53",
      "code": "CU"
    },
    {
      "name": "Cyprus",
      "dial_code": "+357",
      "code": "CY"
    },
    {
      "name": "Czech Republic",
      "dial_code": "+420",
      "code": "CZ"
    },
    {
      "name": "Denmark",
      "dial_code": "+45",
      "code": "DK"
    },
    {
      "name": "Djibouti",
      "dial_code": "+253",
      "code": "DJ"
    },
    {
      "name": "Dominica",
      "dial_code": "+1767",
      "code": "DM"
    },
    {
      "name": "Dominican Republic",
      "dial_code": "+1849",
      "code": "DO"
    },
    {
      "name": "Ecuador",
      "dial_code": "+593",
      "code": "EC"
    },
    {
      "name": "Egypt",
      "dial_code": "+20",
      "code": "EG"
    },
    {
      "name": "El Salvador",
      "dial_code": "+503",
      "code": "SV"
    },
    {
      "name": "Equatorial Guinea",
      "dial_code": "+240",
      "code": "GQ"
    },
    {
      "name": "Eritrea",
      "dial_code": "+291",
      "code": "ER"
    },
    {
      "name": "Estonia",
      "dial_code": "+372",
      "code": "EE"
    },
    {
      "name": "Ethiopia",
      "dial_code": "+251",
      "code": "ET"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "dial_code": "+500",
      "code": "FK"
    },
    {
      "name": "Faroe Islands",
      "dial_code": "+298",
      "code": "FO"
    },
    {
      "name": "Fiji",
      "dial_code": "+679",
      "code": "FJ"
    },
    {
      "name": "Finland",
      "dial_code": "+358",
      "code": "FI"
    },
    {
      "name": "France",
      "dial_code": "+33",
      "code": "FR"
    },
    {
      "name": "French Guiana",
      "dial_code": "+594",
      "code": "GF"
    },
    {
      "name": "French Polynesia",
      "dial_code": "+689",
      "code": "PF"
    },
    {
      "name": "Gabon",
      "dial_code": "+241",
      "code": "GA"
    },
    {
      "name": "Gambia",
      "dial_code": "+220",
      "code": "GM"
    },
    {
      "name": "Georgia",
      "dial_code": "+995",
      "code": "GE"
    },
    {
      "name": "Germany",
      "dial_code": "+49",
      "code": "DE"
    },
    {
      "name": "Ghana",
      "dial_code": "+233",
      "code": "GH"
    },
    {
      "name": "Gibraltar",
      "dial_code": "+350",
      "code": "GI"
    },
    {
      "name": "Greece",
      "dial_code": "+30",
      "code": "GR"
    },
    {
      "name": "Greenland",
      "dial_code": "+299",
      "code": "GL"
    },
    {
      "name": "Grenada",
      "dial_code": "+1473",
      "code": "GD"
    },
    {
      "name": "Guadeloupe",
      "dial_code": "+590",
      "code": "GP"
    },
    {
      "name": "Guam",
      "dial_code": "+1671",
      "code": "GU"
    },
    {
      "name": "Guatemala",
      "dial_code": "+502",
      "code": "GT"
    },
    {
      "name": "Guernsey",
      "dial_code": "+44",
      "code": "GG"
    },
    {
      "name": "Guinea",
      "dial_code": "+224",
      "code": "GN"
    },
    {
      "name": "Guinea-Bissau",
      "dial_code": "+245",
      "code": "GW"
    },
    {
      "name": "Guyana",
      "dial_code": "+595",
      "code": "GY"
    },
    {
      "name": "Haiti",
      "dial_code": "+509",
      "code": "HT"
    },
    {
      "name": "Holy See (Vatican City State)",
      "dial_code": "+379",
      "code": "VA"
    },
    {
      "name": "Honduras",
      "dial_code": "+504",
      "code": "HN"
    },
    {
      "name": "Hong Kong",
      "dial_code": "+852",
      "code": "HK"
    },
    {
      "name": "Hungary",
      "dial_code": "+36",
      "code": "HU"
    },
    {
      "name": "Iceland",
      "dial_code": "+354",
      "code": "IS"
    },
    {
      "name": "India",
      "dial_code": "+91",
      "code": "IN"
    },
    {
      "name": "Indonesia",
      "dial_code": "+62",
      "code": "ID"
    },
    {
      "name": "Iran, Islamic Republic of Persian Gulf",
      "dial_code": "+98",
      "code": "IR"
    },
    {
      "name": "Iraq",
      "dial_code": "+964",
      "code": "IQ"
    },
    {
      "name": "Ireland",
      "dial_code": "+353",
      "code": "IE"
    },
    {
      "name": "Isle of Man",
      "dial_code": "+44",
      "code": "IM"
    },
    {
      "name": "Israel",
      "dial_code": "+972",
      "code": "IL"
    },
    {
      "name": "Italy",
      "dial_code": "+39",
      "code": "IT"
    },
    {
      "name": "Jamaica",
      "dial_code": "+1876",
      "code": "JM"
    },
    {
      "name": "Japan",
      "dial_code": "+81",
      "code": "JP"
    },
    {
      "name": "Jersey",
      "dial_code": "+44",
      "code": "JE"
    },
    {
      "name": "Jordan",
      "dial_code": "+962",
      "code": "JO"
    },
    {
      "name": "Kazakhstan",
      "dial_code": "+77",
      "code": "KZ"
    },
    {
      "name": "Kenya",
      "dial_code": "+254",
      "code": "KE"
    },
    {
      "name": "Kiribati",
      "dial_code": "+686",
      "code": "KI"
    },
    {
      "name": "Korea, Democratic People's Republic of Korea",
      "dial_code": "+850",
      "code": "KP"
    },
    {
      "name": "Korea, Republic of South Korea",
      "dial_code": "+82",
      "code": "KR"
    },
    {
      "name": "Kuwait",
      "dial_code": "+965",
      "code": "KW"
    },
    {
      "name": "Kyrgyzstan",
      "dial_code": "+996",
      "code": "KG"
    },
    {
      "name": "Laos",
      "dial_code": "+856",
      "code": "LA"
    },
    {
      "name": "Latvia",
      "dial_code": "+371",
      "code": "LV"
    },
    {
      "name": "Lebanon",
      "dial_code": "+961",
      "code": "LB"
    },
    {
      "name": "Lesotho",
      "dial_code": "+266",
      "code": "LS"
    },
    {
      "name": "Liberia",
      "dial_code": "+231",
      "code": "LR"
    },
    {
      "name": "Libyan Arab Jamahiriya",
      "dial_code": "+218",
      "code": "LY"
    },
    {
      "name": "Liechtenstein",
      "dial_code": "+423",
      "code": "LI"
    },
    {
      "name": "Lithuania",
      "dial_code": "+370",
      "code": "LT"
    },
    {
      "name": "Luxembourg",
      "dial_code": "+352",
      "code": "LU"
    },
    {
      "name": "Macao",
      "dial_code": "+853",
      "code": "MO"
    },
    {
      "name": "Macedonia",
      "dial_code": "+389",
      "code": "MK"
    },
    {
      "name": "Madagascar",
      "dial_code": "+261",
      "code": "MG"
    },
    {
      "name": "Malawi",
      "dial_code": "+265",
      "code": "MW"
    },
    {
      "name": "Malaysia",
      "dial_code": "+60",
      "code": "MY"
    },
    {
      "name": "Maldives",
      "dial_code": "+960",
      "code": "MV"
    },
    {
      "name": "Mali",
      "dial_code": "+223",
      "code": "ML"
    },
    {
      "name": "Malta",
      "dial_code": "+356",
      "code": "MT"
    },
    {
      "name": "Marshall Islands",
      "dial_code": "+692",
      "code": "MH"
    },
    {
      "name": "Martinique",
      "dial_code": "+596",
      "code": "MQ"
    },
    {
      "name": "Mauritania",
      "dial_code": "+222",
      "code": "MR"
    },
    {
      "name": "Mauritius",
      "dial_code": "+230",
      "code": "MU"
    },
    {
      "name": "Mayotte",
      "dial_code": "+262",
      "code": "YT"
    },
    {
      "name": "Mexico",
      "dial_code": "+52",
      "code": "MX"
    },
    {
      "name": "Micronesia, Federated States of Micronesia",
      "dial_code": "+691",
      "code": "FM"
    },
    {
      "name": "Moldova",
      "dial_code": "+373",
      "code": "MD"
    },
    {
      "name": "Monaco",
      "dial_code": "+377",
      "code": "MC"
    },
    {
      "name": "Mongolia",
      "dial_code": "+976",
      "code": "MN"
    },
    {
      "name": "Montenegro",
      "dial_code": "+382",
      "code": "ME"
    },
    {
      "name": "Montserrat",
      "dial_code": "+1664",
      "code": "MS"
    },
    {
      "name": "Morocco",
      "dial_code": "+212",
      "code": "MA"
    },
    {
      "name": "Mozambique",
      "dial_code": "+258",
      "code": "MZ"
    },
    {
      "name": "Myanmar",
      "dial_code": "+95",
      "code": "MM"
    },
    {
      "name": "Namibia",
      "dial_code": "+264",
      "code": "NA"
    },
    {
      "name": "Nauru",
      "dial_code": "+674",
      "code": "NR"
    },
    {
      "name": "Nepal",
      "dial_code": "+977",
      "code": "NP"
    },
    {
      "name": "Netherlands",
      "dial_code": "+31",
      "code": "NL"
    },
    {
      "name": "Netherlands Antilles",
      "dial_code": "+599",
      "code": "AN"
    },
    {
      "name": "New Caledonia",
      "dial_code": "+687",
      "code": "NC"
    },
    {
      "name": "New Zealand",
      "dial_code": "+64",
      "code": "NZ"
    },
    {
      "name": "Nicaragua",
      "dial_code": "+505",
      "code": "NI"
    },
    {
      "name": "Niger",
      "dial_code": "+227",
      "code": "NE"
    },
    {
      "name": "Nigeria",
      "dial_code": "+234",
      "code": "NG"
    },
    {
      "name": "Niue",
      "dial_code": "+683",
      "code": "NU"
    },
    {
      "name": "Norfolk Island",
      "dial_code": "+672",
      "code": "NF"
    },
    {
      "name": "Northern Mariana Islands",
      "dial_code": "+1670",
      "code": "MP"
    },
    {
      "name": "Norway",
      "dial_code": "+47",
      "code": "NO"
    },
    {
      "name": "Oman",
      "dial_code": "+968",
      "code": "OM"
    },
    {
      "name": "Pakistan",
      "dial_code": "+92",
      "code": "PK"
    },
    {
      "name": "Palau",
      "dial_code": "+680",
      "code": "PW"
    },
    {
      "name": "Palestinian Territory, Occupied",
      "dial_code": "+970",
      "code": "PS"
    },
    {
      "name": "Panama",
      "dial_code": "+507",
      "code": "PA"
    },
    {
      "name": "Papua New Guinea",
      "dial_code": "+675",
      "code": "PG"
    },
    {
      "name": "Paraguay",
      "dial_code": "+595",
      "code": "PY"
    },
    {
      "name": "Peru",
      "dial_code": "+51",
      "code": "PE"
    },
    {
      "name": "Philippines",
      "dial_code": "+63",
      "code": "PH"
    },
    {
      "name": "Pitcairn",
      "dial_code": "+872",
      "code": "PN"
    },
    {
      "name": "Poland",
      "dial_code": "+48",
      "code": "PL"
    },
    {
      "name": "Portugal",
      "dial_code": "+351",
      "code": "PT"
    },
    {
      "name": "Puerto Rico",
      "dial_code": "+1939",
      "code": "PR"
    },
    {
      "name": "Qatar",
      "dial_code": "+974",
      "code": "QA"
    },
    {
      "name": "Romania",
      "dial_code": "+40",
      "code": "RO"
    },
    {
      "name": "Russia",
      "dial_code": "+7",
      "code": "RU"
    },
    {
      "name": "Rwanda",
      "dial_code": "+250",
      "code": "RW"
    },
    {
      "name": "Reunion",
      "dial_code": "+262",
      "code": "RE"
    },
    {
      "name": "Saint Barthelemy",
      "dial_code": "+590",
      "code": "BL"
    },
    {
      "name": "Saint Helena, Ascension and Tristan Da Cunha",
      "dial_code": "+290",
      "code": "SH"
    },
    {
      "name": "Saint Kitts and Nevis",
      "dial_code": "+1869",
      "code": "KN"
    },
    {
      "name": "Saint Lucia",
      "dial_code": "+1758",
      "code": "LC"
    },
    {
      "name": "Saint Martin",
      "dial_code": "+590",
      "code": "MF"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "dial_code": "+508",
      "code": "PM"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "dial_code": "+1784",
      "code": "VC"
    },
    {
      "name": "Samoa",
      "dial_code": "+685",
      "code": "WS"
    },
    {
      "name": "San Marino",
      "dial_code": "+378",
      "code": "SM"
    },
    {
      "name": "Sao Tome and Principe",
      "dial_code": "+239",
      "code": "ST"
    },
    {
      "name": "Saudi Arabia",
      "dial_code": "+966",
      "code": "SA"
    },
    {
      "name": "Senegal",
      "dial_code": "+221",
      "code": "SN"
    },
    {
      "name": "Serbia",
      "dial_code": "+381",
      "code": "RS"
    },
    {
      "name": "Seychelles",
      "dial_code": "+248",
      "code": "SC"
    },
    {
      "name": "Sierra Leone",
      "dial_code": "+232",
      "code": "SL"
    },
    {
      "name": "Singapore",
      "dial_code": "+65",
      "code": "SG"
    },
    {
      "name": "Slovakia",
      "dial_code": "+421",
      "code": "SK"
    },
    {
      "name": "Slovenia",
      "dial_code": "+386",
      "code": "SI"
    },
    {
      "name": "Solomon Islands",
      "dial_code": "+677",
      "code": "SB"
    },
    {
      "name": "Somalia",
      "dial_code": "+252",
      "code": "SO"
    },
    {
      "name": "South Africa",
      "dial_code": "+27",
      "code": "ZA"
    },
    {
      "name": "South Sudan",
      "dial_code": "+211",
      "code": "SS"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "dial_code": "+500",
      "code": "GS"
    },
    {
      "name": "Spain",
      "dial_code": "+34",
      "code": "ES"
    },
    {
      "name": "Sri Lanka",
      "dial_code": "+94",
      "code": "LK"
    },
    {
      "name": "Sudan",
      "dial_code": "+249",
      "code": "SD"
    },
    {
      "name": "Suriname",
      "dial_code": "+597",
      "code": "SR"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "dial_code": "+47",
      "code": "SJ"
    },
    {
      "name": "Swaziland",
      "dial_code": "+268",
      "code": "SZ"
    },
    {
      "name": "Sweden",
      "dial_code": "+46",
      "code": "SE"
    },
    {
      "name": "Switzerland",
      "dial_code": "+41",
      "code": "CH"
    },
    {
      "name": "Syrian Arab Republic",
      "dial_code": "+963",
      "code": "SY"
    },
    {
      "name": "Taiwan",
      "dial_code": "+886",
      "code": "TW"
    },
    {
      "name": "Tajikistan",
      "dial_code": "+992",
      "code": "TJ"
    },
    {
      "name": "Tanzania, United Republic of Tanzania",
      "dial_code": "+255",
      "code": "TZ"
    },
    {
      "name": "Thailand",
      "dial_code": "+66",
      "code": "TH"
    },
    {
      "name": "Timor-Leste",
      "dial_code": "+670",
      "code": "TL"
    },
    {
      "name": "Togo",
      "dial_code": "+228",
      "code": "TG"
    },
    {
      "name": "Tokelau",
      "dial_code": "+690",
      "code": "TK"
    },
    {
      "name": "Tonga",
      "dial_code": "+676",
      "code": "TO"
    },
    {
      "name": "Trinidad and Tobago",
      "dial_code": "+1868",
      "code": "TT"
    },
    {
      "name": "Tunisia",
      "dial_code": "+216",
      "code": "TN"
    },
    {
      "name": "Turkey",
      "dial_code": "+90",
      "code": "TR"
    },
    {
      "name": "Turkmenistan",
      "dial_code": "+993",
      "code": "TM"
    },
    {
      "name": "Turks and Caicos Islands",
      "dial_code": "+1649",
      "code": "TC"
    },
    {
      "name": "Tuvalu",
      "dial_code": "+688",
      "code": "TV"
    },
    {
      "name": "Uganda",
      "dial_code": "+256",
      "code": "UG"
    },
    {
      "name": "Ukraine",
      "dial_code": "+380",
      "code": "UA"
    },
    {
      "name": "United Arab Emirates",
      "dial_code": "+971",
      "code": "AE"
    },
    {
      "name": "United Kingdom",
      "dial_code": "+44",
      "code": "GB"
    },
    {
      "name": "United States",
      "dial_code": "+1",
      "code": "US"
    },
    {
      "name": "Uruguay",
      "dial_code": "+598",
      "code": "UY"
    },
    {
      "name": "Uzbekistan",
      "dial_code": "+998",
      "code": "UZ"
    },
    {
      "name": "Vanuatu",
      "dial_code": "+678",
      "code": "VU"
    },
    {
      "name": "Venezuela, Bolivarian Republic of Venezuela",
      "dial_code": "+58",
      "code": "VE"
    },
    {
      "name": "Vietnam",
      "dial_code": "+84",
      "code": "VN"
    },
    {
      "name": "Virgin Islands, British",
      "dial_code": "+1284",
      "code": "VG"
    },
    {
      "name": "Virgin Islands, U.S.",
      "dial_code": "+1340",
      "code": "VI"
    },
    {
      "name": "Wallis and Futuna",
      "dial_code": "+681",
      "code": "WF"
    },
    {
      "name": "Yemen",
      "dial_code": "+967",
      "code": "YE"
    },
    {
      "name": "Zambia",
      "dial_code": "+260",
      "code": "ZM"
    },
    {
      "name": "Zimbabwe",
      "dial_code": "+263",
      "code": "ZW"
    }
  ];
  
  export default countryCodes;






  // const countryCodes = [
  //   {
  //     "name": "Afghanistan",
  //     "dial_code": "+93",
  //     "code": "AF",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Aland Islands",
  //     "dial_code": "+358",
  //     "code": "AX",
  //     "min_length": 6,
  //     "max_length": 12
  //   },
  //   {
  //     "name": "Albania",
  //     "dial_code": "+355",
  //     "code": "AL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Algeria",
  //     "dial_code": "+213",
  //     "code": "DZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "AmericanSamoa",
  //     "dial_code": "+1684",
  //     "code": "AS",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Andorra",
  //     "dial_code": "+376",
  //     "code": "AD",
  //     "min_length": 6,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Angola",
  //     "dial_code": "+244",
  //     "code": "AO",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Anguilla",
  //     "dial_code": "+1264",
  //     "code": "AI",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Antarctica",
  //     "dial_code": "+672",
  //     "code": "AQ",
  //     "min_length": 6,
  //     "max_length": 12
  //   },
  //   {
  //     "name": "Antigua and Barbuda",
  //     "dial_code": "+1268",
  //     "code": "AG",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Argentina",
  //     "dial_code": "+54",
  //     "code": "AR",
  //     "min_length": 10,
  //     "max_length": 11
  //   },
  //   {
  //     "name": "Armenia",
  //     "dial_code": "+374",
  //     "code": "AM",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Aruba",
  //     "dial_code": "+297",
  //     "code": "AW",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Australia",
  //     "dial_code": "+61",
  //     "code": "AU",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Austria",
  //     "dial_code": "+43",
  //     "code": "AT",
  //     "min_length": 10,
  //     "max_length": 13
  //   },
  //   {
  //     "name": "Azerbaijan",
  //     "dial_code": "+994",
  //     "code": "AZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Bahamas",
  //     "dial_code": "+1242",
  //     "code": "BS",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Bahrain",
  //     "dial_code": "+973",
  //     "code": "BH",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Bangladesh",
  //     "dial_code": "+880",
  //     "code": "BD",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Barbados",
  //     "dial_code": "+1246",
  //     "code": "BB",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Belarus",
  //     "dial_code": "+375",
  //     "code": "BY",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Belgium",
  //     "dial_code": "+32",
  //     "code": "BE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Belize",
  //     "dial_code": "+501",
  //     "code": "BZ",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Benin",
  //     "dial_code": "+229",
  //     "code": "BJ",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Bermuda",
  //     "dial_code": "+1441",
  //     "code": "BM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Bhutan",
  //     "dial_code": "+975",
  //     "code": "BT",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Bolivia, Plurinational State of",
  //     "dial_code": "+591",
  //     "code": "BO",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Bosnia and Herzegovina",
  //     "dial_code": "+387",
  //     "code": "BA",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Botswana",
  //     "dial_code": "+267",
  //     "code": "BW",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Brazil",
  //     "dial_code": "+55",
  //     "code": "BR",
  //     "min_length": 10,
  //     "max_length": 11
  //   },
  //   {
  //     "name": "British Indian Ocean Territory",
  //     "dial_code": "+246",
  //     "code": "IO",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Brunei Darussalam",
  //     "dial_code": "+673",
  //     "code": "BN",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Bulgaria",
  //     "dial_code": "+359",
  //     "code": "BG",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Burkina Faso",
  //     "dial_code": "+226",
  //     "code": "BF",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Burundi",
  //     "dial_code": "+257",
  //     "code": "BI",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Cambodia",
  //     "dial_code": "+855",
  //     "code": "KH",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Cameroon",
  //     "dial_code": "+237",
  //     "code": "CM",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Canada",
  //     "dial_code": "+1",
  //     "code": "CA",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Cape Verde",
  //     "dial_code": "+238",
  //     "code": "CV",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Cayman Islands",
  //     "dial_code": "+ 345",
  //     "code": "KY",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Central African Republic",
  //     "dial_code": "+236",
  //     "code": "CF",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Chad",
  //     "dial_code": "+235",
  //     "code": "TD",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Chile",
  //     "dial_code": "+56",
  //     "code": "CL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "China",
  //     "dial_code": "+86",
  //     "code": "CN",
  //     "min_length": 11,
  //     "max_length": 11
  //   },
  //   {
  //     "name": "Christmas Island",
  //     "dial_code": "+61",
  //     "code": "CX",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Cocos (Keeling) Islands",
  //     "dial_code": "+61",
  //     "code": "CC",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Colombia",
  //     "dial_code": "+57",
  //     "code": "CO",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Comoros",
  //     "dial_code": "+269",
  //     "code": "KM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Congo",
  //     "dial_code": "+242",
  //     "code": "CG",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Congo, The Democratic Republic of the Congo",
  //     "dial_code": "+243",
  //     "code": "CD",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Cook Islands",
  //     "dial_code": "+682",
  //     "code": "CK",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Costa Rica",
  //     "dial_code": "+506",
  //     "code": "CR",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Cote d'Ivoire",
  //     "dial_code": "+225",
  //     "code": "CI",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Croatia",
  //     "dial_code": "+385",
  //     "code": "HR",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Cuba",
  //     "dial_code": "+53",
  //     "code": "CU",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Cyprus",
  //     "dial_code": "+357",
  //     "code": "CY",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Czech Republic",
  //     "dial_code": "+420",
  //     "code": "CZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Denmark",
  //     "dial_code": "+45",
  //     "code": "DK",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Djibouti",
  //     "dial_code": "+253",
  //     "code": "DJ",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Dominica",
  //     "dial_code": "+1767",
  //     "code": "DM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Dominican Republic",
  //     "dial_code": "+1849",
  //     "code": "DO",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Ecuador",
  //     "dial_code": "+593",
  //     "code": "EC",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Egypt",
  //     "dial_code": "+20",
  //     "code": "EG",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "El Salvador",
  //     "dial_code": "+503",
  //     "code": "SV",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Equatorial Guinea",
  //     "dial_code": "+240",
  //     "code": "GQ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Eritrea",
  //     "dial_code": "+291",
  //     "code": "ER",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Estonia",
  //     "dial_code": "+372",
  //     "code": "EE",
  //     "min_length": 7,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Ethiopia",
  //     "dial_code": "+251",
  //     "code": "ET",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Falkland Islands (Malvinas)",
  //     "dial_code": "+500",
  //     "code": "FK",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Faroe Islands",
  //     "dial_code": "+298",
  //     "code": "FO",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Fiji",
  //     "dial_code": "+679",
  //     "code": "FJ",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Finland",
  //     "dial_code": "+358",
  //     "code": "FI",
  //     "min_length": 9,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "France",
  //     "dial_code": "+33",
  //     "code": "FR",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "French Guiana",
  //     "dial_code": "+594",
  //     "code": "GF",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "French Polynesia",
  //     "dial_code": "+689",
  //     "code": "PF",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Gabon",
  //     "dial_code": "+241",
  //     "code": "GA",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Gambia",
  //     "dial_code": "+220",
  //     "code": "GM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Georgia",
  //     "dial_code": "+995",
  //     "code": "GE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Germany",
  //     "dial_code": "+49",
  //     "code": "DE",
  //     "min_length": 10,
  //     "max_length": 11
  //   },
  //   {
  //     "name": "Ghana",
  //     "dial_code": "+233",
  //     "code": "GH",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Gibraltar",
  //     "dial_code": "+350",
  //     "code": "GI",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Greece",
  //     "dial_code": "+30",
  //     "code": "GR",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Greenland",
  //     "dial_code": "+299",
  //     "code": "GL",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Grenada",
  //     "dial_code": "+1473",
  //     "code": "GD",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Guadeloupe",
  //     "dial_code": "+590",
  //     "code": "GP",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Guam",
  //     "dial_code": "+1671",
  //     "code": "GU",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Guatemala",
  //     "dial_code": "+502",
  //     "code": "GT",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Guernsey",
  //     "dial_code": "+44",
  //     "code": "GG",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Guinea",
  //     "dial_code": "+224",
  //     "code": "GN",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Guinea-Bissau",
  //     "dial_code": "+245",
  //     "code": "GW",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Guyana",
  //     "dial_code": "+595",
  //     "code": "GY",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Haiti",
  //     "dial_code": "+509",
  //     "code": "HT",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Holy See (Vatican City State)",
  //     "dial_code": "+379",
  //     "code": "VA",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Honduras",
  //     "dial_code": "+504",
  //     "code": "HN",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Hong Kong",
  //     "dial_code": "+852",
  //     "code": "HK",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Hungary",
  //     "dial_code": "+36",
  //     "code": "HU",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Iceland",
  //     "dial_code": "+354",
  //     "code": "IS",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "India",
  //     "dial_code": "+91",
  //     "code": "IN",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Indonesia",
  //     "dial_code": "+62",
  //     "code": "ID",
  //     "min_length": 9,
  //     "max_length": 12
  //   },
  //   {
  //     "name": "Iran, Islamic Republic of Persian Gulf",
  //     "dial_code": "+98",
  //     "code": "IR",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Iraq",
  //     "dial_code": "+964",
  //     "code": "IQ",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Ireland",
  //     "dial_code": "+353",
  //     "code": "IE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Isle of Man",
  //     "dial_code": "+44",
  //     "code": "IM",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Israel",
  //     "dial_code": "+972",
  //     "code": "IL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Italy",
  //     "dial_code": "+39",
  //     "code": "IT",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Jamaica",
  //     "dial_code": "+1876",
  //     "code": "JM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Japan",
  //     "dial_code": "+81",
  //     "code": "JP",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Jersey",
  //     "dial_code": "+44",
  //     "code": "JE",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Jordan",
  //     "dial_code": "+962",
  //     "code": "JO",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Kazakhstan",
  //     "dial_code": "+77",
  //     "code": "KZ",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Kenya",
  //     "dial_code": "+254",
  //     "code": "KE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Kiribati",
  //     "dial_code": "+686",
  //     "code": "KI",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Korea, Democratic People's Republic of Korea",
  //     "dial_code": "+850",
  //     "code": "KP",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Korea, Republic of South Korea",
  //     "dial_code": "+82",
  //     "code": "KR",
  //     "min_length": 9,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Kuwait",
  //     "dial_code": "+965",
  //     "code": "KW",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Kyrgyzstan",
  //     "dial_code": "+996",
  //     "code": "KG",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Laos",
  //     "dial_code": "+856",
  //     "code": "LA",
  //     "min_length": 8,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Latvia",
  //     "dial_code": "+371",
  //     "code": "LV",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Lebanon",
  //     "dial_code": "+961",
  //     "code": "LB",
  //     "min_length": 7,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Lesotho",
  //     "dial_code": "+266",
  //     "code": "LS",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Liberia",
  //     "dial_code": "+231",
  //     "code": "LR",
  //     "min_length": 7,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Libyan Arab Jamahiriya",
  //     "dial_code": "+218",
  //     "code": "LY",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Liechtenstein",
  //     "dial_code": "+423",
  //     "code": "LI",
  //     "min_length": 7,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Lithuania",
  //     "dial_code": "+370",
  //     "code": "LT",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Luxembourg",
  //     "dial_code": "+352",
  //     "code": "LU",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Macao",
  //     "dial_code": "+853",
  //     "code": "MO",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Macedonia",
  //     "dial_code": "+389",
  //     "code": "MK",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Madagascar",
  //     "dial_code": "+261",
  //     "code": "MG",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Malawi",
  //     "dial_code": "+265",
  //     "code": "MW",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Malaysia",
  //     "dial_code": "+60",
  //     "code": "MY",
  //     "min_length": 9,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Maldives",
  //     "dial_code": "+960",
  //     "code": "MV",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Mali",
  //     "dial_code": "+223",
  //     "code": "ML",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Malta",
  //     "dial_code": "+356",
  //     "code": "MT",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Marshall Islands",
  //     "dial_code": "+692",
  //     "code": "MH",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Martinique",
  //     "dial_code": "+596",
  //     "code": "MQ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Mauritania",
  //     "dial_code": "+222",
  //     "code": "MR",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Mauritius",
  //     "dial_code": "+230",
  //     "code": "MU",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Mayotte",
  //     "dial_code": "+262",
  //     "code": "YT",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Mexico",
  //     "dial_code": "+52",
  //     "code": "MX",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Micronesia, Federated States of Micronesia",
  //     "dial_code": "+691",
  //     "code": "FM",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Moldova",
  //     "dial_code": "+373",
  //     "code": "MD",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Monaco",
  //     "dial_code": "+377",
  //     "code": "MC",
  //     "min_length": 8,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Mongolia",
  //     "dial_code": "+976",
  //     "code": "MN",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Montenegro",
  //     "dial_code": "+382",
  //     "code": "ME",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Montserrat",
  //     "dial_code": "+1664",
  //     "code": "MS",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Morocco",
  //     "dial_code": "+212",
  //     "code": "MA",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Mozambique",
  //     "dial_code": "+258",
  //     "code": "MZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Myanmar",
  //     "dial_code": "+95",
  //     "code": "MM",
  //     "min_length": 8,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Namibia",
  //     "dial_code": "+264",
  //     "code": "NA",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Nauru",
  //     "dial_code": "+674",
  //     "code": "NR",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Nepal",
  //     "dial_code": "+977",
  //     "code": "NP",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Netherlands",\
  //     "  \"+977\",
  //     "code": "NP",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Netherlands",
  //     "dial_code": "+31",
  //     "code": "NL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Netherlands Antilles",
  //     "dial_code": "+599",
  //     "code": "AN",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "New Caledonia",
  //     "dial_code": "+687",
  //     "code": "NC",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "New Zealand",
  //     "dial_code": "+64",
  //     "code": "NZ",
  //     "min_length": 8,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Nicaragua",
  //     "dial_code": "+505",
  //     "code": "NI",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Niger",
  //     "dial_code": "+227",
  //     "code": "NE",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Nigeria",
  //     "dial_code": "+234",
  //     "code": "NG",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Niue",
  //     "dial_code": "+683",
  //     "code": "NU",
  //     "min_length": 4,
  //     "max_length": 4
  //   },
  //   {
  //     "name": "Norfolk Island",
  //     "dial_code": "+672",
  //     "code": "NF",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Northern Mariana Islands",
  //     "dial_code": "+1670",
  //     "code": "MP",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Norway",
  //     "dial_code": "+47",
  //     "code": "NO",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Oman",
  //     "dial_code": "+968",
  //     "code": "OM",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Pakistan",
  //     "dial_code": "+92",
  //     "code": "PK",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Palau",
  //     "dial_code": "+680",
  //     "code": "PW",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Palestinian Territory, Occupied",
  //     "dial_code": "+970",
  //     "code": "PS",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Panama",
  //     "dial_code": "+507",
  //     "code": "PA",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Papua New Guinea",
  //     "dial_code": "+675",
  //     "code": "PG",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Paraguay",
  //     "dial_code": "+595",
  //     "code": "PY",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Peru",
  //     "dial_code": "+51",
  //     "code": "PE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Philippines",
  //     "dial_code": "+63",
  //     "code": "PH",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Pitcairn",
  //     "dial_code": "+872",
  //     "code": "PN",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Poland",
  //     "dial_code": "+48",
  //     "code": "PL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Portugal",
  //     "dial_code": "+351",
  //     "code": "PT",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Puerto Rico",
  //     "dial_code": "+1939",
  //     "code": "PR",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Qatar",
  //     "dial_code": "+974",
  //     "code": "QA",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Romania",
  //     "dial_code": "+40",
  //     "code": "RO",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Russia",
  //     "dial_code": "+7",
  //     "code": "RU",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Rwanda",
  //     "dial_code": "+250",
  //     "code": "RW",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Reunion",
  //     "dial_code": "+262",
  //     "code": "RE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Saint Barthelemy",
  //     "dial_code": "+590",
  //     "code": "BL",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Saint Helena, Ascension and Tristan Da Cunha",
  //     "dial_code": "+290",
  //     "code": "SH",
  //     "min_length": 4,
  //     "max_length": 4
  //   },
  //   {
  //     "name": "Saint Kitts and Nevis",
  //     "dial_code": "+1869",
  //     "code": "KN",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Saint Lucia",
  //     "dial_code": "+1758",
  //     "code": "LC",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Saint Martin",
  //     "dial_code": "+590",
  //     "code": "MF",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Saint Pierre and Miquelon",
  //     "dial_code": "+508",
  //     "code": "PM",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Saint Vincent and the Grenadines",
  //     "dial_code": "+1784",
  //     "code": "VC",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Samoa",
  //     "dial_code": "+685",
  //     "code": "WS",
  //     "min_length": 5,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "San Marino",
  //     "dial_code": "+378",
  //     "code": "SM",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Sao Tome and Principe",
  //     "dial_code": "+239",
  //     "code": "ST",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Saudi Arabia",
  //     "dial_code": "+966",
  //     "code": "SA",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Senegal",
  //     "dial_code": "+221",
  //     "code": "SN",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Serbia",
  //     "dial_code": "+381",
  //     "code": "RS",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Seychelles",
  //     "dial_code": "+248",
  //     "code": "SC",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Sierra Leone",
  //     "dial_code": "+232",
  //     "code": "SL",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Singapore",
  //     "dial_code": "+65",
  //     "code": "SG",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Slovakia",
  //     "dial_code": "+421",
  //     "code": "SK",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Slovenia",
  //     "dial_code": "+386",
  //     "code": "SI",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Solomon Islands",
  //     "dial_code": "+677",
  //     "code": "SB",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Somalia",
  //     "dial_code": "+252",
  //     "code": "SO",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "South Africa",
  //     "dial_code": "+27",
  //     "code": "ZA",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "South Sudan",
  //     "dial_code": "+211",
  //     "code": "SS",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "South Georgia and the South Sandwich Islands",
  //     "dial_code": "+500",
  //     "code": "GS",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Spain",
  //     "dial_code": "+34",
  //     "code": "ES",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Sri Lanka",
  //     "dial_code": "+94",
  //     "code": "LK",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Sudan",
  //     "dial_code": "+249",
  //     "code": "SD",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Suriname",
  //     "dial_code": "+597",
  //     "code": "SR",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Svalbard and Jan Mayen",
  //     "dial_code": "+47",
  //     "code": "SJ",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Swaziland",
  //     "dial_code": "+268",
  //     "code": "SZ",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Sweden",
  //     "dial_code": "+46",
  //     "code": "SE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Switzerland",
  //     "dial_code": "+41",
  //     "code": "CH",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Syrian Arab Republic",
  //     "dial_code": "+963",
  //     "code": "SY",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Taiwan",
  //     "dial_code": "+886",
  //     "code": "TW",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Tajikistan",
  //     "dial_code": "+992",
  //     "code": "TJ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Tanzania, United Republic of Tanzania",
  //     "dial_code": "+255",
  //     "code": "TZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Thailand",
  //     "dial_code": "+66",
  //     "code": "TH",
  //     "min_length": 9,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Timor-Leste",
  //     "dial_code": "+670",
  //     "code": "TL",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Togo",
  //     "dial_code": "+228",
  //     "code": "TG",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Tokelau",
  //     "dial_code": "+690",
  //     "code": "TK",
  //     "min_length": 4,
  //     "max_length": 4
  //   },
  //   {
  //     "name": "Tonga",
  //     "dial_code": "+676",
  //     "code": "TO",
  //     "min_length": 5,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Trinidad and Tobago",
  //     "dial_code": "+1868",
  //     "code": "TT",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Tunisia",
  //     "dial_code": "+216",
  //     "code": "TN",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Turkey",
  //     "dial_code": "+90",
  //     "code": "TR",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Turkmenistan",
  //     "dial_code": "+993",
  //     "code": "TM",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Turks and Caicos Islands",
  //     "dial_code": "+1649",
  //     "code": "TC",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Tuvalu",
  //     "dial_code": "+688",
  //     "code": "TV",
  //     "min_length": 5,
  //     "max_length": 5
  //   },
  //   {
  //     "name": "Uganda",
  //     "dial_code": "+256",
  //     "code": "UG",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Ukraine",
  //     "dial_code": "+380",
  //     "code": "UA",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "United Arab Emirates",
  //     "dial_code": "+971",
  //     "code": "AE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "United Kingdom",
  //     "dial_code": "+44",
  //     "code": "GB",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "United States",
  //     "dial_code": "+1",
  //     "code": "US",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Uruguay",
  //     "dial_code": "+598",
  //     "code": "UY",
  //     "min_length": 8,
  //     "max_length": 8
  //   },
  //   {
  //     "name": "Uzbekistan",
  //     "dial_code": "+998",
  //     "code": "UZ",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Vanuatu",
  //     "dial_code": "+678",
  //     "code": "VU",
  //     "min_length": 5,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Venezuela, Bolivarian Republic of Venezuela",
  //     "dial_code": "+58",
  //     "code": "VE",
  //     "min_length": 10,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Vietnam",
  //     "dial_code": "+84",
  //     "code": "VN",
  //     "min_length": 9,
  //     "max_length": 10
  //   },
  //   {
  //     "name": "Virgin Islands, British",
  //     "dial_code": "+1284",
  //     "code": "VG",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Virgin Islands, U.S.",
  //     "dial_code": "+1340",
  //     "code": "VI",
  //     "min_length": 7,
  //     "max_length": 7
  //   },
  //   {
  //     "name": "Wallis and Futuna",
  //     "dial_code": "+681",
  //     "code": "WF",
  //     "min_length": 6,
  //     "max_length": 6
  //   },
  //   {
  //     "name": "Yemen",
  //     "dial_code": "+967",
  //     "code": "YE",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Zambia",
  //     "dial_code": "+260",
  //     "code": "ZM",
  //     "min_length": 9,
  //     "max_length": 9
  //   },
  //   {
  //     "name": "Zimbabwe",
  //     "dial_code": "+263",
  //     "code": "ZW",
  //     "min_length": 9,
  //     "max_length": 9
  //   }
  // ]
  
  // export default countryCodes
  