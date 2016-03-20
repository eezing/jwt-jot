import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import LocalStorage_mock from '../mocks/local-storage'
import { Browser } from '../../src'

describe('browser - getClaim method', function() {

    beforeEach(function() {
        global.localStorage = new LocalStorage_mock()
    })

    it('Should return claim equal to payload property', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var key = 'id_token'
        var subject = new Browser(key, token)


        // action -> result
        var result = subject.getClaim('role')
        expect(result).to.be.equal(payload.role)
    })

    it('Should return null if claim does not exist', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var key = 'id_token'
        var subject = new Browser(key, token)


        // action -> result
        var result = subject.getClaim('friend')
        expect(result).to.be.undefined
    })
})
