import images from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.js-lightbox')
const lightboxOverlay = document.querySelector('.lightbox__overlay')
const image = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')





function createGallery(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">

        <a class = "gallery__link"
        href = ${original}>
        
        <img class="gallery__image"
        src = ${preview}
        data-source = ${original}
        alt = ${description}/>

        </a>
        </li>`
    }).join('')
}

const creatMarkup = createGallery(images)

galleryRef.insertAdjacentHTML('afterbegin',creatMarkup )