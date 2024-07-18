import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from "./js/render-functions";
import { createApiQuery, fetchImages } from "./js/pixabay-api";

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt",
    captionSelector: 'img',
    captionType: 'attr',
});

const elements = {
    searchForm: document.querySelector(".js-search-form"),
    gallery: document.querySelector(".js-gallery"),
    loader: document.querySelector(".js-loader"),
};

elements.searchForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formValue = form.elements.searchtext.value.toLowerCase().trim();
    elements.gallery.innerHTML = "";
    elements.loader.classList.add("loader");

    fetchImages(createApiQuery(formValue))
        .then((data) => {
            elements.loader.classList.remove("loader");
            const hits = data.hits;
            if (hits.length === 0) {
                showError();
            } 
            elements.gallery.insertAdjacentHTML("beforeend", renderImages(hits));
            lightbox.refresh();
        })
        .catch(showError)
        .finally(() => elements.searchForm.reset());

}

function showError(error) {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}