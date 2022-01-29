const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

const usernameSpan = document.getElementById("username-span");
const passwordSpan = document.getElementById("password-span");

// For username
usernameInput.addEventListener("focusin", () => {
  usernameSpan.style.width = "100%";
});
usernameInput.addEventListener("focusout", () => {
  usernameSpan.style.width = "0%";
});

// Validation for username
usernameInput.addEventListener("input", ({ target }) => {
  const { value } = target;
  if (!value || value.length < 5) {
    usernameSpan.style.backgroundColor = "red";
  } else {
    usernameSpan.style.backgroundColor = "#4285f4";
  }
});

// For password
passwordInput.addEventListener("focusin", () => {
  passwordSpan.style.width = "100%";
});
passwordInput.addEventListener("focusout", () => {
  passwordSpan.style.width = "0%";
});

// Validation for username
passwordInput.addEventListener("input", ({ target }) => {
  const { value } = target;
  if (!value || value.length < 5) {
    passwordSpan.style.backgroundColor = "red";
  } else {
    passwordSpan.style.backgroundColor = "#4285f4";
  }
});
