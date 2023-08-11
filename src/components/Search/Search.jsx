import React, { useState, useRef } from 'react';
// import debounce from 'lodash.debounce';
import { Input, StyledIcon, InputWrap } from './Search.styled';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/search/searchSlice';
import ClearButton from '../ClearButton/ClearButton';

// const DEBOUNCE_DELAY = 150;

function Search() {
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    setSearch('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  // const updateSearchValue = useCallback(
  // eslint-disable-next-line react-hooks/exhaustive-deps

  //   debounce(value => {
  //     dispatch(setSearchValue(value));
  //   }),
  //   []
  // );

  const handleChange = e => {
    const value = e.target.value.trim();
    setSearch(value);
    // updateSearchValue(value);
  };

  return (
    <InputWrap>
      <Input
        ref={inputRef}
        onChange={handleChange}
        value={search}
        name="search"
        placeholder="Search by keywords"
      />
      <StyledIcon color="#7B61FF" />
      {search && <ClearButton onClick={() => onClickClear()} />}
    </InputWrap>
  );
}

export default Search;
