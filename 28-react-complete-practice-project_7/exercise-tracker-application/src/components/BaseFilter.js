import React from 'react'
import { FilterStatus } from '../helper/Utils';
import classes from './BaseFilter.module.css';

const BaseFilter = (props) => {

    const allClassActive = props.current === FilterStatus.ALL ? classes.active : '';
    const completeClassActive = props.current === FilterStatus.COMPLETE ? classes.active : '';
    const pendingClassActive = props.current === FilterStatus.PENDING ? classes.active : '';
    return (
        <nav className={classes['filter-nav']}>
            <button className={allClassActive} onClick={() => props.onFilter(FilterStatus.ALL)}>VIEW All</button>
            <button className={completeClassActive} onClick={() => props.onFilter(FilterStatus.COMPLETE)}>Complete</button>
            <button className={pendingClassActive} onClick={() => props.onFilter(FilterStatus.PENDING)}>Pending</button>
        </nav>
    )
}

export default BaseFilter
