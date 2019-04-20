 //event pada saat link di klik

 $('.page-scroll').on('click', function(e){

 		//ambil isi href
 		var tujuan = $(this).attr('href');

 		//tangkap elemen ybs
 		var elemenTujuan = $(tujuan);

 		//pindahkan scroll
 		//$('body').scrollTop(elemenTujuan.offset(.top));
 		$('html,body').animate({

 			scrollTop:elemenTujuan.offset().top -50
 		}, 1200,'easeInOutExpo');
 		
 		e.preventDefault();

 });
/* $('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});﻿*/


//parallax

//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});




$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//console.log(wScroll);
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/1.2+'%)'
	});
	//portfolio
	if(wScroll > $('.portfolio').offset().top - 250){
		//console.log('ok');
		$('.portfolio .thumbnail').each(function(i){
		  	setTimeout(function(){
		  		//console.log('ok');
		  		$('.portfolio .thumbnail').eq(i).addClass('muncul');
		  	}, 300 * (i+1));

		});
		//
	}

});
