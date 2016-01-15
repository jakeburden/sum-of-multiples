var sumOfMultiples = require('../')

var test = require('tape')

test('multiples of 3 or 5 under 10', function (t) {
  t.plan(1)
  t.same(sumOfMultiples([3, 5], 10), 23)
})
