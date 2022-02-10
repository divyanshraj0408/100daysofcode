public class arrangeCoin {
    public int arrangeCoins(int n) {
        int fullRows = (int)Math.sqrt(n*2d);
         if((double)(fullRows+1)/2 <= (double)n/fullRows){
             return fullRows;
         }
              else{
                  return fullRows-1; 
              }
             
     }
}
