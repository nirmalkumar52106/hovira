var af=Object.defineProperty;var of=(i,o,s)=>o in i?af(i,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[o]=s;var gn=(i,o,s)=>of(i,typeof o!="symbol"?o+"":o,s);function lf(i,o){for(var s=0;s<o.length;s++){const u=o[s];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in i)){const m=Object.getOwnPropertyDescriptor(u,p);m&&Object.defineProperty(i,p,m.get?m:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function s(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(p){if(p.ep)return;p.ep=!0;const m=s(p);fetch(p.href,m)}})();function ir(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ns={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function sf(){if(Mp)return we;Mp=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=E&&N[E]||N["@@iterator"],typeof N=="function"?N:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,R={};function z(N,F,me){this.props=N,this.context=F,this.refs=R,this.updater=me||O}z.prototype.isReactComponent={},z.prototype.setState=function(N,F){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,F,"setState")},z.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=z.prototype;function U(N,F,me){this.props=N,this.context=F,this.refs=R,this.updater=me||O}var P=U.prototype=new D;P.constructor=U,I(P,z.prototype),P.isPureReactComponent=!0;var W=Array.isArray,ee=Object.prototype.hasOwnProperty,ie={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function V(N,F,me){var ve,ke={},$=null,te=null;if(F!=null)for(ve in F.ref!==void 0&&(te=F.ref),F.key!==void 0&&($=""+F.key),F)ee.call(F,ve)&&!ge.hasOwnProperty(ve)&&(ke[ve]=F[ve]);var Z=arguments.length-2;if(Z===1)ke.children=me;else if(1<Z){for(var he=Array(Z),Ae=0;Ae<Z;Ae++)he[Ae]=arguments[Ae+2];ke.children=he}if(N&&N.defaultProps)for(ve in Z=N.defaultProps,Z)ke[ve]===void 0&&(ke[ve]=Z[ve]);return{$$typeof:i,type:N,key:$,ref:te,props:ke,_owner:ie.current}}function oe(N,F){return{$$typeof:i,type:N.type,key:F,ref:N.ref,props:N.props,_owner:N._owner}}function M(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function se(N){var F={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(me){return F[me]})}var ze=/\/+/g;function Ee(N,F){return typeof N=="object"&&N!==null&&N.key!=null?se(""+N.key):F.toString(36)}function Re(N,F,me,ve,ke){var $=typeof N;($==="undefined"||$==="boolean")&&(N=null);var te=!1;if(N===null)te=!0;else switch($){case"string":case"number":te=!0;break;case"object":switch(N.$$typeof){case i:case o:te=!0}}if(te)return te=N,ke=ke(te),N=ve===""?"."+Ee(te,0):ve,W(ke)?(me="",N!=null&&(me=N.replace(ze,"$&/")+"/"),Re(ke,F,me,"",function(Ae){return Ae})):ke!=null&&(M(ke)&&(ke=oe(ke,me+(!ke.key||te&&te.key===ke.key?"":(""+ke.key).replace(ze,"$&/")+"/")+N)),F.push(ke)),1;if(te=0,ve=ve===""?".":ve+":",W(N))for(var Z=0;Z<N.length;Z++){$=N[Z];var he=ve+Ee($,Z);te+=Re($,F,me,he,ke)}else if(he=S(N),typeof he=="function")for(N=he.call(N),Z=0;!($=N.next()).done;)$=$.value,he=ve+Ee($,Z++),te+=Re($,F,me,he,ke);else if($==="object")throw F=String(N),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return te}function q(N,F,me){if(N==null)return N;var ve=[],ke=0;return Re(N,ve,"","",function($){return F.call(me,$,ke++)}),ve}function ye(N){if(N._status===-1){var F=N._result;F=F(),F.then(function(me){(N._status===0||N._status===-1)&&(N._status=1,N._result=me)},function(me){(N._status===0||N._status===-1)&&(N._status=2,N._result=me)}),N._status===-1&&(N._status=0,N._result=F)}if(N._status===1)return N._result.default;throw N._result}var X={current:null},j={transition:null},L={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:j,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:q,forEach:function(N,F,me){q(N,function(){F.apply(this,arguments)},me)},count:function(N){var F=0;return q(N,function(){F++}),F},toArray:function(N){return q(N,function(F){return F})||[]},only:function(N){if(!M(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},we.Component=z,we.Fragment=s,we.Profiler=p,we.PureComponent=U,we.StrictMode=u,we.Suspense=h,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,we.act=B,we.cloneElement=function(N,F,me){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ve=I({},N.props),ke=N.key,$=N.ref,te=N._owner;if(F!=null){if(F.ref!==void 0&&($=F.ref,te=ie.current),F.key!==void 0&&(ke=""+F.key),N.type&&N.type.defaultProps)var Z=N.type.defaultProps;for(he in F)ee.call(F,he)&&!ge.hasOwnProperty(he)&&(ve[he]=F[he]===void 0&&Z!==void 0?Z[he]:F[he])}var he=arguments.length-2;if(he===1)ve.children=me;else if(1<he){Z=Array(he);for(var Ae=0;Ae<he;Ae++)Z[Ae]=arguments[Ae+2];ve.children=Z}return{$$typeof:i,type:N.type,key:ke,ref:$,props:ve,_owner:te}},we.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:m,_context:N},N.Consumer=N},we.createElement=V,we.createFactory=function(N){var F=V.bind(null,N);return F.type=N,F},we.createRef=function(){return{current:null}},we.forwardRef=function(N){return{$$typeof:g,render:N}},we.isValidElement=M,we.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ye}},we.memo=function(N,F){return{$$typeof:v,type:N,compare:F===void 0?null:F}},we.startTransition=function(N){var F=j.transition;j.transition={};try{N()}finally{j.transition=F}},we.unstable_act=B,we.useCallback=function(N,F){return X.current.useCallback(N,F)},we.useContext=function(N){return X.current.useContext(N)},we.useDebugValue=function(){},we.useDeferredValue=function(N){return X.current.useDeferredValue(N)},we.useEffect=function(N,F){return X.current.useEffect(N,F)},we.useId=function(){return X.current.useId()},we.useImperativeHandle=function(N,F,me){return X.current.useImperativeHandle(N,F,me)},we.useInsertionEffect=function(N,F){return X.current.useInsertionEffect(N,F)},we.useLayoutEffect=function(N,F){return X.current.useLayoutEffect(N,F)},we.useMemo=function(N,F){return X.current.useMemo(N,F)},we.useReducer=function(N,F,me){return X.current.useReducer(N,F,me)},we.useRef=function(N){return X.current.useRef(N)},we.useState=function(N){return X.current.useState(N)},we.useSyncExternalStore=function(N,F,me){return X.current.useSyncExternalStore(N,F,me)},we.useTransition=function(){return X.current.useTransition()},we.version="18.3.1",we}var _p;function Hs(){return _p||(_p=1,ns.exports=sf()),ns.exports}var b=Hs();const n=ir(b),cf=lf({__proto__:null,default:n},[b]);var Ko={},rs={exports:{}},kt={},as={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function uf(){return jp||(jp=1,(function(i){function o(j,L){var B=j.length;j.push(L);e:for(;0<B;){var N=B-1>>>1,F=j[N];if(0<p(F,L))j[N]=L,j[B]=F,B=N;else break e}}function s(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var L=j[0],B=j.pop();if(B!==L){j[0]=B;e:for(var N=0,F=j.length,me=F>>>1;N<me;){var ve=2*(N+1)-1,ke=j[ve],$=ve+1,te=j[$];if(0>p(ke,B))$<F&&0>p(te,ke)?(j[N]=te,j[$]=B,N=$):(j[N]=ke,j[ve]=B,N=ve);else if($<F&&0>p(te,B))j[N]=te,j[$]=B,N=$;else break e}}return L}function p(j,L){var B=j.sortIndex-L.sortIndex;return B!==0?B:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var f=Date,g=f.now();i.unstable_now=function(){return f.now()-g}}var h=[],v=[],y=1,E=null,S=3,O=!1,I=!1,R=!1,z=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(j){for(var L=s(v);L!==null;){if(L.callback===null)u(v);else if(L.startTime<=j)u(v),L.sortIndex=L.expirationTime,o(h,L);else break;L=s(v)}}function W(j){if(R=!1,P(j),!I)if(s(h)!==null)I=!0,ye(ee);else{var L=s(v);L!==null&&X(W,L.startTime-j)}}function ee(j,L){I=!1,R&&(R=!1,D(V),V=-1),O=!0;var B=S;try{for(P(L),E=s(h);E!==null&&(!(E.expirationTime>L)||j&&!se());){var N=E.callback;if(typeof N=="function"){E.callback=null,S=E.priorityLevel;var F=N(E.expirationTime<=L);L=i.unstable_now(),typeof F=="function"?E.callback=F:E===s(h)&&u(h),P(L)}else u(h);E=s(h)}if(E!==null)var me=!0;else{var ve=s(v);ve!==null&&X(W,ve.startTime-L),me=!1}return me}finally{E=null,S=B,O=!1}}var ie=!1,ge=null,V=-1,oe=5,M=-1;function se(){return!(i.unstable_now()-M<oe)}function ze(){if(ge!==null){var j=i.unstable_now();M=j;var L=!0;try{L=ge(!0,j)}finally{L?Ee():(ie=!1,ge=null)}}else ie=!1}var Ee;if(typeof U=="function")Ee=function(){U(ze)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,q=Re.port2;Re.port1.onmessage=ze,Ee=function(){q.postMessage(null)}}else Ee=function(){z(ze,0)};function ye(j){ge=j,ie||(ie=!0,Ee())}function X(j,L){V=z(function(){j(i.unstable_now())},L)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){I||O||(I=!0,ye(ee))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return s(h)},i.unstable_next=function(j){switch(S){case 1:case 2:case 3:var L=3;break;default:L=S}var B=S;S=L;try{return j()}finally{S=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var B=S;S=j;try{return L()}finally{S=B}},i.unstable_scheduleCallback=function(j,L,B){var N=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?N+B:N):B=N,j){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,j={id:y++,callback:L,priorityLevel:j,startTime:B,expirationTime:F,sortIndex:-1},B>N?(j.sortIndex=B,o(v,j),s(h)===null&&j===s(v)&&(R?(D(V),V=-1):R=!0,X(W,B-N))):(j.sortIndex=F,o(h,j),I||O||(I=!0,ye(ee))),j},i.unstable_shouldYield=se,i.unstable_wrapCallback=function(j){var L=S;return function(){var B=S;S=L;try{return j.apply(this,arguments)}finally{S=B}}}})(os)),os}var Bp;function pf(){return Bp||(Bp=1,as.exports=uf()),as.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function df(){if(Hp)return kt;Hp=1;var i=Hs(),o=pf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function m(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(p[e]=t,e=0;e<t.length;e++)u.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function S(e){return h.call(E,e)?!0:h.call(y,e)?!1:v.test(e)?E[e]=!0:(y[e]=!0,!1)}function O(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,a){if(t===null||typeof t>"u"||O(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,r,a,l,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,U);z[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,U);z[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,U);z[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function P(e,t,r,a){var l=z.hasOwnProperty(t)?z[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,l,a)&&(r=null),a||l===null?S(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var W=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),se=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),j=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,N;function F(e){if(N===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return`
`+N+e}var me=!1;function ve(e,t){if(!e||me)return"";me=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var a=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){a=A}e.call(t.prototype)}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var l=A.stack.split(`
`),c=a.stack.split(`
`),d=l.length-1,x=c.length-1;1<=d&&0<=x&&l[d]!==c[x];)x--;for(;1<=d&&0<=x;d--,x--)if(l[d]!==c[x]){if(d!==1||x!==1)do if(d--,x--,0>x||l[d]!==c[x]){var w=`
`+l[d].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=d&&0<=x);break}}}finally{me=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function ke(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ge:return"Fragment";case ie:return"Portal";case oe:return"Profiler";case V:return"StrictMode";case Ee:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case M:return(e._context.displayName||"Context")+".Provider";case ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=he(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ne(e){e._valueTracker||(e._valueTracker=Ae(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=he(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function ce(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Be(e,t){var r=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ke(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Z(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lr(e,t){t=t.checked,t!=null&&P(e,"checked",t,!1)}function Ot(e,t){lr(e,t);var r=Z(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lt(e,t.type,r):t.hasOwnProperty("defaultValue")&&lt(e,t.type,Z(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pe(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function lt(e,t,r){(t!=="number"||ce(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var et=Array.isArray;function dt(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Z(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function sr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(et(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Z(r)}}function Gs(e,t){var r=Z(t.value),a=Z(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,Xs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sm=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function Zs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function Js(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=Zs(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var cm=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hi(e,t){if(t){if(cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,ur=null,pr=null;function ec(e){if(e=fa(e)){if(typeof xi!="function")throw Error(s(280));var t=e.stateNode;t&&(t=uo(t),xi(e.stateNode,e.type,t))}}function tc(e){ur?pr?pr.push(e):pr=[e]:ur=e}function nc(){if(ur){var e=ur,t=pr;if(pr=ur=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function rc(e,t){return e(t)}function ac(){}var yi=!1;function oc(e,t,r){if(yi)return e(t,r);yi=!0;try{return rc(e,t,r)}finally{yi=!1,(ur!==null||pr!==null)&&(ac(),nc())}}function Gr(e,t){var r=e.stateNode;if(r===null)return null;var a=uo(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Ei=!1;if(g)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ei=!1}function um(e,t,r,a,l,c,d,x,w){var A=Array.prototype.slice.call(arguments,3);try{t.apply(r,A)}catch(H){this.onError(H)}}var Kr=!1,Ua=null,Va=!1,bi=null,pm={onError:function(e){Kr=!0,Ua=e}};function dm(e,t,r,a,l,c,d,x,w){Kr=!1,Ua=null,um.apply(pm,arguments)}function mm(e,t,r,a,l,c,d,x,w){if(dm.apply(this,arguments),Kr){if(Kr){var A=Ua;Kr=!1,Ua=null}else throw Error(s(198));Va||(Va=!0,bi=A)}}function $n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if($n(e)!==e)throw Error(s(188))}function hm(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===r)return lc(l),e;if(c===a)return lc(l),t;c=c.sibling}throw Error(s(188))}if(r.return!==a.return)r=l,a=c;else{for(var d=!1,x=l.child;x;){if(x===r){d=!0,r=l,a=c;break}if(x===a){d=!0,a=l,r=c;break}x=x.sibling}if(!d){for(x=c.child;x;){if(x===r){d=!0,r=c,a=l;break}if(x===a){d=!0,a=c,r=l;break}x=x.sibling}if(!d)throw Error(s(189))}}if(r.alternate!==a)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function sc(e){return e=hm(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var uc=o.unstable_scheduleCallback,pc=o.unstable_cancelCallback,fm=o.unstable_shouldYield,gm=o.unstable_requestPaint,Ye=o.unstable_now,vm=o.unstable_getCurrentPriorityLevel,wi=o.unstable_ImmediatePriority,dc=o.unstable_UserBlockingPriority,$a=o.unstable_NormalPriority,xm=o.unstable_LowPriority,mc=o.unstable_IdlePriority,Ya=null,Xt=null;function ym(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:wm,Em=Math.log,bm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(Em(e)/bm|0)|0}var Wa=64,qa=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var x=d&~l;x!==0?a=Xr(x):(c&=d,c!==0&&(a=Xr(c)))}else d=r&~l,d!==0?a=Xr(d):c!==0&&(a=Xr(c));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,c=t&-t,l>=c||l===16&&(c&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Ht(t),l=1<<r,a|=e[r],t&=~l;return a}function km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-Ht(c),x=1<<d,w=l[d];w===-1?((x&r)===0||(x&a)!==0)&&(l[d]=km(x,t)):w<=t&&(e.expiredLanes|=x),c&=~x}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hc(){var e=Wa;return Wa<<=1,(Wa&4194240)===0&&(Wa=64),e}function Ni(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Zr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=r}function zm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ht(r),c=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~c}}function zi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Ht(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var Oe=0;function fc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gc,Si,vc,xc,yc,Ci=!1,Qa=[],kn=null,Nn=null,zn=null,Jr=new Map,ea=new Map,Sn=[],Sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function ta(e,t,r,a,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},t!==null&&(t=fa(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cm(e,t,r,a,l){switch(t){case"focusin":return kn=ta(kn,e,t,r,a,l),!0;case"dragenter":return Nn=ta(Nn,e,t,r,a,l),!0;case"mouseover":return zn=ta(zn,e,t,r,a,l),!0;case"pointerover":var c=l.pointerId;return Jr.set(c,ta(Jr.get(c)||null,e,t,r,a,l)),!0;case"gotpointercapture":return c=l.pointerId,ea.set(c,ta(ea.get(c)||null,e,t,r,a,l)),!0}return!1}function bc(e){var t=Yn(e.target);if(t!==null){var r=$n(t);if(r!==null){if(t=r.tag,t===13){if(t=ic(r),t!==null){e.blockedOn=t,yc(e.priority,function(){vc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);gi=a,r.target.dispatchEvent(a),gi=null}else return t=fa(r),t!==null&&Si(t),e.blockedOn=r,!1;t.shift()}return!0}function wc(e,t,r){Ka(e)&&r.delete(t)}function Tm(){Ci=!1,kn!==null&&Ka(kn)&&(kn=null),Nn!==null&&Ka(Nn)&&(Nn=null),zn!==null&&Ka(zn)&&(zn=null),Jr.forEach(wc),ea.forEach(wc)}function na(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Tm)))}function ra(e){function t(l){return na(l,e)}if(0<Qa.length){na(Qa[0],e);for(var r=1;r<Qa.length;r++){var a=Qa[r];a.blockedOn===e&&(a.blockedOn=null)}}for(kn!==null&&na(kn,e),Nn!==null&&na(Nn,e),zn!==null&&na(zn,e),Jr.forEach(t),ea.forEach(t),r=0;r<Sn.length;r++)a=Sn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Sn.length&&(r=Sn[0],r.blockedOn===null);)bc(r),r.blockedOn===null&&Sn.shift()}var dr=W.ReactCurrentBatchConfig,Xa=!0;function Am(e,t,r,a){var l=Oe,c=dr.transition;dr.transition=null;try{Oe=1,Ti(e,t,r,a)}finally{Oe=l,dr.transition=c}}function Om(e,t,r,a){var l=Oe,c=dr.transition;dr.transition=null;try{Oe=4,Ti(e,t,r,a)}finally{Oe=l,dr.transition=c}}function Ti(e,t,r,a){if(Xa){var l=Ai(e,t,r,a);if(l===null)Wi(e,t,a,Za,r),Ec(e,a);else if(Cm(l,e,t,r,a))a.stopPropagation();else if(Ec(e,a),t&4&&-1<Sm.indexOf(e)){for(;l!==null;){var c=fa(l);if(c!==null&&gc(c),c=Ai(e,t,r,a),c===null&&Wi(e,t,a,Za,r),c===l)break;l=c}l!==null&&a.stopPropagation()}else Wi(e,t,a,null,r)}}var Za=null;function Ai(e,t,r,a){if(Za=null,e=vi(a),e=Yn(e),e!==null)if(t=$n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ic(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Za=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vm()){case wi:return 1;case dc:return 4;case $a:case xm:return 16;case mc:return 536870912;default:return 16}default:return 16}}var Cn=null,Oi=null,Ja=null;function Nc(){if(Ja)return Ja;var e,t=Oi,r=t.length,a,l="value"in Cn?Cn.value:Cn.textContent,c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var d=r-e;for(a=1;a<=d&&t[r-a]===l[c-a];a++);return Ja=l.slice(e,1<a?1-a:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function zc(){return!1}function St(e){function t(r,a,l,c,d){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?to:zc,this.isPropagationStopped=zc,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=St(mr),aa=B({},mr,{view:0,detail:0}),Rm=St(aa),Pi,Ii,oa,no=B({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(Pi=e.screenX-oa.screenX,Ii=e.screenY-oa.screenY):Ii=Pi=0,oa=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),Sc=St(no),Pm=B({},no,{dataTransfer:0}),Im=St(Pm),Dm=B({},aa,{relatedTarget:0}),Di=St(Dm),Fm=B({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=St(Fm),Mm=B({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=St(Mm),jm=B({},mr,{data:0}),Cc=St(jm),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Um[e])?!!t[e]:!1}function Fi(){return Vm}var $m=B({},aa,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=St($m),Wm=B({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=St(Wm),qm=B({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Gm=St(qm),Qm=B({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=St(Qm),Xm=B({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zm=St(Xm),Jm=[9,13,27,32],Li=g&&"CompositionEvent"in window,ia=null;g&&"documentMode"in document&&(ia=document.documentMode);var eh=g&&"TextEvent"in window&&!ia,Ac=g&&(!Li||ia&&8<ia&&11>=ia),Oc=" ",Rc=!1;function Pc(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function th(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(Rc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Rc?null:e;default:return null}}function nh(e,t){if(hr)return e==="compositionend"||!Li&&Pc(e,t)?(e=Nc(),Ja=Oi=Cn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Fc(e,t,r,a){tc(a),t=lo(t,"onChange"),0<t.length&&(r=new Ri("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var la=null,sa=null;function ah(e){Jc(e,0)}function ro(e){var t=yr(e);if(Q(t))return e}function oh(e,t){if(e==="change")return t}var Lc=!1;if(g){var Mi;if(g){var _i="oninput"in document;if(!_i){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),_i=typeof Mc.oninput=="function"}Mi=_i}else Mi=!1;Lc=Mi&&(!document.documentMode||9<document.documentMode)}function _c(){la&&(la.detachEvent("onpropertychange",jc),sa=la=null)}function jc(e){if(e.propertyName==="value"&&ro(sa)){var t=[];Fc(t,sa,e,vi(e)),oc(ah,t)}}function ih(e,t,r){e==="focusin"?(_c(),la=t,sa=r,la.attachEvent("onpropertychange",jc)):e==="focusout"&&_c()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(sa)}function sh(e,t){if(e==="click")return ro(t)}function ch(e,t){if(e==="input"||e==="change")return ro(t)}function uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:uh;function ca(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!h.call(t,l)||!Ut(e[l],t[l]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var r=Bc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bc(r)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=ce();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ce(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ph(e){var t=Vc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Uc(r.ownerDocument.documentElement,r)){if(a!==null&&ji(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,c=Math.min(a.start,l);a=a.end===void 0?c:Math.min(a.end,l),!e.extend&&c>a&&(l=a,a=c,c=l),l=Hc(r,c);var d=Hc(r,a);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),c>a?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dh=g&&"documentMode"in document&&11>=document.documentMode,fr=null,Bi=null,ua=null,Hi=!1;function $c(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hi||fr==null||fr!==ce(a)||(a=fr,"selectionStart"in a&&ji(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ua&&ca(ua,a)||(ua=a,a=lo(Bi,"onSelect"),0<a.length&&(t=new Ri("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=fr)))}function ao(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Ui={},Yc={};g&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function oo(e){if(Ui[e])return Ui[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Yc)return Ui[e]=t[r];return e}var Wc=oo("animationend"),qc=oo("animationiteration"),Gc=oo("animationstart"),Qc=oo("transitionend"),Kc=new Map,Xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Kc.set(e,t),m(t,[e])}for(var Vi=0;Vi<Xc.length;Vi++){var $i=Xc[Vi],mh=$i.toLowerCase(),hh=$i[0].toUpperCase()+$i.slice(1);Tn(mh,"on"+hh)}Tn(Wc,"onAnimationEnd"),Tn(qc,"onAnimationIteration"),Tn(Gc,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Qc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Zc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,mm(a,t,void 0,e),e.currentTarget=null}function Jc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var d=a.length-1;0<=d;d--){var x=a[d],w=x.instance,A=x.currentTarget;if(x=x.listener,w!==c&&l.isPropagationStopped())break e;Zc(l,x,A),c=w}else for(d=0;d<a.length;d++){if(x=a[d],w=x.instance,A=x.currentTarget,x=x.listener,w!==c&&l.isPropagationStopped())break e;Zc(l,x,A),c=w}}}if(Va)throw e=bi,Va=!1,bi=null,e}function De(e,t){var r=t[Zi];r===void 0&&(r=t[Zi]=new Set);var a=e+"__bubble";r.has(a)||(eu(t,e,2,!1),r.add(a))}function Yi(e,t,r){var a=0;t&&(a|=4),eu(r,e,a,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function da(e){if(!e[io]){e[io]=!0,u.forEach(function(r){r!=="selectionchange"&&(fh.has(r)||Yi(r,!1,e),Yi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Yi("selectionchange",!1,t))}}function eu(e,t,r,a){switch(kc(t)){case 1:var l=Am;break;case 4:l=Om;break;default:l=Ti}r=l.bind(null,t,r,e),l=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Wi(e,t,r,a,l){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var x=a.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(d===4)for(d=a.return;d!==null;){var w=d.tag;if((w===3||w===4)&&(w=d.stateNode.containerInfo,w===l||w.nodeType===8&&w.parentNode===l))return;d=d.return}for(;x!==null;){if(d=Yn(x),d===null)return;if(w=d.tag,w===5||w===6){a=c=d;continue e}x=x.parentNode}}a=a.return}oc(function(){var A=c,H=vi(r),Y=[];e:{var _=Kc.get(e);if(_!==void 0){var J=Ri,re=e;switch(e){case"keypress":if(eo(r)===0)break e;case"keydown":case"keyup":J=Ym;break;case"focusin":re="focus",J=Di;break;case"focusout":re="blur",J=Di;break;case"beforeblur":case"afterblur":J=Di;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Gm;break;case Wc:case qc:case Gc:J=Lm;break;case Qc:J=Km;break;case"scroll":J=Rm;break;case"wheel":J=Zm;break;case"copy":case"cut":case"paste":J=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Tc}var ae=(t&4)!==0,We=!ae&&e==="scroll",C=ae?_!==null?_+"Capture":null:_;ae=[];for(var k=A,T;k!==null;){T=k;var G=T.stateNode;if(T.tag===5&&G!==null&&(T=G,C!==null&&(G=Gr(k,C),G!=null&&ae.push(ma(k,G,T)))),We)break;k=k.return}0<ae.length&&(_=new J(_,re,null,r,H),Y.push({event:_,listeners:ae}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",_&&r!==gi&&(re=r.relatedTarget||r.fromElement)&&(Yn(re)||re[sn]))break e;if((J||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,J?(re=r.relatedTarget||r.toElement,J=A,re=re?Yn(re):null,re!==null&&(We=$n(re),re!==We||re.tag!==5&&re.tag!==6)&&(re=null)):(J=null,re=A),J!==re)){if(ae=Sc,G="onMouseLeave",C="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Tc,G="onPointerLeave",C="onPointerEnter",k="pointer"),We=J==null?_:yr(J),T=re==null?_:yr(re),_=new ae(G,k+"leave",J,r,H),_.target=We,_.relatedTarget=T,G=null,Yn(H)===A&&(ae=new ae(C,k+"enter",re,r,H),ae.target=T,ae.relatedTarget=We,G=ae),We=G,J&&re)t:{for(ae=J,C=re,k=0,T=ae;T;T=vr(T))k++;for(T=0,G=C;G;G=vr(G))T++;for(;0<k-T;)ae=vr(ae),k--;for(;0<T-k;)C=vr(C),T--;for(;k--;){if(ae===C||C!==null&&ae===C.alternate)break t;ae=vr(ae),C=vr(C)}ae=null}else ae=null;J!==null&&tu(Y,_,J,ae,!1),re!==null&&We!==null&&tu(Y,We,re,ae,!0)}}e:{if(_=A?yr(A):window,J=_.nodeName&&_.nodeName.toLowerCase(),J==="select"||J==="input"&&_.type==="file")var le=oh;else if(Dc(_))if(Lc)le=ch;else{le=lh;var pe=ih}else(J=_.nodeName)&&J.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(le=sh);if(le&&(le=le(e,A))){Fc(Y,le,r,H);break e}pe&&pe(e,_,A),e==="focusout"&&(pe=_._wrapperState)&&pe.controlled&&_.type==="number"&&lt(_,"number",_.value)}switch(pe=A?yr(A):window,e){case"focusin":(Dc(pe)||pe.contentEditable==="true")&&(fr=pe,Bi=A,ua=null);break;case"focusout":ua=Bi=fr=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,$c(Y,r,H);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":$c(Y,r,H)}var de;if(Li)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else hr?Pc(e,r)&&(fe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(fe="onCompositionStart");fe&&(Ac&&r.locale!=="ko"&&(hr||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&hr&&(de=Nc()):(Cn=H,Oi="value"in Cn?Cn.value:Cn.textContent,hr=!0)),pe=lo(A,fe),0<pe.length&&(fe=new Cc(fe,e,null,r,H),Y.push({event:fe,listeners:pe}),de?fe.data=de:(de=Ic(r),de!==null&&(fe.data=de)))),(de=eh?th(e,r):nh(e,r))&&(A=lo(A,"onBeforeInput"),0<A.length&&(H=new Cc("onBeforeInput","beforeinput",null,r,H),Y.push({event:H,listeners:A}),H.data=de))}Jc(Y,t)})}function ma(e,t,r){return{instance:e,listener:t,currentTarget:r}}function lo(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=Gr(e,r),c!=null&&a.unshift(ma(e,c,l)),c=Gr(e,t),c!=null&&a.push(ma(e,c,l))),e=e.return}return a}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,r,a,l){for(var c=t._reactName,d=[];r!==null&&r!==a;){var x=r,w=x.alternate,A=x.stateNode;if(w!==null&&w===a)break;x.tag===5&&A!==null&&(x=A,l?(w=Gr(r,c),w!=null&&d.unshift(ma(r,w,x))):l||(w=Gr(r,c),w!=null&&d.push(ma(r,w,x)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var gh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(vh,"")}function so(e,t,r){if(t=nu(t),nu(e)!==t&&r)throw Error(s(425))}function co(){}var qi=null,Gi=null;function Qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ki=typeof setTimeout=="function"?setTimeout:void 0,xh=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Eh)}:Ki;function Eh(e){setTimeout(function(){throw e})}function Xi(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),ra(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);ra(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+xr,ha="__reactProps$"+xr,sn="__reactContainer$"+xr,Zi="__reactEvents$"+xr,bh="__reactListeners$"+xr,wh="__reactHandles$"+xr;function Yn(e){var t=e[Zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[sn]||r[Zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=au(e);e!==null;){if(r=e[Zt])return r;e=au(e)}return t}e=r,r=e.parentNode}return null}function fa(e){return e=e[Zt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function uo(e){return e[ha]||null}var Ji=[],Er=-1;function On(e){return{current:e}}function Fe(e){0>Er||(e.current=Ji[Er],Ji[Er]=null,Er--)}function Ie(e,t){Er++,Ji[Er]=e.current,e.current=t}var Rn={},st=On(Rn),xt=On(!1),Wn=Rn;function br(e,t){var r=e.type.contextTypes;if(!r)return Rn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in r)l[c]=t[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function yt(e){return e=e.childContextTypes,e!=null}function po(){Fe(xt),Fe(st)}function ou(e,t,r){if(st.current!==Rn)throw Error(s(168));Ie(st,t),Ie(xt,r)}function iu(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,te(e)||"Unknown",l));return B({},r,a)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Wn=st.current,Ie(st,e),Ie(xt,xt.current),!0}function lu(e,t,r){var a=e.stateNode;if(!a)throw Error(s(169));r?(e=iu(e,t,Wn),a.__reactInternalMemoizedMergedChildContext=e,Fe(xt),Fe(st),Ie(st,e)):Fe(xt),Ie(xt,r)}var cn=null,ho=!1,el=!1;function su(e){cn===null?cn=[e]:cn.push(e)}function kh(e){ho=!0,su(e)}function Pn(){if(!el&&cn!==null){el=!0;var e=0,t=Oe;try{var r=cn;for(Oe=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}cn=null,ho=!1}catch(l){throw cn!==null&&(cn=cn.slice(e+1)),uc(wi,Pn),l}finally{Oe=t,el=!1}}return null}var wr=[],kr=0,fo=null,go=0,Rt=[],Pt=0,qn=null,un=1,pn="";function Gn(e,t){wr[kr++]=go,wr[kr++]=fo,fo=e,go=t}function cu(e,t,r){Rt[Pt++]=un,Rt[Pt++]=pn,Rt[Pt++]=qn,qn=e;var a=un;e=pn;var l=32-Ht(a)-1;a&=~(1<<l),r+=1;var c=32-Ht(t)+l;if(30<c){var d=l-l%5;c=(a&(1<<d)-1).toString(32),a>>=d,l-=d,un=1<<32-Ht(t)+l|r<<l|a,pn=c+e}else un=1<<c|r<<l|a,pn=e}function tl(e){e.return!==null&&(Gn(e,1),cu(e,1,0))}function nl(e){for(;e===fo;)fo=wr[--kr],wr[kr]=null,go=wr[--kr],wr[kr]=null;for(;e===qn;)qn=Rt[--Pt],Rt[Pt]=null,pn=Rt[--Pt],Rt[Pt]=null,un=Rt[--Pt],Rt[Pt]=null}var Ct=null,Tt=null,Le=!1,Vt=null;function uu(e,t){var r=Lt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function pu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,Tt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=qn!==null?{id:un,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Lt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,Tt=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(Le){var t=Tt;if(t){var r=t;if(!pu(e,t)){if(rl(e))throw Error(s(418));t=An(r.nextSibling);var a=Ct;t&&pu(e,t)?uu(a,r):(e.flags=e.flags&-4097|2,Le=!1,Ct=e)}}else{if(rl(e))throw Error(s(418));e.flags=e.flags&-4097|2,Le=!1,Ct=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function vo(e){if(e!==Ct)return!1;if(!Le)return du(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qi(e.type,e.memoizedProps)),t&&(t=Tt)){if(rl(e))throw mu(),Error(s(418));for(;t;)uu(e,t),t=An(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Tt=An(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Ct?An(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=Tt;e;)e=An(e.nextSibling)}function Nr(){Tt=Ct=null,Le=!1}function ol(e){Vt===null?Vt=[e]:Vt.push(e)}var Nh=W.ReactCurrentBatchConfig;function ga(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var a=r.stateNode}if(!a)throw Error(s(147,e));var l=a,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var x=l.refs;d===null?delete x[c]:x[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function fu(e){function t(C,k){if(e){var T=C.deletions;T===null?(C.deletions=[k],C.flags|=16):T.push(k)}}function r(C,k){if(!e)return null;for(;k!==null;)t(C,k),k=k.sibling;return null}function a(C,k){for(C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function l(C,k){return C=Bn(C,k),C.index=0,C.sibling=null,C}function c(C,k,T){return C.index=T,e?(T=C.alternate,T!==null?(T=T.index,T<k?(C.flags|=2,k):T):(C.flags|=2,k)):(C.flags|=1048576,k)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function x(C,k,T,G){return k===null||k.tag!==6?(k=Kl(T,C.mode,G),k.return=C,k):(k=l(k,T),k.return=C,k)}function w(C,k,T,G){var le=T.type;return le===ge?H(C,k,T.props.children,G,T.key):k!==null&&(k.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ye&&hu(le)===k.type)?(G=l(k,T.props),G.ref=ga(C,k,T),G.return=C,G):(G=Uo(T.type,T.key,T.props,null,C.mode,G),G.ref=ga(C,k,T),G.return=C,G)}function A(C,k,T,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==T.containerInfo||k.stateNode.implementation!==T.implementation?(k=Xl(T,C.mode,G),k.return=C,k):(k=l(k,T.children||[]),k.return=C,k)}function H(C,k,T,G,le){return k===null||k.tag!==7?(k=nr(T,C.mode,G,le),k.return=C,k):(k=l(k,T),k.return=C,k)}function Y(C,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Kl(""+k,C.mode,T),k.return=C,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ee:return T=Uo(k.type,k.key,k.props,null,C.mode,T),T.ref=ga(C,null,k),T.return=C,T;case ie:return k=Xl(k,C.mode,T),k.return=C,k;case ye:var G=k._init;return Y(C,G(k._payload),T)}if(et(k)||L(k))return k=nr(k,C.mode,T,null),k.return=C,k;xo(C,k)}return null}function _(C,k,T,G){var le=k!==null?k.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return le!==null?null:x(C,k,""+T,G);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ee:return T.key===le?w(C,k,T,G):null;case ie:return T.key===le?A(C,k,T,G):null;case ye:return le=T._init,_(C,k,le(T._payload),G)}if(et(T)||L(T))return le!==null?null:H(C,k,T,G,null);xo(C,T)}return null}function J(C,k,T,G,le){if(typeof G=="string"&&G!==""||typeof G=="number")return C=C.get(T)||null,x(k,C,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case ee:return C=C.get(G.key===null?T:G.key)||null,w(k,C,G,le);case ie:return C=C.get(G.key===null?T:G.key)||null,A(k,C,G,le);case ye:var pe=G._init;return J(C,k,T,pe(G._payload),le)}if(et(G)||L(G))return C=C.get(T)||null,H(k,C,G,le,null);xo(k,G)}return null}function re(C,k,T,G){for(var le=null,pe=null,de=k,fe=k=0,rt=null;de!==null&&fe<T.length;fe++){de.index>fe?(rt=de,de=null):rt=de.sibling;var Ce=_(C,de,T[fe],G);if(Ce===null){de===null&&(de=rt);break}e&&de&&Ce.alternate===null&&t(C,de),k=c(Ce,k,fe),pe===null?le=Ce:pe.sibling=Ce,pe=Ce,de=rt}if(fe===T.length)return r(C,de),Le&&Gn(C,fe),le;if(de===null){for(;fe<T.length;fe++)de=Y(C,T[fe],G),de!==null&&(k=c(de,k,fe),pe===null?le=de:pe.sibling=de,pe=de);return Le&&Gn(C,fe),le}for(de=a(C,de);fe<T.length;fe++)rt=J(de,C,fe,T[fe],G),rt!==null&&(e&&rt.alternate!==null&&de.delete(rt.key===null?fe:rt.key),k=c(rt,k,fe),pe===null?le=rt:pe.sibling=rt,pe=rt);return e&&de.forEach(function(Hn){return t(C,Hn)}),Le&&Gn(C,fe),le}function ae(C,k,T,G){var le=L(T);if(typeof le!="function")throw Error(s(150));if(T=le.call(T),T==null)throw Error(s(151));for(var pe=le=null,de=k,fe=k=0,rt=null,Ce=T.next();de!==null&&!Ce.done;fe++,Ce=T.next()){de.index>fe?(rt=de,de=null):rt=de.sibling;var Hn=_(C,de,Ce.value,G);if(Hn===null){de===null&&(de=rt);break}e&&de&&Hn.alternate===null&&t(C,de),k=c(Hn,k,fe),pe===null?le=Hn:pe.sibling=Hn,pe=Hn,de=rt}if(Ce.done)return r(C,de),Le&&Gn(C,fe),le;if(de===null){for(;!Ce.done;fe++,Ce=T.next())Ce=Y(C,Ce.value,G),Ce!==null&&(k=c(Ce,k,fe),pe===null?le=Ce:pe.sibling=Ce,pe=Ce);return Le&&Gn(C,fe),le}for(de=a(C,de);!Ce.done;fe++,Ce=T.next())Ce=J(de,C,fe,Ce.value,G),Ce!==null&&(e&&Ce.alternate!==null&&de.delete(Ce.key===null?fe:Ce.key),k=c(Ce,k,fe),pe===null?le=Ce:pe.sibling=Ce,pe=Ce);return e&&de.forEach(function(rf){return t(C,rf)}),Le&&Gn(C,fe),le}function We(C,k,T,G){if(typeof T=="object"&&T!==null&&T.type===ge&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ee:e:{for(var le=T.key,pe=k;pe!==null;){if(pe.key===le){if(le=T.type,le===ge){if(pe.tag===7){r(C,pe.sibling),k=l(pe,T.props.children),k.return=C,C=k;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ye&&hu(le)===pe.type){r(C,pe.sibling),k=l(pe,T.props),k.ref=ga(C,pe,T),k.return=C,C=k;break e}r(C,pe);break}else t(C,pe);pe=pe.sibling}T.type===ge?(k=nr(T.props.children,C.mode,G,T.key),k.return=C,C=k):(G=Uo(T.type,T.key,T.props,null,C.mode,G),G.ref=ga(C,k,T),G.return=C,C=G)}return d(C);case ie:e:{for(pe=T.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===T.containerInfo&&k.stateNode.implementation===T.implementation){r(C,k.sibling),k=l(k,T.children||[]),k.return=C,C=k;break e}else{r(C,k);break}else t(C,k);k=k.sibling}k=Xl(T,C.mode,G),k.return=C,C=k}return d(C);case ye:return pe=T._init,We(C,k,pe(T._payload),G)}if(et(T))return re(C,k,T,G);if(L(T))return ae(C,k,T,G);xo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,k!==null&&k.tag===6?(r(C,k.sibling),k=l(k,T),k.return=C,C=k):(r(C,k),k=Kl(T,C.mode,G),k.return=C,C=k),d(C)):r(C,k)}return We}var zr=fu(!0),gu=fu(!1),yo=On(null),Eo=null,Sr=null,il=null;function ll(){il=Sr=Eo=null}function sl(e){var t=yo.current;Fe(yo),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Cr(e,t){Eo=e,il=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Et=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(Eo===null)throw Error(s(308));Sr=e,Eo.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Qn=null;function ul(e){Qn===null?Qn=[e]:Qn.push(e)}function vu(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,ul(t)):(r.next=l.next,l.next=r),t.interleaved=r,dn(e,a)}function dn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var In=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Se&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,dn(e,r)}return l=a.interleaved,l===null?(t.next=t,ul(a)):(t.next=l.next,l.next=t),a.interleaved=t,dn(e,r)}function bo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,zi(e,r)}}function yu(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?l=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?l=c=t:c=c.next=t}else l=c=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function wo(e,t,r,a){var l=e.updateQueue;In=!1;var c=l.firstBaseUpdate,d=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var w=x,A=w.next;w.next=null,d===null?c=A:d.next=A,d=w;var H=e.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==d&&(x===null?H.firstBaseUpdate=A:x.next=A,H.lastBaseUpdate=w))}if(c!==null){var Y=l.baseState;d=0,H=A=w=null,x=c;do{var _=x.lane,J=x.eventTime;if((a&_)===_){H!==null&&(H=H.next={eventTime:J,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var re=e,ae=x;switch(_=t,J=r,ae.tag){case 1:if(re=ae.payload,typeof re=="function"){Y=re.call(J,Y,_);break e}Y=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,_=typeof re=="function"?re.call(J,Y,_):re,_==null)break e;Y=B({},Y,_);break e;case 2:In=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,_=l.effects,_===null?l.effects=[x]:_.push(x))}else J={eventTime:J,lane:_,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(A=H=J,w=Y):H=H.next=J,d|=_;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;_=x,x=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);if(H===null&&(w=Y),l.baseState=w,l.firstBaseUpdate=A,l.lastBaseUpdate=H,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else c===null&&(l.shared.lanes=0);Zn|=d,e.lanes=d,e.memoizedState=Y}}function Eu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var va={},Jt=On(va),xa=On(va),ya=On(va);function Kn(e){if(e===va)throw Error(s(174));return e}function dl(e,t){switch(Ie(ya,t),Ie(xa,e),Ie(Jt,va),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mi(t,e)}Fe(Jt),Ie(Jt,t)}function Tr(){Fe(Jt),Fe(xa),Fe(ya)}function bu(e){Kn(ya.current);var t=Kn(Jt.current),r=mi(t,e.type);t!==r&&(Ie(xa,e),Ie(Jt,r))}function ml(e){xa.current===e&&(Fe(Jt),Fe(xa))}var He=On(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function fl(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var No=W.ReactCurrentDispatcher,gl=W.ReactCurrentBatchConfig,Xn=0,Ue=null,Xe=null,tt=null,zo=!1,Ea=!1,ba=0,zh=0;function ct(){throw Error(s(321))}function vl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function xl(e,t,r,a,l,c){if(Xn=c,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?Ah:Oh,e=r(a,l),Ea){c=0;do{if(Ea=!1,ba=0,25<=c)throw Error(s(301));c+=1,tt=Xe=null,t.updateQueue=null,No.current=Rh,e=r(a,l)}while(Ea)}if(No.current=To,t=Xe!==null&&Xe.next!==null,Xn=0,tt=Xe=Ue=null,zo=!1,t)throw Error(s(300));return e}function yl(){var e=ba!==0;return ba=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=e:tt=tt.next=e,tt}function Dt(){if(Xe===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=tt===null?Ue.memoizedState:tt.next;if(t!==null)tt=t,Xe=e;else{if(e===null)throw Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},tt===null?Ue.memoizedState=tt=e:tt=tt.next=e}return tt}function wa(e,t){return typeof t=="function"?t(e):t}function El(e){var t=Dt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=Xe,l=a.baseQueue,c=r.pending;if(c!==null){if(l!==null){var d=l.next;l.next=c.next,c.next=d}a.baseQueue=l=c,r.pending=null}if(l!==null){c=l.next,a=a.baseState;var x=d=null,w=null,A=c;do{var H=A.lane;if((Xn&H)===H)w!==null&&(w=w.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:e(a,A.action);else{var Y={lane:H,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};w===null?(x=w=Y,d=a):w=w.next=Y,Ue.lanes|=H,Zn|=H}A=A.next}while(A!==null&&A!==c);w===null?d=a:w.next=x,Ut(a,t.memoizedState)||(Et=!0),t.memoizedState=a,t.baseState=d,t.baseQueue=w,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do c=l.lane,Ue.lanes|=c,Zn|=c,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function bl(e){var t=Dt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,c=t.memoizedState;if(l!==null){r.pending=null;var d=l=l.next;do c=e(c,d.action),d=d.next;while(d!==l);Ut(c,t.memoizedState)||(Et=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,a]}function wu(){}function ku(e,t){var r=Ue,a=Dt(),l=t(),c=!Ut(a.memoizedState,l);if(c&&(a.memoizedState=l,Et=!0),a=a.queue,wl(Su.bind(null,r,a,e),[e]),a.getSnapshot!==t||c||tt!==null&&tt.memoizedState.tag&1){if(r.flags|=2048,ka(9,zu.bind(null,r,a,l,t),void 0,null),nt===null)throw Error(s(349));(Xn&30)!==0||Nu(r,t,l)}return l}function Nu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function zu(e,t,r,a){t.value=r,t.getSnapshot=a,Cu(t)&&Tu(e)}function Su(e,t,r){return r(function(){Cu(t)&&Tu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ut(e,r)}catch{return!0}}function Tu(e){var t=dn(e,1);t!==null&&qt(t,e,1,-1)}function Au(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t.queue=e,e=e.dispatch=Th.bind(null,Ue,e),[t.memoizedState,e]}function ka(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Ou(){return Dt().memoizedState}function So(e,t,r,a){var l=en();Ue.flags|=e,l.memoizedState=ka(1|t,r,void 0,a===void 0?null:a)}function Co(e,t,r,a){var l=Dt();a=a===void 0?null:a;var c=void 0;if(Xe!==null){var d=Xe.memoizedState;if(c=d.destroy,a!==null&&vl(a,d.deps)){l.memoizedState=ka(t,r,c,a);return}}Ue.flags|=e,l.memoizedState=ka(1|t,r,c,a)}function Ru(e,t){return So(8390656,8,e,t)}function wl(e,t){return Co(2048,8,e,t)}function Pu(e,t){return Co(4,2,e,t)}function Iu(e,t){return Co(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,r){return r=r!=null?r.concat([e]):null,Co(4,4,Du.bind(null,t,e),r)}function kl(){}function Lu(e,t){var r=Dt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&vl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Mu(e,t){var r=Dt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&vl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function _u(e,t,r){return(Xn&21)===0?(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=r):(Ut(r,t)||(r=hc(),Ue.lanes|=r,Zn|=r,e.baseState=!0),t)}function Sh(e,t){var r=Oe;Oe=r!==0&&4>r?r:4,e(!0);var a=gl.transition;gl.transition={};try{e(!1),t()}finally{Oe=r,gl.transition=a}}function ju(){return Dt().memoizedState}function Ch(e,t,r){var a=_n(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Bu(e))Hu(t,r);else if(r=vu(e,t,r,a),r!==null){var l=ht();qt(r,e,a,l),Uu(r,t,a)}}function Th(e,t,r){var a=_n(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Hu(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,x=c(d,r);if(l.hasEagerState=!0,l.eagerState=x,Ut(x,d)){var w=t.interleaved;w===null?(l.next=l,ul(t)):(l.next=w.next,w.next=l),t.interleaved=l;return}}catch{}finally{}r=vu(e,t,l,a),r!==null&&(l=ht(),qt(r,e,a,l),Uu(r,t,a))}}function Bu(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Hu(e,t){Ea=zo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Uu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,zi(e,r)}}var To={readContext:It,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Ah={readContext:It,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,So(4194308,4,Du.bind(null,t,e),r)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var r=en();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=en();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Ch.bind(null,Ue,e),[a.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:kl,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=Sh.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ue,l=en();if(Le){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),nt===null)throw Error(s(349));(Xn&30)!==0||Nu(a,t,r)}l.memoizedState=r;var c={value:r,getSnapshot:t};return l.queue=c,Ru(Su.bind(null,a,c,e),[e]),a.flags|=2048,ka(9,zu.bind(null,a,c,r,t),void 0,null),r},useId:function(){var e=en(),t=nt.identifierPrefix;if(Le){var r=pn,a=un;r=(a&~(1<<32-Ht(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=ba++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Oh={readContext:It,useCallback:Lu,useContext:It,useEffect:wl,useImperativeHandle:Fu,useInsertionEffect:Pu,useLayoutEffect:Iu,useMemo:Mu,useReducer:El,useRef:Ou,useState:function(){return El(wa)},useDebugValue:kl,useDeferredValue:function(e){var t=Dt();return _u(t,Xe.memoizedState,e)},useTransition:function(){var e=El(wa)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:ju,unstable_isNewReconciler:!1},Rh={readContext:It,useCallback:Lu,useContext:It,useEffect:wl,useImperativeHandle:Fu,useInsertionEffect:Pu,useLayoutEffect:Iu,useMemo:Mu,useReducer:bl,useRef:Ou,useState:function(){return bl(wa)},useDebugValue:kl,useDeferredValue:function(e){var t=Dt();return Xe===null?t.memoizedState=e:_u(t,Xe.memoizedState,e)},useTransition:function(){var e=bl(wa)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:ju,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Nl(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:B({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ao={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=ht(),l=_n(e),c=mn(a,l);c.payload=t,r!=null&&(c.callback=r),t=Dn(e,c,l),t!==null&&(qt(t,e,l,a),bo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=ht(),l=_n(e),c=mn(a,l);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=Dn(e,c,l),t!==null&&(qt(t,e,l,a),bo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),a=_n(e),l=mn(r,a);l.tag=2,t!=null&&(l.callback=t),t=Dn(e,l,a),t!==null&&(qt(t,e,a,r),bo(t,e,a))}};function Vu(e,t,r,a,l,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,d):t.prototype&&t.prototype.isPureReactComponent?!ca(r,a)||!ca(l,c):!0}function $u(e,t,r){var a=!1,l=Rn,c=t.contextType;return typeof c=="object"&&c!==null?c=It(c):(l=yt(t)?Wn:st.current,a=t.contextTypes,c=(a=a!=null)?br(e,l):Rn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=c),t}function Yu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function zl(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},pl(e);var c=t.contextType;typeof c=="object"&&c!==null?l.context=It(c):(c=yt(t)?Wn:st.current,l.context=br(e,c)),l.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Nl(e,t,c,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ao.enqueueReplaceState(l,l.state,null),wo(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var r="",a=t;do r+=ke(a),a=a.return;while(a);var l=r}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:l,digest:null}}function Sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ph=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,r){r=mn(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Lo||(Lo=!0,Ul=a),Cl(e,t)},r}function qu(e,t,r){r=mn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Cl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Cl(e,t),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Gu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Ph;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Wh.bind(null,e,t,r),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ku(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=mn(-1,1),t.tag=2,Dn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ih=W.ReactCurrentOwner,Et=!1;function mt(e,t,r,a){t.child=e===null?gu(t,null,r,a):zr(t,e.child,r,a)}function Xu(e,t,r,a,l){r=r.render;var c=t.ref;return Cr(t,l),a=xl(e,t,r,a,c,l),r=yl(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,hn(e,t,l)):(Le&&r&&tl(t),t.flags|=1,mt(e,t,a,l),t.child)}function Zu(e,t,r,a,l){if(e===null){var c=r.type;return typeof c=="function"&&!Ql(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Ju(e,t,c,a,l)):(e=Uo(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&l)===0){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:ca,r(d,a)&&e.ref===t.ref)return hn(e,t,l)}return t.flags|=1,e=Bn(c,a),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,r,a,l){if(e!==null){var c=e.memoizedProps;if(ca(c,a)&&e.ref===t.ref)if(Et=!1,t.pendingProps=a=c,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,hn(e,t,l)}return Tl(e,t,r,a,l)}function ep(e,t,r){var a=t.pendingProps,l=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Rr,At),At|=r;else{if((r&1073741824)===0)return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Rr,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:r,Ie(Rr,At),At|=a}else c!==null?(a=c.baseLanes|r,t.memoizedState=null):a=r,Ie(Rr,At),At|=a;return mt(e,t,l,r),t.child}function tp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,r,a,l){var c=yt(r)?Wn:st.current;return c=br(t,c),Cr(t,l),r=xl(e,t,r,a,c,l),a=yl(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,hn(e,t,l)):(Le&&a&&tl(t),t.flags|=1,mt(e,t,r,l),t.child)}function np(e,t,r,a,l){if(yt(r)){var c=!0;mo(t)}else c=!1;if(Cr(t,l),t.stateNode===null)Ro(e,t),$u(t,r,a),zl(t,r,a,l),a=!0;else if(e===null){var d=t.stateNode,x=t.memoizedProps;d.props=x;var w=d.context,A=r.contextType;typeof A=="object"&&A!==null?A=It(A):(A=yt(r)?Wn:st.current,A=br(t,A));var H=r.getDerivedStateFromProps,Y=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function";Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==a||w!==A)&&Yu(t,d,a,A),In=!1;var _=t.memoizedState;d.state=_,wo(t,a,d,l),w=t.memoizedState,x!==a||_!==w||xt.current||In?(typeof H=="function"&&(Nl(t,r,H,a),w=t.memoizedState),(x=In||Vu(t,r,x,a,_,w,A))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),d.props=a,d.state=w,d.context=A,a=x):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,xu(e,t),x=t.memoizedProps,A=t.type===t.elementType?x:$t(t.type,x),d.props=A,Y=t.pendingProps,_=d.context,w=r.contextType,typeof w=="object"&&w!==null?w=It(w):(w=yt(r)?Wn:st.current,w=br(t,w));var J=r.getDerivedStateFromProps;(H=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Y||_!==w)&&Yu(t,d,a,w),In=!1,_=t.memoizedState,d.state=_,wo(t,a,d,l);var re=t.memoizedState;x!==Y||_!==re||xt.current||In?(typeof J=="function"&&(Nl(t,r,J,a),re=t.memoizedState),(A=In||Vu(t,r,A,a,_,re,w)||!1)?(H||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,re,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,re,w)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=re),d.props=a,d.state=re,d.context=w,a=A):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return Al(e,t,r,a,c,l)}function Al(e,t,r,a,l,c){tp(e,t);var d=(t.flags&128)!==0;if(!a&&!d)return l&&lu(t,r,!1),hn(e,t,c);a=t.stateNode,Ih.current=t;var x=d&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&d?(t.child=zr(t,e.child,null,c),t.child=zr(t,null,x,c)):mt(e,t,x,c),t.memoizedState=a.state,l&&lu(t,r,!0),t.child}function rp(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),dl(e,t.containerInfo)}function ap(e,t,r,a,l){return Nr(),ol(l),t.flags|=256,mt(e,t,r,a),t.child}var Ol={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,r){var a=t.pendingProps,l=He.current,c=!1,d=(t.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(l&2)!==0),x?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ie(He,l&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=a.children,e=a.fallback,c?(a=t.mode,c=t.child,d={mode:"hidden",children:d},(a&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=d):c=Vo(d,a,0,null),e=nr(e,a,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Rl(r),t.memoizedState=Ol,e):Pl(t,d));if(l=e.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return Dh(e,t,d,a,x,l,r);if(c){c=a.fallback,d=t.mode,l=e.child,x=l.sibling;var w={mode:"hidden",children:a.children};return(d&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=w,t.deletions=null):(a=Bn(l,w),a.subtreeFlags=l.subtreeFlags&14680064),x!==null?c=Bn(x,c):(c=nr(c,d,r,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,d=e.child.memoizedState,d=d===null?Rl(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=Ol,a}return c=e.child,e=c.sibling,a=Bn(c,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Pl(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oo(e,t,r,a){return a!==null&&ol(a),zr(t,e.child,null,r),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dh(e,t,r,a,l,c,d){if(r)return t.flags&256?(t.flags&=-257,a=Sl(Error(s(422))),Oo(e,t,d,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=a.fallback,l=t.mode,a=Vo({mode:"visible",children:a.children},l,0,null),c=nr(c,l,d,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,(t.mode&1)!==0&&zr(t,e.child,null,d),t.child.memoizedState=Rl(d),t.memoizedState=Ol,c);if((t.mode&1)===0)return Oo(e,t,d,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var x=a.dgst;return a=x,c=Error(s(419)),a=Sl(c,a,void 0),Oo(e,t,d,a)}if(x=(d&e.childLanes)!==0,Et||x){if(a=nt,a!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|d))!==0?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,dn(e,l),qt(a,e,l,-1))}return Gl(),a=Sl(Error(s(421))),Oo(e,t,d,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=qh.bind(null,e),l._reactRetry=t,null):(e=c.treeContext,Tt=An(l.nextSibling),Ct=t,Le=!0,Vt=null,e!==null&&(Rt[Pt++]=un,Rt[Pt++]=pn,Rt[Pt++]=qn,un=e.id,pn=e.overflow,qn=t),t=Pl(t,a.children),t.flags|=4096,t)}function ip(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),cl(e.return,t,r)}function Il(e,t,r,a,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=r,c.tailMode=l)}function lp(e,t,r){var a=t.pendingProps,l=a.revealOrder,c=a.tail;if(mt(e,t,a.children,r),a=He.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ip(e,r,t);else if(e.tag===19)ip(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ie(He,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&ko(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Il(t,!1,l,r,c);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ko(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Il(t,!0,r,null,c);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=Bn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Fh(e,t,r){switch(t.tag){case 3:rp(t),Nr();break;case 5:bu(t);break;case 1:yt(t.type)&&mo(t);break;case 4:dl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Ie(yo,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ie(He,He.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?op(e,t,r):(Ie(He,He.current&1),e=hn(e,t,r),e!==null?e.sibling:null);Ie(He,He.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return lp(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ie(He,He.current),a)break;return null;case 22:case 23:return t.lanes=0,ep(e,t,r)}return hn(e,t,r)}var sp,Dl,cp,up;sp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Dl=function(){},cp=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Kn(Jt.current);var c=null;switch(r){case"input":l=Be(e,l),a=Be(e,a),c=[];break;case"select":l=B({},l,{value:void 0}),a=B({},a,{value:void 0}),c=[];break;case"textarea":l=sr(e,l),a=sr(e,a),c=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=co)}hi(r,a);var d;r=null;for(A in l)if(!a.hasOwnProperty(A)&&l.hasOwnProperty(A)&&l[A]!=null)if(A==="style"){var x=l[A];for(d in x)x.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(p.hasOwnProperty(A)?c||(c=[]):(c=c||[]).push(A,null));for(A in a){var w=a[A];if(x=l!=null?l[A]:void 0,a.hasOwnProperty(A)&&w!==x&&(w!=null||x!=null))if(A==="style")if(x){for(d in x)!x.hasOwnProperty(d)||w&&w.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in w)w.hasOwnProperty(d)&&x[d]!==w[d]&&(r||(r={}),r[d]=w[d])}else r||(c||(c=[]),c.push(A,r)),r=w;else A==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,x=x?x.__html:void 0,w!=null&&x!==w&&(c=c||[]).push(A,w)):A==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(A,""+w):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(p.hasOwnProperty(A)?(w!=null&&A==="onScroll"&&De("scroll",e),c||x===w||(c=[])):(c=c||[]).push(A,w))}r&&(c=c||[]).push("style",r);var A=c;(t.updateQueue=A)&&(t.flags|=4)}},up=function(e,t,r,a){r!==a&&(t.flags|=4)};function Na(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Lh(e,t,r){var a=t.pendingProps;switch(nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return yt(t.type)&&po(),ut(t),null;case 3:return a=t.stateNode,Tr(),Fe(xt),Fe(st),fl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vt!==null&&(Yl(Vt),Vt=null))),Dl(e,t),ut(t),null;case 5:ml(t);var l=Kn(ya.current);if(r=t.type,e!==null&&t.stateNode!=null)cp(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ut(t),null}if(e=Kn(Jt.current),vo(t)){a=t.stateNode,r=t.type;var c=t.memoizedProps;switch(a[Zt]=t,a[ha]=c,e=(t.mode&1)!==0,r){case"dialog":De("cancel",a),De("close",a);break;case"iframe":case"object":case"embed":De("load",a);break;case"video":case"audio":for(l=0;l<pa.length;l++)De(pa[l],a);break;case"source":De("error",a);break;case"img":case"image":case"link":De("error",a),De("load",a);break;case"details":De("toggle",a);break;case"input":Ke(a,c),De("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},De("invalid",a);break;case"textarea":cr(a,c),De("invalid",a)}hi(r,c),l=null;for(var d in c)if(c.hasOwnProperty(d)){var x=c[d];d==="children"?typeof x=="string"?a.textContent!==x&&(c.suppressHydrationWarning!==!0&&so(a.textContent,x,e),l=["children",x]):typeof x=="number"&&a.textContent!==""+x&&(c.suppressHydrationWarning!==!0&&so(a.textContent,x,e),l=["children",""+x]):p.hasOwnProperty(d)&&x!=null&&d==="onScroll"&&De("scroll",a)}switch(r){case"input":Ne(a),Pe(a,c,!0);break;case"textarea":Ne(a),Qs(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=co)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(r,{is:a.is}):(e=d.createElement(r),r==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,r),e[Zt]=t,e[ha]=a,sp(e,t,!1,!1),t.stateNode=e;e:{switch(d=fi(r,a),r){case"dialog":De("cancel",e),De("close",e),l=a;break;case"iframe":case"object":case"embed":De("load",e),l=a;break;case"video":case"audio":for(l=0;l<pa.length;l++)De(pa[l],e);l=a;break;case"source":De("error",e),l=a;break;case"img":case"image":case"link":De("error",e),De("load",e),l=a;break;case"details":De("toggle",e),l=a;break;case"input":Ke(e,a),l=Be(e,a),De("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=B({},a,{value:void 0}),De("invalid",e);break;case"textarea":cr(e,a),l=sr(e,a),De("invalid",e);break;default:l=a}hi(r,l),x=l;for(c in x)if(x.hasOwnProperty(c)){var w=x[c];c==="style"?Js(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Xs(e,w)):c==="children"?typeof w=="string"?(r!=="textarea"||w!=="")&&Wr(e,w):typeof w=="number"&&Wr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(p.hasOwnProperty(c)?w!=null&&c==="onScroll"&&De("scroll",e):w!=null&&P(e,c,w,d))}switch(r){case"input":Ne(e),Pe(e,a,!1);break;case"textarea":Ne(e),Qs(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Z(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?dt(e,!!a.multiple,c,!1):a.defaultValue!=null&&dt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=co)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)up(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(r=Kn(ya.current),Kn(Jt.current),vo(t)){if(a=t.stateNode,r=t.memoizedProps,a[Zt]=t,(c=a.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:so(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(a.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Zt]=t,t.stateNode=a}return ut(t),null;case 13:if(Fe(He),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)mu(),Nr(),t.flags|=98560,c=!1;else if(c=vo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Zt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),c=!1}else Vt!==null&&(Yl(Vt),Vt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?Ze===0&&(Ze=3):Gl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Tr(),Dl(e,t),e===null&&da(t.stateNode.containerInfo),ut(t),null;case 10:return sl(t.type._context),ut(t),null;case 17:return yt(t.type)&&po(),ut(t),null;case 19:if(Fe(He),c=t.memoizedState,c===null)return ut(t),null;if(a=(t.flags&128)!==0,d=c.rendering,d===null)if(a)Na(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=ko(e),d!==null){for(t.flags|=128,Na(c,!1),a=d.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)c=r,e=a,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(He,He.current&1|2),t.child}e=e.sibling}c.tail!==null&&Ye()>Pr&&(t.flags|=128,a=!0,Na(c,!1),t.lanes=4194304)}else{if(!a)if(e=ko(d),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Na(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Le)return ut(t),null}else 2*Ye()-c.renderingStartTime>Pr&&r!==1073741824&&(t.flags|=128,a=!0,Na(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ye(),t.sibling=null,r=He.current,Ie(He,a?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return ql(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(At&1073741824)!==0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Mh(e,t){switch(nl(t),t.tag){case 1:return yt(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Fe(xt),Fe(st),fl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if(Fe(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(He),null;case 4:return Tr(),null;case 10:return sl(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var Po=!1,pt=!1,_h=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){$e(e,t,a)}else r.current=null}function Fl(e,t,r){try{r()}catch(a){$e(e,t,a)}}var pp=!1;function jh(e,t){if(qi=Xa,e=Vc(),ji(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,x=-1,w=-1,A=0,H=0,Y=e,_=null;t:for(;;){for(var J;Y!==r||l!==0&&Y.nodeType!==3||(x=d+l),Y!==c||a!==0&&Y.nodeType!==3||(w=d+a),Y.nodeType===3&&(d+=Y.nodeValue.length),(J=Y.firstChild)!==null;)_=Y,Y=J;for(;;){if(Y===e)break t;if(_===r&&++A===l&&(x=d),_===c&&++H===a&&(w=d),(J=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=J}r=x===-1||w===-1?null:{start:x,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gi={focusedElem:e,selectionRange:r},Xa=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var re=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ae=re.memoizedProps,We=re.memoizedState,C=t.stateNode,k=C.getSnapshotBeforeUpdate(t.elementType===t.type?ae:$t(t.type,ae),We);C.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(G){$e(t,t.return,G)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return re=pp,pp=!1,re}function za(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var c=l.destroy;l.destroy=void 0,c!==void 0&&Fl(t,r,c)}l=l.next}while(l!==a)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Ll(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[ha],delete t[Zi],delete t[bh],delete t[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=co));else if(a!==4&&(e=e.child,e!==null))for(Ml(e,t,r),e=e.sibling;e!==null;)Ml(e,t,r),e=e.sibling}function _l(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(_l(e,t,r),e=e.sibling;e!==null;)_l(e,t,r),e=e.sibling}var at=null,Yt=!1;function Fn(e,t,r){for(r=r.child;r!==null;)fp(e,t,r),r=r.sibling}function fp(e,t,r){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ya,r)}catch{}switch(r.tag){case 5:pt||Or(r,t);case 6:var a=at,l=Yt;at=null,Fn(e,t,r),at=a,Yt=l,at!==null&&(Yt?(e=at,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):at.removeChild(r.stateNode));break;case 18:at!==null&&(Yt?(e=at,r=r.stateNode,e.nodeType===8?Xi(e.parentNode,r):e.nodeType===1&&Xi(e,r),ra(e)):Xi(at,r.stateNode));break;case 4:a=at,l=Yt,at=r.stateNode.containerInfo,Yt=!0,Fn(e,t,r),at=a,Yt=l;break;case 0:case 11:case 14:case 15:if(!pt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var c=l,d=c.destroy;c=c.tag,d!==void 0&&((c&2)!==0||(c&4)!==0)&&Fl(r,t,d),l=l.next}while(l!==a)}Fn(e,t,r);break;case 1:if(!pt&&(Or(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(x){$e(r,t,x)}Fn(e,t,r);break;case 21:Fn(e,t,r);break;case 22:r.mode&1?(pt=(a=pt)||r.memoizedState!==null,Fn(e,t,r),pt=a):Fn(e,t,r);break;default:Fn(e,t,r)}}function gp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _h),t.forEach(function(a){var l=Gh.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var c=e,d=t,x=d;e:for(;x!==null;){switch(x.tag){case 5:at=x.stateNode,Yt=!1;break e;case 3:at=x.stateNode.containerInfo,Yt=!0;break e;case 4:at=x.stateNode.containerInfo,Yt=!0;break e}x=x.return}if(at===null)throw Error(s(160));fp(c,d,l),at=null,Yt=!1;var w=l.alternate;w!==null&&(w.return=null),l.return=null}catch(A){$e(l,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}function vp(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),tn(e),a&4){try{za(3,e,e.return),Io(3,e)}catch(ae){$e(e,e.return,ae)}try{za(5,e,e.return)}catch(ae){$e(e,e.return,ae)}}break;case 1:Wt(t,e),tn(e),a&512&&r!==null&&Or(r,r.return);break;case 5:if(Wt(t,e),tn(e),a&512&&r!==null&&Or(r,r.return),e.flags&32){var l=e.stateNode;try{Wr(l,"")}catch(ae){$e(e,e.return,ae)}}if(a&4&&(l=e.stateNode,l!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,x=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{x==="input"&&c.type==="radio"&&c.name!=null&&lr(l,c),fi(x,d);var A=fi(x,c);for(d=0;d<w.length;d+=2){var H=w[d],Y=w[d+1];H==="style"?Js(l,Y):H==="dangerouslySetInnerHTML"?Xs(l,Y):H==="children"?Wr(l,Y):P(l,H,Y,A)}switch(x){case"input":Ot(l,c);break;case"textarea":Gs(l,c);break;case"select":var _=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?dt(l,!!c.multiple,J,!1):_!==!!c.multiple&&(c.defaultValue!=null?dt(l,!!c.multiple,c.defaultValue,!0):dt(l,!!c.multiple,c.multiple?[]:"",!1))}l[ha]=c}catch(ae){$e(e,e.return,ae)}}break;case 6:if(Wt(t,e),tn(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,c=e.memoizedProps;try{l.nodeValue=c}catch(ae){$e(e,e.return,ae)}}break;case 3:if(Wt(t,e),tn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{ra(t.containerInfo)}catch(ae){$e(e,e.return,ae)}break;case 4:Wt(t,e),tn(e);break;case 13:Wt(t,e),tn(e),l=e.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(Hl=Ye())),a&4&&gp(e);break;case 22:if(H=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(A=pt)||H,Wt(t,e),pt=A):Wt(t,e),tn(e),a&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!H&&(e.mode&1)!==0)for(ne=e,H=e.child;H!==null;){for(Y=ne=H;ne!==null;){switch(_=ne,J=_.child,_.tag){case 0:case 11:case 14:case 15:za(4,_,_.return);break;case 1:Or(_,_.return);var re=_.stateNode;if(typeof re.componentWillUnmount=="function"){a=_,r=_.return;try{t=a,re.props=t.memoizedProps,re.state=t.memoizedState,re.componentWillUnmount()}catch(ae){$e(a,r,ae)}}break;case 5:Or(_,_.return);break;case 22:if(_.memoizedState!==null){Ep(Y);continue}}J!==null?(J.return=_,ne=J):Ep(Y)}H=H.sibling}e:for(H=null,Y=e;;){if(Y.tag===5){if(H===null){H=Y;try{l=Y.stateNode,A?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(x=Y.stateNode,w=Y.memoizedProps.style,d=w!=null&&w.hasOwnProperty("display")?w.display:null,x.style.display=Zs("display",d))}catch(ae){$e(e,e.return,ae)}}}else if(Y.tag===6){if(H===null)try{Y.stateNode.nodeValue=A?"":Y.memoizedProps}catch(ae){$e(e,e.return,ae)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===e)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===e)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===e)break e;H===Y&&(H=null),Y=Y.return}H===Y&&(H=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Wt(t,e),tn(e),a&4&&gp(e);break;case 21:break;default:Wt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mp(r)){var a=r;break e}r=r.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Wr(l,""),a.flags&=-33);var c=hp(e);_l(e,c,l);break;case 3:case 4:var d=a.stateNode.containerInfo,x=hp(e);Ml(e,x,d);break;default:throw Error(s(161))}}catch(w){$e(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bh(e,t,r){ne=e,xp(e)}function xp(e,t,r){for(var a=(e.mode&1)!==0;ne!==null;){var l=ne,c=l.child;if(l.tag===22&&a){var d=l.memoizedState!==null||Po;if(!d){var x=l.alternate,w=x!==null&&x.memoizedState!==null||pt;x=Po;var A=pt;if(Po=d,(pt=w)&&!A)for(ne=l;ne!==null;)d=ne,w=d.child,d.tag===22&&d.memoizedState!==null?bp(l):w!==null?(w.return=d,ne=w):bp(l);for(;c!==null;)ne=c,xp(c),c=c.sibling;ne=l,Po=x,pt=A}yp(e)}else(l.subtreeFlags&8772)!==0&&c!==null?(c.return=l,ne=c):yp(e)}}function yp(e){for(;ne!==null;){var t=ne;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pt||Io(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!pt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:$t(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Eu(t,c,a);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Eu(t,d,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&r.focus();break;case"img":w.src&&(r.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var H=A.memoizedState;if(H!==null){var Y=H.dehydrated;Y!==null&&ra(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}pt||t.flags&512&&Ll(t)}catch(_){$e(t,t.return,_)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function Ep(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function bp(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Io(4,t)}catch(w){$e(t,r,w)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(w){$e(t,l,w)}}var c=t.return;try{Ll(t)}catch(w){$e(t,c,w)}break;case 5:var d=t.return;try{Ll(t)}catch(w){$e(t,d,w)}}}catch(w){$e(t,t.return,w)}if(t===e){ne=null;break}var x=t.sibling;if(x!==null){x.return=t.return,ne=x;break}ne=t.return}}var Hh=Math.ceil,Do=W.ReactCurrentDispatcher,jl=W.ReactCurrentOwner,Ft=W.ReactCurrentBatchConfig,Se=0,nt=null,qe=null,ot=0,At=0,Rr=On(0),Ze=0,Sa=null,Zn=0,Fo=0,Bl=0,Ca=null,bt=null,Hl=0,Pr=1/0,fn=null,Lo=!1,Ul=null,Ln=null,Mo=!1,Mn=null,_o=0,Ta=0,Vl=null,jo=-1,Bo=0;function ht(){return(Se&6)!==0?Ye():jo!==-1?jo:jo=Ye()}function _n(e){return(e.mode&1)===0?1:(Se&2)!==0&&ot!==0?ot&-ot:Nh.transition!==null?(Bo===0&&(Bo=hc()),Bo):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e)}function qt(e,t,r,a){if(50<Ta)throw Ta=0,Vl=null,Error(s(185));Zr(e,r,a),((Se&2)===0||e!==nt)&&(e===nt&&((Se&2)===0&&(Fo|=r),Ze===4&&jn(e,ot)),wt(e,a),r===1&&Se===0&&(t.mode&1)===0&&(Pr=Ye()+500,ho&&Pn()))}function wt(e,t){var r=e.callbackNode;Nm(e,t);var a=Ga(e,e===nt?ot:0);if(a===0)r!==null&&pc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&pc(r),t===1)e.tag===0?kh(kp.bind(null,e)):su(kp.bind(null,e)),yh(function(){(Se&6)===0&&Pn()}),r=null;else{switch(fc(a)){case 1:r=wi;break;case 4:r=dc;break;case 16:r=$a;break;case 536870912:r=mc;break;default:r=$a}r=Rp(r,wp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wp(e,t){if(jo=-1,Bo=0,(Se&6)!==0)throw Error(s(327));var r=e.callbackNode;if(Ir()&&e.callbackNode!==r)return null;var a=Ga(e,e===nt?ot:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Ho(e,a);else{t=a;var l=Se;Se|=2;var c=zp();(nt!==e||ot!==t)&&(fn=null,Pr=Ye()+500,er(e,t));do try{$h();break}catch(x){Np(e,x)}while(!0);ll(),Do.current=c,Se=l,qe!==null?t=0:(nt=null,ot=0,t=Ze)}if(t!==0){if(t===2&&(l=ki(e),l!==0&&(a=l,t=$l(e,l))),t===1)throw r=Sa,er(e,0),jn(e,a),wt(e,Ye()),r;if(t===6)jn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!Uh(l)&&(t=Ho(e,a),t===2&&(c=ki(e),c!==0&&(a=c,t=$l(e,c))),t===1))throw r=Sa,er(e,0),jn(e,a),wt(e,Ye()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:tr(e,bt,fn);break;case 3:if(jn(e,a),(a&130023424)===a&&(t=Hl+500-Ye(),10<t)){if(Ga(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){ht(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ki(tr.bind(null,e,bt,fn),t);break}tr(e,bt,fn);break;case 4:if(jn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var d=31-Ht(a);c=1<<d,d=t[d],d>l&&(l=d),a&=~c}if(a=l,a=Ye()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Hh(a/1960))-a,10<a){e.timeoutHandle=Ki(tr.bind(null,e,bt,fn),a);break}tr(e,bt,fn);break;case 5:tr(e,bt,fn);break;default:throw Error(s(329))}}}return wt(e,Ye()),e.callbackNode===r?wp.bind(null,e):null}function $l(e,t){var r=Ca;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Ho(e,t),e!==2&&(t=bt,bt=r,t!==null&&Yl(t)),e}function Yl(e){bt===null?bt=e:bt.push.apply(bt,e)}function Uh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],c=l.getSnapshot;l=l.value;try{if(!Ut(c(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Bl,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),a=1<<r;e[r]=-1,t&=~a}}function kp(e){if((Se&6)!==0)throw Error(s(327));Ir();var t=Ga(e,0);if((t&1)===0)return wt(e,Ye()),null;var r=Ho(e,t);if(e.tag!==0&&r===2){var a=ki(e);a!==0&&(t=a,r=$l(e,a))}if(r===1)throw r=Sa,er(e,0),jn(e,t),wt(e,Ye()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,bt,fn),wt(e,Ye()),null}function Wl(e,t){var r=Se;Se|=1;try{return e(t)}finally{Se=r,Se===0&&(Pr=Ye()+500,ho&&Pn())}}function Jn(e){Mn!==null&&Mn.tag===0&&(Se&6)===0&&Ir();var t=Se;Se|=1;var r=Ft.transition,a=Oe;try{if(Ft.transition=null,Oe=1,e)return e()}finally{Oe=a,Ft.transition=r,Se=t,(Se&6)===0&&Pn()}}function ql(){At=Rr.current,Fe(Rr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,xh(r)),qe!==null)for(r=qe.return;r!==null;){var a=r;switch(nl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&po();break;case 3:Tr(),Fe(xt),Fe(st),fl();break;case 5:ml(a);break;case 4:Tr();break;case 13:Fe(He);break;case 19:Fe(He);break;case 10:sl(a.type._context);break;case 22:case 23:ql()}r=r.return}if(nt=e,qe=e=Bn(e.current,null),ot=At=t,Ze=0,Sa=null,Bl=Fo=Zn=0,bt=Ca=null,Qn!==null){for(t=0;t<Qn.length;t++)if(r=Qn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,c=r.pending;if(c!==null){var d=c.next;c.next=l,a.next=d}r.pending=a}Qn=null}return e}function Np(e,t){do{var r=qe;try{if(ll(),No.current=To,zo){for(var a=Ue.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}zo=!1}if(Xn=0,tt=Xe=Ue=null,Ea=!1,ba=0,jl.current=null,r===null||r.return===null){Ze=1,Sa=t,qe=null;break}e:{var c=e,d=r.return,x=r,w=t;if(t=ot,x.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var A=w,H=x,Y=H.tag;if((H.mode&1)===0&&(Y===0||Y===11||Y===15)){var _=H.alternate;_?(H.updateQueue=_.updateQueue,H.memoizedState=_.memoizedState,H.lanes=_.lanes):(H.updateQueue=null,H.memoizedState=null)}var J=Qu(d);if(J!==null){J.flags&=-257,Ku(J,d,x,c,t),J.mode&1&&Gu(c,A,t),t=J,w=A;var re=t.updateQueue;if(re===null){var ae=new Set;ae.add(w),t.updateQueue=ae}else re.add(w);break e}else{if((t&1)===0){Gu(c,A,t),Gl();break e}w=Error(s(426))}}else if(Le&&x.mode&1){var We=Qu(d);if(We!==null){(We.flags&65536)===0&&(We.flags|=256),Ku(We,d,x,c,t),ol(Ar(w,x));break e}}c=w=Ar(w,x),Ze!==4&&(Ze=2),Ca===null?Ca=[c]:Ca.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Wu(c,w,t);yu(c,C);break e;case 1:x=w;var k=c.type,T=c.stateNode;if((c.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ln===null||!Ln.has(T)))){c.flags|=65536,t&=-t,c.lanes|=t;var G=qu(c,x,t);yu(c,G);break e}}c=c.return}while(c!==null)}Cp(r)}catch(le){t=le,qe===r&&r!==null&&(qe=r=r.return);continue}break}while(!0)}function zp(){var e=Do.current;return Do.current=To,e===null?To:e}function Gl(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nt===null||(Zn&268435455)===0&&(Fo&268435455)===0||jn(nt,ot)}function Ho(e,t){var r=Se;Se|=2;var a=zp();(nt!==e||ot!==t)&&(fn=null,er(e,t));do try{Vh();break}catch(l){Np(e,l)}while(!0);if(ll(),Se=r,Do.current=a,qe!==null)throw Error(s(261));return nt=null,ot=0,Ze}function Vh(){for(;qe!==null;)Sp(qe)}function $h(){for(;qe!==null&&!fm();)Sp(qe)}function Sp(e){var t=Op(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Cp(e):qe=t,jl.current=null}function Cp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Lh(r,t,At),r!==null){qe=r;return}}else{if(r=Mh(r,t),r!==null){r.flags&=32767,qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ze===0&&(Ze=5)}function tr(e,t,r){var a=Oe,l=Ft.transition;try{Ft.transition=null,Oe=1,Yh(e,t,r,a)}finally{Ft.transition=l,Oe=a}return null}function Yh(e,t,r,a){do Ir();while(Mn!==null);if((Se&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(zm(e,c),e===nt&&(qe=nt=null,ot=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Mo||(Mo=!0,Rp($a,function(){return Ir(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=Ft.transition,Ft.transition=null;var d=Oe;Oe=1;var x=Se;Se|=4,jl.current=null,jh(e,r),vp(r,e),ph(Gi),Xa=!!qi,Gi=qi=null,e.current=r,Bh(r),gm(),Se=x,Oe=d,Ft.transition=c}else e.current=r;if(Mo&&(Mo=!1,Mn=e,_o=l),c=e.pendingLanes,c===0&&(Ln=null),ym(r.stateNode),wt(e,Ye()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(Lo)throw Lo=!1,e=Ul,Ul=null,e;return(_o&1)!==0&&e.tag!==0&&Ir(),c=e.pendingLanes,(c&1)!==0?e===Vl?Ta++:(Ta=0,Vl=e):Ta=0,Pn(),null}function Ir(){if(Mn!==null){var e=fc(_o),t=Ft.transition,r=Oe;try{if(Ft.transition=null,Oe=16>e?16:e,Mn===null)var a=!1;else{if(e=Mn,Mn=null,_o=0,(Se&6)!==0)throw Error(s(331));var l=Se;for(Se|=4,ne=e.current;ne!==null;){var c=ne,d=c.child;if((ne.flags&16)!==0){var x=c.deletions;if(x!==null){for(var w=0;w<x.length;w++){var A=x[w];for(ne=A;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:za(8,H,c)}var Y=H.child;if(Y!==null)Y.return=H,ne=Y;else for(;ne!==null;){H=ne;var _=H.sibling,J=H.return;if(dp(H),H===A){ne=null;break}if(_!==null){_.return=J,ne=_;break}ne=J}}}var re=c.alternate;if(re!==null){var ae=re.child;if(ae!==null){re.child=null;do{var We=ae.sibling;ae.sibling=null,ae=We}while(ae!==null)}}ne=c}}if((c.subtreeFlags&2064)!==0&&d!==null)d.return=c,ne=d;else e:for(;ne!==null;){if(c=ne,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:za(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,ne=C;break e}ne=c.return}}var k=e.current;for(ne=k;ne!==null;){d=ne;var T=d.child;if((d.subtreeFlags&2064)!==0&&T!==null)T.return=d,ne=T;else e:for(d=k;ne!==null;){if(x=ne,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Io(9,x)}}catch(le){$e(x,x.return,le)}if(x===d){ne=null;break e}var G=x.sibling;if(G!==null){G.return=x.return,ne=G;break e}ne=x.return}}if(Se=l,Pn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ya,e)}catch{}a=!0}return a}finally{Oe=r,Ft.transition=t}}return!1}function Tp(e,t,r){t=Ar(r,t),t=Wu(e,t,1),e=Dn(e,t,1),t=ht(),e!==null&&(Zr(e,1,t),wt(e,t))}function $e(e,t,r){if(e.tag===3)Tp(e,e,r);else for(;t!==null;){if(t.tag===3){Tp(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){e=Ar(r,e),e=qu(t,e,1),t=Dn(t,e,1),e=ht(),t!==null&&(Zr(t,1,e),wt(t,e));break}}t=t.return}}function Wh(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,nt===e&&(ot&r)===r&&(Ze===4||Ze===3&&(ot&130023424)===ot&&500>Ye()-Hl?er(e,0):Bl|=r),wt(e,t)}function Ap(e,t){t===0&&((e.mode&1)===0?t=1:(t=qa,qa<<=1,(qa&130023424)===0&&(qa=4194304)));var r=ht();e=dn(e,t),e!==null&&(Zr(e,t,r),wt(e,r))}function qh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ap(e,r)}function Gh(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),Ap(e,r)}var Op;Op=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)Et=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Et=!1,Fh(e,t,r);Et=(e.flags&131072)!==0}else Et=!1,Le&&(t.flags&1048576)!==0&&cu(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ro(e,t),e=t.pendingProps;var l=br(t,st.current);Cr(t,r),l=xl(null,t,a,e,l,r);var c=yl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(a)?(c=!0,mo(t)):c=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pl(t),l.updater=Ao,t.stateNode=l,l._reactInternals=t,zl(t,a,e,r),t=Al(null,t,a,!0,c,r)):(t.tag=0,Le&&c&&tl(t),mt(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Kh(a),e=$t(a,e),l){case 0:t=Tl(null,t,a,e,r);break e;case 1:t=np(null,t,a,e,r);break e;case 11:t=Xu(null,t,a,e,r);break e;case 14:t=Zu(null,t,a,$t(a.type,e),r);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),Tl(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),np(e,t,a,l,r);case 3:e:{if(rp(t),e===null)throw Error(s(387));a=t.pendingProps,c=t.memoizedState,l=c.element,xu(e,t),wo(t,a,null,r);var d=t.memoizedState;if(a=d.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){l=Ar(Error(s(423)),t),t=ap(e,t,a,r,l);break e}else if(a!==l){l=Ar(Error(s(424)),t),t=ap(e,t,a,r,l);break e}else for(Tt=An(t.stateNode.containerInfo.firstChild),Ct=t,Le=!0,Vt=null,r=gu(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),a===l){t=hn(e,t,r);break e}mt(e,t,a,r)}t=t.child}return t;case 5:return bu(t),e===null&&al(t),a=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,d=l.children,Qi(a,l)?d=null:c!==null&&Qi(a,c)&&(t.flags|=32),tp(e,t),mt(e,t,d,r),t.child;case 6:return e===null&&al(t),null;case 13:return op(e,t,r);case 4:return dl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=zr(t,null,a,r):mt(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),Xu(e,t,a,l,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,c=t.memoizedProps,d=l.value,Ie(yo,a._currentValue),a._currentValue=d,c!==null)if(Ut(c.value,d)){if(c.children===l.children&&!xt.current){t=hn(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var x=c.dependencies;if(x!==null){d=c.child;for(var w=x.firstContext;w!==null;){if(w.context===a){if(c.tag===1){w=mn(-1,r&-r),w.tag=2;var A=c.updateQueue;if(A!==null){A=A.shared;var H=A.pending;H===null?w.next=w:(w.next=H.next,H.next=w),A.pending=w}}c.lanes|=r,w=c.alternate,w!==null&&(w.lanes|=r),cl(c.return,r,t),x.lanes|=r;break}w=w.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(s(341));d.lanes|=r,x=d.alternate,x!==null&&(x.lanes|=r),cl(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}mt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,Cr(t,r),l=It(l),a=a(l),t.flags|=1,mt(e,t,a,r),t.child;case 14:return a=t.type,l=$t(a,t.pendingProps),l=$t(a.type,l),Zu(e,t,a,l,r);case 15:return Ju(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),Ro(e,t),t.tag=1,yt(a)?(e=!0,mo(t)):e=!1,Cr(t,r),$u(t,a,l),zl(t,a,l,r),Al(null,t,a,!0,e,r);case 19:return lp(e,t,r);case 22:return ep(e,t,r)}throw Error(s(156,t.tag))};function Rp(e,t){return uc(e,t)}function Qh(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,r,a){return new Qh(e,t,r,a)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kh(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===q)return 14}return 2}function Bn(e,t){var r=e.alternate;return r===null?(r=Lt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Uo(e,t,r,a,l,c){var d=2;if(a=e,typeof e=="function")Ql(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ge:return nr(r.children,l,c,t);case V:d=8,l|=8;break;case oe:return e=Lt(12,r,t,l|2),e.elementType=oe,e.lanes=c,e;case Ee:return e=Lt(13,r,t,l),e.elementType=Ee,e.lanes=c,e;case Re:return e=Lt(19,r,t,l),e.elementType=Re,e.lanes=c,e;case X:return Vo(r,l,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:d=10;break e;case se:d=9;break e;case ze:d=11;break e;case q:d=14;break e;case ye:d=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Lt(d,r,t,l),t.elementType=e,t.type=a,t.lanes=c,t}function nr(e,t,r,a){return e=Lt(7,e,a,t),e.lanes=r,e}function Vo(e,t,r,a){return e=Lt(22,e,a,t),e.elementType=X,e.lanes=r,e.stateNode={isHidden:!1},e}function Kl(e,t,r){return e=Lt(6,e,null,t),e.lanes=r,e}function Xl(e,t,r){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xh(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Zl(e,t,r,a,l,c,d,x,w){return e=new Xh(e,t,r,x,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Lt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(c),e}function Zh(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function Pp(e){if(!e)return Rn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(yt(r))return iu(e,r,t)}return t}function Ip(e,t,r,a,l,c,d,x,w){return e=Zl(r,a,!0,e,l,c,d,x,w),e.context=Pp(null),r=e.current,a=ht(),l=_n(r),c=mn(a,l),c.callback=t??null,Dn(r,c,l),e.current.lanes=l,Zr(e,l,a),wt(e,a),e}function $o(e,t,r,a){var l=t.current,c=ht(),d=_n(l);return r=Pp(r),t.context===null?t.context=r:t.pendingContext=r,t=mn(c,d),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Dn(l,t,d),e!==null&&(qt(e,l,d,c),bo(e,l,d)),d}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Jl(e,t){Dp(e,t),(e=e.alternate)&&Dp(e,t)}function Jh(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}Wo.prototype.render=es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));$o(e,t,null,null)},Wo.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){$o(null,e,null,null)}),t[sn]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Sn.length&&t!==0&&t<Sn[r].priority;r++);Sn.splice(r,0,e),r===0&&bc(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function ef(e,t,r,a,l){if(l){if(typeof a=="function"){var c=a;a=function(){var A=Yo(d);c.call(A)}}var d=Ip(t,a,e,0,null,!1,!1,"",Lp);return e._reactRootContainer=d,e[sn]=d.current,da(e.nodeType===8?e.parentNode:e),Jn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var x=a;a=function(){var A=Yo(w);x.call(A)}}var w=Zl(e,0,!1,null,null,!1,!1,"",Lp);return e._reactRootContainer=w,e[sn]=w.current,da(e.nodeType===8?e.parentNode:e),Jn(function(){$o(t,w,r,a)}),w}function Go(e,t,r,a,l){var c=r._reactRootContainer;if(c){var d=c;if(typeof l=="function"){var x=l;l=function(){var w=Yo(d);x.call(w)}}$o(t,d,e,l)}else d=ef(r,t,e,l,a);return Yo(d)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Xr(t.pendingLanes);r!==0&&(zi(t,r|1),wt(t,Ye()),(Se&6)===0&&(Pr=Ye()+500,Pn()))}break;case 13:Jn(function(){var a=dn(e,1);if(a!==null){var l=ht();qt(a,e,1,l)}}),Jl(e,1)}},Si=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var r=ht();qt(t,e,134217728,r)}Jl(e,134217728)}},vc=function(e){if(e.tag===13){var t=_n(e),r=dn(e,t);if(r!==null){var a=ht();qt(r,e,t,a)}Jl(e,t)}},xc=function(){return Oe},yc=function(e,t){var r=Oe;try{return Oe=e,t()}finally{Oe=r}},xi=function(e,t,r){switch(t){case"input":if(Ot(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=uo(a);if(!l)throw Error(s(90));Q(a),Ot(a,l)}}}break;case"textarea":Gs(e,r);break;case"select":t=r.value,t!=null&&dt(e,!!r.multiple,t,!1)}},rc=Wl,ac=Jn;var tf={usingClientEntryPoint:!1,Events:[fa,yr,uo,tc,nc,Wl]},Aa={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nf={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||Jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Ya=Qo.inject(nf),Xt=Qo}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf,kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(t))throw Error(s(200));return Zh(e,t,null,r)},kt.createRoot=function(e,t){if(!ts(e))throw Error(s(299));var r=!1,a="",l=Fp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Zl(e,1,!1,null,null,r,!1,a,l),e[sn]=t.current,da(e.nodeType===8?e.parentNode:e),new es(t)},kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=sc(t),e=e===null?null:e.stateNode,e},kt.flushSync=function(e){return Jn(e)},kt.hydrate=function(e,t,r){if(!qo(t))throw Error(s(200));return Go(null,e,t,!0,r)},kt.hydrateRoot=function(e,t,r){if(!ts(e))throw Error(s(405));var a=r!=null&&r.hydratedSources||null,l=!1,c="",d=Fp;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Ip(t,null,e,1,r??null,l,!1,c,d),e[sn]=t.current,da(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Wo(t)},kt.render=function(e,t,r){if(!qo(t))throw Error(s(200));return Go(null,e,t,!1,r)},kt.unmountComponentAtNode=function(e){if(!qo(e))throw Error(s(40));return e._reactRootContainer?(Jn(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1},kt.unstable_batchedUpdates=Wl,kt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!qo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Go(e,t,r,!1,a)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var Up;function Cd(){if(Up)return rs.exports;Up=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),rs.exports=df(),rs.exports}var Vp;function mf(){if(Vp)return Ko;Vp=1;var i=Cd();return Ko.createRoot=i.createRoot,Ko.hydrateRoot=i.hydrateRoot,Ko}var hf=mf();Cd();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)({}).hasOwnProperty.call(s,u)&&(i[u]=s[u])}return i},Ma.apply(null,arguments)}var Un;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Un||(Un={}));const $p="popstate";function ff(i){i===void 0&&(i={});function o(u,p){let{pathname:m,search:f,hash:g}=u.location;return ws("",{pathname:m,search:f,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(u,p){return typeof p=="string"?p:ni(p)}return vf(o,s,null,i)}function Ve(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Td(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function gf(){return Math.random().toString(36).substr(2,8)}function Yp(i,o){return{usr:i.state,key:i.key,idx:o}}function ws(i,o,s,u){return s===void 0&&(s=null),Ma({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof o=="string"?Vr(o):o,{state:s,key:o&&o.key||u||gf()})}function ni(i){let{pathname:o="/",search:s="",hash:u=""}=i;return s&&s!=="?"&&(o+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function Vr(i){let o={};if(i){let s=i.indexOf("#");s>=0&&(o.hash=i.substr(s),i=i.substr(0,s));let u=i.indexOf("?");u>=0&&(o.search=i.substr(u),i=i.substr(0,u)),i&&(o.pathname=i)}return o}function vf(i,o,s,u){u===void 0&&(u={});let{window:p=document.defaultView,v5Compat:m=!1}=u,f=p.history,g=Un.Pop,h=null,v=y();v==null&&(v=0,f.replaceState(Ma({},f.state,{idx:v}),""));function y(){return(f.state||{idx:null}).idx}function E(){g=Un.Pop;let z=y(),D=z==null?null:z-v;v=z,h&&h({action:g,location:R.location,delta:D})}function S(z,D){g=Un.Push;let U=ws(R.location,z,D);v=y()+1;let P=Yp(U,v),W=R.createHref(U);try{f.pushState(P,"",W)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;p.location.assign(W)}m&&h&&h({action:g,location:R.location,delta:1})}function O(z,D){g=Un.Replace;let U=ws(R.location,z,D);v=y();let P=Yp(U,v),W=R.createHref(U);f.replaceState(P,"",W),m&&h&&h({action:g,location:R.location,delta:0})}function I(z){let D=p.location.origin!=="null"?p.location.origin:p.location.href,U=typeof z=="string"?z:ni(z);return U=U.replace(/ $/,"%20"),Ve(D,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,D)}let R={get action(){return g},get location(){return i(p,f)},listen(z){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener($p,E),h=z,()=>{p.removeEventListener($p,E),h=null}},createHref(z){return o(p,z)},createURL:I,encodeLocation(z){let D=I(z);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:S,replace:O,go(z){return f.go(z)}};return R}var Wp;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Wp||(Wp={}));function xf(i,o,s){return s===void 0&&(s="/"),yf(i,o,s)}function yf(i,o,s,u){let p=typeof o=="string"?Vr(o):o,m=Hr(p.pathname||"/",s);if(m==null)return null;let f=Ad(i);Ef(f);let g=null,h=Rf(m);for(let v=0;g==null&&v<f.length;++v)g=Af(f[v],h);return g}function Ad(i,o,s,u){o===void 0&&(o=[]),s===void 0&&(s=[]),u===void 0&&(u="");let p=(m,f,g)=>{let h={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};h.relativePath.startsWith("/")&&(Ve(h.relativePath.startsWith(u),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(u.length));let v=Vn([u,h.relativePath]),y=s.concat(h);m.children&&m.children.length>0&&(Ve(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Ad(m.children,o,y,v)),!(m.path==null&&!m.index)&&o.push({path:v,score:Cf(v,m.index),routesMeta:y})};return i.forEach((m,f)=>{var g;if(m.path===""||!((g=m.path)!=null&&g.includes("?")))p(m,f);else for(let h of Od(m.path))p(m,f,h)}),o}function Od(i){let o=i.split("/");if(o.length===0)return[];let[s,...u]=o,p=s.endsWith("?"),m=s.replace(/\?$/,"");if(u.length===0)return p?[m,""]:[m];let f=Od(u.join("/")),g=[];return g.push(...f.map(h=>h===""?m:[m,h].join("/"))),p&&g.push(...f),g.map(h=>i.startsWith("/")&&h===""?"/":h)}function Ef(i){i.sort((o,s)=>o.score!==s.score?s.score-o.score:Tf(o.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}const bf=/^:[\w-]+$/,wf=3,kf=2,Nf=1,zf=10,Sf=-2,qp=i=>i==="*";function Cf(i,o){let s=i.split("/"),u=s.length;return s.some(qp)&&(u+=Sf),o&&(u+=kf),s.filter(p=>!qp(p)).reduce((p,m)=>p+(bf.test(m)?wf:m===""?Nf:zf),u)}function Tf(i,o){return i.length===o.length&&i.slice(0,-1).every((u,p)=>u===o[p])?i[i.length-1]-o[o.length-1]:0}function Af(i,o,s){let{routesMeta:u}=i,p={},m="/",f=[];for(let g=0;g<u.length;++g){let h=u[g],v=g===u.length-1,y=m==="/"?o:o.slice(m.length)||"/",E=ks({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},y),S=h.route;if(!E)return null;Object.assign(p,E.params),f.push({params:p,pathname:Vn([m,E.pathname]),pathnameBase:Df(Vn([m,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(m=Vn([m,E.pathnameBase]))}return f}function ks(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,u]=Of(i.path,i.caseSensitive,i.end),p=o.match(s);if(!p)return null;let m=p[0],f=m.replace(/(.)\/+$/,"$1"),g=p.slice(1);return{params:u.reduce((v,y,E)=>{let{paramName:S,isOptional:O}=y;if(S==="*"){let R=g[E]||"";f=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const I=g[E];return O&&!I?v[S]=void 0:v[S]=(I||"").replace(/%2F/g,"/"),v},{}),pathname:m,pathnameBase:f,pattern:i}}function Of(i,o,s){o===void 0&&(o=!1),s===void 0&&(s=!0),Td(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let u=[],p="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,h)=>(u.push({paramName:g,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),p+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":i!==""&&i!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,o?void 0:"i"),u]}function Rf(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Td(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),i}}function Hr(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,u=i.charAt(s);return u&&u!=="/"?null:i.slice(s)||"/"}function Pf(i,o){o===void 0&&(o="/");let{pathname:s,search:u="",hash:p=""}=typeof i=="string"?Vr(i):i,m;return s?(s=Rd(s),s.startsWith("/")?m=Gp(s.substring(1),"/"):m=Gp(s,o)):m=o,{pathname:m,search:Ff(u),hash:Lf(p)}}function Gp(i,o){let s=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function is(i,o,s,u){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function If(i){return i.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Us(i,o){let s=If(i);return o?s.map((u,p)=>p===s.length-1?u.pathname:u.pathnameBase):s.map(u=>u.pathnameBase)}function Vs(i,o,s,u){u===void 0&&(u=!1);let p;typeof i=="string"?p=Vr(i):(p=Ma({},i),Ve(!p.pathname||!p.pathname.includes("?"),is("?","pathname","search",p)),Ve(!p.pathname||!p.pathname.includes("#"),is("#","pathname","hash",p)),Ve(!p.search||!p.search.includes("#"),is("#","search","hash",p)));let m=i===""||p.pathname==="",f=m?"/":p.pathname,g;if(f==null)g=s;else{let E=o.length-1;if(!u&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),E-=1;p.pathname=S.join("/")}g=E>=0?o[E]:"/"}let h=Pf(p,g),v=f&&f!=="/"&&f.endsWith("/"),y=(m||f===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(v||y)&&(h.pathname+="/"),h}const Rd=i=>i.replace(/\/\/+/g,"/"),Vn=i=>Rd(i.join("/")),Df=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Ff=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Lf=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Mf(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Pd=["post","put","patch","delete"];new Set(Pd);const _f=["get",...Pd];new Set(_f);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)({}).hasOwnProperty.call(s,u)&&(i[u]=s[u])}return i},_a.apply(null,arguments)}const si=b.createContext(null),Id=b.createContext(null),En=b.createContext(null),ci=b.createContext(null),on=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Dd=b.createContext(null);function jf(i,o){let{relative:s}=o===void 0?{}:o;$r()||Ve(!1);let{basename:u,navigator:p}=b.useContext(En),{hash:m,pathname:f,search:g}=ui(i,{relative:s}),h=f;return u!=="/"&&(h=f==="/"?u:Vn([u,f])),p.createHref({pathname:h,search:g,hash:m})}function $r(){return b.useContext(ci)!=null}function ln(){return $r()||Ve(!1),b.useContext(ci).location}function Fd(i){b.useContext(En).static||b.useLayoutEffect(i)}function bn(){let{isDataRoute:i}=b.useContext(on);return i?eg():Bf()}function Bf(){$r()||Ve(!1);let i=b.useContext(si),{basename:o,future:s,navigator:u}=b.useContext(En),{matches:p}=b.useContext(on),{pathname:m}=ln(),f=JSON.stringify(Us(p,s.v7_relativeSplatPath)),g=b.useRef(!1);return Fd(()=>{g.current=!0}),b.useCallback(function(v,y){if(y===void 0&&(y={}),!g.current)return;if(typeof v=="number"){u.go(v);return}let E=Vs(v,JSON.parse(f),m,y.relative==="path");i==null&&o!=="/"&&(E.pathname=E.pathname==="/"?o:Vn([o,E.pathname])),(y.replace?u.replace:u.push)(E,y.state,y)},[o,u,f,m,i])}const Hf=b.createContext(null);function Uf(i){let o=b.useContext(on).outlet;return o&&b.createElement(Hf.Provider,{value:i},o)}function $s(){let{matches:i}=b.useContext(on),o=i[i.length-1];return o?o.params:{}}function ui(i,o){let{relative:s}=o===void 0?{}:o,{future:u}=b.useContext(En),{matches:p}=b.useContext(on),{pathname:m}=ln(),f=JSON.stringify(Us(p,u.v7_relativeSplatPath));return b.useMemo(()=>Vs(i,JSON.parse(f),m,s==="path"),[i,f,m,s])}function Vf(i,o){return $f(i,o)}function $f(i,o,s,u){$r()||Ve(!1);let{navigator:p}=b.useContext(En),{matches:m}=b.useContext(on),f=m[m.length-1],g=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let v=ln(),y;if(o){var E;let z=typeof o=="string"?Vr(o):o;h==="/"||(E=z.pathname)!=null&&E.startsWith(h)||Ve(!1),y=z}else y=v;let S=y.pathname||"/",O=S;if(h!=="/"){let z=h.replace(/^\//,"").split("/");O="/"+S.replace(/^\//,"").split("/").slice(z.length).join("/")}let I=xf(i,{pathname:O}),R=Qf(I&&I.map(z=>Object.assign({},z,{params:Object.assign({},g,z.params),pathname:Vn([h,p.encodeLocation?p.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?h:Vn([h,p.encodeLocation?p.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),m,s,u);return o&&R?b.createElement(ci.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Un.Pop}},R):R}function Yf(){let i=Jf(),o=Mf(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),s?b.createElement("pre",{style:p},s):null,null)}const Wf=b.createElement(Yf,null);class qf extends b.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,s){return s.location!==o.location||s.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:s.error,location:s.location,revalidation:o.revalidation||s.revalidation}}componentDidCatch(o,s){console.error("React Router caught the following error during render",o,s)}render(){return this.state.error!==void 0?b.createElement(on.Provider,{value:this.props.routeContext},b.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gf(i){let{routeContext:o,match:s,children:u}=i,p=b.useContext(si);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),b.createElement(on.Provider,{value:o},u)}function Qf(i,o,s,u){var p;if(o===void 0&&(o=[]),s===void 0&&(s=null),u===void 0&&(u=null),i==null){var m;if(!s)return null;if(s.errors)i=s.matches;else if((m=u)!=null&&m.v7_partialHydration&&o.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let f=i,g=(p=s)==null?void 0:p.errors;if(g!=null){let y=f.findIndex(E=>E.route.id&&(g==null?void 0:g[E.route.id])!==void 0);y>=0||Ve(!1),f=f.slice(0,Math.min(f.length,y+1))}let h=!1,v=-1;if(s&&u&&u.v7_partialHydration)for(let y=0;y<f.length;y++){let E=f[y];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(v=y),E.route.id){let{loaderData:S,errors:O}=s,I=E.route.loader&&S[E.route.id]===void 0&&(!O||O[E.route.id]===void 0);if(E.route.lazy||I){h=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((y,E,S)=>{let O,I=!1,R=null,z=null;s&&(O=g&&E.route.id?g[E.route.id]:void 0,R=E.route.errorElement||Wf,h&&(v<0&&S===0?(tg("route-fallback"),I=!0,z=null):v===S&&(I=!0,z=E.route.hydrateFallbackElement||null)));let D=o.concat(f.slice(0,S+1)),U=()=>{let P;return O?P=R:I?P=z:E.route.Component?P=b.createElement(E.route.Component,null):E.route.element?P=E.route.element:P=y,b.createElement(Gf,{match:E,routeContext:{outlet:y,matches:D,isDataRoute:s!=null},children:P})};return s&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?b.createElement(qf,{location:s.location,revalidation:s.revalidation,component:R,error:O,children:U(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):U()},null)}var Ld=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Ld||{}),Md=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Md||{});function Kf(i){let o=b.useContext(si);return o||Ve(!1),o}function Xf(i){let o=b.useContext(Id);return o||Ve(!1),o}function Zf(i){let o=b.useContext(on);return o||Ve(!1),o}function _d(i){let o=Zf(),s=o.matches[o.matches.length-1];return s.route.id||Ve(!1),s.route.id}function Jf(){var i;let o=b.useContext(Dd),s=Xf(),u=_d();return o!==void 0?o:(i=s.errors)==null?void 0:i[u]}function eg(){let{router:i}=Kf(Ld.UseNavigateStable),o=_d(Md.UseNavigateStable),s=b.useRef(!1);return Fd(()=>{s.current=!0}),b.useCallback(function(p,m){m===void 0&&(m={}),s.current&&(typeof p=="number"?i.navigate(p):i.navigate(p,_a({fromRouteId:o},m)))},[i,o])}const Qp={};function tg(i,o,s){Qp[i]||(Qp[i]=!0)}function ng(i,o){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function rg(i){let{to:o,replace:s,state:u,relative:p}=i;$r()||Ve(!1);let{future:m,static:f}=b.useContext(En),{matches:g}=b.useContext(on),{pathname:h}=ln(),v=bn(),y=Vs(o,Us(g,m.v7_relativeSplatPath),h,p==="path"),E=JSON.stringify(y);return b.useEffect(()=>v(JSON.parse(E),{replace:s,state:u,relative:p}),[v,E,p,s,u]),null}function ag(i){return Uf(i.context)}function Ge(i){Ve(!1)}function og(i){let{basename:o="/",children:s=null,location:u,navigationType:p=Un.Pop,navigator:m,static:f=!1,future:g}=i;$r()&&Ve(!1);let h=o.replace(/^\/*/,"/"),v=b.useMemo(()=>({basename:h,navigator:m,static:f,future:_a({v7_relativeSplatPath:!1},g)}),[h,g,m,f]);typeof u=="string"&&(u=Vr(u));let{pathname:y="/",search:E="",hash:S="",state:O=null,key:I="default"}=u,R=b.useMemo(()=>{let z=Hr(y,h);return z==null?null:{location:{pathname:z,search:E,hash:S,state:O,key:I},navigationType:p}},[h,y,E,S,O,I,p]);return R==null?null:b.createElement(En.Provider,{value:v},b.createElement(ci.Provider,{children:s,value:R}))}function ig(i){let{children:o,location:s}=i;return Vf(Ns(o),s)}new Promise(()=>{});function Ns(i,o){o===void 0&&(o=[]);let s=[];return b.Children.forEach(i,(u,p)=>{if(!b.isValidElement(u))return;let m=[...o,p];if(u.type===b.Fragment){s.push.apply(s,Ns(u.props.children,m));return}u.type!==Ge&&Ve(!1),!u.props.index||!u.props.children||Ve(!1);let f={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=Ns(u.props.children,m)),s.push(f)}),s}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)({}).hasOwnProperty.call(s,u)&&(i[u]=s[u])}return i},ri.apply(null,arguments)}function jd(i,o){if(i==null)return{};var s={};for(var u in i)if({}.hasOwnProperty.call(i,u)){if(o.indexOf(u)!==-1)continue;s[u]=i[u]}return s}function lg(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function sg(i,o){return i.button===0&&(!o||o==="_self")&&!lg(i)}function zs(i){return i===void 0&&(i=""),new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((o,s)=>{let u=i[s];return o.concat(Array.isArray(u)?u.map(p=>[s,p]):[[s,u]])},[]))}function cg(i,o){let s=zs(i);return o&&o.forEach((u,p)=>{s.has(p)||o.getAll(p).forEach(m=>{s.append(p,m)})}),s}const ug=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],pg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],dg="6";try{window.__reactRouterVersion=dg}catch{}const mg=b.createContext({isTransitioning:!1}),hg="startTransition",Kp=cf[hg];function fg(i){let{basename:o,children:s,future:u,window:p}=i,m=b.useRef();m.current==null&&(m.current=ff({window:p,v5Compat:!0}));let f=m.current,[g,h]=b.useState({action:f.action,location:f.location}),{v7_startTransition:v}=u||{},y=b.useCallback(E=>{v&&Kp?Kp(()=>h(E)):h(E)},[h,v]);return b.useLayoutEffect(()=>f.listen(y),[f,y]),b.useEffect(()=>ng(u),[u]),b.createElement(og,{basename:o,children:s,location:g.location,navigationType:g.action,navigator:f,future:u})}const gg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=b.forwardRef(function(o,s){let{onClick:u,relative:p,reloadDocument:m,replace:f,state:g,target:h,to:v,preventScrollReset:y,viewTransition:E}=o,S=jd(o,ug),{basename:O}=b.useContext(En),I,R=!1;if(typeof v=="string"&&vg.test(v)&&(I=v,gg))try{let P=new URL(window.location.href),W=v.startsWith("//")?new URL(P.protocol+v):new URL(v),ee=Hr(W.pathname,O);W.origin===P.origin&&ee!=null?v=ee+W.search+W.hash:R=!0}catch{}let z=jf(v,{relative:p}),D=yg(v,{replace:f,state:g,target:h,preventScrollReset:y,relative:p,viewTransition:E});function U(P){u&&u(P),P.defaultPrevented||D(P)}return b.createElement("a",ri({},S,{href:I||z,onClick:R||m?u:U,ref:s,target:h}))}),nn=b.forwardRef(function(o,s){let{"aria-current":u="page",caseSensitive:p=!1,className:m="",end:f=!1,style:g,to:h,viewTransition:v,children:y}=o,E=jd(o,pg),S=ui(h,{relative:E.relative}),O=ln(),I=b.useContext(Id),{navigator:R,basename:z}=b.useContext(En),D=I!=null&&bg(S)&&v===!0,U=R.encodeLocation?R.encodeLocation(S).pathname:S.pathname,P=O.pathname,W=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;p||(P=P.toLowerCase(),W=W?W.toLowerCase():null,U=U.toLowerCase()),W&&z&&(W=Hr(W,z)||W);const ee=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let ie=P===U||!f&&P.startsWith(U)&&P.charAt(ee)==="/",ge=W!=null&&(W===U||!f&&W.startsWith(U)&&W.charAt(U.length)==="/"),V={isActive:ie,isPending:ge,isTransitioning:D},oe=ie?u:void 0,M;typeof m=="function"?M=m(V):M=[m,ie?"active":null,ge?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let se=typeof g=="function"?g(V):g;return b.createElement(K,ri({},E,{"aria-current":oe,className:M,ref:s,style:se,to:h,viewTransition:v}),typeof y=="function"?y(V):y)});var Ss;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Ss||(Ss={}));var Xp;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Xp||(Xp={}));function xg(i){let o=b.useContext(si);return o||Ve(!1),o}function yg(i,o){let{target:s,replace:u,state:p,preventScrollReset:m,relative:f,viewTransition:g}=o===void 0?{}:o,h=bn(),v=ln(),y=ui(i,{relative:f});return b.useCallback(E=>{if(sg(E,s)){E.preventDefault();let S=u!==void 0?u:ni(v)===ni(y);h(i,{replace:S,state:p,preventScrollReset:m,relative:f,viewTransition:g})}},[v,h,y,u,p,s,i,m,f,g])}function Eg(i){let o=b.useRef(zs(i)),s=b.useRef(!1),u=ln(),p=b.useMemo(()=>cg(u.search,s.current?null:o.current),[u.search]),m=bn(),f=b.useCallback((g,h)=>{const v=zs(typeof g=="function"?g(p):g);s.current=!0,m("?"+v,h)},[m,p]);return[p,f]}function bg(i,o){o===void 0&&(o={});let s=b.useContext(mg);s==null&&Ve(!1);let{basename:u}=xg(Ss.useViewTransitionState),p=ui(i,{relative:o.relative});if(!s.isTransitioning)return!1;let m=Hr(s.currentLocation.pathname,u)||s.currentLocation.pathname,f=Hr(s.nextLocation.pathname,u)||s.nextLocation.pathname;return ks(p.pathname,f)!=null||ks(p.pathname,m)!=null}var ls,Zp;function wg(){if(Zp)return ls;Zp=1;var i=typeof Element<"u",o=typeof Map=="function",s=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var g,h,v;if(Array.isArray(m)){if(g=m.length,g!=f.length)return!1;for(h=g;h--!==0;)if(!p(m[h],f[h]))return!1;return!0}var y;if(o&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(y=m.entries();!(h=y.next()).done;)if(!f.has(h.value[0]))return!1;for(y=m.entries();!(h=y.next()).done;)if(!p(h.value[1],f.get(h.value[0])))return!1;return!0}if(s&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(y=m.entries();!(h=y.next()).done;)if(!f.has(h.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(g=m.length,g!=f.length)return!1;for(h=g;h--!==0;)if(m[h]!==f[h])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(v=Object.keys(m),g=v.length,g!==Object.keys(f).length)return!1;for(h=g;h--!==0;)if(!Object.prototype.hasOwnProperty.call(f,v[h]))return!1;if(i&&m instanceof Element)return!1;for(h=g;h--!==0;)if(!((v[h]==="_owner"||v[h]==="__v"||v[h]==="__o")&&m.$$typeof)&&!p(m[v[h]],f[v[h]]))return!1;return!0}return m!==m&&f!==f}return ls=function(f,g){try{return p(f,g)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},ls}var kg=wg();const Bd=ir(kg);var ss,Jp;function Ng(){if(Jp)return ss;Jp=1;var i=function(o,s,u,p,m,f,g,h){if(!o){var v;if(s===void 0)v=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[u,p,m,f,g,h],E=0;v=new Error(s.replace(/%s/g,function(){return y[E++]})),v.name="Invariant Violation"}throw v.framesToPop=1,v}};return ss=i,ss}var zg=Ng();const ed=ir(zg);var cs,td;function Sg(){return td||(td=1,cs=function(o,s,u,p){var m=u?u.call(p,o,s):void 0;if(m!==void 0)return!!m;if(o===s)return!0;if(typeof o!="object"||!o||typeof s!="object"||!s)return!1;var f=Object.keys(o),g=Object.keys(s);if(f.length!==g.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(s),v=0;v<f.length;v++){var y=f[v];if(!h(y))return!1;var E=o[y],S=s[y];if(m=u?u.call(p,E,S,y):void 0,m===!1||m===void 0&&E!==S)return!1}return!0}),cs}var Cg=Sg();const Tg=ir(Cg);var Hd=(i=>(i.BASE="base",i.BODY="body",i.HEAD="head",i.HTML="html",i.LINK="link",i.META="meta",i.NOSCRIPT="noscript",i.SCRIPT="script",i.STYLE="style",i.TITLE="title",i.FRAGMENT="Symbol(react.fragment)",i))(Hd||{}),us={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},nd=Object.values(Hd),Ys={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ag=Object.entries(Ys).reduce((i,[o,s])=>(i[s]=o,i),{}),Gt="data-rh",Lr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Mr=(i,o)=>{for(let s=i.length-1;s>=0;s-=1){const u=i[s];if(Object.prototype.hasOwnProperty.call(u,o))return u[o]}return null},Og=i=>{let o=Mr(i,"title");const s=Mr(i,Lr.TITLE_TEMPLATE);if(Array.isArray(o)&&(o=o.join("")),s&&o)return s.replace(/%s/g,()=>o);const u=Mr(i,Lr.DEFAULT_TITLE);return o||u||void 0},Rg=i=>Mr(i,Lr.ON_CHANGE_CLIENT_STATE)||(()=>{}),ps=(i,o)=>o.filter(s=>typeof s[i]<"u").map(s=>s[i]).reduce((s,u)=>({...s,...u}),{}),Pg=(i,o)=>o.filter(s=>typeof s.base<"u").map(s=>s.base).reverse().reduce((s,u)=>{if(!s.length){const p=Object.keys(u);for(let m=0;m<p.length;m+=1){const g=p[m].toLowerCase();if(i.indexOf(g)!==-1&&u[g])return s.concat(u)}}return s},[]),Ig=i=>console&&typeof console.warn=="function"&&console.warn(i),Oa=(i,o,s)=>{const u={};return s.filter(p=>Array.isArray(p[i])?!0:(typeof p[i]<"u"&&Ig(`Helmet: ${i} should be of type "Array". Instead found type "${typeof p[i]}"`),!1)).map(p=>p[i]).reverse().reduce((p,m)=>{const f={};m.filter(h=>{let v;const y=Object.keys(h);for(let S=0;S<y.length;S+=1){const O=y[S],I=O.toLowerCase();o.indexOf(I)!==-1&&!(v==="rel"&&h[v].toLowerCase()==="canonical")&&!(I==="rel"&&h[I].toLowerCase()==="stylesheet")&&(v=I),o.indexOf(O)!==-1&&(O==="innerHTML"||O==="cssText"||O==="itemprop")&&(v=O)}if(!v||!h[v])return!1;const E=h[v].toLowerCase();return u[v]||(u[v]={}),f[v]||(f[v]={}),u[v][E]?!1:(f[v][E]=!0,!0)}).reverse().forEach(h=>p.push(h));const g=Object.keys(f);for(let h=0;h<g.length;h+=1){const v=g[h],y={...u[v],...f[v]};u[v]=y}return p},[]).reverse()},Dg=(i,o)=>{if(Array.isArray(i)&&i.length){for(let s=0;s<i.length;s+=1)if(i[s][o])return!0}return!1},Fg=i=>({baseTag:Pg(["href"],i),bodyAttributes:ps("bodyAttributes",i),defer:Mr(i,Lr.DEFER),encode:Mr(i,Lr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ps("htmlAttributes",i),linkTags:Oa("link",["rel","href"],i),metaTags:Oa("meta",["name","charset","http-equiv","property","itemprop"],i),noscriptTags:Oa("noscript",["innerHTML"],i),onChangeClientState:Rg(i),scriptTags:Oa("script",["src","innerHTML"],i),styleTags:Oa("style",["cssText"],i),title:Og(i),titleAttributes:ps("titleAttributes",i),prioritizeSeoTags:Dg(i,Lr.PRIORITIZE_SEO_TAGS)}),Ud=i=>Array.isArray(i)?i.join(""):i,Lg=(i,o)=>{const s=Object.keys(i);for(let u=0;u<s.length;u+=1)if(o[s[u]]&&o[s[u]].includes(i[s[u]]))return!0;return!1},ds=(i,o)=>Array.isArray(i)?i.reduce((s,u)=>(Lg(u,o)?s.priority.push(u):s.default.push(u),s),{priority:[],default:[]}):{default:i,priority:[]},rd=(i,o)=>({...i,[o]:void 0}),Mg=["noscript","script","style"],Cs=(i,o=!0)=>o===!1?String(i):String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Vd=i=>Object.keys(i).reduce((o,s)=>{const u=typeof i[s]<"u"?`${s}="${i[s]}"`:`${s}`;return o?`${o} ${u}`:u},""),_g=(i,o,s,u)=>{const p=Vd(s),m=Ud(o);return p?`<${i} ${Gt}="true" ${p}>${Cs(m,u)}</${i}>`:`<${i} ${Gt}="true">${Cs(m,u)}</${i}>`},jg=(i,o,s=!0)=>o.reduce((u,p)=>{const m=p,f=Object.keys(m).filter(v=>!(v==="innerHTML"||v==="cssText")).reduce((v,y)=>{const E=typeof m[y]>"u"?y:`${y}="${Cs(m[y],s)}"`;return v?`${v} ${E}`:E},""),g=m.innerHTML||m.cssText||"",h=Mg.indexOf(i)===-1;return`${u}<${i} ${Gt}="true" ${f}${h?"/>":`>${g}</${i}>`}`},""),$d=(i,o={})=>Object.keys(i).reduce((s,u)=>{const p=Ys[u];return s[p||u]=i[u],s},o),Bg=(i,o,s)=>{const u={key:o,[Gt]:!0},p=$d(s,u);return[n.createElement("title",p,o)]},ti=(i,o)=>o.map((s,u)=>{const p={key:u,[Gt]:!0};return Object.keys(s).forEach(m=>{const g=Ys[m]||m;if(g==="innerHTML"||g==="cssText"){const h=s.innerHTML||s.cssText;p.dangerouslySetInnerHTML={__html:h}}else p[g]=s[m]}),n.createElement(i,p)}),_t=(i,o,s=!0)=>{switch(i){case"title":return{toComponent:()=>Bg(i,o.title,o.titleAttributes),toString:()=>_g(i,o.title,o.titleAttributes,s)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>$d(o),toString:()=>Vd(o)};default:return{toComponent:()=>ti(i,o),toString:()=>jg(i,o,s)}}},Hg=({metaTags:i,linkTags:o,scriptTags:s,encode:u})=>{const p=ds(i,us.meta),m=ds(o,us.link),f=ds(s,us.script);return{priorityMethods:{toComponent:()=>[...ti("meta",p.priority),...ti("link",m.priority),...ti("script",f.priority)],toString:()=>`${_t("meta",p.priority,u)} ${_t("link",m.priority,u)} ${_t("script",f.priority,u)}`},metaTags:p.default,linkTags:m.default,scriptTags:f.default}},Ug=i=>{const{baseTag:o,bodyAttributes:s,encode:u=!0,htmlAttributes:p,noscriptTags:m,styleTags:f,title:g="",titleAttributes:h,prioritizeSeoTags:v}=i;let{linkTags:y,metaTags:E,scriptTags:S}=i,O={toComponent:()=>{},toString:()=>""};return v&&({priorityMethods:O,linkTags:y,metaTags:E,scriptTags:S}=Hg(i)),{priority:O,base:_t("base",o,u),bodyAttributes:_t("bodyAttributes",s,u),htmlAttributes:_t("htmlAttributes",p,u),link:_t("link",y,u),meta:_t("meta",E,u),noscript:_t("noscript",m,u),script:_t("script",S,u),style:_t("style",f,u),title:_t("title",{title:g,titleAttributes:h},u)}},Ts=Ug,Xo=[],Yd=!!(typeof window<"u"&&window.document&&window.document.createElement),As=class{constructor(i,o){gn(this,"instances",[]);gn(this,"canUseDOM",Yd);gn(this,"context");gn(this,"value",{setHelmet:i=>{this.context.helmet=i},helmetInstances:{get:()=>this.canUseDOM?Xo:this.instances,add:i=>{(this.canUseDOM?Xo:this.instances).push(i)},remove:i=>{const o=(this.canUseDOM?Xo:this.instances).indexOf(i);(this.canUseDOM?Xo:this.instances).splice(o,1)}}});this.context=i,this.canUseDOM=o||!1,o||(i.helmet=Ts({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Vg={},Wd=n.createContext(Vg),ar,qd=(ar=class extends b.Component{constructor(s){super(s);gn(this,"helmetData");this.helmetData=new As(this.props.context||{},ar.canUseDOM)}render(){return n.createElement(Wd.Provider,{value:this.helmetData.value},this.props.children)}},gn(ar,"canUseDOM",Yd),ar),Dr=(i,o)=>{const s=document.head||document.querySelector("head"),u=s.querySelectorAll(`${i}[${Gt}]`),p=[].slice.call(u),m=[];let f;return o&&o.length&&o.forEach(g=>{const h=document.createElement(i);for(const v in g)if(Object.prototype.hasOwnProperty.call(g,v))if(v==="innerHTML")h.innerHTML=g.innerHTML;else if(v==="cssText")h.styleSheet?h.styleSheet.cssText=g.cssText:h.appendChild(document.createTextNode(g.cssText));else{const y=v,E=typeof g[y]>"u"?"":g[y];h.setAttribute(v,E)}h.setAttribute(Gt,"true"),p.some((v,y)=>(f=y,h.isEqualNode(v)))?p.splice(f,1):m.push(h)}),p.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),m.forEach(g=>s.appendChild(g)),{oldTags:p,newTags:m}},Os=(i,o)=>{const s=document.getElementsByTagName(i)[0];if(!s)return;const u=s.getAttribute(Gt),p=u?u.split(","):[],m=[...p],f=Object.keys(o);for(const g of f){const h=o[g]||"";s.getAttribute(g)!==h&&s.setAttribute(g,h),p.indexOf(g)===-1&&p.push(g);const v=m.indexOf(g);v!==-1&&m.splice(v,1)}for(let g=m.length-1;g>=0;g-=1)s.removeAttribute(m[g]);p.length===m.length?s.removeAttribute(Gt):s.getAttribute(Gt)!==f.join(",")&&s.setAttribute(Gt,f.join(","))},$g=(i,o)=>{typeof i<"u"&&document.title!==i&&(document.title=Ud(i)),Os("title",o)},ad=(i,o)=>{const{baseTag:s,bodyAttributes:u,htmlAttributes:p,linkTags:m,metaTags:f,noscriptTags:g,onChangeClientState:h,scriptTags:v,styleTags:y,title:E,titleAttributes:S}=i;Os("body",u),Os("html",p),$g(E,S);const O={baseTag:Dr("base",s),linkTags:Dr("link",m),metaTags:Dr("meta",f),noscriptTags:Dr("noscript",g),scriptTags:Dr("script",v),styleTags:Dr("style",y)},I={},R={};Object.keys(O).forEach(z=>{const{newTags:D,oldTags:U}=O[z];D.length&&(I[z]=D),U.length&&(R[z]=O[z].oldTags)}),o&&o(),h(i,I,R)},Ra=null,Yg=i=>{Ra&&cancelAnimationFrame(Ra),i.defer?Ra=requestAnimationFrame(()=>{ad(i,()=>{Ra=null})}):(ad(i),Ra=null)},Wg=Yg,od=class extends b.Component{constructor(){super(...arguments);gn(this,"rendered",!1)}shouldComponentUpdate(o){return!Tg(o,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:o}=this.props.context;o.remove(this),this.emitChange()}emitChange(){const{helmetInstances:o,setHelmet:s}=this.props.context;let u=null;const p=Fg(o.get().map(m=>{const f={...m.props};return delete f.context,f}));qd.canUseDOM?Wg(p):Ts&&(u=Ts(p)),s(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:o}=this.props.context;o.add(this),this.emitChange()}render(){return this.init(),null}},bs,qg=(bs=class extends b.Component{shouldComponentUpdate(o){return!Bd(rd(this.props,"helmetData"),rd(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,u,p){return{...s,[o.type]:[...s[o.type]||[],{...u,...this.mapNestedChildrenToProps(o,p)}]}}mapObjectTypeChildren(o,s,u,p){switch(o.type){case"title":return{...s,[o.type]:p,titleAttributes:{...u}};case"body":return{...s,bodyAttributes:{...u}};case"html":return{...s,htmlAttributes:{...u}};default:return{...s,[o.type]:{...u}}}}mapArrayTypeChildrenToProps(o,s){let u={...s};return Object.keys(o).forEach(p=>{u={...u,[p]:o[p]}}),u}warnOnInvalidChildren(o,s){return ed(nd.some(u=>o.type===u),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${nd.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),ed(!s||typeof s=="string"||Array.isArray(s)&&!s.some(u=>typeof u!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let u={};return n.Children.forEach(o,p=>{if(!p||!p.props)return;const{children:m,...f}=p.props,g=Object.keys(f).reduce((v,y)=>(v[Ag[y]||y]=f[y],v),{});let{type:h}=p;switch(typeof h=="symbol"?h=h.toString():this.warnOnInvalidChildren(p,m),h){case"Symbol(react.fragment)":s=this.mapChildrenToProps(m,s);break;case"link":case"meta":case"noscript":case"script":case"style":u=this.flattenArrayTypeChildren(p,u,g,m);break;default:s=this.mapObjectTypeChildren(p,s,g,m);break}}),this.mapArrayTypeChildrenToProps(u,s)}render(){const{children:o,...s}=this.props;let u={...s},{helmetData:p}=s;if(o&&(u=this.mapChildrenToProps(o,u)),p&&!(p instanceof As)){const m=p;p=new As(m.context,!0),delete u.helmetData}return p?n.createElement(od,{...u,context:p.value}):n.createElement(Wd.Consumer,null,m=>n.createElement(od,{...u,context:m}))}},gn(bs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),bs);const id="https://hovira-backend-nine.vercel.app/api";class ld extends Error{constructor(o,s=0,u=null){super(o),this.name="ApiError",this.status=s,this.payload=u}}function Gd(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function Qd(i){i&&(localStorage.setItem("token",i),localStorage.setItem("customerToken",i))}function sd(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function Mt(i,o=[]){if(!i||typeof i!="object")return i;for(const s of o)if(i[s]!==void 0)return i[s];if(i.data!==void 0){const s=i.data;if(s&&typeof s=="object"){for(const u of o)if(s[u]!==void 0)return s[u]}return s}return i}async function Je(i,o={}){const{body:s,headers:u={},...p}=o,m=Gd(),f={Accept:"application/json",...u};let g=s;s!==void 0&&!(s instanceof FormData)&&typeof s!="string"&&(f["Content-Type"]="application/json",g=JSON.stringify(s)),m&&!f.Authorization&&(f.Authorization=`Bearer ${m}`);let h;try{h=await fetch(`${id}${i.startsWith("/")?i:`/${i}`}`,{...p,headers:f,body:g})}catch(E){throw new ld(`Cannot connect to API at ${id}. Check that your backend is running and CORS is enabled.`,0,E)}const y=(h.headers.get("content-type")||"").includes("application/json")?await h.json().catch(()=>({})):await h.text();if(!h.ok){const E=(y==null?void 0:y.message)||(y==null?void 0:y.error)||(typeof y=="string"?y:`Request failed (${h.status})`);throw new ld(E,h.status,y)}return y}const Te={products:async(i={})=>{const o=new URLSearchParams;Object.entries(i).forEach(([p,m])=>{m!==""&&m!=null&&o.set(p,m)});const s=await Je(`/products${o.toString()?`?${o}`:""}`),u=Mt(s,["products","items","results"]);return Array.isArray(u)?u:(u==null?void 0:u.products)||(u==null?void 0:u.items)||[]},product:async i=>Mt(await Je(`/products/${encodeURIComponent(i)}`),["product","item"]),register:async i=>Je("/auth/customers/register",{method:"POST",body:i}),login:async i=>Je("/auth/customers/login",{method:"POST",body:i}),me:async()=>Mt(await Je("/customers/me"),["customer","user","profile"]),updateMe:async i=>Mt(await Je("/customers/me",{method:"PATCH",body:i}),["customer","user","profile"]),changePassword:i=>Je("/customers/me/password",{method:"PATCH",body:i}),addAddress:async i=>Mt(await Je("/customers/me/addresses",{method:"POST",body:i}),["customer","address"]),updateAddress:async(i,o)=>Mt(await Je(`/customers/me/addresses/${i}`,{method:"PATCH",body:o}),["customer","address"]),deleteAddress:async i=>Je(`/customers/me/addresses/${i}`,{method:"DELETE"}),orders:async()=>{const i=Mt(await Je("/orders/my"),["orders","items","results"]);return Array.isArray(i)?i:(i==null?void 0:i.orders)||[]},order:async i=>Mt(await Je(`/orders/my/${i}`),["order","item"]),createOrder:async i=>Mt(await Je("/orders",{method:"POST",body:i}),["order","data"]),coupons:async()=>{const i=Mt(await Je("/coupons"),["coupons","items","results"]);return Array.isArray(i)?i:(i==null?void 0:i.coupons)||[]},validateCoupon:i=>Je("/coupons/validate",{method:"POST",body:i}),createRazorpayOrder:async({orderId:i})=>Je("/payments/razorpay/create-order",{method:"POST",body:{orderId:i}}),verifyRazorpayPayment:async({orderId:i,razorpay_order_id:o,razorpay_payment_id:s,razorpay_signature:u})=>Je("/payments/razorpay/verify",{method:"POST",body:{orderId:i,razorpay_order_id:o,razorpay_payment_id:s,razorpay_signature:u}}),blogs:async(i={})=>{var p,m,f,g,h,v,y;const o=new URLSearchParams;Object.entries(i).forEach(([E,S])=>{S!==""&&S!=null&&o.set(E,S)});const s=await Je(`/blogs${o.toString()?`?${o.toString()}`:""}`),u=(s==null?void 0:s.blogs)??((p=s==null?void 0:s.data)==null?void 0:p.blogs)??(Array.isArray(s==null?void 0:s.data)?s.data:null)??(s==null?void 0:s.items)??(s==null?void 0:s.results)??[];return{blogs:Array.isArray(u)?u:(u==null?void 0:u.blogs)||(u==null?void 0:u.items)||[],totalPages:(s==null?void 0:s.totalPages)??((m=s==null?void 0:s.pagination)==null?void 0:m.totalPages)??((f=s==null?void 0:s.data)==null?void 0:f.totalPages)??((h=(g=s==null?void 0:s.data)==null?void 0:g.pagination)==null?void 0:h.totalPages)??1,total:(s==null?void 0:s.total)??((v=s==null?void 0:s.pagination)==null?void 0:v.total)??((y=s==null?void 0:s.data)==null?void 0:y.total)??0}},blog:async i=>{var s;const o=await Je(`/blogs/slug/${encodeURIComponent(i)}`);return(o==null?void 0:o.blog)||((s=o==null?void 0:o.data)==null?void 0:s.blog)||(o==null?void 0:o.data)||(o==null?void 0:o.item)||o}},je=(i,o="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:o||"INR",maximumFractionDigits:0}).format(Number(i)||0),Rs=i=>{if(!i)return"—";const o=new Date(i);return Number.isNaN(o.getTime())?"—":o.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})},pi=i=>{var u;if(!i)return"";const o=i.images||[],s=((u=o.find)==null?void 0:u.call(o,p=>p==null?void 0:p.isPrimary))||o[0];return(s==null?void 0:s.url)||i.image||i.imageUrl||""},xn=i=>(i==null?void 0:i.salePrice)!=null?Number(i.salePrice):Number((i==null?void 0:i.price)||0),rr=i=>String((i==null?void 0:i._id)||(i==null?void 0:i.id)||(i==null?void 0:i.slug)||""),Fa=i=>`/product/${encodeURIComponent((i==null?void 0:i.slug)||(i==null?void 0:i._id)||(i==null?void 0:i.id))}`,Kd=b.createContext(null),ms=(i,o)=>{try{return JSON.parse(localStorage.getItem(i))??o}catch{return o}};function Gg({children:i}){const[o,s]=b.useState(()=>ms("hovira-cart",[])),[u,p]=b.useState(()=>ms("hovira-wishlist",[])),[m,f]=b.useState(()=>ms("customer",null)),[g,h]=b.useState([]),[v,y]=b.useState(!1),[E,S]=b.useState(!1),[O,I]=b.useState("");b.useEffect(()=>{localStorage.setItem("hovira-cart",JSON.stringify(o))},[o]),b.useEffect(()=>{localStorage.setItem("hovira-wishlist",JSON.stringify(u))},[u]),b.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]);const R=b.useCallback(async()=>{var ze;y(!1),S(!1),I("");const V=Te.products(),oe=Gd()?Te.me():Promise.resolve(null),[M,se]=await Promise.allSettled([V,oe]);if(M.status==="fulfilled")h(M.value||[]);else return console.error("Initial products API error:",M.reason),I(((ze=M.reason)==null?void 0:ze.message)||"Unable to load products. Please try again."),S(!0),!1;return se.status==="fulfilled"?se.value&&f(se.value):(console.error("Customer authentication error:",se.reason),sd(),f(null)),S(!0),y(!0),!0},[]);b.useEffect(()=>{R()},[R]);const z=(V,oe=1,M="")=>s(se=>{const Ee=`${rr(V)}:${M}`;return se.find(q=>q.key===Ee)?se.map(q=>q.key===Ee?{...q,quantity:Math.min(99,q.quantity+oe)}:q):[...se,{key:Ee,product:V,quantity:Math.max(1,oe),variant:M}]}),D=(V,oe)=>s(M=>oe<=0?M.filter(se=>se.key!==V):M.map(se=>se.key===V?{...se,quantity:Math.min(99,oe)}:se)),U=V=>s(oe=>oe.filter(M=>M.key!==V)),P=()=>s([]),W=V=>p(oe=>oe.some(M=>rr(M)===rr(V))?oe.filter(M=>rr(M)!==rr(V)):[...oe,V]),ee=V=>u.some(oe=>rr(oe)===rr(V)),ie=()=>{sd(),f(null)},ge=b.useMemo(()=>({cart:o,wishlist:u,customer:m,setCustomer:f,authReady:E,products:g,appReady:v,appError:O,retryInitialLoad:R,addToCart:z,updateQuantity:D,removeFromCart:U,clearCart:P,toggleWishlist:W,isWishlisted:ee,logout:ie}),[o,u,m,E,g,v,O,R]);return n.createElement(Kd.Provider,{value:ge},i)}const Kt=()=>b.useContext(Kd);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xd=(...i)=>i.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=b.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:p="",children:m,iconNode:f,...g},h)=>b.createElement("svg",{ref:h,...Kg,width:o,height:o,stroke:i,strokeWidth:u?Number(s)*24/Number(o):s,className:Xd("lucide",p),...g},[...f.map(([v,y])=>b.createElement(v,y)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(i,o)=>{const s=b.forwardRef(({className:u,...p},m)=>b.createElement(Xg,{ref:m,iconNode:o,className:Xd(`lucide-${Qg(i)}`,u),...p}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=ue("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=ue("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ue("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=ue("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ue("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=ue("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ue("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ue("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=ue("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=ue("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=ue("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ue("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ue("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=ue("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=ue("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=ue("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ue("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=ue("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ue("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ue("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ue("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ue("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ue("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=ue("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=ue("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ue("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Fs="/assets/logo-YzEykGB1.png";function Ls(){const[i,o]=b.useState(!1),[s,u]=b.useState(""),[p,m]=b.useState(!1),{cart:f,wishlist:g,customer:h}=Kt(),v=bn(),y=f.reduce((R,z)=>R+Number(z.quantity||0),0),E=g.length;b.useEffect(()=>{const R=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",R,{passive:!0}),R(),()=>window.removeEventListener("scroll",R)},[]),b.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]);const S=R=>{R.preventDefault(),v(`/shop${s.trim()?`?search=${encodeURIComponent(s.trim())}`:""}`),o(!1)},O=()=>o(!1),I=({isActive:R})=>`hv-nav-link ${R?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Qe,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(K,{to:"/shop"},"Explore Collection ",n.createElement(be,{size:13}))),n.createElement("header",{className:`hv-header ${p?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>o(!i),"aria-label":i?"Close menu":"Open menu","aria-expanded":i},i?n.createElement(zt,{size:23}):n.createElement(uv,{size:23})),n.createElement(K,{to:"/",className:"hv-brand",onClick:O,"aria-label":"HOVIRA Home"},n.createElement("img",{src:Fs,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(nn,{to:"/",end:!0,className:I},"Home"),n.createElement(nn,{to:"/shop",className:I},"Shop All"),n.createElement(nn,{to:"/shop?category=Best%20sellers",className:I},"Best Sellers"),n.createElement(nn,{to:"/about",className:I},"Our Story"),n.createElement(nn,{to:"/blog",className:I},"Blog")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:S},n.createElement(Ds,{size:17}),n.createElement("input",{type:"search",value:s,onChange:R=>u(R.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(K,{className:"hv-header-icon",to:h?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(jr,{size:21})),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${E} items`,title:"Wishlist"},n.createElement(gt,{size:21}),E>0&&n.createElement("span",{className:"hv-count"},E>99?"99+":E)),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${y} items`,title:"Shopping Bag"},n.createElement(Bt,{size:21}),y>0&&n.createElement("span",{className:"hv-count"},y>99?"99+":y)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:S},n.createElement(Ds,{size:17}),n.createElement("input",{type:"search",value:s,onChange:R=>u(R.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(be,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${i?"show":""}`,onClick:O}),n.createElement("aside",{className:`hv-mobile-drawer ${i?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(K,{to:"/",onClick:O},n.createElement("img",{src:Fs,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:O,"aria-label":"Close menu"},n.createElement(zt,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(nn,{to:"/",end:!0,onClick:O},"Home ",n.createElement(be,{size:17})),n.createElement(nn,{to:"/shop",onClick:O},"Shop All ",n.createElement(be,{size:17})),n.createElement(nn,{to:"/shop?category=Best%20sellers",onClick:O},"Best Sellers ",n.createElement(be,{size:17})),n.createElement(nn,{to:"/about",onClick:O},"Our Story ",n.createElement(be,{size:17})),n.createElement(nn,{to:"/blog",className:I},"Blog")),n.createElement("div",{className:"hv-drawer-account"},n.createElement(K,{to:h?"/account":"/login",onClick:O},n.createElement(jr,{size:19}),h?"My Account":"Login / Register"),n.createElement(K,{to:"/wishlist",onClick:O},n.createElement(gt,{size:19}),"My Wishlist",E>0&&n.createElement("span",null,E)),n.createElement(K,{to:"/cart",onClick:O},n.createElement(Bt,{size:19}),"My Shopping Bag",y>0&&n.createElement("span",null,y))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Qe,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
/* ======================================
   HOVIRA PREMIUM HEADER
====================================== */

.hv-announcement-bar {
  min-height: 35px;
  background: #38251f;
  color: #f8e8dc;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 7px 15px;
  font-size: 14px;
  letter-spacing: 1px;
  position: relative;
  z-index: 1002;
}

.hv-announcement-bar > svg {
  color: #e9b89c;
}

.hv-announcement-bar a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #e9b89c;
  text-decoration: none;
  font-weight: 600;
  transition: .3s;
}

.hv-announcement-bar a:hover {
  color: white;
}

.hv-announcement-separator {
  color: #d69c80;
}

/* HEADER */

.hv-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 251, 247, .97);
  border-bottom: 1px solid #eee1d7;
  transition: box-shadow .3s, background .3s;
}

.hv-header.hv-scrolled {
  background: rgba(255, 250, 246, .98);
  box-shadow: 0 5px 25px rgba(57, 37, 29, .07);
}

.hv-header-inner {
  max-width: 1350px;
  min-height: 90px;
  margin: auto;
  padding: 0 35px;
  display: grid;
  grid-template-columns: 190px 1fr auto;
  align-items: center;
  gap: 25px;
}

/* LOGO */

.hv-brand {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  min-width: 0;
}

.hv-brand img {
  display: block;
  width: 155px;
  height: 76px;
  object-fit: contain;
  transition: .3s;
}

.hv-scrolled .hv-brand img {
  width: 140px;
  height: 88px;
}



/* DESKTOP NAV */

.hv-desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 3vw, 43px);
  height: 100%;
}

.hv-nav-link {
  color: #59453c;
  font-size: 16px;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: .7px;
  position: relative;
  padding: 12px 0;
  transition: color .3s;
  white-space: nowrap;
}

.hv-nav-link::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 0;
  bottom: 3px;
  left: 0;
  background: #bd765f;
  transition: width .3s;
}

.hv-nav-link:hover,
.hv-nav-link.active {
  color: #bd765f;
}

.hv-nav-link:hover::after,
.hv-nav-link.active::after {
  width: 100%;
}

/* HEADER ACTIONS */

.hv-header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
}

.hv-icon-btn,
.hv-header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: #49352d;
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
  position: relative;
  transition: .3s;
}

.hv-header-icon:hover,
.hv-icon-btn:hover {
  color: #bd765f;
  transform: translateY(-2px);
}

/* SEARCH */

.hv-header-search {
  width: 190px;
  height: 39px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  background: #f6eee8;
  border: 1px solid transparent;
  transition: .3s;
}

.hv-header-search:focus-within {
  border-color: #d9b7a5;
  background: white;
}

.hv-header-search svg {
  color: #a27d6d;
  flex-shrink: 0;
}

.hv-header-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #49352d;
  font-size: 14px;
}

.hv-header-search input::placeholder {
  color: #a38c80;
}

/* COUNTER */

.hv-counter-icon {
  position: relative;
}

.hv-count {
  position: absolute;
  top: -5px;
  right: -6px;
  min-width: 16px;
  height: 16px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #bd765f;
  color: white;
  font-size: 8px;
  font-weight: 700;
}

/* MOBILE ELEMENTS */

.hv-mobile-menu,
.hv-mobile-search-wrapper {
  display: none;
}

/* DRAWER OVERLAY */

.hv-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(38, 24, 19, .48);
  opacity: 0;
  visibility: hidden;
  transition: .35s;
}

.hv-drawer-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* MOBILE DRAWER */

.hv-mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1101;
  width: min(360px, 88%);
  background: #fffaf6;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateX(-105%);
  transition: transform .35s ease;
  box-shadow: 10px 0 40px rgba(0,0,0,.08);
}

.hv-mobile-drawer.drawer-open {
  transform: translateX(0);
}

.hv-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eadbd1;
  padding-bottom: 15px;
}

.hv-drawer-header img {
  width: 130px;
  height: 65px;
  object-fit: contain;
}

.hv-drawer-welcome {
  padding: 32px 0;
}

.hv-drawer-welcome > span {
  font-size: 9px;
  letter-spacing: 2px;
  color: #bd765f;
  font-weight: 700;
}

.hv-drawer-welcome h3 {
  font-family: Georgia, serif;
  color: #38251f;
  font-size: 33px;
  line-height: 1.2;
  font-weight: 400;
  margin: 12px 0 0;
}

.hv-drawer-welcome h3 em {
  color: #bd765f;
}

.hv-drawer-nav {
  display: flex;
  flex-direction: column;
}

.hv-drawer-nav a {
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee1d7;
  color: #49352d;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: .3s;
}

.hv-drawer-nav a:hover,
.hv-drawer-nav a.active {
  color: #bd765f;
  padding-left: 7px;
}

.hv-drawer-account {
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid #eadbd1;
}

.hv-drawer-account a {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  color: #59453c;
  font-size: 12px;
  text-decoration: none;
}

.hv-drawer-account a svg {
  color: #bd765f;
}

.hv-drawer-account a span {
  margin-left: auto;
  background: #f0ddd2;
  color: #8b5745;
  border-radius: 20px;
  padding: 3px 8px;
  font-size: 10px;
}

.hv-drawer-footer {
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 10px;
  color: #bd765f;
}

/* MOBILE SEARCH */

.hv-mobile-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  height: 42px;
  background: #f6eee8;
  border: 1px solid #eee1d7;
}

.hv-mobile-search svg {
  color: #a27d6d;
  flex-shrink: 0;
}

.hv-mobile-search input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 11px;
  color: #49352d;
}

.hv-mobile-search button {
  border: 0;
  background: transparent;
  color: #bd765f;
  cursor: pointer;
  display: flex;
}

/* TABLET */

@media (max-width: 1100px) {
  .hv-header-inner {
    grid-template-columns: 145px 1fr auto;
    padding: 0 20px;
    gap: 12px;
  }

  .hv-brand img {
    width: 130px;
  }

  .hv-desktop-nav {
    gap: 20px;
  }

  .hv-header-search {
    width: 145px;
  }

  .hv-header-actions {
    gap: 10px;
  }
}

/* MOBILE */

@media (max-width: 767px) {
  .hv-announcement-bar {
    font-size: 11px;
    letter-spacing: .2px;
    gap: 7px;
    padding: 8px 5px;
  }

  .hv-announcement-bar a {
    display: none;
  }

  .hv-header {
    position: sticky;
    top: 0;
  }

  .hv-header-inner {
    min-height: 67px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    gap: 10px;
  }

  .hv-mobile-menu {
    display: inline-flex;
    flex-shrink: 0;
    order: 1;
  }

  .hv-brand {
    order: 2;
    flex: 1;
    justify-content: center;
  }

  .hv-brand img {
    width: 115px;
    height: 61px;
  }

  .hv-header-actions {
    order: 3;
    gap: 8px;
  }

  .hv-desktop-nav,
  .hv-header-search {
    display: none;
  }

  .hv-header-icon {
    padding: 4px;
  }

  .hv-header-icon svg {
    width: 19px;
    height: 19px;
  }

  .hv-header-icon[aria-label^="My account"] {
    display: none;
  }

  .hv-mobile-search-wrapper {
    display: block;
    padding: 0 15px 12px;
  }

  .hv-mobile-search {
    height: 37px;
  }

  .hv-count {
    min-width: 14px;
    height: 14px;
    font-size: 7px;
  }
}

/* SMALL MOBILE */

@media (max-width: 380px) {
  .hv-header-inner {
    padding: 0 10px;
  }

  .hv-header-actions {
    gap: 5px;
  }

  .hv-brand img {
    width: 100px;
  }

  .hv-mobile-drawer {
    padding: 20px;
  }

  .hv-announcement-bar {
    font-size: 8px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .hv-header *,
  .hv-mobile-drawer,
  .hv-drawer-overlay {
    transition: none !important;
  }
}

          
          
          `))}function Ms(){const[i,o]=b.useState(""),[s,u]=b.useState(""),p=new Date().getFullYear(),m=g=>{g.preventDefault(),i.trim()&&(u("Thanks for joining the HOVIRA family!"),o(""))},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Qe,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(Ws,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:i,onChange:g=>{o(g.target.value),u("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(be,{size:17}))),s&&n.createElement("p",{className:"hv-footer-success"},n.createElement(gt,{size:14}),s),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Yr,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(jt,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(lv,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(K,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(sv,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(ov,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(K,{to:"/shop"},"Shop All"),n.createElement(K,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(K,{to:"/about"},"Our Story"),n.createElement(K,{to:"/account"},"My Account"),n.createElement(K,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(K,{to:"/privacy"},"Privacy Policy"),n.createElement(K,{to:"/terms"},"Terms & Conditions"),n.createElement(K,{to:"/shipping"},"Shipping Policy"),n.createElement(K,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(Zd,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Qe,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",p," HOVIRA Skin care. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},n.createElement(gt,{size:13,fill:"currentColor"}),"  Designed & Developed by ",n.createElement("a",{href:"https://jdbinfotech.co.in/"},"https://jdbinfotech.co.in/")),n.createElement("button",{className:"hv-back-top",onClick:f,"aria-label":"Back to top"},"Back to top",n.createElement(ev,{size:17}))))),n.createElement("style",null,`


.hv-footer {
  background: #fffaf6;
  color: #49352d;
  font-family: inherit;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.hv-footer *,
.hv-footer *::before,
.hv-footer *::after {
  box-sizing: border-box;
}

/* ============================================
   NEWSLETTER SECTION
============================================ */

.hv-footer-newsletter {
  background: linear-gradient(
    120deg,
    #f8eee7 0%,
    #f2dfd3 100%
  );
  padding: 75px 35px;
  position: relative;
  overflow: hidden;
}

.hv-footer-newsletter-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hv-footer-newsletter-content {
  max-width: 560px;
}

.hv-footer-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #bd765f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hv-footer-eyebrow svg {
  flex-shrink: 0;
}

.hv-footer-newsletter-content h2 {
  font-family: Georgia, serif;
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 400;
  line-height: 1.2;
  color: #38251f;
  margin: 20px 0;
  letter-spacing: -1px;
}

.hv-footer-newsletter-content h2 em {
  color: #bd765f;
  font-family: Georgia, serif;
  font-weight: 400;
}

.hv-footer-newsletter-content p {
  color: #765f54;
  font-size: 14px;
  line-height: 1.9;
  max-width: 460px;
  margin: 0;
}

/* ============================================
   NEWSLETTER FORM
============================================ */

.hv-footer-newsletter-form-wrap {
  width: 100%;
}

.hv-footer-newsletter-form {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  padding: 7px;
  border: 1px solid #eadbd1;
  border-radius: 4px;
  width: 100%;
  transition: border-color .3s ease,
              box-shadow .3s ease;
}

.hv-footer-newsletter-form:focus-within {
  border-color: #bd765f;
  box-shadow: 0 0 0 3px rgba(189, 118, 95, .1);
}

.hv-footer-input-wrap {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 15px;
  color: #bd765f;
}

.hv-footer-input-wrap svg {
  flex-shrink: 0;
}

.hv-footer-input-wrap input {
  min-width: 0;
  width: 100%;
  height: 45px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #38251f;
  font-family: inherit;
  font-size: 13px;
}

.hv-footer-input-wrap input::placeholder {
  color: #a99488;
}

.hv-footer-newsletter-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 22px;
  min-height: 45px;
  border: none;
  border-radius: 3px;
  background: #38251f;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: background .3s ease,
              transform .3s ease;
}

.hv-footer-newsletter-form button:hover {
  background: #bd765f;
  transform: translateY(-2px);
}

.hv-footer-newsletter-form button:disabled {
  opacity: .6;
  cursor: not-allowed;
  transform: none;
}

.hv-footer-newsletter-form-wrap > small {
  display: block;
  margin-top: 15px;
  color: #947d73;
  font-size: 11px;
  line-height: 1.6;
}

.hv-footer-success {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 13px 0 0;
  color: #39794c;
  font-size: 12px;
  line-height: 1.6;
}

/* ============================================
   TRUST STRIP
============================================ */

.hv-footer-trust {
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px;
  border-bottom: 1px solid #eadbd1;
}

.hv-footer-trust > div {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.hv-footer-trust > div > svg {
  color: #bd765f;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
}

.hv-footer-trust > div > span {
  min-width: 0;
}

.hv-footer-trust strong,
.hv-footer-trust small {
  display: block;
}

.hv-footer-trust strong {
  color: #49352d;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
}

.hv-footer-trust small {
  color: #947d73;
  font-size: 11px;
  line-height: 1.6;
}

/* ============================================
   MAIN FOOTER
============================================ */

.hv-footer-main {
  max-width: 1250px;
  margin: 0 auto;
  padding: 75px 35px 0;
  background: #fffaf6;
}

.hv-footer-grid {
  display: grid;
  grid-template-columns: 1.4fr .8fr 1fr 1.1fr;
  gap: 45px;
  padding-bottom: 65px;
}

/* ============================================
   BRAND SECTION
============================================ */

.hv-footer-brand-section {
  min-width: 0;
}

.hv-footer-logo {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  color: #38251f;
  font-family: Georgia, serif;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: 5px;
  line-height: 1.1;
  text-decoration: none;
  transition: color .3s ease;
}

.hv-footer-logo:hover {
  color: #bd765f;
}

.hv-footer-logo span {
  font-family: inherit;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #bd765f;
  margin-top: 9px;
}

.hv-footer-brand-description {
  max-width: 290px;
  color: #765f54;
  font-size: 13px;
  line-height: 1.9;
  margin: 25px 0;
}

/* ============================================
   SOCIAL ICONS
============================================ */

.hv-footer-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hv-footer-socials a {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid #e5cfc1;
  border-radius: 50%;
  background: #f8eee7;
  color: #bd765f;
  text-decoration: none;
  transition: background .3s ease,
              color .3s ease,
              border-color .3s ease,
              transform .3s ease;
}

.hv-footer-socials a svg {
  width: 19px;
  height: 19px;
}

.hv-footer-socials a:hover {
  background: #38251f;
  border-color: #38251f;
  color: #ffffff;
  transform: translateY(-4px);
}

/* ============================================
   FOOTER LINK COLUMNS
============================================ */

.hv-footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
}

.hv-footer-column h3 {
  color: #38251f;
  font-family: Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 12px;
}

.hv-footer-column > a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  color: #765f54;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color .3s ease,
              transform .3s ease;
}

.hv-footer-column > a:hover {
  color: #bd765f;
  transform: translateX(5px);
}

/* ============================================
   CONTACT SECTION
============================================ */

.hv-footer-contact p {
  color: #765f54;
  font-size: 12px;
  line-height: 1.9;
  margin: 0;
}

.hv-footer-column .hv-footer-email {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #bd765f;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.hv-footer-email svg {
  flex-shrink: 0;
  transition: transform .3s ease;
}

.hv-footer-email:hover svg {
  transform: translate(3px, -3px);
}

.hv-footer-tagline {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 15px;
  color: #bd765f;
  font-size: 11px;
  line-height: 1.6;
}

.hv-footer-tagline svg {
  flex-shrink: 0;
}

/* ============================================
   FOOTER BOTTOM
============================================ */

.hv-footer-bottom {
  min-height: 85px;
  padding: 22px 0;
  border-top: 1px solid #eadbd1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.hv-footer-copyright,
.hv-footer-bottom-center {
  color: #947d73;
  font-size: 11px;
  line-height: 1.6;
}

.hv-footer-bottom-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-align: center;
}

.hv-footer-bottom-center svg {
  color: #bd765f;
  flex-shrink: 0;
}

/* BACK TO TOP */

.hv-back-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  border: 0;
  background: transparent;
  color: #bd765f;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: color .3s ease,
              transform .3s ease;
}

.hv-back-top:hover {
  color: #38251f;
  transform: translateY(-3px);
}

/* ============================================
   FOCUS & ACCESSIBILITY
============================================ */

.hv-footer a:focus-visible,
.hv-footer button:focus-visible,
.hv-footer input:focus-visible {
  outline: 2px solid #bd765f;
  outline-offset: 3px;
}

/* ============================================
   TABLET - MAX 1100PX
============================================ */

@media (max-width: 1100px) {
  .hv-footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px 40px;
  }

  .hv-footer-newsletter-inner {
    gap: 35px;
  }

  .hv-footer-newsletter-content h2 {
    font-size: 42px;
  }

  .hv-footer-column h3 {
    font-size: 19px;
  }

  .hv-footer-brand-description {
    max-width: 350px;
  }
}

/* ============================================
   TABLET - MAX 900PX
============================================ */

@media (max-width: 900px) {
  .hv-footer-newsletter {
    padding: 60px 25px;
  }

  .hv-footer-newsletter-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hv-footer-newsletter-content {
    max-width: 650px;
  }

  .hv-footer-newsletter-content p {
    max-width: 550px;
  }

  .hv-footer-newsletter-form-wrap {
    max-width: 600px;
  }

  .hv-footer-trust {
    padding: 30px 25px;
    gap: 20px;
  }

  .hv-footer-main {
    padding: 60px 25px 0;
  }

  .hv-footer-bottom {
    flex-wrap: wrap;
  }
}

/* ============================================
   MOBILE - MAX 767PX
============================================ */

@media (max-width: 767px) {
  .hv-footer-newsletter {
    padding: 55px 20px;
  }

  .hv-footer-eyebrow {
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  .hv-footer-newsletter-content h2 {
    font-size: 38px;
    letter-spacing: -.5px;
    margin: 17px 0;
  }

  .hv-footer-newsletter-content p {
    font-size: 13px;
    line-height: 1.8;
  }

  /* NEWSLETTER FORM MOBILE */

  .hv-footer-newsletter-form {
    flex-direction: column;
    gap: 10px;
    padding: 0;
    background: transparent;
    border: none;
  }

  .hv-footer-newsletter-form:focus-within {
    border-color: transparent;
    box-shadow: none;
  }

  .hv-footer-input-wrap {
    width: 100%;
    min-height: 50px;
    padding: 0 15px;
    background: #ffffff;
    border: 1px solid #e5cfc1;
    border-radius: 3px;
  }

  .hv-footer-input-wrap input {
    height: 48px;
    font-size: 13px;
  }

  .hv-footer-newsletter-form button {
    width: 100%;
    min-height: 48px;
    font-size: 12px;
  }

  .hv-footer-newsletter-form-wrap > small {
    font-size: 11px;
  }

  /* TRUST STRIP MOBILE */

  .hv-footer-trust {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 35px 25px;
  }

  .hv-footer-trust > div {
    gap: 15px;
  }

  .hv-footer-trust > div > svg {
    width: 25px;
    height: 25px;
  }

  .hv-footer-trust strong {
    font-size: 13px;
  }

  .hv-footer-trust small {
    font-size: 11px;
  }

  /* MAIN FOOTER MOBILE */

  .hv-footer-main {
    padding: 50px 22px 0;
  }

  .hv-footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 22px;
    padding-bottom: 45px;
  }

  .hv-footer-brand-section {
    grid-column: 1 / -1;
  }

  .hv-footer-logo {
    font-size: 35px;
    letter-spacing: 5px;
  }

  .hv-footer-logo span {
    font-size: 9px;
  }

  .hv-footer-brand-description {
    max-width: 420px;
    font-size: 13px;
    margin: 20px 0;
  }

  .hv-footer-socials a {
    width: 40px;
    height: 40px;
  }

  .hv-footer-column {
    gap: 14px;
  }

  .hv-footer-column h3 {
    font-size: 18px;
    margin-bottom: 7px;
  }

  .hv-footer-column > a {
    font-size: 12px;
    line-height: 1.6;
  }

  .hv-footer-contact p {
    font-size: 12px;
  }

  .hv-footer-column .hv-footer-email {
    font-size: 12px;
  }

  .hv-footer-tagline {
    font-size: 11px;
  }

  /* FOOTER BOTTOM MOBILE */

  .hv-footer-bottom {
    padding: 25px 0;
    gap: 18px;
    justify-content: space-between;
  }

  .hv-footer-copyright {
    width: 100%;
    text-align: center;
    font-size: 11px;
  }

  .hv-footer-bottom-center {
    font-size: 10px;
  }

  .hv-back-top {
    font-size: 11px;
  }
}

/* ============================================
   SMALL MOBILE - MAX 480PX
============================================ */

@media (max-width: 480px) {
  .hv-footer-newsletter {
    padding: 45px 18px;
  }

  .hv-footer-newsletter-content h2 {
    font-size: 35px;
  }

  .hv-footer-newsletter-content p {
    font-size: 12px;
  }

  .hv-footer-main {
    padding: 45px 18px 0;
  }

  .hv-footer-grid {
    gap: 35px 16px;
  }

  .hv-footer-column h3 {
    font-size: 17px;
  }

  .hv-footer-column > a {
    font-size: 11px;
  }

  .hv-footer-brand-description {
    font-size: 12px;
  }

  .hv-footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 13px;
  }

  .hv-footer-copyright,
  .hv-footer-bottom-center {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}

/* ============================================
   EXTRA SMALL MOBILE - MAX 360PX
============================================ */

@media (max-width: 360px) {
  .hv-footer-newsletter-content h2 {
    font-size: 31px;
  }

  .hv-footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hv-footer-brand-section {
    grid-column: auto;
  }

  .hv-footer-column h3 {
    font-size: 18px;
  }

  .hv-footer-column > a {
    font-size: 12px;
  }

  .hv-footer-logo {
    font-size: 31px;
  }

  .hv-footer-trust {
    padding: 30px 18px;
  }
}

/* ============================================
   REDUCED MOTION
============================================ */

@media (prefers-reduced-motion: reduce) {
  .hv-footer *,
  .hv-footer *::before,
  .hv-footer *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   FOOTER FONT SIZE ENHANCEMENT
   Add this at the END of your CSS file
============================================ */

/* Newsletter */
.hv-footer-eyebrow {
  font-size: 13px;
}

.hv-footer-newsletter-content h2 {
  font-size: clamp(38px, 4.2vw, 52px);
}

.hv-footer-newsletter-content p {
  font-size: 16px;
  line-height: 1.8;
}

.hv-footer-input-wrap input {
  font-size: 15px;
}

.hv-footer-input-wrap input::placeholder {
  font-size: 14px;
}

.hv-footer-newsletter-form button {
  font-size: 14px;
}

.hv-footer-newsletter-form-wrap > small {
  font-size: 13px;
}

.hv-footer-success {
  font-size: 14px;
}

/* Trust section */
.hv-footer-trust strong {
  font-size: 15px;
}

.hv-footer-trust small {
  font-size: 13px;
  line-height: 1.7;
}

/* Brand description */
.hv-footer-brand-description {
  font-size: 15px;
  line-height: 1.85;
}

/* Footer headings */
.hv-footer-column h3 {
  font-size: 22px;
}

/* Footer links */
.hv-footer-column > a {
  font-size: 14px;
  line-height: 1.8;
}

/* Contact */
.hv-footer-contact p {
  font-size: 14px;
  line-height: 1.8;
}

.hv-footer-column .hv-footer-email {
  font-size: 14px;
}

.hv-footer-tagline {
  font-size: 13px;
}

/* Footer bottom */
.hv-footer-copyright,
.hv-footer-bottom-center {
  font-size: 13px;
}

.hv-back-top {
  font-size: 14px;
}

/* ============================================
   TABLET
============================================ */

@media (max-width: 900px) {
  .hv-footer-newsletter-content h2 {
    font-size: 44px;
  }

  .hv-footer-newsletter-content p {
    font-size: 15px;
  }

  .hv-footer-column h3 {
    font-size: 21px;
  }

  .hv-footer-column > a {
    font-size: 14px;
  }
}

/* ============================================
   MOBILE
============================================ */

@media (max-width: 767px) {
  .hv-footer-eyebrow {
    font-size: 12px;
  }

  .hv-footer-newsletter-content h2 {
    font-size: 38px;
  }

  .hv-footer-newsletter-content p {
    font-size: 15px;
  }

  .hv-footer-input-wrap input {
    font-size: 15px;
  }

  .hv-footer-newsletter-form button {
    font-size: 14px;
  }

  .hv-footer-newsletter-form-wrap > small {
    font-size: 13px;
  }

  .hv-footer-trust strong {
    font-size: 15px;
  }

  .hv-footer-trust small {
    font-size: 13px;
  }

  .hv-footer-brand-description {
    font-size: 14px;
  }

  .hv-footer-column h3 {
    font-size: 20px;
  }

  .hv-footer-column > a {
    font-size: 13px;
    line-height: 1.8;
  }

  .hv-footer-contact p {
    font-size: 13px;
  }

  .hv-footer-column .hv-footer-email {
    font-size: 13px;
  }

  .hv-footer-tagline {
    font-size: 12px;
  }

  .hv-footer-copyright,
  .hv-footer-bottom-center {
    font-size: 12px;
  }

  .hv-back-top {
    font-size: 13px;
  }
}

/* ============================================
   SMALL MOBILE
============================================ */

@media (max-width: 480px) {
  .hv-footer-newsletter-content h2 {
    font-size: 35px;
  }

  .hv-footer-newsletter-content p {
    font-size: 14px;
  }

  .hv-footer-column h3 {
    font-size: 19px;
  }

  .hv-footer-column > a {
    font-size: 13px;
  }

  .hv-footer-brand-description {
    font-size: 14px;
  }

  .hv-footer-contact p {
    font-size: 13px;
  }
}

/* Extra small mobile */
@media (max-width: 360px) {
  .hv-footer-newsletter-content h2 {
    font-size: 32px;
  }

  .hv-footer-column h3 {
    font-size: 18px;
  }

  .hv-footer-column > a {
    font-size: 13px;
  }
}

        `))}function Ev(){return n.createElement(n.Fragment,null,n.createElement(Ls,null),n.createElement("main",null,n.createElement(ag,null)),n.createElement(Ms,null))}function wn({label:i="Loading your essentials..."}){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-state"},n.createElement("div",{className:"loading-content"},n.createElement("div",{className:"loading-animation"},n.createElement("div",{className:"loading-outer-ring"}),n.createElement("div",{className:"loading-middle-ring"}),n.createElement("div",{className:"loading-logo"},n.createElement("img",{src:`${Fs}`})),n.createElement("span",{className:"loading-dot dot-one"}),n.createElement("span",{className:"loading-dot dot-two"})),n.createElement("div",{className:"loading-brand"},"HOVIRA",n.createElement("span",null,".")),n.createElement("p",{className:"loading-label"},i),n.createElement("div",{className:"loading-progress"},n.createElement("span",null)),n.createElement("small",{className:"loading-caption"},"A little care is on its way"))),n.createElement("style",null,`
            
/* =================================
   HOVIRA PREMIUM LOADER
================================= */

.loading-state {
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: #FFFAF6;
  text-align: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Animation */

.loading-animation {
  width: 105px;
  height: 105px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

/* Outer ring */

.loading-outer-ring {
  position: absolute;
  inset: 0;
  border: 1.5px solid #EADBD1;
  border-top-color: #BD765F;
  border-right-color: #BD765F;
  border-radius: 50%;
  animation: hoviraRotate 2s linear infinite;
}

/* Middle ring */

.loading-middle-ring {
  position: absolute;
  inset: 10px;
  border: 1.5px dashed #D9B5A4;
  border-radius: 50%;
  animation: hoviraRotateReverse 5s linear infinite;
}

/* Logo */

.loading-logo {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    #F8EEE7,
    #F2DFD3
  );
  color: #9F614D;
  font-family: Georgia, serif;
  font-size: 34px;
  font-style: italic;
  box-shadow: 0 5px 20px rgba(189, 118, 95, .12);
  animation: hoviraPulse 2s ease-in-out infinite;
}

/* Floating dots */

.loading-dot {
  position: absolute;
  width: 9px;
  height: 9px;
  background: #BD765F;
  border-radius: 50%;
}

.dot-one {
  top: 9px;
  right: 15px;
  animation: hoviraDot 1.5s ease-in-out infinite;
}

.dot-two {
  bottom: 12px;
  left: 13px;
  width: 6px;
  height: 6px;
  background: #D9B5A4;
  animation: hoviraDot 1.8s ease-in-out infinite reverse;
}

/* Brand */

.loading-brand {
  color: #38251F;
  font-family: Georgia, serif;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 10px;
}

.loading-brand span {
  color: #BD765F;
}

/* Label */

.loading-label {
  color: #947D73;
  font-family: inherit;
  font-size: 12px;
  letter-spacing: .3px;
  margin: 0 0 19px;
}

/* Progress bar */

.loading-progress {
  width: 145px;
  height: 3px;
  overflow: hidden;
  border-radius: 10px;
  background: #F0E2D9;
  position: relative;
}

.loading-progress span {
  position: absolute;
  top: 0;
  left: -45%;
  width: 45%;
  height: 100%;
  border-radius: 10px;
  background: #BD765F;
  animation: hoviraProgress 1.5s ease-in-out infinite;
}

/* Caption */

.loading-caption {
  color: #B09B90;
  font-size: 9px;
  letter-spacing: 1px;
  margin-top: 15px;
}

/* =================================
   KEYFRAMES
================================= */

@keyframes hoviraRotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes hoviraRotateReverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes hoviraPulse {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}

@keyframes hoviraDot {
  0%, 100% {
    transform: scale(.8);
    opacity: .6;
  }

  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes hoviraProgress {
  0% {
    left: -45%;
  }

  100% {
    left: 110%;
  }
}

/* =================================
   MOBILE
================================= */

@media (max-width: 576px) {
  .loading-state {
    min-height: 55vh;
  }

  .loading-animation {
    width: 90px;
    height: 90px;
  }

  .loading-logo {
    width: 50px;
    height: 50px;
    font-size: 29px;
  }

  .loading-brand {
    font-size: 22px;
  }
}

            `))}function vt({title:i,description:o,canonical:s}){return n.createElement(qg,null,n.createElement("title",null,i?`${i} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:o||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:i?`${i} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:o||"Thoughtful skincare essentials from HOVIRA."}),s&&n.createElement("link",{rel:"canonical",href:s}))}function di({product:i,index:o=0}){var P,W,ee;const{addToCart:s,toggleWishlist:u,isWishlisted:p}=Kt(),[m,f]=b.useState(!1),g=pi(i),h=xn(i),v=p(i),y=Number(i.price||0),E=Number(i.salePrice||0),S=i.salePrice!=null&&E>0&&E<y,O=S?Math.round((y-E)/y*100):0,I=Number(i.stock)<=0,R=()=>{if(I){window.alert(`${i.name} is coming soon! This product is currently unavailable. Please check back later.`);return}s(i),f(!0),setTimeout(()=>{f(!1)},1800)},z=()=>{u(i)},D=typeof i.category=="string"?i.category:((P=i.category)==null?void 0:P.name)||"HOVIRA Essentials",U=((ee=(W=i.images)==null?void 0:W.find(ie=>ie.isPrimary))==null?void 0:ee.alt)||i.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${o*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(K,{to:Fa(i),className:"hv-product-image","aria-label":`View ${i.name}`},g?n.createElement("img",{src:g,alt:U,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Qe,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},I?n.createElement("span",{className:"hv-soldout-badge"},"Upcoming"):S?n.createElement("span",{className:"hv-sale-badge"},O,"% OFF"):i.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Qe,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${v?"wish-active":""}`,onClick:z,"aria-label":v?"Remove from wishlist":"Add to wishlist",title:v?"Remove from wishlist":"Add to wishlist"},n.createElement(gt,{size:18,fill:v?"currentColor":"none"})),n.createElement(K,{to:Fa(i),className:"hv-quick-view","aria-label":`View details of ${i.name}`},n.createElement(oi,{size:16}),"Quick View",n.createElement(Zd,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},D),i.isFeatured&&!I&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Qe,{size:11}),"Favourite")),n.createElement(K,{to:Fa(i),className:"hv-product-name"},i.name),i.shortDescription&&n.createElement("p",{className:"hv-product-description"},i.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,je(h,i.currency||"INR")),S&&n.createElement("del",null,je(y,i.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""} ${I?"upcoming":""}`,onClick:R,"aria-label":I?`${i.name} is upcoming. Click for availability information.`:`Add ${i.name} to cart`,title:I?"Coming soon":"Add to cart"},I?n.createElement(n.Fragment,null,"Upcoming"):m?n.createElement(n.Fragment,null,n.createElement(ft,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Bt,{size:15}),"Add"))))),n.createElement("style",null,`

        
/* ==========================================
   HOVIRA PREMIUM PRODUCT CARD
========================================== */

.hv-product-card {
  position: relative;
  min-width: 0;
  width: 100%;
  animation: hvProductAppear .6s ease both;
  animation-delay: var(--delay, 0ms);
}

@keyframes hvProductAppear {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* IMAGE WRAPPER */

.hv-product-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #f7eee8;
  overflow: hidden;
  border-radius: 3px;
}

/* PRODUCT IMAGE */

.hv-product-image {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}

.hv-product-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  transition: transform .7s cubic-bezier(.2,.7,.2,1);
}

.hv-product-card:hover .hv-product-image img {
  transform: scale(1.07);
}

/* PLACEHOLDER */

.hv-product-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bd765f;
  gap: 12px;
  background: linear-gradient(145deg, #f6e7dc, #ead0bf);
}

.hv-product-placeholder span {
  font-family: Georgia, serif;
  font-size: 27px;
  letter-spacing: 5px;
  color: #694638;
}

.hv-product-placeholder small {
  font-size: 8px;
  letter-spacing: 3px;
}

/* BADGES */

.hv-product-badges {
  position: absolute;
  top: 13px;
  left: 13px;
  z-index: 2;
}

.hv-sale-badge,
.hv-soldout-badge,
.hv-featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 11px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .6px;
  border-radius: 2px;
}

.hv-sale-badge {
  color: #fff;
  background: #a75c48;
}

.hv-soldout-badge {
  color: #fff;
  background: #a75c48;
  letter-spacing: 1px;
}

.hv-featured-badge {
  color: #704b39;
  background: #f5dfcc;
}

/* WISHLIST */

.hv-wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,.94);
  color: #5a4036;
  cursor: pointer;
  z-index: 3;
  transition: all .3s ease;
}

.hv-wishlist-btn:hover {
  background: #fff;
  color: #bd765f;
  transform: scale(1.1);
}

.hv-wishlist-btn.wish-active {
  color: #bd765f;
  background: #fff;
}

/* QUICK VIEW */

.hv-quick-view {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  min-height: 43px;
  background: rgba(255,255,255,.95);
  color: #49352d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(12px);
  transition: all .35s ease;
}

.hv-product-card:hover .hv-quick-view {
  opacity: 1;
  transform: translateY(0);
}

.hv-quick-view:hover {
  background: #38251f;
  color: #fff;
}

/* PRODUCT INFO */

.hv-product-info {
  padding: 15px 2px 5px;
}

.hv-product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 9px;
}

.hv-product-category {
  color: #a17f70;
  font-size: 9px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hv-product-featured {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 8px;
  color: #bd765f;
  white-space: nowrap;
}

.hv-product-name {
  display: block;
  font-family: Georgia, serif;
  font-size: 18px;
  line-height: 1.35;
  font-weight: 400;
  color: #38251f;
  text-decoration: none;
  transition: color .3s;
  overflow-wrap: anywhere;
}

.hv-product-name:hover {
  color: #bd765f;
}

/* DESCRIPTION */

.hv-product-description {
  color: #947d73;
  font-size: 14px;
  line-height: 1.6;
  margin: 7px 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* PRICE AND CART */

.hv-product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 13px;
  padding-top: 11px;
  border-top: 1px solid #eee3dc;
}

.hv-product-price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}

.hv-product-price strong {
  font-size: 14px;
  font-weight: 700;
  color: #49352d;
}

.hv-product-price del {
  color: #b6a29a;
  font-size: 10px;
}

.hv-add-cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 12px;
  min-height: 35px;
  border: 1px solid #d9b7a5;
  background: transparent;
  color: #765143;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all .3s ease;
}

.hv-add-cart:hover:not(:disabled) {
  background: #38251f;
  border-color: #38251f;
  color: #fff;
}

.hv-add-cart.added {
  background: #e8f2e9;
  color: #387b54;
  border-color: #c5ddc8;
}

.hv-add-cart.upcoming,
.hv-add-cart:disabled {
  background: #eee7e2;
  border-color: #d8c8be;
  color: #806c62;
  cursor: pointer;
}

/* TABLET */

@media (max-width: 1024px) {
  .hv-product-name {
    font-size: 17px;
  }

  .hv-product-bottom {
    flex-wrap: wrap;
  }

  .hv-add-cart {
    padding: 8px 10px;
  }
}

/* MOBILE */

@media (max-width: 767px) {
  .hv-product-image-wrap {
    aspect-ratio: 4 / 5;
  }

  .hv-product-badges {
    top: 8px;
    left: 8px;
  }

  .hv-sale-badge,
  .hv-soldout-badge,
  .hv-featured-badge {
    font-size: 8px;
    padding: 6px 7px;
  }

  .hv-wishlist-btn {
    width: 32px;
    height: 32px;
    top: 8px;
    right: 8px;
  }

  .hv-wishlist-btn svg {
    width: 16px;
    height: 16px;
  }

  .hv-quick-view {
    display: none;
  }

  .hv-product-info {
    padding-top: 11px;
  }

  .hv-product-meta {
    margin-bottom: 6px;
  }

  .hv-product-category {
    font-size: 8px;
    letter-spacing: .5px;
  }

  .hv-product-featured {
    font-size: 7px;
  }

  .hv-product-name {
    font-size: 16px;
    line-height: 1.3;
  }

  .hv-product-description {
    font-size: 11px;
  }

  .hv-product-bottom {
    flex-direction: column;
    align-items: stretch;
    gap: 9px;
    margin-top: 10px;
  }

  .hv-product-price strong {
    font-size: 13px;
  }

  .hv-add-cart {
    width: 100%;
    box-sizing: border-box;
    min-height: 36px;
  }
}

/* SMALL MOBILE */

@media (max-width: 380px) {
  .hv-product-name {
    font-size: 14px;
  }

  .hv-product-price {
    gap: 4px;
  }

  .hv-product-price strong {
    font-size: 12px;
  }

  .hv-product-price del {
    font-size: 9px;
  }
}

/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
  .hv-product-card,
  .hv-product-card * {
    animation: none !important;
    transition: none !important;
  }
}

        `))}function an({type:i="error",children:o,onClose:s}){return b.useEffect(()=>{if(!o)return;const u=setTimeout(()=>{s==null||s()},5e3);return()=>clearTimeout(u)},[o,s]),o?n.createElement(n.Fragment,null,n.createElement("div",{className:`notice-toast ${i}`,role:"alert"},n.createElement("div",{className:"notice-icon"},i==="success"?n.createElement(it,{size:22}):n.createElement(tv,{size:22})),n.createElement("div",{className:"notice-content"},n.createElement("strong",null,i==="success"?"Success!":"Error!"),n.createElement("span",null,o)),n.createElement("button",{className:"notice-close",onClick:s,"aria-label":"Close notification",type:"button"},n.createElement(zt,{size:20}))),n.createElement("style",null,`
        

.notice-toast {
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 99999;
  width: min(380px, calc(100vw - 30px));
  min-height: 75px;
  padding: 15px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
  border-left: 5px solid #dc3545;
  animation: noticeSlideIn 0.35s ease forwards;
}

.notice-toast.success {
  border-left-color: #16a34a;
}

.notice-toast.error {
  border-left-color: #dc3545;
}

.notice-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #dc3545;
}

.notice-toast.success .notice-icon {
  color: #16a34a;
}

.notice-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.notice-content strong {
  font-size: 14px;
  color: #222;
}

.notice-content span {
  font-size: 13px;
  color: #555;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.notice-close {
  border: none;
  background: transparent;
  color: #777;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notice-close:hover {
  color: #111;
}

@keyframes noticeSlideIn {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 576px) {
  .notice-toast {
    top: 15px;
    right: 15px;
    width: calc(100vw - 30px);
  }
}

        `)):null}const bv="/assets/shampooo-DmHCtrQP.png";function wv(){const[i,o]=b.useState([]),[s,u]=b.useState(!0),[p,m]=b.useState(""),[f,g]=b.useState(0),[h,v]=b.useState(""),[y,E]=b.useState(""),[S,O]=b.useState(!1);b.useEffect(()=>{let z=!0;return(async()=>{u(!0),m("");try{const U=await Te.products();if(z){const P=Array.isArray(U)?U.filter(W=>W.isActive!==!1):[];o(P)}}catch(U){z&&m(U.message||"Unable to load products.")}finally{z&&u(!1)}})(),()=>{z=!1}},[f]);const I=b.useMemo(()=>{const z=i.filter(D=>D.isFeatured);return(z.length?z:i).slice(0,4)},[i]),R=[{icon:n.createElement(_r,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(pd,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(jt,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(gt,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(vt,{title:"HOVIRA Skin Care | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Qe,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(K,{to:"/shop"},"Explore HOVIRA ",n.createElement(be,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Qe,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(be,{size:18})),n.createElement(K,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(pv,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(_r,{size:17})),n.createElement("span",null,n.createElement(pd,{size:17})),n.createElement("span",null,n.createElement(gt,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("img",{src:`${bv}`,alt:"hovira 3-in-1 shampoo"})),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},R.map((z,D)=>n.createElement("div",{className:"hv-benefit",key:D},n.createElement("div",{className:"hv-benefit-icon"},z.icon),n.createElement("div",null,n.createElement("h3",null,z.title),n.createElement("p",null,z.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(K,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(be,{size:17}))),p&&n.createElement("div",{className:"hv-error"},n.createElement(an,null,p),n.createElement("button",{className:"hv-retry-btn",onClick:()=>g(z=>z+1)},n.createElement(Is,{size:15})," Try Again")),s?n.createElement("div",{className:"hv-loading"},n.createElement(wn,null)):I.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},I.map((z,D)=>n.createElement("div",{className:"hv-product-item",key:z._id||z.slug,style:{"--item-index":D}},n.createElement(di,{product:z,index:D})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(be,{size:17})))):p?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(iv,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(be,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(be,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(gt,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(K,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(be,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(_r,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(gt,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Qe,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(be,{size:18}))),n.createElement("style",null,`

/* =========================================
   HOVIRA HOME PAGE - PREMIUM DESIGN
========================================= */

:root {
  --hv-primary: #bd765f;
  --hv-dark: #38251f;
  --hv-text: #66524b;
  --hv-muted: #947d73;
  --hv-peach: #f6e7dc;
  --hv-light: #fffaf6;
  --hv-border: #eadbd1;
}

/* ANNOUNCEMENT */

.home-announcement {
  min-height: 38px;
  background: #392821;
  color: #fff5ee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 8px 15px;
}

.home-announcement a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #eec2a9;
  text-decoration: none;
}

/* COMMON */

.hv-hero,
.hv-benefits,
.hv-products-section,
.hv-ritual,
.hv-story,
.hv-newsletter,
.hv-final-cta {
  font-family: inherit;
}

.hv-eyebrow,
.hv-section-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--hv-primary);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hv-section-label > span,
.hv-eyebrow-line {
  height: 1px;
  width: 25px;
  background: var(--hv-primary);
}

/* HERO */

.hv-hero {
  position: relative;
  min-height: 620px;
  overflow: hidden;
  background: linear-gradient(
    115deg,
    #fffaf5 0%,
    #f8eee6 55%,
    #f0d9cb 100%
  );
}

.hv-hero-inner {
  max-width: 1250px;
  min-height: 620px;
  margin: auto;
  padding: 65px 45px 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.hv-hero-content {
  max-width: 570px;
}

.hv-hero-content h1 {
  color: var(--hv-dark);
  font-size: clamp(43px, 5.4vw, 72px);
  line-height: 1.08;
  letter-spacing: -3px;
  font-weight: 500;
  margin: 25px 0;
}

.hv-hero-content h1 em,
.hv-ritual-content h2 em,
.hv-story-left h2 em,
.hv-newsletter h2 em,
.hv-final-cta h2 em {
  color: var(--hv-primary);
  font-family: Georgia, serif;
  font-weight: 400;
}

.hv-hero-description {
  max-width: 460px;
  color: var(--hv-text);
  font-size: 14px;
  line-height: 1.9;
}

.hv-hero-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.hv-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 15px 23px;
  min-height: 49px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .4px;
  border-radius: 3px;
  transition: all .3s ease;
}

.hv-btn-primary {
  background: var(--hv-dark);
  color: #fff;
  border: 1px solid var(--hv-dark);
}

.hv-btn-primary:hover {
  background: var(--hv-primary);
  border-color: var(--hv-primary);
  color: #fff;
  transform: translateY(-3px);
}

.hv-btn-secondary {
  color: var(--hv-dark);
  border: 1px solid #cdb8a9;
  background: transparent;
}

.hv-btn-secondary:hover {
  background: #fff;
  border-color: var(--hv-primary);
  transform: translateY(-3px);
}

.hv-hero-bottom {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 48px;
}

.hv-hero-mini-icons {
  display: flex;
}

.hv-hero-mini-icons span {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-right: -7px;
  background: #eed9ca;
  color: var(--hv-primary);
  border: 2px solid #fffaf5;
}

.hv-hero-bottom strong,
.hv-hero-bottom small {
  display: block;
}

.hv-hero-bottom strong {
  font-size: 16px;
  color: var(--hv-dark);
}

.hv-hero-bottom small {
  font-size: 14px;
  color: var(--hv-muted);
  margin-top: 4px;
}

/* HERO VISUAL */

.hv-hero-visual {
  position: relative;
  width: 100%;
  max-width: 620px;
  margin: auto;
}

.hv-hero-image-bg {
  height: 550px;
  width: 100%;
  border-radius: 48% 48% 4px 4px;
  background: linear-gradient(145deg, #f2d9c9, #e8c3ac);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hv-hero-image-bg img{
  
    width: 100%;
    
   
}


.hv-image-circle {
  position: absolute;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 50%;
}

.circle-a {
  width: 370px;
  height: 370px;
}

.circle-b {
  width: 280px;
  height: 280px;
}

.hv-product-art {
  width: 175px;
  height: 310px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  animation: hvFloat 4s ease-in-out infinite;
}

.hv-art-shadow {
  position: absolute;
  width: 180px;
  height: 22px;
  border-radius: 50%;
  background: rgba(84,48,31,.17);
  bottom: -15px;
  filter: blur(9px);
}

.hv-art-cap {
  width: 52px;
  height: 48px;
  border-radius: 5px 5px 2px 2px;
  background: linear-gradient(90deg, #bd8e70, #e3b99a, #b27a5d);
  z-index: 2;
}

.hv-art-neck {
  width: 38px;
  height: 13px;
  background: #c89779;
}

.hv-art-bottle {
  width: 145px;
  height: 230px;
  border-radius: 25px 25px 35px 35px;
  background: linear-gradient(
    90deg,
    #d6aa91,
    #f4d5c1 30%,
    #e8bfa7 70%,
    #c99278
  );
  box-shadow: 12px 15px 25px rgba(96,53,33,.18);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hv-art-bottle-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #654435;
  text-align: center;
}

.hv-art-brand {
  font-size: 21px;
  font-family: Georgia, serif;
  letter-spacing: 4px;
}

.hv-art-line {
  height: 1px;
  width: 65px;
  background: #a77a61;
  margin: 12px 0;
}

.hv-art-bottle-content small {
  font-size: 8px;
  letter-spacing: 3px;
}

.hv-art-bottle-content strong {
  font-family: Georgia, serif;
  font-size: 23px;
  letter-spacing: 2px;
  margin: 5px 0;
}

.hv-art-volume {
  font-size: 8px;
  margin-top: 15px;
  letter-spacing: 2px;
}

.hv-floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 17px;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(10px);
  color: var(--hv-dark);
  border-radius: 3px;
  font-size: 11px;
  box-shadow: 0 8px 30px rgba(83,48,32,.09);
  z-index: 4;
}

.hv-floating-card svg {
  color: var(--hv-primary);
}

.floating-card-one {
  top: 100px;
  left: -20px;
}

.floating-card-two {
  bottom: 85px;
  right: -20px;
}

.hv-visual-decoration {
  position: absolute;
  right: 10px;
  top: 5px;
  color: var(--hv-primary);
  font-size: 38px;
}

.hv-hero-visual-caption {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  color: var(--hv-muted);
  font-size: 9px;
  letter-spacing: 2px;
}

.hv-hero-bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,.18);
}

.circle-one {
  height: 300px;
  width: 300px;
  top: -150px;
  right: -50px;
}

.circle-two {
  height: 200px;
  width: 200px;
  bottom: -100px;
  left: -50px;
}

.hv-hero-scroll {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--hv-muted);
  font-size: 8px;
  letter-spacing: 2px;
}

.hv-hero-scroll span {
  height: 25px;
  width: 1px;
  background: var(--hv-primary);
}

@keyframes hvFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* BENEFITS */

.hv-benefits {
  background: #fff;
  border-bottom: 1px solid var(--hv-border);
}

.hv-benefits-inner {
  max-width: 1250px;
  margin: auto;
  padding: 35px 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.hv-benefit {
  display: flex;
  align-items: center;
  gap: 13px;
}

.hv-benefit-icon {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: #f9eee7;
  border-radius: 50%;
  color: var(--hv-primary);
}

.hv-benefit-icon svg {
  width: 19px;
}

.hv-benefit h3 {
  color: var(--hv-dark);
  font-size: 17px;
  margin: 0 0 5px;
}

.hv-benefit p {
  color: var(--hv-muted);
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
}

/* PRODUCTS */

.hv-products-section {
  padding-top: 100px;
  padding-bottom: 105px;
}

.hv-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 45px;
}

.hv-section-heading h2,
.hv-story-left h2 {
  color: var(--hv-dark);
  font-family: Georgia, serif;
  font-size: clamp(36px, 4vw, 50px);
  font-weight: 400;
  line-height: 1.15;
  margin: 18px 0 12px;
}

.hv-section-heading p,
.hv-story-left > p {
  color: var(--hv-muted);
  font-size: 13px;
  line-height: 1.8;
}

.hv-view-all,
.hv-text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--hv-dark);
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid var(--hv-primary);
  padding-bottom: 9px;
  white-space: nowrap;
  transition: .3s;
}

.hv-view-all:hover,
.hv-text-link:hover {
  color: var(--hv-primary);
  gap: 15px;
}

.hv-product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.hv-product-item {
  min-width: 0;
  animation: hvFadeUp .6s ease both;
  animation-delay: calc(var(--item-index) * .1s);
}

@keyframes hvFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hv-mobile-shop {
  display: none;
}

.hv-error {
  margin-bottom: 20px;
}

.hv-retry-btn {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  padding: 9px 15px;
  margin-top: 10px;
  background: #f7eae2;
  border: 0;
  color: var(--hv-dark);
  cursor: pointer;
}

.hv-empty {
  text-align: center;
  padding: 65px 20px;
  background: var(--hv-light);
}

.hv-empty-icon {
  color: var(--hv-primary);
  margin-bottom: 15px;
}

.hv-empty h3 {
  font-family: Georgia, serif;
  font-size: 27px;
  color: var(--hv-dark);
}

.hv-empty p {
  color: var(--hv-muted);
  font-size: 13px;
  margin-bottom: 25px;
}

/* RITUAL BANNER */

.hv-ritual {
  max-width: 1250px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 470px;
  background: #f5e7dc;
  overflow: hidden;
}

.hv-ritual-art {
  position: relative;
  min-height: 470px;
  background: linear-gradient(145deg, #dfb59d, #f1d8c7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hv-ritual-sun {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #f8e7cb;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
}

.hv-ritual-orbit {
  position: absolute;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(255,255,255,.6);
  border-radius: 50%;
}

.hv-ritual-art-text {
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #6c4635;
}

.hv-ritual-art-text span {
  font-size: 11px;
  letter-spacing: 5px;
  margin-bottom: 20px;
}

.hv-ritual-art-text strong {
  font-family: Georgia, serif;
  font-size: 52px;
  font-weight: 400;
  line-height: 1.15;
}

.hv-ritual-art-text small {
  margin-top: 25px;
  letter-spacing: 3px;
  font-size: 8px;
}

.hv-ritual-star {
  position: absolute;
  right: 15%;
  top: 18%;
  font-size: 45px;
  color: #fff5e7;
}

.hv-ritual-leaf {
  position: absolute;
  width: 100px;
  height: 170px;
  border: 2px solid rgba(111,85,59,.45);
  border-radius: 100% 0 100% 0;
  transform: rotate(-30deg);
}

.leaf-one {
  bottom: -40px;
  left: 8%;
}

.leaf-two {
  top: 40px;
  right: 5%;
  transform: rotate(35deg);
}

.hv-ritual-content {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.hv-ritual-content h2 {
  font-family: Georgia, serif;
  font-size: clamp(37px, 4vw, 53px);
  font-weight: 400;
  color: var(--hv-dark);
  line-height: 1.15;
  margin: 20px 0;
}

.hv-ritual-content > p {
  color: var(--hv-text);
  font-size: 13px;
  line-height: 1.9;
  max-width: 430px;
  margin-bottom: 25px;
}

.hv-ritual-note {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--hv-primary);
  font-size: 11px;
  margin-top: 27px;
}

/* STORY */

.hv-story {
  padding-top: 20px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 70px;
  align-items: center;
}

.hv-story-left > p {
  max-width: 430px;
  margin: 20px 0 28px;
}

.hv-story-right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.hv-story-card {
  padding: 27px;
  min-height: 190px;
  background: #fbf2ec;
  position: relative;
  color: var(--hv-primary);
}

.hv-story-card:nth-child(3) {
  grid-column: 1 / 3;
}

.hv-story-card.story-card-highlight {
  background: #f0d9ca;
}

.hv-story-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  color: #b69b8d;
}

.hv-story-card h3 {
  color: var(--hv-dark);
  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 400;
  margin: 17px 0 8px;
}

.hv-story-card p {
  font-size: 11px;
  color: var(--hv-muted);
  line-height: 1.7;
  margin: 0;
}

/* NEWSLETTER */

.hv-newsletter {
  background: #f8eee7;
  position: relative;
  text-align: center;
  padding: 85px 20px;
  overflow: hidden;
}

.hv-newsletter-inner {
  max-width: 580px;
  margin: auto;
  position: relative;
  z-index: 2;
}

.hv-newsletter-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: #fff;
  color: var(--hv-primary);
}

.hv-newsletter h2 {
  font-family: Georgia, serif;
  color: var(--hv-dark);
  font-size: 43px;
  font-weight: 400;
  line-height: 1.2;
  margin: 18px 0;
}

.hv-newsletter p {
  color: var(--hv-muted);
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.hv-newsletter-form {
  display: flex;
  background: #fff;
  padding: 5px;
  max-width: 490px;
  margin: auto;
  border: 1px solid var(--hv-border);
}

.hv-newsletter-form input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  padding: 13px 15px;
  font-size: 12px;
  background: transparent;
  color: var(--hv-dark);
}

.hv-newsletter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--hv-dark);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 11px;
  transition: .3s;
}

.hv-newsletter-button:hover {
  background: var(--hv-primary);
}

.hv-newsletter-button:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.hv-newsletter-inner > small {
  display: block;
  margin-top: 18px;
  color: var(--hv-muted);
  font-size: 10px;
}

.hv-newsletter-success,
.hv-newsletter-error {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  font-size: 11px;
}

.hv-newsletter-success {
  color: #387b54;
}

.hv-newsletter-error {
  color: #b33b36;
}

.hv-newsletter-decoration {
  position: absolute;
  font-size: 230px;
  right: -20px;
  bottom: -100px;
  color: rgba(189,118,95,.08);
}

/* FINAL CTA */

.hv-final-cta {
  max-width: 1250px;
  margin: auto;
  padding: 75px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}

.hv-final-cta h2 {
  color: var(--hv-dark);
  font-family: Georgia, serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.15;
  margin: 15px 0 0;
}

.hv-mobile-break {
  display: none;
}

/* RESPONSIVE TABLET */

@media (max-width: 1024px) {
  .hv-hero-inner {
    padding: 55px 30px;
    gap: 20px;
  }

  .hv-hero-content h1 {
    font-size: 54px;
  }

  .hv-hero-image-bg {
    height: 400px;
  }

  .hv-benefits-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .hv-product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
  }

  .hv-ritual-content {
    padding: 40px;
  }

  .hv-story {
    gap: 35px;
  }
}

/* RESPONSIVE MOBILE */

@media (max-width: 767px) {
  .home-announcement {
    font-size: 11px;
    gap: 7px;
    letter-spacing: .4px;
  }

  .hv-hero {
    min-height: auto;
  }

  .hv-hero-inner {
    min-height: auto;
    padding: 55px 20px 65px;
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .hv-hero-content {
    text-align: center;
    margin: auto;
  }

  .hv-hero-content h1 {
    font-size: clamp(42px, 11vw, 57px);
    letter-spacing: -2px;
    margin: 20px 0;
  }

  .hv-hero-description {
    margin: auto;
    font-size: 12px;
  }

  .hv-hero-buttons {
    justify-content: center;
    gap: 10px;
  }

  .hv-btn {
    padding: 13px 16px;
    font-size: 10px;
  }

  .hv-hero-bottom {
    justify-content: center;
    margin-top: 30px;
    text-align: left;
  }

  .hv-hero-visual {
    max-width: 430px;
  }

  .hv-hero-image-bg {
    height: 340px;
    border-radius: 48% 48% 4px 4px;
  }

  .hv-product-art {
    transform: scale(.83);
  }

  .hv-floating-card {
    padding: 10px;
    font-size: 9px;
  }

  .floating-card-one {
    left: 0;
    top: 65px;
  }

  .floating-card-two {
    right: 0;
    bottom: 55px;
  }

  .hv-hero-scroll {
    display: none;
  }

  .hv-benefits-inner {
    padding: 28px 20px;
    gap: 22px 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hv-benefit {
    align-items: flex-start;
    gap: 9px;
  }

  .hv-benefit-icon {
    width: 34px;
    height: 34px;
  }

  .hv-benefit-icon svg {
    width: 16px;
  }

  .hv-benefit h3 {
    font-size: 10px;
  }

  .hv-benefit p {
    font-size: 9px;
  }

  .hv-products-section {
    padding: 65px 18px;
  }

  .hv-section-heading {
    display: block;
    margin-bottom: 30px;
  }

  .hv-section-heading h2 {
    font-size: 40px;
  }

  .hv-section-heading p {
    font-size: 11px;
  }

  .hv-section-heading > .hv-view-all {
    display: none;
  }

  .hv-product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px 10px;
  }

  .hv-mobile-shop {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .hv-ritual {
    margin: 0 15px 65px;
    grid-template-columns: 1fr;
  }

  .hv-ritual-art {
    min-height: 300px;
  }

  .hv-ritual-sun {
    width: 165px;
    height: 165px;
    top: 35px;
  }

  .hv-ritual-art-text strong {
    font-size: 43px;
  }

  .hv-ritual-content {
    padding: 35px 25px;
  }

  .hv-ritual-content h2 {
    font-size: 40px;
  }

  .hv-ritual-content > p {
    font-size: 12px;
  }

  .hv-story {
    padding: 10px 20px 65px;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hv-story-left h2 {
    font-size: 40px;
  }

  .hv-story-right {
    gap: 10px;
  }

  .hv-story-card {
    min-height: 175px;
    padding: 18px;
  }

  .hv-story-card h3 {
    font-size: 17px;
  }

  .hv-story-card p {
    font-size: 10px;
  }

  .hv-newsletter {
    padding: 65px 18px;
  }

  .hv-newsletter h2 {
    font-size: 37px;
  }

  .hv-newsletter p {
    font-size: 11px;
  }

  .hv-newsletter-form {
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: 0;
  }

  .hv-newsletter-form input {
    background: #fff;
    min-height: 47px;
    width: 100%;
    box-sizing: border-box;
  }

  .hv-newsletter-button {
    min-height: 45px;
  }

  .hv-final-cta {
    padding: 55px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  .hv-final-cta h2 {
    font-size: 36px;
  }

  .hv-mobile-break {
    display: block;
  }
}

/* SMALL MOBILE */

@media (max-width: 380px) {
  .hv-hero-inner {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hv-hero-content h1 {
    font-size: 39px;
  }

  .hv-hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hv-hero-buttons .hv-btn {
    width: 100%;
    box-sizing: border-box;
  }

  .hv-benefits-inner {
    grid-template-columns: 1fr;
  }

  .hv-product-grid {
    gap: 12px 8px;
  }

  .hv-story-right {
    grid-template-columns: 1fr;
  }

  .hv-story-card:nth-child(3) {
    grid-column: auto;
  }
}

/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
  .hv-product-art,
  .hv-product-item {
    animation: none;
  }

  .hv-btn,
  .hv-view-all,
  .hv-text-link {
    transition: none;
  }
}


  
  `))}const hd="/assets/shampoo-DKEOU9sx.jpeg",kv="/assets/lab-D4lI-tRu.jpg",Nv="/assets/meet-BceJ9sLp.jpg",zv="/assets/wash-DPVUhSQC.jpg";function Sv(){const[i,o]=Eg(),[s,u]=b.useState([]),[p,m]=b.useState(!0),[f,g]=b.useState(""),[h,v]=b.useState(i.get("search")||""),[y,E]=b.useState(i.get("category")||"all"),[S,O]=b.useState("featured"),[I,R]=b.useState(""),[z,D]=b.useState(!1),[U,P]=b.useState(!1),[W,ee]=b.useState(!1);b.useEffect(()=>{let q=!0;return(async()=>{m(!0),g("");try{const X=await Te.products();if(q){const j=Array.isArray(X)?X.filter(L=>L.isActive!==!1):[];u(j)}}catch(X){q&&g(X.message||"Unable to load products.")}finally{q&&m(!1)}})(),()=>{q=!1}},[]),b.useEffect(()=>{v(i.get("search")||""),E(i.get("category")||"all")},[i]),b.useEffect(()=>(document.body.style.overflow=U?"hidden":"",()=>{document.body.style.overflow=""}),[U]);const ie=b.useMemo(()=>[...new Set(s.map(q=>{var ye;return typeof q.category=="string"?q.category:(ye=q.category)==null?void 0:ye.name}).filter(Boolean))].sort((q,ye)=>q.localeCompare(ye)),[s]),ge=b.useMemo(()=>{let q=[...s];const ye=h.toLowerCase().trim();return ye&&(q=q.filter(X=>{var B;const j=typeof X.category=="string"?X.category:((B=X.category)==null?void 0:B.name)||"";return[X.name,X.shortDescription,X.description,j,X.brand,...X.tags||[]].join(" ").toLowerCase().includes(ye)})),y!=="all"&&(q=q.filter(X=>{var L;return(typeof X.category=="string"?X.category:((L=X.category)==null?void 0:L.name)||"").toLowerCase()===y.toLowerCase()})),I!==""&&(q=q.filter(X=>Number(X.salePrice??X.price)<=Number(I))),z&&(q=q.filter(X=>Number(X.stock)>0)),S==="price-low"&&q.sort((X,j)=>Number(X.salePrice??X.price)-Number(j.salePrice??j.price)),S==="price-high"&&q.sort((X,j)=>Number(j.salePrice??j.price)-Number(X.salePrice??X.price)),S==="name"&&q.sort((X,j)=>(X.name||"").localeCompare(j.name||"")),S==="newest"&&q.sort((X,j)=>new Date(j.createdAt||0)-new Date(X.createdAt||0)),S==="featured"&&q.sort((X,j)=>Number(j.isFeatured)-Number(X.isFeatured)),q},[s,h,y,I,z,S]),V=[h.trim()!=="",y!=="all",I!=="",z].filter(Boolean).length,oe=(q,ye)=>{const X={};q.trim()&&(X.search=q.trim()),ye!=="all"&&(X.category=ye),o(X)},M=()=>{v(""),E("all"),R(""),D(!1),O("featured"),o({})},se=q=>{q==="search"&&(v(""),oe("",y)),q==="category"&&(E("all"),oe(h,"all")),q==="price"&&R(""),q==="stock"&&D(!1)},ze=q=>{E(q),oe(h,q)},Ee=q=>{v(q),oe(q,y)},Re=()=>P(!1);return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(K,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Qe,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(_r,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("div",{className:"hv-best-deals-trigger-wrap"},n.createElement("button",{type:"button",className:`hv-best-deals-trigger ${W?"is-active":""}`,onClick:()=>ee(q=>!q),"aria-expanded":W,"aria-controls":"hv-dealer-section"},n.createElement(Qe,{size:17}),n.createElement("span",null,"Best Deals"),n.createElement(cd,{size:17,className:"hv-best-deals-chevron"}))),W&&n.createElement("section",{id:"hv-dealer-section",className:"hv-dealer-section","aria-labelledby":"hv-dealer-title"},n.createElement("div",{className:"hv-dealer-hero"},n.createElement("div",{className:"hv-dealer-hero-content"},n.createElement("span",{className:"hv-dealer-eyebrow"},"HOVIRA PROFESSIONAL COLLECTION"),n.createElement("h2",{id:"hv-dealer-title"},"Introducing the",n.createElement("br",null),n.createElement("em",null,"Mineral Reset Formula.")),n.createElement("p",null,"Discover a thoughtfully positioned 3-in-1 shampoo concept designed for an everyday cleansing routine and all hair types."),n.createElement("div",{className:"hv-dealer-tags"},n.createElement("span",null,"3-IN-1 FORMULA"),n.createElement("span",null,"ALL HAIR TYPES"),n.createElement("span",null,"DEALER EXCLUSIVE")),n.createElement("a",{href:"#hv-dealer-details",className:"hv-dealer-primary-btn"},"Discover the formula ",n.createElement(be,{size:16})),n.createElement("p",{className:"hv-dealer-price-note"},"Dealer enquiries only · Public selling price is not displayed")),n.createElement("div",{className:"hv-dealer-hero-image"},n.createElement("img",{src:`${hd}`,alt:"HOVIRA Mineral Reset 3-in-1 Shampoo"}),n.createElement("span",{className:"hv-dealer-image-caption"},"MINERAL RESET COLLECTION"))),n.createElement("div",{className:"hv-dealer-intro",id:"hv-dealer-details"},n.createElement("span",{className:"hv-dealer-label"},"BEYOND ORDINARY HAIR CLEANSING"),n.createElement("h2",null,"A fresh approach to",n.createElement("br",null),n.createElement("em",null,"everyday hair care.")),n.createElement("p",null,"Hair breakage, dryness and buildup can have several contributing factors. Hair care habits, styling practices and unsuitable products may also affect how hair looks and feels. HOVIRA Mineral Reset is presented as a 3-in-1 shampoo concept focused on a refreshing cleansing experience.")),n.createElement("div",{className:"hv-dealer-benefits"},n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"01"),n.createElement("h3",null,"Cleanse"),n.createElement("p",null,"Designed to cleanse hair and scalp as part of your regular hair care routine.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"02"),n.createElement("h3",null,"Mineral Reset"),n.createElement("p",null,"Formulated around a mineral-reset concept to help address mineral and product buildup.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"03"),n.createElement("h3",null,"Fresh Hair Feel"),n.createElement("p",null,"Designed to leave hair feeling refreshed, clean and manageable after washing."))),n.createElement("div",{className:"hv-dealer-video-section"},n.createElement("div",{className:"hv-dealer-video-heading"},n.createElement("span",{className:"hv-dealer-label"},"EXPERIENCE HOVIRA"),n.createElement("h2",null,"Discover the ",n.createElement("em",null,"product story.")),n.createElement("p",null,"Watch the product introduction, formulation story and usage demonstration.")),n.createElement("video",{className:"hv-dealer-video",controls:!0,playsInline:!0,preload:"metadata",poster:"/images/mineral-reset-video-poster.webp"},n.createElement("source",{src:"/videos/mineral-reset-product.mp4",type:"video/mp4"}),"Your browser does not support video playback.")),n.createElement("div",{className:"hv-dealer-hair-types"},n.createElement("div",null,n.createElement("span",{className:"hv-dealer-label"},"ONE FORMULA, EVERYDAY CARE"),n.createElement("h2",null,"Mineral Reset Formula",n.createElement("br",null),n.createElement("em",null,"for all hair types.")),n.createElement("p",null,"A versatile cleansing concept positioned for different hair types and everyday hair care routines. Please refer to the final product label for suitability and directions.")),n.createElement("div",{className:"hv-dealer-hair-points"},n.createElement("span",null,n.createElement(ft,{size:16})," Straight hair"),n.createElement("span",null,n.createElement(ft,{size:16})," Wavy hair"),n.createElement("span",null,n.createElement(ft,{size:16})," Curly hair"),n.createElement("span",null,n.createElement(ft,{size:16})," Different hair textures"))),n.createElement("div",{className:"hv-dealer-gallery"},n.createElement("div",{className:"hv-dealer-gallery-heading"},n.createElement("span",{className:"hv-dealer-label"},"THE PRODUCT COLLECTION"),n.createElement("h2",null,"Every detail, ",n.createElement("em",null,"thoughtfully presented."))),n.createElement("div",{className:"hv-dealer-gallery-grid"},n.createElement("img",{src:`${hd}`,alt:"HOVIRA Mineral Reset Shampoo front packaging",loading:"lazy"}),n.createElement("img",{src:`${kv}`,alt:"HOVIRA Mineral Reset Shampoo packaging details",loading:"lazy"}),n.createElement("img",{src:`${Nv}`,alt:"HOVIRA Mineral Reset Shampoo texture",loading:"lazy"}),n.createElement("img",{src:`${zv}`,alt:"HOVIRA Mineral Reset Shampoo lifestyle presentation",loading:"lazy"}))),n.createElement("div",{className:"hv-dealer-partnership"},n.createElement("span",{className:"hv-dealer-label"},"GROW WITH HOVIRA"),n.createElement("h2",null,"Be a part of our",n.createElement("br",null),n.createElement("em",null,"dealer network.")),n.createElement("p",null,"Interested in introducing HOVIRA Mineral Reset Shampoo to your market? Connect with our team to explore product information, distribution opportunities and dealer partnership details."),n.createElement("div",{className:"hv-dealer-partner-points"},n.createElement("span",null,n.createElement(ft,{size:15})," Product information"),n.createElement("span",null,n.createElement(ft,{size:15})," Dealer pricing on enquiry"),n.createElement("span",null,n.createElement(ft,{size:15})," Distribution opportunities"),n.createElement("span",null,n.createElement(ft,{size:15})," Business support details")),n.createElement(K,{to:"/contact?type=dealer",className:"hv-dealer-primary-btn"},"Become a HOVIRA Dealer ",n.createElement(be,{size:16})),n.createElement("small",null,"Dealer enquiries only. Pricing and commercial terms are shared directly with interested business partners."))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:y==="all"?"active":"",onClick:()=>ze("all")},"All Products",y==="all"&&n.createElement(ft,{size:14})),ie.map(q=>n.createElement("button",{key:q,className:y===q?"active":"",onClick:()=>ze(q)},q,y===q&&n.createElement(ft,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${U?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:M},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Re,"aria-label":"Close filters"},n.createElement(zt,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(Ds,{size:17}),n.createElement("input",{type:"search",value:h,onChange:q=>Ee(q.target.value),placeholder:"Try serum, cleanser..."}),h&&n.createElement("button",{type:"button",onClick:()=>se("search"),"aria-label":"Clear search"},n.createElement(zt,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:y==="all",onChange:()=>ze("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,s.length)),ie.map(q=>n.createElement("label",{className:"hv-filter-option",key:q},n.createElement("input",{type:"radio",checked:y===q,onChange:()=>ze(q)}),n.createElement("span",null,q),n.createElement("i",null,s.filter(ye=>{var j;return(typeof ye.category=="string"?ye.category:(j=ye.category)==null?void 0:j.name)===q}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:I,onChange:q=>R(q.target.value),placeholder:"Enter maximum price"}),I&&n.createElement("button",{type:"button",onClick:()=>se("price"),"aria-label":"Clear maximum price"},n.createElement(zt,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:z,onChange:q=>D(q.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:M},n.createElement(dd,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Re},"Show ",ge.length," Products",n.createElement(be,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>P(!0)},n.createElement(fv,{size:16}),"Filters",V>0&&n.createElement("span",null,V)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,p?"...":ge.length),n.createElement("span",null,ge.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(Zg,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:S,onChange:q=>O(q.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(cd,{size:14}))),V>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),h&&n.createElement("button",{onClick:()=>se("search")},"Search: ",h,n.createElement(zt,{size:13})),y!=="all"&&n.createElement("button",{onClick:()=>se("category")},y,n.createElement(zt,{size:13})),I&&n.createElement("button",{onClick:()=>se("price")},"Under ₹",I,n.createElement(zt,{size:13})),z&&n.createElement("button",{onClick:()=>se("stock")},"In stock",n.createElement(zt,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:M},"Clear all")),f&&n.createElement("div",{className:"hv-shop-error"},n.createElement(an,null,f)),p?n.createElement("div",{className:"hv-shop-loading"},n.createElement(wn,null)):ge.length>0?n.createElement("div",{className:"hv-shop-product-grid"},ge.map((q,ye)=>n.createElement(di,{key:q._id||q.slug,product:q,index:ye}))):f?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Bt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:M},n.createElement(dd,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Qe,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(K,{to:"/about"},"Discover HOVIRA ",n.createElement(be,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${U?"show":""}`,"aria-label":"Close filters",onClick:Re}),n.createElement("style",null,`
          
/* ==========================================
   HOVIRA SHOP PAGE
   Premium Cream | Peach | Brown Theme
========================================== */

.hv-shop-hero {
  position: relative;
  min-height: 360px;
  background: linear-gradient(
    115deg,
    #fffaf6 0%,
    #f8eee7 55%,
    #f0d9cb 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 65px 20px;
  overflow: hidden;
}

.hv-shop-hero-content {
  max-width: 680px;
  position: relative;
  z-index: 2;
}

.hv-shop-breadcrumb {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: #947d73;
  margin-bottom: 28px;
}

.hv-shop-breadcrumb a {
  color: #947d73;
  text-decoration: none;
  transition: .3s;
}

.hv-shop-breadcrumb a:hover {
  color: #bd765f;
}

.hv-shop-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #bd765f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hv-shop-hero h1 {
  color: #38251f;
  font-family: Georgia, serif;
  font-size: clamp(45px, 6vw, 67px);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -2px;
  margin: 22px 0 15px;
}

.hv-shop-hero h1 em {
  color: #bd765f;
  font-weight: 400;
}

.hv-shop-hero-content > p {
  color: #765f54;
  font-size: 13px;
  line-height: 1.9;
  max-width: 480px;
  margin: 0 auto;
}

.hv-shop-hero-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 28px;
}

.hv-shop-hero-bottom > span:first-child {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #bd765f;
  font-size: 9px;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.hv-shop-hero-line {
  width: 40px;
  height: 1px;
  background: #bd765f;
}

.hv-shop-hero-decoration {
  position: absolute;
  color: rgba(189, 118, 95, .18);
  font-size: 130px;
  pointer-events: none;
}

.shop-decoration-one {
  top: -25px;
  left: 8%;
}

.shop-decoration-two {
  bottom: -45px;
  right: 8%;
}

/* ==========================================
   SHOP MAIN SECTION
========================================== */

.hv-shop-section {
  max-width: 1320px;
  margin: auto;
  padding: 75px 35px 100px;
}

/* CATEGORY SECTION */

.hv-category-section {
  margin-bottom: 38px;
}

.hv-category-heading {
  margin-bottom: 22px;
}

.hv-shop-section-label {
  display: inline-block;
  color: #bd765f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hv-category-heading h2 {
  color: #38251f;
  font-family: Georgia, serif;
  font-size: 34px;
  font-weight: 400;
  margin: 12px 0 0;
}

.hv-category-heading h2 em {
  color: #bd765f;
  font-weight: 400;
}

/* CATEGORY PILLS */

.hv-category-pills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.hv-category-pills button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 39px;
  padding: 9px 17px;
  border: 1px solid #eadbd1;
  border-radius: 30px;
  background: #fff;
  color: #765f54;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: all .3s ease;
}

.hv-category-pills button:hover {
  border-color: #bd765f;
  color: #bd765f;
  background: #fffaf6;
}

.hv-category-pills button.active {
  background: #38251f;
  color: #fff;
  border-color: #38251f;
}

.hv-shop-divider {
  height: 1px;
  background: #eadbd1;
  margin-bottom: 35px;
}

/* ==========================================
   SHOP LAYOUT
========================================== */

.hv-shop-layout {
  display: grid;
  grid-template-columns: 245px minmax(0, 1fr);
  gap: 35px;
  align-items: start;
}

/* ==========================================
   FILTER SIDEBAR
========================================== */

.hv-shop-filters {
  background: #fffaf6;
  border: 1px solid #eadbd1;
  padding: 23px 20px;
  position: sticky;
  top: 110px;
  min-width: 0;
}

.hv-filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 22px;
  border-bottom: 1px solid #eadbd1;
}

.hv-filter-header h3 {
  color: #38251f;
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: 400;
  margin: 8px 0 0;
}

.hv-filter-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hv-clear-btn {
  border: 0;
  background: transparent;
  color: #bd765f;
  font-family: inherit;
  font-size: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.hv-clear-btn:hover {
  color: #38251f;
}

.hv-filter-close {
  display: none;
  border: none;
  background: transparent;
  color: #38251f;
  cursor: pointer;
}

/* FILTER BLOCK */

.hv-filter-block {
  padding: 22px 0;
  border-bottom: 1px solid #eadbd1;
}

.hv-filter-block h4 {
  color: #38251f;
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 15px;
}

/* FILTER SEARCH */

.hv-filter-search {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 11px;
  height: 42px;
  background: #fff;
  border: 1px solid #eadbd1;
  transition: .3s;
}

.hv-filter-search:focus-within {
  border-color: #bd765f;
}

.hv-filter-search > svg {
  flex-shrink: 0;
  color: #bd765f;
}

.hv-filter-search input {
  min-width: 0;
  flex: 1;
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #38251f;
  font-family: inherit;
  font-size: 11px;
}

.hv-filter-search input::placeholder {
  color: #a99488;
}

.hv-filter-search button,
.hv-price-input button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: #bd765f;
  cursor: pointer;
  padding: 3px;
}

/* CATEGORY FILTER OPTIONS */

.hv-filter-options {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hv-filter-option {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #765f54;
  font-size: 11px;
  cursor: pointer;
}

.hv-filter-option input {
  width: 15px;
  height: 15px;
  accent-color: #bd765f;
  cursor: pointer;
  flex-shrink: 0;
}

.hv-filter-option span {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}

.hv-filter-option i {
  color: #a99488;
  font-size: 10px;
  font-style: normal;
}

/* PRICE FILTER */

.hv-price-input {
  display: flex;
  align-items: center;
  gap: 9px;
  height: 42px;
  padding: 0 11px;
  background: #fff;
  border: 1px solid #eadbd1;
}

.hv-price-input:focus-within {
  border-color: #bd765f;
}

.hv-price-input > span {
  color: #bd765f;
  font-size: 13px;
  font-weight: 700;
}

.hv-price-input input {
  flex: 1;
  min-width: 0;
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: #38251f;
  font-family: inherit;
  font-size: 11px;
}

.hv-price-input input::-webkit-inner-spin-button,
.hv-price-input input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.hv-price-input input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.hv-filter-hint {
  display: block;
  margin-top: 10px;
  color: #947d73;
  font-size: 10px;
}

/* STOCK FILTER */

.hv-stock-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  cursor: pointer;
}

.hv-stock-filter > span {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hv-stock-filter strong {
  color: #38251f;
  font-size: 11px;
}

.hv-stock-filter small {
  color: #947d73;
  font-size: 10px;
}

.hv-stock-filter input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

.hv-stock-filter i {
  width: 37px;
  height: 20px;
  border-radius: 30px;
  background: #dfd2c9;
  position: relative;
  transition: .3s;
  flex-shrink: 0;
}

.hv-stock-filter i::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  left: 3px;
  top: 3px;
  transition: .3s;
}

.hv-stock-filter input:checked + i {
  background: #bd765f;
}

.hv-stock-filter input:checked + i::after {
  transform: translateX(17px);
}

.hv-stock-filter input:focus-visible + i {
  outline: 2px solid #38251f;
  outline-offset: 3px;
}

/* RESET BUTTON */

.hv-reset-filters {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #eadbd1;
  background: #fff;
  color: #765f54;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: .3s;
}

.hv-reset-filters:hover {
  color: #bd765f;
  border-color: #bd765f;
}

/* MOBILE APPLY BUTTON */

.hv-apply-filters {
  display: none;
}

/* ==========================================
   RESULTS TOOLBAR
========================================== */

.hv-shop-results {
  min-width: 0;
}

.hv-results-toolbar {
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 22px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eadbd1;
}

.hv-results-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hv-results-count {
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: #947d73;
  font-size: 12px;
}

.hv-results-count strong {
  color: #38251f;
  font-size: 19px;
  font-weight: 600;
}

/* SORT */

.hv-sort-control {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #765f54;
  font-size: 11px;
  white-space: nowrap;
}

.hv-sort-control > svg:first-child {
  color: #bd765f;
}

.hv-sort-control select {
  max-width: 180px;
  border: 1px solid #eadbd1;
  background: #fffaf6;
  color: #38251f;
  padding: 10px 30px 10px 11px;
  outline: none;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
}

.hv-sort-control select:focus {
  border-color: #bd765f;
}

.hv-sort-control > svg:last-child {
  display: none;
}

/* MOBILE FILTER BUTTON */

.hv-mobile-filter-button {
  display: none;
}

/* ==========================================
   ACTIVE FILTER CHIPS
========================================== */

.hv-active-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 23px;
}

.hv-active-filters > span {
  color: #947d73;
  font-size: 10px;
}

.hv-active-filters button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border: 1px solid #eadbd1;
  border-radius: 30px;
  background: #f8eee7;
  color: #765f54;
  font-family: inherit;
  font-size: 10px;
  cursor: pointer;
  max-width: 100%;
  overflow-wrap: anywhere;
  transition: .3s;
}

.hv-active-filters button:hover {
  border-color: #bd765f;
  color: #bd765f;
}

.hv-active-filters .hv-clear-chips {
  border: 0;
  background: transparent;
  color: #bd765f;
  text-decoration: underline;
}

/* ==========================================
   PRODUCT GRID
========================================== */

.hv-shop-product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px 22px;
  align-items: start;
}

.hv-shop-product-grid > * {
  min-width: 0;
}

/* LOADING */

.hv-shop-loading {
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ERROR */

.hv-shop-error {
  margin-bottom: 20px;
}

/* ==========================================
   EMPTY STATE
========================================== */

.hv-shop-empty {
  min-height: 400px;
  padding: 55px 25px;
  background: #fffaf6;
  border: 1px solid #eadbd1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hv-shop-empty-icon {
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #f8eee7;
  color: #bd765f;
  margin-bottom: 23px;
}

.hv-shop-empty h3 {
  font-family: Georgia, serif;
  color: #38251f;
  font-size: 32px;
  font-weight: 400;
  margin: 15px 0;
}

.hv-shop-empty h3 em {
  color: #bd765f;
}

.hv-shop-empty p {
  max-width: 400px;
  color: #947d73;
  font-size: 12px;
  line-height: 1.9;
}

.hv-empty-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 18px;
  padding: 13px 20px;
  border: 1px solid #38251f;
  background: #38251f;
  color: #fff;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: .3s;
}

.hv-empty-clear:hover {
  background: #bd765f;
  border-color: #bd765f;
}

/* ==========================================
   BOTTOM PROMO
========================================== */

.hv-shop-promo {
  background: linear-gradient(
    120deg,
    #f8eee7,
    #f2dfd3
  );
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  flex-wrap: wrap;
  text-align: center;
}

.hv-shop-promo > div > svg {
  color: #bd765f;
}

.hv-shop-promo h2 {
  font-family: Georgia, serif;
  color: #38251f;
  font-size: 29px;
  font-weight: 400;
  margin: 12px 0;
}

.hv-shop-promo h2 em {
  color: #bd765f;
}

.hv-shop-promo p {
  color: #947d73;
  font-size: 12px;
  margin: 0;
}

.hv-shop-promo > a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  background: #38251f;
  border: 1px solid #38251f;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-decoration: none;
  transition: .3s;
}

.hv-shop-promo > a:hover {
  background: #bd765f;
  border-color: #bd765f;
  transform: translateY(-3px);
}

/* ==========================================
   DRAWER SCRIM
========================================== */

.hv-shop-drawer-scrim {
  display: none;
}

/* ==========================================
   LARGE TABLET
========================================== */

@media (max-width: 1100px) {
  .hv-shop-section {
    padding-left: 25px;
    padding-right: 25px;
  }

  .hv-shop-layout {
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 25px;
  }

  .hv-shop-product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 18px;
  }
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 767px) {
  .hv-shop-hero {
    min-height: 330px;
    padding: 50px 20px;
  }

  .hv-shop-hero h1 {
    font-size: 48px;
  }

  .hv-shop-hero-content > p {
    font-size: 12px;
  }

  .hv-shop-hero-decoration {
    font-size: 85px;
  }

  .hv-shop-section {
    padding: 55px 20px 70px;
  }

  .hv-category-heading h2 {
    font-size: 29px;
  }

  .hv-category-pills {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 8px;
    scrollbar-width: thin;
    scrollbar-color: #d8b6a3 transparent;
  }

  .hv-category-pills button {
    flex-shrink: 0;
  }

  /* FILTER DRAWER */

  .hv-shop-layout {
    display: block;
  }

  .hv-shop-filters {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(350px, 88vw);
    max-height: 100dvh;
    overflow-y: auto;
    overscroll-behavior: contain;
    box-sizing: border-box;
    z-index: 1202;
    background: #fffaf6;
    border: none;
    padding: 25px 20px 30px;
    transform: translateX(-105%);
    visibility: hidden;
    transition: transform .35s ease, visibility .35s;
  }

  .hv-shop-filters.filters-open {
    transform: translateX(0);
    visibility: visible;
  }

  .hv-filter-close {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv-filter-header {
    position: sticky;
    top: -25px;
    z-index: 2;
    background: #fffaf6;
    padding-top: 5px;
  }

  .hv-apply-filters {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    min-height: 46px;
    margin-top: 22px;
    border: 0;
    background: #38251f;
    color: #fff;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .hv-apply-filters:hover {
    background: #bd765f;
  }

  .hv-reset-filters {
    margin-top: 22px;
  }

  .hv-shop-drawer-scrim {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1201;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(45, 30, 23, .48);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity .3s ease, visibility .3s;
  }

  .hv-shop-drawer-scrim.show {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  /* TOOLBAR */

  .hv-results-toolbar {
    min-height: 50px;
    margin-bottom: 20px;
  }

  .hv-mobile-filter-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    padding: 8px 12px;
    border: 1px solid #eadbd1;
    background: #fffaf6;
    color: #49352d;
    font-family: inherit;
    font-size: 11px;
    cursor: pointer;
  }

  .hv-mobile-filter-button > span {
    display: grid;
    place-items: center;
    min-width: 17px;
    height: 17px;
    padding: 0 3px;
    background: #bd765f;
    color: #fff;
    border-radius: 50%;
    font-size: 9px;
  }

  .hv-results-count strong {
    font-size: 17px;
  }

  .hv-results-count {
    font-size: 10px;
  }

  .hv-sort-control {
    gap: 5px;
  }

  .hv-sort-control > span {
    display: none;
  }

  .hv-sort-control select {
    max-width: 145px;
    padding: 9px 7px;
    font-size: 10px;
  }

  .hv-shop-product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px 13px;
  }

  .hv-shop-promo {
    padding: 45px 20px;
    gap: 25px;
  }

  .hv-shop-promo h2 {
    font-size: 26px;
  }
}

/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 480px) {
  .hv-shop-hero {
    min-height: 300px;
    padding: 45px 15px;
  }

  .hv-shop-hero h1 {
    font-size: 42px;
  }

  .hv-shop-hero-content > p {
    font-size: 11px;
  }

  .hv-shop-breadcrumb {
    margin-bottom: 22px;
  }

  .hv-shop-section {
    padding: 45px 15px 60px;
  }

  .hv-category-heading h2 {
    font-size: 27px;
  }

  .hv-shop-product-grid {
    gap: 22px 10px;
  }

  .hv-results-toolbar {
    gap: 8px;
  }

  .hv-results-left {
    gap: 9px;
  }

  .hv-mobile-filter-button {
    padding: 8px;
    font-size: 10px;
  }

  .hv-sort-control > svg:first-child {
    display: none;
  }

  .hv-sort-control select {
    max-width: 125px;
    font-size: 9px;
  }

  .hv-active-filters {
    gap: 6px;
  }

  .hv-active-filters > span {
    width: 100%;
  }

  .hv-shop-empty {
    min-height: 340px;
    padding: 35px 15px;
  }

  .hv-shop-empty h3 {
    font-size: 27px;
  }

  .hv-shop-empty p {
    font-size: 11px;
  }

  .hv-shop-promo h2 {
    font-size: 23px;
  }

  .hv-shop-promo p {
    font-size: 11px;
  }
}

/* ==========================================
   EXTRA SMALL MOBILE
========================================== */

@media (max-width: 360px) {
  .hv-shop-hero h1 {
    font-size: 37px;
  }

  .hv-shop-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hv-shop-product-grid {
    gap: 20px 8px;
  }

  .hv-results-count {
    gap: 4px;
  }

  .hv-results-count strong {
    font-size: 15px;
  }

  .hv-sort-control select {
    max-width: 112px;
  }
}

/* ==========================================
   REDUCED MOTION
========================================== */

@media (prefers-reduced-motion: reduce) {
  .hv-shop-section *,
  .hv-shop-hero *,
  .hv-shop-promo *,
  .hv-shop-drawer-scrim {
    animation: none !important;
    transition: none !important;
  }
}

/* ==========================================
   HOVIRA SHOP - FONT SIZE ENHANCEMENT
   Add at the END of existing CSS
========================================== */

/* Hero Section */
.hv-shop-breadcrumb {
  font-size: 13px;
}

.hv-shop-eyebrow {
  font-size: 12px;
}

.hv-shop-hero-content > p {
  font-size: 15px;
  line-height: 1.8;
}

.hv-shop-hero-bottom > span:first-child {
  font-size: 11px;
}

/* Category Section */
.hv-shop-section-label {
  font-size: 12px;
}

.hv-category-heading h2 {
  font-size: 37px;
}

.hv-category-pills button {
  font-size: 13px;
  min-height: 42px;
}

/* Filter Sidebar */
.hv-filter-header h3 {
  font-size: 25px;
}

.hv-clear-btn {
  font-size: 12px;
}

.hv-filter-block h4 {
  font-size: 14px;
}

.hv-filter-search input,
.hv-price-input input {
  font-size: 13px;
}

.hv-filter-option {
  font-size: 13px;
}

.hv-filter-option i {
  font-size: 12px;
}

.hv-filter-hint {
  font-size: 12px;
}

.hv-stock-filter strong {
  font-size: 13px;
}

.hv-stock-filter small {
  font-size: 12px;
}

.hv-reset-filters {
  font-size: 13px;
}

/* Results Toolbar */
.hv-results-count {
  font-size: 14px;
}

.hv-results-count strong {
  font-size: 21px;
}

.hv-sort-control {
  font-size: 13px;
}

.hv-sort-control select {
  font-size: 13px;
}

.hv-mobile-filter-button {
  font-size: 13px;
}

/* Active Filters */
.hv-active-filters > span {
  font-size: 12px;
}

.hv-active-filters button {
  font-size: 12px;
}

/* Empty State */
.hv-shop-empty h3 {
  font-size: 35px;
}

.hv-shop-empty p {
  font-size: 14px;
  line-height: 1.8;
}

.hv-empty-clear {
  font-size: 13px;
}

/* Bottom Promo */
.hv-shop-promo h2 {
  font-size: 32px;
}

.hv-shop-promo p {
  font-size: 14px;
}

.hv-shop-promo > a {
  font-size: 13px;
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 767px) {
  .hv-shop-hero-content > p {
    font-size: 14px;
  }

  .hv-category-heading h2 {
    font-size: 32px;
  }

  .hv-category-pills button {
    font-size: 13px;
  }

  .hv-filter-header h3 {
    font-size: 25px;
  }

  .hv-filter-block h4 {
    font-size: 14px;
  }

  .hv-filter-option {
    font-size: 14px;
  }

  .hv-filter-search input,
  .hv-price-input input {
    font-size: 14px;
  }

  .hv-apply-filters {
    font-size: 14px;
  }

  .hv-results-count {
    font-size: 12px;
  }

  .hv-results-count strong {
    font-size: 19px;
  }

  .hv-mobile-filter-button {
    font-size: 12px;
  }

  .hv-sort-control select {
    font-size: 12px;
  }

  .hv-shop-empty p {
    font-size: 14px;
  }
}

/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 480px) {
  .hv-shop-breadcrumb {
    font-size: 12px;
  }

  .hv-shop-hero-content > p {
    font-size: 13px;
  }

  .hv-category-heading h2 {
    font-size: 30px;
  }

  .hv-category-pills button {
    font-size: 12px;
  }

  .hv-filter-option {
    font-size: 14px;
  }

  .hv-filter-search input,
  .hv-price-input input {
    font-size: 14px;
  }

  .hv-results-count {
    font-size: 12px;
  }

  .hv-results-count strong {
    font-size: 18px;
  }

  .hv-sort-control select {
    font-size: 11px;
  }

  .hv-shop-empty h3 {
    font-size: 29px;
  }

  .hv-shop-empty p {
    font-size: 13px;
  }

  .hv-shop-promo h2 {
    font-size: 26px;
  }

  .hv-shop-promo p {
    font-size: 13px;
  }
}

/* ==========================================
   EXTRA SMALL MOBILE
========================================== */

@media (max-width: 360px) {
  .hv-shop-hero-content > p {
    font-size: 13px;
  }

  .hv-category-heading h2 {
    font-size: 27px;
  }

  .hv-category-pills button {
    font-size: 12px;
  }

  .hv-results-count {
    font-size: 11px;
  }

  .hv-shop-empty p {
    font-size: 13px;
  }
}


/* ==========================================
   HOVIRA DEALER EXCLUSIVE - MINERAL RESET
   Additive styles; existing shop styles untouched
========================================== */
.hv-dealer-section {
  --dealer-brown: #38251f;
  --dealer-peach: #bd765f;
  --dealer-light: #fff8f3;
  --dealer-border: #eadbd1;
  color: var(--dealer-brown);
  overflow: hidden;
}
.hv-dealer-section img { display: block; max-width: 100%; }
.hv-dealer-hero {
  display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 50px;
  background: linear-gradient(120deg, #fff8f3, #f2dfd3);
  padding: 80px max(6%, calc((100% - 1250px) / 2));
}
.hv-dealer-hero-content { max-width: 560px; }
.hv-dealer-eyebrow, .hv-dealer-label {
  display: inline-block; color: var(--dealer-peach); font-size: 11px;
  font-weight: 700; letter-spacing: 2px;
}
.hv-dealer-hero h2, .hv-dealer-intro h2, .hv-dealer-video-heading h2,
.hv-dealer-hair-types h2, .hv-dealer-gallery h2, .hv-dealer-partnership h2 {
  font-family: Georgia, serif; font-size: clamp(35px, 4.5vw, 57px);
  line-height: 1.2; font-weight: 400; margin: 20px 0;
}
.hv-dealer-section h2 em { color: var(--dealer-peach); font-weight: 400; }
.hv-dealer-hero-content > p, .hv-dealer-intro > p, .hv-dealer-hair-types p,
.hv-dealer-partnership > p { color: #806c62; font-size: 14px; line-height: 1.9; }
.hv-dealer-tags { display: flex; flex-wrap: wrap; gap: 9px; margin: 25px 0; }
.hv-dealer-tags span { border: 1px solid var(--dealer-border); background: #fff; padding: 10px 13px; font-size: 10px; letter-spacing: 1px; }
.hv-dealer-primary-btn {
  display: inline-flex; justify-content: center; align-items: center; gap: 10px;
  padding: 15px 23px; background: var(--dealer-brown); color: #fff !important;
  text-decoration: none; font-size: 13px; font-weight: 600;
  border: 1px solid var(--dealer-brown); transition: .3s;
}
.hv-dealer-primary-btn:hover { background: var(--dealer-peach); border-color: var(--dealer-peach); transform: translateY(-3px); }
.hv-dealer-price-note { margin-top: 14px; font-size: 11px !important; color: #947d73 !important; }
.hv-dealer-hero-image { position: relative; min-height: 430px; display: grid; place-items: center; background: #f7e9df; }
.hv-dealer-hero-image img { width: 100%; height: 430px; object-fit: contain; }
.hv-dealer-image-caption { position: absolute; bottom: 18px; font-size: 10px; letter-spacing: 2px; color: var(--dealer-brown); }
.hv-dealer-intro { max-width: 760px; margin: auto; padding: 85px 25px 55px; text-align: center; }
.hv-dealer-intro h2 { font-size: 43px; }
.hv-dealer-benefits {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  max-width: 1200px; margin: 20px auto 85px; padding: 0 25px;
}
.hv-dealer-benefit { padding: 32px 27px; border: 1px solid var(--dealer-border); background: var(--dealer-light); transition: .3s; }
.hv-dealer-benefit:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(56,37,31,.07); }
.hv-dealer-benefit > span { color: var(--dealer-peach); font-family: Georgia, serif; font-size: 32px; }
.hv-dealer-benefit h3 { font-family: Georgia, serif; font-size: 24px; font-weight: 400; margin: 20px 0 12px; }
.hv-dealer-benefit p { color: #806c62; font-size: 13px; line-height: 1.9; margin: 0; }
.hv-dealer-video-section { background: #38251f; padding: 75px 20px; text-align: center; }
.hv-dealer-video-heading h2 { color: #fff; }
.hv-dealer-video-heading p { color: #d9c6ba; font-size: 13px; margin: 0 0 35px; }
.hv-dealer-video { display: block; width: min(850px, 100%); aspect-ratio: 16 / 9; object-fit: cover; margin: auto; background: #211713; }
.hv-dealer-hair-types {
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
  padding: 80px max(6%, calc((100% - 1150px) / 2)); background: #fff8f3;
}
.hv-dealer-hair-types > div:first-child { max-width: 550px; }
.hv-dealer-hair-types h2 { font-size: 42px; }
.hv-dealer-hair-points { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; min-width: 350px; }
.hv-dealer-hair-points span { display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--dealer-border); padding: 14px 0; font-size: 13px; }
.hv-dealer-hair-points svg, .hv-dealer-partner-points svg { color: var(--dealer-peach); flex-shrink: 0; }
.hv-dealer-gallery { max-width: 1250px; margin: auto; padding: 85px 25px; }
.hv-dealer-gallery-heading { text-align: center; margin-bottom: 35px; }
.hv-dealer-gallery h2 { font-size: 38px; }
.hv-dealer-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
.hv-dealer-gallery-grid img { width: 100%; aspect-ratio: 4 / 5; object-fit: contain; background: #f8eee7; transition: .4s; }
.hv-dealer-gallery-grid img:hover { transform: scale(1.025); }
.hv-dealer-partnership { text-align: center; padding: 85px 25px; background: linear-gradient(120deg, #f8eee7, #f0d9cb); }
.hv-dealer-partnership h2 { font-size: 46px; }
.hv-dealer-partnership > p { max-width: 650px; margin: 0 auto 25px; }
.hv-dealer-partner-points { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px 25px; margin: 30px 0; }
.hv-dealer-partner-points span { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; }
.hv-dealer-partnership small { display: block; margin-top: 18px; color: #806c62; font-size: 11px; }
@media (max-width: 767px) {
  .hv-dealer-hero { grid-template-columns: 1fr; padding: 55px 22px; gap: 30px; }
  .hv-dealer-hero-image { min-height: 320px; }
  .hv-dealer-hero-image img { height: 320px; }
  .hv-dealer-benefits { grid-template-columns: 1fr; margin-bottom: 60px; }
  .hv-dealer-hair-types { flex-direction: column; align-items: flex-start; padding: 55px 22px; }
  .hv-dealer-hair-points { min-width: 0; width: 100%; }
  .hv-dealer-gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .hv-dealer-gallery { padding: 55px 18px; }
  .hv-dealer-intro { padding: 60px 22px 35px; }
  .hv-dealer-intro h2, .hv-dealer-hair-types h2 { font-size: 34px; }
}
@media (max-width: 480px) {
  .hv-dealer-hero h2 { font-size: 39px; }
  .hv-dealer-tags span { font-size: 9px; padding: 8px; }
  .hv-dealer-benefit { padding: 25px 20px; }
  .hv-dealer-video-section { padding: 55px 15px; }
  .hv-dealer-video-heading h2 { font-size: 34px; }
  .hv-dealer-gallery h2, .hv-dealer-partnership h2 { font-size: 32px; }
  .hv-dealer-partnership { padding: 60px 18px; }
  .hv-dealer-partner-points { flex-direction: column; align-items: center; }
}


/* BEST DEALS BUTTON */
.hv-best-deals-trigger-wrap {
  display: flex;
  justify-content: center;
  padding: 28px 20px 10px;
}
.hv-best-deals-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  min-height: 50px;
  padding: 13px 25px;
  border: 1px solid #38251f;
  border-radius: 3px;
  background: #38251f;
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .3px;
  cursor: pointer;
  transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
}
.hv-best-deals-trigger:hover,
.hv-best-deals-trigger.is-active {
  background: #bd765f;
  border-color: #bd765f;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(56,37,31,.13);
}
.hv-best-deals-chevron { transition: transform .25s ease; }
.hv-best-deals-trigger.is-active .hv-best-deals-chevron { transform: rotate(180deg); }

/* SLIGHTLY LARGER DEALER SHOWCASE TYPOGRAPHY */
.hv-dealer-eyebrow, .hv-dealer-label { font-size: 12px; }
.hv-dealer-hero h2, .hv-dealer-intro h2, .hv-dealer-video-heading h2,
.hv-dealer-hair-types h2, .hv-dealer-gallery h2, .hv-dealer-partnership h2 {
  font-size: clamp(39px, 4.8vw, 61px);
}
.hv-dealer-hero-content > p, .hv-dealer-intro > p,
.hv-dealer-hair-types p, .hv-dealer-partnership > p { font-size: 15px; }
.hv-dealer-tags span { font-size: 11px; }
.hv-dealer-primary-btn { font-size: 14px; }
.hv-dealer-price-note { font-size: 12px !important; }
.hv-dealer-image-caption { font-size: 11px; }
.hv-dealer-benefit h3 { font-size: 26px; }
.hv-dealer-benefit p { font-size: 14px; }
.hv-dealer-video-heading p { font-size: 14px; }
.hv-dealer-hair-points span, .hv-dealer-partner-points span { font-size: 14px; }
.hv-dealer-partnership small { font-size: 12px; }

@media (max-width: 480px) {
  .hv-best-deals-trigger-wrap { padding: 22px 15px 8px; }
  .hv-best-deals-trigger { width: 100%; max-width: 300px; min-height: 48px; font-size: 15px; }
  .hv-dealer-hero h2 { font-size: 40px; }
  .hv-dealer-intro h2, .hv-dealer-hair-types h2 { font-size: 35px; }
  .hv-dealer-hero-content > p, .hv-dealer-intro > p,
  .hv-dealer-hair-types p, .hv-dealer-partnership > p { font-size: 14px; }
  .hv-dealer-tags span { font-size: 10px; }
}

          `))}function Cv(){var B,N,F,me,ve,ke,$,te,Z,he,Ae,Ne;const{slugOrId:i}=$s(),[o,s]=b.useState(null),[u,p]=b.useState([]),[m,f]=b.useState(!0),[g,h]=b.useState(""),[v,y]=b.useState(1),[E,S]=b.useState(0),[O,I]=b.useState(""),[R,z]=b.useState(!1),[D,U]=b.useState(!1),{addToCart:P,toggleWishlist:W,isWishlisted:ee}=Kt();b.useEffect(()=>{let Q=!0;return f(!0),h(""),s(null),S(0),I(""),y(1),z(!1),U(!1),Promise.all([Te.product(i),Te.products()]).then(([ce,Be])=>{Q&&(s(ce),p(Be))}).catch(ce=>{Q&&h(ce.message)}).finally(()=>{Q&&f(!1)}),()=>{Q=!1}},[i]);const ie=b.useMemo(()=>{if(!o)return[];const Q=(o.images||[]).map(ce=>({url:typeof ce=="string"?ce:ce==null?void 0:ce.url,alt:typeof ce=="string"?o.name:ce==null?void 0:ce.alt})).filter(ce=>ce.url);if(!Q.length){const ce=pi(o);return ce?[{url:ce,alt:o.name}]:[]}return Q},[o]),ge=((B=ie[E])==null?void 0:B.url)||"";b.useEffect(()=>{if(!D)return;const Q=ce=>{ce.key==="Escape"&&U(!1),ce.key==="ArrowRight"&&ie.length>1&&S(Be=>(Be+1)%ie.length),ce.key==="ArrowLeft"&&ie.length>1&&S(Be=>Be===0?ie.length-1:Be-1)};return document.addEventListener("keydown",Q),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",Q),document.body.style.overflow=""}},[D,ie.length]);const V=o?xn(o):0,oe=Number((o==null?void 0:o.price)||0),M=(o==null?void 0:o.salePrice)!=null&&oe>V&&V>0,se=M?Math.round((oe-V)/oe*100):0,ze=(N=o==null?void 0:o.variants)==null?void 0:N.find(Q=>Q.value===O),Ee=Number(ze?ze.stock||0:(o==null?void 0:o.stock)||0),Re=typeof(o==null?void 0:o.category)=="object"?((F=o.category)==null?void 0:F.name)||"HOVIRA ESSENTIALS":(o==null?void 0:o.category)||"HOVIRA ESSENTIALS",q=Q=>Q?String(typeof Q=="object"?Q._id||Q.id||Q.name||"":Q):"",ye=b.useMemo(()=>{if(!o)return[];const Q=q(o.category);return u.filter(ce=>{const Be=q(ce.category)===Q;return ce._id!==o._id&&Be&&ce.isActive!==!1}).slice(0,4)},[u,o]),X=()=>{var Q;((Q=o.variants)==null?void 0:Q.length)>0&&!O||Ee<=0||(P(o,v,O),z(!0),setTimeout(()=>{z(!1)},2e3))},j=Q=>{y(ce=>Math.max(1,Math.min(99,ce+Q)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(wn,{label:"Finding your product..."}));if(g||!o)return n.createElement("div",{className:"page-shell pd-error"},n.createElement(an,null,g||"We couldn't find this product."),n.createElement(K,{to:"/shop",className:"pd-back-link"},n.createElement(rn,{size:17}),"Back to shop"));const L=ee(o);return n.createElement(n.Fragment,null,n.createElement(vt,{title:((me=o.seo)==null?void 0:me.metaTitle)||o.name,description:((ve=o.seo)==null?void 0:ve.metaDescription)||o.shortDescription||o.description,canonical:((ke=o.seo)==null?void 0:ke.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(K,{to:"/"},"Home"),n.createElement(ai,{size:14}),n.createElement(K,{to:"/shop"},"Shop"),n.createElement(ai,{size:14}),n.createElement("span",null,o.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},ge?n.createElement("img",{src:ge,alt:(($=ie[E])==null?void 0:$.alt)||o.name,key:ge,onClick:()=>U(!0),className:"pd-zoomable-image",title:"Click to zoom"}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Qe,{size:38}),n.createElement("span",null,"HOVIRA")),ge&&n.createElement("button",{type:"button",className:"pd-zoom-trigger",onClick:()=>U(!0),"aria-label":"Zoom product image"},n.createElement(yv,{size:16}),n.createElement("span",null,"Click to zoom")),o.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Qe,{size:13}),"HOVIRA Favourite"),M&&n.createElement("span",{className:"pd-discount-badge"},se,"% OFF"),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>S(Q=>Q===0?ie.length-1:Q-1),"aria-label":"Previous image"},n.createElement(rn,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>S(Q=>(Q+1)%ie.length),"aria-label":"Next image"},n.createElement(be,{size:18})))),ie.length>1&&n.createElement("div",{className:"pd-thumbnails"},ie.map((Q,ce)=>n.createElement("button",{key:`${Q.url}-${ce}`,className:E===ce?"active":"",onClick:()=>S(ce),"aria-label":`View image ${ce+1}`},n.createElement("img",{src:Q.url,alt:Q.alt||`${o.name} ${ce+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Qe,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},Re),n.createElement("h1",null,o.name),o.shortDescription&&n.createElement("p",{className:"pd-short-description"},o.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},je(V,o.currency||"INR")),M&&n.createElement(n.Fragment,null,n.createElement("del",null,je(oe,o.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",se,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((te=o.variants)==null?void 0:te.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),O&&n.createElement("span",null,O)),n.createElement("div",{className:"pd-variant-list"},o.variants.map(Q=>n.createElement("button",{type:"button",key:Q._id||Q.sku||Q.value,disabled:Q.stock===0,className:O===Q.value?"selected":"",onClick:()=>I(Q.value)},n.createElement("span",null,Q.name,": ",Q.value),O===Q.value&&n.createElement(ft,{size:16}),Q.stock===0&&n.createElement("small",null,"Sold out")))),o.variants.length>0&&!O&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},Ee>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>j(-1),disabled:v<=1,"aria-label":"Decrease quantity"},n.createElement(tm,{size:16})),n.createElement("span",null,v),n.createElement("button",{type:"button",onClick:()=>j(1),disabled:v>=99||v>=Ee,"aria-label":"Increase quantity"},n.createElement(Ur,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:Ee<=0||((Z=o.variants)==null?void 0:Z.length)>0&&!O,onClick:X},R?n.createElement(n.Fragment,null,n.createElement(ft,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Bt,{size:19}),Ee<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${L?"active":""}`,onClick:()=>W(o),"aria-label":"Toggle wishlist"},n.createElement(gt,{size:21,fill:L?"currentColor":"none"}))),Ee>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(qs,{size:15}),Ee," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Yr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(jt,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(_r,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:o.content||o.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(he=o.ingredients)!=null&&he.length?n.createElement("ul",{className:"pd-chip-list"},o.ingredients.map((Q,ce)=>n.createElement("li",{key:`${Q}-${ce}`},n.createElement(ft,{size:14}),Q))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(Ae=o.benefits)!=null&&Ae.length?n.createElement("ul",{className:"pd-benefit-list"},o.benefits.map((Q,ce)=>n.createElement("li",{key:`${Q}-${ce}`},n.createElement("span",null,n.createElement(ft,{size:15})),Q))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),o.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,o.howToUse)),o.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,o.warnings)))))),ye.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(K,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(be,{size:17}))),n.createElement("div",{className:"product-grid"},ye.map((Q,ce)=>n.createElement(di,{key:Q._id||Q.slug,product:Q,index:ce})))),D&&ge&&n.createElement("div",{className:"pd-zoom-overlay",role:"dialog","aria-modal":"true","aria-label":"Product image zoom",onClick:()=>U(!1)},n.createElement("button",{type:"button",className:"pd-zoom-close",onClick:()=>U(!1),"aria-label":"Close image zoom"},n.createElement(zt,{size:23})),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-prev",onClick:Q=>{Q.stopPropagation(),S(ce=>ce===0?ie.length-1:ce-1)},"aria-label":"Previous image"},n.createElement(rn,{size:22})),n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-next",onClick:Q=>{Q.stopPropagation(),S(ce=>(ce+1)%ie.length)},"aria-label":"Next image"},n.createElement(be,{size:22}))),n.createElement("div",{className:"pd-zoom-content",onClick:Q=>Q.stopPropagation()},n.createElement("img",{src:ge,alt:((Ne=ie[E])==null?void 0:Ne.alt)||o.name}),n.createElement("div",{className:"pd-zoom-caption"},o.name,ie.length>1&&n.createElement("span",null,E+1," / ",ie.length)))),n.createElement("style",null,`
          
/* =========================================
   HOVIRA PRODUCT DETAILS
========================================= */

.pd-page {
  background: #FFFAF6;
  min-height: 100vh;
  padding: 20px 0 90px;
  color: #38251F;
}

.pd-page .page-shell,
.pd-related.page-shell {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
}

/* Breadcrumbs */

.pd-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: #947D73;
  margin-bottom: 34px;
}

.pd-breadcrumbs a {
  color: #947D73;
  text-decoration: none;
  transition: color .2s ease;
}

.pd-breadcrumbs a:hover {
  color: #BD765F;
}

.pd-breadcrumbs span {
  color: #38251F;
  font-weight: 600;
}

/* Main layout */

.pd-main-grid {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 75px;
  align-items: start;
}

/* Gallery */

.pd-gallery {
  min-width: 0;
}

.pd-main-image {
  height: 590px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #F3E8E0;
}

.pd-main-image img {
  width: 100%;
  display: block;
  object-fit: cover;
  animation: pdImageFade .35s ease;
}


@keyframes pdImageFade {
  from {
    opacity: .6;
  }
  to {
    opacity: 1;
  }
}

.pd-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #BD765F;
  letter-spacing: 7px;
  font-size: 24px;
  font-weight: 700;
}

.pd-featured-badge,
.pd-discount-badge {
  position: absolute;
  top: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .4px;
}

.pd-featured-badge {
  left: 20px;
  background: #FFFAF6;
  color: #8D5948;
}

.pd-discount-badge {
  right: 20px;
  background: #38251F;
  color: #fff;
}

.pd-image-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 250, 246, .9);
  color: #38251F;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .25s ease;
}

.pd-image-arrow:hover {
  background: #BD765F;
  color: #fff;
}

.pd-image-prev {
  left: 15px;
}

.pd-image-next {
  right: 15px;
}

/* Thumbnails */

.pd-thumbnails {
  display: flex;
  gap: 12px;
  margin-top: 15px;
  overflow-x: auto;
  padding-bottom: 5px;
}

.pd-thumbnails button {
  flex: 0 0 86px;
  height: 92px;
  border: 1px solid #EADBD1;
  border-radius: 5px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  background: #F3E8E0;
  opacity: .7;
  transition: .25s ease;
}

.pd-thumbnails button.active,
.pd-thumbnails button:hover {
  opacity: 1;
  border: 2px solid #BD765F;
}

.pd-thumbnails img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pd-gallery-note {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #947D73;
  font-size: 12px;
  margin-top: 20px;
}

.pd-gallery-note svg {
  color: #BD765F;
}

/* Product information */

.pd-info {
  padding-top: 15px;
}

.pd-eyebrow {
  display: inline-block;
  color: #BD765F;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.pd-info h1 {
  font-family: Georgia, serif;
  font-size: clamp(34px, 4vw, 49px);
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -1.4px;
  color: #38251F;
  margin: 15px 0 14px;
}

.pd-short-description {
  color: #806B60;
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 22px;
}

.pd-price-area {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.pd-price {
  font-size: 27px;
  font-weight: 700;
  color: #38251F;
}

.pd-price-area del {
  font-size: 15px;
  color: #AA968C;
}

.pd-save {
  background: #F2DFD3;
  color: #A65F49;
  font-size: 11px;
  font-weight: 700;
  padding: 7px 12px;
  border-radius: 30px;
}

.pd-tax-note {
  color: #9C877D;
  font-size: 11px;
  margin-top: 7px;
}

.pd-info-divider {
  height: 1px;
  background: #EADBD1;
  margin: 27px 0;
}

/* Variants */

.pd-variant-section {
  margin-bottom: 28px;
}

.pd-field-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.pd-field-heading label {
  font-size: 13px;
  font-weight: 700;
}

.pd-field-heading span {
  font-size: 12px;
  color: #BD765F;
  font-weight: 600;
}

.pd-variant-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pd-variant-list button {
  min-height: 42px;
  border: 1px solid #EADBD1;
  background: #fff;
  color: #765F54;
  padding: 10px 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12px;
  cursor: pointer;
  transition: .2s ease;
}

.pd-variant-list button.selected {
  border-color: #BD765F;
  background: #F8EEE7;
  color: #8D5948;
}

.pd-variant-list button:disabled {
  opacity: .4;
  cursor: not-allowed;
  text-decoration: line-through;
}

.pd-variant-list small {
  font-size: 10px;
}

.pd-selection-hint {
  display: block;
  margin-top: 10px;
  font-size: 11px;
  color: #BD765F;
}

/* Quantity and stock */

.pd-purchase-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
}

.pd-stock-status {
  color: #65866B;
}

.pd-purchase-row {
  display: flex;
  align-items: stretch;
  gap: 12px;
}

.pd-quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 125px;
  min-width: 125px;
  height: 52px;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  background: #fff;
}

.pd-quantity button {
  border: none;
  background: transparent;
  width: 38px;
  height: 100%;
  color: #765F54;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-quantity button:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.pd-quantity span {
  font-size: 14px;
  font-weight: 700;
}

.pd-add-button {
  flex: 1;
  min-height: 52px;
  border: 1px solid #38251F;
  border-radius: 4px;
  background: #38251F;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: .25s ease;
}

.pd-add-button:hover:not(:disabled) {
  background: #BD765F;
  border-color: #BD765F;
}

.pd-add-button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.pd-wishlist {
  width: 52px;
  min-width: 52px;
  height: 52px;
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  color: #765F54;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .25s ease;
}

.pd-wishlist:hover,
.pd-wishlist.active {
  color: #BD765F;
  border-color: #BD765F;
  background: #F8EEE7;
}

.pd-stock-note {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #65866B;
  font-size: 11px;
  margin-top: 12px;
}

/* Promises */

.pd-promises {
  border-top: 1px solid #EADBD1;
  margin-top: 30px;
  padding-top: 23px;
  display: grid;
  gap: 19px;
}

.pd-promise {
  display: flex;
  align-items: center;
  gap: 14px;
}

.pd-promise-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-promise div:last-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.pd-promise strong {
  color: #38251F;
  font-size: 12px;
}

.pd-promise span {
  color: #947D73;
  font-size: 11px;
}

/* Details section */

.pd-details {
  margin-top: 110px;
}

.pd-details-heading {
  text-align: center;
  margin-bottom: 45px;
}

.pd-details-heading h2,
.pd-related-heading h2 {
  font-family: Georgia, serif;
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 500;
  color: #38251F;
  margin: 12px 0;
}

.pd-details-heading h2 em,
.pd-related-heading h2 em {
  color: #BD765F;
  font-weight: 400;
}

.pd-details-heading p,
.pd-related-heading p {
  font-size: 13px;
  color: #947D73;
  line-height: 1.7;
}

.pd-content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.pd-content-card {
  background: #fff;
  border: 1px solid #F0E3DA;
  border-radius: 7px;
  padding: 30px;
  min-width: 0;
}

.pd-description-card {
  grid-column: 1 / -1;
}

.pd-card-number {
  color: #BD765F;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.pd-content-card h3 {
  color: #38251F;
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: 500;
  margin: 12px 0 17px;
}

.pd-content-card p {
  color: #806B60;
  font-size: 13px;
  line-height: 1.9;
}

.pd-rich-content {
  color: #806B60;
  font-size: 13px;
  line-height: 1.9;
  overflow-wrap: anywhere;
}

.pd-rich-content h1,
.pd-rich-content h2,
.pd-rich-content h3,
.pd-rich-content h4 {
  color: #38251F;
  margin: 20px 0 10px;
  line-height: 1.4;
}

.pd-rich-content p {
  margin: 0 0 14px;
}

.pd-rich-content ul,
.pd-rich-content ol {
  padding-left: 22px;
  margin: 12px 0;
}

.pd-rich-content li {
  margin-bottom: 8px;
}

.pd-rich-content img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

.pd-rich-content a {
  color: #BD765F;
}

/* Ingredients */

.pd-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 0;
  list-style: none;
}

.pd-chip-list li {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #F8EEE7;
  color: #765F54;
  padding: 9px 12px;
  border-radius: 30px;
  font-size: 11px;
}

.pd-chip-list svg {
  color: #BD765F;
}

/* Benefits */

.pd-benefit-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 13px;
}

.pd-benefit-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #806B60;
  font-size: 12px;
  line-height: 1.7;
}

.pd-benefit-list li span {
  min-width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-warning-card {
  background: #F8EEE7;
}

/* Related products */

.pd-related {
  padding-top: 30px;
  padding-bottom: 100px;
}

.pd-related-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 32px;
}

.pd-shop-link {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #BD765F;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.pd-shop-link:hover {
  color: #38251F;
}

/* Error */

.pd-error {
  padding-top: 70px;
  padding-bottom: 70px;
}

.pd-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #BD765F;
  text-decoration: none;
  margin-top: 20px;
  font-size: 13px;
}

/* Product image zoom */

.pd-zoomable-image {
  cursor: zoom-in;
}

.pd-zoom-trigger {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 13px;
  border: 1px solid rgba(234, 219, 209, .9);
  border-radius: 30px;
  background: rgba(255, 250, 246, .94);
  color: #38251F;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(56, 37, 31, .08);
  transition: .2s ease;
}

.pd-zoom-trigger:hover {
  background: #38251F;
  border-color: #38251F;
  color: #fff;
}

.pd-zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px 80px;
  background: rgba(30, 20, 17, .94);
  animation: pdZoomFade .2s ease;
}

.pd-zoom-content {
  max-width: min(100%, 1100px);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.pd-zoom-content img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 125px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, .3);
}

.pd-zoom-caption {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #FFFAF6;
  font-size: 12px;
  text-align: center;
}

.pd-zoom-caption span {
  color: #D9B5A4;
  font-size: 11px;
}

.pd-zoom-close,
.pd-zoom-nav {
  position: absolute;
  z-index: 2;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 250, 246, .25);
  border-radius: 50%;
  background: rgba(255, 250, 246, .12);
  color: #fff;
  cursor: pointer;
  transition: .2s ease;
}

.pd-zoom-close:hover,
.pd-zoom-nav:hover {
  background: #BD765F;
  border-color: #BD765F;
}

.pd-zoom-close {
  top: 22px;
  right: 25px;
}

.pd-zoom-prev {
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
}

.pd-zoom-next {
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes pdZoomFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */

@media (max-width: 1000px) {
  .pd-main-grid {
    gap: 40px;
  }

  .pd-main-image {
    height: 480px;
  }

  .pd-info h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .pd-page .page-shell,
  .pd-related.page-shell {
    width: calc(100% - 32px);
  }

  .pd-main-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .pd-main-image {
    height: min(105vw, 550px);
  }

  .pd-info {
    padding-top: 0;
  }

  .pd-info h1 {
    font-size: 36px;
  }

  .pd-details {
    margin-top: 75px;
  }

  .pd-content-grid {
    grid-template-columns: 1fr;
  }

  .pd-description-card {
    grid-column: auto;
  }

  .pd-content-card {
    padding: 24px;
  }

  .pd-details-heading {
    margin-bottom: 30px;
  }

  .pd-related-heading {
    align-items: flex-start;
  }

  .pd-related-heading h2 {
    font-size: 32px;
  }

  .pd-related {
    padding-bottom: 65px;
  }
}

@media (max-width: 600px) {
  .pd-zoom-overlay {
    padding: 65px 15px 35px;
  }

  .pd-zoom-content img {
    max-height: calc(100vh - 135px);
  }

  .pd-zoom-close {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
  }

  .pd-zoom-nav {
    width: 38px;
    height: 38px;
  }

  .pd-zoom-prev {
    left: 8px;
  }

  .pd-zoom-next {
    right: 8px;
  }

  .pd-zoom-trigger {
    right: 12px;
    bottom: 12px;
    padding: 9px 11px;
  }
}

@media (max-width: 480px) {
  .pd-page {
    padding-top: 15px;
  }

  .pd-breadcrumbs {
    margin-bottom: 22px;
    font-size: 10px;
    gap: 6px;
  }

  .pd-main-image {
    height: 400px;
  }

  .pd-thumbnails button {
    flex-basis: 70px;
    height: 76px;
  }

  .pd-info h1 {
    font-size: 31px;
  }

  .pd-price {
    font-size: 24px;
  }

  .pd-purchase-row {
    gap: 8px;
  }

  .pd-quantity {
    width: 105px;
    min-width: 105px;
  }

  .pd-add-button {
    font-size: 11px;
    gap: 6px;
  }

  .pd-wishlist {
    width: 45px;
    min-width: 45px;
    height: 52px;
  }

  .pd-content-card {
    padding: 21px;
  }

  .pd-related-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .pd-details-heading h2 {
    font-size: 30px;
  }
}

          `))}function Tv(){const[i,o]=b.useState({email:"",password:""}),[s,u]=b.useState(!1),[p,m]=b.useState(""),[f,g]=b.useState(!1),{setCustomer:h}=Kt(),v=bn(),y=ln(),E=O=>{o(I=>({...I,[O.target.name]:O.target.value}))},S=async O=>{var I,R,z;O.preventDefault(),m(""),g(!0);try{const D=await Te.login(i),U=D.token||D.accessToken||((I=D.data)==null?void 0:I.token)||((R=D.data)==null?void 0:R.accessToken);if(!U)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");Qd(U);const P=Mt(D,["customer","user","profile"])||await Te.me();h(P),v(((z=y.state)==null?void 0:z.from)||"/account",{replace:!0})}catch(D){m((D==null?void 0:D.message)||"We couldn't sign you in. Please try again.")}finally{g(!1)}};return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Sign In to Your HOVIRA Account | Secure Skincare Shopping",description:"Sign in securely to your HOVIRA account to manage your profile, wishlist, orders and skincare purchases."}),n.createElement("main",{className:"login-page"},n.createElement("section",{className:"login-shell"},n.createElement("aside",{className:"login-visual"},n.createElement("div",{className:"login-visual-top"},n.createElement(K,{to:"/",className:"login-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"login-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"login-visual-tag"},n.createElement(Qe,{size:13})," YOUR DAILY RITUAL")),n.createElement("div",{className:"login-visual-content"},n.createElement("span",{className:"login-visual-kicker"},"A MOMENT FOR YOU"),n.createElement("h1",null,"Care that feels",n.createElement("br",null),n.createElement("em",null,"like coming home.")),n.createElement("p",null,"Your HOVIRA favourites, thoughtful essentials and personal skincare journey are just a sign in away."),n.createElement("div",{className:"login-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Keep your favourites close"),n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Follow your orders with ease"),n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Enjoy a personal shopping experience"))),n.createElement("div",{className:"login-visual-footer"},n.createElement("div",{className:"login-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"login-orbit orbit-a"}),n.createElement("div",{className:"login-orbit orbit-b"}),n.createElement("div",{className:"login-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"login-orbit-dot dot-a"}),n.createElement("i",{className:"login-orbit-dot dot-b"})),n.createElement("div",{className:"login-visual-note"},n.createElement(jt,{size:16}),n.createElement("span",null,"Thoughtful care. A considered experience.")))),n.createElement("section",{className:"login-panel"},n.createElement("div",{className:"login-panel-top"},n.createElement("span",{className:"login-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"login-secure-label"},n.createElement(yn,{size:13})," SECURE SIGN IN")),n.createElement("div",{className:"login-heading"},n.createElement("span",{className:"login-eyebrow"},"WELCOME BACK"),n.createElement("h2",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to pick up where your self-care left off.")),p&&n.createElement("div",{className:"login-error",role:"alert"},n.createElement(an,null,p)),n.createElement("form",{className:"login-form",onSubmit:S},n.createElement("label",{className:"login-field"},n.createElement("span",null,"Email address"),n.createElement("input",{name:"email",type:"email",autoComplete:"email",inputMode:"email",required:!0,value:i.email,onChange:E,placeholder:"you@example.com"})),n.createElement("label",{className:"login-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"login-password-wrap"},n.createElement("input",{name:"password",type:s?"text":"password",autoComplete:"current-password",required:!0,value:i.password,onChange:E,placeholder:"Enter your password"}),n.createElement("button",{type:"button",className:"login-eye-btn",onClick:()=>u(O=>!O),"aria-label":s?"Hide password":"Show password"},s?n.createElement(Ps,{size:17}):n.createElement(oi,{size:17})))),n.createElement("div",{className:"login-form-meta"},n.createElement("span",null,n.createElement(yn,{size:13})," Your account is protected")),n.createElement("button",{className:"login-submit",type:"submit",disabled:f},n.createElement("span",null,f?"Signing you in…":"Sign in to HOVIRA"),f?n.createElement("span",{className:"login-spinner"}):n.createElement(be,{size:17}))),n.createElement("div",{className:"login-divider"},n.createElement("span",null,"NEW TO HOVIRA?")),n.createElement(K,{to:"/signup",className:"login-create-account"},"Create your account ",n.createElement(be,{size:15})),n.createElement("div",{className:"login-trust"},n.createElement("div",{className:"login-trust-icon"},n.createElement(em,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"We use your account information to manage your shopping experience and orders."))),n.createElement("p",{className:"login-legal"},"By continuing, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"login-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
          /* HOVIRA — Login page */
.login-page {
  --login-ink: #38251f;
  --login-text: #765f54;
  --login-muted: #9b857a;
  --login-accent: #bd765f;
  --login-peach: #f8eee7;
  --login-border: #eadbd1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 22px 20px;
  box-sizing: border-box;
  background:
    radial-gradient(ellipse at 8% 10%, rgba(248, 238, 231, .8), transparent 34%),
    #fffaf6;
  color: var(--login-ink);
}

.login-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.03fr) minmax(390px, .97fr);
  width: min(100%, 1050px);
  min-height: 650px;
  margin: auto;
  overflow: hidden;
  border: 1px solid var(--login-border);
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 24px 75px rgba(74, 45, 31, .09);
}

.login-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 650px;
  overflow: hidden;
  padding: 34px 39px 27px;
  box-sizing: border-box;
  background:
    radial-gradient(circle at 80% 83%, rgba(255,255,255,.48), transparent 24%),
    linear-gradient(145deg, #f9eee7 0%, #f3e2d7 56%, #ebd3c5 100%);
}

.login-visual:before,
.login-visual:after {
  content: "";
  position: absolute;
  border: 1px solid rgba(189, 118, 95, .17);
  border-radius: 50%;
  pointer-events: none;
}

.login-visual:before {
  width: 390px;
  height: 390px;
  right: -180px;
  top: 115px;
}

.login-visual:after {
  width: 280px;
  height: 280px;
  right: -125px;
  top: 170px;
}

.login-visual-top,
.login-brand,
.login-visual-tag,
.login-visual-note {
  display: flex;
  align-items: center;
}

.login-visual-top {
  position: relative;
  z-index: 2;
  justify-content: space-between;
  gap: 12px;
}

.login-brand {
  gap: 10px;
  color: var(--login-ink);
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
  text-decoration: none;
}

.login-brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(56, 37, 31, .35);
  border-radius: 50%;
  font-family: Georgia, serif;
  font-size: 18px;
  letter-spacing: 0;
}

.login-visual-tag {
  gap: 6px;
  color: #9d6d5a;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.login-visual-content {
  position: relative;
  z-index: 2;
  max-width: 440px;
  margin: 50px 0 35px;
}

.login-visual-kicker,
.login-eyebrow {
  color: var(--login-accent);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
}

.login-visual-content h1 {
  margin: 16px 0 14px;
  color: var(--login-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(37px, 4.3vw, 53px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -1.5px;
}

.login-visual-content h1 em,
.login-heading h2 em {
  color: var(--login-accent);
  font-weight: 400;
}

.login-visual-content > p {
  max-width: 350px;
  margin: 0;
  color: #80685d;
  font-size: 12px;
  line-height: 1.85;
}

.login-benefit-list {
  display: grid;
  gap: 13px;
  margin-top: 28px;
}

.login-benefit-list > div {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #6e554a;
  font-size: 11px;
  font-weight: 600;
}

.login-benefit-list > div > span {
  display: grid;
  place-items: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .65);
  color: var(--login-accent);
}

.login-visual-footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.login-orbit-art {
  position: relative;
  width: 142px;
  height: 105px;
}

.login-orbit {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 105px;
  height: 105px;
  border: 1px solid rgba(189, 118, 95, .32);
  border-radius: 50%;
}

.login-orbit.orbit-b {
  left: 14px;
  bottom: 10px;
  width: 84px;
  height: 84px;
  border-style: dashed;
}

.login-orbit-center {
  position: absolute;
  left: 31px;
  bottom: 27px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,.58);
  color: var(--login-accent);
}

.login-orbit-center span {
  font-family: Georgia, serif;
  font-size: 21px;
  line-height: 1;
}

.login-orbit-center small {
  margin-top: 3px;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: 1px;
}

.login-orbit-dot {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--login-accent);
}

.login-orbit-dot.dot-a { top: 12px; left: 80px; }
.login-orbit-dot.dot-b { bottom: 9px; left: 5px; width: 5px; height: 5px; }

.login-visual-note {
  gap: 8px;
  padding-bottom: 8px;
  color: #8a6b5d;
  font-family: Georgia, serif;
  font-size: 10px;
  font-style: italic;
}

.login-visual-note svg { color: var(--login-accent); }

.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 54px clamp(30px, 5vw, 65px);
  box-sizing: border-box;
  background: #fff;
}

.login-panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 43px;
}

.login-mobile-brand {
  display: none;
  color: var(--login-ink);
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 3px;
}

.login-secure-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border: 1px solid #e1ece2;
  border-radius: 999px;
  background: #f5faf5;
  color: #5b805f;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
}

.login-heading h2 {
  margin: 12px 0 8px;
  color: var(--login-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(32px, 3.6vw, 42px);
  font-weight: 500;
  letter-spacing: -1px;
}

.login-heading > p {
  margin: 0;
  color: var(--login-muted);
  font-size: 11px;
  line-height: 1.7;
}

.login-error { margin-top: 18px; }
.login-form { display: grid; gap: 19px; margin-top: 29px; }

.login-field {
  display: grid;
  gap: 8px;
  color: var(--login-text);
  font-size: 10px;
  font-weight: 750;
}

.login-field input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1px solid #e8ddd6;
  border-radius: 10px;
  outline: none;
  background: #fffdfb;
  color: var(--login-ink);
  font: inherit;
  font-size: 12px;
  font-weight: 450;
  transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}

.login-field input::placeholder { color: #b5a69e; }
.login-field input:focus {
  border-color: var(--login-accent);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(189, 118, 95, .11);
}

.login-password-wrap { position: relative; }
.login-password-wrap input { padding-right: 48px; }

.login-eye-btn {
  position: absolute;
  top: 50%;
  right: 8px;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  transform: translateY(-50%);
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #9c867b;
  cursor: pointer;
}

.login-eye-btn:hover { background: var(--login-peach); color: var(--login-accent); }

.login-form-meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: -5px;
}

.login-form-meta > span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #8b9b86;
  font-size: 9px;
  font-weight: 600;
}

.login-submit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 49px;
  padding: 0 17px;
  border: 1px solid var(--login-ink);
  border-radius: 10px;
  background: var(--login-ink);
  color: #fff;
  font: inherit;
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;
}

.login-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  border-color: var(--login-accent);
  background: var(--login-accent);
}

.login-submit:disabled { opacity: .7; cursor: wait; }

.login-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: login-spin .7s linear infinite;
}

@keyframes login-spin { to { transform: rotate(360deg); } }

.login-divider {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 26px 0 17px;
  color: #b09f96;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.4px;
}

.login-divider:before,
.login-divider:after {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee5df;
}

.login-create-account {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 45px;
  border: 1px solid var(--login-border);
  border-radius: 10px;
  color: var(--login-accent);
  font-size: 11px;
  font-weight: 750;
  text-decoration: none;
  transition: background .2s ease, border-color .2s ease;
}

.login-create-account:hover { border-color: var(--login-accent); background: #fffaf7; }

.login-trust {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-top: 26px;
  padding: 14px;
  border: 1px solid #e4ece2;
  border-radius: 11px;
  background: #f8fbf7;
}

.login-trust-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border-radius: 9px;
  background: #eaf2e8;
  color: #658367;
}

.login-trust strong { display: block; color: #526b53; font-size: 10px; }
.login-trust p { margin: 4px 0 0; color: #839281; font-size: 9px; line-height: 1.6; }

.login-legal {
  margin: 22px 0 0;
  color: #a3948b;
  font-size: 9px;
  line-height: 1.7;
  text-align: center;
}

.login-legal a { color: var(--login-text); font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }

.login-page-footer {
  display: flex;
  justify-content: space-between;
  width: min(100%, 1050px);
  margin: 18px auto 0;
  color: #b09f96;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

@media (max-width: 850px) {
  .login-shell { grid-template-columns: minmax(0, .9fr) minmax(360px, 1.1fr); }
  .login-visual { padding: 29px 26px 23px; }
  .login-panel { padding: 43px 32px; }
  .login-visual-content h1 { font-size: 39px; }
  .login-visual-tag { font-size: 7px; }
}

@media (max-width: 680px) {
  .login-page { justify-content: flex-start; padding: 16px 13px; }
  .login-shell { display: block; width: min(100%, 480px); min-height: 0; margin: auto; border-radius: 19px; }
  .login-visual { display: none; }
  .login-panel { padding: 29px clamp(21px, 7vw, 34px) 27px; }
  .login-panel-top { margin-bottom: 33px; }
  .login-mobile-brand { display: inline; }
  .login-heading h2 { font-size: 35px; }
  .login-form { margin-top: 25px; }
  .login-page-footer { width: min(100%, 480px); padding: 0 4px; box-sizing: border-box; }
}

@media (max-width: 360px) {
  .login-panel { padding: 24px 18px; }
  .login-heading h2 { font-size: 31px; }
  .login-secure-label { font-size: 7px; }
}

          
          `))}function fd(){const[i,o]=b.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[s,u]=b.useState(!1),[p,m]=b.useState(!1),[f,g]=b.useState(""),[h,v]=b.useState(!1),{setCustomer:y}=Kt(),E=bn(),S=R=>{const{name:z,value:D,type:U,checked:P}=R.target;o(W=>({...W,[z]:U==="checkbox"?P:D}))},O=b.useMemo(()=>{const R=i.password;if(!R)return{score:0,label:"Use at least 8 characters"};let z=0;return R.length>=8&&z++,/[A-Z]/.test(R)&&z++,/[a-z]/.test(R)&&z++,/[0-9]/.test(R)&&z++,/[^A-Za-z0-9]/.test(R)&&z++,z<=2?{score:1,label:"Could be stronger"}:z<=4?{score:2,label:"Good password"}:{score:3,label:"Strong password"}},[i.password]),I=async R=>{var z,D;if(R.preventDefault(),g(""),i.password.length<8){g("Password must be at least 8 characters.");return}if(i.password!==i.confirmPassword){g("Your passwords do not match.");return}v(!0);try{const{confirmPassword:U,...P}=i,W=await Te.register(P),ee=W.token||W.accessToken||((z=W.data)==null?void 0:z.token)||((D=W.data)==null?void 0:D.accessToken);ee?(Qd(ee),y(Mt(W,["customer","user","profile"])||await Te.me()),E("/account")):E("/login",{state:{registered:!0}})}catch(U){g((U==null?void 0:U.message)||"We couldn't create your account. Please try again.")}finally{v(!1)}};return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Create Your HOVIRA Account | Join Our Skincare Community",description:"Create your HOVIRA account for a more personal skincare shopping experience. Save favourites, manage your orders and explore thoughtful skincare essentials."}),n.createElement("main",{className:"register-page"},n.createElement("section",{className:"register-shell"},n.createElement("aside",{className:"register-visual"},n.createElement("div",{className:"register-visual-top"},n.createElement(K,{to:"/",className:"register-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"register-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"register-visual-tag"},n.createElement(Qe,{size:13})," YOUR SKIN, YOUR RITUAL")),n.createElement("div",{className:"register-visual-content"},n.createElement("span",{className:"register-visual-kicker"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Make room for",n.createElement("br",null),n.createElement("em",null,"a little care.")),n.createElement("p",null,"Create your personal space for thoughtful skincare, favourite finds and a smoother shopping experience."),n.createElement("div",{className:"register-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Save products you love"),n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Keep track of every order"),n.createElement("div",null,n.createElement("span",null,n.createElement(it,{size:15}))," Make every visit feel personal"))),n.createElement("div",{className:"register-visual-footer"},n.createElement("div",{className:"register-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"register-orbit orbit-a"}),n.createElement("div",{className:"register-orbit orbit-b"}),n.createElement("div",{className:"register-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"register-orbit-dot dot-a"}),n.createElement("i",{className:"register-orbit-dot dot-b"})),n.createElement("div",{className:"register-visual-note"},n.createElement(jt,{size:16}),n.createElement("span",null,"A more considered way to shop.")))),n.createElement("section",{className:"register-panel"},n.createElement("div",{className:"register-panel-top"},n.createElement("span",{className:"register-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"register-secure-label"},n.createElement(yn,{size:13})," CREATE ACCOUNT")),n.createElement("div",{className:"register-heading"},n.createElement("span",{className:"register-eyebrow"},"WELCOME TO HOVIRA"),n.createElement("h2",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Your little corner for thoughtful skincare starts here.")),f&&n.createElement("div",{className:"register-error",role:"alert"},n.createElement(an,null,f)),n.createElement("form",{className:"register-form",onSubmit:I},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Full name"),n.createElement("div",{className:"register-input-wrap"},n.createElement(jr,{size:16}),n.createElement("input",{name:"name",type:"text",required:!0,maxLength:100,value:i.name,onChange:S,placeholder:"Your full name",autoComplete:"name"}))),n.createElement("div",{className:"register-form-two"},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"register-input-wrap"},n.createElement(Ws,{size:16}),n.createElement("input",{name:"email",type:"email",required:!0,value:i.email,onChange:S,placeholder:"you@example.com",autoComplete:"email",inputMode:"email"}))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Phone ",n.createElement("small",null,"Optional")),n.createElement("div",{className:"register-input-wrap"},n.createElement(nm,{size:16}),n.createElement("input",{name:"phone",type:"tel",value:i.phone,onChange:S,placeholder:"Phone number",autoComplete:"tel",inputMode:"tel"})))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(yn,{size:16}),n.createElement("input",{name:"password",type:s?"text":"password",required:!0,minLength:8,value:i.password,onChange:S,placeholder:"Create a password",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>u(R=>!R),"aria-label":s?"Hide password":"Show password"},s?n.createElement(Ps,{size:16}):n.createElement(oi,{size:16}))),n.createElement("div",{className:"register-strength","aria-live":"polite"},n.createElement("div",{className:"register-strength-bars"},[1,2,3].map(R=>n.createElement("span",{key:R,className:O.score>=R?`active strength-${O.score}`:""}))),n.createElement("small",null,O.label))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Confirm password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(yn,{size:16}),n.createElement("input",{name:"confirmPassword",type:p?"text":"password",required:!0,value:i.confirmPassword,onChange:S,placeholder:"Enter your password again",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>m(R=>!R),"aria-label":p?"Hide confirm password":"Show confirm password"},p?n.createElement(Ps,{size:16}):n.createElement(oi,{size:16}))),i.confirmPassword&&n.createElement("small",{className:`register-match ${i.password===i.confirmPassword?"matched":"not-matched"}`},i.password===i.confirmPassword?"Passwords match":"Passwords do not match yet")),n.createElement("label",{className:"register-optin"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:i.marketingOptIn,onChange:S}),n.createElement("span",{className:"register-custom-check"},n.createElement(it,{size:13})),n.createElement("span",null,"Send me occasional HOVIRA updates and skincare news.")),n.createElement("button",{className:"register-submit",type:"submit",disabled:h},n.createElement("span",null,h?"Creating your account…":"Create my account"),h?n.createElement("span",{className:"register-spinner"}):n.createElement(be,{size:17}))),n.createElement("div",{className:"register-login-prompt"},"Already have an account? ",n.createElement(K,{to:"/login"},"Sign in")),n.createElement("div",{className:"register-trust"},n.createElement("div",{className:"register-trust-icon"},n.createElement(em,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"Your information helps us manage your account and shopping experience."))),n.createElement("p",{className:"register-legal"},"By creating an account, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"register-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
          /* HOVIRA — Register page */
.register-page {
  --register-ink: #38251f;
  --register-text: #765f54;
  --register-muted: #9b857a;
  --register-accent: #bd765f;
  --register-peach: #f8eee7;
  --register-border: #eadbd1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 20px 16px;
  box-sizing: border-box;
  background:
    radial-gradient(ellipse at 8% 10%, rgba(248,238,231,.8), transparent 34%),
    #fffaf6;
  color: var(--register-ink);
}

.register-shell {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(480px, 1.1fr);
  width: min(100%, 1120px);
  margin: auto;
  overflow: hidden;
  border: 1px solid var(--register-border);
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 24px 75px rgba(74,45,31,.09);
}

.register-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 740px;
  overflow: hidden;
  padding: 34px 37px 27px;
  box-sizing: border-box;
  background:
    radial-gradient(circle at 80% 83%, rgba(255,255,255,.48), transparent 24%),
    linear-gradient(145deg,#f9eee7 0%,#f3e2d7 56%,#ebd3c5 100%);
}

.register-visual:before,.register-visual:after {
  content:"";
  position:absolute;
  border:1px solid rgba(189,118,95,.17);
  border-radius:50%;
  pointer-events:none;
}
.register-visual:before { width:390px;height:390px;right:-180px;top:155px; }
.register-visual:after { width:280px;height:280px;right:-125px;top:210px; }

.register-visual-top,.register-brand,.register-visual-tag,.register-visual-note {
  display:flex;
  align-items:center;
}
.register-visual-top { position:relative;z-index:2;justify-content:space-between;gap:12px; }
.register-brand {
  gap:10px;color:var(--register-ink);font-family:Georgia,serif;font-size:18px;
  font-weight:700;letter-spacing:3px;text-decoration:none;
}
.register-brand-mark {
  display:grid;place-items:center;width:34px;height:34px;border:1px solid rgba(56,37,31,.35);
  border-radius:50%;font-family:Georgia,serif;font-size:18px;letter-spacing:0;
}
.register-visual-tag { gap:6px;color:#9d6d5a;font-size:8px;font-weight:800;letter-spacing:1.2px; }
.register-visual-content { position:relative;z-index:2;max-width:400px;margin:50px 0 35px; }
.register-visual-kicker,.register-eyebrow {
  color:var(--register-accent);font-size:9px;font-weight:800;letter-spacing:2px;
}
.register-visual-content h1 {
  margin:16px 0 14px;color:var(--register-ink);font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(38px,4.3vw,52px);font-weight:500;line-height:1.08;letter-spacing:-1.5px;
}
.register-visual-content h1 em,.register-heading h2 em { color:var(--register-accent);font-weight:400; }
.register-visual-content>p { max-width:340px;margin:0;color:#80685d;font-size:12px;line-height:1.85; }
.register-benefit-list { display:grid;gap:13px;margin-top:27px; }
.register-benefit-list>div { display:flex;align-items:center;gap:10px;color:#6e554a;font-size:11px;font-weight:600; }
.register-benefit-list>div>span {
  display:grid;place-items:center;width:23px;height:23px;border-radius:50%;
  background:rgba(255,255,255,.65);color:var(--register-accent);
}
.register-visual-footer { position:relative;z-index:1;display:flex;align-items:flex-end;justify-content:space-between;gap:12px; }
.register-orbit-art { position:relative;width:142px;height:105px; }
.register-orbit { position:absolute;left:0;bottom:0;width:105px;height:105px;border:1px solid rgba(189,118,95,.32);border-radius:50%; }
.register-orbit.orbit-b { left:14px;bottom:10px;width:84px;height:84px;border-style:dashed; }
.register-orbit-center {
  position:absolute;left:31px;bottom:27px;display:flex;align-items:center;flex-direction:column;
  justify-content:center;width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,.58);color:var(--register-accent);
}
.register-orbit-center span { font-family:Georgia,serif;font-size:21px;line-height:1; }
.register-orbit-center small { margin-top:3px;font-size:5px;font-weight:800;letter-spacing:1px; }
.register-orbit-dot { position:absolute;width:7px;height:7px;border-radius:50%;background:var(--register-accent); }
.register-orbit-dot.dot-a { top:12px;left:80px; }
.register-orbit-dot.dot-b { bottom:9px;left:5px;width:5px;height:5px; }
.register-visual-note { gap:8px;padding-bottom:8px;color:#8a6b5d;font-family:Georgia,serif;font-size:10px;font-style:italic; }
.register-visual-note svg { color:var(--register-accent); }

.register-panel { display:flex;flex-direction:column;justify-content:center;padding:35px clamp(30px,4.5vw,58px);box-sizing:border-box; }
.register-panel-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:25px; }
.register-mobile-brand { display:none;color:var(--register-ink);font-family:Georgia,serif;font-size:17px;font-weight:700;letter-spacing:3px; }
.register-secure-label {
  display:inline-flex;align-items:center;gap:6px;padding:7px 10px;border:1px solid #e1ece2;
  border-radius:999px;background:#f5faf5;color:#5b805f;font-size:8px;font-weight:800;letter-spacing:1px;
}
.register-heading h2 {
  margin:10px 0 7px;color:var(--register-ink);font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(31px,3.3vw,39px);font-weight:500;letter-spacing:-1px;
}
.register-heading>p { margin:0;color:var(--register-muted);font-size:11px;line-height:1.7; }
.register-error { margin-top:14px; }
.register-form { display:grid;gap:13px;margin-top:22px; }
.register-field { display:grid;gap:7px;min-width:0;color:var(--register-text);font-size:10px;font-weight:750; }
.register-field>span { display:flex;align-items:center;gap:7px; }
.register-field>span small { color:#aa9990;font-size:9px;font-weight:500; }
.register-input-wrap {
  display:flex;align-items:center;gap:9px;min-width:0;min-height:43px;padding:0 12px;
  border:1px solid #e8ddd6;border-radius:9px;background:#fffdfb;color:#b0998d;
  transition:border-color .2s ease,box-shadow .2s ease,background .2s ease;
}
.register-input-wrap:focus-within { border-color:var(--register-accent);background:#fff;box-shadow:0 0 0 3px rgba(189,118,95,.1); }
.register-input-wrap>svg { flex:0 0 auto; }
.register-input-wrap input {
  width:100%;min-width:0;min-height:41px;padding:0;border:0;outline:0;background:transparent;
  color:var(--register-ink);font:inherit;font-size:11px;font-weight:450;
}
.register-input-wrap input::placeholder { color:#b5a69e; }
.register-form-two { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
.register-password-wrap { position:relative;padding-right:5px; }
.register-eye-btn {
  display:grid;place-items:center;width:33px;height:33px;flex:0 0 33px;border:0;border-radius:7px;
  background:transparent;color:#9c867b;cursor:pointer;
}
.register-eye-btn:hover { background:var(--register-peach);color:var(--register-accent); }
.register-strength { display:flex;align-items:center;gap:9px;margin-top:0; }
.register-strength-bars { display:flex;gap:4px;width:85px; }
.register-strength-bars span { height:3px;flex:1;border-radius:5px;background:#eee6e0; }
.register-strength-bars span.active { background:#d1a18d; }
.register-strength-bars span.active.strength-2 { background:#c28a6f; }
.register-strength-bars span.active.strength-3 { background:#6e9a72; }
.register-strength small { color:var(--register-muted);font-size:9px;font-weight:500; }
.register-match { font-size:9px;font-weight:600; }
.register-match.matched { color:#638567; }
.register-match.not-matched { color:#b45d51; }
.register-optin { display:flex;align-items:center;gap:9px;margin:1px 0 2px;color:var(--register-muted);font-size:9px;line-height:1.5;cursor:pointer; }
.register-optin input { position:absolute;width:1px;height:1px;opacity:0; }
.register-custom-check {
  display:grid;place-items:center;width:17px;height:17px;flex:0 0 17px;border:1px solid #d9c9bf;
  border-radius:5px;background:#fff;color:transparent;transition:.2s ease;
}
.register-optin input:checked+.register-custom-check { border-color:var(--register-accent);background:var(--register-accent);color:#fff; }
.register-optin input:focus-visible+.register-custom-check { outline:3px solid rgba(189,118,95,.2); }
.register-submit {
  display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:47px;
  margin-top:2px;padding:0 16px;border:1px solid var(--register-ink);border-radius:9px;
  background:var(--register-ink);color:#fff;font:inherit;font-size:11px;font-weight:750;cursor:pointer;
  transition:background .2s ease,border-color .2s ease,transform .2s ease;
}
.register-submit:hover:not(:disabled) { transform:translateY(-1px);border-color:var(--register-accent);background:var(--register-accent); }
.register-submit:disabled { opacity:.7;cursor:wait; }
.register-spinner {
  width:15px;height:15px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;
  border-radius:50%;animation:register-spin .7s linear infinite;
}
@keyframes register-spin { to { transform:rotate(360deg); } }
.register-login-prompt { margin-top:19px;color:var(--register-muted);font-size:10px;text-align:center; }
.register-login-prompt a { color:var(--register-accent);font-weight:750;text-decoration:none; }
.register-login-prompt a:hover { text-decoration:underline;text-underline-offset:3px; }
.register-trust {
  display:flex;align-items:flex-start;gap:10px;margin-top:19px;padding:12px;
  border:1px solid #e4ece2;border-radius:10px;background:#f8fbf7;
}
.register-trust-icon {
  display:grid;place-items:center;width:30px;height:30px;flex:0 0 30px;border-radius:8px;
  background:#eaf2e8;color:#658367;
}
.register-trust strong { display:block;color:#526b53;font-size:9px; }
.register-trust p { margin:4px 0 0;color:#839281;font-size:8px;line-height:1.55; }
.register-legal { margin:15px 0 0;color:#a3948b;font-size:8px;line-height:1.7;text-align:center; }
.register-legal a { color:var(--register-text);font-weight:700;text-decoration:underline;text-underline-offset:2px; }
.register-page-footer {
  display:flex;justify-content:space-between;width:min(100%,1120px);margin:14px auto 0;
  color:#b09f96;font-size:8px;font-weight:700;letter-spacing:1.2px;
}

@media (max-width:900px) {
  .register-shell { grid-template-columns:minmax(0,.8fr) minmax(440px,1.2fr); }
  .register-visual { padding:29px 25px 23px; }
  .register-panel { padding:30px 30px; }
  .register-visual-content h1 { font-size:40px; }
  .register-visual-tag { font-size:7px; }
}
@media (max-width:700px) {
  .register-page { justify-content:flex-start;padding:14px 12px; }
  .register-shell { display:block;width:min(100%,500px);margin:auto;border-radius:19px; }
  .register-visual { display:none; }
  .register-panel { padding:25px clamp(18px,6vw,30px); }
  .register-panel-top { margin-bottom:23px; }
  .register-mobile-brand { display:inline; }
  .register-heading h2 { font-size:34px; }
  .register-form { margin-top:19px; }
  .register-page-footer { width:min(100%,500px);padding:0 4px;box-sizing:border-box; }
}
@media (max-width:430px) {
  .register-form-two { grid-template-columns:1fr;gap:13px; }
  .register-panel { padding:23px 18px; }
  .register-heading h2 { font-size:31px; }
  .register-secure-label { font-size:7px; }
}

          `))}function Av(){const{cart:i,updateQuantity:o,removeFromCart:s}=Kt(),u=bn(),p=b.useMemo(()=>i.reduce((g,h)=>g+h.quantity,0),[i]),m=b.useMemo(()=>i.reduce((g,h)=>g+xn(h.product)*h.quantity,0),[i]),f=(g,h)=>{const v=g.quantity+h;v<1||o(g.key,v)};return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,p," ",p===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Bt,{size:28}))),i.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,p," items in your shopping bag")),n.createElement(K,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(be,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},i.map(g=>{var E;const h=g.product,v=xn(h),y=pi(h);return n.createElement("article",{className:"hv-cart-item",key:g.key},n.createElement(K,{to:Fa(h),className:"hv-cart-product-image"},y?n.createElement("img",{src:y,alt:h.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof h.category=="object"?((E=h.category)==null?void 0:E.name)||"HOVIRA":h.category||"HOVIRA"),n.createElement(K,{to:Fa(h),className:"hv-cart-product-name"},h.name),g.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",g.variant),n.createElement("span",{className:"hv-cart-product-price"},je(v,h.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>s(g.key)},n.createElement(rm,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>f(g,-1),disabled:g.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(tm,{size:14})),n.createElement("span",null,g.quantity),n.createElement("button",{type:"button",onClick:()=>f(g,1),"aria-label":"Increase quantity"},n.createElement(Ur,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},je(v*g.quantity,h.currency||"INR")))})),n.createElement(K,{to:"/shop",className:"hv-cart-continue-link"},n.createElement(rn,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Bt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,p)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,je(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,je(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>u("/checkout")},"Continue to checkout",n.createElement(be,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(jt,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Yr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(qs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Bt,{size:34}),n.createElement(Qe,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(K,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(be,{size:17}))))),n.createElement("style",null,`
          
/* =========================================
   HOVIRA CART PAGE
========================================= */

.hv-cart-page {
  background: #FFFAF6;
  min-height: 75vh;
  padding: 65px 0 100px;
  color: #38251F;
}

.hv-cart-container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

/* =========================================
   PAGE HEADING
========================================= */

.hv-cart-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.hv-cart-eyebrow {
  display: inline-block;
  color: #BD765F;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hv-cart-heading h1 {
  font-family: Georgia, serif;
  font-size: clamp(42px, 5vw, 55px);
  font-weight: 500;
  color: #38251F;
  margin: 12px 0;
  letter-spacing: -1px;
}

.hv-cart-heading h1 em {
  color: #BD765F;
  font-weight: 400;
}

.hv-cart-heading p {
  font-size: 13px;
  color: #947D73;
}

.hv-cart-heading-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* =========================================
   EMPTY CART
========================================= */

.hv-cart-empty {
  text-align: center;
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 8px;
  padding: 85px 20px;
}

.hv-cart-empty-icon {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: #F8EEE7;
  color: #BD765F;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 27px;
  position: relative;
}

.hv-cart-empty-icon svg:last-child {
  position: absolute;
  top: 12px;
  right: 10px;
  background: #F8EEE7;
}

.hv-cart-empty h2 {
  font-family: Georgia, serif;
  font-size: clamp(27px, 4vw, 37px);
  font-weight: 500;
  margin: 15px 0;
}

.hv-cart-empty h2 em {
  color: #BD765F;
}

.hv-cart-empty p {
  color: #947D73;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 25px;
}

/* =========================================
   BUTTONS
========================================= */

.hv-cart-primary-button,
.hv-cart-checkout-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #38251F;
  border: 1px solid #38251F;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  transition: .25s ease;
  cursor: pointer;
}

.hv-cart-primary-button {
  min-height: 48px;
  padding: 0 23px;
}

.hv-cart-primary-button:hover,
.hv-cart-checkout-button:hover {
  background: #BD765F;
  border-color: #BD765F;
  color: #fff;
}

/* =========================================
   CART LAYOUT
========================================= */

.hv-cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 355px;
  gap: 35px;
  align-items: start;
}

/* =========================================
   CART ITEMS
========================================= */

.hv-cart-items-section {
  min-width: 0;
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 7px;
  padding: 28px;
}

.hv-cart-items-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 26px;
}

.hv-cart-items-top h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 7px;
}

.hv-cart-items-top p {
  font-size: 11px;
  color: #947D73;
}

.hv-cart-back-shop {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #BD765F;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
}

.hv-cart-back-shop:hover {
  color: #38251F;
}

/* Table heading */

.hv-cart-table-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 105px 95px;
  gap: 15px;
  padding: 14px 0;
  border-top: 1px solid #EADBD1;
  border-bottom: 1px solid #EADBD1;
}

.hv-cart-table-head span {
  color: #947D73;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}

.hv-cart-table-head span:nth-child(2) {
  text-align: center;
}

.hv-cart-table-head span:nth-child(3) {
  text-align: right;
}

/* Product list */

.hv-cart-item {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) 105px 95px;
  align-items: center;
  gap: 17px;
  padding: 23px 0;
  border-bottom: 1px solid #F0E6DF;
}

.hv-cart-product-image {
  width: 100px;
  height: 115px;
  background: #F8EEE7;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.hv-cart-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}

.hv-cart-product-image:hover img {
  transform: scale(1.06);
}

.hv-cart-product-image span {
  color: #BD765F;
  font-family: Georgia, serif;
  font-size: 14px;
  letter-spacing: 2px;
}

/* Product information */

.hv-cart-product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  min-width: 0;
}

.hv-cart-product-category {
  color: #BD765F;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.hv-cart-product-name {
  color: #38251F;
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.hv-cart-product-name:hover {
  color: #BD765F;
}

.hv-cart-product-variant {
  color: #947D73;
  font-size: 10px;
}

.hv-cart-product-price {
  color: #765F54;
  font-size: 12px;
  font-weight: 700;
}

.hv-cart-remove {
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  padding: 0;
  background: transparent;
  color: #A66A5D;
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 3px;
}

.hv-cart-remove:hover {
  color: #38251F;
}

/* Quantity */

.hv-cart-quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 105px;
  height: 39px;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  background: #FFFCFA;
}

.hv-cart-quantity button {
  width: 32px;
  height: 100%;
  border: none;
  background: transparent;
  color: #765F54;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.hv-cart-quantity button:hover:not(:disabled) {
  color: #BD765F;
}

.hv-cart-quantity button:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.hv-cart-quantity span {
  color: #38251F;
  font-size: 12px;
  font-weight: 700;
}

.hv-cart-line-total {
  text-align: right;
  color: #38251F;
  font-size: 12px;
  white-space: nowrap;
}

/* Continue shopping */

.hv-cart-continue-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 25px;
  color: #BD765F;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
}

.hv-cart-continue-link:hover {
  color: #38251F;
}

/* =========================================
   ORDER SUMMARY
========================================= */

.hv-cart-summary {
  position: sticky;
  top: 110px;
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 7px;
  padding: 27px;
}

.hv-cart-summary-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #EADBD1;
}

.hv-cart-summary-heading h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
  color: #38251F;
  margin-top: 9px;
}

.hv-cart-summary-heading > svg {
  color: #BD765F;
}

.hv-cart-summary-count,
.hv-cart-summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 19px;
  color: #806B60;
  font-size: 11px;
}

.hv-cart-summary-count strong,
.hv-cart-summary-line strong {
  color: #38251F;
  font-size: 12px;
}

.hv-cart-shipping-label {
  text-align: right;
  font-size: 10px;
  color: #947D73;
}

.hv-cart-summary-divider {
  height: 1px;
  background: #EADBD1;
  margin: 22px 0;
}

.hv-cart-summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.hv-cart-summary-total span {
  font-size: 13px;
  font-weight: 700;
  color: #38251F;
}

.hv-cart-summary-total strong {
  font-size: 21px;
  color: #38251F;
}

.hv-cart-summary-note {
  color: #947D73;
  font-size: 10px;
  line-height: 1.8;
  margin-bottom: 23px;
}

.hv-cart-checkout-button {
  width: 100%;
  min-height: 52px;
  padding: 0 14px;
  font-size: 12px;
}

.hv-cart-payment-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: #947D73;
  font-size: 9px;
  margin-top: 16px;
  text-align: center;
}

.hv-cart-payment-note svg {
  color: #BD765F;
}

/* Benefits */

.hv-cart-benefits {
  border-top: 1px solid #EADBD1;
  margin-top: 24px;
  padding-top: 20px;
  display: grid;
  gap: 17px;
}

.hv-cart-benefits > div {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hv-cart-benefits > div > svg {
  color: #BD765F;
  flex-shrink: 0;
}

.hv-cart-benefits span {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hv-cart-benefits strong {
  color: #38251F;
  font-size: 10px;
}

.hv-cart-benefits small {
  color: #947D73;
  font-size: 9px;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {
  .hv-cart-layout {
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 20px;
  }

  .hv-cart-items-section {
    padding: 20px;
  }

  .hv-cart-item {
    grid-template-columns: 80px minmax(0, 1fr) 90px 75px;
    gap: 12px;
  }

  .hv-cart-product-image {
    width: 80px;
    height: 95px;
  }

  .hv-cart-quantity {
    width: 90px;
  }

  .hv-cart-summary {
    padding: 22px;
  }
}

@media (max-width: 760px) {
  .hv-cart-page {
    padding: 45px 0 70px;
  }

  .hv-cart-container {
    width: calc(100% - 32px);
  }

  .hv-cart-layout {
    grid-template-columns: 1fr;
  }

  .hv-cart-summary {
    position: static;
  }

  .hv-cart-heading {
    margin-bottom: 30px;
  }

  .hv-cart-items-section {
    padding: 20px;
  }

  .hv-cart-item {
    grid-template-columns: 85px minmax(0, 1fr) 90px;
    gap: 13px;
  }

  .hv-cart-product-image {
    width: 85px;
    height: 100px;
  }

  .hv-cart-quantity {
    grid-column: 2;
    grid-row: 2;
    width: 90px;
  }

  .hv-cart-line-total {
    grid-column: 3;
    grid-row: 2;
  }

  .hv-cart-product-info {
    grid-column: 2 / 4;
    grid-row: 1;
  }

  .hv-cart-table-head {
    grid-template-columns: 1fr 90px 75px;
  }

  .hv-cart-table-head span:nth-child(2) {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hv-cart-heading h1 {
    font-size: 40px;
  }

  .hv-cart-heading-icon {
    width: 50px;
    height: 50px;
  }

  .hv-cart-heading-icon svg {
    width: 21px;
  }

  .hv-cart-items-section {
    padding: 15px;
  }

  .hv-cart-items-top {
    align-items: flex-start;
    flex-direction: column;
  }

  .hv-cart-items-top h2 {
    font-size: 21px;
  }

  .hv-cart-back-shop {
    font-size: 10px;
  }

  .hv-cart-table-head {
    grid-template-columns: 1fr 80px 65px;
    gap: 8px;
  }

  .hv-cart-table-head span {
    font-size: 8px;
  }

  .hv-cart-item {
    grid-template-columns: 72px minmax(0, 1fr) 65px;
    gap: 10px;
    padding: 18px 0;
  }

  .hv-cart-product-image {
    width: 72px;
    height: 85px;
  }

  .hv-cart-product-name {
    font-size: 14px;
  }

  .hv-cart-product-info {
    gap: 5px;
  }

  .hv-cart-quantity {
    width: 82px;
    height: 35px;
  }

  .hv-cart-quantity button {
    width: 27px;
  }

  .hv-cart-line-total {
    font-size: 10px;
  }

  .hv-cart-summary {
    padding: 20px;
  }

  .hv-cart-empty {
    padding: 60px 17px;
  }

  .hv-cart-empty h2 {
    font-size: 27px;
  }
}

/* ==========================================
   HOVIRA CART - FONT SIZE ENHANCEMENT
   Add at the END of existing CSS
========================================== */

/* Page Heading */
.hv-cart-eyebrow {
  font-size: 12px;
}

.hv-cart-heading h1 {
  font-size: clamp(44px, 5vw, 58px);
}

.hv-cart-heading p {
  font-size: 15px;
  line-height: 1.7;
}

/* Empty Cart */
.hv-cart-empty h2 {
  font-size: clamp(30px, 4vw, 40px);
}

.hv-cart-empty p {
  font-size: 15px;
  line-height: 1.8;
}

/* Buttons */
.hv-cart-primary-button,
.hv-cart-checkout-button {
  font-size: 14px;
}

/* Cart Items */
.hv-cart-items-top h2 {
  font-size: 26px;
}

.hv-cart-items-top p {
  font-size: 13px;
}

.hv-cart-back-shop {
  font-size: 13px;
}

.hv-cart-table-head span {
  font-size: 11px;
}

/* Product Details */
.hv-cart-product-category {
  font-size: 11px;
}

.hv-cart-product-name {
  font-size: 18px;
}

.hv-cart-product-variant {
  font-size: 13px;
}

.hv-cart-product-price {
  font-size: 14px;
}

.hv-cart-remove {
  font-size: 12px;
}

.hv-cart-quantity span {
  font-size: 14px;
}

.hv-cart-line-total {
  font-size: 14px;
}

.hv-cart-continue-link {
  font-size: 13px;
}

/* Order Summary */
.hv-cart-summary-heading h2 {
  font-size: 26px;
}

.hv-cart-summary-count,
.hv-cart-summary-line {
  font-size: 14px;
}

.hv-cart-summary-count strong,
.hv-cart-summary-line strong {
  font-size: 14px;
}

.hv-cart-shipping-label {
  font-size: 12px;
}

.hv-cart-summary-total span {
  font-size: 15px;
}

.hv-cart-summary-total strong {
  font-size: 23px;
}

.hv-cart-summary-note {
  font-size: 13px;
  line-height: 1.8;
}

.hv-cart-payment-note {
  font-size: 12px;
}

/* Benefits */
.hv-cart-benefits strong {
  font-size: 13px;
}

.hv-cart-benefits small {
  font-size: 12px;
}

/* ==========================================
   TABLET
========================================== */

@media (max-width: 760px) {
  .hv-cart-heading p {
    font-size: 14px;
  }

  .hv-cart-items-top h2 {
    font-size: 24px;
  }

  .hv-cart-product-name {
    font-size: 16px;
  }

  .hv-cart-product-price {
    font-size: 13px;
  }

  .hv-cart-summary-count,
  .hv-cart-summary-line {
    font-size: 14px;
  }

  .hv-cart-summary-note {
    font-size: 13px;
  }
}

/* ==========================================
   MOBILE
========================================== */

@media (max-width: 480px) {
  .hv-cart-eyebrow {
    font-size: 11px;
  }

  .hv-cart-heading h1 {
    font-size: 39px;
  }

  .hv-cart-heading p {
    font-size: 14px;
  }

  .hv-cart-empty h2 {
    font-size: 29px;
  }

  .hv-cart-empty p {
    font-size: 14px;
  }

  .hv-cart-primary-button,
  .hv-cart-checkout-button {
    font-size: 13px;
  }

  .hv-cart-items-top h2 {
    font-size: 22px;
  }

  .hv-cart-items-top p {
    font-size: 12px;
  }

  .hv-cart-back-shop {
    font-size: 12px;
  }

  .hv-cart-table-head span {
    font-size: 9px;
  }

  .hv-cart-product-category {
    font-size: 10px;
  }

  .hv-cart-product-name {
    font-size: 15px;
  }

  .hv-cart-product-variant {
    font-size: 12px;
  }

  .hv-cart-product-price {
    font-size: 13px;
  }

  .hv-cart-remove {
    font-size: 11px;
  }

  .hv-cart-quantity span {
    font-size: 13px;
  }

  .hv-cart-line-total {
    font-size: 12px;
  }

  .hv-cart-summary-heading h2 {
    font-size: 24px;
  }

  .hv-cart-summary-count,
  .hv-cart-summary-line {
    font-size: 13px;
  }

  .hv-cart-summary-count strong,
  .hv-cart-summary-line strong {
    font-size: 13px;
  }

  .hv-cart-summary-total span {
    font-size: 14px;
  }

  .hv-cart-summary-total strong {
    font-size: 21px;
  }

  .hv-cart-summary-note {
    font-size: 12px;
  }

  .hv-cart-payment-note {
    font-size: 11px;
  }

  .hv-cart-benefits strong {
    font-size: 12px;
  }

  .hv-cart-benefits small {
    font-size: 11px;
  }
}

          `))}function Ov(){const i=Kt(),o=Array.isArray(i==null?void 0:i.wishlist)?i.wishlist:[],s=b.useMemo(()=>`${o.length} ${o.length===1?"piece":"pieces"} saved`,[o.length]);return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Your Wishlist | HOVIRA",description:"Your favourite HOVIRA skincare essentials, all saved in one place."}),n.createElement("main",{className:"page-shell standard-page wishlist-page"},n.createElement("section",{className:"wishlist-hero"},n.createElement("div",{className:"wishlist-hero-copy"},n.createElement("span",{className:"wishlist-eyebrow"},n.createElement(Qe,{size:13})," SAVED WITH LOVE"),n.createElement("h1",null,"Your little list of ",n.createElement("em",null,"lovely things.")),n.createElement("p",null,"All the skincare you’ve had your eye on, gathered in one beautiful place."),n.createElement("div",{className:"wishlist-count"},n.createElement("span",{className:"wishlist-count-icon"},n.createElement(gt,{size:15})),n.createElement("span",null,s))),n.createElement("div",{className:"wishlist-hero-art","aria-hidden":"true"},n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-one"}),n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-two"}),n.createElement("div",{className:"wishlist-art-heart"},n.createElement(gt,{size:62,strokeWidth:1.1})),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-one"},"✦"),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-two"},"✧"),n.createElement("span",{className:"wishlist-art-caption"},"A little self-love",n.createElement("br",null),"goes a long way"))),o.length>0?n.createElement("section",{className:"wishlist-products-section"},n.createElement("div",{className:"wishlist-section-heading"},n.createElement("div",null,n.createElement("span",{className:"wishlist-eyebrow"},"YOUR COLLECTION"),n.createElement("h2",null,"Favourites, ",n.createElement("em",null,"for later."))),n.createElement(K,{to:"/shop",className:"wishlist-text-link"},"Discover more ",n.createElement(be,{size:15}))),n.createElement("div",{className:"product-grid wishlist-product-grid"},o.map((u,p)=>n.createElement(di,{key:u._id||u.slug||p,product:u,index:p}))),n.createElement("div",{className:"wishlist-bottom-note"},n.createElement(gt,{size:17}),n.createElement("span",null,"Your saved pieces are waiting right here whenever you need them."),n.createElement(K,{to:"/shop"},"Keep exploring ",n.createElement(be,{size:14})))):n.createElement("section",{className:"wishlist-empty"},n.createElement("div",{className:"wishlist-empty-visual"},n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-one"}),n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-two"}),n.createElement("div",{className:"wishlist-empty-heart"},n.createElement(gt,{size:48,strokeWidth:1.2})),n.createElement("span",{className:"wishlist-empty-star star-one"},"✦"),n.createElement("span",{className:"wishlist-empty-star star-two"},"✧")),n.createElement("span",{className:"wishlist-eyebrow"},"YOUR FAVOURITES LIVE HERE"),n.createElement("h2",null,"A little space for",n.createElement("br",null),n.createElement("em",null,"your favourites.")),n.createElement("p",null,"When something catches your eye, tap its heart to save it here. Your next favourite might be just a browse away."),n.createElement(K,{to:"/shop",className:"wishlist-shop-button"},n.createElement(Bt,{size:16})," Explore the collection ",n.createElement(be,{size:16})),n.createElement("div",{className:"wishlist-empty-footnote"},n.createElement(dv,{size:14})," Your wishlist is ready for a little love."))),n.createElement("style",null,`
          /* HOVIRA — Wishlist page */
.wishlist-page {
  --wl-ink: #38251f;
  --wl-text: #765f54;
  --wl-muted: #9b857a;
  --wl-accent: #bd765f;
  --wl-peach: #f8eee7;
  --wl-border: #eadbd1;
  padding-bottom: 76px;
  color: var(--wl-ink);
}

.wishlist-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 245px;
  overflow: hidden;
  padding: 38px 48px;
  margin-bottom: 44px;
  border: 1px solid var(--wl-border);
  border-radius: 22px;
  background: linear-gradient(112deg, #fffaf6 0%, #f8eee7 58%, #f3e1d6 100%);
}

.wishlist-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 570px;
}

.wishlist-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--wl-accent);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
}

.wishlist-hero h1 {
  max-width: 540px;
  margin: 15px 0 11px;
  color: var(--wl-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(34px, 4.7vw, 52px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -1.6px;
}

.wishlist-hero h1 em,
.wishlist-section-heading h2 em,
.wishlist-empty h2 em {
  color: var(--wl-accent);
  font-weight: 400;
}

.wishlist-hero-copy > p {
  max-width: 430px;
  margin: 0;
  color: var(--wl-text);
  font-size: 13px;
  line-height: 1.7;
}

.wishlist-count {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 21px;
  padding: 8px 13px 8px 8px;
  border: 1px solid rgba(189, 118, 95, .2);
  border-radius: 999px;
  background: rgba(255, 255, 255, .65);
  color: var(--wl-text);
  font-size: 10px;
  font-weight: 700;
}

.wishlist-count-icon {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--wl-peach);
  color: var(--wl-accent);
}

.wishlist-hero-art {
  position: absolute;
  top: 0;
  right: 4%;
  display: grid;
  place-items: center;
  width: 290px;
  height: 100%;
  color: var(--wl-accent);
}

.wishlist-art-circle {
  position: absolute;
  border: 1px solid rgba(189, 118, 95, .22);
  border-radius: 50%;
}

.wishlist-art-circle-one {
  width: 210px;
  height: 210px;
}

.wishlist-art-circle-two {
  width: 160px;
  height: 160px;
  background: rgba(255, 255, 255, .28);
}

.wishlist-art-heart {
  z-index: 1;
  display: grid;
  place-items: center;
  width: 105px;
  height: 105px;
  border: 1px solid rgba(189, 118, 95, .2);
  border-radius: 50%;
  background: rgba(255, 255, 255, .62);
  box-shadow: 0 14px 35px rgba(111, 69, 51, .08);
}

.wishlist-art-spark {
  position: absolute;
  color: #bd765f;
  font-family: Georgia, serif;
}

.wishlist-art-spark-one {
  top: 38px;
  right: 56px;
  font-size: 27px;
}

.wishlist-art-spark-two {
  bottom: 43px;
  left: 40px;
  font-size: 32px;
}

.wishlist-art-caption {
  position: absolute;
  right: 0;
  bottom: 20px;
  color: rgba(118, 95, 84, .75);
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
  line-height: 1.5;
  text-align: right;
}

.wishlist-products-section {
  width: 100%;
}

.wishlist-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 23px;
}

.wishlist-section-heading h2 {
  margin: 6px 0 0;
  color: var(--wl-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(24px, 3vw, 31px);
  font-weight: 500;
  letter-spacing: -.6px;
}

.wishlist-text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 5px;
  color: var(--wl-accent);
  font-size: 11px;
  font-weight: 750;
  text-decoration: none;
  transition: gap .2s ease;
}

.wishlist-text-link:hover {
  gap: 11px;
}

.wishlist-product-grid {
  row-gap: 28px;
}

.wishlist-bottom-note {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 36px;
  padding: 17px;
  border: 1px solid var(--wl-border);
  border-radius: 13px;
  background: #fffaf7;
  color: var(--wl-muted);
  font-size: 10px;
}

.wishlist-bottom-note > svg {
  color: var(--wl-accent);
}

.wishlist-bottom-note a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--wl-accent);
  font-weight: 750;
  text-decoration: none;
}

.wishlist-empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px 54px;
  border: 1px solid var(--wl-border);
  border-radius: 21px;
  background: linear-gradient(180deg, #fffdfb 0%, #fff9f5 100%);
  text-align: center;
}

.wishlist-empty-visual {
  position: relative;
  display: grid;
  place-items: center;
  width: 154px;
  height: 154px;
  margin-bottom: 24px;
  color: var(--wl-accent);
}

.wishlist-empty-orbit {
  position: absolute;
  border: 1px solid rgba(189, 118, 95, .2);
  border-radius: 50%;
}

.wishlist-empty-orbit-one {
  width: 145px;
  height: 145px;
}

.wishlist-empty-orbit-two {
  width: 112px;
  height: 112px;
  border-style: dashed;
}

.wishlist-empty-heart {
  display: grid;
  place-items: center;
  width: 77px;
  height: 77px;
  border-radius: 50%;
  background: var(--wl-peach);
}

.wishlist-empty-star {
  position: absolute;
  color: var(--wl-accent);
  font-family: Georgia, serif;
}

.wishlist-empty-star.star-one {
  top: 8px;
  right: 12px;
  font-size: 23px;
}

.wishlist-empty-star.star-two {
  bottom: 13px;
  left: 6px;
  font-size: 27px;
}

.wishlist-empty h2 {
  margin: 12px 0 10px;
  color: var(--wl-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(27px, 4vw, 36px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -.7px;
}

.wishlist-empty > p {
  max-width: 430px;
  margin: 0;
  color: var(--wl-muted);
  font-size: 12px;
  line-height: 1.8;
}

.wishlist-shop-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 23px;
  padding: 13px 20px;
  border: 1px solid var(--wl-ink);
  border-radius: 999px;
  background: var(--wl-ink);
  color: #fff;
  font-size: 11px;
  font-weight: 750;
  text-decoration: none;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;
}

.wishlist-shop-button:hover {
  transform: translateY(-2px);
  border-color: var(--wl-accent);
  background: var(--wl-accent);
}

.wishlist-empty-footnote {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 24px;
  color: #ad9a90;
  font-size: 9px;
}

.wishlist-empty-footnote svg {
  color: var(--wl-accent);
}

@media (max-width: 700px) {
  .wishlist-page {
    padding-bottom: 48px;
  }

  .wishlist-hero {
    min-height: 225px;
    padding: 30px 25px;
    margin-bottom: 34px;
  }

  .wishlist-hero-art {
    right: -100px;
    opacity: .42;
  }

  .wishlist-hero-copy {
    max-width: 85%;
  }

  .wishlist-hero h1 {
    font-size: 37px;
  }

  .wishlist-section-heading {
    align-items: flex-start;
  }

  .wishlist-bottom-note {
    text-align: center;
  }
}

@media (max-width: 460px) {
  .wishlist-hero {
    padding: 27px 20px;
    border-radius: 16px;
  }

  .wishlist-hero-copy {
    max-width: 100%;
  }

  .wishlist-hero h1 {
    max-width: 280px;
    font-size: 34px;
  }

  .wishlist-hero-copy > p {
    max-width: 270px;
    font-size: 11px;
  }

  .wishlist-hero-art {
    right: -150px;
    opacity: .24;
  }

  .wishlist-section-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
  }

  .wishlist-empty {
    padding: 32px 17px 39px;
  }

  .wishlist-empty > p {
    font-size: 11px;
  }

  .wishlist-shop-button {
    width: 100%;
    max-width: 280px;
    box-sizing: border-box;
  }
}

          `))}const hs={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},Rv=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:Jg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:xv},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:Jd},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:yn}],Pv=()=>new Promise(i=>{if(window.Razorpay)return i(!0);const o=document.createElement("script");o.src="https://checkout.razorpay.com/v1/checkout.js",o.onload=()=>i(!0),o.onerror=()=>i(!1),document.body.appendChild(o)});function Iv(){const{cart:i,customer:o,clearCart:s,setCustomer:u}=Kt(),p=bn(),[m,f]=b.useState((o==null?void 0:o.addresses)||[]),[g,h]=b.useState(""),[v,y]=b.useState(!1),[E,S]=b.useState({...hs,fullName:(o==null?void 0:o.name)||"",phone:(o==null?void 0:o.phone)||""}),[O,I]=b.useState("cod"),[R,z]=b.useState(""),[D,U]=b.useState(""),[P,W]=b.useState(null),[ee,ie]=b.useState(0),[ge,V]=b.useState(""),[oe,M]=b.useState(""),[se,ze]=b.useState(!1),[Ee,Re]=b.useState(!1),[q,ye]=b.useState(!1),X=b.useMemo(()=>i.reduce(($,te)=>$+xn(te.product)*te.quantity,0),[i]),j=b.useMemo(()=>{const $=Math.min(Math.max(0,Number(ee)||0),X);let te=0,Z=0;const he=i.map(Ne=>{const Q=Ne.product||{},ce=Math.max(1,Number(Ne.quantity)||1),Be=Math.max(0,Number(xn(Q))||0),Ke=Be*ce,lr=X>0?$*(Ke/X):0,Ot=Math.max(0,Ke-lr),Pe=Math.max(0,Number(Q.gstRate)||0),lt=Q.gstType==="inclusive"?"inclusive":"exclusive";let et=Ot,dt=0;Pe>0&&lt==="inclusive"?(et=Ot*100/(100+Pe),dt=Ot-et):Pe>0&&(dt=Ot*Pe/100);const sr=Math.max(0,Number(Q.shippingCharge)||0),cr=sr*ce;return te+=dt,Z+=cr,{productId:Q._id||Q.id,quantity:ce,unitPrice:Be,gstRate:Pe,gstType:lt,taxableAmount:et,gstAmount:dt,shippingCharge:sr,lineShipping:cr,lineTotal:Ot+(lt==="exclusive"?dt:0)+cr}}),Ae=Math.max(0,X-$+te+Z);return{lines:he,discount:$,gstTotal:te,shippingTotal:Z,total:Ae}},[i,X,ee]),L=j.total;b.useEffect(()=>{const $=(o==null?void 0:o.addresses)||[];if(f($),$.length){const te=$.find(Z=>Z.isDefault);h(String((te==null?void 0:te._id)||$[0]._id))}else h("")},[o]);const B=()=>{V(""),M("")},N=$=>{const{name:te,value:Z,type:he,checked:Ae}=$.target;S(Ne=>({...Ne,[te]:he==="checkbox"?Ae:Z}))},F=async $=>{$.preventDefault(),B(),Re(!0);try{const te=await Te.addAddress(E),Z=te!=null&&te.addresses?te:await Te.me();u(Z);const he=Z.addresses||[];f(he);const Ae=he.find(ce=>ce.fullName===E.fullName&&ce.phone===E.phone&&ce.addressLine1===E.addressLine1),Ne=he[he.length-1],Q=Ae||Ne;Q!=null&&Q._id&&h(String(Q._id)),y(!1),S({...hs,fullName:Z.name||"",phone:Z.phone||""}),M("Delivery address saved successfully.")}catch(te){V(te.message)}finally{Re(!1)}},me=async()=>{var $,te;if(B(),!D.trim())return V("Please enter a coupon code.");if(!i.length)return V("Your cart is empty.");ye(!0);try{const Z=await Te.validateCoupon({code:D.trim().toUpperCase(),subtotal:X,items:i.map(Ne=>({product:Ne.product._id||Ne.product.id,productId:Ne.product._id||Ne.product.id,quantity:Ne.quantity,unitPrice:xn(Ne.product)}))}),he=Z.coupon||(($=Z.data)==null?void 0:$.coupon)||Z,Ae=Number(Z.discount??((te=Z.data)==null?void 0:te.discount)??he.discountAmount??0);if(Ae<=0)throw new Error(Z.message||"This coupon did not return a valid discount.");W(he),ie(Math.min(X,Ae)),U(D.trim().toUpperCase()),M(`Coupon ${D.toUpperCase()} applied successfully.`)}catch(Z){W(null),ie(0),V(Z.message)}finally{ye(!1)}},ve=()=>{W(null),ie(0),U(""),M("Coupon removed."),V("")},ke=async $=>{if($.preventDefault(),B(),!i.length)return V("Your cart is empty.");if(i.find(he=>{var Ne,Q;return!(((Ne=he.product)==null?void 0:Ne._id)||((Q=he.product)==null?void 0:Q.id))}))return V("Product ID missing. Please remove this item and add it again from the shop.");const Z=m.find(he=>String(he._id)===g);if(!Z&&v)return V("Please save your new address before placing your order.");if(!Z)return V("Please select a delivery address.");ze(!0);try{const he={items:i.map(Pe=>{const lt=String(Pe.product._id||Pe.product.id);return{product:lt,productId:lt,quantity:Number(Pe.quantity),...Pe.variant?{variant:Pe.variant}:{}}}),shippingAddress:{fullName:Z.fullName,phone:Z.phone,addressLine1:Z.addressLine1,addressLine2:Z.addressLine2,landmark:Z.landmark,city:Z.city,state:Z.state,postalCode:Z.postalCode,country:Z.country},billingAddress:null,couponCode:(P==null?void 0:P.code)||D.trim().toUpperCase()||void 0,paymentMethod:O,customerNote:R},Ae=await Te.createOrder(he),Ne=Ae.order||Ae;if(!(Ne!=null&&Ne._id)&&!(Ne!=null&&Ne.id))throw new Error("Order was submitted but the order ID was not returned.");const Q=Ne._id||Ne.id;if(O==="cod"){s(),p(`/orders/${Q}`,{state:{placed:!0}});return}if(!await Pv())throw new Error("Razorpay Checkout could not load. Please check your internet connection and try again.");if(typeof Te.createRazorpayOrder!="function"||typeof Te.verifyRazorpayPayment!="function")throw new Error("Razorpay API methods are missing in src/api/client.js. Add createRazorpayOrder and verifyRazorpayPayment methods as shown in the integration instructions.");const Be=await Te.createRazorpayOrder({orderId:Q}),Ke=(Be==null?void 0:Be.data)||(Be==null?void 0:Be.paymentOrder)||Be;if(!(Ke!=null&&Ke.key)||!(Ke!=null&&Ke.razorpayOrderId)||!(Ke!=null&&Ke.amount))throw new Error("Invalid Razorpay order response. Please check the backend response.");const lr={key:Ke.key,amount:Ke.amount,currency:Ke.currency||"INR",name:"HOVIRA Cosmetics",description:`Payment for order ${Ne.orderNumber||""}`,order_id:Ke.razorpayOrderId,prefill:{name:Z.fullName||(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",contact:Z.phone||(o==null?void 0:o.phone)||""},notes:{orderId:String(Q),orderNumber:Ne.orderNumber||""},theme:{color:"#BD765F"},handler:async Pe=>{var lt;try{const et=await Te.verifyRazorpayPayment({orderId:Q,razorpay_order_id:Pe.razorpay_order_id,razorpay_payment_id:Pe.razorpay_payment_id,razorpay_signature:Pe.razorpay_signature}),dt=(et==null?void 0:et.order)||((lt=et==null?void 0:et.data)==null?void 0:lt.order)||Ne;if(dt.paymentStatus&&dt.paymentStatus!=="paid")throw new Error("Payment verification is not complete. Please check your order status before retrying.");s(),p(`/orders/${Q}`,{state:{placed:!0,paymentSuccess:!0,paymentId:Pe.razorpay_payment_id}})}catch(et){console.error("Razorpay payment verification error:",et),V("Payment response received, but verification is pending. Do not pay again immediately. Please check your order status or contact support."),ze(!1)}},modal:{ondismiss:()=>{ze(!1),V("Payment window was closed. Your order is saved as pending payment. You can retry payment from your order page.")}}},Ot=new window.Razorpay(lr);Ot.on("payment.failed",Pe=>{var lt;console.error("Razorpay payment failed:",Pe==null?void 0:Pe.error),ze(!1),V(((lt=Pe==null?void 0:Pe.error)==null?void 0:lt.description)||"Payment failed. Your order is still pending payment. Please try again.")}),Ot.open()}catch(he){V(he.message||"Unable to place your order."),ze(!1)}};return i.length?n.createElement(n.Fragment,null,n.createElement(vt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(K,{to:"/cart",className:"hv-checkout-back"},n.createElement(rn,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(jt,{size:17}),"Secure checkout")),ge&&n.createElement(an,{type:"error",onClose:()=>V("")},ge),oe&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(it,{size:17}),oe),n.createElement("form",{className:"hv-checkout-layout",onSubmit:ke},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!v&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{B(),S({...hs,fullName:(o==null?void 0:o.name)||"",phone:(o==null?void 0:o.phone)||""}),y(!0)}},n.createElement(Ur,{size:16}),"Add address")),m.length>0&&!v&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map($=>n.createElement("label",{key:$._id,className:`hv-checkout-address-card ${g===String($._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:$._id,checked:g===String($._id),onChange:()=>h(String($._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(La,{size:16}),$.label||"Address"),$.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),g===String($._id)&&n.createElement(it,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,$.fullName),n.createElement("p",null,$.addressLine1,$.addressLine2&&`, ${$.addressLine2}`,$.landmark&&`, ${$.landmark}`),n.createElement("p",null,$.city,", ",$.state," ",$.postalCode),n.createElement("span",{className:"hv-checkout-phone"},$.phone)))),(!m.length||v)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>y(!1),"aria-label":"Close address form"},n.createElement(zt,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:E.label,onChange:N,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:E.fullName,onChange:N,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:E.phone,onChange:N,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:E.postalCode,onChange:N,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:E.addressLine1,onChange:N,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:E.addressLine2,onChange:N,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:E.landmark,onChange:N,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:E.city,onChange:N,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:E.state,onChange:N,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:E.country,onChange:N,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:E.isDefault,onChange:N}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:Ee,onClick:F},Ee?n.createElement(wn,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(Ur,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>y(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},Rv.map($=>{const te=$.icon;return n.createElement("label",{key:$.value,className:`hv-checkout-payment-card ${O===$.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:$.value,checked:O===$.value,onChange:()=>I($.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(te,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,$.label),n.createElement("span",null,$.description)),O===$.value&&n.createElement(it,{size:19,className:"hv-checkout-selected-icon"}))})),O!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(jt,{size:18}),n.createElement("p",null,"Secure payment powered by Razorpay. You can pay using UPI, credit/debit cards or net banking. Your order will be confirmed after the server verifies your payment."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:R,onChange:$=>z($.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},R.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Bt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},i.map($=>{const te=$.product,Z=pi(te);return n.createElement("div",{className:"hv-checkout-product",key:$.key},n.createElement("div",{className:"hv-checkout-product-image"},Z?n.createElement("img",{src:Z,alt:te.name}):n.createElement("span",null,"H"),n.createElement("i",null,$.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,te.name),$.variant&&n.createElement("small",null,"Option: ",$.variant),n.createElement("small",null,je(xn(te))," each"),Number(te.gstRate)>0&&n.createElement("small",null,"GST ",Number(te.gstRate),"% (",te.gstType==="inclusive"?"included":"extra",")"),Number(te.shippingCharge)>0&&n.createElement("small",null,"Shipping ",je(Number(te.shippingCharge)*Number($.quantity||1)))),n.createElement("strong",{className:"hv-checkout-product-total"},je(xn(te)*$.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(vv,{size:17}),n.createElement("strong",null,"Have a promo code?")),P?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(it,{size:17}),n.createElement("span",null,n.createElement("strong",null,P.code||D),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:ve,"aria-label":"Remove coupon"},n.createElement(zt,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:D,onChange:$=>{U($.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:me,disabled:q},q?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,je(X))),ee>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",je(ee))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"GST"),n.createElement("strong",null,je(j.gstTotal))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("strong",null,je(j.shippingTotal))),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,je(L))),n.createElement("p",{className:"hv-checkout-total-note"},"GST and shipping are estimated from product settings. The server must recalculate the final invoice amount before order confirmation.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:se||Ee||q||!g&&m.length>0&&!v||v},se?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(be,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(yn,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Yr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(qs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(jt,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(K,{to:"/cart"},n.createElement(rn,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
/* =========================================
   HOVIRA CHECKOUT PAGE
========================================= */

.hv-checkout-page {
  min-height: 100vh;
  background: #FFFAF6;
  padding: 45px 0 90px;
  color: #38251F;
}

.hv-checkout-container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

/* =========================================
   HEADER
========================================= */

.hv-checkout-header {
  position: relative;
  margin-bottom: 35px;
}

.hv-checkout-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #947D73;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  transition: .2s ease;
  margin-bottom: 30px;
}

.hv-checkout-back:hover {
  color: #BD765F;
}

.hv-checkout-title {
  text-align: center;
}

.hv-checkout-eyebrow {
  display: inline-block;
  color: #BD765F;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hv-checkout-title h1 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 53px);
  font-weight: 500;
  color: #38251F;
  margin: 12px 0;
  letter-spacing: -1px;
}

.hv-checkout-title h1 em {
  color: #BD765F;
  font-weight: 400;
}

.hv-checkout-title p {
  color: #947D73;
  font-size: 13px;
  line-height: 1.7;
}

.hv-checkout-secure {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #66836A;
  font-size: 11px;
  font-weight: 700;
}

.hv-checkout-header > .hv-checkout-secure {
  position: absolute;
  right: 0;
  top: 5px;
}

.hv-checkout-alert {
  margin-bottom: 18px;
}

.hv-checkout-alert.success {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #EDF5EC;
  border: 1px solid #D6E6D3;
  color: #527B56;
  border-radius: 5px;
  padding: 12px 15px;
  font-size: 12px;
}

/* =========================================
   EMPTY CHECKOUT
========================================= */

.hv-checkout-empty {
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 8px;
  padding: 75px 20px;
  text-align: center;
}

.hv-checkout-empty-icon {
  width: 75px;
  height: 75px;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: #F8EEE7;
  color: #BD765F;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hv-checkout-empty h2 {
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: 500;
  margin: 12px 0;
}

.hv-checkout-empty p {
  color: #947D73;
  font-size: 12px;
  margin-bottom: 24px;
}

/* =========================================
   MAIN LAYOUT
========================================= */

.hv-checkout-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 370px;
  align-items: start;
  gap: 28px;
}

.hv-checkout-main {
  display: grid;
  gap: 20px;
  min-width: 0;
}

/* =========================================
   CHECKOUT SECTIONS
========================================= */

.hv-checkout-section {
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 7px;
  padding: 27px;
  min-width: 0;
}

.hv-checkout-section-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 26px;
}

.hv-checkout-step {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  font-size: 17px;
}

.hv-checkout-step-label {
  display: block;
  color: #BD765F;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.4px;
  margin-bottom: 5px;
}

.hv-checkout-section-heading h2 {
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: 500;
  color: #38251F;
  margin: 0 0 5px;
}

.hv-checkout-section-heading p {
  color: #947D73;
  font-size: 11px;
  line-height: 1.6;
}

.hv-checkout-add-link {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  border: none;
  background: transparent;
  color: #BD765F;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.hv-checkout-add-link:hover {
  color: #38251F;
}

/* =========================================
   ADDRESS CARDS
========================================= */

.hv-checkout-address-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.hv-checkout-address-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-width: 0;
  padding: 19px;
  border: 1px solid #EADBD1;
  border-radius: 5px;
  background: #FFFCFA;
  cursor: pointer;
  transition: .25s ease;
}

.hv-checkout-address-card:hover {
  border-color: #D7B3A2;
}

.hv-checkout-address-card.selected {
  border: 1.5px solid #BD765F;
  background: #FFF8F3;
}

.hv-checkout-address-card input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.hv-checkout-address-top {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 5px;
}

.hv-checkout-address-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #A56A56;
  font-size: 11px;
  font-weight: 800;
}

.hv-checkout-default {
  background: #EDF5EC;
  color: #608363;
  border-radius: 20px;
  padding: 4px 8px;
  font-size: 9px;
  font-weight: 700;
}

.hv-checkout-selected-icon {
  color: #BD765F;
  margin-left: auto;
  flex-shrink: 0;
}

.hv-checkout-address-card > strong {
  color: #38251F;
  font-size: 12px;
}

.hv-checkout-address-card > p {
  color: #806B60;
  font-size: 10px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.hv-checkout-phone {
  color: #947D73;
  font-size: 10px;
}

/* =========================================
   ADDRESS FORM
========================================= */

.hv-checkout-address-form {
  background: #FFFAF6;
  border: 1px solid #EADBD1;
  border-radius: 6px;
  padding: 22px;
}

.hv-checkout-form-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 23px;
}

.hv-checkout-form-heading h3 {
  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 500;
  color: #38251F;
  margin-bottom: 6px;
}

.hv-checkout-form-heading p {
  color: #947D73;
  font-size: 11px;
  line-height: 1.6;
}

.hv-checkout-close {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #EADBD1;
  background: #fff;
  color: #765F54;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.hv-checkout-close:hover {
  background: #F2DFD3;
  color: #A56A56;
}

.hv-checkout-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}

.hv-checkout-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.hv-checkout-field.full {
  grid-column: 1 / -1;
}

.hv-checkout-field > span {
  color: #574138;
  font-size: 11px;
  font-weight: 700;
}

.hv-checkout-field input,
.hv-checkout-field textarea {
  width: 100%;
  min-width: 0;
  padding: 0 13px;
  height: 44px;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  background: #fff;
  color: #38251F;
  font-family: inherit;
  font-size: 11px;
  outline: none;
  transition: .2s ease;
}

.hv-checkout-field textarea {
  height: auto;
  min-height: 105px;
  resize: vertical;
  padding: 13px;
  line-height: 1.7;
}

.hv-checkout-field input::placeholder,
.hv-checkout-field textarea::placeholder {
  color: #B4A39A;
}

.hv-checkout-field input:focus,
.hv-checkout-field textarea:focus {
  border-color: #BD765F;
  box-shadow: 0 0 0 3px rgba(189, 118, 95, .08);
}

.hv-checkout-checkbox {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 19px;
  color: #806B60;
  font-size: 11px;
  cursor: pointer;
}

.hv-checkout-checkbox input {
  accent-color: #BD765F;
  width: 15px;
  height: 15px;
}

.hv-checkout-address-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 22px;
}

/* =========================================
   BUTTONS
========================================= */

.hv-checkout-primary-button,
.hv-checkout-secondary-button {
  min-height: 44px;
  padding: 0 19px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: .25s ease;
}

.hv-checkout-primary-button {
  background: #38251F;
  border: 1px solid #38251F;
  color: #fff;
}

.hv-checkout-primary-button:hover:not(:disabled) {
  background: #BD765F;
  border-color: #BD765F;
}

.hv-checkout-secondary-button {
  background: #fff;
  border: 1px solid #EADBD1;
  color: #765F54;
}

.hv-checkout-secondary-button:hover {
  background: #F8EEE7;
  border-color: #BD765F;
}

.hv-checkout-primary-button:disabled {
  opacity: .55;
  cursor: not-allowed;
}

/* =========================================
   PAYMENT OPTIONS
========================================= */

.hv-checkout-payment-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.hv-checkout-payment-card {
  position: relative;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  border: 1px solid #EADBD1;
  border-radius: 5px;
  background: #FFFCFA;
  cursor: pointer;
  transition: .25s ease;
}

.hv-checkout-payment-card:hover {
  border-color: #D7B3A2;
}

.hv-checkout-payment-card.selected {
  border: 1.5px solid #BD765F;
  background: #FFF8F3;
}

.hv-checkout-payment-card input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.hv-checkout-payment-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hv-checkout-payment-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  flex: 1;
}

.hv-checkout-payment-info strong {
  color: #38251F;
  font-size: 11px;
}

.hv-checkout-payment-info span {
  color: #947D73;
  font-size: 9px;
  line-height: 1.5;
}

.hv-checkout-payment-card .hv-checkout-selected-icon {
  margin-left: auto;
}

/* Payment warning */

.hv-checkout-payment-warning {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  margin-top: 17px;
  border: 1px solid #EAD6C5;
  background: #FFF7ED;
  border-radius: 5px;
  color: #936B45;
}

.hv-checkout-payment-warning svg {
  flex-shrink: 0;
}

.hv-checkout-payment-warning p {
  font-size: 10px;
  line-height: 1.8;
}

/* =========================================
   ORDER NOTE
========================================= */

.hv-checkout-character-count {
  text-align: right;
  color: #AA968C;
  font-size: 9px;
  margin-top: 7px;
}

/* =========================================
   ORDER SUMMARY
========================================= */

.hv-checkout-summary {
  position: sticky;
  top: 105px;
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 7px;
  padding: 25px;
  min-width: 0;
}

.hv-checkout-summary-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 21px;
  border-bottom: 1px solid #EADBD1;
}

.hv-checkout-summary-heading h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 500;
  color: #38251F;
  margin-top: 8px;
}

.hv-checkout-summary-heading > svg {
  color: #BD765F;
}

/* Products */

.hv-checkout-products {
  display: grid;
  gap: 16px;
  padding: 21px 0;
  border-bottom: 1px solid #EADBD1;
}

.hv-checkout-product {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) auto;
  gap: 11px;
  align-items: center;
}

.hv-checkout-product-image {
  width: 58px;
  height: 65px;
  position: relative;
  border-radius: 4px;
  overflow: visible;
  background: #F8EEE7;
}

.hv-checkout-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.hv-checkout-product-image > span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BD765F;
  font-family: Georgia, serif;
}

.hv-checkout-product-image i {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #38251F;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
}

.hv-checkout-product-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hv-checkout-product-info strong {
  color: #38251F;
  font-size: 11px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.hv-checkout-product-info small {
  color: #947D73;
  font-size: 9px;
}

.hv-checkout-product-total {
  color: #38251F;
  font-size: 10px;
  white-space: nowrap;
}

/* =========================================
   COUPON
========================================= */

.hv-checkout-coupon {
  padding: 20px 0;
  border-bottom: 1px solid #EADBD1;
}

.hv-checkout-coupon-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 13px;
  color: #A56A56;
}

.hv-checkout-coupon-heading strong {
  color: #38251F;
  font-size: 11px;
}

.hv-checkout-coupon-input {
  display: flex;
  align-items: stretch;
  gap: 7px;
}

.hv-checkout-coupon-input input {
  width: 100%;
  min-width: 0;
  height: 43px;
  padding: 0 12px;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  background: #FFFCFA;
  color: #38251F;
  outline: none;
  font-family: inherit;
  font-size: 10px;
}

.hv-checkout-coupon-input input:focus {
  border-color: #BD765F;
}

.hv-checkout-coupon-input input::placeholder {
  color: #B4A39A;
}

.hv-checkout-coupon-input button {
  min-width: 75px;
  padding: 0 12px;
  border: 1px solid #38251F;
  border-radius: 4px;
  background: #38251F;
  color: #fff;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: .2s ease;
}

.hv-checkout-coupon-input button:hover:not(:disabled) {
  background: #BD765F;
  border-color: #BD765F;
}

.hv-checkout-coupon-input button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.hv-checkout-applied-coupon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #EDF5EC;
  border: 1px solid #D6E6D3;
  border-radius: 5px;
}

.hv-checkout-applied-coupon > div {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
  color: #608363;
}

.hv-checkout-applied-coupon span {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hv-checkout-applied-coupon strong {
  font-size: 11px;
}

.hv-checkout-applied-coupon small {
  font-size: 9px;
}

.hv-checkout-applied-coupon button {
  border: none;
  background: transparent;
  color: #608363;
  cursor: pointer;
}

/* =========================================
   CALCULATIONS
========================================= */

.hv-checkout-calculations {
  padding: 20px 0 5px;
}

.hv-checkout-summary-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 17px;
  color: #806B60;
  font-size: 11px;
}

.hv-checkout-summary-line strong {
  color: #38251F;
  font-size: 11px;
}

.hv-checkout-summary-line.discount,
.hv-checkout-summary-line.discount strong {
  color: #608363;
}

.hv-checkout-shipping {
  color: #947D73;
  font-size: 9px;
  text-align: right;
}

.hv-checkout-summary-divider {
  height: 1px;
  background: #EADBD1;
  margin: 20px 0;
}

.hv-checkout-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.hv-checkout-total span {
  color: #38251F;
  font-size: 13px;
  font-weight: 700;
}

.hv-checkout-total strong {
  color: #38251F;
  font-size: 23px;
}

.hv-checkout-total-note {
  color: #947D73;
  font-size: 9px;
  line-height: 1.8;
  margin-top: 10px;
}

/* =========================================
   PLACE ORDER
========================================= */

.hv-checkout-place-order {
  width: 100%;
  min-height: 53px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid #38251F;
  border-radius: 4px;
  background: #38251F;
  color: #fff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: .25s ease;
}

.hv-checkout-place-order:hover:not(:disabled) {
  background: #BD765F;
  border-color: #BD765F;
}

.hv-checkout-place-order:disabled {
  opacity: .55;
  cursor: not-allowed;
}

.hv-checkout-secure-note {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #947D73;
  font-size: 9px;
  text-align: center;
  margin-top: 14px;
}

.hv-checkout-secure-note svg {
  color: #BD765F;
}

/* Benefits */

.hv-checkout-benefits {
  border-top: 1px solid #EADBD1;
  padding-top: 20px;
  margin-top: 23px;
  display: grid;
  gap: 17px;
}

.hv-checkout-benefits > div {
  display: flex;
  align-items: center;
  gap: 11px;
}

.hv-checkout-benefits > div > svg {
  color: #BD765F;
  flex-shrink: 0;
}

.hv-checkout-benefits span {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hv-checkout-benefits strong {
  color: #38251F;
  font-size: 10px;
}

.hv-checkout-benefits small {
  color: #947D73;
  font-size: 9px;
}

/* =========================================
   FOOTER NOTE
========================================= */

.hv-checkout-footer-note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 35px;
  padding-top: 20px;
  border-top: 1px solid #EADBD1;
}

.hv-checkout-footer-note a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #BD765F;
  text-decoration: none;
  font-size: 10px;
  font-weight: 700;
}

.hv-checkout-footer-note span {
  color: #947D73;
  font-size: 10px;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {
  .hv-checkout-layout {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 18px;
  }

  .hv-checkout-section {
    padding: 22px;
  }

  .hv-checkout-summary {
    padding: 21px;
  }
}

@media (max-width: 800px) {
  .hv-checkout-page {
    padding: 35px 0 70px;
  }

  .hv-checkout-container {
    width: calc(100% - 32px);
  }

  .hv-checkout-layout {
    grid-template-columns: 1fr;
  }

  .hv-checkout-summary {
    position: static;
  }

  .hv-checkout-header > .hv-checkout-secure {
    position: static;
    justify-content: center;
    margin-top: 15px;
  }

  .hv-checkout-title {
    margin-top: 5px;
  }
}

@media (max-width: 550px) {
  .hv-checkout-section {
    padding: 18px;
  }

  .hv-checkout-section-heading {
    gap: 11px;
    flex-wrap: wrap;
  }

  .hv-checkout-section-heading h2 {
    font-size: 20px;
  }

  .hv-checkout-step {
    width: 36px;
    height: 36px;
    min-width: 36px;
    font-size: 14px;
  }

  .hv-checkout-add-link {
    margin-left: auto;
    font-size: 10px;
  }

  .hv-checkout-address-grid,
  .hv-checkout-payment-grid {
    grid-template-columns: 1fr;
  }

  .hv-checkout-form-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .hv-checkout-field.full {
    grid-column: auto;
  }

  .hv-checkout-address-form {
    padding: 17px;
  }

  .hv-checkout-payment-card {
    padding: 13px;
  }

  .hv-checkout-title h1 {
    font-size: 37px;
  }

  .hv-checkout-title p {
    font-size: 11px;
  }

  .hv-checkout-footer-note {
    flex-direction: column;
    align-items: flex-start;
  }

  .hv-checkout-total strong {
    font-size: 21px;
  }
}

@media (max-width: 380px) {
  .hv-checkout-container {
    width: calc(100% - 24px);
  }

  .hv-checkout-section {
    padding: 15px;
  }

  .hv-checkout-summary {
    padding: 17px;
  }

  .hv-checkout-title h1 {
    font-size: 32px;
  }

  .hv-checkout-section-heading p {
    font-size: 10px;
  }
}

    `)):n.createElement(n.Fragment,null,n.createElement(vt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Bt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(K,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(be,{size:17}))))))}const Pa={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Dv(){var j;const i=bn(),{customer:o,setCustomer:s,logout:u}=Kt(),[p,m]=b.useState("profile"),[f,g]=b.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[h,v]=b.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[y,E]=b.useState(Pa),[S,O]=b.useState(null),[I,R]=b.useState(!1),[z,D]=b.useState(""),[U,P]=b.useState(""),[W,ee]=b.useState(!1),[ie,ge]=b.useState(!0);b.useEffect(()=>{let L=!0;return Te.me().then(B=>{L&&(s(B),g({name:B.name||"",email:B.email||"",phone:B.phone||"",marketingOptIn:!!B.marketingOptIn}))}).catch(B=>{L&&D(B.message)}).finally(()=>{L&&ge(!1)}),()=>{L=!1}},[s]);const V=()=>{D(""),P("")},oe=L=>{const{name:B,value:N,type:F,checked:me}=L.target;g(ve=>({...ve,[B]:F==="checkbox"?me:N}))},M=L=>{const{name:B,value:N,type:F,checked:me}=L.target;E(ve=>({...ve,[B]:F==="checkbox"?me:N}))},se=async L=>{L.preventDefault(),ee(!0),V();try{const B=await Te.updateMe(f);s(B),P("Your profile has been updated.")}catch(B){D(B.message)}finally{ee(!1)}},ze=async L=>{if(L.preventDefault(),V(),h.newPassword.length<8)return D("New password must be at least 8 characters.");if(h.newPassword!==h.confirmPassword)return D("New passwords do not match.");ee(!0);try{await Te.changePassword({currentPassword:h.currentPassword,newPassword:h.newPassword}),v({currentPassword:"",newPassword:"",confirmPassword:""}),P("Password updated successfully.")}catch(B){D(B.message)}finally{ee(!1)}},Ee=L=>{V(),O((L==null?void 0:L._id)||null),E(L?{...Pa,...L}:{...Pa,fullName:(o==null?void 0:o.name)||"",phone:(o==null?void 0:o.phone)||""}),R(!0)},Re=async L=>{L.preventDefault(),ee(!0),V();try{S?await Te.updateAddress(S,y):await Te.addAddress(y);const B=await Te.me();s(B),R(!1),O(null),E(Pa),P("Address saved successfully.")}catch(B){D(B.message)}finally{ee(!1)}},q=async L=>{if(window.confirm("Delete this saved address?")){V();try{await Te.deleteAddress(L);const B=await Te.me();s(B),P("Address deleted successfully.")}catch(B){D(B.message)}}},ye=()=>{R(!1),O(null),E(Pa)},X=()=>{u(),i("/",{replace:!0})};return ie?n.createElement("div",{className:"page-shell"},n.createElement(wn,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(vt,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,((j=o==null?void 0:o.name)==null?void 0:j.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(jr,{size:28}))),z&&n.createElement("div",{className:"account-alert error"},n.createElement(an,null,z)),U&&n.createElement("div",{className:"account-alert success"},n.createElement(it,{size:17}),U),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((o==null?void 0:o.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(o==null?void 0:o.name)||"HOVIRA User"),n.createElement("p",null,o==null?void 0:o.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(jt,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:p==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),V()}},n.createElement(jr,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(ai,{size:16})),n.createElement("button",{className:p==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),V(),ye()}},n.createElement(La,{size:19}),n.createElement("span",null,"Address book"),n.createElement(ai,{size:16})),n.createElement(K,{to:"/orders",className:"account-menu-item"},n.createElement(ja,{size:19}),n.createElement("span",null,"My orders"),n.createElement(be,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:X},n.createElement(cv,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(jt,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},p==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(jr,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:se},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:f.name,onChange:oe,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(Ws,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:f.email,onChange:oe,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(nm,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:f.phone,onChange:oe,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:f.marketingOptIn,onChange:oe}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(md,{size:17}),W?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(yn,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:ze},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:h.currentPassword,onChange:L=>v({...h,currentPassword:L.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:h.newPassword,onChange:L=>v({...h,newPassword:L.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:h.confirmPassword,onChange:L=>v({...h,confirmPassword:L.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:W},n.createElement(yn,{size:16}),W?"Updating...":"Update password")))),p==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!I&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>Ee(null)},n.createElement(Ur,{size:17}),"Add address")),I&&n.createElement("form",{className:"account-address-form",onSubmit:Re},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,S?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:ye,className:"account-close-button"},n.createElement(zt,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:y.label,onChange:M,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:y.fullName,onChange:M,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:y.phone,onChange:M,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:y.postalCode,onChange:M,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:y.addressLine1,onChange:M,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:y.addressLine2,onChange:M,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:y.landmark,onChange:M,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:y.city,onChange:M,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:y.state,onChange:M,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:y.country,onChange:M,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:y.isDefault,onChange:M}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(md,{size:16}),W?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:ye},"Cancel"))),((o==null?void 0:o.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},o.addresses.map(L=>n.createElement("div",{className:"account-address-card",key:L._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(La,{size:16}),L.label||"Address"),L.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(it,{size:13}),"Default")),n.createElement("h3",null,L.fullName),n.createElement("p",null,L.addressLine1,L.addressLine2&&`, ${L.addressLine2}`,L.landmark&&`, ${L.landmark}`,n.createElement("br",null),L.city,", ",L.state," ",L.postalCode,n.createElement("br",null),L.country,n.createElement("br",null),L.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>Ee(L)},n.createElement(mv,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>q(L._id)},n.createElement(rm,{size:14}),"Delete"))))):!I&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(La,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>Ee(null)},n.createElement(Ur,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
/* ========================================
   HOVIRA ACCOUNT PAGE
======================================== */

.account-page {
  min-height: 100vh;
  padding: 65px 0 100px;
  background: #FFFAF6;
  color: #38251F;
}

.account-container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

/* Page heading */

.account-page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 38px;
}

.account-eyebrow,
.account-panel-eyebrow {
  color: #BD765F;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.account-page-heading h1 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 52px);
  font-weight: 500;
  color: #38251F;
  margin: 12px 0;
}

.account-page-heading h1 em {
  color: #BD765F;
  font-weight: 400;
}

.account-page-heading p {
  color: #947D73;
  font-size: 13px;
  line-height: 1.7;
}

.account-heading-icon {
  width: 68px;
  height: 68px;
  background: #F2DFD3;
  color: #A56A56;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Alerts */

.account-alert {
  margin-bottom: 20px;
}

.account-alert.success {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #EDF5EC;
  border: 1px solid #D6E6D3;
  border-radius: 6px;
  padding: 13px 16px;
  color: #527B56;
  font-size: 12px;
}

/* Layout */

.account-layout {
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr);
  align-items: start;
  gap: 25px;
}

/* Sidebar */

.account-sidebar {
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 8px;
  padding: 22px;
  position: sticky;
  top: 100px;
}

.account-user-card {
  text-align: center;
  padding: 10px 5px 25px;
}

.account-avatar {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  font-family: Georgia, serif;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}

.account-user-info h3 {
  font-family: Georgia, serif;
  font-size: 19px;
  font-weight: 600;
  color: #38251F;
  margin-bottom: 6px;
}

.account-user-info p {
  color: #947D73;
  font-size: 11px;
  overflow-wrap: anywhere;
}

.account-member-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F8EEE7;
  color: #A56A56;
  font-size: 10px;
  font-weight: 700;
  border-radius: 30px;
  padding: 7px 12px;
  margin-top: 14px;
}

.account-menu-label {
  font-size: 9px;
  font-weight: 800;
  color: #AE9B90;
  letter-spacing: 1.5px;
  padding: 17px 8px 12px;
  border-top: 1px solid #F0E6DF;
}

.account-menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 12px;
  border: none;
  border-radius: 5px;
  background: transparent;
  text-decoration: none;
  color: #765F54;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: .25s ease;
  text-align: left;
  margin-bottom: 5px;
}

.account-menu-item > span {
  flex: 1;
}

.account-menu-item > svg:last-child {
  margin-left: auto;
}

.account-menu-item:hover,
.account-menu-item.active {
  background: #F8EEE7;
  color: #A56A56;
}

.account-menu-item.active {
  font-weight: 800;
}

.account-sidebar-divider {
  height: 1px;
  background: #F0E6DF;
  margin: 18px 0;
}

.account-logout {
  color: #A55D50;
}

.account-logout:hover {
  background: #FFF1EE;
  color: #A55D50;
}

.account-sidebar-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 13px 10px 0;
  border-top: 1px solid #F0E6DF;
  color: #947D73;
  font-size: 10px;
}

/* Main content */

.account-content {
  background: #fff;
  border: 1px solid #EADBD1;
  border-radius: 8px;
  padding: 35px;
  min-width: 0;
}

.account-panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 30px;
}

.account-panel-heading h2 {
  font-family: Georgia, serif;
  color: #38251F;
  font-size: 27px;
  font-weight: 500;
  margin: 9px 0 7px;
}

.account-panel-heading p {
  color: #947D73;
  font-size: 12px;
  line-height: 1.7;
}

.account-panel-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #F8EEE7;
  color: #BD765F;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Form */

.account-form {
  width: 100%;
}

.account-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 18px;
}

.account-field {
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-width: 0;
}

.account-field > span {
  color: #574138;
  font-size: 11px;
  font-weight: 700;
}

.account-field input {
  width: 100%;
  min-width: 0;
  height: 48px;
  padding: 0 14px;
  border: 1px solid #EADBD1;
  border-radius: 4px;
  background: #FFFCFA;
  color: #38251F;
  font-family: inherit;
  font-size: 12px;
  outline: none;
  transition: .25s ease;
}

.account-field input::placeholder {
  color: #B4A39A;
}

.account-field input:focus {
  border-color: #BD765F;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(189, 118, 95, .08);
}

.account-input-icon {
  position: relative;
}

.account-input-icon > svg {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: #BD765F;
  pointer-events: none;
}

.account-input-icon input {
  padding-left: 40px;
}

.account-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #806B60;
  font-size: 11px;
  line-height: 1.6;
  margin-top: 23px;
  cursor: pointer;
}

.account-checkbox input {
  accent-color: #BD765F;
  width: 15px;
  height: 15px;
  margin: 1px 0 0;
  flex-shrink: 0;
}

.account-form-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
}

/* Buttons */

.account-primary-button,
.account-outline-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 46px;
  padding: 0 22px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: .25s ease;
}

.account-primary-button {
  background: #38251F;
  border: 1px solid #38251F;
  color: #fff;
}

.account-primary-button:hover:not(:disabled) {
  background: #BD765F;
  border-color: #BD765F;
}

.account-outline-button {
  background: #fff;
  border: 1px solid #EADBD1;
  color: #765F54;
}

.account-outline-button:hover:not(:disabled) {
  background: #F8EEE7;
  border-color: #BD765F;
  color: #A56A56;
}

.account-primary-button:disabled,
.account-outline-button:disabled {
  opacity: .55;
  cursor: not-allowed;
}

/* Dividers */

.account-section-divider {
  height: 1px;
  background: #EADBD1;
  margin: 38px 0;
}

.password-heading {
  margin-bottom: 27px;
}

.password-grid {
  grid-template-columns: 1fr;
  max-width: 550px;
}

/* Address */

.add-address-button {
  white-space: nowrap;
  min-height: 42px;
}

.account-address-form {
  background: #FFFAF6;
  border: 1px solid #EADBD1;
  border-radius: 7px;
  padding: 25px;
  margin-bottom: 30px;
}

.account-address-form-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.account-address-form-heading h3 {
  font-family: Georgia, serif;
  color: #38251F;
  font-size: 22px;
  font-weight: 500;
  margin-top: 8px;
}

.account-close-button {
  width: 35px;
  height: 35px;
  border: 1px solid #EADBD1;
  background: #fff;
  color: #765F54;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.account-close-button:hover {
  background: #F2DFD3;
  color: #A56A56;
}

.account-field.full-width {
  grid-column: 1 / -1;
}

/* Address cards */

.account-address-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
  margin-top: 10px;
}

.account-address-card {
  border: 1px solid #EADBD1;
  border-radius: 6px;
  padding: 22px;
  background: #fff;
  transition: .25s ease;
  min-width: 0;
}

.account-address-card:hover {
  border-color: #D8B5A4;
  transform: translateY(-2px);
  box-shadow: 0 7px 20px rgba(56, 37, 31, .04);
}

.account-address-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 17px;
}

.account-address-type {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #A56A56;
  font-size: 11px;
  font-weight: 800;
}

.account-default-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #EDF5EC;
  color: #5C805F;
  border-radius: 30px;
  padding: 6px 9px;
  font-size: 9px;
  font-weight: 700;
}

.account-address-card h3 {
  color: #38251F;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 11px;
}

.account-address-card p {
  color: #806B60;
  font-size: 11px;
  line-height: 2;
  overflow-wrap: anywhere;
  min-height: 100px;
}

.account-address-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  border-top: 1px solid #F0E6DF;
  margin-top: 17px;
  padding-top: 15px;
}

.account-address-actions button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #A56A56;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.account-address-actions button:hover {
  color: #38251F;
}

.account-address-actions .delete-address {
  color: #B35D54;
}

/* Empty address */

.account-empty-address {
  text-align: center;
  padding: 60px 20px;
  background: #FFFAF6;
  border: 1px dashed #DCC5B8;
  border-radius: 7px;
}

.account-empty-address > div {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #F2DFD3;
  color: #A56A56;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

.account-empty-address h3 {
  font-family: Georgia, serif;
  color: #38251F;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}

.account-empty-address p {
  color: #947D73;
  font-size: 12px;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Responsive */

@media (max-width: 900px) {
  .account-layout {
    grid-template-columns: 225px minmax(0, 1fr);
    gap: 15px;
  }

  .account-content {
    padding: 25px;
  }

  .account-sidebar {
    padding: 17px;
  }

  .account-address-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .account-page {
    padding: 40px 0 70px;
  }

  .account-container {
    width: calc(100% - 30px);
  }

  .account-page-heading {
    margin-bottom: 25px;
  }

  .account-heading-icon {
    width: 48px;
    height: 48px;
  }

  .account-heading-icon svg {
    width: 21px;
  }

  .account-page-heading h1 {
    font-size: 36px;
  }

  .account-layout {
    grid-template-columns: 1fr;
  }

  .account-sidebar {
    position: static;
    padding: 14px;
  }

  .account-user-card {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 13px;
    padding: 8px 5px 17px;
  }

  .account-avatar {
    width: 48px;
    height: 48px;
    min-width: 48px;
    font-size: 20px;
    margin: 0;
  }

  .account-user-info {
    flex: 1;
    min-width: 0;
  }

  .account-user-info h3 {
    font-size: 15px;
  }

  .account-user-info p {
    overflow-wrap: anywhere;
  }

  .account-member-badge {
    display: none;
  }

  .account-menu-label {
    padding-top: 13px;
  }

  .account-menu-item {
    padding: 12px 10px;
  }

  .account-sidebar-bottom {
    display: none;
  }

  .account-content {
    padding: 22px 17px;
  }

  .account-panel-heading h2 {
    font-size: 24px;
  }

  .account-form-grid {
    grid-template-columns: 1fr;
    gap: 17px;
  }

  .account-field.full-width {
    grid-column: auto;
  }

  .account-address-form {
    padding: 18px;
  }

  .account-address-grid {
    grid-template-columns: 1fr;
  }

  .account-empty-address {
    padding: 40px 15px;
  }
}

@media (max-width: 420px) {
  .account-page-heading h1 {
    font-size: 31px;
  }

  .account-heading-icon {
    display: none;
  }

  .account-panel-icon {
    width: 40px;
    height: 40px;
  }

  .account-panel-icon svg {
    width: 19px;
  }

  .account-primary-button,
  .account-outline-button {
    padding: 0 15px;
    font-size: 10px;
  }

  .account-address-card {
    padding: 18px;
  }
}

          
          `))}function Fv(){const[i,o]=b.useState([]),[s,u]=b.useState(!0),[p,m]=b.useState("");return b.useEffect(()=>{Te.orders().then(o).catch(f=>m(f.message)).finally(()=>u(!1))},[]),n.createElement(n.Fragment,null,n.createElement(vt,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),p&&n.createElement(an,null,p),s?n.createElement(wn,null):i.length?n.createElement("div",{className:"orders-list"},i.map(f=>n.createElement(K,{to:`/orders/${f._id||f.id}`,className:"order-row",key:f._id||f.id},n.createElement("div",{className:"order-icon"},n.createElement(ja,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",f.orderNumber||f._id||f.id),n.createElement("small",null,new Date(f.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(f.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${f.status}`},f.status||"pending"),n.createElement("small",null,f.paymentStatus||"payment pending")),n.createElement("strong",null,je(f.total)),n.createElement(be,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(ja,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(be,{size:17})))))}const gd=[{key:"pending",label:"Order placed",description:"We have received your order.",icon:Bt},{key:"confirmed",label:"Confirmed",description:"Your order has been confirmed.",icon:it},{key:"processing",label:"Processing",description:"Your items are being prepared.",icon:ja},{key:"shipped",label:"Shipped",description:"Your order is on its way.",icon:Yr},{key:"delivered",label:"Delivered",description:"Your order has been delivered.",icon:it}],Lv={placed:"pending",order_placed:"pending",accepted:"confirmed",packed:"processing",dispatched:"shipped",out_for_delivery:"shipped",complete:"delivered",completed:"delivered"},vd=(i="")=>{const o=String(i).toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");return Lv[o]||o},Zo=i=>{if(!i)return"";const o=new Date(i);return Number.isNaN(o.getTime())?"":new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}).format(o)},Jo=(i="")=>String(i).replace(/[_-]/g," ").replace(/\b\w/g,o=>o.toUpperCase());function Mv(){var oe;const{id:i}=$s(),o=ln(),[s,u]=b.useState(null),[p,m]=b.useState(!0),[f,g]=b.useState(!1),[h,v]=b.useState(""),[y,E]=b.useState(!1),S=b.useCallback(async(M=!1)=>{M?g(!0):m(!0),v("");try{const se=await Te.order(i);u(se)}catch(se){v((se==null?void 0:se.message)||"Unable to load this order.")}finally{m(!1),g(!1)}},[i]);b.useEffect(()=>{S()},[S]);const O=(s==null?void 0:s.orderNumber)||(s==null?void 0:s._id)||i,I=vd((s==null?void 0:s.status)||"pending"),R=I==="cancelled",z=gd.findIndex(M=>M.key===I),D=b.useMemo(()=>Array.isArray(s==null?void 0:s.statusHistory)?[...s.statusHistory].sort((M,se)=>new Date(M.createdAt||M.date||0)-new Date(se.createdAt||se.date||0)):[],[s==null?void 0:s.statusHistory]),U=async()=>{try{await navigator.clipboard.writeText(String(O)),E(!0),window.setTimeout(()=>E(!1),1800)}catch{v("Could not copy the order number. Please copy it manually.")}},P=()=>window.print();if(p)return n.createElement("div",{className:"page-shell order-loading"},n.createElement(wn,{label:"Loading your order…"}));if(h&&!s)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(an,null,h),n.createElement("button",{className:"od-btn od-btn-primary",onClick:()=>S()},n.createElement(Is,{size:16})," Try again"),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(rn,{size:16})," Back to orders"));if(!s)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(an,null,"Order not found."),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(rn,{size:16})," Back to orders"));const W=s.items||[],ee=s.shippingAddress||{},ie=vd(s.paymentStatus||"pending"),ge=["paid","completed","success","successful"].includes(ie),V=s.trackingUrl||s.trackingURL||"";return n.createElement(n.Fragment,null,n.createElement(vt,{title:`Order ${O} | HOVIRA`,description:"View your HOVIRA order details, payment information and delivery progress."}),n.createElement("main",{className:"page-shell standard-page od-page"},n.createElement("div",{className:"od-topbar"},n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(rn,{size:16})," All orders"),n.createElement("div",{className:"od-top-actions"},n.createElement("button",{className:"od-btn od-btn-light",onClick:()=>S(!0),disabled:f},n.createElement(Is,{size:15,className:f?"od-spinning":""}),f?"Refreshing":"Refresh status"),n.createElement("button",{className:"od-btn od-btn-light od-print-btn",onClick:P},n.createElement(hv,{size:15})," Print receipt"))),((oe=o.state)==null?void 0:oe.placed)&&n.createElement("div",{className:"od-success-banner"},n.createElement("span",{className:"od-success-icon"},n.createElement(it,{size:20})),n.createElement("div",null,n.createElement("strong",null,"Your order has been placed!"),n.createElement("p",null,"Thank you for choosing HOVIRA. We’ll keep you updated on its progress."))),h&&n.createElement("div",{className:"od-inline-error"},h),n.createElement("header",{className:"od-hero"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"YOUR HOVIRA ORDER"),n.createElement("h1",null,"Order ",n.createElement("em",null,"details")),n.createElement("p",{className:"od-order-meta"},"Order number ",n.createElement("strong",null,O),n.createElement("button",{className:"od-copy-btn",onClick:U,"aria-label":"Copy order number"},n.createElement(rv,{size:14})," ",y?"Copied":"Copy")),s.createdAt&&n.createElement("p",{className:"od-date"},"Placed on ",Zo(s.createdAt))),n.createElement("div",{className:`od-status-card ${R?"is-cancelled":""}`},n.createElement("span",{className:"od-status-label"},"CURRENT STATUS"),n.createElement("strong",null,Jo(s.status||"pending")),n.createElement("span",null,R?"This order has been cancelled.":I==="delivered"?"Your order has arrived.":"We’re taking care of your order."))),!R&&n.createElement("section",{className:"od-card od-tracking-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"THE JOURNEY"),n.createElement("h2",null,"Order progress")),s.estimatedDelivery&&n.createElement("span",{className:"od-delivery-date"},n.createElement(Yr,{size:15})," Expected ",Zo(s.estimatedDelivery))),n.createElement("div",{className:"od-progress-track"},gd.map((M,se)=>{const ze=M.icon,Ee=z>=se&&z!==-1,Re=z===se;return n.createElement("div",{className:`od-progress-step ${Ee?"is-done":""} ${Re?"is-active":""}`,key:M.key},n.createElement("div",{className:"od-step-icon"},n.createElement(ze,{size:18})),n.createElement("div",{className:"od-step-copy"},n.createElement("strong",null,M.label),n.createElement("span",null,Re?"In progress":Ee?"Completed":M.description)))})),s.trackingNumber&&n.createElement("div",{className:"od-tracking-info"},n.createElement("div",null,n.createElement("span",null,"Tracking number"),n.createElement("strong",null,s.trackingNumber)),s.carrier&&n.createElement("div",null,n.createElement("span",null,"Delivery partner"),n.createElement("strong",null,s.carrier)),V&&n.createElement("a",{href:V,target:"_blank",rel:"noreferrer",className:"od-track-link"},"Track shipment ",n.createElement(av,{size:14})))),n.createElement("div",{className:"od-content-grid"},n.createElement("div",{className:"od-main-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"IN YOUR PACKAGE"),n.createElement("h2",null,"Items ordered ",n.createElement("span",{className:"od-count"},W.length)))),n.createElement("div",{className:"od-items-list"},W.map((M,se)=>n.createElement("div",{className:"od-product-row",key:M._id||M.product||se},n.createElement("div",{className:"od-product-image"},M.image?n.createElement("img",{src:M.image,alt:M.name||"HOVIRA product"}):n.createElement("span",null,"H")),n.createElement("div",{className:"od-product-info"},n.createElement("strong",null,M.name||"Product"),M.variant&&n.createElement("span",{className:"od-variant"},M.variant),n.createElement("span",null,"Quantity: ",M.quantity||1),M.sku&&n.createElement("span",{className:"od-sku"},"SKU: ",M.sku)),n.createElement("strong",{className:"od-item-price"},je(M.lineTotal??Number(M.unitPrice||0)*Number(M.quantity||1)))))),n.createElement("div",{className:"od-price-summary"},n.createElement("div",null,n.createElement("span",null,"Subtotal"),n.createElement("strong",null,je(s.subtotal||0))),Number(s.discount)>0&&n.createElement("div",{className:"od-discount"},n.createElement("span",null,"Discount ",s.couponCode?`(${s.couponCode})`:""),n.createElement("strong",null,"−",je(s.discount))),n.createElement("div",null,n.createElement("span",null,"Shipping"),n.createElement("strong",null,Number(s.shippingFee)===0?"Free":je(s.shippingFee||0))),Number(s.tax)>0&&n.createElement("div",null,n.createElement("span",null,"Tax"),n.createElement("strong",null,je(s.tax))),Number(s.codFee)>0&&n.createElement("div",null,n.createElement("span",null,"COD fee"),n.createElement("strong",null,je(s.codFee))),n.createElement("div",{className:"od-grand-total"},n.createElement("span",null,"Total paid / payable"),n.createElement("strong",null,je(s.total||0))))),D.length>0&&n.createElement("section",{className:"od-card od-history-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"ORDER UPDATES"),n.createElement("h2",null,"Activity history"))),n.createElement("div",{className:"od-history-list"},D.map((M,se)=>n.createElement("div",{className:"od-history-item",key:M._id||se},n.createElement("span",{className:"od-history-dot"},n.createElement(ud,{size:13})),n.createElement("div",null,n.createElement("strong",null,Jo(M.status||"Update")),M.note&&n.createElement("p",null,M.note),n.createElement("small",null,Zo(M.createdAt||M.date)))))))),n.createElement("aside",{className:"od-side-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"DELIVERING TO"),n.createElement("h2",null,"Shipping address")),n.createElement("span",{className:"od-heading-icon"},n.createElement(La,{size:17}))),n.createElement("div",{className:"od-address"},n.createElement("strong",null,ee.fullName||"Customer"),ee.addressLine1&&n.createElement("span",null,ee.addressLine1),ee.addressLine2&&n.createElement("span",null,ee.addressLine2),n.createElement("span",null,[ee.city,ee.state,ee.postalCode].filter(Boolean).join(", ")),ee.country&&n.createElement("span",null,ee.country),ee.phone&&n.createElement("span",{className:"od-phone"},ee.phone))),n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"SECURE CHECKOUT"),n.createElement("h2",null,"Payment details")),n.createElement("span",{className:"od-heading-icon"},n.createElement(Jd,{size:17}))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Method"),n.createElement("strong",null,Jo(s.paymentMethod||"Not specified"))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`od-payment-badge ${ge?"is-paid":ie==="failed"?"is-failed":""}`},ge?n.createElement(jt,{size:13}):ie==="failed"?n.createElement(nv,{size:13}):n.createElement(ud,{size:13}),Jo(s.paymentStatus||"Pending"))),s.paymentId&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment ID"),n.createElement("strong",{className:"od-payment-id"},s.paymentId)),s.paidAt&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Paid on"),n.createElement("strong",null,Zo(s.paidAt)))),n.createElement("div",{className:"od-help-card"},n.createElement("span",{className:"od-help-icon"},n.createElement(ja,{size:20})),n.createElement("strong",null,"Need help with your order?"),n.createElement("p",null,"Our team is here to help with any questions about your purchase."),n.createElement(K,{to:"/contact",className:"od-help-link"},"Contact support ",n.createElement(be,{size:15}))))),n.createElement("div",{className:"od-bottom-actions"},n.createElement(K,{to:"/shop",className:"od-btn od-btn-primary"},"Continue shopping ",n.createElement(be,{size:16})),n.createElement(K,{to:"/orders",className:"od-btn od-btn-outline"},"View all orders"))),n.createElement("style",null,`

          /* HOVIRA — Order Details */
.od-page { --od-ink:#38251f; --od-text:#765f54; --od-muted:#9b857a; --od-accent:#bd765f; --od-peach:#f8eee7; --od-border:#eadbd1; color:var(--od-ink); padding-bottom:76px; }
.od-topbar,.od-top-actions,.od-back-link,.od-btn,.od-order-meta,.od-copy-btn,.od-section-heading,.od-delivery-date,.od-tracking-info,.od-tracking-info>div,.od-track-link,.od-payment-row,.od-payment-badge,.od-bottom-actions { display:flex; align-items:center; }
.od-topbar { justify-content:space-between; gap:16px; margin-bottom:28px; }
.od-top-actions { gap:9px; }
.od-back-link { gap:8px; color:var(--od-text); text-decoration:none; font-size:13px; font-weight:650; }
.od-back-link:hover,.od-track-link:hover,.od-help-link:hover { color:var(--od-accent); }
.od-btn { justify-content:center; gap:8px; border:1px solid var(--od-border); border-radius:999px; padding:11px 17px; font:inherit; font-size:12px; font-weight:700; text-decoration:none; cursor:pointer; transition:.2s ease; }
.od-btn:disabled { opacity:.6; cursor:wait; }
.od-btn-light { color:var(--od-text); background:#fff; }
.od-btn-light:hover,.od-btn-outline:hover { border-color:var(--od-accent); color:var(--od-accent); }
.od-btn-primary { color:#fff; background:var(--od-ink); border-color:var(--od-ink); }
.od-btn-primary:hover { background:var(--od-accent); border-color:var(--od-accent); transform:translateY(-1px); }
.od-btn-outline { background:#fff; color:var(--od-ink); }
.od-success-banner { display:flex; align-items:center; gap:13px; padding:17px 20px; margin-bottom:25px; border:1px solid #d7e8d8; border-radius:15px; background:#f5faf4; color:#315d3b; }
.od-success-icon { display:grid; place-items:center; width:38px; height:38px; flex:0 0 38px; border-radius:50%; background:#e4f1e3; }
.od-success-banner strong { font-size:14px; }
.od-success-banner p { margin:3px 0 0; color:#66806a; font-size:12px; }
.od-inline-error { padding:11px 14px; margin-bottom:18px; border-radius:10px; background:#fff1ef; color:#a13d32; font-size:13px; }
.od-hero { display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin:0 0 27px; }
.od-eyebrow { display:block; color:var(--od-accent); font-size:9px; font-weight:800; letter-spacing:2px; margin-bottom:8px; }
.od-hero h1 { margin:0; color:var(--od-ink); font-family:Georgia,serif; font-size:clamp(34px,5vw,49px); font-weight:500; letter-spacing:-1.5px; }
.od-hero h1 em { color:var(--od-accent); font-weight:400; }
.od-order-meta { flex-wrap:wrap; gap:8px; margin:13px 0 0; color:var(--od-muted); font-size:12px; }
.od-order-meta strong { color:var(--od-ink); letter-spacing:.4px; }
.od-copy-btn { gap:5px; padding:4px 8px; border:0; border-radius:6px; background:var(--od-peach); color:var(--od-accent); font-size:10px; font-weight:750; cursor:pointer; }
.od-date { margin:7px 0 0; color:var(--od-muted); font-size:11px; }
.od-status-card { min-width:190px; padding:17px 20px; border:1px solid var(--od-border); border-radius:15px; background:linear-gradient(135deg,#fffaf6,#f8eee7); }
.od-status-label { display:block; margin-bottom:7px; color:var(--od-muted); font-size:9px; font-weight:800; letter-spacing:1.5px; }
.od-status-card strong { display:block; color:var(--od-accent); font-family:Georgia,serif; font-size:21px; font-weight:500; }
.od-status-card>span:last-child { display:block; margin-top:4px; color:var(--od-muted); font-size:10px; }
.od-status-card.is-cancelled { background:#fff5f4; border-color:#f0d5d1; }
.od-status-card.is-cancelled strong { color:#b54e43; }
.od-card { min-width:0; padding:23px; border:1px solid var(--od-border); border-radius:17px; background:#fff; box-shadow:0 7px 25px rgba(74,45,31,.035); }
.od-tracking-card { margin-bottom:20px; background:linear-gradient(135deg,#fff,#fffaf7); }
.od-section-heading { justify-content:space-between; gap:15px; margin-bottom:19px; }
.od-section-heading h2 { display:flex; align-items:center; gap:9px; margin:0; color:var(--od-ink); font-family:Georgia,serif; font-size:21px; font-weight:500; }
.od-section-heading .od-eyebrow { margin-bottom:5px; }
.od-count { display:grid; place-items:center; width:22px; height:22px; border-radius:50%; background:var(--od-peach); color:var(--od-accent); font:700 10px Arial,sans-serif; }
.od-heading-icon { display:grid; place-items:center; width:35px; height:35px; border-radius:11px; background:var(--od-peach); color:var(--od-accent); }
.od-delivery-date { gap:6px; color:var(--od-accent); font-size:11px; font-weight:700; }
.od-progress-track { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:10px; position:relative; }
.od-progress-track:before { content:""; position:absolute; top:19px; left:9%; right:9%; height:2px; background:var(--od-border); }
.od-progress-step { position:relative; z-index:1; text-align:center; }
.od-step-icon { display:grid; place-items:center; width:39px; height:39px; margin:0 auto 10px; border:1px solid var(--od-border); border-radius:50%; background:#fff; color:#b7a49a; }
.od-progress-step.is-done .od-step-icon { border-color:var(--od-accent); background:var(--od-accent); color:#fff; }
.od-progress-step.is-active .od-step-icon { box-shadow:0 0 0 5px #f8eee7; }
.od-step-copy strong,.od-step-copy span { display:block; }
.od-step-copy strong { color:var(--od-ink); font-size:11px; }
.od-step-copy span { margin-top:4px; color:var(--od-muted); font-size:9px; line-height:1.4; }
.od-tracking-info { flex-wrap:wrap; gap:22px; margin-top:21px; padding-top:17px; border-top:1px solid var(--od-border); }
.od-tracking-info>div { flex-direction:column; align-items:flex-start; gap:4px; }
.od-tracking-info>div span { color:var(--od-muted); font-size:10px; }
.od-tracking-info>div strong { font-size:12px; }
.od-track-link { gap:6px; margin-left:auto; color:var(--od-accent); font-size:11px; font-weight:750; text-decoration:none; }
.od-content-grid { display:grid; grid-template-columns:minmax(0,1.65fr) minmax(270px,.85fr); align-items:start; gap:20px; }
.od-main-column,.od-side-column { display:grid; gap:18px; min-width:0; }
.od-items-list { border-top:1px solid var(--od-border); }
.od-product-row { display:flex; align-items:center; gap:14px; padding:16px 0; border-bottom:1px solid #f1e8e2; }
.od-product-image { display:grid; place-items:center; width:73px; height:78px; flex:0 0 73px; overflow:hidden; border-radius:11px; background:#faf3ee; color:var(--od-accent); font-family:Georgia,serif; font-size:28px; }
.od-product-image img { width:100%; height:100%; object-fit:cover; }
.od-product-info { display:flex; flex:1; flex-direction:column; align-items:flex-start; gap:5px; min-width:0; }
.od-product-info strong { color:var(--od-ink); font-size:12px; line-height:1.4; }
.od-product-info span { color:var(--od-muted); font-size:10px; }
.od-product-info .od-variant { color:var(--od-text); }
.od-product-info .od-sku { font-size:9px; }
.od-item-price { white-space:nowrap; color:var(--od-ink); font-size:12px; }
.od-price-summary { display:grid; gap:12px; padding-top:18px; }
.od-price-summary>div { display:flex; justify-content:space-between; gap:12px; color:var(--od-muted); font-size:11px; }
.od-price-summary strong { color:var(--od-text); font-size:11px; }
.od-price-summary .od-discount,.od-price-summary .od-discount strong { color:#56815c; }
.od-price-summary .od-grand-total { align-items:center; margin-top:3px; padding-top:15px; border-top:1px dashed var(--od-border); color:var(--od-ink); font-size:13px; font-weight:750; }
.od-price-summary .od-grand-total strong { color:var(--od-accent); font-family:Georgia,serif; font-size:22px; }
.od-address { display:flex; flex-direction:column; align-items:flex-start; gap:7px; color:var(--od-text); font-size:11px; line-height:1.55; }
.od-address strong { margin-bottom:2px; color:var(--od-ink); font-size:13px; }
.od-address .od-phone { margin-top:4px; font-weight:700; }
.od-payment-row { justify-content:space-between; gap:12px; padding:11px 0; border-bottom:1px solid #f2eae5; color:var(--od-muted); font-size:10px; }
.od-payment-row:last-child { border-bottom:0; padding-bottom:0; }
.od-payment-row strong { color:var(--od-ink); font-size:10px; text-align:right; }
.od-payment-badge { gap:5px; padding:5px 8px; border-radius:20px; background:#fff4e7; color:#9b6a2b; font-size:9px; font-weight:750; white-space:nowrap; }
.od-payment-badge.is-paid { background:#edf6ed; color:#4c7a51; }
.od-payment-badge.is-failed { background:#fff0ef; color:#b54e43; }
.od-payment-id { max-width:145px; overflow-wrap:anywhere; }
.od-help-card { padding:20px; border:1px solid #ead8cd; border-radius:16px; background:linear-gradient(145deg,#fbf1ea,#fffaf6); }
.od-help-icon { display:grid; place-items:center; width:38px; height:38px; margin-bottom:13px; border-radius:12px; background:#fff; color:var(--od-accent); }
.od-help-card>strong { display:block; font-family:Georgia,serif; font-size:17px; font-weight:500; }
.od-help-card p { margin:7px 0 13px; color:var(--od-muted); font-size:10px; line-height:1.6; }
.od-help-link { display:inline-flex; align-items:center; gap:6px; color:var(--od-accent); font-size:11px; font-weight:750; text-decoration:none; }
.od-history-list { display:grid; gap:0; }
.od-history-item { display:flex; gap:12px; padding:0 0 16px; position:relative; }
.od-history-item:not(:last-child):before { content:""; position:absolute; left:13px; top:27px; bottom:0; width:1px; background:var(--od-border); }
.od-history-dot { z-index:1; display:grid; place-items:center; width:27px; height:27px; flex:0 0 27px; border-radius:50%; background:var(--od-peach); color:var(--od-accent); }
.od-history-item strong { font-size:11px; }
.od-history-item p { margin:4px 0; color:var(--od-text); font-size:10px; }
.od-history-item small { color:var(--od-muted); font-size:9px; }
.od-bottom-actions { justify-content:center; flex-wrap:wrap; gap:10px; margin-top:25px; }
.od-bottom-actions .od-btn { min-width:165px; }
.od-spinning { animation:od-spin .8s linear infinite; }
@keyframes od-spin { to { transform:rotate(360deg); } }
.order-loading,.order-error-page { min-height:55vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; }
.order-error-page .od-back-link { margin-top:5px; }

@media (max-width:850px) {
  .od-content-grid { grid-template-columns:minmax(0,1fr) minmax(240px,.8fr); gap:14px; }
  .od-card { padding:19px; }
  .od-progress-track { gap:5px; }
  .od-step-copy span { font-size:8px; }
}
@media (max-width:650px) {
  .od-page { padding-bottom:45px; }
  .od-topbar { align-items:flex-start; flex-direction:column; margin-bottom:22px; }
  .od-top-actions { width:100%; }
  .od-top-actions .od-btn { flex:1; padding:10px 9px; font-size:10px; }
  .od-hero { align-items:flex-start; flex-direction:column; gap:16px; }
  .od-status-card { width:100%; box-sizing:border-box; }
  .od-content-grid { grid-template-columns:1fr; }
  .od-progress-track { grid-template-columns:1fr; gap:0; }
  .od-progress-track:before { top:20px; bottom:20px; left:19px; right:auto; width:2px; height:auto; }
  .od-progress-step { display:flex; align-items:center; gap:12px; text-align:left; padding:5px 0; }
  .od-step-icon { width:39px; height:39px; flex:0 0 39px; margin:0; }
  .od-step-copy span { font-size:9px; }
  .od-step-copy strong { font-size:11px; }
  .od-tracking-info { align-items:flex-start; flex-direction:column; gap:13px; }
  .od-track-link { margin-left:0; }
  .od-delivery-date { font-size:9px; }
}
@media (max-width:390px) {
  .od-card { padding:16px; }
  .od-product-image { width:60px; height:66px; flex-basis:60px; }
  .od-product-row { gap:10px; }
  .od-item-price { font-size:10px; }
  .od-print-btn { display:none; }
}

/* Keep the receipt clean when the customer prints it. */
@media print {
  body { background:#fff !important; }
  .od-page { max-width:none !important; padding:0 !important; }
  .od-topbar,.od-bottom-actions,.od-help-card,.od-copy-btn,.od-inline-error { display:none !important; }
  .od-card,.od-status-card { box-shadow:none !important; break-inside:avoid; }
  .od-content-grid { grid-template-columns:1.5fr 1fr; }
  a { color:inherit !important; text-decoration:none !important; }
}

          
          `))}function _v(){return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(K,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(be,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(_r,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(gt,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(gv,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(be,{size:17}))))}function xd({type:i}){const o=i==="privacy";return n.createElement(n.Fragment,null,n.createElement(vt,{title:o?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,o?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,o?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),o?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function jv(){return n.createElement(n.Fragment,null,n.createElement(vt,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(K,{className:"btn btn-dark",to:"/"},n.createElement(rn,{size:16})," Back home")))}var fs={exports:{}},gs,yd;function Bv(){if(yd)return gs;yd=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gs=i,gs}var vs,Ed;function Hv(){if(Ed)return vs;Ed=1;var i=Bv();function o(){}function s(){}return s.resetWarningCache=o,vs=function(){function u(f,g,h,v,y,E){if(E!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}u.isRequired=u;function p(){return u}var m={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:p,element:u,elementType:u,instanceOf:p,node:u,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:s,resetWarningCache:o};return m.PropTypes=m,m},vs}var bd;function Uv(){return bd||(bd=1,fs.exports=Hv()()),fs.exports}var Vv=Uv();const Me=ir(Vv);var xs,wd;function $v(){if(wd)return xs;wd=1;function i(g){return g&&typeof g=="object"&&"default"in g?g.default:g}var o=Hs(),s=i(o);function u(g,h,v){return h in g?Object.defineProperty(g,h,{value:v,enumerable:!0,configurable:!0,writable:!0}):g[h]=v,g}function p(g,h){g.prototype=Object.create(h.prototype),g.prototype.constructor=g,g.__proto__=h}var m=!!(typeof window<"u"&&window.document&&window.document.createElement);function f(g,h,v){if(typeof g!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof h!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof v<"u"&&typeof v!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function y(E){return E.displayName||E.name||"Component"}return function(S){if(typeof S!="function")throw new Error("Expected WrappedComponent to be a React component.");var O=[],I;function R(){I=g(O.map(function(D){return D.props})),z.canUseDOM?h(I):v&&(I=v(I))}var z=(function(D){p(U,D);function U(){return D.apply(this,arguments)||this}U.peek=function(){return I},U.rewind=function(){if(U.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var ee=I;return I=void 0,O=[],ee};var P=U.prototype;return P.UNSAFE_componentWillMount=function(){O.push(this),R()},P.componentDidUpdate=function(){R()},P.componentWillUnmount=function(){var ee=O.indexOf(this);O.splice(ee,1),R()},P.render=function(){return s.createElement(S,this.props)},U})(o.PureComponent);return u(z,"displayName","SideEffect("+y(S)+")"),u(z,"canUseDOM",m),z}}return xs=f,xs}var Yv=$v();const Wv=ir(Yv);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ys,kd;function qv(){if(kd)return ys;kd=1;var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function u(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function p(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var f={},g=0;g<10;g++)f["_"+String.fromCharCode(g)]=g;var h=Object.getOwnPropertyNames(f).map(function(y){return f[y]});if(h.join("")!=="0123456789")return!1;var v={};return"abcdefghijklmnopqrst".split("").forEach(function(y){v[y]=y}),Object.keys(Object.assign({},v)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return ys=p()?Object.assign:function(m,f){for(var g,h=u(m),v,y=1;y<arguments.length;y++){g=Object(arguments[y]);for(var E in g)o.call(g,E)&&(h[E]=g[E]);if(i){v=i(g);for(var S=0;S<v.length;S++)s.call(g,v[S])&&(h[v[S]]=g[v[S]])}}return h},ys}var Gv=qv();const Qv=ir(Gv);var or={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},xe={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(xe).map(function(i){return xe[i]});var _e={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},ii={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ba={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Kv=Object.keys(ii).reduce(function(i,o){return i[ii[o]]=o,i},{}),Xv=[xe.NOSCRIPT,xe.SCRIPT,xe.STYLE],Qt="data-react-helmet",Zv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Jv=function(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")},ex=(function(){function i(o,s){for(var u=0;u<s.length;u++){var p=s[u];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(o,p.key,p)}}return function(o,s,u){return s&&i(o.prototype,s),u&&i(o,u),o}})(),Nt=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(i[u]=s[u])}return i},tx=function(i,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);i.prototype=Object.create(o&&o.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(i,o):i.__proto__=o)},Nd=function(i,o){var s={};for(var u in i)o.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(i,u)&&(s[u]=i[u]);return s},nx=function(i,o){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:i},_s=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},rx=function(o){var s=Br(o,xe.TITLE),u=Br(o,Ba.TITLE_TEMPLATE);if(u&&s)return u.replace(/%s/g,function(){return Array.isArray(s)?s.join(""):s});var p=Br(o,Ba.DEFAULT_TITLE);return s||p||void 0},ax=function(o){return Br(o,Ba.ON_CHANGE_CLIENT_STATE)||function(){}},Es=function(o,s){return s.filter(function(u){return typeof u[o]<"u"}).map(function(u){return u[o]}).reduce(function(u,p){return Nt({},u,p)},{})},ox=function(o,s){return s.filter(function(u){return typeof u[xe.BASE]<"u"}).map(function(u){return u[xe.BASE]}).reverse().reduce(function(u,p){if(!u.length)for(var m=Object.keys(p),f=0;f<m.length;f++){var g=m[f],h=g.toLowerCase();if(o.indexOf(h)!==-1&&p[h])return u.concat(p)}return u},[])},Ia=function(o,s,u){var p={};return u.filter(function(m){return Array.isArray(m[o])?!0:(typeof m[o]<"u"&&cx("Helmet: "+o+' should be of type "Array". Instead found type "'+Zv(m[o])+'"'),!1)}).map(function(m){return m[o]}).reverse().reduce(function(m,f){var g={};f.filter(function(S){for(var O=void 0,I=Object.keys(S),R=0;R<I.length;R++){var z=I[R],D=z.toLowerCase();s.indexOf(D)!==-1&&!(O===_e.REL&&S[O].toLowerCase()==="canonical")&&!(D===_e.REL&&S[D].toLowerCase()==="stylesheet")&&(O=D),s.indexOf(z)!==-1&&(z===_e.INNER_HTML||z===_e.CSS_TEXT||z===_e.ITEM_PROP)&&(O=z)}if(!O||!S[O])return!1;var U=S[O].toLowerCase();return p[O]||(p[O]={}),g[O]||(g[O]={}),p[O][U]?!1:(g[O][U]=!0,!0)}).reverse().forEach(function(S){return m.push(S)});for(var h=Object.keys(g),v=0;v<h.length;v++){var y=h[v],E=Qv({},p[y],g[y]);p[y]=E}return m},[]).reverse()},Br=function(o,s){for(var u=o.length-1;u>=0;u--){var p=o[u];if(p.hasOwnProperty(s))return p[s]}return null},ix=function(o){return{baseTag:ox([_e.HREF,_e.TARGET],o),bodyAttributes:Es(or.BODY,o),defer:Br(o,Ba.DEFER),encode:Br(o,Ba.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Es(or.HTML,o),linkTags:Ia(xe.LINK,[_e.REL,_e.HREF],o),metaTags:Ia(xe.META,[_e.NAME,_e.CHARSET,_e.HTTPEQUIV,_e.PROPERTY,_e.ITEM_PROP],o),noscriptTags:Ia(xe.NOSCRIPT,[_e.INNER_HTML],o),onChangeClientState:ax(o),scriptTags:Ia(xe.SCRIPT,[_e.SRC,_e.INNER_HTML],o),styleTags:Ia(xe.STYLE,[_e.CSS_TEXT],o),title:rx(o),titleAttributes:Es(or.TITLE,o)}},js=(function(){var i=Date.now();return function(o){var s=Date.now();s-i>16?(i=s,o(s)):setTimeout(function(){js(o)},0)}})(),zd=function(o){return clearTimeout(o)},lx=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||js:global.requestAnimationFrame||js,sx=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||zd:global.cancelAnimationFrame||zd,cx=function(o){return console&&typeof console.warn=="function"&&console.warn(o)},Da=null,ux=function(o){Da&&sx(Da),o.defer?Da=lx(function(){Sd(o,function(){Da=null})}):(Sd(o),Da=null)},Sd=function(o,s){var u=o.baseTag,p=o.bodyAttributes,m=o.htmlAttributes,f=o.linkTags,g=o.metaTags,h=o.noscriptTags,v=o.onChangeClientState,y=o.scriptTags,E=o.styleTags,S=o.title,O=o.titleAttributes;Bs(xe.BODY,p),Bs(xe.HTML,m),px(S,O);var I={baseTag:Fr(xe.BASE,u),linkTags:Fr(xe.LINK,f),metaTags:Fr(xe.META,g),noscriptTags:Fr(xe.NOSCRIPT,h),scriptTags:Fr(xe.SCRIPT,y),styleTags:Fr(xe.STYLE,E)},R={},z={};Object.keys(I).forEach(function(D){var U=I[D],P=U.newTags,W=U.oldTags;P.length&&(R[D]=P),W.length&&(z[D]=I[D].oldTags)}),s&&s(),v(o,R,z)},am=function(o){return Array.isArray(o)?o.join(""):o},px=function(o,s){typeof o<"u"&&document.title!==o&&(document.title=am(o)),Bs(xe.TITLE,s)},Bs=function(o,s){var u=document.getElementsByTagName(o)[0];if(u){for(var p=u.getAttribute(Qt),m=p?p.split(","):[],f=[].concat(m),g=Object.keys(s),h=0;h<g.length;h++){var v=g[h],y=s[v]||"";u.getAttribute(v)!==y&&u.setAttribute(v,y),m.indexOf(v)===-1&&m.push(v);var E=f.indexOf(v);E!==-1&&f.splice(E,1)}for(var S=f.length-1;S>=0;S--)u.removeAttribute(f[S]);m.length===f.length?u.removeAttribute(Qt):u.getAttribute(Qt)!==g.join(",")&&u.setAttribute(Qt,g.join(","))}},Fr=function(o,s){var u=document.head||document.querySelector(xe.HEAD),p=u.querySelectorAll(o+"["+Qt+"]"),m=Array.prototype.slice.call(p),f=[],g=void 0;return s&&s.length&&s.forEach(function(h){var v=document.createElement(o);for(var y in h)if(h.hasOwnProperty(y))if(y===_e.INNER_HTML)v.innerHTML=h.innerHTML;else if(y===_e.CSS_TEXT)v.styleSheet?v.styleSheet.cssText=h.cssText:v.appendChild(document.createTextNode(h.cssText));else{var E=typeof h[y]>"u"?"":h[y];v.setAttribute(y,E)}v.setAttribute(Qt,"true"),m.some(function(S,O){return g=O,v.isEqualNode(S)})?m.splice(g,1):f.push(v)}),m.forEach(function(h){return h.parentNode.removeChild(h)}),f.forEach(function(h){return u.appendChild(h)}),{oldTags:m,newTags:f}},om=function(o){return Object.keys(o).reduce(function(s,u){var p=typeof o[u]<"u"?u+'="'+o[u]+'"':""+u;return s?s+" "+p:p},"")},dx=function(o,s,u,p){var m=om(u),f=am(s);return m?"<"+o+" "+Qt+'="true" '+m+">"+_s(f,p)+"</"+o+">":"<"+o+" "+Qt+'="true">'+_s(f,p)+"</"+o+">"},mx=function(o,s,u){return s.reduce(function(p,m){var f=Object.keys(m).filter(function(v){return!(v===_e.INNER_HTML||v===_e.CSS_TEXT)}).reduce(function(v,y){var E=typeof m[y]>"u"?y:y+'="'+_s(m[y],u)+'"';return v?v+" "+E:E},""),g=m.innerHTML||m.cssText||"",h=Xv.indexOf(o)===-1;return p+"<"+o+" "+Qt+'="true" '+f+(h?"/>":">"+g+"</"+o+">")},"")},im=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(o).reduce(function(u,p){return u[ii[p]||p]=o[p],u},s)},hx=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(o).reduce(function(u,p){return u[Kv[p]||p]=o[p],u},s)},fx=function(o,s,u){var p,m=(p={key:s},p[Qt]=!0,p),f=im(u,m);return[n.createElement(xe.TITLE,f,s)]},gx=function(o,s){return s.map(function(u,p){var m,f=(m={key:p},m[Qt]=!0,m);return Object.keys(u).forEach(function(g){var h=ii[g]||g;if(h===_e.INNER_HTML||h===_e.CSS_TEXT){var v=u.innerHTML||u.cssText;f.dangerouslySetInnerHTML={__html:v}}else f[h]=u[g]}),n.createElement(o,f)})},vn=function(o,s,u){switch(o){case xe.TITLE:return{toComponent:function(){return fx(o,s.title,s.titleAttributes)},toString:function(){return dx(o,s.title,s.titleAttributes,u)}};case or.BODY:case or.HTML:return{toComponent:function(){return im(s)},toString:function(){return om(s)}};default:return{toComponent:function(){return gx(o,s)},toString:function(){return mx(o,s,u)}}}},lm=function(o){var s=o.baseTag,u=o.bodyAttributes,p=o.encode,m=o.htmlAttributes,f=o.linkTags,g=o.metaTags,h=o.noscriptTags,v=o.scriptTags,y=o.styleTags,E=o.title,S=E===void 0?"":E,O=o.titleAttributes;return{base:vn(xe.BASE,s,p),bodyAttributes:vn(or.BODY,u,p),htmlAttributes:vn(or.HTML,m,p),link:vn(xe.LINK,f,p),meta:vn(xe.META,g,p),noscript:vn(xe.NOSCRIPT,h,p),script:vn(xe.SCRIPT,v,p),style:vn(xe.STYLE,y,p),title:vn(xe.TITLE,{title:S,titleAttributes:O},p)}},vx=function(o){var s,u;return u=s=(function(p){tx(m,p);function m(){return Jv(this,m),nx(this,p.apply(this,arguments))}return m.prototype.shouldComponentUpdate=function(g){return!Bd(this.props,g)},m.prototype.mapNestedChildrenToProps=function(g,h){if(!h)return null;switch(g.type){case xe.SCRIPT:case xe.NOSCRIPT:return{innerHTML:h};case xe.STYLE:return{cssText:h}}throw new Error("<"+g.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},m.prototype.flattenArrayTypeChildren=function(g){var h,v=g.child,y=g.arrayTypeChildren,E=g.newChildProps,S=g.nestedChildren;return Nt({},y,(h={},h[v.type]=[].concat(y[v.type]||[],[Nt({},E,this.mapNestedChildrenToProps(v,S))]),h))},m.prototype.mapObjectTypeChildren=function(g){var h,v,y=g.child,E=g.newProps,S=g.newChildProps,O=g.nestedChildren;switch(y.type){case xe.TITLE:return Nt({},E,(h={},h[y.type]=O,h.titleAttributes=Nt({},S),h));case xe.BODY:return Nt({},E,{bodyAttributes:Nt({},S)});case xe.HTML:return Nt({},E,{htmlAttributes:Nt({},S)})}return Nt({},E,(v={},v[y.type]=Nt({},S),v))},m.prototype.mapArrayTypeChildrenToProps=function(g,h){var v=Nt({},h);return Object.keys(g).forEach(function(y){var E;v=Nt({},v,(E={},E[y]=g[y],E))}),v},m.prototype.warnOnInvalidChildren=function(g,h){return!0},m.prototype.mapChildrenToProps=function(g,h){var v=this,y={};return n.Children.forEach(g,function(E){if(!(!E||!E.props)){var S=E.props,O=S.children,I=Nd(S,["children"]),R=hx(I);switch(v.warnOnInvalidChildren(E,O),E.type){case xe.LINK:case xe.META:case xe.NOSCRIPT:case xe.SCRIPT:case xe.STYLE:y=v.flattenArrayTypeChildren({child:E,arrayTypeChildren:y,newChildProps:R,nestedChildren:O});break;default:h=v.mapObjectTypeChildren({child:E,newProps:h,newChildProps:R,nestedChildren:O});break}}}),h=this.mapArrayTypeChildrenToProps(y,h),h},m.prototype.render=function(){var g=this.props,h=g.children,v=Nd(g,["children"]),y=Nt({},v);return h&&(y=this.mapChildrenToProps(h,y)),n.createElement(o,y)},ex(m,null,[{key:"canUseDOM",set:function(g){o.canUseDOM=g}}]),m})(n.Component),s.propTypes={base:Me.object,bodyAttributes:Me.object,children:Me.oneOfType([Me.arrayOf(Me.node),Me.node]),defaultTitle:Me.string,defer:Me.bool,encodeSpecialCharacters:Me.bool,htmlAttributes:Me.object,link:Me.arrayOf(Me.object),meta:Me.arrayOf(Me.object),noscript:Me.arrayOf(Me.object),onChangeClientState:Me.func,script:Me.arrayOf(Me.object),style:Me.arrayOf(Me.object),title:Me.string,titleAttributes:Me.object,titleTemplate:Me.string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=o.peek,s.rewind=function(){var p=o.rewind();return p||(p=lm({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),p},u},xx=function(){return null},yx=Wv(ix,ux,lm)(xx),li=vx(yx);li.renderStatic=li.rewind;const Ex=()=>{var U;const[i,o]=b.useState([]),[s,u]=b.useState(!0),[p,m]=b.useState(""),[f,g]=b.useState("All"),[h,v]=b.useState(1),[y,E]=b.useState(1),S=9,O=async()=>{try{u(!0);const P=await Te.blogs({page:h,limit:S}),W=P.blogs.filter(ee=>ee.status==="published");o(W),E(P.totalPages||1)}catch(P){console.error("Blog fetch error:",P),o([]),E(1)}finally{u(!1)}};b.useEffect(()=>{O()},[h]);const I=b.useMemo(()=>["All",...new Set(i.map(P=>P.category).filter(Boolean))],[i]),R=b.useMemo(()=>i.filter(P=>{var ge,V,oe,M;const W=p.toLowerCase().trim(),ee=!W||((ge=P.title)==null?void 0:ge.toLowerCase().includes(W))||((V=P.excerpt)==null?void 0:V.toLowerCase().includes(W))||((oe=P.category)==null?void 0:oe.toLowerCase().includes(W))||((M=P.tags)==null?void 0:M.some(se=>String(se).toLowerCase().includes(W))),ie=f==="All"||P.category===f;return ee&&ie}),[i,p,f]),z=i.find(P=>P.isFeatured),D=P=>{m(P)};return n.createElement(n.Fragment,null,n.createElement(li,null,n.createElement("title",null,"Skincare & Beauty Blogs | HOVIRA Cosmetics"),n.createElement("meta",{name:"description",content:"Explore skincare tips, beauty routines, ingredient guides and expert advice from HOVIRA Cosmetics. Discover helpful tips for healthy-looking, glowing skin."}),n.createElement("meta",{name:"keywords",content:"skincare blog, beauty tips, skincare routine, glowing skin tips, skincare ingredients, HOVIRA Cosmetics"}),n.createElement("link",{rel:"canonical",href:"https://hoviraskincare.com/blog"}),n.createElement("meta",{name:"robots",content:"index, follow"}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:title",content:"Skincare & Beauty Blogs | HOVIRA Cosmetics"}),n.createElement("meta",{property:"og:description",content:"Explore skincare tips, beauty routines and skincare guides with HOVIRA Cosmetics."}),n.createElement("meta",{property:"og:url",content:"https://hoviraskincare.com/blog"}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.createElement("main",{className:"hv-blog-page"},n.createElement("section",{className:"hv-blog-hero"},n.createElement("div",{className:"hv-blog-hero-content"},n.createElement("span",{className:"hv-eyebrow"},"THE HOVIRA JOURNAL"),n.createElement("h1",null,"Discover Your",n.createElement("span",null," Natural Glow")),n.createElement("p",null,"Explore skincare knowledge, beauty rituals and expert-inspired tips to help you care for your skin every day."),n.createElement("a",{href:"#all-blogs",className:"hv-primary-btn"},"Explore Articles")),n.createElement("div",{className:"hv-blog-hero-decoration"},n.createElement("div",{className:"hv-hero-circle"},n.createElement("span",null,"Beauty"),n.createElement("strong",null,"Begins",n.createElement("br",null),"With Care"),n.createElement("small",null,"HOVIRA COSMETICS")))),z&&n.createElement("section",{className:"hv-featured-section"},n.createElement("div",{className:"hv-section-heading"},n.createElement("span",{className:"hv-eyebrow"},"EDITOR'S PICK"),n.createElement("h2",null,"Featured Article")),n.createElement(K,{to:`/blog/${z.slug}`,className:"hv-featured-card"},n.createElement("div",{className:"hv-featured-image"},((U=z.featuredImage)==null?void 0:U.url)&&n.createElement("img",{src:z.featuredImage.url,alt:z.featuredImage.alt||z.title})),n.createElement("div",{className:"hv-featured-content"},n.createElement("span",{className:"hv-category"},z.category||"Skincare"),n.createElement("h2",null,z.title),n.createElement("p",null,z.excerpt),n.createElement("div",{className:"hv-blog-meta"},n.createElement("span",null,z.author||"HOVIRA Beauty Team"),n.createElement("span",null,Rs(z.publishedAt))),n.createElement("span",{className:"hv-read-link"},"Read Article →")))),n.createElement("section",{className:"hv-all-blogs",id:"all-blogs"},n.createElement("div",{className:"hv-section-heading"},n.createElement("span",{className:"hv-eyebrow"},"BEAUTY & SKINCARE"),n.createElement("h2",null,"Explore Our Latest Blogs"),n.createElement("p",null,"Knowledge, inspiration and care for your skin.")),n.createElement("div",{className:"hv-blog-toolbar"},n.createElement("div",{className:"hv-blog-search"},n.createElement("span",null,"⌕"),n.createElement("input",{type:"search",placeholder:"Search skincare articles...",value:p,onChange:P=>D(P.target.value)})),n.createElement("div",{className:"hv-category-list"},I.map(P=>n.createElement("button",{key:P,type:"button",className:f===P?"active":"",onClick:()=>g(P)},P)))),s?n.createElement("div",{className:"hv-blog-loading"},n.createElement("div",{className:"hv-spinner"}),n.createElement("p",null,"Discovering beauty stories...")):R.length===0?n.createElement("div",{className:"hv-no-blogs"},n.createElement("h3",null,"No articles found"),n.createElement("p",null,"Try another search or category.")):n.createElement("div",{className:"hv-blog-grid"},R.map(P=>{var W;return n.createElement("article",{className:"hv-blog-card",key:P._id},n.createElement(K,{to:`/blog/${P.slug}`,className:"hv-blog-card-image"},((W=P.featuredImage)==null?void 0:W.url)&&n.createElement("img",{src:P.featuredImage.url,alt:P.featuredImage.alt||P.title,loading:"lazy"}),n.createElement("span",{className:"hv-image-category"},P.category||"Beauty")),n.createElement("div",{className:"hv-blog-card-content"},n.createElement("div",{className:"hv-card-date"},Rs(P.publishedAt),n.createElement("span",null,"•"),P.readTime||3," min read"),n.createElement("h3",null,n.createElement(K,{to:`/blog/${P.slug}`},P.title)),n.createElement("p",null,P.excerpt),n.createElement(K,{to:`/blog/${P.slug}`,className:"hv-card-read"},"Read More ",n.createElement("span",null,"↗"))))})),!s&&y>1&&n.createElement("div",{className:"hv-pagination"},n.createElement("button",{disabled:h===1,onClick:()=>v(P=>P-1)},"← Previous"),n.createElement("span",null,h," / ",y),n.createElement("button",{disabled:h===y,onClick:()=>v(P=>P+1)},"Next →"))),n.createElement("section",{className:"hv-blog-newsletter"},n.createElement("span",{className:"hv-eyebrow"},"A LITTLE SELF-CARE"),n.createElement("h2",null,"Make Your Skin a Priority"),n.createElement("p",null,"Discover simple skincare habits and beauty insights that make everyday care feel special."),n.createElement(K,{to:"/shop",className:"hv-primary-btn"},"Explore HOVIRA"))))},bx=()=>{var ee,ie,ge;const{slug:i}=$s(),[o,s]=b.useState(null),[u,p]=b.useState([]),[m,f]=b.useState(!0),[g,h]=b.useState("");if(b.useEffect(()=>{let V=!0;return i&&(async()=>{try{f(!0),h(""),s(null),p([]);const M=await Te.blog(i);if(!M||!M.title||M.status!=="published")throw new Error("Blog not found");if(!V)return;s(M);const se=await Te.blogs({page:1,limit:20});if(!V)return;const ze=se.blogs.filter(Ee=>Ee.slug!==M.slug&&Ee.status==="published").slice(0,3);p(ze)}catch(M){console.error("Blog detail error:",M),V&&h(M.message||"Unable to load this article.")}finally{V&&f(!1)}})(),window.scrollTo({top:0,behavior:"smooth"}),()=>{V=!1}},[i]),m)return n.createElement(n.Fragment,null,n.createElement(Ls,null),n.createElement("div",{className:"hv-blog-loading hv-detail-loading"},n.createElement("div",{className:"hv-spinner"}),n.createElement("p",null,"Loading article...")),n.createElement(Ms,null));if(g||!o)return n.createElement(n.Fragment,null,n.createElement(Ls,null),n.createElement("div",{className:"hv-blog-error"},n.createElement("h2",null,"Article Not Found"),n.createElement("p",null,g||"This article may have been removed."),n.createElement(K,{to:"/blog",className:"hv-primary-btn"},"Back to Blogs")),n.createElement(Ms,null));const v="https://hoviraskincare.com",y=`${v}/blog/${o.slug}`,E=((ee=o.featuredImage)==null?void 0:ee.url)||"",S=o.metaTitle||`${o.title} | HOVIRA Cosmetics`,O=o.metaDescription||o.excerpt||`Explore ${o.title} with HOVIRA Cosmetics. Discover skincare tips and beauty insights.`,I=Array.isArray(o.keywords)?o.keywords.join(", "):o.keywords||"",R=o.ogTitle||S,z=o.ogDescription||O,D=o.ogImage||E,U={"@context":"https://schema.org","@type":"BlogPosting",headline:o.title,description:O,image:E?[E]:[],datePublished:o.publishedAt||o.createdAt,dateModified:o.updatedAt||o.publishedAt||o.createdAt,author:{"@type":"Organization",name:o.author||"HOVIRA Cosmetics"},publisher:{"@type":"Organization",name:"HOVIRA Cosmetics",url:v},mainEntityOfPage:{"@type":"WebPage","@id":y}},P=Array.isArray(o.faqs)?o.faqs.filter(V=>{var oe,M;return((oe=V.question)==null?void 0:oe.trim())&&((M=V.answer)==null?void 0:M.trim())}):[],W=P.length>0?{"@context":"https://schema.org","@type":"FAQPage",mainEntity:P.map(V=>({"@type":"Question",name:V.question,acceptedAnswer:{"@type":"Answer",text:V.answer}}))}:null;return n.createElement(n.Fragment,null,n.createElement(li,null,n.createElement("title",null,S),n.createElement("meta",{name:"description",content:O}),I&&n.createElement("meta",{name:"keywords",content:I}),n.createElement("link",{rel:"canonical",href:o.canonicalUrl||y}),n.createElement("meta",{name:"robots",content:o.noIndex?"noindex, nofollow":"index, follow"}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"og:title",content:R}),n.createElement("meta",{property:"og:description",content:z}),n.createElement("meta",{property:"og:url",content:y}),D&&n.createElement("meta",{property:"og:image",content:D}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:R}),n.createElement("meta",{name:"twitter:description",content:z}),D&&n.createElement("meta",{name:"twitter:image",content:D}),n.createElement("script",{type:"application/ld+json"},JSON.stringify(U)),W&&n.createElement("script",{type:"application/ld+json"},JSON.stringify(W))),n.createElement("main",{className:"hv-detail-page"},n.createElement("div",{className:"hv-detail-container"},n.createElement("div",{className:"hv-breadcrumb"},n.createElement(K,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement(K,{to:"/blog"},"Blog"),n.createElement("span",null,"/"),n.createElement("span",null,o.category||"Article")),n.createElement("header",{className:"hv-detail-header"},n.createElement("span",{className:"hv-category"},o.category||"Skincare"),n.createElement("h1",null,o.title),n.createElement("p",{className:"hv-detail-excerpt"},o.excerpt),n.createElement("div",{className:"hv-detail-meta"},n.createElement("span",null,"By ",o.author||"HOVIRA Beauty Team"),n.createElement("span",null,Rs(o.publishedAt)),n.createElement("span",null,o.readTime||3," min read"))),E&&n.createElement("div",{className:"hv-detail-cover"},n.createElement("img",{src:E,alt:((ie=o.featuredImage)==null?void 0:ie.alt)||o.title,fetchPriority:"high"})),n.createElement("div",{className:"hv-detail-layout"},n.createElement("article",{className:"hv-article-content"},n.createElement("div",{className:"hv-article-html",dangerouslySetInnerHTML:{__html:o.content||""}}),((ge=o.tags)==null?void 0:ge.length)>0&&n.createElement("div",{className:"hv-detail-tags"},n.createElement("strong",null,"Tags:"),o.tags.map((V,oe)=>n.createElement("span",{key:oe},V))),n.createElement("div",{className:"hv-article-bottom"},n.createElement("h3",null,"Love Your Skin. Celebrate Your Beauty."),n.createElement("p",null,"Explore more skincare inspiration and beauty essentials with HOVIRA Cosmetics."),n.createElement(K,{to:"/shop",className:"hv-primary-btn"},"Explore Products"))),n.createElement("aside",{className:"hv-detail-sidebar"},n.createElement("div",{className:"hv-sidebar-card"},n.createElement("span",{className:"hv-eyebrow"},"HOVIRA JOURNAL"),n.createElement("h3",null,"Beauty Begins With Care"),n.createElement("p",null,"Find skincare inspiration, simple routines and beauty knowledge."),n.createElement(K,{to:"/blog"},"Explore All Blogs →")),u.length>0&&n.createElement("div",{className:"hv-sidebar-card"},n.createElement("h3",null,"More to Explore"),u.map(V=>{var oe;return n.createElement(K,{key:V._id,to:`/blog/${V.slug}`,className:"hv-sidebar-blog"},((oe=V.featuredImage)==null?void 0:oe.url)&&n.createElement("img",{src:V.featuredImage.url,alt:V.featuredImage.alt||V.title,loading:"lazy"}),n.createElement("span",null,V.title))})))),P.length>0&&n.createElement("section",{className:"hv-detail-faq"},n.createElement("span",{className:"hv-eyebrow"},"COMMON QUESTIONS"),n.createElement("h2",null,"Frequently Asked Questions"),n.createElement("div",{className:"hv-faq-list"},P.map((V,oe)=>n.createElement("details",{key:oe,className:"hv-faq-item"},n.createElement("summary",null,V.question),n.createElement("p",null,V.answer))))),n.createElement("div",{className:"hv-back-blogs"},n.createElement(K,{to:"/blog"},"← Back to All Blogs")))))};function ei({children:i}){const{customer:o,authReady:s}=Kt();return s?o?i:n.createElement(rg,{to:"/login",replace:!0}):n.createElement(wn,{label:"Checking your account..."})}function wx(){const{appReady:i,appError:o,retryInitialLoad:s}=Kt();return i?n.createElement(ig,null,n.createElement(Ge,{element:n.createElement(Ev,null)},n.createElement(Ge,{index:!0,element:n.createElement(wv,null)}),n.createElement(Ge,{path:"shop",element:n.createElement(Sv,null)}),n.createElement(Ge,{path:"product/:slugOrId",element:n.createElement(Cv,null)}),n.createElement(Ge,{path:"login",element:n.createElement(Tv,null)}),n.createElement(Ge,{path:"signup",element:n.createElement(fd,null)}),n.createElement(Ge,{path:"register",element:n.createElement(fd,null)}),n.createElement(Ge,{path:"cart",element:n.createElement(Av,null)}),n.createElement(Ge,{path:"wishlist",element:n.createElement(Ov,null)}),n.createElement(Ge,{path:"/blog",element:n.createElement(Ex,null)}),n.createElement(Ge,{path:"/blog/:slug",element:n.createElement(bx,null)}),n.createElement(Ge,{path:"checkout",element:n.createElement(ei,null,n.createElement(Iv,null))}),n.createElement(Ge,{path:"account",element:n.createElement(ei,null,n.createElement(Dv,null))}),n.createElement(Ge,{path:"orders",element:n.createElement(ei,null,n.createElement(Fv,null))}),n.createElement(Ge,{path:"orders/:id",element:n.createElement(ei,null,n.createElement(Mv,null))}),n.createElement(Ge,{path:"about",element:n.createElement(_v,null)}),n.createElement(Ge,{path:"privacy",element:n.createElement(xd,{type:"privacy"})}),n.createElement(Ge,{path:"terms",element:n.createElement(xd,{type:"terms"})}),n.createElement(Ge,{path:"*",element:n.createElement(jv,null)}))):o?n.createElement("div",{className:"page-shell"},n.createElement("div",{className:"loading-error"},n.createElement("h2",null,"Unable to load HOVIRA"),n.createElement("p",null,o),n.createElement("button",{onClick:s},"Try Again"))):n.createElement(wn,{label:"Preparing your HOVIRA experience..."})}function kx(){const{pathname:i}=ln();return b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[i]),null}hf.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(qd,null,n.createElement(fg,null,n.createElement(kx,null),n.createElement(Gg,null,n.createElement(wx,null))))));
