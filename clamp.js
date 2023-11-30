/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, higher) {
  let result = 0;

  if(value>= lower && value <= higher){
    result = value;
  }
  else if(value <= lower && value <= higher){
    result = lower;
  }
  else if(value >= lower && value >=higher){
    result = higher;
  }
  else {
    result = -1;
  }

  return result;
}

// Alternative approach
export default function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
  return Math.min(upper, Math.max(lower, value));
}

