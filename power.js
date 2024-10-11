//Power Function: Write a recursive function to calculate the result of raising a number to a given power.

const power = (number, raise) =>{
  if(raise == 0){
      return 1
  }
  else if(raise == 1){
      return number
  }
  return number * power(number, raise-1)
}