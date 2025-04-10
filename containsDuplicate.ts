// WRONG ANSWER

function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
};

function containsDuplicate(nums: number[]): boolean {
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            return true 
        }
        arr.push(nums[i])
    }
    return false
};

// GOOD

function containsDuplicate(nums: number[]): boolean {
   const hashSet: Set<number> = new Set();

   for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return true
        }
        hashSet.add(nums[i])
   }
   return false
};
