import React from 'react';
import { container_spinner, sk_chase, sk_chase_dot } from './Loading/Loading.module.css';

const Loading = () => {
    return (
        <div className={ container_spinner }>
            <div className={ sk_chase }>
                <div className={ sk_chase_dot }></div>
                <div className={ sk_chase_dot }></div>
                <div className={ sk_chase_dot }></div>
                <div className={ sk_chase_dot }></div>
                <div className={ sk_chase_dot }></div>
                <div className={ sk_chase_dot }></div>
            </div>
        </div>
    );
};

export default Loading;
