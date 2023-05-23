import React, {useState} from 'react';
import './index.less';
import {Button} from 'antd';
import 'antd/dist/reset.css';

interface User {
    name: string;
    imageUrl: string;
    imageSize: number;
}
export default function Profile() {
    const [userName, setUserName] = useState<string>('iu');
    const changeName = () => {
        if (userName == 'iu') {
            setUserName('是我的iu啦');
        } else {
            setUserName('iu');
        }
    };
    const user: User = {
        name: userName,
        imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34',
        imageSize: 90
    };
    return (
        <div className='study-state'>
            <h1>usestate追踪修改数据</h1>
            <h1>{user.name}</h1>
            <img
                className='avatar'
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <Button type='primary' onClick={changeName}>
                点击修改
            </Button>
        </div>
    );
}
