"use strict";

let $productsOutput = $("#productsOutput");
let productString;

$('.dropdown-menu li a').click(function(){

  if(this.id === "fireworks") {
    populatePage(fireworks);
  } else if (this.id === "demolition") {
    populatePage(demolition);
  } else {
    populatePage(allProducts);
  }
});

function populatePage(data) {
  $productsOutput.html("");
  productString = "";
    $.each(data,function(index,value) {
      productString += `<div class="col-md-4 products">`; 
      productString += `<h2>${value.name}</h2>`;
      productString += `<h4>${value.description}</h4>`;
      productString += `<h4>Type: ${value.type}</h4>`;
      productString += `<h4>Category: ${value.category}</h4></div></div>`;
  });
      $productsOutput.append(productString);
}



