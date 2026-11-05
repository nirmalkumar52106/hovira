var yh=Object.defineProperty;var Eh=(o,s,c)=>s in o?yh(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c;var rn=(o,s,c)=>Eh(o,typeof s!="symbol"?s+"":s,c);function wh(o,s){for(var c=0;c<s.length;c++){const p=s[c];if(typeof p!="string"&&!Array.isArray(p)){for(const d in p)if(d!=="default"&&!(d in o)){const m=Object.getOwnPropertyDescriptor(p,d);m&&Object.defineProperty(o,d,m.get?m:{enumerable:!0,get:()=>p[d]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))p(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function Bo(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var _i={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function bh(){if(cp)return ke;cp=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,T={};function A(b,O,me){this.props=b,this.context=O,this.refs=T,this.updater=me||L}A.prototype.isReactComponent={},A.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},A.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function V(){}V.prototype=A.prototype;function Y(b,O,me){this.props=b,this.context=O,this.refs=T,this.updater=me||L}var X=Y.prototype=new V;X.constructor=Y,j(X,A.prototype),X.isPureReactComponent=!0;var W=Array.isArray,oe=Object.prototype.hasOwnProperty,ie={current:null},xe={key:!0,ref:!0,__self:!0,__source:!0};function J(b,O,me){var ge,H={},te=null,ne=null;if(O!=null)for(ge in O.ref!==void 0&&(ne=O.ref),O.key!==void 0&&(te=""+O.key),O)oe.call(O,ge)&&!xe.hasOwnProperty(ge)&&(H[ge]=O[ge]);var pe=arguments.length-2;if(pe===1)H.children=me;else if(1<pe){for(var be=Array(pe),Ee=0;Ee<pe;Ee++)be[Ee]=arguments[Ee+2];H.children=be}if(b&&b.defaultProps)for(ge in pe=b.defaultProps,pe)H[ge]===void 0&&(H[ge]=pe[ge]);return{$$typeof:o,type:b,key:te,ref:ne,props:H,_owner:ie.current}}function he(b,O){return{$$typeof:o,type:b.type,key:O,ref:b.ref,props:b.props,_owner:b._owner}}function U(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function se(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(me){return O[me]})}var Se=/\/+/g;function we(b,O){return typeof b=="object"&&b!==null&&b.key!=null?se(""+b.key):O.toString(36)}function Ae(b,O,me,ge,H){var te=typeof b;(te==="undefined"||te==="boolean")&&(b=null);var ne=!1;if(b===null)ne=!0;else switch(te){case"string":case"number":ne=!0;break;case"object":switch(b.$$typeof){case o:case s:ne=!0}}if(ne)return ne=b,H=H(ne),b=ge===""?"."+we(ne,0):ge,W(H)?(me="",b!=null&&(me=b.replace(Se,"$&/")+"/"),Ae(H,O,me,"",function(Ee){return Ee})):H!=null&&(U(H)&&(H=he(H,me+(!H.key||ne&&ne.key===H.key?"":(""+H.key).replace(Se,"$&/")+"/")+b)),O.push(H)),1;if(ne=0,ge=ge===""?".":ge+":",W(b))for(var pe=0;pe<b.length;pe++){te=b[pe];var be=ge+we(te,pe);ne+=Ae(te,O,me,be,H)}else if(be=R(b),typeof be=="function")for(b=be.call(b),pe=0;!(te=b.next()).done;)te=te.value,be=ge+we(te,pe++),ne+=Ae(te,O,me,be,H);else if(te==="object")throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ne}function B(b,O,me){if(b==null)return b;var ge=[],H=0;return Ae(b,ge,"","",function(te){return O.call(me,te,H++)}),ge}function ve(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(me){(b._status===0||b._status===-1)&&(b._status=1,b._result=me)},function(me){(b._status===0||b._status===-1)&&(b._status=2,b._result=me)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var q={current:null},M={transition:null},P={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:M,ReactCurrentOwner:ie};function D(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:B,forEach:function(b,O,me){B(b,function(){O.apply(this,arguments)},me)},count:function(b){var O=0;return B(b,function(){O++}),O},toArray:function(b){return B(b,function(O){return O})||[]},only:function(b){if(!U(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ke.Component=A,ke.Fragment=c,ke.Profiler=d,ke.PureComponent=Y,ke.StrictMode=p,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,ke.act=D,ke.cloneElement=function(b,O,me){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ge=j({},b.props),H=b.key,te=b.ref,ne=b._owner;if(O!=null){if(O.ref!==void 0&&(te=O.ref,ne=ie.current),O.key!==void 0&&(H=""+O.key),b.type&&b.type.defaultProps)var pe=b.type.defaultProps;for(be in O)oe.call(O,be)&&!xe.hasOwnProperty(be)&&(ge[be]=O[be]===void 0&&pe!==void 0?pe[be]:O[be])}var be=arguments.length-2;if(be===1)ge.children=me;else if(1<be){pe=Array(be);for(var Ee=0;Ee<be;Ee++)pe[Ee]=arguments[Ee+2];ge.children=pe}return{$$typeof:o,type:b.type,key:H,ref:te,props:ge,_owner:ne}},ke.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:m,_context:b},b.Consumer=b},ke.createElement=J,ke.createFactory=function(b){var O=J.bind(null,b);return O.type=b,O},ke.createRef=function(){return{current:null}},ke.forwardRef=function(b){return{$$typeof:v,render:b}},ke.isValidElement=U,ke.lazy=function(b){return{$$typeof:k,_payload:{_status:-1,_result:b},_init:ve}},ke.memo=function(b,O){return{$$typeof:w,type:b,compare:O===void 0?null:O}},ke.startTransition=function(b){var O=M.transition;M.transition={};try{b()}finally{M.transition=O}},ke.unstable_act=D,ke.useCallback=function(b,O){return q.current.useCallback(b,O)},ke.useContext=function(b){return q.current.useContext(b)},ke.useDebugValue=function(){},ke.useDeferredValue=function(b){return q.current.useDeferredValue(b)},ke.useEffect=function(b,O){return q.current.useEffect(b,O)},ke.useId=function(){return q.current.useId()},ke.useImperativeHandle=function(b,O,me){return q.current.useImperativeHandle(b,O,me)},ke.useInsertionEffect=function(b,O){return q.current.useInsertionEffect(b,O)},ke.useLayoutEffect=function(b,O){return q.current.useLayoutEffect(b,O)},ke.useMemo=function(b,O){return q.current.useMemo(b,O)},ke.useReducer=function(b,O,me){return q.current.useReducer(b,O,me)},ke.useRef=function(b){return q.current.useRef(b)},ke.useState=function(b){return q.current.useState(b)},ke.useSyncExternalStore=function(b,O,me){return q.current.useSyncExternalStore(b,O,me)},ke.useTransition=function(){return q.current.useTransition()},ke.version="18.3.1",ke}var up;function Yp(){return up||(up=1,_i.exports=bh()),_i.exports}var y=Yp();const n=Bo(y),kh=wh({__proto__:null,default:n},[y]);var Ro={},ji={exports:{}},ht={},Bi={exports:{}},Hi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function zh(){return pp||(pp=1,(function(o){function s(M,P){var D=M.length;M.push(P);e:for(;0<D;){var b=D-1>>>1,O=M[b];if(0<d(O,P))M[b]=P,M[D]=O,D=b;else break e}}function c(M){return M.length===0?null:M[0]}function p(M){if(M.length===0)return null;var P=M[0],D=M.pop();if(D!==P){M[0]=D;e:for(var b=0,O=M.length,me=O>>>1;b<me;){var ge=2*(b+1)-1,H=M[ge],te=ge+1,ne=M[te];if(0>d(H,D))te<O&&0>d(ne,H)?(M[b]=ne,M[te]=D,b=te):(M[b]=H,M[ge]=D,b=ge);else if(te<O&&0>d(ne,D))M[b]=ne,M[te]=D,b=te;else break e}}return P}function d(M,P){var D=M.sortIndex-P.sortIndex;return D!==0?D:M.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,v=f.now();o.unstable_now=function(){return f.now()-v}}var g=[],w=[],k=1,z=null,R=3,L=!1,j=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(M){for(var P=c(w);P!==null;){if(P.callback===null)p(w);else if(P.startTime<=M)p(w),P.sortIndex=P.expirationTime,s(g,P);else break;P=c(w)}}function W(M){if(T=!1,X(M),!j)if(c(g)!==null)j=!0,ve(oe);else{var P=c(w);P!==null&&q(W,P.startTime-M)}}function oe(M,P){j=!1,T&&(T=!1,V(J),J=-1),L=!0;var D=R;try{for(X(P),z=c(g);z!==null&&(!(z.expirationTime>P)||M&&!se());){var b=z.callback;if(typeof b=="function"){z.callback=null,R=z.priorityLevel;var O=b(z.expirationTime<=P);P=o.unstable_now(),typeof O=="function"?z.callback=O:z===c(g)&&p(g),X(P)}else p(g);z=c(g)}if(z!==null)var me=!0;else{var ge=c(w);ge!==null&&q(W,ge.startTime-P),me=!1}return me}finally{z=null,R=D,L=!1}}var ie=!1,xe=null,J=-1,he=5,U=-1;function se(){return!(o.unstable_now()-U<he)}function Se(){if(xe!==null){var M=o.unstable_now();U=M;var P=!0;try{P=xe(!0,M)}finally{P?we():(ie=!1,xe=null)}}else ie=!1}var we;if(typeof Y=="function")we=function(){Y(Se)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,B=Ae.port2;Ae.port1.onmessage=Se,we=function(){B.postMessage(null)}}else we=function(){A(Se,0)};function ve(M){xe=M,ie||(ie=!0,we())}function q(M,P){J=A(function(){M(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_continueExecution=function(){j||L||(j=!0,ve(oe))},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_getFirstCallbackNode=function(){return c(g)},o.unstable_next=function(M){switch(R){case 1:case 2:case 3:var P=3;break;default:P=R}var D=R;R=P;try{return M()}finally{R=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(M,P){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var D=R;R=M;try{return P()}finally{R=D}},o.unstable_scheduleCallback=function(M,P,D){var b=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?b+D:b):D=b,M){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=D+O,M={id:k++,callback:P,priorityLevel:M,startTime:D,expirationTime:O,sortIndex:-1},D>b?(M.sortIndex=D,s(w,M),c(g)===null&&M===c(w)&&(T?(V(J),J=-1):T=!0,q(W,D-b))):(M.sortIndex=O,s(g,M),j||L||(j=!0,ve(oe))),M},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(M){var P=R;return function(){var D=R;R=P;try{return M.apply(this,arguments)}finally{R=D}}}})(Hi)),Hi}var dp;function Nh(){return dp||(dp=1,Bi.exports=zh()),Bi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function Sh(){if(mp)return ht;mp=1;var o=Yp(),s=Nh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,d={};function m(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},z={};function R(e){return g.call(z,e)?!0:g.call(k,e)?!1:w.test(e)?z[e]=!0:(k[e]=!0,!1)}function L(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,r,a){if(t===null||typeof t>"u"||L(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,a,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(V,Y);A[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(V,Y);A[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(V,Y);A[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,r,a){var l=A.hasOwnProperty(t)?A[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,r,l,a)&&(r=null),a||l===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var W=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ie=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),se=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),M=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,b;function O(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var me=!1;function ge(e,t){if(!e||me)return"";me=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var a=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){a=C}e.call(t.prototype)}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),i=a.stack.split(`
`),u=l.length-1,h=i.length-1;1<=u&&0<=h&&l[u]!==i[h];)h--;for(;1<=u&&0<=h;u--,h--)if(l[u]!==i[h]){if(u!==1||h!==1)do if(u--,h--,0>h||l[u]!==i[h]){var x=`
`+l[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=h);break}}}finally{me=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function H(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case ie:return"Portal";case he:return"Profiler";case J:return"StrictMode";case we:return"Suspense";case Ae:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=be(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||(e._valueTracker=Ee(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=be(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function de(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Et(e,t){var r=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gs(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=pe(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function Wo(e,t){vs(e,t);var r=pe(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Go(e,t.type,r):t.hasOwnProperty("defaultValue")&&Go(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Go(e,t,r){(t!=="number"||de(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ar=Array.isArray;function Gn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(Ar(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pe(r)}}function Es(e,t){var r=pe(t.value),a=pe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,ks=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function zs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=zs(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var zd=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,qn=null,Qn=null;function Ss(e){if(e=Zr(e)){if(typeof el!="function")throw Error(c(280));var t=e.stateNode;t&&(t=$a(t),el(e.stateNode,e.type,t))}}function Cs(e){qn?Qn?Qn.push(e):Qn=[e]:qn=e}function As(){if(qn){var e=qn,t=Qn;if(Qn=qn=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function Ts(e,t){return e(t)}function Rs(){}var tl=!1;function Os(e,t,r){if(tl)return e(t,r);tl=!0;try{return Ts(e,t,r)}finally{tl=!1,(qn!==null||Qn!==null)&&(Rs(),As())}}function Or(e,t){var r=e.stateNode;if(r===null)return null;var a=$a(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var nl=!1;if(v)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{nl=!1}function Nd(e,t,r,a,l,i,u,h,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(I){this.onError(I)}}var Dr=!1,ba=null,ka=!1,rl=null,Sd={onError:function(e){Dr=!0,ba=e}};function Cd(e,t,r,a,l,i,u,h,x){Dr=!1,ba=null,Nd.apply(Sd,arguments)}function Ad(e,t,r,a,l,i,u,h,x){if(Cd.apply(this,arguments),Dr){if(Dr){var C=ba;Dr=!1,ba=null}else throw Error(c(198));ka||(ka=!0,rl=C)}}function Pn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ds(e){if(Pn(e)!==e)throw Error(c(188))}function Td(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return Ds(l),e;if(i===a)return Ds(l),t;i=i.sibling}throw Error(c(188))}if(r.return!==a.return)r=l,a=i;else{for(var u=!1,h=l.child;h;){if(h===r){u=!0,r=l,a=i;break}if(h===a){u=!0,a=l,r=i;break}h=h.sibling}if(!u){for(h=i.child;h;){if(h===r){u=!0,r=i,a=l;break}if(h===a){u=!0,a=i,r=l;break}h=h.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==a)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Fs(e){return e=Td(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Ls=s.unstable_scheduleCallback,Ms=s.unstable_cancelCallback,Rd=s.unstable_shouldYield,Od=s.unstable_requestPaint,je=s.unstable_now,Pd=s.unstable_getCurrentPriorityLevel,al=s.unstable_ImmediatePriority,_s=s.unstable_UserBlockingPriority,za=s.unstable_NormalPriority,Dd=s.unstable_LowPriority,js=s.unstable_IdlePriority,Na=null,Bt=null;function Fd(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Md,Id=Math.log,Ld=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Id(e)/Ld|0)|0}var Sa=64,Ca=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,u=r&268435455;if(u!==0){var h=u&~l;h!==0?a=Fr(h):(i&=u,i!==0&&(a=Fr(i)))}else u=r&~l,u!==0?a=Fr(u):i!==0&&(a=Fr(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Ot(t),l=1<<r,a|=e[r],t&=~l;return a}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-Ot(i),h=1<<u,x=l[u];x===-1?((h&r)===0||(h&a)!==0)&&(l[u]=_d(h,t)):x<=t&&(e.expiredLanes|=h),i&=~h}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=Sa;return Sa<<=1,(Sa&4194240)===0&&(Sa=64),e}function ll(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ir(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=r}function Bd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ot(r),i=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~i}}function il(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Ot(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var Ce=0;function Hs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Us,sl,Vs,$s,Ys,cl=!1,Ta=[],cn=null,un=null,pn=null,Lr=new Map,Mr=new Map,dn=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function _r(e,t,r,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zr(t),t!==null&&sl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ud(e,t,r,a,l){switch(t){case"focusin":return cn=_r(cn,e,t,r,a,l),!0;case"dragenter":return un=_r(un,e,t,r,a,l),!0;case"mouseover":return pn=_r(pn,e,t,r,a,l),!0;case"pointerover":var i=l.pointerId;return Lr.set(i,_r(Lr.get(i)||null,e,t,r,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Mr.set(i,_r(Mr.get(i)||null,e,t,r,a,l)),!0}return!1}function Gs(e){var t=Dn(e.target);if(t!==null){var r=Pn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ps(r),t!==null){e.blockedOn=t,Ys(e.priority,function(){Vs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Zo=a,r.target.dispatchEvent(a),Zo=null}else return t=Zr(r),t!==null&&sl(t),e.blockedOn=r,!1;t.shift()}return!0}function qs(e,t,r){Ra(e)&&r.delete(t)}function Vd(){cl=!1,cn!==null&&Ra(cn)&&(cn=null),un!==null&&Ra(un)&&(un=null),pn!==null&&Ra(pn)&&(pn=null),Lr.forEach(qs),Mr.forEach(qs)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,cl||(cl=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vd)))}function Br(e){function t(l){return jr(l,e)}if(0<Ta.length){jr(Ta[0],e);for(var r=1;r<Ta.length;r++){var a=Ta[r];a.blockedOn===e&&(a.blockedOn=null)}}for(cn!==null&&jr(cn,e),un!==null&&jr(un,e),pn!==null&&jr(pn,e),Lr.forEach(t),Mr.forEach(t),r=0;r<dn.length;r++)a=dn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<dn.length&&(r=dn[0],r.blockedOn===null);)Gs(r),r.blockedOn===null&&dn.shift()}var Kn=W.ReactCurrentBatchConfig,Oa=!0;function $d(e,t,r,a){var l=Ce,i=Kn.transition;Kn.transition=null;try{Ce=1,ul(e,t,r,a)}finally{Ce=l,Kn.transition=i}}function Yd(e,t,r,a){var l=Ce,i=Kn.transition;Kn.transition=null;try{Ce=4,ul(e,t,r,a)}finally{Ce=l,Kn.transition=i}}function ul(e,t,r,a){if(Oa){var l=pl(e,t,r,a);if(l===null)Al(e,t,a,Pa,r),Ws(e,a);else if(Ud(l,e,t,r,a))a.stopPropagation();else if(Ws(e,a),t&4&&-1<Hd.indexOf(e)){for(;l!==null;){var i=Zr(l);if(i!==null&&Us(i),i=pl(e,t,r,a),i===null&&Al(e,t,a,Pa,r),i===l)break;l=i}l!==null&&a.stopPropagation()}else Al(e,t,a,null,r)}}var Pa=null;function pl(e,t,r,a){if(Pa=null,e=Jo(a),e=Dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ps(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function Qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pd()){case al:return 1;case _s:return 4;case za:case Dd:return 16;case js:return 536870912;default:return 16}default:return 16}}var mn=null,dl=null,Da=null;function Ks(){if(Da)return Da;var e,t=dl,r=t.length,a,l="value"in mn?mn.value:mn.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var u=r-e;for(a=1;a<=u&&t[r-a]===l[i-a];a++);return Da=l.slice(e,1<a?1-a:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function Xs(){return!1}function gt(e){function t(r,a,l,i,u){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(r=e[h],this[h]=r?r(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ia:Xs,this.isPropagationStopped=Xs,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=gt(Xn),Hr=D({},Xn,{view:0,detail:0}),Wd=gt(Hr),hl,fl,Ur,La=D({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(hl=e.screenX-Ur.screenX,fl=e.screenY-Ur.screenY):fl=hl=0,Ur=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Zs=gt(La),Gd=D({},La,{dataTransfer:0}),qd=gt(Gd),Qd=D({},Hr,{relatedTarget:0}),gl=gt(Qd),Kd=D({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=gt(Kd),Zd=D({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=gt(Zd),em=D({},Xn,{data:0}),Js=gt(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function vl(){return am}var om=D({},Hr,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=gt(om),im=D({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=gt(im),sm=D({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),cm=gt(sm),um=D({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=gt(um),dm=D({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=gt(dm),hm=[9,13,27,32],xl=v&&"CompositionEvent"in window,Vr=null;v&&"documentMode"in document&&(Vr=document.documentMode);var fm=v&&"TextEvent"in window&&!Vr,tc=v&&(!xl||Vr&&8<Vr&&11>=Vr),nc=" ",rc=!1;function ac(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function gm(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(rc=!0,nc);case"textInput":return e=t.data,e===nc&&rc?null:e;default:return null}}function vm(e,t){if(Zn)return e==="compositionend"||!xl&&ac(e,t)?(e=Ks(),Da=dl=mn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tc&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function ic(e,t,r,a){Cs(a),t=Ha(t,"onChange"),0<t.length&&(r=new ml("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var $r=null,Yr=null;function ym(e){Nc(e,0)}function Ma(e){var t=rr(e);if(G(t))return e}function Em(e,t){if(e==="change")return t}var sc=!1;if(v){var yl;if(v){var El="oninput"in document;if(!El){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),El=typeof cc.oninput=="function"}yl=El}else yl=!1;sc=yl&&(!document.documentMode||9<document.documentMode)}function uc(){$r&&($r.detachEvent("onpropertychange",pc),Yr=$r=null)}function pc(e){if(e.propertyName==="value"&&Ma(Yr)){var t=[];ic(t,Yr,e,Jo(e)),Os(ym,t)}}function wm(e,t,r){e==="focusin"?(uc(),$r=t,Yr=r,$r.attachEvent("onpropertychange",pc)):e==="focusout"&&uc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Yr)}function km(e,t){if(e==="click")return Ma(t)}function zm(e,t){if(e==="input"||e==="change")return Ma(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:Nm;function Wr(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!g.call(t,l)||!Pt(e[l],t[l]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var r=dc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dc(r)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=de(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=fc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&hc(r.ownerDocument.documentElement,r)){if(a!==null&&wl(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=mc(r,i);var u=mc(r,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=v&&"documentMode"in document&&11>=document.documentMode,Jn=null,bl=null,Gr=null,kl=!1;function gc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;kl||Jn==null||Jn!==de(a)||(a=Jn,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gr&&Wr(Gr,a)||(Gr=a,a=Ha(bl,"onSelect"),0<a.length&&(t=new ml("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Jn)))}function _a(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},zl={},vc={};v&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ja(e){if(zl[e])return zl[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vc)return zl[e]=t[r];return e}var xc=ja("animationend"),yc=ja("animationiteration"),Ec=ja("animationstart"),wc=ja("transitionend"),bc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){bc.set(e,t),m(t,[e])}for(var Nl=0;Nl<kc.length;Nl++){var Sl=kc[Nl],Am=Sl.toLowerCase(),Tm=Sl[0].toUpperCase()+Sl.slice(1);hn(Am,"on"+Tm)}hn(xc,"onAnimationEnd"),hn(yc,"onAnimationIteration"),hn(Ec,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(wc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function zc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ad(a,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var h=a[u],x=h.instance,C=h.currentTarget;if(h=h.listener,x!==i&&l.isPropagationStopped())break e;zc(l,h,C),i=x}else for(u=0;u<a.length;u++){if(h=a[u],x=h.instance,C=h.currentTarget,h=h.listener,x!==i&&l.isPropagationStopped())break e;zc(l,h,C),i=x}}}if(ka)throw e=rl,ka=!1,rl=null,e}function Re(e,t){var r=t[Fl];r===void 0&&(r=t[Fl]=new Set);var a=e+"__bubble";r.has(a)||(Sc(t,e,2,!1),r.add(a))}function Cl(e,t,r){var a=0;t&&(a|=4),Sc(r,e,a,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Ba]){e[Ba]=!0,p.forEach(function(r){r!=="selectionchange"&&(Rm.has(r)||Cl(r,!1,e),Cl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,Cl("selectionchange",!1,t))}}function Sc(e,t,r,a){switch(Qs(t)){case 1:var l=$d;break;case 4:l=Yd;break;default:l=ul}r=l.bind(null,t,r,e),l=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Al(e,t,r,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var h=a.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===l||x.nodeType===8&&x.parentNode===l))return;u=u.return}for(;h!==null;){if(u=Dn(h),u===null)return;if(x=u.tag,x===5||x===6){a=i=u;continue e}h=h.parentNode}}a=a.return}Os(function(){var C=i,I=Jo(r),_=[];e:{var F=bc.get(e);if(F!==void 0){var Q=ml,ee=e;switch(e){case"keypress":if(Fa(r)===0)break e;case"keydown":case"keyup":Q=lm;break;case"focusin":ee="focus",Q=gl;break;case"focusout":ee="blur",Q=gl;break;case"beforeblur":case"afterblur":Q=gl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=cm;break;case xc:case yc:case Ec:Q=Xd;break;case wc:Q=pm;break;case"scroll":Q=Wd;break;case"wheel":Q=mm;break;case"copy":case"cut":case"paste":Q=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=ec}var re=(t&4)!==0,Be=!re&&e==="scroll",N=re?F!==null?F+"Capture":null:F;re=[];for(var E=C,S;E!==null;){S=E;var $=S.stateNode;if(S.tag===5&&$!==null&&(S=$,N!==null&&($=Or(E,N),$!=null&&re.push(Kr(E,$,S)))),Be)break;E=E.return}0<re.length&&(F=new Q(F,ee,null,r,I),_.push({event:F,listeners:re}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",F&&r!==Zo&&(ee=r.relatedTarget||r.fromElement)&&(Dn(ee)||ee[Qt]))break e;if((Q||F)&&(F=I.window===I?I:(F=I.ownerDocument)?F.defaultView||F.parentWindow:window,Q?(ee=r.relatedTarget||r.toElement,Q=C,ee=ee?Dn(ee):null,ee!==null&&(Be=Pn(ee),ee!==Be||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Q=null,ee=C),Q!==ee)){if(re=Zs,$="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(re=ec,$="onPointerLeave",N="onPointerEnter",E="pointer"),Be=Q==null?F:rr(Q),S=ee==null?F:rr(ee),F=new re($,E+"leave",Q,r,I),F.target=Be,F.relatedTarget=S,$=null,Dn(I)===C&&(re=new re(N,E+"enter",ee,r,I),re.target=S,re.relatedTarget=Be,$=re),Be=$,Q&&ee)t:{for(re=Q,N=ee,E=0,S=re;S;S=tr(S))E++;for(S=0,$=N;$;$=tr($))S++;for(;0<E-S;)re=tr(re),E--;for(;0<S-E;)N=tr(N),S--;for(;E--;){if(re===N||N!==null&&re===N.alternate)break t;re=tr(re),N=tr(N)}re=null}else re=null;Q!==null&&Cc(_,F,Q,re,!1),ee!==null&&Be!==null&&Cc(_,Be,ee,re,!0)}}e:{if(F=C?rr(C):window,Q=F.nodeName&&F.nodeName.toLowerCase(),Q==="select"||Q==="input"&&F.type==="file")var ae=Em;else if(lc(F))if(sc)ae=zm;else{ae=bm;var ce=wm}else(Q=F.nodeName)&&Q.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(ae=km);if(ae&&(ae=ae(e,C))){ic(_,ae,r,I);break e}ce&&ce(e,F,C),e==="focusout"&&(ce=F._wrapperState)&&ce.controlled&&F.type==="number"&&Go(F,"number",F.value)}switch(ce=C?rr(C):window,e){case"focusin":(lc(ce)||ce.contentEditable==="true")&&(Jn=ce,bl=C,Gr=null);break;case"focusout":Gr=bl=Jn=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,gc(_,r,I);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":gc(_,r,I)}var ue;if(xl)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Zn?ac(e,r)&&(fe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(fe="onCompositionStart");fe&&(tc&&r.locale!=="ko"&&(Zn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Zn&&(ue=Ks()):(mn=I,dl="value"in mn?mn.value:mn.textContent,Zn=!0)),ce=Ha(C,fe),0<ce.length&&(fe=new Js(fe,e,null,r,I),_.push({event:fe,listeners:ce}),ue?fe.data=ue:(ue=oc(r),ue!==null&&(fe.data=ue)))),(ue=fm?gm(e,r):vm(e,r))&&(C=Ha(C,"onBeforeInput"),0<C.length&&(I=new Js("onBeforeInput","beforeinput",null,r,I),_.push({event:I,listeners:C}),I.data=ue))}Nc(_,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ha(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Or(e,r),i!=null&&a.unshift(Kr(e,i,l)),i=Or(e,t),i!=null&&a.push(Kr(e,i,l))),e=e.return}return a}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,r,a,l){for(var i=t._reactName,u=[];r!==null&&r!==a;){var h=r,x=h.alternate,C=h.stateNode;if(x!==null&&x===a)break;h.tag===5&&C!==null&&(h=C,l?(x=Or(r,i),x!=null&&u.unshift(Kr(r,x,h))):l||(x=Or(r,i),x!=null&&u.push(Kr(r,x,h)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var Om=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Pm,"")}function Ua(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(c(425))}function Va(){}var Tl=null,Rl=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Im)}:Pl;function Im(e){setTimeout(function(){throw e})}function Dl(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Br(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Br(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+nr,Xr="__reactProps$"+nr,Qt="__reactContainer$"+nr,Fl="__reactEvents$"+nr,Lm="__reactListeners$"+nr,Mm="__reactHandles$"+nr;function Dn(e){var t=e[Ht];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qt]||r[Ht]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rc(e);e!==null;){if(r=e[Ht])return r;e=Rc(e)}return t}e=r,r=e.parentNode}return null}function Zr(e){return e=e[Ht]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function $a(e){return e[Xr]||null}var Il=[],ar=-1;function gn(e){return{current:e}}function Oe(e){0>ar||(e.current=Il[ar],Il[ar]=null,ar--)}function Te(e,t){ar++,Il[ar]=e.current,e.current=t}var vn={},Je=gn(vn),ct=gn(!1),Fn=vn;function or(e,t){var r=e.type.contextTypes;if(!r)return vn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ut(e){return e=e.childContextTypes,e!=null}function Ya(){Oe(ct),Oe(Je)}function Oc(e,t,r){if(Je.current!==vn)throw Error(c(168));Te(Je,t),Te(ct,r)}function Pc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(c(108,ne(e)||"Unknown",l));return D({},r,a)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Fn=Je.current,Te(Je,e),Te(ct,ct.current),!0}function Dc(e,t,r){var a=e.stateNode;if(!a)throw Error(c(169));r?(e=Pc(e,t,Fn),a.__reactInternalMemoizedMergedChildContext=e,Oe(ct),Oe(Je),Te(Je,e)):Oe(ct),Te(ct,r)}var Kt=null,Ga=!1,Ll=!1;function Fc(e){Kt===null?Kt=[e]:Kt.push(e)}function _m(e){Ga=!0,Fc(e)}function xn(){if(!Ll&&Kt!==null){Ll=!0;var e=0,t=Ce;try{var r=Kt;for(Ce=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Kt=null,Ga=!1}catch(l){throw Kt!==null&&(Kt=Kt.slice(e+1)),Ls(al,xn),l}finally{Ce=t,Ll=!1}}return null}var lr=[],ir=0,qa=null,Qa=0,wt=[],bt=0,In=null,Xt=1,Zt="";function Ln(e,t){lr[ir++]=Qa,lr[ir++]=qa,qa=e,Qa=t}function Ic(e,t,r){wt[bt++]=Xt,wt[bt++]=Zt,wt[bt++]=In,In=e;var a=Xt;e=Zt;var l=32-Ot(a)-1;a&=~(1<<l),r+=1;var i=32-Ot(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Xt=1<<32-Ot(t)+l|r<<l|a,Zt=i+e}else Xt=1<<i|r<<l|a,Zt=e}function Ml(e){e.return!==null&&(Ln(e,1),Ic(e,1,0))}function _l(e){for(;e===qa;)qa=lr[--ir],lr[ir]=null,Qa=lr[--ir],lr[ir]=null;for(;e===In;)In=wt[--bt],wt[bt]=null,Zt=wt[--bt],wt[bt]=null,Xt=wt[--bt],wt[bt]=null}var vt=null,xt=null,Pe=!1,Dt=null;function Lc(e,t){var r=St(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,xt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=In!==null?{id:Xt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=St(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,xt=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(Pe){var t=xt;if(t){var r=t;if(!Mc(e,t)){if(jl(e))throw Error(c(418));t=fn(r.nextSibling);var a=vt;t&&Mc(e,t)?Lc(a,r):(e.flags=e.flags&-4097|2,Pe=!1,vt=e)}}else{if(jl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Pe=!1,vt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Ka(e){if(e!==vt)return!1;if(!Pe)return _c(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=xt)){if(jl(e))throw jc(),Error(c(418));for(;t;)Lc(e,t),t=fn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=vt?fn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=xt;e;)e=fn(e.nextSibling)}function sr(){xt=vt=null,Pe=!1}function Hl(e){Dt===null?Dt=[e]:Dt.push(e)}var jm=W.ReactCurrentBatchConfig;function Jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var a=r.stateNode}if(!a)throw Error(c(147,e));var l=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var h=l.refs;u===null?delete h[i]:h[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Hc(e){function t(N,E){if(e){var S=N.deletions;S===null?(N.deletions=[E],N.flags|=16):S.push(E)}}function r(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function a(N,E){for(N=new Map;E!==null;)E.key!==null?N.set(E.key,E):N.set(E.index,E),E=E.sibling;return N}function l(N,E){return N=Sn(N,E),N.index=0,N.sibling=null,N}function i(N,E,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<E?(N.flags|=2,E):S):(N.flags|=2,E)):(N.flags|=1048576,E)}function u(N){return e&&N.alternate===null&&(N.flags|=2),N}function h(N,E,S,$){return E===null||E.tag!==6?(E=Pi(S,N.mode,$),E.return=N,E):(E=l(E,S),E.return=N,E)}function x(N,E,S,$){var ae=S.type;return ae===xe?I(N,E,S.props.children,$,S.key):E!==null&&(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ve&&Bc(ae)===E.type)?($=l(E,S.props),$.ref=Jr(N,E,S),$.return=N,$):($=bo(S.type,S.key,S.props,null,N.mode,$),$.ref=Jr(N,E,S),$.return=N,$)}function C(N,E,S,$){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Di(S,N.mode,$),E.return=N,E):(E=l(E,S.children||[]),E.return=N,E)}function I(N,E,S,$,ae){return E===null||E.tag!==7?(E=$n(S,N.mode,$,ae),E.return=N,E):(E=l(E,S),E.return=N,E)}function _(N,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Pi(""+E,N.mode,S),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oe:return S=bo(E.type,E.key,E.props,null,N.mode,S),S.ref=Jr(N,null,E),S.return=N,S;case ie:return E=Di(E,N.mode,S),E.return=N,E;case ve:var $=E._init;return _(N,$(E._payload),S)}if(Ar(E)||P(E))return E=$n(E,N.mode,S,null),E.return=N,E;Xa(N,E)}return null}function F(N,E,S,$){var ae=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return ae!==null?null:h(N,E,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oe:return S.key===ae?x(N,E,S,$):null;case ie:return S.key===ae?C(N,E,S,$):null;case ve:return ae=S._init,F(N,E,ae(S._payload),$)}if(Ar(S)||P(S))return ae!==null?null:I(N,E,S,$,null);Xa(N,S)}return null}function Q(N,E,S,$,ae){if(typeof $=="string"&&$!==""||typeof $=="number")return N=N.get(S)||null,h(E,N,""+$,ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case oe:return N=N.get($.key===null?S:$.key)||null,x(E,N,$,ae);case ie:return N=N.get($.key===null?S:$.key)||null,C(E,N,$,ae);case ve:var ce=$._init;return Q(N,E,S,ce($._payload),ae)}if(Ar($)||P($))return N=N.get(S)||null,I(E,N,$,ae,null);Xa(E,$)}return null}function ee(N,E,S,$){for(var ae=null,ce=null,ue=E,fe=E=0,qe=null;ue!==null&&fe<S.length;fe++){ue.index>fe?(qe=ue,ue=null):qe=ue.sibling;var Ne=F(N,ue,S[fe],$);if(Ne===null){ue===null&&(ue=qe);break}e&&ue&&Ne.alternate===null&&t(N,ue),E=i(Ne,E,fe),ce===null?ae=Ne:ce.sibling=Ne,ce=Ne,ue=qe}if(fe===S.length)return r(N,ue),Pe&&Ln(N,fe),ae;if(ue===null){for(;fe<S.length;fe++)ue=_(N,S[fe],$),ue!==null&&(E=i(ue,E,fe),ce===null?ae=ue:ce.sibling=ue,ce=ue);return Pe&&Ln(N,fe),ae}for(ue=a(N,ue);fe<S.length;fe++)qe=Q(ue,N,fe,S[fe],$),qe!==null&&(e&&qe.alternate!==null&&ue.delete(qe.key===null?fe:qe.key),E=i(qe,E,fe),ce===null?ae=qe:ce.sibling=qe,ce=qe);return e&&ue.forEach(function(Cn){return t(N,Cn)}),Pe&&Ln(N,fe),ae}function re(N,E,S,$){var ae=P(S);if(typeof ae!="function")throw Error(c(150));if(S=ae.call(S),S==null)throw Error(c(151));for(var ce=ae=null,ue=E,fe=E=0,qe=null,Ne=S.next();ue!==null&&!Ne.done;fe++,Ne=S.next()){ue.index>fe?(qe=ue,ue=null):qe=ue.sibling;var Cn=F(N,ue,Ne.value,$);if(Cn===null){ue===null&&(ue=qe);break}e&&ue&&Cn.alternate===null&&t(N,ue),E=i(Cn,E,fe),ce===null?ae=Cn:ce.sibling=Cn,ce=Cn,ue=qe}if(Ne.done)return r(N,ue),Pe&&Ln(N,fe),ae;if(ue===null){for(;!Ne.done;fe++,Ne=S.next())Ne=_(N,Ne.value,$),Ne!==null&&(E=i(Ne,E,fe),ce===null?ae=Ne:ce.sibling=Ne,ce=Ne);return Pe&&Ln(N,fe),ae}for(ue=a(N,ue);!Ne.done;fe++,Ne=S.next())Ne=Q(ue,N,fe,Ne.value,$),Ne!==null&&(e&&Ne.alternate!==null&&ue.delete(Ne.key===null?fe:Ne.key),E=i(Ne,E,fe),ce===null?ae=Ne:ce.sibling=Ne,ce=Ne);return e&&ue.forEach(function(xh){return t(N,xh)}),Pe&&Ln(N,fe),ae}function Be(N,E,S,$){if(typeof S=="object"&&S!==null&&S.type===xe&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case oe:e:{for(var ae=S.key,ce=E;ce!==null;){if(ce.key===ae){if(ae=S.type,ae===xe){if(ce.tag===7){r(N,ce.sibling),E=l(ce,S.props.children),E.return=N,N=E;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ve&&Bc(ae)===ce.type){r(N,ce.sibling),E=l(ce,S.props),E.ref=Jr(N,ce,S),E.return=N,N=E;break e}r(N,ce);break}else t(N,ce);ce=ce.sibling}S.type===xe?(E=$n(S.props.children,N.mode,$,S.key),E.return=N,N=E):($=bo(S.type,S.key,S.props,null,N.mode,$),$.ref=Jr(N,E,S),$.return=N,N=$)}return u(N);case ie:e:{for(ce=S.key;E!==null;){if(E.key===ce)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){r(N,E.sibling),E=l(E,S.children||[]),E.return=N,N=E;break e}else{r(N,E);break}else t(N,E);E=E.sibling}E=Di(S,N.mode,$),E.return=N,N=E}return u(N);case ve:return ce=S._init,Be(N,E,ce(S._payload),$)}if(Ar(S))return ee(N,E,S,$);if(P(S))return re(N,E,S,$);Xa(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(r(N,E.sibling),E=l(E,S),E.return=N,N=E):(r(N,E),E=Pi(S,N.mode,$),E.return=N,N=E),u(N)):r(N,E)}return Be}var cr=Hc(!0),Uc=Hc(!1),Za=gn(null),Ja=null,ur=null,Ul=null;function Vl(){Ul=ur=Ja=null}function $l(e){var t=Za.current;Oe(Za),e._currentValue=t}function Yl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){Ja=e,Ul=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(pt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ja===null)throw Error(c(308));ur=e,Ja.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Mn=null;function Wl(e){Mn===null?Mn=[e]:Mn.push(e)}function Vc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Wl(t)):(r.next=l.next,l.next=r),t.interleaved=r,Jt(e,a)}function Jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var yn=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ze&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Jt(e,r)}return l=a.interleaved,l===null?(t.next=t,Wl(a)):(t.next=l.next,l.next=t),a.interleaved=t,Jt(e,r)}function eo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,il(e,r)}}function Yc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=u:i=i.next=u,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function to(e,t,r,a){var l=e.updateQueue;yn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var x=h,C=x.next;x.next=null,u===null?i=C:u.next=C,u=x;var I=e.alternate;I!==null&&(I=I.updateQueue,h=I.lastBaseUpdate,h!==u&&(h===null?I.firstBaseUpdate=C:h.next=C,I.lastBaseUpdate=x))}if(i!==null){var _=l.baseState;u=0,I=C=x=null,h=i;do{var F=h.lane,Q=h.eventTime;if((a&F)===F){I!==null&&(I=I.next={eventTime:Q,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var ee=e,re=h;switch(F=t,Q=r,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){_=ee.call(Q,_,F);break e}_=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,F=typeof ee=="function"?ee.call(Q,_,F):ee,F==null)break e;_=D({},_,F);break e;case 2:yn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,F=l.effects,F===null?l.effects=[h]:F.push(h))}else Q={eventTime:Q,lane:F,tag:h.tag,payload:h.payload,callback:h.callback,next:null},I===null?(C=I=Q,x=_):I=I.next=Q,u|=F;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;F=h,h=F.next,F.next=null,l.lastBaseUpdate=F,l.shared.pending=null}}while(!0);if(I===null&&(x=_),l.baseState=x,l.firstBaseUpdate=C,l.lastBaseUpdate=I,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Bn|=u,e.lanes=u,e.memoizedState=_}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var ea={},Ut=gn(ea),ta=gn(ea),na=gn(ea);function _n(e){if(e===ea)throw Error(c(174));return e}function ql(e,t){switch(Te(na,t),Te(ta,e),Te(Ut,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qo(t,e)}Oe(Ut),Te(Ut,t)}function dr(){Oe(Ut),Oe(ta),Oe(na)}function Gc(e){_n(na.current);var t=_n(Ut.current),r=Qo(t,e.type);t!==r&&(Te(ta,e),Te(Ut,r))}function Ql(e){ta.current===e&&(Oe(Ut),Oe(ta))}var Fe=gn(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Xl(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var ro=W.ReactCurrentDispatcher,Zl=W.ReactCurrentBatchConfig,jn=0,Ie=null,$e=null,We=null,ao=!1,ra=!1,aa=0,Bm=0;function et(){throw Error(c(321))}function Jl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Pt(e[r],t[r]))return!1;return!0}function ei(e,t,r,a,l,i){if(jn=i,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?$m:Ym,e=r(a,l),ra){i=0;do{if(ra=!1,aa=0,25<=i)throw Error(c(301));i+=1,We=$e=null,t.updateQueue=null,ro.current=Wm,e=r(a,l)}while(ra)}if(ro.current=io,t=$e!==null&&$e.next!==null,jn=0,We=$e=Ie=null,ao=!1,t)throw Error(c(300));return e}function ti(){var e=aa!==0;return aa=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=e:We=We.next=e,We}function zt(){if($e===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=We===null?Ie.memoizedState:We.next;if(t!==null)We=t,$e=e;else{if(e===null)throw Error(c(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?Ie.memoizedState=We=e:We=We.next=e}return We}function oa(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=zt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=$e,l=a.baseQueue,i=r.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,a=a.baseState;var h=u=null,x=null,C=i;do{var I=C.lane;if((jn&I)===I)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),a=C.hasEagerState?C.eagerState:e(a,C.action);else{var _={lane:I,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(h=x=_,u=a):x=x.next=_,Ie.lanes|=I,Bn|=I}C=C.next}while(C!==null&&C!==i);x===null?u=a:x.next=h,Pt(a,t.memoizedState)||(pt=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=x,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do i=l.lane,Ie.lanes|=i,Bn|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ri(e){var t=zt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Pt(i,t.memoizedState)||(pt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,a]}function qc(){}function Qc(e,t){var r=Ie,a=zt(),l=t(),i=!Pt(a.memoizedState,l);if(i&&(a.memoizedState=l,pt=!0),a=a.queue,ai(Zc.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,la(9,Xc.bind(null,r,a,l,t),void 0,null),Ge===null)throw Error(c(349));(jn&30)!==0||Kc(r,t,l)}return l}function Kc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Xc(e,t,r,a){t.value=r,t.getSnapshot=a,Jc(t)&&eu(e)}function Zc(e,t,r){return r(function(){Jc(t)&&eu(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Pt(e,r)}catch{return!0}}function eu(e){var t=Jt(e,1);t!==null&&Mt(t,e,1,-1)}function tu(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t.queue=e,e=e.dispatch=Vm.bind(null,Ie,e),[t.memoizedState,e]}function la(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function nu(){return zt().memoizedState}function oo(e,t,r,a){var l=Vt();Ie.flags|=e,l.memoizedState=la(1|t,r,void 0,a===void 0?null:a)}function lo(e,t,r,a){var l=zt();a=a===void 0?null:a;var i=void 0;if($e!==null){var u=$e.memoizedState;if(i=u.destroy,a!==null&&Jl(a,u.deps)){l.memoizedState=la(t,r,i,a);return}}Ie.flags|=e,l.memoizedState=la(1|t,r,i,a)}function ru(e,t){return oo(8390656,8,e,t)}function ai(e,t){return lo(2048,8,e,t)}function au(e,t){return lo(4,2,e,t)}function ou(e,t){return lo(4,4,e,t)}function lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iu(e,t,r){return r=r!=null?r.concat([e]):null,lo(4,4,lu.bind(null,t,e),r)}function oi(){}function su(e,t){var r=zt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Jl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function cu(e,t){var r=zt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Jl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function uu(e,t,r){return(jn&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=r):(Pt(r,t)||(r=Bs(),Ie.lanes|=r,Bn|=r,e.baseState=!0),t)}function Hm(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var a=Zl.transition;Zl.transition={};try{e(!1),t()}finally{Ce=r,Zl.transition=a}}function pu(){return zt().memoizedState}function Um(e,t,r){var a=zn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},du(e))mu(t,r);else if(r=Vc(e,t,r,a),r!==null){var l=at();Mt(r,e,a,l),hu(r,t,a)}}function Vm(e,t,r){var a=zn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(du(e))mu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,h=i(u,r);if(l.hasEagerState=!0,l.eagerState=h,Pt(h,u)){var x=t.interleaved;x===null?(l.next=l,Wl(t)):(l.next=x.next,x.next=l),t.interleaved=l;return}}catch{}finally{}r=Vc(e,t,l,a),r!==null&&(l=at(),Mt(r,e,a,l),hu(r,t,a))}}function du(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function mu(e,t){ra=ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function hu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,il(e,r)}}var io={readContext:kt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$m={readContext:kt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oo(4194308,4,lu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Vt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Um.bind(null,Ie,e),[a.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:oi,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Hm.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ie,l=Vt();if(Pe){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ge===null)throw Error(c(349));(jn&30)!==0||Kc(a,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,ru(Zc.bind(null,a,i,e),[e]),a.flags|=2048,la(9,Xc.bind(null,a,i,r,t),void 0,null),r},useId:function(){var e=Vt(),t=Ge.identifierPrefix;if(Pe){var r=Zt,a=Xt;r=(a&~(1<<32-Ot(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=aa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:kt,useCallback:su,useContext:kt,useEffect:ai,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:ni,useRef:nu,useState:function(){return ni(oa)},useDebugValue:oi,useDeferredValue:function(e){var t=zt();return uu(t,$e.memoizedState,e)},useTransition:function(){var e=ni(oa)[0],t=zt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1},Wm={readContext:kt,useCallback:su,useContext:kt,useEffect:ai,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:ri,useRef:nu,useState:function(){return ri(oa)},useDebugValue:oi,useDeferredValue:function(e){var t=zt();return $e===null?t.memoizedState=e:uu(t,$e.memoizedState,e)},useTransition:function(){var e=ri(oa)[0],t=zt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function li(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:D({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var so={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=at(),l=zn(e),i=en(a,l);i.payload=t,r!=null&&(i.callback=r),t=En(e,i,l),t!==null&&(Mt(t,e,l,a),eo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=at(),l=zn(e),i=en(a,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=En(e,i,l),t!==null&&(Mt(t,e,l,a),eo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=at(),a=zn(e),l=en(r,a);l.tag=2,t!=null&&(l.callback=t),t=En(e,l,a),t!==null&&(Mt(t,e,a,r),eo(t,e,a))}};function fu(e,t,r,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,a)||!Wr(l,i):!0}function gu(e,t,r){var a=!1,l=vn,i=t.contextType;return typeof i=="object"&&i!==null?i=kt(i):(l=ut(t)?Fn:Je.current,a=t.contextTypes,i=(a=a!=null)?or(e,l):vn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function vu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function ii(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Gl(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=kt(i):(i=ut(t)?Fn:Je.current,l.context=or(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(li(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&so.enqueueReplaceState(l,l.state,null),to(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",a=t;do r+=H(a),a=a.return;while(a);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function si(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ci(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,r){r=en(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){go||(go=!0,zi=a),ci(e,t)},r}function yu(e,t,r){r=en(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ci(e,t),typeof a!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Eu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Gm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=ih.bind(null,e,t,r),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=en(-1,1),t.tag=2,En(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var qm=W.ReactCurrentOwner,pt=!1;function rt(e,t,r,a){t.child=e===null?Uc(t,null,r,a):cr(t,e.child,r,a)}function ku(e,t,r,a,l){r=r.render;var i=t.ref;return pr(t,l),a=ei(e,t,r,a,i,l),r=ti(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tn(e,t,l)):(Pe&&r&&Ml(t),t.flags|=1,rt(e,t,a,l),t.child)}function zu(e,t,r,a,l){if(e===null){var i=r.type;return typeof i=="function"&&!Oi(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Nu(e,t,i,a,l)):(e=bo(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(u,a)&&e.ref===t.ref)return tn(e,t,l)}return t.flags|=1,e=Sn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,r,a,l){if(e!==null){var i=e.memoizedProps;if(Wr(i,a)&&e.ref===t.ref)if(pt=!1,t.pendingProps=a=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,tn(e,t,l)}return ui(e,t,r,a,l)}function Su(e,t,r){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(fr,yt),yt|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(fr,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:r,Te(fr,yt),yt|=a}else i!==null?(a=i.baseLanes|r,t.memoizedState=null):a=r,Te(fr,yt),yt|=a;return rt(e,t,l,r),t.child}function Cu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,r,a,l){var i=ut(r)?Fn:Je.current;return i=or(t,i),pr(t,l),r=ei(e,t,r,a,i,l),a=ti(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tn(e,t,l)):(Pe&&a&&Ml(t),t.flags|=1,rt(e,t,r,l),t.child)}function Au(e,t,r,a,l){if(ut(r)){var i=!0;Wa(t)}else i=!1;if(pr(t,l),t.stateNode===null)uo(e,t),gu(t,r,a),ii(t,r,a,l),a=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var x=u.context,C=r.contextType;typeof C=="object"&&C!==null?C=kt(C):(C=ut(r)?Fn:Je.current,C=or(t,C));var I=r.getDerivedStateFromProps,_=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function";_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==a||x!==C)&&vu(t,u,a,C),yn=!1;var F=t.memoizedState;u.state=F,to(t,a,u,l),x=t.memoizedState,h!==a||F!==x||ct.current||yn?(typeof I=="function"&&(li(t,r,I,a),x=t.memoizedState),(h=yn||fu(t,r,h,a,F,x,C))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),u.props=a,u.state=x,u.context=C,a=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,$c(e,t),h=t.memoizedProps,C=t.type===t.elementType?h:Ft(t.type,h),u.props=C,_=t.pendingProps,F=u.context,x=r.contextType,typeof x=="object"&&x!==null?x=kt(x):(x=ut(r)?Fn:Je.current,x=or(t,x));var Q=r.getDerivedStateFromProps;(I=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==_||F!==x)&&vu(t,u,a,x),yn=!1,F=t.memoizedState,u.state=F,to(t,a,u,l);var ee=t.memoizedState;h!==_||F!==ee||ct.current||yn?(typeof Q=="function"&&(li(t,r,Q,a),ee=t.memoizedState),(C=yn||fu(t,r,C,a,F,ee,x)||!1)?(I||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,ee,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,ee,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ee),u.props=a,u.state=ee,u.context=x,a=C):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),a=!1)}return pi(e,t,r,a,i,l)}function pi(e,t,r,a,l,i){Cu(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return l&&Dc(t,r,!1),tn(e,t,i);a=t.stateNode,qm.current=t;var h=u&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,h,i)):rt(e,t,h,i),t.memoizedState=a.state,l&&Dc(t,r,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),ql(e,t.containerInfo)}function Ru(e,t,r,a,l){return sr(),Hl(l),t.flags|=256,rt(e,t,r,a),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,r){var a=t.pendingProps,l=Fe.current,i=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Te(Fe,l&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,i?(a=t.mode,i=t.child,u={mode:"hidden",children:u},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=ko(u,a,0,null),e=$n(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=mi(r),t.memoizedState=di,e):hi(t,u));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return Qm(e,t,u,a,h,l,r);if(i){i=a.fallback,u=t.mode,l=e.child,h=l.sibling;var x={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=x,t.deletions=null):(a=Sn(l,x),a.subtreeFlags=l.subtreeFlags&14680064),h!==null?i=Sn(h,i):(i=$n(i,u,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,u=e.child.memoizedState,u=u===null?mi(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~r,t.memoizedState=di,a}return i=e.child,e=i.sibling,a=Sn(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function hi(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,r,a){return a!==null&&Hl(a),cr(t,e.child,null,r),e=hi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,r,a,l,i,u){if(r)return t.flags&256?(t.flags&=-257,a=si(Error(c(422))),co(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,l=t.mode,a=ko({mode:"visible",children:a.children},l,0,null),i=$n(i,l,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&cr(t,e.child,null,u),t.child.memoizedState=mi(u),t.memoizedState=di,i);if((t.mode&1)===0)return co(e,t,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;return a=h,i=Error(c(419)),a=si(i,a,void 0),co(e,t,u,a)}if(h=(u&e.childLanes)!==0,pt||h){if(a=Ge,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Jt(e,l),Mt(a,e,l,-1))}return Ri(),a=si(Error(c(421))),co(e,t,u,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=sh.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,xt=fn(l.nextSibling),vt=t,Pe=!0,Dt=null,e!==null&&(wt[bt++]=Xt,wt[bt++]=Zt,wt[bt++]=In,Xt=e.id,Zt=e.overflow,In=t),t=hi(t,a.children),t.flags|=4096,t)}function Pu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Yl(e.return,t,r)}function fi(e,t,r,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=r,i.tailMode=l)}function Du(e,t,r){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(rt(e,t,a.children,r),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,t);else if(e.tag===19)Pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Te(Fe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&no(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),fi(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&no(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}fi(t,!0,r,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=Sn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Sn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Km(e,t,r){switch(t.tag){case 3:Tu(t),sr();break;case 5:Gc(t);break;case 1:ut(t.type)&&Wa(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Te(Za,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Te(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ou(e,t,r):(Te(Fe,Fe.current&1),e=tn(e,t,r),e!==null?e.sibling:null);Te(Fe,Fe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Du(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Te(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,r)}return tn(e,t,r)}var Fu,gi,Iu,Lu;Fu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},gi=function(){},Iu=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,_n(Ut.current);var i=null;switch(r){case"input":l=Et(e,l),a=Et(e,a),i=[];break;case"select":l=D({},l,{value:void 0}),a=D({},a,{value:void 0}),i=[];break;case"textarea":l=qo(e,l),a=qo(e,a),i=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Va)}Ko(r,a);var u;r=null;for(C in l)if(!a.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var h=l[C];for(u in h)h.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?i||(i=[]):(i=i||[]).push(C,null));for(C in a){var x=a[C];if(h=l!=null?l[C]:void 0,a.hasOwnProperty(C)&&x!==h&&(x!=null||h!=null))if(C==="style")if(h){for(u in h)!h.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in x)x.hasOwnProperty(u)&&h[u]!==x[u]&&(r||(r={}),r[u]=x[u])}else r||(i||(i=[]),i.push(C,r)),r=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,h=h?h.__html:void 0,x!=null&&h!==x&&(i=i||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(i=i||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&Re("scroll",e),i||h===x||(i=[])):(i=i||[]).push(C,x))}r&&(i=i||[]).push("style",r);var C=i;(t.updateQueue=C)&&(t.flags|=4)}},Lu=function(e,t,r,a){r!==a&&(t.flags|=4)};function ia(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Xm(e,t,r){var a=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ut(t.type)&&Ya(),tt(t),null;case 3:return a=t.stateNode,dr(),Oe(ct),Oe(Je),Xl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(Ci(Dt),Dt=null))),gi(e,t),tt(t),null;case 5:Ql(t);var l=_n(na.current);if(r=t.type,e!==null&&t.stateNode!=null)Iu(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(e=_n(Ut.current),Ka(t)){a=t.stateNode,r=t.type;var i=t.memoizedProps;switch(a[Ht]=t,a[Xr]=i,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",a),Re("close",a);break;case"iframe":case"object":case"embed":Re("load",a);break;case"video":case"audio":for(l=0;l<qr.length;l++)Re(qr[l],a);break;case"source":Re("error",a);break;case"img":case"image":case"link":Re("error",a),Re("load",a);break;case"details":Re("toggle",a);break;case"input":gs(a,i),Re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Re("invalid",a);break;case"textarea":ys(a,i),Re("invalid",a)}Ko(r,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var h=i[u];u==="children"?typeof h=="string"?a.textContent!==h&&(i.suppressHydrationWarning!==!0&&Ua(a.textContent,h,e),l=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&Ua(a.textContent,h,e),l=["children",""+h]):d.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&Re("scroll",a)}switch(r){case"input":_e(a),xs(a,i,!0);break;case"textarea":_e(a),ws(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Va)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(r,{is:a.is}):(e=u.createElement(r),r==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,r),e[Ht]=t,e[Xr]=a,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Xo(r,a),r){case"dialog":Re("cancel",e),Re("close",e),l=a;break;case"iframe":case"object":case"embed":Re("load",e),l=a;break;case"video":case"audio":for(l=0;l<qr.length;l++)Re(qr[l],e);l=a;break;case"source":Re("error",e),l=a;break;case"img":case"image":case"link":Re("error",e),Re("load",e),l=a;break;case"details":Re("toggle",e),l=a;break;case"input":gs(e,a),l=Et(e,a),Re("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=D({},a,{value:void 0}),Re("invalid",e);break;case"textarea":ys(e,a),l=qo(e,a),Re("invalid",e);break;default:l=a}Ko(r,l),h=l;for(i in h)if(h.hasOwnProperty(i)){var x=h[i];i==="style"?Ns(e,x):i==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ks(e,x)):i==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&Tr(e,x):typeof x=="number"&&Tr(e,""+x):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(d.hasOwnProperty(i)?x!=null&&i==="onScroll"&&Re("scroll",e):x!=null&&X(e,i,x,u))}switch(r){case"input":_e(e),xs(e,a,!1);break;case"textarea":_e(e),ws(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Gn(e,!!a.multiple,i,!1):a.defaultValue!=null&&Gn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(r=_n(na.current),_n(Ut.current),Ka(t)){if(a=t.stateNode,r=t.memoizedProps,a[Ht]=t,(i=a.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:Ua(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ua(a.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Ht]=t,t.stateNode=a}return tt(t),null;case 13:if(Oe(Fe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jc(),sr(),t.flags|=98560,i=!1;else if(i=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Ht]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),i=!1}else Dt!==null&&(Ci(Dt),Dt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Ye===0&&(Ye=3):Ri())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return dr(),gi(e,t),e===null&&Qr(t.stateNode.containerInfo),tt(t),null;case 10:return $l(t.type._context),tt(t),null;case 17:return ut(t.type)&&Ya(),tt(t),null;case 19:if(Oe(Fe),i=t.memoizedState,i===null)return tt(t),null;if(a=(t.flags&128)!==0,u=i.rendering,u===null)if(a)ia(i,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=no(e),u!==null){for(t.flags|=128,ia(i,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)i=r,e=a,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Te(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>gr&&(t.flags|=128,a=!0,ia(i,!1),t.lanes=4194304)}else{if(!a)if(e=no(u),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Pe)return tt(t),null}else 2*je()-i.renderingStartTime>gr&&r!==1073741824&&(t.flags|=128,a=!0,ia(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(r=i.last,r!==null?r.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,r=Fe.current,Te(Fe,a?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return Ti(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(yt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Zm(e,t){switch(_l(t),t.tag){case 1:return ut(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Oe(ct),Oe(Je),Xl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(Oe(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Fe),null;case 4:return dr(),null;case 10:return $l(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var po=!1,nt=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,Z=null;function hr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Me(e,t,a)}else r.current=null}function vi(e,t,r){try{r()}catch(a){Me(e,t,a)}}var Mu=!1;function eh(e,t){if(Tl=Oa,e=fc(),wl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var u=0,h=-1,x=-1,C=0,I=0,_=e,F=null;t:for(;;){for(var Q;_!==r||l!==0&&_.nodeType!==3||(h=u+l),_!==i||a!==0&&_.nodeType!==3||(x=u+a),_.nodeType===3&&(u+=_.nodeValue.length),(Q=_.firstChild)!==null;)F=_,_=Q;for(;;){if(_===e)break t;if(F===r&&++C===l&&(h=u),F===i&&++I===a&&(x=u),(Q=_.nextSibling)!==null)break;_=F,F=_.parentNode}_=Q}r=h===-1||x===-1?null:{start:h,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rl={focusedElem:e,selectionRange:r},Oa=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,Be=ee.memoizedState,N=t.stateNode,E=N.getSnapshotBeforeUpdate(t.elementType===t.type?re:Ft(t.type,re),Be);N.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch($){Me(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return ee=Mu,Mu=!1,ee}function sa(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&vi(t,r,i)}l=l.next}while(l!==a)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function xi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Xr],delete t[Fl],delete t[Lm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yi(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Va));else if(a!==4&&(e=e.child,e!==null))for(yi(e,t,r),e=e.sibling;e!==null;)yi(e,t,r),e=e.sibling}function Ei(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ei(e,t,r),e=e.sibling;e!==null;)Ei(e,t,r),e=e.sibling}var Ke=null,It=!1;function wn(e,t,r){for(r=r.child;r!==null;)Hu(e,t,r),r=r.sibling}function Hu(e,t,r){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Na,r)}catch{}switch(r.tag){case 5:nt||hr(r,t);case 6:var a=Ke,l=It;Ke=null,wn(e,t,r),Ke=a,It=l,Ke!==null&&(It?(e=Ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ke.removeChild(r.stateNode));break;case 18:Ke!==null&&(It?(e=Ke,r=r.stateNode,e.nodeType===8?Dl(e.parentNode,r):e.nodeType===1&&Dl(e,r),Br(e)):Dl(Ke,r.stateNode));break;case 4:a=Ke,l=It,Ke=r.stateNode.containerInfo,It=!0,wn(e,t,r),Ke=a,It=l;break;case 0:case 11:case 14:case 15:if(!nt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&vi(r,t,u),l=l.next}while(l!==a)}wn(e,t,r);break;case 1:if(!nt&&(hr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(h){Me(r,t,h)}wn(e,t,r);break;case 21:wn(e,t,r);break;case 22:r.mode&1?(nt=(a=nt)||r.memoizedState!==null,wn(e,t,r),nt=a):wn(e,t,r);break;default:wn(e,t,r)}}function Uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jm),t.forEach(function(a){var l=ch.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var i=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:Ke=h.stateNode,It=!1;break e;case 3:Ke=h.stateNode.containerInfo,It=!0;break e;case 4:Ke=h.stateNode.containerInfo,It=!0;break e}h=h.return}if(Ke===null)throw Error(c(160));Hu(i,u,l),Ke=null,It=!1;var x=l.alternate;x!==null&&(x.return=null),l.return=null}catch(C){Me(l,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),$t(e),a&4){try{sa(3,e,e.return),mo(3,e)}catch(re){Me(e,e.return,re)}try{sa(5,e,e.return)}catch(re){Me(e,e.return,re)}}break;case 1:Lt(t,e),$t(e),a&512&&r!==null&&hr(r,r.return);break;case 5:if(Lt(t,e),$t(e),a&512&&r!==null&&hr(r,r.return),e.flags&32){var l=e.stateNode;try{Tr(l,"")}catch(re){Me(e,e.return,re)}}if(a&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=r!==null?r.memoizedProps:i,h=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&vs(l,i),Xo(h,u);var C=Xo(h,i);for(u=0;u<x.length;u+=2){var I=x[u],_=x[u+1];I==="style"?Ns(l,_):I==="dangerouslySetInnerHTML"?ks(l,_):I==="children"?Tr(l,_):X(l,I,_,C)}switch(h){case"input":Wo(l,i);break;case"textarea":Es(l,i);break;case"select":var F=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var Q=i.value;Q!=null?Gn(l,!!i.multiple,Q,!1):F!==!!i.multiple&&(i.defaultValue!=null?Gn(l,!!i.multiple,i.defaultValue,!0):Gn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Xr]=i}catch(re){Me(e,e.return,re)}}break;case 6:if(Lt(t,e),$t(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(re){Me(e,e.return,re)}}break;case 3:if(Lt(t,e),$t(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(re){Me(e,e.return,re)}break;case 4:Lt(t,e),$t(e);break;case 13:Lt(t,e),$t(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ki=je())),a&4&&Uu(e);break;case 22:if(I=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(C=nt)||I,Lt(t,e),nt=C):Lt(t,e),$t(e),a&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!I&&(e.mode&1)!==0)for(Z=e,I=e.child;I!==null;){for(_=Z=I;Z!==null;){switch(F=Z,Q=F.child,F.tag){case 0:case 11:case 14:case 15:sa(4,F,F.return);break;case 1:hr(F,F.return);var ee=F.stateNode;if(typeof ee.componentWillUnmount=="function"){a=F,r=F.return;try{t=a,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(re){Me(a,r,re)}}break;case 5:hr(F,F.return);break;case 22:if(F.memoizedState!==null){Wu(_);continue}}Q!==null?(Q.return=F,Z=Q):Wu(_)}I=I.sibling}e:for(I=null,_=e;;){if(_.tag===5){if(I===null){I=_;try{l=_.stateNode,C?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=_.stateNode,x=_.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,h.style.display=zs("display",u))}catch(re){Me(e,e.return,re)}}}else if(_.tag===6){if(I===null)try{_.stateNode.nodeValue=C?"":_.memoizedProps}catch(re){Me(e,e.return,re)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;I===_&&(I=null),_=_.return}I===_&&(I=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Lt(t,e),$t(e),a&4&&Uu(e);break;case 21:break;default:Lt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ju(r)){var a=r;break e}r=r.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Tr(l,""),a.flags&=-33);var i=Bu(e);Ei(e,i,l);break;case 3:case 4:var u=a.stateNode.containerInfo,h=Bu(e);yi(e,h,u);break;default:throw Error(c(161))}}catch(x){Me(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e,t,r){Z=e,$u(e)}function $u(e,t,r){for(var a=(e.mode&1)!==0;Z!==null;){var l=Z,i=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||po;if(!u){var h=l.alternate,x=h!==null&&h.memoizedState!==null||nt;h=po;var C=nt;if(po=u,(nt=x)&&!C)for(Z=l;Z!==null;)u=Z,x=u.child,u.tag===22&&u.memoizedState!==null?Gu(l):x!==null?(x.return=u,Z=x):Gu(l);for(;i!==null;)Z=i,$u(i),i=i.sibling;Z=l,po=h,nt=C}Yu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,Z=i):Yu(e)}}function Yu(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||mo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!nt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wc(t,i,a);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,u,r)}break;case 5:var h=t.stateNode;if(r===null&&t.flags&4){r=h;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var I=C.memoizedState;if(I!==null){var _=I.dehydrated;_!==null&&Br(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}nt||t.flags&512&&xi(t)}catch(F){Me(t,t.return,F)}}if(t===e){Z=null;break}if(r=t.sibling,r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Wu(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Gu(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{mo(4,t)}catch(x){Me(t,r,x)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(x){Me(t,l,x)}}var i=t.return;try{xi(t)}catch(x){Me(t,i,x)}break;case 5:var u=t.return;try{xi(t)}catch(x){Me(t,u,x)}}}catch(x){Me(t,t.return,x)}if(t===e){Z=null;break}var h=t.sibling;if(h!==null){h.return=t.return,Z=h;break}Z=t.return}}var nh=Math.ceil,ho=W.ReactCurrentDispatcher,wi=W.ReactCurrentOwner,Nt=W.ReactCurrentBatchConfig,ze=0,Ge=null,Ue=null,Xe=0,yt=0,fr=gn(0),Ye=0,ca=null,Bn=0,fo=0,bi=0,ua=null,dt=null,ki=0,gr=1/0,nn=null,go=!1,zi=null,bn=null,vo=!1,kn=null,xo=0,pa=0,Ni=null,yo=-1,Eo=0;function at(){return(ze&6)!==0?je():yo!==-1?yo:yo=je()}function zn(e){return(e.mode&1)===0?1:(ze&2)!==0&&Xe!==0?Xe&-Xe:jm.transition!==null?(Eo===0&&(Eo=Bs()),Eo):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Qs(e.type)),e)}function Mt(e,t,r,a){if(50<pa)throw pa=0,Ni=null,Error(c(185));Ir(e,r,a),((ze&2)===0||e!==Ge)&&(e===Ge&&((ze&2)===0&&(fo|=r),Ye===4&&Nn(e,Xe)),mt(e,a),r===1&&ze===0&&(t.mode&1)===0&&(gr=je()+500,Ga&&xn()))}function mt(e,t){var r=e.callbackNode;jd(e,t);var a=Aa(e,e===Ge?Xe:0);if(a===0)r!==null&&Ms(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ms(r),t===1)e.tag===0?_m(Qu.bind(null,e)):Fc(Qu.bind(null,e)),Fm(function(){(ze&6)===0&&xn()}),r=null;else{switch(Hs(a)){case 1:r=al;break;case 4:r=_s;break;case 16:r=za;break;case 536870912:r=js;break;default:r=za}r=rp(r,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qu(e,t){if(yo=-1,Eo=0,(ze&6)!==0)throw Error(c(327));var r=e.callbackNode;if(vr()&&e.callbackNode!==r)return null;var a=Aa(e,e===Ge?Xe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=wo(e,a);else{t=a;var l=ze;ze|=2;var i=Xu();(Ge!==e||Xe!==t)&&(nn=null,gr=je()+500,Un(e,t));do try{oh();break}catch(h){Ku(e,h)}while(!0);Vl(),ho.current=i,ze=l,Ue!==null?t=0:(Ge=null,Xe=0,t=Ye)}if(t!==0){if(t===2&&(l=ol(e),l!==0&&(a=l,t=Si(e,l))),t===1)throw r=ca,Un(e,0),Nn(e,a),mt(e,je()),r;if(t===6)Nn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!rh(l)&&(t=wo(e,a),t===2&&(i=ol(e),i!==0&&(a=i,t=Si(e,i))),t===1))throw r=ca,Un(e,0),Nn(e,a),mt(e,je()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:Vn(e,dt,nn);break;case 3:if(Nn(e,a),(a&130023424)===a&&(t=ki+500-je(),10<t)){if(Aa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){at(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Pl(Vn.bind(null,e,dt,nn),t);break}Vn(e,dt,nn);break;case 4:if(Nn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var u=31-Ot(a);i=1<<u,u=t[u],u>l&&(l=u),a&=~i}if(a=l,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*nh(a/1960))-a,10<a){e.timeoutHandle=Pl(Vn.bind(null,e,dt,nn),a);break}Vn(e,dt,nn);break;case 5:Vn(e,dt,nn);break;default:throw Error(c(329))}}}return mt(e,je()),e.callbackNode===r?qu.bind(null,e):null}function Si(e,t){var r=ua;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=wo(e,t),e!==2&&(t=dt,dt=r,t!==null&&Ci(t)),e}function Ci(e){dt===null?dt=e:dt.push.apply(dt,e)}function rh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],i=l.getSnapshot;l=l.value;try{if(!Pt(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~bi,t&=~fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ot(t),a=1<<r;e[r]=-1,t&=~a}}function Qu(e){if((ze&6)!==0)throw Error(c(327));vr();var t=Aa(e,0);if((t&1)===0)return mt(e,je()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var a=ol(e);a!==0&&(t=a,r=Si(e,a))}if(r===1)throw r=ca,Un(e,0),Nn(e,t),mt(e,je()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,dt,nn),mt(e,je()),null}function Ai(e,t){var r=ze;ze|=1;try{return e(t)}finally{ze=r,ze===0&&(gr=je()+500,Ga&&xn())}}function Hn(e){kn!==null&&kn.tag===0&&(ze&6)===0&&vr();var t=ze;ze|=1;var r=Nt.transition,a=Ce;try{if(Nt.transition=null,Ce=1,e)return e()}finally{Ce=a,Nt.transition=r,ze=t,(ze&6)===0&&xn()}}function Ti(){yt=fr.current,Oe(fr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Dm(r)),Ue!==null)for(r=Ue.return;r!==null;){var a=r;switch(_l(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ya();break;case 3:dr(),Oe(ct),Oe(Je),Xl();break;case 5:Ql(a);break;case 4:dr();break;case 13:Oe(Fe);break;case 19:Oe(Fe);break;case 10:$l(a.type._context);break;case 22:case 23:Ti()}r=r.return}if(Ge=e,Ue=e=Sn(e.current,null),Xe=yt=t,Ye=0,ca=null,bi=fo=Bn=0,dt=ua=null,Mn!==null){for(t=0;t<Mn.length;t++)if(r=Mn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,i=r.pending;if(i!==null){var u=i.next;i.next=l,a.next=u}r.pending=a}Mn=null}return e}function Ku(e,t){do{var r=Ue;try{if(Vl(),ro.current=io,ao){for(var a=Ie.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ao=!1}if(jn=0,We=$e=Ie=null,ra=!1,aa=0,wi.current=null,r===null||r.return===null){Ye=1,ca=t,Ue=null;break}e:{var i=e,u=r.return,h=r,x=t;if(t=Xe,h.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,I=h,_=I.tag;if((I.mode&1)===0&&(_===0||_===11||_===15)){var F=I.alternate;F?(I.updateQueue=F.updateQueue,I.memoizedState=F.memoizedState,I.lanes=F.lanes):(I.updateQueue=null,I.memoizedState=null)}var Q=wu(u);if(Q!==null){Q.flags&=-257,bu(Q,u,h,i,t),Q.mode&1&&Eu(i,C,t),t=Q,x=C;var ee=t.updateQueue;if(ee===null){var re=new Set;re.add(x),t.updateQueue=re}else ee.add(x);break e}else{if((t&1)===0){Eu(i,C,t),Ri();break e}x=Error(c(426))}}else if(Pe&&h.mode&1){var Be=wu(u);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),bu(Be,u,h,i,t),Hl(mr(x,h));break e}}i=x=mr(x,h),Ye!==4&&(Ye=2),ua===null?ua=[i]:ua.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var N=xu(i,x,t);Yc(i,N);break e;case 1:h=x;var E=i.type,S=i.stateNode;if((i.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(bn===null||!bn.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var $=yu(i,h,t);Yc(i,$);break e}}i=i.return}while(i!==null)}Ju(r)}catch(ae){t=ae,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function Xu(){var e=ho.current;return ho.current=io,e===null?io:e}function Ri(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ge===null||(Bn&268435455)===0&&(fo&268435455)===0||Nn(Ge,Xe)}function wo(e,t){var r=ze;ze|=2;var a=Xu();(Ge!==e||Xe!==t)&&(nn=null,Un(e,t));do try{ah();break}catch(l){Ku(e,l)}while(!0);if(Vl(),ze=r,ho.current=a,Ue!==null)throw Error(c(261));return Ge=null,Xe=0,Ye}function ah(){for(;Ue!==null;)Zu(Ue)}function oh(){for(;Ue!==null&&!Rd();)Zu(Ue)}function Zu(e){var t=np(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?Ju(e):Ue=t,wi.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Xm(r,t,yt),r!==null){Ue=r;return}}else{if(r=Zm(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ye===0&&(Ye=5)}function Vn(e,t,r){var a=Ce,l=Nt.transition;try{Nt.transition=null,Ce=1,lh(e,t,r,a)}finally{Nt.transition=l,Ce=a}return null}function lh(e,t,r,a){do vr();while(kn!==null);if((ze&6)!==0)throw Error(c(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Bd(e,i),e===Ge&&(Ue=Ge=null,Xe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||vo||(vo=!0,rp(za,function(){return vr(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=Nt.transition,Nt.transition=null;var u=Ce;Ce=1;var h=ze;ze|=4,wi.current=null,eh(e,r),Vu(r,e),Sm(Rl),Oa=!!Tl,Rl=Tl=null,e.current=r,th(r),Od(),ze=h,Ce=u,Nt.transition=i}else e.current=r;if(vo&&(vo=!1,kn=e,xo=l),i=e.pendingLanes,i===0&&(bn=null),Fd(r.stateNode),mt(e,je()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(go)throw go=!1,e=zi,zi=null,e;return(xo&1)!==0&&e.tag!==0&&vr(),i=e.pendingLanes,(i&1)!==0?e===Ni?pa++:(pa=0,Ni=e):pa=0,xn(),null}function vr(){if(kn!==null){var e=Hs(xo),t=Nt.transition,r=Ce;try{if(Nt.transition=null,Ce=16>e?16:e,kn===null)var a=!1;else{if(e=kn,kn=null,xo=0,(ze&6)!==0)throw Error(c(331));var l=ze;for(ze|=4,Z=e.current;Z!==null;){var i=Z,u=i.child;if((Z.flags&16)!==0){var h=i.deletions;if(h!==null){for(var x=0;x<h.length;x++){var C=h[x];for(Z=C;Z!==null;){var I=Z;switch(I.tag){case 0:case 11:case 15:sa(8,I,i)}var _=I.child;if(_!==null)_.return=I,Z=_;else for(;Z!==null;){I=Z;var F=I.sibling,Q=I.return;if(_u(I),I===C){Z=null;break}if(F!==null){F.return=Q,Z=F;break}Z=Q}}}var ee=i.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var Be=re.sibling;re.sibling=null,re=Be}while(re!==null)}}Z=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,Z=u;else e:for(;Z!==null;){if(i=Z,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:sa(9,i,i.return)}var N=i.sibling;if(N!==null){N.return=i.return,Z=N;break e}Z=i.return}}var E=e.current;for(Z=E;Z!==null;){u=Z;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,Z=S;else e:for(u=E;Z!==null;){if(h=Z,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:mo(9,h)}}catch(ae){Me(h,h.return,ae)}if(h===u){Z=null;break e}var $=h.sibling;if($!==null){$.return=h.return,Z=$;break e}Z=h.return}}if(ze=l,xn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Na,e)}catch{}a=!0}return a}finally{Ce=r,Nt.transition=t}}return!1}function ep(e,t,r){t=mr(r,t),t=xu(e,t,1),e=En(e,t,1),t=at(),e!==null&&(Ir(e,1,t),mt(e,t))}function Me(e,t,r){if(e.tag===3)ep(e,e,r);else for(;t!==null;){if(t.tag===3){ep(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bn===null||!bn.has(a))){e=mr(r,e),e=yu(t,e,1),t=En(t,e,1),e=at(),t!==null&&(Ir(t,1,e),mt(t,e));break}}t=t.return}}function ih(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Xe&r)===r&&(Ye===4||Ye===3&&(Xe&130023424)===Xe&&500>je()-ki?Un(e,0):bi|=r),mt(e,t)}function tp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ca,Ca<<=1,(Ca&130023424)===0&&(Ca=4194304)));var r=at();e=Jt(e,t),e!==null&&(Ir(e,t,r),mt(e,r))}function sh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),tp(e,r)}function ch(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),tp(e,r)}var np;np=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)pt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return pt=!1,Km(e,t,r);pt=(e.flags&131072)!==0}else pt=!1,Pe&&(t.flags&1048576)!==0&&Ic(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;uo(e,t),e=t.pendingProps;var l=or(t,Je.current);pr(t,r),l=ei(null,t,a,e,l,r);var i=ti();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(a)?(i=!0,Wa(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Gl(t),l.updater=so,t.stateNode=l,l._reactInternals=t,ii(t,a,e,r),t=pi(null,t,a,!0,i,r)):(t.tag=0,Pe&&i&&Ml(t),rt(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=ph(a),e=Ft(a,e),l){case 0:t=ui(null,t,a,e,r);break e;case 1:t=Au(null,t,a,e,r);break e;case 11:t=ku(null,t,a,e,r);break e;case 14:t=zu(null,t,a,Ft(a.type,e),r);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),ui(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),Au(e,t,a,l,r);case 3:e:{if(Tu(t),e===null)throw Error(c(387));a=t.pendingProps,i=t.memoizedState,l=i.element,$c(e,t),to(t,a,null,r);var u=t.memoizedState;if(a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=mr(Error(c(423)),t),t=Ru(e,t,a,r,l);break e}else if(a!==l){l=mr(Error(c(424)),t),t=Ru(e,t,a,r,l);break e}else for(xt=fn(t.stateNode.containerInfo.firstChild),vt=t,Pe=!0,Dt=null,r=Uc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),a===l){t=tn(e,t,r);break e}rt(e,t,a,r)}t=t.child}return t;case 5:return Gc(t),e===null&&Bl(t),a=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,Ol(a,l)?u=null:i!==null&&Ol(a,i)&&(t.flags|=32),Cu(e,t),rt(e,t,u,r),t.child;case 6:return e===null&&Bl(t),null;case 13:return Ou(e,t,r);case 4:return ql(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=cr(t,null,a,r):rt(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),ku(e,t,a,l,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,Te(Za,a._currentValue),a._currentValue=u,i!==null)if(Pt(i.value,u)){if(i.children===l.children&&!ct.current){t=tn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var h=i.dependencies;if(h!==null){u=i.child;for(var x=h.firstContext;x!==null;){if(x.context===a){if(i.tag===1){x=en(-1,r&-r),x.tag=2;var C=i.updateQueue;if(C!==null){C=C.shared;var I=C.pending;I===null?x.next=x:(x.next=I.next,I.next=x),C.pending=x}}i.lanes|=r,x=i.alternate,x!==null&&(x.lanes|=r),Yl(i.return,r,t),h.lanes|=r;break}x=x.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(c(341));u.lanes|=r,h=u.alternate,h!==null&&(h.lanes|=r),Yl(u,r,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}rt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,pr(t,r),l=kt(l),a=a(l),t.flags|=1,rt(e,t,a,r),t.child;case 14:return a=t.type,l=Ft(a,t.pendingProps),l=Ft(a.type,l),zu(e,t,a,l,r);case 15:return Nu(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),uo(e,t),t.tag=1,ut(a)?(e=!0,Wa(t)):e=!1,pr(t,r),gu(t,a,l),ii(t,a,l,r),pi(null,t,a,!0,e,r);case 19:return Du(e,t,r);case 22:return Su(e,t,r)}throw Error(c(156,t.tag))};function rp(e,t){return Ls(e,t)}function uh(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,r,a){return new uh(e,t,r,a)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ph(e){if(typeof e=="function")return Oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===B)return 14}return 2}function Sn(e,t){var r=e.alternate;return r===null?(r=St(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bo(e,t,r,a,l,i){var u=2;if(a=e,typeof e=="function")Oi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case xe:return $n(r.children,l,i,t);case J:u=8,l|=8;break;case he:return e=St(12,r,t,l|2),e.elementType=he,e.lanes=i,e;case we:return e=St(13,r,t,l),e.elementType=we,e.lanes=i,e;case Ae:return e=St(19,r,t,l),e.elementType=Ae,e.lanes=i,e;case q:return ko(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:u=10;break e;case se:u=9;break e;case Se:u=11;break e;case B:u=14;break e;case ve:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=St(u,r,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function $n(e,t,r,a){return e=St(7,e,a,t),e.lanes=r,e}function ko(e,t,r,a){return e=St(22,e,a,t),e.elementType=q,e.lanes=r,e.stateNode={isHidden:!1},e}function Pi(e,t,r){return e=St(6,e,null,t),e.lanes=r,e}function Di(e,t,r){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dh(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fi(e,t,r,a,l,i,u,h,x){return e=new dh(e,t,r,h,x),t===1?(t=1,i===!0&&(t|=8)):t=0,i=St(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(i),e}function mh(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function ap(e){if(!e)return vn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(ut(r))return Pc(e,r,t)}return t}function op(e,t,r,a,l,i,u,h,x){return e=Fi(r,a,!0,e,l,i,u,h,x),e.context=ap(null),r=e.current,a=at(),l=zn(r),i=en(a,l),i.callback=t??null,En(r,i,l),e.current.lanes=l,Ir(e,l,a),mt(e,a),e}function zo(e,t,r,a){var l=t.current,i=at(),u=zn(l);return r=ap(r),t.context===null?t.context=r:t.pendingContext=r,t=en(i,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=En(l,t,u),e!==null&&(Mt(e,l,u,i),eo(e,l,u)),u}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ii(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function hh(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}So.prototype.render=Li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));zo(e,t,null,null)},So.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){zo(null,e,null,null)}),t[Qt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=$s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<dn.length&&t!==0&&t<dn[r].priority;r++);dn.splice(r,0,e),r===0&&Gs(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function fh(e,t,r,a,l){if(l){if(typeof a=="function"){var i=a;a=function(){var C=No(u);i.call(C)}}var u=op(t,a,e,0,null,!1,!1,"",sp);return e._reactRootContainer=u,e[Qt]=u.current,Qr(e.nodeType===8?e.parentNode:e),Hn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var h=a;a=function(){var C=No(x);h.call(C)}}var x=Fi(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=x,e[Qt]=x.current,Qr(e.nodeType===8?e.parentNode:e),Hn(function(){zo(t,x,r,a)}),x}function Ao(e,t,r,a,l){var i=r._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var h=l;l=function(){var x=No(u);h.call(x)}}zo(t,u,e,l)}else u=fh(r,t,e,l,a);return No(u)}Us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(il(t,r|1),mt(t,je()),(ze&6)===0&&(gr=je()+500,xn()))}break;case 13:Hn(function(){var a=Jt(e,1);if(a!==null){var l=at();Mt(a,e,1,l)}}),Ii(e,1)}},sl=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var r=at();Mt(t,e,134217728,r)}Ii(e,134217728)}},Vs=function(e){if(e.tag===13){var t=zn(e),r=Jt(e,t);if(r!==null){var a=at();Mt(r,e,t,a)}Ii(e,t)}},$s=function(){return Ce},Ys=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}},el=function(e,t,r){switch(t){case"input":if(Wo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=$a(a);if(!l)throw Error(c(90));G(a),Wo(a,l)}}}break;case"textarea":Es(e,r);break;case"select":t=r.value,t!=null&&Gn(e,!!r.multiple,t,!1)}},Ts=Ai,Rs=Hn;var gh={usingClientEntryPoint:!1,Events:[Zr,rr,$a,Cs,As,Ai]},da={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vh={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Na=To.inject(vh),Bt=To}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gh,ht.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(c(200));return mh(e,t,null,r)},ht.createRoot=function(e,t){if(!Mi(e))throw Error(c(299));var r=!1,a="",l=ip;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fi(e,1,!1,null,null,r,!1,a,l),e[Qt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Li(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return Hn(e)},ht.hydrate=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!0,r)},ht.hydrateRoot=function(e,t,r){if(!Mi(e))throw Error(c(405));var a=r!=null&&r.hydratedSources||null,l=!1,i="",u=ip;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=op(t,null,e,1,r??null,l,!1,i,u),e[Qt]=t.current,Qr(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new So(t)},ht.render=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!1,r)},ht.unmountComponentAtNode=function(e){if(!Co(e))throw Error(c(40));return e._reactRootContainer?(Hn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1},ht.unstable_batchedUpdates=Ai,ht.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Co(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,t,r,!1,a)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var hp;function Wp(){if(hp)return ji.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),ji.exports=Sh(),ji.exports}var fp;function Ch(){if(fp)return Ro;fp=1;var o=Wp();return Ro.createRoot=o.createRoot,Ro.hydrateRoot=o.hydrateRoot,Ro}var Ah=Ch();Wp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},xa.apply(null,arguments)}var Tn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Tn||(Tn={}));const gp="popstate";function Th(o){o===void 0&&(o={});function s(p,d){let{pathname:m,search:f,hash:v}=p.location;return Zi("",{pathname:m,search:f,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(p,d){return typeof d=="string"?d:Lo(d)}return Oh(s,c,null,o)}function Le(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Gp(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Rh(){return Math.random().toString(36).substr(2,8)}function vp(o,s){return{usr:o.state,key:o.key,idx:s}}function Zi(o,s,c,p){return c===void 0&&(c=null),xa({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?Nr(s):s,{state:c,key:s&&s.key||p||Rh()})}function Lo(o){let{pathname:s="/",search:c="",hash:p=""}=o;return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),p&&p!=="#"&&(s+=p.charAt(0)==="#"?p:"#"+p),s}function Nr(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substr(c),o=o.substr(0,c));let p=o.indexOf("?");p>=0&&(s.search=o.substr(p),o=o.substr(0,p)),o&&(s.pathname=o)}return s}function Oh(o,s,c,p){p===void 0&&(p={});let{window:d=document.defaultView,v5Compat:m=!1}=p,f=d.history,v=Tn.Pop,g=null,w=k();w==null&&(w=0,f.replaceState(xa({},f.state,{idx:w}),""));function k(){return(f.state||{idx:null}).idx}function z(){v=Tn.Pop;let A=k(),V=A==null?null:A-w;w=A,g&&g({action:v,location:T.location,delta:V})}function R(A,V){v=Tn.Push;let Y=Zi(T.location,A,V);w=k()+1;let X=vp(Y,w),W=T.createHref(Y);try{f.pushState(X,"",W)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;d.location.assign(W)}m&&g&&g({action:v,location:T.location,delta:1})}function L(A,V){v=Tn.Replace;let Y=Zi(T.location,A,V);w=k();let X=vp(Y,w),W=T.createHref(Y);f.replaceState(X,"",W),m&&g&&g({action:v,location:T.location,delta:0})}function j(A){let V=d.location.origin!=="null"?d.location.origin:d.location.href,Y=typeof A=="string"?A:Lo(A);return Y=Y.replace(/ $/,"%20"),Le(V,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,V)}let T={get action(){return v},get location(){return o(d,f)},listen(A){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(gp,z),g=A,()=>{d.removeEventListener(gp,z),g=null}},createHref(A){return s(d,A)},createURL:j,encodeLocation(A){let V=j(A);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:R,replace:L,go(A){return f.go(A)}};return T}var xp;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(xp||(xp={}));function Ph(o,s,c){return c===void 0&&(c="/"),Dh(o,s,c)}function Dh(o,s,c,p){let d=typeof s=="string"?Nr(s):s,m=kr(d.pathname||"/",c);if(m==null)return null;let f=qp(o);Fh(f);let v=null,g=Yh(m);for(let w=0;v==null&&w<f.length;++w)v=Vh(f[w],g);return v}function qp(o,s,c,p){s===void 0&&(s=[]),c===void 0&&(c=[]),p===void 0&&(p="");let d=(m,f,v)=>{let g={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};g.relativePath.startsWith("/")&&(Le(g.relativePath.startsWith(p),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(p.length));let w=On([p,g.relativePath]),k=c.concat(g);m.children&&m.children.length>0&&(Le(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),qp(m.children,s,k,w)),!(m.path==null&&!m.index)&&s.push({path:w,score:Hh(w,m.index),routesMeta:k})};return o.forEach((m,f)=>{var v;if(m.path===""||!((v=m.path)!=null&&v.includes("?")))d(m,f);else for(let g of Qp(m.path))d(m,f,g)}),s}function Qp(o){let s=o.split("/");if(s.length===0)return[];let[c,...p]=s,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(p.length===0)return d?[m,""]:[m];let f=Qp(p.join("/")),v=[];return v.push(...f.map(g=>g===""?m:[m,g].join("/"))),d&&v.push(...f),v.map(g=>o.startsWith("/")&&g===""?"/":g)}function Fh(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:Uh(s.routesMeta.map(p=>p.childrenIndex),c.routesMeta.map(p=>p.childrenIndex)))}const Ih=/^:[\w-]+$/,Lh=3,Mh=2,_h=1,jh=10,Bh=-2,yp=o=>o==="*";function Hh(o,s){let c=o.split("/"),p=c.length;return c.some(yp)&&(p+=Bh),s&&(p+=Mh),c.filter(d=>!yp(d)).reduce((d,m)=>d+(Ih.test(m)?Lh:m===""?_h:jh),p)}function Uh(o,s){return o.length===s.length&&o.slice(0,-1).every((p,d)=>p===s[d])?o[o.length-1]-s[s.length-1]:0}function Vh(o,s,c){let{routesMeta:p}=o,d={},m="/",f=[];for(let v=0;v<p.length;++v){let g=p[v],w=v===p.length-1,k=m==="/"?s:s.slice(m.length)||"/",z=Ji({path:g.relativePath,caseSensitive:g.caseSensitive,end:w},k),R=g.route;if(!z)return null;Object.assign(d,z.params),f.push({params:d,pathname:On([m,z.pathname]),pathnameBase:qh(On([m,z.pathnameBase])),route:R}),z.pathnameBase!=="/"&&(m=On([m,z.pathnameBase]))}return f}function Ji(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,p]=$h(o.path,o.caseSensitive,o.end),d=s.match(c);if(!d)return null;let m=d[0],f=m.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:p.reduce((w,k,z)=>{let{paramName:R,isOptional:L}=k;if(R==="*"){let T=v[z]||"";f=m.slice(0,m.length-T.length).replace(/(.)\/+$/,"$1")}const j=v[z];return L&&!j?w[R]=void 0:w[R]=(j||"").replace(/%2F/g,"/"),w},{}),pathname:m,pathnameBase:f,pattern:o}}function $h(o,s,c){s===void 0&&(s=!1),c===void 0&&(c=!0),Gp(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let p=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,v,g)=>(p.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(p.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),p]}function Yh(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Gp(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function kr(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,p=o.charAt(c);return p&&p!=="/"?null:o.slice(c)||"/"}function Wh(o,s){s===void 0&&(s="/");let{pathname:c,search:p="",hash:d=""}=typeof o=="string"?Nr(o):o,m;return c?(c=Kp(c),c.startsWith("/")?m=Ep(c.substring(1),"/"):m=Ep(c,s)):m=s,{pathname:m,search:Qh(p),hash:Kh(d)}}function Ep(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Ui(o,s,c,p){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gh(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ps(o,s){let c=Gh(o);return s?c.map((p,d)=>d===c.length-1?p.pathname:p.pathnameBase):c.map(p=>p.pathnameBase)}function ds(o,s,c,p){p===void 0&&(p=!1);let d;typeof o=="string"?d=Nr(o):(d=xa({},o),Le(!d.pathname||!d.pathname.includes("?"),Ui("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),Ui("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),Ui("#","search","hash",d)));let m=o===""||d.pathname==="",f=m?"/":d.pathname,v;if(f==null)v=c;else{let z=s.length-1;if(!p&&f.startsWith("..")){let R=f.split("/");for(;R[0]==="..";)R.shift(),z-=1;d.pathname=R.join("/")}v=z>=0?s[z]:"/"}let g=Wh(d,v),w=f&&f!=="/"&&f.endsWith("/"),k=(m||f===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(w||k)&&(g.pathname+="/"),g}const Kp=o=>o.replace(/\/\/+/g,"/"),On=o=>Kp(o.join("/")),qh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Qh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Kh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Xh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Xp=["post","put","patch","delete"];new Set(Xp);const Zh=["get",...Xp];new Set(Zh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},ya.apply(null,arguments)}const Ho=y.createContext(null),Zp=y.createContext(null),on=y.createContext(null),Uo=y.createContext(null),Gt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Jp=y.createContext(null);function Jh(o,s){let{relative:c}=s===void 0?{}:s;Sr()||Le(!1);let{basename:p,navigator:d}=y.useContext(on),{hash:m,pathname:f,search:v}=Vo(o,{relative:c}),g=f;return p!=="/"&&(g=f==="/"?p:On([p,f])),d.createHref({pathname:g,search:v,hash:m})}function Sr(){return y.useContext(Uo)!=null}function qt(){return Sr()||Le(!1),y.useContext(Uo).location}function ed(o){y.useContext(on).static||y.useLayoutEffect(o)}function ln(){let{isDataRoute:o}=y.useContext(Gt);return o?ff():ef()}function ef(){Sr()||Le(!1);let o=y.useContext(Ho),{basename:s,future:c,navigator:p}=y.useContext(on),{matches:d}=y.useContext(Gt),{pathname:m}=qt(),f=JSON.stringify(ps(d,c.v7_relativeSplatPath)),v=y.useRef(!1);return ed(()=>{v.current=!0}),y.useCallback(function(w,k){if(k===void 0&&(k={}),!v.current)return;if(typeof w=="number"){p.go(w);return}let z=ds(w,JSON.parse(f),m,k.relative==="path");o==null&&s!=="/"&&(z.pathname=z.pathname==="/"?s:On([s,z.pathname])),(k.replace?p.replace:p.push)(z,k.state,k)},[s,p,f,m,o])}const tf=y.createContext(null);function nf(o){let s=y.useContext(Gt).outlet;return s&&y.createElement(tf.Provider,{value:o},s)}function td(){let{matches:o}=y.useContext(Gt),s=o[o.length-1];return s?s.params:{}}function Vo(o,s){let{relative:c}=s===void 0?{}:s,{future:p}=y.useContext(on),{matches:d}=y.useContext(Gt),{pathname:m}=qt(),f=JSON.stringify(ps(d,p.v7_relativeSplatPath));return y.useMemo(()=>ds(o,JSON.parse(f),m,c==="path"),[o,f,m,c])}function rf(o,s){return af(o,s)}function af(o,s,c,p){Sr()||Le(!1);let{navigator:d}=y.useContext(on),{matches:m}=y.useContext(Gt),f=m[m.length-1],v=f?f.params:{};f&&f.pathname;let g=f?f.pathnameBase:"/";f&&f.route;let w=qt(),k;if(s){var z;let A=typeof s=="string"?Nr(s):s;g==="/"||(z=A.pathname)!=null&&z.startsWith(g)||Le(!1),k=A}else k=w;let R=k.pathname||"/",L=R;if(g!=="/"){let A=g.replace(/^\//,"").split("/");L="/"+R.replace(/^\//,"").split("/").slice(A.length).join("/")}let j=Ph(o,{pathname:L}),T=uf(j&&j.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:On([g,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:On([g,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,c,p);return s&&T?y.createElement(Uo.Provider,{value:{location:ya({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:Tn.Pop}},T):T}function of(){let o=hf(),s=Xh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),c?y.createElement("pre",{style:d},c):null,null)}const lf=y.createElement(of,null);class sf extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){console.error("React Router caught the following error during render",s,c)}render(){return this.state.error!==void 0?y.createElement(Gt.Provider,{value:this.props.routeContext},y.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cf(o){let{routeContext:s,match:c,children:p}=o,d=y.useContext(Ho);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(Gt.Provider,{value:s},p)}function uf(o,s,c,p){var d;if(s===void 0&&(s=[]),c===void 0&&(c=null),p===void 0&&(p=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=p)!=null&&m.v7_partialHydration&&s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let f=o,v=(d=c)==null?void 0:d.errors;if(v!=null){let k=f.findIndex(z=>z.route.id&&(v==null?void 0:v[z.route.id])!==void 0);k>=0||Le(!1),f=f.slice(0,Math.min(f.length,k+1))}let g=!1,w=-1;if(c&&p&&p.v7_partialHydration)for(let k=0;k<f.length;k++){let z=f[k];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(w=k),z.route.id){let{loaderData:R,errors:L}=c,j=z.route.loader&&R[z.route.id]===void 0&&(!L||L[z.route.id]===void 0);if(z.route.lazy||j){g=!0,w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}return f.reduceRight((k,z,R)=>{let L,j=!1,T=null,A=null;c&&(L=v&&z.route.id?v[z.route.id]:void 0,T=z.route.errorElement||lf,g&&(w<0&&R===0?(gf("route-fallback"),j=!0,A=null):w===R&&(j=!0,A=z.route.hydrateFallbackElement||null)));let V=s.concat(f.slice(0,R+1)),Y=()=>{let X;return L?X=T:j?X=A:z.route.Component?X=y.createElement(z.route.Component,null):z.route.element?X=z.route.element:X=k,y.createElement(cf,{match:z,routeContext:{outlet:k,matches:V,isDataRoute:c!=null},children:X})};return c&&(z.route.ErrorBoundary||z.route.errorElement||R===0)?y.createElement(sf,{location:c.location,revalidation:c.revalidation,component:T,error:L,children:Y(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):Y()},null)}var nd=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(nd||{}),rd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(rd||{});function pf(o){let s=y.useContext(Ho);return s||Le(!1),s}function df(o){let s=y.useContext(Zp);return s||Le(!1),s}function mf(o){let s=y.useContext(Gt);return s||Le(!1),s}function ad(o){let s=mf(),c=s.matches[s.matches.length-1];return c.route.id||Le(!1),c.route.id}function hf(){var o;let s=y.useContext(Jp),c=df(),p=ad();return s!==void 0?s:(o=c.errors)==null?void 0:o[p]}function ff(){let{router:o}=pf(nd.UseNavigateStable),s=ad(rd.UseNavigateStable),c=y.useRef(!1);return ed(()=>{c.current=!0}),y.useCallback(function(d,m){m===void 0&&(m={}),c.current&&(typeof d=="number"?o.navigate(d):o.navigate(d,ya({fromRouteId:s},m)))},[o,s])}const wp={};function gf(o,s,c){wp[o]||(wp[o]=!0)}function vf(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xf(o){let{to:s,replace:c,state:p,relative:d}=o;Sr()||Le(!1);let{future:m,static:f}=y.useContext(on),{matches:v}=y.useContext(Gt),{pathname:g}=qt(),w=ln(),k=ds(s,ps(v,m.v7_relativeSplatPath),g,d==="path"),z=JSON.stringify(k);return y.useEffect(()=>w(JSON.parse(z),{replace:c,state:p,relative:d}),[w,z,d,c,p]),null}function yf(o){return nf(o.context)}function Qe(o){Le(!1)}function Ef(o){let{basename:s="/",children:c=null,location:p,navigationType:d=Tn.Pop,navigator:m,static:f=!1,future:v}=o;Sr()&&Le(!1);let g=s.replace(/^\/*/,"/"),w=y.useMemo(()=>({basename:g,navigator:m,static:f,future:ya({v7_relativeSplatPath:!1},v)}),[g,v,m,f]);typeof p=="string"&&(p=Nr(p));let{pathname:k="/",search:z="",hash:R="",state:L=null,key:j="default"}=p,T=y.useMemo(()=>{let A=kr(k,g);return A==null?null:{location:{pathname:A,search:z,hash:R,state:L,key:j},navigationType:d}},[g,k,z,R,L,j,d]);return T==null?null:y.createElement(on.Provider,{value:w},y.createElement(Uo.Provider,{children:c,value:T}))}function wf(o){let{children:s,location:c}=o;return rf(es(s),c)}new Promise(()=>{});function es(o,s){s===void 0&&(s=[]);let c=[];return y.Children.forEach(o,(p,d)=>{if(!y.isValidElement(p))return;let m=[...s,d];if(p.type===y.Fragment){c.push.apply(c,es(p.props.children,m));return}p.type!==Qe&&Le(!1),!p.props.index||!p.props.children||Le(!1);let f={id:p.props.id||m.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(f.children=es(p.props.children,m)),c.push(f)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},Mo.apply(null,arguments)}function od(o,s){if(o==null)return{};var c={};for(var p in o)if({}.hasOwnProperty.call(o,p)){if(s.indexOf(p)!==-1)continue;c[p]=o[p]}return c}function bf(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function kf(o,s){return o.button===0&&(!s||s==="_self")&&!bf(o)}function ts(o){return o===void 0&&(o=""),new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,c)=>{let p=o[c];return s.concat(Array.isArray(p)?p.map(d=>[c,d]):[[c,p]])},[]))}function zf(o,s){let c=ts(o);return s&&s.forEach((p,d)=>{c.has(d)||s.getAll(d).forEach(m=>{c.append(d,m)})}),c}const Nf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Cf="6";try{window.__reactRouterVersion=Cf}catch{}const Af=y.createContext({isTransitioning:!1}),Tf="startTransition",bp=kh[Tf];function Rf(o){let{basename:s,children:c,future:p,window:d}=o,m=y.useRef();m.current==null&&(m.current=Th({window:d,v5Compat:!0}));let f=m.current,[v,g]=y.useState({action:f.action,location:f.location}),{v7_startTransition:w}=p||{},k=y.useCallback(z=>{w&&bp?bp(()=>g(z)):g(z)},[g,w]);return y.useLayoutEffect(()=>f.listen(k),[f,k]),y.useEffect(()=>vf(p),[p]),y.createElement(Ef,{basename:s,children:c,location:v.location,navigationType:v.action,navigator:f,future:p})}const Of=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=y.forwardRef(function(s,c){let{onClick:p,relative:d,reloadDocument:m,replace:f,state:v,target:g,to:w,preventScrollReset:k,viewTransition:z}=s,R=od(s,Nf),{basename:L}=y.useContext(on),j,T=!1;if(typeof w=="string"&&Pf.test(w)&&(j=w,Of))try{let X=new URL(window.location.href),W=w.startsWith("//")?new URL(X.protocol+w):new URL(w),oe=kr(W.pathname,L);W.origin===X.origin&&oe!=null?w=oe+W.search+W.hash:T=!0}catch{}let A=Jh(w,{relative:d}),V=Ff(w,{replace:f,state:v,target:g,preventScrollReset:k,relative:d,viewTransition:z});function Y(X){p&&p(X),X.defaultPrevented||V(X)}return y.createElement("a",Mo({},R,{href:j||A,onClick:T||m?p:Y,ref:c,target:g}))}),An=y.forwardRef(function(s,c){let{"aria-current":p="page",caseSensitive:d=!1,className:m="",end:f=!1,style:v,to:g,viewTransition:w,children:k}=s,z=od(s,Sf),R=Vo(g,{relative:z.relative}),L=qt(),j=y.useContext(Zp),{navigator:T,basename:A}=y.useContext(on),V=j!=null&&Lf(R)&&w===!0,Y=T.encodeLocation?T.encodeLocation(R).pathname:R.pathname,X=L.pathname,W=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;d||(X=X.toLowerCase(),W=W?W.toLowerCase():null,Y=Y.toLowerCase()),W&&A&&(W=kr(W,A)||W);const oe=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ie=X===Y||!f&&X.startsWith(Y)&&X.charAt(oe)==="/",xe=W!=null&&(W===Y||!f&&W.startsWith(Y)&&W.charAt(Y.length)==="/"),J={isActive:ie,isPending:xe,isTransitioning:V},he=ie?p:void 0,U;typeof m=="function"?U=m(J):U=[m,ie?"active":null,xe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let se=typeof v=="function"?v(J):v;return y.createElement(K,Mo({},z,{"aria-current":he,className:U,ref:c,style:se,to:g,viewTransition:w}),typeof k=="function"?k(J):k)});var ns;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(ns||(ns={}));var kp;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(kp||(kp={}));function Df(o){let s=y.useContext(Ho);return s||Le(!1),s}function Ff(o,s){let{target:c,replace:p,state:d,preventScrollReset:m,relative:f,viewTransition:v}=s===void 0?{}:s,g=ln(),w=qt(),k=Vo(o,{relative:f});return y.useCallback(z=>{if(kf(z,c)){z.preventDefault();let R=p!==void 0?p:Lo(w)===Lo(k);g(o,{replace:R,state:d,preventScrollReset:m,relative:f,viewTransition:v})}},[w,g,k,p,d,c,o,m,f,v])}function If(o){let s=y.useRef(ts(o)),c=y.useRef(!1),p=qt(),d=y.useMemo(()=>zf(p.search,c.current?null:s.current),[p.search]),m=ln(),f=y.useCallback((v,g)=>{const w=ts(typeof v=="function"?v(d):v);c.current=!0,m("?"+w,g)},[m,d]);return[d,f]}function Lf(o,s){s===void 0&&(s={});let c=y.useContext(Af);c==null&&Le(!1);let{basename:p}=Df(ns.useViewTransitionState),d=Vo(o,{relative:s.relative});if(!c.isTransitioning)return!1;let m=kr(c.currentLocation.pathname,p)||c.currentLocation.pathname,f=kr(c.nextLocation.pathname,p)||c.nextLocation.pathname;return Ji(d.pathname,f)!=null||Ji(d.pathname,m)!=null}var Vi,zp;function Mf(){if(zp)return Vi;zp=1;var o=typeof Element<"u",s=typeof Map=="function",c=typeof Set=="function",p=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var v,g,w;if(Array.isArray(m)){if(v=m.length,v!=f.length)return!1;for(g=v;g--!==0;)if(!d(m[g],f[g]))return!1;return!0}var k;if(s&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!f.has(g.value[0]))return!1;for(k=m.entries();!(g=k.next()).done;)if(!d(g.value[1],f.get(g.value[0])))return!1;return!0}if(c&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!f.has(g.value[0]))return!1;return!0}if(p&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(v=m.length,v!=f.length)return!1;for(g=v;g--!==0;)if(m[g]!==f[g])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(w=Object.keys(m),v=w.length,v!==Object.keys(f).length)return!1;for(g=v;g--!==0;)if(!Object.prototype.hasOwnProperty.call(f,w[g]))return!1;if(o&&m instanceof Element)return!1;for(g=v;g--!==0;)if(!((w[g]==="_owner"||w[g]==="__v"||w[g]==="__o")&&m.$$typeof)&&!d(m[w[g]],f[w[g]]))return!1;return!0}return m!==m&&f!==f}return Vi=function(f,v){try{return d(f,v)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},Vi}var _f=Mf();const jf=Bo(_f);var $i,Np;function Bf(){if(Np)return $i;Np=1;var o=function(s,c,p,d,m,f,v,g){if(!s){var w;if(c===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[p,d,m,f,v,g],z=0;w=new Error(c.replace(/%s/g,function(){return k[z++]})),w.name="Invariant Violation"}throw w.framesToPop=1,w}};return $i=o,$i}var Hf=Bf();const Sp=Bo(Hf);var Yi,Cp;function Uf(){return Cp||(Cp=1,Yi=function(s,c,p,d){var m=p?p.call(d,s,c):void 0;if(m!==void 0)return!!m;if(s===c)return!0;if(typeof s!="object"||!s||typeof c!="object"||!c)return!1;var f=Object.keys(s),v=Object.keys(c);if(f.length!==v.length)return!1;for(var g=Object.prototype.hasOwnProperty.bind(c),w=0;w<f.length;w++){var k=f[w];if(!g(k))return!1;var z=s[k],R=c[k];if(m=p?p.call(d,z,R,k):void 0,m===!1||m===void 0&&z!==R)return!1}return!0}),Yi}var Vf=Uf();const $f=Bo(Vf);var ld=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(ld||{}),Wi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ap=Object.values(ld),ms={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yf=Object.entries(ms).reduce((o,[s,c])=>(o[c]=s,o),{}),_t="data-rh",yr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Er=(o,s)=>{for(let c=o.length-1;c>=0;c-=1){const p=o[c];if(Object.prototype.hasOwnProperty.call(p,s))return p[s]}return null},Wf=o=>{let s=Er(o,"title");const c=Er(o,yr.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),c&&s)return c.replace(/%s/g,()=>s);const p=Er(o,yr.DEFAULT_TITLE);return s||p||void 0},Gf=o=>Er(o,yr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Gi=(o,s)=>s.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,p)=>({...c,...p}),{}),qf=(o,s)=>s.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,p)=>{if(!c.length){const d=Object.keys(p);for(let m=0;m<d.length;m+=1){const v=d[m].toLowerCase();if(o.indexOf(v)!==-1&&p[v])return c.concat(p)}}return c},[]),Qf=o=>console&&typeof console.warn=="function"&&console.warn(o),ma=(o,s,c)=>{const p={};return c.filter(d=>Array.isArray(d[o])?!0:(typeof d[o]<"u"&&Qf(`Helmet: ${o} should be of type "Array". Instead found type "${typeof d[o]}"`),!1)).map(d=>d[o]).reverse().reduce((d,m)=>{const f={};m.filter(g=>{let w;const k=Object.keys(g);for(let R=0;R<k.length;R+=1){const L=k[R],j=L.toLowerCase();s.indexOf(j)!==-1&&!(w==="rel"&&g[w].toLowerCase()==="canonical")&&!(j==="rel"&&g[j].toLowerCase()==="stylesheet")&&(w=j),s.indexOf(L)!==-1&&(L==="innerHTML"||L==="cssText"||L==="itemprop")&&(w=L)}if(!w||!g[w])return!1;const z=g[w].toLowerCase();return p[w]||(p[w]={}),f[w]||(f[w]={}),p[w][z]?!1:(f[w][z]=!0,!0)}).reverse().forEach(g=>d.push(g));const v=Object.keys(f);for(let g=0;g<v.length;g+=1){const w=v[g],k={...p[w],...f[w]};p[w]=k}return d},[]).reverse()},Kf=(o,s)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][s])return!0}return!1},Xf=o=>({baseTag:qf(["href"],o),bodyAttributes:Gi("bodyAttributes",o),defer:Er(o,yr.DEFER),encode:Er(o,yr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Gi("htmlAttributes",o),linkTags:ma("link",["rel","href"],o),metaTags:ma("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:ma("noscript",["innerHTML"],o),onChangeClientState:Gf(o),scriptTags:ma("script",["src","innerHTML"],o),styleTags:ma("style",["cssText"],o),title:Wf(o),titleAttributes:Gi("titleAttributes",o),prioritizeSeoTags:Kf(o,yr.PRIORITIZE_SEO_TAGS)}),id=o=>Array.isArray(o)?o.join(""):o,Zf=(o,s)=>{const c=Object.keys(o);for(let p=0;p<c.length;p+=1)if(s[c[p]]&&s[c[p]].includes(o[c[p]]))return!0;return!1},qi=(o,s)=>Array.isArray(o)?o.reduce((c,p)=>(Zf(p,s)?c.priority.push(p):c.default.push(p),c),{priority:[],default:[]}):{default:o,priority:[]},Tp=(o,s)=>({...o,[s]:void 0}),Jf=["noscript","script","style"],rs=(o,s=!0)=>s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),sd=o=>Object.keys(o).reduce((s,c)=>{const p=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return s?`${s} ${p}`:p},""),eg=(o,s,c,p)=>{const d=sd(c),m=id(s);return d?`<${o} ${_t}="true" ${d}>${rs(m,p)}</${o}>`:`<${o} ${_t}="true">${rs(m,p)}</${o}>`},tg=(o,s,c=!0)=>s.reduce((p,d)=>{const m=d,f=Object.keys(m).filter(w=>!(w==="innerHTML"||w==="cssText")).reduce((w,k)=>{const z=typeof m[k]>"u"?k:`${k}="${rs(m[k],c)}"`;return w?`${w} ${z}`:z},""),v=m.innerHTML||m.cssText||"",g=Jf.indexOf(o)===-1;return`${p}<${o} ${_t}="true" ${f}${g?"/>":`>${v}</${o}>`}`},""),cd=(o,s={})=>Object.keys(o).reduce((c,p)=>{const d=ms[p];return c[d||p]=o[p],c},s),ng=(o,s,c)=>{const p={key:s,[_t]:!0},d=cd(c,p);return[n.createElement("title",d,s)]},Io=(o,s)=>s.map((c,p)=>{const d={key:p,[_t]:!0};return Object.keys(c).forEach(m=>{const v=ms[m]||m;if(v==="innerHTML"||v==="cssText"){const g=c.innerHTML||c.cssText;d.dangerouslySetInnerHTML={__html:g}}else d[v]=c[m]}),n.createElement(o,d)}),At=(o,s,c=!0)=>{switch(o){case"title":return{toComponent:()=>ng(o,s.title,s.titleAttributes),toString:()=>eg(o,s.title,s.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>cd(s),toString:()=>sd(s)};default:return{toComponent:()=>Io(o,s),toString:()=>tg(o,s,c)}}},rg=({metaTags:o,linkTags:s,scriptTags:c,encode:p})=>{const d=qi(o,Wi.meta),m=qi(s,Wi.link),f=qi(c,Wi.script);return{priorityMethods:{toComponent:()=>[...Io("meta",d.priority),...Io("link",m.priority),...Io("script",f.priority)],toString:()=>`${At("meta",d.priority,p)} ${At("link",m.priority,p)} ${At("script",f.priority,p)}`},metaTags:d.default,linkTags:m.default,scriptTags:f.default}},ag=o=>{const{baseTag:s,bodyAttributes:c,encode:p=!0,htmlAttributes:d,noscriptTags:m,styleTags:f,title:v="",titleAttributes:g,prioritizeSeoTags:w}=o;let{linkTags:k,metaTags:z,scriptTags:R}=o,L={toComponent:()=>{},toString:()=>""};return w&&({priorityMethods:L,linkTags:k,metaTags:z,scriptTags:R}=rg(o)),{priority:L,base:At("base",s,p),bodyAttributes:At("bodyAttributes",c,p),htmlAttributes:At("htmlAttributes",d,p),link:At("link",k,p),meta:At("meta",z,p),noscript:At("noscript",m,p),script:At("script",R,p),style:At("style",f,p),title:At("title",{title:v,titleAttributes:g},p)}},as=ag,Oo=[],ud=!!(typeof window<"u"&&window.document&&window.document.createElement),os=class{constructor(o,s){rn(this,"instances",[]);rn(this,"canUseDOM",ud);rn(this,"context");rn(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?Oo:this.instances,add:o=>{(this.canUseDOM?Oo:this.instances).push(o)},remove:o=>{const s=(this.canUseDOM?Oo:this.instances).indexOf(o);(this.canUseDOM?Oo:this.instances).splice(s,1)}}});this.context=o,this.canUseDOM=s||!1,s||(o.helmet=as({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},og={},pd=n.createContext(og),Wn,dd=(Wn=class extends y.Component{constructor(c){super(c);rn(this,"helmetData");this.helmetData=new os(this.props.context||{},Wn.canUseDOM)}render(){return n.createElement(pd.Provider,{value:this.helmetData.value},this.props.children)}},rn(Wn,"canUseDOM",ud),Wn),xr=(o,s)=>{const c=document.head||document.querySelector("head"),p=c.querySelectorAll(`${o}[${_t}]`),d=[].slice.call(p),m=[];let f;return s&&s.length&&s.forEach(v=>{const g=document.createElement(o);for(const w in v)if(Object.prototype.hasOwnProperty.call(v,w))if(w==="innerHTML")g.innerHTML=v.innerHTML;else if(w==="cssText")g.styleSheet?g.styleSheet.cssText=v.cssText:g.appendChild(document.createTextNode(v.cssText));else{const k=w,z=typeof v[k]>"u"?"":v[k];g.setAttribute(w,z)}g.setAttribute(_t,"true"),d.some((w,k)=>(f=k,g.isEqualNode(w)))?d.splice(f,1):m.push(g)}),d.forEach(v=>{var g;return(g=v.parentNode)==null?void 0:g.removeChild(v)}),m.forEach(v=>c.appendChild(v)),{oldTags:d,newTags:m}},ls=(o,s)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const p=c.getAttribute(_t),d=p?p.split(","):[],m=[...d],f=Object.keys(s);for(const v of f){const g=s[v]||"";c.getAttribute(v)!==g&&c.setAttribute(v,g),d.indexOf(v)===-1&&d.push(v);const w=m.indexOf(v);w!==-1&&m.splice(w,1)}for(let v=m.length-1;v>=0;v-=1)c.removeAttribute(m[v]);d.length===m.length?c.removeAttribute(_t):c.getAttribute(_t)!==f.join(",")&&c.setAttribute(_t,f.join(","))},lg=(o,s)=>{typeof o<"u"&&document.title!==o&&(document.title=id(o)),ls("title",s)},Rp=(o,s)=>{const{baseTag:c,bodyAttributes:p,htmlAttributes:d,linkTags:m,metaTags:f,noscriptTags:v,onChangeClientState:g,scriptTags:w,styleTags:k,title:z,titleAttributes:R}=o;ls("body",p),ls("html",d),lg(z,R);const L={baseTag:xr("base",c),linkTags:xr("link",m),metaTags:xr("meta",f),noscriptTags:xr("noscript",v),scriptTags:xr("script",w),styleTags:xr("style",k)},j={},T={};Object.keys(L).forEach(A=>{const{newTags:V,oldTags:Y}=L[A];V.length&&(j[A]=V),Y.length&&(T[A]=L[A].oldTags)}),s&&s(),g(o,j,T)},ha=null,ig=o=>{ha&&cancelAnimationFrame(ha),o.defer?ha=requestAnimationFrame(()=>{Rp(o,()=>{ha=null})}):(Rp(o),ha=null)},sg=ig,Op=class extends y.Component{constructor(){super(...arguments);rn(this,"rendered",!1)}shouldComponentUpdate(s){return!$f(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:c}=this.props.context;let p=null;const d=Xf(s.get().map(m=>{const f={...m.props};return delete f.context,f}));dd.canUseDOM?sg(d):as&&(p=as(d)),c(p)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},Xi,cg=(Xi=class extends y.Component{shouldComponentUpdate(o){return!jf(Tp(this.props,"helmetData"),Tp(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,c,p){return{...s,[o.type]:[...s[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,p)}]}}mapObjectTypeChildren(o,s,c,p){switch(o.type){case"title":return{...s,[o.type]:p,titleAttributes:{...c}};case"body":return{...s,bodyAttributes:{...c}};case"html":return{...s,htmlAttributes:{...c}};default:return{...s,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,s){let c={...s};return Object.keys(o).forEach(p=>{c={...c,[p]:o[p]}}),c}warnOnInvalidChildren(o,s){return Sp(Ap.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ap.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Sp(!s||typeof s=="string"||Array.isArray(s)&&!s.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let c={};return n.Children.forEach(o,p=>{if(!p||!p.props)return;const{children:d,...m}=p.props,f=Object.keys(m).reduce((g,w)=>(g[Yf[w]||w]=m[w],g),{});let{type:v}=p;switch(typeof v=="symbol"?v=v.toString():this.warnOnInvalidChildren(p,d),v){case"Symbol(react.fragment)":s=this.mapChildrenToProps(d,s);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(p,c,f,d);break;default:s=this.mapObjectTypeChildren(p,s,f,d);break}}),this.mapArrayTypeChildrenToProps(c,s)}render(){const{children:o,...s}=this.props;let c={...s},{helmetData:p}=s;if(o&&(c=this.mapChildrenToProps(o,c)),p&&!(p instanceof os)){const d=p;p=new os(d.context,!0),delete c.helmetData}return p?n.createElement(Op,{...c,context:p.value}):n.createElement(pd.Consumer,null,d=>n.createElement(Op,{...c,context:d}))}},rn(Xi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Xi);const Pp="https://hovira-backend-nine.vercel.app/api";class Dp extends Error{constructor(s,c=0,p=null){super(s),this.name="ApiError",this.status=c,this.payload=p}}function md(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function hd(o){o&&(localStorage.setItem("token",o),localStorage.setItem("customerToken",o))}function Fp(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function Ct(o,s=[]){if(!o||typeof o!="object")return o;for(const c of s)if(o[c]!==void 0)return o[c];if(o.data!==void 0){const c=o.data;if(c&&typeof c=="object"){for(const p of s)if(c[p]!==void 0)return c[p]}return c}return o}async function ot(o,s={}){const{body:c,headers:p={},...d}=s,m=md(),f={Accept:"application/json",...p};let v=c;c!==void 0&&!(c instanceof FormData)&&typeof c!="string"&&(f["Content-Type"]="application/json",v=JSON.stringify(c)),m&&!f.Authorization&&(f.Authorization=`Bearer ${m}`);let g;try{g=await fetch(`${Pp}${o.startsWith("/")?o:`/${o}`}`,{...d,headers:f,body:v})}catch(z){throw new Dp(`Cannott connect to API at ${Pp}. Check that your backend is running and CORS is enabled.`,0,z)}const k=(g.headers.get("content-type")||"").includes("application/json")?await g.json().catch(()=>({})):await g.text();if(!g.ok){const z=(k==null?void 0:k.message)||(k==null?void 0:k.error)||(typeof k=="string"?k:`Request failed (${g.status})`);throw new Dp(z,g.status,k)}return k}const De={products:async(o={})=>{const s=new URLSearchParams;Object.entries(o).forEach(([d,m])=>{m!==""&&m!=null&&s.set(d,m)});const c=await ot(`/products${s.toString()?`?${s}`:""}`),p=Ct(c,["products","items","results"]);return Array.isArray(p)?p:(p==null?void 0:p.products)||(p==null?void 0:p.items)||[]},product:async o=>Ct(await ot(`/products/${encodeURIComponent(o)}`),["product","item"]),register:async o=>ot("/auth/customers/register",{method:"POST",body:o}),login:async o=>ot("/auth/customers/login",{method:"POST",body:o}),me:async()=>Ct(await ot("/customers/me"),["customer","user","profile"]),updateMe:async o=>Ct(await ot("/customers/me",{method:"PATCH",body:o}),["customer","user","profile"]),changePassword:o=>ot("/customers/me/password",{method:"PATCH",body:o}),addAddress:async o=>Ct(await ot("/customers/me/addresses",{method:"POST",body:o}),["customer","address"]),updateAddress:async(o,s)=>Ct(await ot(`/customers/me/addresses/${o}`,{method:"PATCH",body:s}),["customer","address"]),deleteAddress:async o=>ot(`/customers/me/addresses/${o}`,{method:"DELETE"}),orders:async()=>{const o=Ct(await ot("/orders/my"),["orders","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.orders)||[]},order:async o=>Ct(await ot(`/orders/my/${o}`),["order","item"]),createOrder:async o=>Ct(await ot("/orders",{method:"POST",body:o}),["order","data"]),coupons:async()=>{const o=Ct(await ot("/coupons"),["coupons","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.coupons)||[]},validateCoupon:o=>ot("/coupons/validate",{method:"POST",body:o})},He=(o,s="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:s||"INR",maximumFractionDigits:0}).format(Number(o)||0),$o=o=>{var p;if(!o)return"";const s=o.images||[],c=((p=s.find)==null?void 0:p.call(s,d=>d==null?void 0:d.isPrimary))||s[0];return(c==null?void 0:c.url)||o.image||o.imageUrl||""},Rn=o=>(o==null?void 0:o.salePrice)!=null?Number(o.salePrice):Number((o==null?void 0:o.price)||0),Yn=o=>String((o==null?void 0:o._id)||(o==null?void 0:o.id)||(o==null?void 0:o.slug)||""),ga=o=>`/product/${encodeURIComponent((o==null?void 0:o.slug)||(o==null?void 0:o._id)||(o==null?void 0:o.id))}`,fd=y.createContext(null),Qi=(o,s)=>{try{return JSON.parse(localStorage.getItem(o))??s}catch{return s}};function ug({children:o}){const[s,c]=y.useState(()=>Qi("hovira-cart",[])),[p,d]=y.useState(()=>Qi("hovira-wishlist",[])),[m,f]=y.useState(()=>Qi("customer",null)),[v,g]=y.useState([]),[w,k]=y.useState(!1),[z,R]=y.useState(!1),[L,j]=y.useState("");y.useEffect(()=>{localStorage.setItem("hovira-cart",JSON.stringify(s))},[s]),y.useEffect(()=>{localStorage.setItem("hovira-wishlist",JSON.stringify(p))},[p]),y.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]);const T=y.useCallback(async()=>{var Se;k(!1),R(!1),j("");const J=De.products(),he=md()?De.me():Promise.resolve(null),[U,se]=await Promise.allSettled([J,he]);if(U.status==="fulfilled")g(U.value||[]);else return console.error("Initial products API error:",U.reason),j(((Se=U.reason)==null?void 0:Se.message)||"Unable to load products. Please try again."),R(!0),!1;return se.status==="fulfilled"?se.value&&f(se.value):(console.error("Customer authentication error:",se.reason),Fp(),f(null)),R(!0),k(!0),!0},[]);y.useEffect(()=>{T()},[T]);const A=(J,he=1,U="")=>c(se=>{const we=`${Yn(J)}:${U}`;return se.find(B=>B.key===we)?se.map(B=>B.key===we?{...B,quantity:Math.min(99,B.quantity+he)}:B):[...se,{key:we,product:J,quantity:Math.max(1,he),variant:U}]}),V=(J,he)=>c(U=>he<=0?U.filter(se=>se.key!==J):U.map(se=>se.key===J?{...se,quantity:Math.min(99,he)}:se)),Y=J=>c(he=>he.filter(U=>U.key!==J)),X=()=>c([]),W=J=>d(he=>he.some(U=>Yn(U)===Yn(J))?he.filter(U=>Yn(U)!==Yn(J)):[...he,J]),oe=J=>p.some(he=>Yn(he)===Yn(J)),ie=()=>{Fp(),f(null)},xe=y.useMemo(()=>({cart:s,wishlist:p,customer:m,setCustomer:f,authReady:z,products:v,appReady:w,appError:L,retryInitialLoad:T,addToCart:A,updateQuantity:V,removeFromCart:Y,clearCart:X,toggleWishlist:W,isWishlisted:oe,logout:ie}),[s,p,m,z,v,w,L,T]);return n.createElement(fd.Provider,{value:xe},o)}const jt=()=>y.useContext(fd);/**
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
 */const Yt=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
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
 */const lt=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
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
 */const Ze=le("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
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
 */const is=le("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=le("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
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
 */const it=le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=le("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=le("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=le("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=le("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
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
 */const fs=le("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=le("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=le("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
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
 */const zr=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=le("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
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
 */const cs=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=le("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=le("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=le("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=le("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
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
 */const Cr=le("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=le("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=le("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=le("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),us="/assets/logo-YzEykGB1.png";function Lg(){const[o,s]=y.useState(!1),[c,p]=y.useState(""),[d,m]=y.useState(!1),{cart:f,wishlist:v,customer:g}=jt(),w=ln(),k=f.reduce((T,A)=>T+Number(A.quantity||0),0),z=v.length;y.useEffect(()=>{const T=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>window.removeEventListener("scroll",T)},[]),y.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const R=T=>{T.preventDefault(),w(`/shop${c.trim()?`?search=${encodeURIComponent(c.trim())}`:""}`),s(!1)},L=()=>s(!1),j=({isActive:T})=>`hv-nav-link ${T?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Ve,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(K,{to:"/shop"},"Explore Collection ",n.createElement(ye,{size:13}))),n.createElement("header",{className:`hv-header ${d?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>s(!o),"aria-label":o?"Close menu":"Open menu","aria-expanded":o},o?n.createElement(ft,{size:23}):n.createElement(Sg,{size:23})),n.createElement(K,{to:"/",className:"hv-brand",onClick:L,"aria-label":"HOVIRA Home"},n.createElement("img",{src:us,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(An,{to:"/",end:!0,className:j},"Home"),n.createElement(An,{to:"/shop",className:j},"Shop All"),n.createElement(An,{to:"/shop?category=Best%20sellers",className:j},"Best Sellers"),n.createElement(An,{to:"/about",className:j},"Our Story")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:R},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(K,{className:"hv-header-icon",to:g?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(br,{size:21})),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${z} items`,title:"Wishlist"},n.createElement(it,{size:21}),z>0&&n.createElement("span",{className:"hv-count"},z>99?"99+":z)),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${k} items`,title:"Shopping Bag"},n.createElement(Rt,{size:21}),k>0&&n.createElement("span",{className:"hv-count"},k>99?"99+":k)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:R},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(ye,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${o?"show":""}`,onClick:L}),n.createElement("aside",{className:`hv-mobile-drawer ${o?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(K,{to:"/",onClick:L},n.createElement("img",{src:us,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:L,"aria-label":"Close menu"},n.createElement(ft,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(An,{to:"/",end:!0,onClick:L},"Home ",n.createElement(ye,{size:17})),n.createElement(An,{to:"/shop",onClick:L},"Shop All ",n.createElement(ye,{size:17})),n.createElement(An,{to:"/shop?category=Best%20sellers",onClick:L},"Best Sellers ",n.createElement(ye,{size:17})),n.createElement(An,{to:"/about",onClick:L},"Our Story ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"hv-drawer-account"},n.createElement(K,{to:g?"/account":"/login",onClick:L},n.createElement(br,{size:19}),g?"My Account":"Login / Register"),n.createElement(K,{to:"/wishlist",onClick:L},n.createElement(it,{size:19}),"My Wishlist",z>0&&n.createElement("span",null,z)),n.createElement(K,{to:"/cart",onClick:L},n.createElement(Rt,{size:19}),"My Shopping Bag",k>0&&n.createElement("span",null,k))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Ve,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
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

          
          
          `))}function Mg(){const[o,s]=y.useState(""),[c,p]=y.useState(""),d=new Date().getFullYear(),m=v=>{v.preventDefault(),o.trim()&&(p("Thanks for joining the HOVIRA family!"),s(""))},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Ve,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(hs,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:o,onChange:v=>{s(v.target.value),p("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(ye,{size:17}))),c&&n.createElement("p",{className:"hv-footer-success"},n.createElement(it,{size:14}),c),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Cr,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(Tt,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(kg,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(K,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(zg,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(wg,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(K,{to:"/shop"},"Shop All"),n.createElement(K,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(K,{to:"/about"},"Our Story"),n.createElement(K,{to:"/account"},"My Account"),n.createElement(K,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(K,{to:"/privacy"},"Privacy Policy"),n.createElement(K,{to:"/terms"},"Terms & Conditions"),n.createElement(K,{to:"/shipping"},"Shipping Policy"),n.createElement(K,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(vd,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Ve,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",d," HOVIRA Skin care. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},n.createElement(it,{size:13,fill:"currentColor"}),"  Designed & Developed by ",n.createElement("a",{href:"https://jdbinfotech.co.in/"},"https://jdbinfotech.co.in/")),n.createElement("button",{className:"hv-back-top",onClick:f,"aria-label":"Back to top"},"Back to top",n.createElement(gg,{size:17}))))),n.createElement("style",null,`


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

        `))}function _g(){return n.createElement(n.Fragment,null,n.createElement(Lg,null),n.createElement("main",null,n.createElement(yf,null)),n.createElement(Mg,null))}function sn({label:o="Loading your essentials..."}){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-state"},n.createElement("div",{className:"loading-content"},n.createElement("div",{className:"loading-animation"},n.createElement("div",{className:"loading-outer-ring"}),n.createElement("div",{className:"loading-middle-ring"}),n.createElement("div",{className:"loading-logo"},n.createElement("img",{src:`${us}`})),n.createElement("span",{className:"loading-dot dot-one"}),n.createElement("span",{className:"loading-dot dot-two"})),n.createElement("div",{className:"loading-brand"},"HOVIRA",n.createElement("span",null,".")),n.createElement("p",{className:"loading-label"},o),n.createElement("div",{className:"loading-progress"},n.createElement("span",null)),n.createElement("small",{className:"loading-caption"},"A little care is on its way"))),n.createElement("style",null,`
            
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

            `))}function st({title:o,description:s,canonical:c}){return n.createElement(cg,null,n.createElement("title",null,o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:s||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:s||"Thoughtful skincare essentials from HOVIRA."}),c&&n.createElement("link",{rel:"canonical",href:c}))}function Yo({product:o,index:s=0}){var X,W,oe;const{addToCart:c,toggleWishlist:p,isWishlisted:d}=jt(),[m,f]=y.useState(!1),v=$o(o),g=Rn(o),w=d(o),k=Number(o.price||0),z=Number(o.salePrice||0),R=o.salePrice!=null&&z>0&&z<k,L=R?Math.round((k-z)/k*100):0,j=Number(o.stock)<=0,T=()=>{if(j){window.alert(`${o.name} is coming soon! This product is currently unavailable. Please check back later.`);return}c(o),f(!0),setTimeout(()=>{f(!1)},1800)},A=()=>{p(o)},V=typeof o.category=="string"?o.category:((X=o.category)==null?void 0:X.name)||"HOVIRA Essentials",Y=((oe=(W=o.images)==null?void 0:W.find(ie=>ie.isPrimary))==null?void 0:oe.alt)||o.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${s*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(K,{to:ga(o),className:"hv-product-image","aria-label":`View ${o.name}`},v?n.createElement("img",{src:v,alt:Y,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Ve,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},j?n.createElement("span",{className:"hv-soldout-badge"},"Upcoming"):R?n.createElement("span",{className:"hv-sale-badge"},L,"% OFF"):o.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Ve,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${w?"wish-active":""}`,onClick:A,"aria-label":w?"Remove from wishlist":"Add to wishlist",title:w?"Remove from wishlist":"Add to wishlist"},n.createElement(it,{size:18,fill:w?"currentColor":"none"})),n.createElement(K,{to:ga(o),className:"hv-quick-view","aria-label":`View details of ${o.name}`},n.createElement(jo,{size:16}),"Quick View",n.createElement(vd,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},V),o.isFeatured&&!j&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Ve,{size:11}),"Favourite")),n.createElement(K,{to:ga(o),className:"hv-product-name"},o.name),o.shortDescription&&n.createElement("p",{className:"hv-product-description"},o.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,He(g,o.currency||"INR")),R&&n.createElement("del",null,He(k,o.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""} ${j?"upcoming":""}`,onClick:T,"aria-label":j?`${o.name} is upcoming. Click for availability information.`:`Add ${o.name} to cart`,title:j?"Coming soon":"Add to cart"},j?n.createElement(n.Fragment,null,"Upcoming"):m?n.createElement(n.Fragment,null,n.createElement(lt,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Rt,{size:15}),"Add"))))),n.createElement("style",null,`

        
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

        `))}function Wt({type:o="error",children:s,onClose:c}){return s?n.createElement("div",{className:`notice ${o}`,role:"status"},o==="success"?n.createElement(Ze,{size:18}):n.createElement(vg,{size:18}),n.createElement("span",null,s),c&&n.createElement("button",{onClick:c,"aria-label":"Dismiss"},n.createElement(ft,{size:16}))):null}const jg="/assets/shampooo-DmHCtrQP.png";function Bg(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState(""),[f,v]=y.useState(0),[g,w]=y.useState(""),[k,z]=y.useState(""),[R,L]=y.useState(!1);y.useEffect(()=>{let A=!0;return(async()=>{p(!0),m("");try{const Y=await De.products();if(A){const X=Array.isArray(Y)?Y.filter(W=>W.isActive!==!1):[];s(X)}}catch(Y){A&&m(Y.message||"Unable to load products.")}finally{A&&p(!1)}})(),()=>{A=!1}},[f]);const j=y.useMemo(()=>{const A=o.filter(V=>V.isFeatured);return(A.length?A:o).slice(0,4)},[o]),T=[{icon:n.createElement(wr,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(Mp,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(Tt,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(it,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(st,{title:"HOVIRA Skin Care | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Ve,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(K,{to:"/shop"},"Explore HOVIRA ",n.createElement(ye,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Ve,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(ye,{size:18})),n.createElement(K,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(Cg,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(wr,{size:17})),n.createElement("span",null,n.createElement(Mp,{size:17})),n.createElement("span",null,n.createElement(it,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("img",{src:`${jg}`,alt:"hovira 3-in-1 shampoo"})),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},T.map((A,V)=>n.createElement("div",{className:"hv-benefit",key:V},n.createElement("div",{className:"hv-benefit-icon"},A.icon),n.createElement("div",null,n.createElement("h3",null,A.title),n.createElement("p",null,A.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(K,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(ye,{size:17}))),d&&n.createElement("div",{className:"hv-error"},n.createElement(Wt,null,d),n.createElement("button",{className:"hv-retry-btn",onClick:()=>v(A=>A+1)},n.createElement(ss,{size:15})," Try Again")),c?n.createElement("div",{className:"hv-loading"},n.createElement(sn,null)):j.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},j.map((A,V)=>n.createElement("div",{className:"hv-product-item",key:A._id||A.slug,style:{"--item-index":V}},n.createElement(Yo,{product:A,index:V})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(ye,{size:17})))):d?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(bg,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(ye,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(ye,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(it,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(K,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(wr,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(it,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Ve,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(ye,{size:18}))),n.createElement("style",null,`

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


  
  `))}const Bp="/assets/shampoo-DKEOU9sx.jpeg",Hg="/assets/lab-D4lI-tRu.jpg",Ug="/assets/meet-BceJ9sLp.jpg",Vg="/assets/wash-DPVUhSQC.jpg";function $g(){const[o,s]=If(),[c,p]=y.useState([]),[d,m]=y.useState(!0),[f,v]=y.useState(""),[g,w]=y.useState(o.get("search")||""),[k,z]=y.useState(o.get("category")||"all"),[R,L]=y.useState("featured"),[j,T]=y.useState(""),[A,V]=y.useState(!1),[Y,X]=y.useState(!1),[W,oe]=y.useState(!1);y.useEffect(()=>{let B=!0;return(async()=>{m(!0),v("");try{const q=await De.products();if(B){const M=Array.isArray(q)?q.filter(P=>P.isActive!==!1):[];p(M)}}catch(q){B&&v(q.message||"Unable to load products.")}finally{B&&m(!1)}})(),()=>{B=!1}},[]),y.useEffect(()=>{w(o.get("search")||""),z(o.get("category")||"all")},[o]),y.useEffect(()=>(document.body.style.overflow=Y?"hidden":"",()=>{document.body.style.overflow=""}),[Y]);const ie=y.useMemo(()=>[...new Set(c.map(B=>{var ve;return typeof B.category=="string"?B.category:(ve=B.category)==null?void 0:ve.name}).filter(Boolean))].sort((B,ve)=>B.localeCompare(ve)),[c]),xe=y.useMemo(()=>{let B=[...c];const ve=g.toLowerCase().trim();return ve&&(B=B.filter(q=>{var D;const M=typeof q.category=="string"?q.category:((D=q.category)==null?void 0:D.name)||"";return[q.name,q.shortDescription,q.description,M,q.brand,...q.tags||[]].join(" ").toLowerCase().includes(ve)})),k!=="all"&&(B=B.filter(q=>{var P;return(typeof q.category=="string"?q.category:((P=q.category)==null?void 0:P.name)||"").toLowerCase()===k.toLowerCase()})),j!==""&&(B=B.filter(q=>Number(q.salePrice??q.price)<=Number(j))),A&&(B=B.filter(q=>Number(q.stock)>0)),R==="price-low"&&B.sort((q,M)=>Number(q.salePrice??q.price)-Number(M.salePrice??M.price)),R==="price-high"&&B.sort((q,M)=>Number(M.salePrice??M.price)-Number(q.salePrice??q.price)),R==="name"&&B.sort((q,M)=>(q.name||"").localeCompare(M.name||"")),R==="newest"&&B.sort((q,M)=>new Date(M.createdAt||0)-new Date(q.createdAt||0)),R==="featured"&&B.sort((q,M)=>Number(M.isFeatured)-Number(q.isFeatured)),B},[c,g,k,j,A,R]),J=[g.trim()!=="",k!=="all",j!=="",A].filter(Boolean).length,he=(B,ve)=>{const q={};B.trim()&&(q.search=B.trim()),ve!=="all"&&(q.category=ve),s(q)},U=()=>{w(""),z("all"),T(""),V(!1),L("featured"),s({})},se=B=>{B==="search"&&(w(""),he("",k)),B==="category"&&(z("all"),he(g,"all")),B==="price"&&T(""),B==="stock"&&V(!1)},Se=B=>{z(B),he(g,B)},we=B=>{w(B),he(B,k)},Ae=()=>X(!1);return n.createElement(n.Fragment,null,n.createElement(st,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(K,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Ve,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(wr,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("div",{className:"hv-best-deals-trigger-wrap"},n.createElement("button",{type:"button",className:`hv-best-deals-trigger ${W?"is-active":""}`,onClick:()=>oe(B=>!B),"aria-expanded":W,"aria-controls":"hv-dealer-section"},n.createElement(Ve,{size:17}),n.createElement("span",null,"Best Deals"),n.createElement(Ip,{size:17,className:"hv-best-deals-chevron"}))),W&&n.createElement("section",{id:"hv-dealer-section",className:"hv-dealer-section","aria-labelledby":"hv-dealer-title"},n.createElement("div",{className:"hv-dealer-hero"},n.createElement("div",{className:"hv-dealer-hero-content"},n.createElement("span",{className:"hv-dealer-eyebrow"},"HOVIRA PROFESSIONAL COLLECTION"),n.createElement("h2",{id:"hv-dealer-title"},"Introducing the",n.createElement("br",null),n.createElement("em",null,"Mineral Reset Formula.")),n.createElement("p",null,"Discover a thoughtfully positioned 3-in-1 shampoo concept designed for an everyday cleansing routine and all hair types."),n.createElement("div",{className:"hv-dealer-tags"},n.createElement("span",null,"3-IN-1 FORMULA"),n.createElement("span",null,"ALL HAIR TYPES"),n.createElement("span",null,"DEALER EXCLUSIVE")),n.createElement("a",{href:"#hv-dealer-details",className:"hv-dealer-primary-btn"},"Discover the formula ",n.createElement(ye,{size:16})),n.createElement("p",{className:"hv-dealer-price-note"},"Dealer enquiries only · Public selling price is not displayed")),n.createElement("div",{className:"hv-dealer-hero-image"},n.createElement("img",{src:`${Bp}`,alt:"HOVIRA Mineral Reset 3-in-1 Shampoo"}),n.createElement("span",{className:"hv-dealer-image-caption"},"MINERAL RESET COLLECTION"))),n.createElement("div",{className:"hv-dealer-intro",id:"hv-dealer-details"},n.createElement("span",{className:"hv-dealer-label"},"BEYOND ORDINARY HAIR CLEANSING"),n.createElement("h2",null,"A fresh approach to",n.createElement("br",null),n.createElement("em",null,"everyday hair care.")),n.createElement("p",null,"Hair breakage, dryness and buildup can have several contributing factors. Hair care habits, styling practices and unsuitable products may also affect how hair looks and feels. HOVIRA Mineral Reset is presented as a 3-in-1 shampoo concept focused on a refreshing cleansing experience.")),n.createElement("div",{className:"hv-dealer-benefits"},n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"01"),n.createElement("h3",null,"Cleanse"),n.createElement("p",null,"Designed to cleanse hair and scalp as part of your regular hair care routine.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"02"),n.createElement("h3",null,"Mineral Reset"),n.createElement("p",null,"Formulated around a mineral-reset concept to help address mineral and product buildup.")),n.createElement("article",{className:"hv-dealer-benefit"},n.createElement("span",null,"03"),n.createElement("h3",null,"Fresh Hair Feel"),n.createElement("p",null,"Designed to leave hair feeling refreshed, clean and manageable after washing."))),n.createElement("div",{className:"hv-dealer-video-section"},n.createElement("div",{className:"hv-dealer-video-heading"},n.createElement("span",{className:"hv-dealer-label"},"EXPERIENCE HOVIRA"),n.createElement("h2",null,"Discover the ",n.createElement("em",null,"product story.")),n.createElement("p",null,"Watch the product introduction, formulation story and usage demonstration.")),n.createElement("video",{className:"hv-dealer-video",controls:!0,playsInline:!0,preload:"metadata",poster:"/images/mineral-reset-video-poster.webp"},n.createElement("source",{src:"/videos/mineral-reset-product.mp4",type:"video/mp4"}),"Your browser does not support video playback.")),n.createElement("div",{className:"hv-dealer-hair-types"},n.createElement("div",null,n.createElement("span",{className:"hv-dealer-label"},"ONE FORMULA, EVERYDAY CARE"),n.createElement("h2",null,"Mineral Reset Formula",n.createElement("br",null),n.createElement("em",null,"for all hair types.")),n.createElement("p",null,"A versatile cleansing concept positioned for different hair types and everyday hair care routines. Please refer to the final product label for suitability and directions.")),n.createElement("div",{className:"hv-dealer-hair-points"},n.createElement("span",null,n.createElement(lt,{size:16})," Straight hair"),n.createElement("span",null,n.createElement(lt,{size:16})," Wavy hair"),n.createElement("span",null,n.createElement(lt,{size:16})," Curly hair"),n.createElement("span",null,n.createElement(lt,{size:16})," Different hair textures"))),n.createElement("div",{className:"hv-dealer-gallery"},n.createElement("div",{className:"hv-dealer-gallery-heading"},n.createElement("span",{className:"hv-dealer-label"},"THE PRODUCT COLLECTION"),n.createElement("h2",null,"Every detail, ",n.createElement("em",null,"thoughtfully presented."))),n.createElement("div",{className:"hv-dealer-gallery-grid"},n.createElement("img",{src:`${Bp}`,alt:"HOVIRA Mineral Reset Shampoo front packaging",loading:"lazy"}),n.createElement("img",{src:`${Hg}`,alt:"HOVIRA Mineral Reset Shampoo packaging details",loading:"lazy"}),n.createElement("img",{src:`${Ug}`,alt:"HOVIRA Mineral Reset Shampoo texture",loading:"lazy"}),n.createElement("img",{src:`${Vg}`,alt:"HOVIRA Mineral Reset Shampoo lifestyle presentation",loading:"lazy"}))),n.createElement("div",{className:"hv-dealer-partnership"},n.createElement("span",{className:"hv-dealer-label"},"GROW WITH HOVIRA"),n.createElement("h2",null,"Be a part of our",n.createElement("br",null),n.createElement("em",null,"dealer network.")),n.createElement("p",null,"Interested in introducing HOVIRA Mineral Reset Shampoo to your market? Connect with our team to explore product information, distribution opportunities and dealer partnership details."),n.createElement("div",{className:"hv-dealer-partner-points"},n.createElement("span",null,n.createElement(lt,{size:15})," Product information"),n.createElement("span",null,n.createElement(lt,{size:15})," Dealer pricing on enquiry"),n.createElement("span",null,n.createElement(lt,{size:15})," Distribution opportunities"),n.createElement("span",null,n.createElement(lt,{size:15})," Business support details")),n.createElement(K,{to:"/contact?type=dealer",className:"hv-dealer-primary-btn"},"Become a HOVIRA Dealer ",n.createElement(ye,{size:16})),n.createElement("small",null,"Dealer enquiries only. Pricing and commercial terms are shared directly with interested business partners."))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:k==="all"?"active":"",onClick:()=>Se("all")},"All Products",k==="all"&&n.createElement(lt,{size:14})),ie.map(B=>n.createElement("button",{key:B,className:k===B?"active":"",onClick:()=>Se(B)},B,k===B&&n.createElement(lt,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${Y?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:U},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Ae,"aria-label":"Close filters"},n.createElement(ft,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:g,onChange:B=>we(B.target.value),placeholder:"Try serum, cleanser..."}),g&&n.createElement("button",{type:"button",onClick:()=>se("search"),"aria-label":"Clear search"},n.createElement(ft,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:k==="all",onChange:()=>Se("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,c.length)),ie.map(B=>n.createElement("label",{className:"hv-filter-option",key:B},n.createElement("input",{type:"radio",checked:k===B,onChange:()=>Se(B)}),n.createElement("span",null,B),n.createElement("i",null,c.filter(ve=>{var M;return(typeof ve.category=="string"?ve.category:(M=ve.category)==null?void 0:M.name)===B}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:j,onChange:B=>T(B.target.value),placeholder:"Enter maximum price"}),j&&n.createElement("button",{type:"button",onClick:()=>se("price"),"aria-label":"Clear maximum price"},n.createElement(ft,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:A,onChange:B=>V(B.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:U},n.createElement(_p,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Ae},"Show ",xe.length," Products",n.createElement(ye,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>X(!0)},n.createElement(Og,{size:16}),"Filters",J>0&&n.createElement("span",null,J)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,d?"...":xe.length),n.createElement("span",null,xe.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(hg,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:R,onChange:B=>L(B.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(Ip,{size:14}))),J>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),g&&n.createElement("button",{onClick:()=>se("search")},"Search: ",g,n.createElement(ft,{size:13})),k!=="all"&&n.createElement("button",{onClick:()=>se("category")},k,n.createElement(ft,{size:13})),j&&n.createElement("button",{onClick:()=>se("price")},"Under ₹",j,n.createElement(ft,{size:13})),A&&n.createElement("button",{onClick:()=>se("stock")},"In stock",n.createElement(ft,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:U},"Clear all")),f&&n.createElement("div",{className:"hv-shop-error"},n.createElement(Wt,null,f)),d?n.createElement("div",{className:"hv-shop-loading"},n.createElement(sn,null)):xe.length>0?n.createElement("div",{className:"hv-shop-product-grid"},xe.map((B,ve)=>n.createElement(Yo,{key:B._id||B.slug,product:B,index:ve}))):f?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Rt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:U},n.createElement(_p,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Ve,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(K,{to:"/about"},"Discover HOVIRA ",n.createElement(ye,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${Y?"show":""}`,"aria-label":"Close filters",onClick:Ae}),n.createElement("style",null,`
          
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

          `))}function Yg(){var D,b,O,me,ge,H,te,ne,pe,be,Ee,_e;const{slugOrId:o}=td(),[s,c]=y.useState(null),[p,d]=y.useState([]),[m,f]=y.useState(!0),[v,g]=y.useState(""),[w,k]=y.useState(1),[z,R]=y.useState(0),[L,j]=y.useState(""),[T,A]=y.useState(!1),[V,Y]=y.useState(!1),{addToCart:X,toggleWishlist:W,isWishlisted:oe}=jt();y.useEffect(()=>{let G=!0;return f(!0),g(""),c(null),R(0),j(""),k(1),A(!1),Y(!1),Promise.all([De.product(o),De.products()]).then(([de,Et])=>{G&&(c(de),d(Et))}).catch(de=>{G&&g(de.message)}).finally(()=>{G&&f(!1)}),()=>{G=!1}},[o]);const ie=y.useMemo(()=>{if(!s)return[];const G=(s.images||[]).map(de=>({url:typeof de=="string"?de:de==null?void 0:de.url,alt:typeof de=="string"?s.name:de==null?void 0:de.alt})).filter(de=>de.url);if(!G.length){const de=$o(s);return de?[{url:de,alt:s.name}]:[]}return G},[s]),xe=((D=ie[z])==null?void 0:D.url)||"";y.useEffect(()=>{if(!V)return;const G=de=>{de.key==="Escape"&&Y(!1),de.key==="ArrowRight"&&ie.length>1&&R(Et=>(Et+1)%ie.length),de.key==="ArrowLeft"&&ie.length>1&&R(Et=>Et===0?ie.length-1:Et-1)};return document.addEventListener("keydown",G),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",G),document.body.style.overflow=""}},[V,ie.length]);const J=s?Rn(s):0,he=Number((s==null?void 0:s.price)||0),U=(s==null?void 0:s.salePrice)!=null&&he>J&&J>0,se=U?Math.round((he-J)/he*100):0,Se=(b=s==null?void 0:s.variants)==null?void 0:b.find(G=>G.value===L),we=Number(Se?Se.stock||0:(s==null?void 0:s.stock)||0),Ae=typeof(s==null?void 0:s.category)=="object"?((O=s.category)==null?void 0:O.name)||"HOVIRA ESSENTIALS":(s==null?void 0:s.category)||"HOVIRA ESSENTIALS",B=G=>G?String(typeof G=="object"?G._id||G.id||G.name||"":G):"",ve=y.useMemo(()=>{if(!s)return[];const G=B(s.category);return p.filter(de=>{const Et=B(de.category)===G;return de._id!==s._id&&Et&&de.isActive!==!1}).slice(0,4)},[p,s]),q=()=>{var G;((G=s.variants)==null?void 0:G.length)>0&&!L||we<=0||(X(s,w,L),A(!0),setTimeout(()=>{A(!1)},2e3))},M=G=>{k(de=>Math.max(1,Math.min(99,de+G)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(sn,{label:"Finding your product..."}));if(v||!s)return n.createElement("div",{className:"page-shell pd-error"},n.createElement(Wt,null,v||"We couldn't find this product."),n.createElement(K,{to:"/shop",className:"pd-back-link"},n.createElement(Yt,{size:17}),"Back to shop"));const P=oe(s);return n.createElement(n.Fragment,null,n.createElement(st,{title:((me=s.seo)==null?void 0:me.metaTitle)||s.name,description:((ge=s.seo)==null?void 0:ge.metaDescription)||s.shortDescription||s.description,canonical:((H=s.seo)==null?void 0:H.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(K,{to:"/"},"Home"),n.createElement(_o,{size:14}),n.createElement(K,{to:"/shop"},"Shop"),n.createElement(_o,{size:14}),n.createElement("span",null,s.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},xe?n.createElement("img",{src:xe,alt:((te=ie[z])==null?void 0:te.alt)||s.name,key:xe,onClick:()=>Y(!0),className:"pd-zoomable-image",title:"Click to zoom"}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Ve,{size:38}),n.createElement("span",null,"HOVIRA")),xe&&n.createElement("button",{type:"button",className:"pd-zoom-trigger",onClick:()=>Y(!0),"aria-label":"Zoom product image"},n.createElement(Ig,{size:16}),n.createElement("span",null,"Click to zoom")),s.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Ve,{size:13}),"HOVIRA Favourite"),U&&n.createElement("span",{className:"pd-discount-badge"},se,"% OFF"),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>R(G=>G===0?ie.length-1:G-1),"aria-label":"Previous image"},n.createElement(Yt,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>R(G=>(G+1)%ie.length),"aria-label":"Next image"},n.createElement(ye,{size:18})))),ie.length>1&&n.createElement("div",{className:"pd-thumbnails"},ie.map((G,de)=>n.createElement("button",{key:`${G.url}-${de}`,className:z===de?"active":"",onClick:()=>R(de),"aria-label":`View image ${de+1}`},n.createElement("img",{src:G.url,alt:G.alt||`${s.name} ${de+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Ve,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},Ae),n.createElement("h1",null,s.name),s.shortDescription&&n.createElement("p",{className:"pd-short-description"},s.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},He(J,s.currency||"INR")),U&&n.createElement(n.Fragment,null,n.createElement("del",null,He(he,s.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",se,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((ne=s.variants)==null?void 0:ne.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),L&&n.createElement("span",null,L)),n.createElement("div",{className:"pd-variant-list"},s.variants.map(G=>n.createElement("button",{type:"button",key:G._id||G.sku||G.value,disabled:G.stock===0,className:L===G.value?"selected":"",onClick:()=>j(G.value)},n.createElement("span",null,G.name,": ",G.value),L===G.value&&n.createElement(lt,{size:16}),G.stock===0&&n.createElement("small",null,"Sold out")))),s.variants.length>0&&!L&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},we>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>M(-1),disabled:w<=1,"aria-label":"Decrease quantity"},n.createElement(Ed,{size:16})),n.createElement("span",null,w),n.createElement("button",{type:"button",onClick:()=>M(1),disabled:w>=99||w>=we,"aria-label":"Increase quantity"},n.createElement(zr,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:we<=0||((pe=s.variants)==null?void 0:pe.length)>0&&!L,onClick:q},T?n.createElement(n.Fragment,null,n.createElement(lt,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Rt,{size:19}),we<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${P?"active":""}`,onClick:()=>W(s),"aria-label":"Toggle wishlist"},n.createElement(it,{size:21,fill:P?"currentColor":"none"}))),we>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(fs,{size:15}),we," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Cr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Tt,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(wr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:s.content||s.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(be=s.ingredients)!=null&&be.length?n.createElement("ul",{className:"pd-chip-list"},s.ingredients.map((G,de)=>n.createElement("li",{key:`${G}-${de}`},n.createElement(lt,{size:14}),G))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(Ee=s.benefits)!=null&&Ee.length?n.createElement("ul",{className:"pd-benefit-list"},s.benefits.map((G,de)=>n.createElement("li",{key:`${G}-${de}`},n.createElement("span",null,n.createElement(lt,{size:15})),G))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),s.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,s.howToUse)),s.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,s.warnings)))))),ve.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(K,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(ye,{size:17}))),n.createElement("div",{className:"product-grid"},ve.map((G,de)=>n.createElement(Yo,{key:G._id||G.slug,product:G,index:de})))),V&&xe&&n.createElement("div",{className:"pd-zoom-overlay",role:"dialog","aria-modal":"true","aria-label":"Product image zoom",onClick:()=>Y(!1)},n.createElement("button",{type:"button",className:"pd-zoom-close",onClick:()=>Y(!1),"aria-label":"Close image zoom"},n.createElement(ft,{size:23})),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-prev",onClick:G=>{G.stopPropagation(),R(de=>de===0?ie.length-1:de-1)},"aria-label":"Previous image"},n.createElement(Yt,{size:22})),n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-next",onClick:G=>{G.stopPropagation(),R(de=>(de+1)%ie.length)},"aria-label":"Next image"},n.createElement(ye,{size:22}))),n.createElement("div",{className:"pd-zoom-content",onClick:G=>G.stopPropagation()},n.createElement("img",{src:xe,alt:((_e=ie[z])==null?void 0:_e.alt)||s.name}),n.createElement("div",{className:"pd-zoom-caption"},s.name,ie.length>1&&n.createElement("span",null,z+1," / ",ie.length)))),n.createElement("style",null,`
          
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

          `))}function Wg(){const[o,s]=y.useState({email:"",password:""}),[c,p]=y.useState(!1),[d,m]=y.useState(""),[f,v]=y.useState(!1),{setCustomer:g}=jt(),w=ln(),k=qt(),z=L=>{s(j=>({...j,[L.target.name]:L.target.value}))},R=async L=>{var j,T,A;L.preventDefault(),m(""),v(!0);try{const V=await De.login(o),Y=V.token||V.accessToken||((j=V.data)==null?void 0:j.token)||((T=V.data)==null?void 0:T.accessToken);if(!Y)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");hd(Y);const X=Ct(V,["customer","user","profile"])||await De.me();g(X),w(((A=k.state)==null?void 0:A.from)||"/account",{replace:!0})}catch(V){m((V==null?void 0:V.message)||"We couldn't sign you in. Please try again.")}finally{v(!1)}};return n.createElement(n.Fragment,null,n.createElement(st,{title:"Sign In to Your HOVIRA Account | Secure Skincare Shopping",description:"Sign in securely to your HOVIRA account to manage your profile, wishlist, orders and skincare purchases."}),n.createElement("main",{className:"login-page"},n.createElement("section",{className:"login-shell"},n.createElement("aside",{className:"login-visual"},n.createElement("div",{className:"login-visual-top"},n.createElement(K,{to:"/",className:"login-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"login-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"login-visual-tag"},n.createElement(Ve,{size:13})," YOUR DAILY RITUAL")),n.createElement("div",{className:"login-visual-content"},n.createElement("span",{className:"login-visual-kicker"},"A MOMENT FOR YOU"),n.createElement("h1",null,"Care that feels",n.createElement("br",null),n.createElement("em",null,"like coming home.")),n.createElement("p",null,"Your HOVIRA favourites, thoughtful essentials and personal skincare journey are just a sign in away."),n.createElement("div",{className:"login-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Keep your favourites close"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Follow your orders with ease"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Enjoy a personal shopping experience"))),n.createElement("div",{className:"login-visual-footer"},n.createElement("div",{className:"login-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"login-orbit orbit-a"}),n.createElement("div",{className:"login-orbit orbit-b"}),n.createElement("div",{className:"login-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"login-orbit-dot dot-a"}),n.createElement("i",{className:"login-orbit-dot dot-b"})),n.createElement("div",{className:"login-visual-note"},n.createElement(Tt,{size:16}),n.createElement("span",null,"Thoughtful care. A considered experience.")))),n.createElement("section",{className:"login-panel"},n.createElement("div",{className:"login-panel-top"},n.createElement("span",{className:"login-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"login-secure-label"},n.createElement(an,{size:13})," SECURE SIGN IN")),n.createElement("div",{className:"login-heading"},n.createElement("span",{className:"login-eyebrow"},"WELCOME BACK"),n.createElement("h2",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to pick up where your self-care left off.")),d&&n.createElement("div",{className:"login-error",role:"alert"},n.createElement(Wt,null,d)),n.createElement("form",{className:"login-form",onSubmit:R},n.createElement("label",{className:"login-field"},n.createElement("span",null,"Email address"),n.createElement("input",{name:"email",type:"email",autoComplete:"email",inputMode:"email",required:!0,value:o.email,onChange:z,placeholder:"you@example.com"})),n.createElement("label",{className:"login-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"login-password-wrap"},n.createElement("input",{name:"password",type:c?"text":"password",autoComplete:"current-password",required:!0,value:o.password,onChange:z,placeholder:"Enter your password"}),n.createElement("button",{type:"button",className:"login-eye-btn",onClick:()=>p(L=>!L),"aria-label":c?"Hide password":"Show password"},c?n.createElement(is,{size:17}):n.createElement(jo,{size:17})))),n.createElement("div",{className:"login-form-meta"},n.createElement("span",null,n.createElement(an,{size:13})," Your account is protected")),n.createElement("button",{className:"login-submit",type:"submit",disabled:f},n.createElement("span",null,f?"Signing you in…":"Sign in to HOVIRA"),f?n.createElement("span",{className:"login-spinner"}):n.createElement(ye,{size:17}))),n.createElement("div",{className:"login-divider"},n.createElement("span",null,"NEW TO HOVIRA?")),n.createElement(K,{to:"/signup",className:"login-create-account"},"Create your account ",n.createElement(ye,{size:15})),n.createElement("div",{className:"login-trust"},n.createElement("div",{className:"login-trust-icon"},n.createElement(yd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"We use your account information to manage your shopping experience and orders."))),n.createElement("p",{className:"login-legal"},"By continuing, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"login-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          
          `))}function Hp(){const[o,s]=y.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[c,p]=y.useState(!1),[d,m]=y.useState(!1),[f,v]=y.useState(""),[g,w]=y.useState(!1),{setCustomer:k}=jt(),z=ln(),R=T=>{const{name:A,value:V,type:Y,checked:X}=T.target;s(W=>({...W,[A]:Y==="checkbox"?X:V}))},L=y.useMemo(()=>{const T=o.password;if(!T)return{score:0,label:"Use at least 8 characters"};let A=0;return T.length>=8&&A++,/[A-Z]/.test(T)&&A++,/[a-z]/.test(T)&&A++,/[0-9]/.test(T)&&A++,/[^A-Za-z0-9]/.test(T)&&A++,A<=2?{score:1,label:"Could be stronger"}:A<=4?{score:2,label:"Good password"}:{score:3,label:"Strong password"}},[o.password]),j=async T=>{var A,V;if(T.preventDefault(),v(""),o.password.length<8){v("Password must be at least 8 characters.");return}if(o.password!==o.confirmPassword){v("Your passwords do not match.");return}w(!0);try{const{confirmPassword:Y,...X}=o,W=await De.register(X),oe=W.token||W.accessToken||((A=W.data)==null?void 0:A.token)||((V=W.data)==null?void 0:V.accessToken);oe?(hd(oe),k(Ct(W,["customer","user","profile"])||await De.me()),z("/account")):z("/login",{state:{registered:!0}})}catch(Y){v((Y==null?void 0:Y.message)||"We couldn't create your account. Please try again.")}finally{w(!1)}};return n.createElement(n.Fragment,null,n.createElement(st,{title:"Create Your HOVIRA Account | Join Our Skincare Community",description:"Create your HOVIRA account for a more personal skincare shopping experience. Save favourites, manage your orders and explore thoughtful skincare essentials."}),n.createElement("main",{className:"register-page"},n.createElement("section",{className:"register-shell"},n.createElement("aside",{className:"register-visual"},n.createElement("div",{className:"register-visual-top"},n.createElement(K,{to:"/",className:"register-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"register-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"register-visual-tag"},n.createElement(Ve,{size:13})," YOUR SKIN, YOUR RITUAL")),n.createElement("div",{className:"register-visual-content"},n.createElement("span",{className:"register-visual-kicker"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Make room for",n.createElement("br",null),n.createElement("em",null,"a little care.")),n.createElement("p",null,"Create your personal space for thoughtful skincare, favourite finds and a smoother shopping experience."),n.createElement("div",{className:"register-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Save products you love"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Keep track of every order"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Make every visit feel personal"))),n.createElement("div",{className:"register-visual-footer"},n.createElement("div",{className:"register-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"register-orbit orbit-a"}),n.createElement("div",{className:"register-orbit orbit-b"}),n.createElement("div",{className:"register-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"register-orbit-dot dot-a"}),n.createElement("i",{className:"register-orbit-dot dot-b"})),n.createElement("div",{className:"register-visual-note"},n.createElement(Tt,{size:16}),n.createElement("span",null,"A more considered way to shop.")))),n.createElement("section",{className:"register-panel"},n.createElement("div",{className:"register-panel-top"},n.createElement("span",{className:"register-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"register-secure-label"},n.createElement(an,{size:13})," CREATE ACCOUNT")),n.createElement("div",{className:"register-heading"},n.createElement("span",{className:"register-eyebrow"},"WELCOME TO HOVIRA"),n.createElement("h2",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Your little corner for thoughtful skincare starts here.")),f&&n.createElement("div",{className:"register-error",role:"alert"},n.createElement(Wt,null,f)),n.createElement("form",{className:"register-form",onSubmit:j},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Full name"),n.createElement("div",{className:"register-input-wrap"},n.createElement(br,{size:16}),n.createElement("input",{name:"name",type:"text",required:!0,maxLength:100,value:o.name,onChange:R,placeholder:"Your full name",autoComplete:"name"}))),n.createElement("div",{className:"register-form-two"},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"register-input-wrap"},n.createElement(hs,{size:16}),n.createElement("input",{name:"email",type:"email",required:!0,value:o.email,onChange:R,placeholder:"you@example.com",autoComplete:"email",inputMode:"email"}))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Phone ",n.createElement("small",null,"Optional")),n.createElement("div",{className:"register-input-wrap"},n.createElement(wd,{size:16}),n.createElement("input",{name:"phone",type:"tel",value:o.phone,onChange:R,placeholder:"Phone number",autoComplete:"tel",inputMode:"tel"})))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(an,{size:16}),n.createElement("input",{name:"password",type:c?"text":"password",required:!0,minLength:8,value:o.password,onChange:R,placeholder:"Create a password",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>p(T=>!T),"aria-label":c?"Hide password":"Show password"},c?n.createElement(is,{size:16}):n.createElement(jo,{size:16}))),n.createElement("div",{className:"register-strength","aria-live":"polite"},n.createElement("div",{className:"register-strength-bars"},[1,2,3].map(T=>n.createElement("span",{key:T,className:L.score>=T?`active strength-${L.score}`:""}))),n.createElement("small",null,L.label))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Confirm password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(an,{size:16}),n.createElement("input",{name:"confirmPassword",type:d?"text":"password",required:!0,value:o.confirmPassword,onChange:R,placeholder:"Enter your password again",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>m(T=>!T),"aria-label":d?"Hide confirm password":"Show confirm password"},d?n.createElement(is,{size:16}):n.createElement(jo,{size:16}))),o.confirmPassword&&n.createElement("small",{className:`register-match ${o.password===o.confirmPassword?"matched":"not-matched"}`},o.password===o.confirmPassword?"Passwords match":"Passwords do not match yet")),n.createElement("label",{className:"register-optin"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:o.marketingOptIn,onChange:R}),n.createElement("span",{className:"register-custom-check"},n.createElement(Ze,{size:13})),n.createElement("span",null,"Send me occasional HOVIRA updates and skincare news.")),n.createElement("button",{className:"register-submit",type:"submit",disabled:g},n.createElement("span",null,g?"Creating your account…":"Create my account"),g?n.createElement("span",{className:"register-spinner"}):n.createElement(ye,{size:17}))),n.createElement("div",{className:"register-login-prompt"},"Already have an account? ",n.createElement(K,{to:"/login"},"Sign in")),n.createElement("div",{className:"register-trust"},n.createElement("div",{className:"register-trust-icon"},n.createElement(yd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"Your information helps us manage your account and shopping experience."))),n.createElement("p",{className:"register-legal"},"By creating an account, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"register-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          `))}function Gg(){const{cart:o,updateQuantity:s,removeFromCart:c}=jt(),p=ln(),d=y.useMemo(()=>o.reduce((v,g)=>v+g.quantity,0),[o]),m=y.useMemo(()=>o.reduce((v,g)=>v+Rn(g.product)*g.quantity,0),[o]),f=(v,g)=>{const w=v.quantity+g;w<1||s(v.key,w)};return n.createElement(n.Fragment,null,n.createElement(st,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,d," ",d===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Rt,{size:28}))),o.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,d," items in your shopping bag")),n.createElement(K,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(ye,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},o.map(v=>{var z;const g=v.product,w=Rn(g),k=$o(g);return n.createElement("article",{className:"hv-cart-item",key:v.key},n.createElement(K,{to:ga(g),className:"hv-cart-product-image"},k?n.createElement("img",{src:k,alt:g.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof g.category=="object"?((z=g.category)==null?void 0:z.name)||"HOVIRA":g.category||"HOVIRA"),n.createElement(K,{to:ga(g),className:"hv-cart-product-name"},g.name),v.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",v.variant),n.createElement("span",{className:"hv-cart-product-price"},He(w,g.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>c(v.key)},n.createElement(bd,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>f(v,-1),disabled:v.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(Ed,{size:14})),n.createElement("span",null,v.quantity),n.createElement("button",{type:"button",onClick:()=>f(v,1),"aria-label":"Increase quantity"},n.createElement(zr,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},He(w*v.quantity,g.currency||"INR")))})),n.createElement(K,{to:"/shop",className:"hv-cart-continue-link"},n.createElement(Yt,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Rt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,d)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,He(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>p("/checkout")},"Continue to checkout",n.createElement(ye,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(Tt,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(fs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Rt,{size:34}),n.createElement(Ve,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(K,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(ye,{size:17}))))),n.createElement("style",null,`
          
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

          `))}function qg(){const o=jt(),s=Array.isArray(o==null?void 0:o.wishlist)?o.wishlist:[],c=y.useMemo(()=>`${s.length} ${s.length===1?"piece":"pieces"} saved`,[s.length]);return n.createElement(n.Fragment,null,n.createElement(st,{title:"Your Wishlist | HOVIRA",description:"Your favourite HOVIRA skincare essentials, all saved in one place."}),n.createElement("main",{className:"page-shell standard-page wishlist-page"},n.createElement("section",{className:"wishlist-hero"},n.createElement("div",{className:"wishlist-hero-copy"},n.createElement("span",{className:"wishlist-eyebrow"},n.createElement(Ve,{size:13})," SAVED WITH LOVE"),n.createElement("h1",null,"Your little list of ",n.createElement("em",null,"lovely things.")),n.createElement("p",null,"All the skincare you’ve had your eye on, gathered in one beautiful place."),n.createElement("div",{className:"wishlist-count"},n.createElement("span",{className:"wishlist-count-icon"},n.createElement(it,{size:15})),n.createElement("span",null,c))),n.createElement("div",{className:"wishlist-hero-art","aria-hidden":"true"},n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-one"}),n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-two"}),n.createElement("div",{className:"wishlist-art-heart"},n.createElement(it,{size:62,strokeWidth:1.1})),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-one"},"✦"),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-two"},"✧"),n.createElement("span",{className:"wishlist-art-caption"},"A little self-love",n.createElement("br",null),"goes a long way"))),s.length>0?n.createElement("section",{className:"wishlist-products-section"},n.createElement("div",{className:"wishlist-section-heading"},n.createElement("div",null,n.createElement("span",{className:"wishlist-eyebrow"},"YOUR COLLECTION"),n.createElement("h2",null,"Favourites, ",n.createElement("em",null,"for later."))),n.createElement(K,{to:"/shop",className:"wishlist-text-link"},"Discover more ",n.createElement(ye,{size:15}))),n.createElement("div",{className:"product-grid wishlist-product-grid"},s.map((p,d)=>n.createElement(Yo,{key:p._id||p.slug||d,product:p,index:d}))),n.createElement("div",{className:"wishlist-bottom-note"},n.createElement(it,{size:17}),n.createElement("span",null,"Your saved pieces are waiting right here whenever you need them."),n.createElement(K,{to:"/shop"},"Keep exploring ",n.createElement(ye,{size:14})))):n.createElement("section",{className:"wishlist-empty"},n.createElement("div",{className:"wishlist-empty-visual"},n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-one"}),n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-two"}),n.createElement("div",{className:"wishlist-empty-heart"},n.createElement(it,{size:48,strokeWidth:1.2})),n.createElement("span",{className:"wishlist-empty-star star-one"},"✦"),n.createElement("span",{className:"wishlist-empty-star star-two"},"✧")),n.createElement("span",{className:"wishlist-eyebrow"},"YOUR FAVOURITES LIVE HERE"),n.createElement("h2",null,"A little space for",n.createElement("br",null),n.createElement("em",null,"your favourites.")),n.createElement("p",null,"When something catches your eye, tap its heart to save it here. Your next favourite might be just a browse away."),n.createElement(K,{to:"/shop",className:"wishlist-shop-button"},n.createElement(Rt,{size:16})," Explore the collection ",n.createElement(ye,{size:16})),n.createElement("div",{className:"wishlist-empty-footnote"},n.createElement(Ag,{size:14})," Your wishlist is ready for a little love."))),n.createElement("style",null,`
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

          `))}const Ki={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},Qg=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:fg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:Fg},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:xd},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:an}];function Kg(){const{cart:o,customer:s,clearCart:c,setCustomer:p}=jt(),d=ln(),[m,f]=y.useState((s==null?void 0:s.addresses)||[]),[v,g]=y.useState(""),[w,k]=y.useState(!1),[z,R]=y.useState({...Ki,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),[L,j]=y.useState("cod"),[T,A]=y.useState(""),[V,Y]=y.useState(""),[X,W]=y.useState(null),[oe,ie]=y.useState(0),[xe,J]=y.useState(""),[he,U]=y.useState(""),[se,Se]=y.useState(!1),[we,Ae]=y.useState(!1),[B,ve]=y.useState(!1),q=y.useMemo(()=>o.reduce((H,te)=>H+Rn(te.product)*te.quantity,0),[o]),M=Math.max(0,q-oe);y.useEffect(()=>{const H=(s==null?void 0:s.addresses)||[];if(f(H),H.length){const te=H.find(ne=>ne.isDefault);g(String((te==null?void 0:te._id)||H[0]._id))}else g("")},[s]);const P=()=>{J(""),U("")},D=H=>{const{name:te,value:ne,type:pe,checked:be}=H.target;R(Ee=>({...Ee,[te]:pe==="checkbox"?be:ne}))},b=async H=>{H.preventDefault(),P(),Ae(!0);try{const te=await De.addAddress(z),ne=te!=null&&te.addresses?te:await De.me();p(ne);const pe=ne.addresses||[];f(pe);const be=pe.find(G=>G.fullName===z.fullName&&G.phone===z.phone&&G.addressLine1===z.addressLine1),Ee=pe[pe.length-1],_e=be||Ee;_e!=null&&_e._id&&g(String(_e._id)),k(!1),R({...Ki,fullName:ne.name||"",phone:ne.phone||""}),U("Delivery address saved successfully.")}catch(te){J(te.message)}finally{Ae(!1)}},O=async()=>{var H,te;if(P(),!V.trim())return J("Please enter a coupon code.");if(!o.length)return J("Your cart is empty.");ve(!0);try{const ne=await De.validateCoupon({code:V.trim().toUpperCase(),subtotal:q,items:o.map(Ee=>({product:Ee.product._id||Ee.product.id,productId:Ee.product._id||Ee.product.id,quantity:Ee.quantity,unitPrice:Rn(Ee.product)}))}),pe=ne.coupon||((H=ne.data)==null?void 0:H.coupon)||ne,be=Number(ne.discount??((te=ne.data)==null?void 0:te.discount)??pe.discountAmount??0);if(be<=0)throw new Error(ne.message||"This coupon did not return a valid discount.");W(pe),ie(Math.min(q,be)),Y(V.trim().toUpperCase()),U(`Coupon ${V.toUpperCase()} applied successfully.`)}catch(ne){W(null),ie(0),J(ne.message)}finally{ve(!1)}},me=()=>{W(null),ie(0),Y(""),U("Coupon removed."),J("")},ge=async H=>{if(H.preventDefault(),P(),!o.length)return J("Your cart is empty.");if(o.find(pe=>{var Ee,_e;return!(((Ee=pe.product)==null?void 0:Ee._id)||((_e=pe.product)==null?void 0:_e.id))}))return J("Product ID missing. Please remove this item and add it again from the shop.");const ne=m.find(pe=>String(pe._id)===v);if(!ne&&w)return J("Please save your new address before placing your order.");if(!ne)return J("Please select a delivery address.");Se(!0);try{const pe={items:o.map(_e=>{const G=String(_e.product._id||_e.product.id);return{product:G,productId:G,quantity:Number(_e.quantity),..._e.variant?{variant:_e.variant}:{}}}),shippingAddress:{fullName:ne.fullName,phone:ne.phone,addressLine1:ne.addressLine1,addressLine2:ne.addressLine2,landmark:ne.landmark,city:ne.city,state:ne.state,postalCode:ne.postalCode,country:ne.country},billingAddress:null,couponCode:(X==null?void 0:X.code)||V.trim().toUpperCase()||void 0,paymentMethod:L,customerNote:T},be=await De.createOrder(pe),Ee=be.order||be;if(!(Ee!=null&&Ee._id)&&!(Ee!=null&&Ee.id))throw new Error("Order was submitted but the order ID was not returned.");c(),d(`/orders/${Ee._id||Ee.id}`,{state:{placed:!0}})}catch(pe){J(pe.message||"Unable to place your order.")}finally{Se(!1)}};return o.length?n.createElement(n.Fragment,null,n.createElement(st,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(K,{to:"/cart",className:"hv-checkout-back"},n.createElement(Yt,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(Tt,{size:17}),"Secure checkout")),xe&&n.createElement("div",{className:"hv-checkout-alert error"},n.createElement(Wt,null,xe)),he&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(Ze,{size:17}),he),n.createElement("form",{className:"hv-checkout-layout",onSubmit:ge},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!w&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{P(),R({...Ki,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),k(!0)}},n.createElement(zr,{size:16}),"Add address")),m.length>0&&!w&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map(H=>n.createElement("label",{key:H._id,className:`hv-checkout-address-card ${v===String(H._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:H._id,checked:v===String(H._id),onChange:()=>g(String(H._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(va,{size:16}),H.label||"Address"),H.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),v===String(H._id)&&n.createElement(Ze,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,H.fullName),n.createElement("p",null,H.addressLine1,H.addressLine2&&`, ${H.addressLine2}`,H.landmark&&`, ${H.landmark}`),n.createElement("p",null,H.city,", ",H.state," ",H.postalCode),n.createElement("span",{className:"hv-checkout-phone"},H.phone)))),(!m.length||w)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>k(!1),"aria-label":"Close address form"},n.createElement(ft,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:z.label,onChange:D,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:z.fullName,onChange:D,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:z.phone,onChange:D,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:z.postalCode,onChange:D,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:z.addressLine1,onChange:D,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:z.addressLine2,onChange:D,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:z.landmark,onChange:D,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:z.city,onChange:D,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:z.state,onChange:D,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:z.country,onChange:D,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:z.isDefault,onChange:D}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:we,onClick:b},we?n.createElement(sn,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(zr,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>k(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},Qg.map(H=>{const te=H.icon;return n.createElement("label",{key:H.value,className:`hv-checkout-payment-card ${L===H.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:H.value,checked:L===H.value,onChange:()=>j(H.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(te,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,H.label),n.createElement("span",null,H.description)),L===H.value&&n.createElement(Ze,{size:19,className:"hv-checkout-selected-icon"}))})),L!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(Tt,{size:18}),n.createElement("p",null,"Online payment gateway is not connected to the current API flow. Selecting this option only submits the selected payment method with the order. Do not enable live online payments until gateway initiation and server-side payment verification are implemented."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:T,onChange:H=>A(H.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},T.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Rt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},o.map(H=>{const te=H.product,ne=$o(te);return n.createElement("div",{className:"hv-checkout-product",key:H.key},n.createElement("div",{className:"hv-checkout-product-image"},ne?n.createElement("img",{src:ne,alt:te.name}):n.createElement("span",null,"H"),n.createElement("i",null,H.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,te.name),H.variant&&n.createElement("small",null,"Option: ",H.variant),n.createElement("small",null,He(Rn(te))," each")),n.createElement("strong",{className:"hv-checkout-product-total"},He(Rn(te)*H.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(Dg,{size:17}),n.createElement("strong",null,"Have a promo code?")),X?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(Ze,{size:17}),n.createElement("span",null,n.createElement("strong",null,X.code||V),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:me,"aria-label":"Remove coupon"},n.createElement(ft,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:V,onChange:H=>{Y(H.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:O,disabled:B},B?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(q))),oe>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",He(oe))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-checkout-shipping"},"Calculated by store")),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,He(M))),n.createElement("p",{className:"hv-checkout-total-note"},"Final shipping, tax and coupon amounts are confirmed by the server.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:se||we||B||!v&&m.length>0&&!w||w},se?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(ye,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(an,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(fs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(Tt,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(K,{to:"/cart"},n.createElement(Yt,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
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

    `)):n.createElement(n.Fragment,null,n.createElement(st,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Rt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(K,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(ye,{size:17}))))))}const fa={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Xg(){var M;const o=ln(),{customer:s,setCustomer:c,logout:p}=jt(),[d,m]=y.useState("profile"),[f,v]=y.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[g,w]=y.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[k,z]=y.useState(fa),[R,L]=y.useState(null),[j,T]=y.useState(!1),[A,V]=y.useState(""),[Y,X]=y.useState(""),[W,oe]=y.useState(!1),[ie,xe]=y.useState(!0);y.useEffect(()=>{let P=!0;return De.me().then(D=>{P&&(c(D),v({name:D.name||"",email:D.email||"",phone:D.phone||"",marketingOptIn:!!D.marketingOptIn}))}).catch(D=>{P&&V(D.message)}).finally(()=>{P&&xe(!1)}),()=>{P=!1}},[c]);const J=()=>{V(""),X("")},he=P=>{const{name:D,value:b,type:O,checked:me}=P.target;v(ge=>({...ge,[D]:O==="checkbox"?me:b}))},U=P=>{const{name:D,value:b,type:O,checked:me}=P.target;z(ge=>({...ge,[D]:O==="checkbox"?me:b}))},se=async P=>{P.preventDefault(),oe(!0),J();try{const D=await De.updateMe(f);c(D),X("Your profile has been updated.")}catch(D){V(D.message)}finally{oe(!1)}},Se=async P=>{if(P.preventDefault(),J(),g.newPassword.length<8)return V("New password must be at least 8 characters.");if(g.newPassword!==g.confirmPassword)return V("New passwords do not match.");oe(!0);try{await De.changePassword({currentPassword:g.currentPassword,newPassword:g.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),X("Password updated successfully.")}catch(D){V(D.message)}finally{oe(!1)}},we=P=>{J(),L((P==null?void 0:P._id)||null),z(P?{...fa,...P}:{...fa,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),T(!0)},Ae=async P=>{P.preventDefault(),oe(!0),J();try{R?await De.updateAddress(R,k):await De.addAddress(k);const D=await De.me();c(D),T(!1),L(null),z(fa),X("Address saved successfully.")}catch(D){V(D.message)}finally{oe(!1)}},B=async P=>{if(window.confirm("Delete this saved address?")){J();try{await De.deleteAddress(P);const D=await De.me();c(D),X("Address deleted successfully.")}catch(D){V(D.message)}}},ve=()=>{T(!1),L(null),z(fa)},q=()=>{p(),o("/",{replace:!0})};return ie?n.createElement("div",{className:"page-shell"},n.createElement(sn,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(st,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,((M=s==null?void 0:s.name)==null?void 0:M.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(br,{size:28}))),A&&n.createElement("div",{className:"account-alert error"},n.createElement(Wt,null,A)),Y&&n.createElement("div",{className:"account-alert success"},n.createElement(Ze,{size:17}),Y),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((s==null?void 0:s.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(s==null?void 0:s.name)||"HOVIRA User"),n.createElement("p",null,s==null?void 0:s.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(Tt,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:d==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),J()}},n.createElement(br,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(_o,{size:16})),n.createElement("button",{className:d==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),J(),ve()}},n.createElement(va,{size:19}),n.createElement("span",null,"Address book"),n.createElement(_o,{size:16})),n.createElement(K,{to:"/orders",className:"account-menu-item"},n.createElement(Ea,{size:19}),n.createElement("span",null,"My orders"),n.createElement(ye,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:q},n.createElement(Ng,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(Tt,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},d==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(br,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:se},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:f.name,onChange:he,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(hs,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:f.email,onChange:he,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(wd,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:f.phone,onChange:he,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:f.marketingOptIn,onChange:he}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jp,{size:17}),W?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(an,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Se},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:g.currentPassword,onChange:P=>w({...g,currentPassword:P.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:g.newPassword,onChange:P=>w({...g,newPassword:P.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:g.confirmPassword,onChange:P=>w({...g,confirmPassword:P.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:W},n.createElement(an,{size:16}),W?"Updating...":"Update password")))),d==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!j&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>we(null)},n.createElement(zr,{size:17}),"Add address")),j&&n.createElement("form",{className:"account-address-form",onSubmit:Ae},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,R?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:ve,className:"account-close-button"},n.createElement(ft,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:k.label,onChange:U,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:k.fullName,onChange:U,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:k.phone,onChange:U,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:k.postalCode,onChange:U,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:k.addressLine1,onChange:U,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:k.addressLine2,onChange:U,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:k.landmark,onChange:U,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:k.city,onChange:U,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:k.state,onChange:U,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:k.country,onChange:U,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:k.isDefault,onChange:U}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jp,{size:16}),W?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:ve},"Cancel"))),((s==null?void 0:s.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},s.addresses.map(P=>n.createElement("div",{className:"account-address-card",key:P._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(va,{size:16}),P.label||"Address"),P.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(Ze,{size:13}),"Default")),n.createElement("h3",null,P.fullName),n.createElement("p",null,P.addressLine1,P.addressLine2&&`, ${P.addressLine2}`,P.landmark&&`, ${P.landmark}`,n.createElement("br",null),P.city,", ",P.state," ",P.postalCode,n.createElement("br",null),P.country,n.createElement("br",null),P.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>we(P)},n.createElement(Tg,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>B(P._id)},n.createElement(bd,{size:14}),"Delete"))))):!j&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(va,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>we(null)},n.createElement(zr,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
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

          
          `))}function Zg(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState("");return y.useEffect(()=>{De.orders().then(s).catch(f=>m(f.message)).finally(()=>p(!1))},[]),n.createElement(n.Fragment,null,n.createElement(st,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),d&&n.createElement(Wt,null,d),c?n.createElement(sn,null):o.length?n.createElement("div",{className:"orders-list"},o.map(f=>n.createElement(K,{to:`/orders/${f._id||f.id}`,className:"order-row",key:f._id||f.id},n.createElement("div",{className:"order-icon"},n.createElement(Ea,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",f.orderNumber||f._id||f.id),n.createElement("small",null,new Date(f.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(f.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${f.status}`},f.status||"pending"),n.createElement("small",null,f.paymentStatus||"payment pending")),n.createElement("strong",null,He(f.total)),n.createElement(ye,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(Ea,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(ye,{size:17})))))}const Up=[{key:"pending",label:"Order placed",description:"We have received your order.",icon:Rt},{key:"confirmed",label:"Confirmed",description:"Your order has been confirmed.",icon:Ze},{key:"processing",label:"Processing",description:"Your items are being prepared.",icon:Ea},{key:"shipped",label:"Shipped",description:"Your order is on its way.",icon:Cr},{key:"delivered",label:"Delivered",description:"Your order has been delivered.",icon:Ze}],Jg={placed:"pending",order_placed:"pending",accepted:"confirmed",packed:"processing",dispatched:"shipped",out_for_delivery:"shipped",complete:"delivered",completed:"delivered"},Vp=(o="")=>{const s=String(o).toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");return Jg[s]||s},Po=o=>{if(!o)return"";const s=new Date(o);return Number.isNaN(s.getTime())?"":new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}).format(s)},Do=(o="")=>String(o).replace(/[_-]/g," ").replace(/\b\w/g,s=>s.toUpperCase());function ev(){var he;const{id:o}=td(),s=qt(),[c,p]=y.useState(null),[d,m]=y.useState(!0),[f,v]=y.useState(!1),[g,w]=y.useState(""),[k,z]=y.useState(!1),R=y.useCallback(async(U=!1)=>{U?v(!0):m(!0),w("");try{const se=await De.order(o);p(se)}catch(se){w((se==null?void 0:se.message)||"Unable to load this order.")}finally{m(!1),v(!1)}},[o]);y.useEffect(()=>{R()},[R]);const L=(c==null?void 0:c.orderNumber)||(c==null?void 0:c._id)||o,j=Vp((c==null?void 0:c.status)||"pending"),T=j==="cancelled",A=Up.findIndex(U=>U.key===j),V=y.useMemo(()=>Array.isArray(c==null?void 0:c.statusHistory)?[...c.statusHistory].sort((U,se)=>new Date(U.createdAt||U.date||0)-new Date(se.createdAt||se.date||0)):[],[c==null?void 0:c.statusHistory]),Y=async()=>{try{await navigator.clipboard.writeText(String(L)),z(!0),window.setTimeout(()=>z(!1),1800)}catch{w("Could not copy the order number. Please copy it manually.")}},X=()=>window.print();if(d)return n.createElement("div",{className:"page-shell order-loading"},n.createElement(sn,{label:"Loading your order…"}));if(g&&!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Wt,null,g),n.createElement("button",{className:"od-btn od-btn-primary",onClick:()=>R()},n.createElement(ss,{size:16})," Try again"),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Yt,{size:16})," Back to orders"));if(!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Wt,null,"Order not found."),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Yt,{size:16})," Back to orders"));const W=c.items||[],oe=c.shippingAddress||{},ie=Vp(c.paymentStatus||"pending"),xe=["paid","completed","success","successful"].includes(ie),J=c.trackingUrl||c.trackingURL||"";return n.createElement(n.Fragment,null,n.createElement(st,{title:`Order ${L} | HOVIRA`,description:"View your HOVIRA order details, payment information and delivery progress."}),n.createElement("main",{className:"page-shell standard-page od-page"},n.createElement("div",{className:"od-topbar"},n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Yt,{size:16})," All orders"),n.createElement("div",{className:"od-top-actions"},n.createElement("button",{className:"od-btn od-btn-light",onClick:()=>R(!0),disabled:f},n.createElement(ss,{size:15,className:f?"od-spinning":""}),f?"Refreshing":"Refresh status"),n.createElement("button",{className:"od-btn od-btn-light od-print-btn",onClick:X},n.createElement(Rg,{size:15})," Print receipt"))),((he=s.state)==null?void 0:he.placed)&&n.createElement("div",{className:"od-success-banner"},n.createElement("span",{className:"od-success-icon"},n.createElement(Ze,{size:20})),n.createElement("div",null,n.createElement("strong",null,"Your order has been placed!"),n.createElement("p",null,"Thank you for choosing HOVIRA. We’ll keep you updated on its progress."))),g&&n.createElement("div",{className:"od-inline-error"},g),n.createElement("header",{className:"od-hero"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"YOUR HOVIRA ORDER"),n.createElement("h1",null,"Order ",n.createElement("em",null,"details")),n.createElement("p",{className:"od-order-meta"},"Order number ",n.createElement("strong",null,L),n.createElement("button",{className:"od-copy-btn",onClick:Y,"aria-label":"Copy order number"},n.createElement(yg,{size:14})," ",k?"Copied":"Copy")),c.createdAt&&n.createElement("p",{className:"od-date"},"Placed on ",Po(c.createdAt))),n.createElement("div",{className:`od-status-card ${T?"is-cancelled":""}`},n.createElement("span",{className:"od-status-label"},"CURRENT STATUS"),n.createElement("strong",null,Do(c.status||"pending")),n.createElement("span",null,T?"This order has been cancelled.":j==="delivered"?"Your order has arrived.":"We’re taking care of your order."))),!T&&n.createElement("section",{className:"od-card od-tracking-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"THE JOURNEY"),n.createElement("h2",null,"Order progress")),c.estimatedDelivery&&n.createElement("span",{className:"od-delivery-date"},n.createElement(Cr,{size:15})," Expected ",Po(c.estimatedDelivery))),n.createElement("div",{className:"od-progress-track"},Up.map((U,se)=>{const Se=U.icon,we=A>=se&&A!==-1,Ae=A===se;return n.createElement("div",{className:`od-progress-step ${we?"is-done":""} ${Ae?"is-active":""}`,key:U.key},n.createElement("div",{className:"od-step-icon"},n.createElement(Se,{size:18})),n.createElement("div",{className:"od-step-copy"},n.createElement("strong",null,U.label),n.createElement("span",null,Ae?"In progress":we?"Completed":U.description)))})),c.trackingNumber&&n.createElement("div",{className:"od-tracking-info"},n.createElement("div",null,n.createElement("span",null,"Tracking number"),n.createElement("strong",null,c.trackingNumber)),c.carrier&&n.createElement("div",null,n.createElement("span",null,"Delivery partner"),n.createElement("strong",null,c.carrier)),J&&n.createElement("a",{href:J,target:"_blank",rel:"noreferrer",className:"od-track-link"},"Track shipment ",n.createElement(Eg,{size:14})))),n.createElement("div",{className:"od-content-grid"},n.createElement("div",{className:"od-main-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"IN YOUR PACKAGE"),n.createElement("h2",null,"Items ordered ",n.createElement("span",{className:"od-count"},W.length)))),n.createElement("div",{className:"od-items-list"},W.map((U,se)=>n.createElement("div",{className:"od-product-row",key:U._id||U.product||se},n.createElement("div",{className:"od-product-image"},U.image?n.createElement("img",{src:U.image,alt:U.name||"HOVIRA product"}):n.createElement("span",null,"H")),n.createElement("div",{className:"od-product-info"},n.createElement("strong",null,U.name||"Product"),U.variant&&n.createElement("span",{className:"od-variant"},U.variant),n.createElement("span",null,"Quantity: ",U.quantity||1),U.sku&&n.createElement("span",{className:"od-sku"},"SKU: ",U.sku)),n.createElement("strong",{className:"od-item-price"},He(U.lineTotal??Number(U.unitPrice||0)*Number(U.quantity||1)))))),n.createElement("div",{className:"od-price-summary"},n.createElement("div",null,n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(c.subtotal||0))),Number(c.discount)>0&&n.createElement("div",{className:"od-discount"},n.createElement("span",null,"Discount ",c.couponCode?`(${c.couponCode})`:""),n.createElement("strong",null,"−",He(c.discount))),n.createElement("div",null,n.createElement("span",null,"Shipping"),n.createElement("strong",null,Number(c.shippingFee)===0?"Free":He(c.shippingFee||0))),Number(c.tax)>0&&n.createElement("div",null,n.createElement("span",null,"Tax"),n.createElement("strong",null,He(c.tax))),Number(c.codFee)>0&&n.createElement("div",null,n.createElement("span",null,"COD fee"),n.createElement("strong",null,He(c.codFee))),n.createElement("div",{className:"od-grand-total"},n.createElement("span",null,"Total paid / payable"),n.createElement("strong",null,He(c.total||0))))),V.length>0&&n.createElement("section",{className:"od-card od-history-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"ORDER UPDATES"),n.createElement("h2",null,"Activity history"))),n.createElement("div",{className:"od-history-list"},V.map((U,se)=>n.createElement("div",{className:"od-history-item",key:U._id||se},n.createElement("span",{className:"od-history-dot"},n.createElement(Lp,{size:13})),n.createElement("div",null,n.createElement("strong",null,Do(U.status||"Update")),U.note&&n.createElement("p",null,U.note),n.createElement("small",null,Po(U.createdAt||U.date)))))))),n.createElement("aside",{className:"od-side-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"DELIVERING TO"),n.createElement("h2",null,"Shipping address")),n.createElement("span",{className:"od-heading-icon"},n.createElement(va,{size:17}))),n.createElement("div",{className:"od-address"},n.createElement("strong",null,oe.fullName||"Customer"),oe.addressLine1&&n.createElement("span",null,oe.addressLine1),oe.addressLine2&&n.createElement("span",null,oe.addressLine2),n.createElement("span",null,[oe.city,oe.state,oe.postalCode].filter(Boolean).join(", ")),oe.country&&n.createElement("span",null,oe.country),oe.phone&&n.createElement("span",{className:"od-phone"},oe.phone))),n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"SECURE CHECKOUT"),n.createElement("h2",null,"Payment details")),n.createElement("span",{className:"od-heading-icon"},n.createElement(xd,{size:17}))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Method"),n.createElement("strong",null,Do(c.paymentMethod||"Not specified"))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`od-payment-badge ${xe?"is-paid":ie==="failed"?"is-failed":""}`},xe?n.createElement(Tt,{size:13}):ie==="failed"?n.createElement(xg,{size:13}):n.createElement(Lp,{size:13}),Do(c.paymentStatus||"Pending"))),c.paymentId&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment ID"),n.createElement("strong",{className:"od-payment-id"},c.paymentId)),c.paidAt&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Paid on"),n.createElement("strong",null,Po(c.paidAt)))),n.createElement("div",{className:"od-help-card"},n.createElement("span",{className:"od-help-icon"},n.createElement(Ea,{size:20})),n.createElement("strong",null,"Need help with your order?"),n.createElement("p",null,"Our team is here to help with any questions about your purchase."),n.createElement(K,{to:"/contact",className:"od-help-link"},"Contact support ",n.createElement(ye,{size:15}))))),n.createElement("div",{className:"od-bottom-actions"},n.createElement(K,{to:"/shop",className:"od-btn od-btn-primary"},"Continue shopping ",n.createElement(ye,{size:16})),n.createElement(K,{to:"/orders",className:"od-btn od-btn-outline"},"View all orders"))),n.createElement("style",null,`

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

          
          `))}function tv(){return n.createElement(n.Fragment,null,n.createElement(st,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(K,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(ye,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(wr,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(it,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(Pg,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(ye,{size:17}))))}function $p({type:o}){const s=o==="privacy";return n.createElement(n.Fragment,null,n.createElement(st,{title:s?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,s?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,s?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),s?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function nv(){return n.createElement(n.Fragment,null,n.createElement(st,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(K,{className:"btn btn-dark",to:"/"},n.createElement(Yt,{size:16})," Back home")))}function Fo({children:o}){const{customer:s,authReady:c}=jt();return c?s?o:n.createElement(xf,{to:"/login",replace:!0}):n.createElement(sn,{label:"Checking your account..."})}function rv(){const{appReady:o,appError:s,retryInitialLoad:c}=jt();return o?n.createElement(wf,null,n.createElement(Qe,{element:n.createElement(_g,null)},n.createElement(Qe,{index:!0,element:n.createElement(Bg,null)}),n.createElement(Qe,{path:"shop",element:n.createElement($g,null)}),n.createElement(Qe,{path:"product/:slugOrId",element:n.createElement(Yg,null)}),n.createElement(Qe,{path:"login",element:n.createElement(Wg,null)}),n.createElement(Qe,{path:"signup",element:n.createElement(Hp,null)}),n.createElement(Qe,{path:"register",element:n.createElement(Hp,null)}),n.createElement(Qe,{path:"cart",element:n.createElement(Gg,null)}),n.createElement(Qe,{path:"wishlist",element:n.createElement(qg,null)}),n.createElement(Qe,{path:"checkout",element:n.createElement(Fo,null,n.createElement(Kg,null))}),n.createElement(Qe,{path:"account",element:n.createElement(Fo,null,n.createElement(Xg,null))}),n.createElement(Qe,{path:"orders",element:n.createElement(Fo,null,n.createElement(Zg,null))}),n.createElement(Qe,{path:"orders/:id",element:n.createElement(Fo,null,n.createElement(ev,null))}),n.createElement(Qe,{path:"about",element:n.createElement(tv,null)}),n.createElement(Qe,{path:"privacy",element:n.createElement($p,{type:"privacy"})}),n.createElement(Qe,{path:"terms",element:n.createElement($p,{type:"terms"})}),n.createElement(Qe,{path:"*",element:n.createElement(nv,null)}))):s?n.createElement("div",{className:"page-shell"},n.createElement("div",{className:"loading-error"},n.createElement("h2",null,"Unable to load HOVIRA"),n.createElement("p",null,s),n.createElement("button",{onClick:c},"Try Again"))):n.createElement(sn,{label:"Preparing your HOVIRA experience..."})}function av(){const{pathname:o}=qt();return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}Ah.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(dd,null,n.createElement(Rf,null,n.createElement(av,null),n.createElement(ug,null,n.createElement(rv,null))))));
