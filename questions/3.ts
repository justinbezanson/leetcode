//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('');
    const len = letters.length;

    let start = 0;
    let count = 0;
    let longest = 0;
    let str = '';
    let letter = '';

    while(start <= len) {
        if(count > longest) {
            longest = count;
        }

        str = '';
        count = 0;

        for(let i=start; i<len; i++) {
            letter = letters[i];

            if(str.indexOf(letter) > -1) {
                break;
            }

            count++;
            str += letter;
        }

        start++;
    }

    return longest;
};