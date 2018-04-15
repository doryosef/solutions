/*********************************
You want to buy public transport tickets for the upcoming month.
You know exactly the days on which you will be travelling.
The month has 30 days and there are three types of ticket:

1-day ticket, costs 2, valid for one day;
7-day ticket, costs 7, valid for seven consecutive days (e.g. if the first valid day is X, then the last valid day is X+6);
30-day ticket, costs 25, valid for all thirty days of the month.
You want to pay as little as possible.

You are given a sorted (in increasing order) array A of dates when you will be travelling. For example, given:

A[0] = 1
A[1] = 2
A[2] = 4
A[3] = 5
A[4] = 7
A[5] = 29
A[6] = 30

You can buy one 7-day ticket and two 1-day tickets. The two 1-day tickets should be used on days 29 and 30.
The 7-day ticket should be used on the first seven days of the month.
The total cost is 11 and there is no possible way of paying less.

Write a function:

class Solution { public int solution(int[] a); }

that, given a zero-indexed array A consisting of N integers that specifies days on which you will be traveling, returns the minimum amount of money that you have to spend on tickets for the month.

For example, given the above data, the function should return 11, as explained above.

Assume that:
-N is an integer within the range [0..30];

-each element of array A is an integer within the range [1..30];

-array A is sorted in increasing order;

-the elements of A are all distinct.
***************************************/

const test1 = [1,2,4,5,7,29,30]; // 7 + 2 + 2  = 11
const test2 = [1,2,4,5,7,15,20,21,29,30]; // 7 + 2 + 2 + 2 + 2 + 2 = 17
const test3 = [1,2,4,5,7,15,16,17,20,21,29,30]; // 7 + 7 + 2 + 2 = 18
const test4 = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,18,20,21,22,29,30]; // bigger then 25
const test5 = [1,2,3,4,5,6,7,8,9,10,11,18,20,21,22,29,30]; // bigger then 25
const test6 = [1,2,4,7,20,21,22,23,24,25,30]; //7 + 7 + 2 = 16 

const toCheck = [test1, test2, test3, test4, test5, test6];
toCheck.map((check, idx) => {
	const n = idx+1;
	console.log("start checking " + n);
	solution(check);
	console.log("******************************************************");
});

/* 
if there amount is bigger then 25 travalling date you should buy 30 day ticket.
if there is more then 4 travilling date in 7 days you should buy 7 day ticket 
else buy ticket for 1 day
*/

function solution(A) {
	/* ************* creating vication OBJ **************** */
	class Vication {
	    constructor(A) {
			this.vication = A;
			this.amount = 0;
	        this.month = [];
	        for (let i = 0; i < 30; i++) {
	            this.month.push(false);
	        }
	        for (let i = 0; i < A.length; i++) {
	            this.month[A[i] - 1] = true;
	        }
	    }

	    is7dayTicketWorth(dayIdx) {
	        let counter = 0;
	        for (let i=0; i < 8; i++) {
	            if (dayIdx + i > this.month.length) {
	                break;
	            }
	            if (this.month[i]) {
	                counter++;
	            }
	        }
			//console.log("counter 7day ticket: " + counter);
	        return counter > 3;
	    }
		
		getSmallAmount() {
			for(let present=0; present<this.month.length; present++) {
				const isTravelToday = this.month[present];
				if(isTravelToday) {
					//const showDay = present +1;
					//console.log("current day: " + showDay);
					if(this.amount > 24) {
						this.amount = 25;
						break;
					}
					else if (this.is7dayTicketWorth(present)) {
						present += 6;
						this.amount += 7;
					}
					else {
						this.amount += 2;
					}
				}
			}
			return this.amount;
		}
	}
	/* ************* END vication OBJ**************** */
	
	let v = new Vication(A);
	
	console.log("the smallest amount is: " + v.getSmallAmount());
}