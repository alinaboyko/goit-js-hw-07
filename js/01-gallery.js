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
               <img
                   class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                 />
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
  
    galleryEl.addEventListener('click', onModal);
};
  
  function onModal(evt) {
    const instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}"/>`,
      {
        onShow: _instance => {
          galleryEl.addEventListener('keydown', onEscBtn);
        },
        onClose: _instance => {
          galleryEl.removeEventListener('keydown', onEscBtn);
        },
      },
    );
    instance.show();
  
    function onEscBtn(evt) {
      if (evt.code === 'Escape') {
      }
      instance.close();
    }
};