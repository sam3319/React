import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: ${props => props.styles?.fontSize || '12px'};
    font-weight: ${props => props.styles?.fontWeight || 'normal'};
    font-style: ${props => props.styles?.fontStyle || 'normal'};
    line-height: 20px;
    border: none;
    outline: none;
    resize: vertical;
    border-radius: 8px;
    background-color: #f8f9fa;
    
    &:focus{
        border: 2px solid #1DB954;
        border-radius: 5px;
    }
`;

function TextInput(props){
    const { height, value, onChange, styles } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} styles={styles}/>
}

export default TextInput;