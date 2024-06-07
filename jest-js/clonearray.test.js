const cloneArray = require('./clonearray')


test('cloneArray', () => {
    expect(cloneArray([1,2,3])).toEqual([1,2,3])
})