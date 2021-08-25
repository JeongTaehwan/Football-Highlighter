import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setInfo(null);
                setError(null);
                setLoading(true);
                // 초깃값 설정을 해주고!
                const getInfo = await axios.get('https://www.scorebat.com/video-api/v3/');
                // api 불러오고!
                fetchInfo(getInfo.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        }
        fetchInfo();
    }, []);

    if (loading) return <div>로딩중입니다, 잠시만 기다려주세요...</div>;
    if (error) return <div>오류가 발생하였습니다.</div>;
    if (!info) return null;

    return (
        <div>
            <ul>
                {info.response.map(info => (
                    <li key={info.title}>
                        {info.competition}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api;

// https://geek-jokes.sameerkumar.website/api?format=json: api 주소
// https://www.scorebat.com/video-api/v3/ : api 주소 2