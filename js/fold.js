//第二页面
function addition(){
    var fold = document.getElementById("fold");
    //主页面内容消失
    var layout = document.getElementById("layout");
    layout.style.display="none";
    //底部导航出现
    var foot_All = document.getElementById("foot_All");
    foot_All.style.display="block";
    //顶部导航栏固定
    // if (event.wheelDelta < 0) { //当滑轮向下滚动时
    //     var outer_All = document.getElementById("outer-All");
    //     outer_All.style.position='fixed';
    // }

    //页面出现并且图片进行切换
    $(document).ready(function(){
            $("#additional_page").slideToggle(100);
        if (fold.src.match("wendang"))
        {
            fold.src="img/err.png";
        }else
            {
            fold.src="img/wendang.png";
                //实现点击图片副页面关闭且回到主页面
            //回到主页面
                var layout = document.getElementById("layout");
                layout.style.display="block";
            //    关掉副页面
                var additional_page = document.getElementById("additional_page");
                additional_page.style.display="none";
                //    关掉黑色导航
                var foot_All = document.getElementById("foot_All");
                foot_All.style.display="none";
             }



})
}

