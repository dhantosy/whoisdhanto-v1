// Parallax JS
!function(t,i,e,s){"use strict";function n(i,e){this.element=i,this.$context=t(i).data("api",this),this.$layers=this.$context.find(".layer");var s={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null};for(var n in s)null===s[n]&&delete s[n];t.extend(this,r,e,s),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var o="parallax",a=30,r={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1};n.prototype.transformSupport=function(t){for(var n=e.createElement("div"),o=!1,a=null,r=!1,h=null,l=null,c=0,p=this.vendors.length;p>c;c++)if(null!==this.vendors[c]?(h=this.vendors[c][0]+"transform",l=this.vendors[c][1]+"Transform"):(h="transform",l="transform"),n.style[l]!==s){o=!0;break}switch(t){case"2D":r=o;break;case"3D":o&&(e.body.appendChild(n),n.style[l]="translate3d(1px,1px,1px)",a=i.getComputedStyle(n).getPropertyValue(h),r=a!==s&&a.length>0&&"none"!==a,e.body.removeChild(n))}return r},n.prototype.ww=null,n.prototype.wh=null,n.prototype.wcx=null,n.prototype.wcy=null,n.prototype.portrait=null,n.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),n.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],n.prototype.motionSupport=!!i.DeviceMotionEvent,n.prototype.orientationSupport=!!i.DeviceOrientationEvent,n.prototype.orientationStatus=0,n.prototype.transform2DSupport=n.prototype.transformSupport("2D"),n.prototype.transform3DSupport=n.prototype.transformSupport("3D"),n.prototype.initialise=function(){"static"===this.$context.css("position")&&this.$context.css({position:"relative"}),this.$layers.css({position:"absolute",display:"block",height:"100%",width:"100%",left:0,top:0}),this.$layers.first().css({position:"relative"}),this.$layers.each(t.proxy(function(i,e){this.depths.push(t(e).data("depth")||0)},this)),this.accelerate(this.$context),this.accelerate(this.$layers),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},n.prototype.updateDimensions=function(){this.ww=i.innerWidth,this.wh=i.innerHeight,this.wcx=this.ww/2,this.wcy=this.wh/2},n.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},n.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,i.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,i.addEventListener("mousemove",this.onMouseMove)),i.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},n.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?i.removeEventListener("deviceorientation",this.onDeviceOrientation):i.removeEventListener("mousemove",this.onMouseMove),i.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},n.prototype.calibrate=function(t,i){this.calibrateX=t===s?this.calibrateX:t,this.calibrateY=i===s?this.calibrateY:i},n.prototype.invert=function(t,i){this.invertX=t===s?this.invertX:t,this.invertY=i===s?this.invertY:i},n.prototype.friction=function(t,i){this.frictionX=t===s?this.frictionX:t,this.frictionY=i===s?this.frictionY:i},n.prototype.scalar=function(t,i){this.scalarX=t===s?this.scalarX:t,this.scalarY=i===s?this.scalarY:i},n.prototype.limit=function(t,i){this.limitX=t===s?this.limitX:t,this.limitY=i===s?this.limitY:i},n.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},n.prototype.css=function(i,e,n){for(var o=null,a=0,r=this.vendors.length;r>a;a++)if(o=null!==this.vendors[a]?t.camelCase(this.vendors[a][1]+"-"+e):e,i.style[o]!==s){i.style[o]=n;break}},n.prototype.accelerate=function(t){for(var i=0,e=t.length;e>i;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},n.prototype.setPosition=function(t,i,e){i+="%",e+="%",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},n.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},n.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},n.prototype.onWindowResize=function(){this.updateDimensions()},n.prototype.onAnimationFrame=function(){var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=(this.calibrateX?i:this.iy)*this.scalarX,this.my=(this.calibrateY?t:this.ix)*this.scalarY):(this.mx=(this.calibrateX?t:this.ix)*this.scalarX,this.my=(this.calibrateY?i:this.iy)*this.scalarY),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;s>e;e++){var n=this.depths[e],o=this.$layers[e],a=this.vx*n*(this.invertX?-1:1),r=this.vy*n*(this.invertY?-1:1);this.setPosition(o,a,r)}this.raf=requestAnimationFrame(this.onAnimationFrame)},n.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var e=(t.beta||0)/a,s=(t.gamma||0)/a,n=i.innerHeight>i.innerWidth;this.portrait!==n&&(this.portrait=n,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s}},n.prototype.onMouseMove=function(t){!this.orientationSupport&&this.relativeInput?(this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew/2,this.ecy=this.eh/2,this.ix=(t.clientX-this.ex-this.ecx)/this.ecx,this.iy=(t.clientY-this.ey-this.ecy)/this.ecy,this.clipRelativeInput&&(this.ix=Math.max(this.ix,-1),this.ix=Math.min(this.ix,1),this.iy=Math.max(this.iy,-1),this.iy=Math.min(this.iy,1))):(this.ix=(t.clientX-this.wcx)/this.wcx,this.iy=(t.clientY-this.wcy)/this.wcy)};var h={enable:n.prototype.enable,disable:n.prototype.disable,calibrate:n.prototype.calibrate,friction:n.prototype.friction,invert:n.prototype.invert,scalar:n.prototype.scalar,limit:n.prototype.limit};t.fn[o]=function(i){var e=arguments;return this.each(function(){var s=t(this),a=s.data(o);a||(a=new n(this,i),s.data(o,a)),h[i]&&a[i].apply(a,Array.prototype.slice.call(e,1))})}}(window.jQuery||window.Zepto,window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),n=window.setTimeout(function(){i(e+s)},s);return t=e+s,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
!function(t,i,e){"use strict";function s(t,i){this.element=t,this.layers=t.getElementsByClassName("layer");var e={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y")};for(var s in e)null===e[s]&&delete e[s];this.extend(this,a,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var n="Parallax",o=30,a={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};s.prototype.extend=function(){if(arguments.length>1)for(var t=arguments[0],i=1,e=arguments.length;e>i;i++){var s=arguments[i];for(var n in s)t[n]=s[n]}},s.prototype.data=function(t,i){return this.deserialize(t.getAttribute("data-"+i))},s.prototype.deserialize=function(t){return"true"===t?!0:"false"===t?!1:"null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t},s.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,function(t,i){return i?i.toUpperCase():""})},s.prototype.transformSupport=function(s){for(var n=i.createElement("div"),o=!1,a=null,r=!1,h=null,l=null,c=0,p=this.vendors.length;p>c;c++)if(null!==this.vendors[c]?(h=this.vendors[c][0]+"transform",l=this.vendors[c][1]+"Transform"):(h="transform",l="transform"),n.style[l]!==e){o=!0;break}switch(s){case"2D":r=o;break;case"3D":if(o){var m=i.body||i.createElement("body");m.appendChild(n),n.style[l]="translate3d(1px,1px,1px)",a=t.getComputedStyle(n).getPropertyValue(h),r=a!==e&&a.length>0&&"none"!==a,m.removeChild(n)}}return r},s.prototype.ww=null,s.prototype.wh=null,s.prototype.wcx=null,s.prototype.wcy=null,s.prototype.portrait=null,s.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),s.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],s.prototype.motionSupport=!!t.DeviceMotionEvent,s.prototype.orientationSupport=!!t.DeviceOrientationEvent,s.prototype.orientationStatus=0,s.prototype.transform2DSupport=s.prototype.transformSupport("2D"),s.prototype.transform3DSupport=s.prototype.transformSupport("3D"),s.prototype.initialise=function(){this.transform3DSupport&&this.accelerate(this.element);var i=t.getComputedStyle(this.element);"static"===i.getPropertyValue("position")&&(this.element.style.position="relative");for(var e=0,s=this.layers.length;s>e;e++){var n=this.layers[e];this.transform3DSupport&&this.accelerate(n),n.style.position=e?"absolute":"relative",n.style.display="block",n.style.height="100%",n.style.width="100%",n.style.left=0,n.style.top=0,this.depths.push(this.data(n,"depth")||0)}this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},s.prototype.updateDimensions=function(){this.ww=t.innerWidth,this.wh=t.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY},s.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},s.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,t.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,t.addEventListener("mousemove",this.onMouseMove)),t.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},s.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?t.removeEventListener("deviceorientation",this.onDeviceOrientation):t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},s.prototype.calibrate=function(t,i){this.calibrateX=t===e?this.calibrateX:t,this.calibrateY=i===e?this.calibrateY:i},s.prototype.invert=function(t,i){this.invertX=t===e?this.invertX:t,this.invertY=i===e?this.invertY:i},s.prototype.friction=function(t,i){this.frictionX=t===e?this.frictionX:t,this.frictionY=i===e?this.frictionY:i},s.prototype.scalar=function(t,i){this.scalarX=t===e?this.scalarX:t,this.scalarY=i===e?this.scalarY:i},s.prototype.limit=function(t,i){this.limitX=t===e?this.limitX:t,this.limitY=i===e?this.limitY:i},s.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},s.prototype.css=function(t,i,s){for(var n=null,o=0,a=this.vendors.length;a>o;o++)if(n=null!==this.vendors[o]?this.camelCase(this.vendors[o][1]+"-"+i):i,t.style[n]!==e){t.style[n]=s;break}},s.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},s.prototype.setPosition=function(t,i,e){i+="%",e+="%",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},s.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},s.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},s.prototype.onWindowResize=function(){this.updateDimensions()},s.prototype.onAnimationFrame=function(){var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=(this.calibrateX?i:this.iy)*this.scalarX,this.my=(this.calibrateY?t:this.ix)*this.scalarY):(this.mx=(this.calibrateX?t:this.ix)*this.scalarX,this.my=(this.calibrateY?i:this.iy)*this.scalarY),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.layers.length;s>e;e++){var n=this.layers[e],o=this.depths[e],a=this.vx*o*(this.invertX?-1:1),r=this.vy*o*(this.invertY?-1:1);this.setPosition(n,a,r)}this.raf=requestAnimationFrame(this.onAnimationFrame)},s.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var i=(t.beta||0)/o,e=(t.gamma||0)/o,s=this.wh>this.ww;this.portrait!==s&&(this.portrait=s,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=i,this.cy=e),this.ix=i,this.iy=e}},s.prototype.onMouseMove=function(t){!this.orientationSupport&&this.relativeInput?(this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.ix=(t.clientX-this.ex-this.ecx)/this.ecx,this.iy=(t.clientY-this.ey-this.ecy)/this.ecy,this.clipRelativeInput&&(this.ix=Math.max(this.ix,-1),this.ix=Math.min(this.ix,1),this.iy=Math.max(this.iy,-1),this.iy=Math.min(this.iy,1))):(this.ix=(t.clientX-this.wcx)/this.wcx,this.iy=(t.clientY-this.wcy)/this.wcy)},t[n]=s}(window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),n=window.setTimeout(function(){i(e+s)},s);return t=e+s,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();

/**
 * Swiper 3.0.7
 */
!function(){"use strict";function e(e){e.fn.swiper=function(t){var r;return e(this).each(function(){var e=new a(this,t);r||(r=e)}),r}}var a=function(e,r){function s(){return"horizontal"===g.params.direction}function i(){g.autoplayTimeoutId=setTimeout(function(){g.params.loop?(g.fixLoop(),g._slideNext()):g.isEnd?r.autoplayStopOnLast?g.stopAutoplay():g._slideTo(0):g._slideNext()},g.params.autoplay)}function n(e,a){var t=v(e.target);if(!t.is(a))if("string"==typeof a)t=t.parents(a);else if(a.nodeType){var r;return t.parents().each(function(e,t){t===a&&(r=a)}),r?a:void 0}return 0===t.length?void 0:t[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){g.onResize(!0),g.emit("onObserverUpdate",g,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),g.observers.push(r)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!g.params.allowSwipeToNext&&(s()&&39===a||!s()&&40===a))return!1;if(!g.params.allowSwipeToPrev&&(s()&&37===a||!s()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(g.container.parents(".swiper-slide").length>0&&0===g.container.parents(".swiper-slide-active").length)return;for(var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,n=window.innerHeight,o=g.container.offset(),l=[[o.left,o.top],[o.left+g.width,o.top],[o.left,o.top+g.height],[o.left+g.width,o.top+g.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+n&&(t=!0)}if(!t)return}s()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),39===a&&g.slideNext(),37===a&&g.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&g.slideNext(),38===a&&g.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=g._wheelEvent,t=0;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(g.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=e.wheelDelta;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(g.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(g.params.freeMode){var r=g.getWrapperTranslate()+t;if(r>0&&(r=0),r<g.maxTranslate()&&(r=g.maxTranslate()),g.setWrapperTransition(0),g.setWrapperTranslate(r),g.updateProgress(),g.updateActiveIndex(),0===r||r===g.maxTranslate())return}else(new window.Date).getTime()-g._lastWheelScrollTime>60&&(0>t?g.slideNext():g.slidePrev()),g._lastWheelScrollTime=(new window.Date).getTime();return g.params.autoplay&&g.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function p(e,a){e=v(e);var t,r,i;t=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):s()?(r=t,i="0"):(i=t,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*a+"%":r*a+"px",i=i.indexOf("%")>=0?parseInt(i,10)*a+"%":i*a+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(e,r);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,keyboardControl:!1,mousewheelControl:!1,mousewheelForceToAxis:!1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",runCallbacksOnInit:!0},m=r&&r.virtualTranslate;r=r||{};for(var f in c)if("undefined"==typeof r[f])r[f]=c[f];else if("object"==typeof r[f])for(var h in c[f])"undefined"==typeof r[f][h]&&(r[f][h]=c[f][h]);var g=this;g.version="3.0.7",g.params=r,g.classNames=[];var v;if(v="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,v&&(g.$=v,g.container=v(e),0!==g.container.length)){if(g.container.length>1)return void g.container.each(function(){new a(this,r)});g.container[0].swiper=g,g.container.data("swiper",g),g.classNames.push("swiper-container-"+g.params.direction),g.params.freeMode&&g.classNames.push("swiper-container-free-mode"),g.support.flexbox||(g.classNames.push("swiper-container-no-flexbox"),g.params.slidesPerColumn=1),(g.params.parallax||g.params.watchSlidesVisibility)&&(g.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(g.params.effect)>=0&&(g.support.transforms3d?(g.params.watchSlidesProgress=!0,g.classNames.push("swiper-container-3d")):g.params.effect="slide"),"slide"!==g.params.effect&&g.classNames.push("swiper-container-"+g.params.effect),"cube"===g.params.effect&&(g.params.resistanceRatio=0,g.params.slidesPerView=1,g.params.slidesPerColumn=1,g.params.slidesPerGroup=1,g.params.centeredSlides=!1,g.params.spaceBetween=0,g.params.virtualTranslate=!0,g.params.setWrapperSize=!1),"fade"===g.params.effect&&(g.params.slidesPerView=1,g.params.slidesPerColumn=1,g.params.slidesPerGroup=1,g.params.watchSlidesProgress=!0,g.params.spaceBetween=0,"undefined"==typeof m&&(g.params.virtualTranslate=!0)),g.params.grabCursor&&g.support.touch&&(g.params.grabCursor=!1),g.wrapper=g.container.children("."+g.params.wrapperClass),g.params.pagination&&(g.paginationContainer=v(g.params.pagination),g.params.paginationClickable&&g.paginationContainer.addClass("swiper-pagination-clickable")),g.rtl=s()&&("rtl"===g.container[0].dir.toLowerCase()||"rtl"===g.container.css("direction")),g.rtl&&g.classNames.push("swiper-container-rtl"),g.rtl&&(g.wrongRTL="-webkit-box"===g.wrapper.css("display")),g.params.slidesPerColumn>1&&g.classNames.push("swiper-container-multirow"),g.device.android&&g.classNames.push("swiper-container-android"),g.container.addClass(g.classNames.join(" ")),g.translate=0,g.progress=0,g.velocity=0,g.lockSwipeToNext=function(){g.params.allowSwipeToNext=!1},g.lockSwipeToPrev=function(){g.params.allowSwipeToPrev=!1},g.lockSwipes=function(){g.params.allowSwipeToNext=g.params.allowSwipeToPrev=!1},g.unlockSwipeToNext=function(){g.params.allowSwipeToNext=!0},g.unlockSwipeToPrev=function(){g.params.allowSwipeToPrev=!0},g.unlockSwipes=function(){g.params.allowSwipeToNext=g.params.allowSwipeToPrev=!0},g.params.grabCursor&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grab",g.container[0].style.cursor="-moz-grab",g.container[0].style.cursor="grab"),g.imagesToLoad=[],g.imagesLoaded=0,g.loadImage=function(e,a,t,r){function s(){r&&r()}var i;e.complete&&t?s():a?(i=new window.Image,i.onload=s,i.onerror=s,i.src=a):s()},g.preloadImages=function(){function e(){"undefined"!=typeof g&&null!==g&&(void 0!==g.imagesLoaded&&g.imagesLoaded++,g.imagesLoaded===g.imagesToLoad.length&&(g.params.updateOnImagesReady&&g.update(),g.emit("onImagesReady",g)))}g.imagesToLoad=g.container.find("img");for(var a=0;a<g.imagesToLoad.length;a++)g.loadImage(g.imagesToLoad[a],g.imagesToLoad[a].currentSrc||g.imagesToLoad[a].getAttribute("src"),!0,e)},g.autoplayTimeoutId=void 0,g.autoplaying=!1,g.autoplayPaused=!1,g.startAutoplay=function(){return"undefined"!=typeof g.autoplayTimeoutId?!1:g.params.autoplay?g.autoplaying?!1:(g.autoplaying=!0,g.emit("onAutoplayStart",g),void i()):!1},g.stopAutoplay=function(e){g.autoplayTimeoutId&&(g.autoplayTimeoutId&&clearTimeout(g.autoplayTimeoutId),g.autoplaying=!1,g.autoplayTimeoutId=void 0,g.emit("onAutoplayStop",g))},g.pauseAutoplay=function(e){g.autoplayPaused||(g.autoplayTimeoutId&&clearTimeout(g.autoplayTimeoutId),g.autoplayPaused=!0,0===e?(g.autoplayPaused=!1,i()):g.wrapper.transitionEnd(function(){g&&(g.autoplayPaused=!1,g.autoplaying?i():g.stopAutoplay())}))},g.minTranslate=function(){return-g.snapGrid[0]},g.maxTranslate=function(){return-g.snapGrid[g.snapGrid.length-1]},g.updateContainerSize=function(){var e,a;e="undefined"!=typeof g.params.width?g.params.width:g.container[0].clientWidth,a="undefined"!=typeof g.params.height?g.params.height:g.container[0].clientHeight,0===e&&s()||0===a&&!s()||(g.width=e,g.height=a,g.size=s()?g.width:g.height)},g.updateSlidesSize=function(){g.slides=g.wrapper.children("."+g.params.slideClass),g.snapGrid=[],g.slidesGrid=[],g.slidesSizesGrid=[];var e,a=g.params.spaceBetween,t=0,r=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*g.size),g.virtualSize=-a,g.slides.css(g.rtl?{marginLeft:"",marginTop:""}:{marginRight:"",marginBottom:""});var n;g.params.slidesPerColumn>1&&(n=Math.floor(g.slides.length/g.params.slidesPerColumn)===g.slides.length/g.params.slidesPerColumn?g.slides.length:Math.ceil(g.slides.length/g.params.slidesPerColumn)*g.params.slidesPerColumn);var o;for(e=0;e<g.slides.length;e++){o=0;var l=g.slides.eq(e);if(g.params.slidesPerColumn>1){var d,p,u,c,m=g.params.slidesPerColumn;"column"===g.params.slidesPerColumnFill?(p=Math.floor(e/m),u=e-p*m,d=p+u*n/m,l.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):(c=n/m,u=Math.floor(e/c),p=e-u*c),l.css({"margin-top":0!==u&&g.params.spaceBetween&&g.params.spaceBetween+"px"}).attr("data-swiper-column",p).attr("data-swiper-row",u)}"none"!==l.css("display")&&("auto"===g.params.slidesPerView?o=s()?l.outerWidth(!0):l.outerHeight(!0):(o=(g.size-(g.params.slidesPerView-1)*a)/g.params.slidesPerView,s()?g.slides[e].style.width=o+"px":g.slides[e].style.height=o+"px"),g.slides[e].swiperSlideSize=o,g.slidesSizesGrid.push(o),g.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-g.size/2-a),Math.abs(t)<.001&&(t=0),i%g.params.slidesPerGroup===0&&g.snapGrid.push(t),g.slidesGrid.push(t)):(i%g.params.slidesPerGroup===0&&g.snapGrid.push(t),g.slidesGrid.push(t),t=t+o+a),g.virtualSize+=o+a,r=o,i++)}g.virtualSize=Math.max(g.virtualSize,g.size);var f;if(g.rtl&&g.wrongRTL&&("slide"===g.params.effect||"coverflow"===g.params.effect)&&g.wrapper.css({width:g.virtualSize+g.params.spaceBetween+"px"}),(!g.support.flexbox||g.params.setWrapperSize)&&g.wrapper.css(s()?{width:g.virtualSize+g.params.spaceBetween+"px"}:{height:g.virtualSize+g.params.spaceBetween+"px"}),g.params.slidesPerColumn>1&&(g.virtualSize=(o+g.params.spaceBetween)*n,g.virtualSize=Math.ceil(g.virtualSize/g.params.slidesPerColumn)-g.params.spaceBetween,g.wrapper.css({width:g.virtualSize+g.params.spaceBetween+"px"}),g.params.centeredSlides)){for(f=[],e=0;e<g.snapGrid.length;e++)g.snapGrid[e]<g.virtualSize+g.snapGrid[0]&&f.push(g.snapGrid[e]);g.snapGrid=f}if(!g.params.centeredSlides){for(f=[],e=0;e<g.snapGrid.length;e++)g.snapGrid[e]<=g.virtualSize-g.size&&f.push(g.snapGrid[e]);g.snapGrid=f,Math.floor(g.virtualSize-g.size)>Math.floor(g.snapGrid[g.snapGrid.length-1])&&g.snapGrid.push(g.virtualSize-g.size)}0===g.snapGrid.length&&(g.snapGrid=[0]),0!==g.params.spaceBetween&&g.slides.css(s()?g.rtl?{marginLeft:a+"px"}:{marginRight:a+"px"}:{marginBottom:a+"px"}),g.params.watchSlidesProgress&&g.updateSlidesOffset()},g.updateSlidesOffset=function(){for(var e=0;e<g.slides.length;e++)g.slides[e].swiperSlideOffset=s()?g.slides[e].offsetLeft:g.slides[e].offsetTop},g.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=g.translate||0),0!==g.slides.length){"undefined"==typeof g.slides[0].swiperSlideOffset&&g.updateSlidesOffset();var a=g.params.centeredSlides?-e+g.size/2:-e;g.rtl&&(a=g.params.centeredSlides?e-g.size/2:e);{g.container[0].getBoundingClientRect(),s()?"left":"top",s()?"right":"bottom"}g.slides.removeClass(g.params.slideVisibleClass);for(var t=0;t<g.slides.length;t++){var r=g.slides[t],i=g.params.centeredSlides===!0?r.swiperSlideSize/2:0,n=(a-r.swiperSlideOffset-i)/(r.swiperSlideSize+g.params.spaceBetween);if(g.params.watchSlidesVisibility){var o=-(a-r.swiperSlideOffset-i),l=o+g.slidesSizesGrid[t],d=o>=0&&o<g.size||l>0&&l<=g.size||0>=o&&l>=g.size;d&&g.slides.eq(t).addClass(g.params.slideVisibleClass)}r.progress=g.rtl?-n:n}}},g.updateProgress=function(e){"undefined"==typeof e&&(e=g.translate||0);var a=g.maxTranslate()-g.minTranslate();0===a?(g.progress=0,g.isBeginning=g.isEnd=!0):(g.progress=(e-g.minTranslate())/a,g.isBeginning=g.progress<=0,g.isEnd=g.progress>=1),g.isBeginning&&g.emit("onReachBeginning",g),g.isEnd&&g.emit("onReachEnd",g),g.params.watchSlidesProgress&&g.updateSlidesProgress(e),g.emit("onProgress",g,g.progress)},g.updateActiveIndex=function(){var e,a,t,r=g.rtl?g.translate:-g.translate;for(a=0;a<g.slidesGrid.length;a++)"undefined"!=typeof g.slidesGrid[a+1]?r>=g.slidesGrid[a]&&r<g.slidesGrid[a+1]-(g.slidesGrid[a+1]-g.slidesGrid[a])/2?e=a:r>=g.slidesGrid[a]&&r<g.slidesGrid[a+1]&&(e=a+1):r>=g.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/g.params.slidesPerGroup),t>=g.snapGrid.length&&(t=g.snapGrid.length-1),e!==g.activeIndex&&(g.snapIndex=t,g.previousIndex=g.activeIndex,g.activeIndex=e,g.updateClasses())},g.updateClasses=function(){g.slides.removeClass(g.params.slideActiveClass+" "+g.params.slideNextClass+" "+g.params.slidePrevClass);var e=g.slides.eq(g.activeIndex);if(e.addClass(g.params.slideActiveClass),e.next("."+g.params.slideClass).addClass(g.params.slideNextClass),e.prev("."+g.params.slideClass).addClass(g.params.slidePrevClass),g.bullets&&g.bullets.length>0){g.bullets.removeClass(g.params.bulletActiveClass);var a;g.params.loop?(a=Math.ceil(g.activeIndex-g.loopedSlides)/g.params.slidesPerGroup,a>g.slides.length-1-2*g.loopedSlides&&(a-=g.slides.length-2*g.loopedSlides),a>g.bullets.length-1&&(a-=g.bullets.length)):a="undefined"!=typeof g.snapIndex?g.snapIndex:g.activeIndex||0,g.paginationContainer.length>1?g.bullets.each(function(){v(this).index()===a&&v(this).addClass(g.params.bulletActiveClass)}):g.bullets.eq(a).addClass(g.params.bulletActiveClass)}g.params.loop||(g.params.prevButton&&(g.isBeginning?(v(g.params.prevButton).addClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.disable(v(g.params.prevButton))):(v(g.params.prevButton).removeClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.enable(v(g.params.prevButton)))),g.params.nextButton&&(g.isEnd?(v(g.params.nextButton).addClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.disable(v(g.params.nextButton))):(v(g.params.nextButton).removeClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.enable(v(g.params.nextButton)))))},g.updatePagination=function(){if(g.params.pagination&&g.paginationContainer&&g.paginationContainer.length>0){for(var e="",a=g.params.loop?Math.ceil((g.slides.length-2*g.loopedSlides)/g.params.slidesPerGroup):g.snapGrid.length,t=0;a>t;t++)e+=g.params.paginationBulletRender?g.params.paginationBulletRender(t,g.params.bulletClass):'<span class="'+g.params.bulletClass+'"></span>';g.paginationContainer.html(e),g.bullets=g.paginationContainer.find("."+g.params.bulletClass)}},g.update=function(e){function a(){r=Math.min(Math.max(g.translate,g.maxTranslate()),g.minTranslate()),g.setWrapperTranslate(r),g.updateActiveIndex(),g.updateClasses()}if(g.updateContainerSize(),g.updateSlidesSize(),g.updateProgress(),g.updatePagination(),g.updateClasses(),g.params.scrollbar&&g.scrollbar&&g.scrollbar.set(),e){var t,r;g.params.freeMode?a():(t="auto"===g.params.slidesPerView&&g.isEnd&&!g.params.centeredSlides?g.slideTo(g.slides.length-1,0,!1,!0):g.slideTo(g.activeIndex,0,!1,!0),t||a())}},g.onResize=function(e){if(g.updateContainerSize(),g.updateSlidesSize(),g.updateProgress(),("auto"===g.params.slidesPerView||g.params.freeMode||e)&&g.updatePagination(),g.params.scrollbar&&g.scrollbar&&g.scrollbar.set(),g.params.freeMode){var a=Math.min(Math.max(g.translate,g.maxTranslate()),g.minTranslate());g.setWrapperTranslate(a),g.updateActiveIndex(),g.updateClasses()}else g.updateClasses(),"auto"===g.params.slidesPerView&&g.isEnd&&!g.params.centeredSlides?g.slideTo(g.slides.length-1,0,!1,!0):g.slideTo(g.activeIndex,0,!1,!0)};var w=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?w=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(w=["MSPointerDown","MSPointerMove","MSPointerUp"]),g.touchEvents={start:g.support.touch||!g.params.simulateTouch?"touchstart":w[0],move:g.support.touch||!g.params.simulateTouch?"touchmove":w[1],end:g.support.touch||!g.params.simulateTouch?"touchend":w[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===g.params.touchEventsTarget?g.container:g.wrapper).addClass("swiper-wp8-"+g.params.direction),g.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===g.params.touchEventsTarget?g.container[0]:g.wrapper[0],i=g.support.touch?s:document,n=g.params.nested?!0:!1;g.browser.ie?(s[t](g.touchEvents.start,g.onTouchStart,!1),i[t](g.touchEvents.move,g.onTouchMove,n),i[t](g.touchEvents.end,g.onTouchEnd,!1)):(g.support.touch&&(s[t](g.touchEvents.start,g.onTouchStart,!1),s[t](g.touchEvents.move,g.onTouchMove,n),s[t](g.touchEvents.end,g.onTouchEnd,!1)),!r.simulateTouch||g.device.ios||g.device.android||(s[t]("mousedown",g.onTouchStart,!1),document[t]("mousemove",g.onTouchMove,n),document[t]("mouseup",g.onTouchEnd,!1))),window[t]("resize",g.onResize),g.params.nextButton&&(v(g.params.nextButton)[a]("click",g.onClickNext),g.params.a11y&&g.a11y&&v(g.params.nextButton)[a]("keydown",g.a11y.onEnterKey)),g.params.prevButton&&(v(g.params.prevButton)[a]("click",g.onClickPrev),g.params.a11y&&g.a11y&&v(g.params.prevButton)[a]("keydown",g.a11y.onEnterKey)),g.params.pagination&&g.params.paginationClickable&&v(g.paginationContainer)[a]("click","."+g.params.bulletClass,g.onClickIndex),(g.params.preventClicks||g.params.preventClicksPropagation)&&s[t]("click",g.preventClicks,!0)},g.attachEvents=function(e){g.initEvents()},g.detachEvents=function(){g.initEvents(!0)},g.allowClick=!0,g.preventClicks=function(e){g.allowClick||(g.params.preventClicks&&e.preventDefault(),g.params.preventClicksPropagation&&(e.stopPropagation(),e.stopImmediatePropagation()))},g.onClickNext=function(e){e.preventDefault(),g.slideNext()},g.onClickPrev=function(e){e.preventDefault(),g.slidePrev()},g.onClickIndex=function(e){e.preventDefault();var a=v(this).index()*g.params.slidesPerGroup;g.params.loop&&(a+=g.loopedSlides),g.slideTo(a)},g.updateClickedSlide=function(e){var a=n(e,"."+g.params.slideClass),t=!1;if(a)for(var r=0;r<g.slides.length;r++)g.slides[r]===a&&(t=!0);if(!a||!t)return g.clickedSlide=void 0,void(g.clickedIndex=void 0);if(g.clickedSlide=a,g.clickedIndex=v(a).index(),g.params.slideToClickedSlide&&void 0!==g.clickedIndex&&g.clickedIndex!==g.activeIndex){var s,i=g.clickedIndex;if(g.params.loop)if(s=v(g.clickedSlide).attr("data-swiper-slide-index"),i>g.slides.length-g.params.slidesPerView)g.fixLoop(),i=g.wrapper.children("."+g.params.slideClass+'[data-swiper-slide-index="'+s+'"]').eq(0).index(),setTimeout(function(){g.slideTo(i)},0);else if(i<g.params.slidesPerView-1){g.fixLoop();var o=g.wrapper.children("."+g.params.slideClass+'[data-swiper-slide-index="'+s+'"]');i=o.eq(o.length-1).index(),setTimeout(function(){g.slideTo(i)},0)}else g.slideTo(i);else g.slideTo(i)}};var y,b,x,T,S,C,M,E,z,P="input, select, textarea, button",I=Date.now(),k=[];g.animating=!1,g.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var L,D;if(g.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),L="touchstart"===e.type,L||!("which"in e)||3!==e.which){if(g.params.noSwiping&&n(e,"."+g.params.noSwipingClass))return void(g.allowClick=!0);if(!g.params.swipeHandler||n(e,g.params.swipeHandler)){if(y=!0,b=!1,T=void 0,D=void 0,g.touches.startX=g.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,g.touches.startY=g.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,x=Date.now(),g.allowClick=!0,g.updateContainerSize(),g.swipeDirection=void 0,g.params.threshold>0&&(M=!1),"touchstart"!==e.type){var a=!0;v(e.target).is(P)&&(a=!1),document.activeElement&&v(document.activeElement).is(P)&&document.activeElement.blur(),a&&e.preventDefault()}g.emit("onTouchStart",g,e)}}},g.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(L&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(g.params.onlyExternal)return b=!0,void(g.allowClick=!1);if(L&&document.activeElement&&e.target===document.activeElement&&v(e.target).is(P))return b=!0,void(g.allowClick=!1);if(g.emit("onTouchMove",g,e),!(e.targetTouches&&e.targetTouches.length>1)){if(g.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,g.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof T){var a=180*Math.atan2(Math.abs(g.touches.currentY-g.touches.startY),Math.abs(g.touches.currentX-g.touches.startX))/Math.PI;T=s()?a>g.params.touchAngle:90-a>g.params.touchAngle}if(T&&g.emit("onTouchMoveOpposite",g,e),"undefined"==typeof D&&g.browser.ieTouch&&(g.touches.currentX!==g.touches.startX||g.touches.currentY!==g.touches.startY)&&(D=!0),y){if(T)return void(y=!1);if(D||!g.browser.ieTouch){g.allowClick=!1,g.emit("onSliderMove",g,e),e.preventDefault(),g.params.touchMoveStopPropagation&&!g.params.nested&&e.stopPropagation(),b||(r.loop&&g.fixLoop(),C=g.getWrapperTranslate(),g.setWrapperTransition(0),g.animating&&g.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),g.params.autoplay&&g.autoplaying&&(g.params.autoplayDisableOnInteraction?g.stopAutoplay():g.pauseAutoplay()),z=!1,g.params.grabCursor&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grabbing",g.container[0].style.cursor="-moz-grabbin",g.container[0].style.cursor="grabbing")),b=!0;var t=g.touches.diff=s()?g.touches.currentX-g.touches.startX:g.touches.currentY-g.touches.startY;t*=g.params.touchRatio,g.rtl&&(t=-t),g.swipeDirection=t>0?"prev":"next",S=t+C;var i=!0;if(t>0&&S>g.minTranslate()?(i=!1,g.params.resistance&&(S=g.minTranslate()-1+Math.pow(-g.minTranslate()+C+t,g.params.resistanceRatio))):0>t&&S<g.maxTranslate()&&(i=!1,g.params.resistance&&(S=g.maxTranslate()+1-Math.pow(g.maxTranslate()-C-t,g.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!g.params.allowSwipeToNext&&"next"===g.swipeDirection&&C>S&&(S=C),!g.params.allowSwipeToPrev&&"prev"===g.swipeDirection&&S>C&&(S=C),g.params.followFinger){if(g.params.threshold>0){if(!(Math.abs(t)>g.params.threshold||M))return void(S=C);if(!M)return M=!0,g.touches.startX=g.touches.currentX,g.touches.startY=g.touches.currentY,S=C,void(g.touches.diff=s()?g.touches.currentX-g.touches.startX:g.touches.currentY-g.touches.startY)}(g.params.freeMode||g.params.watchSlidesProgress)&&g.updateActiveIndex(),g.params.freeMode&&(0===k.length&&k.push({position:g.touches[s()?"startX":"startY"],time:x}),k.push({position:g.touches[s()?"currentX":"currentY"],time:(new window.Date).getTime()})),g.updateProgress(S),g.setWrapperTranslate(S)}}}}}},g.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),g.emit("onTouchEnd",g,e),y){g.params.grabCursor&&b&&y&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grab",g.container[0].style.cursor="-moz-grab",g.container[0].style.cursor="grab");var a=Date.now(),t=a-x;if(g.allowClick&&(g.updateClickedSlide(e),g.emit("onTap",g,e),300>t&&a-I>300&&(E&&clearTimeout(E),E=setTimeout(function(){g&&(g.params.paginationHide&&g.paginationContainer.length>0&&!v(e.target).hasClass(g.params.bulletClass)&&g.paginationContainer.toggleClass(g.params.paginationHiddenClass),g.emit("onClick",g,e))},300)),300>t&&300>a-I&&(E&&clearTimeout(E),g.emit("onDoubleTap",g,e))),I=Date.now(),setTimeout(function(){g&&g.allowClick&&(g.allowClick=!0)},0),!y||!b||!g.swipeDirection||0===g.touches.diff||S===C)return void(y=b=!1);y=b=!1;var r;if(r=g.params.followFinger?g.rtl?g.translate:-g.translate:-S,g.params.freeMode){if(r<-g.minTranslate())return void g.slideTo(g.activeIndex);if(r>-g.maxTranslate())return void g.slideTo(g.slides.length<g.snapGrid.length?g.snapGrid.length-1:g.slides.length-1);if(g.params.freeModeMomentum){if(k.length>1){var s=k.pop(),i=k.pop(),n=s.position-i.position,o=s.time-i.time;g.velocity=n/o,g.velocity=g.velocity/2,Math.abs(g.velocity)<.02&&(g.velocity=0),(o>150||(new window.Date).getTime()-s.time>300)&&(g.velocity=0)}else g.velocity=0;k.length=0;var l=1e3*g.params.freeModeMomentumRatio,d=g.velocity*l,p=g.translate+d;g.rtl&&(p=-p);var u,c=!1,m=20*Math.abs(g.velocity)*g.params.freeModeMomentumBounceRatio;if(p<g.maxTranslate())g.params.freeModeMomentumBounce?(p+g.maxTranslate()<-m&&(p=g.maxTranslate()-m),u=g.maxTranslate(),c=!0,z=!0):p=g.maxTranslate();else if(p>g.minTranslate())g.params.freeModeMomentumBounce?(p-g.minTranslate()>m&&(p=g.minTranslate()+m),u=g.minTranslate(),c=!0,z=!0):p=g.minTranslate();else if(g.params.freeModeSticky){var f,h=0;for(h=0;h<g.snapGrid.length;h+=1)if(g.snapGrid[h]>-p){f=h;break}p=Math.abs(g.snapGrid[f]-p)<Math.abs(g.snapGrid[f-1]-p)||"next"===g.swipeDirection?g.snapGrid[f]:g.snapGrid[f-1],g.rtl||(p=-p)}if(0!==g.velocity)l=Math.abs(g.rtl?(-p-g.translate)/g.velocity:(p-g.translate)/g.velocity);else if(g.params.freeModeSticky)return void g.slideReset();g.params.freeModeMomentumBounce&&c?(g.updateProgress(u),g.setWrapperTransition(l),g.setWrapperTranslate(p),g.onTransitionStart(),g.animating=!0,g.wrapper.transitionEnd(function(){g&&z&&(g.emit("onMomentumBounce",g),g.setWrapperTransition(g.params.speed),g.setWrapperTranslate(u),g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd()}))})):g.velocity?(g.updateProgress(p),g.setWrapperTransition(l),g.setWrapperTranslate(p),g.onTransitionStart(),g.animating||(g.animating=!0,g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd()}))):g.updateProgress(p),g.updateActiveIndex()}return void((!g.params.freeModeMomentum||t>=g.params.longSwipesMs)&&(g.updateProgress(),g.updateActiveIndex()))}var w,T=0,M=g.slidesSizesGrid[0];for(w=0;w<g.slidesGrid.length;w+=g.params.slidesPerGroup)"undefined"!=typeof g.slidesGrid[w+g.params.slidesPerGroup]?r>=g.slidesGrid[w]&&r<g.slidesGrid[w+g.params.slidesPerGroup]&&(T=w,M=g.slidesGrid[w+g.params.slidesPerGroup]-g.slidesGrid[w]):r>=g.slidesGrid[w]&&(T=w,M=g.slidesGrid[g.slidesGrid.length-1]-g.slidesGrid[g.slidesGrid.length-2]);var P=(r-g.slidesGrid[T])/M;if(t>g.params.longSwipesMs){if(!g.params.longSwipes)return void g.slideTo(g.activeIndex);"next"===g.swipeDirection&&g.slideTo(P>=g.params.longSwipesRatio?T+g.params.slidesPerGroup:T),"prev"===g.swipeDirection&&g.slideTo(P>1-g.params.longSwipesRatio?T+g.params.slidesPerGroup:T)}else{if(!g.params.shortSwipes)return void g.slideTo(g.activeIndex);"next"===g.swipeDirection&&g.slideTo(T+g.params.slidesPerGroup),"prev"===g.swipeDirection&&g.slideTo(T)}}},g._slideTo=function(e,a){return g.slideTo(e,a,!0,!0)},g.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),g.snapIndex=Math.floor(e/g.params.slidesPerGroup),g.snapIndex>=g.snapGrid.length&&(g.snapIndex=g.snapGrid.length-1);var i=-g.snapGrid[g.snapIndex];if(!g.params.allowSwipeToNext&&i<g.translate)return!1;if(!g.params.allowSwipeToPrev&&i>g.translate)return!1;g.params.autoplay&&g.autoplaying&&(r||!g.params.autoplayDisableOnInteraction?g.pauseAutoplay(a):g.stopAutoplay()),g.updateProgress(i);for(var n=0;n<g.slidesGrid.length;n++)-i>=g.slidesGrid[n]&&(e=n);if("undefined"==typeof a&&(a=g.params.speed),g.previousIndex=g.activeIndex||0,g.activeIndex=e,i===g.translate)return g.updateClasses(),!1;g.updateClasses(),g.onTransitionStart(t);s()?i:0,s()?0:i;return 0===a?(g.setWrapperTransition(0),g.setWrapperTranslate(i),g.onTransitionEnd(t)):(g.setWrapperTransition(a),g.setWrapperTranslate(i),g.animating||(g.animating=!0,g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd(t)}))),!0},g.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),g.lazy&&g.lazy.onTransitionStart(),e&&(g.emit("onTransitionStart",g),g.activeIndex!==g.previousIndex&&g.emit("onSlideChangeStart",g))},g.onTransitionEnd=function(e){g.animating=!1,g.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),g.lazy&&g.lazy.onTransitionEnd(),e&&(g.emit("onTransitionEnd",g),g.activeIndex!==g.previousIndex&&g.emit("onSlideChangeEnd",g)),g.params.hashnav&&g.hashnav&&g.hashnav.setHash()},g.slideNext=function(e,a,t){if(g.params.loop){if(g.animating)return!1;g.fixLoop();{g.container[0].clientLeft}return g.slideTo(g.activeIndex+g.params.slidesPerGroup,a,e,t)}return g.slideTo(g.activeIndex+g.params.slidesPerGroup,a,e,t)},g._slideNext=function(e){return g.slideNext(!0,e,!0)},g.slidePrev=function(e,a,t){if(g.params.loop){if(g.animating)return!1;g.fixLoop();{g.container[0].clientLeft}return g.slideTo(g.activeIndex-1,a,e,t)}return g.slideTo(g.activeIndex-1,a,e,t)},g._slidePrev=function(e){return g.slidePrev(!0,e,!0)},g.slideReset=function(e,a,t){return g.slideTo(g.activeIndex,a,e)},g.setWrapperTransition=function(e,a){g.wrapper.transition(e),"slide"!==g.params.effect&&g.effects[g.params.effect]&&g.effects[g.params.effect].setTransition(e),g.params.parallax&&g.parallax&&g.parallax.setTransition(e),g.params.scrollbar&&g.scrollbar&&g.scrollbar.setTransition(e),g.params.control&&g.controller&&g.controller.setTransition(e,a),g.emit("onSetTransition",g,e)},g.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;s()?r=g.rtl?-e:e:i=e,g.params.virtualTranslate||g.wrapper.transform(g.support.transforms3d?"translate3d("+r+"px, "+i+"px, "+n+"px)":"translate("+r+"px, "+i+"px)"),g.translate=s()?r:i,a&&g.updateActiveIndex(),"slide"!==g.params.effect&&g.effects[g.params.effect]&&g.effects[g.params.effect].setTranslate(g.translate),g.params.parallax&&g.parallax&&g.parallax.setTranslate(g.translate),g.params.scrollbar&&g.scrollbar&&g.scrollbar.setTranslate(g.translate),g.params.control&&g.controller&&g.controller.setTranslate(g.translate,t),g.emit("onSetTranslate",g,g.translate)},g.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),g.params.virtualTranslate?g.rtl?-g.translate:g.translate:(s=window.getComputedStyle(e,null),
window.WebKitCSSMatrix?i=new window.WebKitCSSMatrix("none"===s.webkitTransform?"":s.webkitTransform):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:parseFloat(16===t.length?t[12]:t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:parseFloat(16===t.length?t[13]:t[5])),g.rtl&&r&&(r=-r),r||0)},g.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=s()?"x":"y"),g.getTranslate(g.wrapper[0],e)},g.observers=[],g.initObservers=function(){if(g.params.observeParents)for(var e=g.container.parents(),a=0;a<e.length;a++)o(e[a]);o(g.container[0],{childList:!1}),o(g.wrapper[0],{attributes:!1})},g.disconnectObservers=function(){for(var e=0;e<g.observers.length;e++)g.observers[e].disconnect();g.observers=[]},g.createLoop=function(){g.wrapper.children("."+g.params.slideClass+"."+g.params.slideDuplicateClass).remove();var e=g.wrapper.children("."+g.params.slideClass);g.loopedSlides=parseInt(g.params.loopedSlides||g.params.slidesPerView,10),g.loopedSlides=g.loopedSlides+g.params.loopAdditionalSlides,g.loopedSlides>e.length&&(g.loopedSlides=e.length);var a,t=[],r=[];for(e.each(function(a,s){var i=v(this);a<g.loopedSlides&&r.push(s),a<e.length&&a>=e.length-g.loopedSlides&&t.push(s),i.attr("data-swiper-slide-index",a)}),a=0;a<r.length;a++)g.wrapper.append(v(r[a].cloneNode(!0)).addClass(g.params.slideDuplicateClass));for(a=t.length-1;a>=0;a--)g.wrapper.prepend(v(t[a].cloneNode(!0)).addClass(g.params.slideDuplicateClass))},g.destroyLoop=function(){g.wrapper.children("."+g.params.slideClass+"."+g.params.slideDuplicateClass).remove(),g.slides.removeAttr("data-swiper-slide-index")},g.fixLoop=function(){var e;g.activeIndex<g.loopedSlides?(e=g.slides.length-3*g.loopedSlides+g.activeIndex,e+=g.loopedSlides,g.slideTo(e,0,!1,!0)):("auto"===g.params.slidesPerView&&g.activeIndex>=2*g.loopedSlides||g.activeIndex>g.slides.length-2*g.params.slidesPerView)&&(e=-g.slides.length+g.activeIndex+g.loopedSlides,e+=g.loopedSlides,g.slideTo(e,0,!1,!0))},g.appendSlide=function(e){if(g.params.loop&&g.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&g.wrapper.append(e[a]);else g.wrapper.append(e);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0)},g.prependSlide=function(e){g.params.loop&&g.destroyLoop();var a=g.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&g.wrapper.prepend(e[t]);a=g.activeIndex+e.length}else g.wrapper.prepend(e);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0),g.slideTo(a,0,!1)},g.removeSlide=function(e){g.params.loop&&(g.destroyLoop(),g.slides=g.wrapper.children("."+g.params.slideClass));var a,t=g.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],g.slides[a]&&g.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,g.slides[a]&&g.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0),g.params.loop?g.slideTo(t+g.loopedSlides,0,!1):g.slideTo(t,0,!1)},g.removeAllSlides=function(){for(var e=[],a=0;a<g.slides.length;a++)e.push(a);g.removeSlide(e)},g.effects={fade:{fadeIndex:null,setTranslate:function(){for(var e=0;e<g.slides.length;e++){var a=g.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;g.params.virtualTranslate||(r-=g.translate);var i=0;s()||(i=r,r=0);var n=g.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);n>0&&1>n&&(g.effects.fade.fadeIndex=e),a.css({opacity:n}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(g.slides.transition(e),g.params.virtualTranslate&&0!==e){var a=null!==g.effects.fade.fadeIndex?g.effects.fade.fadeIndex:g.activeIndex;g.params.loop||g.params.fade.crossFade||0!==a||(a=g.slides.length-1),g.slides.eq(a).transitionEnd(function(){if(g)for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],a=0;a<e.length;a++)g.wrapper.trigger(e[a])})}}},cube:{setTranslate:function(){var e,a=0;g.params.cube.shadow&&(s()?(e=g.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=v('<div class="swiper-cube-shadow"></div>'),g.wrapper.append(e)),e.css({height:g.width+"px"})):(e=g.container.find(".swiper-cube-shadow"),0===e.length&&(e=v('<div class="swiper-cube-shadow"></div>'),g.container.append(e))));for(var t=0;t<g.slides.length;t++){var r=g.slides.eq(t),i=90*t,n=Math.floor(i/360);g.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,d=0,p=0;t%4===0?(l=4*-n*g.size,p=0):(t-1)%4===0?(l=0,p=4*-n*g.size):(t-2)%4===0?(l=g.size+4*n*g.size,p=g.size):(t-3)%4===0&&(l=-g.size,p=3*g.size+4*g.size*n),g.rtl&&(l=-l),s()||(d=l,l=0);var u="rotateX("+(s()?0:-i)+"deg) rotateY("+(s()?i:0)+"deg) translate3d("+l+"px, "+d+"px, "+p+"px)";if(1>=o&&o>-1&&(a=90*t+90*o,g.rtl&&(a=90*-t-90*o)),r.transform(u),g.params.cube.slideShadows){var c=r.find(s()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),m=r.find(s()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===c.length&&(c=v('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=v('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),r.append(m));{r[0].progress}c.length&&(c[0].style.opacity=-r[0].progress),m.length&&(m[0].style.opacity=r[0].progress)}}if(g.wrapper.css({"-webkit-transform-origin":"50% 50% -"+g.size/2+"px","-moz-transform-origin":"50% 50% -"+g.size/2+"px","-ms-transform-origin":"50% 50% -"+g.size/2+"px","transform-origin":"50% 50% -"+g.size/2+"px"}),g.params.cube.shadow)if(s())e.transform("translate3d(0px, "+(g.width/2+g.params.cube.shadowOffset)+"px, "+-g.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+g.params.cube.shadowScale+")");else{var f=Math.abs(a)-90*Math.floor(Math.abs(a)/90),h=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),w=g.params.cube.shadowScale,y=g.params.cube.shadowScale/h,b=g.params.cube.shadowOffset;e.transform("scale3d("+w+", 1, "+y+") translate3d(0px, "+(g.height/2+b)+"px, "+-g.height/2/y+"px) rotateX(-90deg)")}var x=g.isSafari||g.isUiWebView?-g.size/2:0;g.wrapper.transform("translate3d(0px,0,"+x+"px) rotateX("+(s()?0:a)+"deg) rotateY("+(s()?-a:0)+"deg)")},setTransition:function(e){g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),g.params.cube.shadow&&!s()&&g.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=g.translate,a=s()?-e+g.width/2:-e+g.height/2,t=s()?g.params.coverflow.rotate:-g.params.coverflow.rotate,r=g.params.coverflow.depth,i=0,n=g.slides.length;n>i;i++){var o=g.slides.eq(i),l=g.slidesSizesGrid[i],d=o[0].swiperSlideOffset,p=(a-d-l/2)/l*g.params.coverflow.modifier,u=s()?t*p:0,c=s()?0:t*p,m=-r*Math.abs(p),f=s()?0:g.params.coverflow.stretch*p,h=s()?g.params.coverflow.stretch*p:0;Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var w="translate3d("+h+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(w),o[0].style.zIndex=-Math.abs(Math.round(p))+1,g.params.coverflow.slideShadows){var y=o.find(s()?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),b=o.find(s()?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===y.length&&(y=v('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),o.append(y)),0===b.length&&(b=v('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),o.append(b)),y.length&&(y[0].style.opacity=p>0?p:0),b.length&&(b[0].style.opacity=-p>0?-p:0)}}if(g.browser.ie){var x=g.wrapper[0].style;x.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},g.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,a){if("undefined"!=typeof e&&("undefined"==typeof a&&(a=!0),0!==g.slides.length)){var t=g.slides.eq(e),r=t.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!t.hasClass("swiper-lazy")||t.hasClass("swiper-lazy-loaded")||t.hasClass("swiper-lazy-loading")||r.add(t[0]),0!==r.length&&r.each(function(){var e=v(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),s=e.attr("data-src");g.loadImage(e[0],s||r,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(e.attr("src",s),e.removeAttr("data-src")),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),t.find(".swiper-lazy-preloader, .preloader").remove(),g.params.loop&&a){var i=t.attr("data-swiper-slide-index");if(t.hasClass(g.params.slideDuplicateClass)){var n=g.wrapper.children('[data-swiper-slide-index="'+i+'"]:not(.'+g.params.slideDuplicateClass+")");g.lazy.loadImageInSlide(n.index(),!1)}else{var o=g.wrapper.children("."+g.params.slideDuplicateClass+'[data-swiper-slide-index="'+i+'"]');g.lazy.loadImageInSlide(o.index(),!1)}}g.emit("onLazyImageReady",g,t[0],e[0])}),g.emit("onLazyImageLoad",g,t[0],e[0])})}},load:function(){if(g.params.watchSlidesVisibility)g.wrapper.children("."+g.params.slideVisibleClass).each(function(){g.lazy.loadImageInSlide(v(this).index())});else if(g.params.slidesPerView>1)for(var e=g.activeIndex;e<g.activeIndex+g.params.slidesPerView;e++)g.slides[e]&&g.lazy.loadImageInSlide(e);else g.lazy.loadImageInSlide(g.activeIndex);if(g.params.lazyLoadingInPrevNext){var a=g.wrapper.children("."+g.params.slideNextClass);a.length>0&&g.lazy.loadImageInSlide(a.index());var t=g.wrapper.children("."+g.params.slidePrevClass);t.length>0&&g.lazy.loadImageInSlide(t.index())}},onTransitionStart:function(){g.params.lazyLoading&&(g.params.lazyLoadingOnTransitionStart||!g.params.lazyLoadingOnTransitionStart&&!g.lazy.initialImageLoaded)&&g.lazy.load()},onTransitionEnd:function(){g.params.lazyLoading&&!g.params.lazyLoadingOnTransitionStart&&g.lazy.load()}},g.scrollbar={set:function(){if(g.params.scrollbar){var e=g.scrollbar;e.track=v(g.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=v('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=s()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=g.size/g.virtualSize,e.moveDivider=e.divider*(e.trackSize/g.size),e.dragSize=e.trackSize*e.divider,s()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.track[0].style.display=e.divider>=1?"none":"",g.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(g.params.scrollbar){var e,a=g.scrollbar,t=(g.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*g.progress,g.rtl&&s()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),s()?(a.drag.transform(g.support.transforms3d?"translate3d("+e+"px, 0, 0)":"translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(a.drag.transform(g.support.transforms3d?"translate3d(0px, "+e+"px, 0)":"translateY("+e+"px)"),a.drag[0].style.height=t+"px"),g.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){g.params.scrollbar&&g.scrollbar.drag.transition(e)}},g.controller={setTranslate:function(e,t){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-g.translate:g.translate,s=(a.maxTranslate()-a.minTranslate())/(g.maxTranslate()-g.minTranslate()),i=(e-g.minTranslate())*s+a.minTranslate(),g.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,g),a.updateActiveIndex()}var s,i,n=g.params.control;if(g.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&r(n[o]);else n instanceof a&&t!==n&&r(n)},setTransition:function(e,t){function r(a){a.setWrapperTransition(e,g),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&a.onTransitionEnd()}))}var s,i=g.params.control;if(g.isArray(i))for(s=0;s<i.length;s++)i[s]!==t&&i[s]instanceof a&&r(i[s]);else i instanceof a&&t!==i&&r(i)}},g.hashnav={init:function(){if(g.params.hashnav){g.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=g.slides.length;r>t;t++){var s=g.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(g.params.slideDuplicateClass)){var n=s.index();g.slideTo(n,a,g.params.runCallbacksOnInit,!0)}}}},setHash:function(){g.hashnav.initialized&&g.params.hashnav&&(document.location.hash=g.slides.eq(g.activeIndex).attr("data-hash")||"")}},g.disableKeyboardControl=function(){v(document).off("keydown",l)},g.enableKeyboardControl=function(){v(document).on("keydown",l)},g._wheelEvent=!1,g._lastWheelScrollTime=(new window.Date).getTime(),g.params.mousewheelControl){if(void 0!==document.onmousewheel&&(g._wheelEvent="mousewheel"),!g._wheelEvent)try{new window.WheelEvent("wheel"),g._wheelEvent="wheel"}catch(G){}g._wheelEvent||(g._wheelEvent="DOMMouseScroll")}g.disableMousewheelControl=function(){return g._wheelEvent?(g.container.off(g._wheelEvent,d),!0):!1},g.enableMousewheelControl=function(){return g._wheelEvent?(g.container.on(g._wheelEvent,d),!0):!1},g.parallax={setTranslate:function(){g.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){p(this,g.progress)}),g.slides.each(function(){var e=v(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);p(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=g.params.speed),g.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=v(this),t=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(t=0),a.transition(t)})}},g._plugins=[];for(var B in g.plugins){var A=g.plugins[B](g,g.params[B]);A&&g._plugins.push(A)}return g.callPlugins=function(e){for(var a=0;a<g._plugins.length;a++)e in g._plugins[a]&&g._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},g.emitterEventListeners={},g.emit=function(e){g.params[e]&&g.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(g.emitterEventListeners[e])for(a=0;a<g.emitterEventListeners[e].length;a++)g.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);g.callPlugins&&g.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},g.on=function(e,a){return e=u(e),g.emitterEventListeners[e]||(g.emitterEventListeners[e]=[]),g.emitterEventListeners[e].push(a),g},g.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return g.emitterEventListeners[e]=[],g;if(g.emitterEventListeners[e]&&0!==g.emitterEventListeners[e].length){for(t=0;t<g.emitterEventListeners[e].length;t++)g.emitterEventListeners[e][t]===a&&g.emitterEventListeners[e].splice(t,1);return g}},g.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),g.off(e,t)};return g.on(e,t),g},g.a11y={makeFocusable:function(e){return e[0].tabIndex="0",e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(v(e.target).is(g.params.nextButton)?(g.onClickNext(e),g.a11y.notify(g.isEnd?g.params.lastSlideMsg:g.params.nextSlideMsg)):v(e.target).is(g.params.prevButton)&&(g.onClickPrev(e),g.a11y.notify(g.isBeginning?g.params.firstSlideMsg:g.params.prevSlideMsg)))},liveRegion:v('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=g.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(g.params.nextButton){var e=v(g.params.nextButton);g.a11y.makeFocusable(e),g.a11y.addRole(e,"button"),g.a11y.addLabel(e,g.params.nextSlideMsg)}if(g.params.prevButton){var a=v(g.params.prevButton);g.a11y.makeFocusable(a),g.a11y.addRole(a,"button"),g.a11y.addLabel(a,g.params.prevSlideMsg)}v(g.container).append(g.a11y.liveRegion)},destroy:function(){g.a11y.liveRegion&&g.a11y.liveRegion.length>0&&g.a11y.liveRegion.remove()}},g.init=function(){g.params.loop&&g.createLoop(),g.updateContainerSize(),g.updateSlidesSize(),g.updatePagination(),g.params.scrollbar&&g.scrollbar&&g.scrollbar.set(),"slide"!==g.params.effect&&g.effects[g.params.effect]&&(g.params.loop||g.updateProgress(),g.effects[g.params.effect].setTranslate()),g.params.loop?g.slideTo(g.params.initialSlide+g.loopedSlides,0,g.params.runCallbacksOnInit):(g.slideTo(g.params.initialSlide,0,g.params.runCallbacksOnInit),0===g.params.initialSlide&&(g.parallax&&g.params.parallax&&g.parallax.setTranslate(),g.lazy&&g.params.lazyLoading&&(g.lazy.load(),g.lazy.initialImageLoaded=!0))),g.attachEvents(),g.params.observer&&g.support.observer&&g.initObservers(),g.params.preloadImages&&!g.params.lazyLoading&&g.preloadImages(),g.params.autoplay&&g.startAutoplay(),g.params.keyboardControl&&g.enableKeyboardControl&&g.enableKeyboardControl(),g.params.mousewheelControl&&g.enableMousewheelControl&&g.enableMousewheelControl(),g.params.hashnav&&g.hashnav&&g.hashnav.init(),g.params.a11y&&g.a11y&&g.a11y.init(),g.emit("onInit",g)},g.cleanupStyles=function(){g.container.removeClass(g.classNames.join(" ")).removeAttr("style"),g.wrapper.removeAttr("style"),g.slides&&g.slides.length&&g.slides.removeClass([g.params.slideVisibleClass,g.params.slideActiveClass,g.params.slideNextClass,g.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),g.paginationContainer&&g.paginationContainer.length&&g.paginationContainer.removeClass(g.params.paginationHiddenClass),g.bullets&&g.bullets.length&&g.bullets.removeClass(g.params.bulletActiveClass),g.params.prevButton&&v(g.params.prevButton).removeClass(g.params.buttonDisabledClass),g.params.nextButton&&v(g.params.nextButton).removeClass(g.params.buttonDisabledClass),g.params.scrollbar&&g.scrollbar&&(g.scrollbar.track&&g.scrollbar.track.length&&g.scrollbar.track.removeAttr("style"),g.scrollbar.drag&&g.scrollbar.drag.length&&g.scrollbar.drag.removeAttr("style"))},g.destroy=function(e,a){g.detachEvents(),g.stopAutoplay(),g.params.loop&&g.destroyLoop(),a&&g.cleanupStyles(),g.disconnectObservers(),g.params.keyboardControl&&g.disableKeyboardControl&&g.disableKeyboardControl(),g.params.mousewheelControl&&g.disableMousewheelControl&&g.disableMousewheelControl(),g.params.a11y&&g.a11y&&g.a11y.destroy(),g.emit("onDestroy"),e!==!1&&(g=null)},g.init(),g}};a.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=(e.match(/(iPod)(.*OS\s([\d_]+))?/),!t&&e.match(/(iPhone\sOS)\s([\d_]+)/));return{ios:t||r||t,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],s=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var i,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(s=0;s<a.length;s++)r.push(a[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"==typeof a){if(this[0]){var t=this[0].getAttribute("data-"+e);return t?t:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,s){function i(e){var s=e.target;if(a(s).is(t))r.call(s,e);else for(var i=a(s).parents(),n=0;n<i.length;n++)a(i[n]).is(t)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,a,t,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function s(n){t(n),i.off(e,a,s,r)}var i=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),i.on(e,a,s,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,s=e.clientLeft||t.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+i-r,left:a.left+n-s}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},is:function(t){if(!this[0])return!1;var r,s;if("string"==typeof t){var i=this[0];if(i===document)return t===document;if(i===window)return t===window;if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.mozMatchesSelector)return i.mozMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(r=a(t),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}return void 0},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a;s.firstChild;)this[t].appendChild(s.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a,r=s.childNodes.length-1;r>=0;r--)this[t].insertBefore(s.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?a(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(a),i=0;i<s.length;i++)t.push(s[i]);return new e(t)},children:function(t){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)t?1===i[n].nodeType&&a(i[n]).is(t)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var s=a(arguments[e]);for(t=0;t<s.length;t++)r[r.length]=s[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),r=["jQuery","Zepto","Dom7"],s=0;s<r.length;s++)window[r[s]]&&e(window[r[s]]);var i;i="undefined"==typeof t?window.Dom7||window.Zepto||window.jQuery:t,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});

// Magnific Popup
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var S=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery",e=Boolean(a.fn.mfpFastClick);n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=T(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?T(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),f=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m),g=e?"mfpFastClick":"click";d[g](function(){n.prev()}),f[g](function(){n.next()}),n.isIE7&&(x("b",d[0],!1,!0),x("a",d[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),n.container.append(d.add(f))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowLeft&&e&&n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=S(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=S(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=S(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(w("ImageHasSize."+U,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),w("ElementParse."+U,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}(),A()});

// Instafeed
(function(){var e,t;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?d=["","random"]:d=this.options.sortBy.split("-"),p=d[0]==="least"?!0:!1;switch(d[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",p);break;case"liked":e.data=this._sortBy(e.data,"likes.count",p);break;case"commented":e.data=this._sortBy(e.data,"comments.count",p);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){a=e.data,this.options.limit!=null&&a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),n=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(a=this._filter(a,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){i="",o="",l="",v=document.createElement("div");for(m=0,b=a.length;m<b;m++)s=a[m],u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),o=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:u,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),i+=o;v.innerHTML=i,S=[].slice.call(v.childNodes);for(g=0,w=S.length;g<w;g++)h=S[g],n.appendChild(h)}else for(y=0,E=a.length;y<E;y++)s=a[y],f=document.createElement("img"),u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),f.src=u,this.options.links===!0?(t=document.createElement("a"),t.href=s.link,t.appendChild(f),n.appendChild(t)):n.appendChild(f);document.getElementById(this.options.target).appendChild(n),r=document.getElementsByTagName("head")[0],r.removeChild(document.getElementById("instafeed-fetcher")),c="instafeedCache"+this.unique,window[c]=void 0;try{delete window[c]}catch(x){}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!="string")throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!="number")throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!="number")throw new Error("No user specified. Use the 'userId' option.");if(typeof this.options.accessToken!="string")throw new Error("No access token. Use the 'accessToken' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=""+e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))i=n.match(r)[1],s=(o=this._getObjectProperty(t,i))!=null?o:"",n=n.replace(r,""+s);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],i=function(e){if(t(e))return n.push(e)};for(s=0,o=e.length;s<o;s++)r=e[s],i(r);return n},e}(),t=typeof exports!="undefined"&&exports!==null?exports:window,t.Instafeed=e}).call(this);


/*
 * Foundation Responsive Library
*/

(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var i = class_array.length;
    var head = $('head');

    while (i--) {
      if (head.has('.' + class_array[i]).length === 0) {
        head.append('<meta class="' + class_array[i] + '" />');
      }
    }
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) {
            return context;
          }
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) {
      arr.push('data');
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace);
    }
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        bind = function(){
          var $this = S(this),
              should_bind_events = !$this.data(self.attr_name(true) + '-init');
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

          if (should_bind_events) {
            self.events(this);
          }
        };

    if (S(this.scope).is('[' + this.attr_name() +']')) {
      bind.call(this.scope);
    } else {
      S('[' + this.attr_name() +']', this.scope).each(bind);
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

  window.matchMedia || (window.matchMedia = function() {
      "use strict";

      // For browsers that support matchMedium api such as IE 9 and webkit
      var styleMedia = (window.styleMedia || window.media);

      // For those that don't support matchMedium
      if (!styleMedia) {
          var style       = document.createElement('style'),
              script      = document.getElementsByTagName('script')[0],
              info        = null;

          style.type  = 'text/css';
          style.id    = 'matchmediajs-test';

          script.parentNode.insertBefore(style, script);

          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

          styleMedia = {
              matchMedium: function(media) {
                  var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                  if (style.styleSheet) {
                      style.styleSheet.cssText = text;
                  } else {
                      style.textContent = text;
                  }

                  // Test if media query is true or false
                  return info.width === '1px';
              }
          };
      }

      return function(media) {
          return {
              matches: styleMedia.matchMedium(media || 'all'),
              media: media || 'all'
          };
      };
  }());

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function(jQuery) {


  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( $ ));

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '5.5.2',

    media_queries : {
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global : {
      namespace : undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
              $.extend(true, this.libs[lib].settings, args[lib]);
            } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace : function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) {
            result = func.apply(context, args);
          }
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str);
          }
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) {
            p[1] = true;
          }
          if (/false/i.test(p[1])) {
            p[1] = false;
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        function pictures_has_height(images) {
          var pictures_number = images.length;

          for (var i = pictures_number - 1; i >= 0; i--) {
            if(images.attr('height') === undefined) {
              return false;
            };
          };

          return true;
        }

        if (unloaded === 0 || pictures_has_height(images)) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) {
          this.fidx = 0;
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match : function (mq) {
        return window.matchMedia(mq).matches;
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up : function () {
        return this.match(Foundation.media_queries.small);
      },

      is_medium_up : function () {
        return this.match(Foundation.media_queries.medium);
      },

      is_large_up : function () {
        return this.match(Foundation.media_queries.large);
      },

      is_xlarge_up : function () {
        return this.match(Foundation.media_queries.xlarge);
      },

      is_xxlarge_up : function () {
        return this.match(Foundation.media_queries.xxlarge);
      },

      is_small_only : function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_medium_only : function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_large_only : function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xxlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.accordion = {
    name : 'accordion',

    version : '5.5.2',

    settings : {
      content_class : 'content',
      active_class : 'active',
      multi_expand : false,
      toggleable : true,
      callback : function () {}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function (instance) {
      var self = this;
      var S = this.S;
      self.create(this.S(instance));

      S(this.scope)
      .off('.fndtn.accordion')
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > dd > a, [' + this.attr_name() + '] > li > a', function (e) {
        var accordion = S(this).closest('[' + self.attr_name() + ']'),
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,
            target = S('#' + this.href.split('#')[1]),
            aunts = $('> dd, > li', accordion),
            siblings = aunts.children('.' + settings.content_class),
            active_content = siblings.filter('.' + settings.active_class);

        e.preventDefault();

        if (accordion.attr(self.attr_name())) {
          siblings = siblings.add('[' + groupSelector + '] dd > ' + '.' + settings.content_class + ', [' + groupSelector + '] li > ' + '.' + settings.content_class);
          aunts = aunts.add('[' + groupSelector + '] dd, [' + groupSelector + '] li');
        }

        if (settings.toggleable && target.is(active_content)) {
          target.parent('dd, li').toggleClass(settings.active_class, false);
          target.toggleClass(settings.active_class, false);
          S(this).attr('aria-expanded', function(i, attr){
              return attr === 'true' ? 'false' : 'true';
          });
          settings.callback(target);
          target.triggerHandler('toggled', [accordion]);
          accordion.triggerHandler('toggled', [target]);
          return;
        }

        if (!settings.multi_expand) {
          siblings.removeClass(settings.active_class);
          aunts.removeClass(settings.active_class);
          aunts.children('a').attr('aria-expanded','false');
        }

        target.addClass(settings.active_class).parent().addClass(settings.active_class);
        settings.callback(target);
        target.triggerHandler('toggled', [accordion]);
        accordion.triggerHandler('toggled', [target]);
        S(this).attr('aria-expanded','true');
      });
    },

    create: function($instance) {
      var self = this,
          accordion = $instance,
          aunts = $('> .accordion-navigation', accordion),
          settings = accordion.data(self.attr_name(true) + '-init') || self.settings;

      aunts.children('a').attr('aria-expanded','false');
      aunts.has('.' + settings.content_class + '.' + settings.active_class).children('a').attr('aria-expanded','true');

      if (settings.multi_expand) {
        $instance.attr('aria-multiselectable','true');
      }
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
