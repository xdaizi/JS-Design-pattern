// 01 ---- 虚拟代理实现图片预加载
// 核心:使用loading占位,加载真正得src在赋值给img,本体和代理的对外接口须一致
// 本体对象
let myImg = (function(){
    let imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc:function(src){
            imgNode.src = src
        }
    }
})()
// 代理对象 --- 利用延时模拟
let proxyImg = (function(){
    let img = new Image
    img.onload = function(){
        // 当真正加载的好时候交给本体对象
        myImg.setSrc(this.src)
    }
    return {
        setSrc: function(src){
            myImg.setSrc('酷拉皮卡.jpg')
            setTimeout(()=>{
                img.src = src
            },4000)
        }
    }
})()
proxyImg.setSrc('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2116862500,1982035904&fm=27&gp=0.jpg')