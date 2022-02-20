
var a_idx = 0;

function getRandomColor(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("当你", "看到", "这个 ", "网站", "说明", "已经", "开始", "崭新", "旅程", "我想", "跟你" ,"一起","奋斗","拼搏","开心","快乐","不难过","一起","吃吃吃！");
        var $w = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $w.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandomColor(255,0)},${getRandomColor(255,0)},${getRandomColor(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($w);
        $w.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $w.remove();
            });
    });
});