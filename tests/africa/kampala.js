var moment = require("../../moment-timezone");

exports["Africa/Kampala"] = {

	"1928" : function (t) {
		t.equal(moment("1928-06-30T21:50:19+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "23:59:59", "1928-06-30T21:50:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1928-06-30T21:50:20+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "00:50:20", "1928-06-30T21:50:20+00:00 should be 00:50:20 EAT");

		t.equal(moment("1928-06-30T21:50:19+00:00").tz("Africa/Kampala").zone(), -129, "1928-06-30T21:50:19+00:00 should be -129 minutes offset in LMT");
		t.equal(moment("1928-06-30T21:50:20+00:00").tz("Africa/Kampala").zone(), -180, "1928-06-30T21:50:20+00:00 should be -180 minutes offset in EAT");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-12-31T20:59:59+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "23:59:59", "1929-12-31T20:59:59+00:00 should be 23:59:59 EAT");
		t.equal(moment("1929-12-31T21:00:00+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "23:30:00", "1929-12-31T21:00:00+00:00 should be 23:30:00 BEAT");

		t.equal(moment("1929-12-31T20:59:59+00:00").tz("Africa/Kampala").zone(), -180, "1929-12-31T20:59:59+00:00 should be -180 minutes offset in EAT");
		t.equal(moment("1929-12-31T21:00:00+00:00").tz("Africa/Kampala").zone(), -150, "1929-12-31T21:00:00+00:00 should be -150 minutes offset in BEAT");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-12-31T21:29:59+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "23:59:59", "1947-12-31T21:29:59+00:00 should be 23:59:59 BEAT");
		t.equal(moment("1947-12-31T21:30:00+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "00:15:00", "1947-12-31T21:30:00+00:00 should be 00:15:00 BEAUT");

		t.equal(moment("1947-12-31T21:29:59+00:00").tz("Africa/Kampala").zone(), -150, "1947-12-31T21:29:59+00:00 should be -150 minutes offset in BEAT");
		t.equal(moment("1947-12-31T21:30:00+00:00").tz("Africa/Kampala").zone(), -165, "1947-12-31T21:30:00+00:00 should be -165 minutes offset in BEAUT");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-12-31T21:14:59+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "23:59:59", "1956-12-31T21:14:59+00:00 should be 23:59:59 BEAUT");
		t.equal(moment("1956-12-31T21:15:00+00:00").tz("Africa/Kampala").format("HH:mm:ss"), "00:15:00", "1956-12-31T21:15:00+00:00 should be 00:15:00 EAT");

		t.equal(moment("1956-12-31T21:14:59+00:00").tz("Africa/Kampala").zone(), -165, "1956-12-31T21:14:59+00:00 should be -165 minutes offset in BEAUT");
		t.equal(moment("1956-12-31T21:15:00+00:00").tz("Africa/Kampala").zone(), -180, "1956-12-31T21:15:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};