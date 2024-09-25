
export default class ActiveUsuarioModel{
    email;
    otp;

    // SET
    setEmail(email){
        this.email = email;
    }
    setOtp(otp){
        this.otp = otp;
    }

    getActiveCount(){
        let formaData = new FormData()
        formaData.append("email", this.email);
        formaData.append("otp", this.otp);
        
        return new URLSearchParams(formaData);
    }
}