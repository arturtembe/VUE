
export default class OtpEmailModel{
    email;
    http;

    // SET
    setEmail(email){
        this.email = email;
    }
    setHref(href){
        this.http = href;
    }

    getOtpEmail(){
        let formaData = new FormData()
        formaData.append("email", this.email);
        formaData.append("href", this.http);
        
        return new URLSearchParams(formaData);
    }
}