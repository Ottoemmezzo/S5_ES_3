var rightArrow=document.getElementsByClassName('right-arrow');
var leftArrow=document.getElementsByClassName('left-arrow');
var play=document.getElementsByClassName('play-pause');
var cube=document.querySelectorAll('.cube');
var gradi=0;
var flag=true;
var inter; 

rightArrow[0].addEventListener('click',ruotaDx);
leftArrow[0].addEventListener('click',ruotaSx);
rightArrow[0].addEventListener('mouseover',ruotaDXHalf);
leftArrow[0].addEventListener('mouseover',ruotaSXHalf);
rightArrow[0].addEventListener('mouseout',centraDx);
leftArrow[0].addEventListener('mouseout',centraSx);

play[0].addEventListener('click',ruotaGiro);

function ruota(){
    cube[0].style.transform=`rotateY(${gradi}deg)`;
    cube[1].style.transform=`rotateY(${gradi}deg)`;   
    cube[2].style.transform=`rotateY(${gradi}deg)`;  

}
function centraDx(){
   gradi-=25;
   ruota();

}
function centraSx(){
    gradi+=25;
    ruota();
 
 }
 
function ruotaDXHalf()
{
    gradi+=25;
    ruota();
}
function ruotaSXHalf()
{
    gradi-=25;
    ruota();

}
function ruotaDx(){
    gradi+=90;
    ruota()
}
function ruotaSx(){
   gradi-=90;
   ruota();
}
function ruotaGiro(){
   
   if(flag){
    flag=false;
    inter=setInterval(ruotaDx,1000);
   }
   else clearInterval(inter);
        
        
}
