function rem() {
    var w = 375
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
    var html = document.querySelector('html');
    html.style.fontSize = (clientWidth / w) * 10 + 'px';
}
window.onload = rem
window.onresize = rem