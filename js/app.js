function calculateSavings(data){
	// determine the number of months between now and the goal date.

	var today = new Date();

	var currentMonth = today.getMonth();
	var currentYear = today.getFullYear();

	console.log(currentYear);
	console.log(currentMonth);
	console.log(data.monthlyContributions);

	var numberOfMonths = (data.goalYear - currentYear)*12 + (data.goalMonth - currentMonth);
	return numberOfMonths * data.monthlyContributions;
}

$(document).ready(function(){

	console.log('jQuery loaded.');

	$('form').submit(function(event){

		// get the form data

		var formData = {
			'savingsGoalReason': $('#savingsGoalReason').val(),
			'goalMonth': parseInt($('#goalMonth').val()),
			'goalYear': parseInt($('#goalYear').val()),
			'savingsGoalAmount': parseFloat($('#savingsGoalAmount').val()),
			'monthlyContributions': parseFloat($('#monthlyContributions').val()),
		};

		console.log(formData);

		// validate the form data

		// process the form data

		totalSavings = calculateSavings(formData);

		if (totalSavings >= formData.savingsGoalAmount){
			var message = "You are on track for your savings goal.";
		} else {
			var message = "Sorry, you need to increase your monthly contribution."
			// insert upsell message here
		}

		$('#results').text(message);

		event.preventDefault();

	});
});