const loginForm = document.querySelector(".login-form");

const sendForm = (event) => {
  event.preventDefault();
  
  const {
    elements: { email, password },
  } = event.currentTarget;

  event;
  
  if (!email.value || !password.value) {
    return alert("Complete all fields!");
  }
  const formObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formObj);
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", sendForm);
