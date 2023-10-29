"use strict";

const productsContainer = document.querySelector(".products");

const renderproduct = function (data) {
  data.forEach((element) => {
    const html = `
  <article class="product">
    <img class="product__img" src="${element.image}" />
    <div class="product__data">
      <h3 class="product__name">${element.title}</h3>
      <h4 class="product__region">💲Price : ${element.price}</h4> 
    </div>
  </article>
  `;
    productsContainer.insertAdjacentHTML("beforeend", html);
    productsContainer.style.opacity = 1;
  });
};

const renderError = function (msg) {
  productsContainer.insertAdjacentText("beforeend", msg);
};

const getproductData = function () {
  fetch(`https://fakestoreapi.com/products/`)
    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw new Error(`product not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderproduct(data);
    })
    .catch((err) => {
      console.error(`${err} ! `);
      renderError(`Something went wrong !  ${err.message}. Try again!`);
    });
};

getproductData();
