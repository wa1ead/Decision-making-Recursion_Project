//Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

const weatherClothing = (weather) => {
  return weather < 0 ? "You should stay at home today ^_^":
  weather < 10 ? "Umbrella, Jacket, Sweater":
  weather < 20 ? "Long-shirt":
  "T-shirt";
};