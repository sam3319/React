import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockLabel = styled.p`
    font-size: 20px;
`;


function Clock() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <ClockLabel>{clock}</ClockLabel>
    )
}


export default Clock;