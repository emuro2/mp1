
//References:
//http:www.stackoverflow.com
//http://www.queness.com/post/77/simple-jquery-modal-window-tutorial

var blue ="#2176C7";
var black = "#212121";

var home_button = $("#erik-home-button");
var menu_button = $(".menu-button");
var contact =$("#contact-section");
var about =$("#about-section");
var portfolio =$("#portfolio-section");
var arrow_buttons = $(".arrows");
var carousel = $("#carousel");


$(document).ready(function() {



    //home button ("Erik Muro")
	home_button.click(smoothscroll);
    home_button.mouseover(mouseOver);
    home_button.mouseout(mouseOut);

    //menu buttons (i.e. About)
    menu_button.click(smoothscroll);
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


    //
    ////grab the width and calculate left value
    //var item_width = $('#carousel li').outerWidth();
    //var left_value = item_width * (-1);
    //
    ////move the last item before first item, just in case user click prev button
    //$('#carousel li:first').before($('#carousel li:last'));
    //
    ////set the default item to the correct position
    //$('#carousel li').css({'left' : left_value});
    //
    //
    //
    ////if user clicked on prev button
    //$('#left').click(function() {
    //    event.preventDefault();
    //    //get the right position
    //    var left_indent = parseInt($('#carousel ul').css('left')) + item_width;
    //    //slide the item
    //    $('#carousel ul').animate({'left' : left_indent}, 200,function(){
    //        //move the last item and put it as first item
    //        $('#carousel li:first').before($('#carousel li:last'));
    //        //set the default item to correct position
    //        $('#carousel li').css({'left' : left_value});
    //    });
    //
    //});
    //
    ////if user clicked on next button
    //$('#right').click(function() {
    //    event.preventDefault();
    //    //get the right position
    //    var left_indent = parseInt($('#carousel ul').css('left')) - item_width;
    //
    //    //slide the item
    //    $('#carousel ul').animate({'left' : left_indent}, 200, function () {
    //
    //        //move the first item and put it as last item
    //        $('#carousel li:last').after($('#carousel li:first'));
    //
    //        //set the default item to correct position
    //        $('#carousel li').css({'left' : left_value});
    //    });
    //
    //});




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
function smoothscroll(event) {
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
        this.style.color = blue;
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
        this.style.color = black;
    }
}

function slide(event){
    event.preventDefault();
//    var carousel = $("#carousel");
//    var target = this.hash;
//
//    if (target === "#right") {
//        ////get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
//        //var item_width = $("#carousel li").outerWidth() ;
//        ////calculate the new left indent of the unordered list
//        //var left_indent = parseInt(carousel.css('left')) + item_width;
//        //
//        ////make the sliding effect using jquery's anumate function '
//        //carousel.animate({'left': left_indent}, {queue: false, duration: 200}, function () {
//        //
//        //    //get the first list item and put it after the last list item (that's how the infinite effects is made) '
//        //    //$('#carousel li:last').after($('#carousel li:first'));
//        //    carousel.find("li:last").after(carousel.find("li:first"));
//        //
//        //    //and get the left indent to the default -210px
//        //    carousel.css({'left': '-1276px'});
//        //});
//        var item_width = $('#carousel li').outerWidth();
//        var left_value = item_width * (-1);
//        //get the right position
//        var left_indent = parseInt($('#carousel').css('left')) + item_width;
//        //slide the item
//        $('#carousel').animate({'left' : left_indent}, 200,function(){
//            //move the last item and put it as first item
//            $('#carousel li:first').before($('#carousel li:last'));
//            //set the default item to correct position
//            $('#carousel').css({'left' : left_value});
//
//        });
//    }
//    else {
//        //var item_width = $('#carousel li').outerWidth() ;
//        //
//        ///* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
//        //var left_indent = parseInt(carousel.css('left')) - item_width;
//        //
//        //carousel.animate({'left' : left_indent},{queue:false, duration:200},function(){
//        //
//        //    /* when sliding to left we are moving the last item before the first item */
//        //    //$('#carousel li:first').before($('#carousel li:last'));
//        //    carousel.find("li:last").before(carousel.find("li:first"));
//        //
//        //    /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
//        //    carousel.css({'left' : '-1276px'});
//        //});
//
//        var item_width = $('#carousel li').outerWidth();
//        var left_value = item_width * (-1);
//        //get the right position
//        var left_indent = parseInt($('#carousel').css('left')) - item_width;
//        //slide the item
//        $('#carousel').animate({'left' : left_indent}, 200,function(){
//            //move the last item and put it as first item
//            $('#carousel li:first').after($('#carousel li:last'));
//            //set the default item to correct position
//            $('#carousel').css({'left' : left_value});
//
//        });
//    }
}
