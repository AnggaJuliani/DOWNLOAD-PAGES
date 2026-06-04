const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

for(let i=0;i<80;i++){

let p=document.createElement("div");

p.style.position="fixed";
p.style.width="3px";
p.style.height="3px";

p.style.borderRadius="50%";

p.style.background="#ff003c";

p.style.boxShadow="0 0 10px #ff003c";

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

document.body.appendChild(p);

let speed=Math.random()*2+0.5;

setInterval(()=>{

let top=parseFloat(p.style.top);

top-=speed;

if(top<0)
top=window.innerHeight;

p.style.top=top+"px";

},30);
}
