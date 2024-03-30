//event.pageX 鼠标距离最左侧距离
//event.pageY 鼠标距离最右侧距离
//.offsetLeft     盒子距页面左
//.offsetTop     盒子距页面上



var box = document.querySelector(".box"); // 获取box元素
// 鼠标在元素上按下开始拖拽
box.onmousedown = function () {
    // 获取按下鼠标时 盒子与页面的距离
    var originBoxX = box.offsetLeft;
    var originBoxY = box.offsetTop;
    // 获取按下鼠标时 鼠标与页面的距离
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    
    // 在页面上移动
    window.onmousemove = function () {
        // 鼠标滑动的距离 = 鼠标移动后的位置 - 按下鼠标时的位置
        var distanceX = event.pageX - mouseX;
        var distanceY = event.pageY - mouseY;
        // 给元素重新赋值 上左定位的位置
        box.style.left = originBoxX + distanceX + "px";
        box.style.top = originBoxY + distanceY + "px";
    };
    // 鼠标松开取消事件
    box.onmouseup = function () {
        // 解绑在页面上滚动的事件
        window.onmousemove = null;
    };
};