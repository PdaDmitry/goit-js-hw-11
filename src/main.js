'use strict';

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

formEl.addEventListener('submit', e => {
  e.preventDefault();

  let q = e.target.elements.picture.value.trim();
  if (!q) {
    gallery.innerHTML = '';
    e.target.reset();
    return alert('The form field must be filled in!');
  }

  let images = new ImageServer(q);
  loader.classList.remove('is-hidden');

  images
    .getImages()
    .then(data => {
      if (data.hits.length === 0) {
        gallery.innerHTML = '';
        throw new Error();
      }

      const galleryHtml = renderListGallery(data.hits);
      gallery.innerHTML = galleryHtml;

      const show = new SimpleLightbox('.gallery a');
      show.refresh();
    })
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageSize: '16px',
        messageWeight: '400',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        position: 'topRight',
        iconUrl: './img/error.svg',
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
      e.target.reset();
    });
});
