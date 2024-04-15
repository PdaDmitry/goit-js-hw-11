import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { ImageServer } from './js/pixabay-api';
import { createGalleryMarkup, renderListGallery } from './js/render-functions';

const galleryMarkup = createGalleryMarkup();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', galleryMarkup);

const formEl = document.querySelector('form');

const loader = document.querySelector('.loader');
loader.classList.add('is-hidden');

const gallery = document.querySelector('.gallery');

const input = document.querySelector('input');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-search');

const images = new ImageServer();
const show = new SimpleLightbox('.gallery a');

function showIziToast(text) {
  return iziToast.show({
    message: text,
    messageSize: '16px',
    messageWeight: '400',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    position: 'topRight',
    iconUrl: './img/error.svg',
  });
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  let q = e.target.elements.picture.value.trim();
  if (!q) {
    e.target.reset();
    return showIziToast('The form field must be filled in!');
  }

  loader.classList.remove('is-hidden');

  images
    .getImages(q)
    .then(data => {
      if (data.hits.length === 0) {
        showIziToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      const galleryHtml = renderListGallery(data.hits);
      gallery.innerHTML = galleryHtml;

      show.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
      e.target.reset();
    });
});
