function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}

const texts=["Aspiring IT Professional","Python Developer","Problem Solver"];
let count=0,index=0,currentText="",letter="";
(function type(){
if(count===texts.length){count=0;}
currentText=texts[count];
letter=currentText.slice(0,++index);
document.getElementById("typing").textContent=letter;
if(letter.length===currentText.length){
count++;index=0;setTimeout(type,1500);
}else{setTimeout(type,100);}
})();

const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top=sec.getBoundingClientRect().top;
if(top<window.innerHeight-100){
sec.classList.add("show");
}
});
});

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
topBtn.style.display=window.scrollY>300?"block":"none";
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
