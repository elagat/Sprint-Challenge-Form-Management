// import { primeSieve } from "./function";
//
// describe('function.js', () => {
//
//   describe('primeSieve()', () => {
//     it('should return an array of 4 true', () => {
//       expect(primeSieve(3)).toBe([true, true, true, true]);
//     })
//
//     // initialize the boolean array and hard coding of 0 and 1 as not prime works
//     it('should return an array of all true', () => {
//       expect(primeSieve(3)).toEqual(expect.not.arrayContaining([true]));
//     });
//
//     // is sieveArray the right length?
//     it('should be length of 11', () => {
//       expect(primeSieve(10)).toHaveLength(11);
//     })
//
//     it('should console log the prime numbers up to 10', () => {
//       expect(primeSieve(10)).toBe(2357);
//     });
//   });
// })

import { multiply } from './function';

describe('functin.js', () => {
  describe('multiply()', () => {
    it('should return the product of numbers passed in', () => {
      expect(multiply(5, 4)).toBe(20);
    })
  })
})
