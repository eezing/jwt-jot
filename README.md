# jwt-jot

A javascript JWT helper

---

### The Gist

Import & create a new instance of jwt-jot:

```javascript

import JwtJot from 'jwt-jot'

let token = localStorage.get('id_token') // <-- your jwt from somewhere

let jot = new JwtJot(token)

```

expired method:

```javascript

let jot.expired() // --> returns bool

```

getClaim method:

```javascript

// if token decoded = { role: 'admin', company: 'foo' ... }

let jot.getClaim('role') // --> returns 'admin'

```
