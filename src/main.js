'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { rend } from './js/render-functions';

const input = document.querySelector('input');
input.classList.add('input');

const button = document.querySelector('button');
button.classList.add('btn-search');

// let q = 'cat';

// getImage();
