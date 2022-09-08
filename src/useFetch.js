
import { useState,useEffect } from "react";
const useFetch =(request)=>{

    let [data, setData] = useState( null );
    let [pending,setPending]=useState(true)
    const[error,setError]=useState(null)

    useEffect(  ()=>{
        
        setTimeout(()=>{
        fetch(request)
        .then((response)=>{

            if(response.ok === false)
            {
                throw Error("Data not found,please try for different resource");
            }
            else{
                return(response.json())
            }
            
             })
        .then((data)=>{ setData(data); setPending(false) ;})
        .catch((error)=>{setError(error.message); setPending(false);})
       
        },3000)

    }   );
    

    return ({data,pending,error})
}
export default useFetch;