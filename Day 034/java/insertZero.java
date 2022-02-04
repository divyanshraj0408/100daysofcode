public class insertZero {
    public void moveZeroes(int[] nums) {
        // Edge case-->  if the array is empty or has only one value, return the array.
        if (nums.length==0||nums.length==1) return;
        
        // Make two pointers starting at index 0, and if  the index at which is pointerOne is 0, increase the pointer
        //if pointerOne is not equal to zero swipe it with pointerTwo, and increase both pointers
        int pointerOne = 0;
        int pointerTwo = 0;
        int temp;
        for(int i = 0;i<nums.length;i++){
            if(nums[pointerOne]!=0){
                temp = nums[pointerTwo];
                nums[pointerTwo] = nums[pointerOne];
                nums[pointerOne] = temp;
                ++pointerOne;
                ++pointerTwo;
            }
            else{
                ++pointerOne;
            }
        }
    }
}
