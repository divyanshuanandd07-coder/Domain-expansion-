// ===============================
// DOMAIN AWAKENING - PART 3A
// ===============================

const loading = document.getElementById("loading");
const menu = document.getElementById("menu");
const domain = document.getElementById("domainScreen");

const blueBtn = document.getElementById("blueBtn");
const redBtn = document.getElementById("redBtn");

const flash = document.getElementById("flash");
const rings = document.getElementById("rings");
const lightning = document.getElementById("lightning");

const title = document.getElementById("domainTitle");
const quote = document.getElementById("quote");
const replay = document.getElementById("replay");

// Loading Screen
setTimeout(() => {

loading.style.display = "none";

menu.classList.remove("hidden");

},3000);


// Blue Realm

blueBtn.onclick = () => {

startDomain(

"#00c8ff",

"INFINITY REALM",

"Beyond space... beyond limits."

);

};


// Red Realm

redBtn.onclick = () => {

startDomain(

"#ff2020",

"CRIMSON SHRINE",

"Where power becomes absolute."

);

};


// Main Animation

function startDomain(color,name,text){

menu.classList.add("hidden");

domain.classList.remove("hidden");

title.innerHTML = name;

title.style.color = color;

rings.style.borderColor = color;

rings.style.boxShadow = `0 0 40px ${color}`;

flashScreen();

shake();

setTimeout(()=>{

quote.style.opacity="1";

quote.innerHTML=text;

replay.style.display="block";

},3500);

}


// White Flash

function flashScreen(){

flash.style.opacity="1";

setTimeout(()=>{

flash.style.opacity=".5";

},100);

setTimeout(()=>{

flash.style.opacity="0";

},350);

}


// Camera Shake

function shake(){

let i=0;

const s=setInterval(()=>{

document.body.style.transform=

`translate(${Math.random()*8-4}px,

${Math.random()*8-4}px)`;

i++;

if(i>25){

clearInterval(s);

document.body.style.transform="translate(0,0)";

}

},40);

}


// Replay

replay.onclick=()=>{

location.reload();

};
// ===============================
// DOMAIN AWAKENING - PART 3B
// Particles, Lightning & Aura
// ===============================

// Create Particles
function createParticles(color){

const container=document.getElementById("particles");

container.innerHTML="";

for(let i=0;i<180;i++){

let p=document.createElement("div");

p.style.position="absolute";

p.style.width=(2+Math.random()*5)+"px";

p.style.height=p.style.width;

p.style.background=color;

p.style.borderRadius="50%";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.boxShadow=`0 0 15px ${color}`;

p.style.opacity=Math.random();

container.appendChild(p);

animateParticle(p);

}

}

// Particle Animation

function animateParticle(p){

let x=parseFloat(p.style.left);

let y=parseFloat(p.style.top);

let dx=(Math.random()-.5)*0.4;

let dy=(Math.random()-.5)*0.4;

setInterval(()=>{

x+=dx;

y+=dy;

if(x<0)x=100;

if(x>100)x=0;

if(y<0)y=100;

if(y>100)y=0;

p.style.left=x+"vw";

p.style.top=y+"vh";

},40);

}

// Lightning

function startLightning(color){

setInterval(()=>{

lightning.style.opacity=".9";

lightning.style.background=

`linear-gradient(transparent,${color},transparent)`;

setTimeout(()=>{

lightning.style.opacity="0";

},120);

},1800);

}

// Screen Glow

function glow(color){

document.body.style.boxShadow=`inset 0 0 150px ${color}`;

}

// Call effects when domain starts

const oldStart=startDomain;

startDomain=function(color,name,text){

oldStart(color,name,text);

createParticles(color);

startLightning(color);

glow(color);

}
// ===============================
// DOMAIN AWAKENING - PART 3C
// Final Reveal & Cinematic Effects
// ===============================

// Typewriter Effect
function typeWriter(text){

quote.innerHTML="";

quote.style.opacity="1";

let i=0;

const timer=setInterval(()=>{

quote.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},40);

}

// Energy Pulse

function energyPulse(color){

let pulse=document.createElement("div");

pulse.style.position="fixed";

pulse.style.left="50%";

pulse.style.top="50%";

pulse.style.width="20px";

pulse.style.height="20px";

pulse.style.borderRadius="50%";

pulse.style.border=`4px solid ${color}`;

pulse.style.transform="translate(-50%,-50%)";

pulse.style.boxShadow=`0 0 30px ${color}`;

pulse.style.pointerEvents="none";

document.body.appendChild(pulse);

let size=20;

const grow=setInterval(()=>{

size+=25;

pulse.style.width=size+"px";

pulse.style.height=size+"px";

pulse.style.marginLeft=-(size/2)+"px";

pulse.style.marginTop=-(size/2)+"px";

pulse.style.opacity=1-size/900;

if(size>900){

clearInterval(grow);

pulse.remove();

}

},30);

}

// Random Flash

function randomFlash(){

setInterval(()=>{

flash.style.opacity=Math.random()*0.4;

setTimeout(()=>{

flash.style.opacity="0";

},100);

},3000);

}

// Extend Domain Animation

const previousStart=startDomain;

startDomain=function(color,name,text){

previousStart(color,name,text);

energyPulse(color);

randomFlash();

setTimeout(()=>{

typeWriter(text);

},1800);

}

// Final Quote Animation

setTimeout(()=>{

const final=document.createElement("h2");

final.innerHTML="⚡ Stand Beyond Limits ⚡";

final.style.position="fixed";

final.style.bottom="30px";

final.style.left="50%";

final.style.transform="translateX(-50%)";

final.style.color="white";

final.style.fontSize="28px";

final.style.textShadow="0 0 20px cyan";

document.body.appendChild(final);

},6000);

// Replay Button Animation

replay.addEventListener("mouseenter",()=>{

replay.style.transform="scale(1.1)";

});

replay.addEventListener("mouseleave",()=>{

replay.style.transform="scale(1)";

});
