//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr = nums1.concat(nums2).sort((a, b) => a - b);
    const mod = arr.length % 2;
    const median = (arr.length-1)/2;
    
    if(mod > 0) {
        return arr[median];
    } 

    return (arr[Math.floor(median)] + arr[Math.ceil(median)])/2;
};