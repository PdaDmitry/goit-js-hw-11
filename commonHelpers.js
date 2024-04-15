import{S as d,i as p}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class g{constructor(){this.KEY="42263617-81d7156b9f7b88cd7b1016c2a"}getImages(n){const r=`https://pixabay.com/api/?key=${this.KEY}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(i=>{if(i.ok)return i.json();throw new Error(i.status)})}}function y(){return`
  <form class="form">
    <input type="text" name="picture" placeholder="Search images..." />
    <button type="submit">Search</button>
  </form>
  <span class="loader"></span>
  <ul class="gallery"></ul>`}function h(s){return s.map(r=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:u,comments:m,downloads:f}=r;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${e}"
      alt=""
      title="${t}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${o}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${u}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${m}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${f}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const b=y(),L=document.querySelector("body");L.insertAdjacentHTML("afterbegin",b);const q=document.querySelector("form"),a=document.querySelector(".loader");a.classList.add("is-hidden");const l=document.querySelector(".gallery"),S=document.querySelector("input");S.classList.add("input");const w=document.querySelector("button");w.classList.add("btn-search");const $=new g,v=new d(".gallery a");function c(s){return p.show({message:s,messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}q.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML="";let n=s.target.elements.picture.value.trim();if(!n)return s.target.reset(),c("The form field must be filled in!");a.classList.remove("is-hidden"),$.getImages(n).then(r=>{r.hits.length===0&&c("Sorry, there are no images matching your search query. Please try again!");const i=h(r.hits);l.innerHTML=i,v.refresh()}).catch(r=>{console.log(r)}).finally(()=>{a.classList.add("is-hidden"),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
