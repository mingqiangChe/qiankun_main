import React from 'react';
import Son from './son';
import './index.less';

export default function fater() {
    const data = {
        name: '李知恩',
        des: '演员 dancer',
        img: 'https://n.sinaimg.cn/sinakd20112/363/w1000h963/20230523/532d-d1e3200febb878795bb7ce2dd7bd7b37.jpg'
    };
    return (
        <div className='father'>
            <Son message={data}></Son>
        </div>
    );
}
