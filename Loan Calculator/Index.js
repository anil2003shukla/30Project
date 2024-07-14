const loanEle=document.querySelector('#loan-amount');
const interestEle=document.querySelector('#inerest-rate');
const monthEle=document.querySelector('#month-pay');
const paymentEle=document.querySelector('#Payment');
const calcuEle=document.querySelector('.calcu');
function calculation(){
    const loanAmount=Number(loanEle.value);
    console.log(loanAmount);
    const interestRate=Number(interestEle.value);
    console.log(interestRate);
    const month=Number(monthEle.value);
    console.log(month);
    const time=month/12;
    console.log(time);
    const interest=(loanAmount*interestRate*time)/100;
    const payment=(loanAmount+interest)/month;
    console.log(payment);
    return payment;
}
calcuEle.addEventListener('click',()=>{
    const payable_amount=calculation();
    paymentEle.innerHTML=`Monthly Payment: ${(payable_amount).toFixed(2)}`

})

