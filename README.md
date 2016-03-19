# jwt-jot

A simple javascript JWT helper Object

- For browsers: Integrated with localStorage for easy persisted token management

[![Build Status](https://travis-ci.org/eezing/jwt-jot.svg?branch=master)](https://travis-ci.org/eezing/jwt-jot)
---


## Browser Object


#### Import library
```javascript

import { Browser as JotBrowser } from 'jwt-jot'

```

#### Create new instance

```javascript

let key = 'id_token'
let token = myJWTFromSomewhere()


// * Option 1: with <key, token> arguments
// Will save token to window.localStorage at specified key

let jot = new JotBrowser(key, token)


// * Option 2: with <key> argument
// Will get token from localStorage if it exists

let jot = new JotBrowser(key)

```

#### Instance method - valid()

```javascript

jot.valid() // --> bool

```

#### Instance method - getToken()

```javascript

jot.getToken() // --> JWT or null

```

#### Instance method - eject()

```javascript

jot.eject() // removes token from localStorage

```
