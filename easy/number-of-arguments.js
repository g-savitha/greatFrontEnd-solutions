/**
 * @param {...any} args
 * @return {number}
 *
 */
// using `arguments object`
export default function numberOfArguments() {
  return arguments.length;
}
// using `rest` parameters
export default function numberOfArguments(...args) {
  return args.length;
}

