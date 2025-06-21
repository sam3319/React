import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";
import SearchBar from "../ui/SearchBar";
import Clock from "../ui/Clock";
import Music from "../ui/Music";

const Wrapper = styled.div`
    padding: 16px;
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
        // margin-bottom: 16px;
    }
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
`;

const StatsCard = styled.div`
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    background: #1DB954;
    box-shadow: 0 2px 8px rgba(49, 172, 76, 0.1);
    transition: transform 0.3s ease;
    color: white;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const StatNumber = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
`;

const Label = styled.p`
    font-size: 16px;
    font-weight: 500;
    
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 8px;
`;

function MainPage(props) {
    const { } = props;

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = data.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Wrapper>

            <Container>
                <StatsContainer>
                    <StatsCard>
                        <StatNumber>{data.length}</StatNumber>
                        <StatLabel>포스팅 수</StatLabel>
                    </StatsCard>
                    <StatsCard>
                        <StatNumber><Clock></Clock></StatNumber>
                        <StatLabel>현재 시간</StatLabel>
                    </StatsCard>
                    <StatsCard>
                        <StatNumber><Music></Music></StatNumber>
                        <StatLabel>배경 음악</StatLabel>
                    </StatsCard>
                </StatsContainer>
                <Label>게시글 검색</Label>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="검색어를 입력하세요." />
                <ListContainer>
                    <Label>게시글 목록</Label>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("/post-write");
                        }}
                    />
                </ListContainer>
                <PostList
                    posts={filteredPosts}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;