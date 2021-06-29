function compute()      //function to calculate simple interest
{
    var principal = document.getElementById("principal").value;
    if(principal.value <= "0" || principal == "")     //validation for principal value
      {
            alert("Enter a positive number");   //alert box generation
            principal.focus();          //taking the user back to the input box
            return false;
      }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate)/100;       //formula to calculate simple interest
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%\<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>" 
}
function updateRate() //function to update rate value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
