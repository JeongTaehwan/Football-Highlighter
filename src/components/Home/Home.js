import React from 'react';
import * as S from '../Home/style';
import * as I from '../../Asset/index';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <S.HeaderWrapper>
                <I.Logo />
                <S.NaviUl>
                    <Link to="/">
                        <S.NaviLi>홈으로</S.NaviLi>
                    </Link>
                    <Link to="/highlight">
                        <S.NaviLi>하이라이트 영상</S.NaviLi>
                    </Link>
                </S.NaviUl>
            </S.HeaderWrapper>
            <S.TextWrapper>
                <S.MainText>Football highlighter</S.MainText>
                <S.SubText>다양한 하이라이트를 한 번에</S.SubText>
            </S.TextWrapper>
        </>
    );
}

export default Home;