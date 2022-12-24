// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const divGallery = document.querySelector('.gallery');


console.log(SimpleLightbox);
// console.log(galleryItems);


function createGalleryLayout(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick = "return false">
  <img class="gallery__image" src="${preview}"
      alt="${description}" />
</a>`;
    })
    .join('');
}

divGallery.insertAdjacentHTML('afterbegin', createGalleryLayout(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});