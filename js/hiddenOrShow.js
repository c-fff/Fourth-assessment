// 显示隐藏内容
(function hiddenOne(){
    $(document).ready(function(){
        $("#out-middleOne").mousemove(function(){
            $(".External_hidden").animate({
                display:'block'
            },1000)
        })
    })
})();
// $("#out-middleOne").mouseout(function(){
//     $(".External_hidden").animate({
//         display:'none'
//     })
// })