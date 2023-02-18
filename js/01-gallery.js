import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", selectPicture);

const galleryMarkup = createGalleryMarkup(galleryItems);

addGalleryMarkup(galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
        </a>
      </div>`;
    })
    .join("");
}

function addGalleryMarkup(markup) {
  refs.gallery.innerHTML = markup;
}

function selectPicture(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const picture = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img class="gallery__image" src="${picture}">
  `);

  instance.show();

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
