function scroll(a){a.preventDefault(),target=this.hash,padding=0,"#portfolio-section"===target&&(padding=100),$("html, body").animate({scrollTop:$(this.hash).position().top-padding},1e3)}function mouseOver(){this.style.color=blue}function mouseOut(){this.style.color=black}var blue="#2176C7",black="#212121",home_button=$("#erik-home-button"),menu_button=$(".menu-button");$(document).ready(function(){home_button.click(scroll),home_button.mouseover(mouseOver),home_button.mouseout(mouseOut),menu_button.click(scroll),menu_button.mouseover(mouseOver),menu_button.mouseout(mouseOut)});