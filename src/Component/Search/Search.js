import React from 'react'
import axios from 'axios'
import { ApiContexts } from '../../Context/ApiContext'
import SinglePage from '../SinglePage/SinglePage'
import DefaultPage from '../DefaultPage/DefaultPage'
import "./Search.css"

const Search = () => {

    const url="www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

    const{searchData,setSearchData,searchItem}=React.useContext(ApiContexts);

    const[searchList,setSearchList]=React.useState();

    const searchApi=async()=>{
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchData}`).then((response)=>{setSearchList(response.data.drinks)})
    }
    React.useEffect(()=>{
        searchApi()
    },[searchData])
  return (
    
    <div>
        <input className='search-box' placeholder='search your favourite items' type="text" onChange={(e)=>{
            searchItem(e.target.value)
        }} />

        {
            // searchList ? (<SinglePage cocktailData={searchList}/>):(<DefaultPage/>)
        }
    </div>
  )
}

export default Search