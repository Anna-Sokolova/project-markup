import "../css/contacts.css";
import references from "./refs.js";
const { contactSection } = references; //деструктризация

const gameArr = ["Камень", "Ножницы", "Бумага"];
console.log(gameArr);
function createBtn(array) {
  return array.map((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.dataset.key = el;

    return button;
  });
}

const buttons = createBtn(gameArr);
contactSection.append(...buttons);
console.log(buttons);

contactSection.addEventListener("click", (event) => {
  let index = Math.round(Math.random() * (gameArr.length - 1));
  console.log(index);
  let user = event.target.dataset.key;
  // console.log(user);

  let computer = gameArr[index];
  // console.log(computer);
  console.log(`user: ${user} - computer: ${computer}`);

  let msg;

  if (user === computer) {
    msg = "Ничья!";
  } else {
    (user === "Ножницы" && computer === "Бумага") ||
    (user === "Бумага" && computer === "Кмень") ||
    (user === "Кмень" && computer === "Ножницы")
      ? (msg = "User is Win!")
      : (msg = "Computer is Win!");
  }

  result.textContent = msg;
});

const result = document.createElement("p");

contactSection.append(result);
