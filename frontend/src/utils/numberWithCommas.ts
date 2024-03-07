export function numberWithCommas(number: number): string {
  return number
    .toString()
    .padStart(2, "0")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
