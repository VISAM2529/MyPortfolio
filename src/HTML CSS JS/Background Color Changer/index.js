var NumberOfbtn=document.querySelectorAll("button").length
for(i=0;i<NumberOfbtn;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.bgColor=this.innerHTML
       })
}
