(()=>{var e,t={394:(e,t,a)=>{"use strict";a(849),a(490);var n=a(638);function o(){n(".select__select").each((function(){var e=n(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),o=n(this).data("select-placeholder"),i=n(this).attr("data-select-back");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";n(e.target).parents().off(a),n(window).off(a);var o=t.find(".select2-dropdown");o.hide();var i=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(i)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var n=t.find(".select2-dropdown"),i=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),n.slideUp(500,(function(){var a=setTimeout((function(){console.log(e),e&&(e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index","")),clearTimeout(a)}),300)})),clearTimeout(i)}),0)})),i&&e.on("change",(function(t){if(e[0].value===o)e.val(null).trigger("change"),e[0][0].setAttribute("value",""),e[0][0].setAttribute("disabled",""),e[0][0].setAttribute("selected","");else{var a=e[0][0];a.textContent=o,a.removeAttribute("disabled"),a.removeAttribute("selected"),a.setAttribute("value",o)}}))}))}n((function(){o()}));var i=a(191),r=a(241),c=a(638);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){var e=c("[data-slider-id]");e.length&&e.each((function(){var e,t,a,n=c(this),o=n.data("slider-id"),i=n.data("slider-prev"),s=n.data("slider-next"),u=c('[data-slider-button="'.concat(i,'"]')),f=c('[data-slider-button="'.concat(s,'"]'));if(n[0].hasAttribute("data-thumbs-slider")){var p=c('[data-thumbs-id="'.concat(o,'"]'));t=new r.Z(p[0],{direction:"vertical",slidesPerView:"auto",spaceBetween:8,on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,t){e.onclick=function(){a.slideTo(t)}}))}}})}var v={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:d({},1024,{spaceBetween:40})};switch(o){case 2:v=l(l({},v),{},{loop:!0});break;case 11:case"m11":v={speed:800,parallax:!0,pagination:{el:'[data-swiper-pagination="'.concat(o,'"]'),type:"bullets"},on:{slideChange:function(e){var a=e.realIndex,n=t.el.querySelectorAll("[data-thumb]");t.el.querySelector("[data-thumb].active").classList.remove("active"),n[a].classList.add("active"),t.slideTo(a)}}};break;case"recipe":v=l(l({},v),{},{spaceBetween:12,breakpoints:d({},1024,{spaceBetween:20})});break;case"default-loop":v=l(l({},v),{},{loop:!0,on:{init:function(){var e=n.data("buttons-id"),t=c('[data-slider-buttons="'.concat(e,'"]'));t.length&&(n.find(".swiper-slide").length<+t.data("min-count")&&t.addClass("hidden"))}}});break;case"main":v=l(l({},v),{},{loop:!0,autoplay:{delay:3e3},pagination:{el:'[data-swiper-pagination="'.concat(o,'"]'),type:"bullets"}});break;case"labels":v={loop:!0,slidesPerView:"auto",breakpoints:{1024:{slidesPerView:5,spaceBetween:20}}};break;case"labels3":d(e={loop:!0,slidesPerView:"auto"},"slidesPerView",2.5),d(e,"spaceBetween",4),d(e,"breakpoints",{1024:{slidesPerView:4,spaceBetween:40,initialSlide:1}}),v=e;break;case"labels2":v={loop:!0,spaceBetween:0};break;case"default":v=l(l({},v),{},{on:{init:function(){var e=n.data("buttons-id"),t=c('[data-slider-buttons="'.concat(e,'"]'));if(t.length){var a=n.find(".swiper-slide").length,o=t.data("min-count");console.log(o),a<+o&&t.addClass("hidden")}}}})}a=new r.Z(n[0],v),u.on("click",(function(){a.slidePrev()})),f.on("click",(function(){a.slideNext()}))}));new r.Z("#prod-slider-thumbs",{slidesPerView:"auto",spaceBetween:4,loop:!0,breakpoints:{1024:{slidesPerView:5,spaceBetween:20}},navigation:{prevEl:"#prod-slider-prev",nextEl:"#prod-slider-next"}});var t=new r.Z("#principles-slider-thumbs",{slidesPerView:"auto",spaceBetween:4,breakpoints:{1024:{spaceBetween:8}}});new r.Z("#principles-slider",{modules:[i.o3],loop:!0,navigation:{prevEl:"#principles-slider-prev",nextEl:"#principles-slider-next"},thumbs:{swiper:t}})}c(window).on("load",(function(){u()}));a(378),a(803),a(917);var f=a(638);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400};function h(e){var t=v({},b),a=e.data("fancy-button"),n=f('[data-fancy-modal="'.concat(a,'"]'));switch(a){case"ask-director":t.baseClass="modal-dark";break;case"container":t.animationEffect="right-left";break;case"filters":case"recipe":t.animationEffect="left";break;case"media":var o=e.find("[data-video-src]");if(o.length){var i=o.attr("data-video-src");n.addClass("video"),n.find("video").attr("src",i)}else{var r=e.find("img").attr("src");n.find("img").attr("src",r)}t.baseClass="modal-dark",t.afterClose=function(e,t){var a=f(t.src);a.removeClass("video"),a.find("video").removeAttr("src"),a.find("img").removeAttr("src")};break;case"catalog-menu":case"holding-menu":case"clients-menu":case"partners-menu":t.baseTpl='<div class="fancybox-container down" role="dialog" tabindex="-1"><div class="fancybox-bg light"></div><div class="fancybox-stage"></div></div>',t.beforeShow=function(){f("[data-fancy-button=".concat(a,"]")).addClass("active"),f(".body").addClass("unlock-scroll")},t.beforeClose=function(){f("[data-fancy-button=".concat(a,"]")).removeClass("active"),f(".body").removeClass("unlock-scroll")},f.fancybox.defaults=v(v({},f.fancybox.defaults),t),event.target.closest("[data-fancy-button]").classList.contains("active")?f.fancybox.close(n):f.fancybox.open(n);break;case"search-modal":(t=v({},b)).afterShow=function(){document.querySelector(".search-modal__input").focus()};break;default:t=v({},b)}"catalog-menu"!==a&&"holding-menu"!==a&&"clients-menu"!==a&&"partners-menu"!==a&&(f.fancybox.defaults=v(v({},f.fancybox.defaults),t),f.fancybox.open(n))}f((function(){f("[data-fancy-button]").on("click",(function(e){e.preventDefault(),h(f(this))}))}));a(949),a(304),a(519),a(563),a(419);var y=a(638);y((function(){y("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru"),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),Inputmask({mask:"99.99.9999 - 99.99.9999",showMaskOnHover:!1}).mask("[data-mask-date]"),window.Parsley.addValidator("phone",{requirementType:"string",validateString:function(e){return 11===e.replaceAll(/\D/g,"").length},messages:{ru:"Заполните поле"}}),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(e){return!/[^a-zа-яё\s]/i.test(e)},messages:{ru:"Спецсимволы и цифры запрещены"}})}));var w=a(638);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function x(e){var t=e.data("form-id"),a=O(O({},b),{},{baseClass:"",animationEffect:"fade",afterClose:function(){},beforeClose:function(){!function(e){var t=e.querySelectorAll("[data-input]"),a=e.querySelector("[data-mask-phone]");e.reset(),t.forEach((function(e){e.dispatchEvent(new Event("input"))})),a&&(Inputmask.remove(a),a.value="",a.dispatchEvent(new Event("input")),a.blur(),setTimeout((function(){Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]")})))}(e[0]),e.parsley().reset()}});w.fancybox.defaults=O(O({},w.fancybox.defaults),a),w.fancybox.open(w("[data-response=".concat(t,"]")))}w((function(){var e=w("[data-form]");0!==e.length&&e.each((function(){var e=w(this);e.on("submit",(function(t){t.preventDefault(),x(e)}))}))}));a(743),a(783),a(29),a(332);var E=a(638);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}E((function(){E("[data-type=form-backend]").on("submit",(function(e){e.preventDefault();var t=E(this),a=new FormData,n=t.find("input[type=file][data-get-field]");n.length>0&&n[0].files,t.find("[data-get-field]").each((function(e,t){var n=E(t),o=n.data("field");"file"===n.attr("type")&&files?E.each(files,(function(e,t){a.append("files[]",t)})):a.append(o,n.val())})),E.ajax({method:"post",url:t.attr("action"),data:a,processData:!1,contentType:!1,dataType:"json",success:function(e){e.success?x(t):alert(e.message)}})})),E(document).on("click","[data-type=showmore-btn]",(function(){var e=E(this),t=e.closest("[data-type=showmore-btn-container]"),a=t.data("showmore-content"),n=E(document).find("[data-type=showmore-list][data-showmore-content=".concat(a,"]")),o=e.attr("data-url");e.remove(),void 0!==o&&E.ajax({type:"GET",url:o,data:{ajax:!0},dataType:"html",success:function(e){var o=E(e).find("[data-type=showmore-list][data-showmore-content=".concat(a,"]")).find("[data-type=showmore-item]"),i=E(e).find("[data-type=showmore-btn-container][data-showmore-content=".concat(a,"]")).find("[data-type=showmore-btn]");n.append(o),t.append(i)}})})),E(document).on("change","[data-filter-type=select]",(function(){var e,t=E(this),a=t.data("filter-type"),n=E("[data-filter]"),i=t.data("filter-name");(e="checkbox"===a?t.is(":checked"):"select"===a?this.value:t.data("filter-value"))!==window.filters.data.filters[i]&&(window.filters.getData.many(i,e),n.css("pointer-events","none"),console.log("filters data"),console.log(Object.values(window.filters.data)),E.ajax({type:"GET",url:window.location.href,dataType:"html",data:window.filters.data,success:function(e){var a=E(e).find("[data-type=filter-container]");E("[data-type=filter-container]").replaceWith(E(a)),n.css("pointer-events","auto"),o(),t.data("filter-scroll")&&window.scroll(0,0)}}))})),E(document).on("click","[data-filter]",(function(){var e,t=E(this),a=t.data("filter-type"),n=E("[data-filter]"),i=t.data("filter-name");"select"!==t.data("filter-type")&&(e="checkbox"===a?t.is(":checked"):"select"===a?this.value():t.data("filter-value"))!==window.filters.data.filters[i]&&(window.filters.getData.many(i,e),n.css("pointer-events","none"),console.log("filters data"),console.log(Object.values(window.filters.data)),E.ajax({type:"GET",url:window.location.href,dataType:"html",data:window.filters.data,success:function(e){var a=E(e).find("[data-type=filter-container]");E("[data-type=filter-container]").replaceWith(E(a)),n.css("pointer-events","auto"),o(),t.data("filter-scroll")&&window.scroll(0,0)}}))})),E("[data-type=show-recipe]").on("click",(function(){var e=E(this),t=e.data("recipe-id"),a=E(document).find("[data-type=recipe-container]"),n=e.data("ajax-path");void 0!==S(t)&&E.ajax({method:"post",url:n,data:{id:t,ajax:!0},dataType:"html",success:function(e){a.replaceWith(e),u()}})}))})),window.filters={data:{filters:{},ajax:"filter"},getData:{one:function(e,t){t&&!window.filters.data.filters[e]||delete window.filters.data.filters[e],window.filters.data.filters[e]=t},many:function(e,t){window.filters.data.filters[e]||(window.filters.data.filters[e]={}),window.filters.data.filters[e][t]?(delete window.filters.data.filters[e][t],Object.keys(window.filters.data.filters[e]).length||delete window.filters.data.filters[e]):window.filters.data.filters[e]=t}}};var j=document.querySelector("[data-type=site-templ-path]");window.CONFIG=window.location.hostname&&"cloudmill.github.io"!==window.location.hostname?{path:j?j.value:"/local/templates/main",debug:!0}:{path:"./",debug:!0}},378:(e,t,a)=>{var n=a(638);n((function(){window.addEventListener("click",(function(e){!function(e,t){var a=n(t),o=n(e.target);o.closest("[data-accordion-button]").length&&(o.closest(a).toggleClass("active"),o.closest(a).find("[data-accordion-dropdown]").eq(0).slideToggle())}(e,"[data-accordion]")}))}))},29:(e,t,a)=>{var n=a(638);function o(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw r}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=t,this.fileList=a,this.files=[],this.init()}var t,a,i;return t=e,(a=[{key:"init",value:function(){this.handlers(),this.input.appFile=this}},{key:"handlers",value:function(){var e=this;this.input.onchange=function(){var t,a=o(e.input.files);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.contains(n)||(e.files.push(n),e.createFileItem(n))}}catch(e){a.e(e)}finally{a.f()}},this.fileList.addEventListener("click",(function(t){var a=t.target;if(a.hasAttribute("data-file-delete")){window.dispatchEvent(new CustomEvent("deleteFile",{detail:{fileId:n(a).parents("[data-file-item]").find("[data-file-name]").text(),form:n(a).parents("form")}}));var o=a.closest("[data-file-item]"),i=o.querySelector("[data-file-name]").textContent;e.files=e.files.filter((function(e){return e.name!==i})),o.remove()}}))}},{key:"contains",value:function(e){var t=!1;return this.files.forEach((function(a){a.name!==e.name||(t=!0)})),t}},{key:"createFileItem",value:function(e){var t=document.createElement("div");t.classList.add("file-input__item"),t.setAttribute("data-file-item","");var a=['<div class="file-input__name" data-file-name="">',"".concat(e.name),"</div>",'<div class="file-input__img" data-file-delete="">',"</div>"].join("");t.innerHTML=a,this.fileList.append(t)}},{key:"setFiles",value:function(e){var t=this;e.forEach((function(e){t.createFileItem(e)}))}},{key:"clearFiles",value:function(){this.files=[],n(this.fileList).empty()}}])&&r(t.prototype,a),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-file-input]").forEach((function(e){var t=e.closest("[data-file]").querySelector("[data-file-files]");new c(e,t)}))}))},743:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-input]");e.length&&e.forEach((function(e){var t=e.closest("[data-input-parent]");e.oninput=function(){this.value?t.classList.add("filled"):t.classList.remove("filled")}}))}))},949:(e,t,a)=>{var n=a(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector('[data-fancy-modal="filters"]');if(e){var t=e.querySelectorAll("[data-filters-item]"),a=e.querySelector("[data-filters-accept]"),o=[];t.forEach((function(e){var t=e.getAttribute("data-filters-prop"),a=e.getAttribute("data-filters-item");e.onchange=function(){this[t]?o.includes(a)||o.push(a):o=o.filter((function(e){return e!==a}))}}));var i=document.querySelector("[data-filters-count]");a.onclick=function(){n.fancybox.close(n(e)),o.length?(i.classList.remove("hidden"),i.textContent=o.length):i.classList.add("hidden")}}}))},783:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("map");if(e)try{ymaps.ready((function(){var t=JSON.parse(e.getAttribute("data-map-center")),a=new ymaps.Map("map",{center:t||[55.72640629782733,37.58921549209585],zoom:11,controls:["smallMapDefaultSet"]},{maxZoom:22});if(e.hasAttribute("data-contacts-map")){var n=new ymaps.Placemark([55.669259,37.631768],{},{iconLayout:"default#image",iconImageHref:"".concat(window.CONFIG.path,"/assets/images/svg/office-placemark.svg"),iconImageSize:[40,40],iconImageOffset:[-20,-20],balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});a.geoObjects.add(n)}else{ymaps.geolocation.get({provider:"yandex",mapStateAutoApply:!0}).then((function(e){a.setCenter(e.geoObjects.position,12)}));var o=new ymaps.control.SearchControl({options:{provider:"yandex#search",size:"large"}});a.controls.add(o);var i=document.querySelectorAll("[data-map-search]");i.forEach((function(e){e.onclick=function(){if(!e.classList.contains("active")){var t=e.textContent;i.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active"),o.search(t)}}}))}a.YMap=a}))}catch(e){console.error(e)}}))},849:()=>{window.addEventListener("load",(function(){document.body.classList.remove("body--notransition")}))},332:(e,t,a)=>{var n=a(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-pin-image]"),t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;e.forEach((function(e){var a,o,i,r,c=e.querySelector("img"),s=c.closest("[data-pin-container]"),l=c.offsetTop,d=c.offsetLeft,u={x:null,y:null},f=function(){o=c.offsetWidth,i=c.offsetHeight,a=!0};c.complete?f():c.addEventListener("load",(function(){f()}));var p=function(e){a&&(r=!0,u=t?{x:e.touches[0].pageX-d,y:e.touches[0].pageY-l}:{x:e.pageX-d,y:e.pageY-l})},v=function(a){if(r){var c;t?(a.preventDefault(),c={x:a.touches[0].pageX-d,y:a.touches[0].pageY-l}):c={x:a.pageX-d,y:a.pageY-l};var f=c.x-u.x,p=c.y-u.y;u=c;var v=parseInt(n(e).css("top"),10)+p,m=parseInt(n(e).css("left"),10)+f;v>0&&(v=0),v<s.offsetHeight-i&&(v=s.offsetHeight-i),m>0&&(m=0),m<s.offsetWidth-o&&(m=s.offsetWidth-o),n(e).css({top:v+"px",left:m+"px"})}};t?(s.addEventListener("touchstart",(function(e){p(e)})),window.addEventListener("touchend",(function(){r=!1})),s.addEventListener("touchmove",(function(e){v(e)}))):(s.addEventListener("mousedown",(function(e){p(e)})),window.addEventListener("mouseup",(function(){r=!1})),s.addEventListener("mousemove",(function(e){v(e)})))}))}))},519:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-real-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),a=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,n){t.onclick=function(){if(!t.classList.contains("active")){var o=e.querySelector("[data-tabs-item].active"),i=e.querySelector("[data-tabs-block].active");o.classList.remove("active"),i.classList.remove("active"),t.classList.add("active"),a[n].classList.add("active")}}}))}))}))},803:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelector("[data-scroll-up]").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]"),t=document.querySelectorAll("[data-tabs-content]");e.length&&e.forEach((function(e){e.querySelectorAll("[data-tabs-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-tabs-item].active").classList.remove("active"),t.classList.add("active"))}}))})),t&&t.forEach((function(e){var t=e.getAttribute("data-tabs-content");document.querySelector('[data-tabs="'.concat(t,'"]')).addEventListener("click",(function(){setTimeout((function(){var a=document.querySelector('[data-tabs="'.concat(t,'"]')).querySelector("[data-tabs-item].active").getAttribute("data-tabs-item");e.querySelector("[data-tabs-content-item].active").classList.remove("active"),e.querySelector('[data-tabs-content-item="'.concat(a,'"]')).classList.add("active")}))}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("[data-catalog-tabs]")&&window.addEventListener("click",(function(e){var t=e.target.closest("[data-catalog-item]");t&&(document.querySelector("[data-catalog-item].active").classList.remove("active"),t.classList.add("active"))}))}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,o,i)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,o,i]=e[d],c=!0,s=0;s<a.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(c=!1,i<r&&(r=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[r,c,s]=a,l=0;if(r.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(a);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[906,532],(()=>n(394)));o=n.O(o)})();