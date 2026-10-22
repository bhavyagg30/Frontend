const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#result");
const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", function () {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (height <= 0 || weight <= 0 || heightInput.value === "" || weightInput.value === "") {
    result.textContent = "Please enter a valid height and weight.";
    return;
  }

  const heightInMetres = height / 100;
  const bmi = weight / (heightInMetres * heightInMetres);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else {
    category = "Overweight";
  }

  result.textContent = "Your BMI is " + bmi.toFixed(1) + " — " + category + ".";
});
