var Ef=Object.defineProperty;var wf=(o,s,c)=>s in o?Ef(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c;var nn=(o,s,c)=>wf(o,typeof s!="symbol"?s+"":s,c);function bf(o,s){for(var c=0;c<s.length;c++){const d=s[c];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const m=Object.getOwnPropertyDescriptor(d,p);m&&Object.defineProperty(o,p,m.get?m:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function Bo(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ji={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function kf(){if(cd)return we;cd=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.iterator;function O(b){return b===null||typeof b!="object"?null:(b=N&&b[N]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,R={};function A(b,P,pe){this.props=b,this.context=P,this.refs=R,this.updater=pe||L}A.prototype.isReactComponent={},A.prototype.setState=function(b,P){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,P,"setState")},A.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function T(){}T.prototype=A.prototype;function _(b,P,pe){this.props=b,this.context=P,this.refs=R,this.updater=pe||L}var Y=_.prototype=new T;Y.constructor=_,U(Y,A.prototype),Y.isPureReactComponent=!0;var W=Array.isArray,ee=Object.prototype.hasOwnProperty,oe={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function le(b,P,pe){var fe,H={},J=null,te=null;if(P!=null)for(fe in P.ref!==void 0&&(te=P.ref),P.key!==void 0&&(J=""+P.key),P)ee.call(P,fe)&&!ye.hasOwnProperty(fe)&&(H[fe]=P[fe]);var ue=arguments.length-2;if(ue===1)H.children=pe;else if(1<ue){for(var Ee=Array(ue),ve=0;ve<ue;ve++)Ee[ve]=arguments[ve+2];H.children=Ee}if(b&&b.defaultProps)for(fe in ue=b.defaultProps,ue)H[fe]===void 0&&(H[fe]=ue[fe]);return{$$typeof:o,type:b,key:J,ref:te,props:H,_owner:oe.current}}function Ne(b,P){return{$$typeof:o,type:b.type,key:P,ref:b.ref,props:b.props,_owner:b._owner}}function G(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function ke(b){var P={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(pe){return P[pe]})}var Re=/\/+/g;function j(b,P){return typeof b=="object"&&b!==null&&b.key!=null?ke(""+b.key):P.toString(36)}function ge(b,P,pe,fe,H){var J=typeof b;(J==="undefined"||J==="boolean")&&(b=null);var te=!1;if(b===null)te=!0;else switch(J){case"string":case"number":te=!0;break;case"object":switch(b.$$typeof){case o:case s:te=!0}}if(te)return te=b,H=H(te),b=fe===""?"."+j(te,0):fe,W(H)?(pe="",b!=null&&(pe=b.replace(Re,"$&/")+"/"),ge(H,P,pe,"",function(ve){return ve})):H!=null&&(G(H)&&(H=Ne(H,pe+(!H.key||te&&te.key===H.key?"":(""+H.key).replace(Re,"$&/")+"/")+b)),P.push(H)),1;if(te=0,fe=fe===""?".":fe+":",W(b))for(var ue=0;ue<b.length;ue++){J=b[ue];var Ee=fe+j(J,ue);te+=ge(J,P,pe,Ee,H)}else if(Ee=O(b),typeof Ee=="function")for(b=Ee.call(b),ue=0;!(J=b.next()).done;)J=J.value,Ee=fe+j(J,ue++),te+=ge(J,P,pe,Ee,H);else if(J==="object")throw P=String(b),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return te}function ae(b,P,pe){if(b==null)return b;var fe=[],H=0;return ge(b,fe,"","",function(J){return P.call(pe,J,H++)}),fe}function he(b){if(b._status===-1){var P=b._result;P=P(),P.then(function(pe){(b._status===0||b._status===-1)&&(b._status=1,b._result=pe)},function(pe){(b._status===0||b._status===-1)&&(b._status=2,b._result=pe)}),b._status===-1&&(b._status=0,b._result=P)}if(b._status===1)return b._result.default;throw b._result}var be={current:null},$={transition:null},D={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:$,ReactCurrentOwner:oe};function F(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:ae,forEach:function(b,P,pe){ae(b,function(){P.apply(this,arguments)},pe)},count:function(b){var P=0;return ae(b,function(){P++}),P},toArray:function(b){return ae(b,function(P){return P})||[]},only:function(b){if(!G(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},we.Component=A,we.Fragment=c,we.Profiler=p,we.PureComponent=_,we.StrictMode=d,we.Suspense=h,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,we.act=F,we.cloneElement=function(b,P,pe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var fe=U({},b.props),H=b.key,J=b.ref,te=b._owner;if(P!=null){if(P.ref!==void 0&&(J=P.ref,te=oe.current),P.key!==void 0&&(H=""+P.key),b.type&&b.type.defaultProps)var ue=b.type.defaultProps;for(Ee in P)ee.call(P,Ee)&&!ye.hasOwnProperty(Ee)&&(fe[Ee]=P[Ee]===void 0&&ue!==void 0?ue[Ee]:P[Ee])}var Ee=arguments.length-2;if(Ee===1)fe.children=pe;else if(1<Ee){ue=Array(Ee);for(var ve=0;ve<Ee;ve++)ue[ve]=arguments[ve+2];fe.children=ue}return{$$typeof:o,type:b.type,key:H,ref:J,props:fe,_owner:te}},we.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:m,_context:b},b.Consumer=b},we.createElement=le,we.createFactory=function(b){var P=le.bind(null,b);return P.type=b,P},we.createRef=function(){return{current:null}},we.forwardRef=function(b){return{$$typeof:v,render:b}},we.isValidElement=G,we.lazy=function(b){return{$$typeof:k,_payload:{_status:-1,_result:b},_init:he}},we.memo=function(b,P){return{$$typeof:w,type:b,compare:P===void 0?null:P}},we.startTransition=function(b){var P=$.transition;$.transition={};try{b()}finally{$.transition=P}},we.unstable_act=F,we.useCallback=function(b,P){return be.current.useCallback(b,P)},we.useContext=function(b){return be.current.useContext(b)},we.useDebugValue=function(){},we.useDeferredValue=function(b){return be.current.useDeferredValue(b)},we.useEffect=function(b,P){return be.current.useEffect(b,P)},we.useId=function(){return be.current.useId()},we.useImperativeHandle=function(b,P,pe){return be.current.useImperativeHandle(b,P,pe)},we.useInsertionEffect=function(b,P){return be.current.useInsertionEffect(b,P)},we.useLayoutEffect=function(b,P){return be.current.useLayoutEffect(b,P)},we.useMemo=function(b,P){return be.current.useMemo(b,P)},we.useReducer=function(b,P,pe){return be.current.useReducer(b,P,pe)},we.useRef=function(b){return be.current.useRef(b)},we.useState=function(b){return be.current.useState(b)},we.useSyncExternalStore=function(b,P,pe){return be.current.useSyncExternalStore(b,P,pe)},we.useTransition=function(){return be.current.useTransition()},we.version="18.3.1",we}var ud;function $d(){return ud||(ud=1,ji.exports=kf()),ji.exports}var y=$d();const n=Bo(y),Nf=bf({__proto__:null,default:n},[y]);var Oo={},Bi={exports:{}},mt={},Ui={exports:{}},Hi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function zf(){return dd||(dd=1,(function(o){function s($,D){var F=$.length;$.push(D);e:for(;0<F;){var b=F-1>>>1,P=$[b];if(0<p(P,D))$[b]=D,$[F]=P,F=b;else break e}}function c($){return $.length===0?null:$[0]}function d($){if($.length===0)return null;var D=$[0],F=$.pop();if(F!==D){$[0]=F;e:for(var b=0,P=$.length,pe=P>>>1;b<pe;){var fe=2*(b+1)-1,H=$[fe],J=fe+1,te=$[J];if(0>p(H,F))J<P&&0>p(te,H)?($[b]=te,$[J]=F,b=J):($[b]=H,$[fe]=F,b=fe);else if(J<P&&0>p(te,F))$[b]=te,$[J]=F,b=J;else break e}}return D}function p($,D){var F=$.sortIndex-D.sortIndex;return F!==0?F:$.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,v=g.now();o.unstable_now=function(){return g.now()-v}}var h=[],w=[],k=1,N=null,O=3,L=!1,U=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y($){for(var D=c(w);D!==null;){if(D.callback===null)d(w);else if(D.startTime<=$)d(w),D.sortIndex=D.expirationTime,s(h,D);else break;D=c(w)}}function W($){if(R=!1,Y($),!U)if(c(h)!==null)U=!0,he(ee);else{var D=c(w);D!==null&&be(W,D.startTime-$)}}function ee($,D){U=!1,R&&(R=!1,T(le),le=-1),L=!0;var F=O;try{for(Y(D),N=c(h);N!==null&&(!(N.expirationTime>D)||$&&!ke());){var b=N.callback;if(typeof b=="function"){N.callback=null,O=N.priorityLevel;var P=b(N.expirationTime<=D);D=o.unstable_now(),typeof P=="function"?N.callback=P:N===c(h)&&d(h),Y(D)}else d(h);N=c(h)}if(N!==null)var pe=!0;else{var fe=c(w);fe!==null&&be(W,fe.startTime-D),pe=!1}return pe}finally{N=null,O=F,L=!1}}var oe=!1,ye=null,le=-1,Ne=5,G=-1;function ke(){return!(o.unstable_now()-G<Ne)}function Re(){if(ye!==null){var $=o.unstable_now();G=$;var D=!0;try{D=ye(!0,$)}finally{D?j():(oe=!1,ye=null)}}else oe=!1}var j;if(typeof _=="function")j=function(){_(Re)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=Re,j=function(){ae.postMessage(null)}}else j=function(){A(Re,0)};function he($){ye=$,oe||(oe=!0,j())}function be($,D){le=A(function(){$(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function($){$.callback=null},o.unstable_continueExecution=function(){U||L||(U=!0,he(ee))},o.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<$?Math.floor(1e3/$):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_getFirstCallbackNode=function(){return c(h)},o.unstable_next=function($){switch(O){case 1:case 2:case 3:var D=3;break;default:D=O}var F=O;O=D;try{return $()}finally{O=F}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function($,D){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=O;O=$;try{return D()}finally{O=F}},o.unstable_scheduleCallback=function($,D,F){var b=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?b+F:b):F=b,$){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,$={id:k++,callback:D,priorityLevel:$,startTime:F,expirationTime:P,sortIndex:-1},F>b?($.sortIndex=F,s(w,$),c(h)===null&&$===c(w)&&(R?(T(le),le=-1):R=!0,be(W,F-b))):($.sortIndex=P,s(h,$),U||L||(U=!0,he(ee))),$},o.unstable_shouldYield=ke,o.unstable_wrapCallback=function($){var D=O;return function(){var F=O;O=D;try{return $.apply(this,arguments)}finally{O=F}}}})(Hi)),Hi}var pd;function Sf(){return pd||(pd=1,Ui.exports=zf()),Ui.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Cf(){if(md)return mt;md=1;var o=$d(),s=Sf();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},N={};function O(e){return h.call(N,e)?!0:h.call(k,e)?!1:w.test(e)?N[e]=!0:(k[e]=!0,!1)}function L(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,r,a){if(t===null||typeof t>"u"||L(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,r,a,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,_);A[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,_);A[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,_);A[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,r,a){var l=A.hasOwnProperty(t)?A[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,r,l,a)&&(r=null),a||l===null?O(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var W=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),oe=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),ke=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),$=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,b;function P(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var pe=!1;function fe(e,t){if(!e||pe)return"";pe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var a=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){a=C}e.call(t.prototype)}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),i=a.stack.split(`
`),u=l.length-1,f=i.length-1;1<=u&&0<=f&&l[u]!==i[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==i[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==i[f]){var x=`
`+l[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=f);break}}}finally{pe=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?P(e):""}function H(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case oe:return"Portal";case Ne:return"Profiler";case le:return"StrictMode";case j:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ke:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case Re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ve(e){var t=Ee(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||(e._valueTracker=ve(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Ee(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function de(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yt(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gs(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function Go(e,t){vs(e,t);var r=ue(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qo(e,t.type,r):t.hasOwnProperty("defaultValue")&&qo(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function qo(e,t,r){(t!=="number"||de(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ar=Array.isArray;function Gn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(Ar(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function Es(e,t){var r=ue(t.value),a=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ko(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,ks=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Ns(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function zs(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=Ns(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var Np=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(Np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,qn=null,Qn=null;function Ss(e){if(e=Zr(e)){if(typeof tl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=$a(t),tl(e.stateNode,e.type,t))}}function Cs(e){qn?Qn?Qn.push(e):Qn=[e]:qn=e}function As(){if(qn){var e=qn,t=Qn;if(Qn=qn=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function Ts(e,t){return e(t)}function Os(){}var nl=!1;function Rs(e,t,r){if(nl)return e(t,r);nl=!0;try{return Ts(e,t,r)}finally{nl=!1,(qn!==null||Qn!==null)&&(Os(),As())}}function Rr(e,t){var r=e.stateNode;if(r===null)return null;var a=$a(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var rl=!1;if(v)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){rl=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{rl=!1}function zp(e,t,r,a,l,i,u,f,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(M){this.onError(M)}}var Fr=!1,ba=null,ka=!1,al=null,Sp={onError:function(e){Fr=!0,ba=e}};function Cp(e,t,r,a,l,i,u,f,x){Fr=!1,ba=null,zp.apply(Sp,arguments)}function Ap(e,t,r,a,l,i,u,f,x){if(Cp.apply(this,arguments),Fr){if(Fr){var C=ba;Fr=!1,ba=null}else throw Error(c(198));ka||(ka=!0,al=C)}}function Rn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(Rn(e)!==e)throw Error(c(188))}function Tp(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return Fs(l),e;if(i===a)return Fs(l),t;i=i.sibling}throw Error(c(188))}if(r.return!==a.return)r=l,a=i;else{for(var u=!1,f=l.child;f;){if(f===r){u=!0,r=l,a=i;break}if(f===a){u=!0,a=l,r=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===r){u=!0,r=i,a=l;break}if(f===a){u=!0,a=i,r=l;break}f=f.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==a)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Ds(e){return e=Tp(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Ls=s.unstable_scheduleCallback,Ms=s.unstable_cancelCallback,Op=s.unstable_shouldYield,Rp=s.unstable_requestPaint,je=s.unstable_now,Pp=s.unstable_getCurrentPriorityLevel,ol=s.unstable_ImmediatePriority,_s=s.unstable_UserBlockingPriority,Na=s.unstable_NormalPriority,Fp=s.unstable_LowPriority,js=s.unstable_IdlePriority,za=null,_t=null;function Dp(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Mp,Ip=Math.log,Lp=Math.LN2;function Mp(e){return e>>>=0,e===0?32:31-(Ip(e)/Lp|0)|0}var Sa=64,Ca=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,u=r&268435455;if(u!==0){var f=u&~l;f!==0?a=Dr(f):(i&=u,i!==0&&(a=Dr(i)))}else u=r&~l,u!==0?a=Dr(u):i!==0&&(a=Dr(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Ot(t),l=1<<r,a|=e[r],t&=~l;return a}function _p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-Ot(i),f=1<<u,x=l[u];x===-1?((f&r)===0||(f&a)!==0)&&(l[u]=_p(f,t)):x<=t&&(e.expiredLanes|=f),i&=~f}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=Sa;return Sa<<=1,(Sa&4194240)===0&&(Sa=64),e}function il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ir(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=r}function Bp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ot(r),i=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~i}}function sl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Ot(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var Ce=0;function Us(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hs,cl,Vs,$s,Ys,ul=!1,Ta=[],sn=null,cn=null,un=null,Lr=new Map,Mr=new Map,dn=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function _r(e,t,r,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zr(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Hp(e,t,r,a,l){switch(t){case"focusin":return sn=_r(sn,e,t,r,a,l),!0;case"dragenter":return cn=_r(cn,e,t,r,a,l),!0;case"mouseover":return un=_r(un,e,t,r,a,l),!0;case"pointerover":var i=l.pointerId;return Lr.set(i,_r(Lr.get(i)||null,e,t,r,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Mr.set(i,_r(Mr.get(i)||null,e,t,r,a,l)),!0}return!1}function Gs(e){var t=Pn(e.target);if(t!==null){var r=Rn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ps(r),t!==null){e.blockedOn=t,Ys(e.priority,function(){Vs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Jo=a,r.target.dispatchEvent(a),Jo=null}else return t=Zr(r),t!==null&&cl(t),e.blockedOn=r,!1;t.shift()}return!0}function qs(e,t,r){Oa(e)&&r.delete(t)}function Vp(){ul=!1,sn!==null&&Oa(sn)&&(sn=null),cn!==null&&Oa(cn)&&(cn=null),un!==null&&Oa(un)&&(un=null),Lr.forEach(qs),Mr.forEach(qs)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vp)))}function Br(e){function t(l){return jr(l,e)}if(0<Ta.length){jr(Ta[0],e);for(var r=1;r<Ta.length;r++){var a=Ta[r];a.blockedOn===e&&(a.blockedOn=null)}}for(sn!==null&&jr(sn,e),cn!==null&&jr(cn,e),un!==null&&jr(un,e),Lr.forEach(t),Mr.forEach(t),r=0;r<dn.length;r++)a=dn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<dn.length&&(r=dn[0],r.blockedOn===null);)Gs(r),r.blockedOn===null&&dn.shift()}var Kn=W.ReactCurrentBatchConfig,Ra=!0;function $p(e,t,r,a){var l=Ce,i=Kn.transition;Kn.transition=null;try{Ce=1,dl(e,t,r,a)}finally{Ce=l,Kn.transition=i}}function Yp(e,t,r,a){var l=Ce,i=Kn.transition;Kn.transition=null;try{Ce=4,dl(e,t,r,a)}finally{Ce=l,Kn.transition=i}}function dl(e,t,r,a){if(Ra){var l=pl(e,t,r,a);if(l===null)Tl(e,t,a,Pa,r),Ws(e,a);else if(Hp(l,e,t,r,a))a.stopPropagation();else if(Ws(e,a),t&4&&-1<Up.indexOf(e)){for(;l!==null;){var i=Zr(l);if(i!==null&&Hs(i),i=pl(e,t,r,a),i===null&&Tl(e,t,a,Pa,r),i===l)break;l=i}l!==null&&a.stopPropagation()}else Tl(e,t,a,null,r)}}var Pa=null;function pl(e,t,r,a){if(Pa=null,e=el(a),e=Pn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ps(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function Qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pp()){case ol:return 1;case _s:return 4;case Na:case Fp:return 16;case js:return 536870912;default:return 16}default:return 16}}var pn=null,ml=null,Fa=null;function Ks(){if(Fa)return Fa;var e,t=ml,r=t.length,a,l="value"in pn?pn.value:pn.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var u=r-e;for(a=1;a<=u&&t[r-a]===l[i-a];a++);return Fa=l.slice(e,1<a?1-a:void 0)}function Da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function Xs(){return!1}function ht(e){function t(r,a,l,i,u){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ia:Xs,this.isPropagationStopped=Xs,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=ht(Xn),Ur=F({},Xn,{view:0,detail:0}),Wp=ht(Ur),hl,gl,Hr,La=F({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(hl=e.screenX-Hr.screenX,gl=e.screenY-Hr.screenY):gl=hl=0,Hr=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),Zs=ht(La),Gp=F({},La,{dataTransfer:0}),qp=ht(Gp),Qp=F({},Ur,{relatedTarget:0}),vl=ht(Qp),Kp=F({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=ht(Kp),Zp=F({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=ht(Zp),em=F({},Xn,{data:0}),Js=ht(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function xl(){return am}var om=F({},Ur,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=ht(om),im=F({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=ht(im),sm=F({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),cm=ht(sm),um=F({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=ht(um),pm=F({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=ht(pm),fm=[9,13,27,32],yl=v&&"CompositionEvent"in window,Vr=null;v&&"documentMode"in document&&(Vr=document.documentMode);var hm=v&&"TextEvent"in window&&!Vr,tc=v&&(!yl||Vr&&8<Vr&&11>=Vr),nc=" ",rc=!1;function ac(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function gm(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(rc=!0,nc);case"textInput":return e=t.data,e===nc&&rc?null:e;default:return null}}function vm(e,t){if(Zn)return e==="compositionend"||!yl&&ac(e,t)?(e=Ks(),Fa=ml=pn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tc&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function ic(e,t,r,a){Cs(a),t=Ua(t,"onChange"),0<t.length&&(r=new fl("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var $r=null,Yr=null;function ym(e){zc(e,0)}function Ma(e){var t=rr(e);if(q(t))return e}function Em(e,t){if(e==="change")return t}var sc=!1;if(v){var El;if(v){var wl="oninput"in document;if(!wl){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),wl=typeof cc.oninput=="function"}El=wl}else El=!1;sc=El&&(!document.documentMode||9<document.documentMode)}function uc(){$r&&($r.detachEvent("onpropertychange",dc),Yr=$r=null)}function dc(e){if(e.propertyName==="value"&&Ma(Yr)){var t=[];ic(t,Yr,e,el(e)),Rs(ym,t)}}function wm(e,t,r){e==="focusin"?(uc(),$r=t,Yr=r,$r.attachEvent("onpropertychange",dc)):e==="focusout"&&uc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Yr)}function km(e,t){if(e==="click")return Ma(t)}function Nm(e,t){if(e==="input"||e==="change")return Ma(t)}function zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:zm;function Wr(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!h.call(t,l)||!Rt(e[l],t[l]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var r=pc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=pc(r)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=de(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=hc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fc(r.ownerDocument.documentElement,r)){if(a!==null&&bl(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=mc(r,i);var u=mc(r,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=v&&"documentMode"in document&&11>=document.documentMode,Jn=null,kl=null,Gr=null,Nl=!1;function gc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nl||Jn==null||Jn!==de(a)||(a=Jn,"selectionStart"in a&&bl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gr&&Wr(Gr,a)||(Gr=a,a=Ua(kl,"onSelect"),0<a.length&&(t=new fl("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Jn)))}function _a(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},zl={},vc={};v&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ja(e){if(zl[e])return zl[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vc)return zl[e]=t[r];return e}var xc=ja("animationend"),yc=ja("animationiteration"),Ec=ja("animationstart"),wc=ja("transitionend"),bc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){bc.set(e,t),m(t,[e])}for(var Sl=0;Sl<kc.length;Sl++){var Cl=kc[Sl],Am=Cl.toLowerCase(),Tm=Cl[0].toUpperCase()+Cl.slice(1);mn(Am,"on"+Tm)}mn(xc,"onAnimationEnd"),mn(yc,"onAnimationIteration"),mn(Ec,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(wc,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Nc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ap(a,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],x=f.instance,C=f.currentTarget;if(f=f.listener,x!==i&&l.isPropagationStopped())break e;Nc(l,f,C),i=x}else for(u=0;u<a.length;u++){if(f=a[u],x=f.instance,C=f.currentTarget,f=f.listener,x!==i&&l.isPropagationStopped())break e;Nc(l,f,C),i=x}}}if(ka)throw e=al,ka=!1,al=null,e}function Te(e,t){var r=t[Il];r===void 0&&(r=t[Il]=new Set);var a=e+"__bubble";r.has(a)||(Sc(t,e,2,!1),r.add(a))}function Al(e,t,r){var a=0;t&&(a|=4),Sc(r,e,a,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Ba]){e[Ba]=!0,d.forEach(function(r){r!=="selectionchange"&&(Om.has(r)||Al(r,!1,e),Al(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,Al("selectionchange",!1,t))}}function Sc(e,t,r,a){switch(Qs(t)){case 1:var l=$p;break;case 4:l=Yp;break;default:l=dl}r=l.bind(null,t,r,e),l=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Tl(e,t,r,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===l||x.nodeType===8&&x.parentNode===l))return;u=u.return}for(;f!==null;){if(u=Pn(f),u===null)return;if(x=u.tag,x===5||x===6){a=i=u;continue e}f=f.parentNode}}a=a.return}Rs(function(){var C=i,M=el(r),B=[];e:{var I=bc.get(e);if(I!==void 0){var Q=fl,Z=e;switch(e){case"keypress":if(Da(r)===0)break e;case"keydown":case"keyup":Q=lm;break;case"focusin":Z="focus",Q=vl;break;case"focusout":Z="blur",Q=vl;break;case"beforeblur":case"afterblur":Q=vl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=cm;break;case xc:case yc:case Ec:Q=Xp;break;case wc:Q=dm;break;case"scroll":Q=Wp;break;case"wheel":Q=mm;break;case"copy":case"cut":case"paste":Q=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=ec}var ne=(t&4)!==0,Be=!ne&&e==="scroll",z=ne?I!==null?I+"Capture":null:I;ne=[];for(var E=C,S;E!==null;){S=E;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,z!==null&&(V=Rr(E,z),V!=null&&ne.push(Kr(E,V,S)))),Be)break;E=E.return}0<ne.length&&(I=new Q(I,Z,null,r,M),B.push({event:I,listeners:ne}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",I&&r!==Jo&&(Z=r.relatedTarget||r.fromElement)&&(Pn(Z)||Z[qt]))break e;if((Q||I)&&(I=M.window===M?M:(I=M.ownerDocument)?I.defaultView||I.parentWindow:window,Q?(Z=r.relatedTarget||r.toElement,Q=C,Z=Z?Pn(Z):null,Z!==null&&(Be=Rn(Z),Z!==Be||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Q=null,Z=C),Q!==Z)){if(ne=Zs,V="onMouseLeave",z="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ne=ec,V="onPointerLeave",z="onPointerEnter",E="pointer"),Be=Q==null?I:rr(Q),S=Z==null?I:rr(Z),I=new ne(V,E+"leave",Q,r,M),I.target=Be,I.relatedTarget=S,V=null,Pn(M)===C&&(ne=new ne(z,E+"enter",Z,r,M),ne.target=S,ne.relatedTarget=Be,V=ne),Be=V,Q&&Z)t:{for(ne=Q,z=Z,E=0,S=ne;S;S=tr(S))E++;for(S=0,V=z;V;V=tr(V))S++;for(;0<E-S;)ne=tr(ne),E--;for(;0<S-E;)z=tr(z),S--;for(;E--;){if(ne===z||z!==null&&ne===z.alternate)break t;ne=tr(ne),z=tr(z)}ne=null}else ne=null;Q!==null&&Cc(B,I,Q,ne,!1),Z!==null&&Be!==null&&Cc(B,Be,Z,ne,!0)}}e:{if(I=C?rr(C):window,Q=I.nodeName&&I.nodeName.toLowerCase(),Q==="select"||Q==="input"&&I.type==="file")var re=Em;else if(lc(I))if(sc)re=Nm;else{re=bm;var se=wm}else(Q=I.nodeName)&&Q.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(re=km);if(re&&(re=re(e,C))){ic(B,re,r,M);break e}se&&se(e,I,C),e==="focusout"&&(se=I._wrapperState)&&se.controlled&&I.type==="number"&&qo(I,"number",I.value)}switch(se=C?rr(C):window,e){case"focusin":(lc(se)||se.contentEditable==="true")&&(Jn=se,kl=C,Gr=null);break;case"focusout":Gr=kl=Jn=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,gc(B,r,M);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":gc(B,r,M)}var ce;if(yl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Zn?ac(e,r)&&(me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(me="onCompositionStart");me&&(tc&&r.locale!=="ko"&&(Zn||me!=="onCompositionStart"?me==="onCompositionEnd"&&Zn&&(ce=Ks()):(pn=M,ml="value"in pn?pn.value:pn.textContent,Zn=!0)),se=Ua(C,me),0<se.length&&(me=new Js(me,e,null,r,M),B.push({event:me,listeners:se}),ce?me.data=ce:(ce=oc(r),ce!==null&&(me.data=ce)))),(ce=hm?gm(e,r):vm(e,r))&&(C=Ua(C,"onBeforeInput"),0<C.length&&(M=new Js("onBeforeInput","beforeinput",null,r,M),B.push({event:M,listeners:C}),M.data=ce))}zc(B,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ua(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rr(e,r),i!=null&&a.unshift(Kr(e,i,l)),i=Rr(e,t),i!=null&&a.push(Kr(e,i,l))),e=e.return}return a}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,r,a,l){for(var i=t._reactName,u=[];r!==null&&r!==a;){var f=r,x=f.alternate,C=f.stateNode;if(x!==null&&x===a)break;f.tag===5&&C!==null&&(f=C,l?(x=Rr(r,i),x!=null&&u.unshift(Kr(r,x,f))):l||(x=Rr(r,i),x!=null&&u.push(Kr(r,x,f)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var Rm=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Pm,"")}function Ha(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(c(425))}function Va(){}var Ol=null,Rl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Im)}:Fl;function Im(e){setTimeout(function(){throw e})}function Dl(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Br(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Br(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),jt="__reactFiber$"+nr,Xr="__reactProps$"+nr,qt="__reactContainer$"+nr,Il="__reactEvents$"+nr,Lm="__reactListeners$"+nr,Mm="__reactHandles$"+nr;function Pn(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Oc(e);e!==null;){if(r=e[jt])return r;e=Oc(e)}return t}e=r,r=e.parentNode}return null}function Zr(e){return e=e[jt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function $a(e){return e[Xr]||null}var Ll=[],ar=-1;function hn(e){return{current:e}}function Oe(e){0>ar||(e.current=Ll[ar],Ll[ar]=null,ar--)}function Ae(e,t){ar++,Ll[ar]=e.current,e.current=t}var gn={},Je=hn(gn),st=hn(!1),Fn=gn;function or(e,t){var r=e.type.contextTypes;if(!r)return gn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ct(e){return e=e.childContextTypes,e!=null}function Ya(){Oe(st),Oe(Je)}function Rc(e,t,r){if(Je.current!==gn)throw Error(c(168));Ae(Je,t),Ae(st,r)}function Pc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(c(108,te(e)||"Unknown",l));return F({},r,a)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Fn=Je.current,Ae(Je,e),Ae(st,st.current),!0}function Fc(e,t,r){var a=e.stateNode;if(!a)throw Error(c(169));r?(e=Pc(e,t,Fn),a.__reactInternalMemoizedMergedChildContext=e,Oe(st),Oe(Je),Ae(Je,e)):Oe(st),Ae(st,r)}var Qt=null,Ga=!1,Ml=!1;function Dc(e){Qt===null?Qt=[e]:Qt.push(e)}function _m(e){Ga=!0,Dc(e)}function vn(){if(!Ml&&Qt!==null){Ml=!0;var e=0,t=Ce;try{var r=Qt;for(Ce=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Qt=null,Ga=!1}catch(l){throw Qt!==null&&(Qt=Qt.slice(e+1)),Ls(ol,vn),l}finally{Ce=t,Ml=!1}}return null}var lr=[],ir=0,qa=null,Qa=0,Et=[],wt=0,Dn=null,Kt=1,Xt="";function In(e,t){lr[ir++]=Qa,lr[ir++]=qa,qa=e,Qa=t}function Ic(e,t,r){Et[wt++]=Kt,Et[wt++]=Xt,Et[wt++]=Dn,Dn=e;var a=Kt;e=Xt;var l=32-Ot(a)-1;a&=~(1<<l),r+=1;var i=32-Ot(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Kt=1<<32-Ot(t)+l|r<<l|a,Xt=i+e}else Kt=1<<i|r<<l|a,Xt=e}function _l(e){e.return!==null&&(In(e,1),Ic(e,1,0))}function jl(e){for(;e===qa;)qa=lr[--ir],lr[ir]=null,Qa=lr[--ir],lr[ir]=null;for(;e===Dn;)Dn=Et[--wt],Et[wt]=null,Xt=Et[--wt],Et[wt]=null,Kt=Et[--wt],Et[wt]=null}var gt=null,vt=null,Pe=!1,Pt=null;function Lc(e,t){var r=zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,vt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Dn!==null?{id:Kt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gt=e,vt=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(Pe){var t=vt;if(t){var r=t;if(!Mc(e,t)){if(Bl(e))throw Error(c(418));t=fn(r.nextSibling);var a=gt;t&&Mc(e,t)?Lc(a,r):(e.flags=e.flags&-4097|2,Pe=!1,gt=e)}}else{if(Bl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Pe=!1,gt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Ka(e){if(e!==gt)return!1;if(!Pe)return _c(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=vt)){if(Bl(e))throw jc(),Error(c(418));for(;t;)Lc(e,t),t=fn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){vt=fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=gt?fn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=vt;e;)e=fn(e.nextSibling)}function sr(){vt=gt=null,Pe=!1}function Hl(e){Pt===null?Pt=[e]:Pt.push(e)}var jm=W.ReactCurrentBatchConfig;function Jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var a=r.stateNode}if(!a)throw Error(c(147,e));var l=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var f=l.refs;u===null?delete f[i]:f[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Uc(e){function t(z,E){if(e){var S=z.deletions;S===null?(z.deletions=[E],z.flags|=16):S.push(E)}}function r(z,E){if(!e)return null;for(;E!==null;)t(z,E),E=E.sibling;return null}function a(z,E){for(z=new Map;E!==null;)E.key!==null?z.set(E.key,E):z.set(E.index,E),E=E.sibling;return z}function l(z,E){return z=zn(z,E),z.index=0,z.sibling=null,z}function i(z,E,S){return z.index=S,e?(S=z.alternate,S!==null?(S=S.index,S<E?(z.flags|=2,E):S):(z.flags|=2,E)):(z.flags|=1048576,E)}function u(z){return e&&z.alternate===null&&(z.flags|=2),z}function f(z,E,S,V){return E===null||E.tag!==6?(E=Fi(S,z.mode,V),E.return=z,E):(E=l(E,S),E.return=z,E)}function x(z,E,S,V){var re=S.type;return re===ye?M(z,E,S.props.children,V,S.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===he&&Bc(re)===E.type)?(V=l(E,S.props),V.ref=Jr(z,E,S),V.return=z,V):(V=bo(S.type,S.key,S.props,null,z.mode,V),V.ref=Jr(z,E,S),V.return=z,V)}function C(z,E,S,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Di(S,z.mode,V),E.return=z,E):(E=l(E,S.children||[]),E.return=z,E)}function M(z,E,S,V,re){return E===null||E.tag!==7?(E=Vn(S,z.mode,V,re),E.return=z,E):(E=l(E,S),E.return=z,E)}function B(z,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Fi(""+E,z.mode,S),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ee:return S=bo(E.type,E.key,E.props,null,z.mode,S),S.ref=Jr(z,null,E),S.return=z,S;case oe:return E=Di(E,z.mode,S),E.return=z,E;case he:var V=E._init;return B(z,V(E._payload),S)}if(Ar(E)||D(E))return E=Vn(E,z.mode,S,null),E.return=z,E;Xa(z,E)}return null}function I(z,E,S,V){var re=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return re!==null?null:f(z,E,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ee:return S.key===re?x(z,E,S,V):null;case oe:return S.key===re?C(z,E,S,V):null;case he:return re=S._init,I(z,E,re(S._payload),V)}if(Ar(S)||D(S))return re!==null?null:M(z,E,S,V,null);Xa(z,S)}return null}function Q(z,E,S,V,re){if(typeof V=="string"&&V!==""||typeof V=="number")return z=z.get(S)||null,f(E,z,""+V,re);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ee:return z=z.get(V.key===null?S:V.key)||null,x(E,z,V,re);case oe:return z=z.get(V.key===null?S:V.key)||null,C(E,z,V,re);case he:var se=V._init;return Q(z,E,S,se(V._payload),re)}if(Ar(V)||D(V))return z=z.get(S)||null,M(E,z,V,re,null);Xa(E,V)}return null}function Z(z,E,S,V){for(var re=null,se=null,ce=E,me=E=0,qe=null;ce!==null&&me<S.length;me++){ce.index>me?(qe=ce,ce=null):qe=ce.sibling;var Se=I(z,ce,S[me],V);if(Se===null){ce===null&&(ce=qe);break}e&&ce&&Se.alternate===null&&t(z,ce),E=i(Se,E,me),se===null?re=Se:se.sibling=Se,se=Se,ce=qe}if(me===S.length)return r(z,ce),Pe&&In(z,me),re;if(ce===null){for(;me<S.length;me++)ce=B(z,S[me],V),ce!==null&&(E=i(ce,E,me),se===null?re=ce:se.sibling=ce,se=ce);return Pe&&In(z,me),re}for(ce=a(z,ce);me<S.length;me++)qe=Q(ce,z,me,S[me],V),qe!==null&&(e&&qe.alternate!==null&&ce.delete(qe.key===null?me:qe.key),E=i(qe,E,me),se===null?re=qe:se.sibling=qe,se=qe);return e&&ce.forEach(function(Sn){return t(z,Sn)}),Pe&&In(z,me),re}function ne(z,E,S,V){var re=D(S);if(typeof re!="function")throw Error(c(150));if(S=re.call(S),S==null)throw Error(c(151));for(var se=re=null,ce=E,me=E=0,qe=null,Se=S.next();ce!==null&&!Se.done;me++,Se=S.next()){ce.index>me?(qe=ce,ce=null):qe=ce.sibling;var Sn=I(z,ce,Se.value,V);if(Sn===null){ce===null&&(ce=qe);break}e&&ce&&Sn.alternate===null&&t(z,ce),E=i(Sn,E,me),se===null?re=Sn:se.sibling=Sn,se=Sn,ce=qe}if(Se.done)return r(z,ce),Pe&&In(z,me),re;if(ce===null){for(;!Se.done;me++,Se=S.next())Se=B(z,Se.value,V),Se!==null&&(E=i(Se,E,me),se===null?re=Se:se.sibling=Se,se=Se);return Pe&&In(z,me),re}for(ce=a(z,ce);!Se.done;me++,Se=S.next())Se=Q(ce,z,me,Se.value,V),Se!==null&&(e&&Se.alternate!==null&&ce.delete(Se.key===null?me:Se.key),E=i(Se,E,me),se===null?re=Se:se.sibling=Se,se=Se);return e&&ce.forEach(function(yf){return t(z,yf)}),Pe&&In(z,me),re}function Be(z,E,S,V){if(typeof S=="object"&&S!==null&&S.type===ye&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ee:e:{for(var re=S.key,se=E;se!==null;){if(se.key===re){if(re=S.type,re===ye){if(se.tag===7){r(z,se.sibling),E=l(se,S.props.children),E.return=z,z=E;break e}}else if(se.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===he&&Bc(re)===se.type){r(z,se.sibling),E=l(se,S.props),E.ref=Jr(z,se,S),E.return=z,z=E;break e}r(z,se);break}else t(z,se);se=se.sibling}S.type===ye?(E=Vn(S.props.children,z.mode,V,S.key),E.return=z,z=E):(V=bo(S.type,S.key,S.props,null,z.mode,V),V.ref=Jr(z,E,S),V.return=z,z=V)}return u(z);case oe:e:{for(se=S.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){r(z,E.sibling),E=l(E,S.children||[]),E.return=z,z=E;break e}else{r(z,E);break}else t(z,E);E=E.sibling}E=Di(S,z.mode,V),E.return=z,z=E}return u(z);case he:return se=S._init,Be(z,E,se(S._payload),V)}if(Ar(S))return Z(z,E,S,V);if(D(S))return ne(z,E,S,V);Xa(z,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(r(z,E.sibling),E=l(E,S),E.return=z,z=E):(r(z,E),E=Fi(S,z.mode,V),E.return=z,z=E),u(z)):r(z,E)}return Be}var cr=Uc(!0),Hc=Uc(!1),Za=hn(null),Ja=null,ur=null,Vl=null;function $l(){Vl=ur=Ja=null}function Yl(e){var t=Za.current;Oe(Za),e._currentValue=t}function Wl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function dr(e,t){Ja=e,Vl=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ja===null)throw Error(c(308));ur=e,Ja.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Ln=null;function Gl(e){Ln===null?Ln=[e]:Ln.push(e)}function Vc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Gl(t)):(r.next=l.next,l.next=r),t.interleaved=r,Zt(e,a)}function Zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xn=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ze&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Zt(e,r)}return l=a.interleaved,l===null?(t.next=t,Gl(a)):(t.next=l.next,l.next=t),a.interleaved=t,Zt(e,r)}function eo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,sl(e,r)}}function Yc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=u:i=i.next=u,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function to(e,t,r,a){var l=e.updateQueue;xn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var x=f,C=x.next;x.next=null,u===null?i=C:u.next=C,u=x;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==u&&(f===null?M.firstBaseUpdate=C:f.next=C,M.lastBaseUpdate=x))}if(i!==null){var B=l.baseState;u=0,M=C=x=null,f=i;do{var I=f.lane,Q=f.eventTime;if((a&I)===I){M!==null&&(M=M.next={eventTime:Q,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Z=e,ne=f;switch(I=t,Q=r,ne.tag){case 1:if(Z=ne.payload,typeof Z=="function"){B=Z.call(Q,B,I);break e}B=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ne.payload,I=typeof Z=="function"?Z.call(Q,B,I):Z,I==null)break e;B=F({},B,I);break e;case 2:xn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,I=l.effects,I===null?l.effects=[f]:I.push(f))}else Q={eventTime:Q,lane:I,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(C=M=Q,x=B):M=M.next=Q,u|=I;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;I=f,f=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);if(M===null&&(x=B),l.baseState=x,l.firstBaseUpdate=C,l.lastBaseUpdate=M,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);jn|=u,e.lanes=u,e.memoizedState=B}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var ea={},Bt=hn(ea),ta=hn(ea),na=hn(ea);function Mn(e){if(e===ea)throw Error(c(174));return e}function Ql(e,t){switch(Ae(na,t),Ae(ta,e),Ae(Bt,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ko(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ko(t,e)}Oe(Bt),Ae(Bt,t)}function pr(){Oe(Bt),Oe(ta),Oe(na)}function Gc(e){Mn(na.current);var t=Mn(Bt.current),r=Ko(t,e.type);t!==r&&(Ae(ta,e),Ae(Bt,r))}function Kl(e){ta.current===e&&(Oe(Bt),Oe(ta))}var Fe=hn(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Zl(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var ro=W.ReactCurrentDispatcher,Jl=W.ReactCurrentBatchConfig,_n=0,De=null,Ve=null,We=null,ao=!1,ra=!1,aa=0,Bm=0;function et(){throw Error(c(321))}function ei(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Rt(e[r],t[r]))return!1;return!0}function ti(e,t,r,a,l,i){if(_n=i,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?$m:Ym,e=r(a,l),ra){i=0;do{if(ra=!1,aa=0,25<=i)throw Error(c(301));i+=1,We=Ve=null,t.updateQueue=null,ro.current=Wm,e=r(a,l)}while(ra)}if(ro.current=io,t=Ve!==null&&Ve.next!==null,_n=0,We=Ve=De=null,ao=!1,t)throw Error(c(300));return e}function ni(){var e=aa!==0;return aa=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?De.memoizedState=We=e:We=We.next=e,We}function kt(){if(Ve===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=We===null?De.memoizedState:We.next;if(t!==null)We=t,Ve=e;else{if(e===null)throw Error(c(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},We===null?De.memoizedState=We=e:We=We.next=e}return We}function oa(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=kt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=Ve,l=a.baseQueue,i=r.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,a=a.baseState;var f=u=null,x=null,C=i;do{var M=C.lane;if((_n&M)===M)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),a=C.hasEagerState?C.eagerState:e(a,C.action);else{var B={lane:M,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(f=x=B,u=a):x=x.next=B,De.lanes|=M,jn|=M}C=C.next}while(C!==null&&C!==i);x===null?u=a:x.next=f,Rt(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=x,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do i=l.lane,De.lanes|=i,jn|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ai(e){var t=kt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Rt(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,a]}function qc(){}function Qc(e,t){var r=De,a=kt(),l=t(),i=!Rt(a.memoizedState,l);if(i&&(a.memoizedState=l,ut=!0),a=a.queue,oi(Zc.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,la(9,Xc.bind(null,r,a,l,t),void 0,null),Ge===null)throw Error(c(349));(_n&30)!==0||Kc(r,t,l)}return l}function Kc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Xc(e,t,r,a){t.value=r,t.getSnapshot=a,Jc(t)&&eu(e)}function Zc(e,t,r){return r(function(){Jc(t)&&eu(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Rt(e,r)}catch{return!0}}function eu(e){var t=Zt(e,1);t!==null&&Lt(t,e,1,-1)}function tu(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t.queue=e,e=e.dispatch=Vm.bind(null,De,e),[t.memoizedState,e]}function la(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function nu(){return kt().memoizedState}function oo(e,t,r,a){var l=Ut();De.flags|=e,l.memoizedState=la(1|t,r,void 0,a===void 0?null:a)}function lo(e,t,r,a){var l=kt();a=a===void 0?null:a;var i=void 0;if(Ve!==null){var u=Ve.memoizedState;if(i=u.destroy,a!==null&&ei(a,u.deps)){l.memoizedState=la(t,r,i,a);return}}De.flags|=e,l.memoizedState=la(1|t,r,i,a)}function ru(e,t){return oo(8390656,8,e,t)}function oi(e,t){return lo(2048,8,e,t)}function au(e,t){return lo(4,2,e,t)}function ou(e,t){return lo(4,4,e,t)}function lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iu(e,t,r){return r=r!=null?r.concat([e]):null,lo(4,4,lu.bind(null,t,e),r)}function li(){}function su(e,t){var r=kt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&ei(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function cu(e,t){var r=kt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&ei(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function uu(e,t,r){return(_n&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r):(Rt(r,t)||(r=Bs(),De.lanes|=r,jn|=r,e.baseState=!0),t)}function Um(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var a=Jl.transition;Jl.transition={};try{e(!1),t()}finally{Ce=r,Jl.transition=a}}function du(){return kt().memoizedState}function Hm(e,t,r){var a=kn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},pu(e))mu(t,r);else if(r=Vc(e,t,r,a),r!==null){var l=at();Lt(r,e,a,l),fu(r,t,a)}}function Vm(e,t,r){var a=kn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(pu(e))mu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,r);if(l.hasEagerState=!0,l.eagerState=f,Rt(f,u)){var x=t.interleaved;x===null?(l.next=l,Gl(t)):(l.next=x.next,x.next=l),t.interleaved=l;return}}catch{}finally{}r=Vc(e,t,l,a),r!==null&&(l=at(),Lt(r,e,a,l),fu(r,t,a))}}function pu(e){var t=e.alternate;return e===De||t!==null&&t===De}function mu(e,t){ra=ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function fu(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,sl(e,r)}}var io={readContext:bt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$m={readContext:bt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:ru,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oo(4194308,4,lu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Ut();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Hm.bind(null,De,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:li,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=Um.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=De,l=Ut();if(Pe){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ge===null)throw Error(c(349));(_n&30)!==0||Kc(a,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,ru(Zc.bind(null,a,i,e),[e]),a.flags|=2048,la(9,Xc.bind(null,a,i,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Ge.identifierPrefix;if(Pe){var r=Xt,a=Kt;r=(a&~(1<<32-Ot(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=aa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:bt,useCallback:su,useContext:bt,useEffect:oi,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:ri,useRef:nu,useState:function(){return ri(oa)},useDebugValue:li,useDeferredValue:function(e){var t=kt();return uu(t,Ve.memoizedState,e)},useTransition:function(){var e=ri(oa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:du,unstable_isNewReconciler:!1},Wm={readContext:bt,useCallback:su,useContext:bt,useEffect:oi,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ou,useMemo:cu,useReducer:ai,useRef:nu,useState:function(){return ai(oa)},useDebugValue:li,useDeferredValue:function(e){var t=kt();return Ve===null?t.memoizedState=e:uu(t,Ve.memoizedState,e)},useTransition:function(){var e=ai(oa)[0],t=kt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:du,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ii(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var so={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=at(),l=kn(e),i=Jt(a,l);i.payload=t,r!=null&&(i.callback=r),t=yn(e,i,l),t!==null&&(Lt(t,e,l,a),eo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=at(),l=kn(e),i=Jt(a,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=yn(e,i,l),t!==null&&(Lt(t,e,l,a),eo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=at(),a=kn(e),l=Jt(r,a);l.tag=2,t!=null&&(l.callback=t),t=yn(e,l,a),t!==null&&(Lt(t,e,a,r),eo(t,e,a))}};function hu(e,t,r,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,a)||!Wr(l,i):!0}function gu(e,t,r){var a=!1,l=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=bt(i):(l=ct(t)?Fn:Je.current,a=t.contextTypes,i=(a=a!=null)?or(e,l):gn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function vu(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function si(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},ql(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=bt(i):(i=ct(t)?Fn:Je.current,l.context=or(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ii(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&so.enqueueReplaceState(l,l.state,null),to(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",a=t;do r+=H(a),a=a.return;while(a);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ci(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ui(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,r){r=Jt(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){go||(go=!0,zi=a),ui(e,t)},r}function yu(e,t,r){r=Jt(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){ui(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ui(e,t),typeof a!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Eu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Gm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=sf.bind(null,e,t,r),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Jt(-1,1),t.tag=2,yn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var qm=W.ReactCurrentOwner,ut=!1;function rt(e,t,r,a){t.child=e===null?Hc(t,null,r,a):cr(t,e.child,r,a)}function ku(e,t,r,a,l){r=r.render;var i=t.ref;return dr(t,l),a=ti(e,t,r,a,i,l),r=ni(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Pe&&r&&_l(t),t.flags|=1,rt(e,t,a,l),t.child)}function Nu(e,t,r,a,l){if(e===null){var i=r.type;return typeof i=="function"&&!Pi(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,zu(e,t,i,a,l)):(e=bo(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(u,a)&&e.ref===t.ref)return en(e,t,l)}return t.flags|=1,e=zn(i,a),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,r,a,l){if(e!==null){var i=e.memoizedProps;if(Wr(i,a)&&e.ref===t.ref)if(ut=!1,t.pendingProps=a=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,en(e,t,l)}return di(e,t,r,a,l)}function Su(e,t,r){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(hr,xt),xt|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(hr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:r,Ae(hr,xt),xt|=a}else i!==null?(a=i.baseLanes|r,t.memoizedState=null):a=r,Ae(hr,xt),xt|=a;return rt(e,t,l,r),t.child}function Cu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function di(e,t,r,a,l){var i=ct(r)?Fn:Je.current;return i=or(t,i),dr(t,l),r=ti(e,t,r,a,i,l),a=ni(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,en(e,t,l)):(Pe&&a&&_l(t),t.flags|=1,rt(e,t,r,l),t.child)}function Au(e,t,r,a,l){if(ct(r)){var i=!0;Wa(t)}else i=!1;if(dr(t,l),t.stateNode===null)uo(e,t),gu(t,r,a),si(t,r,a,l),a=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var x=u.context,C=r.contextType;typeof C=="object"&&C!==null?C=bt(C):(C=ct(r)?Fn:Je.current,C=or(t,C));var M=r.getDerivedStateFromProps,B=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function";B||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||x!==C)&&vu(t,u,a,C),xn=!1;var I=t.memoizedState;u.state=I,to(t,a,u,l),x=t.memoizedState,f!==a||I!==x||st.current||xn?(typeof M=="function"&&(ii(t,r,M,a),x=t.memoizedState),(f=xn||hu(t,r,f,a,I,x,C))?(B||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),u.props=a,u.state=x,u.context=C,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,$c(e,t),f=t.memoizedProps,C=t.type===t.elementType?f:Ft(t.type,f),u.props=C,B=t.pendingProps,I=u.context,x=r.contextType,typeof x=="object"&&x!==null?x=bt(x):(x=ct(r)?Fn:Je.current,x=or(t,x));var Q=r.getDerivedStateFromProps;(M=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==B||I!==x)&&vu(t,u,a,x),xn=!1,I=t.memoizedState,u.state=I,to(t,a,u,l);var Z=t.memoizedState;f!==B||I!==Z||st.current||xn?(typeof Q=="function"&&(ii(t,r,Q,a),Z=t.memoizedState),(C=xn||hu(t,r,C,a,I,Z,x)||!1)?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,Z,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,Z,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Z),u.props=a,u.state=Z,u.context=x,a=C):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),a=!1)}return pi(e,t,r,a,i,l)}function pi(e,t,r,a,l,i){Cu(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return l&&Fc(t,r,!1),en(e,t,i);a=t.stateNode,qm.current=t;var f=u&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,f,i)):rt(e,t,f,i),t.memoizedState=a.state,l&&Fc(t,r,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),Ql(e,t.containerInfo)}function Ou(e,t,r,a,l){return sr(),Hl(l),t.flags|=256,rt(e,t,r,a),t.child}var mi={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,r){var a=t.pendingProps,l=Fe.current,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ae(Fe,l&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,i?(a=t.mode,i=t.child,u={mode:"hidden",children:u},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=ko(u,a,0,null),e=Vn(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fi(r),t.memoizedState=mi,e):hi(t,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return Qm(e,t,u,a,f,l,r);if(i){i=a.fallback,u=t.mode,l=e.child,f=l.sibling;var x={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=x,t.deletions=null):(a=zn(l,x),a.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=zn(f,i):(i=Vn(i,u,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,u=e.child.memoizedState,u=u===null?fi(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~r,t.memoizedState=mi,a}return i=e.child,e=i.sibling,a=zn(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function hi(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,r,a){return a!==null&&Hl(a),cr(t,e.child,null,r),e=hi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,r,a,l,i,u){if(r)return t.flags&256?(t.flags&=-257,a=ci(Error(c(422))),co(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,l=t.mode,a=ko({mode:"visible",children:a.children},l,0,null),i=Vn(i,l,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&cr(t,e.child,null,u),t.child.memoizedState=fi(u),t.memoizedState=mi,i);if((t.mode&1)===0)return co(e,t,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,i=Error(c(419)),a=ci(i,a,void 0),co(e,t,u,a)}if(f=(u&e.childLanes)!==0,ut||f){if(a=Ge,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Zt(e,l),Lt(a,e,l,-1))}return Ri(),a=ci(Error(c(421))),co(e,t,u,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=cf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,vt=fn(l.nextSibling),gt=t,Pe=!0,Pt=null,e!==null&&(Et[wt++]=Kt,Et[wt++]=Xt,Et[wt++]=Dn,Kt=e.id,Xt=e.overflow,Dn=t),t=hi(t,a.children),t.flags|=4096,t)}function Pu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Wl(e.return,t,r)}function gi(e,t,r,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=r,i.tailMode=l)}function Fu(e,t,r){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(rt(e,t,a.children,r),a=Fe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,t);else if(e.tag===19)Pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ae(Fe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&no(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),gi(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&no(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}gi(t,!0,r,null,i);break;case"together":gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=zn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Km(e,t,r){switch(t.tag){case 3:Tu(t),sr();break;case 5:Gc(t);break;case 1:ct(t.type)&&Wa(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Ae(Za,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ru(e,t,r):(Ae(Fe,Fe.current&1),e=en(e,t,r),e!==null?e.sibling:null);Ae(Fe,Fe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Fu(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ae(Fe,Fe.current),a)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,r)}return en(e,t,r)}var Du,vi,Iu,Lu;Du=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},vi=function(){},Iu=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Mn(Bt.current);var i=null;switch(r){case"input":l=yt(e,l),a=yt(e,a),i=[];break;case"select":l=F({},l,{value:void 0}),a=F({},a,{value:void 0}),i=[];break;case"textarea":l=Qo(e,l),a=Qo(e,a),i=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Va)}Xo(r,a);var u;r=null;for(C in l)if(!a.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var f=l[C];for(u in f)f.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(p.hasOwnProperty(C)?i||(i=[]):(i=i||[]).push(C,null));for(C in a){var x=a[C];if(f=l!=null?l[C]:void 0,a.hasOwnProperty(C)&&x!==f&&(x!=null||f!=null))if(C==="style")if(f){for(u in f)!f.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in x)x.hasOwnProperty(u)&&f[u]!==x[u]&&(r||(r={}),r[u]=x[u])}else r||(i||(i=[]),i.push(C,r)),r=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,f=f?f.__html:void 0,x!=null&&f!==x&&(i=i||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(i=i||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(p.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&Te("scroll",e),i||f===x||(i=[])):(i=i||[]).push(C,x))}r&&(i=i||[]).push("style",r);var C=i;(t.updateQueue=C)&&(t.flags|=4)}},Lu=function(e,t,r,a){r!==a&&(t.flags|=4)};function ia(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Xm(e,t,r){var a=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ct(t.type)&&Ya(),tt(t),null;case 3:return a=t.stateNode,pr(),Oe(st),Oe(Je),Zl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(Ai(Pt),Pt=null))),vi(e,t),tt(t),null;case 5:Kl(t);var l=Mn(na.current);if(r=t.type,e!==null&&t.stateNode!=null)Iu(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(e=Mn(Bt.current),Ka(t)){a=t.stateNode,r=t.type;var i=t.memoizedProps;switch(a[jt]=t,a[Xr]=i,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(l=0;l<qr.length;l++)Te(qr[l],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":gs(a,i),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Te("invalid",a);break;case"textarea":ys(a,i),Te("invalid",a)}Xo(r,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];u==="children"?typeof f=="string"?a.textContent!==f&&(i.suppressHydrationWarning!==!0&&Ha(a.textContent,f,e),l=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Ha(a.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Te("scroll",a)}switch(r){case"input":_e(a),xs(a,i,!0);break;case"textarea":_e(a),ws(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Va)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(r,{is:a.is}):(e=u.createElement(r),r==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,r),e[jt]=t,e[Xr]=a,Du(e,t,!1,!1),t.stateNode=e;e:{switch(u=Zo(r,a),r){case"dialog":Te("cancel",e),Te("close",e),l=a;break;case"iframe":case"object":case"embed":Te("load",e),l=a;break;case"video":case"audio":for(l=0;l<qr.length;l++)Te(qr[l],e);l=a;break;case"source":Te("error",e),l=a;break;case"img":case"image":case"link":Te("error",e),Te("load",e),l=a;break;case"details":Te("toggle",e),l=a;break;case"input":gs(e,a),l=yt(e,a),Te("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=F({},a,{value:void 0}),Te("invalid",e);break;case"textarea":ys(e,a),l=Qo(e,a),Te("invalid",e);break;default:l=a}Xo(r,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var x=f[i];i==="style"?zs(e,x):i==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ks(e,x)):i==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&Tr(e,x):typeof x=="number"&&Tr(e,""+x):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?x!=null&&i==="onScroll"&&Te("scroll",e):x!=null&&Y(e,i,x,u))}switch(r){case"input":_e(e),xs(e,a,!1);break;case"textarea":_e(e),ws(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ue(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Gn(e,!!a.multiple,i,!1):a.defaultValue!=null&&Gn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(r=Mn(na.current),Mn(Bt.current),Ka(t)){if(a=t.stateNode,r=t.memoizedProps,a[jt]=t,(i=a.nodeValue!==r)&&(e=gt,e!==null))switch(e.tag){case 3:Ha(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ha(a.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[jt]=t,t.stateNode=a}return tt(t),null;case 13:if(Oe(Fe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jc(),sr(),t.flags|=98560,i=!1;else if(i=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[jt]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),i=!1}else Pt!==null&&(Ai(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?$e===0&&($e=3):Ri())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return pr(),vi(e,t),e===null&&Qr(t.stateNode.containerInfo),tt(t),null;case 10:return Yl(t.type._context),tt(t),null;case 17:return ct(t.type)&&Ya(),tt(t),null;case 19:if(Oe(Fe),i=t.memoizedState,i===null)return tt(t),null;if(a=(t.flags&128)!==0,u=i.rendering,u===null)if(a)ia(i,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=no(e),u!==null){for(t.flags|=128,ia(i,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)i=r,e=a,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ae(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>gr&&(t.flags|=128,a=!0,ia(i,!1),t.lanes=4194304)}else{if(!a)if(e=no(u),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Pe)return tt(t),null}else 2*je()-i.renderingStartTime>gr&&r!==1073741824&&(t.flags|=128,a=!0,ia(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(r=i.last,r!==null?r.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,r=Fe.current,Ae(Fe,a?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return Oi(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(xt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Zm(e,t){switch(jl(t),t.tag){case 1:return ct(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Oe(st),Oe(Je),Zl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Kl(t),null;case 13:if(Oe(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Fe),null;case 4:return pr(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return Oi(),null;case 24:return null;default:return null}}var po=!1,nt=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,X=null;function fr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Me(e,t,a)}else r.current=null}function xi(e,t,r){try{r()}catch(a){Me(e,t,a)}}var Mu=!1;function ef(e,t){if(Ol=Ra,e=hc(),bl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var u=0,f=-1,x=-1,C=0,M=0,B=e,I=null;t:for(;;){for(var Q;B!==r||l!==0&&B.nodeType!==3||(f=u+l),B!==i||a!==0&&B.nodeType!==3||(x=u+a),B.nodeType===3&&(u+=B.nodeValue.length),(Q=B.firstChild)!==null;)I=B,B=Q;for(;;){if(B===e)break t;if(I===r&&++C===l&&(f=u),I===i&&++M===a&&(x=u),(Q=B.nextSibling)!==null)break;B=I,I=B.parentNode}B=Q}r=f===-1||x===-1?null:{start:f,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rl={focusedElem:e,selectionRange:r},Ra=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ne=Z.memoizedProps,Be=Z.memoizedState,z=t.stateNode,E=z.getSnapshotBeforeUpdate(t.elementType===t.type?ne:Ft(t.type,ne),Be);z.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(V){Me(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return Z=Mu,Mu=!1,Z}function sa(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&xi(t,r,i)}l=l.next}while(l!==a)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function yi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Xr],delete t[Il],delete t[Lm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ei(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Va));else if(a!==4&&(e=e.child,e!==null))for(Ei(e,t,r),e=e.sibling;e!==null;)Ei(e,t,r),e=e.sibling}function wi(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(wi(e,t,r),e=e.sibling;e!==null;)wi(e,t,r),e=e.sibling}var Xe=null,Dt=!1;function En(e,t,r){for(r=r.child;r!==null;)Uu(e,t,r),r=r.sibling}function Uu(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(za,r)}catch{}switch(r.tag){case 5:nt||fr(r,t);case 6:var a=Xe,l=Dt;Xe=null,En(e,t,r),Xe=a,Dt=l,Xe!==null&&(Dt?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(Dt?(e=Xe,r=r.stateNode,e.nodeType===8?Dl(e.parentNode,r):e.nodeType===1&&Dl(e,r),Br(e)):Dl(Xe,r.stateNode));break;case 4:a=Xe,l=Dt,Xe=r.stateNode.containerInfo,Dt=!0,En(e,t,r),Xe=a,Dt=l;break;case 0:case 11:case 14:case 15:if(!nt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&xi(r,t,u),l=l.next}while(l!==a)}En(e,t,r);break;case 1:if(!nt&&(fr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(f){Me(r,t,f)}En(e,t,r);break;case 21:En(e,t,r);break;case 22:r.mode&1?(nt=(a=nt)||r.memoizedState!==null,En(e,t,r),nt=a):En(e,t,r);break;default:En(e,t,r)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jm),t.forEach(function(a){var l=uf.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function It(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:Xe=f.stateNode,Dt=!1;break e;case 3:Xe=f.stateNode.containerInfo,Dt=!0;break e;case 4:Xe=f.stateNode.containerInfo,Dt=!0;break e}f=f.return}if(Xe===null)throw Error(c(160));Uu(i,u,l),Xe=null,Dt=!1;var x=l.alternate;x!==null&&(x.return=null),l.return=null}catch(C){Me(l,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ht(e),a&4){try{sa(3,e,e.return),mo(3,e)}catch(ne){Me(e,e.return,ne)}try{sa(5,e,e.return)}catch(ne){Me(e,e.return,ne)}}break;case 1:It(t,e),Ht(e),a&512&&r!==null&&fr(r,r.return);break;case 5:if(It(t,e),Ht(e),a&512&&r!==null&&fr(r,r.return),e.flags&32){var l=e.stateNode;try{Tr(l,"")}catch(ne){Me(e,e.return,ne)}}if(a&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=r!==null?r.memoizedProps:i,f=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&vs(l,i),Zo(f,u);var C=Zo(f,i);for(u=0;u<x.length;u+=2){var M=x[u],B=x[u+1];M==="style"?zs(l,B):M==="dangerouslySetInnerHTML"?ks(l,B):M==="children"?Tr(l,B):Y(l,M,B,C)}switch(f){case"input":Go(l,i);break;case"textarea":Es(l,i);break;case"select":var I=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var Q=i.value;Q!=null?Gn(l,!!i.multiple,Q,!1):I!==!!i.multiple&&(i.defaultValue!=null?Gn(l,!!i.multiple,i.defaultValue,!0):Gn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Xr]=i}catch(ne){Me(e,e.return,ne)}}break;case 6:if(It(t,e),Ht(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(ne){Me(e,e.return,ne)}}break;case 3:if(It(t,e),Ht(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(ne){Me(e,e.return,ne)}break;case 4:It(t,e),Ht(e);break;case 13:It(t,e),Ht(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=je())),a&4&&Hu(e);break;case 22:if(M=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(C=nt)||M,It(t,e),nt=C):It(t,e),Ht(e),a&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!M&&(e.mode&1)!==0)for(X=e,M=e.child;M!==null;){for(B=X=M;X!==null;){switch(I=X,Q=I.child,I.tag){case 0:case 11:case 14:case 15:sa(4,I,I.return);break;case 1:fr(I,I.return);var Z=I.stateNode;if(typeof Z.componentWillUnmount=="function"){a=I,r=I.return;try{t=a,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ne){Me(a,r,ne)}}break;case 5:fr(I,I.return);break;case 22:if(I.memoizedState!==null){Wu(B);continue}}Q!==null?(Q.return=I,X=Q):Wu(B)}M=M.sibling}e:for(M=null,B=e;;){if(B.tag===5){if(M===null){M=B;try{l=B.stateNode,C?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=B.stateNode,x=B.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,f.style.display=Ns("display",u))}catch(ne){Me(e,e.return,ne)}}}else if(B.tag===6){if(M===null)try{B.stateNode.nodeValue=C?"":B.memoizedProps}catch(ne){Me(e,e.return,ne)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;M===B&&(M=null),B=B.return}M===B&&(M=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:It(t,e),Ht(e),a&4&&Hu(e);break;case 21:break;default:It(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ju(r)){var a=r;break e}r=r.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Tr(l,""),a.flags&=-33);var i=Bu(e);wi(e,i,l);break;case 3:case 4:var u=a.stateNode.containerInfo,f=Bu(e);Ei(e,f,u);break;default:throw Error(c(161))}}catch(x){Me(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tf(e,t,r){X=e,$u(e)}function $u(e,t,r){for(var a=(e.mode&1)!==0;X!==null;){var l=X,i=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||po;if(!u){var f=l.alternate,x=f!==null&&f.memoizedState!==null||nt;f=po;var C=nt;if(po=u,(nt=x)&&!C)for(X=l;X!==null;)u=X,x=u.child,u.tag===22&&u.memoizedState!==null?Gu(l):x!==null?(x.return=u,X=x):Gu(l);for(;i!==null;)X=i,$u(i),i=i.sibling;X=l,po=f,nt=C}Yu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,X=i):Yu(e)}}function Yu(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||mo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!nt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wc(t,i,a);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,u,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var M=C.memoizedState;if(M!==null){var B=M.dehydrated;B!==null&&Br(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}nt||t.flags&512&&yi(t)}catch(I){Me(t,t.return,I)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function Wu(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function Gu(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{mo(4,t)}catch(x){Me(t,r,x)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(x){Me(t,l,x)}}var i=t.return;try{yi(t)}catch(x){Me(t,i,x)}break;case 5:var u=t.return;try{yi(t)}catch(x){Me(t,u,x)}}}catch(x){Me(t,t.return,x)}if(t===e){X=null;break}var f=t.sibling;if(f!==null){f.return=t.return,X=f;break}X=t.return}}var nf=Math.ceil,fo=W.ReactCurrentDispatcher,bi=W.ReactCurrentOwner,Nt=W.ReactCurrentBatchConfig,ze=0,Ge=null,He=null,Ze=0,xt=0,hr=hn(0),$e=0,ca=null,jn=0,ho=0,ki=0,ua=null,dt=null,Ni=0,gr=1/0,tn=null,go=!1,zi=null,wn=null,vo=!1,bn=null,xo=0,da=0,Si=null,yo=-1,Eo=0;function at(){return(ze&6)!==0?je():yo!==-1?yo:yo=je()}function kn(e){return(e.mode&1)===0?1:(ze&2)!==0&&Ze!==0?Ze&-Ze:jm.transition!==null?(Eo===0&&(Eo=Bs()),Eo):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Qs(e.type)),e)}function Lt(e,t,r,a){if(50<da)throw da=0,Si=null,Error(c(185));Ir(e,r,a),((ze&2)===0||e!==Ge)&&(e===Ge&&((ze&2)===0&&(ho|=r),$e===4&&Nn(e,Ze)),pt(e,a),r===1&&ze===0&&(t.mode&1)===0&&(gr=je()+500,Ga&&vn()))}function pt(e,t){var r=e.callbackNode;jp(e,t);var a=Aa(e,e===Ge?Ze:0);if(a===0)r!==null&&Ms(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ms(r),t===1)e.tag===0?_m(Qu.bind(null,e)):Dc(Qu.bind(null,e)),Dm(function(){(ze&6)===0&&vn()}),r=null;else{switch(Us(a)){case 1:r=ol;break;case 4:r=_s;break;case 16:r=Na;break;case 536870912:r=js;break;default:r=Na}r=rd(r,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qu(e,t){if(yo=-1,Eo=0,(ze&6)!==0)throw Error(c(327));var r=e.callbackNode;if(vr()&&e.callbackNode!==r)return null;var a=Aa(e,e===Ge?Ze:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=wo(e,a);else{t=a;var l=ze;ze|=2;var i=Xu();(Ge!==e||Ze!==t)&&(tn=null,gr=je()+500,Un(e,t));do try{of();break}catch(f){Ku(e,f)}while(!0);$l(),fo.current=i,ze=l,He!==null?t=0:(Ge=null,Ze=0,t=$e)}if(t!==0){if(t===2&&(l=ll(e),l!==0&&(a=l,t=Ci(e,l))),t===1)throw r=ca,Un(e,0),Nn(e,a),pt(e,je()),r;if(t===6)Nn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!rf(l)&&(t=wo(e,a),t===2&&(i=ll(e),i!==0&&(a=i,t=Ci(e,i))),t===1))throw r=ca,Un(e,0),Nn(e,a),pt(e,je()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:Hn(e,dt,tn);break;case 3:if(Nn(e,a),(a&130023424)===a&&(t=Ni+500-je(),10<t)){if(Aa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){at(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Fl(Hn.bind(null,e,dt,tn),t);break}Hn(e,dt,tn);break;case 4:if(Nn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var u=31-Ot(a);i=1<<u,u=t[u],u>l&&(l=u),a&=~i}if(a=l,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*nf(a/1960))-a,10<a){e.timeoutHandle=Fl(Hn.bind(null,e,dt,tn),a);break}Hn(e,dt,tn);break;case 5:Hn(e,dt,tn);break;default:throw Error(c(329))}}}return pt(e,je()),e.callbackNode===r?qu.bind(null,e):null}function Ci(e,t){var r=ua;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=wo(e,t),e!==2&&(t=dt,dt=r,t!==null&&Ai(t)),e}function Ai(e){dt===null?dt=e:dt.push.apply(dt,e)}function rf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],i=l.getSnapshot;l=l.value;try{if(!Rt(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~ki,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ot(t),a=1<<r;e[r]=-1,t&=~a}}function Qu(e){if((ze&6)!==0)throw Error(c(327));vr();var t=Aa(e,0);if((t&1)===0)return pt(e,je()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var a=ll(e);a!==0&&(t=a,r=Ci(e,a))}if(r===1)throw r=ca,Un(e,0),Nn(e,t),pt(e,je()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,dt,tn),pt(e,je()),null}function Ti(e,t){var r=ze;ze|=1;try{return e(t)}finally{ze=r,ze===0&&(gr=je()+500,Ga&&vn())}}function Bn(e){bn!==null&&bn.tag===0&&(ze&6)===0&&vr();var t=ze;ze|=1;var r=Nt.transition,a=Ce;try{if(Nt.transition=null,Ce=1,e)return e()}finally{Ce=a,Nt.transition=r,ze=t,(ze&6)===0&&vn()}}function Oi(){xt=hr.current,Oe(hr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Fm(r)),He!==null)for(r=He.return;r!==null;){var a=r;switch(jl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ya();break;case 3:pr(),Oe(st),Oe(Je),Zl();break;case 5:Kl(a);break;case 4:pr();break;case 13:Oe(Fe);break;case 19:Oe(Fe);break;case 10:Yl(a.type._context);break;case 22:case 23:Oi()}r=r.return}if(Ge=e,He=e=zn(e.current,null),Ze=xt=t,$e=0,ca=null,ki=ho=jn=0,dt=ua=null,Ln!==null){for(t=0;t<Ln.length;t++)if(r=Ln[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,i=r.pending;if(i!==null){var u=i.next;i.next=l,a.next=u}r.pending=a}Ln=null}return e}function Ku(e,t){do{var r=He;try{if($l(),ro.current=io,ao){for(var a=De.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ao=!1}if(_n=0,We=Ve=De=null,ra=!1,aa=0,bi.current=null,r===null||r.return===null){$e=1,ca=t,He=null;break}e:{var i=e,u=r.return,f=r,x=t;if(t=Ze,f.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,M=f,B=M.tag;if((M.mode&1)===0&&(B===0||B===11||B===15)){var I=M.alternate;I?(M.updateQueue=I.updateQueue,M.memoizedState=I.memoizedState,M.lanes=I.lanes):(M.updateQueue=null,M.memoizedState=null)}var Q=wu(u);if(Q!==null){Q.flags&=-257,bu(Q,u,f,i,t),Q.mode&1&&Eu(i,C,t),t=Q,x=C;var Z=t.updateQueue;if(Z===null){var ne=new Set;ne.add(x),t.updateQueue=ne}else Z.add(x);break e}else{if((t&1)===0){Eu(i,C,t),Ri();break e}x=Error(c(426))}}else if(Pe&&f.mode&1){var Be=wu(u);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),bu(Be,u,f,i,t),Hl(mr(x,f));break e}}i=x=mr(x,f),$e!==4&&($e=2),ua===null?ua=[i]:ua.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var z=xu(i,x,t);Yc(i,z);break e;case 1:f=x;var E=i.type,S=i.stateNode;if((i.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wn===null||!wn.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var V=yu(i,f,t);Yc(i,V);break e}}i=i.return}while(i!==null)}Ju(r)}catch(re){t=re,He===r&&r!==null&&(He=r=r.return);continue}break}while(!0)}function Xu(){var e=fo.current;return fo.current=io,e===null?io:e}function Ri(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||(jn&268435455)===0&&(ho&268435455)===0||Nn(Ge,Ze)}function wo(e,t){var r=ze;ze|=2;var a=Xu();(Ge!==e||Ze!==t)&&(tn=null,Un(e,t));do try{af();break}catch(l){Ku(e,l)}while(!0);if($l(),ze=r,fo.current=a,He!==null)throw Error(c(261));return Ge=null,Ze=0,$e}function af(){for(;He!==null;)Zu(He)}function of(){for(;He!==null&&!Op();)Zu(He)}function Zu(e){var t=nd(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Ju(e):He=t,bi.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Xm(r,t,xt),r!==null){He=r;return}}else{if(r=Zm(r,t),r!==null){r.flags&=32767,He=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,He=null;return}}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);$e===0&&($e=5)}function Hn(e,t,r){var a=Ce,l=Nt.transition;try{Nt.transition=null,Ce=1,lf(e,t,r,a)}finally{Nt.transition=l,Ce=a}return null}function lf(e,t,r,a){do vr();while(bn!==null);if((ze&6)!==0)throw Error(c(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Bp(e,i),e===Ge&&(He=Ge=null,Ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||vo||(vo=!0,rd(Na,function(){return vr(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=Nt.transition,Nt.transition=null;var u=Ce;Ce=1;var f=ze;ze|=4,bi.current=null,ef(e,r),Vu(r,e),Sm(Rl),Ra=!!Ol,Rl=Ol=null,e.current=r,tf(r),Rp(),ze=f,Ce=u,Nt.transition=i}else e.current=r;if(vo&&(vo=!1,bn=e,xo=l),i=e.pendingLanes,i===0&&(wn=null),Dp(r.stateNode),pt(e,je()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(go)throw go=!1,e=zi,zi=null,e;return(xo&1)!==0&&e.tag!==0&&vr(),i=e.pendingLanes,(i&1)!==0?e===Si?da++:(da=0,Si=e):da=0,vn(),null}function vr(){if(bn!==null){var e=Us(xo),t=Nt.transition,r=Ce;try{if(Nt.transition=null,Ce=16>e?16:e,bn===null)var a=!1;else{if(e=bn,bn=null,xo=0,(ze&6)!==0)throw Error(c(331));var l=ze;for(ze|=4,X=e.current;X!==null;){var i=X,u=i.child;if((X.flags&16)!==0){var f=i.deletions;if(f!==null){for(var x=0;x<f.length;x++){var C=f[x];for(X=C;X!==null;){var M=X;switch(M.tag){case 0:case 11:case 15:sa(8,M,i)}var B=M.child;if(B!==null)B.return=M,X=B;else for(;X!==null;){M=X;var I=M.sibling,Q=M.return;if(_u(M),M===C){X=null;break}if(I!==null){I.return=Q,X=I;break}X=Q}}}var Z=i.alternate;if(Z!==null){var ne=Z.child;if(ne!==null){Z.child=null;do{var Be=ne.sibling;ne.sibling=null,ne=Be}while(ne!==null)}}X=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,X=u;else e:for(;X!==null;){if(i=X,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:sa(9,i,i.return)}var z=i.sibling;if(z!==null){z.return=i.return,X=z;break e}X=i.return}}var E=e.current;for(X=E;X!==null;){u=X;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,X=S;else e:for(u=E;X!==null;){if(f=X,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:mo(9,f)}}catch(re){Me(f,f.return,re)}if(f===u){X=null;break e}var V=f.sibling;if(V!==null){V.return=f.return,X=V;break e}X=f.return}}if(ze=l,vn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(za,e)}catch{}a=!0}return a}finally{Ce=r,Nt.transition=t}}return!1}function ed(e,t,r){t=mr(r,t),t=xu(e,t,1),e=yn(e,t,1),t=at(),e!==null&&(Ir(e,1,t),pt(e,t))}function Me(e,t,r){if(e.tag===3)ed(e,e,r);else for(;t!==null;){if(t.tag===3){ed(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=mr(r,e),e=yu(t,e,1),t=yn(t,e,1),e=at(),t!==null&&(Ir(t,1,e),pt(t,e));break}}t=t.return}}function sf(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Ze&r)===r&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>je()-Ni?Un(e,0):ki|=r),pt(e,t)}function td(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ca,Ca<<=1,(Ca&130023424)===0&&(Ca=4194304)));var r=at();e=Zt(e,t),e!==null&&(Ir(e,t,r),pt(e,r))}function cf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),td(e,r)}function uf(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),td(e,r)}var nd;nd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)ut=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ut=!1,Km(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Pe&&(t.flags&1048576)!==0&&Ic(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;uo(e,t),e=t.pendingProps;var l=or(t,Je.current);dr(t,r),l=ti(null,t,a,e,l,r);var i=ni();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(a)?(i=!0,Wa(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ql(t),l.updater=so,t.stateNode=l,l._reactInternals=t,si(t,a,e,r),t=pi(null,t,a,!0,i,r)):(t.tag=0,Pe&&i&&_l(t),rt(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=pf(a),e=Ft(a,e),l){case 0:t=di(null,t,a,e,r);break e;case 1:t=Au(null,t,a,e,r);break e;case 11:t=ku(null,t,a,e,r);break e;case 14:t=Nu(null,t,a,Ft(a.type,e),r);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),di(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),Au(e,t,a,l,r);case 3:e:{if(Tu(t),e===null)throw Error(c(387));a=t.pendingProps,i=t.memoizedState,l=i.element,$c(e,t),to(t,a,null,r);var u=t.memoizedState;if(a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=mr(Error(c(423)),t),t=Ou(e,t,a,r,l);break e}else if(a!==l){l=mr(Error(c(424)),t),t=Ou(e,t,a,r,l);break e}else for(vt=fn(t.stateNode.containerInfo.firstChild),gt=t,Pe=!0,Pt=null,r=Hc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),a===l){t=en(e,t,r);break e}rt(e,t,a,r)}t=t.child}return t;case 5:return Gc(t),e===null&&Ul(t),a=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,Pl(a,l)?u=null:i!==null&&Pl(a,i)&&(t.flags|=32),Cu(e,t),rt(e,t,u,r),t.child;case 6:return e===null&&Ul(t),null;case 13:return Ru(e,t,r);case 4:return Ql(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=cr(t,null,a,r):rt(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),ku(e,t,a,l,r);case 7:return rt(e,t,t.pendingProps,r),t.child;case 8:return rt(e,t,t.pendingProps.children,r),t.child;case 12:return rt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,Ae(Za,a._currentValue),a._currentValue=u,i!==null)if(Rt(i.value,u)){if(i.children===l.children&&!st.current){t=en(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){u=i.child;for(var x=f.firstContext;x!==null;){if(x.context===a){if(i.tag===1){x=Jt(-1,r&-r),x.tag=2;var C=i.updateQueue;if(C!==null){C=C.shared;var M=C.pending;M===null?x.next=x:(x.next=M.next,M.next=x),C.pending=x}}i.lanes|=r,x=i.alternate,x!==null&&(x.lanes|=r),Wl(i.return,r,t),f.lanes|=r;break}x=x.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(c(341));u.lanes|=r,f=u.alternate,f!==null&&(f.lanes|=r),Wl(u,r,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}rt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,dr(t,r),l=bt(l),a=a(l),t.flags|=1,rt(e,t,a,r),t.child;case 14:return a=t.type,l=Ft(a,t.pendingProps),l=Ft(a.type,l),Nu(e,t,a,l,r);case 15:return zu(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Ft(a,l),uo(e,t),t.tag=1,ct(a)?(e=!0,Wa(t)):e=!1,dr(t,r),gu(t,a,l),si(t,a,l,r),pi(null,t,a,!0,e,r);case 19:return Fu(e,t,r);case 22:return Su(e,t,r)}throw Error(c(156,t.tag))};function rd(e,t){return Ls(e,t)}function df(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,r,a){return new df(e,t,r,a)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pf(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Re)return 11;if(e===ae)return 14}return 2}function zn(e,t){var r=e.alternate;return r===null?(r=zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bo(e,t,r,a,l,i){var u=2;if(a=e,typeof e=="function")Pi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ye:return Vn(r.children,l,i,t);case le:u=8,l|=8;break;case Ne:return e=zt(12,r,t,l|2),e.elementType=Ne,e.lanes=i,e;case j:return e=zt(13,r,t,l),e.elementType=j,e.lanes=i,e;case ge:return e=zt(19,r,t,l),e.elementType=ge,e.lanes=i,e;case be:return ko(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:u=10;break e;case ke:u=9;break e;case Re:u=11;break e;case ae:u=14;break e;case he:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=zt(u,r,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Vn(e,t,r,a){return e=zt(7,e,a,t),e.lanes=r,e}function ko(e,t,r,a){return e=zt(22,e,a,t),e.elementType=be,e.lanes=r,e.stateNode={isHidden:!1},e}function Fi(e,t,r){return e=zt(6,e,null,t),e.lanes=r,e}function Di(e,t,r){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mf(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ii(e,t,r,a,l,i,u,f,x){return e=new mf(e,t,r,f,x),t===1?(t=1,i===!0&&(t|=8)):t=0,i=zt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function ff(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function ad(e){if(!e)return gn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(ct(r))return Pc(e,r,t)}return t}function od(e,t,r,a,l,i,u,f,x){return e=Ii(r,a,!0,e,l,i,u,f,x),e.context=ad(null),r=e.current,a=at(),l=kn(r),i=Jt(a,l),i.callback=t??null,yn(r,i,l),e.current.lanes=l,Ir(e,l,a),pt(e,a),e}function No(e,t,r,a){var l=t.current,i=at(),u=kn(l);return r=ad(r),t.context===null?t.context=r:t.pendingContext=r,t=Jt(i,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=yn(l,t,u),e!==null&&(Lt(e,l,u,i),eo(e,l,u)),u}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Li(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function hf(){return null}var id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}So.prototype.render=Mi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));No(e,t,null,null)},So.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){No(null,e,null,null)}),t[qt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=$s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<dn.length&&t!==0&&t<dn[r].priority;r++);dn.splice(r,0,e),r===0&&Gs(e)}};function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function gf(e,t,r,a,l){if(l){if(typeof a=="function"){var i=a;a=function(){var C=zo(u);i.call(C)}}var u=od(t,a,e,0,null,!1,!1,"",sd);return e._reactRootContainer=u,e[qt]=u.current,Qr(e.nodeType===8?e.parentNode:e),Bn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var f=a;a=function(){var C=zo(x);f.call(C)}}var x=Ii(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=x,e[qt]=x.current,Qr(e.nodeType===8?e.parentNode:e),Bn(function(){No(t,x,r,a)}),x}function Ao(e,t,r,a,l){var i=r._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var f=l;l=function(){var x=zo(u);f.call(x)}}No(t,u,e,l)}else u=gf(r,t,e,l,a);return zo(u)}Hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(sl(t,r|1),pt(t,je()),(ze&6)===0&&(gr=je()+500,vn()))}break;case 13:Bn(function(){var a=Zt(e,1);if(a!==null){var l=at();Lt(a,e,1,l)}}),Li(e,1)}},cl=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var r=at();Lt(t,e,134217728,r)}Li(e,134217728)}},Vs=function(e){if(e.tag===13){var t=kn(e),r=Zt(e,t);if(r!==null){var a=at();Lt(r,e,t,a)}Li(e,t)}},$s=function(){return Ce},Ys=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}},tl=function(e,t,r){switch(t){case"input":if(Go(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=$a(a);if(!l)throw Error(c(90));q(a),Go(a,l)}}}break;case"textarea":Es(e,r);break;case"select":t=r.value,t!=null&&Gn(e,!!r.multiple,t,!1)}},Ts=Ti,Os=Bn;var vf={usingClientEntryPoint:!1,Events:[Zr,rr,$a,Cs,As,Ti]},pa={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{za=To.inject(xf),_t=To}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf,mt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(t))throw Error(c(200));return ff(e,t,null,r)},mt.createRoot=function(e,t){if(!_i(e))throw Error(c(299));var r=!1,a="",l=id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ii(e,1,!1,null,null,r,!1,a,l),e[qt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Mi(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ds(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Bn(e)},mt.hydrate=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!0,r)},mt.hydrateRoot=function(e,t,r){if(!_i(e))throw Error(c(405));var a=r!=null&&r.hydratedSources||null,l=!1,i="",u=id;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=od(t,null,e,1,r??null,l,!1,i,u),e[qt]=t.current,Qr(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new So(t)},mt.render=function(e,t,r){if(!Co(t))throw Error(c(200));return Ao(null,e,t,!1,r)},mt.unmountComponentAtNode=function(e){if(!Co(e))throw Error(c(40));return e._reactRootContainer?(Bn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1},mt.unstable_batchedUpdates=Ti,mt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Co(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,t,r,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var fd;function Yd(){if(fd)return Bi.exports;fd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),Bi.exports=Cf(),Bi.exports}var hd;function Af(){if(hd)return Oo;hd=1;var o=Yd();return Oo.createRoot=o.createRoot,Oo.hydrateRoot=o.hydrateRoot,Oo}var Tf=Af();Yd();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},xa.apply(null,arguments)}var An;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(An||(An={}));const gd="popstate";function Of(o){o===void 0&&(o={});function s(d,p){let{pathname:m,search:g,hash:v}=d.location;return Ji("",{pathname:m,search:g,hash:v},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(d,p){return typeof p=="string"?p:Lo(p)}return Pf(s,c,null,o)}function Le(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Wd(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Rf(){return Math.random().toString(36).substr(2,8)}function vd(o,s){return{usr:o.state,key:o.key,idx:s}}function Ji(o,s,c,d){return c===void 0&&(c=null),xa({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?zr(s):s,{state:c,key:s&&s.key||d||Rf()})}function Lo(o){let{pathname:s="/",search:c="",hash:d=""}=o;return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function zr(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substr(c),o=o.substr(0,c));let d=o.indexOf("?");d>=0&&(s.search=o.substr(d),o=o.substr(0,d)),o&&(s.pathname=o)}return s}function Pf(o,s,c,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:m=!1}=d,g=p.history,v=An.Pop,h=null,w=k();w==null&&(w=0,g.replaceState(xa({},g.state,{idx:w}),""));function k(){return(g.state||{idx:null}).idx}function N(){v=An.Pop;let A=k(),T=A==null?null:A-w;w=A,h&&h({action:v,location:R.location,delta:T})}function O(A,T){v=An.Push;let _=Ji(R.location,A,T);w=k()+1;let Y=vd(_,w),W=R.createHref(_);try{g.pushState(Y,"",W)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;p.location.assign(W)}m&&h&&h({action:v,location:R.location,delta:1})}function L(A,T){v=An.Replace;let _=Ji(R.location,A,T);w=k();let Y=vd(_,w),W=R.createHref(_);g.replaceState(Y,"",W),m&&h&&h({action:v,location:R.location,delta:0})}function U(A){let T=p.location.origin!=="null"?p.location.origin:p.location.href,_=typeof A=="string"?A:Lo(A);return _=_.replace(/ $/,"%20"),Le(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let R={get action(){return v},get location(){return o(p,g)},listen(A){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener(gd,N),h=A,()=>{p.removeEventListener(gd,N),h=null}},createHref(A){return s(p,A)},createURL:U,encodeLocation(A){let T=U(A);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:O,replace:L,go(A){return g.go(A)}};return R}var xd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(xd||(xd={}));function Ff(o,s,c){return c===void 0&&(c="/"),Df(o,s,c)}function Df(o,s,c,d){let p=typeof s=="string"?zr(s):s,m=kr(p.pathname||"/",c);if(m==null)return null;let g=Gd(o);If(g);let v=null,h=Wf(m);for(let w=0;v==null&&w<g.length;++w)v=$f(g[w],h);return v}function Gd(o,s,c,d){s===void 0&&(s=[]),c===void 0&&(c=[]),d===void 0&&(d="");let p=(m,g,v)=>{let h={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};h.relativePath.startsWith("/")&&(Le(h.relativePath.startsWith(d),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(d.length));let w=On([d,h.relativePath]),k=c.concat(h);m.children&&m.children.length>0&&(Le(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),Gd(m.children,s,k,w)),!(m.path==null&&!m.index)&&s.push({path:w,score:Hf(w,m.index),routesMeta:k})};return o.forEach((m,g)=>{var v;if(m.path===""||!((v=m.path)!=null&&v.includes("?")))p(m,g);else for(let h of qd(m.path))p(m,g,h)}),s}function qd(o){let s=o.split("/");if(s.length===0)return[];let[c,...d]=s,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let g=qd(d.join("/")),v=[];return v.push(...g.map(h=>h===""?m:[m,h].join("/"))),p&&v.push(...g),v.map(h=>o.startsWith("/")&&h===""?"/":h)}function If(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:Vf(s.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}const Lf=/^:[\w-]+$/,Mf=3,_f=2,jf=1,Bf=10,Uf=-2,yd=o=>o==="*";function Hf(o,s){let c=o.split("/"),d=c.length;return c.some(yd)&&(d+=Uf),s&&(d+=_f),c.filter(p=>!yd(p)).reduce((p,m)=>p+(Lf.test(m)?Mf:m===""?jf:Bf),d)}function Vf(o,s){return o.length===s.length&&o.slice(0,-1).every((d,p)=>d===s[p])?o[o.length-1]-s[s.length-1]:0}function $f(o,s,c){let{routesMeta:d}=o,p={},m="/",g=[];for(let v=0;v<d.length;++v){let h=d[v],w=v===d.length-1,k=m==="/"?s:s.slice(m.length)||"/",N=es({path:h.relativePath,caseSensitive:h.caseSensitive,end:w},k),O=h.route;if(!N)return null;Object.assign(p,N.params),g.push({params:p,pathname:On([m,N.pathname]),pathnameBase:Qf(On([m,N.pathnameBase])),route:O}),N.pathnameBase!=="/"&&(m=On([m,N.pathnameBase]))}return g}function es(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,d]=Yf(o.path,o.caseSensitive,o.end),p=s.match(c);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),v=p.slice(1);return{params:d.reduce((w,k,N)=>{let{paramName:O,isOptional:L}=k;if(O==="*"){let R=v[N]||"";g=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const U=v[N];return L&&!U?w[O]=void 0:w[O]=(U||"").replace(/%2F/g,"/"),w},{}),pathname:m,pathnameBase:g,pattern:o}}function Yf(o,s,c){s===void 0&&(s=!1),c===void 0&&(c=!0),Wd(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,v,h)=>(d.push({paramName:v,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,s?void 0:"i"),d]}function Wf(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Wd(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function kr(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,d=o.charAt(c);return d&&d!=="/"?null:o.slice(c)||"/"}function Gf(o,s){s===void 0&&(s="/");let{pathname:c,search:d="",hash:p=""}=typeof o=="string"?zr(o):o,m;return c?(c=Qd(c),c.startsWith("/")?m=Ed(c.substring(1),"/"):m=Ed(c,s)):m=s,{pathname:m,search:Kf(d),hash:Xf(p)}}function Ed(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function Vi(o,s,c,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qf(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ps(o,s){let c=qf(o);return s?c.map((d,p)=>p===c.length-1?d.pathname:d.pathnameBase):c.map(d=>d.pathnameBase)}function ms(o,s,c,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=zr(o):(p=xa({},o),Le(!p.pathname||!p.pathname.includes("?"),Vi("?","pathname","search",p)),Le(!p.pathname||!p.pathname.includes("#"),Vi("#","pathname","hash",p)),Le(!p.search||!p.search.includes("#"),Vi("#","search","hash",p)));let m=o===""||p.pathname==="",g=m?"/":p.pathname,v;if(g==null)v=c;else{let N=s.length-1;if(!d&&g.startsWith("..")){let O=g.split("/");for(;O[0]==="..";)O.shift(),N-=1;p.pathname=O.join("/")}v=N>=0?s[N]:"/"}let h=Gf(p,v),w=g&&g!=="/"&&g.endsWith("/"),k=(m||g===".")&&c.endsWith("/");return!h.pathname.endsWith("/")&&(w||k)&&(h.pathname+="/"),h}const Qd=o=>o.replace(/\/\/+/g,"/"),On=o=>Qd(o.join("/")),Qf=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Kf=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Xf=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Zf(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Kd=["post","put","patch","delete"];new Set(Kd);const Jf=["get",...Kd];new Set(Jf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},ya.apply(null,arguments)}const Uo=y.createContext(null),Xd=y.createContext(null),an=y.createContext(null),Ho=y.createContext(null),Yt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Zd=y.createContext(null);function eh(o,s){let{relative:c}=s===void 0?{}:s;Sr()||Le(!1);let{basename:d,navigator:p}=y.useContext(an),{hash:m,pathname:g,search:v}=Vo(o,{relative:c}),h=g;return d!=="/"&&(h=g==="/"?d:On([d,g])),p.createHref({pathname:h,search:v,hash:m})}function Sr(){return y.useContext(Ho)!=null}function Wt(){return Sr()||Le(!1),y.useContext(Ho).location}function Jd(o){y.useContext(an).static||y.useLayoutEffect(o)}function on(){let{isDataRoute:o}=y.useContext(Yt);return o?hh():th()}function th(){Sr()||Le(!1);let o=y.useContext(Uo),{basename:s,future:c,navigator:d}=y.useContext(an),{matches:p}=y.useContext(Yt),{pathname:m}=Wt(),g=JSON.stringify(ps(p,c.v7_relativeSplatPath)),v=y.useRef(!1);return Jd(()=>{v.current=!0}),y.useCallback(function(w,k){if(k===void 0&&(k={}),!v.current)return;if(typeof w=="number"){d.go(w);return}let N=ms(w,JSON.parse(g),m,k.relative==="path");o==null&&s!=="/"&&(N.pathname=N.pathname==="/"?s:On([s,N.pathname])),(k.replace?d.replace:d.push)(N,k.state,k)},[s,d,g,m,o])}const nh=y.createContext(null);function rh(o){let s=y.useContext(Yt).outlet;return s&&y.createElement(nh.Provider,{value:o},s)}function ep(){let{matches:o}=y.useContext(Yt),s=o[o.length-1];return s?s.params:{}}function Vo(o,s){let{relative:c}=s===void 0?{}:s,{future:d}=y.useContext(an),{matches:p}=y.useContext(Yt),{pathname:m}=Wt(),g=JSON.stringify(ps(p,d.v7_relativeSplatPath));return y.useMemo(()=>ms(o,JSON.parse(g),m,c==="path"),[o,g,m,c])}function ah(o,s){return oh(o,s)}function oh(o,s,c,d){Sr()||Le(!1);let{navigator:p}=y.useContext(an),{matches:m}=y.useContext(Yt),g=m[m.length-1],v=g?g.params:{};g&&g.pathname;let h=g?g.pathnameBase:"/";g&&g.route;let w=Wt(),k;if(s){var N;let A=typeof s=="string"?zr(s):s;h==="/"||(N=A.pathname)!=null&&N.startsWith(h)||Le(!1),k=A}else k=w;let O=k.pathname||"/",L=O;if(h!=="/"){let A=h.replace(/^\//,"").split("/");L="/"+O.replace(/^\//,"").split("/").slice(A.length).join("/")}let U=Ff(o,{pathname:L}),R=uh(U&&U.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:On([h,p.encodeLocation?p.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:On([h,p.encodeLocation?p.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,c,d);return s&&R?y.createElement(Ho.Provider,{value:{location:ya({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:An.Pop}},R):R}function lh(){let o=fh(),s=Zf(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),c?y.createElement("pre",{style:p},c):null,null)}const ih=y.createElement(lh,null);class sh extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){console.error("React Router caught the following error during render",s,c)}render(){return this.state.error!==void 0?y.createElement(Yt.Provider,{value:this.props.routeContext},y.createElement(Zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(o){let{routeContext:s,match:c,children:d}=o,p=y.useContext(Uo);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(Yt.Provider,{value:s},d)}function uh(o,s,c,d){var p;if(s===void 0&&(s=[]),c===void 0&&(c=null),d===void 0&&(d=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=d)!=null&&m.v7_partialHydration&&s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let g=o,v=(p=c)==null?void 0:p.errors;if(v!=null){let k=g.findIndex(N=>N.route.id&&(v==null?void 0:v[N.route.id])!==void 0);k>=0||Le(!1),g=g.slice(0,Math.min(g.length,k+1))}let h=!1,w=-1;if(c&&d&&d.v7_partialHydration)for(let k=0;k<g.length;k++){let N=g[k];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(w=k),N.route.id){let{loaderData:O,errors:L}=c,U=N.route.loader&&O[N.route.id]===void 0&&(!L||L[N.route.id]===void 0);if(N.route.lazy||U){h=!0,w>=0?g=g.slice(0,w+1):g=[g[0]];break}}}return g.reduceRight((k,N,O)=>{let L,U=!1,R=null,A=null;c&&(L=v&&N.route.id?v[N.route.id]:void 0,R=N.route.errorElement||ih,h&&(w<0&&O===0?(gh("route-fallback"),U=!0,A=null):w===O&&(U=!0,A=N.route.hydrateFallbackElement||null)));let T=s.concat(g.slice(0,O+1)),_=()=>{let Y;return L?Y=R:U?Y=A:N.route.Component?Y=y.createElement(N.route.Component,null):N.route.element?Y=N.route.element:Y=k,y.createElement(ch,{match:N,routeContext:{outlet:k,matches:T,isDataRoute:c!=null},children:Y})};return c&&(N.route.ErrorBoundary||N.route.errorElement||O===0)?y.createElement(sh,{location:c.location,revalidation:c.revalidation,component:R,error:L,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var tp=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(tp||{}),np=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(np||{});function dh(o){let s=y.useContext(Uo);return s||Le(!1),s}function ph(o){let s=y.useContext(Xd);return s||Le(!1),s}function mh(o){let s=y.useContext(Yt);return s||Le(!1),s}function rp(o){let s=mh(),c=s.matches[s.matches.length-1];return c.route.id||Le(!1),c.route.id}function fh(){var o;let s=y.useContext(Zd),c=ph(),d=rp();return s!==void 0?s:(o=c.errors)==null?void 0:o[d]}function hh(){let{router:o}=dh(tp.UseNavigateStable),s=rp(np.UseNavigateStable),c=y.useRef(!1);return Jd(()=>{c.current=!0}),y.useCallback(function(p,m){m===void 0&&(m={}),c.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,ya({fromRouteId:s},m)))},[o,s])}const wd={};function gh(o,s,c){wd[o]||(wd[o]=!0)}function vh(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xh(o){let{to:s,replace:c,state:d,relative:p}=o;Sr()||Le(!1);let{future:m,static:g}=y.useContext(an),{matches:v}=y.useContext(Yt),{pathname:h}=Wt(),w=on(),k=ms(s,ps(v,m.v7_relativeSplatPath),h,p==="path"),N=JSON.stringify(k);return y.useEffect(()=>w(JSON.parse(N),{replace:c,state:d,relative:p}),[w,N,p,c,d]),null}function yh(o){return rh(o.context)}function Qe(o){Le(!1)}function Eh(o){let{basename:s="/",children:c=null,location:d,navigationType:p=An.Pop,navigator:m,static:g=!1,future:v}=o;Sr()&&Le(!1);let h=s.replace(/^\/*/,"/"),w=y.useMemo(()=>({basename:h,navigator:m,static:g,future:ya({v7_relativeSplatPath:!1},v)}),[h,v,m,g]);typeof d=="string"&&(d=zr(d));let{pathname:k="/",search:N="",hash:O="",state:L=null,key:U="default"}=d,R=y.useMemo(()=>{let A=kr(k,h);return A==null?null:{location:{pathname:A,search:N,hash:O,state:L,key:U},navigationType:p}},[h,k,N,O,L,U,p]);return R==null?null:y.createElement(an.Provider,{value:w},y.createElement(Ho.Provider,{children:c,value:R}))}function wh(o){let{children:s,location:c}=o;return ah(ts(s),c)}new Promise(()=>{});function ts(o,s){s===void 0&&(s=[]);let c=[];return y.Children.forEach(o,(d,p)=>{if(!y.isValidElement(d))return;let m=[...s,p];if(d.type===y.Fragment){c.push.apply(c,ts(d.props.children,m));return}d.type!==Qe&&Le(!1),!d.props.index||!d.props.children||Le(!1);let g={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=ts(d.props.children,m)),c.push(g)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},Mo.apply(null,arguments)}function ap(o,s){if(o==null)return{};var c={};for(var d in o)if({}.hasOwnProperty.call(o,d)){if(s.indexOf(d)!==-1)continue;c[d]=o[d]}return c}function bh(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function kh(o,s){return o.button===0&&(!s||s==="_self")&&!bh(o)}function ns(o){return o===void 0&&(o=""),new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,c)=>{let d=o[c];return s.concat(Array.isArray(d)?d.map(p=>[c,p]):[[c,d]])},[]))}function Nh(o,s){let c=ns(o);return s&&s.forEach((d,p)=>{c.has(p)||s.getAll(p).forEach(m=>{c.append(p,m)})}),c}const zh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ch="6";try{window.__reactRouterVersion=Ch}catch{}const Ah=y.createContext({isTransitioning:!1}),Th="startTransition",bd=Nf[Th];function Oh(o){let{basename:s,children:c,future:d,window:p}=o,m=y.useRef();m.current==null&&(m.current=Of({window:p,v5Compat:!0}));let g=m.current,[v,h]=y.useState({action:g.action,location:g.location}),{v7_startTransition:w}=d||{},k=y.useCallback(N=>{w&&bd?bd(()=>h(N)):h(N)},[h,w]);return y.useLayoutEffect(()=>g.listen(k),[g,k]),y.useEffect(()=>vh(d),[d]),y.createElement(Eh,{basename:s,children:c,location:v.location,navigationType:v.action,navigator:g,future:d})}const Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=y.forwardRef(function(s,c){let{onClick:d,relative:p,reloadDocument:m,replace:g,state:v,target:h,to:w,preventScrollReset:k,viewTransition:N}=s,O=ap(s,zh),{basename:L}=y.useContext(an),U,R=!1;if(typeof w=="string"&&Ph.test(w)&&(U=w,Rh))try{let Y=new URL(window.location.href),W=w.startsWith("//")?new URL(Y.protocol+w):new URL(w),ee=kr(W.pathname,L);W.origin===Y.origin&&ee!=null?w=ee+W.search+W.hash:R=!0}catch{}let A=eh(w,{relative:p}),T=Dh(w,{replace:g,state:v,target:h,preventScrollReset:k,relative:p,viewTransition:N});function _(Y){d&&d(Y),Y.defaultPrevented||T(Y)}return y.createElement("a",Mo({},O,{href:U||A,onClick:R||m?d:_,ref:c,target:h}))}),Cn=y.forwardRef(function(s,c){let{"aria-current":d="page",caseSensitive:p=!1,className:m="",end:g=!1,style:v,to:h,viewTransition:w,children:k}=s,N=ap(s,Sh),O=Vo(h,{relative:N.relative}),L=Wt(),U=y.useContext(Xd),{navigator:R,basename:A}=y.useContext(an),T=U!=null&&Lh(O)&&w===!0,_=R.encodeLocation?R.encodeLocation(O).pathname:O.pathname,Y=L.pathname,W=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;p||(Y=Y.toLowerCase(),W=W?W.toLowerCase():null,_=_.toLowerCase()),W&&A&&(W=kr(W,A)||W);const ee=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let oe=Y===_||!g&&Y.startsWith(_)&&Y.charAt(ee)==="/",ye=W!=null&&(W===_||!g&&W.startsWith(_)&&W.charAt(_.length)==="/"),le={isActive:oe,isPending:ye,isTransitioning:T},Ne=oe?d:void 0,G;typeof m=="function"?G=m(le):G=[m,oe?"active":null,ye?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ke=typeof v=="function"?v(le):v;return y.createElement(K,Mo({},N,{"aria-current":Ne,className:G,ref:c,style:ke,to:h,viewTransition:w}),typeof k=="function"?k(le):k)});var rs;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(rs||(rs={}));var kd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(kd||(kd={}));function Fh(o){let s=y.useContext(Uo);return s||Le(!1),s}function Dh(o,s){let{target:c,replace:d,state:p,preventScrollReset:m,relative:g,viewTransition:v}=s===void 0?{}:s,h=on(),w=Wt(),k=Vo(o,{relative:g});return y.useCallback(N=>{if(kh(N,c)){N.preventDefault();let O=d!==void 0?d:Lo(w)===Lo(k);h(o,{replace:O,state:p,preventScrollReset:m,relative:g,viewTransition:v})}},[w,h,k,d,p,c,o,m,g,v])}function Ih(o){let s=y.useRef(ns(o)),c=y.useRef(!1),d=Wt(),p=y.useMemo(()=>Nh(d.search,c.current?null:s.current),[d.search]),m=on(),g=y.useCallback((v,h)=>{const w=ns(typeof v=="function"?v(p):v);c.current=!0,m("?"+w,h)},[m,p]);return[p,g]}function Lh(o,s){s===void 0&&(s={});let c=y.useContext(Ah);c==null&&Le(!1);let{basename:d}=Fh(rs.useViewTransitionState),p=Vo(o,{relative:s.relative});if(!c.isTransitioning)return!1;let m=kr(c.currentLocation.pathname,d)||c.currentLocation.pathname,g=kr(c.nextLocation.pathname,d)||c.nextLocation.pathname;return es(p.pathname,g)!=null||es(p.pathname,m)!=null}var $i,Nd;function Mh(){if(Nd)return $i;Nd=1;var o=typeof Element<"u",s=typeof Map=="function",c=typeof Set=="function",d=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,g){if(m===g)return!0;if(m&&g&&typeof m=="object"&&typeof g=="object"){if(m.constructor!==g.constructor)return!1;var v,h,w;if(Array.isArray(m)){if(v=m.length,v!=g.length)return!1;for(h=v;h--!==0;)if(!p(m[h],g[h]))return!1;return!0}var k;if(s&&m instanceof Map&&g instanceof Map){if(m.size!==g.size)return!1;for(k=m.entries();!(h=k.next()).done;)if(!g.has(h.value[0]))return!1;for(k=m.entries();!(h=k.next()).done;)if(!p(h.value[1],g.get(h.value[0])))return!1;return!0}if(c&&m instanceof Set&&g instanceof Set){if(m.size!==g.size)return!1;for(k=m.entries();!(h=k.next()).done;)if(!g.has(h.value[0]))return!1;return!0}if(d&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(g)){if(v=m.length,v!=g.length)return!1;for(h=v;h--!==0;)if(m[h]!==g[h])return!1;return!0}if(m.constructor===RegExp)return m.source===g.source&&m.flags===g.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof g.valueOf=="function")return m.valueOf()===g.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof g.toString=="function")return m.toString()===g.toString();if(w=Object.keys(m),v=w.length,v!==Object.keys(g).length)return!1;for(h=v;h--!==0;)if(!Object.prototype.hasOwnProperty.call(g,w[h]))return!1;if(o&&m instanceof Element)return!1;for(h=v;h--!==0;)if(!((w[h]==="_owner"||w[h]==="__v"||w[h]==="__o")&&m.$$typeof)&&!p(m[w[h]],g[w[h]]))return!1;return!0}return m!==m&&g!==g}return $i=function(g,v){try{return p(g,v)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},$i}var _h=Mh();const jh=Bo(_h);var Yi,zd;function Bh(){if(zd)return Yi;zd=1;var o=function(s,c,d,p,m,g,v,h){if(!s){var w;if(c===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,p,m,g,v,h],N=0;w=new Error(c.replace(/%s/g,function(){return k[N++]})),w.name="Invariant Violation"}throw w.framesToPop=1,w}};return Yi=o,Yi}var Uh=Bh();const Sd=Bo(Uh);var Wi,Cd;function Hh(){return Cd||(Cd=1,Wi=function(s,c,d,p){var m=d?d.call(p,s,c):void 0;if(m!==void 0)return!!m;if(s===c)return!0;if(typeof s!="object"||!s||typeof c!="object"||!c)return!1;var g=Object.keys(s),v=Object.keys(c);if(g.length!==v.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(c),w=0;w<g.length;w++){var k=g[w];if(!h(k))return!1;var N=s[k],O=c[k];if(m=d?d.call(p,N,O,k):void 0,m===!1||m===void 0&&N!==O)return!1}return!0}),Wi}var Vh=Hh();const $h=Bo(Vh);var op=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(op||{}),Gi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ad=Object.values(op),fs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yh=Object.entries(fs).reduce((o,[s,c])=>(o[c]=s,o),{}),Mt="data-rh",yr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Er=(o,s)=>{for(let c=o.length-1;c>=0;c-=1){const d=o[c];if(Object.prototype.hasOwnProperty.call(d,s))return d[s]}return null},Wh=o=>{let s=Er(o,"title");const c=Er(o,yr.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),c&&s)return c.replace(/%s/g,()=>s);const d=Er(o,yr.DEFAULT_TITLE);return s||d||void 0},Gh=o=>Er(o,yr.ON_CHANGE_CLIENT_STATE)||(()=>{}),qi=(o,s)=>s.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,d)=>({...c,...d}),{}),qh=(o,s)=>s.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,d)=>{if(!c.length){const p=Object.keys(d);for(let m=0;m<p.length;m+=1){const v=p[m].toLowerCase();if(o.indexOf(v)!==-1&&d[v])return c.concat(d)}}return c},[]),Qh=o=>console&&typeof console.warn=="function"&&console.warn(o),ma=(o,s,c)=>{const d={};return c.filter(p=>Array.isArray(p[o])?!0:(typeof p[o]<"u"&&Qh(`Helmet: ${o} should be of type "Array". Instead found type "${typeof p[o]}"`),!1)).map(p=>p[o]).reverse().reduce((p,m)=>{const g={};m.filter(h=>{let w;const k=Object.keys(h);for(let O=0;O<k.length;O+=1){const L=k[O],U=L.toLowerCase();s.indexOf(U)!==-1&&!(w==="rel"&&h[w].toLowerCase()==="canonical")&&!(U==="rel"&&h[U].toLowerCase()==="stylesheet")&&(w=U),s.indexOf(L)!==-1&&(L==="innerHTML"||L==="cssText"||L==="itemprop")&&(w=L)}if(!w||!h[w])return!1;const N=h[w].toLowerCase();return d[w]||(d[w]={}),g[w]||(g[w]={}),d[w][N]?!1:(g[w][N]=!0,!0)}).reverse().forEach(h=>p.push(h));const v=Object.keys(g);for(let h=0;h<v.length;h+=1){const w=v[h],k={...d[w],...g[w]};d[w]=k}return p},[]).reverse()},Kh=(o,s)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][s])return!0}return!1},Xh=o=>({baseTag:qh(["href"],o),bodyAttributes:qi("bodyAttributes",o),defer:Er(o,yr.DEFER),encode:Er(o,yr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:qi("htmlAttributes",o),linkTags:ma("link",["rel","href"],o),metaTags:ma("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:ma("noscript",["innerHTML"],o),onChangeClientState:Gh(o),scriptTags:ma("script",["src","innerHTML"],o),styleTags:ma("style",["cssText"],o),title:Wh(o),titleAttributes:qi("titleAttributes",o),prioritizeSeoTags:Kh(o,yr.PRIORITIZE_SEO_TAGS)}),lp=o=>Array.isArray(o)?o.join(""):o,Zh=(o,s)=>{const c=Object.keys(o);for(let d=0;d<c.length;d+=1)if(s[c[d]]&&s[c[d]].includes(o[c[d]]))return!0;return!1},Qi=(o,s)=>Array.isArray(o)?o.reduce((c,d)=>(Zh(d,s)?c.priority.push(d):c.default.push(d),c),{priority:[],default:[]}):{default:o,priority:[]},Td=(o,s)=>({...o,[s]:void 0}),Jh=["noscript","script","style"],as=(o,s=!0)=>s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ip=o=>Object.keys(o).reduce((s,c)=>{const d=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return s?`${s} ${d}`:d},""),eg=(o,s,c,d)=>{const p=ip(c),m=lp(s);return p?`<${o} ${Mt}="true" ${p}>${as(m,d)}</${o}>`:`<${o} ${Mt}="true">${as(m,d)}</${o}>`},tg=(o,s,c=!0)=>s.reduce((d,p)=>{const m=p,g=Object.keys(m).filter(w=>!(w==="innerHTML"||w==="cssText")).reduce((w,k)=>{const N=typeof m[k]>"u"?k:`${k}="${as(m[k],c)}"`;return w?`${w} ${N}`:N},""),v=m.innerHTML||m.cssText||"",h=Jh.indexOf(o)===-1;return`${d}<${o} ${Mt}="true" ${g}${h?"/>":`>${v}</${o}>`}`},""),sp=(o,s={})=>Object.keys(o).reduce((c,d)=>{const p=fs[d];return c[p||d]=o[d],c},s),ng=(o,s,c)=>{const d={key:s,[Mt]:!0},p=sp(c,d);return[n.createElement("title",p,s)]},Io=(o,s)=>s.map((c,d)=>{const p={key:d,[Mt]:!0};return Object.keys(c).forEach(m=>{const v=fs[m]||m;if(v==="innerHTML"||v==="cssText"){const h=c.innerHTML||c.cssText;p.dangerouslySetInnerHTML={__html:h}}else p[v]=c[m]}),n.createElement(o,p)}),Ct=(o,s,c=!0)=>{switch(o){case"title":return{toComponent:()=>ng(o,s.title,s.titleAttributes),toString:()=>eg(o,s.title,s.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>sp(s),toString:()=>ip(s)};default:return{toComponent:()=>Io(o,s),toString:()=>tg(o,s,c)}}},rg=({metaTags:o,linkTags:s,scriptTags:c,encode:d})=>{const p=Qi(o,Gi.meta),m=Qi(s,Gi.link),g=Qi(c,Gi.script);return{priorityMethods:{toComponent:()=>[...Io("meta",p.priority),...Io("link",m.priority),...Io("script",g.priority)],toString:()=>`${Ct("meta",p.priority,d)} ${Ct("link",m.priority,d)} ${Ct("script",g.priority,d)}`},metaTags:p.default,linkTags:m.default,scriptTags:g.default}},ag=o=>{const{baseTag:s,bodyAttributes:c,encode:d=!0,htmlAttributes:p,noscriptTags:m,styleTags:g,title:v="",titleAttributes:h,prioritizeSeoTags:w}=o;let{linkTags:k,metaTags:N,scriptTags:O}=o,L={toComponent:()=>{},toString:()=>""};return w&&({priorityMethods:L,linkTags:k,metaTags:N,scriptTags:O}=rg(o)),{priority:L,base:Ct("base",s,d),bodyAttributes:Ct("bodyAttributes",c,d),htmlAttributes:Ct("htmlAttributes",p,d),link:Ct("link",k,d),meta:Ct("meta",N,d),noscript:Ct("noscript",m,d),script:Ct("script",O,d),style:Ct("style",g,d),title:Ct("title",{title:v,titleAttributes:h},d)}},os=ag,Ro=[],cp=!!(typeof window<"u"&&window.document&&window.document.createElement),ls=class{constructor(o,s){nn(this,"instances",[]);nn(this,"canUseDOM",cp);nn(this,"context");nn(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?Ro:this.instances,add:o=>{(this.canUseDOM?Ro:this.instances).push(o)},remove:o=>{const s=(this.canUseDOM?Ro:this.instances).indexOf(o);(this.canUseDOM?Ro:this.instances).splice(s,1)}}});this.context=o,this.canUseDOM=s||!1,s||(o.helmet=os({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},og={},up=n.createContext(og),Wn,dp=(Wn=class extends y.Component{constructor(c){super(c);nn(this,"helmetData");this.helmetData=new ls(this.props.context||{},Wn.canUseDOM)}render(){return n.createElement(up.Provider,{value:this.helmetData.value},this.props.children)}},nn(Wn,"canUseDOM",cp),Wn),xr=(o,s)=>{const c=document.head||document.querySelector("head"),d=c.querySelectorAll(`${o}[${Mt}]`),p=[].slice.call(d),m=[];let g;return s&&s.length&&s.forEach(v=>{const h=document.createElement(o);for(const w in v)if(Object.prototype.hasOwnProperty.call(v,w))if(w==="innerHTML")h.innerHTML=v.innerHTML;else if(w==="cssText")h.styleSheet?h.styleSheet.cssText=v.cssText:h.appendChild(document.createTextNode(v.cssText));else{const k=w,N=typeof v[k]>"u"?"":v[k];h.setAttribute(w,N)}h.setAttribute(Mt,"true"),p.some((w,k)=>(g=k,h.isEqualNode(w)))?p.splice(g,1):m.push(h)}),p.forEach(v=>{var h;return(h=v.parentNode)==null?void 0:h.removeChild(v)}),m.forEach(v=>c.appendChild(v)),{oldTags:p,newTags:m}},is=(o,s)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const d=c.getAttribute(Mt),p=d?d.split(","):[],m=[...p],g=Object.keys(s);for(const v of g){const h=s[v]||"";c.getAttribute(v)!==h&&c.setAttribute(v,h),p.indexOf(v)===-1&&p.push(v);const w=m.indexOf(v);w!==-1&&m.splice(w,1)}for(let v=m.length-1;v>=0;v-=1)c.removeAttribute(m[v]);p.length===m.length?c.removeAttribute(Mt):c.getAttribute(Mt)!==g.join(",")&&c.setAttribute(Mt,g.join(","))},lg=(o,s)=>{typeof o<"u"&&document.title!==o&&(document.title=lp(o)),is("title",s)},Od=(o,s)=>{const{baseTag:c,bodyAttributes:d,htmlAttributes:p,linkTags:m,metaTags:g,noscriptTags:v,onChangeClientState:h,scriptTags:w,styleTags:k,title:N,titleAttributes:O}=o;is("body",d),is("html",p),lg(N,O);const L={baseTag:xr("base",c),linkTags:xr("link",m),metaTags:xr("meta",g),noscriptTags:xr("noscript",v),scriptTags:xr("script",w),styleTags:xr("style",k)},U={},R={};Object.keys(L).forEach(A=>{const{newTags:T,oldTags:_}=L[A];T.length&&(U[A]=T),_.length&&(R[A]=L[A].oldTags)}),s&&s(),h(o,U,R)},fa=null,ig=o=>{fa&&cancelAnimationFrame(fa),o.defer?fa=requestAnimationFrame(()=>{Od(o,()=>{fa=null})}):(Od(o),fa=null)},sg=ig,Rd=class extends y.Component{constructor(){super(...arguments);nn(this,"rendered",!1)}shouldComponentUpdate(s){return!$h(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:c}=this.props.context;let d=null;const p=Xh(s.get().map(m=>{const g={...m.props};return delete g.context,g}));dp.canUseDOM?sg(p):os&&(d=os(p)),c(d)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},Zi,cg=(Zi=class extends y.Component{shouldComponentUpdate(o){return!jh(Td(this.props,"helmetData"),Td(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,c,d){return{...s,[o.type]:[...s[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,d)}]}}mapObjectTypeChildren(o,s,c,d){switch(o.type){case"title":return{...s,[o.type]:d,titleAttributes:{...c}};case"body":return{...s,bodyAttributes:{...c}};case"html":return{...s,htmlAttributes:{...c}};default:return{...s,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,s){let c={...s};return Object.keys(o).forEach(d=>{c={...c,[d]:o[d]}}),c}warnOnInvalidChildren(o,s){return Sd(Ad.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ad.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Sd(!s||typeof s=="string"||Array.isArray(s)&&!s.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let c={};return n.Children.forEach(o,d=>{if(!d||!d.props)return;const{children:p,...m}=d.props,g=Object.keys(m).reduce((h,w)=>(h[Yh[w]||w]=m[w],h),{});let{type:v}=d;switch(typeof v=="symbol"?v=v.toString():this.warnOnInvalidChildren(d,p),v){case"Symbol(react.fragment)":s=this.mapChildrenToProps(p,s);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(d,c,g,p);break;default:s=this.mapObjectTypeChildren(d,s,g,p);break}}),this.mapArrayTypeChildrenToProps(c,s)}render(){const{children:o,...s}=this.props;let c={...s},{helmetData:d}=s;if(o&&(c=this.mapChildrenToProps(o,c)),d&&!(d instanceof ls)){const p=d;d=new ls(p.context,!0),delete c.helmetData}return d?n.createElement(Rd,{...c,context:d.value}):n.createElement(up.Consumer,null,p=>n.createElement(Rd,{...c,context:p}))}},nn(Zi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Zi);const Pd="https://hovira-backend-nine.vercel.app/api";class Fd extends Error{constructor(s,c=0,d=null){super(s),this.name="ApiError",this.status=c,this.payload=d}}function pp(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function mp(o){o&&(localStorage.setItem("token",o),localStorage.setItem("customerToken",o))}function Dd(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function St(o,s=[]){if(!o||typeof o!="object")return o;for(const c of s)if(o[c]!==void 0)return o[c];if(o.data!==void 0){const c=o.data;if(c&&typeof c=="object"){for(const d of s)if(c[d]!==void 0)return c[d]}return c}return o}async function ot(o,s={}){const{body:c,headers:d={},...p}=s,m=pp(),g={Accept:"application/json",...d};let v=c;c!==void 0&&!(c instanceof FormData)&&typeof c!="string"&&(g["Content-Type"]="application/json",v=JSON.stringify(c)),m&&!g.Authorization&&(g.Authorization=`Bearer ${m}`);let h;try{h=await fetch(`${Pd}${o.startsWith("/")?o:`/${o}`}`,{...p,headers:g,body:v})}catch(N){throw new Fd(`Cannott connect to API at ${Pd}. Check that your backend is running and CORS is enabled.`,0,N)}const k=(h.headers.get("content-type")||"").includes("application/json")?await h.json().catch(()=>({})):await h.text();if(!h.ok){const N=(k==null?void 0:k.message)||(k==null?void 0:k.error)||(typeof k=="string"?k:`Request failed (${h.status})`);throw new Fd(N,h.status,k)}return k}const Ie={products:async(o={})=>{const s=new URLSearchParams;Object.entries(o).forEach(([p,m])=>{m!==""&&m!=null&&s.set(p,m)});const c=await ot(`/products${s.toString()?`?${s}`:""}`),d=St(c,["products","items","results"]);return Array.isArray(d)?d:(d==null?void 0:d.products)||(d==null?void 0:d.items)||[]},product:async o=>St(await ot(`/products/${encodeURIComponent(o)}`),["product","item"]),register:async o=>ot("/auth/customers/register",{method:"POST",body:o}),login:async o=>ot("/auth/customers/login",{method:"POST",body:o}),me:async()=>St(await ot("/customers/me"),["customer","user","profile"]),updateMe:async o=>St(await ot("/customers/me",{method:"PATCH",body:o}),["customer","user","profile"]),changePassword:o=>ot("/customers/me/password",{method:"PATCH",body:o}),addAddress:async o=>St(await ot("/customers/me/addresses",{method:"POST",body:o}),["customer","address"]),updateAddress:async(o,s)=>St(await ot(`/customers/me/addresses/${o}`,{method:"PATCH",body:s}),["customer","address"]),deleteAddress:async o=>ot(`/customers/me/addresses/${o}`,{method:"DELETE"}),orders:async()=>{const o=St(await ot("/orders/my"),["orders","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.orders)||[]},order:async o=>St(await ot(`/orders/my/${o}`),["order","item"]),createOrder:async o=>St(await ot("/orders",{method:"POST",body:o}),["order","data"]),coupons:async()=>{const o=St(await ot("/coupons"),["coupons","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.coupons)||[]},validateCoupon:o=>ot("/coupons/validate",{method:"POST",body:o})},Ue=(o,s="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:s||"INR",maximumFractionDigits:0}).format(Number(o)||0),$o=o=>{var d;if(!o)return"";const s=o.images||[],c=((d=s.find)==null?void 0:d.call(s,p=>p==null?void 0:p.isPrimary))||s[0];return(c==null?void 0:c.url)||o.image||o.imageUrl||""},Tn=o=>(o==null?void 0:o.salePrice)!=null?Number(o.salePrice):Number((o==null?void 0:o.price)||0),$n=o=>String((o==null?void 0:o._id)||(o==null?void 0:o.id)||(o==null?void 0:o.slug)||""),ga=o=>`/product/${encodeURIComponent((o==null?void 0:o.slug)||(o==null?void 0:o._id)||(o==null?void 0:o.id))}`,fp=y.createContext(null),Ki=(o,s)=>{try{return JSON.parse(localStorage.getItem(o))??s}catch{return s}};function ug({children:o}){const[s,c]=y.useState(()=>Ki("hovira-cart",[])),[d,p]=y.useState(()=>Ki("hovira-wishlist",[])),[m,g]=y.useState(()=>Ki("customer",null)),[v,h]=y.useState(!1);y.useEffect(()=>localStorage.setItem("hovira-cart",JSON.stringify(s)),[s]),y.useEffect(()=>localStorage.setItem("hovira-wishlist",JSON.stringify(d)),[d]),y.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]),y.useEffect(()=>{let T=!0;return(async()=>{if(pp())try{const _=await Ie.me();T&&_&&g(_)}catch{Dd(),T&&g(null)}T&&h(!0)})(),()=>{T=!1}},[]);const w=(T,_=1,Y="")=>c(W=>{const ee=$n(T),oe=`${ee}:${Y}`;return W.find(le=>le.key===oe)?W.map(le=>le.key===oe?{...le,quantity:Math.min(99,le.quantity+_)}:le):[...W,{key:oe,product:T,quantity:Math.max(1,_),variant:Y}]}),k=(T,_)=>c(Y=>_<=0?Y.filter(W=>W.key!==T):Y.map(W=>W.key===T?{...W,quantity:Math.min(99,_)}:W)),N=T=>c(_=>_.filter(Y=>Y.key!==T)),O=()=>c([]),L=T=>p(_=>_.some(Y=>$n(Y)===$n(T))?_.filter(Y=>$n(Y)!==$n(T)):[..._,T]),U=T=>d.some(_=>$n(_)===$n(T)),R=()=>{Dd(),g(null)},A=y.useMemo(()=>({cart:s,wishlist:d,customer:m,setCustomer:g,authReady:v,addToCart:w,updateQuantity:k,removeFromCart:N,clearCart:O,toggleWishlist:L,isWishlisted:U,logout:R}),[s,d,m,v]);return n.createElement(fp.Provider,{value:A},o)}const Gt=()=>y.useContext(fp);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hp=(...o)=>o.filter((s,c,d)=>!!s&&s.trim()!==""&&d.indexOf(s)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=y.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:p="",children:m,iconNode:g,...v},h)=>y.createElement("svg",{ref:h,...pg,width:s,height:s,stroke:o,strokeWidth:d?Number(c)*24/Number(s):c,className:hp("lucide",p),...v},[...g.map(([w,k])=>y.createElement(w,k)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(o,s)=>{const c=y.forwardRef(({className:d,...p},m)=>y.createElement(mg,{ref:m,iconNode:s,className:hp(`lucide-${dg(o)}`,d),...p}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=ie("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ie("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=ie("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=ie("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=ie("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=ie("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=ie("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=ie("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ie("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=ie("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=ie("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ie("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=ie("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=ie("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=ie("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=ie("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ie("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=ie("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=ie("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=ie("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ie("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ie("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ie("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ie("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=ie("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ie("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=ie("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=ie("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=ie("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=ie("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=ie("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ie("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ie("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ie("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=ie("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=ie("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=ie("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=ie("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=ie("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=ie("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=ie("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=ie("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=ie("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=ie("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ds="/assets/logo-YzEykGB1.png";function Ig(){const[o,s]=y.useState(!1),[c,d]=y.useState(""),[p,m]=y.useState(!1),{cart:g,wishlist:v,customer:h}=Gt(),w=on(),k=g.reduce((R,A)=>R+Number(A.quantity||0),0),N=v.length;y.useEffect(()=>{const R=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",R,{passive:!0}),R(),()=>window.removeEventListener("scroll",R)},[]),y.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const O=R=>{R.preventDefault(),w(`/shop${c.trim()?`?search=${encodeURIComponent(c.trim())}`:""}`),s(!1)},L=()=>s(!1),U=({isActive:R})=>`hv-nav-link ${R?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(K,{to:"/shop"},"Explore Collection ",n.createElement(xe,{size:13}))),n.createElement("header",{className:`hv-header ${p?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>s(!o),"aria-label":o?"Close menu":"Open menu","aria-expanded":o},o?n.createElement(ft,{size:23}):n.createElement(Sg,{size:23})),n.createElement(K,{to:"/",className:"hv-brand",onClick:L,"aria-label":"HOVIRA Home"},n.createElement("img",{src:ds,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(Cn,{to:"/",end:!0,className:U},"Home"),n.createElement(Cn,{to:"/shop",className:U},"Shop All"),n.createElement(Cn,{to:"/shop?category=Best%20sellers",className:U},"Best Sellers"),n.createElement(Cn,{to:"/about",className:U},"Our Story")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:O},n.createElement(us,{size:17}),n.createElement("input",{type:"search",value:c,onChange:R=>d(R.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(K,{className:"hv-header-icon",to:h?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(br,{size:21})),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${N} items`,title:"Wishlist"},n.createElement(lt,{size:21}),N>0&&n.createElement("span",{className:"hv-count"},N>99?"99+":N)),n.createElement(K,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${k} items`,title:"Shopping Bag"},n.createElement(Tt,{size:21}),k>0&&n.createElement("span",{className:"hv-count"},k>99?"99+":k)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:O},n.createElement(us,{size:17}),n.createElement("input",{type:"search",value:c,onChange:R=>d(R.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(xe,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${o?"show":""}`,onClick:L}),n.createElement("aside",{className:`hv-mobile-drawer ${o?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(K,{to:"/",onClick:L},n.createElement("img",{src:ds,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:L,"aria-label":"Close menu"},n.createElement(ft,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(Cn,{to:"/",end:!0,onClick:L},"Home ",n.createElement(xe,{size:17})),n.createElement(Cn,{to:"/shop",onClick:L},"Shop All ",n.createElement(xe,{size:17})),n.createElement(Cn,{to:"/shop?category=Best%20sellers",onClick:L},"Best Sellers ",n.createElement(xe,{size:17})),n.createElement(Cn,{to:"/about",onClick:L},"Our Story ",n.createElement(xe,{size:17}))),n.createElement("div",{className:"hv-drawer-account"},n.createElement(K,{to:h?"/account":"/login",onClick:L},n.createElement(br,{size:19}),h?"My Account":"Login / Register"),n.createElement(K,{to:"/wishlist",onClick:L},n.createElement(lt,{size:19}),"My Wishlist",N>0&&n.createElement("span",null,N)),n.createElement(K,{to:"/cart",onClick:L},n.createElement(Tt,{size:19}),"My Shopping Bag",k>0&&n.createElement("span",null,k))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Ye,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
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
  font-size: 10px;
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
  height: 68px;
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
  font-size: 11px;
  font-weight: 600;
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
  font-size: 10px;
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

          
          
          `))}function Lg(){const[o,s]=y.useState(""),[c,d]=y.useState(""),p=new Date().getFullYear(),m=v=>{v.preventDefault(),o.trim()&&(d("Thanks for joining the HOVIRA family!"),s(""))},g=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Ye,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(Yo,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:o,onChange:v=>{s(v.target.value),d("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(xe,{size:17}))),c&&n.createElement("p",{className:"hv-footer-success"},n.createElement(lt,{size:14}),c),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Cr,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(At,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(kg,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(K,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(Ng,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(bg,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(K,{to:"/shop"},"Shop All"),n.createElement(K,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(K,{to:"/about"},"Our Story"),n.createElement(K,{to:"/account"},"My Account"),n.createElement(K,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(K,{to:"/privacy"},"Privacy Policy"),n.createElement(K,{to:"/terms"},"Terms & Conditions"),n.createElement(K,{to:"/shipping"},"Shipping Policy"),n.createElement(K,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(gp,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Ye,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",p," HOVIRA Cosmetics. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},"Made with ",n.createElement(lt,{size:13,fill:"currentColor"})," for your everyday ritual."),n.createElement("button",{className:"hv-back-top",onClick:g,"aria-label":"Back to top"},"Back to top",n.createElement(vg,{size:17}))))),n.createElement("style",null,`
        
/* ============================================
   HOVIRA PREMIUM FOOTER
   COMPLETE MERGED CSS
   Theme: Cream, Peach, Brown
============================================ */

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

        `))}function Mg(){return n.createElement(n.Fragment,null,n.createElement(Ig,null),n.createElement("main",null,n.createElement(yh,null)),n.createElement(Lg,null))}function ln({label:o="Loading your essentials..."}){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-state"},n.createElement("div",{className:"loading-content"},n.createElement("div",{className:"loading-animation"},n.createElement("div",{className:"loading-outer-ring"}),n.createElement("div",{className:"loading-middle-ring"}),n.createElement("div",{className:"loading-logo"},n.createElement("img",{src:`${ds}`})),n.createElement("span",{className:"loading-dot dot-one"}),n.createElement("span",{className:"loading-dot dot-two"})),n.createElement("div",{className:"loading-brand"},"HOVIRA",n.createElement("span",null,".")),n.createElement("p",{className:"loading-label"},o),n.createElement("div",{className:"loading-progress"},n.createElement("span",null)),n.createElement("small",{className:"loading-caption"},"A little care is on its way"))),n.createElement("style",null,`
            
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

            `))}function it({title:o,description:s,canonical:c}){return n.createElement(cg,null,n.createElement("title",null,o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:s||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:s||"Thoughtful skincare essentials from HOVIRA."}),c&&n.createElement("link",{rel:"canonical",href:c}))}function Wo({product:o,index:s=0}){var Y,W,ee;const{addToCart:c,toggleWishlist:d,isWishlisted:p}=Gt(),[m,g]=y.useState(!1),v=$o(o),h=Tn(o),w=p(o),k=Number(o.price||0),N=Number(o.salePrice||0),O=o.salePrice!=null&&N>0&&N<k,L=O?Math.round((k-N)/k*100):0,U=Number(o.stock)<=0,R=()=>{U||(c(o),g(!0),setTimeout(()=>{g(!1)},1800))},A=()=>{d(o)},T=typeof o.category=="string"?o.category:((Y=o.category)==null?void 0:Y.name)||"HOVIRA Essentials",_=((ee=(W=o.images)==null?void 0:W.find(oe=>oe.isPrimary))==null?void 0:ee.alt)||o.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${s*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(K,{to:ga(o),className:"hv-product-image","aria-label":`View ${o.name}`},v?n.createElement("img",{src:v,alt:_,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Ye,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},U?n.createElement("span",{className:"hv-soldout-badge"},"Sold Out"):O?n.createElement("span",{className:"hv-sale-badge"},L,"% OFF"):o.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Ye,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${w?"wish-active":""}`,onClick:A,"aria-label":w?"Remove from wishlist":"Add to wishlist",title:w?"Remove from wishlist":"Add to wishlist"},n.createElement(lt,{size:18,fill:w?"currentColor":"none"})),n.createElement(K,{to:ga(o),className:"hv-quick-view","aria-label":`View details of ${o.name}`},n.createElement(jo,{size:16}),"Quick View",n.createElement(gp,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},T),o.isFeatured&&!U&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Ye,{size:11}),"Favourite")),n.createElement(K,{to:ga(o),className:"hv-product-name"},o.name),o.shortDescription&&n.createElement("p",{className:"hv-product-description"},o.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,Ue(h,o.currency||"INR")),O&&n.createElement("del",null,Ue(k,o.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""}`,onClick:R,disabled:U},U?n.createElement(n.Fragment,null,"Sold Out"):m?n.createElement(n.Fragment,null,n.createElement(Yn,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Tt,{size:15}),"Add"))))),n.createElement("style",null,`

        
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
  object-fit: cover;
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
  font-size: 19px;
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
  font-size: 10px;
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

        `))}function $t({type:o="error",children:s,onClose:c}){return s?n.createElement("div",{className:`notice ${o}`,role:"status"},o==="success"?n.createElement(Ke,{size:18}):n.createElement(xg,{size:18}),n.createElement("span",null,s),c&&n.createElement("button",{onClick:c,"aria-label":"Dismiss"},n.createElement(ft,{size:16}))):null}function _g(){const[o,s]=y.useState([]),[c,d]=y.useState(!0),[p,m]=y.useState(""),[g,v]=y.useState(0),[h,w]=y.useState(""),[k,N]=y.useState(""),[O,L]=y.useState(!1);y.useEffect(()=>{let T=!0;return(async()=>{d(!0),m("");try{const Y=await Ie.products();if(T){const W=Array.isArray(Y)?Y.filter(ee=>ee.isActive!==!1):[];s(W)}}catch(Y){T&&m(Y.message||"Unable to load products.")}finally{T&&d(!1)}})(),()=>{T=!1}},[g]);const U=y.useMemo(()=>{const T=o.filter(_=>_.isFeatured);return(T.length?T:o).slice(0,4)},[o]),R=async T=>{if(T.preventDefault(),!!h.trim()){L(!0),N("");try{N("success"),w("")}catch{N("error")}finally{L(!1)}}},A=[{icon:n.createElement(wr,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(Ld,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(At,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(lt,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(it,{title:"HOVIRA Cosmetics | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Ye,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(K,{to:"/shop"},"Explore HOVIRA ",n.createElement(xe,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Ye,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(xe,{size:18})),n.createElement(K,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(Cg,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(wr,{size:17})),n.createElement("span",null,n.createElement(Ld,{size:17})),n.createElement("span",null,n.createElement(lt,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("div",{className:"hv-image-circle circle-a"}),n.createElement("div",{className:"hv-image-circle circle-b"}),n.createElement("div",{className:"hv-floating-card floating-card-one"},n.createElement(wp,{size:19}),n.createElement("span",null,"Daily Glow")),n.createElement("div",{className:"hv-product-art"},n.createElement("div",{className:"hv-art-shadow"}),n.createElement("div",{className:"hv-art-cap"}),n.createElement("div",{className:"hv-art-neck"}),n.createElement("div",{className:"hv-art-bottle"},n.createElement("div",{className:"hv-art-bottle-content"},n.createElement("span",{className:"hv-art-brand"},"HOVIRA"),n.createElement("span",{className:"hv-art-line"}),n.createElement("small",null,"DAILY"),n.createElement("strong",null,"GLOW"),n.createElement("small",null,"SERUM"),n.createElement("span",{className:"hv-art-volume"},"30 ML")))),n.createElement("div",{className:"hv-floating-card floating-card-two"},n.createElement(Md,{size:19}),n.createElement("span",null,"Self Love Ritual"))),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},A.map((T,_)=>n.createElement("div",{className:"hv-benefit",key:_},n.createElement("div",{className:"hv-benefit-icon"},T.icon),n.createElement("div",null,n.createElement("h3",null,T.title),n.createElement("p",null,T.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(K,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(xe,{size:17}))),p&&n.createElement("div",{className:"hv-error"},n.createElement($t,null,p),n.createElement("button",{className:"hv-retry-btn",onClick:()=>v(T=>T+1)},n.createElement(cs,{size:15})," Try Again")),c?n.createElement("div",{className:"hv-loading"},n.createElement(ln,null)):U.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},U.map((T,_)=>n.createElement("div",{className:"hv-product-item",key:T._id||T.slug,style:{"--item-index":_}},n.createElement(Wo,{product:T,index:_})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(xe,{size:17})))):p?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(Md,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(xe,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(xe,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(lt,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(K,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(xe,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(wr,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(lt,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Ye,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-newsletter"},n.createElement("div",{className:"hv-newsletter-decoration"},"✳"),n.createElement("div",{className:"hv-newsletter-inner"},n.createElement("div",{className:"hv-newsletter-icon"},n.createElement(Yo,{size:25})),n.createElement("span",{className:"hv-section-label"},"A LITTLE NOTE FROM HOVIRA"),n.createElement("h2",null,"Good things are",n.createElement("br",null),n.createElement("em",null,"worth sharing.")),n.createElement("p",null,"Get skincare inspiration, new collection updates and little reminders to make time for yourself."),n.createElement("form",{className:"hv-newsletter-form",onSubmit:R},n.createElement("input",{type:"email",value:h,onChange:T=>{w(T.target.value),N("")},placeholder:"Enter your email address","aria-label":"Email address",required:!0}),n.createElement("button",{type:"submit",disabled:O,className:"hv-newsletter-button"},O?"Please wait...":"Join Us",n.createElement(xe,{size:17}))),k==="success"&&n.createElement("div",{className:"hv-newsletter-success"},n.createElement(Ke,{size:17}),"Thanks for your interest! Newsletter integration is ready to be connected to your backend."),k==="error"&&n.createElement("div",{className:"hv-newsletter-error"},"Something went wrong. Please try again."),n.createElement("small",null,"No spam. Just a little goodness."))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(K,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(xe,{size:18}))),n.createElement("style",null,`

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
  font-size: 11px;
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
  font-size: 12px;
  color: var(--hv-dark);
}

.hv-hero-bottom small {
  font-size: 10px;
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
  font-size: 12px;
  margin: 0 0 5px;
}

.hv-benefit p {
  color: var(--hv-muted);
  font-size: 10px;
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


  
  `))}function jg(){const[o,s]=Ih(),[c,d]=y.useState([]),[p,m]=y.useState(!0),[g,v]=y.useState(""),[h,w]=y.useState(o.get("search")||""),[k,N]=y.useState(o.get("category")||"all"),[O,L]=y.useState("featured"),[U,R]=y.useState(""),[A,T]=y.useState(!1),[_,Y]=y.useState(!1);y.useEffect(()=>{let j=!0;return(async()=>{m(!0),v("");try{const ae=await Ie.products();if(j){const he=Array.isArray(ae)?ae.filter(be=>be.isActive!==!1):[];d(he)}}catch(ae){j&&v(ae.message||"Unable to load products.")}finally{j&&m(!1)}})(),()=>{j=!1}},[]),y.useEffect(()=>{w(o.get("search")||""),N(o.get("category")||"all")},[o]),y.useEffect(()=>(document.body.style.overflow=_?"hidden":"",()=>{document.body.style.overflow=""}),[_]);const W=y.useMemo(()=>[...new Set(c.map(j=>{var ge;return typeof j.category=="string"?j.category:(ge=j.category)==null?void 0:ge.name}).filter(Boolean))].sort((j,ge)=>j.localeCompare(ge)),[c]),ee=y.useMemo(()=>{let j=[...c];const ge=h.toLowerCase().trim();return ge&&(j=j.filter(ae=>{var $;const he=typeof ae.category=="string"?ae.category:(($=ae.category)==null?void 0:$.name)||"";return[ae.name,ae.shortDescription,ae.description,he,ae.brand,...ae.tags||[]].join(" ").toLowerCase().includes(ge)})),k!=="all"&&(j=j.filter(ae=>{var be;return(typeof ae.category=="string"?ae.category:((be=ae.category)==null?void 0:be.name)||"").toLowerCase()===k.toLowerCase()})),U!==""&&(j=j.filter(ae=>Number(ae.salePrice??ae.price)<=Number(U))),A&&(j=j.filter(ae=>Number(ae.stock)>0)),O==="price-low"&&j.sort((ae,he)=>Number(ae.salePrice??ae.price)-Number(he.salePrice??he.price)),O==="price-high"&&j.sort((ae,he)=>Number(he.salePrice??he.price)-Number(ae.salePrice??ae.price)),O==="name"&&j.sort((ae,he)=>(ae.name||"").localeCompare(he.name||"")),O==="newest"&&j.sort((ae,he)=>new Date(he.createdAt||0)-new Date(ae.createdAt||0)),O==="featured"&&j.sort((ae,he)=>Number(he.isFeatured)-Number(ae.isFeatured)),j},[c,h,k,U,A,O]),oe=[h.trim()!=="",k!=="all",U!=="",A].filter(Boolean).length,ye=(j,ge)=>{const ae={};j.trim()&&(ae.search=j.trim()),ge!=="all"&&(ae.category=ge),s(ae)},le=()=>{w(""),N("all"),R(""),T(!1),L("featured"),s({})},Ne=j=>{j==="search"&&(w(""),ye("",k)),j==="category"&&(N("all"),ye(h,"all")),j==="price"&&R(""),j==="stock"&&T(!1)},G=j=>{N(j),ye(h,j)},ke=j=>{w(j),ye(j,k)},Re=()=>Y(!1);return n.createElement(n.Fragment,null,n.createElement(it,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(K,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Ye,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(wr,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:k==="all"?"active":"",onClick:()=>G("all")},"All Products",k==="all"&&n.createElement(Yn,{size:14})),W.map(j=>n.createElement("button",{key:j,className:k===j?"active":"",onClick:()=>G(j)},j,k===j&&n.createElement(Yn,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${_?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:le},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Re,"aria-label":"Close filters"},n.createElement(ft,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(us,{size:17}),n.createElement("input",{type:"search",value:h,onChange:j=>ke(j.target.value),placeholder:"Try serum, cleanser..."}),h&&n.createElement("button",{type:"button",onClick:()=>Ne("search"),"aria-label":"Clear search"},n.createElement(ft,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:k==="all",onChange:()=>G("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,c.length)),W.map(j=>n.createElement("label",{className:"hv-filter-option",key:j},n.createElement("input",{type:"radio",checked:k===j,onChange:()=>G(j)}),n.createElement("span",null,j),n.createElement("i",null,c.filter(ge=>{var he;return(typeof ge.category=="string"?ge.category:(he=ge.category)==null?void 0:he.name)===j}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:U,onChange:j=>R(j.target.value),placeholder:"Enter maximum price"}),U&&n.createElement("button",{type:"button",onClick:()=>Ne("price"),"aria-label":"Clear maximum price"},n.createElement(ft,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:A,onChange:j=>T(j.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:le},n.createElement(_d,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Re},"Show ",ee.length," Products",n.createElement(xe,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>Y(!0)},n.createElement(Rg,{size:16}),"Filters",oe>0&&n.createElement("span",null,oe)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,p?"...":ee.length),n.createElement("span",null,ee.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(fg,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:O,onChange:j=>L(j.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(gg,{size:14}))),oe>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),h&&n.createElement("button",{onClick:()=>Ne("search")},"Search: ",h,n.createElement(ft,{size:13})),k!=="all"&&n.createElement("button",{onClick:()=>Ne("category")},k,n.createElement(ft,{size:13})),U&&n.createElement("button",{onClick:()=>Ne("price")},"Under ₹",U,n.createElement(ft,{size:13})),A&&n.createElement("button",{onClick:()=>Ne("stock")},"In stock",n.createElement(ft,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:le},"Clear all")),g&&n.createElement("div",{className:"hv-shop-error"},n.createElement($t,null,g)),p?n.createElement("div",{className:"hv-shop-loading"},n.createElement(ln,null)):ee.length>0?n.createElement("div",{className:"hv-shop-product-grid"},ee.map((j,ge)=>n.createElement(Wo,{key:j._id||j.slug,product:j,index:ge}))):g?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Tt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:le},n.createElement(_d,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Ye,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(K,{to:"/about"},"Discover HOVIRA ",n.createElement(xe,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${_?"show":""}`,"aria-label":"Close filters",onClick:Re}),n.createElement("style",null,`
          
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

          `))}function Bg(){var F,b,P,pe,fe,H,J,te,ue,Ee,ve,_e;const{slugOrId:o}=ep(),[s,c]=y.useState(null),[d,p]=y.useState([]),[m,g]=y.useState(!0),[v,h]=y.useState(""),[w,k]=y.useState(1),[N,O]=y.useState(0),[L,U]=y.useState(""),[R,A]=y.useState(!1),[T,_]=y.useState(!1),{addToCart:Y,toggleWishlist:W,isWishlisted:ee}=Gt();y.useEffect(()=>{let q=!0;return g(!0),h(""),c(null),O(0),U(""),k(1),A(!1),_(!1),Promise.all([Ie.product(o),Ie.products()]).then(([de,yt])=>{q&&(c(de),p(yt))}).catch(de=>{q&&h(de.message)}).finally(()=>{q&&g(!1)}),()=>{q=!1}},[o]);const oe=y.useMemo(()=>{if(!s)return[];const q=(s.images||[]).map(de=>({url:typeof de=="string"?de:de==null?void 0:de.url,alt:typeof de=="string"?s.name:de==null?void 0:de.alt})).filter(de=>de.url);if(!q.length){const de=$o(s);return de?[{url:de,alt:s.name}]:[]}return q},[s]),ye=((F=oe[N])==null?void 0:F.url)||"";y.useEffect(()=>{if(!T)return;const q=de=>{de.key==="Escape"&&_(!1),de.key==="ArrowRight"&&oe.length>1&&O(yt=>(yt+1)%oe.length),de.key==="ArrowLeft"&&oe.length>1&&O(yt=>yt===0?oe.length-1:yt-1)};return document.addEventListener("keydown",q),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",q),document.body.style.overflow=""}},[T,oe.length]);const le=s?Tn(s):0,Ne=Number((s==null?void 0:s.price)||0),G=(s==null?void 0:s.salePrice)!=null&&Ne>le&&le>0,ke=G?Math.round((Ne-le)/Ne*100):0,Re=(b=s==null?void 0:s.variants)==null?void 0:b.find(q=>q.value===L),j=Number(Re?Re.stock||0:(s==null?void 0:s.stock)||0),ge=typeof(s==null?void 0:s.category)=="object"?((P=s.category)==null?void 0:P.name)||"HOVIRA ESSENTIALS":(s==null?void 0:s.category)||"HOVIRA ESSENTIALS",ae=q=>q?String(typeof q=="object"?q._id||q.id||q.name||"":q):"",he=y.useMemo(()=>{if(!s)return[];const q=ae(s.category);return d.filter(de=>{const yt=ae(de.category)===q;return de._id!==s._id&&yt&&de.isActive!==!1}).slice(0,4)},[d,s]),be=()=>{var q;((q=s.variants)==null?void 0:q.length)>0&&!L||j<=0||(Y(s,w,L),A(!0),setTimeout(()=>{A(!1)},2e3))},$=q=>{k(de=>Math.max(1,Math.min(99,de+q)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(ln,{label:"Finding your product..."}));if(v||!s)return n.createElement("div",{className:"page-shell pd-error"},n.createElement($t,null,v||"We couldn't find this product."),n.createElement(K,{to:"/shop",className:"pd-back-link"},n.createElement(Vt,{size:17}),"Back to shop"));const D=ee(s);return n.createElement(n.Fragment,null,n.createElement(it,{title:((pe=s.seo)==null?void 0:pe.metaTitle)||s.name,description:((fe=s.seo)==null?void 0:fe.metaDescription)||s.shortDescription||s.description,canonical:((H=s.seo)==null?void 0:H.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(K,{to:"/"},"Home"),n.createElement(_o,{size:14}),n.createElement(K,{to:"/shop"},"Shop"),n.createElement(_o,{size:14}),n.createElement("span",null,s.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},ye?n.createElement("img",{src:ye,alt:((J=oe[N])==null?void 0:J.alt)||s.name,key:ye,onClick:()=>_(!0),className:"pd-zoomable-image",title:"Click to zoom"}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Ye,{size:38}),n.createElement("span",null,"HOVIRA")),ye&&n.createElement("button",{type:"button",className:"pd-zoom-trigger",onClick:()=>_(!0),"aria-label":"Zoom product image"},n.createElement(Dg,{size:16}),n.createElement("span",null,"Click to zoom")),s.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Ye,{size:13}),"HOVIRA Favourite"),G&&n.createElement("span",{className:"pd-discount-badge"},ke,"% OFF"),oe.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>O(q=>q===0?oe.length-1:q-1),"aria-label":"Previous image"},n.createElement(Vt,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>O(q=>(q+1)%oe.length),"aria-label":"Next image"},n.createElement(xe,{size:18})))),oe.length>1&&n.createElement("div",{className:"pd-thumbnails"},oe.map((q,de)=>n.createElement("button",{key:`${q.url}-${de}`,className:N===de?"active":"",onClick:()=>O(de),"aria-label":`View image ${de+1}`},n.createElement("img",{src:q.url,alt:q.alt||`${s.name} ${de+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Ye,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},ge),n.createElement("h1",null,s.name),s.shortDescription&&n.createElement("p",{className:"pd-short-description"},s.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},Ue(le,s.currency||"INR")),G&&n.createElement(n.Fragment,null,n.createElement("del",null,Ue(Ne,s.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",ke,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((te=s.variants)==null?void 0:te.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),L&&n.createElement("span",null,L)),n.createElement("div",{className:"pd-variant-list"},s.variants.map(q=>n.createElement("button",{type:"button",key:q._id||q.sku||q.value,disabled:q.stock===0,className:L===q.value?"selected":"",onClick:()=>U(q.value)},n.createElement("span",null,q.name,": ",q.value),L===q.value&&n.createElement(Yn,{size:16}),q.stock===0&&n.createElement("small",null,"Sold out")))),s.variants.length>0&&!L&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},j>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>$(-1),disabled:w<=1,"aria-label":"Decrease quantity"},n.createElement(yp,{size:16})),n.createElement("span",null,w),n.createElement("button",{type:"button",onClick:()=>$(1),disabled:w>=99||w>=j,"aria-label":"Increase quantity"},n.createElement(Nr,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:j<=0||((ue=s.variants)==null?void 0:ue.length)>0&&!L,onClick:be},R?n.createElement(n.Fragment,null,n.createElement(Yn,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Tt,{size:19}),j<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${D?"active":""}`,onClick:()=>W(s),"aria-label":"Toggle wishlist"},n.createElement(lt,{size:21,fill:D?"currentColor":"none"}))),j>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(hs,{size:15}),j," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Cr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(At,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(wr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:s.content||s.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(Ee=s.ingredients)!=null&&Ee.length?n.createElement("ul",{className:"pd-chip-list"},s.ingredients.map((q,de)=>n.createElement("li",{key:`${q}-${de}`},n.createElement(Yn,{size:14}),q))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(ve=s.benefits)!=null&&ve.length?n.createElement("ul",{className:"pd-benefit-list"},s.benefits.map((q,de)=>n.createElement("li",{key:`${q}-${de}`},n.createElement("span",null,n.createElement(Yn,{size:15})),q))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),s.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,s.howToUse)),s.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,s.warnings)))))),he.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(K,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(xe,{size:17}))),n.createElement("div",{className:"product-grid"},he.map((q,de)=>n.createElement(Wo,{key:q._id||q.slug,product:q,index:de})))),T&&ye&&n.createElement("div",{className:"pd-zoom-overlay",role:"dialog","aria-modal":"true","aria-label":"Product image zoom",onClick:()=>_(!1)},n.createElement("button",{type:"button",className:"pd-zoom-close",onClick:()=>_(!1),"aria-label":"Close image zoom"},n.createElement(ft,{size:23})),oe.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-prev",onClick:q=>{q.stopPropagation(),O(de=>de===0?oe.length-1:de-1)},"aria-label":"Previous image"},n.createElement(Vt,{size:22})),n.createElement("button",{type:"button",className:"pd-zoom-nav pd-zoom-next",onClick:q=>{q.stopPropagation(),O(de=>(de+1)%oe.length)},"aria-label":"Next image"},n.createElement(xe,{size:22}))),n.createElement("div",{className:"pd-zoom-content",onClick:q=>q.stopPropagation()},n.createElement("img",{src:ye,alt:((_e=oe[N])==null?void 0:_e.alt)||s.name}),n.createElement("div",{className:"pd-zoom-caption"},s.name,oe.length>1&&n.createElement("span",null,N+1," / ",oe.length)))),n.createElement("style",null,`
          
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

          `))}function Ug(){const[o,s]=y.useState({email:"",password:""}),[c,d]=y.useState(!1),[p,m]=y.useState(""),[g,v]=y.useState(!1),{setCustomer:h}=Gt(),w=on(),k=Wt(),N=L=>{s(U=>({...U,[L.target.name]:L.target.value}))},O=async L=>{var U,R,A;L.preventDefault(),m(""),v(!0);try{const T=await Ie.login(o),_=T.token||T.accessToken||((U=T.data)==null?void 0:U.token)||((R=T.data)==null?void 0:R.accessToken);if(!_)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");mp(_);const Y=St(T,["customer","user","profile"])||await Ie.me();h(Y),w(((A=k.state)==null?void 0:A.from)||"/account",{replace:!0})}catch(T){m((T==null?void 0:T.message)||"We couldn't sign you in. Please try again.")}finally{v(!1)}};return n.createElement(n.Fragment,null,n.createElement(it,{title:"Sign In to Your HOVIRA Account | Secure Skincare Shopping",description:"Sign in securely to your HOVIRA account to manage your profile, wishlist, orders and skincare purchases."}),n.createElement("main",{className:"login-page"},n.createElement("section",{className:"login-shell"},n.createElement("aside",{className:"login-visual"},n.createElement("div",{className:"login-visual-top"},n.createElement(K,{to:"/",className:"login-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"login-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"login-visual-tag"},n.createElement(Ye,{size:13})," YOUR DAILY RITUAL")),n.createElement("div",{className:"login-visual-content"},n.createElement("span",{className:"login-visual-kicker"},"A MOMENT FOR YOU"),n.createElement("h1",null,"Care that feels",n.createElement("br",null),n.createElement("em",null,"like coming home.")),n.createElement("p",null,"Your HOVIRA favourites, thoughtful essentials and personal skincare journey are just a sign in away."),n.createElement("div",{className:"login-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Keep your favourites close"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Follow your orders with ease"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Enjoy a personal shopping experience"))),n.createElement("div",{className:"login-visual-footer"},n.createElement("div",{className:"login-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"login-orbit orbit-a"}),n.createElement("div",{className:"login-orbit orbit-b"}),n.createElement("div",{className:"login-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"login-orbit-dot dot-a"}),n.createElement("i",{className:"login-orbit-dot dot-b"})),n.createElement("div",{className:"login-visual-note"},n.createElement(At,{size:16}),n.createElement("span",null,"Thoughtful care. A considered experience.")))),n.createElement("section",{className:"login-panel"},n.createElement("div",{className:"login-panel-top"},n.createElement("span",{className:"login-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"login-secure-label"},n.createElement(rn,{size:13})," SECURE SIGN IN")),n.createElement("div",{className:"login-heading"},n.createElement("span",{className:"login-eyebrow"},"WELCOME BACK"),n.createElement("h2",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to pick up where your self-care left off.")),p&&n.createElement("div",{className:"login-error",role:"alert"},n.createElement($t,null,p)),n.createElement("form",{className:"login-form",onSubmit:O},n.createElement("label",{className:"login-field"},n.createElement("span",null,"Email address"),n.createElement("input",{name:"email",type:"email",autoComplete:"email",inputMode:"email",required:!0,value:o.email,onChange:N,placeholder:"you@example.com"})),n.createElement("label",{className:"login-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"login-password-wrap"},n.createElement("input",{name:"password",type:c?"text":"password",autoComplete:"current-password",required:!0,value:o.password,onChange:N,placeholder:"Enter your password"}),n.createElement("button",{type:"button",className:"login-eye-btn",onClick:()=>d(L=>!L),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ss,{size:17}):n.createElement(jo,{size:17})))),n.createElement("div",{className:"login-form-meta"},n.createElement("span",null,n.createElement(rn,{size:13})," Your account is protected")),n.createElement("button",{className:"login-submit",type:"submit",disabled:g},n.createElement("span",null,g?"Signing you in…":"Sign in to HOVIRA"),g?n.createElement("span",{className:"login-spinner"}):n.createElement(xe,{size:17}))),n.createElement("div",{className:"login-divider"},n.createElement("span",null,"NEW TO HOVIRA?")),n.createElement(K,{to:"/signup",className:"login-create-account"},"Create your account ",n.createElement(xe,{size:15})),n.createElement("div",{className:"login-trust"},n.createElement("div",{className:"login-trust-icon"},n.createElement(xp,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"We use your account information to manage your shopping experience and orders."))),n.createElement("p",{className:"login-legal"},"By continuing, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"login-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          
          `))}function Bd(){const[o,s]=y.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[c,d]=y.useState(!1),[p,m]=y.useState(!1),[g,v]=y.useState(""),[h,w]=y.useState(!1),{setCustomer:k}=Gt(),N=on(),O=R=>{const{name:A,value:T,type:_,checked:Y}=R.target;s(W=>({...W,[A]:_==="checkbox"?Y:T}))},L=y.useMemo(()=>{const R=o.password;if(!R)return{score:0,label:"Use at least 8 characters"};let A=0;return R.length>=8&&A++,/[A-Z]/.test(R)&&A++,/[a-z]/.test(R)&&A++,/[0-9]/.test(R)&&A++,/[^A-Za-z0-9]/.test(R)&&A++,A<=2?{score:1,label:"Could be stronger"}:A<=4?{score:2,label:"Good password"}:{score:3,label:"Strong password"}},[o.password]),U=async R=>{var A,T;if(R.preventDefault(),v(""),o.password.length<8){v("Password must be at least 8 characters.");return}if(o.password!==o.confirmPassword){v("Your passwords do not match.");return}w(!0);try{const{confirmPassword:_,...Y}=o,W=await Ie.register(Y),ee=W.token||W.accessToken||((A=W.data)==null?void 0:A.token)||((T=W.data)==null?void 0:T.accessToken);ee?(mp(ee),k(St(W,["customer","user","profile"])||await Ie.me()),N("/account")):N("/login",{state:{registered:!0}})}catch(_){v((_==null?void 0:_.message)||"We couldn't create your account. Please try again.")}finally{w(!1)}};return n.createElement(n.Fragment,null,n.createElement(it,{title:"Create Your HOVIRA Account | Join Our Skincare Community",description:"Create your HOVIRA account for a more personal skincare shopping experience. Save favourites, manage your orders and explore thoughtful skincare essentials."}),n.createElement("main",{className:"register-page"},n.createElement("section",{className:"register-shell"},n.createElement("aside",{className:"register-visual"},n.createElement("div",{className:"register-visual-top"},n.createElement(K,{to:"/",className:"register-brand","aria-label":"HOVIRA home"},n.createElement("span",{className:"register-brand-mark"},"H"),n.createElement("span",null,"HOVIRA")),n.createElement("span",{className:"register-visual-tag"},n.createElement(Ye,{size:13})," YOUR SKIN, YOUR RITUAL")),n.createElement("div",{className:"register-visual-content"},n.createElement("span",{className:"register-visual-kicker"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Make room for",n.createElement("br",null),n.createElement("em",null,"a little care.")),n.createElement("p",null,"Create your personal space for thoughtful skincare, favourite finds and a smoother shopping experience."),n.createElement("div",{className:"register-benefit-list"},n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Save products you love"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Keep track of every order"),n.createElement("div",null,n.createElement("span",null,n.createElement(Ke,{size:15}))," Make every visit feel personal"))),n.createElement("div",{className:"register-visual-footer"},n.createElement("div",{className:"register-orbit-art","aria-hidden":"true"},n.createElement("div",{className:"register-orbit orbit-a"}),n.createElement("div",{className:"register-orbit orbit-b"}),n.createElement("div",{className:"register-orbit-center"},n.createElement("span",null,"H"),n.createElement("small",null,"HOVIRA")),n.createElement("i",{className:"register-orbit-dot dot-a"}),n.createElement("i",{className:"register-orbit-dot dot-b"})),n.createElement("div",{className:"register-visual-note"},n.createElement(At,{size:16}),n.createElement("span",null,"A more considered way to shop.")))),n.createElement("section",{className:"register-panel"},n.createElement("div",{className:"register-panel-top"},n.createElement("span",{className:"register-mobile-brand"},"HOVIRA"),n.createElement("span",{className:"register-secure-label"},n.createElement(rn,{size:13})," CREATE ACCOUNT")),n.createElement("div",{className:"register-heading"},n.createElement("span",{className:"register-eyebrow"},"WELCOME TO HOVIRA"),n.createElement("h2",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Your little corner for thoughtful skincare starts here.")),g&&n.createElement("div",{className:"register-error",role:"alert"},n.createElement($t,null,g)),n.createElement("form",{className:"register-form",onSubmit:U},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Full name"),n.createElement("div",{className:"register-input-wrap"},n.createElement(br,{size:16}),n.createElement("input",{name:"name",type:"text",required:!0,maxLength:100,value:o.name,onChange:O,placeholder:"Your full name",autoComplete:"name"}))),n.createElement("div",{className:"register-form-two"},n.createElement("label",{className:"register-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"register-input-wrap"},n.createElement(Yo,{size:16}),n.createElement("input",{name:"email",type:"email",required:!0,value:o.email,onChange:O,placeholder:"you@example.com",autoComplete:"email",inputMode:"email"}))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Phone ",n.createElement("small",null,"Optional")),n.createElement("div",{className:"register-input-wrap"},n.createElement(Ep,{size:16}),n.createElement("input",{name:"phone",type:"tel",value:o.phone,onChange:O,placeholder:"Phone number",autoComplete:"tel",inputMode:"tel"})))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(rn,{size:16}),n.createElement("input",{name:"password",type:c?"text":"password",required:!0,minLength:8,value:o.password,onChange:O,placeholder:"Create a password",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>d(R=>!R),"aria-label":c?"Hide password":"Show password"},c?n.createElement(ss,{size:16}):n.createElement(jo,{size:16}))),n.createElement("div",{className:"register-strength","aria-live":"polite"},n.createElement("div",{className:"register-strength-bars"},[1,2,3].map(R=>n.createElement("span",{key:R,className:L.score>=R?`active strength-${L.score}`:""}))),n.createElement("small",null,L.label))),n.createElement("label",{className:"register-field"},n.createElement("span",null,"Confirm password"),n.createElement("div",{className:"register-input-wrap register-password-wrap"},n.createElement(rn,{size:16}),n.createElement("input",{name:"confirmPassword",type:p?"text":"password",required:!0,value:o.confirmPassword,onChange:O,placeholder:"Enter your password again",autoComplete:"new-password"}),n.createElement("button",{type:"button",className:"register-eye-btn",onClick:()=>m(R=>!R),"aria-label":p?"Hide confirm password":"Show confirm password"},p?n.createElement(ss,{size:16}):n.createElement(jo,{size:16}))),o.confirmPassword&&n.createElement("small",{className:`register-match ${o.password===o.confirmPassword?"matched":"not-matched"}`},o.password===o.confirmPassword?"Passwords match":"Passwords do not match yet")),n.createElement("label",{className:"register-optin"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:o.marketingOptIn,onChange:O}),n.createElement("span",{className:"register-custom-check"},n.createElement(Ke,{size:13})),n.createElement("span",null,"Send me occasional HOVIRA updates and skincare news.")),n.createElement("button",{className:"register-submit",type:"submit",disabled:h},n.createElement("span",null,h?"Creating your account…":"Create my account"),h?n.createElement("span",{className:"register-spinner"}):n.createElement(xe,{size:17}))),n.createElement("div",{className:"register-login-prompt"},"Already have an account? ",n.createElement(K,{to:"/login"},"Sign in")),n.createElement("div",{className:"register-trust"},n.createElement("div",{className:"register-trust-icon"},n.createElement(xp,{size:19})),n.createElement("div",null,n.createElement("strong",null,"Your details stay yours"),n.createElement("p",null,"Your information helps us manage your account and shopping experience."))),n.createElement("p",{className:"register-legal"},"By creating an account, you agree to our ",n.createElement(K,{to:"/terms"},"Terms")," and ",n.createElement(K,{to:"/privacy"},"Privacy Policy"),"."))),n.createElement("footer",{className:"register-page-footer"},n.createElement("span",null,"© ",new Date().getFullYear()," HOVIRA"),n.createElement("span",null,"THOUGHTFUL SKINCARE, EVERY DAY."))),n.createElement("style",null,`
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

          `))}function Hg(){const{cart:o,updateQuantity:s,removeFromCart:c}=Gt(),d=on(),p=y.useMemo(()=>o.reduce((v,h)=>v+h.quantity,0),[o]),m=y.useMemo(()=>o.reduce((v,h)=>v+Tn(h.product)*h.quantity,0),[o]),g=(v,h)=>{const w=v.quantity+h;w<1||s(v.key,w)};return n.createElement(n.Fragment,null,n.createElement(it,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,p," ",p===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Tt,{size:28}))),o.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,p," items in your shopping bag")),n.createElement(K,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(xe,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},o.map(v=>{var N;const h=v.product,w=Tn(h),k=$o(h);return n.createElement("article",{className:"hv-cart-item",key:v.key},n.createElement(K,{to:ga(h),className:"hv-cart-product-image"},k?n.createElement("img",{src:k,alt:h.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof h.category=="object"?((N=h.category)==null?void 0:N.name)||"HOVIRA":h.category||"HOVIRA"),n.createElement(K,{to:ga(h),className:"hv-cart-product-name"},h.name),v.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",v.variant),n.createElement("span",{className:"hv-cart-product-price"},Ue(w,h.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>c(v.key)},n.createElement(bp,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>g(v,-1),disabled:v.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(yp,{size:14})),n.createElement("span",null,v.quantity),n.createElement("button",{type:"button",onClick:()=>g(v,1),"aria-label":"Increase quantity"},n.createElement(Nr,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},Ue(w*v.quantity,h.currency||"INR")))})),n.createElement(K,{to:"/shop",className:"hv-cart-continue-link"},n.createElement(Vt,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Tt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,p)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Ue(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,Ue(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>d("/checkout")},"Continue to checkout",n.createElement(xe,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(At,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(hs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Tt,{size:34}),n.createElement(Ye,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(K,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(xe,{size:17}))))),n.createElement("style",null,`
          
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

          `))}function Vg(){const o=Gt(),s=Array.isArray(o==null?void 0:o.wishlist)?o.wishlist:[],c=y.useMemo(()=>`${s.length} ${s.length===1?"piece":"pieces"} saved`,[s.length]);return n.createElement(n.Fragment,null,n.createElement(it,{title:"Your Wishlist | HOVIRA",description:"Your favourite HOVIRA skincare essentials, all saved in one place."}),n.createElement("main",{className:"page-shell standard-page wishlist-page"},n.createElement("section",{className:"wishlist-hero"},n.createElement("div",{className:"wishlist-hero-copy"},n.createElement("span",{className:"wishlist-eyebrow"},n.createElement(Ye,{size:13})," SAVED WITH LOVE"),n.createElement("h1",null,"Your little list of ",n.createElement("em",null,"lovely things.")),n.createElement("p",null,"All the skincare you’ve had your eye on, gathered in one beautiful place."),n.createElement("div",{className:"wishlist-count"},n.createElement("span",{className:"wishlist-count-icon"},n.createElement(lt,{size:15})),n.createElement("span",null,c))),n.createElement("div",{className:"wishlist-hero-art","aria-hidden":"true"},n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-one"}),n.createElement("div",{className:"wishlist-art-circle wishlist-art-circle-two"}),n.createElement("div",{className:"wishlist-art-heart"},n.createElement(lt,{size:62,strokeWidth:1.1})),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-one"},"✦"),n.createElement("span",{className:"wishlist-art-spark wishlist-art-spark-two"},"✧"),n.createElement("span",{className:"wishlist-art-caption"},"A little self-love",n.createElement("br",null),"goes a long way"))),s.length>0?n.createElement("section",{className:"wishlist-products-section"},n.createElement("div",{className:"wishlist-section-heading"},n.createElement("div",null,n.createElement("span",{className:"wishlist-eyebrow"},"YOUR COLLECTION"),n.createElement("h2",null,"Favourites, ",n.createElement("em",null,"for later."))),n.createElement(K,{to:"/shop",className:"wishlist-text-link"},"Discover more ",n.createElement(xe,{size:15}))),n.createElement("div",{className:"product-grid wishlist-product-grid"},s.map((d,p)=>n.createElement(Wo,{key:d._id||d.slug||p,product:d,index:p}))),n.createElement("div",{className:"wishlist-bottom-note"},n.createElement(lt,{size:17}),n.createElement("span",null,"Your saved pieces are waiting right here whenever you need them."),n.createElement(K,{to:"/shop"},"Keep exploring ",n.createElement(xe,{size:14})))):n.createElement("section",{className:"wishlist-empty"},n.createElement("div",{className:"wishlist-empty-visual"},n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-one"}),n.createElement("div",{className:"wishlist-empty-orbit wishlist-empty-orbit-two"}),n.createElement("div",{className:"wishlist-empty-heart"},n.createElement(lt,{size:48,strokeWidth:1.2})),n.createElement("span",{className:"wishlist-empty-star star-one"},"✦"),n.createElement("span",{className:"wishlist-empty-star star-two"},"✧")),n.createElement("span",{className:"wishlist-eyebrow"},"YOUR FAVOURITES LIVE HERE"),n.createElement("h2",null,"A little space for",n.createElement("br",null),n.createElement("em",null,"your favourites.")),n.createElement("p",null,"When something catches your eye, tap its heart to save it here. Your next favourite might be just a browse away."),n.createElement(K,{to:"/shop",className:"wishlist-shop-button"},n.createElement(Tt,{size:16})," Explore the collection ",n.createElement(xe,{size:16})),n.createElement("div",{className:"wishlist-empty-footnote"},n.createElement(Ag,{size:14})," Your wishlist is ready for a little love."))),n.createElement("style",null,`
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

          `))}const Xi={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},$g=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:hg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:Fg},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:vp},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:rn}];function Yg(){const{cart:o,customer:s,clearCart:c,setCustomer:d}=Gt(),p=on(),[m,g]=y.useState((s==null?void 0:s.addresses)||[]),[v,h]=y.useState(""),[w,k]=y.useState(!1),[N,O]=y.useState({...Xi,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),[L,U]=y.useState("cod"),[R,A]=y.useState(""),[T,_]=y.useState(""),[Y,W]=y.useState(null),[ee,oe]=y.useState(0),[ye,le]=y.useState(""),[Ne,G]=y.useState(""),[ke,Re]=y.useState(!1),[j,ge]=y.useState(!1),[ae,he]=y.useState(!1),be=y.useMemo(()=>o.reduce((H,J)=>H+Tn(J.product)*J.quantity,0),[o]),$=Math.max(0,be-ee);y.useEffect(()=>{const H=(s==null?void 0:s.addresses)||[];if(g(H),H.length){const J=H.find(te=>te.isDefault);h(String((J==null?void 0:J._id)||H[0]._id))}else h("")},[s]);const D=()=>{le(""),G("")},F=H=>{const{name:J,value:te,type:ue,checked:Ee}=H.target;O(ve=>({...ve,[J]:ue==="checkbox"?Ee:te}))},b=async H=>{H.preventDefault(),D(),ge(!0);try{const J=await Ie.addAddress(N),te=J!=null&&J.addresses?J:await Ie.me();d(te);const ue=te.addresses||[];g(ue);const Ee=ue.find(q=>q.fullName===N.fullName&&q.phone===N.phone&&q.addressLine1===N.addressLine1),ve=ue[ue.length-1],_e=Ee||ve;_e!=null&&_e._id&&h(String(_e._id)),k(!1),O({...Xi,fullName:te.name||"",phone:te.phone||""}),G("Delivery address saved successfully.")}catch(J){le(J.message)}finally{ge(!1)}},P=async()=>{var H,J;if(D(),!T.trim())return le("Please enter a coupon code.");if(!o.length)return le("Your cart is empty.");he(!0);try{const te=await Ie.validateCoupon({code:T.trim().toUpperCase(),subtotal:be,items:o.map(ve=>({product:ve.product._id||ve.product.id,productId:ve.product._id||ve.product.id,quantity:ve.quantity,unitPrice:Tn(ve.product)}))}),ue=te.coupon||((H=te.data)==null?void 0:H.coupon)||te,Ee=Number(te.discount??((J=te.data)==null?void 0:J.discount)??ue.discountAmount??0);if(Ee<=0)throw new Error(te.message||"This coupon did not return a valid discount.");W(ue),oe(Math.min(be,Ee)),_(T.trim().toUpperCase()),G(`Coupon ${T.toUpperCase()} applied successfully.`)}catch(te){W(null),oe(0),le(te.message)}finally{he(!1)}},pe=()=>{W(null),oe(0),_(""),G("Coupon removed."),le("")},fe=async H=>{if(H.preventDefault(),D(),!o.length)return le("Your cart is empty.");if(o.find(ue=>{var ve,_e;return!(((ve=ue.product)==null?void 0:ve._id)||((_e=ue.product)==null?void 0:_e.id))}))return le("Product ID missing. Please remove this item and add it again from the shop.");const te=m.find(ue=>String(ue._id)===v);if(!te&&w)return le("Please save your new address before placing your order.");if(!te)return le("Please select a delivery address.");Re(!0);try{const ue={items:o.map(_e=>{const q=String(_e.product._id||_e.product.id);return{product:q,productId:q,quantity:Number(_e.quantity),..._e.variant?{variant:_e.variant}:{}}}),shippingAddress:{fullName:te.fullName,phone:te.phone,addressLine1:te.addressLine1,addressLine2:te.addressLine2,landmark:te.landmark,city:te.city,state:te.state,postalCode:te.postalCode,country:te.country},billingAddress:null,couponCode:(Y==null?void 0:Y.code)||T.trim().toUpperCase()||void 0,paymentMethod:L,customerNote:R},Ee=await Ie.createOrder(ue),ve=Ee.order||Ee;if(!(ve!=null&&ve._id)&&!(ve!=null&&ve.id))throw new Error("Order was submitted but the order ID was not returned.");c(),p(`/orders/${ve._id||ve.id}`,{state:{placed:!0}})}catch(ue){le(ue.message||"Unable to place your order.")}finally{Re(!1)}};return o.length?n.createElement(n.Fragment,null,n.createElement(it,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(K,{to:"/cart",className:"hv-checkout-back"},n.createElement(Vt,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(At,{size:17}),"Secure checkout")),ye&&n.createElement("div",{className:"hv-checkout-alert error"},n.createElement($t,null,ye)),Ne&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(Ke,{size:17}),Ne),n.createElement("form",{className:"hv-checkout-layout",onSubmit:fe},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!w&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{D(),O({...Xi,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),k(!0)}},n.createElement(Nr,{size:16}),"Add address")),m.length>0&&!w&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map(H=>n.createElement("label",{key:H._id,className:`hv-checkout-address-card ${v===String(H._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:H._id,checked:v===String(H._id),onChange:()=>h(String(H._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(va,{size:16}),H.label||"Address"),H.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),v===String(H._id)&&n.createElement(Ke,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,H.fullName),n.createElement("p",null,H.addressLine1,H.addressLine2&&`, ${H.addressLine2}`,H.landmark&&`, ${H.landmark}`),n.createElement("p",null,H.city,", ",H.state," ",H.postalCode),n.createElement("span",{className:"hv-checkout-phone"},H.phone)))),(!m.length||w)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>k(!1),"aria-label":"Close address form"},n.createElement(ft,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:N.label,onChange:F,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:N.fullName,onChange:F,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:N.phone,onChange:F,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:N.postalCode,onChange:F,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:N.addressLine1,onChange:F,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:N.addressLine2,onChange:F,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:N.landmark,onChange:F,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:N.city,onChange:F,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:N.state,onChange:F,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:N.country,onChange:F,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:N.isDefault,onChange:F}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:j,onClick:b},j?n.createElement(ln,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(Nr,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>k(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},$g.map(H=>{const J=H.icon;return n.createElement("label",{key:H.value,className:`hv-checkout-payment-card ${L===H.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:H.value,checked:L===H.value,onChange:()=>U(H.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(J,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,H.label),n.createElement("span",null,H.description)),L===H.value&&n.createElement(Ke,{size:19,className:"hv-checkout-selected-icon"}))})),L!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(At,{size:18}),n.createElement("p",null,"Online payment gateway is not connected to the current API flow. Selecting this option only submits the selected payment method with the order. Do not enable live online payments until gateway initiation and server-side payment verification are implemented."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:R,onChange:H=>A(H.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},R.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Tt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},o.map(H=>{const J=H.product,te=$o(J);return n.createElement("div",{className:"hv-checkout-product",key:H.key},n.createElement("div",{className:"hv-checkout-product-image"},te?n.createElement("img",{src:te,alt:J.name}):n.createElement("span",null,"H"),n.createElement("i",null,H.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,J.name),H.variant&&n.createElement("small",null,"Option: ",H.variant),n.createElement("small",null,Ue(Tn(J))," each")),n.createElement("strong",{className:"hv-checkout-product-total"},Ue(Tn(J)*H.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(Pg,{size:17}),n.createElement("strong",null,"Have a promo code?")),Y?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(Ke,{size:17}),n.createElement("span",null,n.createElement("strong",null,Y.code||T),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:pe,"aria-label":"Remove coupon"},n.createElement(ft,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:T,onChange:H=>{_(H.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:P,disabled:ae},ae?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Ue(be))),ee>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",Ue(ee))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-checkout-shipping"},"Calculated by store")),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,Ue($))),n.createElement("p",{className:"hv-checkout-total-note"},"Final shipping, tax and coupon amounts are confirmed by the server.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:ke||j||ae||!v&&m.length>0&&!w||w},ke?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(xe,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(rn,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Cr,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(hs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(At,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(K,{to:"/cart"},n.createElement(Vt,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
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

    `)):n.createElement(n.Fragment,null,n.createElement(it,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Tt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(K,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(xe,{size:17}))))))}const ha={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Wg(){var $;const o=on(),{customer:s,setCustomer:c,logout:d}=Gt(),[p,m]=y.useState("profile"),[g,v]=y.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[h,w]=y.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[k,N]=y.useState(ha),[O,L]=y.useState(null),[U,R]=y.useState(!1),[A,T]=y.useState(""),[_,Y]=y.useState(""),[W,ee]=y.useState(!1),[oe,ye]=y.useState(!0);y.useEffect(()=>{let D=!0;return Ie.me().then(F=>{D&&(c(F),v({name:F.name||"",email:F.email||"",phone:F.phone||"",marketingOptIn:!!F.marketingOptIn}))}).catch(F=>{D&&T(F.message)}).finally(()=>{D&&ye(!1)}),()=>{D=!1}},[c]);const le=()=>{T(""),Y("")},Ne=D=>{const{name:F,value:b,type:P,checked:pe}=D.target;v(fe=>({...fe,[F]:P==="checkbox"?pe:b}))},G=D=>{const{name:F,value:b,type:P,checked:pe}=D.target;N(fe=>({...fe,[F]:P==="checkbox"?pe:b}))},ke=async D=>{D.preventDefault(),ee(!0),le();try{const F=await Ie.updateMe(g);c(F),Y("Your profile has been updated.")}catch(F){T(F.message)}finally{ee(!1)}},Re=async D=>{if(D.preventDefault(),le(),h.newPassword.length<8)return T("New password must be at least 8 characters.");if(h.newPassword!==h.confirmPassword)return T("New passwords do not match.");ee(!0);try{await Ie.changePassword({currentPassword:h.currentPassword,newPassword:h.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),Y("Password updated successfully.")}catch(F){T(F.message)}finally{ee(!1)}},j=D=>{le(),L((D==null?void 0:D._id)||null),N(D?{...ha,...D}:{...ha,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),R(!0)},ge=async D=>{D.preventDefault(),ee(!0),le();try{O?await Ie.updateAddress(O,k):await Ie.addAddress(k);const F=await Ie.me();c(F),R(!1),L(null),N(ha),Y("Address saved successfully.")}catch(F){T(F.message)}finally{ee(!1)}},ae=async D=>{if(window.confirm("Delete this saved address?")){le();try{await Ie.deleteAddress(D);const F=await Ie.me();c(F),Y("Address deleted successfully.")}catch(F){T(F.message)}}},he=()=>{R(!1),L(null),N(ha)},be=()=>{d(),o("/",{replace:!0})};return oe?n.createElement("div",{className:"page-shell"},n.createElement(ln,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(it,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,(($=s==null?void 0:s.name)==null?void 0:$.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(br,{size:28}))),A&&n.createElement("div",{className:"account-alert error"},n.createElement($t,null,A)),_&&n.createElement("div",{className:"account-alert success"},n.createElement(Ke,{size:17}),_),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((s==null?void 0:s.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(s==null?void 0:s.name)||"HOVIRA User"),n.createElement("p",null,s==null?void 0:s.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(At,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:p==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),le()}},n.createElement(br,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(_o,{size:16})),n.createElement("button",{className:p==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),le(),he()}},n.createElement(va,{size:19}),n.createElement("span",null,"Address book"),n.createElement(_o,{size:16})),n.createElement(K,{to:"/orders",className:"account-menu-item"},n.createElement(Ea,{size:19}),n.createElement("span",null,"My orders"),n.createElement(xe,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:be},n.createElement(zg,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(At,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},p==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(br,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:ke},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:g.name,onChange:Ne,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(Yo,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:g.email,onChange:Ne,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(Ep,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:g.phone,onChange:Ne,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:g.marketingOptIn,onChange:Ne}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jd,{size:17}),W?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(rn,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Re},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:h.currentPassword,onChange:D=>w({...h,currentPassword:D.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:h.newPassword,onChange:D=>w({...h,newPassword:D.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:h.confirmPassword,onChange:D=>w({...h,confirmPassword:D.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:W},n.createElement(rn,{size:16}),W?"Updating...":"Update password")))),p==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!U&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>j(null)},n.createElement(Nr,{size:17}),"Add address")),U&&n.createElement("form",{className:"account-address-form",onSubmit:ge},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,O?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:he,className:"account-close-button"},n.createElement(ft,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:k.label,onChange:G,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:k.fullName,onChange:G,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:k.phone,onChange:G,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:k.postalCode,onChange:G,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:k.addressLine1,onChange:G,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:k.addressLine2,onChange:G,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:k.landmark,onChange:G,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:k.city,onChange:G,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:k.state,onChange:G,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:k.country,onChange:G,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:k.isDefault,onChange:G}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:W},n.createElement(jd,{size:16}),W?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:he},"Cancel"))),((s==null?void 0:s.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},s.addresses.map(D=>n.createElement("div",{className:"account-address-card",key:D._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(va,{size:16}),D.label||"Address"),D.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(Ke,{size:13}),"Default")),n.createElement("h3",null,D.fullName),n.createElement("p",null,D.addressLine1,D.addressLine2&&`, ${D.addressLine2}`,D.landmark&&`, ${D.landmark}`,n.createElement("br",null),D.city,", ",D.state," ",D.postalCode,n.createElement("br",null),D.country,n.createElement("br",null),D.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>j(D)},n.createElement(Tg,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>ae(D._id)},n.createElement(bp,{size:14}),"Delete"))))):!U&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(va,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>j(null)},n.createElement(Nr,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
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

          
          `))}function Gg(){const[o,s]=y.useState([]),[c,d]=y.useState(!0),[p,m]=y.useState("");return y.useEffect(()=>{Ie.orders().then(s).catch(g=>m(g.message)).finally(()=>d(!1))},[]),n.createElement(n.Fragment,null,n.createElement(it,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),p&&n.createElement($t,null,p),c?n.createElement(ln,null):o.length?n.createElement("div",{className:"orders-list"},o.map(g=>n.createElement(K,{to:`/orders/${g._id||g.id}`,className:"order-row",key:g._id||g.id},n.createElement("div",{className:"order-icon"},n.createElement(Ea,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",g.orderNumber||g._id||g.id),n.createElement("small",null,new Date(g.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(g.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${g.status}`},g.status||"pending"),n.createElement("small",null,g.paymentStatus||"payment pending")),n.createElement("strong",null,Ue(g.total)),n.createElement(xe,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(Ea,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(xe,{size:17})))))}const Ud=[{key:"pending",label:"Order placed",description:"We have received your order.",icon:Tt},{key:"confirmed",label:"Confirmed",description:"Your order has been confirmed.",icon:Ke},{key:"processing",label:"Processing",description:"Your items are being prepared.",icon:Ea},{key:"shipped",label:"Shipped",description:"Your order is on its way.",icon:Cr},{key:"delivered",label:"Delivered",description:"Your order has been delivered.",icon:Ke}],qg={placed:"pending",order_placed:"pending",accepted:"confirmed",packed:"processing",dispatched:"shipped",out_for_delivery:"shipped",complete:"delivered",completed:"delivered"},Hd=(o="")=>{const s=String(o).toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");return qg[s]||s},Po=o=>{if(!o)return"";const s=new Date(o);return Number.isNaN(s.getTime())?"":new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}).format(s)},Fo=(o="")=>String(o).replace(/[_-]/g," ").replace(/\b\w/g,s=>s.toUpperCase());function Qg(){var Ne;const{id:o}=ep(),s=Wt(),[c,d]=y.useState(null),[p,m]=y.useState(!0),[g,v]=y.useState(!1),[h,w]=y.useState(""),[k,N]=y.useState(!1),O=y.useCallback(async(G=!1)=>{G?v(!0):m(!0),w("");try{const ke=await Ie.order(o);d(ke)}catch(ke){w((ke==null?void 0:ke.message)||"Unable to load this order.")}finally{m(!1),v(!1)}},[o]);y.useEffect(()=>{O()},[O]);const L=(c==null?void 0:c.orderNumber)||(c==null?void 0:c._id)||o,U=Hd((c==null?void 0:c.status)||"pending"),R=U==="cancelled",A=Ud.findIndex(G=>G.key===U),T=y.useMemo(()=>Array.isArray(c==null?void 0:c.statusHistory)?[...c.statusHistory].sort((G,ke)=>new Date(G.createdAt||G.date||0)-new Date(ke.createdAt||ke.date||0)):[],[c==null?void 0:c.statusHistory]),_=async()=>{try{await navigator.clipboard.writeText(String(L)),N(!0),window.setTimeout(()=>N(!1),1800)}catch{w("Could not copy the order number. Please copy it manually.")}},Y=()=>window.print();if(p)return n.createElement("div",{className:"page-shell order-loading"},n.createElement(ln,{label:"Loading your order…"}));if(h&&!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement($t,null,h),n.createElement("button",{className:"od-btn od-btn-primary",onClick:()=>O()},n.createElement(cs,{size:16})," Try again"),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Vt,{size:16})," Back to orders"));if(!c)return n.createElement("section",{className:"page-shell order-error-page"},n.createElement($t,null,"Order not found."),n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Vt,{size:16})," Back to orders"));const W=c.items||[],ee=c.shippingAddress||{},oe=Hd(c.paymentStatus||"pending"),ye=["paid","completed","success","successful"].includes(oe),le=c.trackingUrl||c.trackingURL||"";return n.createElement(n.Fragment,null,n.createElement(it,{title:`Order ${L} | HOVIRA`,description:"View your HOVIRA order details, payment information and delivery progress."}),n.createElement("main",{className:"page-shell standard-page od-page"},n.createElement("div",{className:"od-topbar"},n.createElement(K,{to:"/orders",className:"od-back-link"},n.createElement(Vt,{size:16})," All orders"),n.createElement("div",{className:"od-top-actions"},n.createElement("button",{className:"od-btn od-btn-light",onClick:()=>O(!0),disabled:g},n.createElement(cs,{size:15,className:g?"od-spinning":""}),g?"Refreshing":"Refresh status"),n.createElement("button",{className:"od-btn od-btn-light od-print-btn",onClick:Y},n.createElement(Og,{size:15})," Print receipt"))),((Ne=s.state)==null?void 0:Ne.placed)&&n.createElement("div",{className:"od-success-banner"},n.createElement("span",{className:"od-success-icon"},n.createElement(Ke,{size:20})),n.createElement("div",null,n.createElement("strong",null,"Your order has been placed!"),n.createElement("p",null,"Thank you for choosing HOVIRA. We’ll keep you updated on its progress."))),h&&n.createElement("div",{className:"od-inline-error"},h),n.createElement("header",{className:"od-hero"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"YOUR HOVIRA ORDER"),n.createElement("h1",null,"Order ",n.createElement("em",null,"details")),n.createElement("p",{className:"od-order-meta"},"Order number ",n.createElement("strong",null,L),n.createElement("button",{className:"od-copy-btn",onClick:_,"aria-label":"Copy order number"},n.createElement(Eg,{size:14})," ",k?"Copied":"Copy")),c.createdAt&&n.createElement("p",{className:"od-date"},"Placed on ",Po(c.createdAt))),n.createElement("div",{className:`od-status-card ${R?"is-cancelled":""}`},n.createElement("span",{className:"od-status-label"},"CURRENT STATUS"),n.createElement("strong",null,Fo(c.status||"pending")),n.createElement("span",null,R?"This order has been cancelled.":U==="delivered"?"Your order has arrived.":"We’re taking care of your order."))),!R&&n.createElement("section",{className:"od-card od-tracking-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"THE JOURNEY"),n.createElement("h2",null,"Order progress")),c.estimatedDelivery&&n.createElement("span",{className:"od-delivery-date"},n.createElement(Cr,{size:15})," Expected ",Po(c.estimatedDelivery))),n.createElement("div",{className:"od-progress-track"},Ud.map((G,ke)=>{const Re=G.icon,j=A>=ke&&A!==-1,ge=A===ke;return n.createElement("div",{className:`od-progress-step ${j?"is-done":""} ${ge?"is-active":""}`,key:G.key},n.createElement("div",{className:"od-step-icon"},n.createElement(Re,{size:18})),n.createElement("div",{className:"od-step-copy"},n.createElement("strong",null,G.label),n.createElement("span",null,ge?"In progress":j?"Completed":G.description)))})),c.trackingNumber&&n.createElement("div",{className:"od-tracking-info"},n.createElement("div",null,n.createElement("span",null,"Tracking number"),n.createElement("strong",null,c.trackingNumber)),c.carrier&&n.createElement("div",null,n.createElement("span",null,"Delivery partner"),n.createElement("strong",null,c.carrier)),le&&n.createElement("a",{href:le,target:"_blank",rel:"noreferrer",className:"od-track-link"},"Track shipment ",n.createElement(wg,{size:14})))),n.createElement("div",{className:"od-content-grid"},n.createElement("div",{className:"od-main-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"IN YOUR PACKAGE"),n.createElement("h2",null,"Items ordered ",n.createElement("span",{className:"od-count"},W.length)))),n.createElement("div",{className:"od-items-list"},W.map((G,ke)=>n.createElement("div",{className:"od-product-row",key:G._id||G.product||ke},n.createElement("div",{className:"od-product-image"},G.image?n.createElement("img",{src:G.image,alt:G.name||"HOVIRA product"}):n.createElement("span",null,"H")),n.createElement("div",{className:"od-product-info"},n.createElement("strong",null,G.name||"Product"),G.variant&&n.createElement("span",{className:"od-variant"},G.variant),n.createElement("span",null,"Quantity: ",G.quantity||1),G.sku&&n.createElement("span",{className:"od-sku"},"SKU: ",G.sku)),n.createElement("strong",{className:"od-item-price"},Ue(G.lineTotal??Number(G.unitPrice||0)*Number(G.quantity||1)))))),n.createElement("div",{className:"od-price-summary"},n.createElement("div",null,n.createElement("span",null,"Subtotal"),n.createElement("strong",null,Ue(c.subtotal||0))),Number(c.discount)>0&&n.createElement("div",{className:"od-discount"},n.createElement("span",null,"Discount ",c.couponCode?`(${c.couponCode})`:""),n.createElement("strong",null,"−",Ue(c.discount))),n.createElement("div",null,n.createElement("span",null,"Shipping"),n.createElement("strong",null,Number(c.shippingFee)===0?"Free":Ue(c.shippingFee||0))),Number(c.tax)>0&&n.createElement("div",null,n.createElement("span",null,"Tax"),n.createElement("strong",null,Ue(c.tax))),Number(c.codFee)>0&&n.createElement("div",null,n.createElement("span",null,"COD fee"),n.createElement("strong",null,Ue(c.codFee))),n.createElement("div",{className:"od-grand-total"},n.createElement("span",null,"Total paid / payable"),n.createElement("strong",null,Ue(c.total||0))))),T.length>0&&n.createElement("section",{className:"od-card od-history-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"ORDER UPDATES"),n.createElement("h2",null,"Activity history"))),n.createElement("div",{className:"od-history-list"},T.map((G,ke)=>n.createElement("div",{className:"od-history-item",key:G._id||ke},n.createElement("span",{className:"od-history-dot"},n.createElement(Id,{size:13})),n.createElement("div",null,n.createElement("strong",null,Fo(G.status||"Update")),G.note&&n.createElement("p",null,G.note),n.createElement("small",null,Po(G.createdAt||G.date)))))))),n.createElement("aside",{className:"od-side-column"},n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"DELIVERING TO"),n.createElement("h2",null,"Shipping address")),n.createElement("span",{className:"od-heading-icon"},n.createElement(va,{size:17}))),n.createElement("div",{className:"od-address"},n.createElement("strong",null,ee.fullName||"Customer"),ee.addressLine1&&n.createElement("span",null,ee.addressLine1),ee.addressLine2&&n.createElement("span",null,ee.addressLine2),n.createElement("span",null,[ee.city,ee.state,ee.postalCode].filter(Boolean).join(", ")),ee.country&&n.createElement("span",null,ee.country),ee.phone&&n.createElement("span",{className:"od-phone"},ee.phone))),n.createElement("section",{className:"od-card"},n.createElement("div",{className:"od-section-heading"},n.createElement("div",null,n.createElement("span",{className:"od-eyebrow"},"SECURE CHECKOUT"),n.createElement("h2",null,"Payment details")),n.createElement("span",{className:"od-heading-icon"},n.createElement(vp,{size:17}))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Method"),n.createElement("strong",null,Fo(c.paymentMethod||"Not specified"))),n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`od-payment-badge ${ye?"is-paid":oe==="failed"?"is-failed":""}`},ye?n.createElement(At,{size:13}):oe==="failed"?n.createElement(yg,{size:13}):n.createElement(Id,{size:13}),Fo(c.paymentStatus||"Pending"))),c.paymentId&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Payment ID"),n.createElement("strong",{className:"od-payment-id"},c.paymentId)),c.paidAt&&n.createElement("div",{className:"od-payment-row"},n.createElement("span",null,"Paid on"),n.createElement("strong",null,Po(c.paidAt)))),n.createElement("div",{className:"od-help-card"},n.createElement("span",{className:"od-help-icon"},n.createElement(Ea,{size:20})),n.createElement("strong",null,"Need help with your order?"),n.createElement("p",null,"Our team is here to help with any questions about your purchase."),n.createElement(K,{to:"/contact",className:"od-help-link"},"Contact support ",n.createElement(xe,{size:15}))))),n.createElement("div",{className:"od-bottom-actions"},n.createElement(K,{to:"/shop",className:"od-btn od-btn-primary"},"Continue shopping ",n.createElement(xe,{size:16})),n.createElement(K,{to:"/orders",className:"od-btn od-btn-outline"},"View all orders"))),n.createElement("style",null,`

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

          
          `))}function Kg(){return n.createElement(n.Fragment,null,n.createElement(it,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(K,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(xe,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(wr,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(lt,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(wp,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(K,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(xe,{size:17}))))}function Vd({type:o}){const s=o==="privacy";return n.createElement(n.Fragment,null,n.createElement(it,{title:s?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,s?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,s?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),s?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function Xg(){return n.createElement(n.Fragment,null,n.createElement(it,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(K,{className:"btn btn-dark",to:"/"},n.createElement(Vt,{size:16})," Back home")))}function Do({children:o}){const{customer:s,authReady:c}=Gt();return c?s?o:n.createElement(xh,{to:"/login",replace:!0}):n.createElement(ln,{label:"Checking your account..."})}function Zg(){const[o,s]=y.useState(!0);return y.useEffect(()=>{const c=setTimeout(()=>{s(!1)},2500);return()=>clearTimeout(c)},[]),o?n.createElement(ln,{label:"Preparing your HOVIRA experience..."}):n.createElement(wh,null,n.createElement(Qe,{element:n.createElement(Mg,null)},n.createElement(Qe,{index:!0,element:n.createElement(_g,null)}),n.createElement(Qe,{path:"shop",element:n.createElement(jg,null)}),n.createElement(Qe,{path:"product/:slugOrId",element:n.createElement(Bg,null)}),n.createElement(Qe,{path:"login",element:n.createElement(Ug,null)}),n.createElement(Qe,{path:"signup",element:n.createElement(Bd,null)}),n.createElement(Qe,{path:"register",element:n.createElement(Bd,null)}),n.createElement(Qe,{path:"cart",element:n.createElement(Hg,null)}),n.createElement(Qe,{path:"wishlist",element:n.createElement(Vg,null)}),n.createElement(Qe,{path:"checkout",element:n.createElement(Do,null,n.createElement(Yg,null))}),n.createElement(Qe,{path:"account",element:n.createElement(Do,null,n.createElement(Wg,null))}),n.createElement(Qe,{path:"orders",element:n.createElement(Do,null,n.createElement(Gg,null))}),n.createElement(Qe,{path:"orders/:id",element:n.createElement(Do,null,n.createElement(Qg,null))}),n.createElement(Qe,{path:"about",element:n.createElement(Kg,null)}),n.createElement(Qe,{path:"privacy",element:n.createElement(Vd,{type:"privacy"})}),n.createElement(Qe,{path:"terms",element:n.createElement(Vd,{type:"terms"})}),n.createElement(Qe,{path:"*",element:n.createElement(Xg,null)})))}function Jg(){const{pathname:o}=Wt();return y.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null}Tf.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(dp,null,n.createElement(Oh,null,n.createElement(Jg,null),n.createElement(ug,null,n.createElement(Zg,null))))));
