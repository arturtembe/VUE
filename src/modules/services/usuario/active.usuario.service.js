import endpoint from "@/modules/helpers/endpoint.helper";

export default class activeUsuarioService{
    
    async execute(URLSearchParams){
        
        let data = await fetch(endpoint.activeCount,{
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
            token: ''
        }

        if(await data.status == 200){
            value = {
                status: true,
                token: await data.token
            }
        }

        return value;
        
    }
}