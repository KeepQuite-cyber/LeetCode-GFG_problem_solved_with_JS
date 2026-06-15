// How i identify Hare & Tortise alogorithm ?
// -> duplicacy
// -> Traverse through indices
// ki baate jha ho wha apply kro

// time complexity -> O(nlogn)

var findDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]) return nums[i];
    }
};

// linear timecomplexity

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);


    let ptr1 = nums[0];
    let ptr2 = slow;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};