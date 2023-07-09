import { useContext } from "react"
import { TripContext } from "../contexts/TripContext"
import ProductCard from "../components/ProductCard"

export default function ContinentsPage(){

    const {continentsData} = useContext(TripContext)

    return(
        <div>
        {
            continentsData.map((continent)=>(
                <ProductCard data = {continent}/>
            ))
        }
        </div>
    )
}