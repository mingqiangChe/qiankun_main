import React, {useRef, useState} from 'react';
import {Input} from 'antd';
import './index.less';

export default function Refs() {
    // const inputRef = useRef(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [state, setState] = useState<string>('iuiuiuiu');
    const handleChange = () => {
        // console.log(inputRef.current.input.value);
        setState(inputRef.current.input.value);
    };

    const img =
        'https://cdn.hk01.com/di/media/images/dw/20230407/721096484371566592496025.jpeg/Yr5uBeTrCd131oGLy4ZR5mU17uL35sb51cGyv9XBsr8?v=w1920';
    return (
        <div className='refsblock'>
            <h1>你最喜欢的是{state}</h1>
            <Input ref={inputRef} placeholder='Basic usage' onChange={handleChange} />
            <img
                className='avatar'
                style={{
                    width: 180,
                    height: 180
                }}
                src={img}
                alt={'Photo of ' + img}
            />
        </div>
    );
}
