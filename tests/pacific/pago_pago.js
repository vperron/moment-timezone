var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Pago_Pago 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Pago_Pago").zone(), 660, "2013-01-01T00:00:00+00:00 should be 660 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Pago_Pago").zone(), 660, "2013-12-31T23:59:59+00:00 should be 660 minutes offset");

		test.done();
	},

	"Pacific/Pago_Pago 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Pago_Pago").format("HH:mm"), "13:00", "2013-01-01T00:00:00+00:00 should be 13:00 in Pacific/Pago_Pago");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Pago_Pago").format("HH:mm"), "12:59", "2013-12-31T23:59:59+00:00 should be 12:59 in Pacific/Pago_Pago");

		test.done();
	}
};