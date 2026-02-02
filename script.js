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
