"use strict";

const input = document.querySelector('#inputString');
const resultList = document.querySelector('#result');

function splitString() {
  let inputString = input.value;
  let resultArray = [];

  for (let i = 0; i < inputString.length; i += 2) {
    let pair = inputString.slice(i, i + 2);
    resultArray.push(pair);
  }

  if (inputString.length % 2 !== 0) {
    resultArray[resultArray.length - 1] += '_';
  }

  displayResult(resultArray);
}

function displayResult(array) {
  resultList.innerHTML = '';

  array.forEach(pair => {
    const listItem = document.createElement('li');
    listItem.textContent = pair;
    resultList.appendChild(listItem);
  });
}