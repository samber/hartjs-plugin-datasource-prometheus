/*!
 * chartjs-plugin-datasource-prometheus v1.0.7
 * github.com/samber/chartjs-plugin-datasource-prometheus
 * (c) 2022 chartjs-plugin-datasource-prometheus Contributors
 * Released under the MIT License
 */
/*!
 * chartjs-plugin-datasource-prometheus v1.0.7
 * github.com/samber/chartjs-plugin-datasource-prometheus
 * (c) 2022 chartjs-plugin-datasource-prometheus Contributors
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ChartDatasourcePrometheusPlugin=t()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e={exports:{}};
/*!
	 * prometheus-query v3.2.1
	 * github.com/samber/prometheus-query-js
	 * (c) 2022 prometheus-query-js Contributors
	 * Released under the MIT License
	 */
!function(e,t){!function(e){var t={exports:{}},r=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},n=r,o=Object.prototype.toString;function s(e){return Array.isArray(e)}function a(e){return void 0===e}function i(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var p={isArray:s,isArrayBuffer:i,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&i(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return u(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},d=p;function h(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var m=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(d.isURLSearchParams(t))n=t.toString();else{var o=[];d.forEach(t,(function(e,t){null!=e&&(d.isArray(e)?t+="[]":e=[e],d.forEach(e,(function(e){d.isDate(e)?e=e.toISOString():d.isObject(e)&&(e=JSON.stringify(e)),o.push(h(t)+"="+h(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},g=p;function b(){this.handlers=[]}b.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},b.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},b.prototype.forEach=function(e){g.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var y=b,w=p,v=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},x={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},T=v,E=function(e,t,r,n,o){var s=new Error(e);return T(s,t,r,n,o)},S=E,R=p,O=R.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),R.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),R.isString(n)&&a.push("path="+n),R.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},N=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},P=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},j=p,A=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],C=p,U=C.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=C.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};function q(e){this.message=e}q.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},q.prototype.__CANCEL__=!0;var I=q,D=p,k=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(S("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},M=O,B=m,_=function(e,t){return e&&!N(t)?P(e,t):t},L=function(e){var t,r,n,o={};return e?(j.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=j.trim(e.substr(0,n)).toLowerCase(),r=j.trim(e.substr(n+1)),t){if(o[t]&&A.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},J=U,G=E,$=x,F=I,H=function(e){return new Promise((function(t,r){var n,o=e.data,s=e.headers,a=e.responseType;function i(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}D.isFormData(o)&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+l)}var f=_(e.baseURL,e.url);function p(){if(u){var n="getAllResponseHeaders"in u?L(u.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:e,request:u};k((function(e){t(e),i()}),(function(e){r(e),i()}),o),u=null}}if(u.open(e.method.toUpperCase(),B(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(p)},u.onabort=function(){u&&(r(G("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){r(G("Network Error",e,null,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||$;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(G(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},D.isStandardBrowserEnv()){var d=(e.withCredentials||J(f))&&e.xsrfCookieName?M.read(e.xsrfCookieName):void 0;d&&(s[e.xsrfHeaderName]=d)}"setRequestHeader"in u&&D.forEach(s,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:u.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(n=function(e){u&&(r(!e||e&&e.type?new F("canceled"):e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n))),o||(o=null),u.send(o)}))},Q=p,V=function(e,t){w.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},W=v,z={"Content-Type":"application/x-www-form-urlencoded"};function X(e,t){!Q.isUndefined(e)&&Q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var K,Y={transitional:x,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(K=H),K),transformRequest:[function(e,t){return V(t,"Accept"),V(t,"Content-Type"),Q.isFormData(e)||Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)?e:Q.isArrayBufferView(e)?e.buffer:Q.isURLSearchParams(e)?(X(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Q.isObject(e)||t&&"application/json"===t["Content-Type"]?(X(t,"application/json"),function(e,t,r){if(Q.isString(e))try{return(t||JSON.parse)(e),Q.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Y.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&Q.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw W(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Q.forEach(["delete","get","head"],(function(e){Y.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){Y.headers[e]=Q.merge(z)}));var Z=Y,ee=p,te=Z,re=function(e){return!(!e||!e.__CANCEL__)},ne=p,oe=function(e,t,r){var n=this||te;return ee.forEach(r,(function(r){e=r.call(n,e,t)})),e},se=re,ae=Z,ie=I;function ue(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ie("canceled")}var ce=p,le=function(e,t){t=t||{};var r={};function n(e,t){return ce.isPlainObject(e)&&ce.isPlainObject(t)?ce.merge(e,t):ce.isPlainObject(t)?ce.merge({},t):ce.isArray(t)?t.slice():t}function o(r){return ce.isUndefined(t[r])?ce.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function s(e){if(!ce.isUndefined(t[e]))return n(void 0,t[e])}function a(r){return ce.isUndefined(t[r])?ce.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function i(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:i};return ce.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,n=t(e);ce.isUndefined(n)&&t!==i||(r[e]=n)})),r},fe="0.26.1",pe=fe,de={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){de[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var he={};de.transitional=function(e,t,r){function n(e,t){return"[Axios v"+pe+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,s){if(!1===e)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!he[o]&&(he[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}};var me={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var s=n[o],a=t[s];if(a){var i=e[s],u=void 0===i||a(i,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+s)}},validators:de},ge=p,be=m,ye=y,we=function(e){return ue(e),e.headers=e.headers||{},e.data=oe.call(e,e.data,e.headers,e.transformRequest),e.headers=ne.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ne.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ae.adapter)(e).then((function(t){return ue(e),t.data=oe.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return se(t)||(ue(e),t&&t.response&&(t.response.data=oe.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ve=le,xe=me,Te=xe.validators;function Ee(e){this.defaults=e,this.interceptors={request:new ye,response:new ye}}Ee.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=ve(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&xe.assertOptions(r,{silentJSONParsing:Te.transitional(Te.boolean),forcedJSONParsing:Te.transitional(Te.boolean),clarifyTimeoutError:Te.transitional(Te.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var s,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var i=[we,void 0];for(Array.prototype.unshift.apply(i,n),i=i.concat(a),s=Promise.resolve(t);i.length;)s=s.then(i.shift(),i.shift());return s}for(var u=t;n.length;){var c=n.shift(),l=n.shift();try{u=c(u)}catch(e){l(e);break}}try{s=we(u)}catch(e){return Promise.reject(e)}for(;a.length;)s=s.then(a.shift(),a.shift());return s},Ee.prototype.getUri=function(e){return e=ve(this.defaults,e),be(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ge.forEach(["delete","get","head","options"],(function(e){Ee.prototype[e]=function(t,r){return this.request(ve(r||{},{method:e,url:t,data:(r||{}).data}))}})),ge.forEach(["post","put","patch"],(function(e){Ee.prototype[e]=function(t,r,n){return this.request(ve(n||{},{method:e,url:t,data:r}))}}));var Se=Ee,Re=I;function Oe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new Re(e),t(r.reason))}))}Oe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Oe.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Oe.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Oe.source=function(){var e;return{token:new Oe((function(t){e=t})),cancel:e}};var Ne=Oe,Pe=p,je=p,Ae=r,Ce=Se,Ue=le,qe=function e(t){var r=new Ce(t),n=Ae(Ce.prototype.request,r);return je.extend(n,Ce.prototype,r),je.extend(n,r),n.create=function(r){return e(Ue(t,r))},n}(Z);qe.Axios=Ce,qe.Cancel=I,qe.CancelToken=Ne,qe.isCancel=re,qe.VERSION=fe,qe.all=function(e){return Promise.all(e)},qe.spread=function(e){return function(t){return e.apply(null,t)}},qe.isAxiosError=function(e){return Pe.isObject(e)&&!0===e.isAxiosError},t.exports=qe,t.exports.default=qe;var Ie,De=t.exports;e.ResponseType=void 0,(Ie=e.ResponseType||(e.ResponseType={})).MATRIX="matrix",Ie.VECTOR="vector",Ie.SCALAR="scalar",Ie.STRING="string";class ke{constructor(e,t){if(e&&"string"!=typeof e)throw new Error("Wrong name format. Expected string.");if(t&&"object"!=typeof t)throw new Error("Wrong labels format. Expected object.");this.name=e,this.labels=t}static fromJSON(e){const t=e.__name__,r=Object.assign({},e);return delete r.__name__,new ke(t,r)}toString(){return(this.name?this.name:"")+"{"+Object.keys(this.labels).map((e=>e+'="'+this.labels[e]+'"')).join(", ")+"}"}}class Me{constructor(e,t){if("object"!=typeof e||"Date"!=e.constructor.name)throw new Error("Wrong time format. Expected Date.");if("number"!=typeof t)throw new Error("Wrong value format. Expected float.");this.time=e,this.value=t}static fromJSON(e){const t=new Date(1e3*e[0]),r=parseFloat(e[1]);return new Me(t,r)}toString(){return this.time+": "+this.value}}class Be{constructor(e,t){this.metric=e,this.values=t}static fromJSON(e){const t=e.metric?ke.fromJSON(e.metric):null,r=e.values.map(Me.fromJSON);return new Be(t,r)}}class _e{constructor(e,t){this.metric=e,this.value=t}static fromJSON(e){const t=e.metric?ke.fromJSON(e.metric):null,r=Me.fromJSON(e.value);return new _e(t,r)}}class Le{constructor(e,t){this.resultType=e,this.result=t}static fromJSON(t){const r=t.resultType;let n=null;switch(r){case e.ResponseType.MATRIX:n=t.result.map(Be.fromJSON);break;case e.ResponseType.VECTOR:n=t.result.map(_e.fromJSON);break;case e.ResponseType.SCALAR:case e.ResponseType.STRING:n=t.result;break;default:throw new Error(`Unexpected resultType: ${r}`)}return new Le(r,n)}}class Je{constructor(e,t,r,n,o,s,a,i){if(e&&"object"!=typeof e)throw new Error(`Unexpected format for discoveredLabels. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for labels. Got ${typeof t} instead of object`);if(r&&"string"!=typeof r)throw new Error(`Unexpected format for scrapePool. Got ${typeof r} instead of string`);if(n&&"string"!=typeof n)throw new Error(`Unexpected format for scrapeUrl. Got ${typeof n} instead of string`);if(o&&"string"!=typeof o)throw new Error(`Unexpected format for lastError. Got ${typeof o} instead of string`);if(s&&("object"!=typeof s||"Date"!=s.constructor.name))throw new Error(`Unexpected format for lastScrape. Got ${typeof s} instead of object`);if(a&&"number"!=typeof a)throw new Error(`Unexpected format for lastScrapeDuration. Got ${typeof a} instead of number`);if(i&&"string"!=typeof i)throw new Error(`Unexpected format for health. Got ${typeof i} instead of string`);this.discoveredLabels=e,this.labels=t,this.scrapePool=r,this.scrapeUrl=n,this.lastError=o,this.lastScrape=s,this.lastScrapeDuration=a,this.health=i}static fromJSON(e){return new Je(e.discoveredLabels,e.labels,e.scrapePool,e.scrapeUrl,e.lastError,e.lastScrape?new Date(e.lastScrape):null,e.lastScrapeDuration?parseFloat(e.lastScrapeDuration):null,e.health)}}class Ge{constructor(e,t,r,n,o){if(e&&("object"!=typeof e||"Date"!=e.constructor.name))throw new Error(`Unexpected format for activeAt. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for annotations. Got ${typeof t} instead of object`);if(r&&"object"!=typeof r)throw new Error(`Unexpected format for labels. Got ${typeof r} instead of object`);if(o&&"number"!=typeof o)throw new Error(`Unexpected format for value. Got ${typeof o} instead of number`);this.activeAt=e,this.annotations=t,this.labels=r,this.state=n,this.value=o}static fromJSON(t){return new Ge(t.activeAt?new Date(t.activeAt):null,t.annotations,t.labels,e.ResponseType[t.state],t.value?parseFloat(t.value):null)}}class $e{constructor(e,t,r,n,o,s,a,i){this.alerts=e,this.annotations=t,this.duration=r,this.health=n,this.labels=o,this.name=s,this.query=a,this.type=i}static fromJSON(e){return new $e(e.alerts?e.alerts.map(Ge.fromJSON):[],e.annotations,e.duration,e.health,e.labels,e.name,e.query,e.type)}}class Fe{constructor(e,t,r,n){this.rules=e,this.file=t,this.interval=r,this.name=n}static fromJSON(e){return new Fe(e.rules?e.rules.map($e.fromJSON):[],e.file,e.interval,e.name)}}class He{constructor(){this.baseURL="/api/v1/",this.headers={},this.auth=null,this.proxy=null,this.withCredentials=!1,this.timeout=1e4,this.preferPost=!1,this.warningHook=null}}e.Alert=Ge,e.InstantVector=_e,e.Metric=ke,e.PrometheusConnectionOptions=He,e.PrometheusDriver=class{constructor(e){if(this.listifyIfNeeded=e=>e instanceof Array?e:[e],this.formatPromQlParams=e=>Object.entries(null!=e?e:{}).reduce(((e,[t,r])=>(null!=r&&(r instanceof Array?r.filter((e=>null!=e)).forEach((r=>e.append(`${t}[]`,r))):e.append(t,r)),e)),new URLSearchParams),!(e=e||new He).endpoint)throw"Endpoint is required";e.endpoint=e.endpoint.replace(/\/$/,""),e.baseURL=e.baseURL||"/api/v1/",e.withCredentials=e.withCredentials||!1,e.timeout=e.timeout||1e4,this.options=e,this.axiosInstance=De.create(),this.options.requestInterceptor&&this.axiosInstance.interceptors.request.use(this.options.requestInterceptor.onFulfilled,this.options.requestInterceptor.onRejected),this.options.responseInterceptor&&this.axiosInstance.interceptors.response.use(this.options.responseInterceptor.onFulfilled,this.options.responseInterceptor.onRejected)}request(e,t,r,n){var o,s,a,i,u,c;const l=Object.assign({},this.options.headers||{});return this.axiosInstance.request({baseURL:this.options.endpoint+this.options.baseURL,url:t,method:e,params:this.formatPromQlParams(r),data:this.formatPromQlParams(n),headers:l,auth:(null===(o=this.options.auth)||void 0===o?void 0:o.username)&&(null===(s=this.options.auth)||void 0===s?void 0:s.password)?{username:this.options.auth.username,password:this.options.auth.password}:null,proxy:(null===(a=this.options.proxy)||void 0===a?void 0:a.host)&&(null===(i=this.options.proxy)||void 0===i?void 0:i.port)?{host:null===(u=this.options.proxy)||void 0===u?void 0:u.host,port:null===(c=this.options.proxy)||void 0===c?void 0:c.port}:null,withCredentials:this.options.withCredentials,timeout:this.options.timeout}).then((e=>this.handleResponse(e))).catch((e=>this.handleResponse(e)))}handleResponse(e){const t=e.isAxiosError||!1;if(t&&(e=e.response),!e)throw{status:"error",errorType:"unexpected_error",error:"unexpected http error"};this.options.warningHook&&e.warnings&&e.warnings.length>0&&this.options.warningHook(e.warnings);const r=e.data;if(!r||null==r.status)throw{status:"error",errorType:"client_error",error:"unexpected client error"};if(t)throw e;return r.data}formatTimeToPrometheus(e,t){var r;if(e||(e=t),"number"==typeof e)return e/1e3;if("object"==typeof e&&"Date"==(null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.name))return e.getTime()/1e3;throw new Error("Wrong time format. Expected number or Date.")}instantQuery(e,t,r){const n={query:e,time:this.formatTimeToPrometheus(t,new Date),timeout:r};return(this.options.preferPost?this.request("POST","query",null,n):this.request("GET","query",n)).then((e=>Le.fromJSON(e)))}rangeQuery(e,t,r,n,o){const s={query:e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r),step:n,timeout:o};return(this.options.preferPost?this.request("POST","query_range",null,s):this.request("GET","query_range",s)).then((e=>Le.fromJSON(e)))}series(e,t,r){const n={match:this.listifyIfNeeded(e),start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return(this.options.preferPost?this.request("POST","series",null,n):this.request("GET","series",n)).then((e=>e.map(ke.fromJSON)))}labelNames(e,t,r){const n={match:this.listifyIfNeeded(e),start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.options.preferPost?this.request("POST","labels",null,n):this.request("GET","labels",n)}labelValues(e,t,r,n){const o={match:this.listifyIfNeeded(t),start:this.formatTimeToPrometheus(r),end:this.formatTimeToPrometheus(n)};return this.request("GET",`label/${e}/values`,o)}targets(e){const t={query:e||"any"};return this.request("GET","targets",t).then((e=>({activeTargets:e.activeTargets?e.activeTargets.map(Je.fromJSON):[],droppedTargets:e.droppedTargets?e.droppedTargets.map(Je.fromJSON):[]})))}targetsMetadata(e,t,r){const n={match_target:e,metric:t,limit:r};return this.request("GET","targets/metadata",n)}metadata(e,t){const r={metric:e,limit:t};return this.request("GET","metadata",r)}rules(){return this.request("GET","rules").then((e=>(e.groups?e.groups:[]).map(Fe.fromJSON)))}alerts(){return this.request("GET","alerts").then((e=>(e.alerts?e.alerts:[]).map(Ge.fromJSON)))}alertmanagers(){return this.request("GET","alertmanagers")}status(){return this.request("GET","status/config")}statusFlags(){return this.request("GET","status/flags")}statusRuntimeInfo(){return this.request("GET","status/runtimeinfo")}statusBuildinfo(){return this.request("GET","status/buildinfo")}statusTSDB(){return this.request("GET","status/tsdb")}adminSnapshot(e){const t={skip_head:e};return this.request("POST","admin/tsdb/snapshot",t)}adminDeleteSeries(e,t,r){const n={match:this.listifyIfNeeded(e),start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("POST","admin/tsdb/delete_series",n)}adminCleanTombstones(){return this.request("POST","admin/tsdb/clean_tombstones")}},e.QueryResult=Le,e.RangeVector=Be,e.Rule=$e,e.RuleGroup=Fe,e.SampleValue=Me,e.Target=Je,Object.defineProperty(e,"__esModule",{value:!0})}(t)}(0,e.exports);var t={getPrometheusStepAuto:(e,t,r)=>{const n=(t.getTime()-e.getTime())/1e3,o=25*Math.floor(n/r);return o<1?1:o},getStartAndEndDates(e){if(e.type=e.type?e.type:"absolute","absolute"===e.type)return{type:"absolute",start:e.start,end:e.end};if("relative"===e.type)return{type:"absolute",start:new Date((new Date).getTime()+e.start),end:new Date((new Date).getTime()+e.end)};throw new Error("Unexpected options.timeRange value.")},executeQueries:(t,r,n,o,s)=>{const a=null!=r.find((e=>"string"==typeof e)),i=t&&a?new e.exports.PrometheusDriver(t):null;return r.map((t=>"string"==typeof t?i.rangeQuery(t,n,o,s):t(n,o,s).then((t=>e.exports.QueryResult.fromJSON(t)))))}};class r{constructor(){this.message="No data to display",this.font="16px normal 'Helvetica Nueue'",this.textAlign="center",this.textBaseline="middle",this.direction="ltr"}}class n{constructor(){this.message=null,this.font="16px normal 'Helvetica Nueue'",this.textAlign="center",this.textBaseline="middle",this.direction="ltr"}}class o{constructor(){this.prometheus=null,this.fillGaps=!1,this.tension=.4,this.cubicInterpolationMode="default",this.stepped=!1,this.fill=!1,this.borderWidth=3,this.borderColor=["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],this.backgroundColor=["transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent"],this.noDataMsg=new r,this.errorMsg=new n,this.findInLabelMap=null,this.findInBorderColorMap=null,this.findInBackgroundColorMap=null,this.dataSetHook=null}assertPluginOptions(){if(!this.query)throw new Error("options.query is undefined");if(!this.timeRange)throw new Error("options.timeRange is undefined");if(null==this.timeRange.start)throw new Error("options.timeRange.start is undefined");if(null==this.timeRange.end)throw new Error("options.timeRange.end is undefined");if("object"!=typeof this.timeRange)throw new Error("options.timeRange must be a object");if("string"!=typeof this.timeRange.type)throw new Error("options.timeRange.type must be a string");if("relative"!=this.timeRange.type&&"absolute"!=this.timeRange.type)throw new Error('options.timeRange.type must be either "relative" or "absolute"');if("number"!=typeof this.timeRange.start&&("object"!=typeof this.timeRange.start||"Date"!=this.timeRange.start.constructor.name))throw new Error("options.timeRange.start must be a Date object (absolute) or integer (relative)");if("number"!=typeof this.timeRange.end&&("object"!=typeof this.timeRange.end||"Date"!=this.timeRange.end.constructor.name))throw new Error("options.timeRange.end must be a Date object (absolute) or integer (relative)");if(null!=this.timeRange.msUpdateInterval&&"number"!=typeof this.timeRange.msUpdateInterval)throw new Error("options.timeRange.msUpdateInterval must be a integer");if(null!=this.timeRange.msUpdateInterval&&this.timeRange.msUpdateInterval<1e3)throw new Error("options.timeRange.msUpdateInterval must be greater than 1s.")}getQueries(){var e,t;return"Array"!=(null===(t=null===(e=this.query)||void 0===e?void 0:e.constructor)||void 0===t?void 0:t.name)?[this.query]:this.query}}function s(e){e.config.options.scales=e.config.options.scales?e.config.options.scales:{},e.config.options.scales.xAxes=e.config.options.scales.xAxes&&e.config.options.scales.xAxes.length>0?e.config.options.scales.xAxes:[{}],e.config.options.scales.xAxes[0].time=e.config.options.scales.xAxes[0].time?e.config.options.scales.xAxes[0].time:{},e.config.options.scales.xAxes[0].type="time",e.config.options.scales.xAxes[0].distribution=e.config.options.scales.xAxes[0].distribution||"linear",e.config.options.scales.xAxes[0].time.minUnit=e.config.options.scales.xAxes[0].time.minUnit||"second"}function a(e,t,r){const n=t.metric.toString();return e.findInLabelMap&&e.findInLabelMap(t.metric)||n}function i(e,t,r){const n=e.backgroundColor[r%e.backgroundColor.length];return e.findInBackgroundColorMap&&e.findInBackgroundColorMap(t.metric)||n}function u(e,t,r){const n=e.borderColor[r%e.borderColor.length];return e.findInBorderColorMap&&e.findInBorderColorMap(t.metric)||n}class c{constructor(){this.loading=!1,this.updateInterval=null,this.error=null}}return new class{constructor(){this.id="datasource-prometheus"}beforeInit(e,t){e["datasource-prometheus"]=new c}afterInit(e,t){if("line"!=e.config.type)throw"ChartDatasourcePrometheusPlugin is already compatible with Line chart\nFeel free to contribute for more!";if(!t)throw"ChartDatasourcePrometheusPlugin.options is undefined";const r=Object.assign(new o,t);r.assertPluginOptions(),r&&r.timeRange&&(r.timeRange.msUpdateInterval?e["datasource-prometheus"].updateInterval=setInterval((()=>{e.update()}),r.timeRange.msUpdateInterval):e.update())}beforeUpdate(e,r){if(e["datasource-prometheus"]&&1==e["datasource-prometheus"].loading)return;const n=Object.assign(new o,r),c=n.prometheus,l=n.getQueries(),{start:f,end:p}=t.getStartAndEndDates(n.timeRange),d=n.timeRange.step||t.getPrometheusStepAuto(f,p,e.width),h=n.timeRange.minStep||d,m=h>=d?h:d;if(e["datasource-prometheus"]&&e["datasource-prometheus"].step==m&&e["datasource-prometheus"].start==f&&e["datasource-prometheus"].end==p)return;e["datasource-prometheus"].step=m,e["datasource-prometheus"].start=f,e["datasource-prometheus"].end=p,e["datasource-prometheus"].error=null;const g=t.executeQueries(c,l,f,p,m);let b={};if(e.data.datasets.length>0)for(let t in e.data.datasets){const r=e.data.datasets[t];let n=0;for(let e in r._meta)n=e;b[r.label]=!e.isDatasetVisible(r._meta[n].index)}const y=e.config.options.scales.yAxes;Promise.all(g).then((t=>{const r=t.reduce(((e,t,r)=>{if(0==t.result.length)return e;const o=e.length,s=t.result.map(((e,t)=>({yAxisID:y&&y.length>0?y[r%y.length].id:null,tension:n.tension,cubicInterpolationMode:n.cubicInterpolationMode||"default",stepped:n.stepped,fill:n.fill||!1,label:a(n,e),data:e.values.map(((e,t)=>({t:e.time,y:e.value}))),backgroundColor:i(n,e,o+t),borderColor:u(n,e,o+t),borderWidth:n.borderWidth,hidden:b[a(n,e)]||!1})));return e.concat(...s)}),[]);e.data.datasets=r,e.data.datasets.length>0&&(n.fillGaps&&function(e,t,r,n,o){let s=o.timeRange.minStep||n;s=s>=n?s:n,e.data.datasets.forEach(((n,o)=>{for(let e=n.data.length-2;e>0;e--)if(n.data[e+1].t-n.data[e].t>1100*s)for(let t=(n.data[e+1].t-n.data[e].t)/(1e3*s);t>1;t--){const t={t:new Date(n.data[e+1].t.getTime()-1e3*s),v:Number.NaN};n.data.splice(e+1,0,t)}if(Math.abs(t.getTime()-n.data[0].t)>1100*s)for(let r=Math.abs(t.getTime()-n.data[0].t)/(1e3*s);r>1;r--)e.data.datasets[o].data.unshift({t:new Date(n.data[0].t.getTime()-1e3*s),v:Number.NaN});if(Math.abs(r.getTime()-n.data[n.data.length-1].t)>1100*s)for(let t=Math.abs(r.getTime()-n.data[n.data.length-1].t)/(1e3*s);t>1;t--)e.data.datasets[o].data.push({t:new Date(n.data[e.data.datasets[o].data.length-1].t.getTime()+1e3*s),v:Number.NaN})}))}(e,f,p,m,n),n.dataSetHook&&(e.data.datasets=n.dataSetHook(e.data.datasets)),s(e),e["datasource-prometheus"].loading=!0,e.update(),e["datasource-prometheus"].loading=!1)})).catch((t=>{throw e.data.datasets=[],s(e),e["datasource-prometheus"].error="Failed to fetch data",t}))}beforeRender(e,t){var r;const n=Object.assign(new o,t);if(null!=e["datasource-prometheus"].error){const t=e.ctx,o=e.width,s=e.height;return e.clear(),t.save(),t.direction=n.errorMsg.direction,t.textAlign=n.errorMsg.textAlign,t.textBaseline=n.errorMsg.textBaseline,t.font="16px normal 'Helvetica Nueue'",t.fillText((null===(r=n.errorMsg)||void 0===r?void 0:r.message)||e["datasource-prometheus"].error,o/2,s/2),void t.restore()}if(0==e.data.datasets.length){const t=e.ctx,r=e.width,o=e.height;return e.clear(),t.save(),t.direction=n.noDataMsg.direction,t.textAlign=n.noDataMsg.textAlign,t.textBaseline=n.noDataMsg.textBaseline,t.font=n.noDataMsg.font,t.fillText(n.noDataMsg.message,r/2,o/2),void t.restore()}}destroy(e){e["datasource-prometheus"].updateInterval&&clearInterval(e["datasource-prometheus"].updateInterval)}}}));
//# sourceMappingURL=chartjs-plugin-datasource-prometheus.umd.js.map
