export default function chunk(array, size = 1) {
  if(!Array.isArray(array) && size <= 0){
    return [];
  }
  let result = [];
  let chunks = [];
  for(let i = 0; i < array.length; i++){
    chunks.push(array[i]);
    if(chunks.length === size || i === array.length-1){
      result.push(chunks);
      chunks = [];
    }
  }

  return result;
}

//using slice method

export default function chunk(array, size = 1) {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

