
let count1=0;
let count2=0;
for(var i=0;i<5;i++){
function result(){
    //IMAGE1
    var img1_random=Math.floor(Math.random()*3)+1;
    var set_img1=document.querySelector(".img1").setAttribute("src","images/img"+img1_random+".png");
    //IMAGE2
    var img2_random=Math.floor(Math.random()*3)+1;
    var set_img_2=document.querySelector(".img2").setAttribute("src","images/img"+img2_random+".png");
    //RESULT
    var result=document.querySelector(".result");
    var player1_result=document.querySelector(".p1");
    var player2_result=document.querySelector(".p2");


    if((img1_random==1 && img2_random==3)|| (img1_random==2 && img2_random==1) || (img1_random==3 && img2_random==2)){
        result.innerHTML="Player 1 Wins";
        count1++;
        player1_result.innerHTML="Player 1 Score : "+count1;
        
    }
    else if(img1_random==img2_random){
        result.innerHTML="Draw";
    }
    else{
        result.innerHTML="Player 2 Wins";
        count2++;
        player2_result.innerHTML="Player 2 Score : "+count2;
        
    }
    if(count1==10){
        alert("Player 1 Wins");
        count1=0;
        count2=0;
        player1_result.innerHTML="Player 1 Score : "+count1;
        player2_result.innerHTML="Player 1 Score : "+count2;
        
    }
    if(count2==10){
        alert("Player 2 wins");
        count1=0;
        count2=0;
        player1_result.innerHTML="Player 1 Score : "+count1;
        player2_result.innerHTML="Player 1 Score : "+count2;
    }
}
}

