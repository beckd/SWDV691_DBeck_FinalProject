(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{mLlG:function(e,a,t){"use strict";t.r(a),t.d(a,"ion_searchbar",function(){return c});var r=t("mLBW"),i=t("TJLY"),n=t("Jbqe"),o=t("EQwm"),s=t("IvgT");class c{constructor(e){Object(r.m)(this,e),this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.noAnimate=!0,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.disabled=!1,this.placeholder="Search",this.searchIcon="search",this.showCancelButton="never",this.spellcheck=!1,this.type="search",this.value="",this.onClearInput=e=>{this.ionClear.emit(),e&&(e.preventDefault(),e.stopPropagation()),setTimeout(()=>{""!==this.getValue()&&(this.value="",this.ionInput.emit())},64)},this.onCancelSearchbar=e=>{e&&(e.preventDefault(),e.stopPropagation()),this.ionCancel.emit(),this.onClearInput(),this.nativeInput&&this.nativeInput.blur()},this.onInput=e=>{const a=e.target;a&&(this.value=a.value),this.ionInput.emit(e)},this.onBlur=()=>{this.focused=!1,this.ionBlur.emit(),this.positionElements()},this.onFocus=()=>{this.focused=!0,this.ionFocus.emit(),this.positionElements()},this.ionInput=Object(r.d)(this,"ionInput",7),this.ionChange=Object(r.d)(this,"ionChange",7),this.ionCancel=Object(r.d)(this,"ionCancel",7),this.ionClear=Object(r.d)(this,"ionClear",7),this.ionBlur=Object(r.d)(this,"ionBlur",7),this.ionFocus=Object(r.d)(this,"ionFocus",7)}debounceChanged(){this.ionChange=Object(o.d)(this.ionChange,this.debounce)}valueChanged(){const e=this.nativeInput,a=this.getValue();e&&e.value!==a&&(e.value=a),this.ionChange.emit({value:a})}showCancelButtonChanged(){requestAnimationFrame(()=>{this.positionElements(),this.el.forceUpdate()})}componentDidLoad(){this.positionElements(),this.debounceChanged(),setTimeout(()=>{this.noAnimate=!1},300)}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}positionElements(){const e=this.getValue(),a=this.shouldAlignLeft,t=Object(r.e)(this),i=!this.animated||""!==e.trim()||!!this.focused;this.shouldAlignLeft=i,"ios"===t&&(a!==i&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const e=this.nativeInput;if(!e)return;const a="rtl"===document.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),t.removeAttribute("style");else{const r=document,i=r.createElement("span");i.innerHTML=Object(s.a)(this.placeholder)||"",r.body.appendChild(i);const n=i.offsetWidth;i.remove();const o="calc(50% - "+n/2+"px)",c="calc(50% - "+(n/2+30)+"px)";a?(e.style.paddingRight=o,t.style.marginRight=c):(e.style.paddingLeft=o,t.style.marginLeft=c)}}positionCancelButton(){const e="rtl"===document.dir,a=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),t=this.shouldShowCancelButton();if(a&&t!==this.isCancelVisible){const r=a.style;if(this.isCancelVisible=t,t)e?r.marginLeft="0":r.marginRight="0";else{const t=a.offsetWidth;t>0&&(e?r.marginLeft=-t+"px":r.marginRight=-t+"px")}}}getValue(){return this.value||""}hasValue(){return""!==this.getValue()}shouldShowCancelButton(){return!(h(this.showCancelButton)||l(this.showCancelButton)&&!this.focused)}hostData(){const e=this.animated&&i.b.getBoolean("animated",!0),a=Object(r.e)(this);return{role:"search","aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(n.a)(this.color),{[a]:!0,"searchbar-animated":e,"searchbar-disabled":this.disabled,"searchbar-no-animate":e&&this.noAnimate,"searchbar-has-value":this.hasValue(),"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused,"searchbar-should-show-cancel":this.shouldShowCancelButton()})}}__stencil_render(){const e=Object(r.e)(this),a=this.clearIcon||("ios"===e?"ios-close-circle":"md-close"),t=this.searchIcon,i=!h(this.showCancelButton)&&Object(r.i)("button",{"aria-label":"cancel",type:"button",tabIndex:"ios"!==e||this.shouldShowCancelButton()?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},Object(r.i)("div",null,"md"===e?Object(r.i)("ion-icon",{"aria-hidden":"true",mode:e,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText));return[Object(r.i)("div",{class:"searchbar-input-container"},Object(r.i)("input",{"aria-label":"search text",disabled:this.disabled,ref:e=>this.nativeInput=e,class:"searchbar-input",onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===e&&i,Object(r.i)("ion-icon",{mode:e,icon:t,lazy:!1,class:"searchbar-search-icon"}),Object(r.i)("button",{"aria-label":"reset",type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.onClearInput,onTouchStart:this.onClearInput},Object(r.i)("ion-icon",{"aria-hidden":"true",mode:e,icon:a,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===e&&i]}get el(){return Object(r.f)(this)}static get watchers(){return{debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}}render(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}"}}const h=e=>"never"===e||"false"===e||!1===e,l=e=>"focus"===e||"true"===e||!0===e||""===e}}]);