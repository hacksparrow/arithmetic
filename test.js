const expect = require('chai').expect;
const lib = require('./index');
const add = lib.add;
const subtract = lib.subtract;

describe('arithmetic functions', () => {
  it('add() should add', () => {
    expect(add(2, 2)).to.equal(4);
  });

  it('add() should throw if any parameter is missing', () => {
    expect(add).to.throw();
  });

  it('subtract() should subtract', () => {
    expect(subtract(2, 2)).to.equal(0);
  });

  it('subtract() should throw if any parameter is missing', () => {
    expect(subtract).to.throw();
  });
});
