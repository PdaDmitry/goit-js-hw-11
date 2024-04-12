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

const gallery = document.querySelector('.gallery');
const formEl = document.querySelector('form');

const input = document.querySelector('input');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-search');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  let q = e.target.elements.picture.value;
  let images = new ImageServer(q);
  images
    .getImages()
    .then(data => {
      const galleryHtml = renderListGallery(data.hits);
      gallery.innerHTML = galleryHtml;

      const show = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  e.target.reset();
});
