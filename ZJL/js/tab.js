var xianShi_ = document.getElementsByClassName('list');//点击显示隐藏内容
var yincang_ = document.getElementsByClassName('yincang');//隐藏内容
var somlist_ = document.getElementsByClassName('somlist');//点击切换
var suoyou_ = document.getElementsByClassName('suoyou');//点击被切换
function xianShi() {
    yincang_[0].style.display = 'block'

}
yincang_[0].onclick = function () {
    window.event ? event.cancelBubble = true : event.stopPropagation();
    yincang_[0].style.display = 'none'
}
somlist_[0].onclick = function () {
    window.event ? event.cancelBubble = true : event.stopPropagation();
}
suoyou_[0].onclick = function () {
    window.event ? event.cancelBubble = true : event.stopPropagation();
}

var a = document.getElementsByClassName('dianji');
var div = document.getElementsByClassName('qiehuan');
for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('index', i)
    a[i].onclick = function () {
        var index = this.getAttribute('index');
        for (var j = 0; j < a.length; j++) {
            // 如果有‘avtive’时删除‘avtive’
            a[j].classList.remove("active");
            // 在类名列表添加‘avtive’
            a[index].classList.add("active");
        }
        for (var k = 0; k < div.length; k++) {
            div[k].style.display = 'none'
            div[index].style.display = 'block'
        }
    }
}