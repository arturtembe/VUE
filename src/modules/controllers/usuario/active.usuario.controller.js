import ActiveUsuarioModel from "@/modules/models/usuario/active.usuario.model";
import activeUsuarioService from "@/modules/services/usuario/active.usuario.service";

export default class ActiveUsuarioController{
    
    async handle({email,otp}){

        let activeUsuario = new ActiveUsuarioModel();
        activeUsuario.setEmail(email);
        activeUsuario.setOtp(otp);
        
        return await new activeUsuarioService().execute(activeUsuario.getActiveCount()); 
    }
}