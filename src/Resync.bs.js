'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");

function _dispatch(f, value) {
  return Curry._1(f, value);
}

function _complete(promise, value) {
  promise.value = value;
  return Rebase.List.forEach((function (f) {
                return Curry._1(f, value);
              }), promise.callbacks);
}

function make(param) {
  return {
          value: undefined,
          callbacks: /* [] */0
        };
}

function from(value) {
  return {
          value: {
            TAG: /* Ok */0,
            _0: value
          },
          callbacks: /* [] */0
        };
}

function resolve(promise, value) {
  return _complete(promise, {
              TAG: /* Ok */0,
              _0: value
            });
}

function reject(promise, exn) {
  return _complete(promise, {
              TAG: /* Error */1,
              _0: exn
            });
}

function whenCompleted(f, future) {
  future.callbacks = {
    hd: f,
    tl: future.callbacks
  };
  return Rebase.$$Option.forEach(Curry.__1(f), future.value);
}

function whenResolved(f, future) {
  return whenCompleted((function (value) {
                if (value.TAG === /* Ok */0) {
                  return Curry._1(f, value._0);
                }
                
              }), future);
}

function map(f, future) {
  var promise = {
    value: undefined,
    callbacks: /* [] */0
  };
  whenCompleted((function (value) {
          if (value.TAG !== /* Ok */0) {
            return _complete(promise, {
                        TAG: /* Error */1,
                        _0: value._0
                      });
          }
          var value$1 = Curry._1(f, value._0);
          return _complete(promise, {
                      TAG: /* Ok */0,
                      _0: value$1
                    });
        }), future);
  return promise;
}

function flatMap(f, future) {
  var promise = {
    value: undefined,
    callbacks: /* [] */0
  };
  whenCompleted((function (value) {
          if (value.TAG === /* Ok */0) {
            return whenCompleted((function (value) {
                          if (value.TAG === /* Ok */0) {
                            return _complete(promise, {
                                        TAG: /* Ok */0,
                                        _0: value._0
                                      });
                          } else {
                            return _complete(promise, {
                                        TAG: /* Error */1,
                                        _0: value._0
                                      });
                          }
                        }), Curry._1(f, value._0));
          } else {
            return _complete(promise, {
                        TAG: /* Error */1,
                        _0: value._0
                      });
          }
        }), future);
  return promise;
}

function fromJSPromise(jsPromise) {
  var promise = {
    value: undefined,
    callbacks: /* [] */0
  };
  jsPromise.then(function (v) {
          return Promise.resolve(_complete(promise, {
                          TAG: /* Ok */0,
                          _0: v
                        }));
        }).catch(function (e) {
        return Promise.resolve(_complete(promise, {
                        TAG: /* Error */1,
                        _0: e
                      }));
      });
  return promise;
}

var $$Promise$1 = {
  _dispatch: _dispatch,
  _complete: _complete,
  make: make,
  from: from,
  resolve: resolve,
  reject: reject,
  whenCompleted: whenCompleted,
  whenResolved: whenResolved,
  map: map,
  flatMap: flatMap,
  fromJSPromise: fromJSPromise
};

var Future = {
  _dispatch: _dispatch,
  _complete: _complete,
  make: make,
  from: from,
  resolve: resolve,
  reject: reject,
  whenCompleted: whenCompleted,
  whenResolved: whenResolved,
  map: map,
  flatMap: flatMap,
  fromJSPromise: fromJSPromise
};

exports.$$Promise = $$Promise$1;
exports.Future = Future;
/* No side effect */
