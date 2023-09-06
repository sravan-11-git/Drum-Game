

for ( var i = 0 ; i < document.querySelectorAll('.drum').length ;i++){
    document.querySelectorAll("button")[i].addEventListener("click",event1);

    function event1(){
        var button1 = this.innerHTML;
        sound(button1);
        buttonAnimation(button1);
    }


    

}

document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonAnimation(event.key);
    

});


function sound(key){
    if ( key=== 'w'){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }

    else if ( key === 'a' ){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }


    else if ( key === 's' ){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    else if ( key === 'd' ){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }

    else if ( key === 'j' ){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if ( key === 'k' ){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }

    else if (key === 'l'){ 
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }

    


    

}

 function buttonAnimation(pressedKey){
     var newKey = document.querySelector("." + pressedKey);
     newKey.classList.add("pressed");
     setTimeout(function(){
        newKey.classList.remove("pressed")
     }, 100)

 }











