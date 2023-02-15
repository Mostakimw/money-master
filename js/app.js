// ! getJustElement 
function element(id){
    const element = document.getElementById(id);
    return element;
}

// ! get input value 
function getInputValue(id){
    const getElement = element(id);
    const elementValueString = getElement.value;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

// ! set innerText 
function setInnerText(id, value){
    const getElement = element(id);
    getElement.innerText = value;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const food = getInputValue('food-input')
    const rent = getInputValue('rent-input')
    const clothes = getInputValue('clothes-input')
    var expenses = food + rent + clothes;
    const income = getInputValue('income-input')
    var balance = income - expenses;
    if(isNaN(income) || income < 0 || isNaN(food) || isNaN(rent) || isNaN(clothes) || food < 0 || rent < 0 || clothes < 0){
        alert('Please fill all input with proper value. You have to fill all input with Number not string.');
    }
    // ! total expense 
    else{
        if(expenses > balance){
            alert('Your expenses more than your income. You cannot expense more than your income. So please reduce your expenses.')
        }
        else {
            setInnerText('total-expense', expenses);
            setInnerText('balance', balance)
        }
    }
    // ! balance
})

// ! save btn handler
document.getElementById('save-btn').addEventListener('click', function(){
    const save = getInputValue('save-input');
    const income = getInputValue('income-input')
    const saving = (save / 100) * income;
    if(isNaN(save) || save < 0){
        alert('Please fill all input with proper value. You have to fill all input with Number not string')
    }
    else{
        setInnerText('saving-amount', saving);
        const balanceString = element('balance');
        const balance = parseInt(balanceString.innerText);
        const remainingBalance = balance - saving;
        setInnerText('remaining-balance', remainingBalance)
    }
})