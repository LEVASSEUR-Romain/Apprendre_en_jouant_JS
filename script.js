const numberOfQuestions = Object.keys(arrayQuestions).length;
const buttonGoUp = document.getElementById("goUp");
const buttonGoDown = document.getElementById("goDown");
const answers = document.getElementById("reponses");
const current = document.getElementById("current");
const final = document.getElementById("final");
const question = document.getElementById("question");
const commentaire = document.getElementById("coms");
const animationSwitch = document.getElementById("animationSwitch");
/* affichage de la page */
const refresh = () => {
  if (localStorage.current == undefined) {
    localStorage.current = 1;
  }
  current.innerText = localStorage.current;
  final.innerText = numberOfQuestions;
  question.innerText = arrayQuestions[localStorage.current].question;
  commentaire.innerText = arrayQuestions[localStorage.current].comms;
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
    animationQuestions();
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
    animationQuestions();
    refresh();
  }
});
buttonGoDown.addEventListener("click", () => {
  if (parseInt(localStorage.current) !== 1) {
    localStorage.current = parseInt(localStorage.current) - 1;
    animationQuestions();
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

const animationQuestions = () => {
  if (animationSwitch.classList[0] == "animationQuestion") {
    animationSwitch.classList.remove("animationQuestion");
  } else {
    animationSwitch.classList.add("animationQuestion");
    setTimeout(animationQuestions, 1000);
  }
};
