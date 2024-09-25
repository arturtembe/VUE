import endpoint from "@/modules/helpers/endpoint.helper";

export default class LoginService{
    
    async execute(URLSearchParams){
        
        let data= await fetch(endpoint.login,{
            method: "post",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*"
            },
            body: URLSearchParams
        }).then(res=>res.json())
        .then(res=>{
            //console.log(res);
            return res;
        }).catch(error=>{
            alert(`Houve um Errro Interno!`)
            console.log(error);
        });

        let value = {
            status: false,
        };
        if(await data.status==200){
            value = {
                status: true,
                code: 200,
                slug: await data.profile.user.slug,
                token: await data.token
            }
        }
        if(await data.status==400){
            value = {
                status: true,
                code: 400,
                slug: await data.slug
            }
        }

        return value;
    }
}