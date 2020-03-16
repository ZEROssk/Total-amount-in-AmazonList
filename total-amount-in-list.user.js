// ==UserScript==
// @name		Total amount in AmazonList
// @namespace	http://zerono.cloud
// @version		0.1
// @author		ZEROssk
// @match		https://www.amazon.co.jp/hz/wishlist/ls/38L384U0VKCY8/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist
// @grant		none
// @license		MIT License
// @updateURL	
// ==/UserScript==

(function() {
	'use strict';

	var products = document.getElementsByClassName("a-price-whole");
	var tAmount =0;

	for(let i=0; i < products.length; i++) {
		  tAmount += parseInt(products[i].textContent.replace(/,/g, ''));
	}
	console.log(products.length);
	console.log(tAmount);
})();

