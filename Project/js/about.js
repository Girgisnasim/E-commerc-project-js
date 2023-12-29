var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var btnRating = document.getElementById("btn-rating");
var SpanRating=document.getElementById("SbtnRating")
var rating = document.getElementsByClassName("rating")[0];
s1.addEventListener("click", function () {
    s1.style.color = 'gold';
    s2.style.color = 'grey';
    s3.style.color = 'grey';
    s4.style.color = 'grey';
    s5.style.color = 'grey';
});
s2.addEventListener("click", function () {
    s1.style.color = 'gold';
    s2.style.color = 'gold';
    s3.style.color = 'grey';
    s4.style.color = 'grey';
    s5.style.color = 'grey';
});
s3.addEventListener("click", function () {
    s1.style.color = 'gold';
    s2.style.color = 'gold';
    s3.style.color = 'gold';
    s4.style.color = 'grey';
    s5.style.color = 'grey';
});
s4.addEventListener("click", function () {
    s1.style.color = 'gold';
    s2.style.color = 'gold';
    s3.style.color = 'gold';
    s4.style.color = 'gold';
    s5.style.color = 'grey';
});
s5.addEventListener("click", function () {
    s1.style.color = 'gold';
    s2.style.color = 'gold';
    s3.style.color = 'gold';
    s4.style.color = 'gold';
    s5.style.color = 'gold';
});
var show = document.getElementById("show");
var hide = document.getElementById("hide");
var comments = document.getElementById("comments");
show.addEventListener("click", function () {
    comments.style.visibility = 'visible';
})
hide.addEventListener("click", function () {
    comments.style.visibility = 'hidden';
})
btnRating.addEventListener("click", function () {
    SpanRating.textContent="Thank You"
})


var upArrow = document.getElementById("upArrow");
var up =document.getElementById("up")
upArrow.addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
})