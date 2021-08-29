import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [loading, setLoading] = useState(null);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setInfo(false);
                setError(false);
                console.log('info와 error값 false');
                setLoading(true);
                console.log('loading 값 true');
                // 초깃값 설정

                const getInfo = axios.get('https://www.scorebat.com/video-api/v3/'); // api 호출
                fetchInfo(getInfo.data); // data를 받아옴
                console.log('api 받아옴');
                setInfo(true);
            } catch (e) {
                setInfo(false);
                setError(e);
                console.log('에러발생');
            }
        }
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