<template>
    
    <div class="container">

        <div class="msg-container error" id="" v-if="msgError!=''">
            {{ msgError }}
        </div>

        <div class="msg-container success" id="" v-if="msgSuccess!=''">
            {{ msgSuccess }}
        </div>

    </div>
    
</template>

<script>
import VerifyUsuarioController from '@/modules/controllers/usuario/verify.usuario.controller';
import { ref } from 'vue';
import ActiveUsuarioController from '@/modules/controllers/usuario/active.usuario.controller';

    
export default {
    name: 'loginVerifyVueView',
    setup(){
        const msgError=ref("");
        const msgSuccess=ref("");

        return{msgError,msgSuccess}
    },
    async mounted(){
        let otp = this.$route.params.otp;
        let slug = this.$route.params.slug;
        let resultOTPSlug = new VerifyUsuarioController()
        let result = await resultOTPSlug.verifyOtpSlug(slug);

        if(result.status){

            if(result.code==200){
                this.msgError = result.message;
                
                let activeDado = {
                    email: result.user.email,
                    otp: otp 
                }

                let activeUsuario = new ActiveUsuarioController();
                let resultActive = await activeUsuario.handle(activeDado);

                if(resultActive.status){
                    sessionStorage.setItem("tokenGTask",resultActive.token);
                    location.href = `/${slug}`;
                }
                else{
                    alert("Houve um erro ao configurar!");
                    location.href = '/login';
                }

            }
            else{
                this.msgError = result.message;
                //onsole.log(result);    
            }

        }
        else{
            alert("Este usuario nao existem! porfavor tente logar novamente!");
            location.href = '/login';
        }

    }
}

</script>

<style scoped>

    .msg-container{
        padding: 10px;
        width: 70%;
        margin: 0 10% 10px 10%;
        color: #fff;
        font-weight: bold;
    }
    .msg-container.error{
        background-color: #ed0d0d;
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

</style>