
var animate = true;

function welcome_message() {
    if (animate) {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        $("#welcome1").slideDown(1800); //.fadeIn(1800);
        $("#welcome2").delay(1000).fadeIn(1500);

        $("#welcomeFG").delay(2400).animate({ height: 'toggle' }, 500);
        $("#welcomeFG2").delay(3000).animate({ height: 'toggle' }, 400);
        $("#welcome2").delay(300).fadeOut(100);
        $(".welcome").delay(2300).animate({ top: '220px' }, 600);

        $(".menuFG").animate({ opacity: '0' }, 800);
        $(".menu").delay(3400).fadeIn(900);
        $(".menuFG").delay(3400).animate({ opacity: '0.3' }, 700);

        $("#pagetop").delay(3400).fadeIn(900);
        $("#footer").delay(3400).fadeIn(900);


        $("#homeButton").delay(4200).animate({ top: '0px' }, 1000);
        $("#menuButton").delay(4200).animate({ top: '0px' }, 1000);
        $('#welcomeFG3').delay(4200).fadeIn(1000);
    } else {
        document.getElementById('welcome1').style.display = 'block';
        $(".welcome").css({ top: '220px' });

        document.getElementById('welcomeFG').style.display = 'none';
        document.getElementById('welcomeFG2').style.display = 'none';

        var menu = document.getElementsByClassName("menu");
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = 'block';
        }

        $(".menuFG").css({ opacity: '0.3' });

        $("#pagetop").css({ display: 'block' });
        $("#footer").css({ display: 'block' });

        $("#homeButton").css({ top: '0px' });
        $("#menuButton").css({ top: '0px' });
        document.getElementById('welcomeFG3').style.display = 'block';
    
    }
}

function animateForeground() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    if (animate) {
        $("#welcomeFG").animate({ height: 'toggle' }, 500);

        $("#headerFG").delay(500).animate({ width: 'toggle' }, 600);
        $("#headerFG").delay(100).animate({ width: 'toggle' }, 600);
        $("#headerFG").animate({
            opacity: '0.1'
        });
        $("#headerFG2").delay(1100).fadeOut(10);
        $("#headerFG").delay(200).animate({ width: 'toggle' }, 600, function () {
            if ($('#hiddenmenu').is(":hidden")) {
                $("#menuButton").fadeIn("slow");
                $("#closemenuButton").fadeOut("slow");
            }
        });
    } else {
        document.getElementById('welcomeFG').style.display = 'none';
        document.getElementById('headerFG').style.display = 'block';
        $("#headerFG").css({ opacity: '0.1' });
        document.getElementById('headerFG2').style.display = 'none';
    }
}

function slideIn(el, el2) {
    var i;
    if (animate) {

        for (i = 0; i < el.length; i++) {
            $(el[i]).each(function () {
                $(this).delay(1600).slideDown(1200);
            });
        }

        for (i = 0; i < el2.length; i++) {
            $(el2[i]).each(function () {
                $(this).delay(3000).fadeIn(10);
            });
        }
    } else {
        for (i = 0; i < el.length; i++) {
            $(el[i]).each(function () {
                $(this).show();
            });
        }

        for (i = 0; i < el2.length; i++) {
            $(el2[i]).each(function () {
                $(this).show();
            });
        }
    }
}

function changePage(url, index) {
   
    if (animate) {
        if (index == 1) {
            $("#welcome1").fadeOut(1);
            $(".scrollHeader").fadeOut(1);
            $("#hiddenmenu").fadeOut(1);
            $("#hiddenmenuBackground").fadeOut(10);
            $("#homeButton").fadeOut(1);
            $("#menuButton").fadeOut(1);
            $("#closemenuButton").fadeOut(1);
        }
        $("#welcomeFG").animate({ height: 'toggle' }, 300);
        setTimeout(function () { location.href = url }, 300);
    } else {
        location.href = url;
    }
}

function changeAnimate() {
    if (animate) {
        animate = false;
        document.getElementById("animateButton").style.background = '#AAA';
        document.getElementById("animateButton").style.color = 'black';
        document.getElementById("animateButton").textContent = 'アニメ　オフ';
    } else {
        animate = true;
        document.getElementById("animateButton").style.background = '#7CC';
        document.getElementById("animateButton").style.color = 'white';
        document.getElementById("animateButton").textContent = 'アニメ　オン';
    }
}

function toppage() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
function showHideUpArrow() {
    $("#uparrow").slideToggle(250);
}


function fading(x) {
    $(x).animate({
        opacity: '0'
    });

}
function highlight(x) {
    $(x).animate({
        opacity: '0.3'
    });

}

function showMenu() {
    $("#closemenuButton").fadeIn("fast");
    $("#hiddenmenuBackground").fadeIn("fast");
    $("#menuButton").fadeOut("fast");
    $("#hiddenmenu").fadeIn("fast");
}
function hideMenu() {
    $("#hiddenmenu").fadeOut(0);
    $("#menuButton").fadeIn("slow");
    $("#hiddenmenuBackground").fadeOut("fast");
  
}
function showMenuButton() {
    if ($('#hiddenmenu').is(":hidden")) {
        $("#closemenuButton").fadeOut("slow");
    }
}

function show_sight(x) {
    $(x).fadeIn("slow");
}
function hide_sight(x) { 
    $(x).fadeOut("slow");
}

function loadMenuButton() {
    if (animate) {
        $("#homeButton").delay(1000).animate({ top: '0px' }, 1000);
        $("#menuButton").delay(1000).animate({ top: '0px' }, 1000);
    } else {
        $("#homeButton").css({ top: '0px' });
        $("#menuButton").css({ top: '0px' });
    }
}



function show_subheader() {
    $("#thaigeo_header").animate({ width: 'toggle' }, 650);
    $("#thaisightseeing_header").delay(600).animate({ width: 'toggle' }, 650);
    $("#thaifood_header").delay(1200).animate({ width: 'toggle' }, 650);
}
function scrollto(x) {
    if (x == '#thaigeo') {
        $('html, body').animate({
            scrollTop: $(x).offset().top
        }, "slow");
    } else {
        $('html, body').animate({
            scrollTop: $(x).offset().top-110
        }, "slow");
    }
}


function show_food_desc(x) {
    var name = x.concat("_name");
    var desc = x.concat("_desc");
    var pic = x.concat("_pic");

    $(desc).animate({ height: 'toggle' }, 400);
    $(name).delay(300).animate({ height: 'toggle' }, 400);
    $(pic).animate({opacity:'0.6'});
  
    var thisPos = $(pic).offset().top;
    var topOfWindow = $(window).scrollTop();
    var thisBottomPos = thisPos + $(pic).height();
    var bottomOfWindow = $(window).scrollTop() + window.innerHeight;
  
    if (topOfWindow +140 >= thisPos) { 
    
        $('html, body').animate({
            scrollTop:thisPos-140
        }, "slow");
    }else{
        if(bottomOfWindow < thisBottomPos){
                   
            $('html, body').animate({
                scrollTop: thisPos+ 30 - window.innerHeight + $(pic).height()
            }, "slow");
        }
    }

}

function hide_food_desc(x) {
    var name = x.concat("_name");
    var desc = x.concat("_desc");
    var pic = x.concat("_pic");

    $(name).animate({ height: 'toggle' }, 400);
    $(desc).delay(300).animate({ height: 'toggle' }, 400);
    $(pic).animate({ opacity: '1.0' });
}


function openTab(id, elmnt,init) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("jpcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("jplink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";

    }

    if(init==0){
        document.getElementById(id).style.display = "block";
    }
    var selectedTab = document.getElementById(elmnt.concat('1'));
    selectedTab.style.background = '#7CC';


    var selectedTab = document.getElementById(elmnt.concat('2'));
    selectedTab.style.background = '#7CC';

}

function showImages(el,limit) {

    var windowHeight = jQuery(window).height();
    $(el).each(function () {        
       var topOfWindow = $(window).scrollTop();
       if (topOfWindow > limit) {
           $(this).slideDown(250);
       }else{
           $(this).slideUp("fast");
       }
 
   });
}

function fixSubheader(el) {

    var windowHeight = jQuery(window).height();
    $(el).each(function () {
       
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow > 150) {
            $(this).css({ position: 'fixed', left: '0px', top: '65px' });
        }else{
            $(this).css({ position: 'absolute', left: '0px', top: '215px' });
        }

    });
}

function highlightSubheader(init) {
    var tab = document.getElementsByClassName("thaiLink");
    if(init==0){
        var el = ".content2";
        var i = 0;
        

        $(el).each(function () {

            var thisPos = $(this).offset().top;
            if (i >= 1) {
                thisPos = thisPos - 120;
            }

            var topOfWindow = $(window).scrollTop();

            if (topOfWindow >= thisPos) {
                tab[i].style.background = '#7CC';
                for (var j = 0; j < i; j++) {
                    tab[j].style.background = '#AAA';
                }
            }else{
                tab[i].style.background = '#AAA';
            }
            i++;
        });
   
    }else{

        for(var j=1;j<3;j++){
            tab[j].style.background="#AAA";
        }
        tab[0].style.background = "#7CC";
    }
}



