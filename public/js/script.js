function scroll(a){a.preventDefault(),$("html, body").animate({scrollTop:$(a.data.target).position().top-a.data.padding},1e3)}function mouseOver(){this.style.color=blue}function mouseOut(){this.style.color=black}for(var blue="#2176C7",black="#212121",litems=document.getElementsByTagName("a"),i=0;i<litems.length;i++)litems[i].addEventListener("mouseover",mouseOver),litems[i].addEventListener("mouseout",mouseOut);$(document).ready(function(){$("#home-button").click({target:"#home-section",padding:0},scroll),$("#portfolio-button").click({target:"#portfolio-section",padding:100},scroll),$("#about-button").click({target:"#about-section",padding:0},scroll),$("#contact-button").click({target:"#contact-section",padding:0},scroll)});