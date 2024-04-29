export function convertTime(time: string) {
  if(time === '') throw new Error('Parameter must not be empty');
  
  let hour = parseInt(time.slice(0, 2));
  let minutes = time.slice(3, 5);

  let format = hour >= 12 ? 'pm' : 'am';18
  hour = hour > 12 ? hour % 12 : hour !== 0 ? hour : 12;

  return `${hour}:${minutes}${format}`
}