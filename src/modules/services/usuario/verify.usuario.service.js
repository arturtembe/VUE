import endpoint from "@/modules/helpers/endpoint.helper";

export default class verifyUsuarioService{
    
    async getVerifyOTPSlug(slug){
        
        let data= await fetch(`${endpoint.verifyOtp}/${slug}`)
        .then(res=>res.json())
        .then(res=>{
            //console.log(res);
            return res;
        }).catch(error=>{
            alert(`Houve um Errro Interno!`)
            console.log(error);
        });

        let value = {
            status: false,
            code: 404,
            slug: slug,
            user: {},
            message: ``
        };
        if(await data.status==200){

            if(await data.otp){
                value = {
                    status: true,
                    code: 200,
                    slug: slug,
                    user: await data.user,
                    message: await data.message
                }
            }
            else {
            // O link OTP expirou!
                value = {
                    status: true,
                    code: 400,
                    slug: slug,
                    user: await data.user,
                    message: await data.message
                }
            }
        }

        return value;
    }

    async getToken(){
        
        let data= await fetch(endpoint.verifyToken,{
            method: "get",
            headers:{
                "Authorization": `Bearer ${sessionStorage.getItem("tokenGTask")}`
            }
        })
        .then(res=>res.json())
        .then(res=>{
            //console.log(res);
            return res;
        }).catch(error=>{
            alert(`Houve um Errro Interno!`)
            console.log(error);
        });

        let value = {
            status: false,
            jwt: {}
        };
        if(await data.status==200){
            value = {
                status: true,
                jwt: await data.info
            }
        }

        return value;
    }
}