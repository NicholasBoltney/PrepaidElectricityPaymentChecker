let Oct2023 = [{
  date: 1,
  month: "October",
  year: 2023,
  amountPurchased: 20,
  unitsReceived: 10
}];
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




let currentSelectedMonth = "";

let MonthModal = document.getElementById("MonthModalView");
const DateInput = document.getElementById("DateInput");
const MonthInput = document.getElementById("MonthInput");
const YearInput = document.getElementById("YearInput");
const CheckBoxForAmountPurchased = document.getElementById("CheckBoxForAmountPurchased");
const AmountPurchasedInput = document.getElementById("AmountPurchasedInput");
const UnitsGainedInput = document.getElementById("UnitsGainedInput");

let TotalSpentText = document.getElementById("TotalSpentText");
let UnitsReceivedText = document.getElementById("UnitsReceivedText");

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
    let monthInput = {
      date: DateInput.value,
      month: MonthInput.value,
      year: YearInput.value,
      amountPurchased: parseInt(AmountPurchasedInput.value),
      unitsReceived: parseInt(UnitsGainedInput.value)
    };
    Oct2023.push(monthInput);
    console.log(Oct2023);
    MonthModal.style.display = "none";
  }



  event.preventDefault();
}

function SelectedMonthTotalPay(id)
{
  currentSelectedMonth = id;
  let monthsTotal = 0;
  let unitsGained = 0;

  
  if(id === "Oct2023")
  {
    for(let i = 0; i < Oct2023.length; i++)
    {
      monthsTotal += Oct2023[i]["amountPurchased"];
      unitsGained += Oct2023[i]["unitsReceived"];
    }
    console.log(`${monthsTotal} spent in October`);
    console.log(`${unitsGained} units gained in October`);
    console.log(TotalSpentText.innerHTML);
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