var moment = require("../../../moment-timezone");

exports["America/Indiana/Tell_City"] = {

	"1918" : function (t) {
		t.equal(moment("1918-03-31T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1918-03-31T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1918-03-31T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1918-03-31T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1918-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1918-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1918-03-31T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1918-03-31T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1918-03-31T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1918-03-31T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1918-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1918-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-30T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1919-03-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1919-03-30T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1919-03-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1919-10-26T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1919-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1919-10-26T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1919-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1919-03-30T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1919-03-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1919-03-30T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1919-03-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1919-10-26T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1919-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1919-10-26T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1919-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1942-02-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1942-02-09T08:00:00+00:00 should be 03:00:00 CWT");

		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1942-02-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1942-02-09T08:00:00+00:00 should be 300 minutes offset in CWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "17:59:59", "1945-08-14T22:59:59+00:00 should be 17:59:59 CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "18:00:00", "1945-08-14T23:00:00+00:00 should be 18:00:00 CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1945-09-30T06:59:59+00:00 should be 01:59:59 CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1945-09-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1945-08-14T22:59:59+00:00 should be 300 minutes offset in CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1945-08-14T23:00:00+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1945-09-30T06:59:59+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1945-09-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1946-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1946-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1946-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1946-09-29T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1946-09-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1946-09-29T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1946-09-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1946-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1946-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1946-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1946-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1946-09-29T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1946-09-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1946-09-29T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1946-09-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1953-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1953-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1953-04-26T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1953-09-27T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1953-09-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1953-09-27T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1953-09-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1953-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1953-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1953-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1953-04-26T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1953-09-27T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1953-09-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1953-09-27T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1953-09-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1954-04-25T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1954-04-25T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1954-04-25T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1954-09-26T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1954-09-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1954-09-26T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1954-09-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1954-04-25T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1954-04-25T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1954-04-25T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1954-04-25T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1954-09-26T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1954-09-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1954-09-26T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1954-09-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-05-01T05:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "23:59:59", "1955-05-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1955-05-01T06:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1955-05-01T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1955-09-25T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1955-09-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1955-09-25T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1955-09-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1955-05-01T05:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1955-05-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1955-05-01T06:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1955-05-01T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1955-09-25T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1955-09-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1955-09-25T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1955-09-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1956-04-29T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1956-04-29T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1956-04-29T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1956-09-30T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1956-09-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1956-09-30T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1956-09-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1956-04-29T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1956-04-29T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1956-04-29T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1956-04-29T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1956-09-30T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1956-09-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1956-09-30T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1956-09-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1957-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1957-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1957-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1957-09-29T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1957-09-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1957-09-29T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1957-09-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1957-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1957-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1957-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1957-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1957-09-29T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1957-09-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1957-09-29T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1957-09-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1958-04-27T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1958-04-27T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1958-04-27T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1958-09-28T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1958-09-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1958-09-28T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1958-09-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1958-04-27T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1958-04-27T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1958-04-27T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1958-04-27T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1958-09-28T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1958-09-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1958-09-28T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1958-09-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1959-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1959-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1959-04-26T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1959-09-27T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1959-09-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1959-09-27T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1959-09-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1959-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1959-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1959-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1959-04-26T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1959-09-27T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1959-09-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1959-09-27T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1959-09-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1960-04-24T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1960-04-24T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1960-04-24T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1960-10-30T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1960-10-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1960-10-30T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1960-10-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1960-04-24T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1960-04-24T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1960-04-24T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1960-04-24T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1960-10-30T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1960-10-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1960-10-30T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1960-10-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1961-04-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1961-04-30T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1961-04-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1961-09-24T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1961-09-24T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1961-09-24T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1961-09-24T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1961-04-30T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1961-04-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1961-04-30T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1961-04-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1961-09-24T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1961-09-24T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1961-09-24T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1961-09-24T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-29T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1962-04-29T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1962-04-29T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1962-04-29T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1962-10-28T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1962-10-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1962-10-28T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1962-10-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1962-04-29T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1962-04-29T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1962-04-29T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1962-04-29T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1962-10-28T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1962-10-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1962-10-28T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1962-10-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1963-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1963-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1963-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1963-10-27T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1963-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1963-10-27T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1963-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1963-04-28T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1963-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1963-04-28T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1963-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1963-10-27T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1963-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1963-10-27T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1963-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1964-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1964-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1964-04-26T08:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1964-04-26T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "1964-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1964-04-26T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1964-04-26T08:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1969-04-27T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1969-04-27T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1969-04-27T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1969-10-26T05:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1969-10-26T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1969-10-26T06:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1969-10-26T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1969-04-27T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1969-04-27T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1969-04-27T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 240, "1969-04-27T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1969-10-26T05:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 240, "1969-10-26T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1969-10-26T06:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1969-10-26T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1970-04-26T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1970-04-26T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "1970-04-26T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1970-10-25T05:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "1970-10-25T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1970-10-25T06:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "1970-10-25T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1970-04-26T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1970-04-26T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1970-04-26T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 240, "1970-04-26T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1970-10-25T05:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 240, "1970-10-25T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1970-10-25T06:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "1970-10-25T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2006-04-02T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2006-04-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "02:00:00", "2006-04-02T07:00:00+00:00 should be 02:00:00 CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2006-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2006-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2006-04-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2006-04-02T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2006-04-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2006-04-02T07:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2006-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2006-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2007-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2007-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2007-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2007-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2007-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2007-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2007-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2007-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2008-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2008-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2008-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2008-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2008-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2008-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2008-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2008-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2008-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2008-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2008-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2008-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2008-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2008-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2008-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2009-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2009-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2009-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2009-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2009-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2009-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2009-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2009-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2009-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2009-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2009-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2009-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2009-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2009-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2009-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2010-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2010-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2010-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2010-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2010-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2010-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2010-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2010-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2010-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2010-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2010-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2010-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2010-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2010-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2010-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2011-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2011-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2011-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2011-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2011-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2011-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2011-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2011-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2011-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2011-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2011-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2011-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2011-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2011-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2011-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2012-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2012-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2012-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2012-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2012-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2012-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2012-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2012-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2012-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2012-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2012-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2012-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2012-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2012-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2012-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2013-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2013-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2013-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2013-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2013-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2013-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2013-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2013-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2013-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2013-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2013-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2013-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2013-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2013-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2013-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2014-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2014-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2014-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2014-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2014-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2014-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2014-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2014-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2014-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2014-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2014-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2014-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2014-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2014-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2014-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2015-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2015-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2015-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2015-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2015-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2015-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2015-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2015-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2015-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2015-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2015-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2015-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2015-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2015-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2015-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2016-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2016-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2016-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2016-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2016-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2016-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2016-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2016-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2016-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2016-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2016-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2016-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2016-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2016-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2016-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2017-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2017-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2017-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2017-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2017-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2017-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2017-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2017-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2017-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2017-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2017-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2017-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2017-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2017-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2017-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2018-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2018-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2018-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2018-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2018-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2018-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2018-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2018-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2018-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2018-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2018-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2018-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2018-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2018-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2018-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2019-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2019-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2019-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2019-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2019-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2019-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2019-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2019-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2019-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2019-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2019-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2019-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2019-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2019-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2019-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2020-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2020-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2020-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2020-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2020-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2020-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2020-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2020-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2020-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2020-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2020-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2020-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2020-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2020-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2020-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2021-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2021-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2021-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2021-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2021-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2021-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2021-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2021-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2021-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2021-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2021-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2021-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2021-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2021-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2021-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2022-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2022-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2022-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2022-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2022-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2022-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2022-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2022-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2022-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2022-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2022-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2022-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2022-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2022-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2022-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2023-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2023-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2023-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2023-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2023-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2023-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2023-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2023-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2023-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2023-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2023-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2023-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2023-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2023-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2023-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2024-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2024-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2024-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2024-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2024-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2024-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2024-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2024-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2024-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2024-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2024-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2024-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2024-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2024-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2024-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2025-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2025-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2025-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2025-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2025-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2025-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2025-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2025-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2025-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2025-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2025-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2025-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2025-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2025-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2025-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2026-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2026-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2026-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2026-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2026-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2026-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2026-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2026-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2026-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2026-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2026-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2026-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2026-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2026-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2026-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2027-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2027-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2027-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2027-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2027-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2027-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2027-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2027-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2027-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2027-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2027-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2027-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2027-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2027-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2027-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2028-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2028-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2028-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2028-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2028-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2028-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2028-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2028-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2028-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2028-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2028-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2028-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2028-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2028-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2028-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2029-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2029-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2029-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2029-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2029-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2029-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2029-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2029-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2029-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2029-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2029-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2029-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2029-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2029-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2029-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2030-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2030-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2030-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2030-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2030-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2030-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2030-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2030-03-10T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2030-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2030-03-10T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2030-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2030-11-03T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2030-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2030-11-03T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2030-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2031-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2031-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2031-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2031-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2031-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2031-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2031-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2031-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2031-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2031-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2031-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2031-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2031-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2031-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2031-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2032-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2032-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2032-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2032-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2032-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2032-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2032-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2032-03-14T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2032-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2032-03-14T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2032-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2032-11-07T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2032-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2032-11-07T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2032-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2033-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2033-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2033-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2033-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2033-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2033-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2033-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2033-03-13T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2033-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2033-03-13T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2033-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2033-11-06T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2033-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2033-11-06T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2033-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2034-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2034-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2034-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2034-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2034-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2034-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2034-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2034-03-12T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2034-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2034-03-12T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2034-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2034-11-05T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2034-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2034-11-05T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2034-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2035-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2035-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2035-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2035-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2035-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2035-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2035-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2035-03-11T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2035-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2035-03-11T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2035-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2035-11-04T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2035-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2035-11-04T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2035-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2036-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2036-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2036-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2036-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2036-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2036-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2036-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2036-03-09T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2036-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2036-03-09T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2036-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2036-11-02T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2036-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2036-11-02T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2036-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2037-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2037-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "03:00:00", "2037-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2037-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:59:59", "2037-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2037-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").format("HH:mm:ss"), "01:00:00", "2037-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2037-03-08T07:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2037-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2037-03-08T08:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2037-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2037-11-01T06:59:59+00:00").tz("America/Indiana/Tell_City").zone(), 300, "2037-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2037-11-01T07:00:00+00:00").tz("America/Indiana/Tell_City").zone(), 360, "2037-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};