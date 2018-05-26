// 点击一次向服务器发送一次请求,上传文件
// 01 --- 不使用代理
// function syncFile(id){
//     console.log('上传的文件id'+id)
// }
// let checkbox = document.querySelectorAll('input')
// for(let i = 0,l = checkbox.length;i < l;i++){
//     checkbox[i].onclick = function(){
//         if(this.value){
//             syncFile(this.id)
//         }
//     }
// }
// 02 ---- 使用代理,提交4000内所有点击文件
function syncFile(id){
    console.log('上传的文件id'+id)
}
let proxySyncFile = (function(){
    let cache = [] // 存储id
    let timer = null // 定时器
    return function(id){
        cache.push(id)
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            syncFile(cache.join(','))
            clearTimeout(timer)
            timer = null
            cache.length = 0
        },4000)
    }
})()
let checkbox = document.querySelectorAll('input')
for(let i = 0,l = checkbox.length;i < l;i++){
    checkbox[i].onclick = function(){
        if(this.value){
            proxySyncFile(this.id)
        }
    }
}