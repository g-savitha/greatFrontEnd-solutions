export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length,
): Array<T> {

  if(start < 0) {
    start = -start > array.length ? 0: array.length + start;
  }

  if(end > array.length){
    end = array.length + 1;
  }

  if(end < 0) {
    end += array.length
  }

  for(let i = start; i < Math.min(end, array.length); i++){
      array[i] = value;
  }
  return array;
}
