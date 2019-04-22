// 显示隐藏内容
(function hidden_show(){
        var out_middleAddone = document.getElementById("outer_middleAddone");
        var External_hidden = document.getElementById("External_hidden");

         // var rectObject = out_middleOne.getBoundingClientRect();
         // alert(rectObject.top);
    //    获取鼠标坐标的位置
        document.onmousemove=function(e){
            var loc = "y:"+e.pageY;
            // console.log(loc);
            out_middleAddone.onmousemove=function(){
                if (0<loc<35){
                    console.log("我可以隐藏");
                    External_hidden.style.display="none";
                }
                if(42<loc<104){
                    console.log("我可以显示");
                    External_hidden.style.display="block";
                }
            };

        }
    })();
