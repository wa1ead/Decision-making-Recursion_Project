/* Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/

const ticketPricing = (age) => {
  return age <= 12 ? 'Price of the movie ticket is: $10':
  (age >= 13 && age <= 17) ? 'Price of the movie ticket is: $15':
  age >= 18 ? 'Price of the movie ticket is: $20':
  'Invalid age';
};