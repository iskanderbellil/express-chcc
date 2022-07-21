const path =require("path")
const date=new Date()
const day=date.getDay()
const hour=date.getHours()


const logger =(req,res,next)=>{
if( day>0 && day<6 && hour > 9 && hour <17){
    next()
}else{
    res.status(400)
    //res.sendFile(path.join(__dirname,"../public","error.html"))
    res.send('the website is not available from 9a.m to 5p.m from Monday to Friday')
}

}
module.exports=logger;