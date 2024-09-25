<template>

    <div class="container">

      <div class="msg-container error" id="" v-if="msgError!=''">
        {{ msgError }}
      </div>

      <div class="msg-container success" id="" v-if="msgSuccess!=''">
        {{ msgSuccess }}
      </div>
      
      <div class="container-login-register" 
      id="container-login-register"
      ref="container">

        <!-- Sign up -->
        <div class="form-container sign-up">
          <form method="post" ref="form_register" 
          @submit.prevent="register()">
            <h1>Create Account</h1>
            <div class="social-icons">
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                  <path fill="#03A9F4" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><g><path fill="#03A9F4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"/><circle cx="31" cy="16" r="1" fill="#fff"/></g><g><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
              </a>
            </div> 
            
            <span>Or use your email for registration</span>
  
            <input type="text" placeholder="Name" name="username" ref="username_register"/>
            <input type="email" placeholder="Email" required name="email" ref="email_register"/>
            <input type="password" placeholder="Password" required name="password" ref="password_register">
            <button>Sign Up</button>
  
            <span class="span" ref="signup">
              Already a member?
              <a @click="btnSignUpIn()">Login Now</a>
            </span>
            
          </form>
        </div>
        <!-- Sign in -->
        <div class="form-container sign-in">
          <form method="post" ref="form_login" @submit.prevent="login()">
            <h1>Sign In</h1>
            <div class="social-icons">
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                  <path fill="#03A9F4" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><g><path fill="#03A9F4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"/><circle cx="31" cy="16" r="1" fill="#fff"/></g><g><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
              </a>
              <a href="#" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
              </a>
            </div> 
            
            <span>Or use your email password</span>
  
            <input type="email" placeholder="Email" name="email" ref="email_login"/>
            <input type="password" placeholder="Password" name="password" ref="password_login"/>
            <!-- Forget Your Password -->
            <a href="" style="display: none;">Forget Your Password?</a>
  
            <button>Sign In</button>
  
            <span class="span">
              Not a member?
              <a @click="btnSignUpIn()">Signup Now</a>
            </span>
            
          </form>
        </div>
  
        <div class="toggle-container">
          <div class="toggle">
            <!-- left -->
            <div class="toggle-panel toggle-left">
  
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
  
              <button class="hidden" id="login"
              @click="btnSignUpIn()">
                Sign In</button>
  
            </div>
            <!-- Right -->
            <div class="toggle-panel toggle-right">
  
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
  
              <button class="hidden" id="register"
              @click="btnSignUpIn()">
              Sign Up</button>
  
            </div>
  
          </div>
        </div>
  
      </div>
    </div>

</template>
    
<script>
import LoginController from '@/modules/controllers/login/login.controller';
import OtpEmailController from '@/modules/controllers/otpEmail/otpEmail.controller';
import RegisterController from '@/modules/controllers/register/register.controller';
import ValidForm from '@/modules/helpers/valid.helper';
import { ref } from 'vue';

export default {
    name: 'LoginRegister',
    methods:{
            btnSignUpIn(){
              this.$refs.container.classList.toggle('active');
            },
            async register(){
              
              const dado ={
                username: this.$refs.username_register.value,
                email: this.$refs.email_register.value,
                password: this.$refs.password_register.value
              }

              if(new ValidForm().usernameValid(dado.username).status)
              {
                this.msgError= new ValidForm().usernameValid(dado.username).message;
                return;
              }
              if(new ValidForm().emailValid(dado.email).status)
              {
                this.msgError= new ValidForm().emailValid(dado.email).message;
                return;
              }
              if(new ValidForm().passwordValid(dado.password).status)
              {
                this.msgError= new ValidForm().passwordValid(dado.password).message;
                return;
              }

              this.msgError= '';

              let registerController = new RegisterController();
              let result = await registerController.registar(dado);
              
              
              if(result.status==200){
                
                //OTP EMAIL
                
                let otpEmailController = new OtpEmailController();
                let resultOtp = await otpEmailController.otpEmail({email:dado.email});
                
                if(resultOtp.status){
                  location.href = `/${resultOtp.slug}/verify`;
                }else{
                  this.msgError = resultOtp.message
                }
              
              }
              else if(result.status==401){
                this.msgError = result.message;
              }
              else{
                this.msgError = `Houve um erro interno!`;
                console.log(result);
              }

            },
            async login(){

              const dado ={
                email: this.$refs.email_login.value,
                password: this.$refs.password_login.value
              }

              if(new ValidForm().emailValid(dado.email).status)
              {
                this.msgError = new ValidForm().emailValid(dado.email).message;
                return;
              }
              if(new ValidForm().passwordValid(dado.password).status)
              {
                this.msgError = new ValidForm().passwordValid(dado.password).message;
                return;
              }

              this.msgError= '';

              let loginController = new LoginController();
              let result = await loginController.logar(dado);
              
              if(result.status && result.code == 200){
                //this.msgSuccess= "Logado com sucesso"
                sessionStorage.setItem("tokenGTask",result.token);
                location.href = `/${result.slug}`;
              }
              else if(result.status && result.code == 400){
                //this.msgSuccess= "Logado com sucesso";
                
                //OTP EMAIL

                let otpEmailController = new OtpEmailController();
                let resultOTP = await otpEmailController.otpEmail({email:dado.email});

                //console.log(resultOTP);
                
                if(resultOTP.status){
                  location.href = `/${result.slug}/verify`;
                }
                else{
                  this.msgError = `Houve um erro ao finalizar o login!`;
                }
                
              }
              else{
                this.msgError= "Houve um erro ao logar!"
              }

            }
        },
        setup(){
          const msgError=ref("");
          const msgSuccess=ref("");

          return{msgError,msgSuccess}
        }
    }
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>

    /* Msg */

    .msg-container{
      padding: 10px;
      width: 70%;
      margin: 0 10% 10px 10%;
      color: #fff;
      font-weight: bold;
    }
    .msg-container.error{
      background-color: #FBA6A6;
    }
    .msg-container.success{
      background-color: #69B1FA;
    }
    
    .container {
        height: 100vh;
        width: 100%;
        background-color: #c9d6ff;
        background: linear-gradient(to right, #e2e2e2, #c9c9c9);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .container-login-register{
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
        position: relative;
        overflow: hidden;
        width:768px;
        max-width: 100%;
        min-height: 480px;
    }
    .container-login-register p{
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        margin: 20px 0;
    }
    .container-login-register span{
        font-size: 12px;
    }
    .container-login-register a{
        color: #333;
        font-size: 13px;
        text-decoration: none;
        margin: 15px 0 10px;
        &:hover{
            text-decoration: underline;
            text-decoration-color: rgba(5,99, 155, 0.9);
        }
    }

    .container-login-register .span{
        margin: 15px 0 0 0;
        padding: 10px;
        display: none; 
    }
    .container-login-register .span a{
        cursor: pointer;
        height: 100%;
        color: #00f;
        padding: 10px;
    }

    .container-login-register button{
        background-color: #512da8;
        color: #fff;
        font-size: 12px;
        padding: 10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }
    .container-login-register button.hidden{
        background-color: transparent;
        border-color: #fff;
    }

    .container-login-register form{
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        height:100%;
    }
    .container-login-register input{
        background-color: #eee;
        border: none;
        margin: 8px 0;
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width:100%;
        outline: none;
    }
    
    .form-container{
        position: absolute;
        top:0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in{
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container-login-register.active .sign-in{
        transform: translateX(100%);
    }

    .sign-up{
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container-login-register.active .sign-up{
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
    }

    @keyframes move {
        0%,49.99%{
            opacity: 0;
            z-index: 1;
        }
        50%,100%{
            opacity: 1;
            z-index: 5;
        }
    }

      /* Social Media */

    .social-icons{
        margin: 20px 0;
    }

    .social-icons a{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 20%;
        margin: 0 3px;

        &:hover{
            background-color: #888;
        }
    }

    .social-icons a svg{
        width: 40px;
        height: 40px;
    }
    .social-icons a svg path{
        fill: #333;
    }

      /* Toggle */

    .toggle-container{
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        border-radius: 150px 0 0 100px;
        z-index: 1000;
    }

    .container-login-register.active .toggle-container{
        transform: translateX(-100%);
        border-radius: 0 150px 100px 0;
    }

    .toggle{
        background-color: #512da8;
        height: 100%;
        background: linear-gradient(to right,#5c6bc0,#512da8);
        color: #fff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .container-login-register.active .toggle{
        transform: translateX(50%);
    }

    .toggle-panel{
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top:0;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .toggle-left{
        transform: translateX(-200%);
    }

    .container-login-register.active .toggle-left{
        transform: translateX(0);
    }

    .toggle-right{
        right: 0;
        transform: translateX(0);
    }

    .container-login-register.active .toggle-right{
        transform: translateX(200%);
    }

      /* Media  */

    @media(max-width:800px){
        .container-login-register{
            width: 95%;
        }
        .msg-container{
          width: 90%;
        }

    }

    @media((max-width:680px) and (max-width:680px)){
        
        .form-container h1{
            font-size: 2em;
        }

        .social-icons a svg{
            width: 30px;
            height: 30px;
        }

        .form-container{
            width: 100%;
        }
        .container-login-register.active .sign-in{
            transform: translateX(0);
        }
        .container-login-register.active .sign-up{
            transform: translateX(0);
        }

        .sign-in .span,.sign-up .span{
            display: inline-block;
        }

        .toggle{
            width: 0;
        }

    }

    @media(max-width:335px){
        
        .form-container h1{
            font-size: 1.5em;
        }

        .social-icons a svg{
            width: 20px;
            height: 20px;
        }

        .sign-in .span,.sign-up .span{
            font-size: 9px;
        }

    }

    </style> 