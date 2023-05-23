import React, {useRef, useState} from 'react';
import {Input} from 'antd';

export default function Refs() {
    // const inputRef = useRef(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [state, setState] = useState<string>('iuiuiuiu');
    const handleChange = () => {
        // console.log(inputRef.current.input.value);
        setState(inputRef.current.input.value);
    };
    return (
        <div>
            <h1>你最喜欢的是{state}</h1>
            <Input ref={inputRef} placeholder='Basic usage' onChange={handleChange} />
        </div>
    );
}
