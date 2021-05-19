'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Nock = require("nock");
var Curry = require("bs-platform/lib/js/curry.js");
var Resync = require("../src/Resync.bs.js");
var Refetch = require("../src/Refetch.bs.js");

require('isomorphic-fetch')
;

Nock.disableNetConnect();

Jest.describe("get", (function (param) {
        var scope = Nock("http://example.com");
        afterAll(function () {
              scope.restore();
              
            });
        return Jest.testAsync("get", undefined, (function (finish) {
                      scope.post("/").reply(200, {
                            foo: 42
                          });
                      return Resync.Future.whenResolved((function (_r) {
                                    return Curry._1(finish, Jest.Expect.toBe(true, Jest.Expect.expect(scope.isDone())));
                                  }), Refetch.post("http://example.com", {
                                      NAME: "String",
                                      VAL: "test"
                                    }));
                    }));
      }));

/*  Not a pure module */
