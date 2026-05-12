"use strict";

import { sessionManager } from "./utils/session.js";

function main() {
    showUser();
}

function showUser() {
    let title = document.getElementById("navbar-title");
    let text;

    if (sessionManager.isLogged()) {
        let username = sessionManager.getLoggedUser().username;
        text = "Hi, @" + username;
    } else {
        text = "Guest";
    }

    title.textContent = text;
}

document.addEventListener("DOMContentLoaded", main);
