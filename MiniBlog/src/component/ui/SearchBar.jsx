import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    padding: 1.5rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(49, 172, 76, 0.1);
    margin-bottom: 10px;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 1rem;
    
    &:focus {
        outline: none;
        border-color: #1DB954;
    }
`;

function SearchBar({ searchTerm, onSearchChange, placeholder="검색어를 입력해주세요."}){
    return(
        <SearchContainer>
            <SearchInput
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}/>
        </SearchContainer>
    );
}

export default SearchBar;