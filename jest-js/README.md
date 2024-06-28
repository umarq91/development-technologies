## Steps for Unit Testing in Jest

**Steps**

1. Install by Running  `npm install --save-dev jest`
2. create a `sum.js` file for example
Write a sample function
```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
3. crea another file named `sum.test.js`  this will contain actual tests
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
   ```
   4.  Add the following section to your `package.json` 
   
```
{
  "scripts": {
    "test": "jest"
  }
}
```
finally run `npm test` or `yarn test`