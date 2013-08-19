define(['multiply'], function(multiply) {
	function factorial(args) {
		console.log('factorial called with:');
		console.dir(args);	
		if (args[1] == 0) {
			return 1;
		}
		else {
			//return factorial([0, args[1]-1]) * args[1];
			return multiply( [factorial([0, args[1]-1]), args[1] ]);
		}		
	}
	factorial.symbol = '!';
	return factorial;
});