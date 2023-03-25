"use strict"
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onPictureClick);


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
      return  `<li class="gallery__item">
               <a class="gallery__link" href="${original}" onclick="event.preventDefault();">
               <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
              </li>`;
    })
        .join('');
     
    
};

function onPictureClick(evt) {
    
    const galleryImage = evt.target.classList.contains('gallery__image');
  
    if (!galleryImage) {
      return;
    }
  }
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


