const axios=require("axios")
const {version} = require('../package.json')
module.exports=createAxios(baseURL){
    return axios.create({
        baseURL:baseURL,
        timeout:5000,
        headers:{
            'Content-Type':'application/json;charset-utf-8',
            'User-Agent': `layt/${version}`
        }
    })
}