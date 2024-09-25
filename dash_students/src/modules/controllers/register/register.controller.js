import RegisterModel from "@/modules/models/register/register.model";
import RegisterService from "@/modules/services/register/register.service";

export default class RegisterController{
    
    async registar({username,email,password}){
        let register = new RegisterModel();
        register.setUsername(username);
        register.setEmail(email);
        register.setPassword(password);

        return await new RegisterService().execute(register.getRegister());
    }
}