import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from '../Home/style';
import * as I from '../../Asset/index';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <S.HeaderWrapper>
                <I.Logo />
                <S.NaviWrapper>
                    <S.NaviUl>
                        <Link path="/">
                            <S.NaviLi>홈으로</S.NaviLi>
                        </Link>
                        <Link path="/highlight">
                            <S.NaviLi>하이라이트 영상</S.NaviLi>
                        </Link>
                    </S.NaviUl>
                </S.NaviWrapper>
            </S.HeaderWrapper>
        </>
    );
}

export default Home;