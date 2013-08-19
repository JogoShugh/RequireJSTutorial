define(function() {
	function add(args) {
		console.log('add called with:');
		console.dir(args);		
		return args[0] + args[1];
	}
	add.symbol = '+';
	return add;
});