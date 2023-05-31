//子组件
import React, {useState} from 'react';
import './index.less';
import {Input} from 'antd';
export default function Son({onValueChange}: {onValueChange: (value: string) => void}) {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onValueChange(value);
    };
    return (
        <div>
            <h1>子组件说我想传值</h1>
            <Input value={inputValue} onChange={handleChange} />
        </div>
    );
}
