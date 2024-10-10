//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

const leapYCheck = (year) =>{
  if(year % 4 === 0 && year % 100 !== 0){
      return `Yup ${year} is a Leap year`
  }
  return `Nope ${year} is not a Leap year`
}