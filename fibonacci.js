//Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

const fibonacci = (number) =>{
  if(number === 0){
      return 0
  }else if(number === 1){
      return 1
  }else{
      return fibonacci(number-1) + fibonacci(number-2)
  }
}