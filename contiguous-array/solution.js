* @param {number[]} A
* @param {number[]} B
* @return {number}
*/
var maxUncrossedLines = function(A, B) {
   let len_A = A.length;
   let len_B = B.length;
   let arr = new Array(A.length + 1);
   for (let i = 0; i < arr.length; i += 1) {
       arr[i] = new Array(B.length + 1).fill(0);
   }
   
   for(let i =1; i < len_A + 1;i++) {
       for(let j=1;j<len_B+1;j++) {
           arr[i][j] = A[i-1] == B[j-1] ? 1+ arr[i-1][j-1] : Math.max(arr[i][j-1],arr[i-1][j])
       }
   }
   return arr[len_A][len_B];
};