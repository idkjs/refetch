'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");
var Resync = require("./Resync.bs.js");
var Refetch__Status = require("./Refetch__Status.bs.js");

function _getStatus(response) {
  return {
          code: Refetch__Status.codeFromInt(response.status),
          reason: response.statusText
        };
}

function _make(res) {
  var status = _getStatus(res);
  var match = status.code;
  if (match === "IMUsed" || match === "Accepted" || match === "OK" || match === "NoContent" || match === "NonAuthoritativeInformation" || match === "Created" || match === "MultiStatus" || match === "ResetContent" || match === "AlreadyReported" || match === "PartialContent") {
    return {
            TAG: /* Ok */0,
            _0: status,
            _1: res
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: status,
            _1: res
          };
  }
}

function body(prim) {
  return prim.body;
}

var text = Curry._2(Rebase.Fn.$great$great, (function (prim) {
        return prim.text();
      }), Resync.Future.fromJSPromise);

var json = Curry._2(Rebase.Fn.$great$great, (function (prim) {
        return prim.json();
      }), Resync.Future.fromJSPromise);

var Body;

var $$Headers;

var Status;

exports.Body = Body;
exports.$$Headers = $$Headers;
exports.Status = Status;
exports._getStatus = _getStatus;
exports._make = _make;
exports.body = body;
exports.text = text;
exports.json = json;
/* text Not a pure module */
