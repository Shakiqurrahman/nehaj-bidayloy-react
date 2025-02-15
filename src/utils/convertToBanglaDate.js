export function convertToBanglaDate(createdAt) {
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

  const date = new Date(createdAt);
  // Get the day, month, and year from the given date
  const day = date.getDate();
  const month = date.getMonth(); // month is 0-indexed
  const year = date.getFullYear();

  // Convert the day and year to Bangla
  const convertToBangla = (num) =>
    num
      .toString()
      .split("")
      .map((digit) => banglaDigits[parseInt(digit)])
      .join("");

  return `${convertToBangla(day)} ${banglaMonths[month]}, ${convertToBangla(
    year
  )}`;
}
