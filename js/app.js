$(document).reday(function(){
    $('.slider').slick({
        arrow:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let hamberger = document.querySelector('.hambereger');
    let times=document.querySelector('.times');
    let mobileNav=document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');

    })
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
        
    })
});
//sticky nav code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}