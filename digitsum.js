const sumdigRecursive = (num, sum = 0) => {
	console.log("Number num: ", num);
	num = String(num);
	console.log("Num: ", num);
	console.log("Last dig: ", Number(num[num.length - 1]));
	sum += Number(num[num.length - 1]);
	num = num.slice(0, num.length - 1);
	console.log(num.length, " ", sum);
	if (num.length === 0) return sum;
	return sumdigRecursive(Number(num), sum);
};

// console.log(sumdigRecursive(111));
// console.log(sumdigRecursive(1111111111));
// console.log(sumdigRecursive(11111111111111111111111111111111));

const sumdigIterative = num => {
	num = String(num);
	let sum = 0;
	for (let i = 0, len = num.length; i < len; i++) {
		sum += Number(num[i]);
	}

	return sum;
};

console.log(sumdigIterative(111));
console.log(sumdigIterative(1111111111));
