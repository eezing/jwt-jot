import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import JwtJot from '../../src/token-handler'

describe('token-handler - getClaim method', function() {

    it('Should return valve of payload property at given key name - value is of type string', function() {

        // setup
        var payload = { role: 'admin', obj: { foo: 'bar' }, exp: Math.round(new Date().getTime()/1000) + 3600 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.getClaim('role')
        expect(result).to.equal(payload.role)
    })

    it('Should return valve of payload property at given key name - value is of type object', function() {

        // setup
        var payload = { role: 'admin', obj: { foo: 'bar' }, exp: Math.round(new Date().getTime()/1000) + 3600 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.getClaim('obj')
        expect(result).to.eql(payload.obj)
    })

    it('Should return undefined if given key is not a propery in payload', function() {

        // setup
        var payload = { role: 'admin', obj: { foo: 'bar' }, exp: Math.round(new Date().getTime()/1000) + 3600 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.getClaim('somethingNotThere')
        expect(result).to.be.undefined
    })

    it('Should return undefined if no claim key given', function() {

        // setup
        var payload = { role: 'admin', obj: { foo: 'bar' }, exp: Math.round(new Date().getTime()/1000) + 3600 }
        var token = jwt_simple.encode(payload, 'xxx')
        var subject = new JwtJot(token)

        // action -> result
        var result = subject.getClaim()
        expect(result).to.be.undefined
    })

})
