var moment = require("../../moment-timezone");

exports.rules = {
	"America/Jamaica 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Jamaica").zone(), 300, "2013-01-01T00:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Jamaica").zone(), 300, "2013-12-31T23:59:59+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/Jamaica 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Jamaica").format("HH:mm"), "19:00", "2013-01-01T00:00:00+00:00 should be 19:00 in America/Jamaica");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Jamaica").format("HH:mm"), "18:59", "2013-12-31T23:59:59+00:00 should be 18:59 in America/Jamaica");

		test.done();
	}
};