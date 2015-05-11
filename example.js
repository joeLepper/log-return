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
var logged = mindWarp(154);
log(45 * logged[0].c);
log(logged[1][0], logged[1][1]);
