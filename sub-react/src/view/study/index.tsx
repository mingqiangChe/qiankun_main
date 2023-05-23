import React from 'react';
//state
import UseState from '@/view/study/state/usestate';
import Usemobx from '@/view/study/state/mobx';
//props
import Propsc from '@/view/study/props/father';
import './index.less';

export default function Profile() {
    return (
        <div className='max'>
            <div className='state'>
                <h1>state</h1>
                <UseState />
                <Usemobx />
            </div>
            <div className='props'>
                <h1>props</h1>
                <Propsc />
            </div>
        </div>
    );
}
