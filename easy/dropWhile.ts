export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  let idx = array.length;

  for(let i = 0; i < array.length; i++){
    if(!predicate(array[i], i, array)){
      idx = i;
      break;
    }
  }

  return array.slice(idx, array.length);
}

// alternate approach

export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  let idx = 0;

  while(idx < array.length && predicate(array[idx], idx, array)){
    idx++;
  }

  return array.slice(idx)
}
