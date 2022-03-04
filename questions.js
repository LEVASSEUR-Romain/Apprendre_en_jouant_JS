const arrayQuestions = {
  1: {
    question: "const coucou ='coucou';\nconsole.log(coucou);",
    rep: {
      R1: "Coucou",
      R2: "coucou",
      R3: "erreur",
      R4: "undefined",
    },
    comms: "Faire coucou a la console",
    reponse: "R2",
  },
  2: {
    question: "console.log(coucou);\nconst coucou = 'coucou';",
    rep: {
      R1: "Coucou",
      R2: "coucou",
      R3: "erreur",
      R4: "undefined",
    },
    comms: "Si on inverser les choses",
    reponse: "R3",
  },
  3: {
    question: "console.log(coucou);\nvar coucou = 'coucou';",
    rep: {
      R1: "Coucou",
      R2: "coucou",
      R3: "erreur",
      R4: "undefined",
    },
    comms: "Pourquoi on fait plus de var ?",
    reponse: "R4",
  },
  4: {
    question:
      "for (var i = 0; i < 10; i++)\n {\n //Du code \n}\nconsole.log(i);",
    rep: {
      R1: "9",
      R2: "10",
      R3: "erreur",
      R4: "undefined",
    },
    comms:
      "Dans le code précédant console.log(coucou);\nvar coucou = 'coucou'; \njavascript fait var coucou;\n console.log(coucou);\n coucou = 'coucou'",
    reponse: "R1",
  },
  5: {
    question:
      "for (var i = 0; i < 10; i++)\n {\n //Du code \n}\nconsole.log(i);",
    rep: {
      R1: "9",
      R2: "10",
      R3: "erreur",
      R4: "undefined",
    },
    comms:
      "Dans le code précédant console.log(coucou);\nvar coucou = 'coucou'; \njavascript fait var coucou;\n console.log(coucou);\n coucou = 'coucou'",
    reponse: "R1",
  },
};
/* for in => string */
