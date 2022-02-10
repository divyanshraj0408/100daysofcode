// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
public class findSqrt {
    public int mySqrt(int x) {
        if(x == 0) return 0;
      int start = 1;
      int end = x;
      int res = 0;
      while(start <= end){
          int mid = start + (end-start) /2;
          if(mid <= x/mid){
              res = mid;
              start = mid +1;
          }
          else{
              end = mid-1;
          }
      }
      return res;
  }
}
