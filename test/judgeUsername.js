const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeUsername', function(){
  it('judgeUsername#1', function(){
    let value = "asd";

    let result = filter.judgeUsername(value);

    expect(result).to.be.false;
  });

  it('judgeUsername#2', function(){
    let value = 123;

    let result = filter.judgeUsername(value);

    expect(result).to.be.false;
  });

  it('judgeUsername#3', function(){
    let value = 123.123;

    let result = filter.judgeUsername(value);

    expect(result).to.be.false;
  });

  it('judgeUsername#4', function(){
    let value = "asdf";

    let result = filter.judgeUsername(value);

    expect(result).to.be.true;
  });

  it('judgeUsername#5', function(){
    let value = "asdasdasdasdasdas";

    let result = filter.judgeUsername(value);

    expect(result).to.be.false;
  });

  it('judgeUsername#6', function(){
    let value = "asd.asd";

    let result = filter.judgeUsername(value);

    expect(result).to.be.false;
  });

  it('judgeUsername#7', function(){
    let value = "as_asd";

    let result = filter.judgeUsername(value);

    expect(result).to.be.true;
  });

  it('judgeUsername#8', function(){
    let value = "As_asd";

    let result = filter.judgeUsername(value);

    expect(result).to.be.true;
  });

  it('judgeUsername#9', function(){
    let value = "As_asd123";

    let result = filter.judgeUsername(value);

    expect(result).to.be.true;
  });

  it('judgeUsername#10', function(){
    let value = "12345";

    let result = filter.judgeUsername(value);

    expect(result).to.be.true;
  });
});
