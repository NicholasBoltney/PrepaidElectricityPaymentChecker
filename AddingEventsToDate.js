let Oct2023 = [];
let Nov2023 = [{
  date: 1,
  month: "November",
  year: 2023,
  amountPurchased: 40,
  unitsReceived: 10
},
{
  date: 2,
  month: "November",
  year: 2023,
  amountPurchased: 60,
  unitsReceived: 10
}];
let Dec2023 = [];
let Jan2024 = [];
let Feb2024 = [];
let Mar2024 = [];
let Apr2024 = [];
let May2024 = [];
let Jun2024 = [];
let Jul2024 = [];
let Aug2024 = [];
let Sep2024 = [];
let Oct2024 = [];
let Nov2024 = [];
let Dec2024 = [];

let monthsContainer = [
  Oct2023, Nov2023, Dec2023, Jan2024
];

// let monthsHolder = localStorage.getItem('monthsHolder') ? JSON.parse(localStorage.getItem('monthsHolder')) : [];
localStorage.getItem('monthsContainer') ? JSON.parse(localStorage.getItem('monthsContainer')) : [];
localStorage.getItem('Oct2023') ? JSON.parse(localStorage.getItem('Oct2023')) : [];





let currentSelectedMonth = "";

let MonthModal = document.getElementById("offcanvasRight");
const DateInput = document.getElementById("DateInput");
const MonthInput = document.getElementById("MonthInput");
const YearInput = document.getElementById("YearInput");
const CheckBoxForAmountPurchased = document.getElementById("CheckBoxForAmountPurchased");
const AmountPurchasedInput = document.getElementById("AmountPurchasedInput");
const UnitsGainedInput = document.getElementById("UnitsGainedInput");

let TotalSpentText = document.getElementById("TotalSpentText");
let UnitsReceivedText = document.getElementById("UnitsReceivedText");

const HomeUI = document.getElementById("HomeUIHolder");

function DisplayAmountsPurchasedInput()
{
  if(CheckBoxForAmountPurchased.checked == true)
  {
    AmountPurchasedInput.style.display = "block";
    console.log("checked");
  }
  else
  {
    AmountPurchasedInput.style.display = "none";
    console.log("unchecked");
  }
}

function SubmitInfoToMonthArr()
{
  if(MonthInput.value === "October" && YearInput.value === "2023")
  {
    if(AmountPurchasedInput.value === "")
    {
      AmountPurchasedInput.value = 0;
    }
    if(parseInt(DateInput.value) <= 31 && parseInt(DateInput.value) > 0 && DateInput.value.match(/^\d+$/))
    {
      console.log("checking...");
      if(monthsContainer[0].length <= 0)
      {
        let monthInput = {
          date: parseInt(DateInput.value),
          month: MonthInput.value,
          year: YearInput.value,
          amountPurchased: parseInt(AmountPurchasedInput.value),
          unitsReceived: parseInt(UnitsGainedInput.value)
        };
        // Oct2023.push(monthInput);
        DateInput.value = "";
        MonthInput.value = "";
        YearInput.value = "";
        monthsContainer[0].push(monthInput);
        // localStorage.setItem('monthsHolder', JSON.stringify(monthsHolder));
        localStorage.setItem('monthsContainer', JSON.stringify(monthsContainer));

        event.preventDefault();
        return;
      }
    }
    else
    {
      console.log("not a number");
    }
  }

  event.preventDefault();
}

function ShowMonthsContainer()
{
  console.log(monthsContainer);
}

function SelectedMonthTotalPay(id)
{
  currentSelectedMonth = id;
  let monthsTotal = 0;
  let unitsGained = 0;

  
  if(id === "Oct2023")
  {
    for(let i = 0; i < monthsContainer[0].length; i++)
    {
      monthsTotal += monthsContainer[0][i]["amountPurchased"];
      unitsGained += monthsContainer[0][i]["unitsReceived"];
    }
    TotalSpentText.innerHTML = monthsTotal;
    UnitsReceivedText.innerHTML = unitsGained;
  }
  else if(id === "Nov2023")
  {
    for(let i = 0; i < Nov2023.length; i++)
    {
      monthsTotal += Nov2023[i]["amountPurchased"];
      unitsGained += Nov2023[i]["unitsReceived"];
    }
    console.log(`${monthsTotal} spent in November`);
    console.log(`${unitsGained} units gained in November`);
    TotalSpentText.innerHTML = monthsTotal;
    UnitsReceivedText.innerHTML = unitsGained;
  }
}

function ShowDates(id)
{
  var showList = document.getElementById(listOfDates);

  if(id === "Oct2023")
  {
    var newList = document.createElement("ul");
    var newListItem;

    for(let i= 0; i < Oct2023.length; i++)
    {
      console.log(Oct2023[i]["date"]);
      newListItem = document.createElement('li');
      newListItem.textContent = Oct2023[i]["date"];
      newList.appendChild(newListItem);
      HomeUI.appendChild(newList);
      console.log(newList);
    }
  }

}

function DeleteStorage()
{
  // localStorage.removeItem("monthsHolder"); 
  localStorage.removeItem("monthsContainer");
}

function CloseMonthModal()
{
  MonthModal.style.left = "-400px";
  MonthModal.style.transition = "1.5s";
}