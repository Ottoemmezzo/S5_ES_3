var rightArrow=document.getElementsByClassName('right-arrow');
var leftArrow=document.getElementsByClassName('left-arrow');
var play=document.getElementsByClassName('play-pause');
var cube=document.querySelectorAll('.cube');
/*var faceFront2=document.querySelectorAll('.cube .front');
var faceFront3=document.querySelectorAll('.cube .front');*/
var gradi=0;
var flag=true;
var inter; 
rightArrow[0].addEventListener('click',ruotaDx);
leftArrow[0].addEventListener('click',ruotaSx);
rightArrow[0].addEventListener('mouseover',ruotaDXHalf);
leftArrow[0].addEventListener('mouseover',ruotaSXHalf);
rightArrow[0].addEventListener('mouseout',centra);
leftArrow[0].addEventListener('mouseout',centra);

play[0].addEventListener('click',ruotaGiro);

function centra(){
    cube[0].style.transform="rotateY(0deg)";
    cube[1].style.transform="rotateY(0deg)";   
    cube[2].style.transform="rotateY(0deg)";  

}
function ruotaDXHalf()
{
    cube[0].style.transform="rotateY(25deg)";
    cube[1].style.transform="rotateY(25deg)";   
    cube[2].style.transform="rotateY(25deg)";  
}
function ruotaSXHalf()
{
    cube[0].style.transform="rotateY(-25deg)";
    cube[1].style.transform="rotateY(-25deg)";   
    cube[2].style.transform="rotateY(-25deg)";  
}
function ruotaDx(){
   gradi+=90;
    cube[0].style.transform=`rotateY(${gradi}deg)`;
    cube[1].style.transform=`rotateY(${gradi}deg)`;   
    cube[2].style.transform=`rotateY(${gradi}deg)`;
}
function ruotaSx(){
   gradi-=90;
    cube[0].style.transform=`rotateY(${gradi}deg)`;
    cube[1].style.transform=`rotateY(${gradi}deg)`;   
    cube[2].style.transform=`rotateY(${gradi}deg)`;
}
function ruotaGiro(){
   
   if(flag){
    flag=false;
    inter=setInterval(giro,1000);
   }
   else clearInterval(inter);
        
        
}
function giro(){
    gradi+=90;
    cube[0].style.transform=`rotateY(${gradi}deg)`;
    cube[1].style.transform=`rotateY(${gradi}deg)`;   
    cube[2].style.transform=`rotateY(${gradi}deg)`;
}