/* find the minimum number of coins needs to create the amount of money */

import java.util.Arrays;
import java.util.ArrayList;

class MinCahnge {
    public static ArrayList<Integer> coins = new ArrayList<Integer>(Arrays.asList(200, 100, 50, 20, 10, 5, 2, 1));
    
    public static void main(String[ ] args) {
        ArrayList<Integer> values = new ArrayList<Integer>(Arrays.asList(136, 212, 540, 350, 832));
        for (int amount : values) {
            minimumChange(amount);    
        }
    }
    
    public static void minimumChange(int amount) {
        if(amount < 1) {
            System.out.println("amount should be bigger then 0");
            return;
        }
        
        int change = amount;
        ArrayList<Integer> coinsToUse = new ArrayList<Integer>();
        System.out.print("For amount of " + amount);
        for(int coin : coins) {
            int dvidedCoin = change / coin;
            while(dvidedCoin != 0) {
                coinsToUse.add(coin);
                change -= coin;
                dvidedCoin--;
            }
        }
		
        System.out.println(" The minimum coins to use are: ");
        for(int c : coinsToUse)  {
            System.out.print(c + " ");
        }
        System.out.println();
    }
}