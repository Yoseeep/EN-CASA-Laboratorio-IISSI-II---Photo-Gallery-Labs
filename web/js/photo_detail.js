"use strict";

import { photoRenderer } from "./renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "./utils/session.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

async function main() {
  // Check that we have an ID before doing anything else
  if (photoId === null) {
    messageRenderer.showErrorMessage("Please, provide a photoId");
    let photoActionsColumn = document.querySelector("#photo-actions-column");
    photoActionsColumn.remove();
    return;
  }

  loadPhotoDetails();

  let deleteBtn = document.querySelector("#button-delete");
  deleteBtn.onclick = handleDelete;

  let editBtn = document.querySelector("#button-edit");
  editBtn.onclick = handleEdit;

  hideActionsColumn();
}

async function loadPhotoDetails() {
  let photoContainer = document.querySelector("#photo-details-column");
  try {
    let photo = await photosAPI_auto.getById(photoId);
    let photoDetails = photoRenderer.asDetails(photo);
    photoContainer.appendChild(photoDetails);
  } catch (err) {
    messageRenderer.showErrorMessage("Error loading photo", err);
  }
}

async function handleDelete(event) {
  let answer = confirm("Do you really want to delete this photo?");

  if (answer) {
    try {
      await photosAPI_auto.delete(photoId);
      window.location = "/index.html";
    } catch (err) {
      messageRenderer.showErrorMessage(err);
    }
  }
}

function handleEdit(event) {
  window.location.href = "edit_photo.html?photoId=" + photoId;
}

function hideActionsColumn() {
    let actions_col = document.getElementById("photo-actions-column");
    if (!sessionManager.isLogged()) {
        actions_col.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", main);
