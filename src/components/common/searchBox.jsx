import React from 'react';


const SearchBox = (props) => {

    const { value, onChange } = props;

   

    return (
        <input
        type='text'
        name='searchShipments'
        className='form-control my-3 '
        placeholder='Search by id ...'
        value={value}
        onChange={e =>onChange(e.currentTarget.value)}>


        </input>


    );
}

export default SearchBox;