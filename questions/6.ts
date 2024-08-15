//https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
    const chars = s.split('');
    const len = chars.length;
    let map = [];
    let row = 0;
    let col = 0;
    let movingDown = true;
    let result = '';

    const moveDown = (char: string) : void => {
        map[row][col] = char;
        row++;
    };

    const moveUp = (char: string) : void => {
        map[row][col] = char;
        row--;
        col++;
    };

    for(let i=0; i<len; i++) {
        map[i] = [];
    }
    
    for(let i=0; i<len; i++) {
        if(movingDown && (row+1) >= numRows && numRows > 1) {
            movingDown = false;            
        } else if(!movingDown && row === 0) {
            movingDown = true;
        }

        movingDown ? moveDown(chars[i]) : moveUp(chars[i]);
    }

    for(let j=0; j<map.length; j++) {
        for(let k=0; k<map[j].length; k++) {
            if(map[j][k]) {
                result += map[j][k];
            }
        }
    }

    return result;
};