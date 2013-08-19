CalculatorModular = {
	_operations: {},
	registerOperation: function(operationName, operationSymbol, operationFunction) {
		this._operations[operationName] = {symbol: operationSymbol, func: operationFunction};
	},
	execute: function(operationName, args) {
		if (this._operations[operationName]) {
			return this._operations[operationName].func(args);
		}
	},
	getOperations: function() {
		return this._operations;
	}
};