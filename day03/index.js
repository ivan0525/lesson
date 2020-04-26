console.time('fab')
function fab(n) {
  function run(a, b, n) {
    if (n === 0) {
      return a
    } else {
      return run(b, a + b, n - 1)
    }
  }
  return run(1, 1, n)
}
fab(8800)
console.timeEnd('fab')
