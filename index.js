function saturdayFun(activity="roller-skate"){return `This Saturday, I want to ${activity}!`}
//console.log(saturdayFun())
function mondayWork(activity="go to the office"){return `This Monday, I will ${activity}.`}
function wrapAdjective(stuff="*"){
  return  function(kkop='special') {return`You are ${stuff}${kkop}${stuff}!`}}
  console.log(wrapAdjective()('a hard worker'))