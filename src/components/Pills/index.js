import React from 'react';
import './styles.scss';

const Pills = () => {
    return(
        <div onClick={onClick} className={`pills__container ${selected} ? 'pill__container--active' : ''}`}>

        </div>
    )
}

export default Pills;