import React from 'react';
import './index.less';
//子组件
export default function ChildComponent({message}: {message: string}) {
    return <div>父组件传过来值{message}</div>;
}
