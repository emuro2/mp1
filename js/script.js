// function(event) {
// 		event.preventDefault();
// 	    $('html, body').animate({
// 	        scrollTop: $(event.data.target).offset().top
// 	    }, 1000);
// 	}


var blue ="#2176C7";
var black = "#212121";


var litems = document.getElementsByTagName('a');
for(var i=0; i<litems.length; i++) {
  	//litems[i].addEventListener("click", scroll);
	litems[i].addEventListener("mouseover", mouseOver);
	litems[i].addEventListener("mouseout", mouseOut);
}


$(document).ready(function() { 
	$("#home-button").click({target:"#home-section", padding:0},scroll);
	$("#portfolio-button").click({target:"#portfolio-section", padding:100},scroll);
	$("#about-button").click({target:"#about-section", padding:0},scroll);
	$("#contact-button").click({target:"#contact-section", padding:0},scroll);
});

function scroll(event) {
	event.preventDefault();
	$('html, body').animate({
 	    scrollTop: $(event.data.target).position().top - event.data.padding
 	}, 1000);
}

function mouseOver(event) {
	this.style.color=blue;
}

function mouseOut(event) {
	this.style.color=black;
}
