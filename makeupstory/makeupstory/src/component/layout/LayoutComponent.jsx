import React from 'react';
import TopArea from './TopArea';
import MainArea from './MainArea';
import FooterArea from './FooterArea';

function LayoutComponent(props) {
    return (
        <>
            <TopArea />
            <MainArea />
            <FooterArea />
        </>
    );
}

export default LayoutComponent;

