export default function formatToTimeClock(number: number): string {
  const oneDigitNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const seconds = number % 60;
  const minutes = Math.floor(number / 60) % 60;

  return `${oneDigitNum.includes(minutes) ? 0 : null}${minutes}:${oneDigitNum.includes(seconds) ? 0 : null}${seconds}`;
}
