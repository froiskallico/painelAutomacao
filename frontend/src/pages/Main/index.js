import React from 'react';

//import api from '../../services/api';

import './styles.css';

import powerIcon from '../../assets/icons/powerIcon.png';
import lightIcon from '../../assets/icons/lightIcon.png';
import compressorIcon from '../../assets/icons/compressorIcon.png';

export default function Login({ history }) {
    return (
        <>
            <div id="main">
                <div className="button" id="light">
                    <img src={lightIcon} alt=''></img>
                    <p>ILUMINAÇÃO</p>
                </div>

                <div className="button" id="power">
                    <img src={powerIcon} alt=''></img>
                    <p>TOMADAS</p>
                </div>

                <div className="button" id="compressor">
                    <img src={compressorIcon} alt=''></img>
                    <p>COMPRESSOR</p>
                </div>
            </div>
        </>
    )
}