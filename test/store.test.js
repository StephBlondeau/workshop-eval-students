var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
    expect(store.findProducts(20)).to.have.lengthOf(9);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

  it('Le premiere livre retourne une durée de 185 minutes ', function(){
    expect(store.products[1].getDuration()).to.be.eql(185);
  })

  it('Le premiere dvd retourne une durée de 124 minutes', function(){
    expect(store.products[5].getDuration()).to.be.eql(124);
  })

  it('Le premiere video game retourne une durée de 1050 minutes', function(){
    expect(store.products[12].getDuration()).to.be.eql(1050);
  })

});
