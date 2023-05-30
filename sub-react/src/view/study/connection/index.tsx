import React from 'react';
import './index.less';
import Soon from '@/view/study/connection/son';
export default function connect() {
    return (
        <div className='box'>
            <div className='props'>
                <h1>子向父传值</h1>
                <Soon></Soon>
            </div>
        </div>
    );
}
