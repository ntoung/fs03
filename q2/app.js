// Problem 1

/* Assumptions
 * Data will always be presented in an object 'itemList' with
 * an array of 'items'.
 */

function findPath(obj, element, path) {

	if (path == null) {
	  	path = "\\itemList";
	    obj = obj.itemList.items;
	}

	var length = Object.keys(obj).length;

	for (var i = 0; i < obj.length; i++) {
		for(var k in Object.keys(obj[i])) {
			var key = Object.keys(obj[i])[k];
			var value = obj[i][key];
      
			// This is a depth-first implementation of discovering the path
			// to an element in a Javascript object. To change it to breadth-first,
			// create an object of objects that is searched at the end of the for loop.
			if (typeof value == "object") {
				path += "[" + i + "]\\" + key;
				return findPath(value, element, path);
			}
    
      if (value == element) {
        return path += "[" + i + "]\\" + key;
      }
    }
  }

	// Reached the end without finding the element
  return "Element not found";
}


// Problem 2

/* Assumptions
 * Given the sensitve nature of personal info, and given that you can't
 * include/import in Vanilla javascript, I created a very simple Node runtime
 * that will eventually run on the server and make use of require.
 * I decided to do a string replace for three reasons. First, I am assuming 
 * server insert marker will always look the same. Second, since speed is king,
 * a replace function works faster than having to iterate and compare each
 * key-value pair. Third, it's two lines!!!
 */

// read in files
var main = require('./main.json');
var phone = require('./personalinfo-phone.json');
var ssn = require('./personalinfo-ssn.json');

var output = (function() {
	var JSONString = JSON.stringify(main);

	var phoneInsertKey = "{\"serverInsert\":\"personalinfo-phone\"}";
	var ssnInsertKey = "{\"serverInsert\":\"personalinfo-ssn\"}";
	

	JSONString = JSONString.replace(phoneInsertKey, JSON.stringify(phone));
	JSONString = JSONString.replace(ssnInsertKey, JSON.stringify(ssn));
	
	//console.log(JSONString);

	return JSON.parse(JSONString);
})();


// Problem 3

/* Assumptions
 * Data will always be presented in an object 'itemList' with
 * an array of 'items'. This implementation does not cover the case
 * where you might have arrays of arrays. The assumption is that the 
 * file path won't look like 'itemList.items.subItems[5].subItem'. In
 * that case, I would make a recursive call on object at index 5 with
 * the rest of the path.
 */

Object.prototype.findValue = function(path, element, id) {
	// obj refers to the caller
	var obj = this;
	var path = path.split(".");

	for (var i = 0; i < path.length; i++) {
    	obj = obj[path[i]];
	}
  
	for (var i in obj) {
		if (obj[i].id == id) {
			return obj[i][element];
    	}
  	}
  
  	// Reached the end without finding the value
	return "Value not found.";
}

