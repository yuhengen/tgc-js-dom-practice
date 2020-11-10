// PLACE YOUR CODE HERE
// q1
let topup = document.createElement("button")
topup.setAttribute("id", "topUp10")
topup.innerHTML = "Top up \$10"
document.querySelector("#container").appendChild(topup)

// q2
let buttons = document.querySelectorAll("button")
buttons[0].setAttribute("id", "transfer10ToWallet")
buttons[1].setAttribute("id", "transfer10ToAccount")
let wallet10 = buttons[0]
let account10 = buttons[1]

// q3
let account = document.querySelector("#account")
let accountValue = 0;
topup.addEventListener("click", function () {
    accountValue += 10;
    account.innerHTML = accountValue;
})

// q4
let wallet = document.querySelector("#other-wallet")
let walletValue = 0;
wallet10.addEventListener("click", function () {
    if (accountValue >= 10) {
        accountValue -= 10;
        walletValue += 10;
        account.innerHTML = accountValue;
        wallet.innerHTML = walletValue;
    } else {
        alert("Insufficient money!")
    }
})

// q5
account10.addEventListener("click", function () {
    if (walletValue >= 10) {
        walletValue -= 10;
        accountValue += 10;
        account.innerHTML = accountValue;
        wallet.innerHTML = walletValue;
    } else {
        alert("Insufficient money!")
    }
})

// challenge q1
let spendInput = document.createElement("input");
spendInput.setAttribute("id", "amount");
spendInput.setAttribute("type", "number");
document.body.appendChild(spendInput);
let spendBtn = document.createElement("button")
spendBtn.innerHTML = "Spend"
document.body.appendChild(spendBtn)

// challenge q2
spendBtn.addEventListener("click", function () {
    let expense = spendInput.value;
    if (parseFloat(expense) <= parseFloat(walletValue)) {
        walletValue -= expense;
        wallet.innerHTML = walletValue;
    } else {
        alert("Insufficient money to spend!")
    }

})