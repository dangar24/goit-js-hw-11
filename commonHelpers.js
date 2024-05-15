import{S as m,i as g}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const i={key:"43845947-8a1e30f8a3261d274f42ac52c",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},p="https://pixabay.com/api/",f=e=>{let s=`?key=${i.key}&q=${e}&image_type=${i.image_type}&orientation=${i.orientation}&safesearch=${i.safesearch}`;return fetch(`${p}${s}`).then(r=>{if(!r.ok)throw new Error("Запит виконався з помилкою");return r.json()})},h=document.querySelector(".img-list"),y=e=>{const s=e.map(r=>`
                <li class="img-item">
                <a class="img-link" href=${r.largeImageURL}>
                <img src="${r.webformatURL}"
                alt="${r.tags}"
                data-source="${r.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${r.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${r.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${r.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${r.downloads}</p>
                </div>
                </div>
                </li>`).join("");h.insertAdjacentHTML("beforeend",s)},x=document.querySelector(".input");document.querySelector(".form-btn");const L=document.querySelector(".box"),u=document.querySelector(".img-list"),l=document.querySelector(".this");let a="";const d=new m,$=e=>{u.innerHTML="",e.currentTarget.reset(),e.preventDefault(),a!==""&&(l.classList.add("loader"),f(a).then(s=>{if(l.classList.remove("loader"),s.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}y(s.hits),d.refresh()}).catch(s=>{console.log(s)}),a="")};L.addEventListener("submit",$);const v=e=>{a=e.currentTarget.value};x.addEventListener("input",v);const S=e=>{e.target!==e.currentTarget&&(d.create(`
    <img
      src=${e.target.dataset.source}
      alt=${e.target.alt}
    />
`),instance.show(),e.preventDefault())};u.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
