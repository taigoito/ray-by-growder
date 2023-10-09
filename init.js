/*! For license information please see init.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var n={},i=Object.prototype,r=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var r=e&&e.prototype instanceof f?e:f,a=Object.create(r.prototype),s=new L(i||[]);return a._invoke=function(t,e,n){var i="suspendedStart";return function(r,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw a;return{value:void 0,done:!0}}for(n.method=r,n.arg=a;;){var s=n.delegate;if(s){var o=E(s,n);if(o){if(o===d)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=l(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}(t,n,s),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=u;var d={};function f(){}function v(){}function m(){}var _={};h(_,s,(function(){return this}));var p=Object.getPrototypeOf,y=p&&p(p(S([])));y&&y!==i&&r.call(y,s)&&(_=y);var g=m.prototype=f.prototype=Object.create(_);function w(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,n){function i(a,s,o,c){var h=l(e[a],e,s);if("throw"!==h.type){var u=h.arg,d=u.value;return d&&"object"==t(d)&&r.call(d,"__await")?n.resolve(d.__await).then((function(t){i("next",t,o,c)}),(function(t){i("throw",t,o,c)})):n.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return i("throw",t,o,c)}))}c(h.arg)}var a;this._invoke=function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return a=a?a.then(r,r):r()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function S(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,h(g,"constructor",m),h(m,"constructor",v),v.displayName=h(m,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},n.awrap=function(t){return{__await:t}},w(x.prototype),h(x.prototype,o,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,i,r,a){void 0===a&&(a=Promise);var s=new x(u(t,e,i,r),a);return n.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(g),h(g,c,"Generator"),h(g,s,(function(){return this})),h(g,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},n.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,i,r,a,s){try{var o=t[a](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,r)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.elemName=n.elemName||"products",this.imageSize=n.imageSize||180,this.elem=n.elem||document.querySelector(".".concat(this.elemName)),this.template=n.template||document.getElementById("".concat(this.elemName,"Template")),this.elem&&this.template&&this.fetch(e)}var a,s;return a=t,s=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t,i=(t=e().mark((function t(n){var i,r,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return i=t.sent,t.next=5,i.json();case 5:r=t.sent,a=r.Items,this.render(a);case 8:case"end":return t.stop()}}),t,this)})),function(){var e=this,i=arguments;return new Promise((function(r,a){var s=t.apply(e,i);function o(t){n(s,r,a,o,c,"next",t)}function c(t){n(s,r,a,o,c,"throw",t)}o(void 0)}))});return function(t){return i.apply(this,arguments)}}())},{key:"render",value:function(t){var e=this;t.forEach((function(t){t=t.Item,console.log(t);var n=e.template.content.cloneNode(!0),i=n.querySelector(".".concat(e.elemName,"__image img")),r=n.querySelector(".".concat(e.elemName,"__name")),a=n.querySelector(".".concat(e.elemName,"__price")),s=t.smallImageUrls[0].imageUrl;s=s.replace("?_ex=64x64","?_ex=".concat(e.imageSize,"x").concat(e.imageSize)),i.setAttribute("src",s),r.textContent=t.itemName,a.textContent="".concat(t.itemPrice,"円"),e.elem.appendChild(n)}))}}],s&&r(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),t}();function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._elem=e||document.querySelector(".slider"),this._elem&&(this._inner=this._elem.querySelector(".slider__inner"),this._inner&&(this._items=this._inner.children,this._items.length&&(this.isHeader=this._elem.dataset.isHeader||!1,this.aspectRatio=this._elem.dataset.aspectRatio||5/8,this.gap=this._elem.dataset.gap-0||0,this.interval=this._elem.dataset.interval||3e3,this.duration=this._elem.dataset.duration||500,this._inner.style.flexWrap="nowrap",this._inner.style.gap="".concat(this.gap,"px"),this.currentIndex=0,this.itemsCount=this._items.length,this.distance=0,this.dragDistance=[],this.isAnimated=!1,this._setupNavs(),this._setupItems(),this._readyMove(-3,!0),this._setActiveTarget(),this._handleEvents(),this._windowResizeHandler(),this.interval>=1e3&&this.startInterval())))}var e,n;return e=t,n=[{key:"startInterval",value:function(){this._isPlay=!0,this._timeStart=null,this._loop(performance.now())}},{key:"stopInterval",value:function(){this._isPlay=!1}},{key:"_loop",value:function(t){this._timeStart||(this._timeStart=t),t-this._timeStart<this.interval?window.requestAnimationFrame(this._loop.bind(this)):this._done()}},{key:"_done",value:function(){this._isPlay&&(this.startInterval(),this.move(1))}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration;this._readyMove(t);var n=this._items.length;if(this.currentIndex+=t,this.currentIndex<0&&(this.currentIndex+=n),this.currentIndex>=n&&(this.currentIndex-=n),this.isAnimated=!0,this._start=this.distance,t<0)for(var i=0;i>t;i--)this._start-=this._items[(this.currentIndex-i-3+n)%n].clientWidth,this._start-=this.gap;else for(var r=0;r<t;r++)this._start+=this._items[(this.currentIndex-r-4+n)%n].clientWidth,this._start+=this.gap;this._stop=this._getAdjustedDistance(this.currentIndex),this._flickDistance=this._stop-this._start,this._currentDuration=e,this._timeStart=!1,this._moving(performance.now())}},{key:"_readyMove",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._items.length;if(t<0)for(var i=0;i>t;i--){var r=(this.currentIndex+i-4+n)%n;e&&(r+=3);var a=window.getComputedStyle(this._items[r]).order;this._items[r].style.order=parseInt(a)-1}else for(var s=0;s<t;s++){var o=(this.currentIndex+s-3+n)%n;e&&(o+=3);var c=window.getComputedStyle(this._items[o]).order;this._items[o].style.order=parseInt(c)+1}}},{key:"_setupNavs",value:function(){this._prev=document.createElement("a"),this._prev.classList.add("slider__prev"),this._prev.setAttribute("href","#");var t=document.createElement("span");t.dataset.icon="ei-chevron-left",t.dataset.size="l",this._prev.appendChild(t),this._next=document.createElement("a"),this._next.classList.add("slider__next"),this._next.setAttribute("href","#");var e=document.createElement("span");e.dataset.icon="ei-chevron-right",e.dataset.size="l",this._next.appendChild(e),this._nav=document.createElement("ul"),this._nav.classList.add("slider__nav");for(var n=0;n<this.itemsCount;n++){var i=document.createElement("li");i.classList.add("slider__navItem"),i.dataset.targetIndex=n,this._nav.appendChild(i)}this._elem.appendChild(this._prev),this._elem.appendChild(this._next),this._elem.after(this._nav)}},{key:"_setupItems",value:function(){for(;this._items.length<7;)for(var t=0;t<this.itemsCount;t++){var e=this._items[t].cloneNode(!0);this._inner.appendChild(e)}}},{key:"_setActiveTarget",value:function(){this._inner.querySelector(".--current")&&this._inner.querySelector(".--current").classList.remove("--current"),this._items[this.currentIndex].classList.add("--current"),this._nav.querySelector(".--current")&&this._nav.querySelector(".--current").classList.remove("--current"),this._navItems=this._nav.children,this._navItems[this.currentIndex%this.itemsCount].classList.add("--current")}},{key:"_handleEvents",value:function(){var t=this,e="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0;this._x=0,this._y=0,this._isDragging=!1,this._delta=0,this.isHeader||(e&&(this._inner.addEventListener("touchstart",(function(e){t._x=e.touches[0].clientX,t._y=e.touches[0].clientY,t._isDragging=!0,t._myStartHandler()})),this._inner.addEventListener("touchmove",(function(e){t._x=e.touches[0].clientX,t._y=e.touches[0].clientY,t._myMoveHandler()})),this._inner.addEventListener("touchend",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("touchcancel",(function(){t._myEndHandler(),t._isDragging=!1}))),this._inner.addEventListener("mousedown",(function(e){t._x=e.clientX,t._y=e.clientY,t._isDragging=!0,t._myStartHandler(),e.preventDefault()})),this._inner.addEventListener("mousemove",(function(e){t._x=e.clientX,t._y=e.clientY,t._myMoveHandler(),e.preventDefault()})),this._inner.addEventListener("mouseup",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("mouseleave",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("wheel",(function(e){t._delta=e.deltaY,t._myWheelHandler(),e.preventDefault()}))),this._inner.querySelectorAll(".post__image > a").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault()}))})),this._nav.addEventListener("click",(function(e){var n=e.target;n.dataset.targetIndex&&(t.move(n.dataset.targetIndex-t.currentIndex%t.itemsCount),t.stopInterval())})),this._prev.addEventListener("click",(function(e){t.isAnimated||t.move(-1),t.stopInterval(),e.preventDefault()})),this._next.addEventListener("click",(function(e){t.isAnimated||t.move(1),t.stopInterval(),e.preventDefault()})),window.addEventListener("resize",(function(){t._windowResizeHandler()}))}},{key:"_myStartHandler",value:function(){this.dragDistance=[this._x],this.stopInterval()}},{key:"_myMoveHandler",value:function(){if(this._isDragging&&!this.isAnimated){this.dragDistance.push(this._x);for(var t=this.dragDistance.length,e=0,n=0;n<t;n++)n>0&&(e=this.dragDistance[n]-this.dragDistance[n-1],this._inner.style.transform="translateX(".concat(this.distance+e,"px)"));this.distance+=e}}},{key:"_myEndHandler",value:function(){if(this._isDragging){var t=this.dragDistance[0]-this.dragDistance[this.dragDistance.length-1];if(Math.abs(t)>10){var e=this._items.length,n=0;if(t<0){var i=this._items[(this.currentIndex-3+e)%e].clientWidth,r=this._items[(this.currentIndex-2+e)%e].clientWidth;i/3<Math.abs(t)&&n--,(2*i+r)/3<Math.abs(t)&&n--}else{var a=this._items[(this.currentIndex-4+e)%e].clientWidth,s=this._items[(this.currentIndex-5+e)%e].clientWidth;a/3<Math.abs(t)&&n++,(2*a+s)/3<Math.abs(t)&&n++}this.move(n,this.duration/2)}}}},{key:"_myWheelHandler",value:function(){var t=this._delta;t<0&&!this.isAnimated&&this.move(-1),t>0&&!this.isAnimated&&this.move(1),this.stopInterval()}},{key:"_windowResizeHandler",value:function(){this._inner.style.width="".concat(this._getInnerWidth(),"px"),this.distance=this._getAdjustedDistance(this.currentIndex),this._inner.style.transform="translateX(".concat(this.distance,"px)")}},{key:"_getInnerWidth",value:function(){var t=this._items.length;return this._elem.clientHeight/this.aspectRatio*t+this.gap*(t-1)}},{key:"_getAdjustedDistance",value:function(t){var e=this._items.length,n=window.innerWidth/2;n-=this._items[t%e].clientWidth/2;for(var i=0;i>-3;i--){var r=(t+i-1+e)%e;n-=this._items[r].clientWidth,n-=this.gap}return n}},{key:"_moving",value:function(t){this._timeStart||(this._timeStart=t);var e=t-this._timeStart,n=this._easing(e,this._start,this._flickDistance,this._currentDuration);this._inner.style.transform="translateX(".concat(n,"px)"),e<this._currentDuration?window.requestAnimationFrame(this._moving.bind(this)):this._moved()}},{key:"_moved",value:function(){this._inner.style.transform="translateX(".concat(this._start+this._flickDistance,"px)"),this.timeStart=!1,this.isAnimated=!1,this._setActiveTarget(),this._windowResizeHandler()}},{key:"_easing",value:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}}],n&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();new a("https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=".concat("sloe-t","&applicationId=").concat("1096610023242809358")),new o})();