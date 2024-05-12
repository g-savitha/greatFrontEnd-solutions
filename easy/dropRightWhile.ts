export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  const result : Array<T> = [];
  for(let i = 0; i < array.length; i++){
    if(!predicate(array[i], i, array)){
      result.push(array[i])
    }
  }
  return result;
}

//using slice()

export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  let i = array.length - 1;

  while(i >=0 && predicate(array[i],i, array)){
    i--;
  }
  return array.slice(0, i + 1);
}
