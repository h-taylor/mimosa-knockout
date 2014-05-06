define(['models/decision'], function(Decision) {
	var FizzBuzz = function() {

		this.decisions = [];

		this.result = function(ivar) {
			var out = "";
			for (var i = 0; i < this.decisions.length; i++) {
				out += this.decisions[i].result(ivar);
			}

			if (out === "") out = ""+ivar;
			return out;
		};

		this.decisions.push(new Decision(3, "Fizz"));
		this.decisions.push(new Decision(5, "Buzz"));
	};
	return FizzBuzz;
});