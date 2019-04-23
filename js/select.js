window.onload=function () {
    var nav=document.getElementById('nav');
    var oNav=nav.getElementsByTagName('li');

    var container=document.getElementById('container');
    var oDiv=container.getElementsByClassName('tab');
//遍历所有的li
    for(var i=0;i<oNav.length;i++){
//循环遍历使 内容隐藏
        for(var m=1;m<oNav.length;m++){
            oNav[m].className='';
            oDiv[m].style.display="none";
        }
        oNav[i].index=i;
//为li绑定响应函数
        oNav[i].onclick=function () {
//当点击的时候先去掉li和内容的所有的样式
            for(var i=0;i<oNav.length;i++){
                oNav[i].className='';
                oDiv[i].style.display="none";
            }
//使对应的添加css样式
            this.className='act';
//将内容的索引跟标签的索引联系起来
            oDiv[this.index].style.display="block"
        }

    }

};


// window.onload=function () {
//     var nav=document.getElementById('nav');
//     var oNav=nav.getElementsByTagName('li');
//
//     var container=document.getElementById('container');
//     var oDiv=container.getElementsByClassName('tab');
//     for(var i=0;i<oNav.length;i++){
//         oNav[i].index=i;
//         oNav[i].onclick=function () {
//             for(var i=0;i<oNav.length;i++){
//                 oNav[i].className='';
//                 oDiv[i].style.display="none";
//             }
//             this.className='act';
//             oDiv[this.index].style.display="block"
//         }
//         for(var m=1;m<oNav.length;m++){
//             oNav[m].className='';
//             oDiv[m].style.display="none";
//         }
//     }
// };