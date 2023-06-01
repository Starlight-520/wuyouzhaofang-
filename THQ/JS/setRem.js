// 动态配置rem
// 默认1rem = 10px
function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.querySelector('html');
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px';
}
window.onload = setRem;//当页面加载完成
window.onresize = setRem;// 当页面大小重置时调用函数