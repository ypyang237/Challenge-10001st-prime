// do work here

function PrimeFinder(n) {
  this.getPrimeNumber = function(n) {
    var primeNumber;
    var count = 0;


    for(i = 2; i < 100; i++) {
     if(n%i !== 0) {
      return true;
     }
     return false;

    }//end of for loop

    // return primeNumber;
  };
}



module.exports = PrimeFinder;