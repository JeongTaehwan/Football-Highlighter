import styled from 'styled-components';

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
        margin-left: 20vh;

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
    margin-top: 38vh;

    font-weight: bold;
    font-size: 54px;
    color: #495057;
`;

export const ApiKit = styled.div`
    .image {
        width: 400px;
        height: 250px;
    }

    .wrapper {
        display: inline-block;
        margin-left: 2vh;

    }

    .title {
        font-size: 2vh;
        font-weight: bold;
        color: #495057;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 31vh;

    .MainText {
        font-size: 5vh;
    }

    .SubText {
        font-size: 3vh;
    }
`;