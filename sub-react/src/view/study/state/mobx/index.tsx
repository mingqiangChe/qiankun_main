import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import './index.less';
import {Button} from 'antd';
import 'antd/dist/reset.css';

const Profile: React.FC = observer(() => {
    const {studyStore} = useStores();

    const changeName = () => {
        studyStore.changeName();
        console.log(studyStore.userName);
    };

    return (
        <div className='study-state'>
            <h1>mobx追踪修改数据</h1>
            <h1>{studyStore.userName}</h1>
            <img
                className='avatar'
                style={{
                    width: 90,
                    height: 90
                }}
                src={studyStore.imageUrl}
                alt={'Photo of ' + studyStore.userName}
            />
            <Button type='primary' onClick={changeName}>
                点击修改
            </Button>
        </div>
    );
});

export default Profile;
