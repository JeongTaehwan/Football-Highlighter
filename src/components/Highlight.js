import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style.js';
import * as I from '../components/Asset/index';
import { Link } from 'react-router-dom';

function Api() {
    const [loading, setLoading] = useState(false);
    const [infos, setInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setInfo(null);
                setError(null);
                console.log('info와 error값 false');
                setLoading(true);
                console.log('loading 값 true');
                // 초깃값 설정
                const getInfo = await axios.get('https://www.scorebat.com/video-api/v3/'); // api 호출
                setInfo(getInfo.data); // data를 받아옴
                console.log('api 받아옴');
            } catch (e) {
                setError(e);
            }
            setLoading(false)
        };
        fetchInfo();
    }, []);

    if (loading) return <S.Loading><div>로딩중 ⚽️</div></S.Loading>
    if (error) return <div>에러가 발생하였습니다.</div>
    if (!infos) return null;

    return (
        <>
            <S.Header>
                <I.Logo />
                <nav>
                    <ul>
                        <Link to="/home"><li>홈으로</li></Link>
                        <Link to="/highlight"><li>하이라이트 영상</li></Link>
                    </ul>
                </nav>
            </S.Header>
            <S.Choose>
            </S.Choose>
            <S.ApiKit>
                <div>
                    <ul>
                        {infos.response.map(infos => (
                            <li key={infos.title} class="api_li">
                                <p className="title">{infos.title}</p>  <br />
                                <img src={infos.thumbnail} alt="썸네일" className="image" />
                            </li>
                        ))}
                    </ul>
                </div>
            </S.ApiKit>
        </>
    );
}

export default Api;

// https://www.scorebat.com/video-api/v3/ : api 주소 2