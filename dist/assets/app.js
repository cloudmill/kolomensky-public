(()=>{var e,t={757:(e,t,n)=>{"use strict";n(849),n(490);var a=n(638);a((function(){a(".select__select").each((function(){var e=a(this),t=e.closest(".select-wrapper"),n=getComputedStyle(t[0]),o=a(this).data("select-placeholder");"static"===n.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var n="scroll.select2";a(e.target).parents().off(n),a(window).off(n);var o=t.find(".select2-dropdown");o.hide();var r=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(r)}),0)})),e.on("select2:closing",(function(n){n.preventDefault();var a=t.find(".select2-dropdown"),r=setTimeout((function(){t.css("z-index","");var n=t.find(".select2");n.addClass("closing"),n.removeClass("select2-container--open"),a.slideUp(500,(function(){var n=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(n)}),300)})),clearTimeout(r)}),0)}))}))}));var o=n(191),r=n(241),i=n(638);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(window).on("load",(function(){!function(){var e=i("[data-slider-id]");e.length&&e.each((function(){var e,t,n=i(this),a=n.data("slider-id"),o=n.data("slider-prev"),c=n.data("slider-next"),d=i('[data-slider-button="'.concat(o,'"]')),u=i('[data-slider-button="'.concat(c,'"]')),f=i("[data-slider-buttons]");if(f.length&&n.find(".swiper-slide").length<+f.data("slider-buttons")&&f.addClass("hidden"),n[0].hasAttribute("data-thumbs-slider")){var p=i('[data-thumbs-id="'.concat(a,'"]'));e=new r.Z(p[0],{direction:"vertical",slidesPerView:"auto",spaceBetween:8,on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,n){e.onclick=function(){t.slideTo(n)}}))}}})}var v={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:l({},1024,{spaceBetween:40})};switch(a){case 2:case"default-loop":v=s(s({},v),{},{loop:!0});break;case 11:case"m11":v={speed:800,parallax:!0,pagination:{el:'[data-swiper-pagination="'.concat(a,'"]'),type:"bullets"},on:{slideChange:function(t){var n=t.realIndex,a=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),a[n].classList.add("active"),e.slideTo(n)}}};break;case"recipe":v=s(s({},v),{},{spaceBetween:12,breakpoints:l({},1024,{spaceBetween:20})});break;case"main":v=s(s({},v),{},{loop:!0,autoplay:{delay:3e3},pagination:{el:'[data-swiper-pagination="'.concat(a,'"]'),type:"bullets"}});break;case"labels":v={slidesPerView:3,spaceBetween:0,breakpoints:{1024:{slidesPerView:6}}};break;case"labels2":v={loop:!0,spaceBetween:0}}t=new r.Z(n[0],v),d.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}));var t=new r.Z("#prod-slider-thumbs",{slidesPerView:"auto",spaceBetween:4,freeMode:!0,breakpoints:{1024:{spaceBetween:0}}});new r.Z("#prod-slider",{modules:[o.o3],navigation:{prevEl:"#prod-slider-prev",nextEl:"#prod-slider-next"},thumbs:{swiper:t}});var n=new r.Z("#principles-slider-thumbs",{slidesPerView:"auto",spaceBetween:4,breakpoints:{1024:{spaceBetween:8}}});new r.Z("#principles-slider",{modules:[o.o3],loop:!0,navigation:{prevEl:"#principles-slider-prev",nextEl:"#principles-slider-next"},thumbs:{swiper:n}})}()}));n(378),n(803),n(917);var d=n(638);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400};function m(e){var t=f({},v),n=e.data("fancy-button"),a=d('[data-fancy-modal="'.concat(n,'"]'));switch(n){case"ask-director":t.baseClass="modal-dark";break;case"container":t.animationEffect="right-left";break;case"filters":case"recipe":t.animationEffect="left";break;case"media":var o=e.find("[data-video-src]");if(o.length){var r=o.attr("data-video-src");a.addClass("video"),a.find("video").attr("src",r)}else{var i=e.find("img").attr("src");a.find("img").attr("src",i)}t.baseClass="modal-dark",t.afterClose=function(e,t){var n=d(t.src);n.removeClass("video"),n.find("video").removeAttr("src"),n.find("img").removeAttr("src")};break;case"catalog-menu":case"holding-menu":case"clients-menu":case"partners-menu":t.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg light"></div><div class="fancybox-stage"></div></div>',t.beforeShow=function(){d("[data-fancy-button=".concat(n,"]")).addClass("active")},t.beforeClose=function(){d("[data-fancy-button=".concat(n,"]")).removeClass("active")},d.fancybox.defaults=f(f({},d.fancybox.defaults),t),event.target.closest("[data-fancy-button]").classList.contains("active")?d.fancybox.close(a):d.fancybox.open(a);break;default:t=f({},v)}"catalog-menu"!==n&&"holding-menu"!==n&&"clients-menu"!==n&&"partners-menu"!==n&&(d.fancybox.defaults=f(f({},d.fancybox.defaults),t),d.fancybox.open(a))}d((function(){d("[data-fancy-button]").on("click",(function(e){e.preventDefault(),m(d(this))}))}));n(949),n(304),n(519),n(563),n(419);var b=n(638);b((function(){b("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru"),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),Inputmask({mask:"99.99.9999 - 99.99.9999",showMaskOnHover:!1}).mask("[data-mask-date]"),window.Parsley.addValidator("phone",{requirementType:"string",validateString:function(e){return 11===e.replaceAll(/\D/g,"").length},messages:{ru:"Заполните поле"}}),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(e){return!/[^a-zа-яё\s]/i.test(e)},messages:{ru:"Спецсимволы и цифры запрещены"}})}));var h=n(638);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h((function(){var e=h("[data-form]");0!==e.length&&e.each((function(){var e=h(this);e.on("submit",(function(t){t.preventDefault(),function(e){var t=e.data("form-id"),n=g(g({},v),{},{baseClass:"",animationEffect:"fade",afterClose:function(){},beforeClose:function(){!function(e){var t=e.querySelectorAll("[data-input]"),n=e.querySelector("[data-mask-phone]");e.reset(),t.forEach((function(e){e.dispatchEvent(new Event("input"))})),n&&(Inputmask.remove(n),n.value="",n.dispatchEvent(new Event("input")),n.blur(),setTimeout((function(){Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]")})))}(e[0]),e.parsley().reset()}});h.fancybox.defaults=g(g({},h.fancybox.defaults),n),h.fancybox.open(h("[data-response=".concat(t,"]")))}(e)}))}))}));n(743),n(783),n(29),n(332);var O=document.querySelector("[data-type=site-templ-path]");window.CONFIG=window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?{path:O?O.value:"/local/templates/main",debug:!0}:{path:"./",debug:!0}},378:(e,t,n)=>{var a=n(638);a((function(){window.addEventListener("click",(function(e){!function(e,t){var n=a(t),o=a(e.target);o.closest("[data-accordion-button]").length&&(o.closest(n).toggleClass("active"),o.closest(n).find("[data-accordion-dropdown]").eq(0).slideToggle())}(e,"[data-accordion]")}))}))},29:(e,t,n)=>{var a=n(638);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=t,this.fileList=n,this.files=[],this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.handlers(),this.input.appFile=this}},{key:"handlers",value:function(){var e=this;this.input.onchange=function(){var t,n=o(e.input.files);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.contains(a)||(e.files.push(a),e.createFileItem(a))}}catch(e){n.e(e)}finally{n.f()}},this.fileList.addEventListener("click",(function(t){var n=t.target;if(n.hasAttribute("data-file-delete")){window.dispatchEvent(new CustomEvent("deleteFile",{detail:{fileId:a(n).parents("[data-file-item]").find("[data-file-name]").text(),form:a(n).parents("form")}}));var o=n.closest("[data-file-item]"),r=o.querySelector("[data-file-name]").textContent;e.files=e.files.filter((function(e){return e.name!==r})),o.remove()}}))}},{key:"contains",value:function(e){var t=!1;return this.files.forEach((function(n){n.name!==e.name||(t=!0)})),t}},{key:"createFileItem",value:function(e){var t=document.createElement("div");t.classList.add("file-input__item"),t.setAttribute("data-file-item","");var n=['<div class="file-input__name" data-file-name="">',"".concat(e.name),"</div>",'<div class="file-input__img" data-file-delete="">',"</div>"].join("");t.innerHTML=n,this.fileList.append(t)}},{key:"setFiles",value:function(e){var t=this;e.forEach((function(e){t.createFileItem(e)}))}},{key:"clearFiles",value:function(){this.files=[],a(this.fileList).empty()}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-file-input]").forEach((function(e){var t=e.closest("[data-file]").querySelector("[data-file-files]");new c(e,t)}))}))},743:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-input]");e.length&&e.forEach((function(e){var t=e.closest("[data-input-parent]");e.oninput=function(){this.value?t.classList.add("filled"):t.classList.remove("filled")}}))}))},949:(e,t,n)=>{var a=n(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector('[data-fancy-modal="filters"]');if(e){var t=e.querySelectorAll("[data-filters-item]"),n=e.querySelector("[data-filters-accept]"),o=[];t.forEach((function(e){var t=e.getAttribute("data-filters-prop"),n=e.getAttribute("data-filters-item");e.onchange=function(){this[t]?o.includes(n)||o.push(n):o=o.filter((function(e){return e!==n}))}}));var r=document.querySelector("[data-filters-count]");n.onclick=function(){a.fancybox.close(a(e)),o.length?(r.classList.remove("hidden"),r.textContent=o.length):r.classList.add("hidden")}}}))},783:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("map");if(e)try{ymaps.ready((function(){var t=JSON.parse(e.getAttribute("data-map-center")),n=new ymaps.Map("map",{center:t||[55.72640629782733,37.58921549209585],zoom:11,controls:["smallMapDefaultSet"]},{maxZoom:22});if(e.hasAttribute("data-contacts-map")){var a=new ymaps.Placemark([55.669259,37.631768],{},{iconLayout:"default#image",iconImageHref:"".concat(window.CONFIG.path,"/assets/images/svg/office-placemark.svg"),iconImageSize:[40,40],iconImageOffset:[-20,-20],balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});n.geoObjects.add(a)}else{ymaps.geolocation.get({provider:"yandex",mapStateAutoApply:!0}).then((function(e){n.setCenter(e.geoObjects.position,12)}));var o=new ymaps.control.SearchControl({options:{provider:"yandex#search",size:"large"}});n.controls.add(o);var r=document.querySelectorAll("[data-map-search]");r.forEach((function(e){e.onclick=function(){if(!e.classList.contains("active")){var t=e.textContent;r.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active"),o.search(t)}}}))}n.YMap=n}))}catch(e){console.error(e)}}))},849:()=>{window.addEventListener("load",(function(){document.body.classList.remove("body--notransition")}))},332:(e,t,n)=>{var a=n(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-pin-image]"),t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;e.forEach((function(e){var n,o,r,i,c=e.querySelector("img"),s=c.closest("[data-pin-container]"),l=c.offsetTop,d=c.offsetLeft,u={x:null,y:null},f=function(){o=c.offsetWidth,r=c.offsetHeight,n=!0};c.complete?f():c.addEventListener("load",(function(){f()}));var p=function(e){n&&(i=!0,u=t?{x:e.touches[0].pageX-d,y:e.touches[0].pageY-l}:{x:e.pageX-d,y:e.pageY-l})},v=function(n){if(i){var c;t?(n.preventDefault(),c={x:n.touches[0].pageX-d,y:n.touches[0].pageY-l}):c={x:n.pageX-d,y:n.pageY-l};var f=c.x-u.x,p=c.y-u.y;u=c;var v=parseInt(a(e).css("top"),10)+p,m=parseInt(a(e).css("left"),10)+f;v>0&&(v=0),v<s.offsetHeight-r&&(v=s.offsetHeight-r),m>0&&(m=0),m<s.offsetWidth-o&&(m=s.offsetWidth-o),a(e).css({top:v+"px",left:m+"px"})}};t?(s.addEventListener("touchstart",(function(e){p(e)})),window.addEventListener("touchend",(function(){i=!1})),s.addEventListener("touchmove",(function(e){v(e)}))):(s.addEventListener("mousedown",(function(e){p(e)})),window.addEventListener("mouseup",(function(){i=!1})),s.addEventListener("mousemove",(function(e){v(e)})))}))}))},519:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-real-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),n=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,a){t.onclick=function(){if(!t.classList.contains("active")){var o=e.querySelector("[data-tabs-item].active"),r=e.querySelector("[data-tabs-block].active");o.classList.remove("active"),r.classList.remove("active"),t.classList.add("active"),n[a].classList.add("active")}}}))}))}))},803:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelector("[data-scroll-up]").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]"),t=document.querySelectorAll("[data-tabs-content]");e.length&&e.forEach((function(e){e.querySelectorAll("[data-tabs-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-tabs-item].active").classList.remove("active"),t.classList.add("active"))}}))})),t&&t.forEach((function(e){var t=e.getAttribute("data-tabs-content");document.querySelector('[data-tabs="'.concat(t,'"]')).addEventListener("click",(function(){setTimeout((function(){var n=document.querySelector('[data-tabs="'.concat(t,'"]')).querySelector("[data-tabs-item].active").getAttribute("data-tabs-item");e.querySelector("[data-tabs-content-item].active").classList.remove("active"),e.querySelector('[data-tabs-content-item="'.concat(n,'"]')).classList.add("active")}))}))}))}))}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,r]=e[d],c=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var d=s(a)}for(t&&t(n);l<i.length;l++)r=i[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[906,532],(()=>a(757)));o=a.O(o)})();