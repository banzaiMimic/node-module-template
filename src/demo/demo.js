const demoMethodOne = int => {
  switch (int) {
    case '1':
      return 'one'
    case '2':
      return 'two'
    default:
      return 'three'
  }
}

const demoMethodTwo = int => `${demoMethodOne(int)}!`

module.exports = {
  demoMethodOne,
  demoMethodTwo
}