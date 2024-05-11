"use strict";

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const cityInput = document.querySelector("#city");
const addressInput = document.querySelector("#address");
const postIndexInput = document.querySelector("#postIndex");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const countryError = document.querySelector("#countryError");
const cityError = document.querySelector("#cityError");
const addressError = document.querySelector("#addressError");
const postIndexError = document.querySelector("#postIndexError");

function checkData() {
    checkName();
    checkEmail();
    checkLocation();
    checkPostIndex();
}

function checkName() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;

    if (/^[a-zA-Z '-]+$/.test(firstName)) {
        firstNameInput.style.border = "1px green solid";
        firstNameError.style.display = "none";
    } else {
        firstNameInput.style.border = "1px red solid";
        firstNameError.style.display = "block";
    }

    if (/^[a-zA-Z '-]+$/.test(lastName)) {
        lastNameInput.style.border = "1px green solid";
        lastNameError.style.display = "none";
    } else {
        lastNameInput.style.border = "1px red solid";
        lastNameError.style.display = "block";
    }
}

function checkEmail() {
    let email = emailInput.value;

    if (/@/.test(email)) {
        emailInput.style.border = "1px green solid";
        emailError.style.display = "none";
    } else {
        emailInput.style.border = "1px red solid";
        emailError.style.display = "block";
    }
}

function checkLocation() {
    let country = countryInput.value;
    let city = cityInput.value;

    if (/^[a-zA-Z '-]+$/.test(country)) {
        countryInput.style.border = "1px green solid";
        countryError.style.display = "none";
    } else {
        countryInput.style.border = "1px red solid";
        countryError.style.display = "block";
    }

    if (/^[a-zA-Z '-]+$/.test(city)) {
        cityInput.style.border = "1px green solid";
        cityError.style.display = "none";
    } else {
        cityInput.style.border = "1px red solid";
        cityError.style.display = "block";
    }
}

function checkPostIndex() {
    let index = postIndexInput.value;

    if (/^\d{5}$/.test(index)) {
        postIndexInput.style.border = "1px green solid";
        postIndexError.style.display = "none";
    } else {
        postIndexInput.style.border = "1px red solid";
        postIndexError.style.display = "block";
    }
}

function checkAddress() {
    let address = addressInput.value;

    if (address = ! null) {
        addressInput.style.border = "1px green solid";
        addressError.style.display = "none";
    } else {
        addressInput.style.border = "1px red solid";
        addressError.style.display = "block";
    }
} 