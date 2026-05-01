"use strict";
import { parseHTML } from "./utils/parseHTML.js";
import { photoRenderer } from "./renderers/photos.js";

function main() {
    let container = document.getElementById("gallery");
    let photo = {
        title: "Samoyed",
        description: "A very good boy.",
        userId: 1,
        url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
    };
    let card = photoRenderer.asCard(photo);
    container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", main);