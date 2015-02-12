


var blue ="#2176C7";
var black = "#212121";


var home_button = $("#erik-home-button");
var menu_button = $(".menu-button");
var arrow_buttons = $(".arrows");

$(document).ready(function() {
    //home button ("Erik Muro")
	home_button.click(scroll);
    home_button.mouseover(mouseOver);
    home_button.mouseout(mouseOut);

    //menu buttons (i.e. About)
    menu_button.click(scroll);
    menu_button.mouseover(mouseOver);
    menu_button.mouseout(mouseOut);

    //carousel arrows
    arrow_buttons.mouseover(mouseOver);
    arrow_buttons.mouseout(mouseOut);


    //// Set the interval to be 5 seconds
    //var t = setInterval(function(){
    //    $("#carousel").animate({marginLeft:-1200},1000,function(){
    //        $(this).find("li:last").after($(this).find("li:first"));
    //        $(this).css({marginLeft:0});
    //    })
    //},5000);
});


//smooth scrolling
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
    target = this.hash;
    if(target === "#right" || target === "#left") {
        if (target === "#right") {
            var arrow = document.getElementById("right");
            arrow.className = "fa fa-arrow-circle-o-right fa-5x";
        }
        else {
            var arrow = document.getElementById("left");
            arrow.className = "fa fa-arrow-circle-o-left fa-5x";
        }
    }
    else {
        this.style.color = blue;
    }
}

function mouseOut(event) {
    if(this.hash === "#right" || this.hash === "#left") {
        if (target === "#right") {
            var arrow = document.getElementById("right");
            arrow.className = "fa fa-arrow-circle-o-right fa-4x";
        }
        else {
            var arrow = document.getElementById("left");
            arrow.className = "fa fa-arrow-circle-o-left fa-4x";
        }
    }
    else {
        this.style.color = black;
    }
}
