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
  <form @submit.prevent="submitLogin">
  <div class="enter-name">
  <div class="rectangle-2"></div>
  <input type="text" v-model="form.email" class="enter-email" placeholder="Enter Email" />
  <div class="x-icon">
    <svg
      class="x"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="17.5"
        height="17.5"
        rx="8.75"
        stroke="#667085"
      />
      <path
        d="M11.7944 7.0022L7.00244 11.7942"
        stroke="#667085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.796 11.797L7 7"
        stroke="#667085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</div>
<div class="password">
  <div class="rectangle-3"></div>
  <input type="text" v-model="form.password" class="div" placeholder="••••••••"/>
  <div class="x-icon">
    <svg
      class="group-237455"
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5114 11.0663C8.98465 11.0663 7.74624 9.82856 7.74624 8.30111C7.74624 7.52721 8.06306 6.82955 8.57541 6.32693C8.76563 6.14031 8.76856 5.83483 8.58194 5.6446C8.39533 5.45438 8.08984 5.45145 7.89962 5.63807C7.21011 6.31449 6.78125 7.25732 6.78125 8.30111C6.78125 10.3617 8.45186 12.0312 10.5114 12.0312C11.5542 12.0312 12.498 11.6024 13.1744 10.9129C13.361 10.7227 13.3581 10.4172 13.1679 10.2306C12.9777 10.0439 12.6722 10.0469 12.4856 10.2371C11.983 10.7494 11.2845 11.0663 10.5114 11.0663Z"
        fill="#677185"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.86113 12.2958C4.41187 14.2002 6.87407 16.1562 10.4278 16.1562C12.838 16.1562 14.7565 15.2541 16.2279 14.0769C16.4338 13.9122 16.4662 13.6131 16.3003 13.4087C16.1344 13.2044 15.833 13.1723 15.6272 13.3369C14.2908 14.406 12.5783 15.2059 10.4278 15.2059C7.27031 15.2059 5.05482 13.478 3.60568 11.6984C2.88217 10.8099 2.35932 9.91906 2.01741 9.24956C1.84675 8.91538 1.72195 8.63788 1.64038 8.44546C1.62008 8.39758 1.60248 8.35501 1.58752 8.31817C1.62404 8.23283 1.67542 8.11661 1.74195 7.97494C1.89472 7.64965 2.12678 7.1915 2.44151 6.66599C3.07304 5.61151 4.02699 4.30344 5.32593 3.24933C5.53061 3.08323 5.56089 2.78387 5.39356 2.58069C5.22623 2.37751 4.92466 2.34745 4.71998 2.51355C3.30516 3.66169 2.28386 5.06949 1.61858 6.18033C1.2849 6.73747 1.03816 7.22433 0.874227 7.57339C0.792211 7.74803 0.730778 7.88848 0.68943 7.98637C0.668752 8.03532 0.653086 8.07366 0.642369 8.10032C0.637011 8.11366 0.632888 8.12408 0.629995 8.13146L0.626575 8.14023L0.625554 8.14287L0.625215 8.14375L0.625089 8.14408C0.625037 8.14421 0.624991 8.14433 1.07244 8.31319C0.621509 8.47265 0.621582 8.47285 0.621665 8.47308L0.621883 8.47369L0.622503 8.4754L0.62448 8.48083C0.626128 8.48533 0.628434 8.49158 0.631405 8.49953C0.637347 8.51544 0.645948 8.53814 0.657254 8.56719C0.679864 8.62528 0.713309 8.70879 0.757949 8.81409C0.847195 9.0246 0.981397 9.32272 1.16349 9.67927C1.52708 10.3912 2.08471 11.3424 2.86113 12.2958ZM1.07244 8.31319L0.621509 8.47265C0.583335 8.36627 0.584569 8.24989 0.624991 8.14433L1.07244 8.31319Z"
        fill="#677185"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.8437 12.599C17.0391 12.772 17.3392 12.7556 17.5141 12.5624C18.4324 11.5478 19.0912 10.4913 19.5202 9.6906C19.7352 9.2895 19.8935 8.95058 19.9987 8.71036C20.0513 8.59019 20.0907 8.49457 20.1172 8.42803C20.1305 8.39476 20.1406 8.36874 20.1476 8.35055C20.1511 8.34146 20.1538 8.33432 20.1557 8.3292L20.158 8.32306L20.1587 8.32114L20.1589 8.32048L20.159 8.32022C20.1591 8.32011 20.1591 8.32001 19.7128 8.15998C20.1566 7.99323 20.1565 7.99304 20.1564 7.99282L20.1555 7.99058L20.1535 7.98526C20.1517 7.98084 20.1493 7.97466 20.1462 7.9668C20.1399 7.95107 20.1308 7.92856 20.1189 7.89973C20.0951 7.84208 20.0599 7.7591 20.0131 7.65441C19.9195 7.44509 19.7795 7.14851 19.5911 6.79371C19.2149 6.08521 18.6431 5.13866 17.8603 4.18977C16.2995 2.29764 13.853 0.34375 10.4131 0.34375C8.86164 0.34375 7.50706 0.743134 6.34492 1.35717C6.11365 1.47936 6.02631 1.76388 6.14983 1.99266C6.27336 2.22143 6.56097 2.30784 6.79224 2.18564C7.83116 1.63672 9.03325 1.283 10.4131 1.283C13.4521 1.283 15.6554 3.00241 17.1247 4.78359C17.857 5.67135 18.3953 6.56145 18.7505 7.23045C18.9278 7.56439 19.0587 7.84176 19.1447 8.03421C19.1665 8.08293 19.1854 8.12618 19.2014 8.16349C19.1814 8.21177 19.1568 8.26996 19.1274 8.33705C19.0308 8.55775 18.8831 8.87417 18.6813 9.25072C18.277 10.0054 17.6596 10.9934 16.8067 11.9359C16.6318 12.1291 16.6484 12.426 16.8437 12.599ZM19.7128 8.15998L20.1566 7.99323C20.1969 8.09835 20.1978 8.2143 20.1591 8.32001L19.7128 8.15998Z"
        fill="#677185"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4279 9.2744C13.6747 9.31914 13.9085 9.13993 13.95 8.87411C13.9819 8.67029 14 8.45944 14 8.24201C14 6.15868 12.4318 4.46875 10.4963 4.46875C10.2944 4.46875 10.0986 4.48825 9.90931 4.52255C9.66248 4.56729 9.49606 4.81905 9.53761 5.08487C9.57915 5.35069 9.81293 5.5299 10.0598 5.48516C10.2034 5.45913 10.3488 5.4449 10.4963 5.4449C11.931 5.4449 13.0936 6.69762 13.0936 8.24201C13.0936 8.40085 13.0804 8.55739 13.0562 8.71209C13.0146 8.9779 13.1811 9.22966 13.4279 9.2744Z"
        fill="#677185"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.78125 8.30111C6.78125 10.3616 8.4509 12.0312 10.5114 12.0312C11.5552 12.0312 12.498 11.6024 13.1744 10.9129C13.361 10.7227 13.3581 10.4172 13.1679 10.2306C12.9777 10.0439 12.6722 10.0469 12.4856 10.2371C11.983 10.7494 11.2853 11.0663 10.5114 11.0663C8.98385 11.0663 7.74624 9.82865 7.74624 8.30111C7.74624 7.52802 8.06311 6.8295 8.57541 6.32693C8.76563 6.14031 8.76855 5.83483 8.58194 5.6446C8.39533 5.45438 8.08984 5.45145 7.89962 5.63807C7.21006 6.31454 6.78125 7.25827 6.78125 8.30111Z"
        fill="#677185"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.6749 16.3624C18.8584 16.1789 18.8584 15.8814 18.6749 15.6978L3.11465 0.137629C2.93115 -0.0458755 2.63363 -0.0458755 2.45013 0.137629C2.26662 0.321131 2.26662 0.618649 2.45013 0.802153L18.0103 16.3624C18.1939 16.5459 18.4914 16.5459 18.6749 16.3624Z"
        fill="#677185"
      />
    </svg>
  </div>
</div>
<div class="forget-password-text">
  <div class="forgot-password">forgot Password ?</div>
</div>
<div class="bouton-sign-in">
  <div class="rectangle-4"></div>
  <button type="submit" class="sign-in">Sign In</button>
</div>
</form>
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
  left: 1110.84px;
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
.enter-name,
.enter-name * {
  box-sizing: border-box;
}
.enter-name {
  height: 77px;
  position: relative;
  left: 60%;
  margin-top: -170px;
}
.rectangle-2 {
  background: #eaf0f7;
  border-radius: 10px;
  width: 36%;
  height: 77.92%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 11.69%;
  top: 10.39%;
}
.enter-email {
  color: #4f555a;
  text-align: left;
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 18px;
  line-height: 77px;
  font-weight: 500;
  position: absolute;
  right: 64.25%;
  left: 5%;
  width: 30.75%;
  bottom: 0%;
  top: 0%;
  height: 100%;
  background: none;
  border: none;
}
.x-icon {
  width: 6%;
  height: 31.17%;
  position: absolute;
  right: 5.75%;
  left: 28.25%;
  bottom: 35.06%;
  top: 33.77%;
  overflow: hidden;
}
.x {
  height: auto;
  position: absolute;
  left: 3px;
  top: 3px;
  overflow: visible;
}
.password,
.password * {
  box-sizing: border-box;
}
.password {
  height: 77px;
  position: relative;
  left: 60%;
  margin-top: 10px;
}
.rectangle-3 {
  background: #eaf0f7;
  border-radius: 10px;
  width: 36%;
  height: 77.92%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 11.69%;
  top: 10.39%;
}
.div {
  color: #667085;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  position: absolute;
  right: 65.75%;
  left: 5%;
  width: 29.25%;
  bottom: 35.06%;
  top: 33.77%;
  height: 31.17%;
  background: none;
  border: none;
}
.x-icon {
  width: 6%;
  height: 31.17%;
  position: absolute;
  right: 6%;
  left: 28%;
  bottom: 35.06%;
  top: 33.77%;
  overflow: hidden;
}
.group-237455 {
  width: 81.64%;
  height: 68.75%;
  position: absolute;
  right: 7.55%;
  left: 10.81%;
  bottom: 18.75%;
  top: 12.5%;
  overflow: visible;
}
.forget-password-text,
.forget-password-text * {
  box-sizing: border-box;
}
.forget-password-text {
  position: relative;
}
.forgot-password {
  color: #c7c7c7;
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 14px;
  line-height: 77px;
  font-weight: 500;
  position: absolute;
  left: 1070px;
  top: 0px;
}
.bouton-sign-in,
.bouton-sign-in * {
  box-sizing: border-box;
}
.bouton-sign-in {
  height: 77px;
  position: relative;
}
.rectangle-4 {
  background: #4461f2;
  border-radius: 10px;
  width: 460px;
  height: 60px;
  position: absolute;
  left: 750px;
  top: 89px;
  box-shadow: 0px 12px 21px 4px rgba(68, 97, 242, 0.15);
}
.sign-in {
  color: #ffffff;
  text-align: left;
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 19px;
  line-height: 77px;
  font-weight: 700;
  position: relative;
  left: 940px;
  top: 80px;
  background: none;
  border: none;
}
</style>

<script>
import {ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  name: "Login",
  setup() {
    const router = useRouter();

    const form = ref({
      email: '',
      password: ''
    });

    const submitLogin = async () => {
        try {
        await axios.post('http://localhost:8000/api/login', {
          email: form.value.email,
          password: form.value.password
        });

        router.push('/home');
      } catch (error) {
        showErrorMessage('Login failed. Please check your credentials.');
      }
    };

    const showErrorMessage = (message) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message
      });
    };

    return {
    form,
    submitLogin,
    router,
    showErrorMessage
  };
  }
}
</script>