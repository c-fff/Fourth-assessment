// nav中集团网站箭头的更换
(function nav_wrap(){
    //内容切换
    var Hide = true;
    document.getElementById("nav_hiddenAll"). style.transition="2s";
    document.getElementById("nav-left").onclick=function() {
        if (Hide) {
            document.getElementById("nav_hiddenEntire").style.display = 'none';
            document.getElementById("nav_hiddenAll").style.display = 'block';
            Hide = !Hide;
        } else {
            document.getElementById("nav_hiddenAll").style.display = 'none';
            Hide = !Hide;
        }
        //图片切换
        if (arrow.src.match("down")) {
            arrow.src = "img/nav_up.png";
        } else {
            arrow.src = "img/nav_down.png";
        }
    }
})();
//nav中集团网站的隐藏内容

//nav语言图片的更换
(function nav_wrapTwo() {
    var Hide = true;

    document.getElementById("nav_hiddenEntire").style.transition = "2s";
    document.getElementById("nav-right").onclick = function () {
        if (Hide) {
            document.getElementById("nav_hiddenAll").style.display = 'none';
            document.getElementById("nav_hiddenEntire").style.display = 'block';
            Hide = !Hide;
        } else {
            document.getElementById("nav_hiddenEntire").style.display = 'none';
            Hide = !Hide;
        }

        //图片切换
        if (arrow_two.src.match("down")) {
            arrow_two.src = "img/nav_up.png";
        } else {
            arrow_two.src = "img/nav_down.png";
        }
    }
})();
