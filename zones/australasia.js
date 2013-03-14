(function(){
var data = {
	"rules": {
		"Aus": [
			"1917,1917,0,1,-1,60,-",
			"1917,1917,2,25,120,0,-",
			"1942,1942,0,1,120,60,-",
			"1942,1942,2,29,120,0,-",
			"1942,1942,8,27,120,60,-",
			"1943,1944,2,0,120,0,-",
			"1943,1943,9,3,120,60,-"
		],
		"AW": [
			"1974,1974,9,0,120s,60,-",
			"1975,1975,2,0:1,120s,0,-",
			"1983,1983,9,0,120s,60,-",
			"1984,1984,2,0:1,120s,0,-",
			"1991,1991,10,17,120s,60,-",
			"1992,1992,2,0:1,120s,0,-",
			"2006,2006,11,3,120s,60,-",
			"2007,2009,2,0,120s,0,-",
			"2007,2008,9,0,120s,60,-"
		],
		"AQ": [
			"1971,1971,9,0,120s,60,-",
			"1972,1972,1,0,120s,0,-",
			"1989,1991,9,0,120s,60,-",
			"1990,1992,2,0:1,120s,0,-"
		],
		"Holiday": [
			"1992,1993,9,0,120s,60,-",
			"1993,1994,2,0:1,120s,0,-"
		],
		"AS": [
			"1971,1985,9,0,120s,60,-",
			"1986,1986,9,19,120s,60,-",
			"1987,2007,9,0,120s,60,-",
			"1972,1972,1,27,120s,0,-",
			"1973,1985,2,0:1,120s,0,-",
			"1986,1990,2,0:15,120s,0,-",
			"1991,1991,2,3,120s,0,-",
			"1992,1992,2,22,120s,0,-",
			"1993,1993,2,7,120s,0,-",
			"1994,1994,2,20,120s,0,-",
			"1995,2005,2,0,120s,0,-",
			"2006,2006,3,2,120s,0,-",
			"2007,2007,2,0,120s,0,-",
			"2008,9999,3,0:1,120s,0,-",
			"2008,9999,9,0:1,120s,60,-"
		],
		"AT": [
			"1967,1967,9,0:1,120s,60,-",
			"1968,1968,2,0,120s,0,-",
			"1968,1985,9,0,120s,60,-",
			"1969,1971,2,0:8,120s,0,-",
			"1972,1972,1,0,120s,0,-",
			"1973,1981,2,0:1,120s,0,-",
			"1982,1983,2,0,120s,0,-",
			"1984,1986,2,0:1,120s,0,-",
			"1986,1986,9,0:15,120s,60,-",
			"1987,1990,2,0:15,120s,0,-",
			"1987,1987,9,0:22,120s,60,-",
			"1988,1990,9,0,120s,60,-",
			"1991,1999,9,0:1,120s,60,-",
			"1991,2005,2,0,120s,0,-",
			"2000,2000,7,0,120s,60,-",
			"2001,9999,9,0:1,120s,60,-",
			"2006,2006,3,0:1,120s,0,-",
			"2007,2007,2,0,120s,0,-",
			"2008,9999,3,0:1,120s,0,-"
		],
		"AV": [
			"1971,1985,9,0,120s,60,-",
			"1972,1972,1,0,120s,0,-",
			"1973,1985,2,0:1,120s,0,-",
			"1986,1990,2,0:15,120s,0,-",
			"1986,1987,9,0:15,120s,60,-",
			"1988,1999,9,0,120s,60,-",
			"1991,1994,2,0:1,120s,0,-",
			"1995,2005,2,0,120s,0,-",
			"2000,2000,7,0,120s,60,-",
			"2001,2007,9,0,120s,60,-",
			"2006,2006,3,0:1,120s,0,-",
			"2007,2007,2,0,120s,0,-",
			"2008,9999,3,0:1,120s,0,-",
			"2008,9999,9,0:1,120s,60,-"
		],
		"AN": [
			"1971,1985,9,0,120s,60,-",
			"1972,1972,1,27,120s,0,-",
			"1973,1981,2,0:1,120s,0,-",
			"1982,1982,3,0:1,120s,0,-",
			"1983,1985,2,0:1,120s,0,-",
			"1986,1989,2,0:15,120s,0,-",
			"1986,1986,9,19,120s,60,-",
			"1987,1999,9,0,120s,60,-",
			"1990,1995,2,0:1,120s,0,-",
			"1996,2005,2,0,120s,0,-",
			"2000,2000,7,0,120s,60,-",
			"2001,2007,9,0,120s,60,-",
			"2006,2006,3,0:1,120s,0,-",
			"2007,2007,2,0,120s,0,-",
			"2008,9999,3,0:1,120s,0,-",
			"2008,9999,9,0:1,120s,60,-"
		],
		"LH": [
			"1981,1984,9,0,120,60,-",
			"1982,1985,2,0:1,120,0,-",
			"1985,1985,9,0,120,-30,-",
			"1986,1989,2,0:15,120,0,-",
			"1986,1986,9,19,120,-30,-",
			"1987,1999,9,0,120,-30,-",
			"1990,1995,2,0:1,120,0,-",
			"1996,2005,2,0,120,0,-",
			"2000,2000,7,0,120,-30,-",
			"2001,2007,9,0,120,-30,-",
			"2006,2006,3,0:1,120,0,-",
			"2007,2007,2,0,120,0,-",
			"2008,9999,3,0:1,120,0,-",
			"2008,9999,9,0:1,120,-30,-"
		],
		"Cook": [
			"1978,1978,10,12,0,-30,HS",
			"1979,1991,2,0:1,0,0,-",
			"1979,1990,9,0,0,-30,HS"
		],
		"Fiji": [
			"1998,1999,10,0:1,120,60,S",
			"1999,2000,1,0,180,0,-",
			"2009,2009,10,29,120,60,S",
			"2010,2010,2,0,180,0,-",
			"2010,9999,9,0:18,120,60,S",
			"2011,2011,2,0:1,180,0,-",
			"2012,9999,0,0:18,180,0,-"
		],
		"NC": [
			"1977,1978,11,0:1,0,60,S",
			"1978,1979,1,27,0,0,-",
			"1996,1996,11,1,120s,60,S",
			"1997,1997,2,2,120s,0,-"
		],
		"NZ": [
			"1927,1927,10,6,120,60,S",
			"1928,1928,2,4,120,0,M",
			"1928,1933,9,0:8,120,-30,S",
			"1929,1933,2,0:15,120,0,M",
			"1934,1940,3,0,120,0,M",
			"1934,1940,8,0,120,-30,S",
			"1946,1946,0,1,0,0,S",
			"1974,1974,10,0:1,120s,60,D",
			"1975,1975,1,0,120s,0,S",
			"1975,1988,9,0,120s,60,D",
			"1976,1989,2,0:1,120s,0,S",
			"1989,1989,9,0:8,120s,60,D",
			"1990,2006,9,0:1,120s,60,D",
			"1990,2007,2,0:15,120s,0,S",
			"2007,9999,8,0,120s,60,D",
			"2008,9999,3,0:1,120s,0,S"
		],
		"Chatham": [
			"1974,1974,10,0:1,165s,60,D",
			"1975,1975,1,0,165s,0,S",
			"1975,1988,9,0,165s,60,D",
			"1976,1989,2,0:1,165s,0,S",
			"1989,1989,9,0:8,165s,60,D",
			"1990,2006,9,0:1,165s,60,D",
			"1990,2007,2,0:15,165s,0,S",
			"2007,9999,8,0,165s,60,D",
			"2008,9999,3,0:1,165s,0,S"
		],
		"WS": [
			"2012,9999,8,0,180,60,D",
			"2012,9999,3,0:1,240,0,-"
		],
		"Tonga": [
			"1999,1999,9,7,120s,60,S",
			"2000,2000,2,19,120s,0,-",
			"2000,2001,10,0:1,120,60,S",
			"2001,2002,0,0,120,0,-"
		],
		"Vanuatu": [
			"1983,1983,8,25,0,60,S",
			"1984,1991,2,0:23,0,0,-",
			"1984,1984,9,23,0,60,S",
			"1985,1991,8,0:23,0,60,S",
			"1992,1993,0,0:23,0,0,-",
			"1992,1992,9,0:23,0,60,S"
		]
	},
	"zones": {
		"Australia/Darwin": [
			"523,-,LMT,1895 1",
			"540,-,CST,1899 4",
			"570,Aus,CST"
		],
		"Australia/Perth": [
			"463,-,LMT,1895 11",
			"480,Aus,WST,1943 6",
			"480,AW,WST"
		],
		"Australia/Eucla": [
			"515,-,LMT,1895 11",
			"525,Aus,CWST,1943 6",
			"525,AW,CWST"
		],
		"Australia/Brisbane": [
			"612,-,LMT,1895",
			"600,Aus,EST,1971",
			"600,AQ,EST"
		],
		"Australia/Lindeman": [
			"595,-,LMT,1895",
			"600,Aus,EST,1971",
			"600,AQ,EST,1992 6",
			"600,Holiday,EST"
		],
		"Australia/Adelaide": [
			"554,-,LMT,1895 1",
			"540,-,CST,1899 4",
			"570,Aus,CST,1971",
			"570,AS,CST"
		],
		"Australia/Hobart": [
			"589,-,LMT,1895 8",
			"600,-,EST,1916 9 1 0 120",
			"600,1:00,EST,1917 1",
			"600,Aus,EST,1967",
			"600,AT,EST"
		],
		"Australia/Currie": [
			"575,-,LMT,1895 8",
			"600,-,EST,1916 9 1 0 120",
			"600,1:00,EST,1917 1",
			"600,Aus,EST,1971 6",
			"600,AT,EST"
		],
		"Australia/Melbourne": [
			"579,-,LMT,1895 1",
			"600,Aus,EST,1971",
			"600,AV,EST"
		],
		"Australia/Sydney": [
			"604,-,LMT,1895 1",
			"600,Aus,EST,1971",
			"600,AN,EST"
		],
		"Australia/Broken_Hill": [
			"565,-,LMT,1895 1",
			"600,-,EST,1896 7 23",
			"540,-,CST,1899 4",
			"570,Aus,CST,1971",
			"570,AN,CST,2000",
			"570,AS,CST"
		],
		"Australia/Lord_Howe": [
			"636,-,LMT,1895 1",
			"600,-,EST,1981 2",
			"630,LH,LHST"
		],
		"Indian/Christmas": [
			"422,-,LMT,1895 1",
			"420,-,CXT"
		],
		"Pacific/Rarotonga": [
			"-639,-,LMT,1901 ",
			"-630,-,CKT,1978 10 12 ",
			"-600,Cook,CK%sT"
		],
		"Indian/Cocos": [
			"387,-,LMT,1900",
			"390,-,CCT"
		],
		"Pacific/Fiji": [
			"715,-,LMT,1915 9 26 ",
			"720,Fiji,FJ%sT"
		],
		"Pacific/Gambier": [
			"-539,-,LMT,1912 9 ",
			"-540,-,GAMT"
		],
		"Pacific/Marquesas": [
			"-558,-,LMT,1912 9",
			"-570,-,MART"
		],
		"Pacific/Tahiti": [
			"-598,-,LMT,1912 9 ",
			"-600,-,TAHT"
		],
		"Pacific/Guam": [
			"-861,-,LMT,1844 11 31",
			"579,-,LMT,1901 ",
			"600,-,GST,2000 11 23 ",
			"600,-,ChST"
		],
		"Pacific/Tarawa": [
			"692,-,LMT,1901 ",
			"720,-,GILT"
		],
		"Pacific/Enderbury": [
			"-684,-,LMT,1901",
			"-720,-,PHOT,1979 9 ",
			"-660,-,PHOT,1995",
			"780,-,PHOT"
		],
		"Pacific/Kiritimati": [
			"-629,-,LMT,1901",
			"-640,-,LINT,1979 9 ",
			"-600,-,LINT,1995",
			"840,-,LINT"
		],
		"Pacific/Saipan": [
			"-857,-,LMT,1844 11 31",
			"583,-,LMT,1901",
			"540,-,MPT,1969 9 ",
			"600,-,MPT,2000 11 23",
			"600,-,ChST"
		],
		"Pacific/Majuro": [
			"684,-,LMT,1901",
			"660,-,MHT,1969 9 ",
			"720,-,MHT"
		],
		"Pacific/Kwajalein": [
			"669,-,LMT,1901",
			"660,-,MHT,1969 9",
			"-720,-,KWAT,1993 7 20 ",
			"720,-,MHT"
		],
		"Pacific/Chuuk": [
			"607,-,LMT,1901",
			"600,-,CHUT"
		],
		"Pacific/Pohnpei": [
			"632,-,LMT,1901 ",
			"660,-,PONT"
		],
		"Pacific/Kosrae": [
			"651,-,LMT,1901",
			"660,-,KOST,1969 9 ",
			"720,-,KOST,1999",
			"660,-,KOST"
		],
		"Pacific/Nauru": [
			"667,-,LMT,1921 0 15 ",
			"690,-,NRT,1942 2 15 ",
			"540,-,JST,1944 7 15",
			"690,-,NRT,1979 4",
			"720,-,NRT"
		],
		"Pacific/Noumea": [
			"665,-,LMT,1912 0 13",
			"660,NC,NC%sT"
		],
		"Pacific/Auckland": [
			"699,-,LMT,1868 10 2",
			"690,NZ,NZ%sT,1946 0 1",
			"720,NZ,NZ%sT"
		],
		"Pacific/Chatham": [
			"733,-,LMT,1957 0 1",
			"765,Chatham,CHA%sT"
		],
		"Pacific/Niue": [
			"-679,-,LMT,1901 ",
			"-680,-,NUT,1951 ",
			"-690,-,NUT,1978 9 1",
			"-660,-,NUT"
		],
		"Pacific/Norfolk": [
			"671,-,LMT,1901 ",
			"672,-,NMT,1951 ",
			"690,-,NFT"
		],
		"Pacific/Palau": [
			"537,-,LMT,1901 ",
			"540,-,PWT"
		],
		"Pacific/Port_Moresby": [
			"588,-,LMT,1880",
			"588,-,PMMT,1895 ",
			"600,-,PGT"
		],
		"Pacific/Pitcairn": [
			"-520,-,LMT,1901 ",
			"-510,-,PNT,1998 3 27 0 0",
			"-480,-,PST"
		],
		"Pacific/Pago_Pago": [
			"757,-,LMT,1879 6 5",
			"-682,-,LMT,1911",
			"-690,-,SAMT,1950 ",
			"-660,-,NST,1967 3 ",
			"-660,-,BST,1983 10 30 ",
			"-660,-,SST"
		],
		"Pacific/Apia": [
			"753,-,LMT,1879 6 5",
			"-686,-,LMT,1911",
			"-690,-,SAMT,1950 ",
			"-660,-,WST,2010 8 26",
			"-660,1:00,WSDT,2011 3 2 0 240",
			"-660,-,WST,2011 8 24 0 180",
			"-660,1:00,WSDT,2011 11 30",
			"780,1:00,WSDT,2012 3 Sun>=1 0 240",
			"780,WS,WS%sT"
		],
		"Pacific/Guadalcanal": [
			"639,-,LMT,1912 9 ",
			"660,-,SBT"
		],
		"Pacific/Fakaofo": [
			"-684,-,LMT,1901",
			"-660,-,TKT,2011 11 30 ",
			"780,-,TKT"
		],
		"Pacific/Tongatapu": [
			"739,-,LMT,1901",
			"740,-,TOT,1941 ",
			"780,-,TOT,1999",
			"780,Tonga,TO%sT"
		],
		"Pacific/Funafuti": [
			"716,-,LMT,1901",
			"720,-,TVT"
		],
		"Pacific/Johnston": [
			"-600,-,HST"
		],
		"Pacific/Midway": [
			"-709,-,LMT,1901",
			"-660,-,NST,1956 5 3",
			"-660,1:00,NDT,1956 8 2",
			"-660,-,NST,1967 3 ",
			"-660,-,BST,1983 10 30 ",
			"-660,-,SST"
		],
		"Pacific/Wake": [
			"666,-,LMT,1901",
			"720,-,WAKT"
		],
		"Pacific/Efate": [
			"673,-,LMT,1912 0 13 ",
			"660,Vanuatu,VU%sT"
		],
		"Pacific/Wallis": [
			"735,-,LMT,1901",
			"720,-,WFT"
		]
	},
	"lastZone": "Pacific/Wallis"
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
