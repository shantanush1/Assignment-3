/* YOUR NAME: shantanu sharma
* ID:000806689
* instructor name : Hamdy Ibrahim 
* Assignment - 3 using js and deploying website*/


/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay  = 0;
let totalCost = 0;
let selected_days = [];
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thur = document.getElementById("thursday");
let fri = document.getElementById("friday");
let fullDuration = document.getElementById("full");
let halfDuration = document.getElementById("half");
let clear = document.getElementById("clear-button");
let calculatePrice = document.getElementById("calculated-cost");



change_full();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function mon_click()
{
    mon.classList.add('clicked');
    selected_days.push(mon);
    calculate();
}
mon.addEventListener('click',mon_click);

function tue_click()
{
    tue.classList.add('clicked');
    selected_days.push(tue);
    calculate();
}
tue.addEventListener('click',tue_click);

function wed_click()
{
    wed.classList.add('clicked');
    selected_days.push(wed);
    calculate();
}
wed.addEventListener('click',wed_click);

function thur_click()
{
    thur.classList.add('clicked');
    selected_days.push(thur);
    calculate();
}
thur.addEventListener('click',thur_click);

function fri_click()
{
    fri.classList.add('clicked');
    selected_days.push(fri);
    calculate();
}
fri.addEventListener('click',fri_click);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function removeClicked() 
{
  mon.classList.remove("clicked");
  tue.classList.remove("clicked");
  wed.classList.remove("clicked");
  thur.classList.remove("clicked");
  fri.classList.remove("clicked");

  totalCost = 0;
  selected_days.length = 0;
  calculate();
}
clear.addEventListener("click",removeClicked);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function rateChange(){
  costPerDay = 20 ;
  halfDuration.classList.add('clicked');
  fullDuration.classList.remove('clicked');
  calculate();
}
halfDuration.addEventListener('click',rateChange);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function change_full()
{
  costPerDay = 35;
  fullDuration.classList.add('clicked');
  halfDuration.classList.remove('clicked');
  calculate();
}
fullDuration.addEventListener('click',change_full);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
  totalCost = costPerDay * selected_days.length;
  calculatePrice.innerHTML = totalCost;
}

console.log(calculate);