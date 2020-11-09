// add ids first
const buttons = document.querySelectorAll("button");
buttons[0].setAttribute("id", "transfer10ToWallet");
buttons[1].setAttribute("id", "transfer10ToAccount");

// add new button
const newButton = document.createElement("button");
newButton.setAttribute("id", "topUp10");
newButton.innerHTML = "Top up \\$10";
document.querySelector("#container").appendChild(newButton);

// select elements
const account = document.querySelector("#account");
const wallet = document.querySelector("#other-wallet");
const topUpBtn = document.querySelector("#topUp10");
const transfer10ToWalletBtn = document.querySelector("#transfer10ToWallet");
const transfer10ToAccountBtn = document.querySelector("#transfer10ToAccount");

// add functionality for top up
topUpBtn.addEventListener("click", () => {
  const currentBalance = parseInt(account.innerHTML);
  account.innerHTML = currentBalance + 10;
});

// add functionality for transfer10ToWalletBtn
transfer10ToWalletBtn.addEventListener("click", () => {
  const currentBalance = parseInt(account.innerHTML);
  if (currentBalance > 0) {
    account.innerHTML = currentBalance - 10;
    const currentWallet = parseInt(wallet.innerHTML);
    wallet.innerHTML = currentWallet + 10;
  } else {
    alert("need top up!");
  }
});

// add functionality for transfer10ToAccount
transfer10ToAccount.addEventListener("click", () => {
  const currentWallet = parseInt(wallet.innerHTML);
  const currentBalance = parseInt(account.innerHTML);
  if (currentWallet > 0) {
    account.innerHTML = currentBalance + 10;
    wallet.innerHTML = currentWallet - 10;
  } else {
    alert("need top up!");
  }
});
