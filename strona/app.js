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
let exit = document.querySelector(".span");
icon.addEventListener("click", ()=>{
    menu.classList.add('menu_a'); 
    menu.style.display="block";
});
exit.addEventListener("click", ()=>{
    menu.classList.remove('menu_a');
});






const animateClass = document.querySelectorAll('p');

function ElementInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  animateClass.forEach((element) => {
    if (ElementInView(element)) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);
