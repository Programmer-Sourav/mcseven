import { useContext, useEffect } from "react"
import {useParams} from "react-router-dom"
import { TripContext } from "../contexts/TripContext"
import CountryCard from "../components/CountryCard"

export default function CountriesPage(){
     const { id } = useParams()
     const {  continentsData, setCountries } = useContext(TripContext)
  
     const  findCountries = () =>{
       return continentsData.find((continent)=>continent.id.toString()===id).countries
     }

     const countries = findCountries();
   
     const saveCountries = () =>{
         setCountries(countries)
     }
     useEffect(()=>{saveCountries()}, [])


    return(
        <div> 
            {
                countries.map((country)=>(
                    <CountryCard data={country}/>
                ))
            }

        </div>
    )
}