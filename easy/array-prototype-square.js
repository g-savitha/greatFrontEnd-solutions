Array.prototype.square = function () {
  const length = this.length;
  //can also create array using result[] 
  const result = new Array(length);
  for(let i = 0; i < length; i++){
    result[i] = this[i] * this[i];
  }
  return result;
};

//using `Array.map`

Array.prototype.square = function() {
 return this.map((ele)=>ele*ele);
}
