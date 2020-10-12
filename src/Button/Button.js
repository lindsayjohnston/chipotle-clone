import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    const classNames=`${styles.Button} ${props.style}`;

    return (<button className={classNames}
            onClick={props.clicked}
            >{props.content}</button>);
};

export default button;