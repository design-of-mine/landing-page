window.addEventListener('load', () =>{
    let preloader = document.querySelector('#pl');
    preloader.classList.add('load-finish');
    setTimeout(() =>{
        let mainCover = document.querySelector('#mainCover');
        mainCover.classList.remove('holderStart');
    }, 400);
});

$( document ).ready(function() {

$('.galleryItemHide').click(function(e) {
    let $current = $('.galleryItemHide.galleryItem');
    $current.addClass('galleryItemSD');
    setTimeout(function(){
        $current.removeClass('galleryItemSD');
        $current.removeClass('galleryItem');
        $current.next('.galleryItemHide').addClass('galleryItem');
        }, 300);
    });
    let gItemFirst = document.querySelector('#galleryItemFirst'),
        gItemLast = document.querySelector('#galleryItemLast');
    gItemLast.addEventListener('click', () =>{
    setTimeout(() =>{
        gItemFirst.classList.add('galleryItem')
    }, 300)
});

$('.pricingBlockHide').click(function(e) {
    let $current = $('.pricingBlockHide.pricingBlockShow');
    $current.addClass('pricingBlockSD');
    setTimeout(function(){
        $current.removeClass('pricingBlockSD');
        $current.removeClass('pricingBlockShow');
        $current.next('.pricingBlockHide').addClass('pricingBlockShow');
        }, 300);
    });
    let pItemFirst = document.querySelector('#priceItemFirst'),
        pItemlast = document.querySelector('#priceItemlast');
    pItemlast.addEventListener('click', () =>{
    setTimeout(() =>{
        pItemFirst.classList.add('pricingBlockShow')
    }, 300)
});

});







