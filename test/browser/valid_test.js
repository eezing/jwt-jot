
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import LocalStorage_mock from '../mocks/local-storage'
import { Browser } from '../../src'

describe('browser - valid method', function() {

    describe('Token is valid (not expired)', function() {

        beforeEach(function() {
            global.localStorage = new LocalStorage_mock()
        })

        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var key = 'id_token'

        context('instantiated with key & token', function() {
            it('Should return true', function() {

                // setup
                var Subject = new Browser(key, token)

                // action -> result
                var result = Subject.valid()
                expect(result).to.be.true
            })
        })

        context('instantiated with only key - token in store', function() {
            it('Should return true', function() {

                // setup
                localStorage.set(key, token)
                var Subject = new Browser(key)

                // action -> result
                var result = Subject.valid()
                expect(result).to.be.true
            })
        })
    })

    describe('Token is invalid (expired)', function() {

        beforeEach(function() {
            global.localStorage = new LocalStorage_mock()
        })

        var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) - 36000 }
        var token = jwt_simple.encode(payload, 'xxx')
        var key = 'id_token'

        context('instantiated with key & token', function() {
            it('Should return false', function() {

                // setup
                var Subject = new Browser(key, token)

                // action -> result
                var result = Subject.valid()
                expect(result).to.be.false
            })
        })

        context('instantiated with only key - token in store', function() {
            it('Should return false', function() {

                // setup
                localStorage.set(key, token)
                var Subject = new Browser(key)

                // action -> result
                var result = Subject.valid()
                expect(result).to.be.false
            })
        })
    })

    describe('Token does not exist', function() {

        beforeEach(function() {
            global.localStorage = new LocalStorage_mock()
        })

        var key = 'id_token'

        context('instantiated with only key', function() {
            it('Should return false', function() {

                // setup
                var Subject = new Browser(key)

                // action -> result
                var result = Subject.valid()
                expect(result).to.be.false
            })
        })
    })
})
