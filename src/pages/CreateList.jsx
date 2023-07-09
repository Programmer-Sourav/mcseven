import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { TripContext } from "../contexts/TripContext"
import CountryCard from "../components/CountryCard"
import DestinationCard from "../components/DestinationCard"

export default function CreateList(){
     const { id } = useParams()
     const {  continentsData, countries, setDestinations} = useContext(TripContext)
  
     const  findDest = () =>{
       return countries.find((country)=>country.id.toString()===id).destinations
     }

     const destinations = findDest()

     const saveDestinations = () =>{
        setDestinations(destinations)
     }
   
     useEffect(()=>{saveDestinations()},[])






    return(
        <div> 
            {
                destinations.map((destination)=>(
                    <DestinationCard data={destination}/>
                ))
            }

        </div>
    )
}