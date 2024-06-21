import Ne, { useRef as fe, useState as U, useEffect as Tr } from "react";
import Rr from "use-supercluster";
import Er from "google-map-react";
import u from "styled-components";
var ue = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function _r() {
  if (Le)
    return N;
  Le = 1;
  var r = Ne, i = Symbol.for("react.element"), f = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(y, h, C) {
    var b, j = {}, M = null, O = null;
    C !== void 0 && (M = "" + C), h.key !== void 0 && (M = "" + h.key), h.ref !== void 0 && (O = h.ref);
    for (b in h)
      s.call(h, b) && !m.hasOwnProperty(b) && (j[b] = h[b]);
    if (y && y.defaultProps)
      for (b in h = y.defaultProps, h)
        j[b] === void 0 && (j[b] = h[b]);
    return { $$typeof: i, type: y, key: M, ref: O, props: j, _owner: x.current };
  }
  return N.Fragment = f, N.jsx = p, N.jsxs = p, N;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Sr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ne, i = Symbol.for("react.element"), f = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), I = Symbol.iterator, E = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = I && e[I] || e[E];
      return typeof t == "function" ? t : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          o[a - 1] = arguments[a];
        q("error", e, o);
      }
    }
    function q(e, t, o) {
      {
        var a = F.ReactDebugCurrentFrame, g = a.getStackAddendum();
        g !== "" && (t += "%s", o = o.concat([g]));
        var v = o.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var X = !1, Q = !1, Ze = !1, He = !1, Je = !1, me;
    me = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === m || Je || e === x || e === C || e === b || He || e === O || X || Q || Ze || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === j || e.$$typeof === p || e.$$typeof === y || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function qe(e, t, o) {
      var a = e.displayName;
      if (a)
        return a;
      var g = t.displayName || t.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case f:
          return "Portal";
        case m:
          return "Profiler";
        case x:
          return "StrictMode";
        case C:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return ve(t) + ".Consumer";
          case p:
            var o = e;
            return ve(o._context) + ".Provider";
          case h:
            return qe(e, e.render, "ForwardRef");
          case j:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case M: {
            var g = e, v = g._payload, c = g._init;
            try {
              return A(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, B = 0, xe, ye, be, we, ke, Ce, je;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Xe() {
      {
        if (B === 0) {
          xe = console.log, ye = console.info, be = console.warn, we = console.error, ke = console.group, Ce = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function Qe() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: xe
            }),
            info: $({}, e, {
              value: ye
            }),
            warn: $({}, e, {
              value: be
            }),
            error: $({}, e, {
              value: we
            }),
            group: $({}, e, {
              value: ke
            }),
            groupCollapsed: $({}, e, {
              value: Ce
            }),
            groupEnd: $({}, e, {
              value: je
            })
          });
        }
        B < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = F.ReactCurrentDispatcher, re;
    function Z(e, t, o) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (g) {
            var a = g.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, H;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      H = new er();
    }
    function Re(e, t) {
      if (!e || te)
        return "";
      {
        var o = H.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      te = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ee.current, ee.current = null, Xe();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (_) {
              a = _;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var l = _.stack.split(`
`), T = a.stack.split(`
`), w = l.length - 1, k = T.length - 1; w >= 1 && k >= 0 && l[w] !== T[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (l[w] !== T[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || l[w] !== T[k]) {
                    var S = `
` + l[w].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = v, Qe(), Error.prepareStackTrace = g;
      }
      var z = e ? e.displayName || e.name : "", P = z ? Z(z) : "";
      return typeof e == "function" && H.set(e, P), P;
    }
    function rr(e, t, o) {
      return Re(e, !1);
    }
    function tr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function J(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, tr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case C:
          return Z("Suspense");
        case b:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return rr(e.render);
          case j:
            return J(e.type, t, o);
          case M: {
            var a = e, g = a._payload, v = a._init;
            try {
              return J(v(g), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, Ee = {}, _e = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner, o = J(e.type, e._source, t ? t.type : null);
        _e.setExtraStackFrame(o);
      } else
        _e.setExtraStackFrame(null);
    }
    function nr(e, t, o, a, g) {
      {
        var v = Function.call.bind(L);
        for (var c in e)
          if (v(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var T = Error((a || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              l = e[c](t, c, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              l = w;
            }
            l && !(l instanceof Error) && (K(g), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, c, typeof l), K(null)), l instanceof Error && !(l.message in Ee) && (Ee[l.message] = !0, K(g), d("Failed %s type: %s", o, l.message), K(null));
          }
      }
    }
    var or = Array.isArray;
    function ne(e) {
      return or(e);
    }
    function ar(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ir(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Me(e) {
      if (ir(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Se(e);
    }
    var V = F.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Fe, oe;
    oe = {};
    function lr(e) {
      if (L.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (L.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, t) {
      if (typeof e.ref == "string" && V.current && t && V.current.stateNode !== t) {
        var o = A(V.current.type);
        oe[o] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(V.current.type), e.ref), oe[o] = !0);
      }
    }
    function ur(e, t) {
      {
        var o = function() {
          Oe || (Oe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function fr(e, t) {
      {
        var o = function() {
          Fe || (Fe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var pr = function(e, t, o, a, g, v, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function gr(e, t, o, a, g) {
      {
        var v, c = {}, l = null, T = null;
        o !== void 0 && (Me(o), l = "" + o), cr(t) && (Me(t.key), l = "" + t.key), lr(t) && (T = t.ref, dr(t, g));
        for (v in t)
          L.call(t, v) && !sr.hasOwnProperty(v) && (c[v] = t[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            c[v] === void 0 && (c[v] = w[v]);
        }
        if (l || T) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && ur(c, k), T && fr(c, k);
        }
        return pr(e, l, T, g, a, V.current, c);
      }
    }
    var ae = F.ReactCurrentOwner, Ae = F.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var t = e._owner, o = J(e.type, e._source, t ? t.type : null);
        Ae.setExtraStackFrame(o);
      } else
        Ae.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function $e() {
      {
        if (ae.current) {
          var e = A(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
      return "";
    }
    var Pe = {};
    function mr(e) {
      {
        var t = $e();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Ie(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = mr(t);
        if (Pe[o])
          return;
        Pe[o] = !0;
        var a = "";
        e && e._owner && e._owner !== ae.current && (a = " It was passed a child from " + A(e._owner.type) + "."), D(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), D(null);
      }
    }
    function De(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            se(a) && Ie(a, t);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = G(e);
          if (typeof g == "function" && g !== e.entries)
            for (var v = g.call(e), c; !(c = v.next()).done; )
              se(c.value) && Ie(c.value, t);
        }
      }
    }
    function vr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === j))
          o = t.propTypes;
        else
          return;
        if (o) {
          var a = A(t);
          nr(o, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !ie) {
          ie = !0;
          var g = A(t);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var a = t[o];
          if (a !== "children" && a !== "key") {
            D(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var ze = {};
    function Be(e, t, o, a, g, v) {
      {
        var c = Ke(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = hr();
          T ? l += T : l += $e();
          var w;
          e === null ? w = "null" : ne(e) ? w = "array" : e !== void 0 && e.$$typeof === i ? (w = "<" + (A(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, l);
        }
        var k = gr(e, t, o, g, v);
        if (k == null)
          return k;
        if (c) {
          var S = t.children;
          if (S !== void 0)
            if (a)
              if (ne(S)) {
                for (var z = 0; z < S.length; z++)
                  De(S[z], e);
                Object.freeze && Object.freeze(S);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(S, e);
        }
        if (L.call(t, "key")) {
          var P = A(e), _ = Object.keys(t).filter(function(jr) {
            return jr !== "key";
          }), le = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[P + le]) {
            var Cr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, P, Cr, P), ze[P + le] = !0;
          }
        }
        return e === s ? xr(k) : vr(k), k;
      }
    }
    function yr(e, t, o) {
      return Be(e, t, o, !0);
    }
    function br(e, t, o) {
      return Be(e, t, o, !1);
    }
    var wr = br, kr = yr;
    W.Fragment = s, W.jsx = wr, W.jsxs = kr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ue.exports = _r() : ue.exports = Sr();
var n = ue.exports;
const ce = "localStorageMapOptionsZoomKey", de = "localStorageMapOptionsCenterKey", Mr = ({
  defaultZoom: r,
  btn_map_change_scheme: i,
  btn_map_change_satellite: f,
  btn_map_change_hybrid: s,
  defaultCenter: x,
  onChangeCoords: m
}) => {
  const p = fe(null), [y, h] = U(
    JSON.parse(localStorage.getItem(ce) ?? "0") || r || 10
  ), [C, b] = U(
    JSON.parse(localStorage.getItem(de) ?? "0") || x || { lat: 55.753544, lng: 37.621202 }
  ), j = [
    {
      name: i ?? "roadmap",
      mapTypeId: "roadmap"
    },
    {
      name: f ?? "satellite",
      mapTypeId: "satellite"
    },
    {
      name: s ?? "hybrid",
      mapTypeId: "hybrid"
    }
  ], [M, O] = U("hybrid");
  return {
    zoom: y,
    onChangeMapZoom: (d) => {
      h(d), localStorage.setItem(ce, JSON.stringify(d));
    },
    onChangeMapCenter: (d) => {
      b(d), localStorage.setItem(de, JSON.stringify(d));
    },
    mapTypes: j,
    selectedMapTypeId: M,
    onSelectMapType: (d) => {
      O(d);
    },
    center: C,
    onChange: (d) => {
      b(d.center), localStorage.setItem(de, JSON.stringify(d.center)), h(d.zoom), localStorage.setItem(ce, JSON.stringify(d.zoom)), m && m(d);
    },
    mapRef: p
  };
}, Or = ({
  bounds: r,
  nftList: i,
  zoom: f
}) => {
  const s = i.map((p) => ({
    type: "Feature",
    properties: { cluster: !1, crimeId: p.id, ...p },
    geometry: {
      type: "Point",
      coordinates: [p.lng, p.lat]
    }
  })), { clusters: x, supercluster: m } = Rr({
    points: s,
    bounds: r,
    zoom: f,
    options: { radius: 500, maxZoom: 20 }
  });
  return { clusters: x, supercluster: m };
}, Fr = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
], Ar = u.div`
    width: 100%;
    height: 100%;
`;
var R = /* @__PURE__ */ ((r) => (r.violGrad = "linear-gradient(215.93deg, #B02AD3 15.49%, #366EF9 83.29%)", r.fullDark = "#000000", r.darkGrey = "#111111", r.textDefault = "#565656", r.gray = "#A4A4A4", r.gray1 = "#C1C1C1", r.grayLight = "#F0F0F0", r.white = "#FFFFFF", r.strokeWhite = "rgba(255, 255, 255, 0.15)", r.red = "#FF1744", r.pink = "#FA17FF", r.violett = "#6F17FF", r.cyan = "#1758FF", r.blue = "#17ACFF", r.lightBlue = "#17F1FF", r.green = "#17FF82", r.lightGreen = "#B5FF17", r.yellow = "#FFBE17", r.orange = "#FF7917", r.color2 = "#40c9c1", r))(R || {}), pe = /* @__PURE__ */ ((r) => (r.darkShadow = "6px 34px 12px rgba(0, 0, 0, 0.4)", r))(pe || {}), Y = /* @__PURE__ */ ((r) => (r.xs = "320px", r.sm = "600px", r.md = "960px", r.lg = "1280px", r.xl = "1920px", r))(Y || {}), We = /* @__PURE__ */ ((r) => (r.strokeWhite = "8px solid rgba(255, 255, 255, 0.15)", r.grayLight = "8px solid #F0F0F0", r))(We || {});
const $r = u.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 28px;
    top: calc(50vh - 90px);
    margin: auto 0;
    @media (max-width: ${Y.sm}) {
        right: 8px;
    }
`, ge = u.div`
    display: flex;
    flex-direction: column;
    background: ${R.darkGrey};
    border: ${We.strokeWhite};
    border-radius: 30px;
    margin: 2px 0;
    button {
        :active {
            background-color: var(--main-color);
        }
    }
`, Ue = u.div`
    cursor: pointer;
    height: 50px;
    width: 40px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`, Pr = u(Ue)`
    border-radius: 25px 25px 0 0;
`, Ir = u(Ue)`
    border-radius: 0 0 25px 25px;
`, Dr = u.div`
    cursor: pointer;
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`, zr = u.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    background: none;
    background: ${(r) => r.isActiveButton ? "var(--main-color)" : R.darkGrey};
    border: none;
    border-radius: 25px;
`, Br = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%208H15'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2015V1'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Lr = "data:image/svg+xml,%3csvg%20width='16'%20height='2'%20viewBox='0%200%2016%202'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201H15'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Vr = ({ onChangeMapZoom: r, zoom: i }) => {
  const f = () => {
    i && r(i + 1);
  }, s = () => {
    i && r(i - 1);
  };
  return /* @__PURE__ */ n.jsxs(ge, { className: "zoom-buttons", children: [
    /* @__PURE__ */ n.jsx(Pr, { onClick: f, children: /* @__PURE__ */ n.jsx("img", { src: Br }) }),
    /* @__PURE__ */ n.jsx(Ir, { onClick: s, children: /* @__PURE__ */ n.jsx("img", { src: Lr }) })
  ] });
}, Nr = u.div`
    color: var(--main-color);
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        transform-origin: 40px 40px;
        animation: lds-spinner 1.2s linear infinite;
    }
    div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: var(--main-color);
    }
    div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }
    div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }
    div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }
    div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }
    div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }
    div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }
    div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }
    div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }
    div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }
    div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }
    div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }
    div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
    @keyframes lds-spinner {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`, he = ({ style: r }) => /* @__PURE__ */ n.jsxs(Nr, { className: "lds-spinner", style: r, children: [
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {}),
  /* @__PURE__ */ n.jsx("div", {})
] }), Wr = "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2018.5C15.1421%2018.5%2018.5%2015.1421%2018.5%2011C18.5%206.85786%2015.1421%203.5%2011%203.5C6.85786%203.5%203.5%206.85786%203.5%2011C3.5%2015.1421%206.85786%2018.5%2011%2018.5Z'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2014C12.6569%2014%2014%2012.6569%2014%2011C14%209.3431%2012.6569%208%2011%208C9.3431%208%208%209.3431%208%2011C8%2012.6569%209.3431%2014%2011%2014Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%203V1'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%2011H1'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2019V21'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19%2011H21'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ur = ({ setCenter: r, loading: i }) => {
  const f = () => {
    navigator.geolocation.getCurrentPosition(function(s) {
      r({ lat: s.coords.latitude, lng: s.coords.longitude });
    });
  };
  return /* @__PURE__ */ n.jsx(ge, { className: "geolocation-button", children: /* @__PURE__ */ n.jsx(Dr, { onClick: f, children: i ? /* @__PURE__ */ n.jsx(he, { style: { transform: "scale(.35)", position: "absolute" } }) : /* @__PURE__ */ n.jsx("img", { src: Wr }) }) });
}, Yr = "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.0132%2010.8333H16.0165C15.6612%2010.8333%2015.3665%2010.5387%2015.3665%2010.1833V9.53333C15.3665%206.656%2014.3438%205.63333%2011.4665%205.63333H10.8165C10.4612%205.63333%2010.1665%205.33867%2010.1665%204.98333V3.98667C10.1665%201.23067%2011.3972%200%2014.1532%200H17.0132C19.7692%200%2020.9998%201.23067%2020.9998%203.98667V6.84667C20.9998%209.60267%2019.7692%2010.8333%2017.0132%2010.8333ZM16.4165%209.53333H17.0132C19.0498%209.53333%2019.6998%208.88333%2019.6998%206.84667V3.98667C19.6998%201.95%2019.0498%201.3%2017.0132%201.3H14.1532C12.1165%201.3%2011.4665%201.95%2011.4665%203.98667V4.58333C14.9998%205.23333%2016.0165%206.25%2016.4165%209.53333Z'%20fill='%23A4A4A4'/%3e%3cpath%20d='M6.25%2020H10.75C14.5%2020%2016%2018.5%2016%2014.75V10.25C16%206.5%2014.5%205%2010.75%205H6.25C2.5%205%201%206.5%201%2010.25V14.75C1%2018.5%202.5%2020%206.25%2020Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Gr = u.div`
    position: relative;
    //width: 380px;
    max-width: calc(100vw - 80px);
    height: auto;
    box-sizing: border-box;
    padding: 56px 30px 18px 30px;
    background-color: ${R.white};
    border-radius: 20px;
    z-index: 100;
    @media (max-width: ${Y.sm}) {
        max-width: calc(100vw - 10px);
    }
`, Zr = u.div`
    position: absolute;
    right: 25px;
    top: 25px;
    cursor: pointer;
`, Hr = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.16992%2017.1698L17.1699%201.16992'%20stroke='%23565656'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.1699%2017.1698L1.16992%201.16992'%20stroke='%23565656'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Jr = (r) => {
  const i = fe(null);
  return Tr(() => {
    const f = (s) => {
      i.current && !i.current.contains(s.target) && r();
    };
    return document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, [r]), i;
}, Kr = ({
  children: r,
  isIconClose: i,
  style: f,
  isCloseOutsideClick: s = !0,
  onCloseModal: x = () => {
  },
  isOpenModal: m
}) => {
  const p = () => {
    x();
  }, y = Jr(() => {
    s && p();
  });
  return onpopstate = function(h) {
    m && (h.preventDefault(), h.stopPropagation(), p());
  }, /* @__PURE__ */ n.jsxs(Gr, { ref: y, style: f, children: [
    i && /* @__PURE__ */ n.jsx(Zr, { onClick: p, children: /* @__PURE__ */ n.jsx("img", { src: Hr }) }),
    r
  ] });
}, qr = u.div`
    z-index: 100;
`, Xr = ({ children: r }) => /* @__PURE__ */ n.jsx(qr, { id: "modal", children: r }), Qr = ({
  children: r,
  isIconClose: i,
  style: f,
  isCloseOutsideClick: s = !0,
  onCloseModal: x = () => {
  },
  isOpenModal: m
}) => m ? /* @__PURE__ */ n.jsx(
  Kr,
  {
    isIconClose: i,
    style: f,
    isCloseOutsideClick: s,
    onCloseModal: x,
    isOpenModal: m,
    children: /* @__PURE__ */ n.jsx(Xr, { children: r })
  }
) : /* @__PURE__ */ n.jsx(n.Fragment, {}), et = u.div`
    border-radius: 20px;
    width: auto;
    max-width: 400px;
    position: absolute;
    right: 56px;
    top: -8px;
    @media (max-width: ${Y.sm}) {
        position: fixed;
        width: calc(100vw - 20px);
        top: 100px;
        right: 10px;
        left: 10px;
    }
`, rt = u.img`
    width: 12px;
    height: 8px;
    position: absolute;
    top: 34px;
    left: calc(100% - 3px);
    transform: rotate(90deg);
    display: ${(r) => r.isOpenModal ? "block" : "none"};
    @media (max-width: ${Y.sm}) {
        display: none;
    }
`, tt = u.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${R.textDefault};
    margin: 0 0 10px 0;
`, nt = u.div`
    display: flex;
    margin: 0 -1px;
`, ot = u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 12px 25px;
    margin: 0 1px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    background-color: ${(r) => r.isSelected ? "var(--main-color)" : R.grayLight};
    color: ${(r) => r.isSelected ? R.white : R.darkGrey};
    width: 100%;
    cursor: pointer;
`, at = "data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.08571%202.5098C8.29714%200.915031%207.18286%204.21128e-07%206%205.24537e-07C4.81714%206.27945e-07%203.70286%200.915031%202.91429%202.5098L0.342856%207.73856C0.257142%207.89542%200.137143%208%200%208L12%208C11.9143%207.97386%2011.7086%207.84314%2011.6571%207.73856L9.08571%202.5098Z'%20fill='white'/%3e%3c/svg%3e", it = ({
  onCloseSelectModal: r,
  isOpenModal: i,
  mapTypes: f,
  selectedMapTypeId: s,
  onSelectMapType: x,
  txt_map_change_map_type_view: m
}) => {
  const p = () => {
    r();
  };
  return /* @__PURE__ */ n.jsxs(et, { children: [
    /* @__PURE__ */ n.jsx(
      Qr,
      {
        isOpenModal: i,
        style: { width: "auto", padding: "21px 15px" },
        onCloseModal: p,
        children: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx(tt, { children: m ?? "Map type view" }),
          /* @__PURE__ */ n.jsx(nt, { children: f.map((y, h) => /* @__PURE__ */ n.jsx(
            ot,
            {
              isSelected: s === y.mapTypeId,
              onClick: () => x(y.mapTypeId),
              children: y.name
            },
            `${y.mapTypeId}-${h}`
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ n.jsx(rt, { src: at, isOpenModal: i })
  ] });
}, st = ({
  mapTypes: r,
  selectedMapTypeId: i,
  onSelectMapType: f
}) => {
  const [s, x] = U(!1), m = () => {
    x(!1);
  }, p = () => {
    x((y) => !y);
  };
  return /* @__PURE__ */ n.jsxs(ge, { onClick: p, className: "map-type-button", children: [
    /* @__PURE__ */ n.jsx(zr, { isActiveButton: s, children: /* @__PURE__ */ n.jsx("img", { src: Yr }) }),
    /* @__PURE__ */ n.jsx(
      it,
      {
        mapTypes: r,
        isOpenModal: s,
        onCloseSelectModal: m,
        selectedMapTypeId: i,
        onSelectMapType: f
      }
    )
  ] });
};
u.div`
    width: 100vw;
    height: 100vh;
`;
const lt = u.div`
    background: ${R.fullDark};
    box-shadow: ${pe.darkShadow};
    border-radius: 10px;
    padding: 4px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: 15px;
    line-height: 18px;
    color: ${R.white};
    transform: translate(calc(-50% + 6px), calc(-100% - 8px));
    z-index: 5;
`, ct = u.div`
    height: 29px;
`, dt = u.img`
    background-size: contain;
    background-position: center;
    width: 36px;
    height: 27px;
    border-radius: 4px;
    margin: 1px;
    z-index: 1;
    -webkit-filter: ${(r) => r.isMonochrome ? "grayscale(100%)" : "none"}; /* Safari 6.0 - 9.0 */
    filter: ${(r) => r.isMonochrome ? "grayscale(100%)" : "none"};
`, ut = u.span`
    margin: auto 9px;
    font-family: RobotoMedium;
`, ft = u.div`
    width: 14px;
    height: 14px;
    background-color: var(--main-color);
    border-radius: 14px;
`, pt = u.div`
    width: 40px;
    height: 40px;
    background-color: var(--main-color) 66;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`, gt = u.div`
    width: ${(r) => r.width ? r.width : 120}px;
    height: ${(r) => r.width ? r.width : 120}px;
    background-color: var(--main-color) 26;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`, ht = u.div`
    background-color: none;
    padding: 6px;
    border: 1px solid var(--main-color);
    border-radius: 100%;
    position: absolute;
    transform: translate(calc(-50% + 6px), calc(-50% - 37px));
    display: flex;
    justify-content: center;
    align-items: center;
`, Ye = u.img`
    width: 12px;
    height: 8px;
    position: absolute;
    top: -8px;
    z-index: 1;
`, Ge = "data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.91429%205.4902C3.70286%207.08497%204.81714%208%206%208C7.18286%208%208.29714%207.08497%209.08571%205.4902L11.6571%200.261439C11.7429%200.104576%2011.8629%200%2012%200H0C0.0857143%200.0261438%200.291428%200.156864%200.342857%200.261439L2.91429%205.4902Z'%20fill='black'/%3e%3c/svg%3e", mt = ({
  lat: r,
  lng: i,
  cluster: f,
  clusterLeavs: s,
  pointCount: x,
  // mapRef,
  // aimRef,
  zoom: m,
  onChangeMapCenter: p,
  onChangeMapZoom: y
}) => {
  const h = () => {
    m && (p({ lat: r, lng: i }), y(m + 2));
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(lt, { className: "cluster-marker", onClick: h, children: [
      s.map(
        (C, b) => b < 3 || s.length <= 3 ? /* @__PURE__ */ n.jsxs(ct, { children: [
          /* @__PURE__ */ n.jsx(
            he,
            {
              style: {
                transform: "scale(0.2)",
                position: "absolute",
                left: `${b * 38 - 16}px`,
                top: "-20px",
                zIndex: "-1"
              }
            }
          ),
          /* @__PURE__ */ n.jsx(
            dt,
            {
              src: `${C.properties.previewUrl ?? C.properties.imageUrl}`,
              onError: ({ currentTarget: j }) => {
                j.onerror = null, j.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
              }
            }
          )
        ] }, `cluster-${f.id}-crime-${C.properties.id}-${b}`) : /* @__PURE__ */ n.jsx("div", {}, `${f.id}-crime-${C.properties.id}-${b}`)
      ),
      s.length <= 3 ? /* @__PURE__ */ n.jsx(n.Fragment, {}) : /* @__PURE__ */ n.jsxs(ut, { children: [
        "+",
        x - 3
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(Ye, { src: Ge }),
    /* @__PURE__ */ n.jsx(ht, { children: /* @__PURE__ */ n.jsx(gt, { width: s.length > 8 ? 184 : 120, children: /* @__PURE__ */ n.jsx(pt, { children: /* @__PURE__ */ n.jsx(ft, {}) }) }) })
  ] });
}, vt = u.div`
    background: ${R.fullDark};
    min-width: 79px;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 15px;
    line-height: 18px;
    transform: translate(calc(-50% + 6px), calc(-100% - 8px));
    z-index: 3;
`, xt = u.img`
    position: relative;
    background-size: contain;
    background-position: center;
    height: 52px;
    border-radius: 4px;
    box-shadow: ${pe.darkShadow};
    z-index: 2;
    -webkit-filter: ${(r) => r.isMonochrome ? "grayscale(100%)" : "none"}; /* Safari 6.0 - 9.0 */
    filter: ${(r) => r.isMonochrome ? "grayscale(100%)" : "none"};
    max-width: 100% !important;
`, yt = u.span`
    position: absolute;
    bottom: 0;
    right: -10px;
    color: ${R.white};
    background: ${R.fullDark};
    border-radius: 4px;
    padding: 3px 5px;
    white-space: nowrap;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 3;
`, bt = u.div`
    position: absolute;
    top: -5px;
    right: -10px;
    background: url(${(r) => r.fileUrl});
    background-size: contain;
    border: 2px solid ${R.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
    z-index: 3;
    & svg {
        fill: var(--main-color);
    }
`;
u.div`
    position: absolute;
    top: -5px;
    right: -10px;
    background: #fff;
    border: 2px solid ${R.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
`;
u.img`
    border-radius: 14px;
    width: 18px;
    height: 18px;
    z-index: 3;
    padding: 4px 0 0 4px;
`;
const wt = (r) => r.ownerAvatarUrl ? /* @__PURE__ */ n.jsx(bt, { fileUrl: r.ownerAvatarUrl }) : /* @__PURE__ */ n.jsx(n.Fragment, {}), kt = ({ cluster: r, handleClickNft: i = () => {
} }) => {
  const [f, s] = U(!0), x = (p) => {
    i(p);
  }, m = () => {
    s(!1);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(vt, { onClick: () => x(r.id), children: [
      f && /* @__PURE__ */ n.jsx(
        he,
        {
          style: {
            transform: "scale(0.3)",
            position: "absolute",
            left: "0",
            top: "-10px",
            zIndex: 1
          }
        }
      ),
      /* @__PURE__ */ n.jsx(
        xt,
        {
          src: `${r.previewUrl ?? r.imageUrl}`,
          onLoad: m,
          onError: ({ currentTarget: p }) => {
            p.onerror = null, p.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          }
        }
      ),
      wt(r),
      r.name ? /* @__PURE__ */ n.jsx(yt, { children: r.name }) : /* @__PURE__ */ n.jsx("div", {})
    ] }),
    /* @__PURE__ */ n.jsx(Ye, { src: Ge })
  ] });
}, Ct = ({
  googleMapReactProps: r,
  loadingMap: i,
  onChangeMapZoom: f,
  // onChangeMapCenter,
  mapTypes: s,
  selectedMapTypeId: x,
  onSelectMapType: m,
  onChange: p,
  nftList: y = [],
  bounds: h,
  mapRef: C,
  onClickMarker: b
}) => {
  const j = fe(), { clusters: M, supercluster: O } = Or({
    nftList: y,
    zoom: r.zoom ?? 10,
    bounds: h
  }), I = (E) => {
    C.current.setCenter(E);
  };
  return /* @__PURE__ */ n.jsxs(Ar, { className: "g-map__ar-components-kit", children: [
    /* @__PURE__ */ n.jsx(
      Er,
      {
        ...r,
        yesIWantToUseGoogleMapApiInternals: !0,
        onGoogleApiLoaded: ({ map: E }) => {
          C.current = E;
        },
        options: {
          styles: Fr,
          scaleControl: !1,
          zoomControl: !1,
          mapTypeId: x,
          clickableIcons: !1,
          gestureHandling: "greedy",
          fullscreenControl: !1,
          disableDefaultUI: !0,
          ...r.options
        },
        onChange: p,
        children: M.map((E, G) => {
          const [F, d] = E.geometry.coordinates, { cluster: q, point_count: X } = E.properties;
          if (q && O) {
            const Q = O == null ? void 0 : O.getLeaves(Number(E.id));
            return /* @__PURE__ */ n.jsx(
              mt,
              {
                lat: d,
                lng: F,
                clusterLeavs: Q,
                cluster: E,
                pointCount: X,
                zoom: r.zoom,
                mapRef: C,
                aimRef: j,
                onChangeMapZoom: f,
                onChangeMapCenter: I
              },
              `cluster-${E.id}-${G}`
            );
          } else
            return /* @__PURE__ */ n.jsx(
              kt,
              {
                lat: d,
                lng: F,
                handleClickNft: b,
                cluster: E
              },
              `crime-${E.properties.crimeId}`
            );
        })
      }
    ),
    /* @__PURE__ */ n.jsxs($r, { className: "map-options", children: [
      /* @__PURE__ */ n.jsx(
        st,
        {
          mapTypes: s,
          selectedMapTypeId: x,
          onSelectMapType: m
        }
      ),
      /* @__PURE__ */ n.jsx(Vr, { zoom: r.zoom, onChangeMapZoom: f }),
      /* @__PURE__ */ n.jsx(Ur, { setCenter: I, loading: i })
    ] })
  ] });
}, _t = (r) => {
  const {
    onChangeMapZoom: i,
    onChangeMapCenter: f,
    zoom: s,
    mapTypes: x,
    selectedMapTypeId: m,
    onSelectMapType: p,
    center: y,
    onChange: h,
    mapRef: C
  } = Mr({
    defaultZoom: r.googleMapReact.zoom ?? r.googleMapReact.defaultZoom,
    defaultCenter: r.googleMapReact.defaultCenter ?? r.googleMapReact.defaultCenter,
    onChangeCoords: r.onChangeCoords
  });
  return /* @__PURE__ */ n.jsx(
    Ct,
    {
      googleMapReactProps: {
        ...r.googleMapReact,
        zoom: r.googleMapReact.zoom ?? s,
        center: r.googleMapReact.center ?? y
      },
      loadingMap: r.loadingMap,
      onChangeMapZoom: i,
      onChangeMapCenter: f,
      mapTypes: x,
      selectedMapTypeId: m,
      onSelectMapType: p,
      onChange: h,
      nftList: r.nftList,
      bounds: r.bounds,
      mapRef: C,
      onClickMarker: r.onClickMarker
    }
  );
}, St = () => /* @__PURE__ */ n.jsx("div", { children: "NFT VIEWER" });
export {
  _t as MapComponent,
  St as NftViewerComponent
};
