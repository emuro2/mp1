
//References:
    //http:www.stackoverflow.com
    //http://www.queness.com/post/77/simple-jquery-modal-window-tutorial
    //http://css3.bradshawenterprises.com/cfimg/

var blue ="#2176C7";
var white = "#ffffff";
var gray = "#EEEEEE";

var home_button = $("#erik-home-button");
var menu_button = $(".menu-button");
var arrow_buttons = $(".arrows");
var image_num = 0;

$(document).ready(function() {
    //set image_num = 0
    image_num = 0;

    //home button ("Erik Muro")
	home_button.click(smoothScroll);
    home_button.mouseover(mouseOver);
    home_button.mouseout(mouseOut);

    //menu buttons (i.e. About)
    menu_button.click(smoothScroll);
    menu_button.mouseover(mouseOver);
    menu_button.mouseout(mouseOut);

    //carousel arrows
    arrow_buttons.click(slide);
    arrow_buttons.mouseover(mouseOver);
    arrow_buttons.mouseout(mouseOut);

    //position indicator events
    $(window).scroll(positionIndicator);

    //modal events
    $('.modal').click(modal);
    $('#mask').click(hideMask);
    $(window).resize(resizeModal);

    //form events
    $("#submit-button").click(submitMessage);
});



//position indicator which highlights menu buttons
function positionIndicator(event) {
    windowTop = $(window).scrollTop()+200;
    home_button.css("color", "");
    menu_button.css("color","");

    for (i = menu_button.length-1; i > -1; i--){
        if (($(menu_button[i].hash).position().top - windowTop) < 0) {
            menu_button[i].style.color = blue;
            break;
        }
        else if (i == 0)
            $("#erik-home-button")[0].style.color = blue;
    }

    //resizing navbar and items
    if(windowTop > 400){
        $(".navbar").animate({"padding": "10px 40px", "font-size":"1.8rem"}, 100).clearQueue();
        $("#erik-photo").animate({width:"35", height:"35", margin:"5"},100).clearQueue();
    }
    else {
        $(".navbar").animate({"padding": "30px 40px", "font-size":"2.2rem"}, 50).clearQueue();
        $("#erik-photo").animate({width:"45", height:"45", margin:"0"},50).clearQueue();
    }
}

//smooth scrolling
function smoothScroll(event) {
	event.preventDefault();
    var target = this.hash;
    var padding = 0;
    if (target === "#home-section")
        padding = 0;
    else
        padding = 115;

    $('html, body').animate({
        scrollTop: $(this.hash).position().top - padding
    }, 1000);
}


function mouseOver(event) {
    var target = this.hash;
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
        this.style.backgroundColor = gray;
    }
}

function mouseOut(event) {
    if(this.hash === "#right" || this.hash === "#left") {
        if (this.hash === "#right") {
            var arrow = document.getElementById("right");
            arrow.className = "fa fa-arrow-circle-o-right fa-4x";
        }
        else {
            var arrow = document.getElementById("left");
            arrow.className = "fa fa-arrow-circle-o-left fa-4x";
        }
    }
    else {
        this.style.backgroundColor = white;
    }
}

//Carousel fade in and out effects
function slide(event) {
    event.preventDefault();
    var target = this.hash;

    if (target === "#right") {
        $("#carousel img").removeClass("opaque");
        image_num = (image_num + 1) % 3
        $("#carousel img").eq(image_num).addClass("opaque");
    }
    else {
        $("#carousel img").removeClass("opaque");
        image_num = (image_num - 1) % 3
        $("#carousel img").eq(image_num).addClass("opaque");
    }
}

//enables the modal window
function modal(event) {
    event.preventDefault();

    //prevents scrolling while modal is open
    $("body").css("overflow",'hidden');

    var display = this.hash;
    var maskHeight = $(document).height();
    var maskWidth = $(document).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight, top:0});
    $('#mask').fadeTo("slow",1);

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $(display).css('top', windowHeight/2-$(display).height()/2 );
    $(display).css('left', windowWidth/2-$(display).width()/2);
    $(display).fadeIn(2000);
}

//disables the modal window
function hideMask(event) {
    $(this).hide();
    $('.window').hide();

    //enables scrolling again
    $("body").css("overflow","");
}

//dynamically resize the modal screen if the user zooms.
function resizeModal(event) {
    var box = $('#boxes .window');

    var maskHeight = $(document).height();
    var maskWidth = $(document).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight, top:0});

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    box.css('top',  windowHeight/2 - box.height()/2);
    box.css('left', windowWidth/2 - box.width()/2);
}



function submitMessage(event){
    event.preventDefault();
    alert("Thank you for your message "+$('input[name="name"]').val());
    $("#contact-form").find('input[name="name"], input[name="email"], input[name="subject"], textarea').val("");
}