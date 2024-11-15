//https://leetcode.com/problems/string-to-integer-atoi/

func myAtoi(s string) int {
    s = strings.TrimSpace(s)
    new_str := ""
    neg := false

    for i, r := range s {
        char := string(r)
        
        //is negative
        if i == 0 && char == "-" {
            neg = true
            continue
        }

        //if not numeric char, end
        if i > 0 && (r < 48 || r > 57) {
            break
        }

        //skip leading 0 and leading +
        if(char == "0" && len(new_str) == 0) {
            continue
        }

        new_str += char
    }

    if len(new_str) == 0 {
        return 0
    }

    i, _ := strconv.Atoi(new_str)
    if neg { i *= -1 }

    if i > math.MaxInt32 {
        i = math.MaxInt32
    } else if i < (math.MaxInt32*-1) {
        i = (math.MaxInt32*-1) - 1
    }

    return i
}