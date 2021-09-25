import React from 'react';
import * as S from './style.js';
import * as I from '../components/Asset/index';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <S.Header>
                <I.Logo />
                <nav>
                    <ul>
                        <Link to="/"><li>홈으로</li></Link>
                        <Link to="/highlight"><li>하이라이트 영상</li></Link>
                    </ul>
                </nav>
            </S.Header>
            <S.Text>
                <div className="wrapper">
                    <p className="MainText text">Football Highlighter</p>
                    <p className="SubText text">다양한 하이라이트를 한 번에</p>
                </div>
            </S.Text>
        </>
    )
}

export default Home;