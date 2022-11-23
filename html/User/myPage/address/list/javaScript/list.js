const myPageAddressContainer = document.querySelector(".myPageAddressContainer"),
    tbody = myPageAddressContainer.querySelector("tbody"),
    tbodyTr = tbody.querySelectorAll("tr"),
    inputBox = myPageAddressContainer.querySelectorAll(".inputBox"),
    inputBoxinput = myPageAddressContainer.querySelectorAll("input"),
    choiceButton = myPageAddressContainer.querySelector(".choiceButton button"),
    noAddress = myPageAddressContainer.querySelector(".noAddress");


    console.log(choiceButton);

window.onload = function() {
    
    if(!tbodyTr){
        for (let i = 0; i < tbodyTr.length; i++) {
            tbodyTr[i].style.display = "none";
        }
        inputBox[0].style.display = "none";
        choiceButton.style.display = "none";
    }else{
        noAddress.style.display = "none";
    }
};



inputBoxinput[0].addEventListener("click", function(){
    
    for (let i = 0; i < inputBoxinput.length; i++) {
        inputBoxinput[i].checked = this.checked;
    }
});

// choiceButton.addEventListener("click", function(){


// });