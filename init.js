/*! For license information please see init.js.LICENSE.txt */
(()=>{"use strict";var t="1096610023242809358";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._elem=e||document.querySelector(".slider"),this._elem&&(this._inner=this._elem.querySelector(".slider__inner"),this._inner&&(this._items=this._inner.children,this._items.length&&(this.isHeader=this._elem.dataset.isHeader||!1,this.aspectRatio=this._elem.dataset.aspectRatio||5/8,this.gap=this._elem.dataset.gap-0||0,this.interval=this._elem.dataset.interval||3e3,this.duration=this._elem.dataset.duration||500,this._inner.style.flexWrap="nowrap",this._inner.style.gap="".concat(this.gap,"px"),this.currentIndex=0,this.itemsCount=this._items.length,this.distance=0,this.dragDistance=[],this.isAnimated=!1,this._setupNavs(),this._setupItems(),this._readyMove(-3,!0),this._setActiveTarget(),this._handleEvents(),this._windowResizeHandler(),this.interval>=1e3&&this.startInterval())))}var n,r;return n=t,r=[{key:"startInterval",value:function(){this._isPlay=!0,this._timeStart=null,this._loop(performance.now())}},{key:"stopInterval",value:function(){this._isPlay=!1}},{key:"_loop",value:function(t){this._timeStart||(this._timeStart=t),t-this._timeStart<this.interval?window.requestAnimationFrame(this._loop.bind(this)):this._done()}},{key:"_done",value:function(){this._isPlay&&(this.startInterval(),this.move(1))}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration;this._readyMove(t);var n=this._items.length;if(this.currentIndex+=t,this.currentIndex<0&&(this.currentIndex+=n),this.currentIndex>=n&&(this.currentIndex-=n),this.isAnimated=!0,this._start=this.distance,t<0)for(var r=0;r>t;r--)this._start-=this._items[(this.currentIndex-r-3+n)%n].clientWidth,this._start-=this.gap;else for(var i=0;i<t;i++)this._start+=this._items[(this.currentIndex-i-4+n)%n].clientWidth,this._start+=this.gap;this._stop=this._getAdjustedDistance(this.currentIndex),this._flickDistance=this._stop-this._start,this._currentDuration=e,this._timeStart=!1,this._moving(performance.now())}},{key:"_readyMove",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._items.length;if(t<0)for(var r=0;r>t;r--){var i=(this.currentIndex+r-4+n)%n;e&&(i+=3);var o=window.getComputedStyle(this._items[i]).order;this._items[i].style.order=parseInt(o)-1}else for(var a=0;a<t;a++){var s=(this.currentIndex+a-3+n)%n;e&&(s+=3);var c=window.getComputedStyle(this._items[s]).order;this._items[s].style.order=parseInt(c)+1}}},{key:"_setupNavs",value:function(){this._prev=document.createElement("a"),this._prev.classList.add("slider__prev"),this._prev.setAttribute("href","#");var t=document.createElement("span");t.dataset.icon="ei-chevron-left",t.dataset.size="l",this._prev.appendChild(t),this._next=document.createElement("a"),this._next.classList.add("slider__next"),this._next.setAttribute("href","#");var e=document.createElement("span");e.dataset.icon="ei-chevron-right",e.dataset.size="l",this._next.appendChild(e),this._nav=document.createElement("ul"),this._nav.classList.add("slider__nav");for(var n=0;n<this.itemsCount;n++){var r=document.createElement("li");r.classList.add("slider__navItem"),r.dataset.targetIndex=n,this._nav.appendChild(r)}this._elem.appendChild(this._prev),this._elem.appendChild(this._next),this._elem.after(this._nav)}},{key:"_setupItems",value:function(){for(;this._items.length<7;)for(var t=0;t<this.itemsCount;t++){var e=this._items[t].cloneNode(!0);this._inner.appendChild(e)}}},{key:"_setActiveTarget",value:function(){this._inner.querySelector(".--current")&&this._inner.querySelector(".--current").classList.remove("--current"),this._items[this.currentIndex].classList.add("--current"),this._nav.querySelector(".--current")&&this._nav.querySelector(".--current").classList.remove("--current"),this._navItems=this._nav.children,this._navItems[this.currentIndex%this.itemsCount].classList.add("--current")}},{key:"_handleEvents",value:function(){var t=this,e="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0;this._x=0,this._y=0,this._isDragging=!1,this._delta=0,this.isHeader||(e&&(this._inner.addEventListener("touchstart",(function(e){t._x=e.touches[0].clientX,t._y=e.touches[0].clientY,t._isDragging=!0,t._myStartHandler()})),this._inner.addEventListener("touchmove",(function(e){t._x=e.touches[0].clientX,t._y=e.touches[0].clientY,t._myMoveHandler()})),this._inner.addEventListener("touchend",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("touchcancel",(function(){t._myEndHandler(),t._isDragging=!1}))),this._inner.addEventListener("mousedown",(function(e){t._x=e.clientX,t._y=e.clientY,t._isDragging=!0,t._myStartHandler(),e.preventDefault()})),this._inner.addEventListener("mousemove",(function(e){t._x=e.clientX,t._y=e.clientY,t._myMoveHandler(),e.preventDefault()})),this._inner.addEventListener("mouseup",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("mouseleave",(function(){t._myEndHandler(),t._isDragging=!1})),this._inner.addEventListener("wheel",(function(e){t._delta=e.deltaY,t._myWheelHandler(),e.preventDefault()}))),this._inner.querySelectorAll(".post__image > a").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault()}))})),this._nav.addEventListener("click",(function(e){var n=e.target;n.dataset.targetIndex&&(t.move(n.dataset.targetIndex-t.currentIndex%t.itemsCount),t.stopInterval())})),this._prev.addEventListener("click",(function(e){t.isAnimated||t.move(-1),t.stopInterval(),e.preventDefault()})),this._next.addEventListener("click",(function(e){t.isAnimated||t.move(1),t.stopInterval(),e.preventDefault()})),window.addEventListener("resize",(function(){t._windowResizeHandler()}))}},{key:"_myStartHandler",value:function(){this.dragDistance=[this._x],this.stopInterval()}},{key:"_myMoveHandler",value:function(){if(this._isDragging&&!this.isAnimated){this.dragDistance.push(this._x);for(var t=this.dragDistance.length,e=0,n=0;n<t;n++)n>0&&(e=this.dragDistance[n]-this.dragDistance[n-1],this._inner.style.transform="translateX(".concat(this.distance+e,"px)"));this.distance+=e}}},{key:"_myEndHandler",value:function(){if(this._isDragging){var t=this.dragDistance[0]-this.dragDistance[this.dragDistance.length-1];if(Math.abs(t)>10){var e=this._items.length,n=0;if(t<0){var r=this._items[(this.currentIndex-3+e)%e].clientWidth,i=this._items[(this.currentIndex-2+e)%e].clientWidth;r/3<Math.abs(t)&&n--,(2*r+i)/3<Math.abs(t)&&n--}else{var o=this._items[(this.currentIndex-4+e)%e].clientWidth,a=this._items[(this.currentIndex-5+e)%e].clientWidth;o/3<Math.abs(t)&&n++,(2*o+a)/3<Math.abs(t)&&n++}this.move(n,this.duration/2)}}}},{key:"_myWheelHandler",value:function(){var t=this._delta;t<0&&!this.isAnimated&&this.move(-1),t>0&&!this.isAnimated&&this.move(1),this.stopInterval()}},{key:"_windowResizeHandler",value:function(){this._inner.style.width="".concat(this._getInnerWidth(),"px"),this.distance=this._getAdjustedDistance(this.currentIndex),this._inner.style.transform="translateX(".concat(this.distance,"px)")}},{key:"_getInnerWidth",value:function(){var t=this._items.length;return this._elem.clientHeight/this.aspectRatio*t+this.gap*(t-1)}},{key:"_getAdjustedDistance",value:function(t){var e=this._items.length,n=window.innerWidth/2;n-=this._items[t%e].clientWidth/2;for(var r=0;r>-3;r--){var i=(t+r-1+e)%e;n-=this._items[i].clientWidth,n-=this.gap}return n}},{key:"_moving",value:function(t){this._timeStart||(this._timeStart=t);var e=t-this._timeStart,n=this._easing(e,this._start,this._flickDistance,this._currentDuration);this._inner.style.transform="translateX(".concat(n,"px)"),e<this._currentDuration?window.requestAnimationFrame(this._moving.bind(this)):this._moved()}},{key:"_moved",value:function(){this._inner.style.transform="translateX(".concat(this._start+this._flickDistance,"px)"),this.timeStart=!1,this.isAnimated=!1,this._setActiveTarget(),this._windowResizeHandler()}},{key:"_easing",value:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f={};function d(){}function v(){}function p(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(k([])));_&&_!==e&&n.call(_,a)&&(m=_);var g=p.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,s,c){var u=l(t[o],t,a);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(f).then((function(t){h.value=t,s(h)}),(function(t){return i("throw",t,s,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=p,u(g,"constructor",p),u(p,"constructor",v),v.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(h(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this.elem=n.elem||document.querySelector(".news__feed"),this.template=n.template||document.getElementById("newsTemplate"),this.elem&&this.template&&this.fetch(e)}var e,n;return e=t,n=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t,e=(t=i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,this.render(r);case 7:case"end":return t.stop()}}),t,this)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}())},{key:"render",value:function(t){var e=this;t.forEach((function(t){var n=e.template.content.cloneNode(!0),r=n.querySelector(".news__date"),i=n.querySelector(".news__content"),o=document.createElement("a");r.textContent=t.date,i.appendChild(o),o.setAttribute("href",t.link),o.textContent=t.content,e.elem.appendChild(n)}))}}],n&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function d(){}function v(){}function p(){}var m={};s(m,i,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(k([])));_&&_!==e&&n.call(_,i)&&(m=_);var g=p.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var h=c.arg,f=h.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){h.value=t,a(h)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=p,s(g,"constructor",p),s(p,"constructor",v),v.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,o,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(c(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),s(g,a,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function l(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this.count=n.count||10,this.elemName=n.elemName||"products",this.imageSize=n.imageSize||300,this.elem=n.elem||document.querySelector(".".concat(this.elemName)),this.template=n.template||document.getElementById("".concat(this.elemName,"Template")),this.elem&&this.template&&this.fetch(e)}var e,n;return e=t,n=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t,e=(t=h().mark((function t(e){var n,r,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,i=r.Items.slice(0,this.count),this.render(i);case 8:case"end":return t.stop()}}),t,this)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){l(o,r,i,a,s,"next",t)}function s(t){l(o,r,i,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}())},{key:"render",value:function(t){var e=this;t.forEach((function(t){t=t.Item,console.log(t);var n=e.template.content.cloneNode(!0),r=n.querySelector(".".concat(e.elemName,"__image img")),i=n.querySelector(".".concat(e.elemName,"__name")),o=n.querySelector(".".concat(e.elemName,"__price")),a=t.smallImageUrls[0].imageUrl;a=a.replace("?_ex=64x64","?_ex=".concat(e.imageSize,"x").concat(e.imageSize)),n.querySelectorAll("a").forEach((function(e){e.setAttribute("href",t.itemUrl)})),r.setAttribute("src",a),i.textContent=t.itemName,o.textContent="".concat(t.itemPrice.toLocaleString(),"円 (税込)"),e.elem.appendChild(n)}))}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();new n,new c("https://script.google.com/macros/s/AKfycbwmoXZ4P8WaDst_zbrXtNt5NBgAxOvQT1FACen9eHSZO8j3pUe83qNOEdtbeok1fovW/exec");var p={count:8,elemName:"newarrival",elem:document.querySelector(".newarrival__products"),template:document.getElementById("newarrivalTemplate")};new v("https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&sort=-updateTimestamp&applicationId=".concat(t),p);var m={count:10,elemName:"ranking",elem:document.querySelector(".ranking__products"),template:document.getElementById("rankingTemplate")};new v("https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&sort=-reviewCount&applicationId=".concat(t),m)})();