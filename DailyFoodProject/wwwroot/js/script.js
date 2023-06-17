const button = $(".jygoFr");
const block = $(".cmAKjy");
let currentIndex = 2;

button.on("click", () => {
  $("#dot_"+currentIndex).css("opacity", "0.5");
  currentIndex = currentIndex + 1;
  if (currentIndex > 3) {
    currentIndex = 1;
  }
  block.css(
    "background-image",
    `url("./images/banner_${currentIndex}.png")`
  );
  $("#dot_"+currentIndex).css("opacity", "1");
});

const buttonLeft = $(".eHSsOq");
buttonLeft.on("click", () => {
  $("#dot_"+currentIndex).css("opacity", "0.5");
  currentIndex = currentIndex - 1;
  if (currentIndex < 1) {
    currentIndex = 3;
  }
  block.css(
    "background-image",
    `url("./images/banner_${currentIndex}.png")`
  );
  $("#dot_"+currentIndex).css("opacity", "1");
});

$(".ZyKEf").click(function()
{
  $(".epmQVC .ZyKEf").css("opacity", "0.5");
  let num = parseInt($(this).attr("id").slice(-1));
  $("#dot_"+num).css("opacity", "1");
  block.css(
    "background-image",
    `url("./images/banner_${num}.png")`);
});

