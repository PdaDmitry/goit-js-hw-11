'use strict';

export function createGalleryMarkup() {
  return `
  <form class="form">
    <input type="text" name="picture" placeholder="Search images..." />
    <button type="submit" data-search>Search</button>
  </form>
  <ul class="gallery"></ul>`;
}

export function renderListGallery(images) {
  const item = images
    .map(el => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = el;
      return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${likes}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${views}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${comments}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${downloads}</span>
      </li>
    </ul>
  </a>
  </li>`;
    })
    .join('\n\n');

  return item;
}
