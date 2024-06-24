import verifyUsuarioService from "@/modules/services/usuario/verify.usuario.service";

export default class VerifyUsuarioController{
    
    async verifyOtpSlug(slug){
        return await new verifyUsuarioService().getVerifyOTPSlug(slug); 
    }
    // LOGIN; REGISTER
    async verifyTokenLogin(){
        
        let bearer = sessionStorage.getItem("tokenGTask");
        
        if(bearer !="" || bearer != null || typeof bearer != undefined){
            
            let data = new verifyUsuarioService();
            let result = await data.getToken();

            if(result.status){
                location.href = `/${result.jwt.user.slug}` 
            }
            
        }
    }
    // DASHBOARD
    async verifyTokenDashboard(){
        
        let bearer = sessionStorage.getItem("tokenGTask");
        
        if(bearer !="" || bearer != null || typeof bearer != undefined){
            
            let data = new verifyUsuarioService();
            let result = await data.getToken();

            if(!result.status){
                sessionStorage.removeItem("tokenGTask");
                location.href = `/login`; 
            }
            
        }else{
            location.href = `/login`;
        }
    }
    // HOME ; VERIFY 
    async verifyTokenPageHome(){
        
        let bearer = sessionStorage.getItem("tokenGTask");
        
        if(bearer !="" || bearer != null || typeof bearer != undefined){
            
            let data = new verifyUsuarioService();
            let result = await data.getToken();

            if(!result.status){
                sessionStorage.removeItem("tokenGTask");
                location.href = `/login`; 
                return;
            }

            //console.log(result);
            //sessionStorage.removeItem("tokenGTask");
            location.href = `/${result.jwt.user.slug}`;
            
        }else{
            location.href = `/login`;
        }
    }
}