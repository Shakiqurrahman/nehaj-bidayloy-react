export const convertToBengali = (input) => {
  const englishToBengali = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  // Convert the input to string and then map each digit to Bengali
  return input
    .toString()
    .split("")
    .map((char) => {
      if (char === ".") return "."; // Keep the decimal point unchanged
      return englishToBengali[parseInt(char)] || char; // If it's not a digit, return the character as is
    })
    .join("");
};
