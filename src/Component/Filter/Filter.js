import React from 'react';
import {ApiContexts} from "../../Context/ApiContext"
import "../Filter/Filter.css"

const Filter = () => {
  const {filterCategoryItem,selectedFilter,filterSelect}=React.useContext(ApiContexts);
  // console.log(filterSelect)
  // console.log("filter",filterItem)

  // filterItem.map((ele)=>{
  //   console.log(ele.strCategory)
  //   })

  return (
    <div className='filter-sub-div'>

      <h2 className='filter-title'>Filter</h2>
      <select name="" className="filter-select"
      defaultValue="Ordinary Drink"
      onChange={(e)=>{filterSelect(e.target.value)}}
      >
      {
        filterCategoryItem.map((ele,index)=>{
          
          return(
            <option 
            className='option-item'
            value={ele.Category} 
            key={index} 
            
            >{ele.strCategory}
            </option>
          )
            
            
          
          })
        }
      </select>
      {/* {
        filterItem.map((ele)=>{
          return(
            <>
            <li>{ele.strCategory}</li>
            </>
          )
          })
        } */}
      
    </div>
  )
}

export default Filter;