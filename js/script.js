
//References:
    //http:www.stackoverflow.com
    //http://www.queness.com/post/77/simple-jquery-modal-window-tutorial
    //http://css3.bradshawenterprises.com/cfimg/

var blue ="#2176C7";
var black = "#212121";
var white = "#ffffff";
var gray = "#EEEEEE";

var home_button = $("#erik-home-button");
var menu_button = $(".menu-button");
var contact =$("#contact-section");
var about =$("#about-section");
var portfolio =$("#portfolio-section");
var arrow_buttons = $(".arrows");
var carousel = $("#carousel");
var image_num = 0;

$(document).ready(function() {

    $("#submit-button").click(submitMessage);

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

    $(window).scroll(positionIndicator);



    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        $("body").css("overflow",'hidden');
        //Get the A tag
        var id = $(this).attr('href');

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(document).width();


        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight, top:0});

        //transition effect
        //$('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",1);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top', winH/2-$(id).height()/2 );
        $(id).css('left', winW/2-$(id).width()/2);


        //transition effect
        $(id).fadeIn(2000);

    });



    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
        $("body").css("overflow","");
    });


    $(window).resize(function () {
        var box = $('#boxes .window');
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
        //Set the popup window to center
        box.css('top',  winH/2 - box.height()/2);
        box.css('left', winW/2 - box.width()/2);
    });

});




function positionIndicator(event) {
    windowTop = $(window).scrollTop()+200;
    home_button.css("color", "");
    menu_button.css("color","");

    //highlight position
    if((contact.position().top - windowTop) < 0)
        menu_button[2].style.color = blue;
    else if ((about.position().top - windowTop) < 0)
        menu_button[1].style.color = blue;
    else if ((portfolio.position().top - windowTop) < 0)
        menu_button[0].style.color = blue;
    else
        home_button[0].style.color = blue;


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


function submitMessage(event){
    event.preventDefault();
    alert("Thank you for your message "+$('input[name="name"]').val());
    $("#contact-form").find("input, textarea").val("");
}