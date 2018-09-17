const filter = require('../index.js');

const expect = require('chai').expect;

describe('filter', function(){
  it('filterTest#1', function(){
    let value = "asdasd";

    let result = filter.filter(value);

    expect(result).to.be.true;
  });

  it('filterTest#2', function(){
    let value = 123;

    let result = filter.filter(value);

    expect(result).to.be.true;
  });

  it('filterTest#3', function(){
    let value = 123.123;

    let result = filter.filter(value);

    expect(result).to.be.true;
  });

  it('filterTest#4', function(){
    let value = "123.123";

    let result = filter.filter(value);

    expect(result).to.be.true;
  });

  it('filterTest#5', function(){
    let value = "asd$";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#6', function(){
    let value = "asd:";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#7', function(){
    let value = "asd{";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#8', function(){
    let value = "asd}";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#9', function(){
    let value = "asd%";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#10', function(){
    let value = "asd?";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#11', function(){
    let value = "asd/";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });

  it('filterTest#12', function(){
    let value = "asd#";

    let result = filter.filter(value);

    expect(result).to.be.false;
  });
});
