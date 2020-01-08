let score_list = [];
let unit_list = [];
let gp = 0;

  
function scoretest(event) {
  event.preventDefault();
  let unit = document.querySelector('#input2').value;
  let score = document.querySelector('#input').value;
      if (score >= 75 && score <= 100) {
        score_list.push(4 * unit);
        unit_list = unit;
      } else if(score>=70 && score<=74){
      score_list.push(3.5 * unit);
      unit_list = unit;
      } else if(score>=65 && score<=69){
      score_list.push(3.25 * unit);
      unit_list = unit;
      } else if(score>=60 && score<=64){
      score_list.push(3 * unit);
      unit_list = unit;
      } else if(score>=55 && score<=59){
      score_list.push(2.75 * unit);
      unit_list = unit;
      } else if(score>=50 && score<=54){
      score_list.push(2.5 * unit);
      unit_list = unit;
      } else if(score>=45 && score<=49){
      score_list.push(2.25 * unit);
      unit_list = unit;
      } else if(score>=40 && score<=44){
      score_list.push(2 * unit);
      unit_list = unit;
      } else{
      score_list.push(0);
      unit_list = unit;
      }
}

// let total_score = score_list.reduce(function(score_list, a){
//   return score_list + a; 
// })

// let total_unit = unit_list.reduce(function(unit_list, b){
//   return unit_list + b;
// })

function gpCalculator(event) {
    event.preventDefault();
    // score_list += score_list;
    // unit_list += unit_list;
    console.log("Score: " +score_list);
    console.log("Unit: " +unit_list);
    gp = score_list/unit_list;
    console.log("GP: " +gp.toFixed(2));
    return document.querySelector('#result').innerHTML = " Your Grade Point Is: " +gp.toFixed(2);
}

document.querySelector('#button').addEventListener('click', scoretest);
document.querySelector('#button').addEventListener('click', gpCalculator);