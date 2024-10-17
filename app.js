var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn =  document.querySelector("#submit-btn");
var outputBox =  document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler);

function submitHandler(){
    let initialP = Number(initialPrice.value);
    let quantity = Number(stocksQuantity.value);
    let currentP = Number(currentPrice.value);

    stocksProfitLoss(initialP,quantity,currentP);
}

function stocksProfitLoss(initialP,quantity,currentP){

   if((initialP)>(currentP)){
     let loss = (initialP - currentP)*quantity;
     let lossPercentage = (loss/(initialP*quantity)) *100 ;
     outputBox.innerHTML = "Total Loss Is : " + loss + " & Loss Percentage Is : " + lossPercentage + " % ";
     outputBox.style.color = "red";
   }

   else if(initialP<currentP){
     let profit = ((currentP) - initialP)*quantity;
     let profitPercentage = (profit/(initialP*quantity)) *100 ;
     outputBox.innerHTML = "Total profit Is : " + profit + " & profit Percentage Is : " + profitPercentage + " % ";
     outputBox.style.color = "green";
   }

   else{
    outputBox.innerHTML = "No Profit / Loss" ;
    outputBox.style.color = "brown";
   }
}


