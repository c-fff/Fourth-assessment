
$(function(){
    //小圆点的索引 图片的索引为+1
    var i=0;
    var timer=null;
    //添加图片数量的圆点
    for(var j=0;j<$('.img li').length;j++){
        $('.num').append('<li></li>');
    }
//给第一个圆点添加样式
    $('.num li').first().addClass('active');
//    复制第一张图片
    var firstimg = $('.img li').first().clone();
//    将第一张图片放到最后一张并且将ul宽度设置为所有图片的宽度
    $('.img').append(firstimg).width($('.img li').length*($('.img img').width()));
//下一个按钮
    $('.next').click(function(){
        i++;
        //当点击次数等于图片数量时
        if (i==$('.img li').length){
            //使其值为1
            i=1;
            //保证无缝连接设置其距左边位置
            $('.img').css({left:0});
        };
        $('.img').stop().animate({
            left:-i*1366
        },300);
        //设置小圆点指示
        if(i==$('.img li').length-1){
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    })
//        上一个按钮
    $('.prev').click(function(){
        i--;
        if(i==-1){
            i=$('.img li').length-2;
            $('.img').css({left:-($('.img li').length-1)*1366});
        }
        $('.img').stop().animate({left:-i*1366},300);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    })
//鼠标放到圆点上图片进行切换
    $('.mun li').mouseover(function(){
        //取得图片的索引
        var _index = $(this).index();
        $('img').stop().animate({
         //通过点击按钮获取相应的图片
            left:-_index*1366},150);
        //给相应的按钮添加上css
        $('.mun li').eq(_index).addClass('active').siblings().removeClass('active');
    })
// //    通过定时器自动播放
//     timer=setInterval(function(){
//         i++;
//         //如果等于图片的张数回到第一张
//         if (i==$('.img li').length){
//             i=1;
//             $('.img li').css({left:0});
//         };
//         //停止动画时
//         $('.img').stop().animate({left:-i*1366},300);
//         // 如果到第三张图片时回到第一张图片
//         if (i==$('.img li').length-1)
//         {
//                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
//         }
//            //若不到第三张时每个图片对应按钮该有的样式
//         else{
//                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
//         }
//     },1000);
// //鼠标移入时暂停动画移除时动画开始
//     $('.carousel').hover(function(){
//         clearInterval(timer);
//     },function(){
//         timer=setInterval(function(){
//                i++;
//                if (i==$('.img li').length) {
//                    i=1;
//                    $('.img').css({left:0});
//                };
//
//                $('.img').stop().animate({left:-i*1366},300);
//                if (i==$('.img li').length-1) {
//                    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
//                }else{
//                    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
//                }
//            },1000)
//        })

});


