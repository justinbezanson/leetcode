//https://leetcode.com/problems/longest-palindromic-substring/description/

function longestPalindrome(s: string): string {
    const chars = s.split('');
    let longest = '';

    const enlargeFromCenter = (i: number, j: number, chars: string[]) => {
        let result: string[] = [];
        let len = chars.length;

        while(i >= 0 && j <= len && chars[i] === chars[j]) {
            result = chars.slice(i, j+1);
            i--;
            j++;
        }

        return result.join('');
    };

    for(let i=0; i<chars.length; i++) {
        let result1 = enlargeFromCenter(i, i, chars);
        let result2 = enlargeFromCenter(i, i+1, chars);

        if(result1.length > longest.length) {
            longest = result1;
        }

        if(result2.length > longest.length) {
            longest = result2;
        }
    }  

    return longest;  
};