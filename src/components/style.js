import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;

    ul {
        list-style-type: none;
        
    }

    li {
        font-size: 18px;
        font-weight: bold;
        color: #495057;
        display: inline-block;
        margin-left: 10vh;

        &:hover {
            color: #ff8787; 
            transition: 0.2s;
        }   
    }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42vh;

    font-weight: bold;
    font-size: 54px;
    color: #495057;
`;

export const ApiKit = styled.div`
    .image {
        width: 400px;
        height: 250px;
    }

    .api_li {
        display: inline-block;
        margin-left: 2vh;
        list-style: none;
    }

    .title {
        font-size: 2vh;
        font-weight: bold;
        color: #495057;
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

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28vh;

    .MainText {
        font-size: 5vh;
    }

    .SubText {
        font-size: 3vh;
        margin-left: 8%;
        margin-right: 8%;
    }

    .text {
        animation: ${TextKeyframes};
        animation-duration: 2s;
    }
`;

export const Choose = styled.div`

`;