const max = 44;

$button = document.getElementById("button");
$number = document.querySelectorAll(".number>div");
console.log($number);
$button.addEventListener("click", () => {
  let temp = [];

  while (temp.length < 6) {
    const randomNum = Math.floor(Math.random() * max) + 1;

    if (!temp.includes(randomNum)) {
      temp.push(randomNum);
    }
  }

  $number.forEach((elm, index) => {
    elm.textContent = temp[index];
  });
});
