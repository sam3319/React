import React from "react";
import styled from "styled-components";
import ProfileInfo from "../ui/ProfileInfo";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    transition: all 0.2s ease;
    margin-bottom: 8px;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
    margin: 8px 0 0 0;
`;

function CommentListItem(props){
    const { comment } = props;

    return (
        <Wrapper>
            <ProfileInfo 
            author={comment.author} 
            time="2025.06.18" />
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;
