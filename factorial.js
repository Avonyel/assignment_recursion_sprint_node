const recursiveFactorial = (num, product = 1) => {
	if (num === 1) return product;

	return recursiveFactorial(num - 1, num * product);
};

const iterativeFactorial = num => {
	let product = 1;
	while (num > 1) {
		product *= num;
		num--;
	}

	return product;
};
