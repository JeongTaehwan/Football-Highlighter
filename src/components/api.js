import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    const fetchInfo = async () => {
        try {
            setInfo(null);
            setError(null);
            console.log('info와 error값 false');
            setLoading(true);
            console.log('loading 값 true');
            // 초깃값 설정

            const response = axios.get('https://www.scorebat.com/video-api/v3/'); // api 호출
            setInfo(response.data); // data를 받아옴
            console.log('api 받아옴');
        } catch (e) {
            setError(e);
        }
        setLoading(false)
    }
    fetchInfo();

    useEffect(() => {
        fetchInfo();
    }, []);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생하였습니다.</div>
    if (!info) return null;

    return (
        <div>
            <ul key={info.title}>
                {info.response.map(
                    <li>
                        {info.title} ({info.competition})
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Api;
// https://geek-jokes.sameerkumar.website/api?format=json: api 주소
// https://www.scorebat.com/video-api/v3/ : api 주소 2