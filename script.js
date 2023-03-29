const decrementBtn = document.getElementById("dec");
const incrementBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("show");

incrementBtn.addEventListener("click",inc);

function inc(){
    const value=Number(displayValue.innerText);
    if(value>9)
    {
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText=value+1;
    }

}

decrementBtn.addEventListener("click",dec)

function dec(){
    const value=Number(displayValue.innerText);
    if(value>0)
    {
        displayValue.innerText=value-1;
        
    }
    else{
        alert("Negative value not allowed");
    }

}

resetBtn.addEventListener("click",reset);

function reset(){
    displayValue.innerText=0;
}