let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
let timeRef=document.querySelector('.span');
let int;

document.getElementById('btn1').addEventListener('click',()=>{
	int = setInterval(display,10);
});
document.getElementById('btn2').addEventListener('click',()=>{
	clearInterval(int);
});
document.getElementById('btn3').addEventListener('click',()=>{
	clearInterval(int);
	[hours,minutes,seconds]=[0,0,0,0];
	timeRef.innerHTML='00:00:00:00';
})

function display() {
	milliseconds+=10;
	if (milliseconds==1000) {
		milliseconds=0;
		seconds++;
		if(seconds==60){
			seconds=0;
			minutes++;
			if (minutes==60) {
			minutes=0;
			hours++;
		}
	}
}
	let h = hours< 10 ? "0" + hours : hours;
	let m = minutes< 10 ? "0" + minutes : minutes;
	let s = seconds< 10 ? "0" + seconds : seconds;
	let ms = milliseconds< 100 ? "0" + milliseconds : milliseconds;

	timeRef.innerHTML=`${h}:${m}:${s}:${ms}`;
}