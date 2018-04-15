/*********************************
Find the biggest zigzag after switch in the binary tree
0              5
            /     \
1	       3      10
		  /      /  \
2        20     1    15*
		/           /  \  
3      6          30*   8
	                \
4	 		         9*
				   
logest zigZag  = [15, 30, 9];
return 2
***************************************/

class Node {
	constructor(id) {
		this.id = id;
		this.right = null;
		this.left = null;
	}
}

const root = new Node(5);
const l1= new Node(3);
const r1= new Node(10);
const ll2= new Node(20);
const lll3= new Node(6);
const rl2= new Node(1);
const rr2= new Node(15);
const rrr3= new Node(8);
const rrl3= new Node(30);
const rrlr4= new Node(9);

root.right = r1;
root.left = l1;

l1.left = ll2;
ll2.left = lll3;

r1.right = rr2;
r1.left = rl2;
rr2.right =  rrr3;
rr2.left = rrl3;
rrl3.right = rrlr4;
const s = solution(root);
console.log(s);

/*
	we need define switch from left to right and then calculate the zigzag path
	we need max zigzag helper function
*/

function solution(node) {
	return maxZigZag(root, 0);
		
}

function maxZigZag(node, counter, side) {
	if(node == null) {
		return 0;
	}
	let currLeft=0 , currRight=0;
	if(side == 'l') {
		currLeft = zigZagCounter(node.right, 0, 'l');
	}
	if(side == 'r') {
		currRight = zigZagCounter(node.left, 0, 'r');
	}
	const currMax = Math.max(currRight, currLeft, counter);
	
	const maxLeft = maxZigZag(node.left ,currMax, 'l');
	const maxRight = maxZigZag(node.right , currMax, 'r');
	
	const max = Math.max(currMax, maxLeft, maxRight);
	return max;
}

function zigZagCounter(node , c, side) {
	if(!node) {
		return c;
	}
//	console.log(node.id);
	if(side == 'l') {
		c = zigZagCounter(node.left, c+1, 'r');
	} else {
		c = zigZagCounter(node.right, c+1, 'l');
	}
	return c;
	
}























