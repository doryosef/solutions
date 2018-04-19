/* codility challage LongestNonnegativeSumSlice
 - Given an array consisting of the integers -1, 0 and 1, find the longest slice with a non-negative sum. 
*/

const A = [-1, -1, 1, -1, 1, 0, 1, -1, -1];
const B = [1, 1, -1, -1, -1, -1, -1, 1, 1];
const C = [-1, -1, -1, -1, 0, -1, -1, 1, 1];
const D = [-1, 1, 1 , 0, 1, -1];

[A, B, C, D].map((test) => {console.log(solution(test)); });

/*
	- Creating a matrix of calculated sum from to positions
	- Saving the longest positive sum 
*/

function solution(A) {
	// init matrix
	let matrix = [];
	for(let i=0; i<A.length; i++) {		
		matrix[i] = new Array(A.length);
		matrix[i][i] = A[i];
	}
	
	let longestSlice = 0;
	// fill the matrix
	for(let i=0; i<A.length; i++) {
		for(let j=i+1; j<A.length; j++) {
			const sliceSum = matrix[i][j-1] + A[j];
			matrix[i][j] = sliceSum;
			if(sliceSum > -1) {
				const sliceSize = j-i+1;
				longestSlice = Math.max(longestSlice, sliceSize);
			}
		}
	}
	//showMatrix(matrix);
	return longestSlice;
}

function showMatrix(M) {
	for(let i=0; i< M.length; i++) {
		let s = "";
		for(let j=0; j<M[i].length; j++) {
			s +=M[i][j] + " ";
		}
		console.log(s);
	}
}