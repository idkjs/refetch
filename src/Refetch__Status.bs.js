'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

function codeToInt(param) {
  if (typeof param === "string") {
    if (param === "MethodNotAllowed") {
      return 405;
    } else if (param === "UnprocessableEntity") {
      return 422;
    } else if (param === "LengthRequired") {
      return 411;
    } else if (param === "UnavailableForLegalReasons") {
      return 451;
    } else if (param === "HttpVersionNotSupported") {
      return 505;
    } else if (param === "NotImplemented") {
      return 501;
    } else if (param === "AlreadyReported") {
      return 208;
    } else if (param === "ResetContent") {
      return 205;
    } else if (param === "NetworkAuthenticationRequired") {
      return 511;
    } else if (param === "ProxyAuthenticationRequired") {
      return 407;
    } else if (param === "MultiStatus") {
      return 207;
    } else if (param === "PayloadTooLarge") {
      return 413;
    } else if (param === "Created") {
      return 201;
    } else if (param === "MisdirectedRequest") {
      return 421;
    } else if (param === "UriTooLong") {
      return 414;
    } else if (param === "PaymentRequired") {
      return 402;
    } else if (param === "InternalServerError") {
      return 500;
    } else if (param === "PreconditionRequired") {
      return 428;
    } else if (param === "NonAuthoritativeInformation") {
      return 203;
    } else if (param === "Forbidden") {
      return 403;
    } else if (param === "NotAcceptable") {
      return 406;
    } else if (param === "BadRequest") {
      return 400;
    } else if (param === "NotFound") {
      return 404;
    } else if (param === "LoopDetected") {
      return 508;
    } else if (param === "NotExtended") {
      return 510;
    } else if (param === "NoContent") {
      return 204;
    } else if (param === "RangeNotSatisfiable") {
      return 416;
    } else if (param === "RequestTimeout") {
      return 408;
    } else if (param === "Conflict") {
      return 409;
    } else if (param === "OK") {
      return 200;
    } else if (param === "TooManyRequests") {
      return 429;
    } else if (param === "InsufficientStorage") {
      return 507;
    } else if (param === "FailedDependency") {
      return 424;
    } else if (param === "GatewayTimeout") {
      return 504;
    } else if (param === "ImATeapot") {
      return 418;
    } else if (param === "Locked") {
      return 423;
    } else if (param === "Unauthorized") {
      return 401;
    } else if (param === "RequestHeaderFieldsTooLarge") {
      return 431;
    } else if (param === "PreconditionFailed") {
      return 412;
    } else if (param === "Accepted") {
      return 202;
    } else if (param === "UnsupportedMediaType") {
      return 415;
    } else if (param === "ServiceUnavailable") {
      return 503;
    } else if (param === "ExpectationFailed") {
      return 417;
    } else if (param === "Gone") {
      return 410;
    } else if (param === "UpgradeRequired") {
      return 426;
    } else if (param === "VariantAlsoNegotiates") {
      return 506;
    } else if (param === "BadGateway") {
      return 502;
    } else if (param === "IMUsed") {
      return 226;
    } else {
      return 206;
    }
  } else {
    return param.VAL;
  }
}

function codeFromInt(param) {
  if (param >= 227) {
    switch (param) {
      case 400 :
          return "BadRequest";
      case 401 :
          return "Unauthorized";
      case 402 :
          return "PaymentRequired";
      case 403 :
          return "Forbidden";
      case 404 :
          return "NotFound";
      case 405 :
          return "MethodNotAllowed";
      case 406 :
          return "NotAcceptable";
      case 407 :
          return "ProxyAuthenticationRequired";
      case 408 :
          return "RequestTimeout";
      case 409 :
          return "Conflict";
      case 410 :
          return "Gone";
      case 411 :
          return "LengthRequired";
      case 412 :
          return "PreconditionFailed";
      case 413 :
          return "PayloadTooLarge";
      case 414 :
          return "UriTooLong";
      case 415 :
          return "UnsupportedMediaType";
      case 416 :
          return "RangeNotSatisfiable";
      case 417 :
          return "ExpectationFailed";
      case 418 :
          return "ImATeapot";
      case 421 :
          return "MisdirectedRequest";
      case 422 :
          return "UnprocessableEntity";
      case 423 :
          return "Locked";
      case 424 :
          return "FailedDependency";
      case 426 :
          return "UpgradeRequired";
      case 428 :
          return "PreconditionRequired";
      case 429 :
          return "TooManyRequests";
      case 431 :
          return "RequestHeaderFieldsTooLarge";
      case 451 :
          return "UnavailableForLegalReasons";
      case 500 :
          return "InternalServerError";
      case 501 :
          return "NotImplemented";
      case 502 :
          return "BadGateway";
      case 503 :
          return "ServiceUnavailable";
      case 504 :
          return "GatewayTimeout";
      case 505 :
          return "HttpVersionNotSupported";
      case 506 :
          return "VariantAlsoNegotiates";
      case 507 :
          return "InsufficientStorage";
      case 508 :
          return "LoopDetected";
      case 419 :
      case 420 :
      case 425 :
      case 427 :
      case 430 :
      case 432 :
      case 433 :
      case 434 :
      case 435 :
      case 436 :
      case 437 :
      case 438 :
      case 439 :
      case 440 :
      case 441 :
      case 442 :
      case 443 :
      case 444 :
      case 445 :
      case 446 :
      case 447 :
      case 448 :
      case 449 :
      case 450 :
      case 452 :
      case 453 :
      case 454 :
      case 455 :
      case 456 :
      case 457 :
      case 458 :
      case 459 :
      case 460 :
      case 461 :
      case 462 :
      case 463 :
      case 464 :
      case 465 :
      case 466 :
      case 467 :
      case 468 :
      case 469 :
      case 470 :
      case 471 :
      case 472 :
      case 473 :
      case 474 :
      case 475 :
      case 476 :
      case 477 :
      case 478 :
      case 479 :
      case 480 :
      case 481 :
      case 482 :
      case 483 :
      case 484 :
      case 485 :
      case 486 :
      case 487 :
      case 488 :
      case 489 :
      case 490 :
      case 491 :
      case 492 :
      case 493 :
      case 494 :
      case 495 :
      case 496 :
      case 497 :
      case 498 :
      case 499 :
      case 509 :
          return Pervasives.failwith("TODO: exception or option?");
      case 510 :
          return "NotExtended";
      case 511 :
          return "NetworkAuthenticationRequired";
      default:
        return Pervasives.failwith("TODO: exception or option?");
    }
  } else {
    if (param < 200) {
      return Pervasives.failwith("TODO: exception or option?");
    }
    switch (param) {
      case 200 :
          return "OK";
      case 201 :
          return "Created";
      case 202 :
          return "Accepted";
      case 203 :
          return "NonAuthoritativeInformation";
      case 204 :
          return "NoContent";
      case 205 :
          return "ResetContent";
      case 206 :
          return "PartialContent";
      case 207 :
          return "MultiStatus";
      case 208 :
          return "AlreadyReported";
      case 209 :
      case 210 :
      case 211 :
      case 212 :
      case 213 :
      case 214 :
      case 215 :
      case 216 :
      case 217 :
      case 218 :
      case 219 :
      case 220 :
      case 221 :
      case 222 :
      case 223 :
      case 224 :
      case 225 :
          return Pervasives.failwith("TODO: exception or option?");
      case 226 :
          return "IMUsed";
      
    }
  }
}

exports.codeToInt = codeToInt;
exports.codeFromInt = codeFromInt;
/* No side effect */
