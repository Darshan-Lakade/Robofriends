import React from 'react';
import './SearchList.css';

const SearchList = ({onSearchChange}) => {

    return (
        <div className="searchList">
            <input onChange={onSearchChange} className="search-Text" type="text" placeholder="Search here ..." />
        </div>
    );
}

export default SearchList;
