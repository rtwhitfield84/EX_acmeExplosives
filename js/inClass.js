// Promise.all([getCategories(),getTypes(),getProducts()])
// .then((theStuff) => {

// });



// let getCategories = function() {
// 	return new Promise((resolve,reject) => {
// 		$.getJSON("/data/categories.json").done(function(data) {
// 			resolve(data);
// 		}).fail(function(xhr,status,error) {
// 			reject(error);
// 		});
// 	});
// }; 

// let getTypes = function() {
// 	return new Promise((resolve,reject) => {
// 		$.getJSON("/data/types.json").done(function(data){
// 			resolve(data);
// 		}).fail(function(xhr,status,error){
// 			reject(error);
// 		});
// 	});
// };

// let getProducts = function() {
// 	return new Promise((resolve,reject) => {
// 		$.getJSON("/data/products.json").done(function(data){
// 			resolve(data);
// 		}).fail(function(xhr,status,error){
// 			reject(error);
// 		});
// 	});
// };