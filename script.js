const numberOfQuestions = Object.keys(arrayQuestions).length;
const buttonGoUp = document.getElementById("goUp");
const buttonGoDown = document.getElementById("goDown");
const answers = document.getElementById("reponses");
/* affichage de la page */
const refresh = () => {
  if (localStorage.current == undefined) {
    localStorage.current = 1;
  }
  document.getElementById("current").innerText = localStorage.current;
  document.getElementById("final").innerText = numberOfQuestions;
  document.getElementById("question").innerText =
    arrayQuestions[localStorage.current].question;
  document.getElementById("coms").innerText =
    arrayQuestions[localStorage.current].comms;
  answers.innerHTML = "";
  for (const i in arrayQuestions[localStorage.current].rep) {
    answers.innerHTML += `<button class='boutonReponse' data-id='${i}'>${
      arrayQuestions[localStorage.current].rep[i]
    }</button>`;
  }
  document
    .querySelectorAll(".boutonReponse")
    .forEach((i) => i.addEventListener("click", validation));
};

const validation = (e) => {
  const event = e.target.dataset.id;
  const goodResponse = event === arrayQuestions[localStorage.current].reponse;
  if (goodResponse) {
    localStorage.current = parseInt(localStorage.current) + 1;
  } else {
    animationLose();
  }
  if (localStorage.current == numberOfQuestions + 1) {
    alert("Bravo j'espere que ce tuto vous auras aidé");
    localStorage.clear();
  }
  refresh();
};

// initialisation
refresh();

//Changement de page
buttonGoUp.addEventListener("click", () => {
  if (parseInt(localStorage.current) !== numberOfQuestions) {
    localStorage.current = parseInt(localStorage.current) + 1;
    refresh();
  }
});
buttonGoDown.addEventListener("click", () => {
  if (parseInt(localStorage.current) !== 1) {
    localStorage.current = parseInt(localStorage.current) - 1;
    refresh();
  }
});

// animation
const animationLose = () => {
  if (answers.classList[0] == "answerfalse") {
    answers.classList.remove("answerfalse");
  } else {
    answers.classList.add("answerfalse");
    setTimeout(animationLose, 1000);
  }
};
