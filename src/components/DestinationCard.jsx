import { useNavigate } from "react-router-dom"
export default function DestinationCard({data}){
   
    const navigate = useNavigate()

    const goToDescription = (id) =>{
        navigate(`/details/${id}`)
    }
    return(
        <div style={{height:"250px", width: "250px"}} onClick={()=>{goToDescription(data.id)}}>
            <img src={data.image} alt="demopic" height="192" width="220"/> 
            <p>{data.name}</p>
        </div>
    )
}