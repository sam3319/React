import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    transition: all 0.5ms ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(49, 172, 76, 0.1);
        border: 2px solid #1DB954;
        color: #1DB954;
        font-weight: 500;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
`;

function PostListItem(props){
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    )
}

export default PostListItem;