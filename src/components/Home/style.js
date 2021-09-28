import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
`;

export const NaviWrapper = styled.nav`
    
`;

export const NaviUl = styled.ul`
    display: flex;
    list-style: none;
`;

export const NaviLi = styled.li`
    margin-left: 10vh;
    font-size: 1.5vh;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #ff8787; 
        transition: 0.2s;
    }
`;