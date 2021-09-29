import styled from 'styled-components';

export const ApiWrapper = styled.div`

`;

export const ApiUl = styled.ul`

`;

export const ApiLi = styled.li`
    display: inline-block;
    margin-left: 4.2vh;
    list-style: none;

    .title {
        font-size: 2vh;
        font-weight: bold;
        color: #495057;
        margin-bottom: 1vh;
    }

    .image {
        width: 40vh;
        height: 25vh;
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

export const DropDownWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 8vh;
`;

export const DropButton = styled.button`
    color: black;
    padding: 1.6vh;
    font-size: 1.6vh;
    border: none;
`;

export const DropDownContents = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    a {
        color: black;
        padding: 1.2vh 1.6vh;
        text-decoration: none;
        display: block;
    }
`;
