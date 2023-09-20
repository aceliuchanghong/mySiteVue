// 函数：计算两个浮点数的差
export function subtract(a, b) {
    return a - b;
}
// 函数：防抖函数
export function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
    }
}
// 函数：节流函数
export function throttle(fn, delay) {
let timer = null;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn();
            timer = null;
        }, delay);
    }
}
// 函数：判断是否是IOS  是IOS返回true
export function isIOS() {
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isIOS;
}
// 函数：获取当前时间磋
export function getNowTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day  = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}