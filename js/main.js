"use strict";

let allProducts = [];
let fireworks =[];
let demolition = [];

/*PROMISES*/

let getAll = function() {
	return new Promise((resolve,reject) => {
		$.when($.getJSON("/data/categories.json"), $.getJSON("/data/types.json"), $.getJSON("/data/products.json").done(function(data) {
			resolve(data);
		}).fail(function(xhr,status,error) {
			reject(error);
		}));
	});
};


Promise.all([getAll()])
	.then((products) => {
		products = products[0].products[0];
			convert(products);
});

/*CONVERT FUNCTION*/

function convert(products) {
	$.each(products,function(index,value) {
		if (value.type === 0 && value.id < 6) {
			value.type = "Personal";
			value.category = "Fireworks";
			fireworks.push(value);
			allProducts.push(value);
		} else {
			value.type = "Professional";
			value.category = "Demolition";
			demolition.push(value);
			allProducts.push(value);
		}
	});

		populatePage(products);
}








