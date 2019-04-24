//第二页面
function addition(){
    var fold = document.getElementById("fold");
    $(document).ready(function(){
            $("#additional_page").slideToggle(100);
        })
        if (fold.src.match("wendang"))
        {
            fold.src="img/err.png";
        }else
            {
            fold.src="img/wendang.png";
        }
};

