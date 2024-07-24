//https://leetcode.com/problems/sort-the-jumbled-numbers/?envType=daily-question&envId=2024-07-24

/*
CASE 1
Input: 
    mapping = [8,9,4,0,2,1,3,5,7,6]
    nums = [991,338,38]
Output:
    [338,38,991]
Expected:
    [338,38,991]
*/

/*
CASE 2

Input
    mapping = [0,1,2,3,4,5,6,7,8,9]
    nums = [789,456,123]
Output
    [123,456,789]
Expected
    [123,456,789]
*/

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = function(mapping, nums) {
    let mappedValues = [];

    nums.forEach((num, index) => mappedValues[index] = mappedValue(num, mapping));
    nums = sort(nums, mappedValues);    

    return nums;
};

/**
 * @param {number[]} nums
 * @param {number[]} mappedValues
 * @return {number[]}
 */
const sort = function(nums, mappedValues) {
    let isSwapped = false;
    let len = mappedValues.length;
    
    for(let i=0; i<len; i++) {
        for(let j=0; j<(len-i-1); j++) {
            if (mappedValues[j] > mappedValues[j + 1]) {
                [mappedValues[j], mappedValues[j + 1]] = [mappedValues[j + 1], mappedValues[j]];
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    return nums;
};

/**
 * @param {number} num
 * @param {number[]} mapping
 * @return {number}
 */
const mappedValue = function(num, mapping) {
    let v = String(num)
        .split('')
        .reduce((a, v, i) => a + mapping[parseInt(v)], '');

    return parseInt(v);
};
