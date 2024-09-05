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

$(".btn").click(function () {
  userChoise.push($(this).attr("id"));
  console.log(userChoise);
});
nextSequence();

console.log(gameChoise);
