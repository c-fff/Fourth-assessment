// nav中集团网站箭头的更换
function nav_wrap(){
    // var nav_left = document.getElementById("nav-left");
    var arrow = document.getElementById("arrow");
    // var nav_hiddenAll = document.getElementById("nav_hiddenAll");
    $(document).ready(function () {
        $("#nav_hiddenAll").slideToggle(200);
    });
    if(arrow.src.match("down")){
        arrow.src="img/nav_up.png";
    }else{
        arrow.src="img/nav_down.png";
    }
};
//nav中集团网站的隐藏内容

//nav语言图片的更换
function nav_wrapTwo() {
    // var nav_right = document.getElementById("nav-right");
        var arrow_two = document.getElementById("arrow_two");
    var nav_hiddenAll = document.getElementById("nav_hiddenAll");
    nav_hiddenAll.style.display="none";
        $(document).ready(function () {
             $(".nav_hiddenEntire").slideToggle(200);
         });
        if (arrow_two.src.match("down")) {
            arrow_two.src = "img/nav_up.png";
        } else {
            arrow_two.src = "img/nav_down.png";
        }
}
