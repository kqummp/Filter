const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeWeakPassword', function(){
  it('judgeWeakPasswordTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.true;
  });

  it('judgeWeakPasswordTest#2', function(){
    let value = 123;

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#3', function(){
    let value = 123.123;

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#4', function(){
    let value = "qweqweqwe";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.true;
  });

  it('judgeWeakPasswordTest#5', function(){
    let value = "Qwqweqwed";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.true;
  });

  it('judgeWeakPasswordTest#6', function(){
    let value = "Qwqw12";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.true;
  });

  it('judgeWeakPasswordTest#7', function(){
    let value = "wqw123123";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.true;
  });

  it('judgeWeakPasswordTest#8', function(){
    let value = "wqw123123!";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#9', function(){
    let value = "wqw123123?";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#10', function(){
    let value = "wqw123123:";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#11', function(){
    let value = "wqw123123$";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#12', function(){
    let value = "Qqw123123$";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#13', function(){
    let value = "Qqw123123!";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#14', function(){
    let value = "%";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });

  it('judgeWeakPasswordTest#15', function(){
    let value = "asdasdasdasdasdasdasdasd";

    let result = filter.judgeWeakPassword(value);

    expect(result).to.be.false;
  });
});
