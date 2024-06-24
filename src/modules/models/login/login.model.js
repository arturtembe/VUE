
export default class LoginModel{
    email;
    password;

    // SET
    setEmail(email){
        this.email = email;
    }
    setPassword(password){
        this.password = password;
    }

    getLogin(){
        let formaData = new FormData()
        formaData.append("email", this.email);
        formaData.append("password", this.password);
        
        return new URLSearchParams(formaData);
    }
}