$(function() {
	var defaultOperations = {
		add: {symbol: '+'},
		subtract: {symbol: '-'},
		divide: {symbol: '/'},		
		multiply: {symbol: '*'},
		factorial: {symbol: '!'}
	};

	$.ajax({
		url: 'js/modules.js'
		dataType: 'json'
	})
	.done(function(data) {
		console.log('Got module list from server:');
		console.dir(data);
		populateOperationOptions(data); 
	})
	.fail(function() { 
		console.log('Fell back to getting module list from static list:');
		console.dir(defaultOperations);
		populateOperationOptions(defaultOperations) 
	});
});

function populateOperationOptions(operations) {
	var operationsGroup = $('#operations');
	var first = true;
	for (var key in operations) {
		var operation = operations[key];
		var operationContainer = $("<label class='btn btn-primary col-md-1 col-xs-2 operation'></label>");
		var checkbox = $("<input type='checkbox' value='" + key + "' />");
		if (first) {
			checkbox.attr('checked', 'checked');
			operationContainer.addClass('active');
		}
		first = false;
		operationContainer.append(checkbox);
		operationContainer.append(" " + operation.symbol);
		operationsGroup.append(operationContainer);
	}
}

function createAndRenderCalculator(calculator, containerSelector) {
	var calcUi = new CalculatorUI(calculator);
	var calcUiRendered = calcUi.render();
	calcUiRendered.append(createRemovalButton(calcUiRendered));
	$(containerSelector).append(calcUiRendered);
}

function createRemovalButton(elToRemoveOnClick) {
	var removalButton = $("<button class='remove btn btn-sm btn-warning'>Remove</button>");
	removalButton.click(function() {
		elToRemoveOnClick.remove();
	});
	return removalButton;
}

function createNewAsyncCalc() {
	var operations = [];
	$('.operation input:checked').each(function() {		
		operations.push($(this).val());
	});
	if (operations.length == 0) {
		alert("That's a really boring calculator! Try again...");
		return;
	}
	CalculatorAsyncLoad(operations, function(calculatorAsync) {
		createAndRenderCalculator(calculatorAsync, '#asyncCalculators');
	});
}