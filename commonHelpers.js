import{S as u,i as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function f(i){return i.map(({largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:c,downloads:d})=>`
    
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${a}" 
            alt="${s}" 
            width="360"
            height="200" 
          />
        </a>
        <div class ="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${r}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${c}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${d}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const l={key:"44994533-ffbdcdb8322be43f4ecb62ad3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(i){return l.q=i,`https://pixabay.com/api/?${new URLSearchParams(l).toString()}`}function p(i){return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",captionSelector:"img",captionType:"attr"}),o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};o.searchForm.addEventListener("submit",g);function g(i){i.preventDefault();const a=i.currentTarget.elements.searchtext.value.toLowerCase().trim();o.gallery.innerHTML="",o.loader.classList.add("loader"),p(h(a)).then(s=>{o.loader.classList.remove("loader");const e=s.hits;e.length===0&&n(),o.gallery.insertAdjacentHTML("beforeend",f(e)),y.refresh()}).catch(n).finally(()=>o.searchForm.reset())}function n(i){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
