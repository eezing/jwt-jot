
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import JwtJot from '../src/index'

describe('handler object', function() {

    it('Should return an instance if given a valid token', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var Subject = JwtJot

        // action -> result
        var result = new Subject(token)
        expect(result).to.be.instanceof(Subject)
    })

    it('Should have "decoded" property with value equal to token payload', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.decoded
        expect(result).to.be.eql(payload)
    })
})
