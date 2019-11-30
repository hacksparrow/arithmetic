const expect = require('chai').expect;
const lib = require('./index');
const add = lib.add;
const subtract = lib.subtract;

describe('arithmetic functions', () => {
  it('add() should add', () => {
    expect(add(2, 2)).to.equal(4);
  });

  it('subtract() should subtract', () => {
    expect(subtract(2, 2)).to.equal(0);
  });
});
