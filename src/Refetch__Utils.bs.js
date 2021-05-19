'use strict';

var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");

var btoa = (function () {
    if (btoa) return btoa;

    var Buffer = Buffer || require('buffer').Buffer;
    return function (str) {
      return new Buffer(str).toString('base64');
    }
  }());

function reduceOr($$default, f, param) {
  if (param) {
    return Rebase.List.reduce(f, param.hd, param.tl);
  } else {
    return $$default;
  }
}

var List = {
  reduceOr: reduceOr
};

exports.btoa = btoa;
exports.List = List;
/* btoa Not a pure module */
