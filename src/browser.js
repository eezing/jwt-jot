
import TokenHandler from './token-handler'

export default function(key, token) {

    if (typeof key !== 'string') throw new Error('First argument must be a string - used as key when storing token in localStorage.')

    // this.raw_token = token || localStorage.get(key)
}
