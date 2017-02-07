// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //debugger;
  var string = '';

  if (obj === null) {
    string += 'null';
  } else if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    string += obj;
  } else if (typeof(obj) === 'string') {
    string += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    string += '[';
    var arrString = [];
    for (var i = 0; i < obj.length; i++) {
      arrString.push(stringifyJSON(obj[i]));
    }
    string += arrString.join(',');
    string += ']';
  } else if (typeof(obj) === 'object') {
    string += '{';
    var arrString = [];
    for (var key in obj) {
      if (typeof(obj[key]) !== 'function' && typeof(obj[key]) !== 'undefined') {
        arrString.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    string += arrString.join(',');
    string += '}';
  }
  return string;
};
