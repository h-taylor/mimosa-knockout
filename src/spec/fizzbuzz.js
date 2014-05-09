define(['jasmine', 'models/fizzbuzz'], function(jasmine, FizzBuzz) {
	describe('FizzBuzz', function() {
		it("should emit string 1 for string input 1", function() {
			var fb = new FizzBuzz();
			expect(fb.result('1')).toEqual('1');
		});

		it("should emit string 0 for string input 0", function() {
			var fb = new FizzBuzz();
			expect(fb.result('0')).toEqual('0');
		});

		it("should emit string 0 for string input 0000", function() {
			var fb = new FizzBuzz();
			expect(fb.result('0000')).toEqual('0');
		});

		it("should emit 'Not Valid Data' for string input a", function() {
			var fb = new FizzBuzz();
			expect(fb.result('a')).toEqual('Not Valid Data');
		});
	});
});