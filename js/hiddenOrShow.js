// 显示隐藏内容
// (function hiddenOrshow() {
//     var External_hidden = document.getElementById("External_hidden");
//     var tab_All = document.getElementById("tab_All");
//
//     if (External_hidden.style.display=='block'){
//         tab_All.style.display=='none';
//     }
// })()
//第二部分内容

function oneTest(){
    $('#outer_middleAddone').mouseover(function () {
        $('#External_hidden').show();
    })
    $('#outer_middleAddone').mouseout(function () {
        $('#External_hidden').hide();
    })
}
function tewTest(){
    $('#outer_middleAdd').mouseover(function () {
        $('#tab_All').show();
    })
    $('#outer_middleAdd').mouseout(function () {
        $('#tab_All').hide();
    })
}