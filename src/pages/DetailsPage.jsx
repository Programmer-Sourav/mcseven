import { useContext } from "react"
import {useParams} from "react-router-dom"
import { TripContext } from "../contexts/TripContext"
import CountryCard from "../components/CountryCard"
import DestinationCard from "../components/DestinationCard"

export default function DetailsPage(){
     const { id } = useParams()
     const {  continentsData, countries, destinations} = useContext(TripContext)
  
     const  findDest = () =>{
       return destinations.find((destination)=>destination.id.toString()===id)
     }

     const destinationDetails = findDest()
    console.log(223, destinations)



    return(
        <div> 
            {
               <p>{destinationDetails.description}</p>
            }

        </div>
    )
}