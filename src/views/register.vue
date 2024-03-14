<template>
<div>
  <div class="container">
    <div class="sign-in-to-recharge-direct">
      Sign In to
      <br />
      Recharge Direct
    </div>
  </div>
  <div class="if-you-have-an-account-you-can-login-here">
  <span>
    <span class="if-you-have-an-account-you-can-login-here-span">
      if you have an account
      <br />
      you can
    </span>
    <span class="if-you-have-an-account-you-can-login-here-span2">
      Login here!
    </span>
  </span>
  </div>
    <div class="background">
    <div class="ellipse-1"></div>
    <div class="ellipse-2"></div>
  </div>
    <div class="picture">
    <img class="character-1" src="../assets/character.png" />
  </div>
  <div class="top-side">
    <div class="english">English</div>
    <div class="register2">Register</div>
    <div class="line-3"></div>
    <div class="sign-in2">Sign in</div>
  </div>
</div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .container {
  background-color: white;  
  display: flex; 
  justify-content: flex-start; 
  align-items: flex-start; 
  padding-top: 160px; 
  padding-left: 40px;
}
}

.sign-in-to-recharge-direct {
  color: #000000; /* Memberikan warna teks hitam */
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 58px;
  line-height: 77px;
  font-weight: 700;
}
.if-you-have-an-account-you-can-login-here,
.if-you-have-an-account-you-can-login-here * {
  box-sizing: border-box;
}
.if-you-have-an-account-you-can-login-here {
  text-align: left;
  font-family: "-", sans-serif;
  font-size: 23px;
  font-weight: 400;
  position: relative;
  width: 290px;
  height: 63px;
  padding-top: 20px; 
  padding-left: 40px;
}
.if-you-have-an-account-you-can-login-here-span {
  color: #000000;
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 23px;
  font-weight: 500;
}
.if-you-have-an-account-you-can-login-here-span2 {
  color: #4461f2;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 23px;
  font-weight: 700;
}
.background,
.background * {
  box-sizing: border-box;
}
.background {
  position: relative;
}
.ellipse-1 {
  background: #4461f2;
  border-radius: 50%;
  width: 226px;
  height: 226px;
  position: absolute;
  filter: blur(158.5px);
}
.ellipse-2 {
  background: #dda82a;
  border-radius: 50%;
  opacity: 0.44999998807907104;
  width: 226px;
  height: 226px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(158.5px);
}
.picture,
.picture * {
  box-sizing: border-box;
}
.picture {
  position: relative;
}
.character-1 {
  width: 447px;
  height: 367px;
  position: absolute;
  object-fit: cover;
  margin-left: 360px;
  margin-top: -120px;
}
.top-side,
.top-side * {
  box-sizing: border-box;
}
.top-side {
  position: relative;
}
.language {
  width: 117.87px;
  height: 16px;
  position: static;
}
.english {
  color: #000000;
  text-align: left;
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 17px;
  font-weight: 500;
  position: absolute;
  left: 900px;
  top: -320px;
  width: 117.87px;
  height: 16px;
}
.register {
  width: 98px;
  height: 16px;
  position: static;
}
.register2 {
  color: #4461f2;
  text-align: left;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 17px;
  font-weight: 700;
  position: absolute;
  left: 993.84px;
  top: -320px;
  width: 98px;
  height: 16px;
}
.sign-in {
  width: 98.02px;
  height: 30px;
  position: static;
}
.line-3 {
  border-style: solid;
  border-color: #4461f2;
  border-width: 3px 0 0 0;
  width: 34.44px;
  height: 0px;
  position: absolute;
  left: 1015.84px;
  top: -280px;
}
.sign-in2 {
  left: 1100.84px;
  top: -320px;
  width: 98.02px;
  height: 16px;
  color: #4461f2;
  text-align: left;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 17px;
  font-weight: 700;
  position: absolute;
}
</style>