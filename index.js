  
  //detecting button press
  for(var i=0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
     
          soundReact(this.innerHTML);
         buttonAnimation(this.innerHTML);
    });
   }

   //detecting keypress
     document.addEventListener("keypress",function(event){
         soundReact(event.key);
        buttonAnimation(event.key);
     });


function soundReact(key){
    
    
    switch(key){
      case "w":
          var ad= new Audio("./sounds/crash.mp3");
          ad.play();
          break;
       
       case "a":
          var ad= new Audio("./sounds/kick-bass.mp3");
          ad.play();    
          break;
    
      case "s":
          var ad= new Audio("./sounds/snare.mp3");
          ad.play();    
          break;
    
      case "d":
          var ad= new Audio("./sounds/tom-1.mp3");
          ad.play(); 
          break;
          
      case "j":
          var ad= new Audio("./sounds/tom-2.mp3");
          ad.play();    
          break;
    
      case "k":
          var ad= new Audio("./sounds/tom-3.mp3");
          ad.play();    
          break;
    
      case "l":
          var ad= new Audio("./sounds/tom-4.mp3");
          ad.play();    
          break;
    }
} 

  function buttonAnimation(curkey){
    var curElement= document.querySelector("."+curkey);
      
      curElement.classList.add("pressed");

    setTimeout(function(){
     curElement.classList.remove("pressed");
    } ,100 );

}