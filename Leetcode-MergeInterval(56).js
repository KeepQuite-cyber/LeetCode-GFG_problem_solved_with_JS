// 56. Merge Interval

// key takeaways :
// 1 . jb bhi interval based problem aaye to sort krne ka prayas Kro.

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]); // sorting by first element

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]); 
        } else {
            result.push(current);
        }
    }
    return result;
};