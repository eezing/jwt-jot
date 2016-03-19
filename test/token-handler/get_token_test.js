
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import JwtJot from '../../src/token-handler'

describe('token-handler - getClaim method', function() {

    it('Should return token if instantiated with a valid token', function() {

        // setup
        var payload = { role: 'admin', obj: { foo: 'bar' }, exp: Math.round(new Date().getTime()/1000) + 3600 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.getToken()
        expect(result).to.eql(token)
    })
})
