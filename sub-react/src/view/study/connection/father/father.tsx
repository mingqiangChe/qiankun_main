import React from 'react';
import './index.less';
import Son from '@/view/study/connection/father/index';
export default function FatheComponent() {
    const message = 'Hello, child!';
    return (
        <div>
            <Son message={message}></Son>
        </div>
    );
}
