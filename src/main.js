import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// -----------------------------
const inputEl = document.querySelector('.input');
const buttonEL = document.querySelector('.form-btn');
const formEl = document.querySelector('.box');
const listEl = document.querySelector('.img-list');
const loader = document.querySelector('span')

// ----------------------------
// const options = {
//     key: '43845947-8a1e30f8a3261d274f42ac52c',
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
// };
// const BASE_URL = 'https://pixabay.com/api/';
import { options, BASE_URL } from "./js/pixabay-api"
// ----------------------------


const sendForm = (event) => {
    listEl.innerHTML = "";
    event.currentTarget.reset();
    event.preventDefault();
    if (options.q === "") {
        return
    };
    let params = `?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`
    
    const fetchPick = () => {
        return fetch(`${BASE_URL}${params}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Запит виконався з помилкою")
                };
                return response.json();
            })
    };
    
    fetchPick()
        .then(imgs => {
            loader.classList.add('loader');
            if (imgs.hits.length === 0) {
                console.log("Sorry, there are no images matching your search query. Please try again!");
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px',
                });
                return
            }
            const marcup = imgs.hits.map(img => {
                return `
                <li class="img-item">
                <a class="img-link" href=${img.largeImageURL}>
                <img src="${img.webformatURL}"
                alt="${img.tags}"
                data-source="${img.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${img.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${img.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${img.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${img.downloads}</p>
                </div>
                </div>
                </li>`
            }).join('');
            loader.classList.remove('loader');
            listEl.insertAdjacentHTML('beforeend', marcup);
        })
        .catch(error => {
            console.log(error);
        });
    
options.q = "";
};
formEl.addEventListener("submit", sendForm);


const giveValue = (event) => {
    options.q = event.currentTarget.value;
};
inputEl.addEventListener("input", giveValue);

const openModal = (event) => {
    if (event.target === event.currentTarget) {
        return
    };
    const instance = basicLightbox.create(`
    <img
      src=${event.target.dataset.source}
      alt=${event.target.alt}
    />
`);
    instance.show();
    event.preventDefault();
};
listEl.addEventListener("click", openModal);
