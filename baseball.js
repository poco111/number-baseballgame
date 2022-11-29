const makeInputArray = function (input) {
  const InputArray = input.split('').map((e) => Number(e));
  return InputArray;
};

const isValidInput = function (arr) {
  if (checkNotANumber(arr)) return alert(`숫자가 아닌 내용이 입력되었습니다.`);
  if (arr.length !== 3) return alert(`3자리가 아닌 수가 입력되었습니다.`);
  if (checkDuplicatedInput(arr)) return alert(`중복된 숫자가 있습니다.`);
  return true;
};

const checkDuplicatedInput = function (arr) {
  const set = new Set(arr);
  if (arr.length !== set.size) return true;
};

const checkNotANumber = function (arr) {
  const checkCondition = (element) => isNaN(element) === true;
  if (arr.some(checkCondition)) return true;
};

export { makeInputArray, isValidInput };
