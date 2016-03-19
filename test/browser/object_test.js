
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import { Browser } from '../../src'
import LocalStorage_mock from '../mocks/local-storage'

describe('browser - object instance', function() {

    beforeEach(function() {
        global.localStorage = new LocalStorage_mock()
    })

    it('Should throw an Error if given no arguments', function() {

        // setup
        var Subject = Browser

        // action
        var action = function() { Subject() }

        // result
        expect(action).to.throw(Error)
    })

    it('Should return an instance if given a valid key only', function() {

        // setup
        var key = 'id_token'
        var Subject = Browser

        // action -> result
        var result = new Subject(key)
        expect(result).to.be.instanceof(Subject)
    })

    it('Should return an instance if given a valid key + token', function() {

        // setup
        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var key = 'id_token'
        var Subject = Browser

        // action -> result
        var result = new Subject(key, token)
        expect(result).to.be.instanceof(Subject)
    })
})
