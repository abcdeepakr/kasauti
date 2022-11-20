/**
 * FILE CONSISTS OF ASYNCHRONOUS FUNCTIONS
 * TESTING THE ASYNCHRONOUS FUNCTIONS FOR
 * - RESPONSE
 * - RESPONSE TYPE
 * - NO RESPONSE
 * - INVALID REQUEST PAYLOAD
 * - INVALID ENDPOINT
 * - ERROR
 * */

const API = require('./api/api')
class AsynchronousMethods{
    checkType(id) {
        if(typeof(id) != "number") {
            return false
        } else{
            return true
        }
    }
    checkBody(body){
        /**
         * perform following checks
         * all required parameters exits
         * data for all required parameter exists
         * datatype of all parameters are valid
         */
        let response = true
        if(!body.title && !body.body && !body.userId && !body.route){
            response = false
        } 
        if(typeof(body.title)!="string" || typeof(body.body)!="string" || typeof(body.route)!="string" || typeof(body.userId)!="number"){
            response = false
        }
        return response
        
    }
    async fetch(id){
        let api = new API()
        if(!this.checkType(id)) {
            throw new Error("invalid id, please enter a valid integer");
        } else {
            const response = await api.fetch('posts',id)
            return response
        }
    }    
    async insert(body){
        let api = new API()
        if(!this.checkBody(body)) {
            throw new Error("invalid request body");
        } else {
            const response = await api.post(body)
            return response
        }
    }
}

module.exports = AsynchronousMethods