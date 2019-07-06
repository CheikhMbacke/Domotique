$(document).ready(function(){
    //Page d'accueil
    $('#off1').hide();
    $('#off2').hide();
    $('#off3').hide();
    $('#login').hide();
    $('.hidden').hide();
    $('#button').on('click',function(){
        $('#login').show();
        $('.hidden').show();
        /* $('#showcase').slideDown("slow"); */
        $('#showcase').hide();
      });
    //Home page
    //1
    $('#on1').on('click',function(){
        $('#on1').hide();
        $('#off1').show();
        document.getElementById('img1').src = "../Images/lamp.png";
        /* var imgsrc = $(".img").attr("src"); */
        /* alert(imgsrc); */
    });
    $('#off1').on('click',function(){
        $('#off1').hide();
        $('#on1').show();
        document.getElementById('img1').src = "../Images/lampOff.png";
    })
    //2
    $('#on2').on('click',function(){
        $('#on2').hide();
        $('#off2').show();
        document.getElementById('img2').src = "../Images/lamp.png";
        /* var imgsrc = $(".img").attr("src"); */
        /* alert(imgsrc); */
    });
    $('#off2').on('click',function(){
        $('#off2').hide();
        $('#on2').show();
        document.getElementById('img2').src = "../Images/lampOff.png";
    })
    //3
    $('#on3').on('click',function(){
        $('#on3').hide();
        $('#off3').show();
        document.getElementById('img3').src = "../Images/lamp.png";
        /* var imgsrc = $(".img").attr("src"); */
        /* alert(imgsrc); */
    });
    $('#off3').on('click',function(){
        $('#off3').hide();
        $('#on3').show();
        document.getElementById('img3').src = "../Images/lampOff.png";
    })
});