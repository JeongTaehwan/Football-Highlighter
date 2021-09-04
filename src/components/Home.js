import React from 'react';
import * as S from './style.js';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <S.Header>
                <img src={logo} alt="logo" className="logo" />
                <nav>
                    <ul>
                        <Link to="/home"><li>홈으로</li></Link>
                        <Link to="/highlight"><li>하이라이트 영상</li></Link>
                    </ul>
                </nav>
            </S.Header>
            <S.Content>
                <div>
                    <h1 className="MainText">Football Highlighter</h1>
                    <p className="SubText">다양한 하이라이트를 한 번에</p>
                </div>
            </S.Content>
        </>
    )
}

export default Home;