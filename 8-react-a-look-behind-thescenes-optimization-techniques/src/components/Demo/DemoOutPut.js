import React from 'react'
import Paragraph from './Paragraph';

const DemoOutPut = (props) => {
    console.log('DemoOutPut is running');
    return (
        <Paragraph>{props.show ? 'This is new' : ''}</Paragraph>
    )
}

export default React.memo(DemoOutPut);
