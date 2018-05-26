// 01 ------- 小明送花给女神A
// let Flower = function(){}
// const xiaoming = {
//     sendFlower:function(target){
//         let flower = new Flower()
//         target.receiveFlower(flower)
//     }
// }
// const A = {
//     receiveFlower:function(flower){
//         console.log('收到花')
//     }
// }
// xiaoming.sendFlower(A)
// 02 ------- A对象不允许直接访问,需要代理对象来过滤请求
// let Flower = function(){}
// const xiaoming = {
//     sendFlower:function(target){
//         target.receiveFlower()
//     }
// }
// const B = {
//     receiveFlower:function(){
//         let flower = new Flower()
//         A.receiveFlower(flower)
//     }
// }
// const A = {
//     receiveFlower:function(flower){
//         console.log('收到花')
//     }
// }
// xiaoming.sendFlower(B)
// 03 ---------------- 利用代理对象等本体对象准备好时,再把请求提交
// 利用延时模拟过滤
let Flower = function(){}
const xiaoming = {
    sendFlower:function(target){
        target.receiveFlower()
    }
}
const B = {
    receiveFlower:function(){
        A.listenGood(()=>{
            let flower = new Flower()
            A.receiveFlower(flower)
        })
    }
}
const A = {
    receiveFlower:function(flower){
        console.log('收到花')
    },
    listenGood:function(fn){
        setTimeout(()=>{
            fn()
        },5000)
    }
}
xiaoming.sendFlower(B)