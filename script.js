for(let i=0;i<120;i++){

const p=document.createElement("div");

p.style.position="fixed";

p.style.width="3px";
p.style.height="3px";

p.style.borderRadius="50%";

p.style.background="#ff1744";

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

p.style.boxShadow="0 0 10px red";

document.body.appendChild(p);

let speed=Math.random()*2+0.5;

setInterval(()=>{

let y=parseFloat(p.style.top);

y-=speed;

if(y<0){

y=window.innerHeight;
}

p.style.top=y+"px";

},30);
}
