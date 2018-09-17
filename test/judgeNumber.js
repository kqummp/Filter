const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeNumber', function(){
  it('judgeNumberTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeNumber(value);

    expect(result).to.be.false;
  });

  it('judgeNumberTest#2', function(){
    let value = 123;

    let result = filter.judgeNumber(value);

    expect(result).to.be.true;
  });

  it('judgeNumberTest#3', function(){
    let value = 123.123;

    let result = filter.judgeNumber(value);

    expect(result).to.be.true;
  });
});
