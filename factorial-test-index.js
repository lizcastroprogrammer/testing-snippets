const Calculate = {
    factorial(num) {
      let factorial = 1;
  
      if(num == 0 || num == 1) {
        return factorial;
      } else {
          for(let i = num; i >= 1; i--) {
            factorial *= i;
        }
      }
  
      return factorial;
    }
  }
  
  module.exports = Calculate;
  
  
  