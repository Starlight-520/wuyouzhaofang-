// 验证码
var date_ = document.getElementsByClassName('date')[0];
var num = 60;
var timer = null;
function shijian() {
    clearInterval(timer);

    timer = setInterval(function () {
        num--;
        date_.innerHTML = `(${num}秒)重发`
        // 当num == 0 的时候 清除计时器
        if (num == 0) {
            clearInterval(timer);
            num = 60;
            date_.innerHTML = `发送验证码`
        }
    }, 1000)
}


var zhuce_ = document.querySelector('.zhuce');
var input_0 = document.getElementsByTagName('input')[0];
var input_1 = document.getElementsByTagName('input')[1];
var input_2 = document.getElementsByTagName('input')[2];
var input_3 = document.getElementsByTagName('input')[3];

input_0.onchange = function () {
    var dui = /^1[3-9][0-9]{9}$/
    var si = input_0.value
    if (dui.test(si)) {
        alert('手机号输入正确')
    } else {
        alert('输入有误，请重新输入')
    }
}
input_1.onchange = function () {
    var dui1 = /^\d{4}$/
    var si1 = input_1.value
    if (dui1.test(si1)) {
        alert('验证码输入正确')
    } else {
        alert('输入有误，请重新输入,验证码为4位数字')
    }
}
input_2.onchange = function () {
    var dui2 = /^\w{6}$/
    var si2 = input_2.value
    if (dui2.test(si2)) {
        alert('密码输入正确')
    } else {
        alert('输入有误，请重新输入，密码为6位由数字、字母、下划线组成')
    }
}
input_3.onchange = function () {
    var dui3 = input_2.value
    var si3 = input_3.value
    if (si3 == dui3 && !si3 == '') {
        alert('密码输入正确')
    } else {
        alert('输入有误，两次密码不一致')
    }
}