// ==UserScript==
// @name		Total amount in AmazonList
// @namespace	http://zerono.cloud
// @version		0.2
// @author		ZEROssk
// @match		https://www.amazon.co.jp/hz/wishlist/*
// @grant		none
// @license		MIT License
// @updateURL	https://github.com/ZEROssk/Total-amount-in-AmazonList/raw/master/total-amount-in-list.user.js
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

