import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Dropdown = ({
    currencies,
    setCurrency,
    currency,
    favorites,
    handleFavorite,
    title=''
}) => {

    const isFavorite = curr => favorites.includes(curr);

  return (
    <div>
        
        <label htmlFor={title}>{title}</label>
        <div className='mt-1 relative'>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                {favorites.map((curr) => {
                      return(
                        <option className='bg-gray-200' value={curr} key={curr}>{curr}</option>
                    );
                })}
                <hr />
                {currencies.filter(c=>!favorites.includes(c)) 
                .map((curr)=>{
                    return(
                        <option value={curr} key={curr}>{curr}</option>
                    );
                })}
            </select>
            <button onClick={()=>handleFavorite(currency)} className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
                {isFavorite(currency)?<FaStar />: <CiStar />}
                
            </button>
        </div>
    </div>
  )
}

export default Dropdown;