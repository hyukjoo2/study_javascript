// Don't give up

// 함수 선언
function doSomething(fnc) {
  const result = fnc(2, 3);
  console.log(result);
}

function add(a, b) {
  const result = a + b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

// 함수 호출
doSomething(add);
doSomething(multiply);

const addFun = add;
console.log(addFun);
const result1 = addFun(1, 2);
console.log(result1);
