"use strict";

function splitString() {
    const inputString = document.querySelector('#inputString').value;
    const resultArray = [];

    for (let i = 0; i < inputString.length; i += 2) {
      const pair = inputString.slice(i, i + 2);
      resultArray.push(pair);
    }

    if (inputString.length % 2 !== 0) {
      resultArray[resultArray.length - 1] += '_';
    }

    displayResult(resultArray);
  }

  function displayResult(array) {
    const resultList = document.querySelector('#result');
    resultList.innerHTML = '';

    array.forEach(pair => {
      const listItem = document.createElement('li');
      listItem.textContent = pair;
      resultList.appendChild(listItem);
    });
  }