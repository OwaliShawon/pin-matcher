const generateBtn = document.getElementById('generate-pin-button');
generateBtn.addEventListener("click", function () {
    document.getElementById('generate-pin').value = getPin();

});

function getPin() {

    const number = Math.random() * 10000;
    const pin = (number + " ").split('.')[0];

    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

// handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function () {
    const digit = event.target.innerText;
    if (isNaN(digit)) {


    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// pin verification 
document.getElementById('submit-btn').addEventListener('click', function(){
    verifyPin();
});

function verifyPin(){
    const pin =  document.getElementById('generate-pin').value;
    const typedInput = document.getElementById('typed-pin').value;

    if(pin === typedInput){
       document.getElementById('match').style.display='block';
    }
    else{
        console.log('noooot matched');
    }
}