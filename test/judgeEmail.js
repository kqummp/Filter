const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeEmail', function(){
  it('judgeEmailTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#2', function(){
    let value = 123;

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#3', function(){
    let value = 123.123;

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#4', function(){
    let value = "asd@";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#5', function(){
    let value = "asd@.";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#6', function(){
    let value = "asd@.com";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#7', function(){
    let value = "@asd.com";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#8', function(){
    let value = "@asd.";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#9', function(){
    let value = "%";

    let result = filter.judgeEmail(value);

    expect(result).to.be.false;
  });

  it('judgeEmailTest#10', function(){
    let value = "asd@asd.com";

    let result = filter.judgeEmail(value);

    expect(result).to.be.true;
  });
});
