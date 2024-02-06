const form = document.querySelector("form");

const popup = document.querySelector(".modal");
const eror = document.querySelector(".modal--eror");
const sent = document.querySelector(".modal--sent");
const close = document.querySelector(".modal__button");
const closeSent = document.querySelector(".modal__button--sent");
const secondName = document.querySelector("[name=secondName]");
const firstName = document.querySelector("[name=firstName]");
const usersEmail = document.querySelector("[name=usersEmail]");

form.addEventListener("submit", function (evt) {
  if (!secondName.validity.valid || !firstName.validity.valid || !usersEmail.validity.valid) {
    evt.preventDefault();
    eror.classList.add("modal--show");
  } else {
    evt.preventDefault();
    sent.classList.add("modal--show");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  eror.classList.remove("modal--show");
});

closeSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  sent.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (eror.classList.contains("modal--show")) {
      eror.classList.remove("modal--show");
    } else {
      sent.classList.remove("modal--show");
    }
  }
});