import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
`;


export const NaviUl = styled.ul`
    display: flex;
    list-style-type: none;
    text-decoration:none;
`;

export const NaviLi = styled.li`
    margin-left: 10vh;
    font-size: 1.5vh;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #ff8787; 
        transition: 0.2s;
    }
`;

const TextKeyframes = keyframes`
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
`;

export const TextWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 27vh;
    animation: ${TextKeyframes};
    animation-duration: 2s;
`;

export const MainText = styled.p`
    font-size: 5vh;
`;

export const SubText = styled.p`
    font-size: 3vh;
    margin-left: 7%;
    margin-right: 7%;
`;