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
    alert("Login successful!");
  } else {
    alert("Invalid mobile number or password.");
  }
});
