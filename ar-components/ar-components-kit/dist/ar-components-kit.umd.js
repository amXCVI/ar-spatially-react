(function(M,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("use-supercluster"),require("react"),require("google-map-react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","use-supercluster","react","google-map-react","styled-components"],V):(M=typeof globalThis<"u"?globalThis:M||self,V(M.ARComponentsKit={},M["use-supercluster"],M.React,M["google-map-react"],M["styled-components"]))})(this,function(M,V,O,Ge,u){"use strict";var q={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function He(){if(ve)return N;ve=1;var t=O,i=Symbol.for("react.element"),f=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,x=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function p(y,h,C){var b,j={},F=null,A=null;C!==void 0&&(F=""+C),h.key!==void 0&&(F=""+h.key),h.ref!==void 0&&(A=h.ref);for(b in h)s.call(h,b)&&!m.hasOwnProperty(b)&&(j[b]=h[b]);if(y&&y.defaultProps)for(b in h=y.defaultProps,h)j[b]===void 0&&(j[b]=h[b]);return{$$typeof:i,type:y,key:F,ref:A,props:j,_owner:x.current}}return N.Fragment=f,N.jsx=p,N.jsxs=p,N}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function Je(){return xe||(xe=1,process.env.NODE_ENV!=="production"&&function(){var t=O,i=Symbol.for("react.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),y=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),z=Symbol.iterator,E="@@iterator";function H(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[E];return typeof r=="function"?r:null}var P=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];ae("error",e,o)}}function ae(e,r,o){{var a=P.ReactDebugCurrentFrame,g=a.getStackAddendum();g!==""&&(r+="%s",o=o.concat([g]));var v=o.map(function(c){return String(c)});v.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,v)}}var ie=!1,se=!1,Zt=!1,Gt=!1,Ht=!1,Ce;Ce=Symbol.for("react.module.reference");function Jt(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===m||Ht||e===x||e===C||e===b||Gt||e===A||ie||se||Zt||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===j||e.$$typeof===p||e.$$typeof===y||e.$$typeof===h||e.$$typeof===Ce||e.getModuleId!==void 0))}function Kt(e,r,o){var a=e.displayName;if(a)return a;var g=r.displayName||r.name||"";return g!==""?o+"("+g+")":o}function je(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case f:return"Portal";case m:return"Profiler";case x:return"StrictMode";case C:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return je(r)+".Consumer";case p:var o=e;return je(o._context)+".Provider";case h:return Kt(e,e.render,"ForwardRef");case j:var a=e.displayName||null;return a!==null?a:I(e.type)||"Memo";case F:{var g=e,v=g._payload,c=g._init;try{return I(c(v))}catch{return null}}}return null}var D=Object.assign,Y=0,Te,Re,Ee,_e,Se,Me,Oe;function Fe(){}Fe.__reactDisabledLog=!0;function Xt(){{if(Y===0){Te=console.log,Re=console.info,Ee=console.warn,_e=console.error,Se=console.group,Me=console.groupCollapsed,Oe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Fe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Qt(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:Te}),info:D({},e,{value:Re}),warn:D({},e,{value:Ee}),error:D({},e,{value:_e}),group:D({},e,{value:Se}),groupCollapsed:D({},e,{value:Me}),groupEnd:D({},e,{value:Oe})})}Y<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var le=P.ReactCurrentDispatcher,ce;function J(e,r,o){{if(ce===void 0)try{throw Error()}catch(g){var a=g.stack.trim().match(/\n( *(at )?)/);ce=a&&a[1]||""}return`
`+ce+e}}var ue=!1,K;{var qt=typeof WeakMap=="function"?WeakMap:Map;K=new qt}function Ae(e,r){if(!e||ue)return"";{var o=K.get(e);if(o!==void 0)return o}var a;ue=!0;var g=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var v;v=le.current,le.current=null,Xt();try{if(r){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(_){a=_}Reflect.construct(e,[],c)}else{try{c.call()}catch(_){a=_}e.call(c.prototype)}}else{try{throw Error()}catch(_){a=_}e()}}catch(_){if(_&&a&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),R=a.stack.split(`
`),w=l.length-1,k=R.length-1;w>=1&&k>=0&&l[w]!==R[k];)k--;for(;w>=1&&k>=0;w--,k--)if(l[w]!==R[k]){if(w!==1||k!==1)do if(w--,k--,k<0||l[w]!==R[k]){var S=`
`+l[w].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,S),S}while(w>=1&&k>=0);break}}}finally{ue=!1,le.current=v,Qt(),Error.prepareStackTrace=g}var L=e?e.displayName||e.name:"",$=L?J(L):"";return typeof e=="function"&&K.set(e,$),$}function er(e,r,o){return Ae(e,!1)}function tr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function X(e,r,o){if(e==null)return"";if(typeof e=="function")return Ae(e,tr(e));if(typeof e=="string")return J(e);switch(e){case C:return J("Suspense");case b:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return er(e.render);case j:return X(e.type,r,o);case F:{var a=e,g=a._payload,v=a._init;try{return X(v(g),r,o)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,Pe={},Ie=P.ReactDebugCurrentFrame;function Q(e){if(e){var r=e._owner,o=X(e.type,e._source,r?r.type:null);Ie.setExtraStackFrame(o)}else Ie.setExtraStackFrame(null)}function rr(e,r,o,a,g){{var v=Function.call.bind(Z);for(var c in e)if(v(e,c)){var l=void 0;try{if(typeof e[c]!="function"){var R=Error((a||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}l=e[c](r,c,a,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(w){l=w}l&&!(l instanceof Error)&&(Q(g),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",o,c,typeof l),Q(null)),l instanceof Error&&!(l.message in Pe)&&(Pe[l.message]=!0,Q(g),d("Failed %s type: %s",o,l.message),Q(null))}}}var nr=Array.isArray;function de(e){return nr(e)}function or(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,o=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function ar(e){try{return De(e),!1}catch{return!0}}function De(e){return""+e}function $e(e){if(ar(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",or(e)),De(e)}var G=P.ReactCurrentOwner,ir={key:!0,ref:!0,__self:!0,__source:!0},ze,Be,fe;fe={};function sr(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function lr(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function cr(e,r){if(typeof e.ref=="string"&&G.current&&r&&G.current.stateNode!==r){var o=I(G.current.type);fe[o]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(G.current.type),e.ref),fe[o]=!0)}}function ur(e,r){{var o=function(){ze||(ze=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function dr(e,r){{var o=function(){Be||(Be=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var fr=function(e,r,o,a,g,v,c){var l={$$typeof:i,type:e,key:r,ref:o,props:c,_owner:v};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:g}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function pr(e,r,o,a,g){{var v,c={},l=null,R=null;o!==void 0&&($e(o),l=""+o),lr(r)&&($e(r.key),l=""+r.key),sr(r)&&(R=r.ref,cr(r,g));for(v in r)Z.call(r,v)&&!ir.hasOwnProperty(v)&&(c[v]=r[v]);if(e&&e.defaultProps){var w=e.defaultProps;for(v in w)c[v]===void 0&&(c[v]=w[v])}if(l||R){var k=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&ur(c,k),R&&dr(c,k)}return fr(e,l,R,g,a,G.current,c)}}var pe=P.ReactCurrentOwner,Le=P.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,o=X(e.type,e._source,r?r.type:null);Le.setExtraStackFrame(o)}else Le.setExtraStackFrame(null)}var ge;ge=!1;function he(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function Ve(){{if(pe.current){var e=I(pe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gr(e){return""}var Ne={};function hr(e){{var r=Ve();if(!r){var o=typeof e=="string"?e:e.displayName||e.name;o&&(r=`

Check the top-level render call using <`+o+">.")}return r}}function We(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=hr(r);if(Ne[o])return;Ne[o]=!0;var a="";e&&e._owner&&e._owner!==pe.current&&(a=" It was passed a child from "+I(e._owner.type)+"."),B(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,a),B(null)}}function Ue(e,r){{if(typeof e!="object")return;if(de(e))for(var o=0;o<e.length;o++){var a=e[o];he(a)&&We(a,r)}else if(he(e))e._store&&(e._store.validated=!0);else if(e){var g=H(e);if(typeof g=="function"&&g!==e.entries)for(var v=g.call(e),c;!(c=v.next()).done;)he(c.value)&&We(c.value,r)}}}function mr(e){{var r=e.type;if(r==null||typeof r=="string")return;var o;if(typeof r=="function")o=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===h||r.$$typeof===j))o=r.propTypes;else return;if(o){var a=I(r);rr(o,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!ge){ge=!0;var g=I(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",g||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vr(e){{for(var r=Object.keys(e.props),o=0;o<r.length;o++){var a=r[o];if(a!=="children"&&a!=="key"){B(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),B(null);break}}e.ref!==null&&(B(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),B(null))}}var Ye={};function Ze(e,r,o,a,g,v){{var c=Jt(e);if(!c){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=gr();R?l+=R:l+=Ve();var w;e===null?w="null":de(e)?w="array":e!==void 0&&e.$$typeof===i?(w="<"+(I(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):w=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",w,l)}var k=pr(e,r,o,g,v);if(k==null)return k;if(c){var S=r.children;if(S!==void 0)if(a)if(de(S)){for(var L=0;L<S.length;L++)Ue(S[L],e);Object.freeze&&Object.freeze(S)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ue(S,e)}if(Z.call(r,"key")){var $=I(e),_=Object.keys(r).filter(function(Cr){return Cr!=="key"}),me=_.length>0?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}";if(!Ye[$+me]){var kr=_.length>0?"{"+_.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,me,$,kr,$),Ye[$+me]=!0}}return e===s?vr(k):mr(k),k}}function xr(e,r,o){return Ze(e,r,o,!0)}function yr(e,r,o){return Ze(e,r,o,!1)}var br=yr,wr=xr;W.Fragment=s,W.jsx=br,W.jsxs=wr}()),W}process.env.NODE_ENV==="production"?q.exports=He():q.exports=Je();var n=q.exports;const ee="localStorageMapOptionsZoomKey",te="localStorageMapOptionsCenterKey",Ke=({defaultZoom:t,btn_map_change_scheme:i,btn_map_change_satellite:f,btn_map_change_hybrid:s,defaultCenter:x,onChangeCoords:m})=>{const p=O.useRef(null),[y,h]=O.useState(JSON.parse(localStorage.getItem(ee)??"0")||t||10),[C,b]=O.useState(JSON.parse(localStorage.getItem(te)??"0")||x||{lat:55.753544,lng:37.621202}),j=[{name:i??"roadmap",mapTypeId:"roadmap"},{name:f??"satellite",mapTypeId:"satellite"},{name:s??"hybrid",mapTypeId:"hybrid"}],[F,A]=O.useState("hybrid");return{zoom:y,onChangeMapZoom:d=>{h(d),localStorage.setItem(ee,JSON.stringify(d))},onChangeMapCenter:d=>{b(d),localStorage.setItem(te,JSON.stringify(d))},mapTypes:j,selectedMapTypeId:F,onSelectMapType:d=>{A(d)},center:C,onChange:d=>{b(d.center),localStorage.setItem(te,JSON.stringify(d.center)),h(d.zoom),localStorage.setItem(ee,JSON.stringify(d.zoom)),m&&m(d)},mapRef:p}},Xe=({bounds:t,nftList:i,zoom:f})=>{const s=i.map(p=>({type:"Feature",properties:{cluster:!1,crimeId:p.id,...p},geometry:{type:"Point",coordinates:[p.lng,p.lat]}})),{clusters:x,supercluster:m}=V({points:s,bounds:t,zoom:f,options:{radius:500,maxZoom:20}});return{clusters:x,supercluster:m}},Qe=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],qe=u.div`
    width: 100%;
    height: 100%;
`;var T=(t=>(t.violGrad="linear-gradient(215.93deg, #B02AD3 15.49%, #366EF9 83.29%)",t.fullDark="#000000",t.darkGrey="#111111",t.textDefault="#565656",t.gray="#A4A4A4",t.gray1="#C1C1C1",t.grayLight="#F0F0F0",t.white="#FFFFFF",t.strokeWhite="rgba(255, 255, 255, 0.15)",t.red="#FF1744",t.pink="#FA17FF",t.violett="#6F17FF",t.cyan="#1758FF",t.blue="#17ACFF",t.lightBlue="#17F1FF",t.green="#17FF82",t.lightGreen="#B5FF17",t.yellow="#FFBE17",t.orange="#FF7917",t.color2="#40c9c1",t))(T||{}),re=(t=>(t.darkShadow="6px 34px 12px rgba(0, 0, 0, 0.4)",t))(re||{}),U=(t=>(t.xs="320px",t.sm="600px",t.md="960px",t.lg="1280px",t.xl="1920px",t))(U||{}),ye=(t=>(t.strokeWhite="8px solid rgba(255, 255, 255, 0.15)",t.grayLight="8px solid #F0F0F0",t))(ye||{});const et=u.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 28px;
    top: calc(50vh - 90px);
    margin: auto 0;
    @media (max-width: ${U.sm}) {
        right: 8px;
    }
`,ne=u.div`
    display: flex;
    flex-direction: column;
    background: ${T.darkGrey};
    border: ${ye.strokeWhite};
    border-radius: 30px;
    margin: 2px 0;
    button {
        :active {
            background-color: var(--main-color);
        }
    }
`,be=u.div`
    cursor: pointer;
    height: 50px;
    width: 40px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`,tt=u(be)`
    border-radius: 25px 25px 0 0;
`,rt=u(be)`
    border-radius: 0 0 25px 25px;
`,nt=u.div`
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
`,ot=u.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    background: none;
    background: ${t=>t.isActiveButton?"var(--main-color)":T.darkGrey};
    border: none;
    border-radius: 25px;
`,at="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%208H15'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2015V1'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",it="data:image/svg+xml,%3csvg%20width='16'%20height='2'%20viewBox='0%200%2016%202'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201H15'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",st=({onChangeMapZoom:t,zoom:i})=>{const f=()=>{i&&t(i+1)},s=()=>{i&&t(i-1)};return n.jsxs(ne,{className:"zoom-buttons",children:[n.jsx(tt,{onClick:f,children:n.jsx("img",{src:at})}),n.jsx(rt,{onClick:s,children:n.jsx("img",{src:it})})]})},lt=u.div`
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
`,oe=({style:t})=>n.jsxs(lt,{className:"lds-spinner",style:t,children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),ct="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2018.5C15.1421%2018.5%2018.5%2015.1421%2018.5%2011C18.5%206.85786%2015.1421%203.5%2011%203.5C6.85786%203.5%203.5%206.85786%203.5%2011C3.5%2015.1421%206.85786%2018.5%2011%2018.5Z'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2014C12.6569%2014%2014%2012.6569%2014%2011C14%209.3431%2012.6569%208%2011%208C9.3431%208%208%209.3431%208%2011C8%2012.6569%209.3431%2014%2011%2014Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%203V1'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%2011H1'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2019V21'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19%2011H21'%20stroke='%23A4A4A4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ut=({setCenter:t,loading:i})=>{const f=()=>{navigator.geolocation.getCurrentPosition(function(s){t({lat:s.coords.latitude,lng:s.coords.longitude})})};return n.jsx(ne,{className:"geolocation-button",children:n.jsx(nt,{onClick:f,children:i?n.jsx(oe,{style:{transform:"scale(.35)",position:"absolute"}}):n.jsx("img",{src:ct})})})},dt="data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.0132%2010.8333H16.0165C15.6612%2010.8333%2015.3665%2010.5387%2015.3665%2010.1833V9.53333C15.3665%206.656%2014.3438%205.63333%2011.4665%205.63333H10.8165C10.4612%205.63333%2010.1665%205.33867%2010.1665%204.98333V3.98667C10.1665%201.23067%2011.3972%200%2014.1532%200H17.0132C19.7692%200%2020.9998%201.23067%2020.9998%203.98667V6.84667C20.9998%209.60267%2019.7692%2010.8333%2017.0132%2010.8333ZM16.4165%209.53333H17.0132C19.0498%209.53333%2019.6998%208.88333%2019.6998%206.84667V3.98667C19.6998%201.95%2019.0498%201.3%2017.0132%201.3H14.1532C12.1165%201.3%2011.4665%201.95%2011.4665%203.98667V4.58333C14.9998%205.23333%2016.0165%206.25%2016.4165%209.53333Z'%20fill='%23A4A4A4'/%3e%3cpath%20d='M6.25%2020H10.75C14.5%2020%2016%2018.5%2016%2014.75V10.25C16%206.5%2014.5%205%2010.75%205H6.25C2.5%205%201%206.5%201%2010.25V14.75C1%2018.5%202.5%2020%206.25%2020Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ft=u.div`
    position: relative;
    //width: 380px;
    max-width: calc(100vw - 80px);
    height: auto;
    box-sizing: border-box;
    padding: 56px 30px 18px 30px;
    background-color: ${T.white};
    border-radius: 20px;
    z-index: 100;
    @media (max-width: ${U.sm}) {
        max-width: calc(100vw - 10px);
    }
`,pt=u.div`
    position: absolute;
    right: 25px;
    top: 25px;
    cursor: pointer;
`,gt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.16992%2017.1698L17.1699%201.16992'%20stroke='%23565656'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.1699%2017.1698L1.16992%201.16992'%20stroke='%23565656'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ht=t=>{const i=O.useRef(null);return O.useEffect(()=>{const f=s=>{i.current&&!i.current.contains(s.target)&&t()};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[t]),i},mt=({children:t,isIconClose:i,style:f,isCloseOutsideClick:s=!0,onCloseModal:x=()=>{},isOpenModal:m})=>{const p=()=>{x()},y=ht(()=>{s&&p()});return onpopstate=function(h){m&&(h.preventDefault(),h.stopPropagation(),p())},n.jsxs(ft,{ref:y,style:f,children:[i&&n.jsx(pt,{onClick:p,children:n.jsx("img",{src:gt})}),t]})},vt=u.div`
    z-index: 100;
`,xt=({children:t})=>n.jsx(vt,{id:"modal",children:t}),yt=({children:t,isIconClose:i,style:f,isCloseOutsideClick:s=!0,onCloseModal:x=()=>{},isOpenModal:m})=>m?n.jsx(mt,{isIconClose:i,style:f,isCloseOutsideClick:s,onCloseModal:x,isOpenModal:m,children:n.jsx(xt,{children:t})}):n.jsx(n.Fragment,{}),bt=u.div`
    border-radius: 20px;
    width: auto;
    max-width: 400px;
    position: absolute;
    right: 56px;
    top: -8px;
    @media (max-width: ${U.sm}) {
        position: fixed;
        width: calc(100vw - 20px);
        top: 100px;
        right: 10px;
        left: 10px;
    }
`,wt=u.img`
    width: 12px;
    height: 8px;
    position: absolute;
    top: 34px;
    left: calc(100% - 3px);
    transform: rotate(90deg);
    display: ${t=>t.isOpenModal?"block":"none"};
    @media (max-width: ${U.sm}) {
        display: none;
    }
`,kt=u.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${T.textDefault};
    margin: 0 0 10px 0;
`,Ct=u.div`
    display: flex;
    margin: 0 -1px;
`,jt=u.div`
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
    background-color: ${t=>t.isSelected?"var(--main-color)":T.grayLight};
    color: ${t=>t.isSelected?T.white:T.darkGrey};
    width: 100%;
    cursor: pointer;
`,Tt="data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.08571%202.5098C8.29714%200.915031%207.18286%204.21128e-07%206%205.24537e-07C4.81714%206.27945e-07%203.70286%200.915031%202.91429%202.5098L0.342856%207.73856C0.257142%207.89542%200.137143%208%200%208L12%208C11.9143%207.97386%2011.7086%207.84314%2011.6571%207.73856L9.08571%202.5098Z'%20fill='white'/%3e%3c/svg%3e",Rt=({onCloseSelectModal:t,isOpenModal:i,mapTypes:f,selectedMapTypeId:s,onSelectMapType:x,txt_map_change_map_type_view:m})=>{const p=()=>{t()};return n.jsxs(bt,{children:[n.jsx(yt,{isOpenModal:i,style:{width:"auto",padding:"21px 15px"},onCloseModal:p,children:n.jsxs(n.Fragment,{children:[n.jsx(kt,{children:m??"Map type view"}),n.jsx(Ct,{children:f.map((y,h)=>n.jsx(jt,{isSelected:s===y.mapTypeId,onClick:()=>x(y.mapTypeId),children:y.name},`${y.mapTypeId}-${h}`))})]})}),n.jsx(wt,{src:Tt,isOpenModal:i})]})},Et=({mapTypes:t,selectedMapTypeId:i,onSelectMapType:f})=>{const[s,x]=O.useState(!1),m=()=>{x(!1)},p=()=>{x(y=>!y)};return n.jsxs(ne,{onClick:p,className:"map-type-button",children:[n.jsx(ot,{isActiveButton:s,children:n.jsx("img",{src:dt})}),n.jsx(Rt,{mapTypes:t,isOpenModal:s,onCloseSelectModal:m,selectedMapTypeId:i,onSelectMapType:f})]})};u.div`
    width: 100vw;
    height: 100vh;
`;const _t=u.div`
    background: ${T.fullDark};
    box-shadow: ${re.darkShadow};
    border-radius: 10px;
    padding: 4px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: 15px;
    line-height: 18px;
    color: ${T.white};
    transform: translate(calc(-50% + 6px), calc(-100% - 8px));
    z-index: 5;
`,St=u.div`
    height: 29px;
`,Mt=u.img`
    background-size: contain;
    background-position: center;
    width: 36px;
    height: 27px;
    border-radius: 4px;
    margin: 1px;
    z-index: 1;
    -webkit-filter: ${t=>t.isMonochrome?"grayscale(100%)":"none"}; /* Safari 6.0 - 9.0 */
    filter: ${t=>t.isMonochrome?"grayscale(100%)":"none"};
`,Ot=u.span`
    margin: auto 9px;
    font-family: RobotoMedium;
`,Ft=u.div`
    width: 14px;
    height: 14px;
    background-color: var(--main-color);
    border-radius: 14px;
`,At=u.div`
    width: 40px;
    height: 40px;
    background-color: var(--main-color) 66;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`,Pt=u.div`
    width: ${t=>t.width?t.width:120}px;
    height: ${t=>t.width?t.width:120}px;
    background-color: var(--main-color) 26;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,It=u.div`
    background-color: none;
    padding: 6px;
    border: 1px solid var(--main-color);
    border-radius: 100%;
    position: absolute;
    transform: translate(calc(-50% + 6px), calc(-50% - 37px));
    display: flex;
    justify-content: center;
    align-items: center;
`,we=u.img`
    width: 12px;
    height: 8px;
    position: absolute;
    top: -8px;
    z-index: 1;
`,ke="data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.91429%205.4902C3.70286%207.08497%204.81714%208%206%208C7.18286%208%208.29714%207.08497%209.08571%205.4902L11.6571%200.261439C11.7429%200.104576%2011.8629%200%2012%200H0C0.0857143%200.0261438%200.291428%200.156864%200.342857%200.261439L2.91429%205.4902Z'%20fill='black'/%3e%3c/svg%3e",Dt=({lat:t,lng:i,cluster:f,clusterLeavs:s,pointCount:x,zoom:m,onChangeMapCenter:p,onChangeMapZoom:y})=>{const h=()=>{m&&(p({lat:t,lng:i}),y(m+2))};return n.jsxs(n.Fragment,{children:[n.jsxs(_t,{className:"cluster-marker",onClick:h,children:[s.map((C,b)=>b<3||s.length<=3?n.jsxs(St,{children:[n.jsx(oe,{style:{transform:"scale(0.2)",position:"absolute",left:`${b*38-16}px`,top:"-20px",zIndex:"-1"}}),n.jsx(Mt,{src:`${C.properties.previewUrl??C.properties.imageUrl}`,onError:({currentTarget:j})=>{j.onerror=null,j.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}})]},`cluster-${f.id}-crime-${C.properties.id}-${b}`):n.jsx("div",{},`${f.id}-crime-${C.properties.id}-${b}`)),s.length<=3?n.jsx(n.Fragment,{}):n.jsxs(Ot,{children:["+",x-3]})]}),n.jsx(we,{src:ke}),n.jsx(It,{children:n.jsx(Pt,{width:s.length>8?184:120,children:n.jsx(At,{children:n.jsx(Ft,{})})})})]})},$t=u.div`
    background: ${T.fullDark};
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
`,zt=u.img`
    position: relative;
    background-size: contain;
    background-position: center;
    height: 52px;
    border-radius: 4px;
    box-shadow: ${re.darkShadow};
    z-index: 2;
    -webkit-filter: ${t=>t.isMonochrome?"grayscale(100%)":"none"}; /* Safari 6.0 - 9.0 */
    filter: ${t=>t.isMonochrome?"grayscale(100%)":"none"};
    max-width: 100% !important;
`,Bt=u.span`
    position: absolute;
    bottom: 0;
    right: -10px;
    color: ${T.white};
    background: ${T.fullDark};
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
`,Lt=u.div`
    position: absolute;
    top: -5px;
    right: -10px;
    background: url(${t=>t.fileUrl});
    background-size: contain;
    border: 2px solid ${T.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
    z-index: 3;
    & svg {
        fill: var(--main-color);
    }
`;u.div`
    position: absolute;
    top: -5px;
    right: -10px;
    background: #fff;
    border: 2px solid ${T.fullDark};
    border-radius: 14px;
    width: 26px;
    height: 26px;
`,u.img`
    border-radius: 14px;
    width: 18px;
    height: 18px;
    z-index: 3;
    padding: 4px 0 0 4px;
`;const Vt=t=>t.ownerAvatarUrl?n.jsx(Lt,{fileUrl:t.ownerAvatarUrl}):n.jsx(n.Fragment,{}),Nt=({cluster:t,handleClickNft:i=()=>{}})=>{const[f,s]=O.useState(!0),x=p=>{i(p)},m=()=>{s(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs($t,{onClick:()=>x(t.id),children:[f&&n.jsx(oe,{style:{transform:"scale(0.3)",position:"absolute",left:"0",top:"-10px",zIndex:1}}),n.jsx(zt,{src:`${t.previewUrl??t.imageUrl}`,onLoad:m,onError:({currentTarget:p})=>{p.onerror=null,p.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}}),Vt(t),t.name?n.jsx(Bt,{children:t.name}):n.jsx("div",{})]}),n.jsx(we,{src:ke})]})},Wt=({googleMapReactProps:t,loadingMap:i,onChangeMapZoom:f,mapTypes:s,selectedMapTypeId:x,onSelectMapType:m,onChange:p,nftList:y=[],bounds:h,mapRef:C,onClickMarker:b})=>{const j=O.useRef(),{clusters:F,supercluster:A}=Xe({nftList:y,zoom:t.zoom??10,bounds:h}),z=E=>{C.current.setCenter(E)};return n.jsxs(qe,{className:"g-map__ar-components-kit",children:[n.jsx(Ge,{...t,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:({map:E})=>{C.current=E},options:{styles:Qe,scaleControl:!1,zoomControl:!1,mapTypeId:x,clickableIcons:!1,gestureHandling:"greedy",fullscreenControl:!1,disableDefaultUI:!0,...t.options},onChange:p,children:F.map((E,H)=>{const[P,d]=E.geometry.coordinates,{cluster:ae,point_count:ie}=E.properties;if(ae&&A){const se=A==null?void 0:A.getLeaves(Number(E.id));return n.jsx(Dt,{lat:d,lng:P,clusterLeavs:se,cluster:E,pointCount:ie,zoom:t.zoom,mapRef:C,aimRef:j,onChangeMapZoom:f,onChangeMapCenter:z},`cluster-${E.id}-${H}`)}else return n.jsx(Nt,{lat:d,lng:P,handleClickNft:b,cluster:E},`crime-${E.properties.crimeId}`)})}),n.jsxs(et,{className:"map-options",children:[n.jsx(Et,{mapTypes:s,selectedMapTypeId:x,onSelectMapType:m}),n.jsx(st,{zoom:t.zoom,onChangeMapZoom:f}),n.jsx(ut,{setCenter:z,loading:i})]})]})},Ut=t=>{const{onChangeMapZoom:i,onChangeMapCenter:f,zoom:s,mapTypes:x,selectedMapTypeId:m,onSelectMapType:p,center:y,onChange:h,mapRef:C}=Ke({defaultZoom:t.googleMapReact.zoom??t.googleMapReact.defaultZoom,defaultCenter:t.googleMapReact.defaultCenter??t.googleMapReact.defaultCenter,onChangeCoords:t.onChangeCoords});return n.jsx(Wt,{googleMapReactProps:{...t.googleMapReact,zoom:t.googleMapReact.zoom??s,center:t.googleMapReact.center??y},loadingMap:t.loadingMap,onChangeMapZoom:i,onChangeMapCenter:f,mapTypes:x,selectedMapTypeId:m,onSelectMapType:p,onChange:h,nftList:t.nftList,bounds:t.bounds,mapRef:C,onClickMarker:t.onClickMarker})},Yt=()=>n.jsx("div",{children:"NFT VIEWER"});M.MapComponent=Ut,M.NftViewerComponent=Yt,Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});
