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
    fetch(id){
        let endpoint =""
        if(!this.checkType(id)) {
            throw new Error("invalid id, please enter an integer")
        } else {
            return id
        }
    }    
}

module.exports = AsynchronousMethods