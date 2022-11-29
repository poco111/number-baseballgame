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

const decideResult = function (answer, arr) {
  const condition = (element) => answer.indexOf(element) !== -1;
  if (arr.some(condition)) return countStrikeOrBall(answer, arr);
  return printFourBallResult();
};

const printFourBallResult = function () {
  return `포볼`;
};

const countStrikeOrBall = function (answer, arr) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (answer[i] === arr[i]) strikeCount += 1;
    if (answer[i] !== arr[i] && answer.indexOf(arr[i]) !== -1) ballCount += 1;
  }
  return printStrikeOrBallResult(strikeCount, ballCount);
};

const printStrikeOrBallResult = function (strike, ball) {
  if (strike === 0 && ball !== 0) return `${ball} 볼`;
  if (strike !== 3 && ball === 0) return `${strike} 스트라이크`;
  if (strike === 3) return finishMessage;
  return `${strike} 스크라이크 ${ball} 볼`;
};

export { makeInputArray, isValidInput, decideResult };
