
import { expect } from 'chai'
import jwt_simple from 'jwt-simple'
import LocalStorage_mock from '../mocks/local-storage'
import { Browser } from '../../src'

describe('browser - getToken method', function() {

    beforeEach(function() {
        global.localStorage = new LocalStorage_mock()
    })

    context('instantiated with key & token', function() {
        it('Should return token equal to given token', function() {

            // setup
            var payload = { role: 'admin', exp: Math.round(new Date().getTime()/1000) + 36000 }
            var token = jwt_simple.encode(payload, 'xxx')
            var key = 'id_token'
            var Subject = new Browser(key, token)

            // action -> result
            var result = Subject.getToken()
            expect(result).to.be.equal(token)
        })
    })
})
