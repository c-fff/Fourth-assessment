// 显示隐藏内容
(function hidden_show(){
        var out_middleOne = document.getElementById("out-middleOne");
        var External_hidden = document.getElementById("External_hidden");
         var rectObject = out_middleOne.getBoundingClientRect();
         alert(rectObject.top);
    //    获取鼠标坐标的位置
        document.onmousemove=function(e){
            var loc = "y:"+e.pageY;
            out_middleOne.onmousemove=function(){
                if(24<loc<104){
                    External_hidden.style.display="block";
                }
            }
            out_middleOne.onmouseout=function(){
                // if(24<loc<104){
                //     External_hidden.style.display="block";
                // }
                if (loc<24){
                    External_hidden.style.display="none";
                }

            }
        }
    })();
// $("#out-middleOne").mouseout(function(){
//     $(".External_hidden").animate({
//         display:'none'
//     })
// })