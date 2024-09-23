import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <Input.Search
    placeholder="Search doctors by name"
    enterButton="Find Doctor" 
    onSearch={handleSearch} 
    className='search-bar'
    allowClear 
  />
  );
};

export default SearchBar;
