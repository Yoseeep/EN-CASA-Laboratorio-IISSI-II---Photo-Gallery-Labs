"use strict";

import { messageRenderer } from "./renderers/messages.js";
import { userValidator } from "./validators/users.js";
import { sessionManager } from "./utils/session.js";
import { authAPI_auto } from "./api/_auth.js";

function main() {
  let loginForm = document.querySelector("#login-form");
  loginForm.onsubmit = handleSubmitLogin;
}

function handleSubmitLogin(event) {
  event.preventDefault();
  let form = event.target;
  let formData = new FormData(form);

  let errors = userValidator.validateLogin(formData);

  if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
        
        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    } else {
      sendLogin(formData);
    }
}

async function sendLogin(formData) {
  try {
    let loginData = await authAPI_auto.login(formData);
    let sessionToken = loginData.sessionToken;
    let loggedUser = loginData.user;

    sessionManager.login(sessionToken, loggedUser);
    window.location.href = "index.html";
  } catch (error) {
    messageRenderer.showErrorMessage("Error logging in.", error);
  }
}

document.addEventListener("DOMContentLoaded", main);