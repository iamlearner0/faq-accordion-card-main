//variables
const questions = document.querySelectorAll(".question-row");

//event listeners

questions.forEach((question) => {
  question.addEventListener("click", () => {
    let arrow = question.lastElementChild;
    if (question.classList.contains("open")) {
      question.classList.remove("open");
      arrow.classList.remove("rotated");
    } else {
      let isOthersOpen = document.querySelectorAll(".open");
      isOthersOpen.forEach((others) => {
        others.classList.remove("open");
      });
      question.classList.add("open");
      arrow.classList.add("rotated");
    }
  });
});
//functions
