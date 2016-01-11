//re-implement array ops, make unique array, count occurrences of letter

var assert = require('assert');      
 //reference: https://nodejs.org/api/child_process.html#child_process_child_process
var spawn = require('child_process').spawn;  

var array1=['apple','lemon','house','lemon','dog'];


//reference: https://www.npmjs.com/package/describe
describe(' Data Structures / Algorithms Module Tests ', function(){

	it('should do a push operation ', function(done){
 	 		assert.equal
 	 			(
 	 			push(array1, bread),  
 	 			['bread', 'apple','lemon','house','lemon','dog']
 	 			)
			done();
	});
   	 

	// it('should equal the value of *Hello something*', function(){
	// 	var testname = "something";
	// 	assert.equal(greet(testname), "Hello something");
	// 	}); 
	 
	// it('output string is 12 characters long', function(){
 	// 		var testname = "bob123";
 	// 		assert.equal( greet(testname).length, 12);
	// 	}); 
});


 

(function(){

	function push(array, invalue){
		console.log(array);
		console.log('invalue is ', invalue);
		var arraynext=[];
		for(var i=0; i<array.length; i++){
			arraynext[i+1] = array[i];}
		arraynext[0]=invalue;
		array = arraynext;
	 	console.log(array);
	 	console.log('---------');
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
				console.log('---------');
		return popvalue;//position 0 value
	};

	function shift(array, invalue){
 		 	array[array.length-1]= invalue;
 			console.log("shift array is ", array);
 			console.log('---------');
	};

	function unshift(array){
			unshiftvalue = array[array.length-1];
			var array = array.slice(0,array.length-1);
			console.log("after unshift array is ", array);
			console.log('we are unshifting ', unshiftvalue);
			console.log('---------');
			return unshiftvalue;
 	};


	function uniqueOLD(array){
	 	var comp = null;	 
	 	var arrayNew=[];		
 		for (var i=0; i<array.length; i++){
 			console.log('inspecting element: ', i, ' w value ', array[i]);
 			comp = array[i]; // set comp 
	 		for (var j=(i+1); j<array.length; j++){
	 			console.log('   inspecting next element: ', j, ' w val ', array[j]);
				if ( comp !== array[j] ) {
					console.log("found match at j: ",array[j])
					arrayNew[i] = array.shift[i];  //substitute my own function
 					console.log('arrayNew is: ', arrayNew[i] );
				} 
			}
		}
	};

	function unique(array){
		console.log("redundant array", array);
 		var uniqueArray=[];
		for(var i=0;i<array.length;i++){
			//indexOf is -1 if redundant  			
 			if (uniqueArray.indexOf(array[i])=== -1){
 				uniqueArray[i] = array[i];
 			}    	 
  		}
   		return uniqueArray;
	}
 
 

//for each letter of alphabet
	//check if letter appears
//	function commonletter(){
		//cycle through array 
		//for each word

///	};

//unique(array1);



// push(array1,'horse');
// pop(array1);
// shift(array1, 'cow');
// unshift(array1);


//console.log(pop(array1) );

console.log(unique(array1));

})();