//Thu Oct 10 2024 12:02:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("Sakura樱花交流会");
(() => {
  function k(V) {
    k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
      return typeof Y;
    } : function (Y) {
      return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
    };
    return k(V);
  }
  function q() {
    'use strict';

    q = function () {
      return X;
    };
    var W,
      X = {},
      Y = Object.prototype,
      Z = Y.hasOwnProperty,
      a0 = Object.defineProperty || function (as, at, au) {
        as[at] = au.value;
      },
      a1 = "function" == typeof Symbol ? Symbol : {},
      a2 = a1.iterator || "@@iterator",
      a3 = a1.asyncIterator || "@@asyncIterator",
      a4 = a1.toStringTag || "@@toStringTag";
    function a5(as, at, au) {
      var av = {
        value: au,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(as, at, av);
      return as[at];
    }
    try {
      a5({}, "");
    } catch (at) {
      a5 = function (av, aw, ax) {
        return av[aw] = ax;
      };
    }
    function a6(av, aw, ax, ay) {
      var az = aw && aw.prototype instanceof ad ? aw : ad,
        aA = Object.create(az.prototype),
        aB = new aq(ay || []);
      a0(aA, "_invoke", {
        value: am(av, ax, aB)
      });
      return aA;
    }
    function a7(av, aw, ax) {
      try {
        return {
          type: "normal",
          arg: av.call(aw, ax)
        };
      } catch (aB) {
        var az = {};
        az.type = "throw";
        az.arg = aB;
        return az;
      }
    }
    X.wrap = a6;
    var a8 = "suspendedStart",
      a9 = "suspendedYield",
      aa = "executing",
      ab = "completed",
      ac = {};
    function ad() {}
    function ae() {}
    function af() {}
    var ag = {};
    a5(ag, a2, function () {
      return this;
    });
    var ah = Object.getPrototypeOf,
      ai = ah && ah(ah(ar([])));
    ai && ai !== Y && Z.call(ai, a2) && (ag = ai);
    af.prototype = ad.prototype = Object.create(ag);
    var aj = af.prototype;
    function ak(av) {
      ["next", "throw", "return"].forEach(function (ax) {
        a5(av, ax, function (az) {
          return this._invoke(ax, az);
        });
      });
    }
    function al(av, aw) {
      function az(aA, aB, aC, aD) {
        var aF = a7(av[aA], av, aB);
        if ("throw" !== aF.type) {
          var aG = aF.arg,
            aH = aG.value;
          return aH && "object" == k(aH) && Z.call(aH, "__await") ? aw.resolve(aH.__await).then(function (aI) {
            az("next", aI, aC, aD);
          }, function (aI) {
            az("throw", aI, aC, aD);
          }) : aw.resolve(aH).then(function (aI) {
            aG.value = aI;
            aC(aG);
          }, function (aI) {
            return az("throw", aI, aC, aD);
          });
        }
        aD(aF.arg);
      }
      var ay;
      a0(this, "_invoke", {
        value: function (aA, aB) {
          function aE() {
            return new aw(function (aG, aH) {
              az(aA, aB, aG, aH);
            });
          }
          return ay = ay ? ay.then(aE, aE) : aE();
        }
      });
    }
    function am(av, aw, ax) {
      var az = a8;
      return function (aA, aB) {
        if (az === aa) {
          throw Error("Generator is already running");
        }
        if (az === ab) {
          if ("throw" === aA) {
            throw aB;
          }
          var aD = {};
          aD.value = W;
          aD.done = !0;
          return aD;
        }
        for (ax.method = aA, ax.arg = aB;;) {
          var aE = ax.delegate;
          if (aE) {
            var aF = an(aE, ax);
            if (aF) {
              if (aF === ac) {
                continue;
              }
              return aF;
            }
          }
          if ("next" === ax.method) {
            ax.sent = ax._sent = ax.arg;
          } else {
            if ("throw" === ax.method) {
              if (az === a8) {
                throw az = ab, ax.arg;
              }
              ax.dispatchException(ax.arg);
            } else {
              "return" === ax.method && ax.abrupt("return", ax.arg);
            }
          }
          az = aa;
          var aG = a7(av, aw, ax);
          if ("normal" === aG.type) {
            if (az = ax.done ? ab : a9, aG.arg === ac) {
              continue;
            }
            var aH = {};
            aH.value = aG.arg;
            aH.done = ax.done;
            return aH;
          }
          "throw" === aG.type && (az = ab, ax.method = "throw", ax.arg = aG.arg);
        }
      };
    }
    function an(av, aw) {
      var aA = aw.method,
        aB = av.iterator[aA];
      if (aB === W) {
        aw.delegate = null;
        "throw" === aA && av.iterator.return && (aw.method = "return", aw.arg = W, an(av, aw), "throw" === aw.method) || "return" !== aA && (aw.method = "throw", aw.arg = new TypeError("The iterator does not provide a '" + aA + "' method"));
        return ac;
      }
      var az = a7(aB, av.iterator, aw.arg);
      if ("throw" === az.type) {
        aw.method = "throw";
        aw.arg = az.arg;
        aw.delegate = null;
        return ac;
      }
      var aC = az.arg;
      return aC ? aC.done ? (aw[av.resultName] = aC.value, aw.next = av.nextLoc, "return" !== aw.method && (aw.method = "next", aw.arg = W), aw.delegate = null, ac) : aC : (aw.method = "throw", aw.arg = new TypeError("iterator result is not an object"), aw.delegate = null, ac);
    }
    function ao(av) {
      var aw = {
        tryLoc: av[0]
      };
      var ax = aw;
      1 in av && (ax.catchLoc = av[1]);
      2 in av && (ax.finallyLoc = av[2], ax.afterLoc = av[3]);
      this.tryEntries.push(ax);
    }
    function ap(av) {
      var aw = av.completion || {};
      aw.type = "normal";
      delete aw.arg;
      av.completion = aw;
    }
    function aq(av) {
      var aw = {
        tryLoc: "root"
      };
      this.tryEntries = [aw];
      av.forEach(ao, this);
      this.reset(!0);
    }
    function ar(av) {
      if (av || "" === av) {
        var ax = av[a2];
        if (ax) {
          return ax.call(av);
        }
        if ("function" == typeof av.next) {
          return av;
        }
        if (!isNaN(av.length)) {
          var ay = -1,
            az = function aD() {
              for (; ++ay < av.length;) {
                if (Z.call(av, ay)) {
                  aD.value = av[ay];
                  aD.done = !1;
                  return aD;
                }
              }
              aD.value = W;
              aD.done = !0;
              return aD;
            };
          return az.next = az;
        }
      }
      throw new TypeError(k(av) + " is not iterable");
    }
    ae.prototype = af;
    a0(aj, "constructor", {
      value: af,
      configurable: !0
    });
    a0(af, "constructor", {
      value: ae,
      configurable: !0
    });
    ae.displayName = a5(af, a4, "GeneratorFunction");
    X.isGeneratorFunction = function (av) {
      var aw = "function" == typeof av && av.constructor;
      return !!aw && (aw === ae || "GeneratorFunction" === (aw.displayName || aw.name));
    };
    X.mark = function (av) {
      Object.setPrototypeOf ? Object.setPrototypeOf(av, af) : (av.__proto__ = af, a5(av, a4, "GeneratorFunction"));
      av.prototype = Object.create(aj);
      return av;
    };
    X.awrap = function (av) {
      var aw = {
        __await: av
      };
      return aw;
    };
    ak(al.prototype);
    a5(al.prototype, a3, function () {
      return this;
    });
    X.AsyncIterator = al;
    X.async = function (av, aw, ax, ay, az) {
      void 0 === az && (az = Promise);
      var aB = new al(a6(av, aw, ax, ay), az);
      return X.isGeneratorFunction(aw) ? aB : aB.next().then(function (aC) {
        return aC.done ? aC.value : aB.next();
      });
    };
    ak(aj);
    a5(aj, a4, "Generator");
    a5(aj, a2, function () {
      return this;
    });
    a5(aj, "toString", function () {
      return "[object Generator]";
    });
    X.keys = function (av) {
      var ax = Object(av),
        ay = [];
      for (var az in ax) ay.push(az);
      ay.reverse();
      return function aA() {
        for (; ay.length;) {
          var aD = ay.pop();
          if (aD in ax) {
            aA.value = aD;
            aA.done = !1;
            return aA;
          }
        }
        aA.done = !0;
        return aA;
      };
    };
    X.values = ar;
    aq.prototype = {
      constructor: aq,
      reset: function (av) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = W, this.done = !1, this.delegate = null, this.method = "next", this.arg = W, this.tryEntries.forEach(ap), !av) {
          for (var aw in this) "t" === aw.charAt(0) && Z.call(this, aw) && !isNaN(+aw.slice(1)) && (this[aw] = W);
        }
      },
      stop: function () {
        this.done = !0;
        var av = this.tryEntries[0].completion;
        if ("throw" === av.type) {
          throw av.arg;
        }
        return this.rval;
      },
      dispatchException: function (av) {
        if (this.done) {
          throw av;
        }
        var ax = this;
        function aD(aE, aF) {
          aA.type = "throw";
          aA.arg = av;
          ax.next = aE;
          aF && (ax.method = "next", ax.arg = W);
          return !!aF;
        }
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay],
            aA = az.completion;
          if ("root" === az.tryLoc) {
            return aD("end");
          }
          if (az.tryLoc <= this.prev) {
            var aB = Z.call(az, "catchLoc"),
              aC = Z.call(az, "finallyLoc");
            if (aB && aC) {
              if (this.prev < az.catchLoc) {
                return aD(az.catchLoc, !0);
              }
              if (this.prev < az.finallyLoc) {
                return aD(az.finallyLoc);
              }
            } else {
              if (aB) {
                if (this.prev < az.catchLoc) {
                  return aD(az.catchLoc, !0);
                }
              } else {
                if (!aC) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < az.finallyLoc) {
                  return aD(az.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (av, aw) {
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay];
          if (az.tryLoc <= this.prev && Z.call(az, "finallyLoc") && this.prev < az.finallyLoc) {
            var aA = az;
            break;
          }
        }
        aA && ("break" === av || "continue" === av) && aA.tryLoc <= aw && aw <= aA.finallyLoc && (aA = null);
        var aB = aA ? aA.completion : {};
        aB.type = av;
        aB.arg = aw;
        return aA ? (this.method = "next", this.next = aA.finallyLoc, ac) : this.complete(aB);
      },
      complete: function (av, aw) {
        if ("throw" === av.type) {
          throw av.arg;
        }
        "break" === av.type || "continue" === av.type ? this.next = av.arg : "return" === av.type ? (this.rval = this.arg = av.arg, this.method = "return", this.next = "end") : "normal" === av.type && aw && (this.next = aw);
        return ac;
      },
      finish: function (av) {
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay];
          if (az.finallyLoc === av) {
            this.complete(az.completion, az.afterLoc);
            ap(az);
            return ac;
          }
        }
      },
      catch: function (av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.tryLoc === av) {
            var az = ay.completion;
            if ("throw" === az.type) {
              var aA = az.arg;
              ap(ay);
            }
            return aA;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (av, aw, ax) {
        this.delegate = {
          iterator: ar(av),
          resultName: aw,
          nextLoc: ax
        };
        "next" === this.method && (this.arg = W);
        return ac;
      }
    };
    return X;
  }
  function z(V, W) {
    return function (Y) {
      if (Array.isArray(Y)) {
        return Y;
      }
    }(V) || function (Y, Z) {
      var a1 = null == Y ? null : "undefined" != typeof Symbol && Y[Symbol.iterator] || Y["@@iterator"];
      if (null != a1) {
        var a2,
          a3,
          a4,
          a5,
          a6 = [],
          a7 = !0,
          a8 = !1;
        try {
          if (a4 = (a1 = a1.call(Y)).next, 0 === Z) {
            if (Object(a1) !== a1) {
              return;
            }
            a7 = !1;
          } else {
            for (; !(a7 = (a2 = a4.call(a1)).done) && (a6.push(a2.value), a6.length !== Z); a7 = !0) {}
          }
        } catch (ad) {
          a8 = !0;
          a3 = ad;
        } finally {
          try {
            if (!a7 && null != a1.return && (a5 = a1.return(), Object(a5) !== a5)) {
              return;
            }
          } finally {
            if (a8) {
              throw a3;
            }
          }
        }
        return a6;
      }
    }(V, W) || function (Y, Z) {
      if (Y) {
        if ("string" == typeof Y) {
          return A(Y, Z);
        }
        var a0 = {}.toString.call(Y).slice(8, -1);
        "Object" === a0 && Y.constructor && (a0 = Y.constructor.name);
        return "Map" === a0 || "Set" === a0 ? Array.from(Y) : "Arguments" === a0 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a0) ? A(Y, Z) : void 0;
      }
    }(V, W) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function A(V, W) {
    (null == W || W > V.length) && (W = V.length);
    for (var Y = 0, Z = Array(W); Y < W; Y++) {
      Z[Y] = V[Y];
    }
    return Z;
  }
  function B(V, W, X, Y, Z, a0, a1) {
    try {
      var a3 = V[a0](a1),
        a4 = a3.value;
    } catch (a6) {
      return void X(a6);
    }
    a3.done ? W(a4) : Promise.resolve(a4).then(Y, Z);
  }
  function C(V) {
    return function () {
      var X = this,
        Y = arguments;
      return new Promise(function (Z, a0) {
        var a2 = V.apply(X, Y);
        function a3(a5) {
          B(a2, Z, a0, a3, a4, "next", a5);
        }
        function a4(a5) {
          B(a2, Z, a0, a3, a4, "throw", a5);
        }
        a3(void 0);
      });
    };
  }
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = C(q().mark(function X() {
      return q().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              Z.next = 2;
              return R({
                url: "https://sliverkiss.free.hr"
              });
            case 2:
              $.html = Z.sent;
            case 3:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return E.apply(this, arguments);
  }
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = C(q().mark(function X() {
      var Z, a0, a1, a2, a3, a4;
      return q().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              Z = $.path.split("/query");
              a0 = z(Z, 2);
              a1 = a0[1];
              a2 = "";
              a6.t0 = a1;
              a6.next = "/sub" === a6.t0 ? 5 : 16;
              break;
            case 5:
              a6.next = 7;
              return N();
            case 7:
              a3 = a6.sent;
              a6.next = 10;
              return L(a3);
            case 10:
              a4 = a6.sent;
              a6.next = 13;
              return J(a4);
            case 13:
              a2 = a6.sent;
              return a6.abrupt("break", 18);
            case 16:
              $.msg($.name, "", "测试query");
              return a6.abrupt("break", 18);
            case 18:
              return a6.abrupt("return", a2);
            case 19:
            case "end":
              return a6.stop();
          }
        }
      }, X);
    }));
    return G.apply(this, arguments);
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = C(q().mark(function W() {
      var X, Y;
      return q().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              X = $.path.split("/api");
              Y = z(X, 2);
              Y[1];
              $.msg($.name, "", "测试api");
            case 2:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return I.apply(this, arguments);
  }
  function J(V) {
    return K.apply(this, arguments);
  }
  function K() {
    K = C(q().mark(function W(X) {
      var Z, a0;
      return q().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              var a2 = {};
              a2.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
              a2["Sec-Fetch-Mode"] = "navigate";
              a2.Connection = "keep-alive";
              a2["Accept-Encoding"] = "gzip, deflate, br";
              a2.Host = "soonlink.xn--wqr30o34q.xn--io0a7i";
              a2["User-Agent"] = "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/111.0.5563.101 Mobile/15E148 Safari/604.1";
              a2["Sec-Fetch-Site"] = "none";
              a2["Accept-Language"] = "zh-CN,zh-Hans;q=0.9";
              a2["Sec-Fetch-Dest"] = "document";
              var a3 = {};
              a3.url = X;
              a3.headers = a2;
              Z = a3;
              a1.next = 3;
              return R(Z);
            case 3:
              a0 = a1.sent;
              return a1.abrupt("return", a0);
            case 5:
            case "end":
              return a1.stop();
          }
        }
      }, W);
    }));
    return K.apply(this, arguments);
  }
  function L(V) {
    return M.apply(this, arguments);
  }
  function M() {
    M = C(q().mark(function W(X) {
      var Y, Z;
      return q().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              var a2 = {};
              a2["user-agent"] = "Dart/3.5 (dart:io)";
              a2.accept = "*/*";
              a2["accept-encoding"] = "gzip";
              a2.host = "soonlink.xn--wqr30o34q.xn--io0a7i";
              a2.authorization = X;
              a2["content-type"] = "application/json";
              var a3 = {};
              a3.url = "https://soonlink.xn--wqr30o34q.xn--io0a7i/api/v1/user/getSubscribe";
              a3.headers = a2;
              Y = a3;
              a0.next = 3;
              return R(Y);
            case 3:
              Z = a0.sent;
              return a0.abrupt("return", Z.data.subscribe_url);
            case 5:
            case "end":
              return a0.stop();
          }
        }
      }, W);
    }));
    return M.apply(this, arguments);
  }
  function N() {
    return P.apply(this, arguments);
  }
  function P() {
    P = C(q().mark(function W() {
      var X, Y, Z, a0;
      return q().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              Y = Q();
              Z = {
                url: "https://soonlink.xn--wqr30o34q.xn--io0a7i/api/v1/custom/unauthorized?uuid=".concat(Y),
                headers: {
                  "user-agent": "Dart/3.5 (dart:io)",
                  "content-type": "application/json",
                  accept: "*/*",
                  "accept-encoding": "gzip",
                  host: "soonlink.xn--wqr30o34q.xn--io0a7i"
                }
              };
              a1.next = 4;
              return R(Z);
            case 4:
              a0 = a1.sent;
              return a1.abrupt("return", null == a0 || null === (X = a0.data) || void 0 === X ? void 0 : X.auth_data);
            case 6:
            case "end":
              return a1.stop();
          }
        }
      }, W);
    }));
    return P.apply(this, arguments);
  }
  function Q() {
    for (var V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", W = "", X = 0; X < 36; X++) {
      W += 8 === X || 13 === X || 18 === X || 23 === X ? "-" : V[Math.floor(36 * Math.random())];
    }
    return W;
  }
  function R(V, W) {
    return S.apply(this, arguments);
  }
  function S() {
    S = C(q().mark(function W(X, Y) {
      return q().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              return a0.abrupt("return", (void 0 === Y && (Y = "body" in X ? "post" : "get"), new Promise(function (a2, a3) {
                $.http[Y.toLowerCase()](X).then(function (a5) {
                  var a6 = a5.body;
                  a6 = $.toObj(a6) || a6;
                  a2(a6);
                }).catch(function (a5) {
                  return a3(a5);
                });
              })));
            case 1:
            case "end":
              return a0.stop();
          }
        }
      }, W);
    }));
    return S.apply(this, arguments);
  }
  function T() {
    var V = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      W = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      };
    return Object.assign(W, V);
  }
  function U() {
    var V = {
      "Content-Type": "application/json; charset=utf-8"
    };
    return T(V);
  }
  $.host = "sl.eric.vpn";
  $.isNeedRewrite = !0;
  $.json = $.name;
  $.html = $.name;
  $.type = "page";
  C(q().mark(function V() {
    var X, Y, Z;
    return q().wrap(function (a0) {
      for (;;) {
        switch (a0.prev = a0.next) {
          case 0:
            if ($.path = (a1 = $request.url, a2 = void 0, a2 = a1.lastIndexOf("/") === a1.length - 1 ? -1 : void 0, a1.slice(a1.indexOf("/", $.host.length), a2)), X = $.path.split("?"), Y = z(X, 2), Z = Y[1], $.queries = Z ? Z.split("&").reduce(function (a3, a4) {
              var a5 = a4.split("="),
                a6 = z(a5, 2),
                a7 = a6[0],
                a8 = a6[1];
              a3[a7] = a8;
              return a3;
            }, {}) : {}, $.isGet = "GET" === $request.method, $.isPost = "POST" === $request.method, $.isOptions = "OPTIONS" === $request.method, $.type = "page", $.isQuery = $.isGet && /^\/query\/.*?/.test($.path), $.isApi = $.isPost && /^\/api\/.*?/.test($.path), $.isPage = $.isGet && !$.isQuery && !$.isApi, !$.isOptions) {
              a0.next = 16;
              break;
            }
            $.type = "options";
            a0.next = 14;
            return handleOptions();
          case 14:
          case 20:
            a0.next = 33;
            break;
          case 16:
            if (!$.isPage) {
              a0.next = 22;
              break;
            }
            $.type = "page";
            a0.next = 20;
            return D();
          case 22:
            if (!$.isQuery) {
              a0.next = 29;
              break;
            }
            $.type = "query";
            a0.next = 26;
            return F();
          case 26:
            $.json = a0.sent;
            a0.next = 33;
            break;
          case 29:
            if (!$.isApi) {
              a0.next = 33;
              break;
            }
            $.type = "api";
            a0.next = 33;
            return H();
          case 33:
          case "end":
            return a0.stop();
        }
      }
      var a1, a2;
    }, V);
  }))().catch(function (W) {
    return $.logErr(W);
  }).finally(function () {
    var X;
    $.isOptions ? (X = T(), $.isQuanX() ? $.done({
      headers: X
    }) : $.done({
      response: {
        headers: X
      }
    })) : $.isPage ? function () {
      var Y = T({
        "Content-Type": "text/html;charset=UTF-8"
      });
      $.isQuanX() ? $.done({
        status: "HTTP/1.1 200",
        headers: Y,
        body: $.html
      }) : $.done({
        response: {
          status: 200,
          headers: Y,
          body: $.html
        }
      });
    }() : $.isQuery ? function () {
      $.json = $.toStr($.json);
      var Y = U();
      $.isQuanX() ? $.done({
        status: "HTTP/1.1 200",
        headers: Y,
        body: $.json
      }) : $.done({
        response: {
          status: 200,
          headers: Y,
          body: $.json
        }
      });
    }() : $.isApi ? function () {
      $.json = $.toStr($.json);
      var Y = U();
      $.isQuanX() ? $.done({
        status: "HTTP/1.1 200",
        headers: Y,
        body: $.json
      }) : $.done({
        response: {
          status: 200,
          headers: Y,
          body: $.json
        }
      });
    }() : $.done();
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}