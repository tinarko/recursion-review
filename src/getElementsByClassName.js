// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //initially, we need to set node to document.body
  node = node || document.body;

  var result = [];
  //check if the class name matches
  //if true, push to result array
  if (node.classList.contains(className)) {
    result.push(node);
  }

  //check all children  (recursive call)
  for (var i = 0; i < node.children.length; i++) {
    result = result.concat(getElementsByClassName(className, node.children[i]));
  }
  
  return result;
};
