let MonthlyAnalyticsPage = document.getElementById("MonthlyAnalyticsPage");
let MonthModalView = document.getElementById("MonthModalView");


function MonthForAnalyticsModal(id)
{
  if(id == "ShowSelectMonthForAnalyticsModalBtn")
  {
    MonthlyAnalyticsPage.style.display = "flex";
  }
  else if(id == "CloseSelectMonthAnalyticsModalBtn")
  {
    MonthlyAnalyticsPage.style.display = "none";
  }
}

function AddNewDateModal(id)
{
  if(id == "AddNewDateBtn")
  {
    MonthModalView.style.display = "flex";
  }
  else if(id == "CloseButton")
  {
    MonthModalView.style.display = "none";
  }
}