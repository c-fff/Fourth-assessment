 // 获取div到浏览器顶部的距离
 function device() {
     var outer_wrap = document.getElementById("outer-wrap");
     if (0<=document.documentElement.scrollTop || document.body.scrollTop < 28) {
         outer_wrap.style.top = 0;
     }
     if (30 < document.documentElement.scrollTop || document.body.scrollTop) {
        var scrollFunc = function (event) {
            event = event || window.event;
                if (event.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件
                    if (event.wheelDelta > 0) { //当滑轮向上滚动时,内容出现
                        outer_wrap.style.top = 28+"px";
                        $(document).ready(function () {
                        $("#outer-wrap").slideDown(500);
                        });
                    }
                    if (event.wheelDelta < 0) { //当滑轮向下滚动时
                        $(document).ready(function () {
                        $("#outer-wrap").slideUp(500);
                        })
                    }
         }
     }
     }
     //给页面绑定滑轮滚动事件
     if (document.addEventListener) {
         document.addEventListener('DOMMouseScroll', scrollFunc, false);
     }
     //滚动滑轮触发scrollFunc方法 //ie 谷歌
     window.onmousewheel = document.onmousewheel = scrollFunc;
 }