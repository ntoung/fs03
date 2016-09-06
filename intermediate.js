/* 1. Remove duplicate */
/* Question: How would you remove duplicate members from an array? */

// Method 1
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

// Method 2
function removeDuplicateMap(arr) {
	var seen = {}, result = [];

	arr.map(function(value) {
		if (!seen[value]) {
		  seen[value] = true;
		  result.push(value);
		}
	});

	return result;
}