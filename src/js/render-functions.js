export function rend() {
  console.log('export from render!');
}

function elLiGallery(images) {
  const item = images
    .map(el => {
      const { preview, original, description } = el;
      return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('\n\n');

  return item;
}

// const htmllist = elLiGallery(images);
// gallery.innerHTML = htmllist;
