
import jwt_decode from 'jwt-decode'

export default function(token) {

    this.token = token
    
    this.decoded = jwt_decode(this.token)

    this.expired = function() {
        let now = Math.round(new Date().getTime()/1000)
        return now >= this.decoded.exp
    }

    this.getClaim = function(key) {
        return this.decoded[key]
    }

    this.getToken = function() {
        return this.token
    }
}
