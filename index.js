// select output elements

const output_year =document.querySelector(".output-year");
const output_month =document.querySelector(".output-month");
const output_day =document.querySelector(".output-day");
const submit_btn=document.querySelector(".submit-button");

// input elements
let isValid =false;
const input_year =document.querySelector("#year");
const input_month =document.querySelector("#month");
const input_day =document.querySelector("#day");


// select error elements

const error_day =document.querySelector(".day-error");
const error_month =document.querySelector(".month-error");
const error_year =document.querySelector(".year-error");
submit_btn.addEventListener("click", calculateDate)

input_day.addEventListener("input", (e) =>{
    if(+input_day.value > 31){
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_day.textContent = "";
    }
    if(+input_day.value === 0){
        isValid = false;
        error_day.textContent = "This field is required";
        isValid = false;
        return;
    }else {
        error_day.textContent = "";
    }
});

input_month.addEventListener("input", (e) =>{
    if(+input_month.value > 12){
        error_month.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_month.textContent = "";
    }
    if(+input_month.value === 0){
        isValid = false;
        error_month.textContent = "This field is required";
        isValid = false;
        return;
    }else {
        error_month.textContent = "";
    }
});

input_year.addEventListener("input", (e) =>{
    if(+input_year.value > 2023){
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.textContent = "";
    }
    if(+input_year.value === 0){
        isValid = false;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    }else {
        error_year.textContent = "";
    }
});

function calculateDate(){
    if(isValid){
        let birthDay =`${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthDay);
        let birthDayObj = new Date(birthDay);
        let ageDiff = Date.now() - birthDayObj;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    }else{
        alert("error")
    }
}