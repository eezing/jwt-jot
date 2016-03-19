
export default function() {

    this.store = {}

    this.setItem = function(key, value) {
        this.store[key] = value
    }

    this.getItem = function(key) {
        return this.store[key]
    }

    this.removeItem = function(key) {
        this.store[key] = null
    }
}
