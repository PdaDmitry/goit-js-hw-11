export class ImageServer {
  constructor() {
    // this.q = q;
    this.KEY = '42263617-81d7156b9f7b88cd7b1016c2a';
    // this.URL = `https://pixabay.com/api/?key=${this.KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
  }

  getImages(value) {
    const url = `https://pixabay.com/api/?key=${this.KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
  }
}
