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