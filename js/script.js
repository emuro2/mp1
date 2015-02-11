


var blue ="#2176C7";
var black = "#212121";


var home_button = $("#erik-home-button");
var menu_button = $(".menu-button");

$(document).ready(function() { 
	home_button.click(scroll);
    home_button.mouseover(mouseOver);
    home_button.mouseout(mouseOut);


    menu_button.click(scroll);
    menu_button.mouseover(mouseOver);
    menu_button.mouseout(mouseOut);

    //
    //$("#right-arrow").mouseover(
    //        function(){
    //            event.preventDefault();
    //            this.className= "fa fa-arrow-circle-o-right fa-5x"
    //        }
    //    );
    //$("#right-arrow").mouseout(
    //    function(){
    //        event.preventDefault();
    //        this.className= "fa fa-arrow-circle-o-right fa-4x"
    //    }
    //);
});

function scroll(event) {
	event.preventDefault();
    target = this.hash;
    padding = 0;
    if (target === "#portfolio-section")
        padding = 100;

    $('html, body').animate({
        scrollTop: $(this.hash).position().top - padding
    }, 1000);
}

function mouseOver(event) {
	this.style.color=blue;
}

function mouseOut(event) {
	this.style.color=black;
}
