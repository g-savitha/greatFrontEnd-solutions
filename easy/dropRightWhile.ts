export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
): Array<T> {
  let lastIdx = 0;

  for(let i = array.length-1; i>=0; i--){
    if(!predicate(array[i], i, array)){
      lastIdx = i + 1;
      break;
    }
  }
  return array.slice(0,lastIdx)
}

//Approach 2

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
