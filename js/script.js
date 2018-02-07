one = document.querySelector(".one");
hoqqa = document.querySelector(".hoqqa");
lan = document.querySelector(".lan");
bodyCont = document.querySelector(".bodyCont");
slider = document.querySelector(".slider");
p = 7;

setTimeout(one.addEventListener("click", function () {
	hoqqa.style.top = p + "px";
	hoqqa.style.fontSize = "16" + "px";
	lan.style.display = "block";
	slider.style.marginTop = "48" + "px";
	setTimeout(bodyCont.addEventListener("click", function () {
		lan.style.display = "none";
		hoqqa.style.top = "40" + "px";
		slider.style.marginTop = "-21" + "px";
		hoqqa.style.fontSize = "27" + "px";
	}, 1000))
}), 1000);
conasme = document.querySelector(".conasme");
contact_us = document.querySelector(".contact_us");
bodyCont = document.querySelector(".bodyCont");
exit = document.querySelector(".exit");
int_bank = document.querySelector(".int_bank");
bank = document.querySelector(".bank");
bodyCont = document.querySelector(".bodyCont");



bank_online = document.querySelector(".bank_online");
bankonline = document.querySelector(".bankonline");


leo = document.querySelector(".leo");
eto = document.querySelector(".eto");
ferdi = document.querySelector(".ferdi");
search = document.querySelector(".search");
logo = document.querySelector(".logo");
ferdi_content=document.querySelector('.ferdi_content');
korparativ_content=document.querySelector('.korparativ_content');

ferdi.addEventListener("click", function () {
	setTimeout(function () {
		ferdi_content.style.background="";		
		search.style.marginTop = -450 + "px";
	setTimeout(function () {
			korparativ_content.style.opacity="0";
			ferdi_content.style.opacity="1";
		setTimeout(function () {
			eto.style.clipPath = "polygon(0 0 , 72% 0 , 36% 100% , 0 100%)"
			}, 400)
		},300)
	}, 100)
})

korparativ = document.querySelector(".korparativ");
korparativ.addEventListener("click", function () {
	setTimeout(function () {
		search.style.marginTop = -450 + "px";
	setTimeout(function () {
			korparativ_content.style.opacity="1";
			ferdi_content.style.opacity="0";
		setTimeout(function () {
			eto.style.clipPath = "polygon(0 0 , 72% 0 , 36% 100% , 0 100%)"
			}, 400)
		},300)
	}, 100)
})

logo.addEventListener("click", function () {
	setTimeout(function () {
		eto.style.clipPath = "polygon(0 0 , 100% 0 , 100% 100% , 0 100%)"
	setTimeout(function () {
			korparativ_content.style.opacity="0";
			ferdi_content.style.opacity="0";
			
		setTimeout(function () {
			leo.style.opacity = ".6";
			over.style.opacity = "0";
			search.style.marginTop = 60 + "px";
		}, 400)
	},300)
		
	}, 100)
})


over = document.querySelector(".over");

korparativ.addEventListener("click", function () {
	setTimeout(function () {
		over.style.top = -700 + "px";
	}, 1)
})
ferdi.addEventListener("click", function () {
	setTimeout(function () {
		over.style.top = 0 + "px";
	}, 1)
})
ferdi.addEventListener("click", function () {
	setTimeout(function () {
		leo.style.top = 700 + "px";
	}, 1)
})
korparativ.addEventListener("click", function () {
	setTimeout(function () {
		leo.style.top = 0 + "px";
	}, 1)
})

///////////////////////////

int_bank.addEventListener("click", function () {
		setTimeout(function () {
			bank.style.right = -3.2+"%";
			exit.addEventListener("click", function () {
				bank.style.right = -50 + "%";
			})
		}, 1)
})
secbir = document.querySelector(".secbir");
seciki = document.querySelector(".seciki");
fake_close=document.querySelector(".fake_close");

$(document).ready(function(){



	$(secbir).on('click',function(){
		// $('.content_ferdi').css('display','block');
		
		$('.content_ferdi').css('opacity','1');
		$('.content_ferdi').css('left','0%');
		$('.content_kor').css('left','100%');
		
		// $('.content_ferdi').show(0);
		$('.btn-clr-one').show(0);
		$('.btn-clr').hide(0);
		
	})
	
	$(seciki).on('click',function(){
		// $('.content_ferdi').css('display','none');
		$('.content_ferdi').css('opacity','0');
		
		$('.content_ferdi').css('left','-100%');
		$('.content_kor').css('left','0%');
		// $('.content_ferdi').hide(0);
		$('.btn-clr').show(0);
		$('.btn-clr-one').hide(0);
	})
})




bank_online.addEventListener("click", function () {
	setTimeout(function () {
		bankonline.style.right = -3.2+"%";
		exit.addEventListener("click", function () {
				bankonline.style.right = -50 + "%";
		})
	},1)
},1)

contact_us.addEventListener("click", function () {
	setTimeout(function () {
		setTimeout(function () {
			conasme.style.right = -3.2+"%";
			exit.addEventListener("click", function () {
				yan.style.right = -50 + "%";
			})
		},1)
	},1)
})

search_bars = document.querySelector(".search_bars");
yan = document.querySelector(".yan");
search_bars.addEventListener("click", function () {
	setTimeout(function () {
		setTimeout(function () {
			yan.style.right = -3.2+"%";
			yan.style.zIndex = "10000000";
			exit.addEventListener("click", function () {
				yan.style.right = -60 + "%";
			})
			
		}, 1)
	}, 1)
})

$(document).ready(function () {
	$(int_bank).on('click', function (e) {
		e.stopPropagation();
		$('.bodyCont').addClass('cc');
		$('.fake_con').addClass('fake_close');
	})
	$('.bank').click(function(e) {
		e.stopPropagation();
	})
	$(window).on('click', function (e) {
		var target = $(e.target);
		if (!target.hasClass('.bank')) {
			$('.leo').css('height','100vh');
			$('.leo').css('marginTop','0');
			$( '.bodyCont').removeClass( 'cc' );	
			$( '.fake_con').removeClass( 'fake_close' );				
			$('.bank').css('right', '-50%')			
		}
	}) 
	
	$(bank_online).on('click', function (e) {
		e.stopPropagation();
		$('.bodyCont').addClass('cc');
		$('.fake_con').addClass('fake_close');
	})
	$('.bankonline').click(function(e) {
		e.stopPropagation();
	})
	$(window).on('click', function (e) {
		var target = $(e.target);
		if (!target.hasClass('.bankonline')) {
			$('.leo').css('height','100vh');
			$('.leo').css('marginTop','0');
			$( '.bodyCont').removeClass( 'cc' );
			$( '.fake_con').removeClass( 'fake_close' );	
			$('.bankonline').css('right', '-50%')			
		}
		
	})
	
	$(contact_us).on('click', function (e) {
		e.stopPropagation();
		$('.bodyCont').addClass('cc');
		$('.fake_con').addClass('fake_close');
		
	})
	$('.conasme').click(function(e) {
		e.stopPropagation();
	})
	$(window).on('click', function (e) {
		var target = $(e.target);
		if (!target.hasClass('.conasme')) {
			$('.leo').css('height','100vh');
			$('.leo').css('marginTop','0');
			$( '.bodyCont').removeClass( 'cc' );
			$( '.fake_con').removeClass( 'fake_close' );								
			$('.conasme').css('right', '-50%')			
		}
		
	})

	$('.exit').on('click',function(e){		
		$( '.fake_con').removeClass( 'fake_close' );				
		$( '.bodyCont').removeClass( 'cc' );	
		$('.conasme').css('right', '-50%')			
		$('.bankonline').css('right', '-50%')			
		$('.bank').css('right', '-50%')			
	})

	$(search_bars).on('click', function (e) {
		e.stopPropagation();
		$('.bodyCont').addClass('cc');
		$('.fake_con').addClass('fake_close');
		
	})
	$('.yan').click(function(e) {
		e.stopPropagation();
	})
	$(window).on('click', function (e) {
		var target = $(e.target);
		if (!target.hasClass('.yan')) {
			$('.leo').css('height','100vh');
			$('.leo').css('marginTop','0');
			$( '.bodyCont').removeClass( 'cc' );
			$( '.fake_con').removeClass( 'fake_close' );								
			$('.yan').css('right', '-60%')			
		}
	})

	$('.owl-carousel').owlCarousel({
	dots:true,
	nav:false,	
	items:1,
	loop:true,
    margin:10,
    autoplay:true,
	animateOut: 'fadeOut',	
	mouseDrag: false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
			
            items:1
        },
        1000:{
			
            items:1
        }
    }
})

});