var moment = require("../../moment-timezone");

exports.rules = {
	"America/Montevideo 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Montevideo").zone(), 120, "2013-01-01T00:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-03-10T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2013-03-10T03:59:59+00:00 should be 120 minutes offset");
		test.equal(moment("2013-03-10T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2013-03-10T04:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-10-06T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2013-10-06T04:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-10-06T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2013-10-06T05:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Montevideo").zone(), 120, "2013-12-31T23:59:59+00:00 should be 120 minutes offset");

		test.done();
	},

	"America/Montevideo 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Montevideo").format("HH:mm"), "22:00", "2013-01-01T00:00:00+00:00 should be 22:00 in America/Montevideo");
		test.equal(moment("2013-03-10T03:59:59+00:00").tz("America/Montevideo").format("HH:mm"), "01:59", "2013-03-10T03:59:59+00:00 should be 01:59 in America/Montevideo");
		test.equal(moment("2013-03-10T04:00:00+00:00").tz("America/Montevideo").format("HH:mm"), "01:00", "2013-03-10T04:00:00+00:00 should be 01:00 in America/Montevideo");
		test.equal(moment("2013-10-06T04:59:59+00:00").tz("America/Montevideo").format("HH:mm"), "01:59", "2013-10-06T04:59:59+00:00 should be 01:59 in America/Montevideo");
		test.equal(moment("2013-10-06T05:00:00+00:00").tz("America/Montevideo").format("HH:mm"), "03:00", "2013-10-06T05:00:00+00:00 should be 03:00 in America/Montevideo");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Montevideo").format("HH:mm"), "21:59", "2013-12-31T23:59:59+00:00 should be 21:59 in America/Montevideo");

		test.done();
	}
};