function asyncGeneratorStep(n,t,e,r,a,o,c){try{var i=n[o](c),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function c(n){asyncGeneratorStep(o,r,a,c,i,"next",n)}function i(n){asyncGeneratorStep(o,r,a,c,i,"throw",n)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XRsP:function(n,t,e){"use strict";e.r(t),e.d(t,"startHardwareBackButton",(function(){return r}));var r=function(){var n=document,t=!1;n.addEventListener("backbutton",(function(){if(!t){var e=[],r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,t){e.push({priority:n,handler:t})}}});if(n.dispatchEvent(r),e.length>0){var o,c=Number.MIN_SAFE_INTEGER;e.forEach((function(n){var t=n.priority,e=n.handler;t>=c&&(c=t,o=e)})),t=!0,a(o).then((function(){return t=!1}))}}}))},a=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=7;break}if(e=t(),n.t0=null!=e,!n.t0){n.next=7;break}return n.next=7,e;case 7:n.next=12;break;case 9:n.prev=9,n.t1=n.catch(0),console.error(n.t1);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()}}]);