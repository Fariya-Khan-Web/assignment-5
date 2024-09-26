const transections = document.getElementById('transections');
let currentTime = new Date();

let balance = document.getElementById('balance').innerText
let balanceNum = parseFloat(balance);

// Noakhali

const buttonNoa = document.getElementById('btn-noa');
const donateNoa = document.getElementById('donation-amount-noa');
const amountNoa = document.getElementById('amount-noa');

const dialogContainer = document.getElementById('dialogContainer');
const dialogCloseBtn = document.getElementById('dialogCloseBtn');

buttonNoa.addEventListener('click', function () {

    if (isNaN(donateNoa.value) || donateNoa.value <= 0 || donateNoa.value > balanceNum) {
        alert('Invalid donation amount')
    }
    else {
        let amountNoaNum = parseFloat(amountNoa.innerText);
        let donateNoaNum = parseFloat(donateNoa.value);

        amountNoaNum = amountNoaNum + donateNoaNum;
        document.getElementById('amount-noa').innerText = amountNoaNum;

        balanceNum = balanceNum - donateNoaNum;
        document.getElementById('balance').innerText = balanceNum;

        let div = document.createElement('div');
        div.innerHTML = `<p> ${donateNoaNum} Taka is Donated for Flood Relief in Noakhali,Bangladesh. </p>
                         <p class="text-gray-500 font-normal text-base pt-3"> Date: ${currentTime} </p>`;

        div.setAttribute("class", "new-class");
        div.classList.add("p-5", "border", "border-2", "my-2", "rounded-xl", "text-xl", "font-bold")
        transections.appendChild(div);

        dialogContainer.classList.remove('hidden')
        dialogContainer.classList.add('flex')
    }
})

// Feni

const buttonfeni = document.getElementById('btn-feni');
const donatefeni = document.getElementById('donation-amount-feni');
const amountfeni = document.getElementById('amount-feni');

buttonfeni.addEventListener('click', function () {

    if (isNaN(donatefeni.value) || donatefeni.value <= 0 || donatefeni.value > balanceNum) {
        alert('Invalid donation amount')
    }
    else {
        let amountfeniNum = parseFloat(amountfeni.innerText);
        let donatefeniNum = parseFloat(donatefeni.value);

        amountfeniNum = amountfeniNum + donatefeniNum;
        document.getElementById('amount-feni').innerText = amountfeniNum;

        balanceNum = balanceNum - donatefeniNum;
        document.getElementById('balance').innerText = balanceNum;

        let div = document.createElement('div');
        div.innerHTML = `<p> ${donatefeniNum} Taka is Donated for Flood Relief in Feni,Bangladesh.</p>
                         <p class="text-gray-500 font-normal text-base pt-3"> Date: ${currentTime} </p>`;

        div.setAttribute("class", "new-class");
        div.classList.add("p-5", "border", "border-2", "my-2", "rounded-xl", "text-xl", "font-bold")
        transections.appendChild(div);

        dialogContainer.classList.remove('hidden')
        dialogContainer.classList.add('flex')
    }
})

// Quota

const buttonQuota = document.getElementById('btn-quota');
const donateQuota = document.getElementById('donation-amount-quota');
const amountQuota = document.getElementById('amount-quota');


buttonQuota.addEventListener('click', function () {

    if (isNaN(donateQuota.value) || donateQuota.value <= 0 || donateQuota.value > balanceNum) {
        alert('🔴 Invalid donation amount');
    } else {
        let amountQuotaNum = parseFloat(amountQuota.innerText);
        let donateQuotaNum = parseFloat(donateQuota.value);

        amountQuotaNum = amountQuotaNum + donateQuotaNum;
        document.getElementById('amount-quota').innerText = amountQuotaNum;

        balanceNum = balanceNum - donateQuotaNum;
        document.getElementById('balance').innerText = balanceNum;

        let historyCard = document.createElement('div');
        historyCard.innerHTML = `<p> ${donateQuotaNum} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</p>
                         <p class="text-gray-500 font-normal text-base pt-3"> Date: ${currentTime} </p>`;

        historyCard.setAttribute("class", "new-class");
        historyCard.classList.add("p-5", "border", "border-2", "my-2", "rounded-xl", "text-xl", "font-bold")
        transections.appendChild(historyCard);

        dialogContainer.classList.remove('hidden')
        dialogContainer.classList.add('flex')
    }

})


dialogCloseBtn.addEventListener('click', function () {
    dialogContainer.classList.add('hidden')
    dialogContainer.classList.remove('flex')
})
