var dropdown = document.querySelectorAll(".dropdown");
var dropItem = dropdown[0].querySelectorAll(".dropdown-menu");
dropdown[0].addEventListener('mouseover', function(){
    dropItem[0].style.display="block";
})

dropdown[0].addEventListener('mouseout', function(){
    dropItem[0].style.display="none";
})


var dropItem2 = dropdown[1].querySelectorAll(".dropdown-menu");
dropdown[1].addEventListener('mouseover', function(){
    dropItem2[0].style.display="block";
})

dropdown[1].addEventListener('mouseout', function(){
    dropItem2[0].style.display="none";
})