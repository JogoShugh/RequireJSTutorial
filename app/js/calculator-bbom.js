CalculatorBBOM = {
	execute: function(operationName, args) {
		console.log(args);
		return this[operationName](args);
	},
	add: function(args) {
		return args[0] + args[1];
	},
	subtract: function(args) {
		return args[0] - args[1];
	},
	multiply: function(args) {
		return args[0] * args[1];
	},
	divide: function(args) {
		return args[0] / args[1];
	},
	factorial: function(args) {
		if (args[1] == 0) {
			return 1;
		}
		else {
			return this.factorial([0, args[1]-1]) * args[1];
		}
	},
	getOperations: function() {
		return {
			add: {symbol: '+'},
			subtract: {symbol: '-'},
			multiply: {symbol: '*'},
			divide: {symbol: '/'},
			factorial: {symbol: '!'}
		}
	}
};