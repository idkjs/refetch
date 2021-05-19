'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Refetch__Utils = require("./Refetch__Utils.bs.js");

function _pairifyHeader(h) {
  if (typeof h === "string") {
    return Pervasives.failwith("TODO");
  }
  var variant = h.NAME;
  if (variant === "ContentDisposition") {
    var match = h.VAL;
    var typ = match[0];
    var typ$1 = typeof typ === "string" ? (
        typ === "Attachment" ? "attachment" : "inline"
      ) : typ.VAL;
    var value = Rebase.List.reduce((function (acc, p) {
            return "" + acc + "; " + p;
          }), typ$1, Rebase.List.map((function (param) {
                if (param.NAME === "Filename") {
                  return "filename=\"" + param.VAL + "\"";
                }
                var match = param.VAL;
                return "" + match[0] + "=\"" + match[1] + "\"";
              }), match[1]));
    return [
            "Content-Disposition",
            value
          ];
  }
  if (variant === "Raw") {
    var match$1 = h.VAL;
    return [
            match$1[0],
            match$1[1]
          ];
  }
  if (variant === "ContentType") {
    return [
            "Content-Type",
            h.VAL
          ];
  }
  if (variant !== "Authorization") {
    if (variant === "ContentLength") {
      return [
              "Content-Length",
              String(h.VAL)
            ];
    } else {
      return Pervasives.failwith("TODO");
    }
  }
  var scheme = h.VAL;
  var value$1;
  if (scheme.NAME === "Bearer") {
    value$1 = "Bearer " + scheme.VAL;
  } else {
    var match$2 = scheme.VAL;
    var encoded = Curry._1(Refetch__Utils.btoa, "" + match$2[0] + ":" + match$2[1]);
    value$1 = "Basic " + encoded;
  }
  return [
          "Authorization",
          value$1
        ];
}

function _stringifyPair(param) {
  return "" + param[0] + ": " + param[1];
}

function _stringifyHeader(header) {
  return _stringifyPair(_pairifyHeader(header));
}

function _encode(headers) {
  return Js_dict.fromList(Rebase.List.map(_pairifyHeader, headers));
}

var Cookie;

var Mime;

var Utils;

exports.Cookie = Cookie;
exports.Mime = Mime;
exports.Utils = Utils;
exports._pairifyHeader = _pairifyHeader;
exports._stringifyPair = _stringifyPair;
exports._stringifyHeader = _stringifyHeader;
exports._encode = _encode;
/* Refetch__Utils Not a pure module */
