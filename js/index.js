$(document).ready(function() {
     $('.top ul li').click(function() {
		   var i = $(this).index();
		   $(this).addClass('act').siblings().removeClass('act');
		   $('.tab .box').eq(i).show().siblings().hide();
     });
     $('.top_db ul li').click(function() {
		   var i = $(this).index();
		   $(this).addClass('act_db').siblings().removeClass('act_db').addClass('noact_db');
		   $('.tab .box_db').eq(i).show().siblings().hide();
     }); 
     $('.myact ul li').click(function() {
		   var i = $(this).index();
		   $(this).addClass('myact_db').siblings().removeClass('myact_db').addClass('nomyact_db');
		   $('.mytab .box_myact').eq(i).show().siblings().hide();
     });
})



