export default function mean(array) {
  let res = 0;
  for(let i = 0; i < array.length; i++){
    res += array[i];
  }

  return res / array.length;
}

//using reduce
export default function mean(array) {
  return array.reduce((a,b) => a+b , 0) / array.length
}
