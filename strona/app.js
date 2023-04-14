$arrow = document.querySelector('.up_arrow_gif');
$y = document
window.addEventListener("scroll", ()=>{
    let y = window.scrollY;
    if(y>=100){
        $arrow.style.display="block";
    }else{
        $arrow.style.display="none";
    }
});

let menu = document.querySelector(".menu");
let icon = document.querySelector(".icon");
let exit = document.querySelector(".menu span");
icon.addEventListener("click", ()=>{
    menu.classList.add('menu_a'); 
    menu.style.display="block";
});
exit.addEventListener("click", ()=>{
    menu.classList.remove('menu_a');
});
