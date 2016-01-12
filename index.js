//re-implement array ops, make unique array, count occurrences of letter

 //reference: https://nodejs.org/api/child_process.html#child_process_child_process
// var spawn = require('child_process').spawn;  


	function push(array, invalue){
 		var arraynext=[];
		for(var i=0; i<array.length; i++){
			arraynext[i+1] = array[i];}
		arraynext[0]=invalue;
		array = arraynext;
  		return array;
	};

	function pop(array){
		var popvalue = array[0];
		//console.log('doing pop on array ',array);
		for(var i=0; i<array.length; i++){
 			array[i]=array[i+1];
		}
		var array = array.slice(0, array.length-1);
 		return popvalue;//position 0 value
	};

	function shift(array, invalue){
	 	array[array.length]= invalue;
		return array;
 	};

	function unshift(array){
		unshiftvalue = array[array.length-1];
		var array = array.slice(0,array.length-1);
		return unshiftvalue;
 	};

	function unique(array){
 		var uniqueArray=[];
		for(var i=0;i<array.length;i++){
			//indexOf is -1 if redundant  			
 			if (uniqueArray.indexOf(array[i])=== -1){
 				uniqueArray.push(array[i]);
 			}    	 
  		}
   		return uniqueArray;
	};


	function frequentLetter(array){
 	 	//var mostFrequent = 'temp';
 	 	var ArrayOfUniqueLetters = [];
		for(var i=0;i<array.length;i++){
			//make an array from each string			
			reductionArray = array[i].split('')
			//array to unique array (shorten sometimes)
			uniqueArray = unique(reductionArray);
 			//letter count to letter collector
			ArrayOfUniqueLetters = ArrayOfUniqueLetters.concat(uniqueArray); 
 		}

 		//console.log(ArrayOfUniqueLetters);

 		//count repeats in a sorted array
       	var blob = {letter:"", count:"" };  //make object for later sorting
    	var count = 1;  //start count at 1 in case first compare not equal 
    	var accumulator=[];  
	   	ArrayOfUniqueLetters.sort(); //squish same letters together
		for(var i=0;i<ArrayOfUniqueLetters.length;i++){
 			if (ArrayOfUniqueLetters[i] === ArrayOfUniqueLetters[i+1])
				{count=count+1; 
 			}
			else{
				//set blob count to last count increase plus one
				blob ={ letter: ArrayOfUniqueLetters[i], count: count+1};
  				count=0; //reset count for next letter
 				accumulator.push(blob);
 			}
		}
 
		//function to sort on numerical value -  not ideal location
				function compare(a,b) {
				  if (a.count < b.count)
				    return -1;
				  else if (a.count> b.count)
				    return 1;
				  else 
				    return 0;
				}

		accumulator.sort(compare); //sort on count 
		//console.log("accumulator is: ", accumulator);
		finalResult = unshift ( accumulator.sort(compare) );

		// console.log(finalResult);
		// console.log(finalResult.letter);
		// console.log(finalResult.count);

		console.log("Letter in largest number of words is: ", finalResult.letter, 
					" appearing ", finalResult.count, " times.")
		return finalResult.letter; 
}

  
// unique(array1);
// push(array1,'horse');
// pop(array1);
// shift(array1, 'cow');
// unshift(array1);

//additional test arrays for frequentLetter 
var array8=['apple','lemon','book','lemon','dog']; //answer o
var array9=['appleeeeen','lemon','bookn','lemooooon','dogn']; //answer o
var array10=['applen','lemon','bookn','lemonn','dogn']; //answer n
var array11=['after','back','cat','dad','eeeeeee','rrr','ggg']; //answer a

//frequentLetter(array10);

module.exports = {
	push: push, 
	pop: pop,
	shift: shift,
	unshift: unshift,
	unique: unique,
	frequentLetter: frequentLetter
}
 