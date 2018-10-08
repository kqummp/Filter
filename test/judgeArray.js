const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeArray', function(){
  it('judgeNumberTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeArray(value);

    expect(result).to.be.false;
  });

  it('judgeNumberTest#2', function(){
    let value = 123;

    let result = filter.judgeArray(value);

    expect(result).to.be.false;
  });

  it('judgeNumberTest#3', function(){
    let value = [1, 2];

    let result = filter.judgeArray(value);

    expect(result).to.be.true;
  });

  it('judgeNumberTest#4', function(){
    let value = {};

    let result = filter.judgeArray(value);

    expect(result).to.be.false;
  });
});
