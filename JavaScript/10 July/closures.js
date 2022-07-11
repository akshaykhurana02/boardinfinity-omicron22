function x() {
  var a = 5;
  function y() {
    console.log(a);
  };
  return y;
}

var functionCalled = x();
console.log(functionCalled);

functionCalled();
