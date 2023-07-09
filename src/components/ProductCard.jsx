import { useNavigate } from "react-router-dom"
export default function ProductCard({data}){
   
    const navigate = useNavigate()

    const goToCountries = (id) =>{
        navigate(`/countries/${id}`)
    }
    return(
        <div style={{height:"250px", width: "250px"}} onClick={()=>{goToCountries(data.id)}}>
            <img src={data.image} alt="demopic" height="192" width="220"/> 
            <p>{data.name}</p>
        </div>
    )
}