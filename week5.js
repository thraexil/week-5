let questions = [
  "What is the maximum level of a beacon's pyramid?",
  "Which enchantment prevents tridents from being thrown?",
  "What is the ID of a Netherite Ingot?",
  "Which mob can pick up a carved pumpkin?",
  "How many eyes of ender can an End Portal frame contain?",
  "Which potion effect lets you see underwater clearly?",
  "What is the maximum level of Looting?",
  "Which wood type was added in the Nether Update?",
  "What happens when a Charged Creeper kills a Zombie?",
  "Which mob drops a Totem of Undying?"
];

// choices
let choices = [
  ["3 layers", "4 layers", "5 layers", "6 layers"],
  ["Loyalty", "Riptide", "Impaling", "Channeling"],
  ["minecraft:netherite_ingot", "minecraft:ancient_debris", "minecraft:netherite", "minecraft:netherite_scrap"],
  ["Zombie", "Creeper", "Enderman", "Skeleton"],
  ["8", "10", "12", "16"],
  ["Night Vision", "Water Breathing", "Dolphin's Grace", "Conduit Power"],
  ["II", "III", "IV", "V"],
  ["Crimson", "Oak", "Spruce", "Jungle"],
  ["It drops a music disc", "It drops its head", "It becomes a charged zombie", "Nothing special"],
  ["Evoker", "Pillager", "Vindicator", "Ravager"]
];

// answers
let answers = [
  "4 layers",
  "Riptide",
  "minecraft:netherite_ingot",
  "Zombie",
  "12",
  "Night Vision",
  "III",
  "Crimson",
  "It drops its head",
  "Evoker"
];

let questN = 0;
let score = 0;
let questT;
let but1;
let but2;
let but3;
let but4;
let resultT;
let restB;
let answered = false;
let nextTimer;
let skeleton;
let mc;

function preload() {
  skeleton = loadImage("skel.png");
  mc = loadSound('mc.mp3');
}

// setup
function setup() {
  createCanvas(1000, 800);
  background("#7AA5FF");

  mc.loop();

  // clouds
  noStroke();
  fill("white");
  rect(60, 40, 80, 40);
  rect(20, 80, 160, 40);
  
  rect(100, 270, 80, 40);
  rect(60, 310, 160, 40);
  
  rect(870, 30, 80, 40);
  rect(830, 70, 160, 40);
  
  rect(840, 230, 80, 40);
  rect(800, 270, 160, 40);
  
  // ground
  fill("#926c4d");
  rect(0, 700, 1000, 100);
  
  fill("#526935");
  rect(0, 700, 1000, 20);
  
  fill("#637f40");
  rect(0, 660, 1000, 40);
  
  image(skeleton, 890, 555, 80, 130);

  // background
  stroke("#8b8b8b");
  fill("#c6c6c6");
  rect(200, 20, 620, 700, 20);
  
  stroke("#555555");
  strokeWeight(4);
  
  fill("#8b8b8b");
  rect(220, 390, 580, 300, 20);
  
  fill("#8b8b8b");
  rect(220, 45, 580, 200, 20);
  
  fill("#8b8b8b");
  rect(220, 285, 580, 70, 20);
  
  // question text
  questT = createP("");
  questT.position(240, 45);
  questT.style("width", "540px");
  questT.style("height", "200px");
  questT.style("font-size", "32px");
  questT.style("text-align", "center");
  questT.style("line-height", "1.2");
  questT.style("margin", "0");
  questT.style("overflow-wrap", "break-word");
  questT.style("display", "flex");
  questT.style("align-items", "center");
  questT.style("justify-content", "center");
  questT.style("box-sizing", "border-box");

  // buttons
  but1 = createButton("");
  but1.position(250, 420);

  but2 = createButton("");
  but2.position(530, 420);

  but3 = createButton("");
  but3.position(250, 560);

  but4 = createButton("");
  but4.position(530, 560);

  // result text
  resultT = createP("");
  resultT.position(240, 285);
  resultT.style("width", "540px");
  resultT.style("height", "90px");
  resultT.style("font-size", "45px");
  resultT.style("text-align", "center");
  resultT.style("line-height", "1.1");
  resultT.style("margin", "0");
  resultT.style("overflow-wrap", "break-word");
  resultT.style("display", "flex");
  resultT.style("align-items", "center");
  resultT.style("justify-content", "center");
  resultT.style("box-sizing", "border-box");

  but1.mousePressed(answer1);
  but2.mousePressed(answer2);
  but3.mousePressed(answer3);
  but4.mousePressed(answer4);

  // hover
  but1.mouseOver(function() {
    but1.style("background-color", "#b30000");
  });
  but1.mouseOut(function() {
    but1.style("background-color", "red");
  });

  but2.mouseOver(function() {
    but2.style("background-color", "#006400");
  });
  but2.mouseOut(function() {
    but2.style("background-color", "green");
  });

  but3.mouseOver(function() {
    but3.style("background-color", "#00008b");
  });
  but3.mouseOut(function() {
    but3.style("background-color", "blue");
  });

  but4.mouseOver(function() {
    but4.style("background-color", "#b3a000");
  });
  but4.mouseOut(function() {
    but4.style("background-color", "yellow");
  });

  but1.style("background-color", "red");
  but2.style("background-color", "green");
  but3.style("background-color", "blue");
  but4.style("background-color", "yellow");

  but1.style("color", "black");
  but2.style("color", "black");
  but3.style("color", "black");
  but4.style("color", "black");

  but1.style("font-size", "26px");
  but2.style("font-size", "26px");
  but3.style("font-size", "26px");
  but4.style("font-size", "26px");

  but1.style("width", "260px");
  but2.style("width", "260px");
  but3.style("width", "260px");
  but4.style("width", "260px");

  but1.style("height", "120px");
  but2.style("height", "120px");
  but3.style("height", "120px");
  but4.style("height", "120px");

  but1.style("white-space", "normal");
  but2.style("white-space", "normal");
  but3.style("white-space", "normal");
  but4.style("white-space", "normal");

  but1.style("overflow-wrap", "anywhere");
  but2.style("overflow-wrap", "anywhere");
  but3.style("overflow-wrap", "anywhere");
  but4.style("overflow-wrap", "anywhere");

  but1.style("padding", "8px");
  but2.style("padding", "8px");
  but3.style("padding", "8px");
  but4.style("padding", "8px");

  but1.style("box-sizing", "border-box");
  but2.style("box-sizing", "border-box");
  but3.style("box-sizing", "border-box");
  but4.style("box-sizing", "border-box");

  // border
  but1.style("border", "#555555 4px solid");
  but2.style("border", "#555555 4px solid");
  but3.style("border", "#555555 4px solid");
  but4.style("border", "#555555 4px solid");

  // corner
  but1.style("border-radius", "10px");
  but2.style("border-radius", "10px");
  but3.style("border-radius", "10px");
  but4.style("border-radius", "10px");

  // restart button
  restB = createButton("Restart");
  restB.style("font-size", "9px");
  restB.style("width", "60px");
  restB.style("height", "18px");
  restB.style("border", "none");
  restB.style("border-radius", "10px");
  restB.style("color", "white");
  restB.style("background-color", "#ad1a63");

  restB.position(925, 770);
  restB.mousePressed(quizR);

  questS();

}

// restart
function quizR() {
  clearTimeout(nextTimer);

  questN = 0;
  score = 0;
  answered = false;

  questM();

  but1.show();
  but2.show();
  but3.show();
  but4.show();

  questS();
}

function questS() {
  answered = false;

  questT.html(questions[questN]);

  but1.html(choices[questN][0]);
  but2.html(choices[questN][1]);
  but3.html(choices[questN][2]);
  but4.html(choices[questN][3]);

  resultT.html("");
}

// check choice
function answer1() {
  answerC(choices[questN][0]);
}

function answer2() {
  answerC(choices[questN][1]);
}

function answer3() {
  answerC(choices[questN][2]);
}

function answer4() {
  answerC(choices[questN][3]);
}

// check answer
function answerC(answer) {
  if (answered) return;
  answered = true;

  if (answer == answers[questN]) {
    score++;
    resultT.html("Correct!");
  } else {
    resultT.html("Wrong, it was " + answers[questN]);
  }

  questN++;

  if (questN < questions.length) {
    nextTimer = setTimeout(questS, 1000);
  } else {
    nextTimer = setTimeout(quizF, 1000);
  }
}

// END
function quizF() {
  questT.html("END");

  but1.hide();
  but2.hide();
  but3.hide();
  but4.hide();

  resultT.html(score + " / " + questions.length + " correct");
}

// mix choices / buttons
function questM() {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));

    let temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;

    temp = choices[i];
    choices[i] = choices[j];
    choices[j] = temp;

    temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }

  for (let i = 0; i < choices.length; i++) {
    for (let k = choices[i].length - 1; k > 0; k--) {
      let j = floor(random(k + 1));

      let temp = choices[i][k];
      choices[i][k] = choices[i][j];
      choices[i][j] = temp;
    }
  }
}
