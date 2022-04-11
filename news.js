var dropdown = document.querySelectorAll(".dropdown");
var dropItem = dropdown[0].querySelectorAll(".dropdown-menu");
dropdown[0].addEventListener('mouseover', function(){
    dropItem[0].style.display="block";
});

dropdown[0].addEventListener('mouseout', function(){
    setTimeout(function(){
        dropItem[0].style.display="none";
    },500);
});


var dropItem2 = dropdown[1].querySelectorAll(".dropdown-menu");
dropdown[1].addEventListener('mouseover', function(){
    dropItem2[0].style.display="block";
    dropItem[0].style.transitionDuration = '3s';
});

dropdown[1].addEventListener('mouseout', function(){
    setTimeout(function(){
        dropItem2[0].style.display="none";
        dropItem[0].style.transitionDuration = '3s';
    },500);
    
});
