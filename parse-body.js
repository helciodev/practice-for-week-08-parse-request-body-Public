function firstStep(input) {
  const removedAnd = input.split("&");
  return removedAnd;
}

function secondStep(input) {
  const removedEqual = input.map((el) => el.split("="));
  return removedEqual;
}

function thirdStep(input) {
  const removedPlus = input.map((el) =>
    el.map((innerEl) => innerEl.replaceAll("+", " "))
  );
  return removedPlus;
}

function fourthStep(input) {
  const decoded = input.map((el) => el.map((el) => decodeURIComponent(el)));
  return decoded;
}

function fifthStep(input) {
  const objResponse = input.reduce((obj, currentEl) => {
    currentEl.forEach((currentVal, index, currentEl) => {
      if (index === 1) {
        obj[currentEl[index - 1]] = currentVal;
      }
    });
    return obj;
  }, {});

  return objResponse;
}

function parseBody(str) {
  const first = firstStep(str);
  const second = secondStep(first);
  const third = thirdStep(second);
  const fourth = fourthStep(third);
  const parsedBodyObj = fifthStep(fourth);
  return parsedBodyObj;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
