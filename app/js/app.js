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

function createCalculatorBBOM() {
	createAndRenderCalculator(CalculatorBBOM, '#bbomCalculators');	
}

function createCalculatorModular() {
	createAndRenderCalculator(CalculatorModular, '#modularCalculators');
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