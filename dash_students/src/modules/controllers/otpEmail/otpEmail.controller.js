import OtpEmailModel from "@/modules/models/otpEmail/otpEmal.model";
import OtpEmailService from "@/modules/services/otpEmail/otpEmail.service";

export default class OtpEmailController{
    
    async otpEmail({email}){
        let href = `${location.protocol}//${location.host}`;
        let otpEmail = new OtpEmailModel();
        otpEmail.setEmail(email);
        otpEmail.setHref(href);
        
        return await new OtpEmailService().execute(otpEmail.getOtpEmail());
    }
}