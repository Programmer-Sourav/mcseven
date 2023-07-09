import { useNavigate } from "react-router-dom"
export default function CountryCard({data}){
   
    const navigate = useNavigate()

    const goToDestinations = (id) =>{
        navigate(`/list/${id}`)
    }
    return(
        <div style={{height:"250px", width: "250px"}} onClick={()=>{goToDestinations(data.id)}}>
            <img src={data.image} alt="demopic" height="192" width="220"/> 
            <p>{data.name}</p>
        </div>
    )
}