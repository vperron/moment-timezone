var moment = require("../../moment-timezone");

exports.rules = {
	"America/Bogota 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Bogota").zone(), 300, "2013-01-01T00:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Bogota").zone(), 300, "2013-12-31T23:59:59+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/Bogota 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Bogota").format("HH:mm"), "19:00", "2013-01-01T00:00:00+00:00 should be 19:00 in America/Bogota");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Bogota").format("HH:mm"), "18:59", "2013-12-31T23:59:59+00:00 should be 18:59 in America/Bogota");

		test.done();
	}
};