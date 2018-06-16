var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var current = slideIndex;

    $(x[current-1]).fadeOut(300);
   
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        if (i != current - 1)
            x[i].style.display = "none";
    }
    //x[slideIndex - 1].style.display = "block";
    $(x[slideIndex - 1]).fadeIn(300);

    var dots = document.getElementsByClassName("photonumber");

    for (i = 0; i < dots.length; i++) {
        dots[i].style.background = '#FFFFFF';
        dots[i].style.color = 'Black';
    }
    dots[slideIndex - 1].style.background = '#88CCCC';
    dots[slideIndex - 1].style.color = 'White';

}