const palindromeRecursive = str => {
	if (str.length === 0 || str.length === 1) {
		return true;
	}

	if (str[0] !== str[str.length - 1]) {
		return false;
	}

	str = str.slice(1, str.length - 1);

	return palindromeRecursive(str);
};

// console.log(palindromeRecursive('oozyratinasanitaryzoo'));
// console.log(palindromeRecursive('tacocat'));
// console.log(palindromeRecursive('billy'));
// console.log(palindromeRecursive('tasocat'));

const palindromeIterative = str => {
	while (str.length > 1) {
		if (str[0] !== str[str.length - 1]) {
			return false;
		}

		str = str.slice(1, str.length - 1);
	}

	return true;
};

console.log(palindromeIterative('oozyratinasanitaryzoo'));
console.log(palindromeIterative('tacocat'));
console.log(palindromeIterative('billy'));
console.log(palindromeIterative('tasocat'));

