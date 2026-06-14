class Solution {
    maxSubarraySum(arr) {
        // Code here
        let currSum = 0;
        let maxSum = -Infinity;
        
        for(let i = 0; i < arr.length; i++){
            currSum = currSum + arr[i];
            maxSum = Math.max(maxSum , currSum);
            if (currSum < 0) currSum = 0;
        }
        return maxSum;
    }
}