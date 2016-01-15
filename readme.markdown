## sum-of-multiples

[![build status](http://img.shields.io/travis/jekrb/sum-of-multiples.svg?style=flat)](http://travis-ci.org/jekrb/sum-of-multiples)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


Get the sum of multiples of each number in an array below a maximum number.


```
npm install sum-of-multiples -S
```

### Usage

``` js
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var sumOfMultiples = require('sum-of-multiples')

var example = sumOfMultiples([3, 5], 10)
console.log(example) // 23

var answer = sumOfMultiples([3, 5], 1000)
```

### API

#### sumOfMultiples([array of integers], maximum integer)




### License

MIT
