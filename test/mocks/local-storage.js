
export default function() {

    this.store = {}

    this.set = function(key, value) {
        this.store[key] = value
    }

    this.get = function(key) {
        return this.store[key]
    }
}
