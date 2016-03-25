// import challenge 7

// describe the class PrimeFinder

// write your tests here

var PrimeFinder = require('../challenge_7.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('PrimeFinder', function() {
  var pf;
  beforeEach(function() {
    pf = new PrimeFinder();
  });

  it('should be a function', function() {
    expect(PrimeFinder).to.be.a('function');
    expect(pf instanceof PrimeFinder).to.equal(true);

  });

  describe('PrimeFinder Methods', function() {
    it('should have an instance method named getPrimeNumber', function() {
      expect(pf.getPrimeNumber).to.exist;
      expect(pf.getPrimeNumber instanceof PrimeFinder).to.equal(false);
    });

    it('should return the nth prime number', function() {
      expect(pf.getPrimeNumber(6)).to.equal(13);
      expect(pf.getPrimeNumber(2)).to.equal(3);
      expect(pf.getPrimeNumber(3)).to.equal(5);
      expect(pf.getPrimeNumber(4)).to.equal(7);
      expect(pf.getPrimeNumber(5)).to.equal(11);

    });






  }); // end of PrimeFinder Methods


});//end of PRIMENUMBER PARENT