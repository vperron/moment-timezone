(function(){
var data = {
	"rules": {
		"Algeria": [
			"1916,1916,5,14,1380,60,S",
			"1916,1919,9,0:1,1380,0,-",
			"1917,1917,2,24,1380,60,S",
			"1918,1918,2,9,1380,60,S",
			"1919,1919,2,1,1380,60,S",
			"1920,1920,1,14,1380,60,S",
			"1920,1920,9,23,1380,0,-",
			"1921,1921,2,14,1380,60,S",
			"1921,1921,5,21,1380,0,-",
			"1939,1939,8,11,1380,60,S",
			"1939,1939,10,19,60,0,-",
			"1944,1945,3,1:1,120,60,S",
			"1944,1944,9,8,120,0,-",
			"1945,1945,8,16,60,0,-",
			"1971,1971,3,25,1380,60,S",
			"1971,1971,8,26,1380,0,-",
			"1977,1977,4,6,0,60,S",
			"1977,1977,9,21,0,0,-",
			"1978,1978,2,24,60,60,S",
			"1978,1978,8,22,180,0,-",
			"1980,1980,3,25,0,60,S",
			"1980,1980,9,31,120,0,-"
		],
		"Egypt": [
			"1940,1940,6,15,0,60,S",
			"1940,1940,9,1,0,0,-",
			"1941,1941,3,15,0,60,S",
			"1941,1941,8,16,0,0,-",
			"1942,1944,3,1,0,60,S",
			"1942,1942,9,27,0,0,-",
			"1943,1945,10,1,0,0,-",
			"1945,1945,3,16,0,60,S",
			"1957,1957,4,10,0,60,S",
			"1957,1958,9,1,0,0,-",
			"1958,1958,4,1,0,60,S",
			"1959,1981,4,1,60,60,S",
			"1959,1965,8,30,180,0,-",
			"1966,1994,9,1,180,0,-",
			"1982,1982,6,25,60,60,S",
			"1983,1983,6,12,60,60,S",
			"1984,1988,4,1,60,60,S",
			"1989,1989,4,6,60,60,S",
			"1990,1994,4,1,60,60,S",
			"1995,2010,3,-5,0,60,S",
			"1995,2005,8,-4,1380,0,-",
			"2006,2006,8,21,1380,0,-",
			"2007,2007,8,4:1,1380,0,-",
			"2008,2008,7,-4,1380,0,-",
			"2009,2009,7,20,1380,0,-",
			"2010,2010,7,11,0,0,-",
			"2010,2010,8,10,0,60,S",
			"2010,2010,8,-4,1380,0,-"
		],
		"Ghana": [
			"1936,1942,8,1,0,20,GHST",
			"1936,1942,11,31,0,0,GMT"
		],
		"Libya": [
			"1951,1951,9,14,120,60,S",
			"1952,1952,0,1,0,0,-",
			"1953,1953,9,9,120,60,S",
			"1954,1954,0,1,0,0,-",
			"1955,1955,8,30,0,60,S",
			"1956,1956,0,1,0,0,-",
			"1982,1984,3,1,0,60,S",
			"1982,1985,9,1,0,0,-",
			"1985,1985,3,6,0,60,S",
			"1986,1986,3,4,0,60,S",
			"1986,1986,9,3,0,0,-",
			"1987,1989,3,1,0,60,S",
			"1987,1989,9,1,0,0,-"
		],
		"Mauritius": [
			"1982,1982,9,10,0,60,S",
			"1983,1983,2,21,0,0,-",
			"2008,2008,9,0,120,60,S",
			"2009,2009,2,0,120,0,-"
		],
		"Morocco": [
			"1939,1939,8,12,0,60,S",
			"1939,1939,10,19,0,0,-",
			"1940,1940,1,25,0,60,S",
			"1945,1945,10,18,0,0,-",
			"1950,1950,5,11,0,60,S",
			"1950,1950,9,29,0,0,-",
			"1967,1967,5,3,720,60,S",
			"1967,1967,9,1,0,0,-",
			"1974,1974,5,24,0,60,S",
			"1974,1974,8,1,0,0,-",
			"1976,1977,4,1,0,60,S",
			"1976,1976,7,1,0,0,-",
			"1977,1977,8,28,0,0,-",
			"1978,1978,5,1,0,60,S",
			"1978,1978,7,4,0,0,-",
			"2008,2008,5,1,0,60,S",
			"2008,2008,8,1,0,0,-",
			"2009,2009,5,1,0,60,S",
			"2009,2009,7,21,0,0,-",
			"2010,2010,4,2,0,60,S",
			"2010,2010,7,8,0,0,-",
			"2011,2011,3,3,0,60,S",
			"2011,2011,6,31,0,0,-"
		],
		"Namibia": [
			"1994,9999,8,0:1,120,60,S",
			"1995,9999,3,0:1,120,0,-"
		],
		"SL": [
			"1935,1942,5,1,0,40,SLST",
			"1935,1942,9,1,0,0,WAT",
			"1957,1962,5,1,0,60,SLST",
			"1957,1962,8,1,0,0,GMT"
		],
		"SA": [
			"1942,1943,8,0:15,120,60,-",
			"1943,1944,2,0:15,120,0,-"
		],
		"Sudan": [
			"1970,1970,4,1,0,60,S",
			"1970,1985,9,15,0,0,-",
			"1971,1971,3,30,0,60,S",
			"1972,1985,3,0,0,60,S"
		],
		"Tunisia": [
			"1939,1939,3,15,1380,60,S",
			"1939,1939,10,18,1380,0,-",
			"1940,1940,1,25,1380,60,S",
			"1941,1941,9,6,0,0,-",
			"1942,1942,2,9,0,60,S",
			"1942,1942,10,2,180,0,-",
			"1943,1943,2,29,120,60,S",
			"1943,1943,3,17,120,0,-",
			"1943,1943,3,25,120,60,S",
			"1943,1943,9,4,120,0,-",
			"1944,1945,3,1:1,120,60,S",
			"1944,1944,9,8,0,0,-",
			"1945,1945,8,16,0,0,-",
			"1977,1977,3,30,0,60,S",
			"1977,1977,8,24,0,0,-",
			"1978,1978,4,1,0,60,S",
			"1978,1978,9,1,0,0,-",
			"1988,1988,5,1,0,60,S",
			"1988,1990,8,0,0,0,-",
			"1989,1989,2,26,0,60,S",
			"1990,1990,4,1,0,60,S",
			"2005,2005,4,1,0,60,S",
			"2005,2005,8,30,60,0,-",
			"2006,2008,2,0,120,60,S",
			"2006,2008,9,0,120,0,-"
		]
	},
	zones : {
		"Africa/Algiers" : [
			"12	-	LMT	1891_2_15_0_1	12",
			"9	-	PMT	1911_2_11	9",
			"0	Algeria	WE%sT	1940_1_25_0_120",
			"60	Algeria	CE%sT	1946_9_7	60",
			"0	-	WET	1956_0_29",
			"60	-	CET	1963_3_14	60",
			"0	Algeria	WE%sT	1977_9_21",
			"60	Algeria	CE%sT	1979_9_26	60",
			"0	Algeria	WE%sT	1981_4",
			"60	-	CET"
		],
		"Africa/Luanda" : [
			"52	-	LMT	1892	52",
			"52	-	AOT	1911_4_26	52",
			"60	-	WAT"
		],
		"Africa/Porto-Novo" : [
			"10	-	LMT	1912	10",
			"0	-	GMT	1934_1_26",
			"60	-	WAT"
		],
		"Africa/Gaborone" : [
			"103	-	LMT	1885	103",
			"90	-	SAST	1903_2	90",
			"120	-	CAT	1943_8_19_0_120	120",
			"120	1:00	CAST	1944_2_19_0_120	120",
			"120	-	CAT"
		],
		"Africa/Ouagadougou" : [
			"6	-	LMT	1912	6",
			"0	-	GMT"
		],
		"Africa/Bujumbura" : [
			"117	-	LMT	1890	117",
			"120	-	CAT"
		],
		"Africa/Douala" : [
			"38	-	LMT	1912	38",
			"60	-	WAT"
		],
		"Atlantic/Cape_Verde" : [
			"-94	-	LMT	1907	-94",
			"-120	-	CVT	1942_8	-120",
			"-120	1:00	CVST	1945_9_15	-120",
			"-120	-	CVT	1975_10_25_0_120	-120",
			"-60	-	CVT"
		],
		"Africa/Bangui" : [
			"74	-	LMT	1912	74",
			"60	-	WAT"
		],
		"Africa/Ndjamena" : [
			"60	-	LMT	1912	60",
			"60	-	WAT	1979_9_14	60",
			"60	1:00	WAST	1980_2_8	60",
			"60	-	WAT"
		],
		"Indian/Comoro" : [
			"173	-	LMT	1911_6	173",
			"180	-	EAT"
		],
		"Africa/Kinshasa" : [
			"61	-	LMT	1897_10_9	61",
			"60	-	WAT"
		],
		"Africa/Lubumbashi" : [
			"109	-	LMT	1897_10_9	109",
			"120	-	CAT"
		],
		"Africa/Brazzaville" : [
			"61	-	LMT	1912	61",
			"60	-	WAT"
		],
		"Africa/Abidjan" : [
			"16	-	LMT	1912	16",
			"0	-	GMT"
		],
		"Africa/Djibouti" : [
			"172	-	LMT	1911_6	172",
			"180	-	EAT"
		],
		"Africa/Cairo" : [
			"125	-	LMT	1900_9	125",
			"120	Egypt	EE%sT"
		],
		"Africa/Malabo" : [
			"35	-	LMT	1912	35",
			"0	-	GMT	1963_11_15",
			"60	-	WAT"
		],
		"Africa/Asmara" : [
			"155	-	LMT	1870	155",
			"155	-	AMT	1890	155",
			"155	-	ADMT	1936_4_5	155",
			"180	-	EAT"
		],
		"Africa/Addis_Ababa" : [
			"154	-	LMT	1870	154",
			"155	-	ADMT	1936_4_5	155",
			"180	-	EAT"
		],
		"Africa/Libreville" : [
			"37	-	LMT	1912	37",
			"60	-	WAT"
		],
		"Africa/Banjul" : [
			"-66	-	LMT	1912	-66",
			"-66	-	BMT	1935	-66",
			"-60	-	WAT	1964	-60",
			"0	-	GMT"
		],
		"Africa/Accra" : [
			"0	-	LMT	1918",
			"0	Ghana	%s"
		],
		"Africa/Conakry" : [
			"54	-	LMT	1912	54",
			"0	-	GMT	1934_1_26",
			"-60	-	WAT	1960	-60",
			"0	-	GMT"
		],
		"Africa/Bissau" : [
			"-62	-	LMT	1911_4_26	-62",
			"-60	-	WAT	1975	-60",
			"0	-	GMT"
		],
		"Africa/Nairobi" : [
			"147	-	LMT	1928_6	147",
			"180	-	EAT	1930	180",
			"150	-	BEAT	1940	150",
			"165	-	BEAUT	1960	165",
			"180	-	EAT"
		],
		"Africa/Maseru" : [
			"110	-	LMT	1903_2	110",
			"120	-	SAST	1943_8_19_0_120	120",
			"120	1:00	SAST	1944_2_19_0_120	120",
			"120	-	SAST"
		],
		"Africa/Monrovia" : [
			"43	-	LMT	1882	43",
			"43	-	MMT	1919_2	43",
			"44	-	LRT	1972_4	44",
			"0	-	GMT"
		],
		"Africa/Tripoli" : [
			"52	-	LMT	1920	52",
			"60	Libya	CE%sT	1959	60",
			"120	-	EET	1982	120",
			"60	Libya	CE%sT	1990_4_4	60",
			"120	-	EET	1996_8_30	120",
			"60	Libya	CE%sT	1997_9_4	60",
			"120	-	EET	2012_10_10_0_120	120",
			"60	Libya	CE%sT"
		],
		"Indian/Antananarivo" : [
			"190	-	LMT	1911_6	190",
			"180	-	EAT	1954_1_27_0_1380	180",
			"180	1:00	EAST	1954_4_29_0_1380	180",
			"180	-	EAT"
		],
		"Africa/Blantyre" : [
			"140	-	LMT	1903_2	140",
			"120	-	CAT"
		],
		"Africa/Bamako" : [
			"32	-	LMT	1912	32",
			"0	-	GMT	1934_1_26",
			"-60	-	WAT	1960_5_20	-60",
			"0	-	GMT"
		],
		"Africa/Nouakchott" : [
			"-63	-	LMT	1912	-63",
			"0	-	GMT	1934_1_26",
			"-60	-	WAT	1960_10_28	-60",
			"0	-	GMT"
		],
		"Indian/Mauritius" : [
			"230	-	LMT	1907	230",
			"240	Mauritius	MU%sT"
		],
		"Indian/Mayotte" : [
			"180	-	LMT	1911_6	180",
			"180	-	EAT"
		],
		"Africa/Casablanca" : [
			"30	-	LMT	1913_9_26	30",
			"0	Morocco	WE%sT	1984_2_16",
			"60	-	CET	1986	60",
			"0	Morocco	WE%sT"
		],
		"Africa/El_Aaiun" : [
			"52	-	LMT	1934_0	52",
			"-60	-	WAT	1976_3_14	-60",
			"0	-	WET"
		],
		"Africa/Maputo" : [
			"130	-	LMT	1903_2	130",
			"120	-	CAT"
		],
		"Africa/Windhoek" : [
			"68	-	LMT	1892_1_8	68",
			"90	-	SWAT	1903_2	90",
			"120	-	SAST	1942_8_20_0_120	120",
			"120	1:00	SAST	1943_2_21_0_120	120",
			"120	-	SAST	1990_2_21	120",
			"120	-	CAT	1994_3_3	120",
			"60	Namibia	WA%sT"
		],
		"Africa/Niamey" : [
			"8	-	LMT	1912	8",
			"-60	-	WAT	1934_1_26	-60",
			"0	-	GMT	1960",
			"60	-	WAT"
		],
		"Africa/Lagos" : [
			"13	-	LMT	1919_8	13",
			"60	-	WAT"
		],
		"Indian/Reunion" : [
			"221	-	LMT	1911_5	221",
			"240	-	RET"
		],
		"Africa/Kigali" : [
			"120	-	LMT	1935_5	120",
			"120	-	CAT"
		],
		"Atlantic/St_Helena" : [
			"22	-	LMT	1890	22",
			"22	-	JMT	1951	22",
			"0	-	GMT"
		],
		"Africa/Sao_Tome" : [
			"26	-	LMT	1884	26",
			"36	-	LMT	1912	36",
			"0	-	GMT"
		],
		"Africa/Dakar" : [
			"-69	-	LMT	1912	-69",
			"-60	-	WAT	1941_5	-60",
			"0	-	GMT"
		],
		"Indian/Mahe" : [
			"221	-	LMT	1906_5	221",
			"240	-	SCT"
		],
		"Africa/Freetown" : [
			"53	-	LMT	1882	53",
			"53	-	FMT	1913_5	53",
			"-60	SL	%s	1957	-60",
			"0	SL	%s"
		],
		"Africa/Mogadishu" : [
			"181	-	LMT	1893_10	181",
			"180	-	EAT	1931	180",
			"150	-	BEAT	1957	150",
			"180	-	EAT"
		],
		"Africa/Johannesburg" : [
			"112	-	LMT	1892_1_8	112",
			"90	-	SAST	1903_2	90",
			"120	SA	SAST"
		],
		"Africa/Khartoum" : [
			"130	-	LMT	1931	130",
			"120	Sudan	CA%sT	2000_0_15_0_720	180",
			"180	-	EAT"
		],
		"Africa/Juba" : [
			"126	-	LMT	1931	126",
			"120	Sudan	CA%sT	2000_0_15_0_720	180",
			"180	-	EAT"
		],
		"Africa/Mbabane" : [
			"124	-	LMT	1903_2	124",
			"120	-	SAST"
		],
		"Africa/Dar_es_Salaam" : [
			"157	-	LMT	1931	157",
			"180	-	EAT	1948	180",
			"165	-	BEAUT	1961	165",
			"180	-	EAT"
		],
		"Africa/Lome" : [
			"4	-	LMT	1893	4",
			"0	-	GMT"
		],
		"Africa/Tunis" : [
			"40	-	LMT	1881_4_12	40",
			"9	-	PMT	1911_2_11	9",
			"60	Tunisia	CE%sT"
		],
		"Africa/Kampala" : [
			"129	-	LMT	1928_6	129",
			"180	-	EAT	1930	180",
			"150	-	BEAT	1948	150",
			"165	-	BEAUT	1957	165",
			"180	-	EAT"
		],
		"Africa/Lusaka" : [
			"113	-	LMT	1903_2	113",
			"120	-	CAT"
		],
		"Africa/Harare" : [
			"124	-	LMT	1903_2	124",
			"120	-	CAT"
		]
	},
	"lastZone": "Africa/Harare"
};
   function onLoad (tz) {
       tz.addRules(data.rules);
       tz.addZones(data.zones);
   }
   if (typeof module !== 'undefined' && module.exports) {
       module.exports = data;
   } else {
       if (typeof define === "function" && define.amd) {
           require(["moment-timezone"], onLoad);
       }
       if (this.moment && this.moment.tz) {
           onLoad(this.moment.tz);
       }
   }
}).call(this);
