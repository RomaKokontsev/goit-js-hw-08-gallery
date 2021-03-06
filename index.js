import images from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.js-lightbox')
const lightboxOverlay = document.querySelector('.lightbox__overlay')
const image = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')


galleryRef.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)
lightboxOverlay.addEventListener('click', onBackdropClose)


function createGalleryMarkup(images) {
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

const creatMarkup = createGalleryMarkup(images)
galleryRef.insertAdjacentHTML('afterbegin', creatMarkup)



function onOpenModal(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
    return
  }
    
    lightbox.classList.add('is-open');
    image.src = e.target.dataset.source;

    window.addEventListener('keyup', onEscapePress);

}

function onCloseModal() {
    lightbox.classList.remove("is-open");
    image.src = "";

    window.removeEventListener('keyup', onEscapePress);
    
}

function onBackdropClose(e) {
    if (e.target === e.currentTarget) {
        onCloseModal()
     }
}
function onEscapePress(e) {
    if (e.code === "Escape") {
        onCloseModal()
    }
}

