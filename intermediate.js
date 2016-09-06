/* 1. Remove duplicate */
/* Question: How would you remove duplicate members from an array? */

// Method 1 (simple)
function removeDuplicate(arr) { 
	var exists = {};
	var result = [];
	var element;

	for (int i = 0; i < arr.length; i++) {
		element = arr[i];
		if (!exists[element]) {
			result.push(element);
			exists[element] = true;
		}
	}

	return result;
}

// Method 2 (map)
function removeDuplicate(arr) {
	var seen = {}, result = [];

	arr.map(function(value) {
		if (!seen[value]) {
		  seen[value] = true;
		  result.push(value);
		}
	});

	return result;
}

/* 2. Check prime numbers */
/* Question: How would you verify a prime number? */

// Method 1 (simple)
function isPrime(n) {
	var divisor = 2;
	while (divisor < n) {
		if (n % divisor == 0) {
			return false;
		}
		else {
			divisor++;	
		}
	}

	return true;
}


// Method 2 (better)
function isPrime(n) {
	// You don't have to check multiples of numbers already examined, like 
	// even numbers.
	var divisor = 3,
		limit = Math.sqrt(n);

	// Check simple cases
	if (n == 2 || n == 3)
		return true;
	if (n % 2 == 0) 
		return false;
	
	while (divisor <= limit) {
		if (n % divisor == 0) 
			return false;
		else
			divisor += 2;
	}

	return true;
}

/* 3. Prime factors */
/* How would you find all prime factors of a number? */

// Method 1 (simple)
function primeFactors(n) {
	var result = [],
		divisor = 2;

	while (n > 2) {
		if (n % divisor == 0) {
			result.push(divisor);
			n = n / divisor;
		}
		else {
			divisor++;
		}
	}

	return result;
}


/* 4. Fibonacci */
/* How do you get the nth Fibonacci number? */

// Method 1 (simple)
function fibonacci(n) {
	var fibonacci = [0, 1];
	if (n <= 2) return 1;

	for (var i = 2; i <= n; i++) {
		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	}

	return fibonacci[n];
}

// Method 2 (recursive)
function fibonacci(n) {
	if (n <= 1) 
		return n;
	else 
		return fibonacci(n-1) + fibonacci(n-2);
}



