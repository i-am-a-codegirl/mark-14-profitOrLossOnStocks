var buyingPrice = document.querySelector(".buy-price");
var noOfStocks = document.querySelector(".no-of-stocks");
var currentPrice = document.querySelector(".current-price");
var calculateButton = document.querySelector(".calculate");
var outputField = document.querySelector(".result");



calculateButton.addEventListener("click", clickEventHandler);



function clickEventHandler(){
    

    var totalStocks = Number(noOfStocks.value);
   var initialPrice = Number(buyingPrice.value);
   var finalPrice = Number(currentPrice.value);
   

calculateProfitAndLoss(initialPrice, finalPrice, totalStocks);




}

function calculateProfitAndLoss(initial, current, totalQuantity){
    if(current=== 0 || initial=== 0 || totalQuantity=== 0){
        outputField.innerText = "please make sure you have entered all the fields..before hitting the button!"
     }

    
    
    if(initial > current){

        var lossValue = (initial - current)*totalQuantity;
     
     
        var lossPercentage =  (lossValue/initial)*100;
        outputField.innerText = "Whooooo your loss on overall stocks is = ⬇️ " + lossValue +"\n" + " your loss percentage is = " + lossPercentage.toFixed(2) + "%";
        
        outputField.style.backgroundColor = "red";
     } else if(current > initial){
         
        
        


         var profitValue = (current - initial)*totalQuantity;
     
     console.log(lossValue);
     
         var profitPercentage =  (profitValue/initial) * 100;
         outputField.innerText = "yeah!!!! your profits on overall stocks is = ⬆️ " + profitValue +"\n" + " your profits percentage is = " + profitPercentage + "%";
         outputField.style.backgroundColor = "green";
     }  //else if(current === initial){
     
    // outputField.innerText = "No profit and No loss , No pain No gain = you are on equillibrium"
}