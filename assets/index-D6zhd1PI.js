var yh=Object.defineProperty;var Eh=(o,s,c)=>s in o?yh(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c;var un=(o,s,c)=>Eh(o,typeof s!="symbol"?s+"":s,c);function wh(o,s){for(var c=0;c<s.length;c++){const p=s[c];if(typeof p!="string"&&!Array.isArray(p)){for(const d in p)if(d!=="default"&&!(d in o)){const m=Object.getOwnPropertyDescriptor(p,d);m&&Object.defineProperty(o,d,m.get?m:{enumerable:!0,get:()=>p[d]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))p(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function Go(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ul={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function bh(){if(cp)return we;cp=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,T={};function A(b,O,de){this.props=b,this.context=O,this.refs=T,this.updater=de||L}A.prototype.isReactComponent={},A.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},A.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function V(){}V.prototype=A.prototype;function W(b,O,de){this.props=b,this.context=O,this.refs=T,this.updater=de||L}var Z=W.prototype=new V;Z.constructor=W,B(Z,A.prototype),Z.isPureReactComponent=!0;var q=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},xe={key:!0,ref:!0,__self:!0,__source:!0};function J(b,O,de){var ge,be={},_=null,ee=null;if(O!=null)for(ge in O.ref!==void 0&&(ee=O.ref),O.key!==void 0&&(_=""+O.key),O)ie.call(O,ge)&&!xe.hasOwnProperty(ge)&&(be[ge]=O[ge]);var Q=arguments.length-2;if(Q===1)be.children=de;else if(1<Q){for(var me=Array(Q),Ce=0;Ce<Q;Ce++)me[Ce]=arguments[Ce+2];be.children=me}if(b&&b.defaultProps)for(ge in Q=b.defaultProps,Q)be[ge]===void 0&&(be[ge]=Q[ge]);return{$$typeof:o,type:b,key:_,ref:ee,props:be,_owner:se.current}}function he(b,O){return{$$typeof:o,type:b.type,key:O,ref:b.ref,props:b.props,_owner:b._owner}}function U(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function ce(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(de){return O[de]})}var Ne=/\/+/g;function Ee(b,O){return typeof b=="object"&&b!==null&&b.key!=null?ce(""+b.key):O.toString(36)}function Re(b,O,de,ge,be){var _=typeof b;(_==="undefined"||_==="boolean")&&(b=null);var ee=!1;if(b===null)ee=!0;else switch(_){case"string":case"number":ee=!0;break;case"object":switch(b.$$typeof){case o:case s:ee=!0}}if(ee)return ee=b,be=be(ee),b=ge===""?"."+Ee(ee,0):ge,q(be)?(de="",b!=null&&(de=b.replace(Ne,"$&/")+"/"),Re(be,O,de,"",function(Ce){return Ce})):be!=null&&(U(be)&&(be=he(be,de+(!be.key||ee&&ee.key===be.key?"":(""+be.key).replace(Ne,"$&/")+"/")+b)),O.push(be)),1;if(ee=0,ge=ge===""?".":ge+":",q(b))for(var Q=0;Q<b.length;Q++){_=b[Q];var me=ge+Ee(_,Q);ee+=Re(_,O,de,me,be)}else if(me=R(b),typeof me=="function")for(b=me.call(b),Q=0;!(_=b.next()).done;)_=_.value,me=ge+Ee(_,Q++),ee+=Re(_,O,de,me,be);else if(_==="object")throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ee}function H(b,O,de){if(b==null)return b;var ge=[],be=0;return Re(b,ge,"","",function(_){return O.call(de,_,be++)}),ge}function ve(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(de){(b._status===0||b._status===-1)&&(b._status=1,b._result=de)},function(de){(b._status===0||b._status===-1)&&(b._status=2,b._result=de)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var G={current:null},F={transition:null},P={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:F,ReactCurrentOwner:se};function I(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:H,forEach:function(b,O,de){H(b,function(){O.apply(this,arguments)},de)},count:function(b){var O=0;return H(b,function(){O++}),O},toArray:function(b){return H(b,function(O){return O})||[]},only:function(b){if(!U(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},we.Component=A,we.Fragment=c,we.Profiler=d,we.PureComponent=W,we.StrictMode=p,we.Suspense=g,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,we.act=I,we.cloneElement=function(b,O,de){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ge=B({},b.props),be=b.key,_=b.ref,ee=b._owner;if(O!=null){if(O.ref!==void 0&&(_=O.ref,ee=se.current),O.key!==void 0&&(be=""+O.key),b.type&&b.type.defaultProps)var Q=b.type.defaultProps;for(me in O)ie.call(O,me)&&!xe.hasOwnProperty(me)&&(ge[me]=O[me]===void 0&&Q!==void 0?Q[me]:O[me])}var me=arguments.length-2;if(me===1)ge.children=de;else if(1<me){Q=Array(me);for(var Ce=0;Ce<me;Ce++)Q[Ce]=arguments[Ce+2];ge.children=Q}return{$$typeof:o,type:b.type,key:be,ref:_,props:ge,_owner:ee}},we.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:m,_context:b},b.Consumer=b},we.createElement=J,we.createFactory=function(b){var O=J.bind(null,b);return O.type=b,O},we.createRef=function(){return{current:null}},we.forwardRef=function(b){return{$$typeof:v,render:b}},we.isValidElement=U,we.lazy=function(b){return{$$typeof:k,_payload:{_status:-1,_result:b},_init:ve}},we.memo=function(b,O){return{$$typeof:w,type:b,compare:O===void 0?null:O}},we.startTransition=function(b){var O=F.transition;F.transition={};try{b()}finally{F.transition=O}},we.unstable_act=I,we.useCallback=function(b,O){return G.current.useCallback(b,O)},we.useContext=function(b){return G.current.useContext(b)},we.useDebugValue=function(){},we.useDeferredValue=function(b){return G.current.useDeferredValue(b)},we.useEffect=function(b,O){return G.current.useEffect(b,O)},we.useId=function(){return G.current.useId()},we.useImperativeHandle=function(b,O,de){return G.current.useImperativeHandle(b,O,de)},we.useInsertionEffect=function(b,O){return G.current.useInsertionEffect(b,O)},we.useLayoutEffect=function(b,O){return G.current.useLayoutEffect(b,O)},we.useMemo=function(b,O){return G.current.useMemo(b,O)},we.useReducer=function(b,O,de){return G.current.useReducer(b,O,de)},we.useRef=function(b){return G.current.useRef(b)},we.useState=function(b){return G.current.useState(b)},we.useSyncExternalStore=function(b,O,de){return G.current.useSyncExternalStore(b,O,de)},we.useTransition=function(){return G.current.useTransition()},we.version="18.3.1",we}var up;function Yp(){return up||(up=1,Ul.exports=bh()),Ul.exports}var y=Yp();const n=Go(y),kh=wh({__proto__:null,default:n},[y]);var Mo={},Vl={exports:{}},Et={},$l={exports:{}},Yl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function zh(){return pp||(pp=1,(function(o){function s(F,P){var I=F.length;F.push(P);e:for(;0<I;){var b=I-1>>>1,O=F[b];if(0<d(O,P))F[b]=P,F[I]=O,I=b;else break e}}function c(F){return F.length===0?null:F[0]}function p(F){if(F.length===0)return null;var P=F[0],I=F.pop();if(I!==P){F[0]=I;e:for(var b=0,O=F.length,de=O>>>1;b<de;){var ge=2*(b+1)-1,be=F[ge],_=ge+1,ee=F[_];if(0>d(be,I))_<O&&0>d(ee,be)?(F[b]=ee,F[_]=I,b=_):(F[b]=be,F[ge]=I,b=ge);else if(_<O&&0>d(ee,I))F[b]=ee,F[_]=I,b=_;else break e}}return P}function d(F,P){var I=F.sortIndex-P.sortIndex;return I!==0?I:F.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,v=f.now();o.unstable_now=function(){return f.now()-v}}var g=[],w=[],k=1,z=null,R=3,L=!1,B=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(F){for(var P=c(w);P!==null;){if(P.callback===null)p(w);else if(P.startTime<=F)p(w),P.sortIndex=P.expirationTime,s(g,P);else break;P=c(w)}}function q(F){if(T=!1,Z(F),!B)if(c(g)!==null)B=!0,ve(ie);else{var P=c(w);P!==null&&G(q,P.startTime-F)}}function ie(F,P){B=!1,T&&(T=!1,V(J),J=-1),L=!0;var I=R;try{for(Z(P),z=c(g);z!==null&&(!(z.expirationTime>P)||F&&!ce());){var b=z.callback;if(typeof b=="function"){z.callback=null,R=z.priorityLevel;var O=b(z.expirationTime<=P);P=o.unstable_now(),typeof O=="function"?z.callback=O:z===c(g)&&p(g),Z(P)}else p(g);z=c(g)}if(z!==null)var de=!0;else{var ge=c(w);ge!==null&&G(q,ge.startTime-P),de=!1}return de}finally{z=null,R=I,L=!1}}var se=!1,xe=null,J=-1,he=5,U=-1;function ce(){return!(o.unstable_now()-U<he)}function Ne(){if(xe!==null){var F=o.unstable_now();U=F;var P=!0;try{P=xe(!0,F)}finally{P?Ee():(se=!1,xe=null)}}else se=!1}var Ee;if(typeof W=="function")Ee=function(){W(Ne)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,H=Re.port2;Re.port1.onmessage=Ne,Ee=function(){H.postMessage(null)}}else Ee=function(){A(Ne,0)};function ve(F){xe=F,se||(se=!0,Ee())}function G(F,P){J=A(function(){F(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_continueExecution=function(){B||L||(B=!0,ve(ie))},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_getFirstCallbackNode=function(){return c(g)},o.unstable_next=function(F){switch(R){case 1:case 2:case 3:var P=3;break;default:P=R}var I=R;R=P;try{return F()}finally{R=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(F,P){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var I=R;R=F;try{return P()}finally{R=I}},o.unstable_scheduleCallback=function(F,P,I){var b=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?b+I:b):I=b,F){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=I+O,F={id:k++,callback:P,priorityLevel:F,startTime:I,expirationTime:O,sortIndex:-1},I>b?(F.sortIndex=I,s(w,F),c(g)===null&&F===c(w)&&(T?(V(J),J=-1):T=!0,G(q,I-b))):(F.sortIndex=O,s(g,F),B||L||(B=!0,ve(ie))),F},o.unstable_shouldYield=ce,o.unstable_wrapCallback=function(F){var P=R;return function(){var I=R;R=P;try{return F.apply(this,arguments)}finally{R=I}}}})(Yl)),Yl}var dp;function Nh(){return dp||(dp=1,$l.exports=zh()),$l.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function Sh(){if(mp)return Et;mp=1;var o=Yp(),s=Nh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,d={};function m(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},z={};function R(e){return g.call(z,e)?!0:g.call(k,e)?!1:w.test(e)?z[e]=!0:(k[e]=!0,!1)}function L(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,r,a){if(t===null||typeof t>"u"||L(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,a,i,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(V,W);A[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(V,W);A[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(V,W);A[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,r,a){var i=A.hasOwnProperty(t)?A[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,r,i,a)&&(r=null),a||i===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var q=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),se=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ce=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),F=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,b;function O(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var de=!1;function ge(e,t){if(!e||de)return"";de=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var a=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){a=C}e.call(t.prototype)}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),l=a.stack.split(`
`),u=i.length-1,h=l.length-1;1<=u&&0<=h&&i[u]!==l[h];)h--;for(;1<=u&&0<=h;u--,h--)if(i[u]!==l[h]){if(u!==1||h!==1)do if(u--,h--,0>h||i[u]!==l[h]){var x=`
`+i[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=h);break}}}finally{de=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function be(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function _(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case se:return"Portal";case he:return"Profiler";case J:return"StrictMode";case Ee:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ce:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:_(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return _(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ce(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ke(e){e._valueTracker||(e._valueTracker=Ce(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=me(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function oe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Me(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function We(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Q(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jn(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function St(e,t){Jn(e,t);var r=Q(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?at(e,t.type,r):t.hasOwnProperty("defaultValue")&&at(e,t.type,Q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oe(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function at(e,t,r){(t!=="number"||oe(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Qe=Array.isArray;function ct(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Q(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function er(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(Qe(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Q(r)}}function Es(e,t){var r=Q(t.value),a=Q(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Aa,ks=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Aa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function zs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=zs(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var zd=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(e,t){if(t){if(zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ni=null;function ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,nr=null,rr=null;function Ss(e){if(e=oa(e)){if(typeof ai!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Xa(t),ai(e.stateNode,e.type,t))}}function Cs(e){nr?rr?rr.push(e):rr=[e]:nr=e}function As(){if(nr){var e=nr,t=rr;if(rr=nr=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function Ts(e,t){return e(t)}function Rs(){}var oi=!1;function Os(e,t,r){if(oi)return e(t,r);oi=!0;try{return Ts(e,t,r)}finally{oi=!1,(nr!==null||rr!==null)&&(Rs(),As())}}function _r(e,t){var r=e.stateNode;if(r===null)return null;var a=Xa(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var ii=!1;if(v)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){ii=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{ii=!1}function Nd(e,t,r,a,i,l,u,h,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(M){this.onError(M)}}var Br=!1,Ta=null,Ra=!1,li=null,Sd={onError:function(e){Br=!0,Ta=e}};function Cd(e,t,r,a,i,l,u,h,x){Br=!1,Ta=null,Nd.apply(Sd,arguments)}function Ad(e,t,r,a,i,l,u,h,x){if(Cd.apply(this,arguments),Br){if(Br){var C=Ta;Br=!1,Ta=null}else throw Error(c(198));Ra||(Ra=!0,li=C)}}function _n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ds(e){if(_n(e)!==e)throw Error(c(188))}function Td(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Ds(i),e;if(l===a)return Ds(i),t;l=l.sibling}throw Error(c(188))}if(r.return!==a.return)r=i,a=l;else{for(var u=!1,h=i.child;h;){if(h===r){u=!0,r=i,a=l;break}if(h===a){u=!0,a=i,r=l;break}h=h.sibling}if(!u){for(h=l.child;h;){if(h===r){u=!0,r=l,a=i;break}if(h===a){u=!0,a=l,r=i;break}h=h.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==a)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Fs(e){return e=Td(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Ls=s.unstable_scheduleCallback,Ms=s.unstable_cancelCallback,Rd=s.unstable_shouldYield,Od=s.unstable_requestPaint,Ue=s.unstable_now,Pd=s.unstable_getCurrentPriorityLevel,si=s.unstable_ImmediatePriority,_s=s.unstable_UserBlockingPriority,Oa=s.unstable_NormalPriority,Dd=s.unstable_LowPriority,js=s.unstable_IdlePriority,Pa=null,Wt=null;function Fd(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Md,Id=Math.log,Ld=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Id(e)/Ld|0)|0}var Da=64,Fa=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ia(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,u=r&268435455;if(u!==0){var h=u&~i;h!==0?a=Hr(h):(l&=u,l!==0&&(a=Hr(l)))}else u=r&~i,u!==0?a=Hr(u):l!==0&&(a=Hr(l));if(a===0)return 0;if(t!==0&&t!==a&&(t&i)===0&&(i=a&-a,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Mt(t),i=1<<r,a|=e[r],t&=~i;return a}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Mt(l),h=1<<u,x=i[u];x===-1?((h&r)===0||(h&a)!==0)&&(i[u]=_d(h,t)):x<=t&&(e.expiredLanes|=h),l&=~h}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=Da;return Da<<=1,(Da&4194240)===0&&(Da=64),e}function ui(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ur(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=r}function Bd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Mt(r),l=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~l}}function pi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Mt(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var Ae=0;function Hs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Us,di,Vs,$s,Ys,mi=!1,La=[],gn=null,vn=null,xn=null,Vr=new Map,$r=new Map,yn=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function Yr(e,t,r,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=oa(t),t!==null&&di(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ud(e,t,r,a,i){switch(t){case"focusin":return gn=Yr(gn,e,t,r,a,i),!0;case"dragenter":return vn=Yr(vn,e,t,r,a,i),!0;case"mouseover":return xn=Yr(xn,e,t,r,a,i),!0;case"pointerover":var l=i.pointerId;return Vr.set(l,Yr(Vr.get(l)||null,e,t,r,a,i)),!0;case"gotpointercapture":return l=i.pointerId,$r.set(l,Yr($r.get(l)||null,e,t,r,a,i)),!0}return!1}function Gs(e){var t=jn(e.target);if(t!==null){var r=_n(t);if(r!==null){if(t=r.tag,t===13){if(t=Ps(r),t!==null){e.blockedOn=t,Ys(e.priority,function(){Vs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);ni=a,r.target.dispatchEvent(a),ni=null}else return t=oa(r),t!==null&&di(t),e.blockedOn=r,!1;t.shift()}return!0}function qs(e,t,r){Ma(e)&&r.delete(t)}function Vd(){mi=!1,gn!==null&&Ma(gn)&&(gn=null),vn!==null&&Ma(vn)&&(vn=null),xn!==null&&Ma(xn)&&(xn=null),Vr.forEach(qs),$r.forEach(qs)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vd)))}function Gr(e){function t(i){return Wr(i,e)}if(0<La.length){Wr(La[0],e);for(var r=1;r<La.length;r++){var a=La[r];a.blockedOn===e&&(a.blockedOn=null)}}for(gn!==null&&Wr(gn,e),vn!==null&&Wr(vn,e),xn!==null&&Wr(xn,e),Vr.forEach(t),$r.forEach(t),r=0;r<yn.length;r++)a=yn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<yn.length&&(r=yn[0],r.blockedOn===null);)Gs(r),r.blockedOn===null&&yn.shift()}var ar=q.ReactCurrentBatchConfig,_a=!0;function $d(e,t,r,a){var i=Ae,l=ar.transition;ar.transition=null;try{Ae=1,hi(e,t,r,a)}finally{Ae=i,ar.transition=l}}function Yd(e,t,r,a){var i=Ae,l=ar.transition;ar.transition=null;try{Ae=4,hi(e,t,r,a)}finally{Ae=i,ar.transition=l}}function hi(e,t,r,a){if(_a){var i=fi(e,t,r,a);if(i===null)Pi(e,t,a,ja,r),Ws(e,a);else if(Ud(i,e,t,r,a))a.stopPropagation();else if(Ws(e,a),t&4&&-1<Hd.indexOf(e)){for(;i!==null;){var l=oa(i);if(l!==null&&Us(l),l=fi(e,t,r,a),l===null&&Pi(e,t,a,ja,r),l===i)break;i=l}i!==null&&a.stopPropagation()}else Pi(e,t,a,null,r)}}var ja=null;function fi(e,t,r,a){if(ja=null,e=ri(a),e=jn(e),e!==null)if(t=_n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ps(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function Qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pd()){case si:return 1;case _s:return 4;case Oa:case Dd:return 16;case js:return 536870912;default:return 16}default:return 16}}var En=null,gi=null,Ba=null;function Ks(){if(Ba)return Ba;var e,t=gi,r=t.length,a,i="value"in En?En.value:En.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(a=1;a<=u&&t[r-a]===i[l-a];a++);return Ba=i.slice(e,1<a?1-a:void 0)}function Ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ua(){return!0}function Xs(){return!1}function bt(e){function t(r,a,i,l,u){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(r=e[h],this[h]=r?r(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ua:Xs,this.isPropagationStopped=Xs,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=bt(or),qr=I({},or,{view:0,detail:0}),Wd=bt(qr),xi,yi,Qr,Va=I({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(xi=e.screenX-Qr.screenX,yi=e.screenY-Qr.screenY):yi=xi=0,Qr=e),xi)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),Zs=bt(Va),Gd=I({},Va,{dataTransfer:0}),qd=bt(Gd),Qd=I({},qr,{relatedTarget:0}),Ei=bt(Qd),Kd=I({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=bt(Kd),Zd=I({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=bt(Zd),em=I({},or,{data:0}),Js=bt(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function wi(){return am}var om=I({},qr,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?Ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=bt(om),lm=I({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=bt(lm),sm=I({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),cm=bt(sm),um=I({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=bt(um),dm=I({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=bt(dm),hm=[9,13,27,32],bi=v&&"CompositionEvent"in window,Kr=null;v&&"documentMode"in document&&(Kr=document.documentMode);var fm=v&&"TextEvent"in window&&!Kr,tc=v&&(!bi||Kr&&8<Kr&&11>=Kr),nc=" ",rc=!1;function ac(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function gm(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(rc=!0,nc);case"textInput":return e=t.data,e===nc&&rc?null:e;default:return null}}function vm(e,t){if(ir)return e==="compositionend"||!bi&&ac(e,t)?(e=Ks(),Ba=gi=En=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tc&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function lc(e,t,r,a){Cs(a),t=qa(t,"onChange"),0<t.length&&(r=new vi("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Xr=null,Zr=null;function ym(e){Nc(e,0)}function $a(e){var t=pr(e);if(Y(t))return e}function Em(e,t){if(e==="change")return t}var sc=!1;if(v){var ki;if(v){var zi="oninput"in document;if(!zi){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),zi=typeof cc.oninput=="function"}ki=zi}else ki=!1;sc=ki&&(!document.documentMode||9<document.documentMode)}function uc(){Xr&&(Xr.detachEvent("onpropertychange",pc),Zr=Xr=null)}function pc(e){if(e.propertyName==="value"&&$a(Zr)){var t=[];lc(t,Zr,e,ri(e)),Os(ym,t)}}function wm(e,t,r){e==="focusin"?(uc(),Xr=t,Zr=r,Xr.attachEvent("onpropertychange",pc)):e==="focusout"&&uc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(Zr)}function km(e,t){if(e==="click")return $a(t)}function zm(e,t){if(e==="input"||e==="change")return $a(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Nm;function Jr(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!g.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var r=dc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dc(r)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=oe();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oe(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=fc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&hc(r.ownerDocument.documentElement,r)){if(a!==null&&Ni(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=mc(r,l);var u=mc(r,a);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=v&&"documentMode"in document&&11>=document.documentMode,lr=null,Si=null,ea=null,Ci=!1;function gc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ci||lr==null||lr!==oe(a)||(a=lr,"selectionStart"in a&&Ni(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ea&&Jr(ea,a)||(ea=a,a=qa(Si,"onSelect"),0<a.length&&(t=new vi("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=lr)))}function Ya(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Ai={},vc={};v&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Wa(e){if(Ai[e])return Ai[e];if(!sr[e])return e;var t=sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vc)return Ai[e]=t[r];return e}var xc=Wa("animationend"),yc=Wa("animationiteration"),Ec=Wa("animationstart"),wc=Wa("transitionend"),bc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){bc.set(e,t),m(t,[e])}for(var Ti=0;Ti<kc.length;Ti++){var Ri=kc[Ti],Am=Ri.toLowerCase(),Tm=Ri[0].toUpperCase()+Ri.slice(1);wn(Am,"on"+Tm)}wn(xc,"onAnimationEnd"),wn(yc,"onAnimationIteration"),wn(Ec,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(wc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function zc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ad(a,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var u=a.length-1;0<=u;u--){var h=a[u],x=h.instance,C=h.currentTarget;if(h=h.listener,x!==l&&i.isPropagationStopped())break e;zc(i,h,C),l=x}else for(u=0;u<a.length;u++){if(h=a[u],x=h.instance,C=h.currentTarget,h=h.listener,x!==l&&i.isPropagationStopped())break e;zc(i,h,C),l=x}}}if(Ra)throw e=li,Ra=!1,li=null,e}function De(e,t){var r=t[_i];r===void 0&&(r=t[_i]=new Set);var a=e+"__bubble";r.has(a)||(Sc(t,e,2,!1),r.add(a))}function Oi(e,t,r){var a=0;t&&(a|=4),Sc(r,e,a,t)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function na(e){if(!e[Ga]){e[Ga]=!0,p.forEach(function(r){r!=="selectionchange"&&(Rm.has(r)||Oi(r,!1,e),Oi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ga]||(t[Ga]=!0,Oi("selectionchange",!1,t))}}function Sc(e,t,r,a){switch(Qs(t)){case 1:var i=$d;break;case 4:i=Yd;break;default:i=hi}r=i.bind(null,t,r,e),i=void 0,!ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Pi(e,t,r,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var h=a.stateNode.containerInfo;if(h===i||h.nodeType===8&&h.parentNode===i)break;if(u===4)for(u=a.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===i||x.nodeType===8&&x.parentNode===i))return;u=u.return}for(;h!==null;){if(u=jn(h),u===null)return;if(x=u.tag,x===5||x===6){a=l=u;continue e}h=h.parentNode}}a=a.return}Os(function(){var C=l,M=ri(r),j=[];e:{var D=bc.get(e);if(D!==void 0){var K=vi,ne=e;switch(e){case"keypress":if(Ha(r)===0)break e;case"keydown":case"keyup":K=im;break;case"focusin":ne="focus",K=Ei;break;case"focusout":ne="blur",K=Ei;break;case"beforeblur":case"afterblur":K=Ei;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=cm;break;case xc:case yc:case Ec:K=Xd;break;case wc:K=pm;break;case"scroll":K=Wd;break;case"wheel":K=mm;break;case"copy":case"cut":case"paste":K=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=ec}var re=(t&4)!==0,Ve=!re&&e==="scroll",N=re?D!==null?D+"Capture":null:D;re=[];for(var E=C,S;E!==null;){S=E;var $=S.stateNode;if(S.tag===5&&$!==null&&(S=$,N!==null&&($=_r(E,N),$!=null&&re.push(ra(E,$,S)))),Ve)break;E=E.return}0<re.length&&(D=new K(D,ne,null,r,M),j.push({event:D,listeners:re}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",D&&r!==ni&&(ne=r.relatedTarget||r.fromElement)&&(jn(ne)||ne[tn]))break e;if((K||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,K?(ne=r.relatedTarget||r.toElement,K=C,ne=ne?jn(ne):null,ne!==null&&(Ve=_n(ne),ne!==Ve||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(K=null,ne=C),K!==ne)){if(re=Zs,$="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(re=ec,$="onPointerLeave",N="onPointerEnter",E="pointer"),Ve=K==null?D:pr(K),S=ne==null?D:pr(ne),D=new re($,E+"leave",K,r,M),D.target=Ve,D.relatedTarget=S,$=null,jn(M)===C&&(re=new re(N,E+"enter",ne,r,M),re.target=S,re.relatedTarget=Ve,$=re),Ve=$,K&&ne)t:{for(re=K,N=ne,E=0,S=re;S;S=cr(S))E++;for(S=0,$=N;$;$=cr($))S++;for(;0<E-S;)re=cr(re),E--;for(;0<S-E;)N=cr(N),S--;for(;E--;){if(re===N||N!==null&&re===N.alternate)break t;re=cr(re),N=cr(N)}re=null}else re=null;K!==null&&Cc(j,D,K,re,!1),ne!==null&&Ve!==null&&Cc(j,Ve,ne,re,!0)}}e:{if(D=C?pr(C):window,K=D.nodeName&&D.nodeName.toLowerCase(),K==="select"||K==="input"&&D.type==="file")var ae=Em;else if(ic(D))if(sc)ae=zm;else{ae=bm;var ue=wm}else(K=D.nodeName)&&K.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(ae=km);if(ae&&(ae=ae(e,C))){lc(j,ae,r,M);break e}ue&&ue(e,D,C),e==="focusout"&&(ue=D._wrapperState)&&ue.controlled&&D.type==="number"&&at(D,"number",D.value)}switch(ue=C?pr(C):window,e){case"focusin":(ic(ue)||ue.contentEditable==="true")&&(lr=ue,Si=C,ea=null);break;case"focusout":ea=Si=lr=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,gc(j,r,M);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":gc(j,r,M)}var pe;if(bi)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else ir?ac(e,r)&&(fe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(fe="onCompositionStart");fe&&(tc&&r.locale!=="ko"&&(ir||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&ir&&(pe=Ks()):(En=M,gi="value"in En?En.value:En.textContent,ir=!0)),ue=qa(C,fe),0<ue.length&&(fe=new Js(fe,e,null,r,M),j.push({event:fe,listeners:ue}),pe?fe.data=pe:(pe=oc(r),pe!==null&&(fe.data=pe)))),(pe=fm?gm(e,r):vm(e,r))&&(C=qa(C,"onBeforeInput"),0<C.length&&(M=new Js("onBeforeInput","beforeinput",null,r,M),j.push({event:M,listeners:C}),M.data=pe))}Nc(j,t)})}function ra(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qa(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=_r(e,r),l!=null&&a.unshift(ra(e,l,i)),l=_r(e,t),l!=null&&a.push(ra(e,l,i))),e=e.return}return a}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,r,a,i){for(var l=t._reactName,u=[];r!==null&&r!==a;){var h=r,x=h.alternate,C=h.stateNode;if(x!==null&&x===a)break;h.tag===5&&C!==null&&(h=C,i?(x=_r(r,l),x!=null&&u.unshift(ra(r,x,h))):i||(x=_r(r,l),x!=null&&u.push(ra(r,x,h)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var Om=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Pm,"")}function Qa(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(c(425))}function Ka(){}var Di=null,Fi=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Im)}:Li;function Im(e){setTimeout(function(){throw e})}function Mi(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),Gr(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);Gr(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),Gt="__reactFiber$"+ur,aa="__reactProps$"+ur,tn="__reactContainer$"+ur,_i="__reactEvents$"+ur,Lm="__reactListeners$"+ur,Mm="__reactHandles$"+ur;function jn(e){var t=e[Gt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[tn]||r[Gt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rc(e);e!==null;){if(r=e[Gt])return r;e=Rc(e)}return t}e=r,r=e.parentNode}return null}function oa(e){return e=e[Gt]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Xa(e){return e[aa]||null}var ji=[],dr=-1;function kn(e){return{current:e}}function Fe(e){0>dr||(e.current=ji[dr],ji[dr]=null,dr--)}function Pe(e,t){dr++,ji[dr]=e.current,e.current=t}var zn={},ot=kn(zn),ft=kn(!1),Bn=zn;function mr(e,t){var r=e.type.contextTypes;if(!r)return zn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function gt(e){return e=e.childContextTypes,e!=null}function Za(){Fe(ft),Fe(ot)}function Oc(e,t,r){if(ot.current!==zn)throw Error(c(168));Pe(ot,t),Pe(ft,r)}function Pc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(c(108,ee(e)||"Unknown",i));return I({},r,a)}function Ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Bn=ot.current,Pe(ot,e),Pe(ft,ft.current),!0}function Dc(e,t,r){var a=e.stateNode;if(!a)throw Error(c(169));r?(e=Pc(e,t,Bn),a.__reactInternalMemoizedMergedChildContext=e,Fe(ft),Fe(ot),Pe(ot,e)):Fe(ft),Pe(ft,r)}var nn=null,eo=!1,Bi=!1;function Fc(e){nn===null?nn=[e]:nn.push(e)}function _m(e){eo=!0,Fc(e)}function Nn(){if(!Bi&&nn!==null){Bi=!0;var e=0,t=Ae;try{var r=nn;for(Ae=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}nn=null,eo=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),Ls(si,Nn),i}finally{Ae=t,Bi=!1}}return null}var hr=[],fr=0,to=null,no=0,Ct=[],At=0,Hn=null,rn=1,an="";function Un(e,t){hr[fr++]=no,hr[fr++]=to,to=e,no=t}function Ic(e,t,r){Ct[At++]=rn,Ct[At++]=an,Ct[At++]=Hn,Hn=e;var a=rn;e=an;var i=32-Mt(a)-1;a&=~(1<<i),r+=1;var l=32-Mt(t)+i;if(30<l){var u=i-i%5;l=(a&(1<<u)-1).toString(32),a>>=u,i-=u,rn=1<<32-Mt(t)+i|r<<i|a,an=l+e}else rn=1<<l|r<<i|a,an=e}function Hi(e){e.return!==null&&(Un(e,1),Ic(e,1,0))}function Ui(e){for(;e===to;)to=hr[--fr],hr[fr]=null,no=hr[--fr],hr[fr]=null;for(;e===Hn;)Hn=Ct[--At],Ct[At]=null,an=Ct[--At],Ct[At]=null,rn=Ct[--At],Ct[At]=null}var kt=null,zt=null,Ie=!1,jt=null;function Lc(e,t){var r=Pt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,zt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Hn!==null?{id:rn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kt=e,zt=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(Ie){var t=zt;if(t){var r=t;if(!Mc(e,t)){if(Vi(e))throw Error(c(418));t=bn(r.nextSibling);var a=kt;t&&Mc(e,t)?Lc(a,r):(e.flags=e.flags&-4097|2,Ie=!1,kt=e)}}else{if(Vi(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ie=!1,kt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function ro(e){if(e!==kt)return!1;if(!Ie)return _c(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=zt)){if(Vi(e))throw jc(),Error(c(418));for(;t;)Lc(e,t),t=bn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){zt=bn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}zt=null}}else zt=kt?bn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=zt;e;)e=bn(e.nextSibling)}function gr(){zt=kt=null,Ie=!1}function Yi(e){jt===null?jt=[e]:jt.push(e)}var jm=q.ReactCurrentBatchConfig;function ia(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var a=r.stateNode}if(!a)throw Error(c(147,e));var i=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var h=i.refs;u===null?delete h[l]:h[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Hc(e){function t(N,E){if(e){var S=N.deletions;S===null?(N.deletions=[E],N.flags|=16):S.push(E)}}function r(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function a(N,E){for(N=new Map;E!==null;)E.key!==null?N.set(E.key,E):N.set(E.index,E),E=E.sibling;return N}function i(N,E){return N=Dn(N,E),N.index=0,N.sibling=null,N}function l(N,E,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<E?(N.flags|=2,E):S):(N.flags|=2,E)):(N.flags|=1048576,E)}function u(N){return e&&N.alternate===null&&(N.flags|=2),N}function h(N,E,S,$){return E===null||E.tag!==6?(E=Ll(S,N.mode,$),E.return=N,E):(E=i(E,S),E.return=N,E)}function x(N,E,S,$){var ae=S.type;return ae===xe?M(N,E,S.props.children,$,S.key):E!==null&&(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ve&&Bc(ae)===E.type)?($=i(E,S.props),$.ref=ia(N,E,S),$.return=N,$):($=To(S.type,S.key,S.props,null,N.mode,$),$.ref=ia(N,E,S),$.return=N,$)}function C(N,E,S,$){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Ml(S,N.mode,$),E.return=N,E):(E=i(E,S.children||[]),E.return=N,E)}function M(N,E,S,$,ae){return E===null||E.tag!==7?(E=Kn(S,N.mode,$,ae),E.return=N,E):(E=i(E,S),E.return=N,E)}function j(N,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Ll(""+E,N.mode,S),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ie:return S=To(E.type,E.key,E.props,null,N.mode,S),S.ref=ia(N,null,E),S.return=N,S;case se:return E=Ml(E,N.mode,S),E.return=N,E;case ve:var $=E._init;return j(N,$(E._payload),S)}if(Qe(E)||P(E))return E=Kn(E,N.mode,S,null),E.return=N,E;ao(N,E)}return null}function D(N,E,S,$){var ae=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return ae!==null?null:h(N,E,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ie:return S.key===ae?x(N,E,S,$):null;case se:return S.key===ae?C(N,E,S,$):null;case ve:return ae=S._init,D(N,E,ae(S._payload),$)}if(Qe(S)||P(S))return ae!==null?null:M(N,E,S,$,null);ao(N,S)}return null}function K(N,E,S,$,ae){if(typeof $=="string"&&$!==""||typeof $=="number")return N=N.get(S)||null,h(E,N,""+$,ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ie:return N=N.get($.key===null?S:$.key)||null,x(E,N,$,ae);case se:return N=N.get($.key===null?S:$.key)||null,C(E,N,$,ae);case ve:var ue=$._init;return K(N,E,S,ue($._payload),ae)}if(Qe($)||P($))return N=N.get(S)||null,M(E,N,$,ae,null);ao(E,$)}return null}function ne(N,E,S,$){for(var ae=null,ue=null,pe=E,fe=E=0,Ze=null;pe!==null&&fe<S.length;fe++){pe.index>fe?(Ze=pe,pe=null):Ze=pe.sibling;var Se=D(N,pe,S[fe],$);if(Se===null){pe===null&&(pe=Ze);break}e&&pe&&Se.alternate===null&&t(N,pe),E=l(Se,E,fe),ue===null?ae=Se:ue.sibling=Se,ue=Se,pe=Ze}if(fe===S.length)return r(N,pe),Ie&&Un(N,fe),ae;if(pe===null){for(;fe<S.length;fe++)pe=j(N,S[fe],$),pe!==null&&(E=l(pe,E,fe),ue===null?ae=pe:ue.sibling=pe,ue=pe);return Ie&&Un(N,fe),ae}for(pe=a(N,pe);fe<S.length;fe++)Ze=K(pe,N,fe,S[fe],$),Ze!==null&&(e&&Ze.alternate!==null&&pe.delete(Ze.key===null?fe:Ze.key),E=l(Ze,E,fe),ue===null?ae=Ze:ue.sibling=Ze,ue=Ze);return e&&pe.forEach(function(Fn){return t(N,Fn)}),Ie&&Un(N,fe),ae}function re(N,E,S,$){var ae=P(S);if(typeof ae!="function")throw Error(c(150));if(S=ae.call(S),S==null)throw Error(c(151));for(var ue=ae=null,pe=E,fe=E=0,Ze=null,Se=S.next();pe!==null&&!Se.done;fe++,Se=S.next()){pe.index>fe?(Ze=pe,pe=null):Ze=pe.sibling;var Fn=D(N,pe,Se.value,$);if(Fn===null){pe===null&&(pe=Ze);break}e&&pe&&Fn.alternate===null&&t(N,pe),E=l(Fn,E,fe),ue===null?ae=Fn:ue.sibling=Fn,ue=Fn,pe=Ze}if(Se.done)return r(N,pe),Ie&&Un(N,fe),ae;if(pe===null){for(;!Se.done;fe++,Se=S.next())Se=j(N,Se.value,$),Se!==null&&(E=l(Se,E,fe),ue===null?ae=Se:ue.sibling=Se,ue=Se);return Ie&&Un(N,fe),ae}for(pe=a(N,pe);!Se.done;fe++,Se=S.next())Se=K(pe,N,fe,Se.value,$),Se!==null&&(e&&Se.alternate!==null&&pe.delete(Se.key===null?fe:Se.key),E=l(Se,E,fe),ue===null?ae=Se:ue.sibling=Se,ue=Se);return e&&pe.forEach(function(xh){return t(N,xh)}),Ie&&Un(N,fe),ae}function Ve(N,E,S,$){if(typeof S=="object"&&S!==null&&S.type===xe&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ie:e:{for(var ae=S.key,ue=E;ue!==null;){if(ue.key===ae){if(ae=S.type,ae===xe){if(ue.tag===7){r(N,ue.sibling),E=i(ue,S.props.children),E.return=N,N=E;break e}}else if(ue.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ve&&Bc(ae)===ue.type){r(N,ue.sibling),E=i(ue,S.props),E.ref=ia(N,ue,S),E.return=N,N=E;break e}r(N,ue);break}else t(N,ue);ue=ue.sibling}S.type===xe?(E=Kn(S.props.children,N.mode,$,S.key),E.return=N,N=E):($=To(S.type,S.key,S.props,null,N.mode,$),$.ref=ia(N,E,S),$.return=N,N=$)}return u(N);case se:e:{for(ue=S.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){r(N,E.sibling),E=i(E,S.children||[]),E.return=N,N=E;break e}else{r(N,E);break}else t(N,E);E=E.sibling}E=Ml(S,N.mode,$),E.return=N,N=E}return u(N);case ve:return ue=S._init,Ve(N,E,ue(S._payload),$)}if(Qe(S))return ne(N,E,S,$);if(P(S))return re(N,E,S,$);ao(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(r(N,E.sibling),E=i(E,S),E.return=N,N=E):(r(N,E),E=Ll(S,N.mode,$),E.return=N,N=E),u(N)):r(N,E)}return Ve}var vr=Hc(!0),Uc=Hc(!1),oo=kn(null),io=null,xr=null,Wi=null;function Gi(){Wi=xr=io=null}function qi(e){var t=oo.current;Fe(oo),e._currentValue=t}function Qi(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function yr(e,t){io=e,Wi=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(vt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Wi!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(io===null)throw Error(c(308));xr=e,io.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Vn=null;function Ki(e){Vn===null?Vn=[e]:Vn.push(e)}function Vc(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,Ki(t)):(r.next=i.next,i.next=r),t.interleaved=r,on(e,a)}function on(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Sn=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ze&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,on(e,r)}return i=a.interleaved,i===null?(t.next=t,Ki(a)):(t.next=i.next,i.next=t),a.interleaved=t,on(e,r)}function lo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,pi(e,r)}}function Yc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=u:l=l.next=u,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function so(e,t,r,a){var i=e.updateQueue;Sn=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var x=h,C=x.next;x.next=null,u===null?l=C:u.next=C,u=x;var M=e.alternate;M!==null&&(M=M.updateQueue,h=M.lastBaseUpdate,h!==u&&(h===null?M.firstBaseUpdate=C:h.next=C,M.lastBaseUpdate=x))}if(l!==null){var j=i.baseState;u=0,M=C=x=null,h=l;do{var D=h.lane,K=h.eventTime;if((a&D)===D){M!==null&&(M=M.next={eventTime:K,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var ne=e,re=h;switch(D=t,K=r,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){j=ne.call(K,j,D);break e}j=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,D=typeof ne=="function"?ne.call(K,j,D):ne,D==null)break e;j=I({},j,D);break e;case 2:Sn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,D=i.effects,D===null?i.effects=[h]:D.push(h))}else K={eventTime:K,lane:D,tag:h.tag,payload:h.payload,callback:h.callback,next:null},M===null?(C=M=K,x=j):M=M.next=K,u|=D;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;D=h,h=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);if(M===null&&(x=j),i.baseState=x,i.firstBaseUpdate=C,i.lastBaseUpdate=M,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Wn|=u,e.lanes=u,e.memoizedState=j}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(c(191,i));i.call(a)}}}var la={},qt=kn(la),sa=kn(la),ca=kn(la);function $n(e){if(e===la)throw Error(c(174));return e}function Zi(e,t){switch(Pe(ca,t),Pe(sa,e),Pe(qt,la),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}Fe(qt),Pe(qt,t)}function Er(){Fe(qt),Fe(sa),Fe(ca)}function Gc(e){$n(ca.current);var t=$n(qt.current),r=Jo(t,e.type);t!==r&&(Pe(sa,e),Pe(qt,r))}function Ji(e){sa.current===e&&(Fe(qt),Fe(sa))}var _e=kn(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function tl(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var uo=q.ReactCurrentDispatcher,nl=q.ReactCurrentBatchConfig,Yn=0,je=null,Ge=null,Ke=null,po=!1,ua=!1,pa=0,Bm=0;function it(){throw Error(c(321))}function rl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function al(e,t,r,a,i,l){if(Yn=l,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?$m:Ym,e=r(a,i),ua){l=0;do{if(ua=!1,pa=0,25<=l)throw Error(c(301));l+=1,Ke=Ge=null,t.updateQueue=null,uo.current=Wm,e=r(a,i)}while(ua)}if(uo.current=fo,t=Ge!==null&&Ge.next!==null,Yn=0,Ke=Ge=je=null,po=!1,t)throw Error(c(300));return e}function ol(){var e=pa!==0;return pa=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?je.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Rt(){if(Ge===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ke===null?je.memoizedState:Ke.next;if(t!==null)Ke=t,Ge=e;else{if(e===null)throw Error(c(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?je.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function da(e,t){return typeof t=="function"?t(e):t}function il(e){var t=Rt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=Ge,i=a.baseQueue,l=r.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}a.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,a=a.baseState;var h=u=null,x=null,C=l;do{var M=C.lane;if((Yn&M)===M)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),a=C.hasEagerState?C.eagerState:e(a,C.action);else{var j={lane:M,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(h=x=j,u=a):x=x.next=j,je.lanes|=M,Wn|=M}C=C.next}while(C!==null&&C!==l);x===null?u=a:x.next=h,_t(a,t.memoizedState)||(vt=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=x,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do l=i.lane,je.lanes|=l,Wn|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ll(e){var t=Rt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var u=i=i.next;do l=e(l,u.action),u=u.next;while(u!==i);_t(l,t.memoizedState)||(vt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,a]}function qc(){}function Qc(e,t){var r=je,a=Rt(),i=t(),l=!_t(a.memoizedState,i);if(l&&(a.memoizedState=i,vt=!0),a=a.queue,sl(Zc.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,ma(9,Xc.bind(null,r,a,i,t),void 0,null),Xe===null)throw Error(c(349));(Yn&30)!==0||Kc(r,t,i)}return i}function Kc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Xc(e,t,r,a){t.value=r,t.getSnapshot=a,Jc(t)&&eu(e)}function Zc(e,t,r){return r(function(){Jc(t)&&eu(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function eu(e){var t=on(e,1);t!==null&&Vt(t,e,1,-1)}function tu(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=Vm.bind(null,je,e),[t.memoizedState,e]}function ma(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function nu(){return Rt().memoizedState}function mo(e,t,r,a){var i=Qt();je.flags|=e,i.memoizedState=ma(1|t,r,void 0,a===void 0?null:a)}function ho(e,t,r,a){var i=Rt();a=a===void 0?null:a;var l=void 0;if(Ge!==null){var u=Ge.memoizedState;if(l=u.destroy,a!==null&&rl(a,u.deps)){i.memoizedState=ma(t,r,l,a);return}}je.flags|=e,i.memoizedState=ma(1|t,r,l,a)}function ru(e,t){return mo(8390656,8,e,t)}function sl(e,t){return ho(2048,8,e,t)}function au(e,t){return ho(4,2,e,t)}function ou(e,t){return ho(4,4,e,t)}function iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lu(e,t,r){return r=r!=null?r.concat([e]):null,ho(4,4,iu.bind(null,t,e),r)}function cl(){}function su(e,t){var r=Rt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&rl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function cu(e,t){var r=Rt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&rl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function uu(e,t,r){return(Yn&21)===0?(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=r):(_t(r,t)||(r=Bs(),je.lanes|=r,Wn|=r,e.baseState=!0),t)}function Hm(e,t){var r=Ae;Ae=r!==0&&4>r?r:4,e(!0);var a=nl.transition;nl.transition={};try{e(!1),t()}finally{Ae=r,nl.transition=a}}function pu(){return Rt().memoizedState}function Um(e,t,r){var a=On(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},du(e))mu(t,r);else if(r=Vc(e,t,r,a),r!==null){var i=pt();Vt(r,e,a,i),hu(r,t,a)}}function Vm(e,t,r){var a=On(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(du(e))mu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,h=l(u,r);if(i.hasEagerState=!0,i.eagerState=h,_t(h,u)){var x=t.interleaved;x===null?(i.next=i,Ki(t)):(i.next=x.next,x.next=i),t.interleaved=i;return}}catch{}finally{}r=Vc(e,t,i,a),r!==null&&(i=pt(),Vt(r,e,a,i),hu(r,t,a))}}function du(e){var t=e.alternate;return e===je||t!==null&&t===je}function mu(e,t){ua=po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function hu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,pi(e,r)}}var fo={readContext:Tt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},$m={readContext:Tt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,mo(4194308,4,iu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return mo(4,2,e,t)},useMemo:function(e,t){var r=Qt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Qt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Um.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:cl,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Hm.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=je,i=Qt();if(Ie){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Xe===null)throw Error(c(349));(Yn&30)!==0||Kc(a,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,ru(Zc.bind(null,a,l,e),[e]),a.flags|=2048,ma(9,Xc.bind(null,a,l,r,t),void 0,null),r},useId:function(){var e=Qt(),t=Xe.identifierPrefix;if(Ie){var r=an,a=rn;r=(a&~(1<<32-Mt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=pa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:Tt,useCallback:su,useContext:Tt,useEffect:sl,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:il,useRef:nu,useState:function(){return il(da)},useDebugValue:cl,useDeferredValue:function(e){var t=Rt();return uu(t,Ge.memoizedState,e)},useTransition:function(){var e=il(da)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1},Wm={readContext:Tt,useCallback:su,useContext:Tt,useEffect:sl,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:ll,useRef:nu,useState:function(){return ll(da)},useDebugValue:cl,useDeferredValue:function(e){var t=Rt();return Ge===null?t.memoizedState=e:uu(t,Ge.memoizedState,e)},useTransition:function(){var e=ll(da)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ul(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:I({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var go={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=pt(),i=On(e),l=ln(a,i);l.payload=t,r!=null&&(l.callback=r),t=Cn(e,l,i),t!==null&&(Vt(t,e,i,a),lo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=pt(),i=On(e),l=ln(a,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Cn(e,l,i),t!==null&&(Vt(t,e,i,a),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),a=On(e),i=ln(r,a);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,a),t!==null&&(Vt(t,e,a,r),lo(t,e,a))}};function fu(e,t,r,a,i,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,u):t.prototype&&t.prototype.isPureReactComponent?!Jr(r,a)||!Jr(i,l):!0}function gu(e,t,r){var a=!1,i=zn,l=t.contextType;return typeof l=="object"&&l!==null?l=Tt(l):(i=gt(t)?Bn:ot.current,a=t.contextTypes,l=(a=a!=null)?mr(e,i):zn),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function vu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function pl(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Xi(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Tt(l):(l=gt(t)?Bn:ot.current,i.context=mr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ul(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),so(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var r="",a=t;do r+=be(a),a=a.return;while(a);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ml(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,r){r=ln(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){ko||(ko=!0,Al=a),ml(e,t)},r}function yu(e,t,r){r=ln(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){ml(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){ml(e,t),typeof a!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Eu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Gm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=lh.bind(null,e,t,r),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,r,a,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ln(-1,1),t.tag=2,Cn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var qm=q.ReactCurrentOwner,vt=!1;function ut(e,t,r,a){t.child=e===null?Uc(t,null,r,a):vr(t,e.child,r,a)}function ku(e,t,r,a,i){r=r.render;var l=t.ref;return yr(t,i),a=al(e,t,r,a,l,i),r=ol(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(Ie&&r&&Hi(t),t.flags|=1,ut(e,t,a,i),t.child)}function zu(e,t,r,a,i){if(e===null){var l=r.type;return typeof l=="function"&&!Il(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Nu(e,t,l,a,i)):(e=To(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var u=l.memoizedProps;if(r=r.compare,r=r!==null?r:Jr,r(u,a)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Dn(l,a),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,r,a,i){if(e!==null){var l=e.memoizedProps;if(Jr(l,a)&&e.ref===t.ref)if(vt=!1,t.pendingProps=a=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(vt=!0);else return t.lanes=e.lanes,sn(e,t,i)}return hl(e,t,r,a,i)}function Su(e,t,r){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(kr,Nt),Nt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(kr,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:r,Pe(kr,Nt),Nt|=a}else l!==null?(a=l.baseLanes|r,t.memoizedState=null):a=r,Pe(kr,Nt),Nt|=a;return ut(e,t,i,r),t.child}function Cu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,r,a,i){var l=gt(r)?Bn:ot.current;return l=mr(t,l),yr(t,i),r=al(e,t,r,a,l,i),a=ol(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(Ie&&a&&Hi(t),t.flags|=1,ut(e,t,r,i),t.child)}function Au(e,t,r,a,i){if(gt(r)){var l=!0;Ja(t)}else l=!1;if(yr(t,i),t.stateNode===null)xo(e,t),gu(t,r,a),pl(t,r,a,i),a=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var x=u.context,C=r.contextType;typeof C=="object"&&C!==null?C=Tt(C):(C=gt(r)?Bn:ot.current,C=mr(t,C));var M=r.getDerivedStateFromProps,j=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function";j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==a||x!==C)&&vu(t,u,a,C),Sn=!1;var D=t.memoizedState;u.state=D,so(t,a,u,i),x=t.memoizedState,h!==a||D!==x||ft.current||Sn?(typeof M=="function"&&(ul(t,r,M,a),x=t.memoizedState),(h=Sn||fu(t,r,h,a,D,x,C))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),u.props=a,u.state=x,u.context=C,a=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,$c(e,t),h=t.memoizedProps,C=t.type===t.elementType?h:Bt(t.type,h),u.props=C,j=t.pendingProps,D=u.context,x=r.contextType,typeof x=="object"&&x!==null?x=Tt(x):(x=gt(r)?Bn:ot.current,x=mr(t,x));var K=r.getDerivedStateFromProps;(M=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==j||D!==x)&&vu(t,u,a,x),Sn=!1,D=t.memoizedState,u.state=D,so(t,a,u,i);var ne=t.memoizedState;h!==j||D!==ne||ft.current||Sn?(typeof K=="function"&&(ul(t,r,K,a),ne=t.memoizedState),(C=Sn||fu(t,r,C,a,D,ne,x)||!1)?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,ne,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,ne,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),u.props=a,u.state=ne,u.context=x,a=C):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return fl(e,t,r,a,l,i)}function fl(e,t,r,a,i,l){Cu(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return i&&Dc(t,r,!1),sn(e,t,l);a=t.stateNode,qm.current=t;var h=u&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=vr(t,e.child,null,l),t.child=vr(t,null,h,l)):ut(e,t,h,l),t.memoizedState=a.state,i&&Dc(t,r,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),Zi(e,t.containerInfo)}function Ru(e,t,r,a,i){return gr(),Yi(i),t.flags|=256,ut(e,t,r,a),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,r){var a=t.pendingProps,i=_e.current,l=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(i&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Pe(_e,i&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,l?(a=t.mode,l=t.child,u={mode:"hidden",children:u},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=Ro(u,a,0,null),e=Kn(e,a,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vl(r),t.memoizedState=gl,e):xl(t,u));if(i=e.memoizedState,i!==null&&(h=i.dehydrated,h!==null))return Qm(e,t,u,a,h,i,r);if(l){l=a.fallback,u=t.mode,i=e.child,h=i.sibling;var x={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=x,t.deletions=null):(a=Dn(i,x),a.subtreeFlags=i.subtreeFlags&14680064),h!==null?l=Dn(h,l):(l=Kn(l,u,r,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,u=e.child.memoizedState,u=u===null?vl(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~r,t.memoizedState=gl,a}return l=e.child,e=l.sibling,a=Dn(l,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function xl(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vo(e,t,r,a){return a!==null&&Yi(a),vr(t,e.child,null,r),e=xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,r,a,i,l,u){if(r)return t.flags&256?(t.flags&=-257,a=dl(Error(c(422))),vo(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,i=t.mode,a=Ro({mode:"visible",children:a.children},i,0,null),l=Kn(l,i,u,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,(t.mode&1)!==0&&vr(t,e.child,null,u),t.child.memoizedState=vl(u),t.memoizedState=gl,l);if((t.mode&1)===0)return vo(e,t,u,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var h=a.dgst;return a=h,l=Error(c(419)),a=dl(l,a,void 0),vo(e,t,u,a)}if(h=(u&e.childLanes)!==0,vt||h){if(a=Xe,a!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|u))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,on(e,i),Vt(a,e,i,-1))}return Fl(),a=dl(Error(c(421))),vo(e,t,u,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sh.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,zt=bn(i.nextSibling),kt=t,Ie=!0,jt=null,e!==null&&(Ct[At++]=rn,Ct[At++]=an,Ct[At++]=Hn,rn=e.id,an=e.overflow,Hn=t),t=xl(t,a.children),t.flags|=4096,t)}function Pu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qi(e.return,t,r)}function yl(e,t,r,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=r,l.tailMode=i)}function Du(e,t,r){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(ut(e,t,a.children,r),a=_e.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,t);else if(e.tag===19)Pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Pe(_e,a),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&co(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),yl(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}yl(t,!0,r,null,l);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=Dn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Dn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Km(e,t,r){switch(t.tag){case 3:Tu(t),gr();break;case 5:Gc(t);break;case 1:gt(t.type)&&Ja(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;Pe(oo,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Pe(_e,_e.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ou(e,t,r):(Pe(_e,_e.current&1),e=sn(e,t,r),e!==null?e.sibling:null);Pe(_e,_e.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Du(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(_e,_e.current),a)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,r)}return sn(e,t,r)}var Fu,El,Iu,Lu;Fu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},El=function(){},Iu=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,$n(qt.current);var l=null;switch(r){case"input":i=Me(e,i),a=Me(e,a),l=[];break;case"select":i=I({},i,{value:void 0}),a=I({},a,{value:void 0}),l=[];break;case"textarea":i=er(e,i),a=er(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ka)}ei(r,a);var u;r=null;for(C in i)if(!a.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var h=i[C];for(u in h)h.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?l||(l=[]):(l=l||[]).push(C,null));for(C in a){var x=a[C];if(h=i!=null?i[C]:void 0,a.hasOwnProperty(C)&&x!==h&&(x!=null||h!=null))if(C==="style")if(h){for(u in h)!h.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in x)x.hasOwnProperty(u)&&h[u]!==x[u]&&(r||(r={}),r[u]=x[u])}else r||(l||(l=[]),l.push(C,r)),r=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,h=h?h.__html:void 0,x!=null&&h!==x&&(l=l||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(l=l||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&De("scroll",e),l||h===x||(l=[])):(l=l||[]).push(C,x))}r&&(l=l||[]).push("style",r);var C=l;(t.updateQueue=C)&&(t.flags|=4)}},Lu=function(e,t,r,a){r!==a&&(t.flags|=4)};function ha(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Xm(e,t,r){var a=t.pendingProps;switch(Ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return gt(t.type)&&Za(),lt(t),null;case 3:return a=t.stateNode,Er(),Fe(ft),Fe(ot),tl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jt!==null&&(Ol(jt),jt=null))),El(e,t),lt(t),null;case 5:Ji(t);var i=$n(ca.current);if(r=t.type,e!==null&&t.stateNode!=null)Iu(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return lt(t),null}if(e=$n(qt.current),ro(t)){a=t.stateNode,r=t.type;var l=t.memoizedProps;switch(a[Gt]=t,a[aa]=l,e=(t.mode&1)!==0,r){case"dialog":De("cancel",a),De("close",a);break;case"iframe":case"object":case"embed":De("load",a);break;case"video":case"audio":for(i=0;i<ta.length;i++)De(ta[i],a);break;case"source":De("error",a);break;case"img":case"image":case"link":De("error",a),De("load",a);break;case"details":De("toggle",a);break;case"input":We(a,l),De("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},De("invalid",a);break;case"textarea":tr(a,l),De("invalid",a)}ei(r,l),i=null;for(var u in l)if(l.hasOwnProperty(u)){var h=l[u];u==="children"?typeof h=="string"?a.textContent!==h&&(l.suppressHydrationWarning!==!0&&Qa(a.textContent,h,e),i=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&Qa(a.textContent,h,e),i=["children",""+h]):d.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&De("scroll",a)}switch(r){case"input":ke(a),Oe(a,l,!0);break;case"textarea":ke(a),ws(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Ka)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(r,{is:a.is}):(e=u.createElement(r),r==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,r),e[Gt]=t,e[aa]=a,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(u=ti(r,a),r){case"dialog":De("cancel",e),De("close",e),i=a;break;case"iframe":case"object":case"embed":De("load",e),i=a;break;case"video":case"audio":for(i=0;i<ta.length;i++)De(ta[i],e);i=a;break;case"source":De("error",e),i=a;break;case"img":case"image":case"link":De("error",e),De("load",e),i=a;break;case"details":De("toggle",e),i=a;break;case"input":We(e,a),i=Me(e,a),De("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=I({},a,{value:void 0}),De("invalid",e);break;case"textarea":tr(e,a),i=er(e,a),De("invalid",e);break;default:i=a}ei(r,i),h=i;for(l in h)if(h.hasOwnProperty(l)){var x=h[l];l==="style"?Ns(e,x):l==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ks(e,x)):l==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&Lr(e,x):typeof x=="number"&&Lr(e,""+x):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?x!=null&&l==="onScroll"&&De("scroll",e):x!=null&&Z(e,l,x,u))}switch(r){case"input":ke(e),Oe(e,a,!1);break;case"textarea":ke(e),ws(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Q(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?ct(e,!!a.multiple,l,!1):a.defaultValue!=null&&ct(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ka)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(r=$n(ca.current),$n(qt.current),ro(t)){if(a=t.stateNode,r=t.memoizedProps,a[Gt]=t,(l=a.nodeValue!==r)&&(e=kt,e!==null))switch(e.tag){case 3:Qa(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(a.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Gt]=t,t.stateNode=a}return lt(t),null;case 13:if(Fe(_e),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&zt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jc(),gr(),t.flags|=98560,l=!1;else if(l=ro(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Gt]=t}else gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),l=!1}else jt!==null&&(Ol(jt),jt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?qe===0&&(qe=3):Fl())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Er(),El(e,t),e===null&&na(t.stateNode.containerInfo),lt(t),null;case 10:return qi(t.type._context),lt(t),null;case 17:return gt(t.type)&&Za(),lt(t),null;case 19:if(Fe(_e),l=t.memoizedState,l===null)return lt(t),null;if(a=(t.flags&128)!==0,u=l.rendering,u===null)if(a)ha(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=co(e),u!==null){for(t.flags|=128,ha(l,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)l=r,e=a,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Pe(_e,_e.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ue()>zr&&(t.flags|=128,a=!0,ha(l,!1),t.lanes=4194304)}else{if(!a)if(e=co(u),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ha(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Ie)return lt(t),null}else 2*Ue()-l.renderingStartTime>zr&&r!==1073741824&&(t.flags|=128,a=!0,ha(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(r=l.last,r!==null?r.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ue(),t.sibling=null,r=_e.current,Pe(_e,a?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return Dl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Nt&1073741824)!==0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Zm(e,t){switch(Ui(t),t.tag){case 1:return gt(t.type)&&Za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),Fe(ft),Fe(ot),tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(Fe(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(_e),null;case 4:return Er(),null;case 10:return qi(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var yo=!1,st=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,te=null;function br(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){He(e,t,a)}else r.current=null}function wl(e,t,r){try{r()}catch(a){He(e,t,a)}}var Mu=!1;function eh(e,t){if(Di=_a,e=fc(),Ni(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var u=0,h=-1,x=-1,C=0,M=0,j=e,D=null;t:for(;;){for(var K;j!==r||i!==0&&j.nodeType!==3||(h=u+i),j!==l||a!==0&&j.nodeType!==3||(x=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(K=j.firstChild)!==null;)D=j,j=K;for(;;){if(j===e)break t;if(D===r&&++C===i&&(h=u),D===l&&++M===a&&(x=u),(K=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=K}r=h===-1||x===-1?null:{start:h,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fi={focusedElem:e,selectionRange:r},_a=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var ne=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,Ve=ne.memoizedState,N=t.stateNode,E=N.getSnapshotBeforeUpdate(t.elementType===t.type?re:Bt(t.type,re),Ve);N.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch($){He(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return ne=Mu,Mu=!1,ne}function fa(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&wl(t,r,l)}i=i.next}while(i!==a)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[aa],delete t[_i],delete t[Lm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ka));else if(a!==4&&(e=e.child,e!==null))for(kl(e,t,r),e=e.sibling;e!==null;)kl(e,t,r),e=e.sibling}function zl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(zl(e,t,r),e=e.sibling;e!==null;)zl(e,t,r),e=e.sibling}var et=null,Ht=!1;function An(e,t,r){for(r=r.child;r!==null;)Hu(e,t,r),r=r.sibling}function Hu(e,t,r){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Pa,r)}catch{}switch(r.tag){case 5:st||br(r,t);case 6:var a=et,i=Ht;et=null,An(e,t,r),et=a,Ht=i,et!==null&&(Ht?(e=et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):et.removeChild(r.stateNode));break;case 18:et!==null&&(Ht?(e=et,r=r.stateNode,e.nodeType===8?Mi(e.parentNode,r):e.nodeType===1&&Mi(e,r),Gr(e)):Mi(et,r.stateNode));break;case 4:a=et,i=Ht,et=r.stateNode.containerInfo,Ht=!0,An(e,t,r),et=a,Ht=i;break;case 0:case 11:case 14:case 15:if(!st&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&wl(r,t,u),i=i.next}while(i!==a)}An(e,t,r);break;case 1:if(!st&&(br(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(h){He(r,t,h)}An(e,t,r);break;case 21:An(e,t,r);break;case 22:r.mode&1?(st=(a=st)||r.memoizedState!==null,An(e,t,r),st=a):An(e,t,r);break;default:An(e,t,r)}}function Uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jm),t.forEach(function(a){var i=ch.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Ut(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var l=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:et=h.stateNode,Ht=!1;break e;case 3:et=h.stateNode.containerInfo,Ht=!0;break e;case 4:et=h.stateNode.containerInfo,Ht=!0;break e}h=h.return}if(et===null)throw Error(c(160));Hu(l,u,i),et=null,Ht=!1;var x=i.alternate;x!==null&&(x.return=null),i.return=null}catch(C){He(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),Kt(e),a&4){try{fa(3,e,e.return),Eo(3,e)}catch(re){He(e,e.return,re)}try{fa(5,e,e.return)}catch(re){He(e,e.return,re)}}break;case 1:Ut(t,e),Kt(e),a&512&&r!==null&&br(r,r.return);break;case 5:if(Ut(t,e),Kt(e),a&512&&r!==null&&br(r,r.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(re){He(e,e.return,re)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,u=r!==null?r.memoizedProps:l,h=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&Jn(i,l),ti(h,u);var C=ti(h,l);for(u=0;u<x.length;u+=2){var M=x[u],j=x[u+1];M==="style"?Ns(i,j):M==="dangerouslySetInnerHTML"?ks(i,j):M==="children"?Lr(i,j):Z(i,M,j,C)}switch(h){case"input":St(i,l);break;case"textarea":Es(i,l);break;case"select":var D=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var K=l.value;K!=null?ct(i,!!l.multiple,K,!1):D!==!!l.multiple&&(l.defaultValue!=null?ct(i,!!l.multiple,l.defaultValue,!0):ct(i,!!l.multiple,l.multiple?[]:"",!1))}i[aa]=l}catch(re){He(e,e.return,re)}}break;case 6:if(Ut(t,e),Kt(e),a&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(re){He(e,e.return,re)}}break;case 3:if(Ut(t,e),Kt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(re){He(e,e.return,re)}break;case 4:Ut(t,e),Kt(e);break;case 13:Ut(t,e),Kt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Cl=Ue())),a&4&&Uu(e);break;case 22:if(M=r!==null&&r.memoizedState!==null,e.mode&1?(st=(C=st)||M,Ut(t,e),st=C):Ut(t,e),Kt(e),a&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!M&&(e.mode&1)!==0)for(te=e,M=e.child;M!==null;){for(j=te=M;te!==null;){switch(D=te,K=D.child,D.tag){case 0:case 11:case 14:case 15:fa(4,D,D.return);break;case 1:br(D,D.return);var ne=D.stateNode;if(typeof ne.componentWillUnmount=="function"){a=D,r=D.return;try{t=a,ne.props=t.memoizedProps,ne.state=t.memoizedState,ne.componentWillUnmount()}catch(re){He(a,r,re)}}break;case 5:br(D,D.return);break;case 22:if(D.memoizedState!==null){Wu(j);continue}}K!==null?(K.return=D,te=K):Wu(j)}M=M.sibling}e:for(M=null,j=e;;){if(j.tag===5){if(M===null){M=j;try{i=j.stateNode,C?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=j.stateNode,x=j.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,h.style.display=zs("display",u))}catch(re){He(e,e.return,re)}}}else if(j.tag===6){if(M===null)try{j.stateNode.nodeValue=C?"":j.memoizedProps}catch(re){He(e,e.return,re)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;M===j&&(M=null),j=j.return}M===j&&(M=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Ut(t,e),Kt(e),a&4&&Uu(e);break;case 21:break;default:Ut(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ju(r)){var a=r;break e}r=r.return}throw Error(c(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Lr(i,""),a.flags&=-33);var l=Bu(e);zl(e,l,i);break;case 3:case 4:var u=a.stateNode.containerInfo,h=Bu(e);kl(e,h,u);break;default:throw Error(c(161))}}catch(x){He(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e,t,r){te=e,$u(e)}function $u(e,t,r){for(var a=(e.mode&1)!==0;te!==null;){var i=te,l=i.child;if(i.tag===22&&a){var u=i.memoizedState!==null||yo;if(!u){var h=i.alternate,x=h!==null&&h.memoizedState!==null||st;h=yo;var C=st;if(yo=u,(st=x)&&!C)for(te=i;te!==null;)u=te,x=u.child,u.tag===22&&u.memoizedState!==null?Gu(i):x!==null?(x.return=u,te=x):Gu(i);for(;l!==null;)te=l,$u(l),l=l.sibling;te=i,yo=h,st=C}Yu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,te=l):Yu(e)}}function Yu(e){for(;te!==null;){var t=te;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:st||Eo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!st)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Bt(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wc(t,l,a);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,u,r)}break;case 5:var h=t.stateNode;if(r===null&&t.flags&4){r=h;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var M=C.memoizedState;if(M!==null){var j=M.dehydrated;j!==null&&Gr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}st||t.flags&512&&bl(t)}catch(D){He(t,t.return,D)}}if(t===e){te=null;break}if(r=t.sibling,r!==null){r.return=t.return,te=r;break}te=t.return}}function Wu(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var r=t.sibling;if(r!==null){r.return=t.return,te=r;break}te=t.return}}function Gu(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Eo(4,t)}catch(x){He(t,r,x)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(x){He(t,i,x)}}var l=t.return;try{bl(t)}catch(x){He(t,l,x)}break;case 5:var u=t.return;try{bl(t)}catch(x){He(t,u,x)}}}catch(x){He(t,t.return,x)}if(t===e){te=null;break}var h=t.sibling;if(h!==null){h.return=t.return,te=h;break}te=t.return}}var nh=Math.ceil,wo=q.ReactCurrentDispatcher,Nl=q.ReactCurrentOwner,Ot=q.ReactCurrentBatchConfig,ze=0,Xe=null,$e=null,tt=0,Nt=0,kr=kn(0),qe=0,ga=null,Wn=0,bo=0,Sl=0,va=null,xt=null,Cl=0,zr=1/0,cn=null,ko=!1,Al=null,Tn=null,zo=!1,Rn=null,No=0,xa=0,Tl=null,So=-1,Co=0;function pt(){return(ze&6)!==0?Ue():So!==-1?So:So=Ue()}function On(e){return(e.mode&1)===0?1:(ze&2)!==0&&tt!==0?tt&-tt:jm.transition!==null?(Co===0&&(Co=Bs()),Co):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:Qs(e.type)),e)}function Vt(e,t,r,a){if(50<xa)throw xa=0,Tl=null,Error(c(185));Ur(e,r,a),((ze&2)===0||e!==Xe)&&(e===Xe&&((ze&2)===0&&(bo|=r),qe===4&&Pn(e,tt)),yt(e,a),r===1&&ze===0&&(t.mode&1)===0&&(zr=Ue()+500,eo&&Nn()))}function yt(e,t){var r=e.callbackNode;jd(e,t);var a=Ia(e,e===Xe?tt:0);if(a===0)r!==null&&Ms(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ms(r),t===1)e.tag===0?_m(Qu.bind(null,e)):Fc(Qu.bind(null,e)),Fm(function(){(ze&6)===0&&Nn()}),r=null;else{switch(Hs(a)){case 1:r=si;break;case 4:r=_s;break;case 16:r=Oa;break;case 536870912:r=js;break;default:r=Oa}r=rp(r,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qu(e,t){if(So=-1,Co=0,(ze&6)!==0)throw Error(c(327));var r=e.callbackNode;if(Nr()&&e.callbackNode!==r)return null;var a=Ia(e,e===Xe?tt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Ao(e,a);else{t=a;var i=ze;ze|=2;var l=Xu();(Xe!==e||tt!==t)&&(cn=null,zr=Ue()+500,qn(e,t));do try{oh();break}catch(h){Ku(e,h)}while(!0);Gi(),wo.current=l,ze=i,$e!==null?t=0:(Xe=null,tt=0,t=qe)}if(t!==0){if(t===2&&(i=ci(e),i!==0&&(a=i,t=Rl(e,i))),t===1)throw r=ga,qn(e,0),Pn(e,a),yt(e,Ue()),r;if(t===6)Pn(e,a);else{if(i=e.current.alternate,(a&30)===0&&!rh(i)&&(t=Ao(e,a),t===2&&(l=ci(e),l!==0&&(a=l,t=Rl(e,l))),t===1))throw r=ga,qn(e,0),Pn(e,a),yt(e,Ue()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:Qn(e,xt,cn);break;case 3:if(Pn(e,a),(a&130023424)===a&&(t=Cl+500-Ue(),10<t)){if(Ia(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Li(Qn.bind(null,e,xt,cn),t);break}Qn(e,xt,cn);break;case 4:if(Pn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var u=31-Mt(a);l=1<<u,u=t[u],u>i&&(i=u),a&=~l}if(a=i,a=Ue()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*nh(a/1960))-a,10<a){e.timeoutHandle=Li(Qn.bind(null,e,xt,cn),a);break}Qn(e,xt,cn);break;case 5:Qn(e,xt,cn);break;default:throw Error(c(329))}}}return yt(e,Ue()),e.callbackNode===r?qu.bind(null,e):null}function Rl(e,t){var r=va;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=xt,xt=r,t!==null&&Ol(t)),e}function Ol(e){xt===null?xt=e:xt.push.apply(xt,e)}function rh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],l=i.getSnapshot;i=i.value;try{if(!_t(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~Sl,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Mt(t),a=1<<r;e[r]=-1,t&=~a}}function Qu(e){if((ze&6)!==0)throw Error(c(327));Nr();var t=Ia(e,0);if((t&1)===0)return yt(e,Ue()),null;var r=Ao(e,t);if(e.tag!==0&&r===2){var a=ci(e);a!==0&&(t=a,r=Rl(e,a))}if(r===1)throw r=ga,qn(e,0),Pn(e,t),yt(e,Ue()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,xt,cn),yt(e,Ue()),null}function Pl(e,t){var r=ze;ze|=1;try{return e(t)}finally{ze=r,ze===0&&(zr=Ue()+500,eo&&Nn())}}function Gn(e){Rn!==null&&Rn.tag===0&&(ze&6)===0&&Nr();var t=ze;ze|=1;var r=Ot.transition,a=Ae;try{if(Ot.transition=null,Ae=1,e)return e()}finally{Ae=a,Ot.transition=r,ze=t,(ze&6)===0&&Nn()}}function Dl(){Nt=kr.current,Fe(kr)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Dm(r)),$e!==null)for(r=$e.return;r!==null;){var a=r;switch(Ui(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:Er(),Fe(ft),Fe(ot),tl();break;case 5:Ji(a);break;case 4:Er();break;case 13:Fe(_e);break;case 19:Fe(_e);break;case 10:qi(a.type._context);break;case 22:case 23:Dl()}r=r.return}if(Xe=e,$e=e=Dn(e.current,null),tt=Nt=t,qe=0,ga=null,Sl=bo=Wn=0,xt=va=null,Vn!==null){for(t=0;t<Vn.length;t++)if(r=Vn[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,l=r.pending;if(l!==null){var u=l.next;l.next=i,a.next=u}r.pending=a}Vn=null}return e}function Ku(e,t){do{var r=$e;try{if(Gi(),uo.current=fo,po){for(var a=je.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}po=!1}if(Yn=0,Ke=Ge=je=null,ua=!1,pa=0,Nl.current=null,r===null||r.return===null){qe=1,ga=t,$e=null;break}e:{var l=e,u=r.return,h=r,x=t;if(t=tt,h.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,M=h,j=M.tag;if((M.mode&1)===0&&(j===0||j===11||j===15)){var D=M.alternate;D?(M.updateQueue=D.updateQueue,M.memoizedState=D.memoizedState,M.lanes=D.lanes):(M.updateQueue=null,M.memoizedState=null)}var K=wu(u);if(K!==null){K.flags&=-257,bu(K,u,h,l,t),K.mode&1&&Eu(l,C,t),t=K,x=C;var ne=t.updateQueue;if(ne===null){var re=new Set;re.add(x),t.updateQueue=re}else ne.add(x);break e}else{if((t&1)===0){Eu(l,C,t),Fl();break e}x=Error(c(426))}}else if(Ie&&h.mode&1){var Ve=wu(u);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),bu(Ve,u,h,l,t),Yi(wr(x,h));break e}}l=x=wr(x,h),qe!==4&&(qe=2),va===null?va=[l]:va.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var N=xu(l,x,t);Yc(l,N);break e;case 1:h=x;var E=l.type,S=l.stateNode;if((l.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Tn===null||!Tn.has(S)))){l.flags|=65536,t&=-t,l.lanes|=t;var $=yu(l,h,t);Yc(l,$);break e}}l=l.return}while(l!==null)}Ju(r)}catch(ae){t=ae,$e===r&&r!==null&&($e=r=r.return);continue}break}while(!0)}function Xu(){var e=wo.current;return wo.current=fo,e===null?fo:e}function Fl(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||(Wn&268435455)===0&&(bo&268435455)===0||Pn(Xe,tt)}function Ao(e,t){var r=ze;ze|=2;var a=Xu();(Xe!==e||tt!==t)&&(cn=null,qn(e,t));do try{ah();break}catch(i){Ku(e,i)}while(!0);if(Gi(),ze=r,wo.current=a,$e!==null)throw Error(c(261));return Xe=null,tt=0,qe}function ah(){for(;$e!==null;)Zu($e)}function oh(){for(;$e!==null&&!Rd();)Zu($e)}function Zu(e){var t=np(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?Ju(e):$e=t,Nl.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Xm(r,t,Nt),r!==null){$e=r;return}}else{if(r=Zm(r,t),r!==null){r.flags&=32767,$e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);qe===0&&(qe=5)}function Qn(e,t,r){var a=Ae,i=Ot.transition;try{Ot.transition=null,Ae=1,ih(e,t,r,a)}finally{Ot.transition=i,Ae=a}return null}function ih(e,t,r,a){do Nr();while(Rn!==null);if((ze&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Bd(e,l),e===Xe&&($e=Xe=null,tt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||zo||(zo=!0,rp(Oa,function(){return Nr(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=Ot.transition,Ot.transition=null;var u=Ae;Ae=1;var h=ze;ze|=4,Nl.current=null,eh(e,r),Vu(r,e),Sm(Fi),_a=!!Di,Fi=Di=null,e.current=r,th(r),Od(),ze=h,Ae=u,Ot.transition=l}else e.current=r;if(zo&&(zo=!1,Rn=e,No=i),l=e.pendingLanes,l===0&&(Tn=null),Fd(r.stateNode),yt(e,Ue()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(ko)throw ko=!1,e=Al,Al=null,e;return(No&1)!==0&&e.tag!==0&&Nr(),l=e.pendingLanes,(l&1)!==0?e===Tl?xa++:(xa=0,Tl=e):xa=0,Nn(),null}function Nr(){if(Rn!==null){var e=Hs(No),t=Ot.transition,r=Ae;try{if(Ot.transition=null,Ae=16>e?16:e,Rn===null)var a=!1;else{if(e=Rn,Rn=null,No=0,(ze&6)!==0)throw Error(c(331));var i=ze;for(ze|=4,te=e.current;te!==null;){var l=te,u=l.child;if((te.flags&16)!==0){var h=l.deletions;if(h!==null){for(var x=0;x<h.length;x++){var C=h[x];for(te=C;te!==null;){var M=te;switch(M.tag){case 0:case 11:case 15:fa(8,M,l)}var j=M.child;if(j!==null)j.return=M,te=j;else for(;te!==null;){M=te;var D=M.sibling,K=M.return;if(_u(M),M===C){te=null;break}if(D!==null){D.return=K,te=D;break}te=K}}}var ne=l.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var Ve=re.sibling;re.sibling=null,re=Ve}while(re!==null)}}te=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,te=u;else e:for(;te!==null;){if(l=te,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:fa(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,te=N;break e}te=l.return}}var E=e.current;for(te=E;te!==null;){u=te;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,te=S;else e:for(u=E;te!==null;){if(h=te,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Eo(9,h)}}catch(ae){He(h,h.return,ae)}if(h===u){te=null;break e}var $=h.sibling;if($!==null){$.return=h.return,te=$;break e}te=h.return}}if(ze=i,Nn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Pa,e)}catch{}a=!0}return a}finally{Ae=r,Ot.transition=t}}return!1}function ep(e,t,r){t=wr(r,t),t=xu(e,t,1),e=Cn(e,t,1),t=pt(),e!==null&&(Ur(e,1,t),yt(e,t))}function He(e,t,r){if(e.tag===3)ep(e,e,r);else for(;t!==null;){if(t.tag===3){ep(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tn===null||!Tn.has(a))){e=wr(r,e),e=yu(t,e,1),t=Cn(t,e,1),e=pt(),t!==null&&(Ur(t,1,e),yt(t,e));break}}t=t.return}}function lh(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&r,Xe===e&&(tt&r)===r&&(qe===4||qe===3&&(tt&130023424)===tt&&500>Ue()-Cl?qn(e,0):Sl|=r),yt(e,t)}function tp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fa,Fa<<=1,(Fa&130023424)===0&&(Fa=4194304)));var r=pt();e=on(e,t),e!==null&&(Ur(e,t,r),yt(e,r))}function sh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),tp(e,r)}function ch(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),tp(e,r)}var np;np=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)vt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return vt=!1,Km(e,t,r);vt=(e.flags&131072)!==0}else vt=!1,Ie&&(t.flags&1048576)!==0&&Ic(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;xo(e,t),e=t.pendingProps;var i=mr(t,ot.current);yr(t,r),i=al(null,t,a,e,i,r);var l=ol();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(a)?(l=!0,Ja(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xi(t),i.updater=go,t.stateNode=i,i._reactInternals=t,pl(t,a,e,r),t=fl(null,t,a,!0,l,r)):(t.tag=0,Ie&&l&&Hi(t),ut(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=ph(a),e=Bt(a,e),i){case 0:t=hl(null,t,a,e,r);break e;case 1:t=Au(null,t,a,e,r);break e;case 11:t=ku(null,t,a,e,r);break e;case 14:t=zu(null,t,a,Bt(a.type,e),r);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Bt(a,i),hl(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Bt(a,i),Au(e,t,a,i,r);case 3:e:{if(Tu(t),e===null)throw Error(c(387));a=t.pendingProps,l=t.memoizedState,i=l.element,$c(e,t),so(t,a,null,r);var u=t.memoizedState;if(a=u.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=wr(Error(c(423)),t),t=Ru(e,t,a,r,i);break e}else if(a!==i){i=wr(Error(c(424)),t),t=Ru(e,t,a,r,i);break e}else for(zt=bn(t.stateNode.containerInfo.firstChild),kt=t,Ie=!0,jt=null,r=Uc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),a===i){t=sn(e,t,r);break e}ut(e,t,a,r)}t=t.child}return t;case 5:return Gc(t),e===null&&$i(t),a=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,u=i.children,Ii(a,i)?u=null:l!==null&&Ii(a,l)&&(t.flags|=32),Cu(e,t),ut(e,t,u,r),t.child;case 6:return e===null&&$i(t),null;case 13:return Ou(e,t,r);case 4:return Zi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vr(t,null,a,r):ut(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Bt(a,i),ku(e,t,a,i,r);case 7:return ut(e,t,t.pendingProps,r),t.child;case 8:return ut(e,t,t.pendingProps.children,r),t.child;case 12:return ut(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,l=t.memoizedProps,u=i.value,Pe(oo,a._currentValue),a._currentValue=u,l!==null)if(_t(l.value,u)){if(l.children===i.children&&!ft.current){t=sn(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){u=l.child;for(var x=h.firstContext;x!==null;){if(x.context===a){if(l.tag===1){x=ln(-1,r&-r),x.tag=2;var C=l.updateQueue;if(C!==null){C=C.shared;var M=C.pending;M===null?x.next=x:(x.next=M.next,M.next=x),C.pending=x}}l.lanes|=r,x=l.alternate,x!==null&&(x.lanes|=r),Qi(l.return,r,t),h.lanes|=r;break}x=x.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=r,h=u.alternate,h!==null&&(h.lanes|=r),Qi(u,r,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}ut(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,yr(t,r),i=Tt(i),a=a(i),t.flags|=1,ut(e,t,a,r),t.child;case 14:return a=t.type,i=Bt(a,t.pendingProps),i=Bt(a.type,i),zu(e,t,a,i,r);case 15:return Nu(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Bt(a,i),xo(e,t),t.tag=1,gt(a)?(e=!0,Ja(t)):e=!1,yr(t,r),gu(t,a,i),pl(t,a,i,r),fl(null,t,a,!0,e,r);case 19:return Du(e,t,r);case 22:return Su(e,t,r)}throw Error(c(156,t.tag))};function rp(e,t){return Ls(e,t)}function uh(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,r,a){return new uh(e,t,r,a)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ph(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===H)return 14}return 2}function Dn(e,t){var r=e.alternate;return r===null?(r=Pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function To(e,t,r,a,i,l){var u=2;if(a=e,typeof e=="function")Il(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case xe:return Kn(r.children,i,l,t);case J:u=8,i|=8;break;case he:return e=Pt(12,r,t,i|2),e.elementType=he,e.lanes=l,e;case Ee:return e=Pt(13,r,t,i),e.elementType=Ee,e.lanes=l,e;case Re:return e=Pt(19,r,t,i),e.elementType=Re,e.lanes=l,e;case G:return Ro(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:u=10;break e;case ce:u=9;break e;case Ne:u=11;break e;case H:u=14;break e;case ve:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=Pt(u,r,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function Kn(e,t,r,a){return e=Pt(7,e,a,t),e.lanes=r,e}function Ro(e,t,r,a){return e=Pt(22,e,a,t),e.elementType=G,e.lanes=r,e.stateNode={isHidden:!1},e}function Ll(e,t,r){return e=Pt(6,e,null,t),e.lanes=r,e}function Ml(e,t,r){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dh(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _l(e,t,r,a,i,l,u,h,x){return e=new dh(e,t,r,h,x),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Pt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(l),e}function mh(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function ap(e){if(!e)return zn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(gt(r))return Pc(e,r,t)}return t}function op(e,t,r,a,i,l,u,h,x){return e=_l(r,a,!0,e,i,l,u,h,x),e.context=ap(null),r=e.current,a=pt(),i=On(r),l=ln(a,i),l.callback=t??null,Cn(r,l,i),e.current.lanes=i,Ur(e,i,a),yt(e,a),e}function Oo(e,t,r,a){var i=t.current,l=pt(),u=On(i);return r=ap(r),t.context===null?t.context=r:t.pendingContext=r,t=ln(l,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Cn(i,t,u),e!==null&&(Vt(e,i,u,l),lo(e,i,u)),u}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function jl(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function hh(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}Do.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Oo(e,t,null,null)},Do.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Oo(null,e,null,null)}),t[tn]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=$s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yn.length&&t!==0&&t<yn[r].priority;r++);yn.splice(r,0,e),r===0&&Gs(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function fh(e,t,r,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var C=Po(u);l.call(C)}}var u=op(t,a,e,0,null,!1,!1,"",sp);return e._reactRootContainer=u,e[tn]=u.current,na(e.nodeType===8?e.parentNode:e),Gn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var h=a;a=function(){var C=Po(x);h.call(C)}}var x=_l(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=x,e[tn]=x.current,na(e.nodeType===8?e.parentNode:e),Gn(function(){Oo(t,x,r,a)}),x}function Io(e,t,r,a,i){var l=r._reactRootContainer;if(l){var u=l;if(typeof i=="function"){var h=i;i=function(){var x=Po(u);h.call(x)}}Oo(t,u,e,i)}else u=fh(r,t,e,i,a);return Po(u)}Us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hr(t.pendingLanes);r!==0&&(pi(t,r|1),yt(t,Ue()),(ze&6)===0&&(zr=Ue()+500,Nn()))}break;case 13:Gn(function(){var a=on(e,1);if(a!==null){var i=pt();Vt(a,e,1,i)}}),jl(e,1)}},di=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var r=pt();Vt(t,e,134217728,r)}jl(e,134217728)}},Vs=function(e){if(e.tag===13){var t=On(e),r=on(e,t);if(r!==null){var a=pt();Vt(r,e,t,a)}jl(e,t)}},$s=function(){return Ae},Ys=function(e,t){var r=Ae;try{return Ae=e,t()}finally{Ae=r}},ai=function(e,t,r){switch(t){case"input":if(St(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=Xa(a);if(!i)throw Error(c(90));Y(a),St(a,i)}}}break;case"textarea":Es(e,r);break;case"select":t=r.value,t!=null&&ct(e,!!r.multiple,t,!1)}},Ts=Pl,Rs=Gn;var gh={usingClientEntryPoint:!1,Events:[oa,pr,Xa,Cs,As,Pl]},ya={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vh={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Pa=Lo.inject(vh),Wt=Lo}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gh,Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(t))throw Error(c(200));return mh(e,t,null,r)},Et.createRoot=function(e,t){if(!Hl(e))throw Error(c(299));var r=!1,a="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_l(e,1,!1,null,null,r,!1,a,i),e[tn]=t.current,na(e.nodeType===8?e.parentNode:e),new Bl(t)},Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e},Et.flushSync=function(e){return Gn(e)},Et.hydrate=function(e,t,r){if(!Fo(t))throw Error(c(200));return Io(null,e,t,!0,r)},Et.hydrateRoot=function(e,t,r){if(!Hl(e))throw Error(c(405));var a=r!=null&&r.hydratedSources||null,i=!1,l="",u=lp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=op(t,null,e,1,r??null,i,!1,l,u),e[tn]=t.current,na(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Do(t)},Et.render=function(e,t,r){if(!Fo(t))throw Error(c(200));return Io(null,e,t,!1,r)},Et.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(c(40));return e._reactRootContainer?(Gn(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1},Et.unstable_batchedUpdates=Pl,Et.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Fo(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Io(e,t,r,!1,a)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var hp;function Wp(){if(hp)return Vl.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),Vl.exports=Sh(),Vl.exports}var fp;function Ch(){if(fp)return Mo;fp=1;var o=Wp();return Mo.createRoot=o.createRoot,Mo.hydrateRoot=o.hydrateRoot,Mo}var Ah=Ch();Wp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},Na.apply(null,arguments)}var Ln;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Ln||(Ln={}));const gp="popstate";function Th(o){o===void 0&&(o={});function s(p,d){let{pathname:m,search:f,hash:v}=p.location;return ns("",{pathname:m,search:f,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(p,d){return typeof d=="string"?d:Vo(d)}return Oh(s,c,null,o)}function Be(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Gp(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Rh(){return Math.random().toString(36).substr(2,8)}function vp(o,s){return{usr:o.state,key:o.key,idx:s}}function ns(o,s,c,p){return c===void 0&&(c=null),Na({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?Dr(s):s,{state:c,key:s&&s.key||p||Rh()})}function Vo(o){let{pathname:s="/",search:c="",hash:p=""}=o;return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),p&&p!=="#"&&(s+=p.charAt(0)==="#"?p:"#"+p),s}function Dr(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substr(c),o=o.substr(0,c));let p=o.indexOf("?");p>=0&&(s.search=o.substr(p),o=o.substr(0,p)),o&&(s.pathname=o)}return s}function Oh(o,s,c,p){p===void 0&&(p={});let{window:d=document.defaultView,v5Compat:m=!1}=p,f=d.history,v=Ln.Pop,g=null,w=k();w==null&&(w=0,f.replaceState(Na({},f.state,{idx:w}),""));function k(){return(f.state||{idx:null}).idx}function z(){v=Ln.Pop;let A=k(),V=A==null?null:A-w;w=A,g&&g({action:v,location:T.location,delta:V})}function R(A,V){v=Ln.Push;let W=ns(T.location,A,V);w=k()+1;let Z=vp(W,w),q=T.createHref(W);try{f.pushState(Z,"",q)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;d.location.assign(q)}m&&g&&g({action:v,location:T.location,delta:1})}function L(A,V){v=Ln.Replace;let W=ns(T.location,A,V);w=k();let Z=vp(W,w),q=T.createHref(W);f.replaceState(Z,"",q),m&&g&&g({action:v,location:T.location,delta:0})}function B(A){let V=d.location.origin!=="null"?d.location.origin:d.location.href,W=typeof A=="string"?A:Vo(A);return W=W.replace(/ $/,"%20"),Be(V,"No window.location.(origin|href) available to create URL for href: "+W),new URL(W,V)}let T={get action(){return v},get location(){return o(d,f)},listen(A){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(gp,z),g=A,()=>{d.removeEventListener(gp,z),g=null}},createHref(A){return s(d,A)},createURL:B,encodeLocation(A){let V=B(A);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:R,replace:L,go(A){return f.go(A)}};return T}var xp;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(xp||(xp={}));function Ph(o,s,c){return c===void 0&&(c="/"),Dh(o,s,c)}function Dh(o,s,c,p){let d=typeof s=="string"?Dr(s):s,m=Or(d.pathname||"/",c);if(m==null)return null;let f=qp(o);Fh(f);let v=null,g=Yh(m);for(let w=0;v==null&&w<f.length;++w)v=Vh(f[w],g);return v}function qp(o,s,c,p){s===void 0&&(s=[]),c===void 0&&(c=[]),p===void 0&&(p="");let d=(m,f,v)=>{let g={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};g.relativePath.startsWith("/")&&(Be(g.relativePath.startsWith(p),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(p.length));let w=Mn([p,g.relativePath]),k=c.concat(g);m.children&&m.children.length>0&&(Be(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),qp(m.children,s,k,w)),!(m.path==null&&!m.index)&&s.push({path:w,score:Hh(w,m.index),routesMeta:k})};return o.forEach((m,f)=>{var v;if(m.path===""||!((v=m.path)!=null&&v.includes("?")))d(m,f);else for(let g of Qp(m.path))d(m,f,g)}),s}function Qp(o){let s=o.split("/");if(s.length===0)return[];let[c,...p]=s,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(p.length===0)return d?[m,""]:[m];let f=Qp(p.join("/")),v=[];return v.push(...f.map(g=>g===""?m:[m,g].join("/"))),d&&v.push(...f),v.map(g=>o.startsWith("/")&&g===""?"/":g)}function Fh(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:Uh(s.routesMeta.map(p=>p.childrenIndex),c.routesMeta.map(p=>p.childrenIndex)))}const Ih=/^:[\w-]+$/,Lh=3,Mh=2,_h=1,jh=10,Bh=-2,yp=o=>o==="*";function Hh(o,s){let c=o.split("/"),p=c.length;return c.some(yp)&&(p+=Bh),s&&(p+=Mh),c.filter(d=>!yp(d)).reduce((d,m)=>d+(Ih.test(m)?Lh:m===""?_h:jh),p)}function Uh(o,s){return o.length===s.length&&o.slice(0,-1).every((p,d)=>p===s[d])?o[o.length-1]-s[s.length-1]:0}function Vh(o,s,c){let{routesMeta:p}=o,d={},m="/",f=[];for(let v=0;v<p.length;++v){let g=p[v],w=v===p.length-1,k=m==="/"?s:s.slice(m.length)||"/",z=rs({path:g.relativePath,caseSensitive:g.caseSensitive,end:w},k),R=g.route;if(!z)return null;Object.assign(d,z.params),f.push({params:d,pathname:Mn([m,z.pathname]),pathnameBase:qh(Mn([m,z.pathnameBase])),route:R}),z.pathnameBase!=="/"&&(m=Mn([m,z.pathnameBase]))}return f}function rs(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,p]=$h(o.path,o.caseSensitive,o.end),d=s.match(c);if(!d)return null;let m=d[0],f=m.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:p.reduce((w,k,z)=>{let{paramName:R,isOptional:L}=k;if(R==="*"){let T=v[z]||"";f=m.slice(0,m.length-T.length).replace(/(.)\/+$/,"$1")}const B=v[z];return L&&!B?w[R]=void 0:w[R]=(B||"").replace(/%2F/g,"/"),w},{}),pathname:m,pathnameBase:f,pattern:o}}function $h(o,s,c){s===void 0&&(s=!1),c===void 0&&(c=!0),Gp(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let p=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,v,g)=>(p.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(p.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),p]}function Yh(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Gp(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function Or(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,p=o.charAt(c);return p&&p!=="/"?null:o.slice(c)||"/"}function Wh(o,s){s===void 0&&(s="/");let{pathname:c,search:p="",hash:d=""}=typeof o=="string"?Dr(o):o,m;return c?(c=Kp(c),c.startsWith("/")?m=Ep(c.substring(1),"/"):m=Ep(c,s)):m=s,{pathname:m,search:Qh(p),hash:Kh(d)}}function Ep(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Wl(o,s,c,p){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gh(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function fs(o,s){let c=Gh(o);return s?c.map((p,d)=>d===c.length-1?p.pathname:p.pathnameBase):c.map(p=>p.pathnameBase)}function gs(o,s,c,p){p===void 0&&(p=!1);let d;typeof o=="string"?d=Dr(o):(d=Na({},o),Be(!d.pathname||!d.pathname.includes("?"),Wl("?","pathname","search",d)),Be(!d.pathname||!d.pathname.includes("#"),Wl("#","pathname","hash",d)),Be(!d.search||!d.search.includes("#"),Wl("#","search","hash",d)));let m=o===""||d.pathname==="",f=m?"/":d.pathname,v;if(f==null)v=c;else{let z=s.length-1;if(!p&&f.startsWith("..")){let R=f.split("/");for(;R[0]==="..";)R.shift(),z-=1;d.pathname=R.join("/")}v=z>=0?s[z]:"/"}let g=Wh(d,v),w=f&&f!=="/"&&f.endsWith("/"),k=(m||f===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(w||k)&&(g.pathname+="/"),g}const Kp=o=>o.replace(/\/\/+/g,"/"),Mn=o=>Kp(o.join("/")),qh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Qh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Kh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Xh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Xp=["post","put","patch","delete"];new Set(Xp);const Zh=["get",...Xp];new Set(Zh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},Sa.apply(null,arguments)}const qo=y.createContext(null),Zp=y.createContext(null),mn=y.createContext(null),Qo=y.createContext(null),Jt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Jp=y.createContext(null);function Jh(o,s){let{relative:c}=s===void 0?{}:s;Fr()||Be(!1);let{basename:p,navigator:d}=y.useContext(mn),{hash:m,pathname:f,search:v}=Ko(o,{relative:c}),g=f;return p!=="/"&&(g=f==="/"?p:Mn([p,f])),d.createHref({pathname:g,search:v,hash:m})}function Fr(){return y.useContext(Qo)!=null}function en(){return Fr()||Be(!1),y.useContext(Qo).location}function ed(o){y.useContext(mn).static||y.useLayoutEffect(o)}function hn(){let{isDataRoute:o}=y.useContext(Jt);return o?ff():ef()}function ef(){Fr()||Be(!1);let o=y.useContext(qo),{basename:s,future:c,navigator:p}=y.useContext(mn),{matches:d}=y.useContext(Jt),{pathname:m}=en(),f=JSON.stringify(fs(d,c.v7_relativeSplatPath)),v=y.useRef(!1);return ed(()=>{v.current=!0}),y.useCallback(function(w,k){if(k===void 0&&(k={}),!v.current)return;if(typeof w=="number"){p.go(w);return}let z=gs(w,JSON.parse(f),m,k.relative==="path");o==null&&s!=="/"&&(z.pathname=z.pathname==="/"?s:Mn([s,z.pathname])),(k.replace?p.replace:p.push)(z,k.state,k)},[s,p,f,m,o])}const tf=y.createContext(null);function nf(o){let s=y.useContext(Jt).outlet;return s&&y.createElement(tf.Provider,{value:o},s)}function td(){let{matches:o}=y.useContext(Jt),s=o[o.length-1];return s?s.params:{}}function Ko(o,s){let{relative:c}=s===void 0?{}:s,{future:p}=y.useContext(mn),{matches:d}=y.useContext(Jt),{pathname:m}=en(),f=JSON.stringify(fs(d,p.v7_relativeSplatPath));return y.useMemo(()=>gs(o,JSON.parse(f),m,c==="path"),[o,f,m,c])}function rf(o,s){return af(o,s)}function af(o,s,c,p){Fr()||Be(!1);let{navigator:d}=y.useContext(mn),{matches:m}=y.useContext(Jt),f=m[m.length-1],v=f?f.params:{};f&&f.pathname;let g=f?f.pathnameBase:"/";f&&f.route;let w=en(),k;if(s){var z;let A=typeof s=="string"?Dr(s):s;g==="/"||(z=A.pathname)!=null&&z.startsWith(g)||Be(!1),k=A}else k=w;let R=k.pathname||"/",L=R;if(g!=="/"){let A=g.replace(/^\//,"").split("/");L="/"+R.replace(/^\//,"").split("/").slice(A.length).join("/")}let B=Ph(o,{pathname:L}),T=uf(B&&B.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:Mn([g,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Mn([g,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,c,p);return s&&T?y.createElement(Qo.Provider,{value:{location:Sa({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:Ln.Pop}},T):T}function of(){let o=hf(),s=Xh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),c?y.createElement("pre",{style:d},c):null,null)}const lf=y.createElement(of,null);class sf extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){console.error("React Router caught the following error during render",s,c)}render(){return this.state.error!==void 0?y.createElement(Jt.Provider,{value:this.props.routeContext},y.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cf(o){let{routeContext:s,match:c,children:p}=o,d=y.useContext(qo);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(Jt.Provider,{value:s},p)}function uf(o,s,c,p){var d;if(s===void 0&&(s=[]),c===void 0&&(c=null),p===void 0&&(p=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=p)!=null&&m.v7_partialHydration&&s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let f=o,v=(d=c)==null?void 0:d.errors;if(v!=null){let k=f.findIndex(z=>z.route.id&&(v==null?void 0:v[z.route.id])!==void 0);k>=0||Be(!1),f=f.slice(0,Math.min(f.length,k+1))}let g=!1,w=-1;if(c&&p&&p.v7_partialHydration)for(let k=0;k<f.length;k++){let z=f[k];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(w=k),z.route.id){let{loaderData:R,errors:L}=c,B=z.route.loader&&R[z.route.id]===void 0&&(!L||L[z.route.id]===void 0);if(z.route.lazy||B){g=!0,w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}return f.reduceRight((k,z,R)=>{let L,B=!1,T=null,A=null;c&&(L=v&&z.route.id?v[z.route.id]:void 0,T=z.route.errorElement||lf,g&&(w<0&&R===0?(gf("route-fallback"),B=!0,A=null):w===R&&(B=!0,A=z.route.hydrateFallbackElement||null)));let V=s.concat(f.slice(0,R+1)),W=()=>{let Z;return L?Z=T:B?Z=A:z.route.Component?Z=y.createElement(z.route.Component,null):z.route.element?Z=z.route.element:Z=k,y.createElement(cf,{match:z,routeContext:{outlet:k,matches:V,isDataRoute:c!=null},children:Z})};return c&&(z.route.ErrorBoundary||z.route.errorElement||R===0)?y.createElement(sf,{location:c.location,revalidation:c.revalidation,component:T,error:L,children:W(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):W()},null)}var nd=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(nd||{}),rd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(rd||{});function pf(o){let s=y.useContext(qo);return s||Be(!1),s}function df(o){let s=y.useContext(Zp);return s||Be(!1),s}function mf(o){let s=y.useContext(Jt);return s||Be(!1),s}function ad(o){let s=mf(),c=s.matches[s.matches.length-1];return c.route.id||Be(!1),c.route.id}function hf(){var o;let s=y.useContext(Jp),c=df(),p=ad();return s!==void 0?s:(o=c.errors)==null?void 0:o[p]}function ff(){let{router:o}=pf(nd.UseNavigateStable),s=ad(rd.UseNavigateStable),c=y.useRef(!1);return ed(()=>{c.current=!0}),y.useCallback(function(d,m){m===void 0&&(m={}),c.current&&(typeof d=="number"?o.navigate(d):o.navigate(d,Sa({fromRouteId:s},m)))},[o,s])}const wp={};function gf(o,s,c){wp[o]||(wp[o]=!0)}function vf(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xf(o){let{to:s,replace:c,state:p,relative:d}=o;Fr()||Be(!1);let{future:m,static:f}=y.useContext(mn),{matches:v}=y.useContext(Jt),{pathname:g}=en(),w=hn(),k=gs(s,fs(v,m.v7_relativeSplatPath),g,d==="path"),z=JSON.stringify(k);return y.useEffect(()=>w(JSON.parse(z),{replace:c,state:p,relative:d}),[w,z,d,c,p]),null}function yf(o){return nf(o.context)}function Je(o){Be(!1)}function Ef(o){let{basename:s="/",children:c=null,location:p,navigationType:d=Ln.Pop,navigator:m,static:f=!1,future:v}=o;Fr()&&Be(!1);let g=s.replace(/^\/*/,"/"),w=y.useMemo(()=>({basename:g,navigator:m,static:f,future:Sa({v7_relativeSplatPath:!1},v)}),[g,v,m,f]);typeof p=="string"&&(p=Dr(p));let{pathname:k="/",search:z="",hash:R="",state:L=null,key:B="default"}=p,T=y.useMemo(()=>{let A=Or(k,g);return A==null?null:{location:{pathname:A,search:z,hash:R,state:L,key:B},navigationType:d}},[g,k,z,R,L,B,d]);return T==null?null:y.createElement(mn.Provider,{value:w},y.createElement(Qo.Provider,{children:c,value:T}))}function wf(o){let{children:s,location:c}=o;return rf(as(s),c)}new Promise(()=>{});function as(o,s){s===void 0&&(s=[]);let c=[];return y.Children.forEach(o,(p,d)=>{if(!y.isValidElement(p))return;let m=[...s,d];if(p.type===y.Fragment){c.push.apply(c,as(p.props.children,m));return}p.type!==Je&&Be(!1),!p.props.index||!p.props.children||Be(!1);let f={id:p.props.id||m.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(f.children=as(p.props.children,m)),c.push(f)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},$o.apply(null,arguments)}function od(o,s){if(o==null)return{};var c={};for(var p in o)if({}.hasOwnProperty.call(o,p)){if(s.indexOf(p)!==-1)continue;c[p]=o[p]}return c}function bf(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function kf(o,s){return o.button===0&&(!s||s==="_self")&&!bf(o)}function os(o){return o===void 0&&(o=""),new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,c)=>{let p=o[c];return s.concat(Array.isArray(p)?p.map(d=>[c,d]):[[c,p]])},[]))}function zf(o,s){let c=os(o);return s&&s.forEach((p,d)=>{c.has(d)||s.getAll(d).forEach(m=>{c.append(d,m)})}),c}const Nf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Cf="6";try{window.__reactRouterVersion=Cf}catch{}const Af=y.createContext({isTransitioning:!1}),Tf="startTransition",bp=kh[Tf];function Rf(o){let{basename:s,children:c,future:p,window:d}=o,m=y.useRef();m.current==null&&(m.current=Th({window:d,v5Compat:!0}));let f=m.current,[v,g]=y.useState({action:f.action,location:f.location}),{v7_startTransition:w}=p||{},k=y.useCallback(z=>{w&&bp?bp(()=>g(z)):g(z)},[g,w]);return y.useLayoutEffect(()=>f.listen(k),[f,k]),y.useEffect(()=>vf(p),[p]),y.createElement(Ef,{basename:s,children:c,location:v.location,navigationType:v.action,navigator:f,future:p})}const Of=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=y.forwardRef(function(s,c){let{onClick:p,relative:d,reloadDocument:m,replace:f,state:v,target:g,to:w,preventScrollReset:k,viewTransition:z}=s,R=od(s,Nf),{basename:L}=y.useContext(mn),B,T=!1;if(typeof w=="string"&&Pf.test(w)&&(B=w,Of))try{let Z=new URL(window.location.href),q=w.startsWith("//")?new URL(Z.protocol+w):new URL(w),ie=Or(q.pathname,L);q.origin===Z.origin&&ie!=null?w=ie+q.search+q.hash:T=!0}catch{}let A=Jh(w,{relative:d}),V=Ff(w,{replace:f,state:v,target:g,preventScrollReset:k,relative:d,viewTransition:z});function W(Z){p&&p(Z),Z.defaultPrevented||V(Z)}return y.createElement("a",$o({},R,{href:B||A,onClick:T||m?p:W,ref:c,target:g}))}),In=y.forwardRef(function(s,c){let{"aria-current":p="page",caseSensitive:d=!1,className:m="",end:f=!1,style:v,to:g,viewTransition:w,children:k}=s,z=od(s,Sf),R=Ko(g,{relative:z.relative}),L=en(),B=y.useContext(Zp),{navigator:T,basename:A}=y.useContext(mn),V=B!=null&&Lf(R)&&w===!0,W=T.encodeLocation?T.encodeLocation(R).pathname:R.pathname,Z=L.pathname,q=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;d||(Z=Z.toLowerCase(),q=q?q.toLowerCase():null,W=W.toLowerCase()),q&&A&&(q=Or(q,A)||q);const ie=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let se=Z===W||!f&&Z.startsWith(W)&&Z.charAt(ie)==="/",xe=q!=null&&(q===W||!f&&q.startsWith(W)&&q.charAt(W.length)==="/"),J={isActive:se,isPending:xe,isTransitioning:V},he=se?p:void 0,U;typeof m=="function"?U=m(J):U=[m,se?"active":null,xe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let ce=typeof v=="function"?v(J):v;return y.createElement(X,$o({},z,{"aria-current":he,className:U,ref:c,style:ce,to:g,viewTransition:w}),typeof k=="function"?k(J):k)});var is;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(is||(is={}));var kp;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(kp||(kp={}));function Df(o){let s=y.useContext(qo);return s||Be(!1),s}function Ff(o,s){let{target:c,replace:p,state:d,preventScrollReset:m,relative:f,viewTransition:v}=s===void 0?{}:s,g=hn(),w=en(),k=Ko(o,{relative:f});return y.useCallback(z=>{if(kf(z,c)){z.preventDefault();let R=p!==void 0?p:Vo(w)===Vo(k);g(o,{replace:R,state:d,preventScrollReset:m,relative:f,viewTransition:v})}},[w,g,k,p,d,c,o,m,f,v])}function If(o){let s=y.useRef(os(o)),c=y.useRef(!1),p=en(),d=y.useMemo(()=>zf(p.search,c.current?null:s.current),[p.search]),m=hn(),f=y.useCallback((v,g)=>{const w=os(typeof v=="function"?v(d):v);c.current=!0,m("?"+w,g)},[m,d]);return[d,f]}function Lf(o,s){s===void 0&&(s={});let c=y.useContext(Af);c==null&&Be(!1);let{basename:p}=Df(is.useViewTransitionState),d=Ko(o,{relative:s.relative});if(!c.isTransitioning)return!1;let m=Or(c.currentLocation.pathname,p)||c.currentLocation.pathname,f=Or(c.nextLocation.pathname,p)||c.nextLocation.pathname;return rs(d.pathname,f)!=null||rs(d.pathname,m)!=null}var Gl,zp;function Mf(){if(zp)return Gl;zp=1;var o=typeof Element<"u",s=typeof Map=="function",c=typeof Set=="function",p=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var v,g,w;if(Array.isArray(m)){if(v=m.length,v!=f.length)return!1;for(g=v;g--!==0;)if(!d(m[g],f[g]))return!1;return!0}var k;if(s&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!f.has(g.value[0]))return!1;for(k=m.entries();!(g=k.next()).done;)if(!d(g.value[1],f.get(g.value[0])))return!1;return!0}if(c&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!f.has(g.value[0]))return!1;return!0}if(p&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(v=m.length,v!=f.length)return!1;for(g=v;g--!==0;)if(m[g]!==f[g])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(w=Object.keys(m),v=w.length,v!==Object.keys(f).length)return!1;for(g=v;g--!==0;)if(!Object.prototype.hasOwnProperty.call(f,w[g]))return!1;if(o&&m instanceof Element)return!1;for(g=v;g--!==0;)if(!((w[g]==="_owner"||w[g]==="__v"||w[g]==="__o")&&m.$$typeof)&&!d(m[w[g]],f[w[g]]))return!1;return!0}return m!==m&&f!==f}return Gl=function(f,v){try{return d(f,v)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},Gl}var _f=Mf();const jf=Go(_f);var ql,Np;function Bf(){if(Np)return ql;Np=1;var o=function(s,c,p,d,m,f,v,g){if(!s){var w;if(c===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[p,d,m,f,v,g],z=0;w=new Error(c.replace(/%s/g,function(){return k[z++]})),w.name="Invariant Violation"}throw w.framesToPop=1,w}};return ql=o,ql}var Hf=Bf();const Sp=Go(Hf);var Ql,Cp;function Uf(){return Cp||(Cp=1,Ql=function(s,c,p,d){var m=p?p.call(d,s,c):void 0;if(m!==void 0)return!!m;if(s===c)return!0;if(typeof s!="object"||!s||typeof c!="object"||!c)return!1;var f=Object.keys(s),v=Object.keys(c);if(f.length!==v.length)return!1;for(var g=Object.prototype.hasOwnProperty.bind(c),w=0;w<f.length;w++){var k=f[w];if(!g(k))return!1;var z=s[k],R=c[k];if(m=p?p.call(d,z,R,k):void 0,m===!1||m===void 0&&z!==R)return!1}return!0}),Ql}var Vf=Uf();const $f=Go(Vf);var id=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(id||{}),Kl={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ap=Object.values(id),vs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yf=Object.entries(vs).reduce((o,[s,c])=>(o[c]=s,o),{}),$t="data-rh",Cr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ar=(o,s)=>{for(let c=o.length-1;c>=0;c-=1){const p=o[c];if(Object.prototype.hasOwnProperty.call(p,s))return p[s]}return null},Wf=o=>{let s=Ar(o,"title");const c=Ar(o,Cr.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),c&&s)return c.replace(/%s/g,()=>s);const p=Ar(o,Cr.DEFAULT_TITLE);return s||p||void 0},Gf=o=>Ar(o,Cr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Xl=(o,s)=>s.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,p)=>({...c,...p}),{}),qf=(o,s)=>s.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,p)=>{if(!c.length){const d=Object.keys(p);for(let m=0;m<d.length;m+=1){const v=d[m].toLowerCase();if(o.indexOf(v)!==-1&&p[v])return c.concat(p)}}return c},[]),Qf=o=>console&&typeof console.warn=="function"&&console.warn(o),Ea=(o,s,c)=>{const p={};return c.filter(d=>Array.isArray(d[o])?!0:(typeof d[o]<"u"&&Qf(`Helmet: ${o} should be of type "Array". Instead found type "${typeof d[o]}"`),!1)).map(d=>d[o]).reverse().reduce((d,m)=>{const f={};m.filter(g=>{let w;const k=Object.keys(g);for(let R=0;R<k.length;R+=1){const L=k[R],B=L.toLowerCase();s.indexOf(B)!==-1&&!(w==="rel"&&g[w].toLowerCase()==="canonical")&&!(B==="rel"&&g[B].toLowerCase()==="stylesheet")&&(w=B),s.indexOf(L)!==-1&&(L==="innerHTML"||L==="cssText"||L==="itemprop")&&(w=L)}if(!w||!g[w])return!1;const z=g[w].toLowerCase();return p[w]||(p[w]={}),f[w]||(f[w]={}),p[w][z]?!1:(f[w][z]=!0,!0)}).reverse().forEach(g=>d.push(g));const v=Object.keys(f);for(let g=0;g<v.length;g+=1){const w=v[g],k={...p[w],...f[w]};p[w]=k}return d},[]).reverse()},Kf=(o,s)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][s])return!0}return!1},Xf=o=>({baseTag:qf(["href"],o),bodyAttributes:Xl("bodyAttributes",o),defer:Ar(o,Cr.DEFER),encode:Ar(o,Cr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Xl("htmlAttributes",o),linkTags:Ea("link",["rel","href"],o),metaTags:Ea("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:Ea("noscript",["innerHTML"],o),onChangeClientState:Gf(o),scriptTags:Ea("script",["src","innerHTML"],o),styleTags:Ea("style",["cssText"],o),title:Wf(o),titleAttributes:Xl("titleAttributes",o),prioritizeSeoTags:Kf(o,Cr.PRIORITIZE_SEO_TAGS)}),ld=o=>Array.isArray(o)?o.join(""):o,Zf=(o,s)=>{const c=Object.keys(o);for(let p=0;p<c.length;p+=1)if(s[c[p]]&&s[c[p]].includes(o[c[p]]))return!0;return!1},Zl=(o,s)=>Array.isArray(o)?o.reduce((c,p)=>(Zf(p,s)?c.priority.push(p):c.default.push(p),c),{priority:[],default:[]}):{default:o,priority:[]},Tp=(o,s)=>({...o,[s]:void 0}),Jf=["noscript","script","style"],ls=(o,s=!0)=>s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),sd=o=>Object.keys(o).reduce((s,c)=>{const p=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return s?`${s} ${p}`:p},""),eg=(o,s,c,p)=>{const d=sd(c),m=ld(s);return d?`<${o} ${$t}="true" ${d}>${ls(m,p)}</${o}>`:`<${o} ${$t}="true">${ls(m,p)}</${o}>`},tg=(o,s,c=!0)=>s.reduce((p,d)=>{const m=d,f=Object.keys(m).filter(w=>!(w==="innerHTML"||w==="cssText")).reduce((w,k)=>{const z=typeof m[k]>"u"?k:`${k}="${ls(m[k],c)}"`;return w?`${w} ${z}`:z},""),v=m.innerHTML||m.cssText||"",g=Jf.indexOf(o)===-1;return`${p}<${o} ${$t}="true" ${f}${g?"/>":`>${v}</${o}>`}`},""),cd=(o,s={})=>Object.keys(o).reduce((c,p)=>{const d=vs[p];return c[d||p]=o[p],c},s),ng=(o,s,c)=>{const p={key:s,[$t]:!0},d=cd(c,p);return[n.createElement("title",d,s)]},Uo=(o,s)=>s.map((c,p)=>{const d={key:p,[$t]:!0};return Object.keys(c).forEach(m=>{const v=vs[m]||m;if(v==="innerHTML"||v==="cssText"){const g=c.innerHTML||c.cssText;d.dangerouslySetInnerHTML={__html:g}}else d[v]=c[m]}),n.createElement(o,d)}),Ft=(o,s,c=!0)=>{switch(o){case"title":return{toComponent:()=>ng(o,s.title,s.titleAttributes),toString:()=>eg(o,s.title,s.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>cd(s),toString:()=>sd(s)};default:return{toComponent:()=>Uo(o,s),toString:()=>tg(o,s,c)}}},rg=({metaTags:o,linkTags:s,scriptTags:c,encode:p})=>{const d=Zl(o,Kl.meta),m=Zl(s,Kl.link),f=Zl(c,Kl.script);return{priorityMethods:{toComponent:()=>[...Uo("meta",d.priority),...Uo("link",m.priority),...Uo("script",f.priority)],toString:()=>`${Ft("meta",d.priority,p)} ${Ft("link",m.priority,p)} ${Ft("script",f.priority,p)}`},metaTags:d.default,linkTags:m.default,scriptTags:f.default}},ag=o=>{const{baseTag:s,bodyAttributes:c,encode:p=!0,htmlAttributes:d,noscriptTags:m,styleTags:f,title:v="",titleAttributes:g,prioritizeSeoTags:w}=o;let{linkTags:k,metaTags:z,scriptTags:R}=o,L={toComponent:()=>{},toString:()=>""};return w&&({priorityMethods:L,linkTags:k,metaTags:z,scriptTags:R}=rg(o)),{priority:L,base:Ft("base",s,p),bodyAttributes:Ft("bodyAttributes",c,p),htmlAttributes:Ft("htmlAttributes",d,p),link:Ft("link",k,p),meta:Ft("meta",z,p),noscript:Ft("noscript",m,p),script:Ft("script",R,p),style:Ft("style",f,p),title:Ft("title",{title:v,titleAttributes:g},p)}},ss=ag,_o=[],ud=!!(typeof window<"u"&&window.document&&window.document.createElement),cs=class{constructor(o,s){un(this,"instances",[]);un(this,"canUseDOM",ud);un(this,"context");un(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?_o:this.instances,add:o=>{(this.canUseDOM?_o:this.instances).push(o)},remove:o=>{const s=(this.canUseDOM?_o:this.instances).indexOf(o);(this.canUseDOM?_o:this.instances).splice(s,1)}}});this.context=o,this.canUseDOM=s||!1,s||(o.helmet=ss({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},og={},pd=n.createContext(og),Zn,dd=(Zn=class extends y.Component{constructor(c){super(c);un(this,"helmetData");this.helmetData=new cs(this.props.context||{},Zn.canUseDOM)}render(){return n.createElement(pd.Provider,{value:this.helmetData.value},this.props.children)}},un(Zn,"canUseDOM",ud),Zn),Sr=(o,s)=>{const c=document.head||document.querySelector("head"),p=c.querySelectorAll(`${o}[${$t}]`),d=[].slice.call(p),m=[];let f;return s&&s.length&&s.forEach(v=>{const g=document.createElement(o);for(const w in v)if(Object.prototype.hasOwnProperty.call(v,w))if(w==="innerHTML")g.innerHTML=v.innerHTML;else if(w==="cssText")g.styleSheet?g.styleSheet.cssText=v.cssText:g.appendChild(document.createTextNode(v.cssText));else{const k=w,z=typeof v[k]>"u"?"":v[k];g.setAttribute(w,z)}g.setAttribute($t,"true"),d.some((w,k)=>(f=k,g.isEqualNode(w)))?d.splice(f,1):m.push(g)}),d.forEach(v=>{var g;return(g=v.parentNode)==null?void 0:g.removeChild(v)}),m.forEach(v=>c.appendChild(v)),{oldTags:d,newTags:m}},us=(o,s)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const p=c.getAttribute($t),d=p?p.split(","):[],m=[...d],f=Object.keys(s);for(const v of f){const g=s[v]||"";c.getAttribute(v)!==g&&c.setAttribute(v,g),d.indexOf(v)===-1&&d.push(v);const w=m.indexOf(v);w!==-1&&m.splice(w,1)}for(let v=m.length-1;v>=0;v-=1)c.removeAttribute(m[v]);d.length===m.length?c.removeAttribute($t):c.getAttribute($t)!==f.join(",")&&c.setAttribute($t,f.join(","))},ig=(o,s)=>{typeof o<"u"&&document.title!==o&&(document.title=ld(o)),us("title",s)},Rp=(o,s)=>{const{baseTag:c,bodyAttributes:p,htmlAttributes:d,linkTags:m,metaTags:f,noscriptTags:v,onChangeClientState:g,scriptTags:w,styleTags:k,title:z,titleAttributes:R}=o;us("body",p),us("html",d),ig(z,R);const L={baseTag:Sr("base",c),linkTags:Sr("link",m),metaTags:Sr("meta",f),noscriptTags:Sr("noscript",v),scriptTags:Sr("script",w),styleTags:Sr("style",k)},B={},T={};Object.keys(L).forEach(A=>{const{newTags:V,oldTags:W}=L[A];V.length&&(B[A]=V),W.length&&(T[A]=L[A].oldTags)}),s&&s(),g(o,B,T)},wa=null,lg=o=>{wa&&cancelAnimationFrame(wa),o.defer?wa=requestAnimationFrame(()=>{Rp(o,()=>{wa=null})}):(Rp(o),wa=null)},sg=lg,Op=class extends y.Component{constructor(){super(...arguments);un(this,"rendered",!1)}shouldComponentUpdate(s){return!$f(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:c}=this.props.context;let p=null;const d=Xf(s.get().map(m=>{const f={...m.props};return delete f.context,f}));dd.canUseDOM?sg(d):ss&&(p=ss(d)),c(p)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},ts,cg=(ts=class extends y.Component{shouldComponentUpdate(o){return!jf(Tp(this.props,"helmetData"),Tp(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,c,p){return{...s,[o.type]:[...s[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,p)}]}}mapObjectTypeChildren(o,s,c,p){switch(o.type){case"title":return{...s,[o.type]:p,titleAttributes:{...c}};case"body":return{...s,bodyAttributes:{...c}};case"html":return{...s,htmlAttributes:{...c}};default:return{...s,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,s){let c={...s};return Object.keys(o).forEach(p=>{c={...c,[p]:o[p]}}),c}warnOnInvalidChildren(o,s){return Sp(Ap.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ap.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Sp(!s||typeof s=="string"||Array.isArray(s)&&!s.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let c={};return n.Children.forEach(o,p=>{if(!p||!p.props)return;const{children:d,...m}=p.props,f=Object.keys(m).reduce((g,w)=>(g[Yf[w]||w]=m[w],g),{});let{type:v}=p;switch(typeof v=="symbol"?v=v.toString():this.warnOnInvalidChildren(p,d),v){case"Symbol(react.fragment)":s=this.mapChildrenToProps(d,s);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(p,c,f,d);break;default:s=this.mapObjectTypeChildren(p,s,f,d);break}}),this.mapArrayTypeChildrenToProps(c,s)}render(){const{children:o,...s}=this.props;let c={...s},{helmetData:p}=s;if(o&&(c=this.mapChildrenToProps(o,c)),p&&!(p instanceof cs)){const d=p;p=new cs(d.context,!0),delete c.helmetData}return p?n.createElement(Op,{...c,context:p.value}):n.createElement(pd.Consumer,null,d=>n.createElement(Op,{...c,context:d}))}},un(ts,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ts);const Pp="https://hovira-backend-nine.vercel.app/api";class Dp extends Error{constructor(s,c=0,p=null){super(s),this.name="ApiError",this.status=c,this.payload=p}}function md(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function hd(o){o&&(localStorage.setItem("token",o),localStorage.setItem("customerToken",o))}function Fp(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function Dt(o,s=[]){if(!o||typeof o!="object")return o;for(const c of s)if(o[c]!==void 0)return o[c];if(o.data!==void 0){const c=o.data;if(c&&typeof c=="object"){for(const p of s)if(c[p]!==void 0)return c[p]}return c}return o}async function nt(o,s={}){const{body:c,headers:p={},...d}=s,m=md(),f={Accept:"application/json",...p};let v=c;c!==void 0&&!(c instanceof FormData)&&typeof c!="string"&&(f["Content-Type"]="application/json",v=JSON.stringify(c)),m&&!f.Authorization&&(f.Authorization=`Bearer ${m}`);let g;try{g=await fetch(`${Pp}${o.startsWith("/")?o:`/${o}`}`,{...d,headers:f,body:v})}catch(z){throw new Dp(`Cannot connect to API at ${Pp}. Check that your backend is running and CORS is enabled.`,0,z)}const k=(g.headers.get("content-type")||"").includes("application/json")?await g.json().catch(()=>({})):await g.text();if(!g.ok){const z=(k==null?void 0:k.message)||(k==null?void 0:k.error)||(typeof k=="string"?k:`Request failed (${g.status})`);throw new Dp(z,g.status,k)}return k}const Te={products:async(o={})=>{const s=new URLSearchParams;Object.entries(o).forEach(([d,m])=>{m!==""&&m!=null&&s.set(d,m)});const c=await nt(`/products${s.toString()?`?${s}`:""}`),p=Dt(c,["products","items","results"]);return Array.isArray(p)?p:(p==null?void 0:p.products)||(p==null?void 0:p.items)||[]},product:async o=>Dt(await nt(`/products/${encodeURIComponent(o)}`),["product","item"]),register:async o=>nt("/auth/customers/register",{method:"POST",body:o}),login:async o=>nt("/auth/customers/login",{method:"POST",body:o}),me:async()=>Dt(await nt("/customers/me"),["customer","user","profile"]),updateMe:async o=>Dt(await nt("/customers/me",{method:"PATCH",body:o}),["customer","user","profile"]),changePassword:o=>nt("/customers/me/password",{method:"PATCH",body:o}),addAddress:async o=>Dt(await nt("/customers/me/addresses",{method:"POST",body:o}),["customer","address"]),updateAddress:async(o,s)=>Dt(await nt(`/customers/me/addresses/${o}`,{method:"PATCH",body:s}),["customer","address"]),deleteAddress:async o=>nt(`/customers/me/addresses/${o}`,{method:"DELETE"}),orders:async()=>{const o=Dt(await nt("/orders/my"),["orders","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.orders)||[]},order:async o=>Dt(await nt(`/orders/my/${o}`),["order","item"]),createOrder:async o=>Dt(await nt("/orders",{method:"POST",body:o}),["order","data"]),coupons:async()=>{const o=Dt(await nt("/coupons"),["coupons","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.coupons)||[]},validateCoupon:o=>nt("/coupons/validate",{method:"POST",body:o}),createRazorpayOrder:async({orderId:o})=>nt("/payments/razorpay/create-order",{method:"POST",body:{orderId:o}}),verifyRazorpayPayment:async({orderId:o,razorpay_order_id:s,razorpay_payment_id:c,razorpay_signature:p})=>nt("/payments/razorpay/verify",{method:"POST",body:{orderId:o,razorpay_order_id:s,razorpay_payment_id:c,razorpay_signature:p}})},Le=(o,s="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:s||"INR",maximumFractionDigits:0}).format(Number(o)||0),Xo=o=>{var p;if(!o)return"";const s=o.images||[],c=((p=s.find)==null?void 0:p.call(s,d=>d==null?void 0:d.isPrimary))||s[0];return(c==null?void 0:c.url)||o.image||o.imageUrl||""},pn=o=>(o==null?void 0:o.salePrice)!=null?Number(o.salePrice):Number((o==null?void 0:o.price)||0),Xn=o=>String((o==null?void 0:o._id)||(o==null?void 0:o.id)||(o==null?void 0:o.slug)||""),ka=o=>`/product/${encodeURIComponent((o==null?void 0:o.slug)||(o==null?void 0:o._id)||(o==null?void 0:o.id))}`,fd=y.createContext(null),Jl=(o,s)=>{try{return JSON.parse(localStorage.getItem(o))??s}catch{return s}};function ug({children:o}){const[s,c]=y.useState(()=>Jl("hovira-cart",[])),[p,d]=y.useState(()=>Jl("hovira-wishlist",[])),[m,f]=y.useState(()=>Jl("customer",null)),[v,g]=y.useState([]),[w,k]=y.useState(!1),[z,R]=y.useState(!1),[L,B]=y.useState("");y.useEffect(()=>{localStorage.setItem("hovira-cart",JSON.stringify(s))},[s]),y.useEffect(()=>{localStorage.setItem("hovira-wishlist",JSON.stringify(p))},[p]),y.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]);const T=y.useCallback(async()=>{var Ne;k(!1),R(!1),B("");const J=Te.products(),he=md()?Te.me():Promise.resolve(null),[U,ce]=await Promise.allSettled([J,he]);if(U.status==="fulfilled")g(U.value||[]);else return console.error("Initial products API error:",U.reason),B(((Ne=U.reason)==null?void 0:Ne.message)||"Unable to load products. Please try again."),R(!0),!1;return ce.status==="fulfilled"?ce.value&&f(ce.value):(console.error("Customer authentication error:",ce.reason),Fp(),f(null)),R(!0),k(!0),!0},[]);y.useEffect(()=>{T()},[T]);const A=(J,he=1,U="")=>c(ce=>{const Ee=`${Xn(J)}:${U}`;return ce.find(H=>H.key===Ee)?ce.map(H=>H.key===Ee?{...H,quantity:Math.min(99,H.quantity+he)}:H):[...ce,{key:Ee,product:J,quantity:Math.max(1,he),variant:U}]}),V=(J,he)=>c(U=>he<=0?U.filter(ce=>ce.key!==J):U.map(ce=>ce.key===J?{...ce,quantity:Math.min(99,he)}:ce)),W=J=>c(he=>he.filter(U=>U.key!==J)),Z=()=>c([]),q=J=>d(he=>he.some(U=>Xn(U)===Xn(J))?he.filter(U=>Xn(U)!==Xn(J)):[...he,J]),ie=J=>p.some(he=>Xn(he)===Xn(J)),se=()=>{Fp(),f(null)},xe=y.useMemo(()=>({cart:s,wishlist:p,customer:m,setCustomer:f,authReady:z,products:v,appReady:w,appError:L,retryInitialLoad:T,addToCart:A,updateQuantity:V,removeFromCart:W,clearCart:Z,toggleWishlist:q,isWishlisted:ie,logout:se}),[s,p,m,z,v,w,L,T]);return n.createElement(fd.Provider,{value:xe},o)}const Yt=()=>y.useContext(fd);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gd=(...o)=>o.filter((s,c,p)=>!!s&&s.trim()!==""&&p.indexOf(s)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=y.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:p,className:d="",children:m,iconNode:f,...v},g)=>y.createElement("svg",{ref:g,...dg,width:s,height:s,stroke:o,strokeWidth:p?Number(c)*24/Number(s):c,className:gd("lucide",d),...v},[...f.map(([w,k])=>y.createElement(w,k)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(o,s)=>{const c=y.forwardRef(({className:p,...d},m)=>y.createElement(mg,{ref:m,iconNode:s,className:gd(`lucide-${pg(o)}`,p),...d}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=le("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=le("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=le("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=le("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=le("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=le("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=le("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=le("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=le("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=le("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=le("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=le("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=le("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=le("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=le("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=le("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=le("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=le("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=le("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=le("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=le("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=le("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=le("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=le("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=le("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=le("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=le("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=le("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=le("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=le("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=le("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=le("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=le("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=le("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=le("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=le("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=le("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=le("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),hs="/assets/logo-YzEykGB1.png";function Lg(){const[o,s]=y.useState(!1),[c,p]=y.useState(""),[d,m]=y.useState(!1),{cart:f,wishlist:v,customer:g}=Yt(),w=hn(),k=f.reduce((T,A)=>T+Number(A.quantity||0),0),z=v.length;y.useEffect(()=>{const T=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>window.removeEventListener("scroll",T)},[]),y.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const R=T=>{T.preventDefault(),w(`/shop${c.trim()?`?search=${encodeURIComponent(c.trim())}`:""}`),s(!1)},L=()=>s(!1),B=({isActive:T})=>`hv-nav-link ${T?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(X,{to:"/shop"},"Explore Collection ",n.createElement(ye,{size:13}))),n.createElement("header",{className:`hv-header ${d?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>s(!o),"aria-label":o?"Close menu":"Open menu","aria-expanded":o},o?n.createElement(wt,{size:23}):n.createElement(Sg,{size:23})),n.createElement(X,{to:"/",className:"hv-brand",onClick:L,"aria-label":"HOVIRA Home"},n.createElement("img",{src:hs,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(In,{to:"/",end:!0,className:B},"Home"),n.createElement(In,{to:"/shop",className:B},"Shop All"),n.createElement(In,{to:"/shop?category=Best%20sellers",className:B},"Best Sellers"),n.createElement(In,{to:"/about",className:B},"Our Story")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:R},n.createElement(ms,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(X,{className:"hv-header-icon",to:g?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(Rr,{size:21})),n.createElement(X,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${z} items`,title:"Wishlist"},n.createElement(mt,{size:21}),z>0&&n.createElement("span",{className:"hv-count"},z>99?"99+":z)),n.createElement(X,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${k} items`,title:"Shopping Bag"},n.createElement(Lt,{size:21}),k>0&&n.createElement("span",{className:"hv-count"},k>99?"99+":k)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:R},n.createElement(ms,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(ye,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${o?"show":""}`,onClick:L}),n.createElement("aside",{className:`hv-mobile-drawer ${o?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(X,{to:"/",onClick:L},n.createElement("img",{src:hs,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:L,"aria-label":"Close menu"},n.createElement(wt,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(In,{to:"/",end:!0,onClick:L},"Home ",n.createElement(ye,{size:17})),n.createElement(In,{to:"/shop",onClick:L},"Shop All ",n.createElement(ye,{size:17})),n.createElement(In,{to:"/shop?category=Best%20sellers",onClick:L},"Best Sellers ",n.createElement(ye,{size:17})),n.createElement(In,{to:"/about",onClick:L},"Our Story ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"hv-drawer-account"},n.createElement(X,{to:g?"/account":"/login",onClick:L},n.createElement(Rr,{size:19}),g?"My Account":"Login / Register"),n.createElement(X,{to:"/wishlist",onClick:L},n.createElement(mt,{size:19}),"My Wishlist",z>0&&n.createElement("span",null,z)),n.createElement(X,{to:"/cart",onClick:L},n.createElement(Lt,{size:19}),"My Shopping Bag",k>0&&n.createElement("span",null,k))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Ye,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
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

          
          
          `))}function Mg(){const[o,s]=y.useState(""),[c,p]=y.useState(""),d=new Date().getFullYear(),m=v=>{v.preventDefault(),o.trim()&&(p("Thanks for joining the HOVIRA family!"),s(""))},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Ye,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(xs,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:o,onChange:v=>{s(v.target.value),p("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(ye,{size:17}))),c&&n.createElement("p",{className:"hv-footer-success"},n.createElement(mt,{size:14}),c),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Ir,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(It,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(kg,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(X,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(zg,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(wg,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(X,{to:"/shop"},"Shop All"),n.createElement(X,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(X,{to:"/about"},"Our Story"),n.createElement(X,{to:"/account"},"My Account"),n.createElement(X,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(X,{to:"/privacy"},"Privacy Policy"),n.createElement(X,{to:"/terms"},"Terms & Conditions"),n.createElement(X,{to:"/shipping"},"Shipping Policy"),n.createElement(X,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(vd,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Ye,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",d," HOVIRA Skin care. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},n.createElement(mt,{size:13,fill:"currentColor"}),"  Designed & Developed by ",n.createElement("a",{href:"https://jdbinfotech.co.in/"},"https://jdbinfotech.co.in/")),n.createElement("button",{className:"hv-back-top",onClick:f,"aria-label":"Back to top"},"Back to top",n.createElement(gg,{size:17}))))),n.createElement("style",null,`


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

        `))}function _g(){return n.createElement(n.Fragment,null,n.createElement(Lg,null),n.createElement("main",null,n.createElement(yf,null)),n.createElement(Mg,null))}function fn({label:o="Loading your essentials..."}){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-state"},n.createElement("div",{className:"loading-content"},n.createElement("div",{className:"loading-animation"},n.createElement("div",{className:"loading-outer-ring"}),n.createElement("div",{className:"loading-middle-ring"}),n.createElement("div",{className:"loading-logo"},n.createElement("img",{src:`${hs}`})),n.createElement("span",{className:"loading-dot dot-one"}),n.createElement("span",{className:"loading-dot dot-two"})),n.createElement("div",{className:"loading-brand"},"HOVIRA",n.createElement("span",null,".")),n.createElement("p",{className:"loading-label"},o),n.createElement("div",{className:"loading-progress"},n.createElement("span",null)),n.createElement("small",{className:"loading-caption"},"A little care is on its way"))),n.createElement("style",null,`
            
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

            `))}function ht({title:o,description:s,canonical:c}){return n.createElement(cg,null,n.createElement("title",null,o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:s||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:s||"Thoughtful skincare essentials from HOVIRA."}),c&&n.createElement("link",{rel:"canonical",href:c}))}function Zo({product:o,index:s=0}){var Z,q,ie;const{addToCart:c,toggleWishlist:p,isWishlisted:d}=Yt(),[m,f]=y.useState(!1),v=Xo(o),g=pn(o),w=d(o),k=Number(o.price||0),z=Number(o.salePrice||0),R=o.salePrice!=null&&z>0&&z<k,L=R?Math.round((k-z)/k*100):0,B=Number(o.stock)<=0,T=()=>{if(B){window.alert(`${o.name} is coming soon! This product is currently unavailable. Please check back later.`);return}c(o),f(!0),setTimeout(()=>{f(!1)},1800)},A=()=>{p(o)},V=typeof o.category=="string"?o.category:((Z=o.category)==null?void 0:Z.name)||"HOVIRA Essentials",W=((ie=(q=o.images)==null?void 0:q.find(se=>se.isPrimary))==null?void 0:ie.alt)||o.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${s*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(X,{to:ka(o),className:"hv-product-image","aria-label":`View ${o.name}`},v?n.createElement("img",{src:v,alt:W,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Ye,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},B?n.createElement("span",{className:"hv-soldout-badge"},"Upcoming"):R?n.createElement("span",{className:"hv-sale-badge"},L,"% OFF"):o.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Ye,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${w?"wish-active":""}`,onClick:A,"aria-label":w?"Remove from wishlist":"Add to wishlist",title:w?"Remove from wishlist":"Add to wishlist"},n.createElement(mt,{size:18,fill:w?"currentColor":"none"})),n.createElement(X,{to:ka(o),className:"hv-quick-view","aria-label":`View details of ${o.name}`},n.createElement(Wo,{size:16}),"Quick View",n.createElement(vd,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},V),o.isFeatured&&!B&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Ye,{size:11}),"Favourite")),n.createElement(X,{to:ka(o),className:"hv-product-name"},o.name),o.shortDescription&&n.createElement("p",{className:"hv-product-description"},o.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,Le(g,o.currency||"INR")),R&&n.createElement("del",null,Le(k,o.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""} ${B?"upcoming":""}`,onClick:T,"aria-label":B?`${o.name} is upcoming. Click for availability information.`:`Add ${o.name} to cart`,title:B?"Coming soon":"Add to cart"},B?n.createElement(n.Fragment,null,"Upcoming"):m?n.createElement(n.Fragment,null,n.createElement(dt,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Lt,{size:15}),"Add"))))),n.createElement("style",null,`

        
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

        `))}function Zt({type:o="error",children:s,onClose:c}){return y.useEffect(()=>{if(!s)return;const p=setTimeout(()=>{c==null||c()},5e3);return()=>clearTimeout(p)},[s,c]),s?n.createElement(n.Fragment,null,n.createElement("div",{className:`notice-toast ${o}`,role:"alert"},n.createElement("div",{className:"notice-icon"},o==="success"?n.createElement(rt,{size:22}):n.createElement(vg,{size:22})),n.createElement("div",{className:"notice-content"},n.createElement("strong",null,o==="success"?"Success!":"Error!"),n.createElement("span",null,s)),n.createElement("button",{className:"notice-close",onClick:c,"aria-label":"Close notification",type:"button"},n.createElement(wt,{size:20}))),n.createElement("style",null,`
        

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

        `)):null}const jg="/assets/shampooo-DmHCtrQP.png";function Bg(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState(""),[f,v]=y.useState(0),[g,w]=y.useState(""),[k,z]=y.useState(""),[R,L]=y.useState(!1);y.useEffect(()=>{let A=!0;return(async()=>{p(!0),m("");try{const W=await Te.products();if(A){const Z=Array.isArray(W)?W.filter(q=>q.isActive!==!1):[];s(Z)}}catch(W){A&&m(W.message||"Unable to load products.")}finally{A&&p(!1)}})(),()=>{A=!1}},[f]);const B=y.useMemo(()=>{const A=o.filter(V=>V.isFeatured);return(A.length?A:o).slice(0,4)},[o]),T=[{icon:n.createElement(Tr,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(Mp,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(It,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(mt,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(ht,{title:"HOVIRA Skin Care | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(X,{to:"/shop"},"Explore HOVIRA ",n.createElement(ye,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Ye,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(X,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(ye,{size:18})),n.createElement(X,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(Cg,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(Tr,{size:17})),n.createElement("span",null,n.createElement(Mp,{size:17})),n.createElement("span",null,n.createElement(mt,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("img",{src:`${jg}`,alt:"hovira 3-in-1 shampoo"})),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},T.map((A,V)=>n.createElement("div",{className:"hv-benefit",key:V},n.createElement("div",{className:"hv-benefit-icon"},A.icon),n.createElement("div",null,n.createElement("h3",null,A.title),n.createElement("p",null,A.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(X,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(ye,{size:17}))),d&&n.createElement("div",{className:"hv-error"},n.createElement(Zt,null,d),n.createElement("button",{className:"hv-retry-btn",onClick:()=>v(A=>A+1)},n.createElement(ds,{size:15})," Try Again")),c?n.createElement("div",{className:"hv-loading"},n.createElement(fn,null)):B.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},B.map((A,V)=>n.createElement("div",{className:"hv-product-item",key:A._id||A.slug,style:{"--item-index":V}},n.createElement(Zo,{product:A,index:V})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(X,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(ye,{size:17})))):d?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(bg,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(X,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(ye,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(X,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(ye,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(mt,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(X,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(Tr,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(mt,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Ye,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(X,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(ye,{size:18}))),n.createElement("style",null,`

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


  
  `))}const Bp="/assets/shampoo-DKEOU9sx.jpeg",Hg="/assets/lab-D4lI-tRu.jpg",Ug="/assets/meet-BceJ9sLp.jpg",Vg="/assets/wash-DPVUhSQC.jpg";function $g(){const[o,s]=If(),[c,p]=y.useState([]),[d,m]=y.useState(!0),[f,v]=y.useState(""),[g,w]=y.useState(o.get("search")||""),[k,z]=y.useState(o.get("category")||"all"),[R,L]=y.useState("featured"),[B,T]=y.useState(""),[A,V]=y.useState(!1),[W,Z]=y.useState(!1),[q,ie]=y.useState(!1);y.useEffect(()=>{let H=!0;return(async()=>{m(!0),v("");try{const G=await Te.products();if(H){const F=Array.isArray(G)?G.filter(P=>P.isActive!==!1):[];p(F)}}catch(G){H&&v(G.message||"Unable to load products.")}finally{H&&m(!1)}})(),()=>{H=!1}},[]),y.useEffect(()=>{w(o.get("search")||""),z(o.get("category")||"all")},[o]),y.useEffect(()=>(document.body.style.overflow=W?"hidden":"",()=>{document.body.style.overflow=""}),[W]);const se=y.useMemo(()=>[...new Set(c.map(H=>{var ve;return typeof H.category=="string"?H.category:(ve=H.category)==null?void 0:ve.name}).filter(Boolean))].sort((H,ve)=>H.localeCompare(ve)),[c]),xe=y.useMemo(()=>{let H=[...c];const ve=g.toLowerCase().trim();return ve&&(H=H.filter(G=>{var I;const F=typeof G.category=="string"?G.category:((I=G.category)==null?void 0:I.name)||"";return[G.name,G.shortDescription,G.description,F,G.brand,...G.tags||[]].join(" ").toLowerCase().includes(ve)})),k!=="all"&&(H=H.filter(G=>{var P;return(typeof G.category=="string"?G.category:((P=G.category)==null?void 0:P.name)||"").toLowerCase()===k.toLowerCase()})),B!==""&&(H=H.filter(G=>Number(G.salePrice??G.price)<=Number(B))),A&&(H=H.filter(G=>Number(G.stock)>0)),R==="price-low"&&H.sort((G,F)=>Number(G.salePrice??G.price)-Number(F.salePrice??F.price)),R==="price-high"&&H.sort((G,F)=>Number(F.salePrice??F.price)-Number(G.salePrice??G.price)),R==="name"&&H.sort((G,F)=>(G.name||"").localeCompare(F.name||"")),R==="newest"&&H.sort((G,F)=>new Date(F.createdAt||0)-new Date(G.createdAt||0)),R==="featured"&&H.sort((G,F)=>Number(F.isFeatured)-Number(G.isFeatured)),H},[c,g,k,B,A,R]),J=[g.trim()!=="",k!=="all",B!=="",A].filter(Boolean).length,he=(H,ve)=>{const G={};H.trim()&&(G.search=H.trim()),ve!=="all"&&(G.category=ve),s(G)},U=()=>{w(""),z("all"),T(""),V(!1),L("featured"),s({})},ce=H=>{H==="search"&&(w(""),he("",k)),H==="category"&&(z("all"),he(g,"all")),H==="price"&&T(""),H==="stock"&&V(!1)},Ne=H=>{z(H),he(g,H)},Ee=H=>{w(H),he(H,k)},Re=()=>Z(!1);return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(X,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Ye,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(Tr,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("div",{className:"hv-best-deals-trigger-wrap"},n.createElement("button",{type:"button",className:`hv-best-deals-trigger ${q?"is-active":""}`,onClick:()=>ie(H=>!H),"aria-expanded":q,"aria-controls":"hv-dealer-section"},n.createElement(Ye,{size:17}),n.createElement("span",null,"Best Deals"),n.createElement(Ip,{size:17,className:"hv-best-deals-chevron"}))),q&&n.createElement("section",{id:"hv-dealer-section",className:"hv-dealer-section","aria-labelledby":"hv-dealer-title"},n.createElement("div",{className:"hv-dealer-hero"},n.createElement("div",{className:"hv-dealer-hero-content"},n.createElement("span",{className:"hv-dealer-eyebrow"},"HOVIRA PROFESSIONAL COLLECTION"),n.createElement("h2",{id:"hv-dealer-title"},"Introducing the",n.createElement("br",null),n.createElement("em",null,"Mineral Reset Formula.")),n.createElement("p",null,"Discover a thoughtfully positioned 3-in-1 shampoo concept designed for an everyday cleansing routine and all hair types."),n.createElement("div",{className:"hv-dealer-tags"},n.createElement("span",null,"3-IN-1 FORMULA"),n.createElement("span",null,"ALL HAIR TYPES"),n.createElement("span",null,"DEALER EXCLUSIVE")),n.createElement("a",{href:"#hv-dealer-details",className:"hv-dealer-primary-btn"},"Discover the formula ",n.createElement(ye,{size:16})),n.createElement("p",{className:"hv-dealer-price-note"},"Dealer enquiries only · Public selling price is not displayed")),n.createElement("div",{className:"hv-dealer-hero-image"},n.createElement("img",{src:`${Bp}`,alt:"HOVIRA Mineral Reset 3-in-1 Shampoo"}),n.createElement("span",{className:"hv-dealer-image-caption"},"MINERAL RESET COLLECTION"))),n.createElement("div",{className:"hv-dealer-intro",id:"hv-dealer-details"},n.createElement("span",{className:"hv-dealer-label"},"BEYOND ORDINARY HAIR CLEANSING"),n.createElement("h2",null,"A fresh approach to",n.createElement("br",null),n.createElement("em",null,"everyday hair care.")),n.createElement("p",null,"Hair breakage, dryness and buildup can have several contributing factors. Hair care habits, styling practices and unsuitable products may also affect how hair looks and feels. HOVIRA Mineral Reset is presented as a 3-in-1 shampoo concept focused on a refreshing cleansing experience.")),n.createElement("div",{className:"hv-dealer-benefits"},n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"01"),n.createElement("h3",null,"Cleanse"),n.createElement("p",null,"Designed to cleanse hair and scalp as part of your regular hair care routine.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"02"),n.createElement("h3",null,"Mineral Reset"),n.createElement("p",null,"Formulated around a mineral-reset concept to help address mineral and product buildup.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"03"),n.createElement("h3",null,"Fresh Hair Feel"),n.createElement("p",null,"Designed to leave hair feeling refreshed, clean and manageable after washing."))),n.createElement("div",{className:"hv-dealer-video-section"},n.createElement("div",{className:"hv-dealer-video-heading"},n.createElement("span",{className:"hv-dealer-label"},"EXPERIENCE HOVIRA"),n.createElement("h2",null,"Discover the ",n.createElement("em",null,"product story.")),n.createElement("p",null,"Watch the product introduction, formulation story and usage demonstration.")),n.createElement("video",{className:"hv-dealer-video",controls:!0,playsInline:!0,preload:"metadata",poster:"/images/mineral-reset-video-poster.webp"},n.createElement("source",{src:"/videos/mineral-reset-product.mp4",type:"video/mp4"}),"Your browser does not support video playback.")),n.createElement("div",{className:"hv-dealer-hair-types"},n.createElement("div",null,n.createElement("span",{className:"hv-dealer-label"},"ONE FORMULA, EVERYDAY CARE"),n.createElement("h2",null,"Mineral Reset Formula",n.createElement("br",null),n.createElement("em",null,"for all hair types.")),n.createElement("p",null,"A versatile cleansing concept positioned for different hair types and everyday hair care routines. Please refer to the final product label for suitability and directions.")),n.createElement("div",{className:"hv-dealer-hair-points"},n.createElement("span",null,n.createElement(dt,{size:16})," Straight hair"),n.createElement("span",null,n.createElement(dt,{size:16})," Wavy hair"),n.createElement("span",null,n.createElement(dt,{size:16})," Curly hair"),n.createElement("span",null,n.createElement(dt,{size:16})," Different hair textures"))),n.createElement("div",{className:"hv-dealer-gallery"},n.createElement("div",{className:"hv-dealer-gallery-heading"},n.createElement("span",{className:"hv-dealer-label"},"THE PRODUCT COLLECTION"),n.createElement("h2",null,"Every detail, ",n.createElement("em",null,"thoughtfully presented."))),n.createElement("div",{className:"hv-dealer-gallery-grid"},n.createElement("img",{src:`${Bp}`,alt:"HOVIRA Mineral Reset Shampoo front packaging",loading:"lazy"}),n.createElement("img",{src:`${Hg}`,alt:"HOVIRA Mineral Reset Shampoo packaging details",loading:"lazy"}),n.createElement("img",{src:`${Ug}`,alt:"HOVIRA Mineral Reset Shampoo texture",loading:"lazy"}),n.createElement("img",{src:`${Vg}`,alt:"HOVIRA Mineral Reset Shampoo lifestyle presentation",loading:"lazy"}))),n.createElement("div",{className:"hv-dealer-partnership"},n.createElement("span",{className:"hv-dealer-label"},"GROW WITH HOVIRA"),n.createElement("h2",null,"Be a part of our",n.createElement("br",null),n.createElement("em",null,"dealer network.")),n.createElement("p",null,"Interested in introducing HOVIRA Mineral Reset Shampoo to your market? Connect with our team to explore product information, distribution opportunities and dealer partnership details."),n.createElement("div",{className:"hv-dealer-partner-points"},n.createElement("span",null,n.createElement(dt,{size:15})," Product information"),n.createElement("span",null,n.createElement(dt,{size:15})," Dealer pricing on enquiry"),n.createElement("span",null,n.createElement(dt,{size:15})," Distribution opportunities"),n.createElement("span",null,n.createElement(dt,{size:15})," Business support details")),n.createElement(X,{to:"/contact?type=dealer",className:"hv-dealer-primary-btn"},"Become a HOVIRA Dealer ",n.createElement(ye,{size:16})),n.createElement("small",null,"Dealer enquiries only. Pricing and commercial terms are shared directly with interested business partners."))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:k==="all"?"active":"",onClick:()=>Ne("all")},"All Products",k==="all"&&n.createElement(dt,{size:14})),se.map(H=>n.createElement("button",{key:H,className:k===H?"active":"",onClick:()=>Ne(H)},H,k===H&&n.createElement(dt,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${W?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:U},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Re,"aria-label":"Close filters"},n.createElement(wt,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(ms,{size:17}),n.createElement("input",{type:"search",value:g,onChange:H=>Ee(H.target.value),placeholder:"Try serum, cleanser..."}),g&&n.createElement("button",{type:"button",onClick:()=>ce("search"),"aria-label":"Clear search"},n.createElement(wt,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:k==="all",onChange:()=>Ne("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,c.length)),se.map(H=>n.createElement("label",{className:"hv-filter-option",key:H},n.createElement("input",{type:"radio",checked:k===H,onChange:()=>Ne(H)}),n.createElement("span",null,H),n.createElement("i",null,c.filter(ve=>{var F;return(typeof ve.category=="string"?ve.category:(F=ve.category)==null?void 0:F.name)===H}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:B,onChange:H=>T(H.target.value),placeholder:"Enter maximum price"}),B&&n.createElement("button",{type:"button",onClick:()=>ce("price"),"aria-label":"Clear maximum price"},n.createElement(wt,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:A,onChange:H=>V(H.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:U},n.createElement(_p,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Re},"Show ",xe.length," Products",n.createElement(ye,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>Z(!0)},n.createElement(Og,{size:16}),"Filters",J>0&&n.createElement("span",null,J)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,d?"...":xe.length),n.createElement("span",null,xe.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(hg,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:R,onChange:H=>L(H.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(Ip,{size:14}))),J>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),g&&n.createElement("button",{onClick:()=>ce("search")},"Search: ",g,n.createElement(wt,{size:13})),k!=="all"&&n.createElement("button",{onClick:()=>ce("category")},k,n.createElement(wt,{size:13})),B&&n.createElement("button",{onClick:()=>ce("price")},"Under ₹",B,n.createElement(wt,{size:13})),A&&n.createElement("button",{onClick:()=>ce("stock")},"In stock",n.createElement(wt,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:U},"Clear all")),f&&n.createElement("div",{className:"hv-shop-error"},n.createElement(Zt,null,f)),d?n.createElement("div",{className:"hv-shop-loading"},n.createElement(fn,null)):xe.length>0?n.createElement("div",{className:"hv-shop-product-grid"},xe.map((H,ve)=>n.createElement(Zo,{key:H._id||H.slug,product:H,index:ve}))):f?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Lt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:U},n.createElement(_p,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Ye,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(X,{to:"/about"},"Discover HOVIRA ",n.createElement(ye,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${W?"show":""}`,"aria-label":"Close filters",onClick:Re}),n.createElement("style",null,`
          
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

          `))}function Yg(){var I,b,O,de,ge,be,_,ee,Q,me,Ce,ke;const{slugOrId:o}=td(),[s,c]=y.useState(null),[p,d]=y.useState([]),[m,f]=y.useState(!0),[v,g]=y.useState(""),[w,k]=y.useState(1),[z,R]=y.useState(0),[L,B]=y.useState(""),[T,A]=y.useState(!1),[V,W]=y.useState(!1),{addToCart:Z,toggleWishlist:q,isWishlisted:ie}=Yt();y.useEffect(()=>{let Y=!0;return f(!0),g(""),c(null),R(0),B(""),k(1),A(!1),W(!1),Promise.all([Te.product(o),Te.products()]).then(([oe,Me])=>{Y&&(c(oe),d(Me))}).catch(oe=>{Y&&g(oe.message)}).finally(()=>{Y&&f(!1)}),()=>{Y=!1}},[o]);const se=y.useMemo(()=>{if(!s)return[];const Y=(s.images||[]).map(oe=>({url:typeof oe=="string"?oe:oe==null?void 0:oe.url,alt:typeof oe=="string"?s.name:oe==null?void 0:oe.alt})).filter(oe=>oe.url);if(!Y.length){const oe=Xo(s);return oe?[{url:oe,alt:s.name}]:[]}return Y},[s]),xe=((I=se[z])==null?void 0:I.url)||"";y.useEffect(()=>{if(!V)return;const Y=oe=>{oe.key==="Escape"&&W(!1),oe.key==="ArrowRight"&&se.length>1&&R(Me=>(Me+1)%se.length),oe.key==="ArrowLeft"&&se.length>1&&R(Me=>Me===0?se.length-1:Me-1)};return document.addEventListener("keydown",Y),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",Y),document.body.style.overflow=""}},[V,se.length]);const J=s?pn(s):0,he=Number((s==null?void 0:s.price)||0),U=(s==null?void 0:s.salePrice)!=null&&he>J&&J>0,ce=U?Math.round((he-J)/he*100):0,Ne=(b=s==null?void 0:s.variants)==null?void 0:b.find(Y=>Y.value===L),Ee=Number(Ne?Ne.stock||0:(s==null?void 0:s.stock)||0),Re=typeof(s==null?void 0:s.category)=="object"?((O=s.category)==null?void 0:O.name)||"HOVIRA ESSENTIALS":(s==null?void 0:s.category)||"HOVIRA ESSENTIALS",H=Y=>Y?String(typeof Y=="object"?Y._id||Y.id||Y.name||"":Y):"",ve=y.useMemo(()=>{if(!s)return[];const Y=H(s.category);return p.filter(oe=>{const Me=H(oe.category)===Y;return oe._id!==s._id&&Me&&oe.isActive!==!1}).slice(0,4)},[p,s]),G=()=>{var Y;((Y=s.variants)==null?void 0:Y.length)>0&&!L||Ee<=0||(Z(s,w,L),A(!0),setTimeout(()=>{A(!1)},2e3))},F=Y=>{k(oe=>Math.max(1,Math.min(99,oe+Y)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(fn,{label:"Finding your product..."}));if(v||!s)return n.createElement("div",{className:"page-shell pd-error"},n.createElement(Zt,null,v||"We couldn't find this product."),n.createElement(X,{to:"/shop",className:"pd-back-link"},n.createElement(Xt,{size:17}),"Back to shop"));const P=ie(s);return n.createElement(n.Fragment,null,n.createElement(ht,{title:((de=s.seo)==null?void 0:de.metaTitle)||s.name,description:((ge=s.seo)==null?void 0:ge.metaDescription)||s.shortDescription||s.description,canonical:((be=s.seo)==null?void 0:be.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(X,{to:"/"},"Home"),n.createElement(Yo,{size:14}),n.createElement(X,{to:"/shop"},"Shop"),n.createElement(Yo,{size:14}),n.createElement("span",null,s.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},xe?n.createElement("img",{src:xe,alt:((_=se[z])==null?void 0:_.alt)||s.name,key:xe,onClick:()=>W(!0),className:"pd-zoomable-image",title:"Click to zoom"}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Ye,{size:38}),n.createElement("span",null,"HOVIRA")),xe&&n.createElement("button",{type:"button",className:"pd-zoom-trigger",onClick:()=>W(!0),"aria-label":"Zoom product image"},n.createElement(Ig,{size:16}),n.createElement("span",null,"Click to zoom")),s.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Ye,{size:13}),"HOVIRA Favourite"),U&&n.createElement("span",{className:"pd-discount-badge"},ce,"% OFF"),se.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>R(Y=>Y===0?se.length-1:Y-1),"aria-label":"Previous image"},n.createElement(Xt,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>R(Y=>(Y+1)%se.length),"aria-label":"Next image"},n.createElement(ye,{size:18})))),se.length>1&&n.createElement("div",{className:"pd-thumbnails"},se.map((Y,oe)=>n.createElement("button",{key:`${Y.url}-${oe}`,className:z===oe?"active":"",onClick:()=>R(oe),"aria-label":`View image ${oe+1}`},n.createElement("img",{src:Y.url,alt:Y.alt||`${s.name} ${oe+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Ye,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},Re),n.createElement("h1",null,s.name),s.shortDescription&&n.createElement("p",{className:"pd-short-description"},s.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},Le(J,s.currency||"INR")),U&&n.createElement(n.Fragment,null,n.createElement("del",null,Le(he,s.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",ce,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((ee=s.variants)==null?void 0:ee.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),L&&n.createElement("span",null,L)),n.createElement("div",{className:"pd-variant-list"},s.variants.map(Y=>n.createElement("button",{type:"button",key:Y._id||Y.sku||Y.value,disabled:Y.stock===0,className:L===Y.value?"selected":"",onClick:()=>B(Y.value)},n.createElement("span",null,Y.name,": ",Y.value),L===Y.value&&n.createElement(dt,{size:16}),Y.stock===0&&n.createElement("small",null,"Sold out")))),s.variants.length>0&&!L&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},Ee>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>F(-1),disabled:w<=1,"aria-label":"Decrease quantity"},n.createElement(Ed,{size:16})),n.createElement("span",null,w),n.createElement("button",{type:"button",onClick:()=>F(1),disabled:w>=99||w>=Ee,"aria-label":"Increase quantity"},n.createElement(Pr,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:Ee<=0||((Q=s.variants)==null?void 0:Q.length)>0&&!L,onClick:G},T?n.createElement(n.Fragment,null,n.createElement(dt,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Lt,{size:19}),Ee<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${P?"active":""}`,onClick:()=>q(s),"aria-label":"Toggle wishlist"},n.createElement(mt,{size:21,fill:P?"currentColor":"none"}))),Ee>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(ys,{size:15}),Ee," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Ir,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(It,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Tr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:s.content||s.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(me=s.ingredients)!=null&&me.length?n.createElement("ul",{className:"pd-chip-list"},s.ingredients.map((Y,oe)=>n.createElement("li",{key:`${Y}-${oe}`},n.createElement(dt,{size:14}),Y))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(Ce=s.benefits)!=null&&Ce.length?n.createElement("ul",{className:"pd-benefit-list"},s.benefits.map((Y,oe)=>n.createElement("li",{key:`${Y}-${oe}`},n.createElement("span",null,n.createElement(dt,{size:15})),Y))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),s.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,s.howToUse)),s.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,s.warnings)))))),ve.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(X,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(ye,{size:17}))),n.createElement("div",{className:"product-grid"},ve.map((Y,oe)=>n.createElement(Zo,{key:Y._id||Y.slug,product:Y,index:oe})))),V&&xe&&n.createElement("div",{className:"pd-zoom-overlay",role:"dialog","aria-modal":"true","aria-label":"Product image zoom",onClick:()=>W(!1)},n.createElement("button",{type:"button",className:"pd-zoom-close",onClick:()=>W(!1),"aria-label":"Close image zoom"},n.createElement(wt,{size:23})),se.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-prev",onClick:Y=>{Y.stopPropagation(),R(oe=>oe===0?se.length-1:oe-1)},"aria-label":"Previous image"},n.createElement(Xt,{size:22})),n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-next",onClick:Y=>{Y.stopPropagation(),R(oe=>(oe+1)%se.length)},"aria-label":"Next image"},n.createElement(ye,{size:22}))),n.createElement("div",{className:"pd-zoom-content",onClick:Y=>Y.stopPropagation()},n.createElement("img",{src:xe,alt:((ke=se[z])==null?void 0:ke.alt)||s.name}),n.createElement("div",{className:"pd-zoom-caption"},s.name,se.length>1&&n.createElement("span",null,z+1," / ",se.length)))),n.createElement("style",null,`
          
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

          `))}function Wg(){const[o,s]=y.useState({email:"",password:""}),[c,p]=y.useState(!1),[d,m]=y.useState(""),[f,v]=y.useState(!1),{setCustomer:g}=Yt(),w=hn(),k=en(),z=L=>{s(B=>({...B,[L.target.name]:L.target.value}))},R=async L=>{var B,T,A;L.preventDefault(),m(""),v(!0);try{const V=await Te.login(o),W=V.token||V.accessToken||((B=V.data)==null?void 0:B.token)||((T=V.data)==null?void 0:T.accessToken);if(!W)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");hd(W);const Z=Dt(V,["customer","user","profile"])||await Te.me();g(Z),w(((A=k.state)==null?void 0:A.from)||"/account",{replace:!0})}catch(V){m((V==null?void 0:V.message)||"We couldn't sign you in. Please try again.")}finally{v(!1)}};return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Sign In to Your HOVIRA Account | Secure Skincare Shopping",description:"Sign in securely to your HOVIRA account to manage your profile, wishlist, orders and skincare purchases."}),n.createElement("main",{className:"login-page"},n.createElement("section",{className:"login-shell"},n.createElement("aside",{className:"login-visual"},n.createElement("div",{className:"login-visual-top"},n.createElement(X,{to:"/",className:"login-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"login-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"login-visual-tag"},n.createElement(Ye,{size:13})," YOUR DAILY RITUAL")),n.createElement("div",{className:"login-visual-content"},n.createElement("span",{className:"login-visual-kicker"},"A MOMENT FOR YOU"),n.createElement("h1",null,"Care that feels",n.createElement("br",null),n.createElement("em",null,"like coming home.")),n.createElement("p",null,"Your HOVIRA favourites, thoughtful essentials and personal skincare journey are just a sign in away."),n.createElement("div",{className:"login-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Keep your favourites close"),n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Follow your orders with ease"),n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Enjoy a personal shopping experience"))),n.createElement("div",{className:"login-visual-footer"},n.createElement("div",{className:"login-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"login-orbit orbit-a"}),n.createElement("div",{className:"login-orbit orbit-b"}),n.createElement("div",{className:"login-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"login-orbit-dot dot-a"}),n.createElement("i",{className:"login-orbit-dot dot-b"})),n.createElement("div",{className:"login-visual-note"},n.createElement(It,{size:16}),n.createElement("span",null,"Thoughtful care. A considered experience.")))),n.createElement("section",{className:"login-panel"},n.createElement("div",{className:"login-panel-top"},n.createElement("span",{className:"login-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"login-secure-label"},n.createElement(dn,{size:13})," SECURE SIGN IN")),n.createElement("div",{className:"login-heading"},n.createElement("span",{className:"login-eyebrow"},"WELCOME BACK"),n.createElement("h2",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to pick up where your self-care left off.")),d&&n.createElement("div",{className:"login-error",role:"alert"},n.createElement(Zt,null,d)),n.createElement("form",{className:"login-form",onSubmit:R},n.createElement("label",{className:"login-field"},n.createElement("span",null,"Email address"),n.createElement("input",{name:"email",type:"email",autoComplete:"email",inputMode:"email",required:!0,value:o.email,onChange:z,placeholder:"you@example.com"})),n.createElement("label",{className:"login-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"login-password-wrap"},n.createElement("input",{name:"password",type:c?"text":"password",autoComplete:"current-password",required:!0,value:o.password,onChange:z,placeholder:"Enter your password"}),n.createElement("button",{type:"button",className:"login-eye-btn",onClick:()=>p(L=>!L),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ps,{size:17}):n.createElement(Wo,{size:17})))),n.createElement("div",{className:"login-form-meta"},n.createElement("span",null,n.createElement(dn,{size:13})," Your account is protected")),n.createElement("button",{className:"login-submit",type:"submit",disabled:f},n.createElement("span",null,f?"Signing you in…":"Sign in to HOVIRA"),f?n.createElement("span",{className:"login-spinner"}):n.createElement(ye,{size:17}))),n.createElement("div",{className:"login-divider"},n.createElement("span",null,"NEW TO HOVIRA?")),n.createElement(X,{to:"/signup",className:"login-create-account"},"Create your account ",n.createElement(ye,{size:15})),n.createElement("div",{className:"login-trust"},n.createElement("div",{className:"login-trust-icon"},n.createElement(yd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"We use your account information to manage your shopping experience and orders."))),n.createElement("p",{className:"login-legal"},"By continuing, you agree to our ",n.createElement(X,{to:"/terms"},"Terms")," and ",n.createElement(X,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"login-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          
          `))}function Hp(){const[o,s]=y.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[c,p]=y.useState(!1),[d,m]=y.useState(!1),[f,v]=y.useState(""),[g,w]=y.useState(!1),{setCustomer:k}=Yt(),z=hn(),R=T=>{const{name:A,value:V,type:W,checked:Z}=T.target;s(q=>({...q,[A]:W==="checkbox"?Z:V}))},L=y.useMemo(()=>{const T=o.password;if(!T)return{score:0,label:"Use at least 8 characters"};let A=0;return T.length>=8&&A++,/[A-Z]/.test(T)&&A++,/[a-z]/.test(T)&&A++,/[0-9]/.test(T)&&A++,/[^A-Za-z0-9]/.test(T)&&A++,A<=2?{score:1,label:"Could be stronger"}:A<=4?{score:2,label:"Good password"}:{score:3,label:"Strong password"}},[o.password]),B=async T=>{var A,V;if(T.preventDefault(),v(""),o.password.length<8){v("Password must be at least 8 characters.");return}if(o.password!==o.confirmPassword){v("Your passwords do not match.");return}w(!0);try{const{confirmPassword:W,...Z}=o,q=await Te.register(Z),ie=q.token||q.accessToken||((A=q.data)==null?void 0:A.token)||((V=q.data)==null?void 0:V.accessToken);ie?(hd(ie),k(Dt(q,["customer","user","profile"])||await Te.me()),z("/account")):z("/login",{state:{registered:!0}})}catch(W){v((W==null?void 0:W.message)||"We couldn't create your account. Please try again.")}finally{w(!1)}};return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Create Your HOVIRA Account | Join Our Skincare Community",description:"Create your HOVIRA account for a more personal skincare shopping experience. Save favourites, manage your orders and explore thoughtful skincare essentials."}),n.createElement("main",{className:"register-page"},n.createElement("section",{className:"register-shell"},n.createElement("aside",{className:"register-visual"},n.createElement("div",{className:"register-visual-top"},n.createElement(X,{to:"/",className:"register-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"register-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"register-visual-tag"},n.createElement(Ye,{size:13})," YOUR SKIN, YOUR RITUAL")),n.createElement("div",{className:"register-visual-content"},n.createElement("span",{className:"register-visual-kicker"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Make room for",n.createElement("br",null),n.createElement("em",null,"a little care.")),n.createElement("p",null,"Create your personal space for thoughtful skincare, favourite finds and a smoother shopping experience."),n.createElement("div",{className:"register-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Save products you love"),n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Keep track of every order"),n.createElement("div",null,n.createElement("span",null,n.createElement(rt,{size:15}))," Make every visit feel personal"))),n.createElement("div",{className:"register-visual-footer"},n.createElement("div",{className:"register-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"register-orbit orbit-a"}),n.createElement("div",{className:"register-orbit orbit-b"}),n.createElement("div",{className:"register-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"register-orbit-dot dot-a"}),n.createElement("i",{className:"register-orbit-dot dot-b"})),n.createElement("div",{className:"register-visual-note"},n.createElement(It,{size:16}),n.createElement("span",null,"A more considered way to shop.")))),n.createElement("section",{className:"register-panel"},n.createElement("div",{className:"register-panel-top"},n.createElement("span",{className:"register-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"register-secure-label"},n.createElement(dn,{size:13})," CREATE ACCOUNT")),n.createElement("div",{className:"register-heading"},n.createElement("span",{className:"register-eyebrow"},"WELCOME TO HOVIRA"),n.createElement("h2",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Your little corner for thoughtful skincare starts here.")),f&&n.createElement("div",{className:"register-error",role:"alert"},n.createElement(Zt,null,f)),n.createElement("form",{className:"register-form",onSubmit:B},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Full name"),n.createElement("div",{className:"register-input-wrap"},n.createElement(Rr,{size:16}),n.createElement("input",{name:"name",type:"text",required:!0,maxLength:100,value:o.name,onChange:R,placeholder:"Your full name",autoComplete:"name"}))),n.createElement("div",{className:"register-form-two"},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"register-input-wrap"},n.createElement(xs,{size:16}),n.createElement("input",{name:"email",type:"email",required:!0,value:o.email,onChange:R,placeholder:"you@example.com",autoComplete:"email",inputMode:"email"}))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Phone ",n.createElement("small",null,"Optional")),n.createElement("div",{className:"register-input-wrap"},n.createElement(wd,{size:16}),n.createElement("input",{name:"phone",type:"tel",value:o.phone,onChange:R,placeholder:"Phone number",autoComplete:"tel",inputMode:"tel"})))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(dn,{size:16}),n.createElement("input",{name:"password",type:c?"text":"password",required:!0,minLength:8,value:o.password,onChange:R,placeholder:"Create a password",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>p(T=>!T),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ps,{size:16}):n.createElement(Wo,{size:16}))),n.createElement("div",{className:"register-strength","aria-live":"polite"},n.createElement("div",{className:"register-strength-bars"},[1,2,3].map(T=>n.createElement("span",{key:T,className:L.score>=T?`active strength-${L.score}`:""}))),n.createElement("small",null,L.label))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Confirm password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(dn,{size:16}),n.createElement("input",{name:"confirmPassword",type:d?"text":"password",required:!0,value:o.confirmPassword,onChange:R,placeholder:"Enter your password again",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>m(T=>!T),"aria-label":d?"Hide confirm password":"Show confirm password"},d?n.createElement(ps,{size:16}):n.createElement(Wo,{size:16}))),o.confirmPassword&&n.createElement("small",{className:`register-match ${o.password===o.confirmPassword?"matched":"not-matched"}`},o.password===o.confirmPassword?"Passwords match":"Passwords do not match yet")),n.createElement("label",{className:"register-optin"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:o.marketingOptIn,onChange:R}),n.createElement("span",{className:"register-custom-check"},n.createElement(rt,{size:13})),n.createElement("span",null,"Send me occasional HOVIRA updates and skincare news.")),n.createElement("button",{className:"register-submit",type:"submit",disabled:g},n.createElement("span",null,g?"Creating your account…":"Create my account"),g?n.createElement("span",{className:"register-spinner"}):n.createElement(ye,{size:17}))),n.createElement("div",{className:"register-login-prompt"},"Already have an account? ",n.createElement(X,{to:"/login"},"Sign in")),n.createElement("div",{className:"register-trust"},n.createElement("div",{className:"register-trust-icon"},n.createElement(yd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"Your information helps us manage your account and shopping experience."))),n.createElement("p",{className:"register-legal"},"By creating an account, you agree to our ",n.createElement(X,{to:"/terms"},"Terms")," and ",n.createElement(X,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"register-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          `))}function Gg(){const{cart:o,updateQuantity:s,removeFromCart:c}=Yt(),p=hn(),d=y.useMemo(()=>o.reduce((v,g)=>v+g.quantity,0),[o]),m=y.useMemo(()=>o.reduce((v,g)=>v+pn(g.product)*g.quantity,0),[o]),f=(v,g)=>{const w=v.quantity+g;w<1||s(v.key,w)};return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,d," ",d===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Lt,{size:28}))),o.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,d," items in your shopping bag")),n.createElement(X,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(ye,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},o.map(v=>{var z;const g=v.product,w=pn(g),k=Xo(g);return n.createElement("article",{className:"hv-cart-item",key:v.key},n.createElement(X,{to:ka(g),className:"hv-cart-product-image"},k?n.createElement("img",{src:k,alt:g.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof g.category=="object"?((z=g.category)==null?void 0:z.name)||"HOVIRA":g.category||"HOVIRA"),n.createElement(X,{to:ka(g),className:"hv-cart-product-name"},g.name),v.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",v.variant),n.createElement("span",{className:"hv-cart-product-price"},Le(w,g.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>c(v.key)},n.createElement(bd,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>f(v,-1),disabled:v.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(Ed,{size:14})),n.createElement("span",null,v.quantity),n.createElement("button",{type:"button",onClick:()=>f(v,1),"aria-label":"Increase quantity"},n.createElement(Pr,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},Le(w*v.quantity,g.currency||"INR")))})),n.createElement(X,{to:"/shop",className:"hv-cart-continue-link"},n.createElement(Xt,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Lt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,d)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Le(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,Le(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>p("/checkout")},"Continue to checkout",n.createElement(ye,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(It,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Ir,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(ys,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Lt,{size:34}),n.createElement(Ye,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(X,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(ye,{size:17}))))),n.createElement("style",null,`
          
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

          `))}function qg(){const o=Yt(),s=Array.isArray(o==null?void 0:o.wishlist)?o.wishlist:[],c=y.useMemo(()=>`${s.length} ${s.length===1?"piece":"pieces"} saved`,[s.length]);return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Your Wishlist | HOVIRA",description:"Your favourite HOVIRA skincare essentials, all saved in one place."}),n.createElement("main",{className:"page-shell standard-page wishlist-page"},n.createElement("section",{className:"wishlist-hero"},n.createElement("div",{className:"wishlist-hero-copy"},n.createElement("span",{className:"wishlist-eyebrow"},n.createElement(Ye,{size:13})," SAVED WITH LOVE"),n.createElement("h1",null,"Your little list of ",n.createElement("em",null,"lovely things.")),n.createElement("p",null,"All the skincare you’ve had your eye on, gathered in one beautiful place."),n.createElement("div",{className:"wishlist-count"},n.createElement("span",{className:"wishlist-count-icon"},n.createElement(mt,{size:15})),n.createElement("span",null,c))),n.createElement("div",{className:"wishlist-hero-art","aria-hidden":"true"},n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-one"}),n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-two"}),n.createElement("div",{className:"wishlist-art-heart"},n.createElement(mt,{size:62,strokeWidth:1.1})),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-one"},"✦"),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-two"},"✧"),n.createElement("span",{className:"wishlist-art-caption"},"A little self-love",n.createElement("br",null),"goes a long way"))),s.length>0?n.createElement("section",{className:"wishlist-products-section"},n.createElement("div",{className:"wishlist-section-heading"},n.createElement("div",null,n.createElement("span",{className:"wishlist-eyebrow"},"YOUR COLLECTION"),n.createElement("h2",null,"Favourites, ",n.createElement("em",null,"for later."))),n.createElement(X,{to:"/shop",className:"wishlist-text-link"},"Discover more ",n.createElement(ye,{size:15}))),n.createElement("div",{className:"product-grid wishlist-product-grid"},s.map((p,d)=>n.createElement(Zo,{key:p._id||p.slug||d,product:p,index:d}))),n.createElement("div",{className:"wishlist-bottom-note"},n.createElement(mt,{size:17}),n.createElement("span",null,"Your saved pieces are waiting right here whenever you need them."),n.createElement(X,{to:"/shop"},"Keep exploring ",n.createElement(ye,{size:14})))):n.createElement("section",{className:"wishlist-empty"},n.createElement("div",{className:"wishlist-empty-visual"},n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-one"}),n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-two"}),n.createElement("div",{className:"wishlist-empty-heart"},n.createElement(mt,{size:48,strokeWidth:1.2})),n.createElement("span",{className:"wishlist-empty-star star-one"},"✦"),n.createElement("span",{className:"wishlist-empty-star star-two"},"✧")),n.createElement("span",{className:"wishlist-eyebrow"},"YOUR FAVOURITES LIVE HERE"),n.createElement("h2",null,"A little space for",n.createElement("br",null),n.createElement("em",null,"your favourites.")),n.createElement("p",null,"When something catches your eye, tap its heart to save it here. Your next favourite might be just a browse away."),n.createElement(X,{to:"/shop",className:"wishlist-shop-button"},n.createElement(Lt,{size:16})," Explore the collection ",n.createElement(ye,{size:16})),n.createElement("div",{className:"wishlist-empty-footnote"},n.createElement(Ag,{size:14})," Your wishlist is ready for a little love."))),n.createElement("style",null,`
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

          `))}const es={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},Qg=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:fg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:Fg},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:xd},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:dn}],Kg=()=>new Promise(o=>{if(window.Razorpay)return o(!0);const s=document.createElement("script");s.src="https://checkout.razorpay.com/v1/checkout.js",s.onload=()=>o(!0),s.onerror=()=>o(!1),document.body.appendChild(s)});function Xg(){const{cart:o,customer:s,clearCart:c,setCustomer:p}=Yt(),d=hn(),[m,f]=y.useState((s==null?void 0:s.addresses)||[]),[v,g]=y.useState(""),[w,k]=y.useState(!1),[z,R]=y.useState({...es,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),[L,B]=y.useState("cod"),[T,A]=y.useState(""),[V,W]=y.useState(""),[Z,q]=y.useState(null),[ie,se]=y.useState(0),[xe,J]=y.useState(""),[he,U]=y.useState(""),[ce,Ne]=y.useState(!1),[Ee,Re]=y.useState(!1),[H,ve]=y.useState(!1),G=y.useMemo(()=>o.reduce((_,ee)=>_+pn(ee.product)*ee.quantity,0),[o]),F=y.useMemo(()=>{const _=Math.min(Math.max(0,Number(ie)||0),G);let ee=0,Q=0;const me=o.map(ke=>{const Y=ke.product||{},oe=Math.max(1,Number(ke.quantity)||1),Me=Math.max(0,Number(pn(Y))||0),We=Me*oe,Jn=G>0?_*(We/G):0,St=Math.max(0,We-Jn),Oe=Math.max(0,Number(Y.gstRate)||0),at=Y.gstType==="inclusive"?"inclusive":"exclusive";let Qe=St,ct=0;Oe>0&&at==="inclusive"?(Qe=St*100/(100+Oe),ct=St-Qe):Oe>0&&(ct=St*Oe/100);const er=Math.max(0,Number(Y.shippingCharge)||0),tr=er*oe;return ee+=ct,Q+=tr,{productId:Y._id||Y.id,quantity:oe,unitPrice:Me,gstRate:Oe,gstType:at,taxableAmount:Qe,gstAmount:ct,shippingCharge:er,lineShipping:tr,lineTotal:St+(at==="exclusive"?ct:0)+tr}}),Ce=Math.max(0,G-_+ee+Q);return{lines:me,discount:_,gstTotal:ee,shippingTotal:Q,total:Ce}},[o,G,ie]),P=F.total;y.useEffect(()=>{const _=(s==null?void 0:s.addresses)||[];if(f(_),_.length){const ee=_.find(Q=>Q.isDefault);g(String((ee==null?void 0:ee._id)||_[0]._id))}else g("")},[s]);const I=()=>{J(""),U("")},b=_=>{const{name:ee,value:Q,type:me,checked:Ce}=_.target;R(ke=>({...ke,[ee]:me==="checkbox"?Ce:Q}))},O=async _=>{_.preventDefault(),I(),Re(!0);try{const ee=await Te.addAddress(z),Q=ee!=null&&ee.addresses?ee:await Te.me();p(Q);const me=Q.addresses||[];f(me);const Ce=me.find(oe=>oe.fullName===z.fullName&&oe.phone===z.phone&&oe.addressLine1===z.addressLine1),ke=me[me.length-1],Y=Ce||ke;Y!=null&&Y._id&&g(String(Y._id)),k(!1),R({...es,fullName:Q.name||"",phone:Q.phone||""}),U("Delivery address saved successfully.")}catch(ee){J(ee.message)}finally{Re(!1)}},de=async()=>{var _,ee;if(I(),!V.trim())return J("Please enter a coupon code.");if(!o.length)return J("Your cart is empty.");ve(!0);try{const Q=await Te.validateCoupon({code:V.trim().toUpperCase(),subtotal:G,items:o.map(ke=>({product:ke.product._id||ke.product.id,productId:ke.product._id||ke.product.id,quantity:ke.quantity,unitPrice:pn(ke.product)}))}),me=Q.coupon||((_=Q.data)==null?void 0:_.coupon)||Q,Ce=Number(Q.discount??((ee=Q.data)==null?void 0:ee.discount)??me.discountAmount??0);if(Ce<=0)throw new Error(Q.message||"This coupon did not return a valid discount.");q(me),se(Math.min(G,Ce)),W(V.trim().toUpperCase()),U(`Coupon ${V.toUpperCase()} applied successfully.`)}catch(Q){q(null),se(0),J(Q.message)}finally{ve(!1)}},ge=()=>{q(null),se(0),W(""),U("Coupon removed."),J("")},be=async _=>{if(_.preventDefault(),I(),!o.length)return J("Your cart is empty.");if(o.find(me=>{var ke,Y;return!(((ke=me.product)==null?void 0:ke._id)||((Y=me.product)==null?void 0:Y.id))}))return J("Product ID missing. Please remove this item and add it again from the shop.");const Q=m.find(me=>String(me._id)===v);if(!Q&&w)return J("Please save your new address before placing your order.");if(!Q)return J("Please select a delivery address.");Ne(!0);try{const me={items:o.map(Oe=>{const at=String(Oe.product._id||Oe.product.id);return{product:at,productId:at,quantity:Number(Oe.quantity),...Oe.variant?{variant:Oe.variant}:{}}}),shippingAddress:{fullName:Q.fullName,phone:Q.phone,addressLine1:Q.addressLine1,addressLine2:Q.addressLine2,landmark:Q.landmark,city:Q.city,state:Q.state,postalCode:Q.postalCode,country:Q.country},billingAddress:null,couponCode:(Z==null?void 0:Z.code)||V.trim().toUpperCase()||void 0,paymentMethod:L,customerNote:T},Ce=await Te.createOrder(me),ke=Ce.order||Ce;if(!(ke!=null&&ke._id)&&!(ke!=null&&ke.id))throw new Error("Order was submitted but the order ID was not returned.");const Y=ke._id||ke.id;if(L==="cod"){c(),d(`/orders/${Y}`,{state:{placed:!0}});return}if(!await Kg())throw new Error("Razorpay Checkout could not load. Please check your internet connection and try again.");if(typeof Te.createRazorpayOrder!="function"||typeof Te.verifyRazorpayPayment!="function")throw new Error("Razorpay API methods are missing in src/api/client.js. Add createRazorpayOrder and verifyRazorpayPayment methods as shown in the integration instructions.");const Me=await Te.createRazorpayOrder({orderId:Y}),We=(Me==null?void 0:Me.data)||(Me==null?void 0:Me.paymentOrder)||Me;if(!(We!=null&&We.key)||!(We!=null&&We.razorpayOrderId)||!(We!=null&&We.amount))throw new Error("Invalid Razorpay order response. Please check the backend response.");const Jn={key:We.key,amount:We.amount,currency:We.currency||"INR",name:"HOVIRA Cosmetics",description:`Payment for order ${ke.orderNumber||""}`,order_id:We.razorpayOrderId,prefill:{name:Q.fullName||(s==null?void 0:s.name)||"",email:(s==null?void 0:s.email)||"",contact:Q.phone||(s==null?void 0:s.phone)||""},notes:{orderId:String(Y),orderNumber:ke.orderNumber||""},theme:{color:"#BD765F"},handler:async Oe=>{var at;try{const Qe=await Te.verifyRazorpayPayment({orderId:Y,razorpay_order_id:Oe.razorpay_order_id,razorpay_payment_id:Oe.razorpay_payment_id,razorpay_signature:Oe.razorpay_signature}),ct=(Qe==null?void 0:Qe.order)||((at=Qe==null?void 0:Qe.data)==null?void 0:at.order)||ke;if(ct.paymentStatus&&ct.paymentStatus!=="paid")throw new Error("Payment verification is not complete. Please check your order status before retrying.");c(),d(`/orders/${Y}`,{state:{placed:!0,paymentSuccess:!0,paymentId:Oe.razorpay_payment_id}})}catch(Qe){console.error("Razorpay payment verification error:",Qe),J("Payment response received, but verification is pending. Do not pay again immediately. Please check your order status or contact support."),Ne(!1)}},modal:{ondismiss:()=>{Ne(!1),J("Payment window was closed. Your order is saved as pending payment. You can retry payment from your order page.")}}},St=new window.Razorpay(Jn);St.on("payment.failed",Oe=>{var at;console.error("Razorpay payment failed:",Oe==null?void 0:Oe.error),Ne(!1),J(((at=Oe==null?void 0:Oe.error)==null?void 0:at.description)||"Payment failed. Your order is still pending payment. Please try again.")}),St.open()}catch(me){J(me.message||"Unable to place your order."),Ne(!1)}};return o.length?n.createElement(n.Fragment,null,n.createElement(ht,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(X,{to:"/cart",className:"hv-checkout-back"},n.createElement(Xt,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(It,{size:17}),"Secure checkout")),xe&&n.createElement(Zt,{type:"error",onClose:()=>J("")},xe),he&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(rt,{size:17}),he),n.createElement("form",{className:"hv-checkout-layout",onSubmit:be},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!w&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{I(),R({...es,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),k(!0)}},n.createElement(Pr,{size:16}),"Add address")),m.length>0&&!w&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map(_=>n.createElement("label",{key:_._id,className:`hv-checkout-address-card ${v===String(_._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:_._id,checked:v===String(_._id),onChange:()=>g(String(_._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(za,{size:16}),_.label||"Address"),_.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),v===String(_._id)&&n.createElement(rt,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,_.fullName),n.createElement("p",null,_.addressLine1,_.addressLine2&&`, ${_.addressLine2}`,_.landmark&&`, ${_.landmark}`),n.createElement("p",null,_.city,", ",_.state," ",_.postalCode),n.createElement("span",{className:"hv-checkout-phone"},_.phone)))),(!m.length||w)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>k(!1),"aria-label":"Close address form"},n.createElement(wt,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:z.label,onChange:b,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:z.fullName,onChange:b,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:z.phone,onChange:b,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:z.postalCode,onChange:b,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:z.addressLine1,onChange:b,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:z.addressLine2,onChange:b,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:z.landmark,onChange:b,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:z.city,onChange:b,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:z.state,onChange:b,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:z.country,onChange:b,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:z.isDefault,onChange:b}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:Ee,onClick:O},Ee?n.createElement(fn,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(Pr,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>k(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},Qg.map(_=>{const ee=_.icon;return n.createElement("label",{key:_.value,className:`hv-checkout-payment-card ${L===_.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:_.value,checked:L===_.value,onChange:()=>B(_.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(ee,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,_.label),n.createElement("span",null,_.description)),L===_.value&&n.createElement(rt,{size:19,className:"hv-checkout-selected-icon"}))})),L!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(It,{size:18}),n.createElement("p",null,"Secure payment powered by Razorpay. You can pay using UPI, credit/debit cards or net banking. Your order will be confirmed after the server verifies your payment."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:T,onChange:_=>A(_.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},T.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Lt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},o.map(_=>{const ee=_.product,Q=Xo(ee);return n.createElement("div",{className:"hv-checkout-product",key:_.key},n.createElement("div",{className:"hv-checkout-product-image"},Q?n.createElement("img",{src:Q,alt:ee.name}):n.createElement("span",null,"H"),n.createElement("i",null,_.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,ee.name),_.variant&&n.createElement("small",null,"Option: ",_.variant),n.createElement("small",null,Le(pn(ee))," each"),Number(ee.gstRate)>0&&n.createElement("small",null,"GST ",Number(ee.gstRate),"% (",ee.gstType==="inclusive"?"included":"extra",")"),Number(ee.shippingCharge)>0&&n.createElement("small",null,"Shipping ",Le(Number(ee.shippingCharge)*Number(_.quantity||1)))),n.createElement("strong",{className:"hv-checkout-product-total"},Le(pn(ee)*_.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(Dg,{size:17}),n.createElement("strong",null,"Have a promo code?")),Z?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(rt,{size:17}),n.createElement("span",null,n.createElement("strong",null,Z.code||V),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:ge,"aria-label":"Remove coupon"},n.createElement(wt,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:V,onChange:_=>{W(_.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:de,disabled:H},H?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Le(G))),ie>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",Le(ie))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"GST"),n.createElement("strong",null,Le(F.gstTotal))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("strong",null,Le(F.shippingTotal))),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,Le(P))),n.createElement("p",{className:"hv-checkout-total-note"},"GST and shipping are estimated from product settings. The server must recalculate the final invoice amount before order confirmation.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:ce||Ee||H||!v&&m.length>0&&!w||w},ce?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(ye,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(dn,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Ir,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(ys,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(It,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(X,{to:"/cart"},n.createElement(Xt,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
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

    `)):n.createElement(n.Fragment,null,n.createElement(ht,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Lt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(X,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(ye,{size:17}))))))}const ba={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Zg(){var F;const o=hn(),{customer:s,setCustomer:c,logout:p}=Yt(),[d,m]=y.useState("profile"),[f,v]=y.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[g,w]=y.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[k,z]=y.useState(ba),[R,L]=y.useState(null),[B,T]=y.useState(!1),[A,V]=y.useState(""),[W,Z]=y.useState(""),[q,ie]=y.useState(!1),[se,xe]=y.useState(!0);y.useEffect(()=>{let P=!0;return Te.me().then(I=>{P&&(c(I),v({name:I.name||"",email:I.email||"",phone:I.phone||"",marketingOptIn:!!I.marketingOptIn}))}).catch(I=>{P&&V(I.message)}).finally(()=>{P&&xe(!1)}),()=>{P=!1}},[c]);const J=()=>{V(""),Z("")},he=P=>{const{name:I,value:b,type:O,checked:de}=P.target;v(ge=>({...ge,[I]:O==="checkbox"?de:b}))},U=P=>{const{name:I,value:b,type:O,checked:de}=P.target;z(ge=>({...ge,[I]:O==="checkbox"?de:b}))},ce=async P=>{P.preventDefault(),ie(!0),J();try{const I=await Te.updateMe(f);c(I),Z("Your profile has been updated.")}catch(I){V(I.message)}finally{ie(!1)}},Ne=async P=>{if(P.preventDefault(),J(),g.newPassword.length<8)return V("New password must be at least 8 characters.");if(g.newPassword!==g.confirmPassword)return V("New passwords do not match.");ie(!0);try{await Te.changePassword({currentPassword:g.currentPassword,newPassword:g.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),Z("Password updated successfully.")}catch(I){V(I.message)}finally{ie(!1)}},Ee=P=>{J(),L((P==null?void 0:P._id)||null),z(P?{...ba,...P}:{...ba,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),T(!0)},Re=async P=>{P.preventDefault(),ie(!0),J();try{R?await Te.updateAddress(R,k):await Te.addAddress(k);const I=await Te.me();c(I),T(!1),L(null),z(ba),Z("Address saved successfully.")}catch(I){V(I.message)}finally{ie(!1)}},H=async P=>{if(window.confirm("Delete this saved address?")){J();try{await Te.deleteAddress(P);const I=await Te.me();c(I),Z("Address deleted successfully.")}catch(I){V(I.message)}}},ve=()=>{T(!1),L(null),z(ba)},G=()=>{p(),o("/",{replace:!0})};return se?n.createElement("div",{className:"page-shell"},n.createElement(fn,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(ht,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,((F=s==null?void 0:s.name)==null?void 0:F.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(Rr,{size:28}))),A&&n.createElement("div",{className:"account-alert error"},n.createElement(Zt,null,A)),W&&n.createElement("div",{className:"account-alert success"},n.createElement(rt,{size:17}),W),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((s==null?void 0:s.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(s==null?void 0:s.name)||"HOVIRA User"),n.createElement("p",null,s==null?void 0:s.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(It,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:d==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),J()}},n.createElement(Rr,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(Yo,{size:16})),n.createElement("button",{className:d==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),J(),ve()}},n.createElement(za,{size:19}),n.createElement("span",null,"Address book"),n.createElement(Yo,{size:16})),n.createElement(X,{to:"/orders",className:"account-menu-item"},n.createElement(Ca,{size:19}),n.createElement("span",null,"My orders"),n.createElement(ye,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:G},n.createElement(Ng,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(It,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},d==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(Rr,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:ce},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:f.name,onChange:he,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(xs,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:f.email,onChange:he,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(wd,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:f.phone,onChange:he,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:f.marketingOptIn,onChange:he}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:q},n.createElement(jp,{size:17}),q?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(dn,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Ne},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:g.currentPassword,onChange:P=>w({...g,currentPassword:P.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:g.newPassword,onChange:P=>w({...g,newPassword:P.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:g.confirmPassword,onChange:P=>w({...g,confirmPassword:P.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:q},n.createElement(dn,{size:16}),q?"Updating...":"Update password")))),d==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!B&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>Ee(null)},n.createElement(Pr,{size:17}),"Add address")),B&&n.createElement("form",{className:"account-address-form",onSubmit:Re},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,R?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:ve,className:"account-close-button"},n.createElement(wt,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:k.label,onChange:U,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:k.fullName,onChange:U,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:k.phone,onChange:U,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:k.postalCode,onChange:U,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:k.addressLine1,onChange:U,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:k.addressLine2,onChange:U,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:k.landmark,onChange:U,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:k.city,onChange:U,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:k.state,onChange:U,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:k.country,onChange:U,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:k.isDefault,onChange:U}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:q},n.createElement(jp,{size:16}),q?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:ve},"Cancel"))),((s==null?void 0:s.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},s.addresses.map(P=>n.createElement("div",{className:"account-address-card",key:P._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(za,{size:16}),P.label||"Address"),P.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(rt,{size:13}),"Default")),n.createElement("h3",null,P.fullName),n.createElement("p",null,P.addressLine1,P.addressLine2&&`, ${P.addressLine2}`,P.landmark&&`, ${P.landmark}`,n.createElement("br",null),P.city,", ",P.state," ",P.postalCode,n.createElement("br",null),P.country,n.createElement("br",null),P.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>Ee(P)},n.createElement(Tg,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>H(P._id)},n.createElement(bd,{size:14}),"Delete"))))):!B&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(za,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>Ee(null)},n.createElement(Pr,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
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

          
          `))}function Jg(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState("");return y.useEffect(()=>{Te.orders().then(s).catch(f=>m(f.message)).finally(()=>p(!1))},[]),n.createElement(n.Fragment,null,n.createElement(ht,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),d&&n.createElement(Zt,null,d),c?n.createElement(fn,null):o.length?n.createElement("div",{className:"orders-list"},o.map(f=>n.createElement(X,{to:`/orders/${f._id||f.id}`,className:"order-row",key:f._id||f.id},n.createElement("div",{className:"order-icon"},n.createElement(Ca,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",f.orderNumber||f._id||f.id),n.createElement("small",null,new Date(f.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(f.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${f.status}`},f.status||"pending"),n.createElement("small",null,f.paymentStatus||"payment pending")),n.createElement("strong",null,Le(f.total)),n.createElement(ye,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(Ca,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(X,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(ye,{size:17})))))}const Up=[{key:"pending",label:"Order placed",description:"We have received your order.",icon:Lt},{key:"confirmed",label:"Confirmed",description:"Your order has been confirmed.",icon:rt},{key:"processing",label:"Processing",description:"Your items are being prepared.",icon:Ca},{key:"shipped",label:"Shipped",description:"Your order is on its way.",icon:Ir},{key:"delivered",label:"Delivered",description:"Your order has been delivered.",icon:rt}],ev={placed:"pending",order_placed:"pending",accepted:"confirmed",packed:"processing",dispatched:"shipped",out_for_delivery:"shipped",complete:"delivered",completed:"delivered"},Vp=(o="")=>{const s=String(o).toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");return ev[s]||s},jo=o=>{if(!o)return"";const s=new Date(o);return Number.isNaN(s.getTime())?"":new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}).format(s)},Bo=(o="")=>String(o).replace(/[_-]/g," ").replace(/\b\w/g,s=>s.toUpperCase());function tv(){var he;const{id:o}=td(),s=en(),[c,p]=y.useState(null),[d,m]=y.useState(!0),[f,v]=y.useState(!1),[g,w]=y.useState(""),[k,z]=y.useState(!1),R=y.useCallback(async(U=!1)=>{U?v(!0):m(!0),w("");try{const ce=await Te.order(o);p(ce)}catch(ce){w((ce==null?void 0:ce.message)||"Unable to load this order.")}finally{m(!1),v(!1)}},[o]);y.useEffect(()=>{R()},[R]);const L=(c==null?void 0:c.orderNumber)||(c==null?void 0:c._id)||o,B=Vp((c==null?void 0:c.status)||"pending"),T=B==="cancelled",A=Up.findIndex(U=>U.key===B),V=y.useMemo(()=>Array.isArray(c==null?void 0:c.statusHistory)?[...c.statusHistory].sort((U,ce)=>new Date(U.createdAt||U.date||0)-new Date(ce.createdAt||ce.date||0)):[],[c==null?void 0:c.statusHistory]),W=async()=>{try{await navigator.clipboard.writeText(String(L)),z(!0),window.setTimeout(()=>z(!1),1800)}catch{w("Could not copy the order number. Please copy it manually.")}},Z=()=>window.print();if(d)return n.createElement("div",{className:"page-shell order-loading"},n.createElement(fn,{label:"Loading your order…"}));if(g&&!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Zt,null,g),n.createElement("button",{className:"od-btn od-btn-primary",onClick:()=>R()},n.createElement(ds,{size:16})," Try again"),n.createElement(X,{to:"/orders",className:"od-back-link"},n.createElement(Xt,{size:16})," Back to orders"));if(!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Zt,null,"Order not found."),n.createElement(X,{to:"/orders",className:"od-back-link"},n.createElement(Xt,{size:16})," Back to orders"));const q=c.items||[],ie=c.shippingAddress||{},se=Vp(c.paymentStatus||"pending"),xe=["paid","completed","success","successful"].includes(se),J=c.trackingUrl||c.trackingURL||"";return n.createElement(n.Fragment,null,n.createElement(ht,{title:`Order ${L} | HOVIRA`,description:"View your HOVIRA order details, payment information and delivery progress."}),n.createElement("main",{className:"page-shell standard-page od-page"},n.createElement("div",{className:"od-topbar"},n.createElement(X,{to:"/orders",className:"od-back-link"},n.createElement(Xt,{size:16})," All orders"),n.createElement("div",{className:"od-top-actions"},n.createElement("button",{className:"od-btn od-btn-light",onClick:()=>R(!0),disabled:f},n.createElement(ds,{size:15,className:f?"od-spinning":""}),f?"Refreshing":"Refresh status"),n.createElement("button",{className:"od-btn od-btn-light od-print-btn",onClick:Z},n.createElement(Rg,{size:15})," Print receipt"))),((he=s.state)==null?void 0:he.placed)&&n.createElement("div",{className:"od-success-banner"},n.createElement("span",{className:"od-success-icon"},n.createElement(rt,{size:20})),n.createElement("div",null,n.createElement("strong",null,"Your order has been placed!"),n.createElement("p",null,"Thank you for choosing HOVIRA. We’ll keep you updated on its progress."))),g&&n.createElement("div",{className:"od-inline-error"},g),n.createElement("header",{className:"od-hero"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"YOUR HOVIRA ORDER"),n.createElement("h1",null,"Order ",n.createElement("em",null,"details")),n.createElement("p",{className:"od-order-meta"},"Order number ",n.createElement("strong",null,L),n.createElement("button",{className:"od-copy-btn",onClick:W,"aria-label":"Copy order number"},n.createElement(yg,{size:14})," ",k?"Copied":"Copy")),c.createdAt&&n.createElement("p",{className:"od-date"},"Placed on ",jo(c.createdAt))),n.createElement("div",{className:`od-status-card ${T?"is-cancelled":""}`},n.createElement("span",{className:"od-status-label"},"CURRENT STATUS"),n.createElement("strong",null,Bo(c.status||"pending")),n.createElement("span",null,T?"This order has been cancelled.":B==="delivered"?"Your order has arrived.":"We’re taking care of your order."))),!T&&n.createElement("section",{className:"od-card od-tracking-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"THE JOURNEY"),n.createElement("h2",null,"Order progress")),c.estimatedDelivery&&n.createElement("span",{className:"od-delivery-date"},n.createElement(Ir,{size:15})," Expected ",jo(c.estimatedDelivery))),n.createElement("div",{className:"od-progress-track"},Up.map((U,ce)=>{const Ne=U.icon,Ee=A>=ce&&A!==-1,Re=A===ce;return n.createElement("div",{className:`od-progress-step ${Ee?"is-done":""} ${Re?"is-active":""}`,key:U.key},n.createElement("div",{className:"od-step-icon"},n.createElement(Ne,{size:18})),n.createElement("div",{className:"od-step-copy"},n.createElement("strong",null,U.label),n.createElement("span",null,Re?"In progress":Ee?"Completed":U.description)))})),c.trackingNumber&&n.createElement("div",{className:"od-tracking-info"},n.createElement("div",null,n.createElement("span",null,"Tracking number"),n.createElement("strong",null,c.trackingNumber)),c.carrier&&n.createElement("div",null,n.createElement("span",null,"Delivery partner"),n.createElement("strong",null,c.carrier)),J&&n.createElement("a",{href:J,target:"_blank",rel:"noreferrer",className:"od-track-link"},"Track shipment ",n.createElement(Eg,{size:14})))),n.createElement("div",{className:"od-content-grid"},n.createElement("div",{className:"od-main-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"IN YOUR PACKAGE"),n.createElement("h2",null,"Items ordered ",n.createElement("span",{className:"od-count"},q.length)))),n.createElement("div",{className:"od-items-list"},q.map((U,ce)=>n.createElement("div",{className:"od-product-row",key:U._id||U.product||ce},n.createElement("div",{className:"od-product-image"},U.image?n.createElement("img",{src:U.image,alt:U.name||"HOVIRA product"}):n.createElement("span",null,"H")),n.createElement("div",{className:"od-product-info"},n.createElement("strong",null,U.name||"Product"),U.variant&&n.createElement("span",{className:"od-variant"},U.variant),n.createElement("span",null,"Quantity: ",U.quantity||1),U.sku&&n.createElement("span",{className:"od-sku"},"SKU: ",U.sku)),n.createElement("strong",{className:"od-item-price"},Le(U.lineTotal??Number(U.unitPrice||0)*Number(U.quantity||1)))))),n.createElement("div",{className:"od-price-summary"},n.createElement("div",null,n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Le(c.subtotal||0))),Number(c.discount)>0&&n.createElement("div",{className:"od-discount"},n.createElement("span",null,"Discount ",c.couponCode?`(${c.couponCode})`:""),n.createElement("strong",null,"−",Le(c.discount))),n.createElement("div",null,n.createElement("span",null,"Shipping"),n.createElement("strong",null,Number(c.shippingFee)===0?"Free":Le(c.shippingFee||0))),Number(c.tax)>0&&n.createElement("div",null,n.createElement("span",null,"Tax"),n.createElement("strong",null,Le(c.tax))),Number(c.codFee)>0&&n.createElement("div",null,n.createElement("span",null,"COD fee"),n.createElement("strong",null,Le(c.codFee))),n.createElement("div",{className:"od-grand-total"},n.createElement("span",null,"Total paid / payable"),n.createElement("strong",null,Le(c.total||0))))),V.length>0&&n.createElement("section",{className:"od-card od-history-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"ORDER UPDATES"),n.createElement("h2",null,"Activity history"))),n.createElement("div",{className:"od-history-list"},V.map((U,ce)=>n.createElement("div",{className:"od-history-item",key:U._id||ce},n.createElement("span",{className:"od-history-dot"},n.createElement(Lp,{size:13})),n.createElement("div",null,n.createElement("strong",null,Bo(U.status||"Update")),U.note&&n.createElement("p",null,U.note),n.createElement("small",null,jo(U.createdAt||U.date)))))))),n.createElement("aside",{className:"od-side-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"DELIVERING TO"),n.createElement("h2",null,"Shipping address")),n.createElement("span",{className:"od-heading-icon"},n.createElement(za,{size:17}))),n.createElement("div",{className:"od-address"},n.createElement("strong",null,ie.fullName||"Customer"),ie.addressLine1&&n.createElement("span",null,ie.addressLine1),ie.addressLine2&&n.createElement("span",null,ie.addressLine2),n.createElement("span",null,[ie.city,ie.state,ie.postalCode].filter(Boolean).join(", ")),ie.country&&n.createElement("span",null,ie.country),ie.phone&&n.createElement("span",{className:"od-phone"},ie.phone))),n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"SECURE CHECKOUT"),n.createElement("h2",null,"Payment details")),n.createElement("span",{className:"od-heading-icon"},n.createElement(xd,{size:17}))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Method"),n.createElement("strong",null,Bo(c.paymentMethod||"Not specified"))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`od-payment-badge ${xe?"is-paid":se==="failed"?"is-failed":""}`},xe?n.createElement(It,{size:13}):se==="failed"?n.createElement(xg,{size:13}):n.createElement(Lp,{size:13}),Bo(c.paymentStatus||"Pending"))),c.paymentId&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment ID"),n.createElement("strong",{className:"od-payment-id"},c.paymentId)),c.paidAt&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Paid on"),n.createElement("strong",null,jo(c.paidAt)))),n.createElement("div",{className:"od-help-card"},n.createElement("span",{className:"od-help-icon"},n.createElement(Ca,{size:20})),n.createElement("strong",null,"Need help with your order?"),n.createElement("p",null,"Our team is here to help with any questions about your purchase."),n.createElement(X,{to:"/contact",className:"od-help-link"},"Contact support ",n.createElement(ye,{size:15}))))),n.createElement("div",{className:"od-bottom-actions"},n.createElement(X,{to:"/shop",className:"od-btn od-btn-primary"},"Continue shopping ",n.createElement(ye,{size:16})),n.createElement(X,{to:"/orders",className:"od-btn od-btn-outline"},"View all orders"))),n.createElement("style",null,`

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

          
          `))}function nv(){return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(X,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(Tr,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(mt,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(Pg,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(X,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(ye,{size:17}))))}function $p({type:o}){const s=o==="privacy";return n.createElement(n.Fragment,null,n.createElement(ht,{title:s?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,s?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,s?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),s?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function rv(){return n.createElement(n.Fragment,null,n.createElement(ht,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(X,{className:"btn btn-dark",to:"/"},n.createElement(Xt,{size:16})," Back home")))}function Ho({children:o}){const{customer:s,authReady:c}=Yt();return c?s?o:n.createElement(xf,{to:"/login",replace:!0}):n.createElement(fn,{label:"Checking your account..."})}function av(){const{appReady:o,appError:s,retryInitialLoad:c}=Yt();return o?n.createElement(wf,null,n.createElement(Je,{element:n.createElement(_g,null)},n.createElement(Je,{index:!0,element:n.createElement(Bg,null)}),n.createElement(Je,{path:"shop",element:n.createElement($g,null)}),n.createElement(Je,{path:"product/:slugOrId",element:n.createElement(Yg,null)}),n.createElement(Je,{path:"login",element:n.createElement(Wg,null)}),n.createElement(Je,{path:"signup",element:n.createElement(Hp,null)}),n.createElement(Je,{path:"register",element:n.createElement(Hp,null)}),n.createElement(Je,{path:"cart",element:n.createElement(Gg,null)}),n.createElement(Je,{path:"wishlist",element:n.createElement(qg,null)}),n.createElement(Je,{path:"checkout",element:n.createElement(Ho,null,n.createElement(Xg,null))}),n.createElement(Je,{path:"account",element:n.createElement(Ho,null,n.createElement(Zg,null))}),n.createElement(Je,{path:"orders",element:n.createElement(Ho,null,n.createElement(Jg,null))}),n.createElement(Je,{path:"orders/:id",element:n.createElement(Ho,null,n.createElement(tv,null))}),n.createElement(Je,{path:"about",element:n.createElement(nv,null)}),n.createElement(Je,{path:"privacy",element:n.createElement($p,{type:"privacy"})}),n.createElement(Je,{path:"terms",element:n.createElement($p,{type:"terms"})}),n.createElement(Je,{path:"*",element:n.createElement(rv,null)}))):s?n.createElement("div",{className:"page-shell"},n.createElement("div",{className:"loading-error"},n.createElement("h2",null,"Unable to load HOVIRA"),n.createElement("p",null,s),n.createElement("button",{onClick:c},"Try Again"))):n.createElement(fn,{label:"Preparing your HOVIRA experience..."})}function ov(){const{pathname:o}=en();return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}Ah.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(dd,null,n.createElement(Rf,null,n.createElement(ov,null),n.createElement(ug,null,n.createElement(av,null))))));
