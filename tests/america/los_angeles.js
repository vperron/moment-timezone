var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"America/Los_Angeles" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		//test.expect(261);
		test.expect(18);

		// test.equal(zone.offset(moment("1969-12-31T00:00:00+00:00")), 480, "1969-12-31T00:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1969-12-31T23:59:59+00:00")), 480, "1969-12-31T23:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1970-01-01T00:00:00+00:00")), 480, "1970-01-01T00:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1970-04-25T11:00:00+00:00")), 480, "1970-04-25T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1970-04-26T09:59:59+00:00")), 480, "1970-04-26T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1970-04-26T10:00:00+00:00")), 420, "1970-04-26T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1970-10-24T08:00:00+00:00")), 420, "1970-10-24T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1970-10-25T08:59:59+00:00")), 420, "1970-10-25T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1970-10-25T09:00:00+00:00")), 480, "1970-10-25T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1971-04-24T11:00:00+00:00")), 480, "1971-04-24T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1971-04-25T09:59:59+00:00")), 480, "1971-04-25T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1971-04-25T10:00:00+00:00")), 420, "1971-04-25T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1971-10-30T08:00:00+00:00")), 420, "1971-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1971-10-31T08:59:59+00:00")), 420, "1971-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1971-10-31T09:00:00+00:00")), 480, "1971-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1972-04-29T11:00:00+00:00")), 480, "1972-04-29T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1972-04-30T09:59:59+00:00")), 480, "1972-04-30T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1972-04-30T10:00:00+00:00")), 420, "1972-04-30T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1972-10-28T08:00:00+00:00")), 420, "1972-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1972-10-29T08:59:59+00:00")), 420, "1972-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1972-10-29T09:00:00+00:00")), 480, "1972-10-29T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1973-04-28T11:00:00+00:00")), 480, "1973-04-28T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1973-04-29T09:59:59+00:00")), 480, "1973-04-29T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1973-04-29T10:00:00+00:00")), 420, "1973-04-29T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1973-10-27T08:00:00+00:00")), 420, "1973-10-27T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1973-10-28T08:59:59+00:00")), 420, "1973-10-28T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1973-10-28T09:00:00+00:00")), 480, "1973-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.equal(zone.offset(moment("1974-01-05T11:00:00+00:00")), 480, "1974-01-05T11:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T09:59:59+00:00")), 480, "1974-01-06T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T10:00:00+00:00")), 420, "1974-01-06T10:00:00+00:00 should be 420 minutes offset");



		// test.equal(zone.offset(moment("1974-10-26T08:00:00+00:00")), 420, "1974-10-26T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1974-10-27T08:59:59+00:00")), 420, "1974-10-27T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1974-10-27T09:00:00+00:00")), 480, "1974-10-27T09:00:00+00:00 should be 480 minutes offset");

		// test.equal(zone.offset(moment("1975-02-22T11:00:00+00:00")), 480, "1975-02-22T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1975-02-23T09:59:59+00:00")), 480, "1975-02-23T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1975-02-23T10:00:00+00:00")), 420, "1975-02-23T10:00:00+00:00 should be 420 minutes offset");



		// test.equal(zone.offset(moment("1975-10-25T08:00:00+00:00")), 420, "1975-10-25T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1975-10-26T08:59:59+00:00")), 420, "1975-10-26T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1975-10-26T09:00:00+00:00")), 480, "1975-10-26T09:00:00+00:00 should be 480 minutes offset");

		// test.equal(zone.offset(moment("1976-04-24T11:00:00+00:00")), 480, "1976-04-24T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1976-04-25T09:59:59+00:00")), 480, "1976-04-25T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1976-04-25T10:00:00+00:00")), 420, "1976-04-25T10:00:00+00:00 should be 420 minutes offset");



		// test.equal(zone.offset(moment("1976-10-30T08:00:00+00:00")), 420, "1976-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1976-10-31T08:59:59+00:00")), 420, "1976-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1976-10-31T09:00:00+00:00")), 480, "1976-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1977-04-23T11:00:00+00:00")), 480, "1977-04-23T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1977-04-24T09:59:59+00:00")), 480, "1977-04-24T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1977-04-24T10:00:00+00:00")), 420, "1977-04-24T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1977-10-29T08:00:00+00:00")), 420, "1977-10-29T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1977-10-30T08:59:59+00:00")), 420, "1977-10-30T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1977-10-30T09:00:00+00:00")), 480, "1977-10-30T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1978-04-29T11:00:00+00:00")), 480, "1978-04-29T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1978-04-30T09:59:59+00:00")), 480, "1978-04-30T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1978-04-30T10:00:00+00:00")), 420, "1978-04-30T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1978-10-28T08:00:00+00:00")), 420, "1978-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1978-10-29T08:59:59+00:00")), 420, "1978-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1978-10-29T09:00:00+00:00")), 480, "1978-10-29T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1979-04-28T11:00:00+00:00")), 480, "1979-04-28T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1979-04-29T09:59:59+00:00")), 480, "1979-04-29T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1979-04-29T10:00:00+00:00")), 420, "1979-04-29T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1979-10-27T08:00:00+00:00")), 420, "1979-10-27T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1979-10-28T08:59:59+00:00")), 420, "1979-10-28T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1979-10-28T09:00:00+00:00")), 480, "1979-10-28T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1980-04-26T11:00:00+00:00")), 480, "1980-04-26T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1980-04-27T09:59:59+00:00")), 480, "1980-04-27T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1980-04-27T10:00:00+00:00")), 420, "1980-04-27T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1980-10-25T08:00:00+00:00")), 420, "1980-10-25T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1980-10-26T08:59:59+00:00")), 420, "1980-10-26T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1980-10-26T09:00:00+00:00")), 480, "1980-10-26T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1981-04-25T11:00:00+00:00")), 480, "1981-04-25T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1981-04-26T09:59:59+00:00")), 480, "1981-04-26T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1981-04-26T10:00:00+00:00")), 420, "1981-04-26T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1981-10-24T08:00:00+00:00")), 420, "1981-10-24T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1981-10-25T08:59:59+00:00")), 420, "1981-10-25T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1981-10-25T09:00:00+00:00")), 480, "1981-10-25T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1982-04-24T11:00:00+00:00")), 480, "1982-04-24T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1982-04-25T09:59:59+00:00")), 480, "1982-04-25T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1982-04-25T10:00:00+00:00")), 420, "1982-04-25T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1982-10-30T08:00:00+00:00")), 420, "1982-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1982-10-31T08:59:59+00:00")), 420, "1982-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1982-10-31T09:00:00+00:00")), 480, "1982-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1983-04-23T11:00:00+00:00")), 480, "1983-04-23T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1983-04-24T09:59:59+00:00")), 480, "1983-04-24T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1983-04-24T10:00:00+00:00")), 420, "1983-04-24T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1983-10-29T08:00:00+00:00")), 420, "1983-10-29T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1983-10-30T08:59:59+00:00")), 420, "1983-10-30T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1983-10-30T09:00:00+00:00")), 480, "1983-10-30T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1984-04-28T11:00:00+00:00")), 480, "1984-04-28T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1984-04-29T09:59:59+00:00")), 480, "1984-04-29T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1984-04-29T10:00:00+00:00")), 420, "1984-04-29T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1984-10-27T08:00:00+00:00")), 420, "1984-10-27T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1984-10-28T08:59:59+00:00")), 420, "1984-10-28T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1984-10-28T09:00:00+00:00")), 480, "1984-10-28T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1985-04-27T11:00:00+00:00")), 480, "1985-04-27T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1985-04-28T09:59:59+00:00")), 480, "1985-04-28T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1985-04-28T10:00:00+00:00")), 420, "1985-04-28T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1985-10-26T08:00:00+00:00")), 420, "1985-10-26T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1985-10-27T08:59:59+00:00")), 420, "1985-10-27T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1985-10-27T09:00:00+00:00")), 480, "1985-10-27T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1986-04-26T11:00:00+00:00")), 480, "1986-04-26T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1986-04-27T09:59:59+00:00")), 480, "1986-04-27T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1986-04-27T10:00:00+00:00")), 420, "1986-04-27T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1986-10-25T08:00:00+00:00")), 420, "1986-10-25T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1986-10-26T08:59:59+00:00")), 420, "1986-10-26T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1986-10-26T09:00:00+00:00")), 480, "1986-10-26T09:00:00+00:00 should be 480 minutes offset");

		// test.equal(zone.offset(moment("1987-04-04T11:00:00+00:00")), 480, "1987-04-04T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1987-04-05T09:59:59+00:00")), 480, "1987-04-05T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1987-04-05T10:00:00+00:00")), 420, "1987-04-05T10:00:00+00:00 should be 420 minutes offset");



		// test.equal(zone.offset(moment("1987-10-24T08:00:00+00:00")), 420, "1987-10-24T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1987-10-25T08:59:59+00:00")), 420, "1987-10-25T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1987-10-25T09:00:00+00:00")), 480, "1987-10-25T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1988-04-02T11:00:00+00:00")), 480, "1988-04-02T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1988-04-03T09:59:59+00:00")), 480, "1988-04-03T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1988-04-03T10:00:00+00:00")), 420, "1988-04-03T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1988-10-29T08:00:00+00:00")), 420, "1988-10-29T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1988-10-30T08:59:59+00:00")), 420, "1988-10-30T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1988-10-30T09:00:00+00:00")), 480, "1988-10-30T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1989-04-01T11:00:00+00:00")), 480, "1989-04-01T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1989-04-02T09:59:59+00:00")), 480, "1989-04-02T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1989-04-02T10:00:00+00:00")), 420, "1989-04-02T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1989-10-28T08:00:00+00:00")), 420, "1989-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1989-10-29T08:59:59+00:00")), 420, "1989-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1989-10-29T09:00:00+00:00")), 480, "1989-10-29T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1990-03-31T11:00:00+00:00")), 480, "1990-03-31T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1990-04-01T09:59:59+00:00")), 480, "1990-04-01T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1990-04-01T10:00:00+00:00")), 420, "1990-04-01T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1990-10-27T08:00:00+00:00")), 420, "1990-10-27T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1990-10-28T08:59:59+00:00")), 420, "1990-10-28T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1990-10-28T09:00:00+00:00")), 480, "1990-10-28T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1991-04-06T11:00:00+00:00")), 480, "1991-04-06T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1991-04-07T09:59:59+00:00")), 480, "1991-04-07T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1991-04-07T10:00:00+00:00")), 420, "1991-04-07T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1991-10-26T08:00:00+00:00")), 420, "1991-10-26T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1991-10-27T08:59:59+00:00")), 420, "1991-10-27T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1991-10-27T09:00:00+00:00")), 480, "1991-10-27T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1992-04-04T11:00:00+00:00")), 480, "1992-04-04T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1992-04-05T09:59:59+00:00")), 480, "1992-04-05T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1992-04-05T10:00:00+00:00")), 420, "1992-04-05T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1992-10-24T08:00:00+00:00")), 420, "1992-10-24T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1992-10-25T08:59:59+00:00")), 420, "1992-10-25T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1992-10-25T09:00:00+00:00")), 480, "1992-10-25T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1993-04-03T11:00:00+00:00")), 480, "1993-04-03T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1993-04-04T09:59:59+00:00")), 480, "1993-04-04T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1993-04-04T10:00:00+00:00")), 420, "1993-04-04T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1993-10-30T08:00:00+00:00")), 420, "1993-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1993-10-31T08:59:59+00:00")), 420, "1993-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1993-10-31T09:00:00+00:00")), 480, "1993-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1994-04-02T11:00:00+00:00")), 480, "1994-04-02T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1994-04-03T09:59:59+00:00")), 480, "1994-04-03T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1994-04-03T10:00:00+00:00")), 420, "1994-04-03T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1994-10-29T08:00:00+00:00")), 420, "1994-10-29T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1994-10-30T08:59:59+00:00")), 420, "1994-10-30T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1994-10-30T09:00:00+00:00")), 480, "1994-10-30T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1995-04-01T11:00:00+00:00")), 480, "1995-04-01T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1995-04-02T09:59:59+00:00")), 480, "1995-04-02T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1995-04-02T10:00:00+00:00")), 420, "1995-04-02T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1995-10-28T08:00:00+00:00")), 420, "1995-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1995-10-29T08:59:59+00:00")), 420, "1995-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1995-10-29T09:00:00+00:00")), 480, "1995-10-29T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1996-04-06T11:00:00+00:00")), 480, "1996-04-06T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1996-04-07T09:59:59+00:00")), 480, "1996-04-07T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1996-04-07T10:00:00+00:00")), 420, "1996-04-07T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1996-10-26T08:00:00+00:00")), 420, "1996-10-26T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1996-10-27T08:59:59+00:00")), 420, "1996-10-27T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1996-10-27T09:00:00+00:00")), 480, "1996-10-27T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1997-04-05T11:00:00+00:00")), 480, "1997-04-05T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1997-04-06T09:59:59+00:00")), 480, "1997-04-06T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1997-04-06T10:00:00+00:00")), 420, "1997-04-06T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1997-10-25T08:00:00+00:00")), 420, "1997-10-25T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1997-10-26T08:59:59+00:00")), 420, "1997-10-26T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1997-10-26T09:00:00+00:00")), 480, "1997-10-26T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1998-04-04T11:00:00+00:00")), 480, "1998-04-04T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1998-04-05T09:59:59+00:00")), 480, "1998-04-05T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1998-04-05T10:00:00+00:00")), 420, "1998-04-05T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1998-10-24T08:00:00+00:00")), 420, "1998-10-24T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1998-10-25T08:59:59+00:00")), 420, "1998-10-25T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1998-10-25T09:00:00+00:00")), 480, "1998-10-25T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1999-04-03T11:00:00+00:00")), 480, "1999-04-03T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1999-04-04T09:59:59+00:00")), 480, "1999-04-04T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("1999-04-04T10:00:00+00:00")), 420, "1999-04-04T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1999-10-30T08:00:00+00:00")), 420, "1999-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1999-10-31T08:59:59+00:00")), 420, "1999-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("1999-10-31T09:00:00+00:00")), 480, "1999-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2000-04-01T11:00:00+00:00")), 480, "2000-04-01T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2000-04-02T09:59:59+00:00")), 480, "2000-04-02T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2000-04-02T10:00:00+00:00")), 420, "2000-04-02T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2000-10-28T08:00:00+00:00")), 420, "2000-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2000-10-29T08:59:59+00:00")), 420, "2000-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2000-10-29T09:00:00+00:00")), 480, "2000-10-29T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2001-03-31T11:00:00+00:00")), 480, "2001-03-31T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2001-04-01T09:59:59+00:00")), 480, "2001-04-01T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2001-04-01T10:00:00+00:00")), 420, "2001-04-01T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2001-10-27T08:00:00+00:00")), 420, "2001-10-27T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2001-10-28T08:59:59+00:00")), 420, "2001-10-28T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2001-10-28T09:00:00+00:00")), 480, "2001-10-28T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2002-04-06T11:00:00+00:00")), 480, "2002-04-06T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2002-04-07T09:59:59+00:00")), 480, "2002-04-07T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2002-04-07T10:00:00+00:00")), 420, "2002-04-07T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2002-10-26T08:00:00+00:00")), 420, "2002-10-26T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2002-10-27T08:59:59+00:00")), 420, "2002-10-27T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2002-10-27T09:00:00+00:00")), 480, "2002-10-27T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2003-04-05T11:00:00+00:00")), 480, "2003-04-05T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2003-04-06T09:59:59+00:00")), 480, "2003-04-06T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2003-04-06T10:00:00+00:00")), 420, "2003-04-06T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2003-10-25T08:00:00+00:00")), 420, "2003-10-25T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2003-10-26T08:59:59+00:00")), 420, "2003-10-26T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2003-10-26T09:00:00+00:00")), 480, "2003-10-26T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2004-04-03T11:00:00+00:00")), 480, "2004-04-03T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2004-04-04T09:59:59+00:00")), 480, "2004-04-04T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2004-04-04T10:00:00+00:00")), 420, "2004-04-04T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2004-10-30T08:00:00+00:00")), 420, "2004-10-30T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2004-10-31T08:59:59+00:00")), 420, "2004-10-31T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2004-10-31T09:00:00+00:00")), 480, "2004-10-31T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2005-04-02T11:00:00+00:00")), 480, "2005-04-02T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2005-04-03T09:59:59+00:00")), 480, "2005-04-03T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2005-04-03T10:00:00+00:00")), 420, "2005-04-03T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2005-10-29T08:00:00+00:00")), 420, "2005-10-29T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2005-10-30T08:59:59+00:00")), 420, "2005-10-30T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2005-10-30T09:00:00+00:00")), 480, "2005-10-30T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2006-04-01T11:00:00+00:00")), 480, "2006-04-01T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2006-04-02T09:59:59+00:00")), 480, "2006-04-02T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2006-04-02T10:00:00+00:00")), 420, "2006-04-02T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2006-10-28T08:00:00+00:00")), 420, "2006-10-28T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2006-10-29T08:59:59+00:00")), 420, "2006-10-29T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2006-10-29T09:00:00+00:00")), 480, "2006-10-29T09:00:00+00:00 should be 480 minutes offset");

		// test.equal(zone.offset(moment("2007-03-10T11:00:00+00:00")), 480, "2007-03-10T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2007-03-11T09:59:59+00:00")), 480, "2007-03-11T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2007-03-11T10:00:00+00:00")), 420, "2007-03-11T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2007-11-03T08:00:00+00:00")), 420, "2007-11-03T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2007-11-04T08:59:59+00:00")), 420, "2007-11-04T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2007-11-04T09:00:00+00:00")), 480, "2007-11-04T09:00:00+00:00 should be 480 minutes offset");



		// test.equal(zone.offset(moment("2008-03-08T11:00:00+00:00")), 480, "2008-03-08T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2008-03-09T09:59:59+00:00")), 480, "2008-03-09T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2008-03-09T10:00:00+00:00")), 420, "2008-03-09T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2008-11-01T08:00:00+00:00")), 420, "2008-11-01T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2008-11-02T08:59:59+00:00")), 420, "2008-11-02T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2008-11-02T09:00:00+00:00")), 480, "2008-11-02T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2009-03-07T11:00:00+00:00")), 480, "2009-03-07T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2009-03-08T09:59:59+00:00")), 480, "2009-03-08T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2009-03-08T10:00:00+00:00")), 420, "2009-03-08T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2009-10-31T08:00:00+00:00")), 420, "2009-10-31T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2009-11-01T08:59:59+00:00")), 420, "2009-11-01T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2009-11-01T09:00:00+00:00")), 480, "2009-11-01T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2010-03-13T11:00:00+00:00")), 480, "2010-03-13T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2010-03-14T09:59:59+00:00")), 480, "2010-03-14T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2010-03-14T10:00:00+00:00")), 420, "2010-03-14T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2010-11-06T08:00:00+00:00")), 420, "2010-11-06T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2010-11-07T08:59:59+00:00")), 420, "2010-11-07T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2010-11-07T09:00:00+00:00")), 480, "2010-11-07T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2011-03-12T11:00:00+00:00")), 480, "2011-03-12T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2011-03-13T09:59:59+00:00")), 480, "2011-03-13T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2011-03-13T10:00:00+00:00")), 420, "2011-03-13T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2011-11-05T08:00:00+00:00")), 420, "2011-11-05T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2011-11-06T08:59:59+00:00")), 420, "2011-11-06T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2011-11-06T09:00:00+00:00")), 480, "2011-11-06T09:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2012-03-10T11:00:00+00:00")), 480, "2012-03-10T11:00:00+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2012-03-11T09:59:59+00:00")), 480, "2012-03-11T09:59:59+00:00 should be 480 minutes offset");
		// test.equal(zone.offset(moment("2012-03-11T10:00:00+00:00")), 420, "2012-03-11T10:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2012-11-03T08:00:00+00:00")), 420, "2012-11-03T08:00:00+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2012-11-04T08:59:59+00:00")), 420, "2012-11-04T08:59:59+00:00 should be 420 minutes offset");
		// test.equal(zone.offset(moment("2012-11-04T09:00:00+00:00")), 480, "2012-11-04T09:00:00+00:00 should be 480 minutes offset");
		test.done();
	}
};
