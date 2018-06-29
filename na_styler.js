"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Greg
   Date:   06/29/18

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
addEventListener("load", setStyles)

function setStyles() {
	//link element for the stylesheets
	var styleNum = randInt(5);
	var pageStyle = document.createElement("link");
	pageStyle.setAttribute("id", "fancySheet");
	pageStyle.setAttribute("href", "css/na_style_"+ styleNum +".css");
	pageStyle.setAttribute("rel", "stylesheet");
	
	//append link element to the document head
	document.head.appendChild(pageStyle);
	
	//button for the figbox element
	var figBox = document.createElement("figure");
	figBox.setAttribute("id", "styleThumbs");
	
	// append figbox to the div element
	document.getElementById("box").appendChild(figBox);
	
	//loop through the images for the five fancysheets
	for(var i = 0; i < 5; i++) {
    var sheetImg = document.createElement("img");
    sheetImg.setAttribute("src", "images/na_small_"+ i +".png");
    sheetImg.setAttribute("alt", "css/na_style_" + i + ".css");
	
		sheetImg.onclick = function(e) {
			document.getElementById("fancySheet").href = e.target.alt;
		}
    //append sheet img 
    figBox.appendChild(sheetImg);
	}
	
	//thumbnail to embedded stylesheet
	var thumbStyles = document.createElement("style");
	document.head.appendChild(thumbStyles);
	
	//style rules for embedded stylesheet
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs { \
	position: absolute; \
	left: 0px; \
	bottom: 0px; \
	}", 0);
	
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs img { \
	outline: 1px solid black; \
	cursor: pointer; \
	opacity: 0.75; \
	}", 1);
	
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs img:hover { \
	outline: 1px solid red; \
	opacity: 1.0; \
	}", 2);		
}

function randInt(size) {
   return Math.floor(size*Math.random());
}