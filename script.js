//variables
const questions = document.querySelectorAll(".question-row");
//event listeners

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open");
    } else {
      let isOthersOpen = document.querySelectorAll(".open");
      isOthersOpen.forEach((others) => {
        others.classList.remove("open");
      });
      question.classList.add("open");
    }
  });
});
//functions
