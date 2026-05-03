"use strict";
import { parseHTML } from "./utils/parseHTML.js";
import { galleryRenderer } from "./renderers/gallery.js";
import  { photoswithusersAPI_auto } from "./api/_photoswithusers.js";
import { messageRenderer } from "./renderers/messages.js";

function main() {
  loadAllPhotos()
}

async function loadAllPhotos() {
    let galleryContainer = document.querySelector("#gallery");
    
    try {
        let photos = await photoswithusersAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(photos);
        galleryContainer.appendChild(cardGallery);
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading photos", err);
    }
}

document.addEventListener("DOMContentLoaded", main);
