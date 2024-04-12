import{S as u}from"./assets/vendor-338edac8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class m{constructor(s){this.q=s,this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL=`https://pixabay.com/api/?key=${this.KEY}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`}getImages(){const s=this.URL;return fetch(s).then(n=>n.json())}}function p(){return`
  <form class="form">
    <input type="text" name="picture" placeholder="Search images..." />
    <button type="submit" data-search>Search</button>
  </form>
  <ul class="gallery"></ul>`}function f(a){return a.map(n=>{const{webformatURL:r,largeImageURL:e,tags:t,likes:i,views:o,comments:l,downloads:c}=n;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${e}"
      alt="${t}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${i}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${o}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${l}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${c}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const d=p(),y=document.querySelector("body");y.insertAdjacentHTML("afterbegin",d);const g=document.querySelector(".gallery"),h=document.querySelector("form"),b=document.querySelector("input");b.classList.add("input");const L=document.querySelector("button");L.classList.add("btn-search");h.addEventListener("submit",a=>{a.preventDefault();let s=a.target.elements.picture.value;new m(s).getImages().then(r=>{const e=f(r.hits);g.innerHTML=e,new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>{console.error("Error fetching data:",r)}),a.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
