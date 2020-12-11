import React from "react";
import styled, { keyframes } from "styled-components";

export const RotateCircle = keyframes`
    0% {
        transform: rotate(0);
    }
    50%,100% {
        transform: rotate(180deg);
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    animation: ${RotateCircle} 2s ease infinite;
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #d3d0d0;
    opacity: 0.7;

    &:nth-child(2) {
        margin: 0 10px;
    }
`;

const Text = styled.div`
    margin-top: 25px;
    font-family: "Titillium Web", sans-serif;
`;

const Loader: () => JSX.Element = () => {
    return (
        <Container>
            <Box>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </Box>
            <Text>Wait a sec..</Text>
        </Container>
    );
};
export default Loader;
