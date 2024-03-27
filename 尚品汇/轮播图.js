window.onload = function () {
    var list = document.getElementById("lbt");
    var btnleft = document.getElementById("leftbtn");
    var btnright = document.getElementById("rightbtn");
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transiton = '300ms ease';
        if (newLeft <= -3450) {
            list.style.left = 0 + 'px';
        }
        if (newLeft > 0) {
            list.style.left = -2760 + 'px';
        }
    }
    btnleft.onclick = function () {
        index-=1;
        if(index<1){
            index=5;
        }
        showButton();
        animate(690);
    }
    btnright.onclick = function () {
        index+=1;
        if(index>5){
            index=1;
        }
        showButton();
        animate(-690);
    }
    var timer;
    function autoplay() {
        timer = setInterval(function () {
            btnright.onclick()
        }, 2000);
        btnleft.style.display='none'
        btnright.style.display='none'
    }
    autoplay();
    var container = document.querySelector('.zynrlbt')
    function stopplay() {
        clearInterval(timer);
        btnleft.style.display='block'
        btnright.style.display='block'
    }
    container.onmouseover = stopplay;//不能加括号，加括号立即执行，等待触发应不加括号
    container.onmouseout = autoplay;//原理同上
    var buttons=document.getElementById("yuandian").getElementsByTagName("li");
    var index=1;
    function showButton(){
        for(let i=0;i<buttons.length ;i++){
            if(buttons[i].className=='on'){
                buttons[i].className='';
            }
        }
        buttons[index-1].className='on';
    }
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){
            var clickIndex=parseInt(this.getAttribute('index'));
            var offset=690*(index-clickIndex);
            animate(offset);
            index=clickIndex;
            showButton();
        }
    }
}