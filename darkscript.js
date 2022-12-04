const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
//ตัวนั้มีการติ๊กถูกหรือป่าว ดั้งเดิมเป็นตัวติ๊กถูกอย่าลืม!!
function switchMode(e){
    if(e.target.checked){ 
        console.log("DarkMode");
        document.documentElement.setAttribute('data-theme','dark')
        DarkMode();
    }else {
        console.log("LightMode");
        document.documentElement.setAttribute('data-theme','light')
        LightMode();
    }
}
//เรียกใช้ฟังก์ชันเมื่อเปลี่ยนสถานะ
function DarkMode(){
    toggleIcon.children[0].textContent="โหมดกลางคืน"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    nav.style.background = 'rgba(0, 0, 0, 0.5)';

}
function LightMode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    nav.style.background = 'rgba(223, 184, 184, 0.5)';
}
switchToggle.addEventListener('change',switchMode);

const img = document.getElementById('imageProfile')
let imgselect = 1;



img.addEventListener('click',function(){

    imgselect++;
    if(imgselect==1){
        img.src = 'img\\Profile1.png'
    }else if (imgselect==2){
        img.src = 'img\\Profile2.png'
    }else if (imgselect == 3){
        img.src = 'img\\Profile3.png'
    }else if (imgselect == 4){
        img.src = 'img\\Profile4.png'
    }else if (imgselect == 5){
        img.src = 'img\\Profile5.png'
    }else if (imgselect == 6){
        img.src = 'img\\Profile6.png'
    }else if (imgselect == 7){
        img.src = 'img\\Profile7.png'
        imgselect = 0;
    }
}) 
//var ประกาศในฟังก์ชันสามารถ์ใช้ในฟังก์ชันนั้นได้หมด
//let เปลี่ยนค่าได้
//const ไม่สามารถเปลี่ยนค่าได้

let CollectGame = 0;
let Game1 = document.getElementById("Game1class");
const popup1 = document.getElementById("popup1");
let popupend = document.getElementById("popupend");
const gameimg = document.getElementById('Gameimg1');
const ishadowimg = document.getElementById('Gameshadow1');

//ส่วนเกม
gameimg.addEventListener('click',function(){
    ishadowimg.src = 'img\\Game1.png';
    Game1.classList.add("closeit");
    popup1.classList.add("openit");
    CollectGame ++;
    console.log(CollectGame);
})

function closepopup(){
    popup1.classList.remove("openit");
    popup2.classList.remove("openit");
    popup3.classList.remove("openit");
   
}
const popup2 = document.getElementById("popup2");
const Gameimg2 = document.getElementById("Gameimg2");
const Gameshadow2 = document.getElementById('Gameshadow2');
Gameimg2.addEventListener('click',function(){
    Gameimg2.classList.add("closeit");
    Gameshadow2.src = 'img\\Game2.png';
    popup2.classList.add("openit");
    CollectGame ++;
})

const popup3 = document.getElementById("popup3");
const Gameimg3 = document.getElementById("Gameimg3");
const Gameshadow3 = document.getElementById('Gameshadow3');
Gameimg3.addEventListener('click',function(){
    Gameimg3.classList.add("closeit");
    Gameshadow3.src = 'img\\Game3.png';
    popup3.classList.add("openit");
    CollectGame ++;
})
//ส่วนผลงาน
let popTop = document.getElementById("Poprsu");
const Cer1= document.getElementById("Cer1");
const Xclose= document.getElementById("Xclose");
Cer1.addEventListener('click',function(){
    popTop.classList.add("openrsu")
})
Xclose.addEventListener('click',function(){
    popTop.classList.remove("openrsu")
})
