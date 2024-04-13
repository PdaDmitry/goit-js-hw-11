import{S as d,i as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class p{constructor(s){this.q=s,this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL=`https://pixabay.com/api/?key=${this.KEY}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`}getImages(){const s=this.URL;return fetch(s).then(n=>n.json())}}function g(){return`
  <form class="form">
    <input type="text" name="picture" placeholder="Search images..." />
    <button type="submit">Search</button>
  </form>
  <span class="loader"></span>
  <ul class="gallery"></ul>`}function y(r){return r.map(n=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:a,views:c,comments:u,downloads:m}=n;return`<li class="gallery-item">
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
        <span class="item-quantity">${a}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${c}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${u}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${m}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const h=g(),L=document.querySelector("body");L.insertAdjacentHTML("afterbegin",h);const b=document.querySelector("form"),l=document.querySelector(".loader");l.classList.add("is-hidden");const o=document.querySelector(".gallery"),q=document.querySelector("input");q.classList.add("input");const S=document.querySelector("button");S.classList.add("btn-search");b.addEventListener("submit",r=>{r.preventDefault();let s=r.target.elements.picture.value.trim();if(!s)return o.innerHTML="",r.target.reset(),alert("The form field must be filled in!");let n=new p(s);l.classList.remove("is-hidden"),n.getImages().then(i=>{if(i.hits.length===0)throw o.innerHTML="",new Error;const e=y(i.hits);o.innerHTML=e,new d(".gallery a").refresh()}).catch(i=>{f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}).finally(()=>{l.classList.add("is-hidden"),r.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
