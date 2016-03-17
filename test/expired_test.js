
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import JwtJot from '../src/index'

describe('expired method', function() {

    it('Should return true if given an expired token', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) - 1 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.expired()
        expect(result).to.equal(true)
    })

    it('Should return true if given a token with exp equal to now', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.expired()
        expect(result).to.equal(true)
    })

    it('Should return false if given a non-expired token', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 1 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.expired()
        expect(result).to.equal(false)
    })

})
