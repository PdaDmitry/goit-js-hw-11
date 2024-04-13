'use strict';

export class ImageServer {
  constructor(q) {
    this.q = q;
    this.KEY = '42263617-81d7156b9f7b88cd7b1016c2a';
    this.URL = `https://pixabay.com/api/?key=${this.KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`; //&per_page=8
  }

  getImages() {
    const url = this.URL;
    return fetch(url).then(response => response.json());
  }
}
