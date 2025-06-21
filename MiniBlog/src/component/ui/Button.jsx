import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #1DB954;
    transition: all 0.2s ease;
    color: white;
    
    &:hover{
        transform: translateY(-2px);
    }
`;

function Button(props) {
    const { title, onClick } = props;

    return (<StyledButton onClick={onClick}>{title || "button"}</StyledButton>);
}

export default Button;