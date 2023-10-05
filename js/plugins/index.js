exports.onMounted=(event)=>{
  event.on("message", (event)=>{
    console.log("消息来啦")
  })
}
