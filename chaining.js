// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
var numbers = [888, 8008, 7734, -79, 0, 2];

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
	
	console.log(numbers);

	console.log(numbers.sort(function(first, second){return second - first}) //1
		.filter(function(num){return num <=19}) 							//2
		.map(function(num){ return num * 1.5 - 1}) 							//3
		.reduce(function(agg, current){return agg + current })); 			//4


// 2.  Remove any integers greater than 19.
	


// 3.  Multiply each remaining number by 1.5 and then subtract 1.



// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.


