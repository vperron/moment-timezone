(function(){
var data = {
	"rules": {
		"ArgAQ": [
			"1964,1966,2,1,0,0,-",
			"1964,1966,9,15,0,60,S",
			"1967,1967,3,2,0,0,-",
			"1967,1968,9,0:1,0,60,S",
			"1968,1969,3,0:1,0,0,-",
			"1974,1974,0,23,0,60,S",
			"1974,1974,4,1,0,0,-"
		],
		"ChileAQ" : [
			"1972	1986	2	9	0	180	1	0",
			"1974	1987	9	9	0	240	1	60	S",
			"1987	1987	3	12	7	180	1	0",
			"1988	1989	2	9	0	180	1	0",
			"1988	1988	9	1	0	240	1	60	S",
			"1989	1989	9	9	0	240	1	60	S",
			"1990	1990	2	18	7	180	1	0",
			"1990	1990	8	16	7	240	1	60	S",
			"1991	1996	2	9	0	180	1	0",
			"1991	1997	9	9	0	240	1	60	S",
			"1997	1997	2	30	7	180	1	0",
			"1998	1998	2	9	0	180	1	0",
			"1998	1998	8	27	7	240	1	60	S",
			"1999	1999	3	4	7	180	1	0",
			"1999	2010	9	9	0	240	1	60	S",
			"2000	2007	2	9	0	180	1	0",
			"2008	2008	2	30	7	180	1	0",
			"2009	2009	2	9	0	180	1	0",
			"2010	2010	3	1	0	180	1	0",
			"2011	2011	4	2	0	180	1	0",
			"2011	2011	7	16	0	240	1	60	S",
			"2012	9999	3	23	0	180	1	0",
			"2012	9999	8	2	0	240	1	60	S"
		],
		"AusAQ" : [
			"1917	1917	0	1	7	1	0	60",
			"1917	1917	2	25	7	120	0	0",
			"1942	1942	0	1	7	120	0	60",
			"1942	1942	2	29	7	120	0	0",
			"1942	1942	8	27	7	120	0	60",
			"1943	1944	2	0	8	120	0	0",
			"1943	1943	9	3	7	120	0	60"
		],
		"ATAQ" : [
			"1967	1967	9	1	0	120	2	60",
			"1968	1968	2	0	8	120	2	0",
			"1968	1985	9	0	8	120	2	60",
			"1969	1971	2	8	0	120	2	0",
			"1972	1972	1	0	8	120	2	0",
			"1973	1981	2	1	0	120	2	0",
			"1982	1983	2	0	8	120	2	0",
			"1984	1986	2	1	0	120	2	0",
			"1986	1986	9	15	0	120	2	60",
			"1987	1990	2	15	0	120	2	0",
			"1987	1987	9	22	0	120	2	60",
			"1988	1990	9	0	8	120	2	60",
			"1991	1999	9	1	0	120	2	60",
			"1991	2005	2	0	8	120	2	0",
			"2000	2000	7	0	8	120	2	60",
			"2001	9999	9	1	0	120	2	60",
			"2006	2006	3	1	0	120	2	0",
			"2007	2007	2	0	8	120	2	0",
			"2008	9999	3	1	0	120	2	0"
		],
		"NZAQ" : [
			"1974	1974	10	3	7	120	2	60	D",
			"1975	1988	9	0	8	120	2	60	D",
			"1989	1989	9	8	7	120	2	60	D",
			"1990	2006	9	1	0	120	2	60	D",
			"1975	1975	1	23	7	120	2	0	S",
			"1976	1989	2	1	0	120	2	0	S",
			"1990	2007	2	15	0	120	2	0	S",
			"2007	9999	8	0	8	120	2	60	D",
			"2008	9999	3	1	0	120	2	0	S"
		]
	},
	zones : {
		"Antarctica/Casey" : [
			"0	-	zzz	1969",
			"480	-	WST	2009_9_18_0_120	480",
			"660	-	CAST	2010_2_5_0_120	660",
			"480	-	WST	2011_9_28_0_120	480",
			"660	-	CAST	2012_1_21_0_1020	660",
			"480	-	WST"
		],
		"Antarctica/Davis" : [
			"0	-	zzz	1957_0_13",
			"420	-	DAVT	1964_10	420",
			"0	-	zzz	1969_1",
			"420	-	DAVT	2009_9_18_0_120	420",
			"300	-	DAVT	2010_2_10_0_1200	300",
			"420	-	DAVT	2011_9_28_0_120	420",
			"300	-	DAVT	2012_1_21_0_1200	300",
			"420	-	DAVT"
		],
		"Antarctica/Mawson" : [
			"0	-	zzz	1954_1_13",
			"360	-	MAWT	2009_9_18_0_120	360",
			"300	-	MAWT"
		],
		"Antarctica/Macquarie" : [
			"0	-	zzz	1911",
			"600	-	EST	1916_9_1_0_120	600",
			"600	1:00	EST	1917_1	600",
			"600	AusAQ	EST	1967	660",
			"600	ATAQ	EST	2010_3_4_0_180	600",
			"660	-	MIST"
		],
		"Indian/Kerguelen" : [
			"0	-	zzz	1950",
			"300	-	TFT"
		],
		"Antarctica/DumontDUrville" : [
			"0	-	zzz	1947",
			"600	-	PMT	1952_0_14	600",
			"0	-	zzz	1956_10",
			"600	-	DDUT"
		],
		"Antarctica/Syowa" : [
			"0	-	zzz	1957_0_29",
			"180	-	SYOT"
		],
		"Antarctica/Vostok" : [
			"0	-	zzz	1957_11_16",
			"360	-	VOST"
		],
		"Antarctica/Rothera" : [
			"0	-	zzz	1976_11_1",
			"-180	-	ROTT"
		],
		"Antarctica/Palmer" : [
			"0	-	zzz	1965",
			"-240	ArgAQ	AR%sT	1969_9_5	-240",
			"-180	ArgAQ	AR%sT	1982_4	-180",
			"-240	ChileAQ	CL%sT"
		],
		"Antarctica/McMurdo" : [
			"0	-	zzz	1956",
			"720	NZAQ	NZ%sT"
		]
	},
	"lastZone": "Antarctica/McMurdo"
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
