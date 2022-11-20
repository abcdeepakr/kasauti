
const axios = require('axios');
class API{
    constructor(){
        this.endpoint = "https://jsonplaceholder.typicode.com/"
    }
    async fetch(route,id){
        let fetchEndpoint  = this.endpoint + `${route}/${id}`
        const res = await axios.get(fetchEndpoint).then(post=>{
            return post
            
        }).catch(err=>{
            return err.response
        })
        return res;
    }
    async post(reqBody){
        let updateEndpoint  = this.endpoint + `${reqBody.route}`
        const postResponse = 
            await axios.post(updateEndpoint, reqBody)
            .then(response=>{
                return response
            }).catch(err=>{
                return err.response
            })
        return postResponse;
    }
    delete(){
    }
}

module.exports = API;