const password = document.querySelector("#password-1");
const confirmPassword = document.querySelector("#password-2");
const passwordErrorMsg = document.querySelector(".password-error-msg");
const form = document.querySelector(".sign-up-form");

let passwordsMatch = true;

function validatePasswords() {
  const newPasswordsMatch = password.value === confirmPassword.value;
  if (newPasswordsMatch !== passwordsMatch) {
    password.classList.toggle("error");
    confirmPassword.classList.toggle("error");
    passwordErrorMsg.classList.toggle("visible");
  }
  passwordsMatch = newPasswordsMatch;
}

// Validate passwords after every keystroke when they are in the
// error state and validate them on blur when they are not.
password.addEventListener(
  "input",
  () => !passwordsMatch && validatePasswords()
);
confirmPassword.addEventListener(
  "input",
  () => !passwordsMatch && validatePasswords()
);
password.addEventListener(
  "change",
  () => passwordsMatch && validatePasswords()
);
confirmPassword.addEventListener(
  "change",
  () => passwordsMatch && validatePasswords()
);

// Stop form submission when the passwords don't match.
form.addEventListener("submit", (e) => {
  if (!passwordsMatch) {
    e.preventDefault();
  }
});
