// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	$w("#text8").onDblClick((event) => {
		$w("#text8").text = "Hello there!!!"
	});

	console.warn("You shouldn't be seeing this!!!")
	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});