import endpoint from "@/modules/helpers/endpoint.helper";

export default class RegisterService{
    
    async execute(URLSearchParams){
        
        let data = await fetch(endpoint.register,{
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

        return data;
        
    }
}