
var a_idx = 0;

function getRandomColor(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("小黄", "本来", "昨天 ", "应该", "更新", "今天", "补上", "今天", "日期", "也算", "不错" ,"我谨","代表","我自己","祝你","521","小满","节气","快乐");
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