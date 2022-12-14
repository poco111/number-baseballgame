import { makeInputArray, isValidInput, decideResult } from './baseball.js';
import { finishMessage } from './const.js';

const inputNumber = document.querySelector('#input_form');
const swingButton = document.querySelector('#swing_button');
const resultList = document.querySelector('#result_list');

const getInputValue = function () {
  const inputtedNumber = makeInputArray(inputNumber.value);
  return inputtedNumber;
};

const onClickSwingButtonHandler = function () {
  const value = getInputValue();
  const isValid = isValidInput(value);
  if (isValid) {
    const result = decideResult(answer, value);
    render(value, result);
  }
};

const render = (value, result) => {
  const liTemplate = `<li class="result_list"><div>입력 : ${value} 결과 : ${result}</div></li>`;
  resultList.innerHTML += liTemplate;

  inputNumber.value = '';
  inputNumber.focus();
  if (result === finishMessage) return endGame();
};

const endGame = function () {
  swingButton.disabled = true;
  inputNumber.disabled = true;
};

const setEventListener = function () {
  swingButton.addEventListener('click', onClickSwingButtonHandler);
};

const answer = [];
const makeRandomNumArr = () => {
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    answer.indexOf(randomNumber) === -1 ? answer.push(randomNumber) : (i -= 1);
  }
};

export { setEventListener, makeRandomNumArr };
