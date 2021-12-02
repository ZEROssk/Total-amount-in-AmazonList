// ==UserScript==
// @name		Total amount in AmazonList
// @namespace	http://zerono.cloud
// @version		2.0
// @author		ZEROssk
// @match		https://www.amazon.co.jp/hz/wishlist/*
// @match		https://www.amazon.co.jp/gp/registry/*
// @grant		none
// @license		MIT License
// @updateURL	https://github.com/ZEROssk/Total-amount-in-AmazonList/raw/master/total-amount-in-list.user.js
// ==/UserScript==

var reCheck = function() {
	let clearContent = document.getElementById(
		'tACheck'
	);
	clearContent.remove();

	totalAmount();
};

var totalAmount = function() {
	'use strict';

	let insertPosition = document.getElementsByClassName(
		'aok-inline-block aok-align-center wl-collab-list-huddles-icon'
	);
	let products = document.getElementsByClassName(
		'a-price-whole'
	);
	var tAmount =0;

	for(let i=0; i < products.length; i++) {
		  tAmount += parseInt(products[i].textContent.replace(/,/g, ''));
	}

	let insertHTML =
		`<div id="tACheck" style="margin-top:5%; display: flex;">` +
			`<div id="totalAmount" style="font-size: 170%; color: #0099CC;">` +
				`<p>Products : `+products.length+` , Total Amount : `+tAmount+` <<</p>` +
			`</div>` +
			`<div id="reCheckButton">` +
				`<button id="reCheckTA" style="margin-left: 1em; width: 4em; border-radius: 100vh; border: 0; background: #1aa1ff; color: #FFF;">Re</button>` +
			`</div>` +
		`</div>`
	;
	insertPosition[0].insertAdjacentHTML('afterend', insertHTML);

	let btEvent = document.getElementById("reCheckTA");
	btEvent.addEventListener("click", reCheck, false);
};

(function() {
	'use strict';

	totalAmount();
})();
