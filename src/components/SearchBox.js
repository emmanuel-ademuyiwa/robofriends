import React from 'react'

const SearchBox = ({search}) => {
  return (
    <div>
        <input 
            onChange={search} 
            className='search-box p-2 m-3' 
            type="search" 
            placeholder='search robots ' 
        />
    </div>
  )
}

export default SearchBox;