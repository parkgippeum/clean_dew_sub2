/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});

/* tab */
$(".tab-button")
.eq(0)
.on("click", function () {
  $(".tab-button").removeClass("active");
  $(".tab-button").eq(0).addClass("active");

  $(".tab-content").removeClass("show");
  $(".tab-content").eq(0).addClass("show");
});

$(".tab-button")
.eq(1)
.on("click", function () {
  $(".tab-button").removeClass("active");
  $(".tab-button").eq(1).addClass("active");

  $(".tab-content").removeClass("show");
  $(".tab-content").eq(1).addClass("show");
});

$(".tab-button")
.eq(2)
.on("click", function () {
  $(".tab-button").removeClass("active");
  $(".tab-button").eq(2).addClass("active");

  $(".tab-content").removeClass("show");
  $(".tab-content").eq(2).addClass("show");
});

for (let i = 0; i < 3; i++) {
$(".tab-button")
  .eq(i)
  .on("click", function () {
    $(".tab-button").removeClass("active");
    $(".tab-button").eq(i).addClass("active");

    $(".tab-content").removeClass("show");
    $(".tab-content").eq(i).addClass("show");
  });
}