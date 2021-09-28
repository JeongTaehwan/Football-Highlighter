import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from '../Highlgiht/style';
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

    if (loading) return <div>로딩중 ⚽️</div>
    if (error) return <div>에러가 발생하였습니다.</div>
    if (!infos) return null;

    return (
        <>
        </>
    );
}

export default Highlight;