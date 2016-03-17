
import jwt_decode from 'jwt-decode'

export default function(token) {

    this.decoded = jwt_decode(token)
    this.expired = expired
    this.getClaim = getClaim

    function expired() {
        let now = Math.round(new Date().getTime()/1000)
        return now >= this.decoded.exp
    }

    function getClaim(key) {
        return this.decoded[key]
    }
}
