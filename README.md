Log-return
==========

Let's say you're obnoxious and you write code like this:

``` javascript
function mindWarp (a) {
  var b = a * 2
  // do stuff
  return (
    { c: b
    , d: 'e'
    , f: 'g'
    }
  )
}
```

But there's a bug in there and you'd like to see it. Easy.

`npm i log-return`

Then:

``` javascript
var log = require('log-return')

function mindWarp (a) {
  var b = a * 2
  // do stuff
  return log(
    { c: b
    , d: 'e'
    , f: 'g'
    },
    [
      "Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.",
      "- Jack Handy"
    ]
  )
}
```

Your function still does what you want, and you now log the return function.

That's not enough? Check out this nonsense.

``` javascript
var a = 19
var b = 27
var c = a * b
var d = '' + c
var e = d + 9
```

What is the value of e? Sure, you could just:

`console.log(e)`

But that is so many characters. How about:

``` javascript
var a = 19
var b = 27
var c = a * b
var d = '' + c
var e = log(d + 9)
```

You're welcome.
