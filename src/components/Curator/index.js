import React from 'react';
import './style.scss';
import curatorPhoto from '../../images/alana-ragusa.jpeg';

function CuratorItem() {

    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto da curadora Alana Ragusa" />
            </div>
            <div className="curator__details">
                <h3>Alana Ragusa</h3>
                <h6>Curadoria</h6>
                <p>Desenvolvedora web estudando ReactJS na React Dev Week da E.B.A.C. Escola Britânica de Artes Criativas e Tecnologia.</p>
            </div>
        </div>    
    )

}

export default CuratorItem;