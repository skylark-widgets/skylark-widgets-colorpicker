/**
 * skylark-ui-colorpicker - The skylark color picker widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-colorpicker/
 * @license MIT
 */
!function(e,t){function o(e,t){if("."!==e[0])return e;var o=t.split("/"),a=e.split("/");o.pop();for(var r=0;r<a.length;r++)"."!=a[r]&&(".."==a[r]?o.pop():o.push(a[r]));return o.join("/")}var a=t.define,r=t.require,i="function"==typeof a&&a.amd,s=!i&&"undefined"!=typeof exports;if(!i&&!a){var l={};a=t.define=function(e,t,a){"function"==typeof a?(l[e]={factory:a,deps:t.map(function(t){return o(t,e)}),exports:null},r(e)):l[e]=a},r=t.require=function(e){if(!l.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var o=l[e];if(!o.exports){var a=[];o.deps.forEach(function(e){a.push(r(e))}),o.exports=o.factory.apply(t,a)}return o.exports}}if(!a)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(e(a,r),!i){var n=r("skylark-langx/skylark");s?module.exports=n:t.skylarkjs=n}}(function(e,t){e("skylark-ui-colorpicker/ColorPicker",["skylark-langx/skylark","skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/noder","skylark-utils-dom/eventer","skylark-utils-dom/finder","skylark-utils-dom/query","skylark-utils-color/colors","skylark-utils-color/Color","skylark-ui-swt/ui","skylark-ui-swt/Widget"],function(e,t,o,a,r,i,s,l,n,c,p){"use strict";function d(e,t,o,a){for(var r=[],i=0;i<e.length;i++){var c=e[i];if(c){var p=l.Color(c),d=p.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";d+=n.equals(t,c)?" sp-thumb-active":"";var u=p.toString(a.preferredFormat||"rgb"),f="background-color:"+p.toRgbString();r.push('<span title="'+u+'" data-color="'+p.toRgbString()+'" class="'+d+'"><span class="sp-thumb-inner" style="'+f+';" /></span>')}else{var h="sp-clear-display";r.push(s("<div />").append(s('<span data-color="" style="background-color:transparent;" class="'+h+'"></span>').attr("title",a.noColorSelectedText)).html())}}return"<div class='sp-cf "+o+"'>"+r.join("")+"</div>"}function u(){for(var e=0;e<C.length;e++)C[e]&&C[e].hide()}function f(e,o){var a=t.mixin({},b,e);return a.callbacks={move:k(a.move,o),change:k(a.change,o),show:k(a.show,o),hide:k(a.hide,o),beforeShow:k(a.beforeShow,o)},a}function h(e,a){function i(){if(X.showPaletteOnly&&(X.showPalette=!0),qe.text(X.showPaletteOnly?X.togglePaletteMoreText:X.togglePaletteLessText),X.palette){fe=X.palette.slice(0),he=t.isArray(fe[0])?fe:[fe],ge={};for(var e=0;e<he.length;e++)for(var o=0;o<he[e].length;o++){var a=n(he[e][o]).toRgbString();ge[a]=!0}}Pe.toggleClass("sp-flat",Y),Pe.toggleClass("sp-input-disabled",!X.showInput),Pe.toggleClass("sp-alpha-enabled",X.showAlpha),Pe.toggleClass("sp-clear-enabled",Qe),Pe.toggleClass("sp-buttons-disabled",!X.showButtons),Pe.toggleClass("sp-palette-buttons-disabled",!X.togglePaletteOnly),Pe.toggleClass("sp-palette-disabled",!X.showPalette),Pe.toggleClass("sp-palette-only",X.showPaletteOnly),Pe.toggleClass("sp-initial-disabled",!X.showInitial),Pe.addClass(X.className).addClass(X.containerClassName),L()}function c(){function e(e){return e.data&&e.data.ignore?(j(s(e.target).closest(".sp-thumb-el").data("color")),R()):(j(s(e.target).closest(".sp-thumb-el").data("color")),R(),X.hideAfterPaletteSelect?(H(!0),I()):H()),!1}if(o.isIE&&Pe.find("*:not(input)").attr("unselectable","on"),i(),_e&&be.after(Ke).hide(),Qe||Re.hide(),Y)be.after(Pe).hide();else{var t="parent"===X.appendTo?be.parent():s(X.appendTo);1!==t.length&&(t=s("body")),t.append(Pe)}p(),We.on("click.ColorPicker touchstart.ColorPicker",function(e){Ce||M(),e.stopPropagation(),s(e.target).is("input")||e.preventDefault()}),(be.is(":disabled")||X.disabled===!0)&&B(),Pe.click(v),Oe.change(T),Oe.on("paste",function(){setTimeout(T,1)}),Oe.keydown(function(e){13==e.keyCode&&T()}),De.text(X.cancelText),De.on("click.ColorPicker",function(e){e.stopPropagation(),e.preventDefault(),O(),I()}),Re.attr("title",X.clearText),Re.on("click.ColorPicker",function(e){e.stopPropagation(),e.preventDefault(),Je=!0,R(),Y&&H(!0)}),Ne.text(X.chooseText),Ne.on("click.ColorPicker",function(e){e.stopPropagation(),e.preventDefault(),o.isIE&&Oe.is(":focus")&&Oe.trigger("change"),D()&&(H(!0),I())}),qe.text(X.showPaletteOnly?X.togglePaletteMoreText:X.togglePaletteLessText),qe.on("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),X.showPaletteOnly=!X.showPaletteOnly,X.showPaletteOnly||Y||Pe.css("left","-="+(xe.outerWidth(!0)+5)),i()}),m(Fe,function(e,t,o){ue=e/se,Je=!1,o.shiftKey&&(ue=Math.round(10*ue)/10),R()},b,S),m(Me,function(e,t){ce=parseFloat(t/re),Je=!1,X.showAlpha||(ue=1),R()},b,S),m(Se,function(e,t,o){if(o.shiftKey){if(!we){var a=pe*te,r=oe-de*oe,i=Math.abs(e-a)>Math.abs(t-r);we=i?"x":"y"}}else we=null;var s=!we||"x"===we,l=!we||"y"===we;s&&(pe=parseFloat(e/te)),l&&(de=parseFloat((oe-t)/oe)),Je=!1,X.showAlpha||(ue=1),R()},b,S),Ve?(j(Ve),N(),Ye=X.preferredFormat||n(Ve).format,h(Ve)):N(),Y&&E();var a=o.isIE?"mousedown.ColorPicker":"click.ColorPicker touchstart.ColorPicker";je.on(a,".sp-thumb-el",e),Ae.on(a,".sp-thumb-el:nth-child(1)",{ignore:!0},e)}function p(){if(J&&window.localStorage){try{var e=window.localStorage[J].split(",#");e.length>1&&(delete window.localStorage[J],t.each(e,function(e,t){h(t)}))}catch(o){}try{ve=window.localStorage[J].split(";")}catch(o){}}}function h(e){if(G){var o=n(e).toRgbString();if(!ge[o]&&t.inArray(o,ve)===-1)for(ve.push(o);ve.length>ke;)ve.shift();if(J&&window.localStorage)try{window.localStorage[J]=ve.join(";")}catch(a){}}}function k(){var e=[];if(X.showPalette)for(var t=0;t<ve.length;t++){var o=n(ve[t]).toRgbString();ge[o]||e.push(ve[t])}return e.reverse().slice(0,X.maxSelectionSize)}function w(){var e=A(),o=t.map(he,function(t,o){return d(t,e,"sp-palette-row sp-palette-row-"+o,X)});p(),ve&&o.push(d(k(),e,"sp-palette-row sp-palette-row-selection",X)),je.html(o.join(""))}function y(){if(X.showInitial){var e=Xe,t=A();Ae.html(d([e,t],t,"sp-palette-row-initial",X))}}function b(){(oe<=0||te<=0||re<=0)&&L(),ee=!0,Pe.addClass(me),we=null,be.trigger("dragstart.ColorPicker",[A()])}function S(){ee=!1,Pe.removeClass(me),be.trigger("dragstop.ColorPicker",[A()])}function T(){var e=Oe.val();if(null!==e&&""!==e||!Qe){var t=n(e);t.isValid()?(j(t),R(),H()):Oe.addClass("sp-validation-error")}else j(null),R(),H()}function M(){$?I():E()}function E(){var e=r.create("beforeShow.ColorPicker");return $?void L():(be.trigger(e,[A()]),void(U.beforeShow(A())===!1||e.isDefaultPrevented()||(u(),$=!0,s(ye).on("keydown.ColorPicker",z),s(ye).on("click.ColorPicker",F),s(window).on("resize.ColorPicker",Z),Ke.addClass("sp-active"),Pe.removeClass("sp-hidden"),L(),N(),Xe=A(),y(),U.show(Xe),be.trigger("show.ColorPicker",[Xe]))))}function z(e){27===e.keyCode&&I()}function F(e){2!=e.button&&(ee||(Ge?H(!0):O(),I()))}function I(){$&&!Y&&($=!1,s(ye).off("keydown.ColorPicker",z),s(ye).off("click.ColorPicker",F),s(window).off("resize.ColorPicker",Z),Ke.removeClass("sp-active"),Pe.addClass("sp-hidden"),U.hide(A()),be.trigger("hide.ColorPicker",[A()]))}function O(){j(Xe,!0),H(!0)}function j(e,t){if(n.equals(e,A()))return void N();var o,a;!e&&Qe?Je=!0:(Je=!1,o=l.Color(e),a=o.toHsv(),ce=a.h%360/360,pe=a.s,de=a.v,ue=a.a),N(),o&&o.isValid()&&!t&&(Ye=X.preferredFormat||o.getFormat())}function A(e){return e=e||{},Qe&&Je?null:n.fromRatio({h:ce,s:pe,v:de,a:Math.round(1e3*ue)/1e3},{format:e.format||Ye})}function D(){return!Oe.hasClass("sp-validation-error")}function R(){N(),U.move(A()),be.trigger("move.ColorPicker",[A()])}function N(){Oe.removeClass("sp-validation-error"),q();var e=n.fromRatio({h:ce,s:1,v:1});Se.css("background-color",e.toHexString());var t=Ye;ue<1&&(0!==ue||"name"!==t)&&("hex"!==t&&"hex3"!==t&&"hex6"!==t&&"name"!==t||(t="rgb"));var a=A({format:t}),r="";if(Be.removeClass("sp-clear-display"),Be.css("background-color","transparent"),!a&&Qe)Be.addClass("sp-clear-display");else{var i=a.toHexString(),s=a.toRgbString();if(Be.css("background-color",s),X.showAlpha){var l=a.toRgb();l.a=0;var c=n(l).toRgbString(),p="linear-gradient(left, "+c+", "+i+")";o.isIE?ze.css("filter",n(c).toFilter({gradientType:1},i)):(ze.css("background","-webkit-"+p),ze.css("background","-moz-"+p),ze.css("background","-ms-"+p),ze.css("background","linear-gradient(to right, "+c+", "+i+")"))}r=a.toString(t)}X.showInput&&Oe.val(r),X.showPalette&&w(),y()}function q(){var e=pe,t=de;if(Qe&&Je)Ie.hide(),Ee.hide(),Te.hide();else{Ie.show(),Ee.show(),Te.show();var o=e*te,a=oe-t*oe;o=Math.max(-ae,Math.min(te-ae,o-ae)),a=Math.max(-ae,Math.min(oe-ae,a-ae)),Te.css({top:a+"px",left:o+"px"});var r=ue*se;Ie.css({left:r-le/2+"px"});var i=ce*re;Ee.css({top:i-ne+"px"})}}function H(e){var t=A(),o="",a=!n.equals(t,Xe);t&&(o=t.toString(Ye),h(t)),He&&be.val(o),e&&a&&(U.change(t),be.trigger("change",[t]))}function L(){$&&(te=Se.width(),oe=Se.height(),ae=Te.height(),ie=Me.width(),re=Me.height(),ne=Ee.height(),se=Fe.width(),le=Ie.width(),Y||(Pe.css("position","absolute"),X.offset?Pe.offset(X.offset):Pe.offset(g(Pe,We))),q(),X.showPalette&&w(),be.trigger("reflow.ColorPicker"))}function _(){be.show(),We.off("click.ColorPicker touchstart.ColorPicker"),Pe.remove(),Ke.remove(),C[Ue.id]=null}function K(e,o){return void 0===e?t.mixin({},X):void 0===o?X[e]:(X[e]=o,"preferredFormat"===e&&(Ye=X.preferredFormat),void i())}function W(){Ce=!1,be.attr("disabled",!1),We.removeClass("sp-disabled")}function B(){I(),Ce=!0,be.attr("disabled",!0),We.addClass("sp-disabled")}function V(e){X.offset=e,L()}var X=f(a,e),Y=X.flat,G=X.showSelectionPalette,J=X.localStorageKey,Q=X.theme,U=X.callbacks,Z=t.debounce(L,10),$=!1,ee=!1,te=0,oe=0,ae=0,re=0,ie=0,se=0,le=0,ne=0,ce=0,pe=0,de=0,ue=1,fe=[],he=[],ge={},ve=X.selectionPalette.slice(0),ke=X.maxSelectionSize,me="sp-dragging",we=null,ye=e.ownerDocument,be=(ye.body,s(e)),Ce=!1,Pe=s(x,ye).addClass(Q),xe=Pe.find(".sp-picker-container"),Se=Pe.find(".sp-color"),Te=Pe.find(".sp-dragger"),Me=Pe.find(".sp-hue"),Ee=Pe.find(".sp-slider"),ze=Pe.find(".sp-alpha-inner"),Fe=Pe.find(".sp-alpha"),Ie=Pe.find(".sp-alpha-handle"),Oe=Pe.find(".sp-input"),je=Pe.find(".sp-palette"),Ae=Pe.find(".sp-initial"),De=Pe.find(".sp-cancel"),Re=Pe.find(".sp-clear"),Ne=Pe.find(".sp-choose"),qe=Pe.find(".sp-palette-toggle"),He=be.is("input"),Le=He&&"color"===be.attr("type")&&inputTypeColorSupport(),_e=He&&!Y,Ke=_e?s(P).addClass(Q).addClass(X.className).addClass(X.replacerClassName):s([]),We=_e?Ke:be,Be=Ke.find(".sp-preview-inner"),Ve=X.color||He&&be.val(),Xe=!1,Ye=X.preferredFormat,Ge=!X.showButtons||X.clickoutFiresChange,Je=!Ve,Qe=X.allowEmpty&&!Le;c();var Ue={show:E,hide:I,toggle:M,reflow:L,option:K,enable:W,disable:B,offset:V,set:function(e){j(e),H()},get:A,destroy:_,container:Pe};return Ue.id=C.push(Ue)-1,Ue}function g(e,t){var o=0,a=e.outerWidth(),r=e.outerHeight(),i=t.outerHeight(),l=e[0].ownerDocument,n=l.documentElement,c=n.clientWidth+s(l).scrollLeft(),p=n.clientHeight+s(l).scrollTop(),d=t.offset(),u=d.left,f=d.top;return f+=i,u-=Math.min(u,u+a>c&&c>a?Math.abs(u+a-c):0),f-=Math.min(f,f+r>p&&p>r?Math.abs(r+i-o):o),{top:f,bottom:d.bottom,left:u,right:d.right,width:d.width,height:d.height}}function v(e){e.stopPropagation()}function k(e,t){var o=Array.prototype.slice,a=o.call(arguments,2);return function(){return e.apply(t,a.concat(o.call(arguments)))}}function m(e,t,a,r){function i(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1}function l(a){if(d){if(o.isIE&&p.documentMode<9&&!a.button)return c();var r=a.originalEvent&&a.originalEvent.touches&&a.originalEvent.touches[0],s=r&&r.pageX||a.pageX,l=r&&r.pageY||a.pageY,n=Math.max(0,Math.min(s-u.left,h)),v=Math.max(0,Math.min(l-u.top,f));g&&i(a),t.apply(e,[n,v,a])}}function n(t){var o=t.which?3==t.which:2==t.button;o||d||a.apply(e,arguments)!==!1&&(d=!0,f=s(e).height(),h=s(e).width(),u=s(e).offset(),s(p).on(v),s(p.body).addClass("sp-dragging"),l(t),i(t))}function c(){d&&(s(p).off(v),s(p.body).removeClass("sp-dragging"),setTimeout(function(){r.apply(e,arguments)},0)),d=!1}t=t||function(){},a=a||function(){},r=r||function(){};var p=document,d=!1,u={},f=0,h=0,g="ontouchstart"in window,v={};v.selectstart=i,v.dragstart=i,v["touchmove mousemove"]=l,v["touchend mouseup"]=c,s(e).on("touchstart mousedown",n)}function w(e,o){if("string"==typeof e){var a=this,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=C[s(this).data(T)];if(t){var o=t[e];if(!o)throw new Error("skylark-ui-colorpicker: no such method: '"+e+"'");"get"==e?a=t.get():"container"==e?a=t.container:"option"==e?a=t.option.apply(t,r):"destroy"==e?(t.destroy(),s(this).removeData(T)):o.apply(t,r)}}),a}return this.colorPicker("destroy").each(function(){var o=t.mixin({},s(this).data(),e),a=S(this,o);s(this).data(T,a.id)})}var y=t.noop,b={beforeShow:y,move:y,change:y,show:y,hide:y,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},C=[],P=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),x=function(){var e="";if(o.isIE)for(var t=1;t<=6;t++)e+="<div class='sp-"+t+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",e,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),S=t.Evented.inherit({klassName:"ColorPicker",init:h}),T="ColorPicker.id";return S.load=!0,S.loadOpts={},S.draggable=m,S.defaults=b,S.localization={},S.palettes={},s.fn.colorPicker=w,S}),e("skylark-ui-colorpicker/i18n/texts_ja",["../ColorPicker"],function(e){var t=e.localization.ja={cancelText:"中止",chooseText:"選択"};return t}),e("skylark-ui-colorpicker/i18n/texts_zh-cn",["../ColorPicker"],function(e){var t=e.localization["zh-cn"]={cancelText:"取消",chooseText:"选择",clearText:"清除",togglePaletteMoreText:"更多选项",togglePaletteLessText:"隐藏",noColorSelectedText:"尚未选择任何颜色"};return t}),e("skylark-ui-colorpicker/i18n/texts_zh-tw",["../ColorPicker"],function(e){var t=e.localization["zh-tw"]={cancelText:"取消",chooseText:"選擇",clearText:"清除",togglePaletteMoreText:"更多選項",togglePaletteLessText:"隱藏",noColorSelectedText:"尚未選擇任何顏色"};return t}),e("skylark-ui-colorpicker/main",["./ColorPicker","./i18n/texts_ja","./i18n/texts_zh-cn","./i18n/texts_zh-tw"],function(e){return e}),e("skylark-ui-colorpicker",["skylark-ui-colorpicker/main"],function(e){return e})},this);
//# sourceMappingURL=sourcemaps/skylark-ui-colorpicker.js.map
