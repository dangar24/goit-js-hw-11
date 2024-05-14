import{i as u}from"./assets/vendor-8e8cd629.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const o={key:"43845947-8a1e30f8a3261d274f42ac52c",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},d="https://pixabay.com/api/",m=document.querySelector(".input");document.querySelector(".form-btn");const p=document.querySelector(".box"),c=document.querySelector(".img-list"),l=document.querySelector("span"),g=r=>{if(c.innerHTML="",r.currentTarget.reset(),r.preventDefault(),o.q==="")return;let i=`?key=${o.key}&q=${o.q}&image_type=${o.image_type}&orientation=${o.orientation}&safesearch=${o.safesearch}`;(()=>fetch(`${d}${i}`).then(s=>{if(!s.ok)throw new Error("Запит виконався з помилкою");return s.json()}))().then(s=>{if(l.classList.add("loader"),s.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!"),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}const t=s.hits.map(e=>`
                <li class="img-item">
                <a class="img-link" href=${e.largeImageURL}>
                <img src="${e.webformatURL}"
                alt="${e.tags}"
                data-source="${e.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${e.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${e.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${e.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${e.downloads}</p>
                </div>
                </div>
                </li>`).join("");l.classList.remove("loader"),c.insertAdjacentHTML("beforeend",t)}).catch(s=>{console.log(s)}),o.q=""};p.addEventListener("submit",g);const f=r=>{o.q=r.currentTarget.value};m.addEventListener("input",f);const h=r=>{if(r.target===r.currentTarget)return;basicLightbox.create(`
    <img
      src=${r.target.dataset.source}
      alt=${r.target.alt}
    />
`).show(),r.preventDefault()};c.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map
