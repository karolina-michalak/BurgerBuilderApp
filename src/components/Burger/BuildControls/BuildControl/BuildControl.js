import React from 'react';
import styles from './BuildControl.module.css'

const BuildControl = props => {
    <div className={styles.BuildControl}>
        <div>{props.label}</div>
        <button>+</button>
        <button>-</button>
    </div>
}

export default BuildControl