const btnColours = ["red", "blue", "green", "yellow"];
const gameChoise = [];
const userChoise = [];

const nextSequence = () => {
  const randomColor = btnColours[Math.floor(Math.random() * 4)];
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  gameChoise.push(randomColor);
};

const checkAnswer = () => {
  if (gameChoise[gameChoise.length - 1] === userChoise[userChoise.length - 1]) {
    if (gameChoise.length === userChoise.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  }
};

$(".btn").click(function () {
  userChoise.push($(this).attr("id"));
  checkAnswer();
  console.log(userChoise);
});
nextSequence();

console.log(gameChoise);
