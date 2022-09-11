import React from 'react'
import { ApiContexts } from '../../Context/ApiContext'
import axios from 'axios'
import SinglePage from '../SinglePage/SinglePage';
import DefaultPage from '../DefaultPage/DefaultPage';


const Cocktail = () => {
    const[ordinaryDrinksData,setOrdinaryDrinksData]=React.useState();
    const{selectedFilter}=React.useContext(ApiContexts)


    const cocktailApi=async()=>{
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedFilter}`).then((response)=>setOrdinaryDrinksData(response.data.drinks))

    }

   React.useEffect(()=>{
    cocktailApi();
   },[selectedFilter])
  return (
    <div>
        {
            
            ordinaryDrinksData ?
              (
                <div >
                     <SinglePage ordinaryDrinksData={ordinaryDrinksData}/>
                </div>
              
              )
            :
            (
            <DefaultPage/>
            )

            
        } 
        
    </div>
  )
}

export default Cocktail


// !selectedFilter ? ("Ordinary Drinks"): (selectedFilter)
