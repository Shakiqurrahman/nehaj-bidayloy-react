export function convertToBanglaDate(date) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const banglaMonths = [
    "জানুয়ারী",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  // Get the day, month, and year from the given date
  const day = date.getDate();
  const month = date.getMonth(); // month is 0-indexed
  const year = date.getFullYear();

  // Convert the day and year to Bangla
  const banglaDay = day
    .toString()
    .split("")
    .map((digit) => banglaDigits[parseInt(digit)])
    .join("");
  const banglaYear = year
    .toString()
    .split("")
    .map((digit) => banglaDigits[parseInt(digit)])
    .join("");

  // Get the Bangla month
  const banglaMonth = banglaMonths[month];

  // Return the formatted Bangla date
  return `${banglaDay} ${banglaMonth}, ${banglaYear}`;
}
