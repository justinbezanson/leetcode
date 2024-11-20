//https://leetcode.com/problems/palindrome-number/

func isPalindrome(x int) bool {
    if(x < 0) {
        return false;
    }

    orig_int := x
    new_int := 0
    for x > 0 {
        remainder := x % 10
        new_int *= 10
        new_int += remainder 
        x /= 10
    }

    return new_int == orig_int;
}