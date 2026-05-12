"use strict";

const userValidator = {
  validateRegister: function (formData) {
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let password = formData.get("password");
    let password2 = formData.get("password2");

    let errors = [];

    if (firstName.length < 3 || lastName.length < 3) {
      errors.push("The first and last name should have more than 3 characters");
    }

    if (password !== password2) {
      errors.push("The passwords must match");
    }
    return errors;
  },
  validateLogin: function (formData) {
    let username = formData.get("username");
    let password = formData.get("password");

    let errors = [];

    if (username.length === 0 || password.length === 0) {
      errors.push("Please fill in all fields");
    }

    return errors;
  }
};

export { userValidator };
