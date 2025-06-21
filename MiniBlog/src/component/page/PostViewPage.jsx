import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";
import ProfileInfo from "../ui/ProfileInfo";
import { HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';

const Wrapper = styled.div`
    paddin: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    :not(:last-child){
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleContainer = styled.div`
    border-bottom: 1px solid gray;
`

const TitleText = styled.p`
    font-size: 30px;
    font-weight: 500;
`;

const LikeButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    margin-left: auto;
    font-size: 15pt;
`;

const ContentText = styled.p`
    font-size: 15px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const ModificationDeletionButton = styled.button`
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 5px 15px;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.2s ease;
    margin-right: 3px;
    &:hover{
        transform: translateY(-2px);
    }

`

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(likeCount + (liked ? -1 : 1));
    }

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleContainer>
                        <TitleText>{post.title}</TitleText>
                        <ProfileInfo
                            author={post.author}
                            time="2025.06.18">
                            <LikeButton onClick={handleLike}>
                                {liked ? <HandThumbsUpFill color="#1DB954" /> : <HandThumbsUp />} {likeCount}
                            </LikeButton>
                        </ProfileInfo>
                    </TitleContainer>
                    <ContentText>{post.content}</ContentText>
                    <ModificationDeletionButton
                        style={{ background: "#1DB954" }}
                        onClick={() => {
                            navigate("/post-write");
                        }}>수정</ModificationDeletionButton>
                    <ModificationDeletionButton style={{ background: "#E25555" }}>삭제</ModificationDeletionButton>
                </PostContainer>
                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;