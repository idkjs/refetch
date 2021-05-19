'use strict';

var Resync = require("./Resync.bs.js");
var Refetch__Request = require("./Refetch__Request.bs.js");
var Refetch__Response = require("./Refetch__Response.bs.js");

function $$fetch$1(request) {
  return Resync.Future.fromJSPromise(fetch(Refetch__Request._toFetchRequest(request)).then(function (res) {
                  return Promise.resolve(Refetch__Response._make(res));
                }));
}

function get(url) {
  return $$fetch$1(Refetch__Request.make("GET", undefined, undefined, undefined, url));
}

function post(url, payload) {
  return $$fetch$1(Refetch__Request.payload(payload, Refetch__Request.make("POST", undefined, undefined, undefined, url)));
}

var Body;

var $$Headers;

var $$Response;

var $$Request;

var request = Refetch__Request.make;

exports.Body = Body;
exports.$$Headers = $$Headers;
exports.$$Response = $$Response;
exports.$$Request = $$Request;
exports.request = request;
exports.$$fetch = $$fetch$1;
exports.get = get;
exports.post = post;
/* Refetch__Request Not a pure module */
