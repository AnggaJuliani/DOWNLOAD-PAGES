for(let i=0;i<40;i++){

const p=document.createElement("div");

p.style.position="fixed";
p.style.width="4px";
p.style.height="4px";

p.style.background="red";

p.style.borderRadius="50%";

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

p.style.opacity=Math.random();

p.style.boxShadow="0 0 10px red";

document.body.appendChild(p);

animate(p);
}

function animate(el){

let y=Math.random()*window.innerHeight;

setInterval(()=>{

y-=1;

if(y<0){
y=window.innerHeight;
}

el.style.top=y+"px";

},30);
}
