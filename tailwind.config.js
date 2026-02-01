alert();
const liginBtn = document.getElementById("loginBtn");

loginBtn.addEvenListener("click", function () {
  const loginContainer = document.getElementById("loginContainer");
  const inputMobailnumber = document.getElementById("mobileNumber").value;
  const inputPass = document.getElementById("inputPass").value;
  const mainSection = document.getElementById("payBillSection");

  if (inputMobailnumber === "") {
    alert("Please enter your mobile number");
  }
});
