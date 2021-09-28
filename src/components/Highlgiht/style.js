import styled from 'styled-components';

export const ApiWrapper = styled.div`

`;

export const ApiUl = styled.ul`

`;

export const ApiLi = styled.li`
    display: inline-block;
    margin-left: 4vh;
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