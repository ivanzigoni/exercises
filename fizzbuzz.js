/*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”*/


function fizzBuzz() {

	let index = 1;

	for (let i = 0; i <= 99; i += 1) {
		if (index === 101) return;
		i = index;
		index += 1;

		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
			i = 0;
		} else if (i % 5 === 0) {
			console.log('buzz');
			i = 0;
		} else if (i % 3 === 0) {
			console.log('fizz');
			i = 0;
		} else {
			console.log(i)
		}
	}
}

// fizzBuzz()

for(let i = 0 ; i < 100;){

	console.log( (++i % 3 ? '' : 'fizz') + ( i % 5 ? '' : 'buzz') || i)

}

// console.log(1% 3)

