const Koa=require("koa")
const {koaBody} = require("koa-body")
const utils=require("../utils")
exports.Event=class Event{
  constructor(port, bot){
    this.bot=bot
    this.eventMap=new Map()
    const app=new Koa()
    app.use(koaBody({multipart:true}))
    app.use(async (ctx, next)=>{
      this.emit(ctx.request.body.post_type, ctx.request.body)
    })
    app.listen(port)
  }
  on(event, handler){
   if(!this.eventMap.has(event)){
     this.eventMap.set(event, [handler])
   } else{
     this.eventMap.get(event).push(handler)
   }
  }
  emit(event_name, event){
    const handlers=this.eventMap.get(event_name)
    if(handlers){
    handlers.forEach((handler)=>{
      handler.call(this.bot, event_name, event)
    })
    }
    return;
  }
}
