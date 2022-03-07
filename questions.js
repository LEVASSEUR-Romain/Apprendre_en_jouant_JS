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
      "for (let i = 0; i < 10; i++)\n {\n //Du code \n}\nconsole.log(i);",
    rep: {
      R1: "9",
      R2: "10",
      R3: "erreur",
      R4: "undefined",
    },
    comms: "Rolalala ce var",
    reponse: "R3",
  },
  6: {
    question:
      "function coucou() {\n return 'coucou';\n}\nconsole.log(coucou());",
    rep: {
      R1: "coucou",
      R2: "erreur",
      R3: "undefined",
    },
    comms:
      "Eh oui c'est pour cela que dorénavant il faut mieux utiliser les const et les let",
    reponse: "R1",
  },
  7: {
    question:
      "console.log(coucou());\nfunction coucou() {\n return 'coucou';\n}",
    rep: {
      R1: "coucou",
      R2: "erreur",
      R3: "undefined",
    },
    comms: "Et si on inverse",
    reponse: "R1",
  },
  8: {
    question:
      "console.log(coucou());\n const coucou = function() {\n return 'coucou';\n}",
    rep: {
      R1: "coucou",
      R2: "erreur",
      R3: "undefined",
    },
    comms: "Une function est toujours initialiser avant le reste du code",
    reponse: "R2",
  },
  9: {
    question:
      "function coucou() {\n return 'coucou';\n  }\n function coucou() {\n return 'hello';\n}\n console.log(coucou());\n",
    rep: {
      R1: "coucou",
      R2: "erreur",
      R3: "hello",
      R4: "undefined",
    },
    comms: "la constantes ne fonctionne pas comme function seul",
    reponse: "R3",
  },
  10: {
    question:
      "const coucou = () => {\n return 'coucou';\n };\n const coucou = () => {\n return 'hello';\n };\nconsole.log(coucou());",
    rep: {
      R1: "coucou",
      R2: "erreur",
      R3: "hello",
      R4: "undefined",
    },
    comms: "Mais pourquoi mettre dans une constante une function ??",
    reponse: "R2",
  },
  11: {
    question: "const a='2';\n const b = 3;\n let c = a + b;\nconsole.log(c);",
    rep: {
      R1: "5",
      R2: "32",
      R3: "23",
      R4: "erreur",
    },
    comms: "Allez une petit addition",
    reponse: "R3",
  },
  12: {
    question:
      "const a='2';\n const b = 3;\n let c = parseInt(a) + b;\nconsole.log(c);",
    rep: {
      R1: "5",
      R2: "32",
      R3: "23",
      R4: "erreur",
    },
    comms: "un string + number donne un string",
    reponse: "R1",
  },
  13: {
    question: "const a = '2';\nconst b = 3;\n b = a;\n console.log(b);",
    rep: {
      R1: "'2'",
      R2: "3",
      R3: "32",
      R4: "erreur",
    },
    comms: "Essaye cela",
    reponse: "R4",
  },
  14: {
    question:
      "let repetition;\n const textRepetition = 'I';\n  for (let i = 0; i < 4; i++) {\n repetition += textRepetition;\n}\n console.log(repetition);",
    rep: {
      R1: "III",
      R2: "IIII",
      R3: "undefinedIIII",
      R4: "erreur",
    },
    comms:
      "Dans la question précédant nous ne pouvons pas assigner une nouvelle variable a une constante",
    reponse: "R3",
  },
  15: {
    question:
      "let repetition='';\n const textRepetition = 'I';\n  for (let i = 0; i < 4; i++) {\n repetition += textRepetition;\n}\n console.log(repetition);",
    rep: {
      R1: "III",
      R2: "IIII",
      R3: "undefinedIIII",
      R4: "erreur",
    },
    comms: "Et comme ça ?",
    reponse: "R2",
  },
  16: {
    question: "const a = 0.52;\n  const b = 1;\n console.log(a + b);",
    rep: {
      R1: "52.1",
      R2: "1.52",
      R3: "erreur",
      R4: "aucune des réponse proposé",
    },
    comms: "Qui sera le meilleur en mathématiques?",
    reponse: "R2",
  },
  17: {
    question: "const a = 0.1;\n  const b = 0.2;\n console.log(a * b);",
    rep: {
      R1: "0.02",
      R2: "0.2",
      R3: "erreur",
      R4: "aucune des réponse proposé",
    },
    comms: "Mmmm bon aller tu peux utiliser la calculette",
    reponse: "R4",
  },
  18: {
    question:
      "const tbl = [1, 2, 3];\n const reTbl = tbl;\n  reTbl[0] = 2;\n console.log(reTbl);",
    rep: {
      R1: "[1,2,3]",
      R2: "[2,2,3]",
      R3: "erreur",
      R4: "aucune des réponse proposé",
    },
    comms: "On change une valeur?",
    reponse: "R2",
  },
  19: {
    question:
      "const tbl = [1, 2, 3];\n const reTbl = tbl;\n  reTbl[0] = 2;\n console.log(tbl);",
    rep: {
      R1: "[1,2,3]",
      R2: "[2,2,3]",
      R3: "erreur",
      R4: "aucune des réponse proposé",
    },
    comms: "On change une valeur?",
    reponse: "R2",
  },
  20: {
    question:
      "const tbl = [1, 2, 3];\n const reTbl = [...tbl];\n  reTbl[0] = 2;\n console.log(tbl);",
    rep: {
      R1: "[1,2,3]",
      R2: "[2,2,3]",
      R3: "erreur",
      R4: "aucune des réponse proposé",
    },
    comms: "On change une valeur?",
    reponse: "R1",
  },
  21: {
    question:
      "Avez vous aimez ce quiz ? voulez vous qu'il soit plus long? clicker sur le gitHub proposer une suite ...",
    rep: {
      R1: "oui",
      R2: "non",
    },
    comms: "La fin ...",
    reponse: "R1",
  },
};
