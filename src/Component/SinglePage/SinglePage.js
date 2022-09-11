import React from 'react'
import { ApiContexts } from '../../Context/ApiContext'
import "./SinglePage.css";

const SinglePage = ({
    cocktailData,
    ordinaryDrinksData
}) => {
    const{modalInfo,selectedFilter}=React.useContext(ApiContexts);
  return (
    <div>
      <h2>{selectedFilter} <span className='items-length'>({ordinaryDrinksData.length} items)</span></h2>
        {
           ordinaryDrinksData ? (ordinaryDrinksData.map((ele,index)=>{
            
                return(
                    <div >
                      
                    <li className='item-list'  key={index} onClick={()=>{modalInfo(index)}}><span><img className='item-img' src={ele.strDrinkThumb+'/preview'}/></span>
                    <span className="drink-name">{ele.strDrink}</span></li>
                    
                    </div>
                )
            })
           ):""
        }
    </div>
  )
}

export default SinglePage

// {ele.strDrinkThumb}