const have = document.getElementById("have");
const loginleft = document.getElementById("login-left");
const loginright = document.getElementById("login-right");
const btnsignup = document.getElementById("signup");
const havecross = document.getElementById("havecross");

const sign = document.getElementById("sign");
const signupleft = document.getElementById("signup-left");
const signupright = document.getElementById("signup-right");
const btnsignin = document.getElementById("signin");
const signcross = document.getElementById("signcross");

btnsignup.addEventListener("click", () => {
  loginleft.style.animation = 'none';
  loginright.style.animation = 'none';
  sign.style.zIndex = "1";
  sign.style.opacity = "1";
  have.style.opacity = "0";
  have.style.zIndex = "0";
  void loginleft.offsetWidth;
  void loginright.offsetWidth;
  loginleft.style.animation = null;
  loginright.style.animation = null;
  
});

btnsignin.addEventListener("click", () => {
  signupleft.style.animation = 'none';
  signupright.style.animation = 'none';
  have.style.opacity = "1";
  have.style.zIndex = "1";
  sign.style.opacity = "0";
  sign.style.zIndex = "0";
  void signupleft.offsetWidth;
  void signupright.offsetWidth;
  signupleft.style.animation = null;
  signupright.style.animation = null;
});

