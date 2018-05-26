// 缓存代理 --- 为一些开销大的运算提供缓存
//计算乘积
// 01 --- 普通
// function nult(){
//     console.log('计算开始')
//     let a = 1
//     for(let i=1,l =arguments.length;i<l;i++){
//         a *= arguments[i]
//     }
//     return a
// }
// nult(1,2,4)
// nult(1,2,4)
// 02 --- 缓存
// function nult(){
//     console.log('计算开始')
//     let a = 1
//     for(let i=1,l =arguments.length;i<l;i++){
//         a *= arguments[i]
//     }
//     return a
// }
// let proxyMult = (function(){
//     let cache = {}
//     return function(){
//         let key = [...arguments].join('')
//         if(key in cache){
//             return cache[key]
//         }
//         return cache[key] = nult(...arguments)
//     }
// })()
// console.log(proxyMult(1,2,4))
// console.log(proxyMult(1,2,4))
// 03 --- 创建缓存代理的工厂
function createProxyFartory(fn){
    let cache = {}
    return function(){
        let key = [...arguments].join('')
        if(key in cache){
            return cache[key]
        }
        return cache[key] = fn(...arguments)
    }
}
function nult(){
    console.log('计算开始')
    let a = 1
    for(let i=1,l =arguments.length;i<l;i++){
        a *= arguments[i]
    }
    return a
}
let proxyMult = createProxyFartory(nult)
console.log(proxyMult(1,2,4))
console.log(proxyMult(1,2,4))