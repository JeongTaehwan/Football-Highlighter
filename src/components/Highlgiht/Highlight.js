import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from '../Highlgiht/style';
import * as HS from '../Home/style';
import * as I from '../../Asset/index';
import { Link } from 'react-router-dom';

function Highlight() {
    const [loading, setLoading] = useState(false);
    const [infos, setInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setInfo(null);
                setError(null);
                setLoading(true);
                // 초깃값 설정
                const getInfo = await axios.get('https://www.scorebat.com/video-api/v3/'); // api 호출
                setInfo(getInfo.data); // data를 받아옴
            } catch (e) {
                setError(e);
            }
            setLoading(false)
        };
        fetchInfo();
    }, []);

    if (loading) return <S.Loading>로딩중 ⚽️</S.Loading>
    if (error) return <div>에러가 발생하였습니다.</div>
    if (!infos) return null;

    return (
        <>
            <HS.HeaderWrapper>
                <I.Logo />
                <HS.NaviUl>
                    <Link to="/">
                        <HS.NaviLi>홈으로</HS.NaviLi>
                    </Link>
                    <Link to="/highlight">
                        <HS.NaviLi>하이라이트 영상</HS.NaviLi>
                    </Link>
                </HS.NaviUl>
            </HS.HeaderWrapper>
            <S.ApiWrapper>
                <S.ApiUl>
                    {infos.response.map(infos => (
                        <S.ApiLi key={infos.title}>
                            <p className="title">{infos.title}</p>  <br />
                            <img src={infos.thumbnail} alt="썸네일" className="image" />
                        </S.ApiLi>
                    ))}
                </S.ApiUl>
            </S.ApiWrapper>
        </>
    );
}

export default Highlight;