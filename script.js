let steps = [];
let currentStep = 0;
let prevStep = 0;

window.addEventListener("DOMContentLoaded", () => {
  steps = document.querySelectorAll(".step");
  setCurrentStep(0);
  const nextBtn = document.querySelector(".btn-next");
  nextBtn.addEventListener("click", () => {
    prevStep = currentStep;
    setCurrentStep(++currentStep);
    setHidden(backBtn, false);
    if (currentStep === 3) {
      nextBtn.innerHTML = "Confirm";
    } else if (currentStep === 4) {
      setHidden(nextBtn, true);
    }
  });
  const backBtn = document.querySelector(".btn-back");
  backBtn.addEventListener("click", () => {
    prevStep = currentStep;
    setCurrentStep(--currentStep);
    setHidden(nextBtn, false);
    if (currentStep === 0) {
      setHidden(backBtn, true);
    }
  });
});

function setHidden(el, b) {
  el.disabled = b;
  el.style.opacity = b ? 0 : 1;
}

function setCurrentStep(step) {
  console.log("step: ", step);
  let stepNum = steps[prevStep];
  stepNum.style.setProperty("--color", "white");
  stepNum.style.setProperty("--bgcolor", "transparent");
  stepNum = steps[step];
  stepNum.style.setProperty("--color", "black");
  stepNum.style.setProperty("--bgcolor", "white");
}
