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
    margin-top: 2vh;
    margin-left: 6vh;

    .dropbtn {
        img {
        width: 1.6vh;
        height: 1.6vh;
        margin-left: 1vh;  
        }
        width: 17vh;
        color: gray;
        padding: 12px 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        text-align: center;
    }
    
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        cursor: pointer;
    }
    
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-align: center;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #f9f9f9;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .dropdown:hover .dropbtn {
        color: #ff8787;
    }
`;