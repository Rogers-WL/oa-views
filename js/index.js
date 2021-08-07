



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
//     // 登录验证   
//             var code = ""; //接收验证码   
//             var code = code.length
//             $('#code-btn').click(function(){
//             var count = 35;
//                 var phone=$("#phone").val();//手机号码  
//                 var reg_phone = /[1-9][0-9]?/;
//                 if(!reg_phone.test(phone)){   //验证手机是否符合格式
//                     alert("填写手机号");
//                     return false;
//                 } 
//                 //开始计时  
//                 $("#code-btn").attr('disabled','disabled');  
//                 $("#code-btn").html("倒计时" + count + "秒");  
//                 var timer = setInterval(function(){  
//                 count--;
//                 $("#code-btn").html("倒计时" + count + "秒"); 
//                 if (count==0) {
//                     clearInterval(timer);
//                     $("#code-btn").attr("disabled",false);//启用按钮  
//                     $("#code-btn").html("获取验证码");
//                     code = "";//清除验证码。如果不清除，过时间后，输入收到的验证码依然有效 
//                 }
//                 },1000);
               
//             //向后台发送处理数据  
//             // $.ajax({  
//             //     type: "POST", //用POST方式传输  
//             //     dataType: "text", //数据格式:JSON  
//             //     url: '', //目标地址  
//             //     data: "phone=" + phone + "&code=" + code,  
//             //     error: function (XMLHttpRequest, textStatus, errorThrown) { },  
//             //     success: function (msg){ }  
//             // });
//         });  
//         // 密码明文
//         $(".pas").on("click", ".hide-icon", function () {
//             $(this).removeClass("hide-icon").addClass("transform");
//             $(this).prev().attr("type", "text");
//         });
//         $(".pas").on("click", ".transform", function () {
//             $(this).removeClass("transform").addClass("hide-icon");
//             $(this).prev().attr("type", "password");
//         });
//         $(".regi").click(function(){
//             var account =$('#account').val();
//             var code = $('#code').val();
//             var password = $('#password').val();
//             var repassword = $('#repassword').val();
//             var invite_code = $('#invite_code').val();
//             var reg = new RegExp(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/);
//             if($('#account').attr('placeholder') == '邮箱'){
//                 if(!reg.test(account)) return alert('请输入正确的邮箱');
//                 var type = 2;
//             }else{
//                 if(account == '') return alert("请输入用户名");
//                 var type = 1;
//             }
//             if(code.length != 6 ) return alert('验证码不正确');
//             if(password.length < 8 || password.length > 16) return alert("请输入正确密码");     
//             if(password != repassword) return alert('两次密码不一致');


//             if (!$('#checkbox2').attr('checked')){
//                 return alert('请先同意用户协议！')
//             }
            
//             $.ajax({
//                 type:'POST',
//                 url:'http://miliao.macdapp.com/api.php/register',
//                 data:{
//                     type:type,
//                     account:account,
//                     password:password,
//                     code:code,
//                     invite_code:invite_code
//                 },
//                 dataType:'JSON',
//                 success:function(data){
//                     //请求成功
//                     if(data.code == 1){
//                         alert(data.msg);
//                     }
//                 },
//                 error:function(data){
                    
//                 }
//             });

//             var bbb = $('label');
//         // console.log(bbb);
//         alert(bbb.attr("text-content-after")) 
//         });

        
// function cancelChooseColor( clickId ){
//     var inputColor = $('#color-input-green').parents(".chat-windows-color-div ").find("input");
//     for(var i=0;i<inputColor.size();i++){
//         inputColor[i].checked=false;
//     }
//                 //选中点击的元素
//                 $(clickId)[0].checked=true;
//                 //获取选中元素的color值
//                 var color =$(clickId).val();
//                 $('#color-input-diy-value').val(color);
//             }
//             $(document).on("click","#color-input-red",function(){
//                 cancelChooseColor("#color-input-red");
//             })
//             $(document).on("click","#color-input-orange",function(){
//                 cancelChooseColor("#color-input-orange");
//             })
//             $(document).on("click","#color-input-yellow",function(){
//                 cancelChooseColor("#color-input-yellow");
//             })
//             $(document).on("click","#color-input-green",function(){
//                 cancelChooseColor("#color-input-green");
//             })
//             $(document).on("click","#color-input-blue",function(){
//                 cancelChooseColor("#color-input-blue");
//             })
//             $(document).on("click","#color-input-purple",function(){
//                 cancelChooseColor("#color-input-purple");
//             })
//                //协议弹窗
//         $('.Popup').click(function(){
//             $(".Popuplist").show();
//         })
//         $('.icon-close').click(function(){
//             $(".Popuplist").hide();
//         })
//         $('.popdown').click(function(){
//             $(".Popuplist1").show();
//         })
//         $('.icon-close1').click(function(){
//             $(".Popuplist1").hide();
//         })
//          //协议弹窗 
//         $('.Popup1').click(function(){
//             $(".Popuplist").show();
//         })
//         $('.icon-close').click(function(){
//             $(".Popuplist").hide();
//         })
//         $('.popdown1').click(function(){
//             $(".Popuplist1").show();
//         })
//         $('.icon-close1').click(function(){
//             $(".Popuplist1").hide();
//         })
})



