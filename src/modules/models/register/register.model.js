
export default class RegisterModel{
    username;
    email;
    password;

    // SET
    setUsername(username){
        this.username = username;
    }
    setEmail(email){
        this.email = email;
    }
    setPassword(password){
        this.password = password;
    }

    getRegister(){
        let formaData = new FormData()
        formaData.append("username", this.username);
        formaData.append("email", this.email);
        formaData.append("password", this.password);
        
        return new URLSearchParams(formaData);
    }
}