
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import LocalStorage_mock from '../mocks/local-storage'
import { Browser } from '../../src'

describe('browser - eject method', function() {

    beforeEach(function() {
        global.localStorage = new LocalStorage_mock()
    })

    var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
    var token = jwt_simple.encode(payload, 'xxx')
    var key = 'id_token'

    context('key exists in store', function() {
        it('Should have null at key in store', function() {

            // setup
            localStorage.setItem(key, token)
            expect(localStorage.getItem(key)).to.be.equal(token)
            var Subject = new Browser(key)


            // action -> result
            Subject.eject()
            var result = localStorage.getItem(key)
            expect(result).to.be.null
        })
    })

    context('key does not exist in store', function() {
        it('Should have null at key in store', function() {

            // setup
            var Subject = new Browser(key)

            // action -> result
            Subject.eject()
            var result = localStorage.getItem(key)
            expect(result).to.be.null
        })
    })
})
