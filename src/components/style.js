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
        color: black;
        display: inline-block;
        margin-left: 20vh;

        &:hover {
            color: red; 
            transition: 0.2s;
        }
    }
`;

export const ApiKit = styled.div`
    .image {
        width: 400px;
        height: 250px;
    }
`;