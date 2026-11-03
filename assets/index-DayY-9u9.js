var Ef=Object.defineProperty;var wf=(o,s,c)=>s in o?Ef(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c;var nn=(o,s,c)=>wf(o,typeof s!="symbol"?s+"":s,c);function bf(o,s){for(var c=0;c<s.length;c++){const p=s[c];if(typeof p!="string"&&!Array.isArray(p)){for(const d in p)if(d!=="default"&&!(d in o)){const m=Object.getOwnPropertyDescriptor(p,d);m&&Object.defineProperty(o,d,m.get?m:{enumerable:!0,get:()=>p[d]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))p(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function Bo(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var _l={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function kf(){if(cp)return be;cp=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.iterator;function O(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,T={};function A(b,R,fe){this.props=b,this.context=R,this.refs=T,this.updater=fe||L}A.prototype.isReactComponent={},A.prototype.setState=function(b,R){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,R,"setState")},A.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function U(){}U.prototype=A.prototype;function Y(b,R,fe){this.props=b,this.context=R,this.refs=T,this.updater=fe||L}var K=Y.prototype=new U;K.constructor=Y,j(K,A.prototype),K.isPureReactComponent=!0;var W=Array.isArray,ae=Object.prototype.hasOwnProperty,ie={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function J(b,R,fe){var ge,B={},te=null,ne=null;if(R!=null)for(ge in R.ref!==void 0&&(ne=R.ref),R.key!==void 0&&(te=""+R.key),R)ae.call(R,ge)&&!ye.hasOwnProperty(ge)&&(B[ge]=R[ge]);var ue=arguments.length-2;if(ue===1)B.children=fe;else if(1<ue){for(var we=Array(ue),Ee=0;Ee<ue;Ee++)we[Ee]=arguments[Ee+2];B.children=we}if(b&&b.defaultProps)for(ge in ue=b.defaultProps,ue)B[ge]===void 0&&(B[ge]=ue[ge]);return{$$typeof:o,type:b,key:te,ref:ne,props:B,_owner:ie.current}}function me(b,R){return{$$typeof:o,type:b.type,key:R,ref:b.ref,props:b.props,_owner:b._owner}}function H(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function pe(b){var R={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return R[fe]})}var Ae=/\/+/g;function M(b,R){return typeof b=="object"&&b!==null&&b.key!=null?pe(""+b.key):R.toString(36)}function xe(b,R,fe,ge,B){var te=typeof b;(te==="undefined"||te==="boolean")&&(b=null);var ne=!1;if(b===null)ne=!0;else switch(te){case"string":case"number":ne=!0;break;case"object":switch(b.$$typeof){case o:case s:ne=!0}}if(ne)return ne=b,B=B(ne),b=ge===""?"."+M(ne,0):ge,W(B)?(fe="",b!=null&&(fe=b.replace(Ae,"$&/")+"/"),xe(B,R,fe,"",function(Ee){return Ee})):B!=null&&(H(B)&&(B=me(B,fe+(!B.key||ne&&ne.key===B.key?"":(""+B.key).replace(Ae,"$&/")+"/")+b)),R.push(B)),1;if(ne=0,ge=ge===""?".":ge+":",W(b))for(var ue=0;ue<b.length;ue++){te=b[ue];var we=ge+M(te,ue);ne+=xe(te,R,fe,we,B)}else if(we=O(b),typeof we=="function")for(b=we.call(b),ue=0;!(te=b.next()).done;)te=te.value,we=ge+M(te,ue++),ne+=xe(te,R,fe,we,B);else if(te==="object")throw R=String(b),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ne}function X(b,R,fe){if(b==null)return b;var ge=[],B=0;return xe(b,ge,"","",function(te){return R.call(fe,te,B++)}),ge}function ve(b){if(b._status===-1){var R=b._result;R=R(),R.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=R)}if(b._status===1)return b._result.default;throw b._result}var ze={current:null},$={transition:null},F={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:$,ReactCurrentOwner:ie};function P(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:X,forEach:function(b,R,fe){X(b,function(){R.apply(this,arguments)},fe)},count:function(b){var R=0;return X(b,function(){R++}),R},toArray:function(b){return X(b,function(R){return R})||[]},only:function(b){if(!H(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},be.Component=A,be.Fragment=c,be.Profiler=d,be.PureComponent=Y,be.StrictMode=p,be.Suspense=g,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,be.act=P,be.cloneElement=function(b,R,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ge=j({},b.props),B=b.key,te=b.ref,ne=b._owner;if(R!=null){if(R.ref!==void 0&&(te=R.ref,ne=ie.current),R.key!==void 0&&(B=""+R.key),b.type&&b.type.defaultProps)var ue=b.type.defaultProps;for(we in R)ae.call(R,we)&&!ye.hasOwnProperty(we)&&(ge[we]=R[we]===void 0&&ue!==void 0?ue[we]:R[we])}var we=arguments.length-2;if(we===1)ge.children=fe;else if(1<we){ue=Array(we);for(var Ee=0;Ee<we;Ee++)ue[Ee]=arguments[Ee+2];ge.children=ue}return{$$typeof:o,type:b.type,key:B,ref:te,props:ge,_owner:ne}},be.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:m,_context:b},b.Consumer=b},be.createElement=J,be.createFactory=function(b){var R=J.bind(null,b);return R.type=b,R},be.createRef=function(){return{current:null}},be.forwardRef=function(b){return{$$typeof:v,render:b}},be.isValidElement=H,be.lazy=function(b){return{$$typeof:k,_payload:{_status:-1,_result:b},_init:ve}},be.memo=function(b,R){return{$$typeof:w,type:b,compare:R===void 0?null:R}},be.startTransition=function(b){var R=$.transition;$.transition={};try{b()}finally{$.transition=R}},be.unstable_act=P,be.useCallback=function(b,R){return ze.current.useCallback(b,R)},be.useContext=function(b){return ze.current.useContext(b)},be.useDebugValue=function(){},be.useDeferredValue=function(b){return ze.current.useDeferredValue(b)},be.useEffect=function(b,R){return ze.current.useEffect(b,R)},be.useId=function(){return ze.current.useId()},be.useImperativeHandle=function(b,R,fe){return ze.current.useImperativeHandle(b,R,fe)},be.useInsertionEffect=function(b,R){return ze.current.useInsertionEffect(b,R)},be.useLayoutEffect=function(b,R){return ze.current.useLayoutEffect(b,R)},be.useMemo=function(b,R){return ze.current.useMemo(b,R)},be.useReducer=function(b,R,fe){return ze.current.useReducer(b,R,fe)},be.useRef=function(b){return ze.current.useRef(b)},be.useState=function(b){return ze.current.useState(b)},be.useSyncExternalStore=function(b,R,fe){return ze.current.useSyncExternalStore(b,R,fe)},be.useTransition=function(){return ze.current.useTransition()},be.version="18.3.1",be}var up;function $p(){return up||(up=1,_l.exports=kf()),_l.exports}var y=$p();const n=Bo(y),zf=bf({__proto__:null,default:n},[y]);var Oo={},jl={exports:{}},mt={},Bl={exports:{}},Hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function Nf(){return pp||(pp=1,(function(o){function s($,F){var P=$.length;$.push(F);e:for(;0<P;){var b=P-1>>>1,R=$[b];if(0<d(R,F))$[b]=F,$[P]=R,P=b;else break e}}function c($){return $.length===0?null:$[0]}function p($){if($.length===0)return null;var F=$[0],P=$.pop();if(P!==F){$[0]=P;e:for(var b=0,R=$.length,fe=R>>>1;b<fe;){var ge=2*(b+1)-1,B=$[ge],te=ge+1,ne=$[te];if(0>d(B,P))te<R&&0>d(ne,B)?($[b]=ne,$[te]=P,b=te):($[b]=B,$[ge]=P,b=ge);else if(te<R&&0>d(ne,P))$[b]=ne,$[te]=P,b=te;else break e}}return F}function d($,F){var P=$.sortIndex-F.sortIndex;return P!==0?P:$.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var h=Date,v=h.now();o.unstable_now=function(){return h.now()-v}}var g=[],w=[],k=1,z=null,O=3,L=!1,j=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K($){for(var F=c(w);F!==null;){if(F.callback===null)p(w);else if(F.startTime<=$)p(w),F.sortIndex=F.expirationTime,s(g,F);else break;F=c(w)}}function W($){if(T=!1,K($),!j)if(c(g)!==null)j=!0,ve(ae);else{var F=c(w);F!==null&&ze(W,F.startTime-$)}}function ae($,F){j=!1,T&&(T=!1,U(J),J=-1),L=!0;var P=O;try{for(K(F),z=c(g);z!==null&&(!(z.expirationTime>F)||$&&!pe());){var b=z.callback;if(typeof b=="function"){z.callback=null,O=z.priorityLevel;var R=b(z.expirationTime<=F);F=o.unstable_now(),typeof R=="function"?z.callback=R:z===c(g)&&p(g),K(F)}else p(g);z=c(g)}if(z!==null)var fe=!0;else{var ge=c(w);ge!==null&&ze(W,ge.startTime-F),fe=!1}return fe}finally{z=null,O=P,L=!1}}var ie=!1,ye=null,J=-1,me=5,H=-1;function pe(){return!(o.unstable_now()-H<me)}function Ae(){if(ye!==null){var $=o.unstable_now();H=$;var F=!0;try{F=ye(!0,$)}finally{F?M():(ie=!1,ye=null)}}else ie=!1}var M;if(typeof Y=="function")M=function(){Y(Ae)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,X=xe.port2;xe.port1.onmessage=Ae,M=function(){X.postMessage(null)}}else M=function(){A(Ae,0)};function ve($){ye=$,ie||(ie=!0,M())}function ze($,F){J=A(function(){$(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function($){$.callback=null},o.unstable_continueExecution=function(){j||L||(j=!0,ve(ae))},o.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<$?Math.floor(1e3/$):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_getFirstCallbackNode=function(){return c(g)},o.unstable_next=function($){switch(O){case 1:case 2:case 3:var F=3;break;default:F=O}var P=O;O=F;try{return $()}finally{O=P}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function($,F){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var P=O;O=$;try{return F()}finally{O=P}},o.unstable_scheduleCallback=function($,F,P){var b=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?b+P:b):P=b,$){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=P+R,$={id:k++,callback:F,priorityLevel:$,startTime:P,expirationTime:R,sortIndex:-1},P>b?($.sortIndex=P,s(w,$),c(g)===null&&$===c(w)&&(T?(U(J),J=-1):T=!0,ze(W,P-b))):($.sortIndex=R,s(g,$),j||L||(j=!0,ve(ae))),$},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function($){var F=O;return function(){var P=O;O=F;try{return $.apply(this,arguments)}finally{O=P}}}})(Hl)),Hl}var dp;function Sf(){return dp||(dp=1,Bl.exports=Nf()),Bl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function Cf(){if(mp)return mt;mp=1;var o=$p(),s=Sf();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,d={};function m(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(d[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},z={};function O(e){return g.call(z,e)?!0:g.call(k,e)?!1:w.test(e)?z[e]=!0:(k[e]=!0,!1)}function L(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,r,a){if(t===null||typeof t>"u"||L(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,a,i,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U,Y);A[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U,Y);A[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U,Y);A[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,r,a){var i=A.hasOwnProperty(t)?A[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,r,i,a)&&(r=null),a||i===null?O(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var W=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),pe=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),$=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,b;function R(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var fe=!1;function ge(e,t){if(!e||fe)return"";fe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var a=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){a=C}e.call(t.prototype)}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),l=a.stack.split(`
`),u=i.length-1,f=l.length-1;1<=u&&0<=f&&i[u]!==l[f];)f--;for(;1<=u&&0<=f;u--,f--)if(i[u]!==l[f]){if(u!==1||f!==1)do if(u--,f--,0>f||i[u]!==l[f]){var x=`
`+i[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=f);break}}}finally{fe=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function B(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case ie:return"Portal";case me:return"Profiler";case J:return"StrictMode";case M:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case H:return(e._context.displayName||"Context")+".Provider";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||(e._valueTracker=Ee(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=we(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function de(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yt(e,t){var r=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gs(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function Wo(e,t){vs(e,t);var r=ue(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Go(e,t.type,r):t.hasOwnProperty("defaultValue")&&Go(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Go(e,t,r){(t!=="number"||de(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ar=Array.isArray;function Gn(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(Ar(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function Es(e,t){var r=ue(t.value),a=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,ks=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function zs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=zs(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var zd=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,qn=null,Qn=null;function Ss(e){if(e=Zr(e)){if(typeof ei!="function")throw Error(c(280));var t=e.stateNode;t&&(t=$a(t),ei(e.stateNode,e.type,t))}}function Cs(e){qn?Qn?Qn.push(e):Qn=[e]:qn=e}function As(){if(qn){var e=qn,t=Qn;if(Qn=qn=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function Ts(e,t){return e(t)}function Os(){}var ti=!1;function Rs(e,t,r){if(ti)return e(t,r);ti=!0;try{return Ts(e,t,r)}finally{ti=!1,(qn!==null||Qn!==null)&&(Os(),As())}}function Rr(e,t){var r=e.stateNode;if(r===null)return null;var a=$a(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var ni=!1;if(v)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ni=!1}function Nd(e,t,r,a,i,l,u,f,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(I){this.onError(I)}}var Fr=!1,ba=null,ka=!1,ri=null,Sd={onError:function(e){Fr=!0,ba=e}};function Cd(e,t,r,a,i,l,u,f,x){Fr=!1,ba=null,Nd.apply(Sd,arguments)}function Ad(e,t,r,a,i,l,u,f,x){if(Cd.apply(this,arguments),Fr){if(Fr){var C=ba;Fr=!1,ba=null}else throw Error(c(198));ka||(ka=!0,ri=C)}}function Rn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(Rn(e)!==e)throw Error(c(188))}function Td(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Fs(i),e;if(l===a)return Fs(i),t;l=l.sibling}throw Error(c(188))}if(r.return!==a.return)r=i,a=l;else{for(var u=!1,f=i.child;f;){if(f===r){u=!0,r=i,a=l;break}if(f===a){u=!0,a=i,r=l;break}f=f.sibling}if(!u){for(f=l.child;f;){if(f===r){u=!0,r=l,a=i;break}if(f===a){u=!0,a=l,r=i;break}f=f.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==a)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Ds(e){return e=Td(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Ls=s.unstable_scheduleCallback,Ms=s.unstable_cancelCallback,Od=s.unstable_shouldYield,Rd=s.unstable_requestPaint,je=s.unstable_now,Pd=s.unstable_getCurrentPriorityLevel,ai=s.unstable_ImmediatePriority,_s=s.unstable_UserBlockingPriority,za=s.unstable_NormalPriority,Fd=s.unstable_LowPriority,js=s.unstable_IdlePriority,Na=null,jt=null;function Dd(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Md,Id=Math.log,Ld=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Id(e)/Ld|0)|0}var Sa=64,Ca=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,u=r&268435455;if(u!==0){var f=u&~i;f!==0?a=Dr(f):(l&=u,l!==0&&(a=Dr(l)))}else u=r&~i,u!==0?a=Dr(u):l!==0&&(a=Dr(l));if(a===0)return 0;if(t!==0&&t!==a&&(t&i)===0&&(i=a&-a,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Ot(t),i=1<<r,a|=e[r],t&=~i;return a}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ot(l),f=1<<u,x=i[u];x===-1?((f&r)===0||(f&a)!==0)&&(i[u]=_d(f,t)):x<=t&&(e.expiredLanes|=f),l&=~f}}function oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=Sa;return Sa<<=1,(Sa&4194240)===0&&(Sa=64),e}function ii(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ir(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=r}function Bd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ot(r),l=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~l}}function li(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Ot(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var Ce=0;function Hs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Us,si,Vs,$s,Ys,ci=!1,Ta=[],sn=null,cn=null,un=null,Lr=new Map,Mr=new Map,pn=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function _r(e,t,r,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&si(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ud(e,t,r,a,i){switch(t){case"focusin":return sn=_r(sn,e,t,r,a,i),!0;case"dragenter":return cn=_r(cn,e,t,r,a,i),!0;case"mouseover":return un=_r(un,e,t,r,a,i),!0;case"pointerover":var l=i.pointerId;return Lr.set(l,_r(Lr.get(l)||null,e,t,r,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Mr.set(l,_r(Mr.get(l)||null,e,t,r,a,i)),!0}return!1}function Gs(e){var t=Pn(e.target);if(t!==null){var r=Rn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ps(r),t!==null){e.blockedOn=t,Ys(e.priority,function(){Vs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Zo=a,r.target.dispatchEvent(a),Zo=null}else return t=Zr(r),t!==null&&si(t),e.blockedOn=r,!1;t.shift()}return!0}function qs(e,t,r){Oa(e)&&r.delete(t)}function Vd(){ci=!1,sn!==null&&Oa(sn)&&(sn=null),cn!==null&&Oa(cn)&&(cn=null),un!==null&&Oa(un)&&(un=null),Lr.forEach(qs),Mr.forEach(qs)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vd)))}function Br(e){function t(i){return jr(i,e)}if(0<Ta.length){jr(Ta[0],e);for(var r=1;r<Ta.length;r++){var a=Ta[r];a.blockedOn===e&&(a.blockedOn=null)}}for(sn!==null&&jr(sn,e),cn!==null&&jr(cn,e),un!==null&&jr(un,e),Lr.forEach(t),Mr.forEach(t),r=0;r<pn.length;r++)a=pn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)Gs(r),r.blockedOn===null&&pn.shift()}var Kn=W.ReactCurrentBatchConfig,Ra=!0;function $d(e,t,r,a){var i=Ce,l=Kn.transition;Kn.transition=null;try{Ce=1,ui(e,t,r,a)}finally{Ce=i,Kn.transition=l}}function Yd(e,t,r,a){var i=Ce,l=Kn.transition;Kn.transition=null;try{Ce=4,ui(e,t,r,a)}finally{Ce=i,Kn.transition=l}}function ui(e,t,r,a){if(Ra){var i=pi(e,t,r,a);if(i===null)Ai(e,t,a,Pa,r),Ws(e,a);else if(Ud(i,e,t,r,a))a.stopPropagation();else if(Ws(e,a),t&4&&-1<Hd.indexOf(e)){for(;i!==null;){var l=Zr(i);if(l!==null&&Us(l),l=pi(e,t,r,a),l===null&&Ai(e,t,a,Pa,r),l===i)break;i=l}i!==null&&a.stopPropagation()}else Ai(e,t,a,null,r)}}var Pa=null;function pi(e,t,r,a){if(Pa=null,e=Jo(a),e=Pn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ps(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function Qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pd()){case ai:return 1;case _s:return 4;case za:case Fd:return 16;case js:return 536870912;default:return 16}default:return 16}}var dn=null,di=null,Fa=null;function Ks(){if(Fa)return Fa;var e,t=di,r=t.length,a,i="value"in dn?dn.value:dn.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(a=1;a<=u&&t[r-a]===i[l-a];a++);return Fa=i.slice(e,1<a?1-a:void 0)}function Da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function Xs(){return!1}function ht(e){function t(r,a,i,l,u){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ia:Xs,this.isPropagationStopped=Xs,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=ht(Xn),Hr=P({},Xn,{view:0,detail:0}),Wd=ht(Hr),fi,hi,Ur,La=P({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(fi=e.screenX-Ur.screenX,hi=e.screenY-Ur.screenY):hi=fi=0,Ur=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),Zs=ht(La),Gd=P({},La,{dataTransfer:0}),qd=ht(Gd),Qd=P({},Hr,{relatedTarget:0}),gi=ht(Qd),Kd=P({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=ht(Kd),Zd=P({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=ht(Zd),em=P({},Xn,{data:0}),Js=ht(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function vi(){return am}var om=P({},Hr,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?Da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=ht(om),lm=P({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=ht(lm),sm=P({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),cm=ht(sm),um=P({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=ht(um),dm=P({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=ht(dm),fm=[9,13,27,32],xi=v&&"CompositionEvent"in window,Vr=null;v&&"documentMode"in document&&(Vr=document.documentMode);var hm=v&&"TextEvent"in window&&!Vr,tc=v&&(!xi||Vr&&8<Vr&&11>=Vr),nc=" ",rc=!1;function ac(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function gm(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(rc=!0,nc);case"textInput":return e=t.data,e===nc&&rc?null:e;default:return null}}function vm(e,t){if(Zn)return e==="compositionend"||!xi&&ac(e,t)?(e=Ks(),Fa=di=dn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tc&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function lc(e,t,r,a){Cs(a),t=Ha(t,"onChange"),0<t.length&&(r=new mi("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var $r=null,Yr=null;function ym(e){Nc(e,0)}function Ma(e){var t=rr(e);if(G(t))return e}function Em(e,t){if(e==="change")return t}var sc=!1;if(v){var yi;if(v){var Ei="oninput"in document;if(!Ei){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Ei=typeof cc.oninput=="function"}yi=Ei}else yi=!1;sc=yi&&(!document.documentMode||9<document.documentMode)}function uc(){$r&&($r.detachEvent("onpropertychange",pc),Yr=$r=null)}function pc(e){if(e.propertyName==="value"&&Ma(Yr)){var t=[];lc(t,Yr,e,Jo(e)),Rs(ym,t)}}function wm(e,t,r){e==="focusin"?(uc(),$r=t,Yr=r,$r.attachEvent("onpropertychange",pc)):e==="focusout"&&uc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Yr)}function km(e,t){if(e==="click")return Ma(t)}function zm(e,t){if(e==="input"||e==="change")return Ma(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Nm;function Wr(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!g.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var r=dc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dc(r)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=de(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=hc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fc(r.ownerDocument.documentElement,r)){if(a!==null&&wi(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=mc(r,l);var u=mc(r,a);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=v&&"documentMode"in document&&11>=document.documentMode,Jn=null,bi=null,Gr=null,ki=!1;function gc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ki||Jn==null||Jn!==de(a)||(a=Jn,"selectionStart"in a&&wi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gr&&Wr(Gr,a)||(Gr=a,a=Ha(bi,"onSelect"),0<a.length&&(t=new mi("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Jn)))}function _a(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},zi={},vc={};v&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ja(e){if(zi[e])return zi[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vc)return zi[e]=t[r];return e}var xc=ja("animationend"),yc=ja("animationiteration"),Ec=ja("animationstart"),wc=ja("transitionend"),bc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){bc.set(e,t),m(t,[e])}for(var Ni=0;Ni<kc.length;Ni++){var Si=kc[Ni],Am=Si.toLowerCase(),Tm=Si[0].toUpperCase()+Si.slice(1);mn(Am,"on"+Tm)}mn(xc,"onAnimationEnd"),mn(yc,"onAnimationIteration"),mn(Ec,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(wc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function zc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ad(a,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],x=f.instance,C=f.currentTarget;if(f=f.listener,x!==l&&i.isPropagationStopped())break e;zc(i,f,C),l=x}else for(u=0;u<a.length;u++){if(f=a[u],x=f.instance,C=f.currentTarget,f=f.listener,x!==l&&i.isPropagationStopped())break e;zc(i,f,C),l=x}}}if(ka)throw e=ri,ka=!1,ri=null,e}function Oe(e,t){var r=t[Di];r===void 0&&(r=t[Di]=new Set);var a=e+"__bubble";r.has(a)||(Sc(t,e,2,!1),r.add(a))}function Ci(e,t,r){var a=0;t&&(a|=4),Sc(r,e,a,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Ba]){e[Ba]=!0,p.forEach(function(r){r!=="selectionchange"&&(Om.has(r)||Ci(r,!1,e),Ci(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,Ci("selectionchange",!1,t))}}function Sc(e,t,r,a){switch(Qs(t)){case 1:var i=$d;break;case 4:i=Yd;break;default:i=ui}r=i.bind(null,t,r,e),i=void 0,!ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ai(e,t,r,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(u===4)for(u=a.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===i||x.nodeType===8&&x.parentNode===i))return;u=u.return}for(;f!==null;){if(u=Pn(f),u===null)return;if(x=u.tag,x===5||x===6){a=l=u;continue e}f=f.parentNode}}a=a.return}Rs(function(){var C=l,I=Jo(r),_=[];e:{var D=bc.get(e);if(D!==void 0){var q=mi,ee=e;switch(e){case"keypress":if(Da(r)===0)break e;case"keydown":case"keyup":q=im;break;case"focusin":ee="focus",q=gi;break;case"focusout":ee="blur",q=gi;break;case"beforeblur":case"afterblur":q=gi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=cm;break;case xc:case yc:case Ec:q=Xd;break;case wc:q=pm;break;case"scroll":q=Wd;break;case"wheel":q=mm;break;case"copy":case"cut":case"paste":q=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=ec}var re=(t&4)!==0,Be=!re&&e==="scroll",N=re?D!==null?D+"Capture":null:D;re=[];for(var E=C,S;E!==null;){S=E;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,N!==null&&(V=Rr(E,N),V!=null&&re.push(Kr(E,V,S)))),Be)break;E=E.return}0<re.length&&(D=new q(D,ee,null,r,I),_.push({event:D,listeners:re}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",D&&r!==Zo&&(ee=r.relatedTarget||r.fromElement)&&(Pn(ee)||ee[qt]))break e;if((q||D)&&(D=I.window===I?I:(D=I.ownerDocument)?D.defaultView||D.parentWindow:window,q?(ee=r.relatedTarget||r.toElement,q=C,ee=ee?Pn(ee):null,ee!==null&&(Be=Rn(ee),ee!==Be||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(q=null,ee=C),q!==ee)){if(re=Zs,V="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(re=ec,V="onPointerLeave",N="onPointerEnter",E="pointer"),Be=q==null?D:rr(q),S=ee==null?D:rr(ee),D=new re(V,E+"leave",q,r,I),D.target=Be,D.relatedTarget=S,V=null,Pn(I)===C&&(re=new re(N,E+"enter",ee,r,I),re.target=S,re.relatedTarget=Be,V=re),Be=V,q&&ee)t:{for(re=q,N=ee,E=0,S=re;S;S=tr(S))E++;for(S=0,V=N;V;V=tr(V))S++;for(;0<E-S;)re=tr(re),E--;for(;0<S-E;)N=tr(N),S--;for(;E--;){if(re===N||N!==null&&re===N.alternate)break t;re=tr(re),N=tr(N)}re=null}else re=null;q!==null&&Cc(_,D,q,re,!1),ee!==null&&Be!==null&&Cc(_,Be,ee,re,!0)}}e:{if(D=C?rr(C):window,q=D.nodeName&&D.nodeName.toLowerCase(),q==="select"||q==="input"&&D.type==="file")var oe=Em;else if(ic(D))if(sc)oe=zm;else{oe=bm;var se=wm}else(q=D.nodeName)&&q.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(oe=km);if(oe&&(oe=oe(e,C))){lc(_,oe,r,I);break e}se&&se(e,D,C),e==="focusout"&&(se=D._wrapperState)&&se.controlled&&D.type==="number"&&Go(D,"number",D.value)}switch(se=C?rr(C):window,e){case"focusin":(ic(se)||se.contentEditable==="true")&&(Jn=se,bi=C,Gr=null);break;case"focusout":Gr=bi=Jn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,gc(_,r,I);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":gc(_,r,I)}var ce;if(xi)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Zn?ac(e,r)&&(he="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(he="onCompositionStart");he&&(tc&&r.locale!=="ko"&&(Zn||he!=="onCompositionStart"?he==="onCompositionEnd"&&Zn&&(ce=Ks()):(dn=I,di="value"in dn?dn.value:dn.textContent,Zn=!0)),se=Ha(C,he),0<se.length&&(he=new Js(he,e,null,r,I),_.push({event:he,listeners:se}),ce?he.data=ce:(ce=oc(r),ce!==null&&(he.data=ce)))),(ce=hm?gm(e,r):vm(e,r))&&(C=Ha(C,"onBeforeInput"),0<C.length&&(I=new Js("onBeforeInput","beforeinput",null,r,I),_.push({event:I,listeners:C}),I.data=ce))}Nc(_,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ha(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Rr(e,r),l!=null&&a.unshift(Kr(e,l,i)),l=Rr(e,t),l!=null&&a.push(Kr(e,l,i))),e=e.return}return a}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,r,a,i){for(var l=t._reactName,u=[];r!==null&&r!==a;){var f=r,x=f.alternate,C=f.stateNode;if(x!==null&&x===a)break;f.tag===5&&C!==null&&(f=C,i?(x=Rr(r,l),x!=null&&u.unshift(Kr(r,x,f))):i||(x=Rr(r,l),x!=null&&u.push(Kr(r,x,f)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var Rm=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Pm,"")}function Ua(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(c(425))}function Va(){}var Ti=null,Oi=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Im)}:Pi;function Im(e){setTimeout(function(){throw e})}function Fi(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),Br(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);Br(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+nr,Xr="__reactProps$"+nr,qt="__reactContainer$"+nr,Di="__reactEvents$"+nr,Lm="__reactListeners$"+nr,Mm="__reactHandles$"+nr;function Pn(e){var t=e[Bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[Bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Oc(e);e!==null;){if(r=e[Bt])return r;e=Oc(e)}return t}e=r,r=e.parentNode}return null}function Zr(e){return e=e[Bt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function $a(e){return e[Xr]||null}var Ii=[],ar=-1;function hn(e){return{current:e}}function Re(e){0>ar||(e.current=Ii[ar],Ii[ar]=null,ar--)}function Te(e,t){ar++,Ii[ar]=e.current,e.current=t}var gn={},Je=hn(gn),st=hn(!1),Fn=gn;function or(e,t){var r=e.type.contextTypes;if(!r)return gn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Ya(){Re(st),Re(Je)}function Rc(e,t,r){if(Je.current!==gn)throw Error(c(168));Te(Je,t),Te(st,r)}function Pc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(c(108,ne(e)||"Unknown",i));return P({},r,a)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Fn=Je.current,Te(Je,e),Te(st,st.current),!0}function Fc(e,t,r){var a=e.stateNode;if(!a)throw Error(c(169));r?(e=Pc(e,t,Fn),a.__reactInternalMemoizedMergedChildContext=e,Re(st),Re(Je),Te(Je,e)):Re(st),Te(st,r)}var Qt=null,Ga=!1,Li=!1;function Dc(e){Qt===null?Qt=[e]:Qt.push(e)}function _m(e){Ga=!0,Dc(e)}function vn(){if(!Li&&Qt!==null){Li=!0;var e=0,t=Ce;try{var r=Qt;for(Ce=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Qt=null,Ga=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),Ls(ai,vn),i}finally{Ce=t,Li=!1}}return null}var ir=[],lr=0,qa=null,Qa=0,Et=[],wt=0,Dn=null,Kt=1,Xt="";function In(e,t){ir[lr++]=Qa,ir[lr++]=qa,qa=e,Qa=t}function Ic(e,t,r){Et[wt++]=Kt,Et[wt++]=Xt,Et[wt++]=Dn,Dn=e;var a=Kt;e=Xt;var i=32-Ot(a)-1;a&=~(1<<i),r+=1;var l=32-Ot(t)+i;if(30<l){var u=i-i%5;l=(a&(1<<u)-1).toString(32),a>>=u,i-=u,Kt=1<<32-Ot(t)+i|r<<i|a,Xt=l+e}else Kt=1<<l|r<<i|a,Xt=e}function Mi(e){e.return!==null&&(In(e,1),Ic(e,1,0))}function _i(e){for(;e===qa;)qa=ir[--lr],ir[lr]=null,Qa=ir[--lr],ir[lr]=null;for(;e===Dn;)Dn=Et[--wt],Et[wt]=null,Xt=Et[--wt],Et[wt]=null,Kt=Et[--wt],Et[wt]=null}var gt=null,vt=null,Pe=!1,Pt=null;function Lc(e,t){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,vt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Dn!==null?{id:Kt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gt=e,vt=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(Pe){var t=vt;if(t){var r=t;if(!Mc(e,t)){if(ji(e))throw Error(c(418));t=fn(r.nextSibling);var a=gt;t&&Mc(e,t)?Lc(a,r):(e.flags=e.flags&-4097|2,Pe=!1,gt=e)}}else{if(ji(e))throw Error(c(418));e.flags=e.flags&-4097|2,Pe=!1,gt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Ka(e){if(e!==gt)return!1;if(!Pe)return _c(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=vt)){if(ji(e))throw jc(),Error(c(418));for(;t;)Lc(e,t),t=fn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){vt=fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=gt?fn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=vt;e;)e=fn(e.nextSibling)}function sr(){vt=gt=null,Pe=!1}function Hi(e){Pt===null?Pt=[e]:Pt.push(e)}var jm=W.ReactCurrentBatchConfig;function Jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var a=r.stateNode}if(!a)throw Error(c(147,e));var i=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var f=i.refs;u===null?delete f[l]:f[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Hc(e){function t(N,E){if(e){var S=N.deletions;S===null?(N.deletions=[E],N.flags|=16):S.push(E)}}function r(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function a(N,E){for(N=new Map;E!==null;)E.key!==null?N.set(E.key,E):N.set(E.index,E),E=E.sibling;return N}function i(N,E){return N=Nn(N,E),N.index=0,N.sibling=null,N}function l(N,E,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<E?(N.flags|=2,E):S):(N.flags|=2,E)):(N.flags|=1048576,E)}function u(N){return e&&N.alternate===null&&(N.flags|=2),N}function f(N,E,S,V){return E===null||E.tag!==6?(E=Pl(S,N.mode,V),E.return=N,E):(E=i(E,S),E.return=N,E)}function x(N,E,S,V){var oe=S.type;return oe===ye?I(N,E,S.props.children,V,S.key):E!==null&&(E.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ve&&Bc(oe)===E.type)?(V=i(E,S.props),V.ref=Jr(N,E,S),V.return=N,V):(V=bo(S.type,S.key,S.props,null,N.mode,V),V.ref=Jr(N,E,S),V.return=N,V)}function C(N,E,S,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Fl(S,N.mode,V),E.return=N,E):(E=i(E,S.children||[]),E.return=N,E)}function I(N,E,S,V,oe){return E===null||E.tag!==7?(E=Vn(S,N.mode,V,oe),E.return=N,E):(E=i(E,S),E.return=N,E)}function _(N,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Pl(""+E,N.mode,S),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ae:return S=bo(E.type,E.key,E.props,null,N.mode,S),S.ref=Jr(N,null,E),S.return=N,S;case ie:return E=Fl(E,N.mode,S),E.return=N,E;case ve:var V=E._init;return _(N,V(E._payload),S)}if(Ar(E)||F(E))return E=Vn(E,N.mode,S,null),E.return=N,E;Xa(N,E)}return null}function D(N,E,S,V){var oe=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return oe!==null?null:f(N,E,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ae:return S.key===oe?x(N,E,S,V):null;case ie:return S.key===oe?C(N,E,S,V):null;case ve:return oe=S._init,D(N,E,oe(S._payload),V)}if(Ar(S)||F(S))return oe!==null?null:I(N,E,S,V,null);Xa(N,S)}return null}function q(N,E,S,V,oe){if(typeof V=="string"&&V!==""||typeof V=="number")return N=N.get(S)||null,f(E,N,""+V,oe);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ae:return N=N.get(V.key===null?S:V.key)||null,x(E,N,V,oe);case ie:return N=N.get(V.key===null?S:V.key)||null,C(E,N,V,oe);case ve:var se=V._init;return q(N,E,S,se(V._payload),oe)}if(Ar(V)||F(V))return N=N.get(S)||null,I(E,N,V,oe,null);Xa(E,V)}return null}function ee(N,E,S,V){for(var oe=null,se=null,ce=E,he=E=0,qe=null;ce!==null&&he<S.length;he++){ce.index>he?(qe=ce,ce=null):qe=ce.sibling;var Se=D(N,ce,S[he],V);if(Se===null){ce===null&&(ce=qe);break}e&&ce&&Se.alternate===null&&t(N,ce),E=l(Se,E,he),se===null?oe=Se:se.sibling=Se,se=Se,ce=qe}if(he===S.length)return r(N,ce),Pe&&In(N,he),oe;if(ce===null){for(;he<S.length;he++)ce=_(N,S[he],V),ce!==null&&(E=l(ce,E,he),se===null?oe=ce:se.sibling=ce,se=ce);return Pe&&In(N,he),oe}for(ce=a(N,ce);he<S.length;he++)qe=q(ce,N,he,S[he],V),qe!==null&&(e&&qe.alternate!==null&&ce.delete(qe.key===null?he:qe.key),E=l(qe,E,he),se===null?oe=qe:se.sibling=qe,se=qe);return e&&ce.forEach(function(Sn){return t(N,Sn)}),Pe&&In(N,he),oe}function re(N,E,S,V){var oe=F(S);if(typeof oe!="function")throw Error(c(150));if(S=oe.call(S),S==null)throw Error(c(151));for(var se=oe=null,ce=E,he=E=0,qe=null,Se=S.next();ce!==null&&!Se.done;he++,Se=S.next()){ce.index>he?(qe=ce,ce=null):qe=ce.sibling;var Sn=D(N,ce,Se.value,V);if(Sn===null){ce===null&&(ce=qe);break}e&&ce&&Sn.alternate===null&&t(N,ce),E=l(Sn,E,he),se===null?oe=Sn:se.sibling=Sn,se=Sn,ce=qe}if(Se.done)return r(N,ce),Pe&&In(N,he),oe;if(ce===null){for(;!Se.done;he++,Se=S.next())Se=_(N,Se.value,V),Se!==null&&(E=l(Se,E,he),se===null?oe=Se:se.sibling=Se,se=Se);return Pe&&In(N,he),oe}for(ce=a(N,ce);!Se.done;he++,Se=S.next())Se=q(ce,N,he,Se.value,V),Se!==null&&(e&&Se.alternate!==null&&ce.delete(Se.key===null?he:Se.key),E=l(Se,E,he),se===null?oe=Se:se.sibling=Se,se=Se);return e&&ce.forEach(function(yf){return t(N,yf)}),Pe&&In(N,he),oe}function Be(N,E,S,V){if(typeof S=="object"&&S!==null&&S.type===ye&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ae:e:{for(var oe=S.key,se=E;se!==null;){if(se.key===oe){if(oe=S.type,oe===ye){if(se.tag===7){r(N,se.sibling),E=i(se,S.props.children),E.return=N,N=E;break e}}else if(se.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ve&&Bc(oe)===se.type){r(N,se.sibling),E=i(se,S.props),E.ref=Jr(N,se,S),E.return=N,N=E;break e}r(N,se);break}else t(N,se);se=se.sibling}S.type===ye?(E=Vn(S.props.children,N.mode,V,S.key),E.return=N,N=E):(V=bo(S.type,S.key,S.props,null,N.mode,V),V.ref=Jr(N,E,S),V.return=N,N=V)}return u(N);case ie:e:{for(se=S.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){r(N,E.sibling),E=i(E,S.children||[]),E.return=N,N=E;break e}else{r(N,E);break}else t(N,E);E=E.sibling}E=Fl(S,N.mode,V),E.return=N,N=E}return u(N);case ve:return se=S._init,Be(N,E,se(S._payload),V)}if(Ar(S))return ee(N,E,S,V);if(F(S))return re(N,E,S,V);Xa(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(r(N,E.sibling),E=i(E,S),E.return=N,N=E):(r(N,E),E=Pl(S,N.mode,V),E.return=N,N=E),u(N)):r(N,E)}return Be}var cr=Hc(!0),Uc=Hc(!1),Za=hn(null),Ja=null,ur=null,Ui=null;function Vi(){Ui=ur=Ja=null}function $i(e){var t=Za.current;Re(Za),e._currentValue=t}function Yi(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){Ja=e,Ui=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Ui!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ja===null)throw Error(c(308));ur=e,Ja.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Ln=null;function Wi(e){Ln===null?Ln=[e]:Ln.push(e)}function Vc(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,Wi(t)):(r.next=i.next,i.next=r),t.interleaved=r,Zt(e,a)}function Zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xn=!1;function Gi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Zt(e,r)}return i=a.interleaved,i===null?(t.next=t,Wi(a)):(t.next=i.next,i.next=t),a.interleaved=t,Zt(e,r)}function eo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,li(e,r)}}function Yc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=u:l=l.next=u,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function to(e,t,r,a){var i=e.updateQueue;xn=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var x=f,C=x.next;x.next=null,u===null?l=C:u.next=C,u=x;var I=e.alternate;I!==null&&(I=I.updateQueue,f=I.lastBaseUpdate,f!==u&&(f===null?I.firstBaseUpdate=C:f.next=C,I.lastBaseUpdate=x))}if(l!==null){var _=i.baseState;u=0,I=C=x=null,f=l;do{var D=f.lane,q=f.eventTime;if((a&D)===D){I!==null&&(I=I.next={eventTime:q,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var ee=e,re=f;switch(D=t,q=r,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){_=ee.call(q,_,D);break e}_=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,D=typeof ee=="function"?ee.call(q,_,D):ee,D==null)break e;_=P({},_,D);break e;case 2:xn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,D=i.effects,D===null?i.effects=[f]:D.push(f))}else q={eventTime:q,lane:D,tag:f.tag,payload:f.payload,callback:f.callback,next:null},I===null?(C=I=q,x=_):I=I.next=q,u|=D;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;D=f,f=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);if(I===null&&(x=_),i.baseState=x,i.firstBaseUpdate=C,i.lastBaseUpdate=I,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);jn|=u,e.lanes=u,e.memoizedState=_}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(c(191,i));i.call(a)}}}var ea={},Ht=hn(ea),ta=hn(ea),na=hn(ea);function Mn(e){if(e===ea)throw Error(c(174));return e}function qi(e,t){switch(Te(na,t),Te(ta,e),Te(Ht,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qo(t,e)}Re(Ht),Te(Ht,t)}function dr(){Re(Ht),Re(ta),Re(na)}function Gc(e){Mn(na.current);var t=Mn(Ht.current),r=Qo(t,e.type);t!==r&&(Te(ta,e),Te(Ht,r))}function Qi(e){ta.current===e&&(Re(Ht),Re(ta))}var De=hn(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function Xi(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var ro=W.ReactCurrentDispatcher,Zi=W.ReactCurrentBatchConfig,_n=0,Ie=null,Ve=null,We=null,ao=!1,ra=!1,aa=0,Bm=0;function et(){throw Error(c(321))}function Ji(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Rt(e[r],t[r]))return!1;return!0}function el(e,t,r,a,i,l){if(_n=l,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?$m:Ym,e=r(a,i),ra){l=0;do{if(ra=!1,aa=0,25<=l)throw Error(c(301));l+=1,We=Ve=null,t.updateQueue=null,ro.current=Wm,e=r(a,i)}while(ra)}if(ro.current=lo,t=Ve!==null&&Ve.next!==null,_n=0,We=Ve=Ie=null,ao=!1,t)throw Error(c(300));return e}function tl(){var e=aa!==0;return aa=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=e:We=We.next=e,We}function kt(){if(Ve===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=We===null?Ie.memoizedState:We.next;if(t!==null)We=t,Ve=e;else{if(e===null)throw Error(c(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},We===null?Ie.memoizedState=We=e:We=We.next=e}return We}function oa(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=kt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=Ve,i=a.baseQueue,l=r.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}a.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,a=a.baseState;var f=u=null,x=null,C=l;do{var I=C.lane;if((_n&I)===I)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),a=C.hasEagerState?C.eagerState:e(a,C.action);else{var _={lane:I,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(f=x=_,u=a):x=x.next=_,Ie.lanes|=I,jn|=I}C=C.next}while(C!==null&&C!==l);x===null?u=a:x.next=f,Rt(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=x,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do l=i.lane,Ie.lanes|=l,jn|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function rl(e){var t=kt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var u=i=i.next;do l=e(l,u.action),u=u.next;while(u!==i);Rt(l,t.memoizedState)||(ut=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,a]}function qc(){}function Qc(e,t){var r=Ie,a=kt(),i=t(),l=!Rt(a.memoizedState,i);if(l&&(a.memoizedState=i,ut=!0),a=a.queue,al(Zc.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,ia(9,Xc.bind(null,r,a,i,t),void 0,null),Ge===null)throw Error(c(349));(_n&30)!==0||Kc(r,t,i)}return i}function Kc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Xc(e,t,r,a){t.value=r,t.getSnapshot=a,Jc(t)&&eu(e)}function Zc(e,t,r){return r(function(){Jc(t)&&eu(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Rt(e,r)}catch{return!0}}function eu(e){var t=Zt(e,1);t!==null&&Lt(t,e,1,-1)}function tu(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t.queue=e,e=e.dispatch=Vm.bind(null,Ie,e),[t.memoizedState,e]}function ia(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function nu(){return kt().memoizedState}function oo(e,t,r,a){var i=Ut();Ie.flags|=e,i.memoizedState=ia(1|t,r,void 0,a===void 0?null:a)}function io(e,t,r,a){var i=kt();a=a===void 0?null:a;var l=void 0;if(Ve!==null){var u=Ve.memoizedState;if(l=u.destroy,a!==null&&Ji(a,u.deps)){i.memoizedState=ia(t,r,l,a);return}}Ie.flags|=e,i.memoizedState=ia(1|t,r,l,a)}function ru(e,t){return oo(8390656,8,e,t)}function al(e,t){return io(2048,8,e,t)}function au(e,t){return io(4,2,e,t)}function ou(e,t){return io(4,4,e,t)}function iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lu(e,t,r){return r=r!=null?r.concat([e]):null,io(4,4,iu.bind(null,t,e),r)}function ol(){}function su(e,t){var r=kt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ji(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function cu(e,t){var r=kt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ji(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function uu(e,t,r){return(_n&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(Rt(r,t)||(r=Bs(),Ie.lanes|=r,jn|=r,e.baseState=!0),t)}function Hm(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var a=Zi.transition;Zi.transition={};try{e(!1),t()}finally{Ce=r,Zi.transition=a}}function pu(){return kt().memoizedState}function Um(e,t,r){var a=kn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},du(e))mu(t,r);else if(r=Vc(e,t,r,a),r!==null){var i=at();Lt(r,e,a,i),fu(r,t,a)}}function Vm(e,t,r){var a=kn(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(du(e))mu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,f=l(u,r);if(i.hasEagerState=!0,i.eagerState=f,Rt(f,u)){var x=t.interleaved;x===null?(i.next=i,Wi(t)):(i.next=x.next,x.next=i),t.interleaved=i;return}}catch{}finally{}r=Vc(e,t,i,a),r!==null&&(i=at(),Lt(r,e,a,i),fu(r,t,a))}}function du(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function mu(e,t){ra=ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function fu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,li(e,r)}}var lo={readContext:bt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$m={readContext:bt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oo(4194308,4,iu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Ut();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Um.bind(null,Ie,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:ol,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Hm.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ie,i=Ut();if(Pe){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ge===null)throw Error(c(349));(_n&30)!==0||Kc(a,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,ru(Zc.bind(null,a,l,e),[e]),a.flags|=2048,ia(9,Xc.bind(null,a,l,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Ge.identifierPrefix;if(Pe){var r=Xt,a=Kt;r=(a&~(1<<32-Ot(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=aa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:bt,useCallback:su,useContext:bt,useEffect:al,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:nl,useRef:nu,useState:function(){return nl(oa)},useDebugValue:ol,useDeferredValue:function(e){var t=kt();return uu(t,Ve.memoizedState,e)},useTransition:function(){var e=nl(oa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1},Wm={readContext:bt,useCallback:su,useContext:bt,useEffect:al,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:rl,useRef:nu,useState:function(){return rl(oa)},useDebugValue:ol,useDeferredValue:function(e){var t=kt();return Ve===null?t.memoizedState=e:uu(t,Ve.memoizedState,e)},useTransition:function(){var e=rl(oa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:pu,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function il(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:P({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var so={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=at(),i=kn(e),l=Jt(a,i);l.payload=t,r!=null&&(l.callback=r),t=yn(e,l,i),t!==null&&(Lt(t,e,i,a),eo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=at(),i=kn(e),l=Jt(a,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=yn(e,l,i),t!==null&&(Lt(t,e,i,a),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=at(),a=kn(e),i=Jt(r,a);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,a),t!==null&&(Lt(t,e,a,r),eo(t,e,a))}};function hu(e,t,r,a,i,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,u):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,a)||!Wr(i,l):!0}function gu(e,t,r){var a=!1,i=gn,l=t.contextType;return typeof l=="object"&&l!==null?l=bt(l):(i=ct(t)?Fn:Je.current,a=t.contextTypes,l=(a=a!=null)?or(e,i):gn),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function vu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function ll(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Gi(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=bt(l):(l=ct(t)?Fn:Je.current,i.context=or(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(il(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&so.enqueueReplaceState(i,i.state,null),to(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",a=t;do r+=B(a),a=a.return;while(a);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,r){r=Jt(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){go||(go=!0,zl=a),cl(e,t)},r}function yu(e,t,r){r=Jt(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){cl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){cl(e,t),typeof a!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Eu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Gm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=sf.bind(null,e,t,r),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,r,a,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Jt(-1,1),t.tag=2,yn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var qm=W.ReactCurrentOwner,ut=!1;function rt(e,t,r,a){t.child=e===null?Uc(t,null,r,a):cr(t,e.child,r,a)}function ku(e,t,r,a,i){r=r.render;var l=t.ref;return pr(t,i),a=el(e,t,r,a,l,i),r=tl(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Pe&&r&&Mi(t),t.flags|=1,rt(e,t,a,i),t.child)}function zu(e,t,r,a,i){if(e===null){var l=r.type;return typeof l=="function"&&!Rl(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Nu(e,t,l,a,i)):(e=bo(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var u=l.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(u,a)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Nn(l,a),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,r,a,i){if(e!==null){var l=e.memoizedProps;if(Wr(l,a)&&e.ref===t.ref)if(ut=!1,t.pendingProps=a=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,en(e,t,i)}return ul(e,t,r,a,i)}function Su(e,t,r){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(hr,xt),xt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(hr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:r,Te(hr,xt),xt|=a}else l!==null?(a=l.baseLanes|r,t.memoizedState=null):a=r,Te(hr,xt),xt|=a;return rt(e,t,i,r),t.child}function Cu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,r,a,i){var l=ct(r)?Fn:Je.current;return l=or(t,l),pr(t,i),r=el(e,t,r,a,l,i),a=tl(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Pe&&a&&Mi(t),t.flags|=1,rt(e,t,r,i),t.child)}function Au(e,t,r,a,i){if(ct(r)){var l=!0;Wa(t)}else l=!1;if(pr(t,i),t.stateNode===null)uo(e,t),gu(t,r,a),ll(t,r,a,i),a=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var x=u.context,C=r.contextType;typeof C=="object"&&C!==null?C=bt(C):(C=ct(r)?Fn:Je.current,C=or(t,C));var I=r.getDerivedStateFromProps,_=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function";_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||x!==C)&&vu(t,u,a,C),xn=!1;var D=t.memoizedState;u.state=D,to(t,a,u,i),x=t.memoizedState,f!==a||D!==x||st.current||xn?(typeof I=="function"&&(il(t,r,I,a),x=t.memoizedState),(f=xn||hu(t,r,f,a,D,x,C))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),u.props=a,u.state=x,u.context=C,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,$c(e,t),f=t.memoizedProps,C=t.type===t.elementType?f:Ft(t.type,f),u.props=C,_=t.pendingProps,D=u.context,x=r.contextType,typeof x=="object"&&x!==null?x=bt(x):(x=ct(r)?Fn:Je.current,x=or(t,x));var q=r.getDerivedStateFromProps;(I=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==_||D!==x)&&vu(t,u,a,x),xn=!1,D=t.memoizedState,u.state=D,to(t,a,u,i);var ee=t.memoizedState;f!==_||D!==ee||st.current||xn?(typeof q=="function"&&(il(t,r,q,a),ee=t.memoizedState),(C=xn||hu(t,r,C,a,D,ee,x)||!1)?(I||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,ee,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,ee,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ee),u.props=a,u.state=ee,u.context=x,a=C):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return pl(e,t,r,a,l,i)}function pl(e,t,r,a,i,l){Cu(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return i&&Fc(t,r,!1),en(e,t,l);a=t.stateNode,qm.current=t;var f=u&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=cr(t,e.child,null,l),t.child=cr(t,null,f,l)):rt(e,t,f,l),t.memoizedState=a.state,i&&Fc(t,r,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),qi(e,t.containerInfo)}function Ou(e,t,r,a,i){return sr(),Hi(i),t.flags|=256,rt(e,t,r,a),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,r){var a=t.pendingProps,i=De.current,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(De,i&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,l?(a=t.mode,l=t.child,u={mode:"hidden",children:u},(a&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=ko(u,a,0,null),e=Vn(e,a,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ml(r),t.memoizedState=dl,e):fl(t,u));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return Qm(e,t,u,a,f,i,r);if(l){l=a.fallback,u=t.mode,i=e.child,f=i.sibling;var x={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=x,t.deletions=null):(a=Nn(i,x),a.subtreeFlags=i.subtreeFlags&14680064),f!==null?l=Nn(f,l):(l=Vn(l,u,r,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,u=e.child.memoizedState,u=u===null?ml(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~r,t.memoizedState=dl,a}return l=e.child,e=l.sibling,a=Nn(l,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function fl(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,r,a){return a!==null&&Hi(a),cr(t,e.child,null,r),e=fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,r,a,i,l,u){if(r)return t.flags&256?(t.flags&=-257,a=sl(Error(c(422))),co(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,i=t.mode,a=ko({mode:"visible",children:a.children},i,0,null),l=Vn(l,i,u,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,(t.mode&1)!==0&&cr(t,e.child,null,u),t.child.memoizedState=ml(u),t.memoizedState=dl,l);if((t.mode&1)===0)return co(e,t,u,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var f=a.dgst;return a=f,l=Error(c(419)),a=sl(l,a,void 0),co(e,t,u,a)}if(f=(u&e.childLanes)!==0,ut||f){if(a=Ge,a!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|u))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Zt(e,i),Lt(a,e,i,-1))}return Ol(),a=sl(Error(c(421))),co(e,t,u,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,vt=fn(i.nextSibling),gt=t,Pe=!0,Pt=null,e!==null&&(Et[wt++]=Kt,Et[wt++]=Xt,Et[wt++]=Dn,Kt=e.id,Xt=e.overflow,Dn=t),t=fl(t,a.children),t.flags|=4096,t)}function Pu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Yi(e.return,t,r)}function hl(e,t,r,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=r,l.tailMode=i)}function Fu(e,t,r){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(rt(e,t,a.children,r),a=De.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,t);else if(e.tag===19)Pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Te(De,a),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&no(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),hl(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}hl(t,!0,r,null,l);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=Nn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Nn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Km(e,t,r){switch(t.tag){case 3:Tu(t),sr();break;case 5:Gc(t);break;case 1:ct(t.type)&&Wa(t);break;case 4:qi(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;Te(Za,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Te(De,De.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ru(e,t,r):(Te(De,De.current&1),e=en(e,t,r),e!==null?e.sibling:null);Te(De,De.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Fu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(De,De.current),a)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,r)}return en(e,t,r)}var Du,gl,Iu,Lu;Du=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},gl=function(){},Iu=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Mn(Ht.current);var l=null;switch(r){case"input":i=yt(e,i),a=yt(e,a),l=[];break;case"select":i=P({},i,{value:void 0}),a=P({},a,{value:void 0}),l=[];break;case"textarea":i=qo(e,i),a=qo(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Va)}Ko(r,a);var u;r=null;for(C in i)if(!a.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var f=i[C];for(u in f)f.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?l||(l=[]):(l=l||[]).push(C,null));for(C in a){var x=a[C];if(f=i!=null?i[C]:void 0,a.hasOwnProperty(C)&&x!==f&&(x!=null||f!=null))if(C==="style")if(f){for(u in f)!f.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in x)x.hasOwnProperty(u)&&f[u]!==x[u]&&(r||(r={}),r[u]=x[u])}else r||(l||(l=[]),l.push(C,r)),r=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,f=f?f.__html:void 0,x!=null&&f!==x&&(l=l||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(l=l||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&Oe("scroll",e),l||f===x||(l=[])):(l=l||[]).push(C,x))}r&&(l=l||[]).push("style",r);var C=l;(t.updateQueue=C)&&(t.flags|=4)}},Lu=function(e,t,r,a){r!==a&&(t.flags|=4)};function la(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Xm(e,t,r){var a=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ct(t.type)&&Ya(),tt(t),null;case 3:return a=t.stateNode,dr(),Re(st),Re(Je),Xi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(Cl(Pt),Pt=null))),gl(e,t),tt(t),null;case 5:Qi(t);var i=Mn(na.current);if(r=t.type,e!==null&&t.stateNode!=null)Iu(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(e=Mn(Ht.current),Ka(t)){a=t.stateNode,r=t.type;var l=t.memoizedProps;switch(a[Bt]=t,a[Xr]=l,e=(t.mode&1)!==0,r){case"dialog":Oe("cancel",a),Oe("close",a);break;case"iframe":case"object":case"embed":Oe("load",a);break;case"video":case"audio":for(i=0;i<qr.length;i++)Oe(qr[i],a);break;case"source":Oe("error",a);break;case"img":case"image":case"link":Oe("error",a),Oe("load",a);break;case"details":Oe("toggle",a);break;case"input":gs(a,l),Oe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},Oe("invalid",a);break;case"textarea":ys(a,l),Oe("invalid",a)}Ko(r,l),i=null;for(var u in l)if(l.hasOwnProperty(u)){var f=l[u];u==="children"?typeof f=="string"?a.textContent!==f&&(l.suppressHydrationWarning!==!0&&Ua(a.textContent,f,e),i=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&Ua(a.textContent,f,e),i=["children",""+f]):d.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Oe("scroll",a)}switch(r){case"input":_e(a),xs(a,l,!0);break;case"textarea":_e(a),ws(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=Va)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(r,{is:a.is}):(e=u.createElement(r),r==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,r),e[Bt]=t,e[Xr]=a,Du(e,t,!1,!1),t.stateNode=e;e:{switch(u=Xo(r,a),r){case"dialog":Oe("cancel",e),Oe("close",e),i=a;break;case"iframe":case"object":case"embed":Oe("load",e),i=a;break;case"video":case"audio":for(i=0;i<qr.length;i++)Oe(qr[i],e);i=a;break;case"source":Oe("error",e),i=a;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=a;break;case"details":Oe("toggle",e),i=a;break;case"input":gs(e,a),i=yt(e,a),Oe("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=P({},a,{value:void 0}),Oe("invalid",e);break;case"textarea":ys(e,a),i=qo(e,a),Oe("invalid",e);break;default:i=a}Ko(r,i),f=i;for(l in f)if(f.hasOwnProperty(l)){var x=f[l];l==="style"?Ns(e,x):l==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ks(e,x)):l==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&Tr(e,x):typeof x=="number"&&Tr(e,""+x):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?x!=null&&l==="onScroll"&&Oe("scroll",e):x!=null&&K(e,l,x,u))}switch(r){case"input":_e(e),xs(e,a,!1);break;case"textarea":_e(e),ws(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ue(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?Gn(e,!!a.multiple,l,!1):a.defaultValue!=null&&Gn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(r=Mn(na.current),Mn(Ht.current),Ka(t)){if(a=t.stateNode,r=t.memoizedProps,a[Bt]=t,(l=a.nodeValue!==r)&&(e=gt,e!==null))switch(e.tag){case 3:Ua(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ua(a.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Bt]=t,t.stateNode=a}return tt(t),null;case 13:if(Re(De),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jc(),sr(),t.flags|=98560,l=!1;else if(l=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Bt]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),l=!1}else Pt!==null&&(Cl(Pt),Pt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(De.current&1)!==0?$e===0&&($e=3):Ol())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return dr(),gl(e,t),e===null&&Qr(t.stateNode.containerInfo),tt(t),null;case 10:return $i(t.type._context),tt(t),null;case 17:return ct(t.type)&&Ya(),tt(t),null;case 19:if(Re(De),l=t.memoizedState,l===null)return tt(t),null;if(a=(t.flags&128)!==0,u=l.rendering,u===null)if(a)la(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=no(e),u!==null){for(t.flags|=128,la(l,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)l=r,e=a,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Te(De,De.current&1|2),t.child}e=e.sibling}l.tail!==null&&je()>gr&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304)}else{if(!a)if(e=no(u),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),la(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Pe)return tt(t),null}else 2*je()-l.renderingStartTime>gr&&r!==1073741824&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(r=l.last,r!==null?r.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=je(),t.sibling=null,r=De.current,Te(De,a?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return Tl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(xt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Zm(e,t){switch(_i(t),t.tag){case 1:return ct(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Re(st),Re(Je),Xi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Qi(t),null;case 13:if(Re(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(De),null;case 4:return dr(),null;case 10:return $i(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var po=!1,nt=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,Z=null;function fr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Me(e,t,a)}else r.current=null}function vl(e,t,r){try{r()}catch(a){Me(e,t,a)}}var Mu=!1;function ef(e,t){if(Ti=Ra,e=hc(),wi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var u=0,f=-1,x=-1,C=0,I=0,_=e,D=null;t:for(;;){for(var q;_!==r||i!==0&&_.nodeType!==3||(f=u+i),_!==l||a!==0&&_.nodeType!==3||(x=u+a),_.nodeType===3&&(u+=_.nodeValue.length),(q=_.firstChild)!==null;)D=_,_=q;for(;;){if(_===e)break t;if(D===r&&++C===i&&(f=u),D===l&&++I===a&&(x=u),(q=_.nextSibling)!==null)break;_=D,D=_.parentNode}_=q}r=f===-1||x===-1?null:{start:f,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oi={focusedElem:e,selectionRange:r},Ra=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,Be=ee.memoizedState,N=t.stateNode,E=N.getSnapshotBeforeUpdate(t.elementType===t.type?re:Ft(t.type,re),Be);N.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(V){Me(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return ee=Mu,Mu=!1,ee}function sa(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&vl(t,r,l)}i=i.next}while(i!==a)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function xl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Xr],delete t[Di],delete t[Lm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Va));else if(a!==4&&(e=e.child,e!==null))for(yl(e,t,r),e=e.sibling;e!==null;)yl(e,t,r),e=e.sibling}function El(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(El(e,t,r),e=e.sibling;e!==null;)El(e,t,r),e=e.sibling}var Ke=null,Dt=!1;function En(e,t,r){for(r=r.child;r!==null;)Hu(e,t,r),r=r.sibling}function Hu(e,t,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Na,r)}catch{}switch(r.tag){case 5:nt||fr(r,t);case 6:var a=Ke,i=Dt;Ke=null,En(e,t,r),Ke=a,Dt=i,Ke!==null&&(Dt?(e=Ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ke.removeChild(r.stateNode));break;case 18:Ke!==null&&(Dt?(e=Ke,r=r.stateNode,e.nodeType===8?Fi(e.parentNode,r):e.nodeType===1&&Fi(e,r),Br(e)):Fi(Ke,r.stateNode));break;case 4:a=Ke,i=Dt,Ke=r.stateNode.containerInfo,Dt=!0,En(e,t,r),Ke=a,Dt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&vl(r,t,u),i=i.next}while(i!==a)}En(e,t,r);break;case 1:if(!nt&&(fr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(f){Me(r,t,f)}En(e,t,r);break;case 21:En(e,t,r);break;case 22:r.mode&1?(nt=(a=nt)||r.memoizedState!==null,En(e,t,r),nt=a):En(e,t,r);break;default:En(e,t,r)}}function Uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jm),t.forEach(function(a){var i=uf.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function It(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var l=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:Ke=f.stateNode,Dt=!1;break e;case 3:Ke=f.stateNode.containerInfo,Dt=!0;break e;case 4:Ke=f.stateNode.containerInfo,Dt=!0;break e}f=f.return}if(Ke===null)throw Error(c(160));Hu(l,u,i),Ke=null,Dt=!1;var x=i.alternate;x!==null&&(x.return=null),i.return=null}catch(C){Me(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Vt(e),a&4){try{sa(3,e,e.return),mo(3,e)}catch(re){Me(e,e.return,re)}try{sa(5,e,e.return)}catch(re){Me(e,e.return,re)}}break;case 1:It(t,e),Vt(e),a&512&&r!==null&&fr(r,r.return);break;case 5:if(It(t,e),Vt(e),a&512&&r!==null&&fr(r,r.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(re){Me(e,e.return,re)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,u=r!==null?r.memoizedProps:l,f=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&vs(i,l),Xo(f,u);var C=Xo(f,l);for(u=0;u<x.length;u+=2){var I=x[u],_=x[u+1];I==="style"?Ns(i,_):I==="dangerouslySetInnerHTML"?ks(i,_):I==="children"?Tr(i,_):K(i,I,_,C)}switch(f){case"input":Wo(i,l);break;case"textarea":Es(i,l);break;case"select":var D=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var q=l.value;q!=null?Gn(i,!!l.multiple,q,!1):D!==!!l.multiple&&(l.defaultValue!=null?Gn(i,!!l.multiple,l.defaultValue,!0):Gn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Xr]=l}catch(re){Me(e,e.return,re)}}break;case 6:if(It(t,e),Vt(e),a&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(re){Me(e,e.return,re)}}break;case 3:if(It(t,e),Vt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(re){Me(e,e.return,re)}break;case 4:It(t,e),Vt(e);break;case 13:It(t,e),Vt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(kl=je())),a&4&&Uu(e);break;case 22:if(I=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(C=nt)||I,It(t,e),nt=C):It(t,e),Vt(e),a&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!I&&(e.mode&1)!==0)for(Z=e,I=e.child;I!==null;){for(_=Z=I;Z!==null;){switch(D=Z,q=D.child,D.tag){case 0:case 11:case 14:case 15:sa(4,D,D.return);break;case 1:fr(D,D.return);var ee=D.stateNode;if(typeof ee.componentWillUnmount=="function"){a=D,r=D.return;try{t=a,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(re){Me(a,r,re)}}break;case 5:fr(D,D.return);break;case 22:if(D.memoizedState!==null){Wu(_);continue}}q!==null?(q.return=D,Z=q):Wu(_)}I=I.sibling}e:for(I=null,_=e;;){if(_.tag===5){if(I===null){I=_;try{i=_.stateNode,C?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=_.stateNode,x=_.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,f.style.display=zs("display",u))}catch(re){Me(e,e.return,re)}}}else if(_.tag===6){if(I===null)try{_.stateNode.nodeValue=C?"":_.memoizedProps}catch(re){Me(e,e.return,re)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;I===_&&(I=null),_=_.return}I===_&&(I=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:It(t,e),Vt(e),a&4&&Uu(e);break;case 21:break;default:It(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ju(r)){var a=r;break e}r=r.return}throw Error(c(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Tr(i,""),a.flags&=-33);var l=Bu(e);El(e,l,i);break;case 3:case 4:var u=a.stateNode.containerInfo,f=Bu(e);yl(e,f,u);break;default:throw Error(c(161))}}catch(x){Me(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tf(e,t,r){Z=e,$u(e)}function $u(e,t,r){for(var a=(e.mode&1)!==0;Z!==null;){var i=Z,l=i.child;if(i.tag===22&&a){var u=i.memoizedState!==null||po;if(!u){var f=i.alternate,x=f!==null&&f.memoizedState!==null||nt;f=po;var C=nt;if(po=u,(nt=x)&&!C)for(Z=i;Z!==null;)u=Z,x=u.child,u.tag===22&&u.memoizedState!==null?Gu(i):x!==null?(x.return=u,Z=x):Gu(i);for(;l!==null;)Z=l,$u(l),l=l.sibling;Z=i,po=f,nt=C}Yu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,Z=l):Yu(e)}}function Yu(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||mo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!nt)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wc(t,l,a);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,u,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var I=C.memoizedState;if(I!==null){var _=I.dehydrated;_!==null&&Br(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}nt||t.flags&512&&xl(t)}catch(D){Me(t,t.return,D)}}if(t===e){Z=null;break}if(r=t.sibling,r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Wu(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Gu(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{mo(4,t)}catch(x){Me(t,r,x)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(x){Me(t,i,x)}}var l=t.return;try{xl(t)}catch(x){Me(t,l,x)}break;case 5:var u=t.return;try{xl(t)}catch(x){Me(t,u,x)}}}catch(x){Me(t,t.return,x)}if(t===e){Z=null;break}var f=t.sibling;if(f!==null){f.return=t.return,Z=f;break}Z=t.return}}var nf=Math.ceil,fo=W.ReactCurrentDispatcher,wl=W.ReactCurrentOwner,zt=W.ReactCurrentBatchConfig,Ne=0,Ge=null,Ue=null,Xe=0,xt=0,hr=hn(0),$e=0,ca=null,jn=0,ho=0,bl=0,ua=null,pt=null,kl=0,gr=1/0,tn=null,go=!1,zl=null,wn=null,vo=!1,bn=null,xo=0,pa=0,Nl=null,yo=-1,Eo=0;function at(){return(Ne&6)!==0?je():yo!==-1?yo:yo=je()}function kn(e){return(e.mode&1)===0?1:(Ne&2)!==0&&Xe!==0?Xe&-Xe:jm.transition!==null?(Eo===0&&(Eo=Bs()),Eo):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Qs(e.type)),e)}function Lt(e,t,r,a){if(50<pa)throw pa=0,Nl=null,Error(c(185));Ir(e,r,a),((Ne&2)===0||e!==Ge)&&(e===Ge&&((Ne&2)===0&&(ho|=r),$e===4&&zn(e,Xe)),dt(e,a),r===1&&Ne===0&&(t.mode&1)===0&&(gr=je()+500,Ga&&vn()))}function dt(e,t){var r=e.callbackNode;jd(e,t);var a=Aa(e,e===Ge?Xe:0);if(a===0)r!==null&&Ms(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ms(r),t===1)e.tag===0?_m(Qu.bind(null,e)):Dc(Qu.bind(null,e)),Dm(function(){(Ne&6)===0&&vn()}),r=null;else{switch(Hs(a)){case 1:r=ai;break;case 4:r=_s;break;case 16:r=za;break;case 536870912:r=js;break;default:r=za}r=rp(r,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qu(e,t){if(yo=-1,Eo=0,(Ne&6)!==0)throw Error(c(327));var r=e.callbackNode;if(vr()&&e.callbackNode!==r)return null;var a=Aa(e,e===Ge?Xe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=wo(e,a);else{t=a;var i=Ne;Ne|=2;var l=Xu();(Ge!==e||Xe!==t)&&(tn=null,gr=je()+500,Hn(e,t));do try{of();break}catch(f){Ku(e,f)}while(!0);Vi(),fo.current=l,Ne=i,Ue!==null?t=0:(Ge=null,Xe=0,t=$e)}if(t!==0){if(t===2&&(i=oi(e),i!==0&&(a=i,t=Sl(e,i))),t===1)throw r=ca,Hn(e,0),zn(e,a),dt(e,je()),r;if(t===6)zn(e,a);else{if(i=e.current.alternate,(a&30)===0&&!rf(i)&&(t=wo(e,a),t===2&&(l=oi(e),l!==0&&(a=l,t=Sl(e,l))),t===1))throw r=ca,Hn(e,0),zn(e,a),dt(e,je()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:Un(e,pt,tn);break;case 3:if(zn(e,a),(a&130023424)===a&&(t=kl+500-je(),10<t)){if(Aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pi(Un.bind(null,e,pt,tn),t);break}Un(e,pt,tn);break;case 4:if(zn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var u=31-Ot(a);l=1<<u,u=t[u],u>i&&(i=u),a&=~l}if(a=i,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*nf(a/1960))-a,10<a){e.timeoutHandle=Pi(Un.bind(null,e,pt,tn),a);break}Un(e,pt,tn);break;case 5:Un(e,pt,tn);break;default:throw Error(c(329))}}}return dt(e,je()),e.callbackNode===r?qu.bind(null,e):null}function Sl(e,t){var r=ua;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=wo(e,t),e!==2&&(t=pt,pt=r,t!==null&&Cl(t)),e}function Cl(e){pt===null?pt=e:pt.push.apply(pt,e)}function rf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],l=i.getSnapshot;i=i.value;try{if(!Rt(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~bl,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ot(t),a=1<<r;e[r]=-1,t&=~a}}function Qu(e){if((Ne&6)!==0)throw Error(c(327));vr();var t=Aa(e,0);if((t&1)===0)return dt(e,je()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var a=oi(e);a!==0&&(t=a,r=Sl(e,a))}if(r===1)throw r=ca,Hn(e,0),zn(e,t),dt(e,je()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,pt,tn),dt(e,je()),null}function Al(e,t){var r=Ne;Ne|=1;try{return e(t)}finally{Ne=r,Ne===0&&(gr=je()+500,Ga&&vn())}}function Bn(e){bn!==null&&bn.tag===0&&(Ne&6)===0&&vr();var t=Ne;Ne|=1;var r=zt.transition,a=Ce;try{if(zt.transition=null,Ce=1,e)return e()}finally{Ce=a,zt.transition=r,Ne=t,(Ne&6)===0&&vn()}}function Tl(){xt=hr.current,Re(hr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Fm(r)),Ue!==null)for(r=Ue.return;r!==null;){var a=r;switch(_i(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ya();break;case 3:dr(),Re(st),Re(Je),Xi();break;case 5:Qi(a);break;case 4:dr();break;case 13:Re(De);break;case 19:Re(De);break;case 10:$i(a.type._context);break;case 22:case 23:Tl()}r=r.return}if(Ge=e,Ue=e=Nn(e.current,null),Xe=xt=t,$e=0,ca=null,bl=ho=jn=0,pt=ua=null,Ln!==null){for(t=0;t<Ln.length;t++)if(r=Ln[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,l=r.pending;if(l!==null){var u=l.next;l.next=i,a.next=u}r.pending=a}Ln=null}return e}function Ku(e,t){do{var r=Ue;try{if(Vi(),ro.current=lo,ao){for(var a=Ie.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ao=!1}if(_n=0,We=Ve=Ie=null,ra=!1,aa=0,wl.current=null,r===null||r.return===null){$e=1,ca=t,Ue=null;break}e:{var l=e,u=r.return,f=r,x=t;if(t=Xe,f.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,I=f,_=I.tag;if((I.mode&1)===0&&(_===0||_===11||_===15)){var D=I.alternate;D?(I.updateQueue=D.updateQueue,I.memoizedState=D.memoizedState,I.lanes=D.lanes):(I.updateQueue=null,I.memoizedState=null)}var q=wu(u);if(q!==null){q.flags&=-257,bu(q,u,f,l,t),q.mode&1&&Eu(l,C,t),t=q,x=C;var ee=t.updateQueue;if(ee===null){var re=new Set;re.add(x),t.updateQueue=re}else ee.add(x);break e}else{if((t&1)===0){Eu(l,C,t),Ol();break e}x=Error(c(426))}}else if(Pe&&f.mode&1){var Be=wu(u);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),bu(Be,u,f,l,t),Hi(mr(x,f));break e}}l=x=mr(x,f),$e!==4&&($e=2),ua===null?ua=[l]:ua.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var N=xu(l,x,t);Yc(l,N);break e;case 1:f=x;var E=l.type,S=l.stateNode;if((l.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wn===null||!wn.has(S)))){l.flags|=65536,t&=-t,l.lanes|=t;var V=yu(l,f,t);Yc(l,V);break e}}l=l.return}while(l!==null)}Ju(r)}catch(oe){t=oe,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function Xu(){var e=fo.current;return fo.current=lo,e===null?lo:e}function Ol(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||(jn&268435455)===0&&(ho&268435455)===0||zn(Ge,Xe)}function wo(e,t){var r=Ne;Ne|=2;var a=Xu();(Ge!==e||Xe!==t)&&(tn=null,Hn(e,t));do try{af();break}catch(i){Ku(e,i)}while(!0);if(Vi(),Ne=r,fo.current=a,Ue!==null)throw Error(c(261));return Ge=null,Xe=0,$e}function af(){for(;Ue!==null;)Zu(Ue)}function of(){for(;Ue!==null&&!Od();)Zu(Ue)}function Zu(e){var t=np(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Ju(e):Ue=t,wl.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Xm(r,t,xt),r!==null){Ue=r;return}}else{if(r=Zm(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);$e===0&&($e=5)}function Un(e,t,r){var a=Ce,i=zt.transition;try{zt.transition=null,Ce=1,lf(e,t,r,a)}finally{zt.transition=i,Ce=a}return null}function lf(e,t,r,a){do vr();while(bn!==null);if((Ne&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Bd(e,l),e===Ge&&(Ue=Ge=null,Xe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||vo||(vo=!0,rp(za,function(){return vr(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=zt.transition,zt.transition=null;var u=Ce;Ce=1;var f=Ne;Ne|=4,wl.current=null,ef(e,r),Vu(r,e),Sm(Oi),Ra=!!Ti,Oi=Ti=null,e.current=r,tf(r),Rd(),Ne=f,Ce=u,zt.transition=l}else e.current=r;if(vo&&(vo=!1,bn=e,xo=i),l=e.pendingLanes,l===0&&(wn=null),Dd(r.stateNode),dt(e,je()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=zl,zl=null,e;return(xo&1)!==0&&e.tag!==0&&vr(),l=e.pendingLanes,(l&1)!==0?e===Nl?pa++:(pa=0,Nl=e):pa=0,vn(),null}function vr(){if(bn!==null){var e=Hs(xo),t=zt.transition,r=Ce;try{if(zt.transition=null,Ce=16>e?16:e,bn===null)var a=!1;else{if(e=bn,bn=null,xo=0,(Ne&6)!==0)throw Error(c(331));var i=Ne;for(Ne|=4,Z=e.current;Z!==null;){var l=Z,u=l.child;if((Z.flags&16)!==0){var f=l.deletions;if(f!==null){for(var x=0;x<f.length;x++){var C=f[x];for(Z=C;Z!==null;){var I=Z;switch(I.tag){case 0:case 11:case 15:sa(8,I,l)}var _=I.child;if(_!==null)_.return=I,Z=_;else for(;Z!==null;){I=Z;var D=I.sibling,q=I.return;if(_u(I),I===C){Z=null;break}if(D!==null){D.return=q,Z=D;break}Z=q}}}var ee=l.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var Be=re.sibling;re.sibling=null,re=Be}while(re!==null)}}Z=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,Z=u;else e:for(;Z!==null;){if(l=Z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:sa(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,Z=N;break e}Z=l.return}}var E=e.current;for(Z=E;Z!==null;){u=Z;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,Z=S;else e:for(u=E;Z!==null;){if(f=Z,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:mo(9,f)}}catch(oe){Me(f,f.return,oe)}if(f===u){Z=null;break e}var V=f.sibling;if(V!==null){V.return=f.return,Z=V;break e}Z=f.return}}if(Ne=i,vn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Na,e)}catch{}a=!0}return a}finally{Ce=r,zt.transition=t}}return!1}function ep(e,t,r){t=mr(r,t),t=xu(e,t,1),e=yn(e,t,1),t=at(),e!==null&&(Ir(e,1,t),dt(e,t))}function Me(e,t,r){if(e.tag===3)ep(e,e,r);else for(;t!==null;){if(t.tag===3){ep(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=mr(r,e),e=yu(t,e,1),t=yn(t,e,1),e=at(),t!==null&&(Ir(t,1,e),dt(t,e));break}}t=t.return}}function sf(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Xe&r)===r&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>je()-kl?Hn(e,0):bl|=r),dt(e,t)}function tp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ca,Ca<<=1,(Ca&130023424)===0&&(Ca=4194304)));var r=at();e=Zt(e,t),e!==null&&(Ir(e,t,r),dt(e,r))}function cf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),tp(e,r)}function uf(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),tp(e,r)}var np;np=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,Km(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Pe&&(t.flags&1048576)!==0&&Ic(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;uo(e,t),e=t.pendingProps;var i=or(t,Je.current);pr(t,r),i=el(null,t,a,e,i,r);var l=tl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(a)?(l=!0,Wa(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gi(t),i.updater=so,t.stateNode=i,i._reactInternals=t,ll(t,a,e,r),t=pl(null,t,a,!0,l,r)):(t.tag=0,Pe&&l&&Mi(t),rt(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=df(a),e=Ft(a,e),i){case 0:t=ul(null,t,a,e,r);break e;case 1:t=Au(null,t,a,e,r);break e;case 11:t=ku(null,t,a,e,r);break e;case 14:t=zu(null,t,a,Ft(a.type,e),r);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ft(a,i),ul(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ft(a,i),Au(e,t,a,i,r);case 3:e:{if(Tu(t),e===null)throw Error(c(387));a=t.pendingProps,l=t.memoizedState,i=l.element,$c(e,t),to(t,a,null,r);var u=t.memoizedState;if(a=u.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=mr(Error(c(423)),t),t=Ou(e,t,a,r,i);break e}else if(a!==i){i=mr(Error(c(424)),t),t=Ou(e,t,a,r,i);break e}else for(vt=fn(t.stateNode.containerInfo.firstChild),gt=t,Pe=!0,Pt=null,r=Uc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),a===i){t=en(e,t,r);break e}rt(e,t,a,r)}t=t.child}return t;case 5:return Gc(t),e===null&&Bi(t),a=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,u=i.children,Ri(a,i)?u=null:l!==null&&Ri(a,l)&&(t.flags|=32),Cu(e,t),rt(e,t,u,r),t.child;case 6:return e===null&&Bi(t),null;case 13:return Ru(e,t,r);case 4:return qi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=cr(t,null,a,r):rt(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ft(a,i),ku(e,t,a,i,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,l=t.memoizedProps,u=i.value,Te(Za,a._currentValue),a._currentValue=u,l!==null)if(Rt(l.value,u)){if(l.children===i.children&&!st.current){t=en(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var f=l.dependencies;if(f!==null){u=l.child;for(var x=f.firstContext;x!==null;){if(x.context===a){if(l.tag===1){x=Jt(-1,r&-r),x.tag=2;var C=l.updateQueue;if(C!==null){C=C.shared;var I=C.pending;I===null?x.next=x:(x.next=I.next,I.next=x),C.pending=x}}l.lanes|=r,x=l.alternate,x!==null&&(x.lanes|=r),Yi(l.return,r,t),f.lanes|=r;break}x=x.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=r,f=u.alternate,f!==null&&(f.lanes|=r),Yi(u,r,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}rt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,pr(t,r),i=bt(i),a=a(i),t.flags|=1,rt(e,t,a,r),t.child;case 14:return a=t.type,i=Ft(a,t.pendingProps),i=Ft(a.type,i),zu(e,t,a,i,r);case 15:return Nu(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ft(a,i),uo(e,t),t.tag=1,ct(a)?(e=!0,Wa(t)):e=!1,pr(t,r),gu(t,a,i),ll(t,a,i,r),pl(null,t,a,!0,e,r);case 19:return Fu(e,t,r);case 22:return Su(e,t,r)}throw Error(c(156,t.tag))};function rp(e,t){return Ls(e,t)}function pf(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,a){return new pf(e,t,r,a)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function df(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ae)return 11;if(e===X)return 14}return 2}function Nn(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bo(e,t,r,a,i,l){var u=2;if(a=e,typeof e=="function")Rl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ye:return Vn(r.children,i,l,t);case J:u=8,i|=8;break;case me:return e=Nt(12,r,t,i|2),e.elementType=me,e.lanes=l,e;case M:return e=Nt(13,r,t,i),e.elementType=M,e.lanes=l,e;case xe:return e=Nt(19,r,t,i),e.elementType=xe,e.lanes=l,e;case ze:return ko(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:u=10;break e;case pe:u=9;break e;case Ae:u=11;break e;case X:u=14;break e;case ve:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=Nt(u,r,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function Vn(e,t,r,a){return e=Nt(7,e,a,t),e.lanes=r,e}function ko(e,t,r,a){return e=Nt(22,e,a,t),e.elementType=ze,e.lanes=r,e.stateNode={isHidden:!1},e}function Pl(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function Fl(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mf(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,r,a,i,l,u,f,x){return e=new mf(e,t,r,f,x),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gi(l),e}function ff(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function ap(e){if(!e)return gn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(ct(r))return Pc(e,r,t)}return t}function op(e,t,r,a,i,l,u,f,x){return e=Dl(r,a,!0,e,i,l,u,f,x),e.context=ap(null),r=e.current,a=at(),i=kn(r),l=Jt(a,i),l.callback=t??null,yn(r,l,i),e.current.lanes=i,Ir(e,i,a),dt(e,a),e}function zo(e,t,r,a){var i=t.current,l=at(),u=kn(i);return r=ap(r),t.context===null?t.context=r:t.pendingContext=r,t=Jt(l,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=yn(i,t,u),e!==null&&(Lt(e,i,u,l),eo(e,i,u)),u}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Il(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function hf(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}So.prototype.render=Ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));zo(e,t,null,null)},So.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){zo(null,e,null,null)}),t[qt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=$s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&Gs(e)}};function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function gf(e,t,r,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var C=No(u);l.call(C)}}var u=op(t,a,e,0,null,!1,!1,"",sp);return e._reactRootContainer=u,e[qt]=u.current,Qr(e.nodeType===8?e.parentNode:e),Bn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var f=a;a=function(){var C=No(x);f.call(C)}}var x=Dl(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=x,e[qt]=x.current,Qr(e.nodeType===8?e.parentNode:e),Bn(function(){zo(t,x,r,a)}),x}function Ao(e,t,r,a,i){var l=r._reactRootContainer;if(l){var u=l;if(typeof i=="function"){var f=i;i=function(){var x=No(u);f.call(x)}}zo(t,u,e,i)}else u=gf(r,t,e,i,a);return No(u)}Us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(li(t,r|1),dt(t,je()),(Ne&6)===0&&(gr=je()+500,vn()))}break;case 13:Bn(function(){var a=Zt(e,1);if(a!==null){var i=at();Lt(a,e,1,i)}}),Il(e,1)}},si=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var r=at();Lt(t,e,134217728,r)}Il(e,134217728)}},Vs=function(e){if(e.tag===13){var t=kn(e),r=Zt(e,t);if(r!==null){var a=at();Lt(r,e,t,a)}Il(e,t)}},$s=function(){return Ce},Ys=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}},ei=function(e,t,r){switch(t){case"input":if(Wo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=$a(a);if(!i)throw Error(c(90));G(a),Wo(a,i)}}}break;case"textarea":Es(e,r);break;case"select":t=r.value,t!=null&&Gn(e,!!r.multiple,t,!1)}},Ts=Al,Os=Bn;var vf={usingClientEntryPoint:!1,Events:[Zr,rr,$a,Cs,As,Al]},da={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Na=To.inject(xf),jt=To}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf,mt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ml(t))throw Error(c(200));return ff(e,t,null,r)},mt.createRoot=function(e,t){if(!Ml(e))throw Error(c(299));var r=!1,a="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,r,!1,a,i),e[qt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Ll(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ds(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Bn(e)},mt.hydrate=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!0,r)},mt.hydrateRoot=function(e,t,r){if(!Ml(e))throw Error(c(405));var a=r!=null&&r.hydratedSources||null,i=!1,l="",u=lp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=op(t,null,e,1,r??null,i,!1,l,u),e[qt]=t.current,Qr(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new So(t)},mt.render=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!1,r)},mt.unmountComponentAtNode=function(e){if(!Co(e))throw Error(c(40));return e._reactRootContainer?(Bn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1},mt.unstable_batchedUpdates=Al,mt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Co(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,t,r,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var fp;function Yp(){if(fp)return jl.exports;fp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),jl.exports=Cf(),jl.exports}var hp;function Af(){if(hp)return Oo;hp=1;var o=Yp();return Oo.createRoot=o.createRoot,Oo.hydrateRoot=o.hydrateRoot,Oo}var Tf=Af();Yp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},xa.apply(null,arguments)}var An;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(An||(An={}));const gp="popstate";function Of(o){o===void 0&&(o={});function s(p,d){let{pathname:m,search:h,hash:v}=p.location;return Zl("",{pathname:m,search:h,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(p,d){return typeof d=="string"?d:Lo(d)}return Pf(s,c,null,o)}function Le(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Wp(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Rf(){return Math.random().toString(36).substr(2,8)}function vp(o,s){return{usr:o.state,key:o.key,idx:s}}function Zl(o,s,c,p){return c===void 0&&(c=null),xa({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?Nr(s):s,{state:c,key:s&&s.key||p||Rf()})}function Lo(o){let{pathname:s="/",search:c="",hash:p=""}=o;return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),p&&p!=="#"&&(s+=p.charAt(0)==="#"?p:"#"+p),s}function Nr(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substr(c),o=o.substr(0,c));let p=o.indexOf("?");p>=0&&(s.search=o.substr(p),o=o.substr(0,p)),o&&(s.pathname=o)}return s}function Pf(o,s,c,p){p===void 0&&(p={});let{window:d=document.defaultView,v5Compat:m=!1}=p,h=d.history,v=An.Pop,g=null,w=k();w==null&&(w=0,h.replaceState(xa({},h.state,{idx:w}),""));function k(){return(h.state||{idx:null}).idx}function z(){v=An.Pop;let A=k(),U=A==null?null:A-w;w=A,g&&g({action:v,location:T.location,delta:U})}function O(A,U){v=An.Push;let Y=Zl(T.location,A,U);w=k()+1;let K=vp(Y,w),W=T.createHref(Y);try{h.pushState(K,"",W)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;d.location.assign(W)}m&&g&&g({action:v,location:T.location,delta:1})}function L(A,U){v=An.Replace;let Y=Zl(T.location,A,U);w=k();let K=vp(Y,w),W=T.createHref(Y);h.replaceState(K,"",W),m&&g&&g({action:v,location:T.location,delta:0})}function j(A){let U=d.location.origin!=="null"?d.location.origin:d.location.href,Y=typeof A=="string"?A:Lo(A);return Y=Y.replace(/ $/,"%20"),Le(U,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,U)}let T={get action(){return v},get location(){return o(d,h)},listen(A){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(gp,z),g=A,()=>{d.removeEventListener(gp,z),g=null}},createHref(A){return s(d,A)},createURL:j,encodeLocation(A){let U=j(A);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:O,replace:L,go(A){return h.go(A)}};return T}var xp;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(xp||(xp={}));function Ff(o,s,c){return c===void 0&&(c="/"),Df(o,s,c)}function Df(o,s,c,p){let d=typeof s=="string"?Nr(s):s,m=kr(d.pathname||"/",c);if(m==null)return null;let h=Gp(o);If(h);let v=null,g=Wf(m);for(let w=0;v==null&&w<h.length;++w)v=$f(h[w],g);return v}function Gp(o,s,c,p){s===void 0&&(s=[]),c===void 0&&(c=[]),p===void 0&&(p="");let d=(m,h,v)=>{let g={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:h,route:m};g.relativePath.startsWith("/")&&(Le(g.relativePath.startsWith(p),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(p.length));let w=On([p,g.relativePath]),k=c.concat(g);m.children&&m.children.length>0&&(Le(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),Gp(m.children,s,k,w)),!(m.path==null&&!m.index)&&s.push({path:w,score:Uf(w,m.index),routesMeta:k})};return o.forEach((m,h)=>{var v;if(m.path===""||!((v=m.path)!=null&&v.includes("?")))d(m,h);else for(let g of qp(m.path))d(m,h,g)}),s}function qp(o){let s=o.split("/");if(s.length===0)return[];let[c,...p]=s,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(p.length===0)return d?[m,""]:[m];let h=qp(p.join("/")),v=[];return v.push(...h.map(g=>g===""?m:[m,g].join("/"))),d&&v.push(...h),v.map(g=>o.startsWith("/")&&g===""?"/":g)}function If(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:Vf(s.routesMeta.map(p=>p.childrenIndex),c.routesMeta.map(p=>p.childrenIndex)))}const Lf=/^:[\w-]+$/,Mf=3,_f=2,jf=1,Bf=10,Hf=-2,yp=o=>o==="*";function Uf(o,s){let c=o.split("/"),p=c.length;return c.some(yp)&&(p+=Hf),s&&(p+=_f),c.filter(d=>!yp(d)).reduce((d,m)=>d+(Lf.test(m)?Mf:m===""?jf:Bf),p)}function Vf(o,s){return o.length===s.length&&o.slice(0,-1).every((p,d)=>p===s[d])?o[o.length-1]-s[s.length-1]:0}function $f(o,s,c){let{routesMeta:p}=o,d={},m="/",h=[];for(let v=0;v<p.length;++v){let g=p[v],w=v===p.length-1,k=m==="/"?s:s.slice(m.length)||"/",z=Jl({path:g.relativePath,caseSensitive:g.caseSensitive,end:w},k),O=g.route;if(!z)return null;Object.assign(d,z.params),h.push({params:d,pathname:On([m,z.pathname]),pathnameBase:Qf(On([m,z.pathnameBase])),route:O}),z.pathnameBase!=="/"&&(m=On([m,z.pathnameBase]))}return h}function Jl(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,p]=Yf(o.path,o.caseSensitive,o.end),d=s.match(c);if(!d)return null;let m=d[0],h=m.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:p.reduce((w,k,z)=>{let{paramName:O,isOptional:L}=k;if(O==="*"){let T=v[z]||"";h=m.slice(0,m.length-T.length).replace(/(.)\/+$/,"$1")}const j=v[z];return L&&!j?w[O]=void 0:w[O]=(j||"").replace(/%2F/g,"/"),w},{}),pathname:m,pathnameBase:h,pattern:o}}function Yf(o,s,c){s===void 0&&(s=!1),c===void 0&&(c=!0),Wp(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let p=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,g)=>(p.push({paramName:v,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(p.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),p]}function Wf(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Wp(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function kr(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,p=o.charAt(c);return p&&p!=="/"?null:o.slice(c)||"/"}function Gf(o,s){s===void 0&&(s="/");let{pathname:c,search:p="",hash:d=""}=typeof o=="string"?Nr(o):o,m;return c?(c=Qp(c),c.startsWith("/")?m=Ep(c.substring(1),"/"):m=Ep(c,s)):m=s,{pathname:m,search:Kf(p),hash:Xf(d)}}function Ep(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Ul(o,s,c,p){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qf(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ps(o,s){let c=qf(o);return s?c.map((p,d)=>d===c.length-1?p.pathname:p.pathnameBase):c.map(p=>p.pathnameBase)}function ds(o,s,c,p){p===void 0&&(p=!1);let d;typeof o=="string"?d=Nr(o):(d=xa({},o),Le(!d.pathname||!d.pathname.includes("?"),Ul("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),Ul("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),Ul("#","search","hash",d)));let m=o===""||d.pathname==="",h=m?"/":d.pathname,v;if(h==null)v=c;else{let z=s.length-1;if(!p&&h.startsWith("..")){let O=h.split("/");for(;O[0]==="..";)O.shift(),z-=1;d.pathname=O.join("/")}v=z>=0?s[z]:"/"}let g=Gf(d,v),w=h&&h!=="/"&&h.endsWith("/"),k=(m||h===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(w||k)&&(g.pathname+="/"),g}const Qp=o=>o.replace(/\/\/+/g,"/"),On=o=>Qp(o.join("/")),Qf=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Kf=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Xf=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Zf(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Kp=["post","put","patch","delete"];new Set(Kp);const Jf=["get",...Kp];new Set(Jf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},ya.apply(null,arguments)}const Ho=y.createContext(null),Xp=y.createContext(null),an=y.createContext(null),Uo=y.createContext(null),Wt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Zp=y.createContext(null);function eh(o,s){let{relative:c}=s===void 0?{}:s;Sr()||Le(!1);let{basename:p,navigator:d}=y.useContext(an),{hash:m,pathname:h,search:v}=Vo(o,{relative:c}),g=h;return p!=="/"&&(g=h==="/"?p:On([p,h])),d.createHref({pathname:g,search:v,hash:m})}function Sr(){return y.useContext(Uo)!=null}function Gt(){return Sr()||Le(!1),y.useContext(Uo).location}function Jp(o){y.useContext(an).static||y.useLayoutEffect(o)}function on(){let{isDataRoute:o}=y.useContext(Wt);return o?hh():th()}function th(){Sr()||Le(!1);let o=y.useContext(Ho),{basename:s,future:c,navigator:p}=y.useContext(an),{matches:d}=y.useContext(Wt),{pathname:m}=Gt(),h=JSON.stringify(ps(d,c.v7_relativeSplatPath)),v=y.useRef(!1);return Jp(()=>{v.current=!0}),y.useCallback(function(w,k){if(k===void 0&&(k={}),!v.current)return;if(typeof w=="number"){p.go(w);return}let z=ds(w,JSON.parse(h),m,k.relative==="path");o==null&&s!=="/"&&(z.pathname=z.pathname==="/"?s:On([s,z.pathname])),(k.replace?p.replace:p.push)(z,k.state,k)},[s,p,h,m,o])}const nh=y.createContext(null);function rh(o){let s=y.useContext(Wt).outlet;return s&&y.createElement(nh.Provider,{value:o},s)}function ed(){let{matches:o}=y.useContext(Wt),s=o[o.length-1];return s?s.params:{}}function Vo(o,s){let{relative:c}=s===void 0?{}:s,{future:p}=y.useContext(an),{matches:d}=y.useContext(Wt),{pathname:m}=Gt(),h=JSON.stringify(ps(d,p.v7_relativeSplatPath));return y.useMemo(()=>ds(o,JSON.parse(h),m,c==="path"),[o,h,m,c])}function ah(o,s){return oh(o,s)}function oh(o,s,c,p){Sr()||Le(!1);let{navigator:d}=y.useContext(an),{matches:m}=y.useContext(Wt),h=m[m.length-1],v=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let w=Gt(),k;if(s){var z;let A=typeof s=="string"?Nr(s):s;g==="/"||(z=A.pathname)!=null&&z.startsWith(g)||Le(!1),k=A}else k=w;let O=k.pathname||"/",L=O;if(g!=="/"){let A=g.replace(/^\//,"").split("/");L="/"+O.replace(/^\//,"").split("/").slice(A.length).join("/")}let j=Ff(o,{pathname:L}),T=uh(j&&j.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:On([g,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:On([g,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,c,p);return s&&T?y.createElement(Uo.Provider,{value:{location:ya({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:An.Pop}},T):T}function ih(){let o=fh(),s=Zf(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),c?y.createElement("pre",{style:d},c):null,null)}const lh=y.createElement(ih,null);class sh extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){console.error("React Router caught the following error during render",s,c)}render(){return this.state.error!==void 0?y.createElement(Wt.Provider,{value:this.props.routeContext},y.createElement(Zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(o){let{routeContext:s,match:c,children:p}=o,d=y.useContext(Ho);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(Wt.Provider,{value:s},p)}function uh(o,s,c,p){var d;if(s===void 0&&(s=[]),c===void 0&&(c=null),p===void 0&&(p=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=p)!=null&&m.v7_partialHydration&&s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let h=o,v=(d=c)==null?void 0:d.errors;if(v!=null){let k=h.findIndex(z=>z.route.id&&(v==null?void 0:v[z.route.id])!==void 0);k>=0||Le(!1),h=h.slice(0,Math.min(h.length,k+1))}let g=!1,w=-1;if(c&&p&&p.v7_partialHydration)for(let k=0;k<h.length;k++){let z=h[k];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(w=k),z.route.id){let{loaderData:O,errors:L}=c,j=z.route.loader&&O[z.route.id]===void 0&&(!L||L[z.route.id]===void 0);if(z.route.lazy||j){g=!0,w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}return h.reduceRight((k,z,O)=>{let L,j=!1,T=null,A=null;c&&(L=v&&z.route.id?v[z.route.id]:void 0,T=z.route.errorElement||lh,g&&(w<0&&O===0?(gh("route-fallback"),j=!0,A=null):w===O&&(j=!0,A=z.route.hydrateFallbackElement||null)));let U=s.concat(h.slice(0,O+1)),Y=()=>{let K;return L?K=T:j?K=A:z.route.Component?K=y.createElement(z.route.Component,null):z.route.element?K=z.route.element:K=k,y.createElement(ch,{match:z,routeContext:{outlet:k,matches:U,isDataRoute:c!=null},children:K})};return c&&(z.route.ErrorBoundary||z.route.errorElement||O===0)?y.createElement(sh,{location:c.location,revalidation:c.revalidation,component:T,error:L,children:Y(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):Y()},null)}var td=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(td||{}),nd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(nd||{});function ph(o){let s=y.useContext(Ho);return s||Le(!1),s}function dh(o){let s=y.useContext(Xp);return s||Le(!1),s}function mh(o){let s=y.useContext(Wt);return s||Le(!1),s}function rd(o){let s=mh(),c=s.matches[s.matches.length-1];return c.route.id||Le(!1),c.route.id}function fh(){var o;let s=y.useContext(Zp),c=dh(),p=rd();return s!==void 0?s:(o=c.errors)==null?void 0:o[p]}function hh(){let{router:o}=ph(td.UseNavigateStable),s=rd(nd.UseNavigateStable),c=y.useRef(!1);return Jp(()=>{c.current=!0}),y.useCallback(function(d,m){m===void 0&&(m={}),c.current&&(typeof d=="number"?o.navigate(d):o.navigate(d,ya({fromRouteId:s},m)))},[o,s])}const wp={};function gh(o,s,c){wp[o]||(wp[o]=!0)}function vh(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xh(o){let{to:s,replace:c,state:p,relative:d}=o;Sr()||Le(!1);let{future:m,static:h}=y.useContext(an),{matches:v}=y.useContext(Wt),{pathname:g}=Gt(),w=on(),k=ds(s,ps(v,m.v7_relativeSplatPath),g,d==="path"),z=JSON.stringify(k);return y.useEffect(()=>w(JSON.parse(z),{replace:c,state:p,relative:d}),[w,z,d,c,p]),null}function yh(o){return rh(o.context)}function Qe(o){Le(!1)}function Eh(o){let{basename:s="/",children:c=null,location:p,navigationType:d=An.Pop,navigator:m,static:h=!1,future:v}=o;Sr()&&Le(!1);let g=s.replace(/^\/*/,"/"),w=y.useMemo(()=>({basename:g,navigator:m,static:h,future:ya({v7_relativeSplatPath:!1},v)}),[g,v,m,h]);typeof p=="string"&&(p=Nr(p));let{pathname:k="/",search:z="",hash:O="",state:L=null,key:j="default"}=p,T=y.useMemo(()=>{let A=kr(k,g);return A==null?null:{location:{pathname:A,search:z,hash:O,state:L,key:j},navigationType:d}},[g,k,z,O,L,j,d]);return T==null?null:y.createElement(an.Provider,{value:w},y.createElement(Uo.Provider,{children:c,value:T}))}function wh(o){let{children:s,location:c}=o;return ah(es(s),c)}new Promise(()=>{});function es(o,s){s===void 0&&(s=[]);let c=[];return y.Children.forEach(o,(p,d)=>{if(!y.isValidElement(p))return;let m=[...s,d];if(p.type===y.Fragment){c.push.apply(c,es(p.props.children,m));return}p.type!==Qe&&Le(!1),!p.props.index||!p.props.children||Le(!1);let h={id:p.props.id||m.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(h.children=es(p.props.children,m)),c.push(h)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var p in c)({}).hasOwnProperty.call(c,p)&&(o[p]=c[p])}return o},Mo.apply(null,arguments)}function ad(o,s){if(o==null)return{};var c={};for(var p in o)if({}.hasOwnProperty.call(o,p)){if(s.indexOf(p)!==-1)continue;c[p]=o[p]}return c}function bh(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function kh(o,s){return o.button===0&&(!s||s==="_self")&&!bh(o)}function ts(o){return o===void 0&&(o=""),new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,c)=>{let p=o[c];return s.concat(Array.isArray(p)?p.map(d=>[c,d]):[[c,p]])},[]))}function zh(o,s){let c=ts(o);return s&&s.forEach((p,d)=>{c.has(d)||s.getAll(d).forEach(m=>{c.append(d,m)})}),c}const Nh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ch="6";try{window.__reactRouterVersion=Ch}catch{}const Ah=y.createContext({isTransitioning:!1}),Th="startTransition",bp=zf[Th];function Oh(o){let{basename:s,children:c,future:p,window:d}=o,m=y.useRef();m.current==null&&(m.current=Of({window:d,v5Compat:!0}));let h=m.current,[v,g]=y.useState({action:h.action,location:h.location}),{v7_startTransition:w}=p||{},k=y.useCallback(z=>{w&&bp?bp(()=>g(z)):g(z)},[g,w]);return y.useLayoutEffect(()=>h.listen(k),[h,k]),y.useEffect(()=>vh(p),[p]),y.createElement(Eh,{basename:s,children:c,location:v.location,navigationType:v.action,navigator:h,future:p})}const Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=y.forwardRef(function(s,c){let{onClick:p,relative:d,reloadDocument:m,replace:h,state:v,target:g,to:w,preventScrollReset:k,viewTransition:z}=s,O=ad(s,Nh),{basename:L}=y.useContext(an),j,T=!1;if(typeof w=="string"&&Ph.test(w)&&(j=w,Rh))try{let K=new URL(window.location.href),W=w.startsWith("//")?new URL(K.protocol+w):new URL(w),ae=kr(W.pathname,L);W.origin===K.origin&&ae!=null?w=ae+W.search+W.hash:T=!0}catch{}let A=eh(w,{relative:d}),U=Dh(w,{replace:h,state:v,target:g,preventScrollReset:k,relative:d,viewTransition:z});function Y(K){p&&p(K),K.defaultPrevented||U(K)}return y.createElement("a",Mo({},O,{href:j||A,onClick:T||m?p:Y,ref:c,target:g}))}),Cn=y.forwardRef(function(s,c){let{"aria-current":p="page",caseSensitive:d=!1,className:m="",end:h=!1,style:v,to:g,viewTransition:w,children:k}=s,z=ad(s,Sh),O=Vo(g,{relative:z.relative}),L=Gt(),j=y.useContext(Xp),{navigator:T,basename:A}=y.useContext(an),U=j!=null&&Lh(O)&&w===!0,Y=T.encodeLocation?T.encodeLocation(O).pathname:O.pathname,K=L.pathname,W=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;d||(K=K.toLowerCase(),W=W?W.toLowerCase():null,Y=Y.toLowerCase()),W&&A&&(W=kr(W,A)||W);const ae=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ie=K===Y||!h&&K.startsWith(Y)&&K.charAt(ae)==="/",ye=W!=null&&(W===Y||!h&&W.startsWith(Y)&&W.charAt(Y.length)==="/"),J={isActive:ie,isPending:ye,isTransitioning:U},me=ie?p:void 0,H;typeof m=="function"?H=m(J):H=[m,ie?"active":null,ye?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let pe=typeof v=="function"?v(J):v;return y.createElement(Q,Mo({},z,{"aria-current":me,className:H,ref:c,style:pe,to:g,viewTransition:w}),typeof k=="function"?k(J):k)});var ns;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(ns||(ns={}));var kp;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(kp||(kp={}));function Fh(o){let s=y.useContext(Ho);return s||Le(!1),s}function Dh(o,s){let{target:c,replace:p,state:d,preventScrollReset:m,relative:h,viewTransition:v}=s===void 0?{}:s,g=on(),w=Gt(),k=Vo(o,{relative:h});return y.useCallback(z=>{if(kh(z,c)){z.preventDefault();let O=p!==void 0?p:Lo(w)===Lo(k);g(o,{replace:O,state:d,preventScrollReset:m,relative:h,viewTransition:v})}},[w,g,k,p,d,c,o,m,h,v])}function Ih(o){let s=y.useRef(ts(o)),c=y.useRef(!1),p=Gt(),d=y.useMemo(()=>zh(p.search,c.current?null:s.current),[p.search]),m=on(),h=y.useCallback((v,g)=>{const w=ts(typeof v=="function"?v(d):v);c.current=!0,m("?"+w,g)},[m,d]);return[d,h]}function Lh(o,s){s===void 0&&(s={});let c=y.useContext(Ah);c==null&&Le(!1);let{basename:p}=Fh(ns.useViewTransitionState),d=Vo(o,{relative:s.relative});if(!c.isTransitioning)return!1;let m=kr(c.currentLocation.pathname,p)||c.currentLocation.pathname,h=kr(c.nextLocation.pathname,p)||c.nextLocation.pathname;return Jl(d.pathname,h)!=null||Jl(d.pathname,m)!=null}var Vl,zp;function Mh(){if(zp)return Vl;zp=1;var o=typeof Element<"u",s=typeof Map=="function",c=typeof Set=="function",p=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(m,h){if(m===h)return!0;if(m&&h&&typeof m=="object"&&typeof h=="object"){if(m.constructor!==h.constructor)return!1;var v,g,w;if(Array.isArray(m)){if(v=m.length,v!=h.length)return!1;for(g=v;g--!==0;)if(!d(m[g],h[g]))return!1;return!0}var k;if(s&&m instanceof Map&&h instanceof Map){if(m.size!==h.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!h.has(g.value[0]))return!1;for(k=m.entries();!(g=k.next()).done;)if(!d(g.value[1],h.get(g.value[0])))return!1;return!0}if(c&&m instanceof Set&&h instanceof Set){if(m.size!==h.size)return!1;for(k=m.entries();!(g=k.next()).done;)if(!h.has(g.value[0]))return!1;return!0}if(p&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(h)){if(v=m.length,v!=h.length)return!1;for(g=v;g--!==0;)if(m[g]!==h[g])return!1;return!0}if(m.constructor===RegExp)return m.source===h.source&&m.flags===h.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof h.valueOf=="function")return m.valueOf()===h.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof h.toString=="function")return m.toString()===h.toString();if(w=Object.keys(m),v=w.length,v!==Object.keys(h).length)return!1;for(g=v;g--!==0;)if(!Object.prototype.hasOwnProperty.call(h,w[g]))return!1;if(o&&m instanceof Element)return!1;for(g=v;g--!==0;)if(!((w[g]==="_owner"||w[g]==="__v"||w[g]==="__o")&&m.$$typeof)&&!d(m[w[g]],h[w[g]]))return!1;return!0}return m!==m&&h!==h}return Vl=function(h,v){try{return d(h,v)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},Vl}var _h=Mh();const jh=Bo(_h);var $l,Np;function Bh(){if(Np)return $l;Np=1;var o=function(s,c,p,d,m,h,v,g){if(!s){var w;if(c===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[p,d,m,h,v,g],z=0;w=new Error(c.replace(/%s/g,function(){return k[z++]})),w.name="Invariant Violation"}throw w.framesToPop=1,w}};return $l=o,$l}var Hh=Bh();const Sp=Bo(Hh);var Yl,Cp;function Uh(){return Cp||(Cp=1,Yl=function(s,c,p,d){var m=p?p.call(d,s,c):void 0;if(m!==void 0)return!!m;if(s===c)return!0;if(typeof s!="object"||!s||typeof c!="object"||!c)return!1;var h=Object.keys(s),v=Object.keys(c);if(h.length!==v.length)return!1;for(var g=Object.prototype.hasOwnProperty.bind(c),w=0;w<h.length;w++){var k=h[w];if(!g(k))return!1;var z=s[k],O=c[k];if(m=p?p.call(d,z,O,k):void 0,m===!1||m===void 0&&z!==O)return!1}return!0}),Yl}var Vh=Uh();const $h=Bo(Vh);var od=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(od||{}),Wl={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ap=Object.values(od),ms={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yh=Object.entries(ms).reduce((o,[s,c])=>(o[c]=s,o),{}),Mt="data-rh",yr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Er=(o,s)=>{for(let c=o.length-1;c>=0;c-=1){const p=o[c];if(Object.prototype.hasOwnProperty.call(p,s))return p[s]}return null},Wh=o=>{let s=Er(o,"title");const c=Er(o,yr.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),c&&s)return c.replace(/%s/g,()=>s);const p=Er(o,yr.DEFAULT_TITLE);return s||p||void 0},Gh=o=>Er(o,yr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Gl=(o,s)=>s.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,p)=>({...c,...p}),{}),qh=(o,s)=>s.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,p)=>{if(!c.length){const d=Object.keys(p);for(let m=0;m<d.length;m+=1){const v=d[m].toLowerCase();if(o.indexOf(v)!==-1&&p[v])return c.concat(p)}}return c},[]),Qh=o=>console&&typeof console.warn=="function"&&console.warn(o),ma=(o,s,c)=>{const p={};return c.filter(d=>Array.isArray(d[o])?!0:(typeof d[o]<"u"&&Qh(`Helmet: ${o} should be of type "Array". Instead found type "${typeof d[o]}"`),!1)).map(d=>d[o]).reverse().reduce((d,m)=>{const h={};m.filter(g=>{let w;const k=Object.keys(g);for(let O=0;O<k.length;O+=1){const L=k[O],j=L.toLowerCase();s.indexOf(j)!==-1&&!(w==="rel"&&g[w].toLowerCase()==="canonical")&&!(j==="rel"&&g[j].toLowerCase()==="stylesheet")&&(w=j),s.indexOf(L)!==-1&&(L==="innerHTML"||L==="cssText"||L==="itemprop")&&(w=L)}if(!w||!g[w])return!1;const z=g[w].toLowerCase();return p[w]||(p[w]={}),h[w]||(h[w]={}),p[w][z]?!1:(h[w][z]=!0,!0)}).reverse().forEach(g=>d.push(g));const v=Object.keys(h);for(let g=0;g<v.length;g+=1){const w=v[g],k={...p[w],...h[w]};p[w]=k}return d},[]).reverse()},Kh=(o,s)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][s])return!0}return!1},Xh=o=>({baseTag:qh(["href"],o),bodyAttributes:Gl("bodyAttributes",o),defer:Er(o,yr.DEFER),encode:Er(o,yr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Gl("htmlAttributes",o),linkTags:ma("link",["rel","href"],o),metaTags:ma("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:ma("noscript",["innerHTML"],o),onChangeClientState:Gh(o),scriptTags:ma("script",["src","innerHTML"],o),styleTags:ma("style",["cssText"],o),title:Wh(o),titleAttributes:Gl("titleAttributes",o),prioritizeSeoTags:Kh(o,yr.PRIORITIZE_SEO_TAGS)}),id=o=>Array.isArray(o)?o.join(""):o,Zh=(o,s)=>{const c=Object.keys(o);for(let p=0;p<c.length;p+=1)if(s[c[p]]&&s[c[p]].includes(o[c[p]]))return!0;return!1},ql=(o,s)=>Array.isArray(o)?o.reduce((c,p)=>(Zh(p,s)?c.priority.push(p):c.default.push(p),c),{priority:[],default:[]}):{default:o,priority:[]},Tp=(o,s)=>({...o,[s]:void 0}),Jh=["noscript","script","style"],rs=(o,s=!0)=>s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ld=o=>Object.keys(o).reduce((s,c)=>{const p=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return s?`${s} ${p}`:p},""),eg=(o,s,c,p)=>{const d=ld(c),m=id(s);return d?`<${o} ${Mt}="true" ${d}>${rs(m,p)}</${o}>`:`<${o} ${Mt}="true">${rs(m,p)}</${o}>`},tg=(o,s,c=!0)=>s.reduce((p,d)=>{const m=d,h=Object.keys(m).filter(w=>!(w==="innerHTML"||w==="cssText")).reduce((w,k)=>{const z=typeof m[k]>"u"?k:`${k}="${rs(m[k],c)}"`;return w?`${w} ${z}`:z},""),v=m.innerHTML||m.cssText||"",g=Jh.indexOf(o)===-1;return`${p}<${o} ${Mt}="true" ${h}${g?"/>":`>${v}</${o}>`}`},""),sd=(o,s={})=>Object.keys(o).reduce((c,p)=>{const d=ms[p];return c[d||p]=o[p],c},s),ng=(o,s,c)=>{const p={key:s,[Mt]:!0},d=sd(c,p);return[n.createElement("title",d,s)]},Io=(o,s)=>s.map((c,p)=>{const d={key:p,[Mt]:!0};return Object.keys(c).forEach(m=>{const v=ms[m]||m;if(v==="innerHTML"||v==="cssText"){const g=c.innerHTML||c.cssText;d.dangerouslySetInnerHTML={__html:g}}else d[v]=c[m]}),n.createElement(o,d)}),Ct=(o,s,c=!0)=>{switch(o){case"title":return{toComponent:()=>ng(o,s.title,s.titleAttributes),toString:()=>eg(o,s.title,s.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>sd(s),toString:()=>ld(s)};default:return{toComponent:()=>Io(o,s),toString:()=>tg(o,s,c)}}},rg=({metaTags:o,linkTags:s,scriptTags:c,encode:p})=>{const d=ql(o,Wl.meta),m=ql(s,Wl.link),h=ql(c,Wl.script);return{priorityMethods:{toComponent:()=>[...Io("meta",d.priority),...Io("link",m.priority),...Io("script",h.priority)],toString:()=>`${Ct("meta",d.priority,p)} ${Ct("link",m.priority,p)} ${Ct("script",h.priority,p)}`},metaTags:d.default,linkTags:m.default,scriptTags:h.default}},ag=o=>{const{baseTag:s,bodyAttributes:c,encode:p=!0,htmlAttributes:d,noscriptTags:m,styleTags:h,title:v="",titleAttributes:g,prioritizeSeoTags:w}=o;let{linkTags:k,metaTags:z,scriptTags:O}=o,L={toComponent:()=>{},toString:()=>""};return w&&({priorityMethods:L,linkTags:k,metaTags:z,scriptTags:O}=rg(o)),{priority:L,base:Ct("base",s,p),bodyAttributes:Ct("bodyAttributes",c,p),htmlAttributes:Ct("htmlAttributes",d,p),link:Ct("link",k,p),meta:Ct("meta",z,p),noscript:Ct("noscript",m,p),script:Ct("script",O,p),style:Ct("style",h,p),title:Ct("title",{title:v,titleAttributes:g},p)}},as=ag,Ro=[],cd=!!(typeof window<"u"&&window.document&&window.document.createElement),os=class{constructor(o,s){nn(this,"instances",[]);nn(this,"canUseDOM",cd);nn(this,"context");nn(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?Ro:this.instances,add:o=>{(this.canUseDOM?Ro:this.instances).push(o)},remove:o=>{const s=(this.canUseDOM?Ro:this.instances).indexOf(o);(this.canUseDOM?Ro:this.instances).splice(s,1)}}});this.context=o,this.canUseDOM=s||!1,s||(o.helmet=as({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},og={},ud=n.createContext(og),Wn,pd=(Wn=class extends y.Component{constructor(c){super(c);nn(this,"helmetData");this.helmetData=new os(this.props.context||{},Wn.canUseDOM)}render(){return n.createElement(ud.Provider,{value:this.helmetData.value},this.props.children)}},nn(Wn,"canUseDOM",cd),Wn),xr=(o,s)=>{const c=document.head||document.querySelector("head"),p=c.querySelectorAll(`${o}[${Mt}]`),d=[].slice.call(p),m=[];let h;return s&&s.length&&s.forEach(v=>{const g=document.createElement(o);for(const w in v)if(Object.prototype.hasOwnProperty.call(v,w))if(w==="innerHTML")g.innerHTML=v.innerHTML;else if(w==="cssText")g.styleSheet?g.styleSheet.cssText=v.cssText:g.appendChild(document.createTextNode(v.cssText));else{const k=w,z=typeof v[k]>"u"?"":v[k];g.setAttribute(w,z)}g.setAttribute(Mt,"true"),d.some((w,k)=>(h=k,g.isEqualNode(w)))?d.splice(h,1):m.push(g)}),d.forEach(v=>{var g;return(g=v.parentNode)==null?void 0:g.removeChild(v)}),m.forEach(v=>c.appendChild(v)),{oldTags:d,newTags:m}},is=(o,s)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const p=c.getAttribute(Mt),d=p?p.split(","):[],m=[...d],h=Object.keys(s);for(const v of h){const g=s[v]||"";c.getAttribute(v)!==g&&c.setAttribute(v,g),d.indexOf(v)===-1&&d.push(v);const w=m.indexOf(v);w!==-1&&m.splice(w,1)}for(let v=m.length-1;v>=0;v-=1)c.removeAttribute(m[v]);d.length===m.length?c.removeAttribute(Mt):c.getAttribute(Mt)!==h.join(",")&&c.setAttribute(Mt,h.join(","))},ig=(o,s)=>{typeof o<"u"&&document.title!==o&&(document.title=id(o)),is("title",s)},Op=(o,s)=>{const{baseTag:c,bodyAttributes:p,htmlAttributes:d,linkTags:m,metaTags:h,noscriptTags:v,onChangeClientState:g,scriptTags:w,styleTags:k,title:z,titleAttributes:O}=o;is("body",p),is("html",d),ig(z,O);const L={baseTag:xr("base",c),linkTags:xr("link",m),metaTags:xr("meta",h),noscriptTags:xr("noscript",v),scriptTags:xr("script",w),styleTags:xr("style",k)},j={},T={};Object.keys(L).forEach(A=>{const{newTags:U,oldTags:Y}=L[A];U.length&&(j[A]=U),Y.length&&(T[A]=L[A].oldTags)}),s&&s(),g(o,j,T)},fa=null,lg=o=>{fa&&cancelAnimationFrame(fa),o.defer?fa=requestAnimationFrame(()=>{Op(o,()=>{fa=null})}):(Op(o),fa=null)},sg=lg,Rp=class extends y.Component{constructor(){super(...arguments);nn(this,"rendered",!1)}shouldComponentUpdate(s){return!$h(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:c}=this.props.context;let p=null;const d=Xh(s.get().map(m=>{const h={...m.props};return delete h.context,h}));pd.canUseDOM?sg(d):as&&(p=as(d)),c(p)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},Xl,cg=(Xl=class extends y.Component{shouldComponentUpdate(o){return!jh(Tp(this.props,"helmetData"),Tp(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,c,p){return{...s,[o.type]:[...s[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,p)}]}}mapObjectTypeChildren(o,s,c,p){switch(o.type){case"title":return{...s,[o.type]:p,titleAttributes:{...c}};case"body":return{...s,bodyAttributes:{...c}};case"html":return{...s,htmlAttributes:{...c}};default:return{...s,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,s){let c={...s};return Object.keys(o).forEach(p=>{c={...c,[p]:o[p]}}),c}warnOnInvalidChildren(o,s){return Sp(Ap.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ap.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Sp(!s||typeof s=="string"||Array.isArray(s)&&!s.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let c={};return n.Children.forEach(o,p=>{if(!p||!p.props)return;const{children:d,...m}=p.props,h=Object.keys(m).reduce((g,w)=>(g[Yh[w]||w]=m[w],g),{});let{type:v}=p;switch(typeof v=="symbol"?v=v.toString():this.warnOnInvalidChildren(p,d),v){case"Symbol(react.fragment)":s=this.mapChildrenToProps(d,s);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(p,c,h,d);break;default:s=this.mapObjectTypeChildren(p,s,h,d);break}}),this.mapArrayTypeChildrenToProps(c,s)}render(){const{children:o,...s}=this.props;let c={...s},{helmetData:p}=s;if(o&&(c=this.mapChildrenToProps(o,c)),p&&!(p instanceof os)){const d=p;p=new os(d.context,!0),delete c.helmetData}return p?n.createElement(Rp,{...c,context:p.value}):n.createElement(ud.Consumer,null,d=>n.createElement(Rp,{...c,context:d}))}},nn(Xl,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Xl);const Pp="https://hovira-backend-nine.vercel.app/api";class Fp extends Error{constructor(s,c=0,p=null){super(s),this.name="ApiError",this.status=c,this.payload=p}}function dd(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function md(o){o&&(localStorage.setItem("token",o),localStorage.setItem("customerToken",o))}function Dp(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function St(o,s=[]){if(!o||typeof o!="object")return o;for(const c of s)if(o[c]!==void 0)return o[c];if(o.data!==void 0){const c=o.data;if(c&&typeof c=="object"){for(const p of s)if(c[p]!==void 0)return c[p]}return c}return o}async function ot(o,s={}){const{body:c,headers:p={},...d}=s,m=dd(),h={Accept:"application/json",...p};let v=c;c!==void 0&&!(c instanceof FormData)&&typeof c!="string"&&(h["Content-Type"]="application/json",v=JSON.stringify(c)),m&&!h.Authorization&&(h.Authorization=`Bearer ${m}`);let g;try{g=await fetch(`${Pp}${o.startsWith("/")?o:`/${o}`}`,{...d,headers:h,body:v})}catch(z){throw new Fp(`Cannott connect to API at ${Pp}. Check that your backend is running and CORS is enabled.`,0,z)}const k=(g.headers.get("content-type")||"").includes("application/json")?await g.json().catch(()=>({})):await g.text();if(!g.ok){const z=(k==null?void 0:k.message)||(k==null?void 0:k.error)||(typeof k=="string"?k:`Request failed (${g.status})`);throw new Fp(z,g.status,k)}return k}const Fe={products:async(o={})=>{const s=new URLSearchParams;Object.entries(o).forEach(([d,m])=>{m!==""&&m!=null&&s.set(d,m)});const c=await ot(`/products${s.toString()?`?${s}`:""}`),p=St(c,["products","items","results"]);return Array.isArray(p)?p:(p==null?void 0:p.products)||(p==null?void 0:p.items)||[]},product:async o=>St(await ot(`/products/${encodeURIComponent(o)}`),["product","item"]),register:async o=>ot("/auth/customers/register",{method:"POST",body:o}),login:async o=>ot("/auth/customers/login",{method:"POST",body:o}),me:async()=>St(await ot("/customers/me"),["customer","user","profile"]),updateMe:async o=>St(await ot("/customers/me",{method:"PATCH",body:o}),["customer","user","profile"]),changePassword:o=>ot("/customers/me/password",{method:"PATCH",body:o}),addAddress:async o=>St(await ot("/customers/me/addresses",{method:"POST",body:o}),["customer","address"]),updateAddress:async(o,s)=>St(await ot(`/customers/me/addresses/${o}`,{method:"PATCH",body:s}),["customer","address"]),deleteAddress:async o=>ot(`/customers/me/addresses/${o}`,{method:"DELETE"}),orders:async()=>{const o=St(await ot("/orders/my"),["orders","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.orders)||[]},order:async o=>St(await ot(`/orders/my/${o}`),["order","item"]),createOrder:async o=>St(await ot("/orders",{method:"POST",body:o}),["order","data"]),coupons:async()=>{const o=St(await ot("/coupons"),["coupons","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.coupons)||[]},validateCoupon:o=>ot("/coupons/validate",{method:"POST",body:o})},He=(o,s="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:s||"INR",maximumFractionDigits:0}).format(Number(o)||0),$o=o=>{var p;if(!o)return"";const s=o.images||[],c=((p=s.find)==null?void 0:p.call(s,d=>d==null?void 0:d.isPrimary))||s[0];return(c==null?void 0:c.url)||o.image||o.imageUrl||""},Tn=o=>(o==null?void 0:o.salePrice)!=null?Number(o.salePrice):Number((o==null?void 0:o.price)||0),$n=o=>String((o==null?void 0:o._id)||(o==null?void 0:o.id)||(o==null?void 0:o.slug)||""),ga=o=>`/product/${encodeURIComponent((o==null?void 0:o.slug)||(o==null?void 0:o._id)||(o==null?void 0:o.id))}`,fd=y.createContext(null),Ql=(o,s)=>{try{return JSON.parse(localStorage.getItem(o))??s}catch{return s}};function ug({children:o}){const[s,c]=y.useState(()=>Ql("hovira-cart",[])),[p,d]=y.useState(()=>Ql("hovira-wishlist",[])),[m,h]=y.useState(()=>Ql("customer",null)),[v,g]=y.useState([]),[w,k]=y.useState(!1),[z,O]=y.useState(!1),[L,j]=y.useState("");y.useEffect(()=>{localStorage.setItem("hovira-cart",JSON.stringify(s))},[s]),y.useEffect(()=>{localStorage.setItem("hovira-wishlist",JSON.stringify(p))},[p]),y.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]);const T=y.useCallback(async()=>{var Ae;k(!1),O(!1),j("");const J=Fe.products(),me=dd()?Fe.me():Promise.resolve(null),[H,pe]=await Promise.allSettled([J,me]);if(H.status==="fulfilled")g(H.value||[]);else return console.error("Initial products API error:",H.reason),j(((Ae=H.reason)==null?void 0:Ae.message)||"Unable to load products. Please try again."),O(!0),!1;return pe.status==="fulfilled"?pe.value&&h(pe.value):(console.error("Customer authentication error:",pe.reason),Dp(),h(null)),O(!0),k(!0),!0},[]);y.useEffect(()=>{T()},[T]);const A=(J,me=1,H="")=>c(pe=>{const M=`${$n(J)}:${H}`;return pe.find(X=>X.key===M)?pe.map(X=>X.key===M?{...X,quantity:Math.min(99,X.quantity+me)}:X):[...pe,{key:M,product:J,quantity:Math.max(1,me),variant:H}]}),U=(J,me)=>c(H=>me<=0?H.filter(pe=>pe.key!==J):H.map(pe=>pe.key===J?{...pe,quantity:Math.min(99,me)}:pe)),Y=J=>c(me=>me.filter(H=>H.key!==J)),K=()=>c([]),W=J=>d(me=>me.some(H=>$n(H)===$n(J))?me.filter(H=>$n(H)!==$n(J)):[...me,J]),ae=J=>p.some(me=>$n(me)===$n(J)),ie=()=>{Dp(),h(null)},ye=y.useMemo(()=>({cart:s,wishlist:p,customer:m,setCustomer:h,authReady:z,products:v,appReady:w,appError:L,retryInitialLoad:T,addToCart:A,updateQuantity:U,removeFromCart:Y,clearCart:K,toggleWishlist:W,isWishlisted:ae,logout:ie}),[s,p,m,z,v,w,L,T]);return n.createElement(fd.Provider,{value:ye},o)}const _t=()=>y.useContext(fd);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hd=(...o)=>o.filter((s,c,p)=>!!s&&s.trim()!==""&&p.indexOf(s)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=y.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:p,className:d="",children:m,iconNode:h,...v},g)=>y.createElement("svg",{ref:g,...dg,width:s,height:s,stroke:o,strokeWidth:p?Number(c)*24/Number(s):c,className:hd("lucide",d),...v},[...h.map(([w,k])=>y.createElement(w,k)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(o,s)=>{const c=y.forwardRef(({className:p,...d},m)=>y.createElement(mg,{ref:m,iconNode:s,className:hd(`lucide-${pg(o)}`,p),...d}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=le("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=le("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=le("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=le("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=le("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=le("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=le("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=le("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=le("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=le("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=le("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=le("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=le("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=le("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
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
 */const rn=le("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
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
 */const yd=le("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=le("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=le("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
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
 */const Ed=le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=le("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
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
 */const At=le("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=le("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=le("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=le("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=le("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=le("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
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
 */const Dg=le("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),us="/assets/logo-YzEykGB1.png";function Ig(){const[o,s]=y.useState(!1),[c,p]=y.useState(""),[d,m]=y.useState(!1),{cart:h,wishlist:v,customer:g}=_t(),w=on(),k=h.reduce((T,A)=>T+Number(A.quantity||0),0),z=v.length;y.useEffect(()=>{const T=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>window.removeEventListener("scroll",T)},[]),y.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const O=T=>{T.preventDefault(),w(`/shop${c.trim()?`?search=${encodeURIComponent(c.trim())}`:""}`),s(!1)},L=()=>s(!1),j=({isActive:T})=>`hv-nav-link ${T?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(Q,{to:"/shop"},"Explore Collection ",n.createElement(ke,{size:13}))),n.createElement("header",{className:`hv-header ${d?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>s(!o),"aria-label":o?"Close menu":"Open menu","aria-expanded":o},o?n.createElement(ft,{size:23}):n.createElement(Sg,{size:23})),n.createElement(Q,{to:"/",className:"hv-brand",onClick:L,"aria-label":"HOVIRA Home"},n.createElement("img",{src:us,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(Cn,{to:"/",end:!0,className:j},"Home"),n.createElement(Cn,{to:"/shop",className:j},"Shop All"),n.createElement(Cn,{to:"/shop?category=Best%20sellers",className:j},"Best Sellers"),n.createElement(Cn,{to:"/about",className:j},"Our Story")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:O},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(Q,{className:"hv-header-icon",to:g?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(br,{size:21})),n.createElement(Q,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${z} items`,title:"Wishlist"},n.createElement(it,{size:21}),z>0&&n.createElement("span",{className:"hv-count"},z>99?"99+":z)),n.createElement(Q,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${k} items`,title:"Shopping Bag"},n.createElement(Tt,{size:21}),k>0&&n.createElement("span",{className:"hv-count"},k>99?"99+":k)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:O},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:c,onChange:T=>p(T.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(ke,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${o?"show":""}`,onClick:L}),n.createElement("aside",{className:`hv-mobile-drawer ${o?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(Q,{to:"/",onClick:L},n.createElement("img",{src:us,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:L,"aria-label":"Close menu"},n.createElement(ft,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(Cn,{to:"/",end:!0,onClick:L},"Home ",n.createElement(ke,{size:17})),n.createElement(Cn,{to:"/shop",onClick:L},"Shop All ",n.createElement(ke,{size:17})),n.createElement(Cn,{to:"/shop?category=Best%20sellers",onClick:L},"Best Sellers ",n.createElement(ke,{size:17})),n.createElement(Cn,{to:"/about",onClick:L},"Our Story ",n.createElement(ke,{size:17}))),n.createElement("div",{className:"hv-drawer-account"},n.createElement(Q,{to:g?"/account":"/login",onClick:L},n.createElement(br,{size:19}),g?"My Account":"Login / Register"),n.createElement(Q,{to:"/wishlist",onClick:L},n.createElement(it,{size:19}),"My Wishlist",z>0&&n.createElement("span",null,z)),n.createElement(Q,{to:"/cart",onClick:L},n.createElement(Tt,{size:19}),"My Shopping Bag",k>0&&n.createElement("span",null,k))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Ye,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
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
  font-size: 15px;
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
    font-size: 9px;
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

          
          
          `))}function Lg(){const[o,s]=y.useState(""),[c,p]=y.useState(""),d=new Date().getFullYear(),m=v=>{v.preventDefault(),o.trim()&&(p("Thanks for joining the HOVIRA family!"),s(""))},h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Ye,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(fs,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:o,onChange:v=>{s(v.target.value),p("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(ke,{size:17}))),c&&n.createElement("p",{className:"hv-footer-success"},n.createElement(it,{size:14}),c),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Cr,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(At,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(kg,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(Q,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(zg,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(bg,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(Q,{to:"/shop"},"Shop All"),n.createElement(Q,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(Q,{to:"/about"},"Our Story"),n.createElement(Q,{to:"/account"},"My Account"),n.createElement(Q,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(Q,{to:"/privacy"},"Privacy Policy"),n.createElement(Q,{to:"/terms"},"Terms & Conditions"),n.createElement(Q,{to:"/shipping"},"Shipping Policy"),n.createElement(Q,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(gd,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Ye,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",d," HOVIRA Skin care. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},n.createElement(it,{size:13,fill:"currentColor"}),"  Designed & Developed by ",n.createElement("a",{href:"https://jdbinfotech.co.in/"},"https://jdbinfotech.co.in/")),n.createElement("button",{className:"hv-back-top",onClick:h,"aria-label":"Back to top"},"Back to top",n.createElement(vg,{size:17}))))),n.createElement("style",null,`


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

        `))}function Mg(){return n.createElement(n.Fragment,null,n.createElement(Ig,null),n.createElement("main",null,n.createElement(yh,null)),n.createElement(Lg,null))}function ln({label:o="Loading your essentials..."}){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-state"},n.createElement("div",{className:"loading-content"},n.createElement("div",{className:"loading-animation"},n.createElement("div",{className:"loading-outer-ring"}),n.createElement("div",{className:"loading-middle-ring"}),n.createElement("div",{className:"loading-logo"},n.createElement("img",{src:`${us}`})),n.createElement("span",{className:"loading-dot dot-one"}),n.createElement("span",{className:"loading-dot dot-two"})),n.createElement("div",{className:"loading-brand"},"HOVIRA",n.createElement("span",null,".")),n.createElement("p",{className:"loading-label"},o),n.createElement("div",{className:"loading-progress"},n.createElement("span",null)),n.createElement("small",{className:"loading-caption"},"A little care is on its way"))),n.createElement("style",null,`
            
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

            `))}function lt({title:o,description:s,canonical:c}){return n.createElement(cg,null,n.createElement("title",null,o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:s||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:s||"Thoughtful skincare essentials from HOVIRA."}),c&&n.createElement("link",{rel:"canonical",href:c}))}function Yo({product:o,index:s=0}){var K,W,ae;const{addToCart:c,toggleWishlist:p,isWishlisted:d}=_t(),[m,h]=y.useState(!1),v=$o(o),g=Tn(o),w=d(o),k=Number(o.price||0),z=Number(o.salePrice||0),O=o.salePrice!=null&&z>0&&z<k,L=O?Math.round((k-z)/k*100):0,j=Number(o.stock)<=0,T=()=>{j||(c(o),h(!0),setTimeout(()=>{h(!1)},1800))},A=()=>{p(o)},U=typeof o.category=="string"?o.category:((K=o.category)==null?void 0:K.name)||"HOVIRA Essentials",Y=((ae=(W=o.images)==null?void 0:W.find(ie=>ie.isPrimary))==null?void 0:ae.alt)||o.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${s*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(Q,{to:ga(o),className:"hv-product-image","aria-label":`View ${o.name}`},v?n.createElement("img",{src:v,alt:Y,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Ye,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},j?n.createElement("span",{className:"hv-soldout-badge"},"Sold Out"):O?n.createElement("span",{className:"hv-sale-badge"},L,"% OFF"):o.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Ye,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${w?"wish-active":""}`,onClick:A,"aria-label":w?"Remove from wishlist":"Add to wishlist",title:w?"Remove from wishlist":"Add to wishlist"},n.createElement(it,{size:18,fill:w?"currentColor":"none"})),n.createElement(Q,{to:ga(o),className:"hv-quick-view","aria-label":`View details of ${o.name}`},n.createElement(jo,{size:16}),"Quick View",n.createElement(gd,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},U),o.isFeatured&&!j&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Ye,{size:11}),"Favourite")),n.createElement(Q,{to:ga(o),className:"hv-product-name"},o.name),o.shortDescription&&n.createElement("p",{className:"hv-product-description"},o.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,He(g,o.currency||"INR")),O&&n.createElement("del",null,He(k,o.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""}`,onClick:T,disabled:j},j?n.createElement(n.Fragment,null,"Sold Out"):m?n.createElement(n.Fragment,null,n.createElement(Yn,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Tt,{size:15}),"Add"))))),n.createElement("style",null,`

        
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
  background: #51413b;
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
  font-size: 22px;
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

.hv-add-cart:disabled {
  background: #eee7e2;
  border-color: #eee7e2;
  color: #9b8980;
  cursor: not-allowed;
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
    font-size: 9px;
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

        `))}function Yt({type:o="error",children:s,onClose:c}){return s?n.createElement("div",{className:`notice ${o}`,role:"status"},o==="success"?n.createElement(Ze,{size:18}):n.createElement(xg,{size:18}),n.createElement("span",null,s),c&&n.createElement("button",{onClick:c,"aria-label":"Dismiss"},n.createElement(ft,{size:16}))):null}function _g(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState(""),[h,v]=y.useState(0),[g,w]=y.useState(""),[k,z]=y.useState(""),[O,L]=y.useState(!1);y.useEffect(()=>{let A=!0;return(async()=>{p(!0),m("");try{const Y=await Fe.products();if(A){const K=Array.isArray(Y)?Y.filter(W=>W.isActive!==!1):[];s(K)}}catch(Y){A&&m(Y.message||"Unable to load products.")}finally{A&&p(!1)}})(),()=>{A=!1}},[h]);const j=y.useMemo(()=>{const A=o.filter(U=>U.isFeatured);return(A.length?A:o).slice(0,4)},[o]),T=[{icon:n.createElement(wr,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(Lp,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(At,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(it,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(lt,{title:"HOVIRA Skin Care | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(Q,{to:"/shop"},"Explore HOVIRA ",n.createElement(ke,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Ye,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(Q,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(ke,{size:18})),n.createElement(Q,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(Cg,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(wr,{size:17})),n.createElement("span",null,n.createElement(Lp,{size:17})),n.createElement("span",null,n.createElement(it,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("div",{className:"hv-image-circle circle-a"}),n.createElement("div",{className:"hv-image-circle circle-b"}),n.createElement("div",{className:"hv-floating-card floating-card-one"},n.createElement(wd,{size:19}),n.createElement("span",null,"Daily Glow")),n.createElement("div",{className:"hv-product-art"},n.createElement("div",{className:"hv-art-shadow"}),n.createElement("div",{className:"hv-art-cap"}),n.createElement("div",{className:"hv-art-neck"}),n.createElement("div",{className:"hv-art-bottle"},n.createElement("div",{className:"hv-art-bottle-content"},n.createElement("span",{className:"hv-art-brand"},"HOVIRA"),n.createElement("span",{className:"hv-art-line"}),n.createElement("small",null,"DAILY"),n.createElement("strong",null,"GLOW"),n.createElement("small",null,"SERUM"),n.createElement("span",{className:"hv-art-volume"},"30 ML")))),n.createElement("div",{className:"hv-floating-card floating-card-two"},n.createElement(Mp,{size:19}),n.createElement("span",null,"Self Love Ritual"))),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},T.map((A,U)=>n.createElement("div",{className:"hv-benefit",key:U},n.createElement("div",{className:"hv-benefit-icon"},A.icon),n.createElement("div",null,n.createElement("h3",null,A.title),n.createElement("p",null,A.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(Q,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(ke,{size:17}))),d&&n.createElement("div",{className:"hv-error"},n.createElement(Yt,null,d),n.createElement("button",{className:"hv-retry-btn",onClick:()=>v(A=>A+1)},n.createElement(ss,{size:15})," Try Again")),c?n.createElement("div",{className:"hv-loading"},n.createElement(ln,null)):j.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},j.map((A,U)=>n.createElement("div",{className:"hv-product-item",key:A._id||A.slug,style:{"--item-index":U}},n.createElement(Yo,{product:A,index:U})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(Q,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(ke,{size:17})))):d?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(Mp,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(Q,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(ke,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(Q,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(ke,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(it,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(Q,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(ke,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(wr,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(it,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Ye,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(Q,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(ke,{size:18}))),n.createElement("style",null,`

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
  font-size: 14x;
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
  max-width: 520px;
  margin: auto;
}

.hv-hero-image-bg {
  height: 450px;
  width: 100%;
  border-radius: 48% 48% 4px 4px;
  background: linear-gradient(145deg, #f2d9c9, #e8c3ac);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
    font-size: 9px;
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


  
  `))}function jg(){const[o,s]=Ih(),[c,p]=y.useState([]),[d,m]=y.useState(!0),[h,v]=y.useState(""),[g,w]=y.useState(o.get("search")||""),[k,z]=y.useState(o.get("category")||"all"),[O,L]=y.useState("featured"),[j,T]=y.useState(""),[A,U]=y.useState(!1),[Y,K]=y.useState(!1);y.useEffect(()=>{let M=!0;return(async()=>{m(!0),v("");try{const X=await Fe.products();if(M){const ve=Array.isArray(X)?X.filter(ze=>ze.isActive!==!1):[];p(ve)}}catch(X){M&&v(X.message||"Unable to load products.")}finally{M&&m(!1)}})(),()=>{M=!1}},[]),y.useEffect(()=>{w(o.get("search")||""),z(o.get("category")||"all")},[o]),y.useEffect(()=>(document.body.style.overflow=Y?"hidden":"",()=>{document.body.style.overflow=""}),[Y]);const W=y.useMemo(()=>[...new Set(c.map(M=>{var xe;return typeof M.category=="string"?M.category:(xe=M.category)==null?void 0:xe.name}).filter(Boolean))].sort((M,xe)=>M.localeCompare(xe)),[c]),ae=y.useMemo(()=>{let M=[...c];const xe=g.toLowerCase().trim();return xe&&(M=M.filter(X=>{var $;const ve=typeof X.category=="string"?X.category:(($=X.category)==null?void 0:$.name)||"";return[X.name,X.shortDescription,X.description,ve,X.brand,...X.tags||[]].join(" ").toLowerCase().includes(xe)})),k!=="all"&&(M=M.filter(X=>{var ze;return(typeof X.category=="string"?X.category:((ze=X.category)==null?void 0:ze.name)||"").toLowerCase()===k.toLowerCase()})),j!==""&&(M=M.filter(X=>Number(X.salePrice??X.price)<=Number(j))),A&&(M=M.filter(X=>Number(X.stock)>0)),O==="price-low"&&M.sort((X,ve)=>Number(X.salePrice??X.price)-Number(ve.salePrice??ve.price)),O==="price-high"&&M.sort((X,ve)=>Number(ve.salePrice??ve.price)-Number(X.salePrice??X.price)),O==="name"&&M.sort((X,ve)=>(X.name||"").localeCompare(ve.name||"")),O==="newest"&&M.sort((X,ve)=>new Date(ve.createdAt||0)-new Date(X.createdAt||0)),O==="featured"&&M.sort((X,ve)=>Number(ve.isFeatured)-Number(X.isFeatured)),M},[c,g,k,j,A,O]),ie=[g.trim()!=="",k!=="all",j!=="",A].filter(Boolean).length,ye=(M,xe)=>{const X={};M.trim()&&(X.search=M.trim()),xe!=="all"&&(X.category=xe),s(X)},J=()=>{w(""),z("all"),T(""),U(!1),L("featured"),s({})},me=M=>{M==="search"&&(w(""),ye("",k)),M==="category"&&(z("all"),ye(g,"all")),M==="price"&&T(""),M==="stock"&&U(!1)},H=M=>{z(M),ye(g,M)},pe=M=>{w(M),ye(M,k)},Ae=()=>K(!1);return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(Q,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Ye,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(wr,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:k==="all"?"active":"",onClick:()=>H("all")},"All Products",k==="all"&&n.createElement(Yn,{size:14})),W.map(M=>n.createElement("button",{key:M,className:k===M?"active":"",onClick:()=>H(M)},M,k===M&&n.createElement(Yn,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${Y?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:J},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Ae,"aria-label":"Close filters"},n.createElement(ft,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(cs,{size:17}),n.createElement("input",{type:"search",value:g,onChange:M=>pe(M.target.value),placeholder:"Try serum, cleanser..."}),g&&n.createElement("button",{type:"button",onClick:()=>me("search"),"aria-label":"Clear search"},n.createElement(ft,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:k==="all",onChange:()=>H("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,c.length)),W.map(M=>n.createElement("label",{className:"hv-filter-option",key:M},n.createElement("input",{type:"radio",checked:k===M,onChange:()=>H(M)}),n.createElement("span",null,M),n.createElement("i",null,c.filter(xe=>{var ve;return(typeof xe.category=="string"?xe.category:(ve=xe.category)==null?void 0:ve.name)===M}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:j,onChange:M=>T(M.target.value),placeholder:"Enter maximum price"}),j&&n.createElement("button",{type:"button",onClick:()=>me("price"),"aria-label":"Clear maximum price"},n.createElement(ft,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:A,onChange:M=>U(M.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:J},n.createElement(_p,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Ae},"Show ",ae.length," Products",n.createElement(ke,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>K(!0)},n.createElement(Rg,{size:16}),"Filters",ie>0&&n.createElement("span",null,ie)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,d?"...":ae.length),n.createElement("span",null,ae.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(fg,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:O,onChange:M=>L(M.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(gg,{size:14}))),ie>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),g&&n.createElement("button",{onClick:()=>me("search")},"Search: ",g,n.createElement(ft,{size:13})),k!=="all"&&n.createElement("button",{onClick:()=>me("category")},k,n.createElement(ft,{size:13})),j&&n.createElement("button",{onClick:()=>me("price")},"Under ₹",j,n.createElement(ft,{size:13})),A&&n.createElement("button",{onClick:()=>me("stock")},"In stock",n.createElement(ft,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:J},"Clear all")),h&&n.createElement("div",{className:"hv-shop-error"},n.createElement(Yt,null,h)),d?n.createElement("div",{className:"hv-shop-loading"},n.createElement(ln,null)):ae.length>0?n.createElement("div",{className:"hv-shop-product-grid"},ae.map((M,xe)=>n.createElement(Yo,{key:M._id||M.slug,product:M,index:xe}))):h?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Tt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:J},n.createElement(_p,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Ye,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(Q,{to:"/about"},"Discover HOVIRA ",n.createElement(ke,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${Y?"show":""}`,"aria-label":"Close filters",onClick:Ae}),n.createElement("style",null,`
          
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

          `))}function Bg(){var P,b,R,fe,ge,B,te,ne,ue,we,Ee,_e;const{slugOrId:o}=ed(),[s,c]=y.useState(null),[p,d]=y.useState([]),[m,h]=y.useState(!0),[v,g]=y.useState(""),[w,k]=y.useState(1),[z,O]=y.useState(0),[L,j]=y.useState(""),[T,A]=y.useState(!1),[U,Y]=y.useState(!1),{addToCart:K,toggleWishlist:W,isWishlisted:ae}=_t();y.useEffect(()=>{let G=!0;return h(!0),g(""),c(null),O(0),j(""),k(1),A(!1),Y(!1),Promise.all([Fe.product(o),Fe.products()]).then(([de,yt])=>{G&&(c(de),d(yt))}).catch(de=>{G&&g(de.message)}).finally(()=>{G&&h(!1)}),()=>{G=!1}},[o]);const ie=y.useMemo(()=>{if(!s)return[];const G=(s.images||[]).map(de=>({url:typeof de=="string"?de:de==null?void 0:de.url,alt:typeof de=="string"?s.name:de==null?void 0:de.alt})).filter(de=>de.url);if(!G.length){const de=$o(s);return de?[{url:de,alt:s.name}]:[]}return G},[s]),ye=((P=ie[z])==null?void 0:P.url)||"";y.useEffect(()=>{if(!U)return;const G=de=>{de.key==="Escape"&&Y(!1),de.key==="ArrowRight"&&ie.length>1&&O(yt=>(yt+1)%ie.length),de.key==="ArrowLeft"&&ie.length>1&&O(yt=>yt===0?ie.length-1:yt-1)};return document.addEventListener("keydown",G),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",G),document.body.style.overflow=""}},[U,ie.length]);const J=s?Tn(s):0,me=Number((s==null?void 0:s.price)||0),H=(s==null?void 0:s.salePrice)!=null&&me>J&&J>0,pe=H?Math.round((me-J)/me*100):0,Ae=(b=s==null?void 0:s.variants)==null?void 0:b.find(G=>G.value===L),M=Number(Ae?Ae.stock||0:(s==null?void 0:s.stock)||0),xe=typeof(s==null?void 0:s.category)=="object"?((R=s.category)==null?void 0:R.name)||"HOVIRA ESSENTIALS":(s==null?void 0:s.category)||"HOVIRA ESSENTIALS",X=G=>G?String(typeof G=="object"?G._id||G.id||G.name||"":G):"",ve=y.useMemo(()=>{if(!s)return[];const G=X(s.category);return p.filter(de=>{const yt=X(de.category)===G;return de._id!==s._id&&yt&&de.isActive!==!1}).slice(0,4)},[p,s]),ze=()=>{var G;((G=s.variants)==null?void 0:G.length)>0&&!L||M<=0||(K(s,w,L),A(!0),setTimeout(()=>{A(!1)},2e3))},$=G=>{k(de=>Math.max(1,Math.min(99,de+G)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(ln,{label:"Finding your product..."}));if(v||!s)return n.createElement("div",{className:"page-shell pd-error"},n.createElement(Yt,null,v||"We couldn't find this product."),n.createElement(Q,{to:"/shop",className:"pd-back-link"},n.createElement($t,{size:17}),"Back to shop"));const F=ae(s);return n.createElement(n.Fragment,null,n.createElement(lt,{title:((fe=s.seo)==null?void 0:fe.metaTitle)||s.name,description:((ge=s.seo)==null?void 0:ge.metaDescription)||s.shortDescription||s.description,canonical:((B=s.seo)==null?void 0:B.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(Q,{to:"/"},"Home"),n.createElement(_o,{size:14}),n.createElement(Q,{to:"/shop"},"Shop"),n.createElement(_o,{size:14}),n.createElement("span",null,s.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},ye?n.createElement("img",{src:ye,alt:((te=ie[z])==null?void 0:te.alt)||s.name,key:ye,onClick:()=>Y(!0),className:"pd-zoomable-image",title:"Click to zoom"}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Ye,{size:38}),n.createElement("span",null,"HOVIRA")),ye&&n.createElement("button",{type:"button",className:"pd-zoom-trigger",onClick:()=>Y(!0),"aria-label":"Zoom product image"},n.createElement(Dg,{size:16}),n.createElement("span",null,"Click to zoom")),s.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Ye,{size:13}),"HOVIRA Favourite"),H&&n.createElement("span",{className:"pd-discount-badge"},pe,"% OFF"),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>O(G=>G===0?ie.length-1:G-1),"aria-label":"Previous image"},n.createElement($t,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>O(G=>(G+1)%ie.length),"aria-label":"Next image"},n.createElement(ke,{size:18})))),ie.length>1&&n.createElement("div",{className:"pd-thumbnails"},ie.map((G,de)=>n.createElement("button",{key:`${G.url}-${de}`,className:z===de?"active":"",onClick:()=>O(de),"aria-label":`View image ${de+1}`},n.createElement("img",{src:G.url,alt:G.alt||`${s.name} ${de+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Ye,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},xe),n.createElement("h1",null,s.name),s.shortDescription&&n.createElement("p",{className:"pd-short-description"},s.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},He(J,s.currency||"INR")),H&&n.createElement(n.Fragment,null,n.createElement("del",null,He(me,s.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",pe,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((ne=s.variants)==null?void 0:ne.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),L&&n.createElement("span",null,L)),n.createElement("div",{className:"pd-variant-list"},s.variants.map(G=>n.createElement("button",{type:"button",key:G._id||G.sku||G.value,disabled:G.stock===0,className:L===G.value?"selected":"",onClick:()=>j(G.value)},n.createElement("span",null,G.name,": ",G.value),L===G.value&&n.createElement(Yn,{size:16}),G.stock===0&&n.createElement("small",null,"Sold out")))),s.variants.length>0&&!L&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},M>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>$(-1),disabled:w<=1,"aria-label":"Decrease quantity"},n.createElement(yd,{size:16})),n.createElement("span",null,w),n.createElement("button",{type:"button",onClick:()=>$(1),disabled:w>=99||w>=M,"aria-label":"Increase quantity"},n.createElement(zr,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:M<=0||((ue=s.variants)==null?void 0:ue.length)>0&&!L,onClick:ze},T?n.createElement(n.Fragment,null,n.createElement(Yn,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Tt,{size:19}),M<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${F?"active":""}`,onClick:()=>W(s),"aria-label":"Toggle wishlist"},n.createElement(it,{size:21,fill:F?"currentColor":"none"}))),M>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(hs,{size:15}),M," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Cr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(At,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(wr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:s.content||s.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(we=s.ingredients)!=null&&we.length?n.createElement("ul",{className:"pd-chip-list"},s.ingredients.map((G,de)=>n.createElement("li",{key:`${G}-${de}`},n.createElement(Yn,{size:14}),G))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(Ee=s.benefits)!=null&&Ee.length?n.createElement("ul",{className:"pd-benefit-list"},s.benefits.map((G,de)=>n.createElement("li",{key:`${G}-${de}`},n.createElement("span",null,n.createElement(Yn,{size:15})),G))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),s.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,s.howToUse)),s.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,s.warnings)))))),ve.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(Q,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(ke,{size:17}))),n.createElement("div",{className:"product-grid"},ve.map((G,de)=>n.createElement(Yo,{key:G._id||G.slug,product:G,index:de})))),U&&ye&&n.createElement("div",{className:"pd-zoom-overlay",role:"dialog","aria-modal":"true","aria-label":"Product image zoom",onClick:()=>Y(!1)},n.createElement("button",{type:"button",className:"pd-zoom-close",onClick:()=>Y(!1),"aria-label":"Close image zoom"},n.createElement(ft,{size:23})),ie.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-prev",onClick:G=>{G.stopPropagation(),O(de=>de===0?ie.length-1:de-1)},"aria-label":"Previous image"},n.createElement($t,{size:22})),n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-next",onClick:G=>{G.stopPropagation(),O(de=>(de+1)%ie.length)},"aria-label":"Next image"},n.createElement(ke,{size:22}))),n.createElement("div",{className:"pd-zoom-content",onClick:G=>G.stopPropagation()},n.createElement("img",{src:ye,alt:((_e=ie[z])==null?void 0:_e.alt)||s.name}),n.createElement("div",{className:"pd-zoom-caption"},s.name,ie.length>1&&n.createElement("span",null,z+1," / ",ie.length)))),n.createElement("style",null,`
          
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
  height: 100%;
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

          `))}function Hg(){const[o,s]=y.useState({email:"",password:""}),[c,p]=y.useState(!1),[d,m]=y.useState(""),[h,v]=y.useState(!1),{setCustomer:g}=_t(),w=on(),k=Gt(),z=L=>{s(j=>({...j,[L.target.name]:L.target.value}))},O=async L=>{var j,T,A;L.preventDefault(),m(""),v(!0);try{const U=await Fe.login(o),Y=U.token||U.accessToken||((j=U.data)==null?void 0:j.token)||((T=U.data)==null?void 0:T.accessToken);if(!Y)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");md(Y);const K=St(U,["customer","user","profile"])||await Fe.me();g(K),w(((A=k.state)==null?void 0:A.from)||"/account",{replace:!0})}catch(U){m((U==null?void 0:U.message)||"We couldn't sign you in. Please try again.")}finally{v(!1)}};return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Sign In to Your HOVIRA Account | Secure Skincare Shopping",description:"Sign in securely to your HOVIRA account to manage your profile, wishlist, orders and skincare purchases."}),n.createElement("main",{className:"login-page"},n.createElement("section",{className:"login-shell"},n.createElement("aside",{className:"login-visual"},n.createElement("div",{className:"login-visual-top"},n.createElement(Q,{to:"/",className:"login-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"login-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"login-visual-tag"},n.createElement(Ye,{size:13})," YOUR DAILY RITUAL")),n.createElement("div",{className:"login-visual-content"},n.createElement("span",{className:"login-visual-kicker"},"A MOMENT FOR YOU"),n.createElement("h1",null,"Care that feels",n.createElement("br",null),n.createElement("em",null,"like coming home.")),n.createElement("p",null,"Your HOVIRA favourites, thoughtful essentials and personal skincare journey are just a sign in away."),n.createElement("div",{className:"login-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Keep your favourites close"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Follow your orders with ease"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Enjoy a personal shopping experience"))),n.createElement("div",{className:"login-visual-footer"},n.createElement("div",{className:"login-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"login-orbit orbit-a"}),n.createElement("div",{className:"login-orbit orbit-b"}),n.createElement("div",{className:"login-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"login-orbit-dot dot-a"}),n.createElement("i",{className:"login-orbit-dot dot-b"})),n.createElement("div",{className:"login-visual-note"},n.createElement(At,{size:16}),n.createElement("span",null,"Thoughtful care. A considered experience.")))),n.createElement("section",{className:"login-panel"},n.createElement("div",{className:"login-panel-top"},n.createElement("span",{className:"login-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"login-secure-label"},n.createElement(rn,{size:13})," SECURE SIGN IN")),n.createElement("div",{className:"login-heading"},n.createElement("span",{className:"login-eyebrow"},"WELCOME BACK"),n.createElement("h2",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to pick up where your self-care left off.")),d&&n.createElement("div",{className:"login-error",role:"alert"},n.createElement(Yt,null,d)),n.createElement("form",{className:"login-form",onSubmit:O},n.createElement("label",{className:"login-field"},n.createElement("span",null,"Email address"),n.createElement("input",{name:"email",type:"email",autoComplete:"email",inputMode:"email",required:!0,value:o.email,onChange:z,placeholder:"you@example.com"})),n.createElement("label",{className:"login-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"login-password-wrap"},n.createElement("input",{name:"password",type:c?"text":"password",autoComplete:"current-password",required:!0,value:o.password,onChange:z,placeholder:"Enter your password"}),n.createElement("button",{type:"button",className:"login-eye-btn",onClick:()=>p(L=>!L),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ls,{size:17}):n.createElement(jo,{size:17})))),n.createElement("div",{className:"login-form-meta"},n.createElement("span",null,n.createElement(rn,{size:13})," Your account is protected")),n.createElement("button",{className:"login-submit",type:"submit",disabled:h},n.createElement("span",null,h?"Signing you in…":"Sign in to HOVIRA"),h?n.createElement("span",{className:"login-spinner"}):n.createElement(ke,{size:17}))),n.createElement("div",{className:"login-divider"},n.createElement("span",null,"NEW TO HOVIRA?")),n.createElement(Q,{to:"/signup",className:"login-create-account"},"Create your account ",n.createElement(ke,{size:15})),n.createElement("div",{className:"login-trust"},n.createElement("div",{className:"login-trust-icon"},n.createElement(xd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"We use your account information to manage your shopping experience and orders."))),n.createElement("p",{className:"login-legal"},"By continuing, you agree to our ",n.createElement(Q,{to:"/terms"},"Terms")," and ",n.createElement(Q,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"login-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          
          `))}function Bp(){const[o,s]=y.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[c,p]=y.useState(!1),[d,m]=y.useState(!1),[h,v]=y.useState(""),[g,w]=y.useState(!1),{setCustomer:k}=_t(),z=on(),O=T=>{const{name:A,value:U,type:Y,checked:K}=T.target;s(W=>({...W,[A]:Y==="checkbox"?K:U}))},L=y.useMemo(()=>{const T=o.password;if(!T)return{score:0,label:"Use at least 8 characters"};let A=0;return T.length>=8&&A++,/[A-Z]/.test(T)&&A++,/[a-z]/.test(T)&&A++,/[0-9]/.test(T)&&A++,/[^A-Za-z0-9]/.test(T)&&A++,A<=2?{score:1,label:"Could be stronger"}:A<=4?{score:2,label:"Good password"}:{score:3,label:"Strong password"}},[o.password]),j=async T=>{var A,U;if(T.preventDefault(),v(""),o.password.length<8){v("Password must be at least 8 characters.");return}if(o.password!==o.confirmPassword){v("Your passwords do not match.");return}w(!0);try{const{confirmPassword:Y,...K}=o,W=await Fe.register(K),ae=W.token||W.accessToken||((A=W.data)==null?void 0:A.token)||((U=W.data)==null?void 0:U.accessToken);ae?(md(ae),k(St(W,["customer","user","profile"])||await Fe.me()),z("/account")):z("/login",{state:{registered:!0}})}catch(Y){v((Y==null?void 0:Y.message)||"We couldn't create your account. Please try again.")}finally{w(!1)}};return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Create Your HOVIRA Account | Join Our Skincare Community",description:"Create your HOVIRA account for a more personal skincare shopping experience. Save favourites, manage your orders and explore thoughtful skincare essentials."}),n.createElement("main",{className:"register-page"},n.createElement("section",{className:"register-shell"},n.createElement("aside",{className:"register-visual"},n.createElement("div",{className:"register-visual-top"},n.createElement(Q,{to:"/",className:"register-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"register-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"register-visual-tag"},n.createElement(Ye,{size:13})," YOUR SKIN, YOUR RITUAL")),n.createElement("div",{className:"register-visual-content"},n.createElement("span",{className:"register-visual-kicker"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Make room for",n.createElement("br",null),n.createElement("em",null,"a little care.")),n.createElement("p",null,"Create your personal space for thoughtful skincare, favourite finds and a smoother shopping experience."),n.createElement("div",{className:"register-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Save products you love"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Keep track of every order"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ze,{size:15}))," Make every visit feel personal"))),n.createElement("div",{className:"register-visual-footer"},n.createElement("div",{className:"register-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"register-orbit orbit-a"}),n.createElement("div",{className:"register-orbit orbit-b"}),n.createElement("div",{className:"register-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"register-orbit-dot dot-a"}),n.createElement("i",{className:"register-orbit-dot dot-b"})),n.createElement("div",{className:"register-visual-note"},n.createElement(At,{size:16}),n.createElement("span",null,"A more considered way to shop.")))),n.createElement("section",{className:"register-panel"},n.createElement("div",{className:"register-panel-top"},n.createElement("span",{className:"register-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"register-secure-label"},n.createElement(rn,{size:13})," CREATE ACCOUNT")),n.createElement("div",{className:"register-heading"},n.createElement("span",{className:"register-eyebrow"},"WELCOME TO HOVIRA"),n.createElement("h2",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Your little corner for thoughtful skincare starts here.")),h&&n.createElement("div",{className:"register-error",role:"alert"},n.createElement(Yt,null,h)),n.createElement("form",{className:"register-form",onSubmit:j},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Full name"),n.createElement("div",{className:"register-input-wrap"},n.createElement(br,{size:16}),n.createElement("input",{name:"name",type:"text",required:!0,maxLength:100,value:o.name,onChange:O,placeholder:"Your full name",autoComplete:"name"}))),n.createElement("div",{className:"register-form-two"},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"register-input-wrap"},n.createElement(fs,{size:16}),n.createElement("input",{name:"email",type:"email",required:!0,value:o.email,onChange:O,placeholder:"you@example.com",autoComplete:"email",inputMode:"email"}))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Phone ",n.createElement("small",null,"Optional")),n.createElement("div",{className:"register-input-wrap"},n.createElement(Ed,{size:16}),n.createElement("input",{name:"phone",type:"tel",value:o.phone,onChange:O,placeholder:"Phone number",autoComplete:"tel",inputMode:"tel"})))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(rn,{size:16}),n.createElement("input",{name:"password",type:c?"text":"password",required:!0,minLength:8,value:o.password,onChange:O,placeholder:"Create a password",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>p(T=>!T),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ls,{size:16}):n.createElement(jo,{size:16}))),n.createElement("div",{className:"register-strength","aria-live":"polite"},n.createElement("div",{className:"register-strength-bars"},[1,2,3].map(T=>n.createElement("span",{key:T,className:L.score>=T?`active strength-${L.score}`:""}))),n.createElement("small",null,L.label))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Confirm password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(rn,{size:16}),n.createElement("input",{name:"confirmPassword",type:d?"text":"password",required:!0,value:o.confirmPassword,onChange:O,placeholder:"Enter your password again",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>m(T=>!T),"aria-label":d?"Hide confirm password":"Show confirm password"},d?n.createElement(ls,{size:16}):n.createElement(jo,{size:16}))),o.confirmPassword&&n.createElement("small",{className:`register-match ${o.password===o.confirmPassword?"matched":"not-matched"}`},o.password===o.confirmPassword?"Passwords match":"Passwords do not match yet")),n.createElement("label",{className:"register-optin"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:o.marketingOptIn,onChange:O}),n.createElement("span",{className:"register-custom-check"},n.createElement(Ze,{size:13})),n.createElement("span",null,"Send me occasional HOVIRA updates and skincare news.")),n.createElement("button",{className:"register-submit",type:"submit",disabled:g},n.createElement("span",null,g?"Creating your account…":"Create my account"),g?n.createElement("span",{className:"register-spinner"}):n.createElement(ke,{size:17}))),n.createElement("div",{className:"register-login-prompt"},"Already have an account? ",n.createElement(Q,{to:"/login"},"Sign in")),n.createElement("div",{className:"register-trust"},n.createElement("div",{className:"register-trust-icon"},n.createElement(xd,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"Your information helps us manage your account and shopping experience."))),n.createElement("p",{className:"register-legal"},"By creating an account, you agree to our ",n.createElement(Q,{to:"/terms"},"Terms")," and ",n.createElement(Q,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"register-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          `))}function Ug(){const{cart:o,updateQuantity:s,removeFromCart:c}=_t(),p=on(),d=y.useMemo(()=>o.reduce((v,g)=>v+g.quantity,0),[o]),m=y.useMemo(()=>o.reduce((v,g)=>v+Tn(g.product)*g.quantity,0),[o]),h=(v,g)=>{const w=v.quantity+g;w<1||s(v.key,w)};return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,d," ",d===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Tt,{size:28}))),o.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,d," items in your shopping bag")),n.createElement(Q,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(ke,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},o.map(v=>{var z;const g=v.product,w=Tn(g),k=$o(g);return n.createElement("article",{className:"hv-cart-item",key:v.key},n.createElement(Q,{to:ga(g),className:"hv-cart-product-image"},k?n.createElement("img",{src:k,alt:g.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof g.category=="object"?((z=g.category)==null?void 0:z.name)||"HOVIRA":g.category||"HOVIRA"),n.createElement(Q,{to:ga(g),className:"hv-cart-product-name"},g.name),v.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",v.variant),n.createElement("span",{className:"hv-cart-product-price"},He(w,g.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>c(v.key)},n.createElement(bd,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>h(v,-1),disabled:v.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(yd,{size:14})),n.createElement("span",null,v.quantity),n.createElement("button",{type:"button",onClick:()=>h(v,1),"aria-label":"Increase quantity"},n.createElement(zr,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},He(w*v.quantity,g.currency||"INR")))})),n.createElement(Q,{to:"/shop",className:"hv-cart-continue-link"},n.createElement($t,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Tt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,d)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,He(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>p("/checkout")},"Continue to checkout",n.createElement(ke,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(At,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(hs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Tt,{size:34}),n.createElement(Ye,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(Q,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(ke,{size:17}))))),n.createElement("style",null,`
          
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

          `))}function Vg(){const o=_t(),s=Array.isArray(o==null?void 0:o.wishlist)?o.wishlist:[],c=y.useMemo(()=>`${s.length} ${s.length===1?"piece":"pieces"} saved`,[s.length]);return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Your Wishlist | HOVIRA",description:"Your favourite HOVIRA skincare essentials, all saved in one place."}),n.createElement("main",{className:"page-shell standard-page wishlist-page"},n.createElement("section",{className:"wishlist-hero"},n.createElement("div",{className:"wishlist-hero-copy"},n.createElement("span",{className:"wishlist-eyebrow"},n.createElement(Ye,{size:13})," SAVED WITH LOVE"),n.createElement("h1",null,"Your little list of ",n.createElement("em",null,"lovely things.")),n.createElement("p",null,"All the skincare you’ve had your eye on, gathered in one beautiful place."),n.createElement("div",{className:"wishlist-count"},n.createElement("span",{className:"wishlist-count-icon"},n.createElement(it,{size:15})),n.createElement("span",null,c))),n.createElement("div",{className:"wishlist-hero-art","aria-hidden":"true"},n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-one"}),n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-two"}),n.createElement("div",{className:"wishlist-art-heart"},n.createElement(it,{size:62,strokeWidth:1.1})),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-one"},"✦"),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-two"},"✧"),n.createElement("span",{className:"wishlist-art-caption"},"A little self-love",n.createElement("br",null),"goes a long way"))),s.length>0?n.createElement("section",{className:"wishlist-products-section"},n.createElement("div",{className:"wishlist-section-heading"},n.createElement("div",null,n.createElement("span",{className:"wishlist-eyebrow"},"YOUR COLLECTION"),n.createElement("h2",null,"Favourites, ",n.createElement("em",null,"for later."))),n.createElement(Q,{to:"/shop",className:"wishlist-text-link"},"Discover more ",n.createElement(ke,{size:15}))),n.createElement("div",{className:"product-grid wishlist-product-grid"},s.map((p,d)=>n.createElement(Yo,{key:p._id||p.slug||d,product:p,index:d}))),n.createElement("div",{className:"wishlist-bottom-note"},n.createElement(it,{size:17}),n.createElement("span",null,"Your saved pieces are waiting right here whenever you need them."),n.createElement(Q,{to:"/shop"},"Keep exploring ",n.createElement(ke,{size:14})))):n.createElement("section",{className:"wishlist-empty"},n.createElement("div",{className:"wishlist-empty-visual"},n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-one"}),n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-two"}),n.createElement("div",{className:"wishlist-empty-heart"},n.createElement(it,{size:48,strokeWidth:1.2})),n.createElement("span",{className:"wishlist-empty-star star-one"},"✦"),n.createElement("span",{className:"wishlist-empty-star star-two"},"✧")),n.createElement("span",{className:"wishlist-eyebrow"},"YOUR FAVOURITES LIVE HERE"),n.createElement("h2",null,"A little space for",n.createElement("br",null),n.createElement("em",null,"your favourites.")),n.createElement("p",null,"When something catches your eye, tap its heart to save it here. Your next favourite might be just a browse away."),n.createElement(Q,{to:"/shop",className:"wishlist-shop-button"},n.createElement(Tt,{size:16})," Explore the collection ",n.createElement(ke,{size:16})),n.createElement("div",{className:"wishlist-empty-footnote"},n.createElement(Ag,{size:14})," Your wishlist is ready for a little love."))),n.createElement("style",null,`
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

          `))}const Kl={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},$g=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:hg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:Fg},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:vd},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:rn}];function Yg(){const{cart:o,customer:s,clearCart:c,setCustomer:p}=_t(),d=on(),[m,h]=y.useState((s==null?void 0:s.addresses)||[]),[v,g]=y.useState(""),[w,k]=y.useState(!1),[z,O]=y.useState({...Kl,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),[L,j]=y.useState("cod"),[T,A]=y.useState(""),[U,Y]=y.useState(""),[K,W]=y.useState(null),[ae,ie]=y.useState(0),[ye,J]=y.useState(""),[me,H]=y.useState(""),[pe,Ae]=y.useState(!1),[M,xe]=y.useState(!1),[X,ve]=y.useState(!1),ze=y.useMemo(()=>o.reduce((B,te)=>B+Tn(te.product)*te.quantity,0),[o]),$=Math.max(0,ze-ae);y.useEffect(()=>{const B=(s==null?void 0:s.addresses)||[];if(h(B),B.length){const te=B.find(ne=>ne.isDefault);g(String((te==null?void 0:te._id)||B[0]._id))}else g("")},[s]);const F=()=>{J(""),H("")},P=B=>{const{name:te,value:ne,type:ue,checked:we}=B.target;O(Ee=>({...Ee,[te]:ue==="checkbox"?we:ne}))},b=async B=>{B.preventDefault(),F(),xe(!0);try{const te=await Fe.addAddress(z),ne=te!=null&&te.addresses?te:await Fe.me();p(ne);const ue=ne.addresses||[];h(ue);const we=ue.find(G=>G.fullName===z.fullName&&G.phone===z.phone&&G.addressLine1===z.addressLine1),Ee=ue[ue.length-1],_e=we||Ee;_e!=null&&_e._id&&g(String(_e._id)),k(!1),O({...Kl,fullName:ne.name||"",phone:ne.phone||""}),H("Delivery address saved successfully.")}catch(te){J(te.message)}finally{xe(!1)}},R=async()=>{var B,te;if(F(),!U.trim())return J("Please enter a coupon code.");if(!o.length)return J("Your cart is empty.");ve(!0);try{const ne=await Fe.validateCoupon({code:U.trim().toUpperCase(),subtotal:ze,items:o.map(Ee=>({product:Ee.product._id||Ee.product.id,productId:Ee.product._id||Ee.product.id,quantity:Ee.quantity,unitPrice:Tn(Ee.product)}))}),ue=ne.coupon||((B=ne.data)==null?void 0:B.coupon)||ne,we=Number(ne.discount??((te=ne.data)==null?void 0:te.discount)??ue.discountAmount??0);if(we<=0)throw new Error(ne.message||"This coupon did not return a valid discount.");W(ue),ie(Math.min(ze,we)),Y(U.trim().toUpperCase()),H(`Coupon ${U.toUpperCase()} applied successfully.`)}catch(ne){W(null),ie(0),J(ne.message)}finally{ve(!1)}},fe=()=>{W(null),ie(0),Y(""),H("Coupon removed."),J("")},ge=async B=>{if(B.preventDefault(),F(),!o.length)return J("Your cart is empty.");if(o.find(ue=>{var Ee,_e;return!(((Ee=ue.product)==null?void 0:Ee._id)||((_e=ue.product)==null?void 0:_e.id))}))return J("Product ID missing. Please remove this item and add it again from the shop.");const ne=m.find(ue=>String(ue._id)===v);if(!ne&&w)return J("Please save your new address before placing your order.");if(!ne)return J("Please select a delivery address.");Ae(!0);try{const ue={items:o.map(_e=>{const G=String(_e.product._id||_e.product.id);return{product:G,productId:G,quantity:Number(_e.quantity),..._e.variant?{variant:_e.variant}:{}}}),shippingAddress:{fullName:ne.fullName,phone:ne.phone,addressLine1:ne.addressLine1,addressLine2:ne.addressLine2,landmark:ne.landmark,city:ne.city,state:ne.state,postalCode:ne.postalCode,country:ne.country},billingAddress:null,couponCode:(K==null?void 0:K.code)||U.trim().toUpperCase()||void 0,paymentMethod:L,customerNote:T},we=await Fe.createOrder(ue),Ee=we.order||we;if(!(Ee!=null&&Ee._id)&&!(Ee!=null&&Ee.id))throw new Error("Order was submitted but the order ID was not returned.");c(),d(`/orders/${Ee._id||Ee.id}`,{state:{placed:!0}})}catch(ue){J(ue.message||"Unable to place your order.")}finally{Ae(!1)}};return o.length?n.createElement(n.Fragment,null,n.createElement(lt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(Q,{to:"/cart",className:"hv-checkout-back"},n.createElement($t,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(At,{size:17}),"Secure checkout")),ye&&n.createElement("div",{className:"hv-checkout-alert error"},n.createElement(Yt,null,ye)),me&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(Ze,{size:17}),me),n.createElement("form",{className:"hv-checkout-layout",onSubmit:ge},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!w&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{F(),O({...Kl,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),k(!0)}},n.createElement(zr,{size:16}),"Add address")),m.length>0&&!w&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map(B=>n.createElement("label",{key:B._id,className:`hv-checkout-address-card ${v===String(B._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:B._id,checked:v===String(B._id),onChange:()=>g(String(B._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(va,{size:16}),B.label||"Address"),B.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),v===String(B._id)&&n.createElement(Ze,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,B.fullName),n.createElement("p",null,B.addressLine1,B.addressLine2&&`, ${B.addressLine2}`,B.landmark&&`, ${B.landmark}`),n.createElement("p",null,B.city,", ",B.state," ",B.postalCode),n.createElement("span",{className:"hv-checkout-phone"},B.phone)))),(!m.length||w)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>k(!1),"aria-label":"Close address form"},n.createElement(ft,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:z.label,onChange:P,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:z.fullName,onChange:P,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:z.phone,onChange:P,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:z.postalCode,onChange:P,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:z.addressLine1,onChange:P,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:z.addressLine2,onChange:P,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:z.landmark,onChange:P,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:z.city,onChange:P,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:z.state,onChange:P,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:z.country,onChange:P,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:z.isDefault,onChange:P}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:M,onClick:b},M?n.createElement(ln,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(zr,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>k(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},$g.map(B=>{const te=B.icon;return n.createElement("label",{key:B.value,className:`hv-checkout-payment-card ${L===B.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:B.value,checked:L===B.value,onChange:()=>j(B.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(te,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,B.label),n.createElement("span",null,B.description)),L===B.value&&n.createElement(Ze,{size:19,className:"hv-checkout-selected-icon"}))})),L!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(At,{size:18}),n.createElement("p",null,"Online payment gateway is not connected to the current API flow. Selecting this option only submits the selected payment method with the order. Do not enable live online payments until gateway initiation and server-side payment verification are implemented."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:T,onChange:B=>A(B.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},T.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Tt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},o.map(B=>{const te=B.product,ne=$o(te);return n.createElement("div",{className:"hv-checkout-product",key:B.key},n.createElement("div",{className:"hv-checkout-product-image"},ne?n.createElement("img",{src:ne,alt:te.name}):n.createElement("span",null,"H"),n.createElement("i",null,B.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,te.name),B.variant&&n.createElement("small",null,"Option: ",B.variant),n.createElement("small",null,He(Tn(te))," each")),n.createElement("strong",{className:"hv-checkout-product-total"},He(Tn(te)*B.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(Pg,{size:17}),n.createElement("strong",null,"Have a promo code?")),K?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(Ze,{size:17}),n.createElement("span",null,n.createElement("strong",null,K.code||U),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:fe,"aria-label":"Remove coupon"},n.createElement(ft,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:U,onChange:B=>{Y(B.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:R,disabled:X},X?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(ze))),ae>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",He(ae))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-checkout-shipping"},"Calculated by store")),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,He($))),n.createElement("p",{className:"hv-checkout-total-note"},"Final shipping, tax and coupon amounts are confirmed by the server.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:pe||M||X||!v&&m.length>0&&!w||w},pe?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(ke,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(rn,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(hs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(At,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(Q,{to:"/cart"},n.createElement($t,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
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

    `)):n.createElement(n.Fragment,null,n.createElement(lt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Tt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(Q,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(ke,{size:17}))))))}const ha={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Wg(){var $;const o=on(),{customer:s,setCustomer:c,logout:p}=_t(),[d,m]=y.useState("profile"),[h,v]=y.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[g,w]=y.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[k,z]=y.useState(ha),[O,L]=y.useState(null),[j,T]=y.useState(!1),[A,U]=y.useState(""),[Y,K]=y.useState(""),[W,ae]=y.useState(!1),[ie,ye]=y.useState(!0);y.useEffect(()=>{let F=!0;return Fe.me().then(P=>{F&&(c(P),v({name:P.name||"",email:P.email||"",phone:P.phone||"",marketingOptIn:!!P.marketingOptIn}))}).catch(P=>{F&&U(P.message)}).finally(()=>{F&&ye(!1)}),()=>{F=!1}},[c]);const J=()=>{U(""),K("")},me=F=>{const{name:P,value:b,type:R,checked:fe}=F.target;v(ge=>({...ge,[P]:R==="checkbox"?fe:b}))},H=F=>{const{name:P,value:b,type:R,checked:fe}=F.target;z(ge=>({...ge,[P]:R==="checkbox"?fe:b}))},pe=async F=>{F.preventDefault(),ae(!0),J();try{const P=await Fe.updateMe(h);c(P),K("Your profile has been updated.")}catch(P){U(P.message)}finally{ae(!1)}},Ae=async F=>{if(F.preventDefault(),J(),g.newPassword.length<8)return U("New password must be at least 8 characters.");if(g.newPassword!==g.confirmPassword)return U("New passwords do not match.");ae(!0);try{await Fe.changePassword({currentPassword:g.currentPassword,newPassword:g.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),K("Password updated successfully.")}catch(P){U(P.message)}finally{ae(!1)}},M=F=>{J(),L((F==null?void 0:F._id)||null),z(F?{...ha,...F}:{...ha,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),T(!0)},xe=async F=>{F.preventDefault(),ae(!0),J();try{O?await Fe.updateAddress(O,k):await Fe.addAddress(k);const P=await Fe.me();c(P),T(!1),L(null),z(ha),K("Address saved successfully.")}catch(P){U(P.message)}finally{ae(!1)}},X=async F=>{if(window.confirm("Delete this saved address?")){J();try{await Fe.deleteAddress(F);const P=await Fe.me();c(P),K("Address deleted successfully.")}catch(P){U(P.message)}}},ve=()=>{T(!1),L(null),z(ha)},ze=()=>{p(),o("/",{replace:!0})};return ie?n.createElement("div",{className:"page-shell"},n.createElement(ln,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(lt,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,(($=s==null?void 0:s.name)==null?void 0:$.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(br,{size:28}))),A&&n.createElement("div",{className:"account-alert error"},n.createElement(Yt,null,A)),Y&&n.createElement("div",{className:"account-alert success"},n.createElement(Ze,{size:17}),Y),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((s==null?void 0:s.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(s==null?void 0:s.name)||"HOVIRA User"),n.createElement("p",null,s==null?void 0:s.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(At,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:d==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),J()}},n.createElement(br,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(_o,{size:16})),n.createElement("button",{className:d==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),J(),ve()}},n.createElement(va,{size:19}),n.createElement("span",null,"Address book"),n.createElement(_o,{size:16})),n.createElement(Q,{to:"/orders",className:"account-menu-item"},n.createElement(Ea,{size:19}),n.createElement("span",null,"My orders"),n.createElement(ke,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:ze},n.createElement(Ng,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(At,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},d==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(br,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:pe},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:h.name,onChange:me,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(fs,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:h.email,onChange:me,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(Ed,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:h.phone,onChange:me,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:h.marketingOptIn,onChange:me}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jp,{size:17}),W?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(rn,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Ae},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:g.currentPassword,onChange:F=>w({...g,currentPassword:F.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:g.newPassword,onChange:F=>w({...g,newPassword:F.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:g.confirmPassword,onChange:F=>w({...g,confirmPassword:F.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:W},n.createElement(rn,{size:16}),W?"Updating...":"Update password")))),d==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!j&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>M(null)},n.createElement(zr,{size:17}),"Add address")),j&&n.createElement("form",{className:"account-address-form",onSubmit:xe},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,O?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:ve,className:"account-close-button"},n.createElement(ft,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:k.label,onChange:H,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:k.fullName,onChange:H,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:k.phone,onChange:H,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:k.postalCode,onChange:H,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:k.addressLine1,onChange:H,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:k.addressLine2,onChange:H,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:k.landmark,onChange:H,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:k.city,onChange:H,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:k.state,onChange:H,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:k.country,onChange:H,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:k.isDefault,onChange:H}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jp,{size:16}),W?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:ve},"Cancel"))),((s==null?void 0:s.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},s.addresses.map(F=>n.createElement("div",{className:"account-address-card",key:F._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(va,{size:16}),F.label||"Address"),F.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(Ze,{size:13}),"Default")),n.createElement("h3",null,F.fullName),n.createElement("p",null,F.addressLine1,F.addressLine2&&`, ${F.addressLine2}`,F.landmark&&`, ${F.landmark}`,n.createElement("br",null),F.city,", ",F.state," ",F.postalCode,n.createElement("br",null),F.country,n.createElement("br",null),F.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>M(F)},n.createElement(Tg,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>X(F._id)},n.createElement(bd,{size:14}),"Delete"))))):!j&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(va,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>M(null)},n.createElement(zr,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
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

          
          `))}function Gg(){const[o,s]=y.useState([]),[c,p]=y.useState(!0),[d,m]=y.useState("");return y.useEffect(()=>{Fe.orders().then(s).catch(h=>m(h.message)).finally(()=>p(!1))},[]),n.createElement(n.Fragment,null,n.createElement(lt,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),d&&n.createElement(Yt,null,d),c?n.createElement(ln,null):o.length?n.createElement("div",{className:"orders-list"},o.map(h=>n.createElement(Q,{to:`/orders/${h._id||h.id}`,className:"order-row",key:h._id||h.id},n.createElement("div",{className:"order-icon"},n.createElement(Ea,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",h.orderNumber||h._id||h.id),n.createElement("small",null,new Date(h.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(h.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${h.status}`},h.status||"pending"),n.createElement("small",null,h.paymentStatus||"payment pending")),n.createElement("strong",null,He(h.total)),n.createElement(ke,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(Ea,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(Q,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(ke,{size:17})))))}const Hp=[{key:"pending",label:"Order placed",description:"We have received your order.",icon:Tt},{key:"confirmed",label:"Confirmed",description:"Your order has been confirmed.",icon:Ze},{key:"processing",label:"Processing",description:"Your items are being prepared.",icon:Ea},{key:"shipped",label:"Shipped",description:"Your order is on its way.",icon:Cr},{key:"delivered",label:"Delivered",description:"Your order has been delivered.",icon:Ze}],qg={placed:"pending",order_placed:"pending",accepted:"confirmed",packed:"processing",dispatched:"shipped",out_for_delivery:"shipped",complete:"delivered",completed:"delivered"},Up=(o="")=>{const s=String(o).toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");return qg[s]||s},Po=o=>{if(!o)return"";const s=new Date(o);return Number.isNaN(s.getTime())?"":new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}).format(s)},Fo=(o="")=>String(o).replace(/[_-]/g," ").replace(/\b\w/g,s=>s.toUpperCase());function Qg(){var me;const{id:o}=ed(),s=Gt(),[c,p]=y.useState(null),[d,m]=y.useState(!0),[h,v]=y.useState(!1),[g,w]=y.useState(""),[k,z]=y.useState(!1),O=y.useCallback(async(H=!1)=>{H?v(!0):m(!0),w("");try{const pe=await Fe.order(o);p(pe)}catch(pe){w((pe==null?void 0:pe.message)||"Unable to load this order.")}finally{m(!1),v(!1)}},[o]);y.useEffect(()=>{O()},[O]);const L=(c==null?void 0:c.orderNumber)||(c==null?void 0:c._id)||o,j=Up((c==null?void 0:c.status)||"pending"),T=j==="cancelled",A=Hp.findIndex(H=>H.key===j),U=y.useMemo(()=>Array.isArray(c==null?void 0:c.statusHistory)?[...c.statusHistory].sort((H,pe)=>new Date(H.createdAt||H.date||0)-new Date(pe.createdAt||pe.date||0)):[],[c==null?void 0:c.statusHistory]),Y=async()=>{try{await navigator.clipboard.writeText(String(L)),z(!0),window.setTimeout(()=>z(!1),1800)}catch{w("Could not copy the order number. Please copy it manually.")}},K=()=>window.print();if(d)return n.createElement("div",{className:"page-shell order-loading"},n.createElement(ln,{label:"Loading your order…"}));if(g&&!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Yt,null,g),n.createElement("button",{className:"od-btn od-btn-primary",onClick:()=>O()},n.createElement(ss,{size:16})," Try again"),n.createElement(Q,{to:"/orders",className:"od-back-link"},n.createElement($t,{size:16})," Back to orders"));if(!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement(Yt,null,"Order not found."),n.createElement(Q,{to:"/orders",className:"od-back-link"},n.createElement($t,{size:16})," Back to orders"));const W=c.items||[],ae=c.shippingAddress||{},ie=Up(c.paymentStatus||"pending"),ye=["paid","completed","success","successful"].includes(ie),J=c.trackingUrl||c.trackingURL||"";return n.createElement(n.Fragment,null,n.createElement(lt,{title:`Order ${L} | HOVIRA`,description:"View your HOVIRA order details, payment information and delivery progress."}),n.createElement("main",{className:"page-shell standard-page od-page"},n.createElement("div",{className:"od-topbar"},n.createElement(Q,{to:"/orders",className:"od-back-link"},n.createElement($t,{size:16})," All orders"),n.createElement("div",{className:"od-top-actions"},n.createElement("button",{className:"od-btn od-btn-light",onClick:()=>O(!0),disabled:h},n.createElement(ss,{size:15,className:h?"od-spinning":""}),h?"Refreshing":"Refresh status"),n.createElement("button",{className:"od-btn od-btn-light od-print-btn",onClick:K},n.createElement(Og,{size:15})," Print receipt"))),((me=s.state)==null?void 0:me.placed)&&n.createElement("div",{className:"od-success-banner"},n.createElement("span",{className:"od-success-icon"},n.createElement(Ze,{size:20})),n.createElement("div",null,n.createElement("strong",null,"Your order has been placed!"),n.createElement("p",null,"Thank you for choosing HOVIRA. We’ll keep you updated on its progress."))),g&&n.createElement("div",{className:"od-inline-error"},g),n.createElement("header",{className:"od-hero"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"YOUR HOVIRA ORDER"),n.createElement("h1",null,"Order ",n.createElement("em",null,"details")),n.createElement("p",{className:"od-order-meta"},"Order number ",n.createElement("strong",null,L),n.createElement("button",{className:"od-copy-btn",onClick:Y,"aria-label":"Copy order number"},n.createElement(Eg,{size:14})," ",k?"Copied":"Copy")),c.createdAt&&n.createElement("p",{className:"od-date"},"Placed on ",Po(c.createdAt))),n.createElement("div",{className:`od-status-card ${T?"is-cancelled":""}`},n.createElement("span",{className:"od-status-label"},"CURRENT STATUS"),n.createElement("strong",null,Fo(c.status||"pending")),n.createElement("span",null,T?"This order has been cancelled.":j==="delivered"?"Your order has arrived.":"We’re taking care of your order."))),!T&&n.createElement("section",{className:"od-card od-tracking-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"THE JOURNEY"),n.createElement("h2",null,"Order progress")),c.estimatedDelivery&&n.createElement("span",{className:"od-delivery-date"},n.createElement(Cr,{size:15})," Expected ",Po(c.estimatedDelivery))),n.createElement("div",{className:"od-progress-track"},Hp.map((H,pe)=>{const Ae=H.icon,M=A>=pe&&A!==-1,xe=A===pe;return n.createElement("div",{className:`od-progress-step ${M?"is-done":""} ${xe?"is-active":""}`,key:H.key},n.createElement("div",{className:"od-step-icon"},n.createElement(Ae,{size:18})),n.createElement("div",{className:"od-step-copy"},n.createElement("strong",null,H.label),n.createElement("span",null,xe?"In progress":M?"Completed":H.description)))})),c.trackingNumber&&n.createElement("div",{className:"od-tracking-info"},n.createElement("div",null,n.createElement("span",null,"Tracking number"),n.createElement("strong",null,c.trackingNumber)),c.carrier&&n.createElement("div",null,n.createElement("span",null,"Delivery partner"),n.createElement("strong",null,c.carrier)),J&&n.createElement("a",{href:J,target:"_blank",rel:"noreferrer",className:"od-track-link"},"Track shipment ",n.createElement(wg,{size:14})))),n.createElement("div",{className:"od-content-grid"},n.createElement("div",{className:"od-main-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"IN YOUR PACKAGE"),n.createElement("h2",null,"Items ordered ",n.createElement("span",{className:"od-count"},W.length)))),n.createElement("div",{className:"od-items-list"},W.map((H,pe)=>n.createElement("div",{className:"od-product-row",key:H._id||H.product||pe},n.createElement("div",{className:"od-product-image"},H.image?n.createElement("img",{src:H.image,alt:H.name||"HOVIRA product"}):n.createElement("span",null,"H")),n.createElement("div",{className:"od-product-info"},n.createElement("strong",null,H.name||"Product"),H.variant&&n.createElement("span",{className:"od-variant"},H.variant),n.createElement("span",null,"Quantity: ",H.quantity||1),H.sku&&n.createElement("span",{className:"od-sku"},"SKU: ",H.sku)),n.createElement("strong",{className:"od-item-price"},He(H.lineTotal??Number(H.unitPrice||0)*Number(H.quantity||1)))))),n.createElement("div",{className:"od-price-summary"},n.createElement("div",null,n.createElement("span",null,"Subtotal"),n.createElement("strong",null,He(c.subtotal||0))),Number(c.discount)>0&&n.createElement("div",{className:"od-discount"},n.createElement("span",null,"Discount ",c.couponCode?`(${c.couponCode})`:""),n.createElement("strong",null,"−",He(c.discount))),n.createElement("div",null,n.createElement("span",null,"Shipping"),n.createElement("strong",null,Number(c.shippingFee)===0?"Free":He(c.shippingFee||0))),Number(c.tax)>0&&n.createElement("div",null,n.createElement("span",null,"Tax"),n.createElement("strong",null,He(c.tax))),Number(c.codFee)>0&&n.createElement("div",null,n.createElement("span",null,"COD fee"),n.createElement("strong",null,He(c.codFee))),n.createElement("div",{className:"od-grand-total"},n.createElement("span",null,"Total paid / payable"),n.createElement("strong",null,He(c.total||0))))),U.length>0&&n.createElement("section",{className:"od-card od-history-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"ORDER UPDATES"),n.createElement("h2",null,"Activity history"))),n.createElement("div",{className:"od-history-list"},U.map((H,pe)=>n.createElement("div",{className:"od-history-item",key:H._id||pe},n.createElement("span",{className:"od-history-dot"},n.createElement(Ip,{size:13})),n.createElement("div",null,n.createElement("strong",null,Fo(H.status||"Update")),H.note&&n.createElement("p",null,H.note),n.createElement("small",null,Po(H.createdAt||H.date)))))))),n.createElement("aside",{className:"od-side-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"DELIVERING TO"),n.createElement("h2",null,"Shipping address")),n.createElement("span",{className:"od-heading-icon"},n.createElement(va,{size:17}))),n.createElement("div",{className:"od-address"},n.createElement("strong",null,ae.fullName||"Customer"),ae.addressLine1&&n.createElement("span",null,ae.addressLine1),ae.addressLine2&&n.createElement("span",null,ae.addressLine2),n.createElement("span",null,[ae.city,ae.state,ae.postalCode].filter(Boolean).join(", ")),ae.country&&n.createElement("span",null,ae.country),ae.phone&&n.createElement("span",{className:"od-phone"},ae.phone))),n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"SECURE CHECKOUT"),n.createElement("h2",null,"Payment details")),n.createElement("span",{className:"od-heading-icon"},n.createElement(vd,{size:17}))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Method"),n.createElement("strong",null,Fo(c.paymentMethod||"Not specified"))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`od-payment-badge ${ye?"is-paid":ie==="failed"?"is-failed":""}`},ye?n.createElement(At,{size:13}):ie==="failed"?n.createElement(yg,{size:13}):n.createElement(Ip,{size:13}),Fo(c.paymentStatus||"Pending"))),c.paymentId&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment ID"),n.createElement("strong",{className:"od-payment-id"},c.paymentId)),c.paidAt&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Paid on"),n.createElement("strong",null,Po(c.paidAt)))),n.createElement("div",{className:"od-help-card"},n.createElement("span",{className:"od-help-icon"},n.createElement(Ea,{size:20})),n.createElement("strong",null,"Need help with your order?"),n.createElement("p",null,"Our team is here to help with any questions about your purchase."),n.createElement(Q,{to:"/contact",className:"od-help-link"},"Contact support ",n.createElement(ke,{size:15}))))),n.createElement("div",{className:"od-bottom-actions"},n.createElement(Q,{to:"/shop",className:"od-btn od-btn-primary"},"Continue shopping ",n.createElement(ke,{size:16})),n.createElement(Q,{to:"/orders",className:"od-btn od-btn-outline"},"View all orders"))),n.createElement("style",null,`

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

          
          `))}function Kg(){return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(Q,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(ke,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(wr,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(it,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(wd,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(Q,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(ke,{size:17}))))}function Vp({type:o}){const s=o==="privacy";return n.createElement(n.Fragment,null,n.createElement(lt,{title:s?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,s?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,s?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),s?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function Xg(){return n.createElement(n.Fragment,null,n.createElement(lt,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(Q,{className:"btn btn-dark",to:"/"},n.createElement($t,{size:16})," Back home")))}function Do({children:o}){const{customer:s,authReady:c}=_t();return c?s?o:n.createElement(xh,{to:"/login",replace:!0}):n.createElement(ln,{label:"Checking your account..."})}function Zg(){const{appReady:o,appError:s,retryInitialLoad:c}=_t();return o?n.createElement(wh,null,n.createElement(Qe,{element:n.createElement(Mg,null)},n.createElement(Qe,{index:!0,element:n.createElement(_g,null)}),n.createElement(Qe,{path:"shop",element:n.createElement(jg,null)}),n.createElement(Qe,{path:"product/:slugOrId",element:n.createElement(Bg,null)}),n.createElement(Qe,{path:"login",element:n.createElement(Hg,null)}),n.createElement(Qe,{path:"signup",element:n.createElement(Bp,null)}),n.createElement(Qe,{path:"register",element:n.createElement(Bp,null)}),n.createElement(Qe,{path:"cart",element:n.createElement(Ug,null)}),n.createElement(Qe,{path:"wishlist",element:n.createElement(Vg,null)}),n.createElement(Qe,{path:"checkout",element:n.createElement(Do,null,n.createElement(Yg,null))}),n.createElement(Qe,{path:"account",element:n.createElement(Do,null,n.createElement(Wg,null))}),n.createElement(Qe,{path:"orders",element:n.createElement(Do,null,n.createElement(Gg,null))}),n.createElement(Qe,{path:"orders/:id",element:n.createElement(Do,null,n.createElement(Qg,null))}),n.createElement(Qe,{path:"about",element:n.createElement(Kg,null)}),n.createElement(Qe,{path:"privacy",element:n.createElement(Vp,{type:"privacy"})}),n.createElement(Qe,{path:"terms",element:n.createElement(Vp,{type:"terms"})}),n.createElement(Qe,{path:"*",element:n.createElement(Xg,null)}))):s?n.createElement("div",{className:"page-shell"},n.createElement("div",{className:"loading-error"},n.createElement("h2",null,"Unable to load HOVIRA"),n.createElement("p",null,s),n.createElement("button",{onClick:c},"Try Again"))):n.createElement(ln,{label:"Preparing your HOVIRA experience..."})}function Jg(){const{pathname:o}=Gt();return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}Tf.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(pd,null,n.createElement(Oh,null,n.createElement(Jg,null),n.createElement(ug,null,n.createElement(Zg,null))))));
