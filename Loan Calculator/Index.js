const loanEle=document.querySelector('#loan-amount');
const interestEle=document.querySelector('#inerest-rate');
const monthEle=document.querySelector('#month-pay');
const paymentEle=document.querySelector('#Payment');
const calcuEle=document.querySelector('.calcu');
function calculation(){
    const loanAmount=Number(loanEle.value);
    const interestRate=Number(interestEle.value);
    const month=Number(monthEle.value);
    const interest=(loanAmount*interestRate*0.01)/month;
    const payment=(loanAmount/month+interest);
    return payment;
}
calcuEle.addEventListener('click',()=>{
    const payable_amount=calculation();
    paymentEle.innerHTML=`Monthly Payment: ${(payable_amount).toFixed(2)}`

})

