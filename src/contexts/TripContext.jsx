import { createContext, useState } from "react";
import { data } from "../data/api";

export const TripContext = createContext()

export function TripProvider({children}){
   const [continentsData, setContinentsData] = useState(data.continents)
   const [countries, setCountries] = useState([])
   const [destinations, setDestinations] = useState([])
    
    console.log(continentsData)
    return(
      <TripContext.Provider value = {{continentsData, countries, setCountries, destinations, setDestinations}}>{children}</TripContext.Provider>
       )
}