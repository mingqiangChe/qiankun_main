import React from 'react';
import './index.less';
// interface data {
//     name: string;
//     des: string;
//     img: string;
// }
type son = {
    name: string;
    des: string;
    img: string;
};
type data = {
    message: son;
};
export default function studyProps(props: data) {
    const {name, des, img} = props.message;
    return (
        <div className='propson'>
            <h1>{name}</h1>
            <h2>{des}</h2>
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
