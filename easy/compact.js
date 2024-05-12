export default function compact(array) {
  const result  = [];

  for(let i = 0; i < array.length; i++){
    if(array[i]){
      result.push(array[i]);
    }
  }

  return result;
}

// using filter method

export default function compact(array){
  return Array.filter(Boolean)
}
