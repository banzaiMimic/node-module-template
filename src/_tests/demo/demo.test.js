const demo = require('../../demo')

test('demoMethodOne tests', () => {
  expect( demo.demoMethodOne('1')).toBe('one')
  expect( demo.demoMethodOne('2')).toBe('two')
  expect( demo.demoMethodOne('3')).toBe('three')
})

test('demoMethodTwo tests', () => {
  expect( demo.demoMethodTwo('1')).toBe('one!')
  expect( demo.demoMethodTwo('2')).toBe('two!')
  expect( demo.demoMethodTwo('3')).toBe('three!')
})