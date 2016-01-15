module.exports = function (multiples, max) {
  var sum = 0
  var index = max

  while (index --) {
    multiples.forEach(function (num) {
      if (index % num === 0) {
        sum += index
      }
    })
  }

  return sum
}
