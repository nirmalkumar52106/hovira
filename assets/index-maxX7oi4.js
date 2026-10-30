var uf=Object.defineProperty;var df=(o,s,c)=>s in o?uf(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c;var Kt=(o,s,c)=>df(o,typeof s!="symbol"?s+"":s,c);function pf(o,s){for(var c=0;c<s.length;c++){const d=s[c];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const m=Object.getOwnPropertyDescriptor(d,p);m&&Object.defineProperty(o,p,m.get?m:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function Fl(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ii={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function mf(){if(rd)return ve;rd=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.iterator;function P(k){return k===null||typeof k!="object"?null:(k=N&&k[N]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,I={};function T(k,O,ce){this.props=k,this.context=O,this.refs=I,this.updater=ce||M}T.prototype.isReactComponent={},T.prototype.setState=function(k,O){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,O,"setState")},T.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function A(){}A.prototype=T.prototype;function $(k,O,ce){this.props=k,this.context=O,this.refs=I,this.updater=ce||M}var W=$.prototype=new A;W.constructor=$,j(W,T.prototype),W.isPureReactComponent=!0;var q=Array.isArray,se=Object.prototype.hasOwnProperty,fe={current:null},xe={key:!0,ref:!0,__self:!0,__source:!0};function ae(k,O,ce){var pe,B={},J=null,Z=null;if(O!=null)for(pe in O.ref!==void 0&&(Z=O.ref),O.key!==void 0&&(J=""+O.key),O)se.call(O,pe)&&!xe.hasOwnProperty(pe)&&(B[pe]=O[pe]);var ie=arguments.length-2;if(ie===1)B.children=ce;else if(1<ie){for(var U=Array(ie),G=0;G<ie;G++)U[G]=arguments[G+2];B.children=U}if(k&&k.defaultProps)for(pe in ie=k.defaultProps,ie)B[pe]===void 0&&(B[pe]=ie[pe]);return{$$typeof:o,type:k,key:J,ref:Z,props:B,_owner:fe.current}}function Ne(k,O){return{$$typeof:o,type:k.type,key:O,ref:k.ref,props:k.props,_owner:k._owner}}function he(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function Ae(k){var O={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return O[ce]})}var Le=/\/+/g;function V(k,O){return typeof k=="object"&&k!==null&&k.key!=null?Ae(""+k.key):O.toString(36)}function ye(k,O,ce,pe,B){var J=typeof k;(J==="undefined"||J==="boolean")&&(k=null);var Z=!1;if(k===null)Z=!0;else switch(J){case"string":case"number":Z=!0;break;case"object":switch(k.$$typeof){case o:case s:Z=!0}}if(Z)return Z=k,B=B(Z),k=pe===""?"."+V(Z,0):pe,q(B)?(ce="",k!=null&&(ce=k.replace(Le,"$&/")+"/"),ye(B,O,ce,"",function(G){return G})):B!=null&&(he(B)&&(B=Ne(B,ce+(!B.key||Z&&Z.key===B.key?"":(""+B.key).replace(Le,"$&/")+"/")+k)),O.push(B)),1;if(Z=0,pe=pe===""?".":pe+":",q(k))for(var ie=0;ie<k.length;ie++){J=k[ie];var U=pe+V(J,ie);Z+=ye(J,O,ce,U,B)}else if(U=P(k),typeof U=="function")for(k=U.call(k),ie=0;!(J=k.next()).done;)J=J.value,U=pe+V(J,ie++),Z+=ye(J,O,ce,U,B);else if(J==="object")throw O=String(k),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Z}function re(k,O,ce){if(k==null)return k;var pe=[],B=0;return ye(k,pe,"","",function(J){return O.call(ce,J,B++)}),pe}function me(k){if(k._status===-1){var O=k._result;O=O(),O.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=O)}if(k._status===1)return k._result.default;throw k._result}var ge={current:null},Y={transition:null},D={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Y,ReactCurrentOwner:fe};function R(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:re,forEach:function(k,O,ce){re(k,function(){O.apply(this,arguments)},ce)},count:function(k){var O=0;return re(k,function(){O++}),O},toArray:function(k){return re(k,function(O){return O})||[]},only:function(k){if(!he(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ve.Component=T,ve.Fragment=c,ve.Profiler=p,ve.PureComponent=$,ve.StrictMode=d,ve.Suspense=h,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,ve.act=R,ve.cloneElement=function(k,O,ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var pe=j({},k.props),B=k.key,J=k.ref,Z=k._owner;if(O!=null){if(O.ref!==void 0&&(J=O.ref,Z=fe.current),O.key!==void 0&&(B=""+O.key),k.type&&k.type.defaultProps)var ie=k.type.defaultProps;for(U in O)se.call(O,U)&&!xe.hasOwnProperty(U)&&(pe[U]=O[U]===void 0&&ie!==void 0?ie[U]:O[U])}var U=arguments.length-2;if(U===1)pe.children=ce;else if(1<U){ie=Array(U);for(var G=0;G<U;G++)ie[G]=arguments[G+2];pe.children=ie}return{$$typeof:o,type:k.type,key:B,ref:J,props:pe,_owner:Z}},ve.createContext=function(k){return k={$$typeof:g,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:m,_context:k},k.Consumer=k},ve.createElement=ae,ve.createFactory=function(k){var O=ae.bind(null,k);return O.type=k,O},ve.createRef=function(){return{current:null}},ve.forwardRef=function(k){return{$$typeof:y,render:k}},ve.isValidElement=he,ve.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:me}},ve.memo=function(k,O){return{$$typeof:E,type:k,compare:O===void 0?null:O}},ve.startTransition=function(k){var O=Y.transition;Y.transition={};try{k()}finally{Y.transition=O}},ve.unstable_act=R,ve.useCallback=function(k,O){return ge.current.useCallback(k,O)},ve.useContext=function(k){return ge.current.useContext(k)},ve.useDebugValue=function(){},ve.useDeferredValue=function(k){return ge.current.useDeferredValue(k)},ve.useEffect=function(k,O){return ge.current.useEffect(k,O)},ve.useId=function(){return ge.current.useId()},ve.useImperativeHandle=function(k,O,ce){return ge.current.useImperativeHandle(k,O,ce)},ve.useInsertionEffect=function(k,O){return ge.current.useInsertionEffect(k,O)},ve.useLayoutEffect=function(k,O){return ge.current.useLayoutEffect(k,O)},ve.useMemo=function(k,O){return ge.current.useMemo(k,O)},ve.useReducer=function(k,O,ce){return ge.current.useReducer(k,O,ce)},ve.useRef=function(k){return ge.current.useRef(k)},ve.useState=function(k){return ge.current.useState(k)},ve.useSyncExternalStore=function(k,O,ce){return ge.current.useSyncExternalStore(k,O,ce)},ve.useTransition=function(){return ge.current.useTransition()},ve.version="18.3.1",ve}var ad;function Ld(){return ad||(ad=1,Ii.exports=mf()),Ii.exports}var w=Ld();const n=Fl(w),ff=pf({__proto__:null,default:n},[w]);var Nl={},Li={exports:{}},ct={},Mi={exports:{}},_i={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function hf(){return ld||(ld=1,(function(o){function s(Y,D){var R=Y.length;Y.push(D);e:for(;0<R;){var k=R-1>>>1,O=Y[k];if(0<p(O,D))Y[k]=D,Y[R]=O,R=k;else break e}}function c(Y){return Y.length===0?null:Y[0]}function d(Y){if(Y.length===0)return null;var D=Y[0],R=Y.pop();if(R!==D){Y[0]=R;e:for(var k=0,O=Y.length,ce=O>>>1;k<ce;){var pe=2*(k+1)-1,B=Y[pe],J=pe+1,Z=Y[J];if(0>p(B,R))J<O&&0>p(Z,B)?(Y[k]=Z,Y[J]=R,k=J):(Y[k]=B,Y[pe]=R,k=pe);else if(J<O&&0>p(Z,R))Y[k]=Z,Y[J]=R,k=J;else break e}}return D}function p(Y,D){var R=Y.sortIndex-D.sortIndex;return R!==0?R:Y.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,y=g.now();o.unstable_now=function(){return g.now()-y}}var h=[],E=[],b=1,N=null,P=3,M=!1,j=!1,I=!1,T=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(Y){for(var D=c(E);D!==null;){if(D.callback===null)d(E);else if(D.startTime<=Y)d(E),D.sortIndex=D.expirationTime,s(h,D);else break;D=c(E)}}function q(Y){if(I=!1,W(Y),!j)if(c(h)!==null)j=!0,me(se);else{var D=c(E);D!==null&&ge(q,D.startTime-Y)}}function se(Y,D){j=!1,I&&(I=!1,A(ae),ae=-1),M=!0;var R=P;try{for(W(D),N=c(h);N!==null&&(!(N.expirationTime>D)||Y&&!Ae());){var k=N.callback;if(typeof k=="function"){N.callback=null,P=N.priorityLevel;var O=k(N.expirationTime<=D);D=o.unstable_now(),typeof O=="function"?N.callback=O:N===c(h)&&d(h),W(D)}else d(h);N=c(h)}if(N!==null)var ce=!0;else{var pe=c(E);pe!==null&&ge(q,pe.startTime-D),ce=!1}return ce}finally{N=null,P=R,M=!1}}var fe=!1,xe=null,ae=-1,Ne=5,he=-1;function Ae(){return!(o.unstable_now()-he<Ne)}function Le(){if(xe!==null){var Y=o.unstable_now();he=Y;var D=!0;try{D=xe(!0,Y)}finally{D?V():(fe=!1,xe=null)}}else fe=!1}var V;if(typeof $=="function")V=function(){$(Le)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,re=ye.port2;ye.port1.onmessage=Le,V=function(){re.postMessage(null)}}else V=function(){T(Le,0)};function me(Y){xe=Y,fe||(fe=!0,V())}function ge(Y,D){ae=T(function(){Y(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_continueExecution=function(){j||M||(j=!0,me(se))},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return P},o.unstable_getFirstCallbackNode=function(){return c(h)},o.unstable_next=function(Y){switch(P){case 1:case 2:case 3:var D=3;break;default:D=P}var R=P;P=D;try{return Y()}finally{P=R}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(Y,D){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var R=P;P=Y;try{return D()}finally{P=R}},o.unstable_scheduleCallback=function(Y,D,R){var k=o.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?k+R:k):R=k,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,Y={id:b++,callback:D,priorityLevel:Y,startTime:R,expirationTime:O,sortIndex:-1},R>k?(Y.sortIndex=R,s(E,Y),c(h)===null&&Y===c(E)&&(I?(A(ae),ae=-1):I=!0,ge(q,R-k))):(Y.sortIndex=O,s(h,Y),j||M||(j=!0,me(se))),Y},o.unstable_shouldYield=Ae,o.unstable_wrapCallback=function(Y){var D=P;return function(){var R=P;P=D;try{return Y.apply(this,arguments)}finally{P=R}}}})(_i)),_i}var od;function gf(){return od||(od=1,Mi.exports=hf()),Mi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function vf(){if(id)return ct;id=1;var o=Ld(),s=gf();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},N={};function P(e){return h.call(N,e)?!0:h.call(b,e)?!1:E.test(e)?N[e]=!0:(b[e]=!0,!1)}function M(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,r,a){if(t===null||typeof t>"u"||M(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,a,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(A,$);T[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(A,$);T[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(A,$);T[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,r,a){var l=T.hasOwnProperty(t)?T[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,r,l,a)&&(r=null),a||l===null?P(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var q=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),fe=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),Y=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,k;function O(e){if(k===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ce=!1;function pe(e,t){if(!e||ce)return"";ce=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(z){var a=z}Reflect.construct(e,[],t)}else{try{t.call()}catch(z){a=z}e.call(t.prototype)}else{try{throw Error()}catch(z){a=z}e()}}catch(z){if(z&&a&&typeof z.stack=="string"){for(var l=z.stack.split(`
`),i=a.stack.split(`
`),u=l.length-1,f=i.length-1;1<=u&&0<=f&&l[u]!==i[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==i[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==i[f]){var v=`
`+l[u].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=u&&0<=f);break}}}finally{ce=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function B(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case fe:return"Portal";case Ne:return"Profiler";case ae:return"StrictMode";case V:return"Suspense";case ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case he:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function Z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G(e){var t=U(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fe(e){e._valueTracker||(e._valueTracker=G(e))}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=U(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var r=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function us(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=ie(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ds(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function Hl(e,t){ds(e,t);var r=ie(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ps(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vl(e,t,r){(t!=="number"||ha(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var br=Array.isArray;function $n(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+ie(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ms(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(br(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ie(r)}}function fs(e,t){var r=ie(t.value),a=ie(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function hs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,vs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mp=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function ys(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function xs(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=ys(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var fp=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,Yn=null,Wn=null;function Es(e){if(e=qr(e)){if(typeof Kl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Ba(t),Kl(e.stateNode,e.type,t))}}function ws(e){Yn?Wn?Wn.push(e):Wn=[e]:Yn=e}function ks(){if(Yn){var e=Yn,t=Wn;if(Wn=Yn=null,Es(e),t)for(e=0;e<t.length;e++)Es(t[e])}}function bs(e,t){return e(t)}function Ns(){}var Xl=!1;function Ss(e,t,r){if(Xl)return e(t,r);Xl=!0;try{return bs(e,t,r)}finally{Xl=!1,(Yn!==null||Wn!==null)&&(Ns(),ks())}}function Cr(e,t){var r=e.stateNode;if(r===null)return null;var a=Ba(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var Jl=!1;if(y)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Jl=!1}function hp(e,t,r,a,l,i,u,f,v){var z=Array.prototype.slice.call(arguments,3);try{t.apply(r,z)}catch(L){this.onError(L)}}var Ar=!1,va=null,ya=!1,Zl=null,gp={onError:function(e){Ar=!0,va=e}};function vp(e,t,r,a,l,i,u,f,v){Ar=!1,va=null,hp.apply(gp,arguments)}function yp(e,t,r,a,l,i,u,f,v){if(vp.apply(this,arguments),Ar){if(Ar){var z=va;Ar=!1,va=null}else throw Error(c(198));ya||(ya=!0,Zl=z)}}function zn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Cs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(zn(e)!==e)throw Error(c(188))}function xp(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===r)return zs(l),e;if(i===a)return zs(l),t;i=i.sibling}throw Error(c(188))}if(r.return!==a.return)r=l,a=i;else{for(var u=!1,f=l.child;f;){if(f===r){u=!0,r=l,a=i;break}if(f===a){u=!0,a=l,r=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===r){u=!0,r=i,a=l;break}if(f===a){u=!0,a=i,r=l;break}f=f.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==a)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function As(e){return e=xp(e),e!==null?Ts(e):null}function Ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ts(e);if(t!==null)return t;e=e.sibling}return null}var Os=s.unstable_scheduleCallback,Ps=s.unstable_cancelCallback,Ep=s.unstable_shouldYield,wp=s.unstable_requestPaint,Me=s.unstable_now,kp=s.unstable_getCurrentPriorityLevel,eo=s.unstable_ImmediatePriority,Rs=s.unstable_UserBlockingPriority,xa=s.unstable_NormalPriority,bp=s.unstable_LowPriority,Ds=s.unstable_IdlePriority,Ea=null,Rt=null;function Np(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:zp,Sp=Math.log,Cp=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-(Sp(e)/Cp|0)|0}var wa=64,ka=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,u=r&268435455;if(u!==0){var f=u&~l;f!==0?a=Tr(f):(i&=u,i!==0&&(a=Tr(i)))}else u=r&~l,u!==0?a=Tr(u):i!==0&&(a=Tr(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Nt(t),l=1<<r,a|=e[r],t&=~l;return a}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-Nt(i),f=1<<u,v=l[u];v===-1?((f&r)===0||(f&a)!==0)&&(l[u]=Ap(f,t)):v<=t&&(e.expiredLanes|=f),i&=~f}}function to(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fs(){var e=wa;return wa<<=1,(wa&4194240)===0&&(wa=64),e}function no(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Or(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=r}function Op(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Nt(r),i=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~i}}function ro(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Nt(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var be=0;function Is(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ls,ao,Ms,_s,Bs,lo=!1,Na=[],nn=null,rn=null,an=null,Pr=new Map,Rr=new Map,ln=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Dr(e,t,r,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qr(t),t!==null&&ao(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Rp(e,t,r,a,l){switch(t){case"focusin":return nn=Dr(nn,e,t,r,a,l),!0;case"dragenter":return rn=Dr(rn,e,t,r,a,l),!0;case"mouseover":return an=Dr(an,e,t,r,a,l),!0;case"pointerover":var i=l.pointerId;return Pr.set(i,Dr(Pr.get(i)||null,e,t,r,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Rr.set(i,Dr(Rr.get(i)||null,e,t,r,a,l)),!0}return!1}function Us(e){var t=An(e.target);if(t!==null){var r=zn(t);if(r!==null){if(t=r.tag,t===13){if(t=Cs(r),t!==null){e.blockedOn=t,Bs(e.priority,function(){Ms(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=io(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Gl=a,r.target.dispatchEvent(a),Gl=null}else return t=qr(r),t!==null&&ao(t),e.blockedOn=r,!1;t.shift()}return!0}function Hs(e,t,r){Sa(e)&&r.delete(t)}function Dp(){lo=!1,nn!==null&&Sa(nn)&&(nn=null),rn!==null&&Sa(rn)&&(rn=null),an!==null&&Sa(an)&&(an=null),Pr.forEach(Hs),Rr.forEach(Hs)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Dp)))}function Ir(e){function t(l){return Fr(l,e)}if(0<Na.length){Fr(Na[0],e);for(var r=1;r<Na.length;r++){var a=Na[r];a.blockedOn===e&&(a.blockedOn=null)}}for(nn!==null&&Fr(nn,e),rn!==null&&Fr(rn,e),an!==null&&Fr(an,e),Pr.forEach(t),Rr.forEach(t),r=0;r<ln.length;r++)a=ln[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(r=ln[0],r.blockedOn===null);)Us(r),r.blockedOn===null&&ln.shift()}var qn=q.ReactCurrentBatchConfig,Ca=!0;function Fp(e,t,r,a){var l=be,i=qn.transition;qn.transition=null;try{be=1,oo(e,t,r,a)}finally{be=l,qn.transition=i}}function Ip(e,t,r,a){var l=be,i=qn.transition;qn.transition=null;try{be=4,oo(e,t,r,a)}finally{be=l,qn.transition=i}}function oo(e,t,r,a){if(Ca){var l=io(e,t,r,a);if(l===null)So(e,t,a,za,r),js(e,a);else if(Rp(l,e,t,r,a))a.stopPropagation();else if(js(e,a),t&4&&-1<Pp.indexOf(e)){for(;l!==null;){var i=qr(l);if(i!==null&&Ls(i),i=io(e,t,r,a),i===null&&So(e,t,a,za,r),i===l)break;l=i}l!==null&&a.stopPropagation()}else So(e,t,a,null,r)}}var za=null;function io(e,t,r,a){if(za=null,e=Ql(a),e=An(e),e!==null)if(t=zn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Cs(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function Vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case eo:return 1;case Rs:return 4;case xa:case bp:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var on=null,so=null,Aa=null;function $s(){if(Aa)return Aa;var e,t=so,r=t.length,a,l="value"in on?on.value:on.textContent,i=l.length;for(e=0;e<r&&t[e]===l[e];e++);var u=r-e;for(a=1;a<=u&&t[r-a]===l[i-a];a++);return Aa=l.slice(e,1<a?1-a:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oa(){return!0}function Ys(){return!1}function ut(e){function t(r,a,l,i,u){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oa:Ys,this.isPropagationStopped=Ys,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=ut(Gn),Lr=R({},Gn,{view:0,detail:0}),Lp=ut(Lr),uo,po,Mr,Pa=R({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(uo=e.screenX-Mr.screenX,po=e.screenY-Mr.screenY):po=uo=0,Mr=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:po}}),Ws=ut(Pa),Mp=R({},Pa,{dataTransfer:0}),_p=ut(Mp),Bp=R({},Lr,{relatedTarget:0}),mo=ut(Bp),jp=R({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=ut(jp),Hp=R({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vp=ut(Hp),$p=R({},Gn,{data:0}),qs=ut($p),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qp[e])?!!t[e]:!1}function fo(){return Gp}var Qp=R({},Lr,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=ut(Qp),Xp=R({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=ut(Xp),Jp=R({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),Zp=ut(Jp),em=R({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=ut(em),nm=R({},Pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=ut(nm),am=[9,13,27,32],ho=y&&"CompositionEvent"in window,_r=null;y&&"documentMode"in document&&(_r=document.documentMode);var lm=y&&"TextEvent"in window&&!_r,Qs=y&&(!ho||_r&&8<_r&&11>=_r),Ks=" ",Xs=!1;function Js(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function om(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(Xs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Xs?null:e;default:return null}}function im(e,t){if(Qn)return e==="compositionend"||!ho&&Js(e,t)?(e=$s(),Aa=so=on=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sm[e.type]:t==="textarea"}function tc(e,t,r,a){ws(a),t=La(t,"onChange"),0<t.length&&(r=new co("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Br=null,jr=null;function cm(e){xc(e,0)}function Ra(e){var t=er(e);if(Ut(t))return e}function um(e,t){if(e==="change")return t}var nc=!1;if(y){var go;if(y){var vo="oninput"in document;if(!vo){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),vo=typeof rc.oninput=="function"}go=vo}else go=!1;nc=go&&(!document.documentMode||9<document.documentMode)}function ac(){Br&&(Br.detachEvent("onpropertychange",lc),jr=Br=null)}function lc(e){if(e.propertyName==="value"&&Ra(jr)){var t=[];tc(t,jr,e,Ql(e)),Ss(cm,t)}}function dm(e,t,r){e==="focusin"?(ac(),Br=t,jr=r,Br.attachEvent("onpropertychange",lc)):e==="focusout"&&ac()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(jr)}function mm(e,t){if(e==="click")return Ra(t)}function fm(e,t){if(e==="input"||e==="change")return Ra(t)}function hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:hm;function Ur(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!h.call(t,l)||!St(e[l],t[l]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ic(e,t){var r=oc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oc(r)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cc(){for(var e=window,t=ha();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ha(e.document)}return t}function yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gm(e){var t=cc(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&sc(r.ownerDocument.documentElement,r)){if(a!==null&&yo(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=ic(r,i);var u=ic(r,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=y&&"documentMode"in document&&11>=document.documentMode,Kn=null,xo=null,Hr=null,Eo=!1;function uc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Eo||Kn==null||Kn!==ha(a)||(a=Kn,"selectionStart"in a&&yo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hr&&Ur(Hr,a)||(Hr=a,a=La(xo,"onSelect"),0<a.length&&(t=new co("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Kn)))}function Da(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Xn={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},wo={},dc={};y&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Fa(e){if(wo[e])return wo[e];if(!Xn[e])return e;var t=Xn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in dc)return wo[e]=t[r];return e}var pc=Fa("animationend"),mc=Fa("animationiteration"),fc=Fa("animationstart"),hc=Fa("transitionend"),gc=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){gc.set(e,t),m(t,[e])}for(var ko=0;ko<vc.length;ko++){var bo=vc[ko],ym=bo.toLowerCase(),xm=bo[0].toUpperCase()+bo.slice(1);sn(ym,"on"+xm)}sn(pc,"onAnimationEnd"),sn(mc,"onAnimationIteration"),sn(fc,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(hc,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function yc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,yp(a,t,void 0,e),e.currentTarget=null}function xc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],v=f.instance,z=f.currentTarget;if(f=f.listener,v!==i&&l.isPropagationStopped())break e;yc(l,f,z),i=v}else for(u=0;u<a.length;u++){if(f=a[u],v=f.instance,z=f.currentTarget,f=f.listener,v!==i&&l.isPropagationStopped())break e;yc(l,f,z),i=v}}}if(ya)throw e=Zl,ya=!1,Zl=null,e}function Ce(e,t){var r=t[Po];r===void 0&&(r=t[Po]=new Set);var a=e+"__bubble";r.has(a)||(Ec(t,e,2,!1),r.add(a))}function No(e,t,r){var a=0;t&&(a|=4),Ec(r,e,a,t)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ia]){e[Ia]=!0,d.forEach(function(r){r!=="selectionchange"&&(Em.has(r)||No(r,!1,e),No(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ia]||(t[Ia]=!0,No("selectionchange",!1,t))}}function Ec(e,t,r,a){switch(Vs(t)){case 1:var l=Fp;break;case 4:l=Ip;break;default:l=oo}r=l.bind(null,t,r,e),l=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function So(e,t,r,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var v=u.tag;if((v===3||v===4)&&(v=u.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;u=u.return}for(;f!==null;){if(u=An(f),u===null)return;if(v=u.tag,v===5||v===6){a=i=u;continue e}f=f.parentNode}}a=a.return}Ss(function(){var z=i,L=Ql(r),_=[];e:{var F=gc.get(e);if(F!==void 0){var Q=co,X=e;switch(e){case"keypress":if(Ta(r)===0)break e;case"keydown":case"keyup":Q=Kp;break;case"focusin":X="focus",Q=mo;break;case"focusout":X="blur",Q=mo;break;case"beforeblur":case"afterblur":Q=mo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Zp;break;case pc:case mc:case fc:Q=Up;break;case hc:Q=tm;break;case"scroll":Q=Lp;break;case"wheel":Q=rm;break;case"copy":case"cut":case"paste":Q=Vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Gs}var ee=(t&4)!==0,_e=!ee&&e==="scroll",S=ee?F!==null?F+"Capture":null:F;ee=[];for(var x=z,C;x!==null;){C=x;var H=C.stateNode;if(C.tag===5&&H!==null&&(C=H,S!==null&&(H=Cr(x,S),H!=null&&ee.push(Yr(x,H,C)))),_e)break;x=x.return}0<ee.length&&(F=new Q(F,X,null,r,L),_.push({event:F,listeners:ee}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",F&&r!==Gl&&(X=r.relatedTarget||r.fromElement)&&(An(X)||X[Ht]))break e;if((Q||F)&&(F=L.window===L?L:(F=L.ownerDocument)?F.defaultView||F.parentWindow:window,Q?(X=r.relatedTarget||r.toElement,Q=z,X=X?An(X):null,X!==null&&(_e=zn(X),X!==_e||X.tag!==5&&X.tag!==6)&&(X=null)):(Q=null,X=z),Q!==X)){if(ee=Ws,H="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Gs,H="onPointerLeave",S="onPointerEnter",x="pointer"),_e=Q==null?F:er(Q),C=X==null?F:er(X),F=new ee(H,x+"leave",Q,r,L),F.target=_e,F.relatedTarget=C,H=null,An(L)===z&&(ee=new ee(S,x+"enter",X,r,L),ee.target=C,ee.relatedTarget=_e,H=ee),_e=H,Q&&X)t:{for(ee=Q,S=X,x=0,C=ee;C;C=Jn(C))x++;for(C=0,H=S;H;H=Jn(H))C++;for(;0<x-C;)ee=Jn(ee),x--;for(;0<C-x;)S=Jn(S),C--;for(;x--;){if(ee===S||S!==null&&ee===S.alternate)break t;ee=Jn(ee),S=Jn(S)}ee=null}else ee=null;Q!==null&&wc(_,F,Q,ee,!1),X!==null&&_e!==null&&wc(_,_e,X,ee,!0)}}e:{if(F=z?er(z):window,Q=F.nodeName&&F.nodeName.toLowerCase(),Q==="select"||Q==="input"&&F.type==="file")var ne=um;else if(ec(F))if(nc)ne=fm;else{ne=pm;var le=dm}else(Q=F.nodeName)&&Q.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(ne=mm);if(ne&&(ne=ne(e,z))){tc(_,ne,r,L);break e}le&&le(e,F,z),e==="focusout"&&(le=F._wrapperState)&&le.controlled&&F.type==="number"&&Vl(F,"number",F.value)}switch(le=z?er(z):window,e){case"focusin":(ec(le)||le.contentEditable==="true")&&(Kn=le,xo=z,Hr=null);break;case"focusout":Hr=xo=Kn=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,uc(_,r,L);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":uc(_,r,L)}var oe;if(ho)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Qn?Js(e,r)&&(de="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(de="onCompositionStart");de&&(Qs&&r.locale!=="ko"&&(Qn||de!=="onCompositionStart"?de==="onCompositionEnd"&&Qn&&(oe=$s()):(on=L,so="value"in on?on.value:on.textContent,Qn=!0)),le=La(z,de),0<le.length&&(de=new qs(de,e,null,r,L),_.push({event:de,listeners:le}),oe?de.data=oe:(oe=Zs(r),oe!==null&&(de.data=oe)))),(oe=lm?om(e,r):im(e,r))&&(z=La(z,"onBeforeInput"),0<z.length&&(L=new qs("onBeforeInput","beforeinput",null,r,L),_.push({event:L,listeners:z}),L.data=oe))}xc(_,t)})}function Yr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function La(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Cr(e,r),i!=null&&a.unshift(Yr(e,i,l)),i=Cr(e,t),i!=null&&a.push(Yr(e,i,l))),e=e.return}return a}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,r,a,l){for(var i=t._reactName,u=[];r!==null&&r!==a;){var f=r,v=f.alternate,z=f.stateNode;if(v!==null&&v===a)break;f.tag===5&&z!==null&&(f=z,l?(v=Cr(r,i),v!=null&&u.unshift(Yr(r,v,f))):l||(v=Cr(r,i),v!=null&&u.push(Yr(r,v,f)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var wm=/\r\n?/g,km=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(wm,`
`).replace(km,"")}function Ma(e,t,r){if(t=kc(t),kc(e)!==t&&r)throw Error(c(425))}function _a(){}var Co=null,zo=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,Nm=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(Sm)}:To;function Sm(e){setTimeout(function(){throw e})}function Oo(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Ir(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Ir(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Zn,Wr="__reactProps$"+Zn,Ht="__reactContainer$"+Zn,Po="__reactEvents$"+Zn,Cm="__reactListeners$"+Zn,zm="__reactHandles$"+Zn;function An(e){var t=e[Dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ht]||r[Dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Nc(e);e!==null;){if(r=e[Dt])return r;e=Nc(e)}return t}e=r,r=e.parentNode}return null}function qr(e){return e=e[Dt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ba(e){return e[Wr]||null}var Ro=[],tr=-1;function un(e){return{current:e}}function ze(e){0>tr||(e.current=Ro[tr],Ro[tr]=null,tr--)}function Se(e,t){tr++,Ro[tr]=e.current,e.current=t}var dn={},Qe=un(dn),at=un(!1),Tn=dn;function nr(e,t){var r=e.type.contextTypes;if(!r)return dn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in r)l[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function lt(e){return e=e.childContextTypes,e!=null}function ja(){ze(at),ze(Qe)}function Sc(e,t,r){if(Qe.current!==dn)throw Error(c(168));Se(Qe,t),Se(at,r)}function Cc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(c(108,Z(e)||"Unknown",l));return R({},r,a)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Tn=Qe.current,Se(Qe,e),Se(at,at.current),!0}function zc(e,t,r){var a=e.stateNode;if(!a)throw Error(c(169));r?(e=Cc(e,t,Tn),a.__reactInternalMemoizedMergedChildContext=e,ze(at),ze(Qe),Se(Qe,e)):ze(at),Se(at,r)}var Vt=null,Ha=!1,Do=!1;function Ac(e){Vt===null?Vt=[e]:Vt.push(e)}function Am(e){Ha=!0,Ac(e)}function pn(){if(!Do&&Vt!==null){Do=!0;var e=0,t=be;try{var r=Vt;for(be=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Vt=null,Ha=!1}catch(l){throw Vt!==null&&(Vt=Vt.slice(e+1)),Os(eo,pn),l}finally{be=t,Do=!1}}return null}var rr=[],ar=0,Va=null,$a=0,ht=[],gt=0,On=null,$t=1,Yt="";function Pn(e,t){rr[ar++]=$a,rr[ar++]=Va,Va=e,$a=t}function Tc(e,t,r){ht[gt++]=$t,ht[gt++]=Yt,ht[gt++]=On,On=e;var a=$t;e=Yt;var l=32-Nt(a)-1;a&=~(1<<l),r+=1;var i=32-Nt(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,$t=1<<32-Nt(t)+l|r<<l|a,Yt=i+e}else $t=1<<i|r<<l|a,Yt=e}function Fo(e){e.return!==null&&(Pn(e,1),Tc(e,1,0))}function Io(e){for(;e===Va;)Va=rr[--ar],rr[ar]=null,$a=rr[--ar],rr[ar]=null;for(;e===On;)On=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null,$t=ht[--gt],ht[gt]=null}var dt=null,pt=null,Te=!1,Ct=null;function Oc(e,t){var r=Et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Pc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,pt=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=On!==null?{id:$t,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,pt=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mo(e){if(Te){var t=pt;if(t){var r=t;if(!Pc(e,t)){if(Lo(e))throw Error(c(418));t=cn(r.nextSibling);var a=dt;t&&Pc(e,t)?Oc(a,r):(e.flags=e.flags&-4097|2,Te=!1,dt=e)}}else{if(Lo(e))throw Error(c(418));e.flags=e.flags&-4097|2,Te=!1,dt=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Ya(e){if(e!==dt)return!1;if(!Te)return Rc(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=pt)){if(Lo(e))throw Dc(),Error(c(418));for(;t;)Oc(e,t),t=cn(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){pt=cn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=dt?cn(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=pt;e;)e=cn(e.nextSibling)}function lr(){pt=dt=null,Te=!1}function _o(e){Ct===null?Ct=[e]:Ct.push(e)}var Tm=q.ReactCurrentBatchConfig;function Gr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var a=r.stateNode}if(!a)throw Error(c(147,e));var l=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var f=l.refs;u===null?delete f[i]:f[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Wa(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function Ic(e){function t(S,x){if(e){var C=S.deletions;C===null?(S.deletions=[x],S.flags|=16):C.push(x)}}function r(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function a(S,x){for(S=new Map;x!==null;)x.key!==null?S.set(x.key,x):S.set(x.index,x),x=x.sibling;return S}function l(S,x){return S=En(S,x),S.index=0,S.sibling=null,S}function i(S,x,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<x?(S.flags|=2,x):C):(S.flags|=2,x)):(S.flags|=1048576,x)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function f(S,x,C,H){return x===null||x.tag!==6?(x=Ti(C,S.mode,H),x.return=S,x):(x=l(x,C),x.return=S,x)}function v(S,x,C,H){var ne=C.type;return ne===xe?L(S,x,C.props.children,H,C.key):x!==null&&(x.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===me&&Fc(ne)===x.type)?(H=l(x,C.props),H.ref=Gr(S,x,C),H.return=S,H):(H=gl(C.type,C.key,C.props,null,S.mode,H),H.ref=Gr(S,x,C),H.return=S,H)}function z(S,x,C,H){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=Oi(C,S.mode,H),x.return=S,x):(x=l(x,C.children||[]),x.return=S,x)}function L(S,x,C,H,ne){return x===null||x.tag!==7?(x=Bn(C,S.mode,H,ne),x.return=S,x):(x=l(x,C),x.return=S,x)}function _(S,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ti(""+x,S.mode,C),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case se:return C=gl(x.type,x.key,x.props,null,S.mode,C),C.ref=Gr(S,null,x),C.return=S,C;case fe:return x=Oi(x,S.mode,C),x.return=S,x;case me:var H=x._init;return _(S,H(x._payload),C)}if(br(x)||D(x))return x=Bn(x,S.mode,C,null),x.return=S,x;Wa(S,x)}return null}function F(S,x,C,H){var ne=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return ne!==null?null:f(S,x,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case se:return C.key===ne?v(S,x,C,H):null;case fe:return C.key===ne?z(S,x,C,H):null;case me:return ne=C._init,F(S,x,ne(C._payload),H)}if(br(C)||D(C))return ne!==null?null:L(S,x,C,H,null);Wa(S,C)}return null}function Q(S,x,C,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return S=S.get(C)||null,f(x,S,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case se:return S=S.get(H.key===null?C:H.key)||null,v(x,S,H,ne);case fe:return S=S.get(H.key===null?C:H.key)||null,z(x,S,H,ne);case me:var le=H._init;return Q(S,x,C,le(H._payload),ne)}if(br(H)||D(H))return S=S.get(C)||null,L(x,S,H,ne,null);Wa(x,H)}return null}function X(S,x,C,H){for(var ne=null,le=null,oe=x,de=x=0,Ye=null;oe!==null&&de<C.length;de++){oe.index>de?(Ye=oe,oe=null):Ye=oe.sibling;var ke=F(S,oe,C[de],H);if(ke===null){oe===null&&(oe=Ye);break}e&&oe&&ke.alternate===null&&t(S,oe),x=i(ke,x,de),le===null?ne=ke:le.sibling=ke,le=ke,oe=Ye}if(de===C.length)return r(S,oe),Te&&Pn(S,de),ne;if(oe===null){for(;de<C.length;de++)oe=_(S,C[de],H),oe!==null&&(x=i(oe,x,de),le===null?ne=oe:le.sibling=oe,le=oe);return Te&&Pn(S,de),ne}for(oe=a(S,oe);de<C.length;de++)Ye=Q(oe,S,de,C[de],H),Ye!==null&&(e&&Ye.alternate!==null&&oe.delete(Ye.key===null?de:Ye.key),x=i(Ye,x,de),le===null?ne=Ye:le.sibling=Ye,le=Ye);return e&&oe.forEach(function(wn){return t(S,wn)}),Te&&Pn(S,de),ne}function ee(S,x,C,H){var ne=D(C);if(typeof ne!="function")throw Error(c(150));if(C=ne.call(C),C==null)throw Error(c(151));for(var le=ne=null,oe=x,de=x=0,Ye=null,ke=C.next();oe!==null&&!ke.done;de++,ke=C.next()){oe.index>de?(Ye=oe,oe=null):Ye=oe.sibling;var wn=F(S,oe,ke.value,H);if(wn===null){oe===null&&(oe=Ye);break}e&&oe&&wn.alternate===null&&t(S,oe),x=i(wn,x,de),le===null?ne=wn:le.sibling=wn,le=wn,oe=Ye}if(ke.done)return r(S,oe),Te&&Pn(S,de),ne;if(oe===null){for(;!ke.done;de++,ke=C.next())ke=_(S,ke.value,H),ke!==null&&(x=i(ke,x,de),le===null?ne=ke:le.sibling=ke,le=ke);return Te&&Pn(S,de),ne}for(oe=a(S,oe);!ke.done;de++,ke=C.next())ke=Q(oe,S,de,ke.value,H),ke!==null&&(e&&ke.alternate!==null&&oe.delete(ke.key===null?de:ke.key),x=i(ke,x,de),le===null?ne=ke:le.sibling=ke,le=ke);return e&&oe.forEach(function(cf){return t(S,cf)}),Te&&Pn(S,de),ne}function _e(S,x,C,H){if(typeof C=="object"&&C!==null&&C.type===xe&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case se:e:{for(var ne=C.key,le=x;le!==null;){if(le.key===ne){if(ne=C.type,ne===xe){if(le.tag===7){r(S,le.sibling),x=l(le,C.props.children),x.return=S,S=x;break e}}else if(le.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===me&&Fc(ne)===le.type){r(S,le.sibling),x=l(le,C.props),x.ref=Gr(S,le,C),x.return=S,S=x;break e}r(S,le);break}else t(S,le);le=le.sibling}C.type===xe?(x=Bn(C.props.children,S.mode,H,C.key),x.return=S,S=x):(H=gl(C.type,C.key,C.props,null,S.mode,H),H.ref=Gr(S,x,C),H.return=S,S=H)}return u(S);case fe:e:{for(le=C.key;x!==null;){if(x.key===le)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){r(S,x.sibling),x=l(x,C.children||[]),x.return=S,S=x;break e}else{r(S,x);break}else t(S,x);x=x.sibling}x=Oi(C,S.mode,H),x.return=S,S=x}return u(S);case me:return le=C._init,_e(S,x,le(C._payload),H)}if(br(C))return X(S,x,C,H);if(D(C))return ee(S,x,C,H);Wa(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,x!==null&&x.tag===6?(r(S,x.sibling),x=l(x,C),x.return=S,S=x):(r(S,x),x=Ti(C,S.mode,H),x.return=S,S=x),u(S)):r(S,x)}return _e}var or=Ic(!0),Lc=Ic(!1),qa=un(null),Ga=null,ir=null,Bo=null;function jo(){Bo=ir=Ga=null}function Uo(e){var t=qa.current;ze(qa),e._currentValue=t}function Ho(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function sr(e,t){Ga=e,Bo=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Ga===null)throw Error(c(308));ir=e,Ga.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Rn=null;function Vo(e){Rn===null?Rn=[e]:Rn.push(e)}function Mc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Vo(t)):(r.next=l.next,l.next=r),t.interleaved=r,Wt(e,a)}function Wt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mn=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Wt(e,r)}return l=a.interleaved,l===null?(t.next=t,Vo(a)):(t.next=l.next,l.next=t),a.interleaved=t,Wt(e,r)}function Qa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,ro(e,r)}}function Bc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?l=i=u:i=i.next=u,r=r.next}while(r!==null);i===null?l=i=t:i=i.next=t}else l=i=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ka(e,t,r,a){var l=e.updateQueue;mn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var v=f,z=v.next;v.next=null,u===null?i=z:u.next=z,u=v;var L=e.alternate;L!==null&&(L=L.updateQueue,f=L.lastBaseUpdate,f!==u&&(f===null?L.firstBaseUpdate=z:f.next=z,L.lastBaseUpdate=v))}if(i!==null){var _=l.baseState;u=0,L=z=v=null,f=i;do{var F=f.lane,Q=f.eventTime;if((a&F)===F){L!==null&&(L=L.next={eventTime:Q,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var X=e,ee=f;switch(F=t,Q=r,ee.tag){case 1:if(X=ee.payload,typeof X=="function"){_=X.call(Q,_,F);break e}_=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=ee.payload,F=typeof X=="function"?X.call(Q,_,F):X,F==null)break e;_=R({},_,F);break e;case 2:mn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,F=l.effects,F===null?l.effects=[f]:F.push(f))}else Q={eventTime:Q,lane:F,tag:f.tag,payload:f.payload,callback:f.callback,next:null},L===null?(z=L=Q,v=_):L=L.next=Q,u|=F;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;F=f,f=F.next,F.next=null,l.lastBaseUpdate=F,l.shared.pending=null}}while(!0);if(L===null&&(v=_),l.baseState=v,l.firstBaseUpdate=z,l.lastBaseUpdate=L,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);In|=u,e.lanes=u,e.memoizedState=_}}function jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var Qr={},Ft=un(Qr),Kr=un(Qr),Xr=un(Qr);function Dn(e){if(e===Qr)throw Error(c(174));return e}function Yo(e,t){switch(Se(Xr,t),Se(Kr,e),Se(Ft,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}ze(Ft),Se(Ft,t)}function cr(){ze(Ft),ze(Kr),ze(Xr)}function Uc(e){Dn(Xr.current);var t=Dn(Ft.current),r=Yl(t,e.type);t!==r&&(Se(Kr,e),Se(Ft,r))}function Wo(e){Kr.current===e&&(ze(Ft),ze(Kr))}var Oe=un(0);function Xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Go(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Ja=q.ReactCurrentDispatcher,Qo=q.ReactCurrentBatchConfig,Fn=0,Pe=null,Ue=null,Ve=null,Za=!1,Jr=!1,Zr=0,Om=0;function Ke(){throw Error(c(321))}function Ko(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function Xo(e,t,r,a,l,i){if(Fn=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?Fm:Im,e=r(a,l),Jr){i=0;do{if(Jr=!1,Zr=0,25<=i)throw Error(c(301));i+=1,Ve=Ue=null,t.updateQueue=null,Ja.current=Lm,e=r(a,l)}while(Jr)}if(Ja.current=nl,t=Ue!==null&&Ue.next!==null,Fn=0,Ve=Ue=Pe=null,Za=!1,t)throw Error(c(300));return e}function Jo(){var e=Zr!==0;return Zr=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Pe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function yt(){if(Ue===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ve===null?Pe.memoizedState:Ve.next;if(t!==null)Ve=t,Ue=e;else{if(e===null)throw Error(c(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?Pe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ea(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=yt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=Ue,l=a.baseQueue,i=r.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,r.pending=null}if(l!==null){i=l.next,a=a.baseState;var f=u=null,v=null,z=i;do{var L=z.lane;if((Fn&L)===L)v!==null&&(v=v.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),a=z.hasEagerState?z.eagerState:e(a,z.action);else{var _={lane:L,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};v===null?(f=v=_,u=a):v=v.next=_,Pe.lanes|=L,In|=L}z=z.next}while(z!==null&&z!==i);v===null?u=a:v.next=f,St(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=v,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do i=l.lane,Pe.lanes|=i,In|=i,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ei(e){var t=yt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,i=t.memoizedState;if(l!==null){r.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);St(i,t.memoizedState)||(ot=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,a]}function Hc(){}function Vc(e,t){var r=Pe,a=yt(),l=t(),i=!St(a.memoizedState,l);if(i&&(a.memoizedState=l,ot=!0),a=a.queue,ti(Wc.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,ta(9,Yc.bind(null,r,a,l,t),void 0,null),$e===null)throw Error(c(349));(Fn&30)!==0||$c(r,t,l)}return l}function $c(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Yc(e,t,r,a){t.value=r,t.getSnapshot=a,qc(t)&&Gc(e)}function Wc(e,t,r){return r(function(){qc(t)&&Gc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function Gc(e){var t=Wt(e,1);t!==null&&Ot(t,e,1,-1)}function Qc(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t.queue=e,e=e.dispatch=Dm.bind(null,Pe,e),[t.memoizedState,e]}function ta(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Kc(){return yt().memoizedState}function el(e,t,r,a){var l=It();Pe.flags|=e,l.memoizedState=ta(1|t,r,void 0,a===void 0?null:a)}function tl(e,t,r,a){var l=yt();a=a===void 0?null:a;var i=void 0;if(Ue!==null){var u=Ue.memoizedState;if(i=u.destroy,a!==null&&Ko(a,u.deps)){l.memoizedState=ta(t,r,i,a);return}}Pe.flags|=e,l.memoizedState=ta(1|t,r,i,a)}function Xc(e,t){return el(8390656,8,e,t)}function ti(e,t){return tl(2048,8,e,t)}function Jc(e,t){return tl(4,2,e,t)}function Zc(e,t){return tl(4,4,e,t)}function eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tu(e,t,r){return r=r!=null?r.concat([e]):null,tl(4,4,eu.bind(null,t,e),r)}function ni(){}function nu(e,t){var r=yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ko(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function ru(e,t){var r=yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ko(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function au(e,t,r){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=r):(St(r,t)||(r=Fs(),Pe.lanes|=r,In|=r,e.baseState=!0),t)}function Pm(e,t){var r=be;be=r!==0&&4>r?r:4,e(!0);var a=Qo.transition;Qo.transition={};try{e(!1),t()}finally{be=r,Qo.transition=a}}function lu(){return yt().memoizedState}function Rm(e,t,r){var a=yn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},ou(e))iu(t,r);else if(r=Mc(e,t,r,a),r!==null){var l=tt();Ot(r,e,a,l),su(r,t,a)}}function Dm(e,t,r){var a=yn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(ou(e))iu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,r);if(l.hasEagerState=!0,l.eagerState=f,St(f,u)){var v=t.interleaved;v===null?(l.next=l,Vo(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}r=Mc(e,t,l,a),r!==null&&(l=tt(),Ot(r,e,a,l),su(r,t,a))}}function ou(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function iu(e,t){Jr=Za=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function su(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,ro(e,r)}}var nl={readContext:vt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Fm={readContext:vt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Xc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,el(4194308,4,eu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var r=It();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=It();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Rm.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:ni,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=Pm.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Pe,l=It();if(Te){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),$e===null)throw Error(c(349));(Fn&30)!==0||$c(a,t,r)}l.memoizedState=r;var i={value:r,getSnapshot:t};return l.queue=i,Xc(Wc.bind(null,a,i,e),[e]),a.flags|=2048,ta(9,Yc.bind(null,a,i,r,t),void 0,null),r},useId:function(){var e=It(),t=$e.identifierPrefix;if(Te){var r=Yt,a=$t;r=(a&~(1<<32-Nt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Zr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Om++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Im={readContext:vt,useCallback:nu,useContext:vt,useEffect:ti,useImperativeHandle:tu,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:ru,useReducer:Zo,useRef:Kc,useState:function(){return Zo(ea)},useDebugValue:ni,useDeferredValue:function(e){var t=yt();return au(t,Ue.memoizedState,e)},useTransition:function(){var e=Zo(ea)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:lu,unstable_isNewReconciler:!1},Lm={readContext:vt,useCallback:nu,useContext:vt,useEffect:ti,useImperativeHandle:tu,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:ru,useReducer:ei,useRef:Kc,useState:function(){return ei(ea)},useDebugValue:ni,useDeferredValue:function(e){var t=yt();return Ue===null?t.memoizedState=e:au(t,Ue.memoizedState,e)},useTransition:function(){var e=ei(ea)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:lu,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ri(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:R({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var rl={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=tt(),l=yn(e),i=qt(a,l);i.payload=t,r!=null&&(i.callback=r),t=fn(e,i,l),t!==null&&(Ot(t,e,l,a),Qa(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=tt(),l=yn(e),i=qt(a,l);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=fn(e,i,l),t!==null&&(Ot(t,e,l,a),Qa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=tt(),a=yn(e),l=qt(r,a);l.tag=2,t!=null&&(l.callback=t),t=fn(e,l,a),t!==null&&(Ot(t,e,a,r),Qa(t,e,a))}};function cu(e,t,r,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ur(r,a)||!Ur(l,i):!0}function uu(e,t,r){var a=!1,l=dn,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(l=lt(t)?Tn:Qe.current,a=t.contextTypes,i=(a=a!=null)?nr(e,l):dn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function du(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function ai(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},$o(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=vt(i):(i=lt(t)?Tn:Qe.current,l.context=nr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ri(e,t,i,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&rl.enqueueReplaceState(l,l.state,null),Ka(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var r="",a=t;do r+=B(a),a=a.return;while(a);var l=r}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function li(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function pu(e,t,r){r=qt(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){ul||(ul=!0,wi=a),oi(e,t)},r}function mu(e,t,r){r=qt(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){oi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){oi(e,t),typeof a!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function fu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Mm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Xm.bind(null,e,t,r),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qt(-1,1),t.tag=2,fn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var _m=q.ReactCurrentOwner,ot=!1;function et(e,t,r,a){t.child=e===null?Lc(t,null,r,a):or(t,e.child,r,a)}function vu(e,t,r,a,l){r=r.render;var i=t.ref;return sr(t,l),a=Xo(e,t,r,a,i,l),r=Jo(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Gt(e,t,l)):(Te&&r&&Fo(t),t.flags|=1,et(e,t,a,l),t.child)}function yu(e,t,r,a,l){if(e===null){var i=r.type;return typeof i=="function"&&!Ai(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,xu(e,t,i,a,l)):(e=gl(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ur,r(u,a)&&e.ref===t.ref)return Gt(e,t,l)}return t.flags|=1,e=En(i,a),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,r,a,l){if(e!==null){var i=e.memoizedProps;if(Ur(i,a)&&e.ref===t.ref)if(ot=!1,t.pendingProps=a=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Gt(e,t,l)}return ii(e,t,r,a,l)}function Eu(e,t,r){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(pr,mt),mt|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(pr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:r,Se(pr,mt),mt|=a}else i!==null?(a=i.baseLanes|r,t.memoizedState=null):a=r,Se(pr,mt),mt|=a;return et(e,t,l,r),t.child}function wu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,r,a,l){var i=lt(r)?Tn:Qe.current;return i=nr(t,i),sr(t,l),r=Xo(e,t,r,a,i,l),a=Jo(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Gt(e,t,l)):(Te&&a&&Fo(t),t.flags|=1,et(e,t,r,l),t.child)}function ku(e,t,r,a,l){if(lt(r)){var i=!0;Ua(t)}else i=!1;if(sr(t,l),t.stateNode===null)ll(e,t),uu(t,r,a),ai(t,r,a,l),a=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var v=u.context,z=r.contextType;typeof z=="object"&&z!==null?z=vt(z):(z=lt(r)?Tn:Qe.current,z=nr(t,z));var L=r.getDerivedStateFromProps,_=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function";_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||v!==z)&&du(t,u,a,z),mn=!1;var F=t.memoizedState;u.state=F,Ka(t,a,u,l),v=t.memoizedState,f!==a||F!==v||at.current||mn?(typeof L=="function"&&(ri(t,r,L,a),v=t.memoizedState),(f=mn||cu(t,r,f,a,F,v,z))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=v),u.props=a,u.state=v,u.context=z,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,_c(e,t),f=t.memoizedProps,z=t.type===t.elementType?f:zt(t.type,f),u.props=z,_=t.pendingProps,F=u.context,v=r.contextType,typeof v=="object"&&v!==null?v=vt(v):(v=lt(r)?Tn:Qe.current,v=nr(t,v));var Q=r.getDerivedStateFromProps;(L=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==_||F!==v)&&du(t,u,a,v),mn=!1,F=t.memoizedState,u.state=F,Ka(t,a,u,l);var X=t.memoizedState;f!==_||F!==X||at.current||mn?(typeof Q=="function"&&(ri(t,r,Q,a),X=t.memoizedState),(z=mn||cu(t,r,z,a,F,X,v)||!1)?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,X,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,X,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=X),u.props=a,u.state=X,u.context=v,a=z):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),a=!1)}return si(e,t,r,a,i,l)}function si(e,t,r,a,l,i){wu(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return l&&zc(t,r,!1),Gt(e,t,i);a=t.stateNode,_m.current=t;var f=u&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=or(t,e.child,null,i),t.child=or(t,null,f,i)):et(e,t,f,i),t.memoizedState=a.state,l&&zc(t,r,!0),t.child}function bu(e){var t=e.stateNode;t.pendingContext?Sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sc(e,t.context,!1),Yo(e,t.containerInfo)}function Nu(e,t,r,a,l){return lr(),_o(l),t.flags|=256,et(e,t,r,a),t.child}var ci={dehydrated:null,treeContext:null,retryLane:0};function ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function Su(e,t,r){var a=t.pendingProps,l=Oe.current,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Se(Oe,l&1),e===null)return Mo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,i?(a=t.mode,i=t.child,u={mode:"hidden",children:u},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=vl(u,a,0,null),e=Bn(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ui(r),t.memoizedState=ci,e):di(t,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return Bm(e,t,u,a,f,l,r);if(i){i=a.fallback,u=t.mode,l=e.child,f=l.sibling;var v={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=v,t.deletions=null):(a=En(l,v),a.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=En(f,i):(i=Bn(i,u,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,u=e.child.memoizedState,u=u===null?ui(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~r,t.memoizedState=ci,a}return i=e.child,e=i.sibling,a=En(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function di(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,r,a){return a!==null&&_o(a),or(t,e.child,null,r),e=di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bm(e,t,r,a,l,i,u){if(r)return t.flags&256?(t.flags&=-257,a=li(Error(c(422))),al(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,l=t.mode,a=vl({mode:"visible",children:a.children},l,0,null),i=Bn(i,l,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&or(t,e.child,null,u),t.child.memoizedState=ui(u),t.memoizedState=ci,i);if((t.mode&1)===0)return al(e,t,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,i=Error(c(419)),a=li(i,a,void 0),al(e,t,u,a)}if(f=(u&e.childLanes)!==0,ot||f){if(a=$e,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Wt(e,l),Ot(a,e,l,-1))}return zi(),a=li(Error(c(421))),al(e,t,u,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Jm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,pt=cn(l.nextSibling),dt=t,Te=!0,Ct=null,e!==null&&(ht[gt++]=$t,ht[gt++]=Yt,ht[gt++]=On,$t=e.id,Yt=e.overflow,On=t),t=di(t,a.children),t.flags|=4096,t)}function Cu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ho(e.return,t,r)}function pi(e,t,r,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=r,i.tailMode=l)}function zu(e,t,r){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(et(e,t,a.children,r),a=Oe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,r,t);else if(e.tag===19)Cu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Se(Oe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Xa(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),pi(t,!1,l,r,i);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xa(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}pi(t,!0,r,null,i);break;case"together":pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ll(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function jm(e,t,r){switch(t.tag){case 3:bu(t),lr();break;case 5:Uc(t);break;case 1:lt(t.type)&&Ua(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Se(qa,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Se(Oe,Oe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Su(e,t,r):(Se(Oe,Oe.current&1),e=Gt(e,t,r),e!==null?e.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return zu(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Se(Oe,Oe.current),a)break;return null;case 22:case 23:return t.lanes=0,Eu(e,t,r)}return Gt(e,t,r)}var Au,mi,Tu,Ou;Au=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},mi=function(){},Tu=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Dn(Ft.current);var i=null;switch(r){case"input":l=Ul(e,l),a=Ul(e,a),i=[];break;case"select":l=R({},l,{value:void 0}),a=R({},a,{value:void 0}),i=[];break;case"textarea":l=$l(e,l),a=$l(e,a),i=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=_a)}Wl(r,a);var u;r=null;for(z in l)if(!a.hasOwnProperty(z)&&l.hasOwnProperty(z)&&l[z]!=null)if(z==="style"){var f=l[z];for(u in f)f.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(p.hasOwnProperty(z)?i||(i=[]):(i=i||[]).push(z,null));for(z in a){var v=a[z];if(f=l!=null?l[z]:void 0,a.hasOwnProperty(z)&&v!==f&&(v!=null||f!=null))if(z==="style")if(f){for(u in f)!f.hasOwnProperty(u)||v&&v.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in v)v.hasOwnProperty(u)&&f[u]!==v[u]&&(r||(r={}),r[u]=v[u])}else r||(i||(i=[]),i.push(z,r)),r=v;else z==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,f=f?f.__html:void 0,v!=null&&f!==v&&(i=i||[]).push(z,v)):z==="children"?typeof v!="string"&&typeof v!="number"||(i=i||[]).push(z,""+v):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(p.hasOwnProperty(z)?(v!=null&&z==="onScroll"&&Ce("scroll",e),i||f===v||(i=[])):(i=i||[]).push(z,v))}r&&(i=i||[]).push("style",r);var z=i;(t.updateQueue=z)&&(t.flags|=4)}},Ou=function(e,t,r,a){r!==a&&(t.flags|=4)};function na(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Um(e,t,r){var a=t.pendingProps;switch(Io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return lt(t.type)&&ja(),Xe(t),null;case 3:return a=t.stateNode,cr(),ze(at),ze(Qe),Go(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ni(Ct),Ct=null))),mi(e,t),Xe(t),null;case 5:Wo(t);var l=Dn(Xr.current);if(r=t.type,e!==null&&t.stateNode!=null)Tu(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}if(e=Dn(Ft.current),Ya(t)){a=t.stateNode,r=t.type;var i=t.memoizedProps;switch(a[Dt]=t,a[Wr]=i,e=(t.mode&1)!==0,r){case"dialog":Ce("cancel",a),Ce("close",a);break;case"iframe":case"object":case"embed":Ce("load",a);break;case"video":case"audio":for(l=0;l<Vr.length;l++)Ce(Vr[l],a);break;case"source":Ce("error",a);break;case"img":case"image":case"link":Ce("error",a),Ce("load",a);break;case"details":Ce("toggle",a);break;case"input":us(a,i),Ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",a);break;case"textarea":ms(a,i),Ce("invalid",a)}Wl(r,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];u==="children"?typeof f=="string"?a.textContent!==f&&(i.suppressHydrationWarning!==!0&&Ma(a.textContent,f,e),l=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Ma(a.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Ce("scroll",a)}switch(r){case"input":Fe(a),ps(a,i,!0);break;case"textarea":Fe(a),hs(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=_a)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(r,{is:a.is}):(e=u.createElement(r),r==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,r),e[Dt]=t,e[Wr]=a,Au(e,t,!1,!1),t.stateNode=e;e:{switch(u=ql(r,a),r){case"dialog":Ce("cancel",e),Ce("close",e),l=a;break;case"iframe":case"object":case"embed":Ce("load",e),l=a;break;case"video":case"audio":for(l=0;l<Vr.length;l++)Ce(Vr[l],e);l=a;break;case"source":Ce("error",e),l=a;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=a;break;case"details":Ce("toggle",e),l=a;break;case"input":us(e,a),l=Ul(e,a),Ce("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=R({},a,{value:void 0}),Ce("invalid",e);break;case"textarea":ms(e,a),l=$l(e,a),Ce("invalid",e);break;default:l=a}Wl(r,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var v=f[i];i==="style"?xs(e,v):i==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&vs(e,v)):i==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Nr(e,v):typeof v=="number"&&Nr(e,""+v):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?v!=null&&i==="onScroll"&&Ce("scroll",e):v!=null&&W(e,i,v,u))}switch(r){case"input":Fe(e),ps(e,a,!1);break;case"textarea":Fe(e),hs(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ie(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?$n(e,!!a.multiple,i,!1):a.defaultValue!=null&&$n(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=_a)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(r=Dn(Xr.current),Dn(Ft.current),Ya(t)){if(a=t.stateNode,r=t.memoizedProps,a[Dt]=t,(i=a.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:Ma(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ma(a.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Dt]=t,t.stateNode=a}return Xe(t),null;case 13:if(ze(Oe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Dc(),lr(),t.flags|=98560,i=!1;else if(i=Ya(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Dt]=t}else lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else Ct!==null&&(Ni(Ct),Ct=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Oe.current&1)!==0?He===0&&(He=3):zi())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return cr(),mi(e,t),e===null&&$r(t.stateNode.containerInfo),Xe(t),null;case 10:return Uo(t.type._context),Xe(t),null;case 17:return lt(t.type)&&ja(),Xe(t),null;case 19:if(ze(Oe),i=t.memoizedState,i===null)return Xe(t),null;if(a=(t.flags&128)!==0,u=i.rendering,u===null)if(a)na(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Xa(e),u!==null){for(t.flags|=128,na(i,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)i=r,e=a,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Se(Oe,Oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Me()>mr&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304)}else{if(!a)if(e=Xa(u),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Te)return Xe(t),null}else 2*Me()-i.renderingStartTime>mr&&r!==1073741824&&(t.flags|=128,a=!0,na(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(r=i.last,r!==null?r.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Me(),t.sibling=null,r=Oe.current,Se(Oe,a?r&1|2:r&1),t):(Xe(t),null);case 22:case 23:return Ci(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(mt&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Hm(e,t){switch(Io(t),t.tag){case 1:return lt(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ze(at),ze(Qe),Go(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wo(t),null;case 13:if(ze(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Oe),null;case 4:return cr(),null;case 10:return Uo(t.type._context),null;case 22:case 23:return Ci(),null;case 24:return null;default:return null}}var ol=!1,Je=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,K=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Ie(e,t,a)}else r.current=null}function fi(e,t,r){try{r()}catch(a){Ie(e,t,a)}}var Pu=!1;function $m(e,t){if(Co=Ca,e=cc(),yo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var u=0,f=-1,v=-1,z=0,L=0,_=e,F=null;t:for(;;){for(var Q;_!==r||l!==0&&_.nodeType!==3||(f=u+l),_!==i||a!==0&&_.nodeType!==3||(v=u+a),_.nodeType===3&&(u+=_.nodeValue.length),(Q=_.firstChild)!==null;)F=_,_=Q;for(;;){if(_===e)break t;if(F===r&&++z===l&&(f=u),F===i&&++L===a&&(v=u),(Q=_.nextSibling)!==null)break;_=F,F=_.parentNode}_=Q}r=f===-1||v===-1?null:{start:f,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(zo={focusedElem:e,selectionRange:r},Ca=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var ee=X.memoizedProps,_e=X.memoizedState,S=t.stateNode,x=S.getSnapshotBeforeUpdate(t.elementType===t.type?ee:zt(t.type,ee),_e);S.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(H){Ie(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return X=Pu,Pu=!1,X}function ra(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&fi(t,r,i)}l=l.next}while(l!==a)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function hi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ru(e){var t=e.alternate;t!==null&&(e.alternate=null,Ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Wr],delete t[Po],delete t[Cm],delete t[zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Du(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gi(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_a));else if(a!==4&&(e=e.child,e!==null))for(gi(e,t,r),e=e.sibling;e!==null;)gi(e,t,r),e=e.sibling}function vi(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(vi(e,t,r),e=e.sibling;e!==null;)vi(e,t,r),e=e.sibling}var qe=null,At=!1;function hn(e,t,r){for(r=r.child;r!==null;)Iu(e,t,r),r=r.sibling}function Iu(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ea,r)}catch{}switch(r.tag){case 5:Je||dr(r,t);case 6:var a=qe,l=At;qe=null,hn(e,t,r),qe=a,At=l,qe!==null&&(At?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(At?(e=qe,r=r.stateNode,e.nodeType===8?Oo(e.parentNode,r):e.nodeType===1&&Oo(e,r),Ir(e)):Oo(qe,r.stateNode));break;case 4:a=qe,l=At,qe=r.stateNode.containerInfo,At=!0,hn(e,t,r),qe=a,At=l;break;case 0:case 11:case 14:case 15:if(!Je&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&fi(r,t,u),l=l.next}while(l!==a)}hn(e,t,r);break;case 1:if(!Je&&(dr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(f){Ie(r,t,f)}hn(e,t,r);break;case 21:hn(e,t,r);break;case 22:r.mode&1?(Je=(a=Je)||r.memoizedState!==null,hn(e,t,r),Je=a):hn(e,t,r);break;default:hn(e,t,r)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Vm),t.forEach(function(a){var l=Zm.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:qe=f.stateNode,At=!1;break e;case 3:qe=f.stateNode.containerInfo,At=!0;break e;case 4:qe=f.stateNode.containerInfo,At=!0;break e}f=f.return}if(qe===null)throw Error(c(160));Iu(i,u,l),qe=null,At=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(z){Ie(l,t,z)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling}function Mu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Lt(e),a&4){try{ra(3,e,e.return),il(3,e)}catch(ee){Ie(e,e.return,ee)}try{ra(5,e,e.return)}catch(ee){Ie(e,e.return,ee)}}break;case 1:Tt(t,e),Lt(e),a&512&&r!==null&&dr(r,r.return);break;case 5:if(Tt(t,e),Lt(e),a&512&&r!==null&&dr(r,r.return),e.flags&32){var l=e.stateNode;try{Nr(l,"")}catch(ee){Ie(e,e.return,ee)}}if(a&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=r!==null?r.memoizedProps:i,f=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&ds(l,i),ql(f,u);var z=ql(f,i);for(u=0;u<v.length;u+=2){var L=v[u],_=v[u+1];L==="style"?xs(l,_):L==="dangerouslySetInnerHTML"?vs(l,_):L==="children"?Nr(l,_):W(l,L,_,z)}switch(f){case"input":Hl(l,i);break;case"textarea":fs(l,i);break;case"select":var F=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var Q=i.value;Q!=null?$n(l,!!i.multiple,Q,!1):F!==!!i.multiple&&(i.defaultValue!=null?$n(l,!!i.multiple,i.defaultValue,!0):$n(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wr]=i}catch(ee){Ie(e,e.return,ee)}}break;case 6:if(Tt(t,e),Lt(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(ee){Ie(e,e.return,ee)}}break;case 3:if(Tt(t,e),Lt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(ee){Ie(e,e.return,ee)}break;case 4:Tt(t,e),Lt(e);break;case 13:Tt(t,e),Lt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=Me())),a&4&&Lu(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(Je=(z=Je)||L,Tt(t,e),Je=z):Tt(t,e),Lt(e),a&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!L&&(e.mode&1)!==0)for(K=e,L=e.child;L!==null;){for(_=K=L;K!==null;){switch(F=K,Q=F.child,F.tag){case 0:case 11:case 14:case 15:ra(4,F,F.return);break;case 1:dr(F,F.return);var X=F.stateNode;if(typeof X.componentWillUnmount=="function"){a=F,r=F.return;try{t=a,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(ee){Ie(a,r,ee)}}break;case 5:dr(F,F.return);break;case 22:if(F.memoizedState!==null){ju(_);continue}}Q!==null?(Q.return=F,K=Q):ju(_)}L=L.sibling}e:for(L=null,_=e;;){if(_.tag===5){if(L===null){L=_;try{l=_.stateNode,z?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=_.stateNode,v=_.memoizedProps.style,u=v!=null&&v.hasOwnProperty("display")?v.display:null,f.style.display=ys("display",u))}catch(ee){Ie(e,e.return,ee)}}}else if(_.tag===6){if(L===null)try{_.stateNode.nodeValue=z?"":_.memoizedProps}catch(ee){Ie(e,e.return,ee)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;L===_&&(L=null),_=_.return}L===_&&(L=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Tt(t,e),Lt(e),a&4&&Lu(e);break;case 21:break;default:Tt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Du(r)){var a=r;break e}r=r.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Nr(l,""),a.flags&=-33);var i=Fu(e);vi(e,i,l);break;case 3:case 4:var u=a.stateNode.containerInfo,f=Fu(e);gi(e,f,u);break;default:throw Error(c(161))}}catch(v){Ie(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ym(e,t,r){K=e,_u(e)}function _u(e,t,r){for(var a=(e.mode&1)!==0;K!==null;){var l=K,i=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||ol;if(!u){var f=l.alternate,v=f!==null&&f.memoizedState!==null||Je;f=ol;var z=Je;if(ol=u,(Je=v)&&!z)for(K=l;K!==null;)u=K,v=u.child,u.tag===22&&u.memoizedState!==null?Uu(l):v!==null?(v.return=u,K=v):Uu(l);for(;i!==null;)K=i,_u(i),i=i.sibling;K=l,ol=f,Je=z}Bu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,K=i):Bu(e)}}function Bu(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||il(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Je)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:zt(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jc(t,i,a);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}jc(t,u,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var z=t.alternate;if(z!==null){var L=z.memoizedState;if(L!==null){var _=L.dehydrated;_!==null&&Ir(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Je||t.flags&512&&hi(t)}catch(F){Ie(t,t.return,F)}}if(t===e){K=null;break}if(r=t.sibling,r!==null){r.return=t.return,K=r;break}K=t.return}}function ju(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var r=t.sibling;if(r!==null){r.return=t.return,K=r;break}K=t.return}}function Uu(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{il(4,t)}catch(v){Ie(t,r,v)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(v){Ie(t,l,v)}}var i=t.return;try{hi(t)}catch(v){Ie(t,i,v)}break;case 5:var u=t.return;try{hi(t)}catch(v){Ie(t,u,v)}}}catch(v){Ie(t,t.return,v)}if(t===e){K=null;break}var f=t.sibling;if(f!==null){f.return=t.return,K=f;break}K=t.return}}var Wm=Math.ceil,sl=q.ReactCurrentDispatcher,yi=q.ReactCurrentOwner,xt=q.ReactCurrentBatchConfig,Ee=0,$e=null,Be=null,Ge=0,mt=0,pr=un(0),He=0,aa=null,In=0,cl=0,xi=0,la=null,it=null,Ei=0,mr=1/0,Qt=null,ul=!1,wi=null,gn=null,dl=!1,vn=null,pl=0,oa=0,ki=null,ml=-1,fl=0;function tt(){return(Ee&6)!==0?Me():ml!==-1?ml:ml=Me()}function yn(e){return(e.mode&1)===0?1:(Ee&2)!==0&&Ge!==0?Ge&-Ge:Tm.transition!==null?(fl===0&&(fl=Fs()),fl):(e=be,e!==0||(e=window.event,e=e===void 0?16:Vs(e.type)),e)}function Ot(e,t,r,a){if(50<oa)throw oa=0,ki=null,Error(c(185));Or(e,r,a),((Ee&2)===0||e!==$e)&&(e===$e&&((Ee&2)===0&&(cl|=r),He===4&&xn(e,Ge)),st(e,a),r===1&&Ee===0&&(t.mode&1)===0&&(mr=Me()+500,Ha&&pn()))}function st(e,t){var r=e.callbackNode;Tp(e,t);var a=ba(e,e===$e?Ge:0);if(a===0)r!==null&&Ps(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Ps(r),t===1)e.tag===0?Am(Vu.bind(null,e)):Ac(Vu.bind(null,e)),Nm(function(){(Ee&6)===0&&pn()}),r=null;else{switch(Is(a)){case 1:r=eo;break;case 4:r=Rs;break;case 16:r=xa;break;case 536870912:r=Ds;break;default:r=xa}r=Xu(r,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hu(e,t){if(ml=-1,fl=0,(Ee&6)!==0)throw Error(c(327));var r=e.callbackNode;if(fr()&&e.callbackNode!==r)return null;var a=ba(e,e===$e?Ge:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=hl(e,a);else{t=a;var l=Ee;Ee|=2;var i=Yu();($e!==e||Ge!==t)&&(Qt=null,mr=Me()+500,Mn(e,t));do try{Qm();break}catch(f){$u(e,f)}while(!0);jo(),sl.current=i,Ee=l,Be!==null?t=0:($e=null,Ge=0,t=He)}if(t!==0){if(t===2&&(l=to(e),l!==0&&(a=l,t=bi(e,l))),t===1)throw r=aa,Mn(e,0),xn(e,a),st(e,Me()),r;if(t===6)xn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!qm(l)&&(t=hl(e,a),t===2&&(i=to(e),i!==0&&(a=i,t=bi(e,i))),t===1))throw r=aa,Mn(e,0),xn(e,a),st(e,Me()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:_n(e,it,Qt);break;case 3:if(xn(e,a),(a&130023424)===a&&(t=Ei+500-Me(),10<t)){if(ba(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){tt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=To(_n.bind(null,e,it,Qt),t);break}_n(e,it,Qt);break;case 4:if(xn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var u=31-Nt(a);i=1<<u,u=t[u],u>l&&(l=u),a&=~i}if(a=l,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Wm(a/1960))-a,10<a){e.timeoutHandle=To(_n.bind(null,e,it,Qt),a);break}_n(e,it,Qt);break;case 5:_n(e,it,Qt);break;default:throw Error(c(329))}}}return st(e,Me()),e.callbackNode===r?Hu.bind(null,e):null}function bi(e,t){var r=la;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=hl(e,t),e!==2&&(t=it,it=r,t!==null&&Ni(t)),e}function Ni(e){it===null?it=e:it.push.apply(it,e)}function qm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],i=l.getSnapshot;l=l.value;try{if(!St(i(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~xi,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Nt(t),a=1<<r;e[r]=-1,t&=~a}}function Vu(e){if((Ee&6)!==0)throw Error(c(327));fr();var t=ba(e,0);if((t&1)===0)return st(e,Me()),null;var r=hl(e,t);if(e.tag!==0&&r===2){var a=to(e);a!==0&&(t=a,r=bi(e,a))}if(r===1)throw r=aa,Mn(e,0),xn(e,t),st(e,Me()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,it,Qt),st(e,Me()),null}function Si(e,t){var r=Ee;Ee|=1;try{return e(t)}finally{Ee=r,Ee===0&&(mr=Me()+500,Ha&&pn())}}function Ln(e){vn!==null&&vn.tag===0&&(Ee&6)===0&&fr();var t=Ee;Ee|=1;var r=xt.transition,a=be;try{if(xt.transition=null,be=1,e)return e()}finally{be=a,xt.transition=r,Ee=t,(Ee&6)===0&&pn()}}function Ci(){mt=pr.current,ze(pr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,bm(r)),Be!==null)for(r=Be.return;r!==null;){var a=r;switch(Io(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ja();break;case 3:cr(),ze(at),ze(Qe),Go();break;case 5:Wo(a);break;case 4:cr();break;case 13:ze(Oe);break;case 19:ze(Oe);break;case 10:Uo(a.type._context);break;case 22:case 23:Ci()}r=r.return}if($e=e,Be=e=En(e.current,null),Ge=mt=t,He=0,aa=null,xi=cl=In=0,it=la=null,Rn!==null){for(t=0;t<Rn.length;t++)if(r=Rn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,i=r.pending;if(i!==null){var u=i.next;i.next=l,a.next=u}r.pending=a}Rn=null}return e}function $u(e,t){do{var r=Be;try{if(jo(),Ja.current=nl,Za){for(var a=Pe.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Za=!1}if(Fn=0,Ve=Ue=Pe=null,Jr=!1,Zr=0,yi.current=null,r===null||r.return===null){He=1,aa=t,Be=null;break}e:{var i=e,u=r.return,f=r,v=t;if(t=Ge,f.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=v,L=f,_=L.tag;if((L.mode&1)===0&&(_===0||_===11||_===15)){var F=L.alternate;F?(L.updateQueue=F.updateQueue,L.memoizedState=F.memoizedState,L.lanes=F.lanes):(L.updateQueue=null,L.memoizedState=null)}var Q=hu(u);if(Q!==null){Q.flags&=-257,gu(Q,u,f,i,t),Q.mode&1&&fu(i,z,t),t=Q,v=z;var X=t.updateQueue;if(X===null){var ee=new Set;ee.add(v),t.updateQueue=ee}else X.add(v);break e}else{if((t&1)===0){fu(i,z,t),zi();break e}v=Error(c(426))}}else if(Te&&f.mode&1){var _e=hu(u);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),gu(_e,u,f,i,t),_o(ur(v,f));break e}}i=v=ur(v,f),He!==4&&(He=2),la===null?la=[i]:la.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var S=pu(i,v,t);Bc(i,S);break e;case 1:f=v;var x=i.type,C=i.stateNode;if((i.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(gn===null||!gn.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var H=mu(i,f,t);Bc(i,H);break e}}i=i.return}while(i!==null)}qu(r)}catch(ne){t=ne,Be===r&&r!==null&&(Be=r=r.return);continue}break}while(!0)}function Yu(){var e=sl.current;return sl.current=nl,e===null?nl:e}function zi(){(He===0||He===3||He===2)&&(He=4),$e===null||(In&268435455)===0&&(cl&268435455)===0||xn($e,Ge)}function hl(e,t){var r=Ee;Ee|=2;var a=Yu();($e!==e||Ge!==t)&&(Qt=null,Mn(e,t));do try{Gm();break}catch(l){$u(e,l)}while(!0);if(jo(),Ee=r,sl.current=a,Be!==null)throw Error(c(261));return $e=null,Ge=0,He}function Gm(){for(;Be!==null;)Wu(Be)}function Qm(){for(;Be!==null&&!Ep();)Wu(Be)}function Wu(e){var t=Ku(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?qu(e):Be=t,yi.current=null}function qu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Um(r,t,mt),r!==null){Be=r;return}}else{if(r=Hm(r,t),r!==null){r.flags&=32767,Be=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);He===0&&(He=5)}function _n(e,t,r){var a=be,l=xt.transition;try{xt.transition=null,be=1,Km(e,t,r,a)}finally{xt.transition=l,be=a}return null}function Km(e,t,r,a){do fr();while(vn!==null);if((Ee&6)!==0)throw Error(c(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Op(e,i),e===$e&&(Be=$e=null,Ge=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||dl||(dl=!0,Xu(xa,function(){return fr(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=xt.transition,xt.transition=null;var u=be;be=1;var f=Ee;Ee|=4,yi.current=null,$m(e,r),Mu(r,e),gm(zo),Ca=!!Co,zo=Co=null,e.current=r,Ym(r),wp(),Ee=f,be=u,xt.transition=i}else e.current=r;if(dl&&(dl=!1,vn=e,pl=l),i=e.pendingLanes,i===0&&(gn=null),Np(r.stateNode),st(e,Me()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=wi,wi=null,e;return(pl&1)!==0&&e.tag!==0&&fr(),i=e.pendingLanes,(i&1)!==0?e===ki?oa++:(oa=0,ki=e):oa=0,pn(),null}function fr(){if(vn!==null){var e=Is(pl),t=xt.transition,r=be;try{if(xt.transition=null,be=16>e?16:e,vn===null)var a=!1;else{if(e=vn,vn=null,pl=0,(Ee&6)!==0)throw Error(c(331));var l=Ee;for(Ee|=4,K=e.current;K!==null;){var i=K,u=i.child;if((K.flags&16)!==0){var f=i.deletions;if(f!==null){for(var v=0;v<f.length;v++){var z=f[v];for(K=z;K!==null;){var L=K;switch(L.tag){case 0:case 11:case 15:ra(8,L,i)}var _=L.child;if(_!==null)_.return=L,K=_;else for(;K!==null;){L=K;var F=L.sibling,Q=L.return;if(Ru(L),L===z){K=null;break}if(F!==null){F.return=Q,K=F;break}K=Q}}}var X=i.alternate;if(X!==null){var ee=X.child;if(ee!==null){X.child=null;do{var _e=ee.sibling;ee.sibling=null,ee=_e}while(ee!==null)}}K=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,K=u;else e:for(;K!==null;){if(i=K,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ra(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,K=S;break e}K=i.return}}var x=e.current;for(K=x;K!==null;){u=K;var C=u.child;if((u.subtreeFlags&2064)!==0&&C!==null)C.return=u,K=C;else e:for(u=x;K!==null;){if(f=K,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:il(9,f)}}catch(ne){Ie(f,f.return,ne)}if(f===u){K=null;break e}var H=f.sibling;if(H!==null){H.return=f.return,K=H;break e}K=f.return}}if(Ee=l,pn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ea,e)}catch{}a=!0}return a}finally{be=r,xt.transition=t}}return!1}function Gu(e,t,r){t=ur(r,t),t=pu(e,t,1),e=fn(e,t,1),t=tt(),e!==null&&(Or(e,1,t),st(e,t))}function Ie(e,t,r){if(e.tag===3)Gu(e,e,r);else for(;t!==null;){if(t.tag===3){Gu(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))){e=ur(r,e),e=mu(t,e,1),t=fn(t,e,1),e=tt(),t!==null&&(Or(t,1,e),st(t,e));break}}t=t.return}}function Xm(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(Ge&r)===r&&(He===4||He===3&&(Ge&130023424)===Ge&&500>Me()-Ei?Mn(e,0):xi|=r),st(e,t)}function Qu(e,t){t===0&&((e.mode&1)===0?t=1:(t=ka,ka<<=1,(ka&130023424)===0&&(ka=4194304)));var r=tt();e=Wt(e,t),e!==null&&(Or(e,t,r),st(e,r))}function Jm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qu(e,r)}function Zm(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),Qu(e,r)}var Ku;Ku=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ot=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ot=!1,jm(e,t,r);ot=(e.flags&131072)!==0}else ot=!1,Te&&(t.flags&1048576)!==0&&Tc(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ll(e,t),e=t.pendingProps;var l=nr(t,Qe.current);sr(t,r),l=Xo(null,t,a,e,l,r);var i=Jo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(a)?(i=!0,Ua(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(t),l.updater=rl,t.stateNode=l,l._reactInternals=t,ai(t,a,e,r),t=si(null,t,a,!0,i,r)):(t.tag=0,Te&&i&&Fo(t),et(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(ll(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=tf(a),e=zt(a,e),l){case 0:t=ii(null,t,a,e,r);break e;case 1:t=ku(null,t,a,e,r);break e;case 11:t=vu(null,t,a,e,r);break e;case 14:t=yu(null,t,a,zt(a.type,e),r);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:zt(a,l),ii(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:zt(a,l),ku(e,t,a,l,r);case 3:e:{if(bu(t),e===null)throw Error(c(387));a=t.pendingProps,i=t.memoizedState,l=i.element,_c(e,t),Ka(t,a,null,r);var u=t.memoizedState;if(a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ur(Error(c(423)),t),t=Nu(e,t,a,r,l);break e}else if(a!==l){l=ur(Error(c(424)),t),t=Nu(e,t,a,r,l);break e}else for(pt=cn(t.stateNode.containerInfo.firstChild),dt=t,Te=!0,Ct=null,r=Lc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(lr(),a===l){t=Gt(e,t,r);break e}et(e,t,a,r)}t=t.child}return t;case 5:return Uc(t),e===null&&Mo(t),a=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,Ao(a,l)?u=null:i!==null&&Ao(a,i)&&(t.flags|=32),wu(e,t),et(e,t,u,r),t.child;case 6:return e===null&&Mo(t),null;case 13:return Su(e,t,r);case 4:return Yo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=or(t,null,a,r):et(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:zt(a,l),vu(e,t,a,l,r);case 7:return et(e,t,t.pendingProps,r),t.child;case 8:return et(e,t,t.pendingProps.children,r),t.child;case 12:return et(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,Se(qa,a._currentValue),a._currentValue=u,i!==null)if(St(i.value,u)){if(i.children===l.children&&!at.current){t=Gt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){u=i.child;for(var v=f.firstContext;v!==null;){if(v.context===a){if(i.tag===1){v=qt(-1,r&-r),v.tag=2;var z=i.updateQueue;if(z!==null){z=z.shared;var L=z.pending;L===null?v.next=v:(v.next=L.next,L.next=v),z.pending=v}}i.lanes|=r,v=i.alternate,v!==null&&(v.lanes|=r),Ho(i.return,r,t),f.lanes|=r;break}v=v.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(c(341));u.lanes|=r,f=u.alternate,f!==null&&(f.lanes|=r),Ho(u,r,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}et(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,sr(t,r),l=vt(l),a=a(l),t.flags|=1,et(e,t,a,r),t.child;case 14:return a=t.type,l=zt(a,t.pendingProps),l=zt(a.type,l),yu(e,t,a,l,r);case 15:return xu(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:zt(a,l),ll(e,t),t.tag=1,lt(a)?(e=!0,Ua(t)):e=!1,sr(t,r),uu(t,a,l),ai(t,a,l,r),si(null,t,a,!0,e,r);case 19:return zu(e,t,r);case 22:return Eu(e,t,r)}throw Error(c(156,t.tag))};function Xu(e,t){return Os(e,t)}function ef(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,r,a){return new ef(e,t,r,a)}function Ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tf(e){if(typeof e=="function")return Ai(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===re)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=Et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function gl(e,t,r,a,l,i){var u=2;if(a=e,typeof e=="function")Ai(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case xe:return Bn(r.children,l,i,t);case ae:u=8,l|=8;break;case Ne:return e=Et(12,r,t,l|2),e.elementType=Ne,e.lanes=i,e;case V:return e=Et(13,r,t,l),e.elementType=V,e.lanes=i,e;case ye:return e=Et(19,r,t,l),e.elementType=ye,e.lanes=i,e;case ge:return vl(r,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case he:u=10;break e;case Ae:u=9;break e;case Le:u=11;break e;case re:u=14;break e;case me:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=Et(u,r,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Bn(e,t,r,a){return e=Et(7,e,a,t),e.lanes=r,e}function vl(e,t,r,a){return e=Et(22,e,a,t),e.elementType=ge,e.lanes=r,e.stateNode={isHidden:!1},e}function Ti(e,t,r){return e=Et(6,e,null,t),e.lanes=r,e}function Oi(e,t,r){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nf(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,t,r,a,l,i,u,f,v){return e=new nf(e,t,r,f,v),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(i),e}function rf(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function Ju(e){if(!e)return dn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(lt(r))return Cc(e,r,t)}return t}function Zu(e,t,r,a,l,i,u,f,v){return e=Pi(r,a,!0,e,l,i,u,f,v),e.context=Ju(null),r=e.current,a=tt(),l=yn(r),i=qt(a,l),i.callback=t??null,fn(r,i,l),e.current.lanes=l,Or(e,l,a),st(e,a),e}function yl(e,t,r,a){var l=t.current,i=tt(),u=yn(l);return r=Ju(r),t.context===null?t.context=r:t.pendingContext=r,t=qt(i,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=fn(l,t,u),e!==null&&(Ot(e,l,u,i),Qa(e,l,u)),u}function xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ri(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function af(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}El.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));yl(e,t,null,null)},El.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){yl(null,e,null,null)}),t[Ht]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=_s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ln.length&&t!==0&&t<ln[r].priority;r++);ln.splice(r,0,e),r===0&&Us(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function lf(e,t,r,a,l){if(l){if(typeof a=="function"){var i=a;a=function(){var z=xl(u);i.call(z)}}var u=Zu(t,a,e,0,null,!1,!1,"",nd);return e._reactRootContainer=u,e[Ht]=u.current,$r(e.nodeType===8?e.parentNode:e),Ln(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var f=a;a=function(){var z=xl(v);f.call(z)}}var v=Pi(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=v,e[Ht]=v.current,$r(e.nodeType===8?e.parentNode:e),Ln(function(){yl(t,v,r,a)}),v}function kl(e,t,r,a,l){var i=r._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var f=l;l=function(){var v=xl(u);f.call(v)}}yl(t,u,e,l)}else u=lf(r,t,e,l,a);return xl(u)}Ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Tr(t.pendingLanes);r!==0&&(ro(t,r|1),st(t,Me()),(Ee&6)===0&&(mr=Me()+500,pn()))}break;case 13:Ln(function(){var a=Wt(e,1);if(a!==null){var l=tt();Ot(a,e,1,l)}}),Ri(e,1)}},ao=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var r=tt();Ot(t,e,134217728,r)}Ri(e,134217728)}},Ms=function(e){if(e.tag===13){var t=yn(e),r=Wt(e,t);if(r!==null){var a=tt();Ot(r,e,t,a)}Ri(e,t)}},_s=function(){return be},Bs=function(e,t){var r=be;try{return be=e,t()}finally{be=r}},Kl=function(e,t,r){switch(t){case"input":if(Hl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=Ba(a);if(!l)throw Error(c(90));Ut(a),Hl(a,l)}}}break;case"textarea":fs(e,r);break;case"select":t=r.value,t!=null&&$n(e,!!r.multiple,t,!1)}},bs=Si,Ns=Ln;var of={usingClientEntryPoint:!1,Events:[qr,er,Ba,ws,ks,Si]},ia={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sf={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Ea=bl.inject(sf),Rt=bl}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of,ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(c(200));return rf(e,t,null,r)},ct.createRoot=function(e,t){if(!Fi(e))throw Error(c(299));var r=!1,a="",l=td;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pi(e,1,!1,null,null,r,!1,a,l),e[Ht]=t.current,$r(e.nodeType===8?e.parentNode:e),new Di(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=As(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return Ln(e)},ct.hydrate=function(e,t,r){if(!wl(t))throw Error(c(200));return kl(null,e,t,!0,r)},ct.hydrateRoot=function(e,t,r){if(!Fi(e))throw Error(c(405));var a=r!=null&&r.hydratedSources||null,l=!1,i="",u=td;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=Zu(t,null,e,1,r??null,l,!1,i,u),e[Ht]=t.current,$r(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new El(t)},ct.render=function(e,t,r){if(!wl(t))throw Error(c(200));return kl(null,e,t,!1,r)},ct.unmountComponentAtNode=function(e){if(!wl(e))throw Error(c(40));return e._reactRootContainer?(Ln(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},ct.unstable_batchedUpdates=Si,ct.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!wl(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return kl(e,t,r,!1,a)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var sd;function Md(){if(sd)return Li.exports;sd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),Li.exports=vf(),Li.exports}var cd;function yf(){if(cd)return Nl;cd=1;var o=Md();return Nl.createRoot=o.createRoot,Nl.hydrateRoot=o.hydrateRoot,Nl}var xf=yf();Md();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},ma.apply(null,arguments)}var bn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(bn||(bn={}));const ud="popstate";function Ef(o){o===void 0&&(o={});function s(d,p){let{pathname:m,search:g,hash:y}=d.location;return Qi("",{pathname:m,search:g,hash:y},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(d,p){return typeof p=="string"?p:Tl(p)}return kf(s,c,null,o)}function De(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function _d(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function wf(){return Math.random().toString(36).substr(2,8)}function dd(o,s){return{usr:o.state,key:o.key,idx:s}}function Qi(o,s,c,d){return c===void 0&&(c=null),ma({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?wr(s):s,{state:c,key:s&&s.key||d||wf()})}function Tl(o){let{pathname:s="/",search:c="",hash:d=""}=o;return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function wr(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substr(c),o=o.substr(0,c));let d=o.indexOf("?");d>=0&&(s.search=o.substr(d),o=o.substr(0,d)),o&&(s.pathname=o)}return s}function kf(o,s,c,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:m=!1}=d,g=p.history,y=bn.Pop,h=null,E=b();E==null&&(E=0,g.replaceState(ma({},g.state,{idx:E}),""));function b(){return(g.state||{idx:null}).idx}function N(){y=bn.Pop;let T=b(),A=T==null?null:T-E;E=T,h&&h({action:y,location:I.location,delta:A})}function P(T,A){y=bn.Push;let $=Qi(I.location,T,A);E=b()+1;let W=dd($,E),q=I.createHref($);try{g.pushState(W,"",q)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;p.location.assign(q)}m&&h&&h({action:y,location:I.location,delta:1})}function M(T,A){y=bn.Replace;let $=Qi(I.location,T,A);E=b();let W=dd($,E),q=I.createHref($);g.replaceState(W,"",q),m&&h&&h({action:y,location:I.location,delta:0})}function j(T){let A=p.location.origin!=="null"?p.location.origin:p.location.href,$=typeof T=="string"?T:Tl(T);return $=$.replace(/ $/,"%20"),De(A,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,A)}let I={get action(){return y},get location(){return o(p,g)},listen(T){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener(ud,N),h=T,()=>{p.removeEventListener(ud,N),h=null}},createHref(T){return s(p,T)},createURL:j,encodeLocation(T){let A=j(T);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:P,replace:M,go(T){return g.go(T)}};return I}var pd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(pd||(pd={}));function bf(o,s,c){return c===void 0&&(c="/"),Nf(o,s,c)}function Nf(o,s,c,d){let p=typeof s=="string"?wr(s):s,m=xr(p.pathname||"/",c);if(m==null)return null;let g=Bd(o);Sf(g);let y=null,h=Lf(m);for(let E=0;y==null&&E<g.length;++E)y=Ff(g[E],h);return y}function Bd(o,s,c,d){s===void 0&&(s=[]),c===void 0&&(c=[]),d===void 0&&(d="");let p=(m,g,y)=>{let h={relativePath:y===void 0?m.path||"":y,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};h.relativePath.startsWith("/")&&(De(h.relativePath.startsWith(d),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(d.length));let E=Sn([d,h.relativePath]),b=c.concat(h);m.children&&m.children.length>0&&(De(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+E+'".')),Bd(m.children,s,b,E)),!(m.path==null&&!m.index)&&s.push({path:E,score:Rf(E,m.index),routesMeta:b})};return o.forEach((m,g)=>{var y;if(m.path===""||!((y=m.path)!=null&&y.includes("?")))p(m,g);else for(let h of jd(m.path))p(m,g,h)}),s}function jd(o){let s=o.split("/");if(s.length===0)return[];let[c,...d]=s,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let g=jd(d.join("/")),y=[];return y.push(...g.map(h=>h===""?m:[m,h].join("/"))),p&&y.push(...g),y.map(h=>o.startsWith("/")&&h===""?"/":h)}function Sf(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:Df(s.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}const Cf=/^:[\w-]+$/,zf=3,Af=2,Tf=1,Of=10,Pf=-2,md=o=>o==="*";function Rf(o,s){let c=o.split("/"),d=c.length;return c.some(md)&&(d+=Pf),s&&(d+=Af),c.filter(p=>!md(p)).reduce((p,m)=>p+(Cf.test(m)?zf:m===""?Tf:Of),d)}function Df(o,s){return o.length===s.length&&o.slice(0,-1).every((d,p)=>d===s[p])?o[o.length-1]-s[s.length-1]:0}function Ff(o,s,c){let{routesMeta:d}=o,p={},m="/",g=[];for(let y=0;y<d.length;++y){let h=d[y],E=y===d.length-1,b=m==="/"?s:s.slice(m.length)||"/",N=Ki({path:h.relativePath,caseSensitive:h.caseSensitive,end:E},b),P=h.route;if(!N)return null;Object.assign(p,N.params),g.push({params:p,pathname:Sn([m,N.pathname]),pathnameBase:Bf(Sn([m,N.pathnameBase])),route:P}),N.pathnameBase!=="/"&&(m=Sn([m,N.pathnameBase]))}return g}function Ki(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,d]=If(o.path,o.caseSensitive,o.end),p=s.match(c);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:d.reduce((E,b,N)=>{let{paramName:P,isOptional:M}=b;if(P==="*"){let I=y[N]||"";g=m.slice(0,m.length-I.length).replace(/(.)\/+$/,"$1")}const j=y[N];return M&&!j?E[P]=void 0:E[P]=(j||"").replace(/%2F/g,"/"),E},{}),pathname:m,pathnameBase:g,pattern:o}}function If(o,s,c){s===void 0&&(s=!1),c===void 0&&(c=!0),_d(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,h)=>(d.push({paramName:y,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,s?void 0:"i"),d]}function Lf(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return _d(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function xr(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,d=o.charAt(c);return d&&d!=="/"?null:o.slice(c)||"/"}function Mf(o,s){s===void 0&&(s="/");let{pathname:c,search:d="",hash:p=""}=typeof o=="string"?wr(o):o,m;return c?(c=Ud(c),c.startsWith("/")?m=fd(c.substring(1),"/"):m=fd(c,s)):m=s,{pathname:m,search:jf(d),hash:Uf(p)}}function fd(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function Bi(o,s,c,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _f(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ls(o,s){let c=_f(o);return s?c.map((d,p)=>p===c.length-1?d.pathname:d.pathnameBase):c.map(d=>d.pathnameBase)}function os(o,s,c,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=wr(o):(p=ma({},o),De(!p.pathname||!p.pathname.includes("?"),Bi("?","pathname","search",p)),De(!p.pathname||!p.pathname.includes("#"),Bi("#","pathname","hash",p)),De(!p.search||!p.search.includes("#"),Bi("#","search","hash",p)));let m=o===""||p.pathname==="",g=m?"/":p.pathname,y;if(g==null)y=c;else{let N=s.length-1;if(!d&&g.startsWith("..")){let P=g.split("/");for(;P[0]==="..";)P.shift(),N-=1;p.pathname=P.join("/")}y=N>=0?s[N]:"/"}let h=Mf(p,y),E=g&&g!=="/"&&g.endsWith("/"),b=(m||g===".")&&c.endsWith("/");return!h.pathname.endsWith("/")&&(E||b)&&(h.pathname+="/"),h}const Ud=o=>o.replace(/\/\/+/g,"/"),Sn=o=>Ud(o.join("/")),Bf=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),jf=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Uf=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Hf(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Hd=["post","put","patch","delete"];new Set(Hd);const Vf=["get",...Hd];new Set(Vf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},fa.apply(null,arguments)}const Il=w.createContext(null),Vd=w.createContext(null),Zt=w.createContext(null),Ll=w.createContext(null),Bt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),$d=w.createContext(null);function $f(o,s){let{relative:c}=s===void 0?{}:s;kr()||De(!1);let{basename:d,navigator:p}=w.useContext(Zt),{hash:m,pathname:g,search:y}=Ml(o,{relative:c}),h=g;return d!=="/"&&(h=g==="/"?d:Sn([d,g])),p.createHref({pathname:h,search:y,hash:m})}function kr(){return w.useContext(Ll)!=null}function en(){return kr()||De(!1),w.useContext(Ll).location}function Yd(o){w.useContext(Zt).static||w.useLayoutEffect(o)}function tn(){let{isDataRoute:o}=w.useContext(Bt);return o?lh():Yf()}function Yf(){kr()||De(!1);let o=w.useContext(Il),{basename:s,future:c,navigator:d}=w.useContext(Zt),{matches:p}=w.useContext(Bt),{pathname:m}=en(),g=JSON.stringify(ls(p,c.v7_relativeSplatPath)),y=w.useRef(!1);return Yd(()=>{y.current=!0}),w.useCallback(function(E,b){if(b===void 0&&(b={}),!y.current)return;if(typeof E=="number"){d.go(E);return}let N=os(E,JSON.parse(g),m,b.relative==="path");o==null&&s!=="/"&&(N.pathname=N.pathname==="/"?s:Sn([s,N.pathname])),(b.replace?d.replace:d.push)(N,b.state,b)},[s,d,g,m,o])}const Wf=w.createContext(null);function qf(o){let s=w.useContext(Bt).outlet;return s&&w.createElement(Wf.Provider,{value:o},s)}function Wd(){let{matches:o}=w.useContext(Bt),s=o[o.length-1];return s?s.params:{}}function Ml(o,s){let{relative:c}=s===void 0?{}:s,{future:d}=w.useContext(Zt),{matches:p}=w.useContext(Bt),{pathname:m}=en(),g=JSON.stringify(ls(p,d.v7_relativeSplatPath));return w.useMemo(()=>os(o,JSON.parse(g),m,c==="path"),[o,g,m,c])}function Gf(o,s){return Qf(o,s)}function Qf(o,s,c,d){kr()||De(!1);let{navigator:p}=w.useContext(Zt),{matches:m}=w.useContext(Bt),g=m[m.length-1],y=g?g.params:{};g&&g.pathname;let h=g?g.pathnameBase:"/";g&&g.route;let E=en(),b;if(s){var N;let T=typeof s=="string"?wr(s):s;h==="/"||(N=T.pathname)!=null&&N.startsWith(h)||De(!1),b=T}else b=E;let P=b.pathname||"/",M=P;if(h!=="/"){let T=h.replace(/^\//,"").split("/");M="/"+P.replace(/^\//,"").split("/").slice(T.length).join("/")}let j=bf(o,{pathname:M}),I=eh(j&&j.map(T=>Object.assign({},T,{params:Object.assign({},y,T.params),pathname:Sn([h,p.encodeLocation?p.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?h:Sn([h,p.encodeLocation?p.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),m,c,d);return s&&I?w.createElement(Ll.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:bn.Pop}},I):I}function Kf(){let o=ah(),s=Hf(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},s),c?w.createElement("pre",{style:p},c):null,null)}const Xf=w.createElement(Kf,null);class Jf extends w.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){console.error("React Router caught the following error during render",s,c)}render(){return this.state.error!==void 0?w.createElement(Bt.Provider,{value:this.props.routeContext},w.createElement($d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zf(o){let{routeContext:s,match:c,children:d}=o,p=w.useContext(Il);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),w.createElement(Bt.Provider,{value:s},d)}function eh(o,s,c,d){var p;if(s===void 0&&(s=[]),c===void 0&&(c=null),d===void 0&&(d=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=d)!=null&&m.v7_partialHydration&&s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let g=o,y=(p=c)==null?void 0:p.errors;if(y!=null){let b=g.findIndex(N=>N.route.id&&(y==null?void 0:y[N.route.id])!==void 0);b>=0||De(!1),g=g.slice(0,Math.min(g.length,b+1))}let h=!1,E=-1;if(c&&d&&d.v7_partialHydration)for(let b=0;b<g.length;b++){let N=g[b];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(E=b),N.route.id){let{loaderData:P,errors:M}=c,j=N.route.loader&&P[N.route.id]===void 0&&(!M||M[N.route.id]===void 0);if(N.route.lazy||j){h=!0,E>=0?g=g.slice(0,E+1):g=[g[0]];break}}}return g.reduceRight((b,N,P)=>{let M,j=!1,I=null,T=null;c&&(M=y&&N.route.id?y[N.route.id]:void 0,I=N.route.errorElement||Xf,h&&(E<0&&P===0?(oh("route-fallback"),j=!0,T=null):E===P&&(j=!0,T=N.route.hydrateFallbackElement||null)));let A=s.concat(g.slice(0,P+1)),$=()=>{let W;return M?W=I:j?W=T:N.route.Component?W=w.createElement(N.route.Component,null):N.route.element?W=N.route.element:W=b,w.createElement(Zf,{match:N,routeContext:{outlet:b,matches:A,isDataRoute:c!=null},children:W})};return c&&(N.route.ErrorBoundary||N.route.errorElement||P===0)?w.createElement(Jf,{location:c.location,revalidation:c.revalidation,component:I,error:M,children:$(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):$()},null)}var qd=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(qd||{}),Gd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(Gd||{});function th(o){let s=w.useContext(Il);return s||De(!1),s}function nh(o){let s=w.useContext(Vd);return s||De(!1),s}function rh(o){let s=w.useContext(Bt);return s||De(!1),s}function Qd(o){let s=rh(),c=s.matches[s.matches.length-1];return c.route.id||De(!1),c.route.id}function ah(){var o;let s=w.useContext($d),c=nh(),d=Qd();return s!==void 0?s:(o=c.errors)==null?void 0:o[d]}function lh(){let{router:o}=th(qd.UseNavigateStable),s=Qd(Gd.UseNavigateStable),c=w.useRef(!1);return Yd(()=>{c.current=!0}),w.useCallback(function(p,m){m===void 0&&(m={}),c.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,fa({fromRouteId:s},m)))},[o,s])}const hd={};function oh(o,s,c){hd[o]||(hd[o]=!0)}function ih(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function sh(o){let{to:s,replace:c,state:d,relative:p}=o;kr()||De(!1);let{future:m,static:g}=w.useContext(Zt),{matches:y}=w.useContext(Bt),{pathname:h}=en(),E=tn(),b=os(s,ls(y,m.v7_relativeSplatPath),h,p==="path"),N=JSON.stringify(b);return w.useEffect(()=>E(JSON.parse(N),{replace:c,state:d,relative:p}),[E,N,p,c,d]),null}function ch(o){return qf(o.context)}function We(o){De(!1)}function uh(o){let{basename:s="/",children:c=null,location:d,navigationType:p=bn.Pop,navigator:m,static:g=!1,future:y}=o;kr()&&De(!1);let h=s.replace(/^\/*/,"/"),E=w.useMemo(()=>({basename:h,navigator:m,static:g,future:fa({v7_relativeSplatPath:!1},y)}),[h,y,m,g]);typeof d=="string"&&(d=wr(d));let{pathname:b="/",search:N="",hash:P="",state:M=null,key:j="default"}=d,I=w.useMemo(()=>{let T=xr(b,h);return T==null?null:{location:{pathname:T,search:N,hash:P,state:M,key:j},navigationType:p}},[h,b,N,P,M,j,p]);return I==null?null:w.createElement(Zt.Provider,{value:E},w.createElement(Ll.Provider,{children:c,value:I}))}function dh(o){let{children:s,location:c}=o;return Gf(Xi(s),c)}new Promise(()=>{});function Xi(o,s){s===void 0&&(s=[]);let c=[];return w.Children.forEach(o,(d,p)=>{if(!w.isValidElement(d))return;let m=[...s,p];if(d.type===w.Fragment){c.push.apply(c,Xi(d.props.children,m));return}d.type!==We&&De(!1),!d.props.index||!d.props.children||De(!1);let g={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=Xi(d.props.children,m)),c.push(g)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var d in c)({}).hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},Ol.apply(null,arguments)}function Kd(o,s){if(o==null)return{};var c={};for(var d in o)if({}.hasOwnProperty.call(o,d)){if(s.indexOf(d)!==-1)continue;c[d]=o[d]}return c}function ph(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function mh(o,s){return o.button===0&&(!s||s==="_self")&&!ph(o)}function Ji(o){return o===void 0&&(o=""),new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((s,c)=>{let d=o[c];return s.concat(Array.isArray(d)?d.map(p=>[c,p]):[[c,d]])},[]))}function fh(o,s){let c=Ji(o);return s&&s.forEach((d,p)=>{c.has(p)||s.getAll(p).forEach(m=>{c.append(p,m)})}),c}const hh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vh="6";try{window.__reactRouterVersion=vh}catch{}const yh=w.createContext({isTransitioning:!1}),xh="startTransition",gd=ff[xh];function Eh(o){let{basename:s,children:c,future:d,window:p}=o,m=w.useRef();m.current==null&&(m.current=Ef({window:p,v5Compat:!0}));let g=m.current,[y,h]=w.useState({action:g.action,location:g.location}),{v7_startTransition:E}=d||{},b=w.useCallback(N=>{E&&gd?gd(()=>h(N)):h(N)},[h,E]);return w.useLayoutEffect(()=>g.listen(b),[g,b]),w.useEffect(()=>ih(d),[d]),w.createElement(uh,{basename:s,children:c,location:y.location,navigationType:y.action,navigator:g,future:d})}const wh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=w.forwardRef(function(s,c){let{onClick:d,relative:p,reloadDocument:m,replace:g,state:y,target:h,to:E,preventScrollReset:b,viewTransition:N}=s,P=Kd(s,hh),{basename:M}=w.useContext(Zt),j,I=!1;if(typeof E=="string"&&kh.test(E)&&(j=E,wh))try{let W=new URL(window.location.href),q=E.startsWith("//")?new URL(W.protocol+E):new URL(E),se=xr(q.pathname,M);q.origin===W.origin&&se!=null?E=se+q.search+q.hash:I=!0}catch{}let T=$f(E,{relative:p}),A=Nh(E,{replace:g,state:y,target:h,preventScrollReset:b,relative:p,viewTransition:N});function $(W){d&&d(W),W.defaultPrevented||A(W)}return w.createElement("a",Ol({},P,{href:j||T,onClick:I||m?d:$,ref:c,target:h}))}),kn=w.forwardRef(function(s,c){let{"aria-current":d="page",caseSensitive:p=!1,className:m="",end:g=!1,style:y,to:h,viewTransition:E,children:b}=s,N=Kd(s,gh),P=Ml(h,{relative:N.relative}),M=en(),j=w.useContext(Vd),{navigator:I,basename:T}=w.useContext(Zt),A=j!=null&&Ch(P)&&E===!0,$=I.encodeLocation?I.encodeLocation(P).pathname:P.pathname,W=M.pathname,q=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;p||(W=W.toLowerCase(),q=q?q.toLowerCase():null,$=$.toLowerCase()),q&&T&&(q=xr(q,T)||q);const se=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let fe=W===$||!g&&W.startsWith($)&&W.charAt(se)==="/",xe=q!=null&&(q===$||!g&&q.startsWith($)&&q.charAt($.length)==="/"),ae={isActive:fe,isPending:xe,isTransitioning:A},Ne=fe?d:void 0,he;typeof m=="function"?he=m(ae):he=[m,fe?"active":null,xe?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Ae=typeof y=="function"?y(ae):y;return w.createElement(te,Ol({},N,{"aria-current":Ne,className:he,ref:c,style:Ae,to:h,viewTransition:E}),typeof b=="function"?b(ae):b)});var Zi;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Zi||(Zi={}));var vd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function bh(o){let s=w.useContext(Il);return s||De(!1),s}function Nh(o,s){let{target:c,replace:d,state:p,preventScrollReset:m,relative:g,viewTransition:y}=s===void 0?{}:s,h=tn(),E=en(),b=Ml(o,{relative:g});return w.useCallback(N=>{if(mh(N,c)){N.preventDefault();let P=d!==void 0?d:Tl(E)===Tl(b);h(o,{replace:P,state:p,preventScrollReset:m,relative:g,viewTransition:y})}},[E,h,b,d,p,c,o,m,g,y])}function Sh(o){let s=w.useRef(Ji(o)),c=w.useRef(!1),d=en(),p=w.useMemo(()=>fh(d.search,c.current?null:s.current),[d.search]),m=tn(),g=w.useCallback((y,h)=>{const E=Ji(typeof y=="function"?y(p):y);c.current=!0,m("?"+E,h)},[m,p]);return[p,g]}function Ch(o,s){s===void 0&&(s={});let c=w.useContext(yh);c==null&&De(!1);let{basename:d}=bh(Zi.useViewTransitionState),p=Ml(o,{relative:s.relative});if(!c.isTransitioning)return!1;let m=xr(c.currentLocation.pathname,d)||c.currentLocation.pathname,g=xr(c.nextLocation.pathname,d)||c.nextLocation.pathname;return Ki(p.pathname,g)!=null||Ki(p.pathname,m)!=null}var ji,yd;function zh(){if(yd)return ji;yd=1;var o=typeof Element<"u",s=typeof Map=="function",c=typeof Set=="function",d=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,g){if(m===g)return!0;if(m&&g&&typeof m=="object"&&typeof g=="object"){if(m.constructor!==g.constructor)return!1;var y,h,E;if(Array.isArray(m)){if(y=m.length,y!=g.length)return!1;for(h=y;h--!==0;)if(!p(m[h],g[h]))return!1;return!0}var b;if(s&&m instanceof Map&&g instanceof Map){if(m.size!==g.size)return!1;for(b=m.entries();!(h=b.next()).done;)if(!g.has(h.value[0]))return!1;for(b=m.entries();!(h=b.next()).done;)if(!p(h.value[1],g.get(h.value[0])))return!1;return!0}if(c&&m instanceof Set&&g instanceof Set){if(m.size!==g.size)return!1;for(b=m.entries();!(h=b.next()).done;)if(!g.has(h.value[0]))return!1;return!0}if(d&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(g)){if(y=m.length,y!=g.length)return!1;for(h=y;h--!==0;)if(m[h]!==g[h])return!1;return!0}if(m.constructor===RegExp)return m.source===g.source&&m.flags===g.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof g.valueOf=="function")return m.valueOf()===g.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof g.toString=="function")return m.toString()===g.toString();if(E=Object.keys(m),y=E.length,y!==Object.keys(g).length)return!1;for(h=y;h--!==0;)if(!Object.prototype.hasOwnProperty.call(g,E[h]))return!1;if(o&&m instanceof Element)return!1;for(h=y;h--!==0;)if(!((E[h]==="_owner"||E[h]==="__v"||E[h]==="__o")&&m.$$typeof)&&!p(m[E[h]],g[E[h]]))return!1;return!0}return m!==m&&g!==g}return ji=function(g,y){try{return p(g,y)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},ji}var Ah=zh();const Th=Fl(Ah);var Ui,xd;function Oh(){if(xd)return Ui;xd=1;var o=function(s,c,d,p,m,g,y,h){if(!s){var E;if(c===void 0)E=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var b=[d,p,m,g,y,h],N=0;E=new Error(c.replace(/%s/g,function(){return b[N++]})),E.name="Invariant Violation"}throw E.framesToPop=1,E}};return Ui=o,Ui}var Ph=Oh();const Ed=Fl(Ph);var Hi,wd;function Rh(){return wd||(wd=1,Hi=function(s,c,d,p){var m=d?d.call(p,s,c):void 0;if(m!==void 0)return!!m;if(s===c)return!0;if(typeof s!="object"||!s||typeof c!="object"||!c)return!1;var g=Object.keys(s),y=Object.keys(c);if(g.length!==y.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(c),E=0;E<g.length;E++){var b=g[E];if(!h(b))return!1;var N=s[b],P=c[b];if(m=d?d.call(p,N,P,b):void 0,m===!1||m===void 0&&N!==P)return!1}return!0}),Hi}var Dh=Rh();const Fh=Fl(Dh);var Xd=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(Xd||{}),Vi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},kd=Object.values(Xd),is={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ih=Object.entries(is).reduce((o,[s,c])=>(o[c]=s,o),{}),Pt="data-rh",gr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},vr=(o,s)=>{for(let c=o.length-1;c>=0;c-=1){const d=o[c];if(Object.prototype.hasOwnProperty.call(d,s))return d[s]}return null},Lh=o=>{let s=vr(o,"title");const c=vr(o,gr.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),c&&s)return c.replace(/%s/g,()=>s);const d=vr(o,gr.DEFAULT_TITLE);return s||d||void 0},Mh=o=>vr(o,gr.ON_CHANGE_CLIENT_STATE)||(()=>{}),$i=(o,s)=>s.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,d)=>({...c,...d}),{}),_h=(o,s)=>s.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,d)=>{if(!c.length){const p=Object.keys(d);for(let m=0;m<p.length;m+=1){const y=p[m].toLowerCase();if(o.indexOf(y)!==-1&&d[y])return c.concat(d)}}return c},[]),Bh=o=>console&&typeof console.warn=="function"&&console.warn(o),sa=(o,s,c)=>{const d={};return c.filter(p=>Array.isArray(p[o])?!0:(typeof p[o]<"u"&&Bh(`Helmet: ${o} should be of type "Array". Instead found type "${typeof p[o]}"`),!1)).map(p=>p[o]).reverse().reduce((p,m)=>{const g={};m.filter(h=>{let E;const b=Object.keys(h);for(let P=0;P<b.length;P+=1){const M=b[P],j=M.toLowerCase();s.indexOf(j)!==-1&&!(E==="rel"&&h[E].toLowerCase()==="canonical")&&!(j==="rel"&&h[j].toLowerCase()==="stylesheet")&&(E=j),s.indexOf(M)!==-1&&(M==="innerHTML"||M==="cssText"||M==="itemprop")&&(E=M)}if(!E||!h[E])return!1;const N=h[E].toLowerCase();return d[E]||(d[E]={}),g[E]||(g[E]={}),d[E][N]?!1:(g[E][N]=!0,!0)}).reverse().forEach(h=>p.push(h));const y=Object.keys(g);for(let h=0;h<y.length;h+=1){const E=y[h],b={...d[E],...g[E]};d[E]=b}return p},[]).reverse()},jh=(o,s)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][s])return!0}return!1},Uh=o=>({baseTag:_h(["href"],o),bodyAttributes:$i("bodyAttributes",o),defer:vr(o,gr.DEFER),encode:vr(o,gr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:$i("htmlAttributes",o),linkTags:sa("link",["rel","href"],o),metaTags:sa("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:sa("noscript",["innerHTML"],o),onChangeClientState:Mh(o),scriptTags:sa("script",["src","innerHTML"],o),styleTags:sa("style",["cssText"],o),title:Lh(o),titleAttributes:$i("titleAttributes",o),prioritizeSeoTags:jh(o,gr.PRIORITIZE_SEO_TAGS)}),Jd=o=>Array.isArray(o)?o.join(""):o,Hh=(o,s)=>{const c=Object.keys(o);for(let d=0;d<c.length;d+=1)if(s[c[d]]&&s[c[d]].includes(o[c[d]]))return!0;return!1},Yi=(o,s)=>Array.isArray(o)?o.reduce((c,d)=>(Hh(d,s)?c.priority.push(d):c.default.push(d),c),{priority:[],default:[]}):{default:o,priority:[]},bd=(o,s)=>({...o,[s]:void 0}),Vh=["noscript","script","style"],es=(o,s=!0)=>s===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Zd=o=>Object.keys(o).reduce((s,c)=>{const d=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return s?`${s} ${d}`:d},""),$h=(o,s,c,d)=>{const p=Zd(c),m=Jd(s);return p?`<${o} ${Pt}="true" ${p}>${es(m,d)}</${o}>`:`<${o} ${Pt}="true">${es(m,d)}</${o}>`},Yh=(o,s,c=!0)=>s.reduce((d,p)=>{const m=p,g=Object.keys(m).filter(E=>!(E==="innerHTML"||E==="cssText")).reduce((E,b)=>{const N=typeof m[b]>"u"?b:`${b}="${es(m[b],c)}"`;return E?`${E} ${N}`:N},""),y=m.innerHTML||m.cssText||"",h=Vh.indexOf(o)===-1;return`${d}<${o} ${Pt}="true" ${g}${h?"/>":`>${y}</${o}>`}`},""),ep=(o,s={})=>Object.keys(o).reduce((c,d)=>{const p=is[d];return c[p||d]=o[d],c},s),Wh=(o,s,c)=>{const d={key:s,[Pt]:!0},p=ep(c,d);return[n.createElement("title",p,s)]},zl=(o,s)=>s.map((c,d)=>{const p={key:d,[Pt]:!0};return Object.keys(c).forEach(m=>{const y=is[m]||m;if(y==="innerHTML"||y==="cssText"){const h=c.innerHTML||c.cssText;p.dangerouslySetInnerHTML={__html:h}}else p[y]=c[m]}),n.createElement(o,p)}),kt=(o,s,c=!0)=>{switch(o){case"title":return{toComponent:()=>Wh(o,s.title,s.titleAttributes),toString:()=>$h(o,s.title,s.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ep(s),toString:()=>Zd(s)};default:return{toComponent:()=>zl(o,s),toString:()=>Yh(o,s,c)}}},qh=({metaTags:o,linkTags:s,scriptTags:c,encode:d})=>{const p=Yi(o,Vi.meta),m=Yi(s,Vi.link),g=Yi(c,Vi.script);return{priorityMethods:{toComponent:()=>[...zl("meta",p.priority),...zl("link",m.priority),...zl("script",g.priority)],toString:()=>`${kt("meta",p.priority,d)} ${kt("link",m.priority,d)} ${kt("script",g.priority,d)}`},metaTags:p.default,linkTags:m.default,scriptTags:g.default}},Gh=o=>{const{baseTag:s,bodyAttributes:c,encode:d=!0,htmlAttributes:p,noscriptTags:m,styleTags:g,title:y="",titleAttributes:h,prioritizeSeoTags:E}=o;let{linkTags:b,metaTags:N,scriptTags:P}=o,M={toComponent:()=>{},toString:()=>""};return E&&({priorityMethods:M,linkTags:b,metaTags:N,scriptTags:P}=qh(o)),{priority:M,base:kt("base",s,d),bodyAttributes:kt("bodyAttributes",c,d),htmlAttributes:kt("htmlAttributes",p,d),link:kt("link",b,d),meta:kt("meta",N,d),noscript:kt("noscript",m,d),script:kt("script",P,d),style:kt("style",g,d),title:kt("title",{title:y,titleAttributes:h},d)}},ts=Gh,Sl=[],tp=!!(typeof window<"u"&&window.document&&window.document.createElement),ns=class{constructor(o,s){Kt(this,"instances",[]);Kt(this,"canUseDOM",tp);Kt(this,"context");Kt(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?Sl:this.instances,add:o=>{(this.canUseDOM?Sl:this.instances).push(o)},remove:o=>{const s=(this.canUseDOM?Sl:this.instances).indexOf(o);(this.canUseDOM?Sl:this.instances).splice(s,1)}}});this.context=o,this.canUseDOM=s||!1,s||(o.helmet=ts({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Qh={},np=n.createContext(Qh),Hn,rp=(Hn=class extends w.Component{constructor(c){super(c);Kt(this,"helmetData");this.helmetData=new ns(this.props.context||{},Hn.canUseDOM)}render(){return n.createElement(np.Provider,{value:this.helmetData.value},this.props.children)}},Kt(Hn,"canUseDOM",tp),Hn),hr=(o,s)=>{const c=document.head||document.querySelector("head"),d=c.querySelectorAll(`${o}[${Pt}]`),p=[].slice.call(d),m=[];let g;return s&&s.length&&s.forEach(y=>{const h=document.createElement(o);for(const E in y)if(Object.prototype.hasOwnProperty.call(y,E))if(E==="innerHTML")h.innerHTML=y.innerHTML;else if(E==="cssText")h.styleSheet?h.styleSheet.cssText=y.cssText:h.appendChild(document.createTextNode(y.cssText));else{const b=E,N=typeof y[b]>"u"?"":y[b];h.setAttribute(E,N)}h.setAttribute(Pt,"true"),p.some((E,b)=>(g=b,h.isEqualNode(E)))?p.splice(g,1):m.push(h)}),p.forEach(y=>{var h;return(h=y.parentNode)==null?void 0:h.removeChild(y)}),m.forEach(y=>c.appendChild(y)),{oldTags:p,newTags:m}},rs=(o,s)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const d=c.getAttribute(Pt),p=d?d.split(","):[],m=[...p],g=Object.keys(s);for(const y of g){const h=s[y]||"";c.getAttribute(y)!==h&&c.setAttribute(y,h),p.indexOf(y)===-1&&p.push(y);const E=m.indexOf(y);E!==-1&&m.splice(E,1)}for(let y=m.length-1;y>=0;y-=1)c.removeAttribute(m[y]);p.length===m.length?c.removeAttribute(Pt):c.getAttribute(Pt)!==g.join(",")&&c.setAttribute(Pt,g.join(","))},Kh=(o,s)=>{typeof o<"u"&&document.title!==o&&(document.title=Jd(o)),rs("title",s)},Nd=(o,s)=>{const{baseTag:c,bodyAttributes:d,htmlAttributes:p,linkTags:m,metaTags:g,noscriptTags:y,onChangeClientState:h,scriptTags:E,styleTags:b,title:N,titleAttributes:P}=o;rs("body",d),rs("html",p),Kh(N,P);const M={baseTag:hr("base",c),linkTags:hr("link",m),metaTags:hr("meta",g),noscriptTags:hr("noscript",y),scriptTags:hr("script",E),styleTags:hr("style",b)},j={},I={};Object.keys(M).forEach(T=>{const{newTags:A,oldTags:$}=M[T];A.length&&(j[T]=A),$.length&&(I[T]=M[T].oldTags)}),s&&s(),h(o,j,I)},ca=null,Xh=o=>{ca&&cancelAnimationFrame(ca),o.defer?ca=requestAnimationFrame(()=>{Nd(o,()=>{ca=null})}):(Nd(o),ca=null)},Jh=Xh,Sd=class extends w.Component{constructor(){super(...arguments);Kt(this,"rendered",!1)}shouldComponentUpdate(s){return!Fh(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:c}=this.props.context;let d=null;const p=Uh(s.get().map(m=>{const g={...m.props};return delete g.context,g}));rp.canUseDOM?Jh(p):ts&&(d=ts(p)),c(d)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},Gi,Zh=(Gi=class extends w.Component{shouldComponentUpdate(o){return!Th(bd(this.props,"helmetData"),bd(o,"helmetData"))}mapNestedChildrenToProps(o,s){if(!s)return null;switch(o.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,s,c,d){return{...s,[o.type]:[...s[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,d)}]}}mapObjectTypeChildren(o,s,c,d){switch(o.type){case"title":return{...s,[o.type]:d,titleAttributes:{...c}};case"body":return{...s,bodyAttributes:{...c}};case"html":return{...s,htmlAttributes:{...c}};default:return{...s,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,s){let c={...s};return Object.keys(o).forEach(d=>{c={...c,[d]:o[d]}}),c}warnOnInvalidChildren(o,s){return Ed(kd.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${kd.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Ed(!s||typeof s=="string"||Array.isArray(s)&&!s.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,s){let c={};return n.Children.forEach(o,d=>{if(!d||!d.props)return;const{children:p,...m}=d.props,g=Object.keys(m).reduce((h,E)=>(h[Ih[E]||E]=m[E],h),{});let{type:y}=d;switch(typeof y=="symbol"?y=y.toString():this.warnOnInvalidChildren(d,p),y){case"Symbol(react.fragment)":s=this.mapChildrenToProps(p,s);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(d,c,g,p);break;default:s=this.mapObjectTypeChildren(d,s,g,p);break}}),this.mapArrayTypeChildrenToProps(c,s)}render(){const{children:o,...s}=this.props;let c={...s},{helmetData:d}=s;if(o&&(c=this.mapChildrenToProps(o,c)),d&&!(d instanceof ns)){const p=d;d=new ns(p.context,!0),delete c.helmetData}return d?n.createElement(Sd,{...c,context:d.value}):n.createElement(np.Consumer,null,p=>n.createElement(Sd,{...c,context:p}))}},Kt(Gi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Gi);const Cd="https://hovira-backend-nine.vercel.app/api";class zd extends Error{constructor(s,c=0,d=null){super(s),this.name="ApiError",this.status=c,this.payload=d}}function ap(){return localStorage.getItem("token")||localStorage.getItem("customerToken")||""}function lp(o){o&&(localStorage.setItem("token",o),localStorage.setItem("customerToken",o))}function Ad(){localStorage.removeItem("token"),localStorage.removeItem("customerToken"),localStorage.removeItem("customer")}function wt(o,s=[]){if(!o||typeof o!="object")return o;for(const c of s)if(o[c]!==void 0)return o[c];if(o.data!==void 0){const c=o.data;if(c&&typeof c=="object"){for(const d of s)if(c[d]!==void 0)return c[d]}return c}return o}async function nt(o,s={}){const{body:c,headers:d={},...p}=s,m=ap(),g={Accept:"application/json",...d};let y=c;c!==void 0&&!(c instanceof FormData)&&typeof c!="string"&&(g["Content-Type"]="application/json",y=JSON.stringify(c)),m&&!g.Authorization&&(g.Authorization=`Bearer ${m}`);let h;try{h=await fetch(`${Cd}${o.startsWith("/")?o:`/${o}`}`,{...p,headers:g,body:y})}catch(N){throw new zd(`Cannott connect to API at ${Cd}. Check that your backend is running and CORS is enabled.`,0,N)}const b=(h.headers.get("content-type")||"").includes("application/json")?await h.json().catch(()=>({})):await h.text();if(!h.ok){const N=(b==null?void 0:b.message)||(b==null?void 0:b.error)||(typeof b=="string"?b:`Request failed (${h.status})`);throw new zd(N,h.status,b)}return b}const Re={products:async(o={})=>{const s=new URLSearchParams;Object.entries(o).forEach(([p,m])=>{m!==""&&m!=null&&s.set(p,m)});const c=await nt(`/products${s.toString()?`?${s}`:""}`),d=wt(c,["products","items","results"]);return Array.isArray(d)?d:(d==null?void 0:d.products)||(d==null?void 0:d.items)||[]},product:async o=>wt(await nt(`/products/${encodeURIComponent(o)}`),["product","item"]),register:async o=>nt("/auth/customers/register",{method:"POST",body:o}),login:async o=>nt("/auth/customers/login",{method:"POST",body:o}),me:async()=>wt(await nt("/customers/me"),["customer","user","profile"]),updateMe:async o=>wt(await nt("/customers/me",{method:"PATCH",body:o}),["customer","user","profile"]),changePassword:o=>nt("/customers/me/password",{method:"PATCH",body:o}),addAddress:async o=>wt(await nt("/customers/me/addresses",{method:"POST",body:o}),["customer","address"]),updateAddress:async(o,s)=>wt(await nt(`/customers/me/addresses/${o}`,{method:"PATCH",body:s}),["customer","address"]),deleteAddress:async o=>nt(`/customers/me/addresses/${o}`,{method:"DELETE"}),orders:async()=>{const o=wt(await nt("/orders/my"),["orders","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.orders)||[]},order:async o=>wt(await nt(`/orders/my/${o}`),["order","item"]),createOrder:async o=>wt(await nt("/orders",{method:"POST",body:o}),["order","data"]),coupons:async()=>{const o=wt(await nt("/coupons"),["coupons","items","results"]);return Array.isArray(o)?o:(o==null?void 0:o.coupons)||[]},validateCoupon:o=>nt("/coupons/validate",{method:"POST",body:o})},je=(o,s="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:s||"INR",maximumFractionDigits:0}).format(Number(o)||0),_l=o=>{var d;if(!o)return"";const s=o.images||[],c=((d=s.find)==null?void 0:d.call(s,p=>p==null?void 0:p.isPrimary))||s[0];return(c==null?void 0:c.url)||o.image||o.imageUrl||""},Nn=o=>(o==null?void 0:o.salePrice)!=null?Number(o.salePrice):Number((o==null?void 0:o.price)||0),jn=o=>String((o==null?void 0:o._id)||(o==null?void 0:o.id)||(o==null?void 0:o.slug)||""),da=o=>`/product/${encodeURIComponent((o==null?void 0:o.slug)||(o==null?void 0:o._id)||(o==null?void 0:o.id))}`,op=w.createContext(null),Wi=(o,s)=>{try{return JSON.parse(localStorage.getItem(o))??s}catch{return s}};function eg({children:o}){const[s,c]=w.useState(()=>Wi("hovira-cart",[])),[d,p]=w.useState(()=>Wi("hovira-wishlist",[])),[m,g]=w.useState(()=>Wi("customer",null)),[y,h]=w.useState(!1);w.useEffect(()=>localStorage.setItem("hovira-cart",JSON.stringify(s)),[s]),w.useEffect(()=>localStorage.setItem("hovira-wishlist",JSON.stringify(d)),[d]),w.useEffect(()=>{m?localStorage.setItem("customer",JSON.stringify(m)):localStorage.removeItem("customer")},[m]),w.useEffect(()=>{let A=!0;return(async()=>{if(ap())try{const $=await Re.me();A&&$&&g($)}catch{Ad(),A&&g(null)}A&&h(!0)})(),()=>{A=!1}},[]);const E=(A,$=1,W="")=>c(q=>{const se=jn(A),fe=`${se}:${W}`;return q.find(ae=>ae.key===fe)?q.map(ae=>ae.key===fe?{...ae,quantity:Math.min(99,ae.quantity+$)}:ae):[...q,{key:fe,product:A,quantity:Math.max(1,$),variant:W}]}),b=(A,$)=>c(W=>$<=0?W.filter(q=>q.key!==A):W.map(q=>q.key===A?{...q,quantity:Math.min(99,$)}:q)),N=A=>c($=>$.filter(W=>W.key!==A)),P=()=>c([]),M=A=>p($=>$.some(W=>jn(W)===jn(A))?$.filter(W=>jn(W)!==jn(A)):[...$,A]),j=A=>d.some($=>jn($)===jn(A)),I=()=>{Ad(),g(null)},T=w.useMemo(()=>({cart:s,wishlist:d,customer:m,setCustomer:g,authReady:y,addToCart:E,updateQuantity:b,removeFromCart:N,clearCart:P,toggleWishlist:M,isWishlisted:j,logout:I}),[s,d,m,y]);return n.createElement(op.Provider,{value:T},o)}const jt=()=>w.useContext(op);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ip=(...o)=>o.filter((s,c,d)=>!!s&&s.trim()!==""&&d.indexOf(s)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ng={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=w.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:p="",children:m,iconNode:g,...y},h)=>w.createElement("svg",{ref:h,...ng,width:s,height:s,stroke:o,strokeWidth:d?Number(c)*24/Number(s):c,className:ip("lucide",p),...y},[...g.map(([E,b])=>w.createElement(E,b)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(o,s)=>{const c=w.forwardRef(({className:d,...p},m)=>w.createElement(rg,{ref:m,iconNode:s,className:ip(`lucide-${tg(o)}`,d),...p}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=ue("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=ue("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=ue("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=ue("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=ue("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ue("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=ue("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ue("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=ue("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=ue("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=ue("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=ue("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=ue("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ue("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=ue("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=ue("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ue("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=ue("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ue("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dd="/assets/logo-YzEykGB1.png";function bg(){const[o,s]=w.useState(!1),[c,d]=w.useState(""),[p,m]=w.useState(!1),{cart:g,wishlist:y,customer:h}=jt(),E=tn(),b=g.reduce((I,T)=>I+Number(T.quantity||0),0),N=y.length;w.useEffect(()=>{const I=()=>{m(window.scrollY>30)};return window.addEventListener("scroll",I,{passive:!0}),I(),()=>window.removeEventListener("scroll",I)},[]),w.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const P=I=>{I.preventDefault(),E(`/shop${c.trim()?`?search=${encodeURIComponent(c.trim())}`:""}`),s(!1)},M=()=>s(!1),j=({isActive:I})=>`hv-nav-link ${I?"active":""}`;return n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-announcement-bar"},n.createElement(Ze,{size:13}),n.createElement("span",null,"A little care goes a long way.",n.createElement("span",{className:"hv-announcement-separator"}," · "),"Thoughtful skincare, every day."),n.createElement(te,{to:"/shop"},"Explore Collection ",n.createElement(we,{size:13}))),n.createElement("header",{className:`hv-header ${p?"hv-scrolled":""}`},n.createElement("div",{className:"hv-header-inner"},n.createElement("button",{className:"hv-icon-btn hv-mobile-menu",onClick:()=>s(!o),"aria-label":o?"Close menu":"Open menu","aria-expanded":o},o?n.createElement(ft,{size:23}):n.createElement(hg,{size:23})),n.createElement(te,{to:"/",className:"hv-brand",onClick:M,"aria-label":"HOVIRA Home"},n.createElement("img",{src:Dd,alt:"HOVIRA Cosmetics"})),n.createElement("nav",{className:"hv-desktop-nav"},n.createElement(kn,{to:"/",end:!0,className:j},"Home"),n.createElement(kn,{to:"/shop",className:j},"Shop All"),n.createElement(kn,{to:"/shop?category=Best%20sellers",className:j},"Best Sellers"),n.createElement(kn,{to:"/about",className:j},"Our Story")),n.createElement("div",{className:"hv-header-actions"},n.createElement("form",{className:"hv-header-search",onSubmit:P},n.createElement(as,{size:17}),n.createElement("input",{type:"search",value:c,onChange:I=>d(I.target.value),placeholder:"Search skincare...","aria-label":"Search products"})),n.createElement(te,{className:"hv-header-icon",to:h?"/account":"/login","aria-label":"My account",title:"My Account"},n.createElement(pa,{size:21})),n.createElement(te,{className:"hv-header-icon hv-counter-icon",to:"/wishlist","aria-label":`Wishlist ${N} items`,title:"Wishlist"},n.createElement(bt,{size:21}),N>0&&n.createElement("span",{className:"hv-count"},N>99?"99+":N)),n.createElement(te,{className:"hv-header-icon hv-counter-icon",to:"/cart","aria-label":`Cart ${b} items`,title:"Shopping Bag"},n.createElement(Mt,{size:21}),b>0&&n.createElement("span",{className:"hv-count"},b>99?"99+":b)))),n.createElement("div",{className:"hv-mobile-search-wrapper"},n.createElement("form",{className:"hv-mobile-search",onSubmit:P},n.createElement(as,{size:17}),n.createElement("input",{type:"search",value:c,onChange:I=>d(I.target.value),placeholder:"Search your favourite skincare...","aria-label":"Search products"}),n.createElement("button",{type:"submit","aria-label":"Search"},n.createElement(we,{size:17}))))),n.createElement("div",{className:`hv-drawer-overlay ${o?"show":""}`,onClick:M}),n.createElement("aside",{className:`hv-mobile-drawer ${o?"drawer-open":""}`},n.createElement("div",{className:"hv-drawer-header"},n.createElement(te,{to:"/",onClick:M},n.createElement("img",{src:Dd,alt:"HOVIRA"})),n.createElement("button",{className:"hv-icon-btn",onClick:M,"aria-label":"Close menu"},n.createElement(ft,{size:22}))),n.createElement("div",{className:"hv-drawer-welcome"},n.createElement("span",null,"WELCOME TO HOVIRA"),n.createElement("h3",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your ritual."))),n.createElement("nav",{className:"hv-drawer-nav"},n.createElement(kn,{to:"/",end:!0,onClick:M},"Home ",n.createElement(we,{size:17})),n.createElement(kn,{to:"/shop",onClick:M},"Shop All ",n.createElement(we,{size:17})),n.createElement(kn,{to:"/shop?category=Best%20sellers",onClick:M},"Best Sellers ",n.createElement(we,{size:17})),n.createElement(kn,{to:"/about",onClick:M},"Our Story ",n.createElement(we,{size:17}))),n.createElement("div",{className:"hv-drawer-account"},n.createElement(te,{to:h?"/account":"/login",onClick:M},n.createElement(pa,{size:19}),h?"My Account":"Login / Register"),n.createElement(te,{to:"/wishlist",onClick:M},n.createElement(bt,{size:19}),"My Wishlist",N>0&&n.createElement("span",null,N)),n.createElement(te,{to:"/cart",onClick:M},n.createElement(Mt,{size:19}),"My Shopping Bag",b>0&&n.createElement("span",null,b))),n.createElement("div",{className:"hv-drawer-footer"},n.createElement(Ze,{size:15}),"A little self-care goes a long way.")),n.createElement("style",null,`

          
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

          
          
          `))}function Ng(){const[o,s]=w.useState(""),[c,d]=w.useState(""),p=new Date().getFullYear(),m=y=>{y.preventDefault(),o.trim()&&(d("Thanks for joining the HOVIRA family!"),s(""))},g=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n.createElement(n.Fragment,null,n.createElement("footer",{className:"hv-footer"},n.createElement("div",{className:"hv-footer-newsletter"},n.createElement("div",{className:"hv-footer-newsletter-inner"},n.createElement("div",{className:"hv-footer-newsletter-content"},n.createElement("span",{className:"hv-footer-eyebrow"},n.createElement(Ze,{size:14}),"A LITTLE LOVE FROM HOVIRA"),n.createElement("h2",null,"Your inbox deserves",n.createElement("br",null),n.createElement("em",null,"a little glow.")),n.createElement("p",null,"Get skincare inspiration, thoughtful tips and first access to our latest collections.")),n.createElement("div",{className:"hv-footer-newsletter-form-wrap"},n.createElement("form",{className:"hv-footer-newsletter-form",onSubmit:m},n.createElement("div",{className:"hv-footer-input-wrap"},n.createElement(ss,{size:18}),n.createElement("input",{type:"email",placeholder:"Your email address",value:o,onChange:y=>{s(y.target.value),d("")},required:!0,"aria-label":"Email address"})),n.createElement("button",{type:"submit"},"Subscribe",n.createElement(we,{size:17}))),c&&n.createElement("p",{className:"hv-footer-success"},n.createElement(bt,{size:14}),c),n.createElement("small",null,"No spam, ever. Just a little goodness.")))),n.createElement("div",{className:"hv-footer-trust"},n.createElement("div",null,n.createElement(Bl,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Easy Shopping"),n.createElement("small",null,"A smooth shopping experience"))),n.createElement("div",null,n.createElement(Jt,{size:22}),n.createElement("span",null,n.createElement("strong",null,"Secure Checkout"),n.createElement("small",null,"Shop with confidence"))),n.createElement("div",null,n.createElement(pg,{size:22}),n.createElement("span",null,n.createElement("strong",null,"We're Here to Help"),n.createElement("small",null,"Customer support")))),n.createElement("div",{className:"hv-footer-main"},n.createElement("div",{className:"hv-footer-grid"},n.createElement("div",{className:"hv-footer-brand-section"},n.createElement(te,{to:"/",className:"hv-footer-logo"},"HOVIRA",n.createElement("span",null,"SKINCARE, SIMPLIFIED")),n.createElement("p",{className:"hv-footer-brand-description"},"Good skin days start with thoughtful rituals. Discover everyday essentials and make a little more time for yourself."),n.createElement("div",{className:"hv-footer-socials"},n.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(mg,{size:18})),n.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(dg,{size:18})))),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Explore"),n.createElement(te,{to:"/shop"},"Shop All"),n.createElement(te,{to:"/shop?category=Best%20sellers"},"Best Sellers"),n.createElement(te,{to:"/about"},"Our Story"),n.createElement(te,{to:"/account"},"My Account"),n.createElement(te,{to:"/wishlist"},"My Wishlist")),n.createElement("div",{className:"hv-footer-column"},n.createElement("h3",null,"Customer Care"),n.createElement(te,{to:"/privacy"},"Privacy Policy"),n.createElement(te,{to:"/terms"},"Terms & Conditions"),n.createElement(te,{to:"/shipping"},"Shipping Policy"),n.createElement(te,{to:"/returns"},"Returns & Refunds"),n.createElement("a",{href:"mailto:hello@hovira.com"},"Contact Support")),n.createElement("div",{className:"hv-footer-column hv-footer-contact"},n.createElement("h3",null,"Let's Connect"),n.createElement("p",null,"Have a question or need a little help? We'd love to hear from you."),n.createElement("a",{href:"mailto:hello@hovira.com",className:"hv-footer-email"},"hello@hovira.com",n.createElement(sp,{size:15})),n.createElement("div",{className:"hv-footer-tagline"},n.createElement(Ze,{size:15}),"A little self-care goes a long way."))),n.createElement("div",{className:"hv-footer-bottom"},n.createElement("div",{className:"hv-footer-copyright"},"© ",p," HOVIRA Cosmetics. All rights reserved."),n.createElement("div",{className:"hv-footer-bottom-center"},"Made with ",n.createElement(bt,{size:13,fill:"currentColor"})," for your everyday ritual."),n.createElement("button",{className:"hv-back-top",onClick:g,"aria-label":"Back to top"},"Back to top",n.createElement(ig,{size:17}))))),n.createElement("style",null,`
        
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

        `))}function Sg(){return n.createElement(n.Fragment,null,n.createElement(bg,null),n.createElement("main",null,n.createElement(ch,null)),n.createElement(Ng,null))}function rt({title:o,description:s,canonical:c}){return n.createElement(Zh,null,n.createElement("title",null,o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"),n.createElement("meta",{name:"description",content:s||"Thoughtful skincare essentials from HOVIRA."}),n.createElement("meta",{property:"og:site_name",content:"HOVIRA"}),n.createElement("meta",{property:"og:title",content:o?`${o} | HOVIRA`:"HOVIRA — Thoughtful skincare"}),n.createElement("meta",{property:"og:description",content:s||"Thoughtful skincare essentials from HOVIRA."}),c&&n.createElement("link",{rel:"canonical",href:c}))}function jl({product:o,index:s=0}){var W,q,se;const{addToCart:c,toggleWishlist:d,isWishlisted:p}=jt(),[m,g]=w.useState(!1),y=_l(o),h=Nn(o),E=p(o),b=Number(o.price||0),N=Number(o.salePrice||0),P=o.salePrice!=null&&N>0&&N<b,M=P?Math.round((b-N)/b*100):0,j=Number(o.stock)<=0,I=()=>{j||(c(o),g(!0),setTimeout(()=>{g(!1)},1800))},T=()=>{d(o)},A=typeof o.category=="string"?o.category:((W=o.category)==null?void 0:W.name)||"HOVIRA Essentials",$=((se=(q=o.images)==null?void 0:q.find(fe=>fe.isPrimary))==null?void 0:se.alt)||o.name||"HOVIRA skincare product";return n.createElement(n.Fragment,null,n.createElement("article",{className:"hv-product-card",style:{"--delay":`${s*80}ms`}},n.createElement("div",{className:"hv-product-image-wrap"},n.createElement(te,{to:da(o),className:"hv-product-image","aria-label":`View ${o.name}`},y?n.createElement("img",{src:y,alt:$,loading:"lazy"}):n.createElement("div",{className:"hv-product-placeholder"},n.createElement(Ze,{size:28}),n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR DAILY RITUAL"))),n.createElement("div",{className:"hv-product-badges"},j?n.createElement("span",{className:"hv-soldout-badge"},"Sold Out"):P?n.createElement("span",{className:"hv-sale-badge"},M,"% OFF"):o.isFeatured?n.createElement("span",{className:"hv-featured-badge"},n.createElement(Ze,{size:11}),"Featured"):null),n.createElement("button",{type:"button",className:`hv-wishlist-btn ${E?"wish-active":""}`,onClick:T,"aria-label":E?"Remove from wishlist":"Add to wishlist",title:E?"Remove from wishlist":"Add to wishlist"},n.createElement(bt,{size:18,fill:E?"currentColor":"none"})),n.createElement(te,{to:da(o),className:"hv-quick-view","aria-label":`View details of ${o.name}`},n.createElement(cp,{size:16}),"Quick View",n.createElement(sp,{size:15}))),n.createElement("div",{className:"hv-product-info"},n.createElement("div",{className:"hv-product-meta"},n.createElement("span",{className:"hv-product-category"},A),o.isFeatured&&!j&&n.createElement("span",{className:"hv-product-featured"},n.createElement(Ze,{size:11}),"Favourite")),n.createElement(te,{to:da(o),className:"hv-product-name"},o.name),o.shortDescription&&n.createElement("p",{className:"hv-product-description"},o.shortDescription),n.createElement("div",{className:"hv-product-bottom"},n.createElement("div",{className:"hv-product-price"},n.createElement("strong",null,je(h,o.currency||"INR")),P&&n.createElement("del",null,je(b,o.currency||"INR"))),n.createElement("button",{type:"button",className:`hv-add-cart ${m?"added":""}`,onClick:I,disabled:j},j?n.createElement(n.Fragment,null,"Sold Out"):m?n.createElement(n.Fragment,null,n.createElement(Un,{size:15}),"Added"):n.createElement(n.Fragment,null,n.createElement(Mt,{size:15}),"Add"))))),n.createElement("style",null,`

        
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

        `))}function Vn({label:o="Loading your essentials…"}){return n.createElement("div",{className:"loading-state"},n.createElement("span",{className:"spinner"}),n.createElement("p",null,o))}function _t({type:o="error",children:s,onClose:c}){return s?n.createElement("div",{className:`notice ${o}`,role:"status"},o==="success"?n.createElement(Xt,{size:18}):n.createElement(sg,{size:18}),n.createElement("span",null,s),c&&n.createElement("button",{onClick:c,"aria-label":"Dismiss"},n.createElement(ft,{size:16}))):null}function Cg(){const[o,s]=w.useState([]),[c,d]=w.useState(!0),[p,m]=w.useState(""),[g,y]=w.useState(0),[h,E]=w.useState(""),[b,N]=w.useState(""),[P,M]=w.useState(!1);w.useEffect(()=>{let A=!0;return(async()=>{d(!0),m("");try{const W=await Re.products();if(A){const q=Array.isArray(W)?W.filter(se=>se.isActive!==!1):[];s(q)}}catch(W){A&&m(W.message||"Unable to load products.")}finally{A&&d(!1)}})(),()=>{A=!1}},[g]);const j=w.useMemo(()=>{const A=o.filter($=>$.isFeatured);return(A.length?A:o).slice(0,4)},[o]),I=async A=>{if(A.preventDefault(),!!h.trim()){M(!0),N("");try{N("success"),E("")}catch{N("error")}finally{M(!1)}}},T=[{icon:n.createElement(yr,null),title:"Thoughtful Ingredients",description:"Ingredients selected with care for your daily skincare ritual."},{icon:n.createElement(Td,null),title:"Everyday Hydration",description:"Make hydration and nourishment part of your everyday routine."},{icon:n.createElement(Jt,null),title:"Honest Skincare",description:"Clear product information and a transparent shopping experience."},{icon:n.createElement(bt,null),title:"Made With Care",description:"A little more attention to the moments you spend on yourself."}];return n.createElement(n.Fragment,null,n.createElement(rt,{title:"HOVIRA Cosmetics | Thoughtful Skincare for Every Day",description:"Discover HOVIRA skincare essentials. Explore thoughtful skincare products, everyday beauty rituals and feel-good self-care."}),n.createElement("div",{className:"home-announcement"},n.createElement(Ze,{size:13}),n.createElement("span",null,"A little self-care goes a long way."),n.createElement(te,{to:"/shop"},"Explore HOVIRA ",n.createElement(we,{size:13}))),n.createElement("section",{className:"hv-hero"},n.createElement("div",{className:"hv-hero-bg-circle circle-one"}),n.createElement("div",{className:"hv-hero-bg-circle circle-two"}),n.createElement("div",{className:"hv-hero-inner"},n.createElement("div",{className:"hv-hero-content"},n.createElement("div",{className:"hv-eyebrow"},n.createElement("span",{className:"hv-eyebrow-line"}),n.createElement(Ze,{size:14}),"YOUR SKIN, YOUR RITUAL"),n.createElement("h1",null,"Your skin deserves",n.createElement("br",null),"a little more",n.createElement("br",null),n.createElement("em",null,"love & care.")),n.createElement("p",{className:"hv-hero-description"},"Beautiful skin begins with beautiful habits. Discover thoughtful skincare essentials designed to make your everyday routine feel special."),n.createElement("div",{className:"hv-hero-buttons"},n.createElement(te,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop Collection",n.createElement(we,{size:18})),n.createElement(te,{to:"/about",className:"hv-btn hv-btn-secondary"},"Discover Our Story",n.createElement(gg,{size:17}))),n.createElement("div",{className:"hv-hero-bottom"},n.createElement("div",{className:"hv-hero-mini-icons"},n.createElement("span",null,n.createElement(yr,{size:17})),n.createElement("span",null,n.createElement(Td,{size:17})),n.createElement("span",null,n.createElement(bt,{size:17}))),n.createElement("div",null,n.createElement("strong",null,"Make time for yourself."),n.createElement("small",null,"Little rituals. Beautiful moments.")))),n.createElement("div",{className:"hv-hero-visual"},n.createElement("div",{className:"hv-visual-decoration decoration-top"},"✳"),n.createElement("div",{className:"hv-hero-image-bg"},n.createElement("div",{className:"hv-image-circle circle-a"}),n.createElement("div",{className:"hv-image-circle circle-b"}),n.createElement("div",{className:"hv-floating-card floating-card-one"},n.createElement(dp,{size:19}),n.createElement("span",null,"Daily Glow")),n.createElement("div",{className:"hv-product-art"},n.createElement("div",{className:"hv-art-shadow"}),n.createElement("div",{className:"hv-art-cap"}),n.createElement("div",{className:"hv-art-neck"}),n.createElement("div",{className:"hv-art-bottle"},n.createElement("div",{className:"hv-art-bottle-content"},n.createElement("span",{className:"hv-art-brand"},"HOVIRA"),n.createElement("span",{className:"hv-art-line"}),n.createElement("small",null,"DAILY"),n.createElement("strong",null,"GLOW"),n.createElement("small",null,"SERUM"),n.createElement("span",{className:"hv-art-volume"},"30 ML")))),n.createElement("div",{className:"hv-floating-card floating-card-two"},n.createElement(Od,{size:19}),n.createElement("span",null,"Self Love Ritual"))),n.createElement("div",{className:"hv-hero-visual-caption"},n.createElement("span",null,"THE ART OF EVERYDAY CARE"),n.createElement("span",null,"HOVIRA ✳")))),n.createElement("div",{className:"hv-hero-scroll"},n.createElement("span",null),"SCROLL TO DISCOVER")),n.createElement("section",{className:"hv-benefits"},n.createElement("div",{className:"hv-benefits-inner"},T.map((A,$)=>n.createElement("div",{className:"hv-benefit",key:$},n.createElement("div",{className:"hv-benefit-icon"},A.icon),n.createElement("div",null,n.createElement("h3",null,A.title),n.createElement("p",null,A.description)))))),n.createElement("section",{className:"hv-products-section page-shell"},n.createElement("div",{className:"hv-section-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," THE HOVIRA COLLECTION"),n.createElement("h2",null,"Your new",n.createElement("br",{className:"hv-mobile-break"}),n.createElement("em",null," favourites.")),n.createElement("p",null,"Meet the little things that make your skincare routine something to look forward to.")),n.createElement(te,{to:"/shop",className:"hv-view-all"},"View All Products",n.createElement(we,{size:17}))),p&&n.createElement("div",{className:"hv-error"},n.createElement(_t,null,p),n.createElement("button",{className:"hv-retry-btn",onClick:()=>y(A=>A+1)},n.createElement(xg,{size:15})," Try Again")),c?n.createElement("div",{className:"hv-loading"},n.createElement(Vn,null)):j.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"hv-product-grid"},j.map((A,$)=>n.createElement("div",{className:"hv-product-item",key:A._id||A.slug,style:{"--item-index":$}},n.createElement(jl,{product:A,index:$})))),n.createElement("div",{className:"hv-mobile-shop"},n.createElement(te,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore All Products ",n.createElement(we,{size:17})))):p?null:n.createElement("div",{className:"hv-empty"},n.createElement("div",{className:"hv-empty-icon"},n.createElement(Od,{size:36})),n.createElement("h3",null,"Something beautiful is coming."),n.createElement("p",null,"Our skincare collection will appear here as soon as products are added to the store."),n.createElement(te,{to:"/shop",className:"hv-btn hv-btn-primary"},"Explore Shop ",n.createElement(we,{size:17})))),n.createElement("section",{className:"hv-ritual"},n.createElement("div",{className:"hv-ritual-art"},n.createElement("div",{className:"hv-ritual-sun"}),n.createElement("div",{className:"hv-ritual-orbit"}),n.createElement("div",{className:"hv-ritual-leaf leaf-one"}),n.createElement("div",{className:"hv-ritual-leaf leaf-two"}),n.createElement("div",{className:"hv-ritual-art-text"},n.createElement("span",null,"HOVIRA"),n.createElement("strong",null,"slow down",n.createElement("br",null),"& glow."),n.createElement("small",null,"A MOMENT FOR YOURSELF")),n.createElement("span",{className:"hv-ritual-star"},"✳")),n.createElement("div",{className:"hv-ritual-content"},n.createElement("span",{className:"hv-section-label"},"A LITTLE MOMENT, JUST FOR YOU"),n.createElement("h2",null,"Make self-care",n.createElement("br",null),"your favourite",n.createElement("br",null),n.createElement("em",null,"daily habit.")),n.createElement("p",null,"You don't need a complicated routine to feel good in your skin. Just a few thoughtful essentials, a little consistency and time to take care of yourself."),n.createElement(te,{to:"/shop",className:"hv-btn hv-btn-primary"},"Find Your Ritual ",n.createElement(we,{size:18})),n.createElement("div",{className:"hv-ritual-note"},n.createElement(bt,{size:16}),"Because you deserve your own care, too."))),n.createElement("section",{className:"hv-story page-shell"},n.createElement("div",{className:"hv-story-left"},n.createElement("span",{className:"hv-section-label"},n.createElement("span",null)," MORE THAN SKINCARE"),n.createElement("h2",null,"Beauty is a feeling.",n.createElement("br",null),n.createElement("em",null,"Not just a look.")),n.createElement("p",null,"At HOVIRA, we believe that skincare should feel personal. Your routine is your time, your space and your way of showing yourself a little love."),n.createElement(te,{to:"/about",className:"hv-text-link"},"Get to know HOVIRA ",n.createElement(we,{size:17}))),n.createElement("div",{className:"hv-story-right"},n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"01"),n.createElement(yr,{size:27}),n.createElement("h3",null,"Thoughtful Choices"),n.createElement("p",null,"Discover skincare with clear product information.")),n.createElement("div",{className:"hv-story-card story-card-highlight"},n.createElement("span",{className:"hv-story-number"},"02"),n.createElement(bt,{size:27}),n.createElement("h3",null,"Everyday Self Love"),n.createElement("p",null,"Make taking care of yourself a beautiful habit.")),n.createElement("div",{className:"hv-story-card"},n.createElement("span",{className:"hv-story-number"},"03"),n.createElement(Ze,{size:27}),n.createElement("h3",null,"Your Own Glow"),n.createElement("p",null,"Celebrate your skin and your individual routine.")))),n.createElement("section",{className:"hv-newsletter"},n.createElement("div",{className:"hv-newsletter-decoration"},"✳"),n.createElement("div",{className:"hv-newsletter-inner"},n.createElement("div",{className:"hv-newsletter-icon"},n.createElement(ss,{size:25})),n.createElement("span",{className:"hv-section-label"},"A LITTLE NOTE FROM HOVIRA"),n.createElement("h2",null,"Good things are",n.createElement("br",null),n.createElement("em",null,"worth sharing.")),n.createElement("p",null,"Get skincare inspiration, new collection updates and little reminders to make time for yourself."),n.createElement("form",{className:"hv-newsletter-form",onSubmit:I},n.createElement("input",{type:"email",value:h,onChange:A=>{E(A.target.value),N("")},placeholder:"Enter your email address","aria-label":"Email address",required:!0}),n.createElement("button",{type:"submit",disabled:P,className:"hv-newsletter-button"},P?"Please wait...":"Join Us",n.createElement(we,{size:17}))),b==="success"&&n.createElement("div",{className:"hv-newsletter-success"},n.createElement(Xt,{size:17}),"Thanks for your interest! Newsletter integration is ready to be connected to your backend."),b==="error"&&n.createElement("div",{className:"hv-newsletter-error"},"Something went wrong. Please try again."),n.createElement("small",null,"No spam. Just a little goodness."))),n.createElement("section",{className:"hv-final-cta"},n.createElement("div",null,n.createElement("span",{className:"hv-section-label"},"YOUR SKINCARE STORY STARTS HERE"),n.createElement("h2",null,"Ready for your",n.createElement("br",null),n.createElement("em",null,"little glow-up?"))),n.createElement(te,{to:"/shop",className:"hv-btn hv-btn-primary"},"Shop HOVIRA ",n.createElement(we,{size:18}))),n.createElement("style",null,`

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


  
  `))}function zg(){const[o,s]=Sh(),[c,d]=w.useState([]),[p,m]=w.useState(!0),[g,y]=w.useState(""),[h,E]=w.useState(o.get("search")||""),[b,N]=w.useState(o.get("category")||"all"),[P,M]=w.useState("featured"),[j,I]=w.useState(""),[T,A]=w.useState(!1),[$,W]=w.useState(!1);w.useEffect(()=>{let V=!0;return(async()=>{m(!0),y("");try{const re=await Re.products();if(V){const me=Array.isArray(re)?re.filter(ge=>ge.isActive!==!1):[];d(me)}}catch(re){V&&y(re.message||"Unable to load products.")}finally{V&&m(!1)}})(),()=>{V=!1}},[]),w.useEffect(()=>{E(o.get("search")||""),N(o.get("category")||"all")},[o]),w.useEffect(()=>(document.body.style.overflow=$?"hidden":"",()=>{document.body.style.overflow=""}),[$]);const q=w.useMemo(()=>[...new Set(c.map(V=>{var ye;return typeof V.category=="string"?V.category:(ye=V.category)==null?void 0:ye.name}).filter(Boolean))].sort((V,ye)=>V.localeCompare(ye)),[c]),se=w.useMemo(()=>{let V=[...c];const ye=h.toLowerCase().trim();return ye&&(V=V.filter(re=>{var Y;const me=typeof re.category=="string"?re.category:((Y=re.category)==null?void 0:Y.name)||"";return[re.name,re.shortDescription,re.description,me,re.brand,...re.tags||[]].join(" ").toLowerCase().includes(ye)})),b!=="all"&&(V=V.filter(re=>{var ge;return(typeof re.category=="string"?re.category:((ge=re.category)==null?void 0:ge.name)||"").toLowerCase()===b.toLowerCase()})),j!==""&&(V=V.filter(re=>Number(re.salePrice??re.price)<=Number(j))),T&&(V=V.filter(re=>Number(re.stock)>0)),P==="price-low"&&V.sort((re,me)=>Number(re.salePrice??re.price)-Number(me.salePrice??me.price)),P==="price-high"&&V.sort((re,me)=>Number(me.salePrice??me.price)-Number(re.salePrice??re.price)),P==="name"&&V.sort((re,me)=>(re.name||"").localeCompare(me.name||"")),P==="newest"&&V.sort((re,me)=>new Date(me.createdAt||0)-new Date(re.createdAt||0)),P==="featured"&&V.sort((re,me)=>Number(me.isFeatured)-Number(re.isFeatured)),V},[c,h,b,j,T,P]),fe=[h.trim()!=="",b!=="all",j!=="",T].filter(Boolean).length,xe=(V,ye)=>{const re={};V.trim()&&(re.search=V.trim()),ye!=="all"&&(re.category=ye),s(re)},ae=()=>{E(""),N("all"),I(""),A(!1),M("featured"),s({})},Ne=V=>{V==="search"&&(E(""),xe("",b)),V==="category"&&(N("all"),xe(h,"all")),V==="price"&&I(""),V==="stock"&&A(!1)},he=V=>{N(V),xe(h,V)},Ae=V=>{E(V),xe(V,b)},Le=()=>W(!1);return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Shop Skincare Products | HOVIRA Cosmetics",description:"Explore the HOVIRA skincare collection. Discover everyday skincare essentials and shop your favourites with easy search and filters."}),n.createElement("section",{className:"hv-shop-hero"},n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-one"},"✳"),n.createElement("div",{className:"hv-shop-hero-decoration shop-decoration-two"},"✳"),n.createElement("div",{className:"hv-shop-hero-content"},n.createElement("div",{className:"hv-shop-breadcrumb"},n.createElement(te,{to:"/"},"Home"),n.createElement("span",null,"/"),n.createElement("span",null,"Shop")),n.createElement("span",{className:"hv-shop-eyebrow"},n.createElement(Ze,{size:14}),"THE HOVIRA COLLECTION"),n.createElement("h1",null,"Find your",n.createElement("br",null),n.createElement("em",null,"everyday glow.")),n.createElement("p",null,"Thoughtful skincare essentials to make your everyday routine feel a little more special."),n.createElement("div",{className:"hv-shop-hero-bottom"},n.createElement("span",null,n.createElement(yr,{size:15}),"YOUR SKIN, YOUR RITUAL"),n.createElement("span",{className:"hv-shop-hero-line"})))),n.createElement("section",{className:"hv-shop-section page-shell"},n.createElement("div",{className:"hv-category-section"},n.createElement("div",{className:"hv-category-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"EXPLORE BY CATEGORY"),n.createElement("h2",null,"Find what feels ",n.createElement("em",null,"right.")))),n.createElement("div",{className:"hv-category-pills"},n.createElement("button",{className:b==="all"?"active":"",onClick:()=>he("all")},"All Products",b==="all"&&n.createElement(Un,{size:14})),q.map(V=>n.createElement("button",{key:V,className:b===V?"active":"",onClick:()=>he(V)},V,b===V&&n.createElement(Un,{size:14}))))),n.createElement("div",{className:"hv-shop-divider"}),n.createElement("div",{className:"hv-shop-layout"},n.createElement("aside",{className:`hv-shop-filters ${$?"filters-open":""}`},n.createElement("div",{className:"hv-filter-header"},n.createElement("div",null,n.createElement("span",{className:"hv-shop-section-label"},"REFINE YOUR SEARCH"),n.createElement("h3",null,"Filters")),n.createElement("div",{className:"hv-filter-header-actions"},n.createElement("button",{type:"button",className:"hv-clear-btn",onClick:ae},"Clear all"),n.createElement("button",{type:"button",className:"hv-filter-close",onClick:Le,"aria-label":"Close filters"},n.createElement(ft,{size:21})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Search products"),n.createElement("div",{className:"hv-filter-search"},n.createElement(as,{size:17}),n.createElement("input",{type:"search",value:h,onChange:V=>Ae(V.target.value),placeholder:"Try serum, cleanser..."}),h&&n.createElement("button",{type:"button",onClick:()=>Ne("search"),"aria-label":"Clear search"},n.createElement(ft,{size:15})))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Categories"),n.createElement("div",{className:"hv-filter-options"},n.createElement("label",{className:"hv-filter-option"},n.createElement("input",{type:"radio",checked:b==="all",onChange:()=>he("all")}),n.createElement("span",null,"All Products"),n.createElement("i",null,c.length)),q.map(V=>n.createElement("label",{className:"hv-filter-option",key:V},n.createElement("input",{type:"radio",checked:b===V,onChange:()=>he(V)}),n.createElement("span",null,V),n.createElement("i",null,c.filter(ye=>{var me;return(typeof ye.category=="string"?ye.category:(me=ye.category)==null?void 0:me.name)===V}).length))))),n.createElement("div",{className:"hv-filter-block"},n.createElement("h4",null,"Maximum price"),n.createElement("div",{className:"hv-price-input"},n.createElement("span",null,"₹"),n.createElement("input",{type:"number",min:"0",value:j,onChange:V=>I(V.target.value),placeholder:"Enter maximum price"}),j&&n.createElement("button",{type:"button",onClick:()=>Ne("price"),"aria-label":"Clear maximum price"},n.createElement(ft,{size:15}))),n.createElement("small",{className:"hv-filter-hint"},"Show products within your budget.")),n.createElement("div",{className:"hv-filter-block"},n.createElement("label",{className:"hv-stock-filter"},n.createElement("span",null,n.createElement("strong",null,"In stock only"),n.createElement("small",null,"Hide unavailable products")),n.createElement("input",{type:"checkbox",checked:T,onChange:V=>A(V.target.checked)}),n.createElement("i",null))),n.createElement("button",{type:"button",className:"hv-reset-filters",onClick:ae},n.createElement(Pd,{size:15}),"Reset all filters"),n.createElement("button",{type:"button",className:"hv-apply-filters",onClick:Le},"Show ",se.length," Products",n.createElement(we,{size:16}))),n.createElement("div",{className:"hv-shop-results"},n.createElement("div",{className:"hv-results-toolbar"},n.createElement("div",{className:"hv-results-left"},n.createElement("button",{type:"button",className:"hv-mobile-filter-button",onClick:()=>W(!0)},n.createElement(Eg,{size:16}),"Filters",fe>0&&n.createElement("span",null,fe)),n.createElement("div",{className:"hv-results-count"},n.createElement("strong",null,p?"...":se.length),n.createElement("span",null,se.length===1?"Product":"Products"))),n.createElement("label",{className:"hv-sort-control"},n.createElement(ag,{size:16}),n.createElement("span",null,"Sort by"),n.createElement("select",{value:P,onChange:V=>M(V.target.value),"aria-label":"Sort products"},n.createElement("option",{value:"featured"},"Featured"),n.createElement("option",{value:"newest"},"Newest"),n.createElement("option",{value:"price-low"},"Price: Low to High"),n.createElement("option",{value:"price-high"},"Price: High to Low"),n.createElement("option",{value:"name"},"Name A–Z")),n.createElement(og,{size:14}))),fe>0&&n.createElement("div",{className:"hv-active-filters"},n.createElement("span",null,"Active filters:"),h&&n.createElement("button",{onClick:()=>Ne("search")},"Search: ",h,n.createElement(ft,{size:13})),b!=="all"&&n.createElement("button",{onClick:()=>Ne("category")},b,n.createElement(ft,{size:13})),j&&n.createElement("button",{onClick:()=>Ne("price")},"Under ₹",j,n.createElement(ft,{size:13})),T&&n.createElement("button",{onClick:()=>Ne("stock")},"In stock",n.createElement(ft,{size:13})),n.createElement("button",{className:"hv-clear-chips",onClick:ae},"Clear all")),g&&n.createElement("div",{className:"hv-shop-error"},n.createElement(_t,null,g)),p?n.createElement("div",{className:"hv-shop-loading"},n.createElement(Vn,null)):se.length>0?n.createElement("div",{className:"hv-shop-product-grid"},se.map((V,ye)=>n.createElement(jl,{key:V._id||V.slug,product:V,index:ye}))):g?null:n.createElement("div",{className:"hv-shop-empty"},n.createElement("div",{className:"hv-shop-empty-icon"},n.createElement(Mt,{size:36})),n.createElement("span",{className:"hv-shop-section-label"},"NOTHING HERE JUST YET"),n.createElement("h3",null,"No matches ",n.createElement("em",null,"just yet.")),n.createElement("p",null,"We couldn't find products matching your current filters. Try changing your search or exploring another category."),n.createElement("button",{className:"hv-empty-clear",onClick:ae},n.createElement(Pd,{size:16}),"Clear all filters"))))),n.createElement("section",{className:"hv-shop-promo"},n.createElement("div",null,n.createElement(Ze,{size:20}),n.createElement("h2",null,"Make every day a little more ",n.createElement("em",null,"beautiful.")),n.createElement("p",null,"Your skincare journey deserves a little love.")),n.createElement(te,{to:"/about"},"Discover HOVIRA ",n.createElement(we,{size:17}))),n.createElement("button",{type:"button",className:`hv-shop-drawer-scrim ${$?"show":""}`,"aria-label":"Close filters",onClick:Le}),n.createElement("style",null,`
          
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

          `))}function Ag(){var Y,D,R,k,O,ce,pe,B,J,Z,ie;const{slugOrId:o}=Wd(),[s,c]=w.useState(null),[d,p]=w.useState([]),[m,g]=w.useState(!0),[y,h]=w.useState(""),[E,b]=w.useState(1),[N,P]=w.useState(0),[M,j]=w.useState(""),[I,T]=w.useState(!1),{addToCart:A,toggleWishlist:$,isWishlisted:W}=jt();w.useEffect(()=>{let U=!0;return g(!0),h(""),c(null),P(0),j(""),b(1),T(!1),Promise.all([Re.product(o),Re.products()]).then(([G,Fe])=>{U&&(c(G),p(Fe))}).catch(G=>{U&&h(G.message)}).finally(()=>{U&&g(!1)}),()=>{U=!1}},[o]);const q=w.useMemo(()=>{if(!s)return[];const U=(s.images||[]).map(G=>({url:typeof G=="string"?G:G==null?void 0:G.url,alt:typeof G=="string"?s.name:G==null?void 0:G.alt})).filter(G=>G.url);if(!U.length){const G=_l(s);return G?[{url:G,alt:s.name}]:[]}return U},[s]),se=((Y=q[N])==null?void 0:Y.url)||"",fe=s?Nn(s):0,xe=Number((s==null?void 0:s.price)||0),ae=(s==null?void 0:s.salePrice)!=null&&xe>fe&&fe>0,Ne=ae?Math.round((xe-fe)/xe*100):0,he=(D=s==null?void 0:s.variants)==null?void 0:D.find(U=>U.value===M),Ae=Number(he?he.stock||0:(s==null?void 0:s.stock)||0),Le=typeof(s==null?void 0:s.category)=="object"?((R=s.category)==null?void 0:R.name)||"HOVIRA ESSENTIALS":(s==null?void 0:s.category)||"HOVIRA ESSENTIALS",V=U=>U?String(typeof U=="object"?U._id||U.id||U.name||"":U):"",ye=w.useMemo(()=>{if(!s)return[];const U=V(s.category);return d.filter(G=>{const Fe=V(G.category)===U;return G._id!==s._id&&Fe&&G.isActive!==!1}).slice(0,4)},[d,s]),re=()=>{var U;((U=s.variants)==null?void 0:U.length)>0&&!M||Ae<=0||(A(s,E,M),T(!0),setTimeout(()=>{T(!1)},2e3))},me=U=>{b(G=>Math.max(1,Math.min(99,G+U)))};if(m)return n.createElement("div",{className:"page-shell"},n.createElement(Vn,{label:"Finding your product..."}));if(y||!s)return n.createElement("div",{className:"page-shell pd-error"},n.createElement(_t,null,y||"We couldn't find this product."),n.createElement(te,{to:"/shop",className:"pd-back-link"},n.createElement(Cn,{size:17}),"Back to shop"));const ge=W(s);return n.createElement(n.Fragment,null,n.createElement(rt,{title:((k=s.seo)==null?void 0:k.metaTitle)||s.name,description:((O=s.seo)==null?void 0:O.metaDescription)||s.shortDescription||s.description,canonical:((ce=s.seo)==null?void 0:ce.canonicalUrl)||void 0}),n.createElement("main",{className:"pd-page"},n.createElement("div",{className:"page-shell"},n.createElement("nav",{className:"pd-breadcrumbs"},n.createElement(te,{to:"/"},"Home"),n.createElement(Pl,{size:14}),n.createElement(te,{to:"/shop"},"Shop"),n.createElement(Pl,{size:14}),n.createElement("span",null,s.name)),n.createElement("section",{className:"pd-main-grid"},n.createElement("div",{className:"pd-gallery"},n.createElement("div",{className:"pd-main-image"},se?n.createElement("img",{src:se,alt:((pe=q[N])==null?void 0:pe.alt)||s.name,key:se}):n.createElement("div",{className:"pd-image-placeholder"},n.createElement(Ze,{size:38}),n.createElement("span",null,"HOVIRA")),s.isFeatured&&n.createElement("span",{className:"pd-featured-badge"},n.createElement(Ze,{size:13}),"HOVIRA Favourite"),ae&&n.createElement("span",{className:"pd-discount-badge"},Ne,"% OFF"),q.length>1&&n.createElement(n.Fragment,null,n.createElement("button",{className:"pd-image-arrow pd-image-prev",onClick:()=>P(U=>U===0?q.length-1:U-1),"aria-label":"Previous image"},n.createElement(Cn,{size:18})),n.createElement("button",{className:"pd-image-arrow pd-image-next",onClick:()=>P(U=>(U+1)%q.length),"aria-label":"Next image"},n.createElement(we,{size:18})))),q.length>1&&n.createElement("div",{className:"pd-thumbnails"},q.map((U,G)=>n.createElement("button",{key:`${U.url}-${G}`,className:N===G?"active":"",onClick:()=>P(G),"aria-label":`View image ${G+1}`},n.createElement("img",{src:U.url,alt:U.alt||`${s.name} ${G+1}`})))),n.createElement("div",{className:"pd-gallery-note"},n.createElement(Ze,{size:15}),n.createElement("span",null,"Thoughtfully made for your everyday care."))),n.createElement("div",{className:"pd-info"},n.createElement("span",{className:"pd-eyebrow"},Le),n.createElement("h1",null,s.name),s.shortDescription&&n.createElement("p",{className:"pd-short-description"},s.shortDescription),n.createElement("div",{className:"pd-price-area"},n.createElement("div",{className:"pd-price"},je(fe,s.currency||"INR")),ae&&n.createElement(n.Fragment,null,n.createElement("del",null,je(xe,s.currency||"INR")),n.createElement("span",{className:"pd-save"},"Save ",Ne,"%"))),n.createElement("p",{className:"pd-tax-note"},"Inclusive of applicable taxes"),n.createElement("div",{className:"pd-info-divider"}),((B=s.variants)==null?void 0:B.length)>0&&n.createElement("div",{className:"pd-variant-section"},n.createElement("div",{className:"pd-field-heading"},n.createElement("label",null,"Choose your option"),M&&n.createElement("span",null,M)),n.createElement("div",{className:"pd-variant-list"},s.variants.map(U=>n.createElement("button",{type:"button",key:U._id||U.sku||U.value,disabled:U.stock===0,className:M===U.value?"selected":"",onClick:()=>j(U.value)},n.createElement("span",null,U.name,": ",U.value),M===U.value&&n.createElement(Un,{size:16}),U.stock===0&&n.createElement("small",null,"Sold out")))),s.variants.length>0&&!M&&n.createElement("small",{className:"pd-selection-hint"},"Please select an option before adding to bag.")),n.createElement("div",{className:"pd-purchase-heading"},n.createElement("span",null,"Quantity"),n.createElement("span",{className:"pd-stock-status"},Ae>0?"In stock":"Out of stock")),n.createElement("div",{className:"pd-purchase-row"},n.createElement("div",{className:"pd-quantity"},n.createElement("button",{type:"button",onClick:()=>me(-1),disabled:E<=1,"aria-label":"Decrease quantity"},n.createElement(up,{size:16})),n.createElement("span",null,E),n.createElement("button",{type:"button",onClick:()=>me(1),disabled:E>=99||E>=Ae,"aria-label":"Increase quantity"},n.createElement(Er,{size:16}))),n.createElement("button",{type:"button",className:"pd-add-button",disabled:Ae<=0||((J=s.variants)==null?void 0:J.length)>0&&!M,onClick:re},I?n.createElement(n.Fragment,null,n.createElement(Un,{size:19}),"Added to bag"):n.createElement(n.Fragment,null,n.createElement(Mt,{size:19}),Ae<=0?"Sold out":"Add to bag")),n.createElement("button",{type:"button",className:`pd-wishlist ${ge?"active":""}`,onClick:()=>$(s),"aria-label":"Toggle wishlist"},n.createElement(bt,{size:21,fill:ge?"currentColor":"none"}))),Ae>0&&n.createElement("p",{className:"pd-stock-note"},n.createElement(cs,{size:15}),Ae," items available"),n.createElement("div",{className:"pd-promises"},n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Bl,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("span",null,"Shipping details at checkout"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(Jt,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Secure checkout"),n.createElement("span",null,"Safe and secure shopping"))),n.createElement("div",{className:"pd-promise"},n.createElement("div",{className:"pd-promise-icon"},n.createElement(yr,{size:21})),n.createElement("div",null,n.createElement("strong",null,"Everyday care"),n.createElement("span",null,"Explore product ingredients")))))),n.createElement("section",{className:"pd-details"},n.createElement("div",{className:"pd-details-heading"},n.createElement("span",{className:"pd-eyebrow"},"DISCOVER HOVIRA"),n.createElement("h2",null,"The beauty of ",n.createElement("em",null,"everyday care.")),n.createElement("p",null,"Everything you need to know about your product.")),n.createElement("div",{className:"pd-content-grid"},n.createElement("div",{className:"pd-content-card pd-description-card"},n.createElement("span",{className:"pd-card-number"},"01"),n.createElement("h3",null,"About this product"),n.createElement("div",{className:"pd-rich-content",dangerouslySetInnerHTML:{__html:s.content||s.description||"Product details coming soon."}})),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"02"),n.createElement("h3",null,"Ingredients"),(Z=s.ingredients)!=null&&Z.length?n.createElement("ul",{className:"pd-chip-list"},s.ingredients.map((U,G)=>n.createElement("li",{key:`${U}-${G}`},n.createElement(Un,{size:14}),U))):n.createElement("p",null,"Ingredient information will be provided on the product label.")),n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"03"),n.createElement("h3",null,"Benefits"),(ie=s.benefits)!=null&&ie.length?n.createElement("ul",{className:"pd-benefit-list"},s.benefits.map((U,G)=>n.createElement("li",{key:`${U}-${G}`},n.createElement("span",null,n.createElement(Un,{size:15})),U))):n.createElement("p",null,"Designed to be part of a simple everyday routine.")),s.howToUse&&n.createElement("div",{className:"pd-content-card"},n.createElement("span",{className:"pd-card-number"},"04"),n.createElement("h3",null,"How to use"),n.createElement("p",null,s.howToUse)),s.warnings&&n.createElement("div",{className:"pd-content-card pd-warning-card"},n.createElement("span",{className:"pd-card-number"},"05"),n.createElement("h3",null,"Please note"),n.createElement("p",null,s.warnings)))))),ye.length>0&&n.createElement("section",{className:"pd-related page-shell"},n.createElement("div",{className:"pd-related-heading"},n.createElement("div",null,n.createElement("span",{className:"pd-eyebrow"},"KEEP EXPLORING"),n.createElement("h2",null,"You might also ",n.createElement("em",null,"love.")),n.createElement("p",null,"Discover more from the HOVIRA collection.")),n.createElement(te,{to:"/shop",className:"pd-shop-link"},"Shop all",n.createElement(we,{size:17}))),n.createElement("div",{className:"product-grid"},ye.map((U,G)=>n.createElement(jl,{key:U._id||U.slug,product:U,index:G})))),n.createElement("style",null,`
          
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

          `))}function Tg(){const[o,s]=w.useState({email:"",password:""}),[c,d]=w.useState(!1),[p,m]=w.useState(""),[g,y]=w.useState(!1),{setCustomer:h}=jt(),E=tn(),b=en(),N=M=>s({...o,[M.target.name]:M.target.value}),P=async M=>{var j,I,T;M.preventDefault(),m(""),y(!0);try{const A=await Re.login(o),$=A.token||A.accessToken||((j=A.data)==null?void 0:j.token)||((I=A.data)==null?void 0:I.accessToken);if(!$)throw new Error("Login succeeded but no token was returned. Check the login response in src/api/client.js.");lp($);const W=wt(A,["customer","user","profile"])||await Re.me();h(W),E(((T=b.state)==null?void 0:T.from)||"/account",{replace:!0})}catch(A){m(A.message)}finally{y(!1)}};return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Sign in",description:"Sign in to your HOVIRA account."}),n.createElement("div",{className:"auth-page"},n.createElement("div",{className:"auth-art"},n.createElement("div",{className:"auth-art-circle"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"CARE, EVERY DAY.")),n.createElement("p",null,"Your ritual is waiting.")),n.createElement("div",{className:"auth-form-wrap"},n.createElement("span",{className:"eyebrow"},"WELCOME BACK"),n.createElement("h1",null,"Good to see ",n.createElement("em",null,"you.")),n.createElement("p",null,"Sign in to continue your HOVIRA journey."),n.createElement(_t,null,p),n.createElement("form",{className:"form-stack",onSubmit:P},n.createElement("label",{className:"field-label"},"Email address",n.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,value:o.email,onChange:N,placeholder:"you@example.com"})),n.createElement("label",{className:"field-label"},"Password",n.createElement("div",{className:"password-field"},n.createElement("input",{name:"password",type:c?"text":"password",autoComplete:"current-password",required:!0,value:o.password,onChange:N,placeholder:"Your password"}),n.createElement("button",{type:"button",onClick:()=>d(!c),"aria-label":"Toggle password visibility"},c?n.createElement(ug,{size:17}):n.createElement(cp,{size:17})))),n.createElement("button",{className:"btn btn-dark btn-full",disabled:g},g?"Signing in…":"Sign in"," ",n.createElement(we,{size:17}))),n.createElement("p",{className:"auth-switch"},"New to HOVIRA? ",n.createElement(te,{to:"/signup"},"Create an account")),n.createElement("p",{className:"auth-privacy"},"By continuing, you agree to our ",n.createElement(te,{to:"/terms"},"Terms")," and ",n.createElement(te,{to:"/privacy"},"Privacy Policy"),"."))))}function Fd(){const[o,s]=w.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",marketingOptIn:!1}),[c,d]=w.useState(""),[p,m]=w.useState(!1),{setCustomer:g}=jt(),y=tn(),h=b=>s({...o,[b.target.name]:b.target.type==="checkbox"?b.target.checked:b.target.value}),E=async b=>{var N,P;if(b.preventDefault(),d(""),o.password.length<8)return d("Password must be at least 8 characters.");if(o.password!==o.confirmPassword)return d("Your passwords do not match.");m(!0);try{const{confirmPassword:M,...j}=o,I=await Re.register(j),T=I.token||I.accessToken||((N=I.data)==null?void 0:N.token)||((P=I.data)==null?void 0:P.accessToken);T?(lp(T),g(wt(I,["customer","user","profile"])||await Re.me()),y("/account")):y("/login",{state:{registered:!0}})}catch(M){d(M.message)}finally{m(!1)}};return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Create an account",description:"Create your HOVIRA customer account."}),n.createElement("div",{className:"auth-page"},n.createElement("div",{className:"auth-art signup-art"},n.createElement("div",{className:"auth-art-circle"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"YOUR SKIN, YOUR RITUAL")),n.createElement("p",null,"Make room for a little care.")),n.createElement("div",{className:"auth-form-wrap"},n.createElement("span",{className:"eyebrow"},"A LITTLE MORE YOU"),n.createElement("h1",null,"Let's make this ",n.createElement("em",null,"personal.")),n.createElement("p",null,"Create an account for a smoother shopping experience."),n.createElement(_t,null,c),n.createElement("form",{className:"form-stack",onSubmit:E},n.createElement("label",{className:"field-label"},"Full name",n.createElement("input",{name:"name",required:!0,maxLength:"100",value:o.name,onChange:h,placeholder:"Your full name",autoComplete:"name"})),n.createElement("div",{className:"form-two"},n.createElement("label",{className:"field-label"},"Email address",n.createElement("input",{name:"email",type:"email",required:!0,value:o.email,onChange:h,placeholder:"you@example.com",autoComplete:"email"})),n.createElement("label",{className:"field-label"},"Phone (optional)",n.createElement("input",{name:"phone",type:"tel",value:o.phone,onChange:h,placeholder:"Phone number",autoComplete:"tel"}))),n.createElement("label",{className:"field-label"},"Password",n.createElement("input",{name:"password",type:"password",required:!0,minLength:"8",value:o.password,onChange:h,placeholder:"At least 8 characters",autoComplete:"new-password"})),n.createElement("label",{className:"field-label"},"Confirm password",n.createElement("input",{name:"confirmPassword",type:"password",required:!0,value:o.confirmPassword,onChange:h,placeholder:"Repeat password",autoComplete:"new-password"})),n.createElement("label",{className:"check-row"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:o.marketingOptIn,onChange:h})," Send me occasional HOVIRA updates."),n.createElement("button",{className:"btn btn-dark btn-full",disabled:p},p?"Creating account…":"Create account"," ",n.createElement(we,{size:17}))),n.createElement("p",{className:"auth-switch"},"Already have an account? ",n.createElement(te,{to:"/login"},"Sign in")),n.createElement("p",{className:"auth-privacy"},"By creating an account, you agree to our ",n.createElement(te,{to:"/terms"},"Terms")," and ",n.createElement(te,{to:"/privacy"},"Privacy Policy"),"."))))}function Og(){const{cart:o,updateQuantity:s,removeFromCart:c}=jt(),d=tn(),p=w.useMemo(()=>o.reduce((y,h)=>y+h.quantity,0),[o]),m=w.useMemo(()=>o.reduce((y,h)=>y+Nn(h.product)*h.quantity,0),[o]),g=(y,h)=>{const E=y.quantity+h;E<1||s(y.key,E)};return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Your Shopping Bag | HOVIRA"}),n.createElement("main",{className:"hv-cart-page"},n.createElement("div",{className:"hv-cart-container"},n.createElement("div",{className:"hv-cart-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h1",null,"Your ",n.createElement("em",null,"bag.")),n.createElement("p",null,p," ",p===1?"item":"items"," ready for your ritual.")),n.createElement("div",{className:"hv-cart-heading-icon"},n.createElement(Mt,{size:28}))),o.length?n.createElement("div",{className:"hv-cart-layout"},n.createElement("section",{className:"hv-cart-items-section"},n.createElement("div",{className:"hv-cart-items-top"},n.createElement("div",null,n.createElement("h2",null,"Your selection"),n.createElement("p",null,p," items in your shopping bag")),n.createElement(te,{to:"/shop",className:"hv-cart-back-shop"},"Continue shopping",n.createElement(we,{size:15}))),n.createElement("div",{className:"hv-cart-table-head"},n.createElement("span",null,"PRODUCT"),n.createElement("span",null,"QUANTITY"),n.createElement("span",null,"TOTAL")),n.createElement("div",{className:"hv-cart-product-list"},o.map(y=>{var N;const h=y.product,E=Nn(h),b=_l(h);return n.createElement("article",{className:"hv-cart-item",key:y.key},n.createElement(te,{to:da(h),className:"hv-cart-product-image"},b?n.createElement("img",{src:b,alt:h.name}):n.createElement("span",null,"HOVIRA")),n.createElement("div",{className:"hv-cart-product-info"},n.createElement("span",{className:"hv-cart-product-category"},typeof h.category=="object"?((N=h.category)==null?void 0:N.name)||"HOVIRA":h.category||"HOVIRA"),n.createElement(te,{to:da(h),className:"hv-cart-product-name"},h.name),y.variant&&n.createElement("span",{className:"hv-cart-product-variant"},"Option: ",y.variant),n.createElement("span",{className:"hv-cart-product-price"},je(E,h.currency||"INR")),n.createElement("button",{type:"button",className:"hv-cart-remove",onClick:()=>c(y.key)},n.createElement(pp,{size:14}),"Remove")),n.createElement("div",{className:"hv-cart-quantity"},n.createElement("button",{type:"button",onClick:()=>g(y,-1),disabled:y.quantity<=1,"aria-label":"Decrease quantity"},n.createElement(up,{size:14})),n.createElement("span",null,y.quantity),n.createElement("button",{type:"button",onClick:()=>g(y,1),"aria-label":"Increase quantity"},n.createElement(Er,{size:14}))),n.createElement("strong",{className:"hv-cart-line-total"},je(E*y.quantity,h.currency||"INR")))})),n.createElement(te,{to:"/shop",className:"hv-cart-continue-link"},n.createElement(Cn,{size:16}),"Continue shopping")),n.createElement("aside",{className:"hv-cart-summary"},n.createElement("div",{className:"hv-cart-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-cart-eyebrow"},"YOUR ORDER"),n.createElement("h2",null,"Order summary")),n.createElement(Mt,{size:23})),n.createElement("div",{className:"hv-cart-summary-count"},n.createElement("span",null,"Items in your bag"),n.createElement("strong",null,p)),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,je(m))),n.createElement("div",{className:"hv-cart-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-cart-shipping-label"},"Calculated at checkout")),n.createElement("div",{className:"hv-cart-summary-divider"}),n.createElement("div",{className:"hv-cart-summary-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,je(m))),n.createElement("p",{className:"hv-cart-summary-note"},"Any applicable discount and shipping charges are confirmed before you place your order."),n.createElement("button",{type:"button",className:"hv-cart-checkout-button",onClick:()=>d("/checkout")},"Continue to checkout",n.createElement(we,{size:18})),n.createElement("div",{className:"hv-cart-payment-note"},n.createElement(Jt,{size:15}),"Secure checkout · Your details stay protected"),n.createElement("div",{className:"hv-cart-benefits"},n.createElement("div",null,n.createElement(Bl,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping calculated at checkout"))),n.createElement("div",null,n.createElement(cs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Made for your everyday ritual")))))):n.createElement("div",{className:"hv-cart-empty"},n.createElement("div",{className:"hv-cart-empty-icon"},n.createElement(Mt,{size:34}),n.createElement(Ze,{size:16})),n.createElement("span",{className:"hv-cart-eyebrow"},"A LITTLE SPACE FOR SOMETHING LOVELY"),n.createElement("h2",null,"Your bag is taking a ",n.createElement("em",null,"breather.")),n.createElement("p",null,"Explore the collection and find something that feels like you."),n.createElement(te,{className:"hv-cart-primary-button",to:"/shop"},"Explore the shop",n.createElement(we,{size:17}))))),n.createElement("style",null,`
          
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

          `))}function Pg(){const{wishlist:o}=jt();return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Your wishlist"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"SAVED WITH LOVE"),n.createElement("h1",null,"Your ",n.createElement("em",null,"wishlist.")),n.createElement("p",null,"Keep the things you love close.")),o.length?n.createElement("div",{className:"product-grid"},o.map((s,c)=>n.createElement(jl,{key:s._id||s.slug,product:s,index:c}))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(bt,null)),n.createElement("h2",null,"A little space for your favourites."),n.createElement("p",null,"Tap the heart on a product to save it here."),n.createElement(te,{to:"/shop",className:"btn btn-dark"},"Explore products ",n.createElement(we,{size:17})))))}const qi={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1},Rg=[{value:"cod",label:"Cash on delivery",description:"Pay when your order arrives",icon:lg},{value:"upi",label:"UPI",description:"Google Pay, PhonePe, Paytm",icon:kg},{value:"card",label:"Credit / debit card",description:"Visa, Mastercard and more",icon:cg},{value:"netbanking",label:"Net banking",description:"Pay through your bank",icon:Rl}];function Dg(){const{cart:o,customer:s,clearCart:c,setCustomer:d}=jt(),p=tn(),[m,g]=w.useState((s==null?void 0:s.addresses)||[]),[y,h]=w.useState(""),[E,b]=w.useState(!1),[N,P]=w.useState({...qi,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),[M,j]=w.useState("cod"),[I,T]=w.useState(""),[A,$]=w.useState(""),[W,q]=w.useState(null),[se,fe]=w.useState(0),[xe,ae]=w.useState(""),[Ne,he]=w.useState(""),[Ae,Le]=w.useState(!1),[V,ye]=w.useState(!1),[re,me]=w.useState(!1),ge=w.useMemo(()=>o.reduce((B,J)=>B+Nn(J.product)*J.quantity,0),[o]),Y=Math.max(0,ge-se);w.useEffect(()=>{const B=(s==null?void 0:s.addresses)||[];if(g(B),B.length){const J=B.find(Z=>Z.isDefault);h(String((J==null?void 0:J._id)||B[0]._id))}else h("")},[s]);const D=()=>{ae(""),he("")},R=B=>{const{name:J,value:Z,type:ie,checked:U}=B.target;P(G=>({...G,[J]:ie==="checkbox"?U:Z}))},k=async B=>{B.preventDefault(),D(),ye(!0);try{const J=await Re.addAddress(N),Z=J!=null&&J.addresses?J:await Re.me();d(Z);const ie=Z.addresses||[];g(ie);const U=ie.find(Ut=>Ut.fullName===N.fullName&&Ut.phone===N.phone&&Ut.addressLine1===N.addressLine1),G=ie[ie.length-1],Fe=U||G;Fe!=null&&Fe._id&&h(String(Fe._id)),b(!1),P({...qi,fullName:Z.name||"",phone:Z.phone||""}),he("Delivery address saved successfully.")}catch(J){ae(J.message)}finally{ye(!1)}},O=async()=>{var B,J;if(D(),!A.trim())return ae("Please enter a coupon code.");if(!o.length)return ae("Your cart is empty.");me(!0);try{const Z=await Re.validateCoupon({code:A.trim().toUpperCase(),subtotal:ge,items:o.map(G=>({product:G.product._id||G.product.id,productId:G.product._id||G.product.id,quantity:G.quantity,unitPrice:Nn(G.product)}))}),ie=Z.coupon||((B=Z.data)==null?void 0:B.coupon)||Z,U=Number(Z.discount??((J=Z.data)==null?void 0:J.discount)??ie.discountAmount??0);if(U<=0)throw new Error(Z.message||"This coupon did not return a valid discount.");q(ie),fe(Math.min(ge,U)),$(A.trim().toUpperCase()),he(`Coupon ${A.toUpperCase()} applied successfully.`)}catch(Z){q(null),fe(0),ae(Z.message)}finally{me(!1)}},ce=()=>{q(null),fe(0),$(""),he("Coupon removed."),ae("")},pe=async B=>{if(B.preventDefault(),D(),!o.length)return ae("Your cart is empty.");if(o.find(ie=>{var G,Fe;return!(((G=ie.product)==null?void 0:G._id)||((Fe=ie.product)==null?void 0:Fe.id))}))return ae("Product ID missing. Please remove this item and add it again from the shop.");const Z=m.find(ie=>String(ie._id)===y);if(!Z&&E)return ae("Please save your new address before placing your order.");if(!Z)return ae("Please select a delivery address.");Le(!0);try{const ie={items:o.map(Fe=>{const Ut=String(Fe.product._id||Fe.product.id);return{product:Ut,productId:Ut,quantity:Number(Fe.quantity),...Fe.variant?{variant:Fe.variant}:{}}}),shippingAddress:{fullName:Z.fullName,phone:Z.phone,addressLine1:Z.addressLine1,addressLine2:Z.addressLine2,landmark:Z.landmark,city:Z.city,state:Z.state,postalCode:Z.postalCode,country:Z.country},billingAddress:null,couponCode:(W==null?void 0:W.code)||A.trim().toUpperCase()||void 0,paymentMethod:M,customerNote:I},U=await Re.createOrder(ie),G=U.order||U;if(!(G!=null&&G._id)&&!(G!=null&&G.id))throw new Error("Order was submitted but the order ID was not returned.");c(),p(`/orders/${G._id||G.id}`,{state:{placed:!0}})}catch(ie){ae(ie.message||"Unable to place your order.")}finally{Le(!1)}};return o.length?n.createElement(n.Fragment,null,n.createElement(rt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-header"},n.createElement(te,{to:"/cart",className:"hv-checkout-back"},n.createElement(Cn,{size:16}),"Back to bag"),n.createElement("div",{className:"hv-checkout-title"},n.createElement("span",{className:"hv-checkout-eyebrow"},"ALMOST YOURS"),n.createElement("h1",null,"Checkout, ",n.createElement("em",null,"with care.")),n.createElement("p",null,"A few final details before your HOVIRA favourites arrive.")),n.createElement("div",{className:"hv-checkout-secure"},n.createElement(Jt,{size:17}),"Secure checkout")),xe&&n.createElement("div",{className:"hv-checkout-alert error"},n.createElement(_t,null,xe)),Ne&&n.createElement("div",{className:"hv-checkout-alert success"},n.createElement(Xt,{size:17}),Ne),n.createElement("form",{className:"hv-checkout-layout",onSubmit:pe},n.createElement("div",{className:"hv-checkout-main"},n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"01"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"FIRST THINGS FIRST"),n.createElement("h2",null,"Delivery address"),n.createElement("p",null,"Where should we send your order?")),!E&&n.createElement("button",{type:"button",className:"hv-checkout-add-link",onClick:()=>{D(),P({...qi,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),b(!0)}},n.createElement(Er,{size:16}),"Add address")),m.length>0&&!E&&n.createElement("div",{className:"hv-checkout-address-grid"},m.map(B=>n.createElement("label",{key:B._id,className:`hv-checkout-address-card ${y===String(B._id)?"selected":""}`},n.createElement("input",{type:"radio",name:"shippingAddress",value:B._id,checked:y===String(B._id),onChange:()=>h(String(B._id))}),n.createElement("div",{className:"hv-checkout-address-top"},n.createElement("div",{className:"hv-checkout-address-label"},n.createElement(Al,{size:16}),B.label||"Address"),B.isDefault&&n.createElement("span",{className:"hv-checkout-default"},"Default"),y===String(B._id)&&n.createElement(Xt,{size:19,className:"hv-checkout-selected-icon"})),n.createElement("strong",null,B.fullName),n.createElement("p",null,B.addressLine1,B.addressLine2&&`, ${B.addressLine2}`,B.landmark&&`, ${B.landmark}`),n.createElement("p",null,B.city,", ",B.state," ",B.postalCode),n.createElement("span",{className:"hv-checkout-phone"},B.phone)))),(!m.length||E)&&n.createElement("div",{className:"hv-checkout-address-form"},n.createElement("div",{className:"hv-checkout-form-heading"},n.createElement("div",null,n.createElement("h3",null,m.length?"Add another address":"Your delivery details"),n.createElement("p",null,"Enter the address where you'd like to receive your order.")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-close",onClick:()=>b(!1),"aria-label":"Close address form"},n.createElement(ft,{size:18}))),n.createElement("div",{className:"hv-checkout-form-grid"},n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:N.label,onChange:R,placeholder:"Home / Work"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:N.fullName,onChange:R,placeholder:"Recipient name"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",type:"tel",required:!0,value:N.phone,onChange:R,placeholder:"Phone number"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:N.postalCode,onChange:R,placeholder:"PIN code"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:N.addressLine1,onChange:R,placeholder:"House no., building, street"})),n.createElement("label",{className:"hv-checkout-field full"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:N.addressLine2,onChange:R,placeholder:"Apartment, suite, unit"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:N.landmark,onChange:R,placeholder:"Nearby landmark"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:N.city,onChange:R,placeholder:"City"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:N.state,onChange:R,placeholder:"State"})),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:N.country,onChange:R,placeholder:"Country"}))),n.createElement("label",{className:"hv-checkout-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:N.isDefault,onChange:R}),n.createElement("span",null,"Set as default delivery address")),n.createElement("div",{className:"hv-checkout-address-actions"},n.createElement("button",{type:"button",className:"hv-checkout-primary-button",disabled:V,onClick:k},V?n.createElement(Vn,{label:"Saving..."}):n.createElement(n.Fragment,null,n.createElement(Er,{size:16}),"Save address")),m.length>0&&n.createElement("button",{type:"button",className:"hv-checkout-secondary-button",onClick:()=>b(!1)},"Cancel")))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"02"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"YOUR PREFERRED WAY"),n.createElement("h2",null,"Payment method"),n.createElement("p",null,"Choose how you'd like to pay."))),n.createElement("div",{className:"hv-checkout-payment-grid"},Rg.map(B=>{const J=B.icon;return n.createElement("label",{key:B.value,className:`hv-checkout-payment-card ${M===B.value?"selected":""}`},n.createElement("input",{type:"radio",name:"payment",value:B.value,checked:M===B.value,onChange:()=>j(B.value)}),n.createElement("div",{className:"hv-checkout-payment-icon"},n.createElement(J,{size:21})),n.createElement("div",{className:"hv-checkout-payment-info"},n.createElement("strong",null,B.label),n.createElement("span",null,B.description)),M===B.value&&n.createElement(Xt,{size:19,className:"hv-checkout-selected-icon"}))})),M!=="cod"&&n.createElement("div",{className:"hv-checkout-payment-warning"},n.createElement(Jt,{size:18}),n.createElement("p",null,"Online payment gateway is not connected to the current API flow. Selecting this option only submits the selected payment method with the order. Do not enable live online payments until gateway initiation and server-side payment verification are implemented."))),n.createElement("section",{className:"hv-checkout-section"},n.createElement("div",{className:"hv-checkout-section-heading"},n.createElement("div",{className:"hv-checkout-step"},"03"),n.createElement("div",null,n.createElement("span",{className:"hv-checkout-step-label"},"A LITTLE EXTRA"),n.createElement("h2",null,"Order notes"),n.createElement("p",null,"Anything we should know about your order?"))),n.createElement("label",{className:"hv-checkout-field"},n.createElement("span",null,"Delivery instructions (optional)"),n.createElement("textarea",{rows:"4",maxLength:"500",value:I,onChange:B=>T(B.target.value),placeholder:"Share any special delivery instructions or a note for our team..."})),n.createElement("div",{className:"hv-checkout-character-count"},I.length,"/500"))),n.createElement("aside",{className:"hv-checkout-summary"},n.createElement("div",{className:"hv-checkout-summary-heading"},n.createElement("div",null,n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA EDIT"),n.createElement("h2",null,"Order summary")),n.createElement(Mt,{size:23})),n.createElement("div",{className:"hv-checkout-products"},o.map(B=>{const J=B.product,Z=_l(J);return n.createElement("div",{className:"hv-checkout-product",key:B.key},n.createElement("div",{className:"hv-checkout-product-image"},Z?n.createElement("img",{src:Z,alt:J.name}):n.createElement("span",null,"H"),n.createElement("i",null,B.quantity)),n.createElement("div",{className:"hv-checkout-product-info"},n.createElement("strong",null,J.name),B.variant&&n.createElement("small",null,"Option: ",B.variant),n.createElement("small",null,je(Nn(J))," each")),n.createElement("strong",{className:"hv-checkout-product-total"},je(Nn(J)*B.quantity)))})),n.createElement("div",{className:"hv-checkout-coupon"},n.createElement("div",{className:"hv-checkout-coupon-heading"},n.createElement(wg,{size:17}),n.createElement("strong",null,"Have a promo code?")),W?n.createElement("div",{className:"hv-checkout-applied-coupon"},n.createElement("div",null,n.createElement(Xt,{size:17}),n.createElement("span",null,n.createElement("strong",null,W.code||A),n.createElement("small",null,"Discount applied successfully"))),n.createElement("button",{type:"button",onClick:ce,"aria-label":"Remove coupon"},n.createElement(ft,{size:17}))):n.createElement("div",{className:"hv-checkout-coupon-input"},n.createElement("input",{value:A,onChange:B=>{$(B.target.value.toUpperCase())},placeholder:"Enter coupon code"}),n.createElement("button",{type:"button",onClick:O,disabled:re},re?"Checking...":"Apply"))),n.createElement("div",{className:"hv-checkout-calculations"},n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("strong",null,je(ge))),se>0&&n.createElement("div",{className:"hv-checkout-summary-line discount"},n.createElement("span",null,"Discount"),n.createElement("strong",null,"-",je(se))),n.createElement("div",{className:"hv-checkout-summary-line"},n.createElement("span",null,"Shipping"),n.createElement("span",{className:"hv-checkout-shipping"},"Calculated by store")),n.createElement("div",{className:"hv-checkout-summary-divider"}),n.createElement("div",{className:"hv-checkout-total"},n.createElement("span",null,"Estimated total"),n.createElement("strong",null,je(Y))),n.createElement("p",{className:"hv-checkout-total-note"},"Final shipping, tax and coupon amounts are confirmed by the server.")),n.createElement("button",{type:"submit",className:"hv-checkout-place-order",disabled:Ae||V||re||!y&&m.length>0&&!E||E},Ae?"Placing your order...":n.createElement(n.Fragment,null,"Place order",n.createElement(we,{size:18}))),n.createElement("div",{className:"hv-checkout-secure-note"},n.createElement(Rl,{size:15}),"Your order details are securely submitted."),n.createElement("div",{className:"hv-checkout-benefits"},n.createElement("div",null,n.createElement(Bl,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Thoughtful delivery"),n.createElement("small",null,"Shipping details at checkout"))),n.createElement("div",null,n.createElement(cs,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Carefully packed"),n.createElement("small",null,"Prepared with attention and care"))),n.createElement("div",null,n.createElement(Jt,{size:19}),n.createElement("span",null,n.createElement("strong",null,"Secure experience"),n.createElement("small",null,"Your details stay protected")))))),n.createElement("div",{className:"hv-checkout-footer-note"},n.createElement(te,{to:"/cart"},n.createElement(Cn,{size:14}),"Return to your bag"),n.createElement("span",null,"HOVIRA · Thoughtful care, everyday.")))),n.createElement("style",null,`
    
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

    `)):n.createElement(n.Fragment,null,n.createElement(rt,{title:"Checkout | HOVIRA"}),n.createElement("main",{className:"hv-checkout-page"},n.createElement("div",{className:"hv-checkout-container"},n.createElement("div",{className:"hv-checkout-empty"},n.createElement("div",{className:"hv-checkout-empty-icon"},n.createElement(Mt,{size:32})),n.createElement("span",{className:"hv-checkout-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h2",null,"Your bag is empty."),n.createElement("p",null,"Add something lovely to your bag before continuing to checkout."),n.createElement(te,{to:"/shop",className:"hv-checkout-primary-button"},"Shop the collection",n.createElement(we,{size:17}))))))}const ua={label:"Home",fullName:"",phone:"",addressLine1:"",addressLine2:"",landmark:"",city:"",state:"",postalCode:"",country:"India",isDefault:!1};function Fg(){var Y;const o=tn(),{customer:s,setCustomer:c,logout:d}=jt(),[p,m]=w.useState("profile"),[g,y]=w.useState({name:"",email:"",phone:"",marketingOptIn:!1}),[h,E]=w.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[b,N]=w.useState(ua),[P,M]=w.useState(null),[j,I]=w.useState(!1),[T,A]=w.useState(""),[$,W]=w.useState(""),[q,se]=w.useState(!1),[fe,xe]=w.useState(!0);w.useEffect(()=>{let D=!0;return Re.me().then(R=>{D&&(c(R),y({name:R.name||"",email:R.email||"",phone:R.phone||"",marketingOptIn:!!R.marketingOptIn}))}).catch(R=>{D&&A(R.message)}).finally(()=>{D&&xe(!1)}),()=>{D=!1}},[c]);const ae=()=>{A(""),W("")},Ne=D=>{const{name:R,value:k,type:O,checked:ce}=D.target;y(pe=>({...pe,[R]:O==="checkbox"?ce:k}))},he=D=>{const{name:R,value:k,type:O,checked:ce}=D.target;N(pe=>({...pe,[R]:O==="checkbox"?ce:k}))},Ae=async D=>{D.preventDefault(),se(!0),ae();try{const R=await Re.updateMe(g);c(R),W("Your profile has been updated.")}catch(R){A(R.message)}finally{se(!1)}},Le=async D=>{if(D.preventDefault(),ae(),h.newPassword.length<8)return A("New password must be at least 8 characters.");if(h.newPassword!==h.confirmPassword)return A("New passwords do not match.");se(!0);try{await Re.changePassword({currentPassword:h.currentPassword,newPassword:h.newPassword}),E({currentPassword:"",newPassword:"",confirmPassword:""}),W("Password updated successfully.")}catch(R){A(R.message)}finally{se(!1)}},V=D=>{ae(),M((D==null?void 0:D._id)||null),N(D?{...ua,...D}:{...ua,fullName:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||""}),I(!0)},ye=async D=>{D.preventDefault(),se(!0),ae();try{P?await Re.updateAddress(P,b):await Re.addAddress(b);const R=await Re.me();c(R),I(!1),M(null),N(ua),W("Address saved successfully.")}catch(R){A(R.message)}finally{se(!1)}},re=async D=>{if(window.confirm("Delete this saved address?")){ae();try{await Re.deleteAddress(D);const R=await Re.me();c(R),W("Address deleted successfully.")}catch(R){A(R.message)}}},me=()=>{I(!1),M(null),N(ua)},ge=()=>{d(),o("/",{replace:!0})};return fe?n.createElement("div",{className:"page-shell"},n.createElement(Vn,{label:"Loading your account..."})):n.createElement(n.Fragment,null,n.createElement(rt,{title:"My Account | HOVIRA"}),n.createElement("main",{className:"account-page"},n.createElement("div",{className:"account-container"},n.createElement("div",{className:"account-page-heading"},n.createElement("div",null,n.createElement("span",{className:"account-eyebrow"},"YOUR HOVIRA SPACE"),n.createElement("h1",null,"Hello,"," ",n.createElement("em",null,((Y=s==null?void 0:s.name)==null?void 0:Y.split(" ")[0])||"there",".")),n.createElement("p",null,"Manage your personal details, addresses and account preferences.")),n.createElement("div",{className:"account-heading-icon"},n.createElement(pa,{size:28}))),T&&n.createElement("div",{className:"account-alert error"},n.createElement(_t,null,T)),$&&n.createElement("div",{className:"account-alert success"},n.createElement(Xt,{size:17}),$),n.createElement("div",{className:"account-layout"},n.createElement("aside",{className:"account-sidebar"},n.createElement("div",{className:"account-user-card"},n.createElement("div",{className:"account-avatar"},((s==null?void 0:s.name)||"H").slice(0,1).toUpperCase()),n.createElement("div",{className:"account-user-info"},n.createElement("h3",null,(s==null?void 0:s.name)||"HOVIRA User"),n.createElement("p",null,s==null?void 0:s.email)),n.createElement("div",{className:"account-member-badge"},n.createElement(Jt,{size:14}),"My Account")),n.createElement("div",{className:"account-menu-label"},"ACCOUNT SETTINGS"),n.createElement("button",{className:p==="profile"?"account-menu-item active":"account-menu-item",onClick:()=>{m("profile"),ae()}},n.createElement(pa,{size:19}),n.createElement("span",null,"Personal details"),n.createElement(Pl,{size:16})),n.createElement("button",{className:p==="addresses"?"account-menu-item active":"account-menu-item",onClick:()=>{m("addresses"),ae(),me()}},n.createElement(Al,{size:19}),n.createElement("span",null,"Address book"),n.createElement(Pl,{size:16})),n.createElement(te,{to:"/orders",className:"account-menu-item"},n.createElement(Dl,{size:19}),n.createElement("span",null,"My orders"),n.createElement(we,{size:16})),n.createElement("div",{className:"account-sidebar-divider"}),n.createElement("button",{className:"account-menu-item account-logout",onClick:ge},n.createElement(fg,{size:19}),n.createElement("span",null,"Sign out")),n.createElement("div",{className:"account-sidebar-bottom"},n.createElement(Jt,{size:17}),n.createElement("span",null,"Your information is kept secure."))),n.createElement("section",{className:"account-content"},p==="profile"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"PROFILE SETTINGS"),n.createElement("h2",null,"Personal details"),n.createElement("p",null,"Keep your contact information up to date.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(pa,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Ae},n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name"),n.createElement("input",{name:"name",required:!0,maxLength:"100",value:g.name,onChange:Ne,placeholder:"Enter your full name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Email address"),n.createElement("div",{className:"account-input-icon"},n.createElement(ss,{size:17}),n.createElement("input",{name:"email",type:"email",required:!0,value:g.email,onChange:Ne,placeholder:"Enter email address"}))),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number"),n.createElement("div",{className:"account-input-icon"},n.createElement(yg,{size:17}),n.createElement("input",{name:"phone",type:"tel",value:g.phone,onChange:Ne,placeholder:"Enter phone number"})))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"marketingOptIn",checked:g.marketingOptIn,onChange:Ne}),n.createElement("span",null,"Receive occasional HOVIRA updates, offers and product news.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:q},n.createElement(Rd,{size:17}),q?"Saving...":"Save changes"))),n.createElement("div",{className:"account-section-divider"}),n.createElement("div",{className:"account-panel-heading password-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ACCOUNT SECURITY"),n.createElement("h2",null,"Change password"),n.createElement("p",null,"Choose a strong password you don't use elsewhere.")),n.createElement("div",{className:"account-panel-icon"},n.createElement(Rl,{size:22}))),n.createElement("form",{className:"account-form",onSubmit:Le},n.createElement("div",{className:"account-form-grid password-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Current password"),n.createElement("input",{type:"password",required:!0,autoComplete:"current-password",value:h.currentPassword,onChange:D=>E({...h,currentPassword:D.target.value}),placeholder:"Enter current password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"New password"),n.createElement("input",{type:"password",required:!0,minLength:"8",autoComplete:"new-password",value:h.newPassword,onChange:D=>E({...h,newPassword:D.target.value}),placeholder:"Enter new password"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Confirm new password"),n.createElement("input",{type:"password",required:!0,autoComplete:"new-password",value:h.confirmPassword,onChange:D=>E({...h,confirmPassword:D.target.value}),placeholder:"Confirm new password"}))),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-outline-button",disabled:q},n.createElement(Rl,{size:16}),q?"Updating...":"Update password")))),p==="addresses"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"account-panel-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"DELIVERY INFORMATION"),n.createElement("h2",null,"Address book"),n.createElement("p",null,"Manage your saved delivery addresses.")),!j&&n.createElement("button",{className:"account-primary-button add-address-button",onClick:()=>V(null)},n.createElement(Er,{size:17}),"Add address")),j&&n.createElement("form",{className:"account-address-form",onSubmit:ye},n.createElement("div",{className:"account-address-form-heading"},n.createElement("div",null,n.createElement("span",{className:"account-panel-eyebrow"},"ADDRESS DETAILS"),n.createElement("h3",null,P?"Edit address":"Add a new address")),n.createElement("button",{type:"button",onClick:me,className:"account-close-button"},n.createElement(ft,{size:19}))),n.createElement("div",{className:"account-form-grid"},n.createElement("label",{className:"account-field"},n.createElement("span",null,"Address label"),n.createElement("input",{name:"label",value:b.label,onChange:he,placeholder:"Home / Office"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Full name *"),n.createElement("input",{name:"fullName",required:!0,value:b.fullName,onChange:he,placeholder:"Recipient name"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Phone number *"),n.createElement("input",{name:"phone",required:!0,type:"tel",value:b.phone,onChange:he,placeholder:"Phone number"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Postal code *"),n.createElement("input",{name:"postalCode",required:!0,value:b.postalCode,onChange:he,placeholder:"PIN code"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 1 *"),n.createElement("input",{name:"addressLine1",required:!0,value:b.addressLine1,onChange:he,placeholder:"House number, street, area"})),n.createElement("label",{className:"account-field full-width"},n.createElement("span",null,"Address line 2"),n.createElement("input",{name:"addressLine2",value:b.addressLine2,onChange:he,placeholder:"Apartment, suite, etc."})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Landmark"),n.createElement("input",{name:"landmark",value:b.landmark,onChange:he,placeholder:"Nearby landmark"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"City *"),n.createElement("input",{name:"city",required:!0,value:b.city,onChange:he,placeholder:"City"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"State *"),n.createElement("input",{name:"state",required:!0,value:b.state,onChange:he,placeholder:"State"})),n.createElement("label",{className:"account-field"},n.createElement("span",null,"Country *"),n.createElement("input",{name:"country",required:!0,value:b.country,onChange:he,placeholder:"Country"}))),n.createElement("label",{className:"account-checkbox"},n.createElement("input",{type:"checkbox",name:"isDefault",checked:b.isDefault,onChange:he}),n.createElement("span",null,"Set this as my default delivery address.")),n.createElement("div",{className:"account-form-actions"},n.createElement("button",{className:"account-primary-button",disabled:q},n.createElement(Rd,{size:16}),q?"Saving...":"Save address"),n.createElement("button",{type:"button",className:"account-outline-button",onClick:me},"Cancel"))),((s==null?void 0:s.addresses)||[]).length>0?n.createElement("div",{className:"account-address-grid"},s.addresses.map(D=>n.createElement("div",{className:"account-address-card",key:D._id},n.createElement("div",{className:"account-address-card-top"},n.createElement("div",{className:"account-address-type"},n.createElement(Al,{size:16}),D.label||"Address"),D.isDefault&&n.createElement("span",{className:"account-default-badge"},n.createElement(Xt,{size:13}),"Default")),n.createElement("h3",null,D.fullName),n.createElement("p",null,D.addressLine1,D.addressLine2&&`, ${D.addressLine2}`,D.landmark&&`, ${D.landmark}`,n.createElement("br",null),D.city,", ",D.state," ",D.postalCode,n.createElement("br",null),D.country,n.createElement("br",null),D.phone),n.createElement("div",{className:"account-address-actions"},n.createElement("button",{onClick:()=>V(D)},n.createElement(vg,{size:14}),"Edit"),n.createElement("button",{className:"delete-address",onClick:()=>re(D._id)},n.createElement(pp,{size:14}),"Delete"))))):!j&&n.createElement("div",{className:"account-empty-address"},n.createElement("div",null,n.createElement(Al,{size:28})),n.createElement("h3",null,"No saved addresses yet"),n.createElement("p",null,"Add your delivery address to make checkout quicker and easier."),n.createElement("button",{className:"account-primary-button",onClick:()=>V(null)},n.createElement(Er,{size:17}),"Add your first address"))))))),n.createElement("style",null,`
          
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

          
          `))}function Ig(){const[o,s]=w.useState([]),[c,d]=w.useState(!0),[p,m]=w.useState("");return w.useEffect(()=>{Re.orders().then(s).catch(g=>m(g.message)).finally(()=>d(!1))},[]),n.createElement(n.Fragment,null,n.createElement(rt,{title:"My orders"}),n.createElement("section",{className:"page-shell standard-page"},n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"YOUR PURCHASES"),n.createElement("h1",null,"Order ",n.createElement("em",null,"history.")),n.createElement("p",null,"Every little thing you've ordered, all in one place.")),p&&n.createElement(_t,null,p),c?n.createElement(Vn,null):o.length?n.createElement("div",{className:"orders-list"},o.map(g=>n.createElement(te,{to:`/orders/${g._id||g.id}`,className:"order-row",key:g._id||g.id},n.createElement("div",{className:"order-icon"},n.createElement(Dl,null)),n.createElement("div",{className:"order-main"},n.createElement("b",null,"Order ",g.orderNumber||g._id||g.id),n.createElement("small",null,new Date(g.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})," · ",(g.items||[]).length," item(s)")),n.createElement("div",{className:"order-status"},n.createElement("span",{className:`status-pill ${g.status}`},g.status||"pending"),n.createElement("small",null,g.paymentStatus||"payment pending")),n.createElement("strong",null,je(g.total)),n.createElement(we,{size:17})))):n.createElement("div",{className:"empty-state"},n.createElement("div",{className:"empty-icon"},n.createElement(Dl,null)),n.createElement("h2",null,"Your order story starts here."),n.createElement("p",null,"Once you place an order, you'll be able to track it here."),n.createElement(te,{className:"btn btn-dark",to:"/shop"},"Explore the collection ",n.createElement(we,{size:17})))))}function Lg(){var h,E,b,N,P,M,j,I,T;const{id:o}=Wd(),s=en(),[c,d]=w.useState(null),[p,m]=w.useState(!0),[g,y]=w.useState("");return w.useEffect(()=>{Re.order(o).then(d).catch(A=>y(A.message)).finally(()=>m(!1))},[o]),p?n.createElement("div",{className:"page-shell"},n.createElement(Vn,{label:"Loading order details…"})):g||!c?n.createElement("div",{className:"page-shell"},n.createElement(_t,null,g||"Order not found."),n.createElement(te,{to:"/orders",className:"text-link"},n.createElement(Cn,{size:15})," Back to orders")):n.createElement(n.Fragment,null,n.createElement(rt,{title:`Order ${c.orderNumber||o}`}),n.createElement("section",{className:"page-shell standard-page"},n.createElement(te,{to:"/orders",className:"text-link"},n.createElement(Cn,{size:15})," All orders"),((h=s.state)==null?void 0:h.placed)&&n.createElement(_t,{type:"success"},n.createElement(Xt,{size:17})," Your order has been placed. Thank you for choosing HOVIRA."),n.createElement("div",{className:"page-title"},n.createElement("span",{className:"eyebrow"},"ORDER DETAILS"),n.createElement("h1",null,"Thank you for ",n.createElement("em",null,"your order.")),n.createElement("p",null,"Order number: ",n.createElement("b",null,c.orderNumber||c._id))),n.createElement("div",{className:"order-detail-layout"},n.createElement("div",{className:"order-detail-card"},n.createElement("div",{className:"order-detail-heading"},n.createElement("h2",null,"Items ordered"),n.createElement("span",{className:`status-pill ${c.status}`},c.status)),(c.items||[]).map((A,$)=>n.createElement("div",{className:"order-product-row",key:A.product||$},n.createElement("div",{className:"order-product-image"},A.image?n.createElement("img",{src:A.image,alt:A.name}):n.createElement("span",null,"H")),n.createElement("div",null,n.createElement("b",null,A.name),n.createElement("small",null,"Qty: ",A.quantity,A.variant?` · ${A.variant}`:"")),n.createElement("strong",null,je(A.lineTotal??A.unitPrice*A.quantity)))),n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Subtotal"),n.createElement("b",null,je(c.subtotal))),c.discount>0&&n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Discount"),n.createElement("b",null,"−",je(c.discount))),n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Shipping"),n.createElement("b",null,je(c.shippingFee))),n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Tax"),n.createElement("b",null,je(c.tax))),n.createElement("div",{className:"summary-total"},n.createElement("span",null,"Total"),n.createElement("b",null,je(c.total)))),n.createElement("aside",{className:"order-detail-card"},n.createElement("h2",null,"Delivery & payment"),n.createElement("div",{className:"address-type"},n.createElement(Dl,{size:15})," Delivery address"),n.createElement("p",null,(E=c.shippingAddress)==null?void 0:E.fullName,n.createElement("br",null),(b=c.shippingAddress)==null?void 0:b.addressLine1,n.createElement("br",null),((N=c.shippingAddress)==null?void 0:N.addressLine2)&&`${c.shippingAddress.addressLine2}, `,(P=c.shippingAddress)==null?void 0:P.city,", ",(M=c.shippingAddress)==null?void 0:M.state," ",(j=c.shippingAddress)==null?void 0:j.postalCode,n.createElement("br",null),(I=c.shippingAddress)==null?void 0:I.country,n.createElement("br",null),(T=c.shippingAddress)==null?void 0:T.phone),n.createElement("hr",{className:"soft-divider"}),n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Payment method"),n.createElement("b",null,c.paymentMethod)),n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Payment status"),n.createElement("span",{className:`status-pill ${c.paymentStatus}`},c.paymentStatus)),c.trackingNumber&&n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Tracking"),n.createElement("b",null,c.trackingNumber)),c.carrier&&n.createElement("div",{className:"summary-line"},n.createElement("span",null,"Carrier"),n.createElement("b",null,c.carrier)))),n.createElement(te,{className:"btn btn-outline order-back-shop",to:"/shop"},"Continue shopping")))}function Mg(){return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Our story",description:"Learn about the HOVIRA approach to thoughtful, everyday skincare."}),n.createElement("section",{className:"about-hero page-shell"},n.createElement("div",null,n.createElement("span",{className:"eyebrow"},"A NOTE FROM US"),n.createElement("h1",null,"Care should feel",n.createElement("br",null),n.createElement("em",null,"like you.")),n.createElement("p",null,"We believe looking after your skin can be one of the gentlest ways to look after yourself. No pressure to be perfect. No complicated rituals. Just considered care, one day at a time."),n.createElement(te,{to:"/shop",className:"btn btn-dark"},"Explore our collection ",n.createElement(we,{size:17}))),n.createElement("div",{className:"about-art"},n.createElement("div",{className:"about-sun"}),n.createElement("div",{className:"about-arch"},n.createElement("span",null,"HOVIRA"),n.createElement("small",null,"MADE FOR YOUR EVERYDAY")),n.createElement("div",{className:"about-flower"},"✳"))),n.createElement("section",{className:"about-values"},n.createElement("div",null,n.createElement(yr,null),n.createElement("span",{className:"eyebrow"},"01 — THOUGHTFUL"),n.createElement("h2",null,"Less noise.",n.createElement("br",null),n.createElement("em",null,"More intention.")),n.createElement("p",null,"We celebrate routines that feel manageable and products that have a clear place in your day.")),n.createElement("div",null,n.createElement(bt,null),n.createElement("span",{className:"eyebrow"},"02 — PERSONAL"),n.createElement("h2",null,"Your skin.",n.createElement("br",null),n.createElement("em",null,"Your story.")),n.createElement("p",null,"There is no one-size-fits-all version of care. We encourage you to listen to your skin and find what works for you.")),n.createElement("div",null,n.createElement(dp,null),n.createElement("span",{className:"eyebrow"},"03 — EVERYDAY"),n.createElement("h2",null,"Small rituals.",n.createElement("br",null),n.createElement("em",null,"Real moments.")),n.createElement("p",null,"Care can be as simple as pausing, taking a breath, and making a little space for yourself."))),n.createElement("section",{className:"about-cta"},n.createElement("span",{className:"eyebrow"},"YOUR NEXT CHAPTER"),n.createElement("h2",null,"Make a little room for ",n.createElement("em",null,"you.")),n.createElement(te,{className:"btn btn-dark",to:"/shop"},"Find your everyday essentials ",n.createElement(we,{size:17}))))}function Id({type:o}){const s=o==="privacy";return n.createElement(n.Fragment,null,n.createElement(rt,{title:s?"Privacy policy":"Terms & conditions"}),n.createElement("section",{className:"page-shell legal-page"},n.createElement("span",{className:"eyebrow"},"THE IMPORTANT DETAILS"),n.createElement("h1",null,s?"Privacy, handled with":"Terms for your"," ",n.createElement("em",null,s?"care.":"peace of mind.")),n.createElement("p",{className:"legal-updated"},"Last updated: October 2026"),s?n.createElement(n.Fragment,null,n.createElement("p",null,"At HOVIRA, we respect your privacy. This page explains the types of information a storefront may collect and how it should be handled. Update this policy to reflect your actual business practices before launch."),n.createElement("h2",null,"Information we collect"),n.createElement("p",null,"When you create an account or place an order, we may process your name, email address, phone number, delivery addresses, order details and preferences. Payment credentials should be handled by your payment provider and should not be stored directly by this storefront."),n.createElement("h2",null,"How information is used"),n.createElement("p",null,"Information may be used to provide account access, process orders, communicate about deliveries, support customers, prevent fraud and improve the shopping experience. Marketing messages should only be sent in accordance with your preferences and applicable law."),n.createElement("h2",null,"Cookies and local storage"),n.createElement("p",null,"This frontend stores cart and wishlist selections in your browser's local storage. Authentication tokens and customer information may also be stored locally for account continuity. Protect your device and sign out on shared devices."),n.createElement("h2",null,"Sharing and security"),n.createElement("p",null,"Information may be shared with service providers needed to operate the store, such as hosting, delivery and payment partners. Use appropriate technical and organizational safeguards and limit access to authorized people."),n.createElement("h2",null,"Your choices"),n.createElement("p",null,"You can edit account details and saved addresses from your account page. For requests about access, correction or deletion of personal information, contact your store support team at hello@hovira.com."),n.createElement("h2",null,"Policy updates"),n.createElement("p",null,"This policy may be updated as the store and applicable requirements change. Replace this template with legal advice tailored to your business, jurisdiction and data practices.")):n.createElement(n.Fragment,null,n.createElement("p",null,"These terms apply to your use of the HOVIRA storefront. By using the site or placing an order, you agree to the terms that are published here. Review and customize this template before launch."),n.createElement("h2",null,"Products and information"),n.createElement("p",null,"We aim to present accurate product descriptions, prices, images, availability and ingredient information. Colours and product appearance may vary by screen. Product information is not a substitute for professional medical advice."),n.createElement("h2",null,"Orders and payment"),n.createElement("p",null,"Submitting an order is a request to purchase the items in your basket. Orders are subject to availability, confirmation and applicable checks. The final payable amount, including shipping and taxes, should be shown before the order is accepted. Payment status must be verified securely on the server."),n.createElement("h2",null,"Shipping and delivery"),n.createElement("p",null,"Delivery estimates are indicative unless explicitly guaranteed. Delivery may be affected by location, carrier conditions, weather or other events outside reasonable control. Add your actual shipping and delivery policy here."),n.createElement("h2",null,"Returns and cancellations"),n.createElement("p",null,"Return, refund, exchange and cancellation eligibility depends on the policy applicable to your products and local law. Publish clear time limits, product-condition requirements and contact steps before accepting orders."),n.createElement("h2",null,"Accounts"),n.createElement("p",null,"You are responsible for keeping your account credentials secure and for activity performed through your account. Provide accurate information and contact support if you suspect unauthorized access."),n.createElement("h2",null,"Acceptable use and intellectual property"),n.createElement("p",null,"Do not misuse the website, attempt unauthorized access, interfere with its operation or reproduce site content without permission. Store branding, content and materials remain subject to applicable intellectual-property rights."),n.createElement("h2",null,"Contact and changes"),n.createElement("p",null,"For questions, contact hello@hovira.com. We may update these terms as the store changes. This template is not legal advice and should be adapted by a qualified professional."))))}function _g(){return n.createElement(n.Fragment,null,n.createElement(rt,{title:"Page not found"}),n.createElement("section",{className:"page-shell empty-state not-found"},n.createElement("span",{className:"eyebrow"},"404 — A LITTLE DETOUR"),n.createElement("h1",null,"This page wandered ",n.createElement("em",null,"off.")),n.createElement("p",null,"Let's get you back to something good."),n.createElement(te,{className:"btn btn-dark",to:"/"},n.createElement(Cn,{size:16})," Back home")))}function Cl({children:o}){const{customer:s,authReady:c}=jt();return c?s?o:n.createElement(sh,{to:"/login",replace:!0}):n.createElement("div",{className:"page-shell"},n.createElement("p",null,"Loading account…"))}function Bg(){return n.createElement(dh,null,n.createElement(We,{element:n.createElement(Sg,null)},n.createElement(We,{index:!0,element:n.createElement(Cg,null)}),n.createElement(We,{path:"shop",element:n.createElement(zg,null)}),n.createElement(We,{path:"product/:slugOrId",element:n.createElement(Ag,null)}),n.createElement(We,{path:"login",element:n.createElement(Tg,null)}),n.createElement(We,{path:"signup",element:n.createElement(Fd,null)}),n.createElement(We,{path:"register",element:n.createElement(Fd,null)}),n.createElement(We,{path:"cart",element:n.createElement(Og,null)}),n.createElement(We,{path:"wishlist",element:n.createElement(Pg,null)}),n.createElement(We,{path:"checkout",element:n.createElement(Cl,null,n.createElement(Dg,null))}),n.createElement(We,{path:"account",element:n.createElement(Cl,null,n.createElement(Fg,null))}),n.createElement(We,{path:"orders",element:n.createElement(Cl,null,n.createElement(Ig,null))}),n.createElement(We,{path:"orders/:id",element:n.createElement(Cl,null,n.createElement(Lg,null))}),n.createElement(We,{path:"about",element:n.createElement(Mg,null)}),n.createElement(We,{path:"privacy",element:n.createElement(Id,{type:"privacy"})}),n.createElement(We,{path:"terms",element:n.createElement(Id,{type:"terms"})}),n.createElement(We,{path:"*",element:n.createElement(_g,null)})))}xf.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(rp,null,n.createElement(Eh,null,n.createElement(eg,null,n.createElement(Bg,null))))));
