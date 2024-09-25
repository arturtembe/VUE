import LoginModel from "@/modules/models/login/login.model";
import LoginService from "@/modules/services/login/login.service";

export default class LoginController{
    
    async logar({email,password}){
        let login = new LoginModel();
        login.setEmail(email)
        login.setPassword(password);

        return await new LoginService().execute(login.getLogin());
    }
}