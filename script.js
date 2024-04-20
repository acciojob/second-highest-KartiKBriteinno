//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
        return -Infinity;
    }
    
    let max = Math.max(...arr);
    let secondMax = -Infinity;
    
    for (let num of arr) {
        if (num !== max && num > secondMax) {
            secondMax = num;
        }
    }
    
    return secondMax;
}
