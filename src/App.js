import React from 'react';
import './App.css';
import Filter from './Component/Filter/Filter';
import Header from './Component/Header/Header';
import {ApiContexts} from './Context/ApiContext';
import axios from 'axios';
import Cocktail from './Component/Cocktail/Cocktail';
import Search from './Component/Search/Search';

function App() {
  const{filterCategoryItem,setFilterCategoryItems}=React.useContext(ApiContexts);

  const FilterApi=async()=>{

      await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then(response=> setFilterCategoryItems(response.data.drinks))
        
        
        // console.log(data)
        // console.log(response.data.drinks)
      
      // setFilterItems(data.drinks)
      // console.log(result)

      // console.log(filterItem)
  }

  React.useEffect(()=>{
      FilterApi();
  },[])
  return (
    <div className="App">
      <Header/>
      
      <div className='container'>
        <div className='filter-div'>
        
        {
        filterCategoryItem ? ( <><Filter/></>):""
      }
        </div>
       
      
     <div className='cocktail-div'>
     <Search/>
     <Cocktail/>
     </div>
     

      </div>
      {/* {
        filterCategoryItem ? ( <><Filter/></>):""
      }
     
     <Cocktail/> */}
     
    </div>
  );
}

export default App;
