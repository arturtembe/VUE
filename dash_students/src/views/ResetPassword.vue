<template>
    
    <div class="container">

    <div class="container-login-register" 
    id="container-login-register"
    ref="container">

    <!-- Sign in -->
    <div class="form-container sign-in">
        <form method="post" ref="form_login">
        <h1>Sign In</h1>
        
        <span>Or use your email password</span>

        <input type="email" placeholder="Email" name="email" ref="email_login"/>
        <input type="password" placeholder="Password" name="password" ref="password_login"/>
        <!-- Forget Your Password -->
        <a href="">Forget Your Password?</a>

        <button>Sign In</button>

        <span class="span">
            Not a member?
            <a>Signup Now</a>
        </span>
        
        </form>
    </div>

    </div>
    </div>
    
</template>

<script>
    
export default {
    name: 'resetPasswordView'
}

</script>

<style scoped>


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
        width: 100%;
        z-index: 2;
    }

</style>