import React from 'react';
import { Select, FilterTitle, Image } from './componentstyles/ActionStyles';
import arrowDown from '../assets/icon-arrow-down.svg';

const FilterStatus = props => {
  return (
    <form>
      <button style={{ all: 'unset' }} onClick={e => props.handleSelectMenu(e)}>
        <FilterTitle className='filter'>
          {props.smallDevice ? 'Filter' : 'Filter op status'}
          <Image
            src={arrowDown}
            alt='arrow down'
            style={{ top: 0, left: 5 }}
            id='arrow'
          />
        </FilterTitle>
      </button>
      <Select name='status' id='status'>
        <label className='container'>
          Betaald
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='container'>
          In Afwachting
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='container'>
          Concept
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
      </Select>
    </form>
  );
};

export default FilterStatus;
