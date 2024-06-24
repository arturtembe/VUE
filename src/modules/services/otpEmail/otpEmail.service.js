import endpoint from "@/modules/helpers/endpoint.helper";

export default class OtpEmailService{
    
    async execute(URLSearchParams){
        
        let data = await fetch(endpoint.otpEmail,{
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
            slug: '',
            message: ``
        };
        if(await data.status==200){
            
            value = {
                status: true,
                slug: await data.slug,
                message: await data.message
            }
        }

        return value;
    }
}