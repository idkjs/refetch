'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Refetch__Request = require("../src/Refetch__Request.bs.js");

Jest.describe("_buildUrl", (function (param) {
        Jest.test("builds a url with query parameters", (function (param) {
                var urlWithParams = Refetch__Request._buildUrl("www.google.com", {
                      hd: [
                        "q",
                        "abc"
                      ],
                      tl: /* [] */0
                    });
                return Jest.Expect.toBe("www.google.com?q=abc", Jest.Expect.expect(urlWithParams));
              }));
        return Jest.test("builds a url without query parameters", (function (param) {
                      var urlWithoutParams = Refetch__Request._buildUrl("www.google.com", /* [] */0);
                      return Jest.Expect.toBe("www.google.com", Jest.Expect.expect(urlWithoutParams));
                    }));
      }));

/*  Not a pure module */
