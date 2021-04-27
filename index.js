function mondayWork(activity="go to the office"){
  return (`This Monday, I will ${activity}.`);
}

function saturdayFun(activity="roller-skate"){
  return (`This Saturday, I want to ${activity}!`);
}
 saturdayFun("bathe my dog");

// function wrapAdjective("*")("a dedicated programmer"){
//   function("*")(parameter="special"){
// return (`You are ${parameter`})
// }

function wrapAdjective(flairString="*") {
  return function(adj="special") {
    return `You are ${flairString}${adj}${flairString}!`;
  } ;
}


const Calculator = {
  add: (function(a, b){ return a + b}),
  subtract: (function(a, b){ return a - b}),
  multiply: (function(a, b){ return a * b}),
  divide: (function(a, b){ return a / b})
} ;

function actionApplyer(starter, fnArray) {
  let int = starter;
  for (const fn of fnArray) {
   int = fn(int)}
  return int;
} 

