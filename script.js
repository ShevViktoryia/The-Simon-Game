const btnColours = ["red", "blue", "green", "yellow"];
let gameChoise = [];
let userChoise = [];
let start = false;
let level = 0;

const playSound = (name) => {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

const over = () => {
  level = 0;
  gameChoise = [];
  start = false;
};

const nextSequence = () => {
  userChoise = [];
  const randomColor = btnColours[Math.floor(Math.random() * 4)];
  level++;
  $("#level-title").text("Level " + level);
  $(`#${randomColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
  gameChoise.push(randomColor);
};

$(document).keypress(function () {
  if (!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

const checkAnswer = (ind) => {
  if (gameChoise[ind] === userChoise[ind]) {
    if (gameChoise.length === userChoise.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    over();
  }
};

const animateBtn = (btn) => {
  $(`#${btn}`).addClass("pressed");
  setTimeout(() => $(`#${btn}`).removeClass("pressed"), 100);
};

$(".btn").click(function () {
  userChoise.push($(this).attr("id"));
  playSound($(this).attr("id"));
  animateBtn($(this).attr("id"));
  checkAnswer(userChoise.length - 1);
});
