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
};

export { userValidator };
