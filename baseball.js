import { resultComment, finishMessage, errorMessage } from './const.js';

const makeInputArray = function (input) {
  const InputArray = input.split('').map((e) => Number(e));
  return InputArray;
};

const isValidInput = function (arr) {
  if (checkNotANumber(arr)) return alert(errorMessage.NotANumber);
  if (arr.length !== 3) return alert(errorMessage.lengthError);
  if (checkDuplicatedInput(arr)) return alert(errorMessage.duplicate);
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
  return resultComment.fourBall;
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
  if (strike === 0 && ball !== 0) return `${ball} ${resultComment.ball}`;
  if (strike !== 3 && ball === 0) return `${strike} ${resultComment.strike}`;
  if (strike === 3) return finishMessage;
  return `${strike} ${resultComment.strike} ${ball} ${resultComment.ball}`;
};

export { makeInputArray, isValidInput, decideResult };
