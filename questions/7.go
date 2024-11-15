//https://leetcode.com/problems/reverse-integer/

func reverse(x int) int {
    neg := x < 0

    if neg {
        x *= -1
    }

    new_int := 0
    for x > 0 {
        remainder := x % 10
        new_int *= 10
        new_int += remainder 
        x /= 10
    }

    if neg {
        new_int *= -1
    }

    if new_int >= math.MaxInt32 || new_int <= (math.MaxInt32*-1) {
        return 0
    }

    return new_int 
}