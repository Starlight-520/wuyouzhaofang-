// tab切换
var a = document.getElementsByClassName('a1');
var div = document.getElementsByClassName('box3');
for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('index', i)
    a[i].onclick = function () {
        var index = this.getAttribute('index');
        for (var j = 0; j < a.length; j++) {
            a[j].className = 'a1';
            a[index].className = 'a1 active'
        }
        for (var k = 0; k < div.length; k++) {
            div[k].style.display = 'none'
            div[index].style.display = 'block'
        }
    }
}