//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) =>{
  if(str.length < 2){
    return true
  }else if(str[0] == str[str.length-1]){
    return isPalindrome(str.slice(1,-1))
  }
  return false
}