"use strict";
import { parseHTML } from "./utils/parseHTML.js";

function main() {
  let html = `<div class="col-md-4">
          <div class="card bg-dark text-light">
            <img
              src="https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Samoyed</h5>
              <p class="card-text">A very good boy.</p>
              <p class="text-end">@user1</p>
            </div>
          </div>
        </div>`;

  let container = document.getElementById("gallery");
  console.log(container);
  let newCard = parseHTML(html);
  container.appendChild(newCard);
}

document.addEventListener("DOMContentLoaded", main);