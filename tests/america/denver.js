var moment = require("../../moment-timezone");

exports.rules = {
	"America/Denver 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Denver").zone(), 420, "2013-01-01T00:00:00+00:00 should be 420 minutes offset");
		test.equal(moment("2013-03-10T08:59:59+00:00").tz("America/Denver").zone(), 420, "2013-03-10T08:59:59+00:00 should be 420 minutes offset");
		test.equal(moment("2013-03-10T09:00:00+00:00").tz("America/Denver").zone(), 360, "2013-03-10T09:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-11-03T07:59:59+00:00").tz("America/Denver").zone(), 360, "2013-11-03T07:59:59+00:00 should be 360 minutes offset");
		test.equal(moment("2013-11-03T08:00:00+00:00").tz("America/Denver").zone(), 420, "2013-11-03T08:00:00+00:00 should be 420 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Denver").zone(), 420, "2013-12-31T23:59:59+00:00 should be 420 minutes offset");

		test.done();
	},

	"America/Denver 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Denver").format("HH:mm"), "17:00", "2013-01-01T00:00:00+00:00 should be 17:00 in America/Denver");
		test.equal(moment("2013-03-10T08:59:59+00:00").tz("America/Denver").format("HH:mm"), "01:59", "2013-03-10T08:59:59+00:00 should be 01:59 in America/Denver");
		test.equal(moment("2013-03-10T09:00:00+00:00").tz("America/Denver").format("HH:mm"), "03:00", "2013-03-10T09:00:00+00:00 should be 03:00 in America/Denver");
		test.equal(moment("2013-11-03T07:59:59+00:00").tz("America/Denver").format("HH:mm"), "01:59", "2013-11-03T07:59:59+00:00 should be 01:59 in America/Denver");
		test.equal(moment("2013-11-03T08:00:00+00:00").tz("America/Denver").format("HH:mm"), "01:00", "2013-11-03T08:00:00+00:00 should be 01:00 in America/Denver");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Denver").format("HH:mm"), "16:59", "2013-12-31T23:59:59+00:00 should be 16:59 in America/Denver");

		test.done();
	}
};