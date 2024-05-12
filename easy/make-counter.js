/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  return () =>{
    return initialValue++;
  }
}
