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