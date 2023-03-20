let data = {};

function allFieldsAreValid() {
    if (!document.getElementById('name').parentElement.classList.contains("valid")) {
        return false;
    }
    if (!document.getElementById('surname').parentElement.classList.contains("valid")) {
        return false;
    }
    if (!document.getElementById('street').parentElement.classList.contains("valid")) {
        return false;
    }
    if (!document.getElementById('houseNumber').parentElement.classList.contains("valid")) {
        return false;
    }
    if (!document.getElementById('flatNumber').parentElement.classList.contains("valid")) {
        return false;
    }
    /* all other fields */
    if(!document.getElementById('card').checked && !document.getElementById('cash').checked) {
        return false;
    }
     if (!document.getElementById('deliveryDate').value) {
         return false;
     }
    return true;
}

const deliveryInputsCheck = function (ev) {
    let regex;
    switch (ev.target.id) {
        case 'name':
            regex = /[a-zA-Z]{4,}$/;
            break;
        case 'surname':
            regex = /[a-zA-Z]{5,}$/;
            break;
        case 'street':
            regex= /[a-zA-Z 0-9]+/;
            break;
        case 'houseNumber':
            regex = /^[1-9]+[0-9]*$/;
            break;
        case 'flatNumber':
            regex = /^[1-9]+[0-9-]*$/;
            break;
    }
    if (regex != null && ev.target.classList.contains('inputBox')) {
        if (regex.test(ev.target.value)) {
            ev.target.parentElement.classList.add('valid');
            ev.target.parentElement.classList.remove('invalid');
        } else {
            ev.target.parentElement.classList.add('invalid');
            ev.target.parentElement.classList.remove('valid');
        }
    }
    if (allFieldsAreValid()) {
        document.querySelector('.submitFormBtn').removeAttribute('disabled');
    } else {
        document.querySelector('.submitFormBtn').setAttribute('disabled', "");
    }
}

document.querySelectorAll(".inputBox").forEach(input => {
    input.addEventListener('blur', deliveryInputsCheck)
});

document.getElementById("deliveryDate").addEventListener("click", deliveryInputsCheck);
document.querySelectorAll(".radio").forEach(input => {
    input.addEventListener('click', deliveryInputsCheck)
});

let dtToday = new Date();

let month = dtToday.getMonth() + 1;
let day = dtToday.getDate() + 1;
let year = dtToday.getFullYear();
if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();
let maxDate = year + '-' + month + '-' + day;
document.getElementById("deliveryDate").setAttribute("min", maxDate)

const checkBoxCount = function () {
    let giftCheckBoxes = document.querySelectorAll('.gift');
    const checkInput = Array.from(giftCheckBoxes).filter(input => input.checked === true).length;

    if (checkInput === 2) {
        for (let input of giftCheckBoxes) {
            if (!input.checked) {
                input.disabled = true;
            }
        }
    } else {
        for (let input of giftCheckBoxes) {
            if(input.disabled){
                input.disabled = false
            }
        }
    }
};

document.querySelectorAll(".gift").forEach(el => {
    el.addEventListener('click', checkBoxCount)
});
