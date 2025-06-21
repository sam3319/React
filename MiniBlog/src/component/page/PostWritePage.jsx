import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import EditorCommon from "../ui/EditorCommon";

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
        margin-bottom: 16px;
    }
`;

const Label = styled.p`
    font-size: 16px;
    font-weight: 500;
    // margin-bottom: 0 !important;
`;

function PostWritePage(props){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    return(
        <Wrapper>
            <Container>
                <Label>제목</Label>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <Label>내용</Label>
                <EditorCommon/>

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;