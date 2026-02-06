const loginBtn = document.getElementById("loginBtn");
const payBillSection = document.getElementById("payBillSection");

loginBtn.addEventListener("click", function () {
  const loginContainer = document.getElementById("loginContainer");
  const inputPass = document.getElementById("inputPass").value;
  const mobileNumberInput = document.getElementById("mobileNumber").value;
  const mainSection = document.getElementById("mainSection");
  console.log(mobileNumberInput);

  if (mobileNumberInput === "") {
    alert("Please enter your mobile number.");
  } else if (mobileNumberInput === "01869967777" && inputPass === "1234") {
    loginContainer.style.display = "none";
    mainSection.classList.remove("hidden");
  } else {
    alert("Invalid mobile number or password.");
  }
});

// log Out
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  const loginContainer = document.getElementById("loginContainer");
  const mainSection = document.getElementById("mainSection");

  mainSection.classList.add("hidden");

  loginContainer.style.display = "block";

  //  input field clear
  document.getElementById("mobileNumber").value = "";
  document.getElementById("inputPass").value = "";
});

// Add Money Button Functionality
const addMoneyBtn = document.getElementById("addMoneyBtn");

addMoneyBtn.addEventListener("click", function () {
  const addMoneySection = document.getElementById("addMoneySection");
  const latestPaymentSection = document.getElementById("latestPaymentSection");
  addMoneyBtn.classList.remove("bg-white");
  addMoneyBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  addMoneySection.classList.remove("hidden");
  latestPaymentSection.classList.add("hidden");

  // cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.add("hidden");
  cashOutBtn.classList.add("bg-white");
  cashOutBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transfer Money Section
  const transferSection = document.getElementById("TransferSection");
  transferSection.classList.add("hidden");
  transferMoneyBtn.classList.add("bg-white");
  transferMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Get Bonus Section
  const bonusSection = document.getElementById("getBonusSection");
  bonusSection.classList.add("hidden");
  getBonusBtn.classList.add("bg-white");
  getBonusBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.add("hidden");
  payBillBtn.classList.add("bg-white");
  payBillBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  transactionHistorySection.classList.add("hidden");
  transactionHistoryBtn.classList.add("bg-white");
  transactionHistoryBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

// Cash Out Button Functionality
const cashOutBtn = document.getElementById("cashOutBtn");

cashOutBtn.addEventListener("click", function () {
  // add money Section
  const addMoneySection = document.getElementById("addMoneySection");
  addMoneyBtn.classList.add("bg-white");
  addMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.add("hidden");
  payBillBtn.classList.add("bg-white");
  payBillBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  transactionHistorySection.classList.add("hidden");
  transactionHistoryBtn.classList.add("bg-white");
  transactionHistoryBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  addMoneySection.classList.add("hidden");

  // Cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.remove("hidden");
  cashOutBtn.classList.remove("bg-white");
  cashOutBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

//Transfer Money Button Functionality
const transferMoneyBtn = document.getElementById("transferMoneyBtn");

transferMoneyBtn.addEventListener("click", function () {
  // add money Section
  const addMoneySection = document.getElementById("addMoneySection");
  addMoneyBtn.classList.add("bg-white");
  addMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  addMoneySection.classList.add("hidden");

  // latest Payment Section

  // Cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.add("hidden");
  cashOutBtn.classList.add("bg-white");
  cashOutBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  // Get Bonus Section
  const bonusSection = document.getElementById("getBonusSection");
  bonusSection.classList.add("hidden");
  getBonusBtn.classList.add("bg-white");
  getBonusBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.add("hidden");
  payBillBtn.classList.add("bg-white");
  payBillBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  transactionHistorySection.classList.add("hidden");
  transactionHistoryBtn.classList.add("bg-white");
  transactionHistoryBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transfer Money Section
  const transferSection = document.getElementById("TransferSection");
  transferSection.classList.remove("hidden");
  transferMoneyBtn.classList.remove("bg-white");
  transferMoneyBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

// Get Bonus Button Functionality
const getBonusBtn = document.getElementById("getBonusBtn");

getBonusBtn.addEventListener("click", function () {
  // add money Section
  const addMoneySection = document.getElementById("addMoneySection");
  addMoneyBtn.classList.add("bg-white");
  addMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  addMoneySection.classList.add("hidden");

  // Cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.add("hidden");
  cashOutBtn.classList.add("bg-white");
  cashOutBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transfer Money Section
  const transferSection = document.getElementById("TransferSection");
  transferSection.classList.add("hidden");
  transferMoneyBtn.classList.add("bg-white");
  transferMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.add("hidden");
  payBillBtn.classList.add("bg-white");
  payBillBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  transactionHistorySection.classList.add("hidden");
  transactionHistoryBtn.classList.add("bg-white");
  transactionHistoryBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Get Bonus Section
  const bonusSection = document.getElementById("getBonusSection");
  bonusSection.classList.remove("hidden");
  getBonusBtn.classList.remove("bg-white");
  getBonusBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

// pay Bill Button Functionality
const payBillBtn = document.getElementById("payBillBtn");

payBillBtn.addEventListener("click", function () {
  // add money Section
  const addMoneySection = document.getElementById("addMoneySection");
  addMoneyBtn.classList.add("bg-white");
  addMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  addMoneySection.classList.add("hidden");

  // Cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.add("hidden");
  cashOutBtn.classList.add("bg-white");
  cashOutBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transfer Money Section
  const transferSection = document.getElementById("TransferSection");
  transferSection.classList.add("hidden");
  transferMoneyBtn.classList.add("bg-white");
  transferMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Get Bonus Section
  const bonusSection = document.getElementById("getBonusSection");
  bonusSection.classList.add("hidden");
  getBonusBtn.classList.add("bg-white");
  getBonusBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  transactionHistorySection.classList.add("hidden");
  transactionHistoryBtn.classList.add("bg-white");
  transactionHistoryBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.remove("hidden");
  payBillBtn.classList.remove("bg-white");
  payBillBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

// Transaction History Button Functionality
const transactionHistoryBtn = document.getElementById("transactionsBtn");

transactionHistoryBtn.addEventListener("click", function () {
  // add money Section
  const addMoneySection = document.getElementById("addMoneySection");
  addMoneyBtn.classList.add("bg-white");
  addMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
  addMoneySection.classList.add("hidden");

  // Cash Out Section
  const cashOutSection = document.getElementById("cashOutSection");
  cashOutSection.classList.add("hidden");
  cashOutBtn.classList.add("bg-white");
  cashOutBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transfer Money Section
  const transferSection = document.getElementById("TransferSection");
  transferSection.classList.add("hidden");
  transferMoneyBtn.classList.add("bg-white");
  transferMoneyBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Get Bonus Section
  const bonusSection = document.getElementById("getBonusSection");
  bonusSection.classList.add("hidden");
  getBonusBtn.classList.add("bg-white");
  getBonusBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Pay Bill Section
  payBillSection.classList.add("hidden");
  payBillBtn.classList.add("bg-white");
  payBillBtn.classList.remove(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );

  // Transaction History Section
  const transactionHistorySection = document.getElementById(
    "transactionHistorySection",
  );
  transactionHistorySection.classList.remove("hidden");
  transactionHistoryBtn.classList.remove("bg-white");
  transactionHistoryBtn.classList.add(
    "text-[#0874F2]",
    "border-[#0874F2]",
    "bg-[#0874F220]",
  );
});

// aDD JA IN Add Money Section

const addMoneySubmitBtn = document.getElementById("addMoneySubmitBtn");

addMoneySubmitBtn.addEventListener("click", function () {
  const accountNumber = document.getElementById("accountNumber").value;
  const amountInput = document.getElementById("amountInput").value;
  const pinInput = document.getElementById("pinInput").value;
  const availableBalance =
    document.getElementById("availableBalance").innerText;

  console.log(availableBalance);

  if (accountNumber === "" || amountInput === "" || pinInput === "") {
    alert("Please fill in all fields.");
  } else if (accountNumber.length !== 11) {
    alert("Account number must be 11 digits.");
  } else if (pinInput.length !== 4) {
    alert("Pin number must be 4 digits.");
  } else {
    if (pinInput === "1234") {
      if (amountInput > 0) {
        const newBalance = parseInt(availableBalance) + parseInt(amountInput);
        document.getElementById("availableBalance").innerText = newBalance;
        alert("Money added successfully!");

        document.getElementById("accountNumber").value = "";
        document.getElementById("amountInput").value = "";
        document.getElementById("pinInput").value = "";
      }
    }
  }
});

// add JS in cash out section
const cashOutSubmitBtn = document.getElementById("cashOutSubmitBtn");

cashOutSubmitBtn.addEventListener("click", function () {
  const agentNumber = document.getElementById("agentNumber").value;
  const cashOutAmount = document.getElementById("cashOutAmount").value;
  const cashOutPin = document.getElementById("cashOutPin").value;
  const availableBalance =
    document.getElementById("availableBalance").innerText;

  if (agentNumber === "" || cashOutAmount === "" || cashOutPin === "") {
    alert("Please fill in all fields.");
  } else if (agentNumber.length !== 11) {
    alert("Agent number must be 11 digits.");
  } else if (cashOutPin.length !== 4) {
    alert("Pin number must be 4 digits.");
  } else {
    if (cashOutPin === "1234") {
      if (cashOutAmount > 0) {
        if (parseInt(cashOutAmount) > parseInt(availableBalance)) {
          alert("Insufficient balance.");
        } else {
          const newBalance =
            parseInt(availableBalance) - parseInt(cashOutAmount);
          document.getElementById("availableBalance").innerText = newBalance;
          alert("Cash out successful!");
        }
      }
    }
  }
});

// Add JS in Transfer Money Section

const transferMoneySubmitBtn = document.getElementById(
  "transferMoneySubmitBtn",
);

transferMoneySubmitBtn.addEventListener("click", function () {
  const transferAccountNumber = document.getElementById(
    "transferAccountNumber",
  ).value;
  const transferAmount = document.getElementById("transferAmount").value;
  const transferPin = document.getElementById("transferPin").value;
  const availableBalance =
    document.getElementById("availableBalance").innerText;

  if (
    transferAccountNumber === "" ||
    transferAmount === "" ||
    transferPin === ""
  ) {
    alert("Please fill in all fields.");
  } else if (transferAccountNumber.length !== 11) {
    alert("Account number must be 11 digits.");
  } else if (transferPin.length !== 4) {
    alert("Pin number must be 4 digits.");
  } else {
    if (transferPin === "1234") {
      if (transferAmount > 0) {
        if (parseInt(transferAmount) > parseInt(availableBalance)) {
          alert("Insufficient balance.");
        } else {
          const newBalance =
            parseInt(availableBalance) - parseInt(transferAmount);
          document.getElementById("availableBalance").innerText = newBalance;
          alert("Transfer successful!");
        }
      }
    }
  }
});

// Add JS in get bonus section

const getBonusSubmitBtn = document.getElementById("getBonusSubmitBtn");
getBonusSubmitBtn.addEventListener("click", function () {
  const getBonusCoupon = document.getElementById("getBonusCoupon").value;
  const availableBalance =
    document.getElementById("availableBalance").innerText;
  if (getBonusCoupon === "") {
    alert("Please enter your coupon.");
  } else if (getBonusCoupon === "SIAM100") {
    const newBalance = parseInt(availableBalance) + 100;
    document.getElementById("availableBalance").innerText = newBalance;
    alert("Bonus added successfully!");
    document.getElementById("getBonusCoupon").value = "";
  }
});

const payBillSubmitBtn = document.getElementById("payBillSubmitBtn");

payBillSubmitBtn.addEventListener("click", function () {
  const payBillSelect = document.getElementById("payBillSelect").value;
  const payBillAccountNumber = document.getElementById(
    "payBillAccountNumber",
  ).value;
  const payBillAmount = document.getElementById("payBillAmount").value;
  const payBillPin = document.getElementById("payBillPin").value;
  const availableBalance =
    document.getElementById("availableBalance").innerText;

  if (
    payBillSelect === "" ||
    payBillAccountNumber === "" ||
    payBillAmount === "" ||
    payBillPin === ""
  ) {
    alert("Please fill in all fields.");
  } else if (payBillAccountNumber.length !== 11) {
    alert("Account number must be 11 digits.");
  } else if (payBillPin.length !== 4) {
    alert("Pin number must be 4 digits.");
  } else {
    if (payBillPin === "1234") {
      if (payBillAmount > 0) {
        if (parseInt(payBillAmount) > parseInt(availableBalance)) {
          alert("Insufficient balance.");
        } else {
          const newBalance =
            parseInt(availableBalance) - parseInt(payBillAmount);
          document.getElementById("availableBalance").innerText = newBalance;
          alert("Bill payment successful!");
        }
      }
    }
  }
});
