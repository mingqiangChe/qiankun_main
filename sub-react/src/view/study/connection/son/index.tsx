import React, {useState} from 'react';
import './index.less';
import Son from '@/view/study/connection/son/son';
// 子向父传值
export default function Sonconnect() {
    const [childvalue, setChildValue] = useState('');

    const handleChildValueChange = (value: string) => {
        setChildValue(value);
    };
    return (
        <div className='sonson'>
            <h1>父组件</h1>
            <Son onValueChange={handleChildValueChange}></Son>
            <p>子组件传过来值:{childvalue}</p>
        </div>
    );
}
