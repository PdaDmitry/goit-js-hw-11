import{i as m,S as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();class f{constructor(s){this.q=s,this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL=`https://pixabay.com/api/?key=${this.KEY}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`}getImages(){const s=this.URL;return fetch(s).then(a=>a.json())}}function p(){return`
  <form class="form">
    <input type="text" name="picture" placeholder="Search images..." />
    <button type="submit" data-search>Search</button>
  </form>
  <span class="loader"></span>
  <ul class="gallery"></ul>`}function g(i){return i.map(a=>{const{webformatURL:r,largeImageURL:e,tags:t,likes:n,views:l,comments:c,downloads:u}=a;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${e}"
      alt=""
      title="${t}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${n}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${l}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${c}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${u}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const h=p(),y=document.querySelector("body");y.insertAdjacentHTML("afterbegin",h);const b=document.querySelector("form"),o=document.querySelector(".loader");o.classList.add("is-hidden");const L=document.querySelector(".gallery"),q=document.querySelector("input");q.classList.add("input");const S=document.querySelector("button");S.classList.add("btn-search");b.addEventListener("submit",i=>{i.preventDefault();let s=i.target.elements.picture.value;if(!s)return alert("The form field must be filled in!");let a=new f(s);o.classList.remove("is-hidden"),a.getImages().then(r=>{const e=g(r.hits);if(r.hits.length===0)throw new Error(m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"}));L.innerHTML=e,new d(".gallery a").refresh()}).catch(r=>{console.error(r)}).finally(()=>{o.classList.add("is-hidden")}),i.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
