//re-implement array ops, make unique array, count occurrences of letter

 //reference: https://nodejs.org/api/child_process.html#child_process_child_process
// var spawn = require('child_process').spawn;  


	function push(array, invalue){
		console.log(array);
		console.log('invalue is ', invalue);
		var arraynext=[];
		for(var i=0; i<array.length; i++){
			arraynext[i+1] = array[i];}
		arraynext[0]=invalue;
		array = arraynext;
	 	console.log(array);
 		return array;
	};

	function pop(array){
		var popvalue = array[0];
		console.log('doing pop on array ',array);
		for(var i=0; i<array.length; i++){
 			array[i]=array[i+1];
		}
		var array = array.slice(0, array.length-1);
		console.log('after pop array is: ', array);
		console.log('we are popping ', popvalue);
 		return popvalue;//position 0 value
	};

	function shift(array, invalue){
	 	array[array.length]= invalue;
		console.log("shift array is ", array);
		return array;
 	};

	function unshift(array){
		unshiftvalue = array[array.length-1];
		var array = array.slice(0,array.length-1);
		console.log("after unshift array is ", array);
		console.log('we are unshifting ', unshiftvalue);
		return unshiftvalue;
 	};

	function unique(array){
		console.log("redundant array", array);
 		var uniqueArray=[];
		for(var i=0;i<array.length;i++){
			//indexOf is -1 if redundant  			
 			if (uniqueArray.indexOf(array[i])=== -1){
 				uniqueArray.push(array[i]);
 			}    	 
  		}
  		console.log("unique array :",uniqueArray);
   		return uniqueArray;
	}
 
//for each letter of alphabet
//check if letter appears
//	function commonletter(){
		//cycle through array 
		//for each word
///	};

// unique(array1);
// push(array1,'horse');
// pop(array1);
// shift(array1, 'cow');
// unshift(array1);
// console.log(pop(array1) );

//console.log(unique(array1));


module.exports = {
	push: push, 
	pop: pop,
	shift: shift,
	unshift: unshift,
	unique: unique 
}
 