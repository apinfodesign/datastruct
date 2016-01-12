//test.js
var assert = require('assert'); 
var arraystuff = require('./index.js');

//each test starts with a fresh unmodified version of testing array
var array1=['apple','lemon','book','lemon','dog'];
var array2=['apple','lemon','book','lemon','dog'];
var array3=['apple','lemon','book','lemon','dog'];
var array4=['apple','lemon','book','lemon','dog'];
var array5=['apple','lemon','book','lemon','dog'];
var array6=['apple','lemon','book','lemon','dog'];
var array7=['apple','lemon','book','lemon','dog'];
var array8=['apple','lemon','book','lemon','dog']; //answer o
var array9=['appleeeeen','lemon','bookn','lemooooon','dogn']; //answer o
var array10=['applen','lemon','bookn','lemonn','dogn']; //answer n
var array11=['after','back','cat','dad','eeeeeee','rrr','ggg']; //answer a


describe('Data Structures & Algorithms Tests ', function(){

	it('should do nothing ', function(done){
  	 		assert.deepEqual(
 	 			arraystuff.push(array1, 'bread'),  
 	 			arraystuff.push(array1, 'bread')
 	 		)
			done();
	});

	it('should do a push operation ', function(done){
  	 		assert.deepEqual(
 	 			arraystuff.push(array2, 'bread'),  
 	 			['bread', 'apple','lemon','book','lemon','dog']
 	 		)
			done();
	});
   	 
	it('should do a pop operation ', function(done){
  	 		assert.deepEqual(
 	 			arraystuff.pop(array3),  
 	 			'apple'
 	 		)
			done();
	});

	it('should do a shift operation ', function(done){
  	 		assert.deepEqual(
 	 			arraystuff.shift(array4, 'cow'),  
 	 			['apple','lemon','book','lemon','dog','cow']
 	 		)
			done();
	});


	it('should do an unshift operation ', function(done){
 	 		assert.deepEqual(
 	 			arraystuff.unshift(array5),  
 	 			'dog'
 	 		)
			done();
	});

	it('should delete any redundant elements ', function(done){
 	 		assert.deepEqual(
 	 			arraystuff.unique(array6),  
 	 			['apple','lemon','book','dog']
 	 		)
			done();
	});

	it('should return letter in highest number of words', function(done){
 	 		assert.deepEqual(
 	 			arraystuff.frequentLetter(array8),  
 	 			'o'
 	 		)
			done();
	});

});