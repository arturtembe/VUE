
export default class ValidForm{

    usernameValid(username){
        
        let data = true;

        if(username=="" || username == null || typeof username == undefined){
            return {
                status: data,
                message: `O campo username nao pode estar vazia!`
            }
        }
        if(username.length<3){
            return {
                status: data,
                message: `O username nao deve ter menos que 3 caracteres!`
            }
        }

        return !data;

    }
    emailValid(email){
        
        let data = true;

        if(email=="" || email == null || typeof email == undefined){
            return {
                status: data,
                message: `O campo email nao pode estar vazia!`
            }
        }
        if(email.indexOf('@')==-1 || email.indexOf('.')==-1){
            return {
                status: data,
                message: `Email Invalida!`
            }
        }

        return !data;

    }
    passwordValid(password){
        
        let data = true;
        if(password=="" || password == null || typeof password == undefined){
            return {
                status: data,
                message: `O campo password nao pode estar vazia!`
            };
        }
        if(password.length<8){
            return {
                status: data,
                message: `O campo passowrd deve ter no minimo 8 caracteres!`
            };
        }

        return {
            status: !data
        };

    }
}