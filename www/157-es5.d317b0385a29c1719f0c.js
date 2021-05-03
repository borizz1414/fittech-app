function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{edcM:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_split_pane",(function(){return a}));var n=t("54nT");t("AfW+");var s={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},a=function(){function e(i){_classCallCheck(this,e),Object(n.k)(this,i),this.visible=!1,this.disabled=!1,this.when=s.lg,this.ionSplitPaneVisible=Object(n.e)(this,"ionSplitPaneVisible",7)}return _createClass(e,[{key:"visibleChanged",value:function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)}},{key:"connectedCallback",value:function(){this.styleChildren(),this.updateState()}},{key:"disconnectedCallback",value:function(){this.rmL&&(this.rmL(),this.rmL=void 0)}},{key:"updateState",value:function(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var t=s[i]||i;if(0!==t.length){if(window.matchMedia){var n=function(i){e.visible=i.matches},a=window.matchMedia(t);a.addListener(n),this.rmL=function(){return a.removeListener(n)},this.visible=a.matches}}else this.visible=!1}else this.visible=i}}},{key:"isPane",value:function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains("split-pane-side")}},{key:"styleChildren",value:function(){for(var e=this.contentId,i=this.el.children,t=this.el.childElementCount,n=!1,s=0;s<t;s++){var a=i[s],o=void 0!==e&&a.id===e;if(o){if(n)return void console.warn("split pane cannot have more than one main node");n=!0}l(a,o)}n||console.warn("split pane does not have a specified main node")}},{key:"render",value:function(){var e,i=Object(n.d)(this);return Object(n.i)(n.a,{class:(e={},_defineProperty(e,i,!0),_defineProperty(e,"split-pane-".concat(i),!0),_defineProperty(e,"split-pane-visible",this.visible),e)},Object(n.i)("slot",null))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},{key:"style",get:function(){return":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-main),:host(.split-pane-visible) ::slotted(.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}"}}]),e}(),l=function(e,i){var t,n;i?(t="split-pane-main",n="split-pane-side"):(t="split-pane-side",n="split-pane-main");var s=e.classList;s.add(t),s.remove(n)}}}]);