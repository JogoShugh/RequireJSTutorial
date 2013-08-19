define(function() {
	function AsyncCalculator() {
		this._operations = {};
	}

	AsyncCalculator.prototype.registerOperation = function(operationName, operationSymbol, operationFunction) {
		this._operations[operationName] = {symbol: operationSymbol, func: operationFunction};
	};

	AsyncCalculator.prototype.execute = function(operationName, args) {
		if (this._operations[operationName]) {
			return this._operations[operationName].func(args);
		}
	}

	AsyncCalculator.prototype.getOperations = function() {
		return this._operations;
	}
	
	return AsyncCalculator;
});