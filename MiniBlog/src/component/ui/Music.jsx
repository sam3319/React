import React, { useEffect, useState } from "react";
import { PlayFill, PauseFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import audioFile from '../../audio/audio.mp3';

const AudioBtn = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    color: white;
`;

function Music() {
    const [audio] = useState(() => {
        const newAudio = new Audio(audioFile);
        newAudio.volume = 0.3;
        return newAudio;
    });
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => { setIsPlaying(!isPlaying); }

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    }, [audio, isPlaying]);

    return (
        <AudioBtn onClick={toggle}>
            {isPlaying ?  <PauseFill size={20} /> : <PlayFill size={20}></PlayFill>}
        </AudioBtn>
    )
}

export default Music;