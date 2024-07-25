//https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let len = nums.length;
    let result = [];

    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            if(i === j) {
                break;
            }

            if(nums[i] + nums[j] === target) {
                result = [i, j];
                break;
            }
        }
    }

    return result;
};
