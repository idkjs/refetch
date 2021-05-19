'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.bs.js");
var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Refetch__Mime = require("./Refetch__Mime.bs.js");
var Refetch__Headers = require("./Refetch__Headers.bs.js");

function make(method_, queryParamsOpt, headersOpt, body, url) {
  var queryParams = queryParamsOpt !== undefined ? queryParamsOpt : /* [] */0;
  var headers = headersOpt !== undefined ? headersOpt : /* [] */0;
  return {
          url: url,
          method: method_,
          queryParams: queryParams,
          headers: headers,
          body: body
        };
}

function param(key, value, request) {
  return {
          url: request.url,
          method: request.method,
          queryParams: {
            hd: [
              key,
              value
            ],
            tl: request.queryParams
          },
          headers: request.headers,
          body: request.body
        };
}

function header(header$1, request) {
  return {
          url: request.url,
          method: request.method,
          queryParams: request.queryParams,
          headers: {
            hd: header$1,
            tl: request.headers
          },
          body: request.body
        };
}

function basicAuthentication(username, password, request) {
  return header({
              NAME: "Authorization",
              VAL: {
                NAME: "Basic",
                VAL: [
                  username,
                  password
                ]
              }
            }, request);
}

function payload(payload$1, request) {
  var variant = payload$1.NAME;
  if (variant === "String") {
    return {
            url: request.url,
            method: request.method,
            queryParams: request.queryParams,
            headers: request.headers,
            body: payload$1
          };
  }
  if (variant === "Form") {
    var init = header({
          NAME: "ContentType",
          VAL: Refetch__Mime.form
        }, request);
    return {
            url: init.url,
            method: init.method,
            queryParams: init.queryParams,
            headers: init.headers,
            body: payload$1
          };
  }
  if (variant === "Json") {
    var init$1 = header({
          NAME: "ContentType",
          VAL: Refetch__Mime.json
        }, request);
    return {
            url: init$1.url,
            method: init$1.method,
            queryParams: init$1.queryParams,
            headers: init$1.headers,
            body: payload$1
          };
  }
  var init$2 = header({
        NAME: "ContentType",
        VAL: Refetch__Mime.multipart(payload$1.VAL[0])
      }, request);
  return {
          url: init$2.url,
          method: init$2.method,
          queryParams: init$2.queryParams,
          headers: init$2.headers,
          body: payload$1
        };
}

function _encodeMethod(param) {
  if (typeof param === "string") {
    if (param === "GET") {
      return Fetch.Method.get;
    } else if (param === "PUT") {
      return Fetch.Method.put;
    } else if (param === "TRACE") {
      return Fetch.Method.trace;
    } else if (param === "CONNECT") {
      return Fetch.Method.connect;
    } else if (param === "DELETE") {
      return Fetch.Method.$$delete;
    } else if (param === "HEAD") {
      return Fetch.Method.head;
    } else if (param === "POST") {
      return Fetch.Method.post;
    } else if (param === "PATCH") {
      return Fetch.Method.patch;
    } else {
      return Fetch.Method.options;
    }
  } else {
    return Fetch.Method.other(param.VAL);
  }
}

function _buildUrl(url, params) {
  var encodeParam = function (param) {
    return encodeURIComponent(param[0]) + ("=" + encodeURIComponent(param[1]));
  };
  var params$1 = Rebase.$$String.joinWith("&", Rebase.List.map(encodeParam, params));
  if (params$1 === "") {
    return url;
  } else {
    return "" + url + "?" + params$1;
  }
}

function _stringifyPayload(param) {
  var variant = param.NAME;
  if (variant === "String") {
    return param.VAL;
  }
  if (variant === "Form") {
    return Rebase.$$String.joinWith("&", Rebase.List.map((function (param) {
                      return "" + param[0] + "=" + param[1];
                    }), param.VAL));
  }
  if (variant === "Json") {
    return JSON.stringify(param.VAL);
  }
  var match = param.VAL;
  var boundary = match[0];
  return Rebase.List.reduce((function (acc, p) {
                return "\n" + (acc + p);
              }), "--" + boundary + "\n", Rebase.List.map((function (param) {
                    var headers = Rebase.List.reduce((function (acc, h) {
                            return acc + (h + "\n");
                          }), "", Rebase.List.map(Refetch__Headers._stringifyHeader, param[0]));
                    var payload = _stringifyPayload(param[1]);
                    return "" + headers + "\n" + payload + "\n--" + boundary + "\n";
                  }), match[1]));
}

function _toFetchRequest(request) {
  return new Request(_buildUrl(request.url, request.queryParams), Fetch.RequestInit.make(_encodeMethod(request.method), Caml_option.some(Refetch__Headers._encode(Rebase.List.reverse(request.headers))), Rebase.$$Option.map(Curry._2(Rebase.Fn.$great$great, _stringifyPayload, (function (prim) {
                            return prim;
                          })), request.body), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined));
}

var Body;

var $$Headers;

var Mime;

var Utils;

exports.Body = Body;
exports.$$Headers = $$Headers;
exports.Mime = Mime;
exports.Utils = Utils;
exports.make = make;
exports.param = param;
exports.header = header;
exports.basicAuthentication = basicAuthentication;
exports.payload = payload;
exports._encodeMethod = _encodeMethod;
exports._buildUrl = _buildUrl;
exports._stringifyPayload = _stringifyPayload;
exports._toFetchRequest = _toFetchRequest;
/* Refetch__Headers Not a pure module */
