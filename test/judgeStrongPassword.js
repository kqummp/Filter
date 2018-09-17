const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeStrongPassword', function(){
  it('judgeStrongPasswordTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#2', function(){
    let value = 123;

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#3', function(){
    let value = 123.123;

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#4', function(){
    let value = "qweqweqwe";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#5', function(){
    let value = "Qwqweqwed";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#6', function(){
    let value = "Qwqw12";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#7', function(){
    let value = "wqw123123";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#8', function(){
    let value = "wqw123123!";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#9', function(){
    let value = "wqw123123?";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#10', function(){
    let value = "wqw123123:";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#11', function(){
    let value = "wqw123123$";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#12', function(){
    let value = "Qqw123123$";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#13', function(){
    let value = "Qqw123123!";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.true;
  });

  it('judgeStrongPasswordTest#14', function(){
    let value = "%";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });

  it('judgeStrongPasswordTest#15', function(){
    let value = "asdasdasdasdasdasdasdasd";

    let result = filter.judgeStrongPassword(value);

    expect(result).to.be.false;
  });
});
