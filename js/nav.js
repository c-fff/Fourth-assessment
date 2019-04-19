// nav中集团网站箭头的更换
function nav_wrap(){
    var nav_left = document.getElementById("nav-left");
    var arrow = document.getElementById("arrow");
        nav_left.onclick= function nav_arrow() {
            if(arrow.src.match("down")){
                arrow.src="img/nav_up.png";
            }else{
                arrow.src="img/nav_down.png";
            }
        }
};
//nav中集团网站的隐藏内容
(function nav_hidden(){
    $(document).ready(function () {
        $("#nav-left").click(function () {
            $("#nav_hiddenAll").slideToggle(200);
        });
    })
})();
//nav语言图片的更换
function nav_wrapTwo() {
    var nav_right = document.getElementById("nav-right");
     nav_right.onclick = function nav_arrowTwo() {
        var arrow_two = document.getElementById("arrow_two");
        if (arrow_two.src.match("down")) {
            arrow_two.src = "img/nav_up.png";
        } else {
            arrow_two.src = "img/nav_down.png";
        }
    }
}
(function nav_hidden(){
    $(document).ready(function () {
        $("#nav-right").click(function () {
            $(".nav_hiddenEntire").slideToggle(200);
        });
    })
})();