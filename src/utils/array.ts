// Range function based on Python's range function

/** Returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number  */
export function range(stop: number): number[];
export function range(start: number, stop: number): number[];
export function range(start: number, stop: number, step: number): number[];
export function range(
  start: number,
  stop?: number,
  step: number = 1,
): number[] {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }

  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}

// Example usage
// console.log(range(10));        // [0, 1, 2, ..., 9]
// console.log(range(5, 10));     // [5, 6, 7, 8, 9]
// console.log(range(5, 15, 2));  // [5, 7, 9, 11, 13]
// console.log(range(10, 0, -1)); // [10, 9, 8, ..., 1]
