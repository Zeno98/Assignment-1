import React from 'react'
// import axios from 'axios';

export const ApiContexts=React.createContext();

const ApiContext = ({children}) => {

    const[filterCategoryItem,setFilterCategoryItems]=React.useState();
    const[selectedFilter,setSelectedFilter]=React.useState("");
    const[searchData,setSearchData]=React.useState();
    const[modalData,setModalData]=React.useState();

    
     function filterSelect(selectedItem){
      setSelectedFilter(selectedItem);
      // console.log(selectedFilter);
    }

    let searchItem=(searchedItem)=>{
      setSearchData(searchedItem);
      console.log(searchedItem)
    }

    let modalInfo=(modals)=>{
      setModalData(modals)
      console.log(modalData)
    }

    
  return (
      <ApiContexts.Provider value={{filterCategoryItem,setFilterCategoryItems,filterSelect,selectedFilter,searchData,setSearchData,searchItem,modalInfo}}>
        {children}
      </ApiContexts.Provider>

  )
}

export default ApiContext;




// const FilterApi=async()=>{

    //     await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then((response)=>{
    //       setFilterItems(response.data)
          
    //       // console.log(response.data.drinks)
    //     })
    //     // setFilterItems(data.drinks)
    //     // console.log(result)

    //     console.log(filterItem)
    // }

    // React.useEffect(()=>{
    //     FilterApi();
    // },[])