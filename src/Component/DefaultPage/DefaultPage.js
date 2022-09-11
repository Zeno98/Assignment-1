import React from 'react'
import axios from 'axios'
import { ApiContexts } from '../../Context/ApiContext';
import "./DefaultPage.css";

const DefaultPage = () => {

    const [defaultData,setDefaultData]=React.useState();

    const{modalInfo,selectedFilter}=React.useContext(ApiContexts)

    const defaultApi=async()=>{
        await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink").then((response)=>setDefaultData(response.data.drinks))
    }

    React.useEffect(()=>{
        defaultApi();

    },[])
    
  return (
    <div>
        <h2>Ordinary Drink <span className='items-length'>({defaultData ?defaultData.length:""} items)</span></h2>
        
        {

            
            defaultData  ? 
            (
                
                defaultData.map((ele,index)=>{
                    return(
                        <>
                        <li className='item-list' key={index} onClick={()=>{modalInfo(index)}}><span><img className='item-img' src={ele.strDrinkThumb+'/preview'}/></span><span className="drink-name">{ele.strDrink}</span></li>
                        
                        </>
                    )
                })

            ):""

        }
        
    </div>
  )
}

export default DefaultPage