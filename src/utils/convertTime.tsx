export function convertTime(time: string) {
  let hour = parseInt(time.slice(0, 2));
  let minutes = time.slice(3, 5);

  let format = hour >= 12 ? 'pm' : 'am';
  hour = hour > 12 ? hour % 12 : hour !== 0 ? hour : 12;

  return `${hour}:${minutes}${format}`
}