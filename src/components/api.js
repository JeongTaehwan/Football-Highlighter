import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setInfo(true);
                setInfo(null);
                const getInfo = await axios.get('https://www.scorebat.com/video-api/v3/');

                fetchInfo(getInfo.data);
            } catch (e) {
                setError(e);
            }
            setInfo(null);
        }
        fetchInfo();
    }, []);

    if (!info) return null;
    if (error) return <div>오류발생!</div>;

    return (
        <div>
            <ul>
                {info.map(info => (
                    <li key={info.title}>
                        {info.title} ({info.competition})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api;

// https://geek-jokes.sameerkumar.website/api?format=json: api 주소
// https://www.scorebat.com/video-api/v3/ : api 주소 2