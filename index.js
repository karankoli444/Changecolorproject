const colors=["green","red","rgba(133,122,200)", "#f15025","yellow",'hsla(0, 100%, 50%, 0.3)'];
const color=document.querySelector('.color-box');
let bgcolor=document.querySelector('.color-box');
let colorname=document.getElementById('color-name');

const btn=document.querySelector('#get-btn');

btn.addEventListener('click',function(){
   let randomnumber=getRandomnumber();
   color.textContent=colors[randomnumber];
   bgcolor.style.backgroundColor=colors[randomnumber];
   colorname.textContent=colors[randomnumber];
})


function getRandomnumber(){
     return Math.floor(Math.random()*colors.length);
       
}