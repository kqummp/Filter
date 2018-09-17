const filter = require('../index.js');

const expect = require('chai').expect;

describe('judgeMediumPassword', function(){
  it('judgeMediumPasswordTest#1', function(){
    let value = "asdasd";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#2', function(){
    let value = 123;

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#3', function(){
    let value = 123.123;

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#4', function(){
    let value = "qweqweqwe";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#5', function(){
    let value = "Qwqweqwed";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#6', function(){
    let value = "Qwqw12";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.true;
  });

  it('judgeMediumPasswordTest#7', function(){
    let value = "wqw123123";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#8', function(){
    let value = "wqw123123!";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#9', function(){
    let value = "wqw123123?";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#10', function(){
    let value = "wqw123123:";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#11', function(){
    let value = "wqw123123$";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#12', function(){
    let value = "Qqw123123$";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#13', function(){
    let value = "Qqw123123!";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#14', function(){
    let value = "%";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });

  it('judgeMediumPasswordTest#15', function(){
    let value = "asdasdasdasdasdasdasdasd";

    let result = filter.judgeMediumPassword(value);

    expect(result).to.be.false;
  });
});
