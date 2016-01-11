//test.js
var assert = require('assert'); 
var arraystuff = require('./index.js');
var array1=['apple','lemon','house','lemon','dog'];
var array2=['apple','lemon','house','lemon','dog'];
var array3=['apple','lemon','house','lemon','dog'];
var array4=['apple','lemon','house','lemon','dog'];
var array5=['apple','lemon','house','lemon','dog'];
var array6=['apple','lemon','house','lemon','dog'];


describe(' Data Structures / Algorithms Module Tests ', function(){

	it('should do nothing ', function(done){
			console.log('test 1');
 	 		assert.deepEqual(
 	 			arraystuff.push(array1, 'bread'),  
 	 			arraystuff.push(array1, 'bread')
 	 		)
			done();
	});

	it('should do a push operation ', function(done){
			console.log('test 2');

 	 		assert.deepEqual(
 	 			arraystuff.push(array2, 'bread'),  
 	 			['bread', 'apple','lemon','house','lemon','dog']
 	 		)
			done();
	});
   	 
	it('should do a pop operation ', function(done){
			console.log('test 3');
 	 		assert.deepEqual(
 	 			arraystuff.pop(array3),  
 	 			'apple'
 	 		)
			done();
	});

	it('should do a shift operation ', function(done){
			console.log('test 4');

 	 		assert.deepEqual(
 	 			arraystuff.shift(array4, 'cow'),  
 	 			['apple','lemon','house','lemon','dog','cow']
 	 		)
			done();
	});


	it('should do an unshift operation ', function(done){
			console.log('test 5');

 	 		assert.deepEqual(
 	 			arraystuff.unshift(array5),  
 	 			'dog'
 	 		)
			done();
	});

	it('should delete any redundant elements ', function(done){
			console.log('test 6');

 	 		assert.deepEqual(
 	 			arraystuff.unique(array6),  
 	 			['apple','lemon','house','dog'] 	 		)
			done();
	});
});