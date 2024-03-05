var NumberOfBtn=document.querySelectorAll("button").length
for(i=0;i<NumberOfBtn;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){
    var btn=this.innerHTML
    makesound(btn);
   })
}

document.addEventListener("keypress",function(event){
   makesound(event.key);
});

function makesound(key){
   switch(key){
      case "w":
         var audio= new Audio("sound/w.mp3")
         audio.play()
      break
      case "a":
         var audio= new Audio("sound/a.mp3")
         audio.play()
      break
      case "s":
         var audio=new Audio("sound/s.mp3")
         audio.play()
      break
      case "d":
         var audio=new Audio("sound/d.mp3")
         audio.play()
      break
      case "j":
         var audio=new Audio("sound/j.mp3")
         audio.play()
      break
      case "k":
         var audio=new Audio("sound/k.mp3")
         audio.play()
      break
      case "l":
         var audio=new Audio("sound/l.mp3")
         audio.play()
      break
}
}
