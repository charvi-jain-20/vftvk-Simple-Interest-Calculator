function compute()      //function to calculate simple interest
{
    var principa = document.getElementById("principal").value;
    if(principal.value <= "0")      //validation for principal value
      {
            alert("Enter a positive number");   //alert box generation
            principal.focus();          //taking the user back to the input box
            return false;
      }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;       //formula to calculate simple interest
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>" 
}
function updateRate() //function to update rate value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
