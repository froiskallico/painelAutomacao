import React from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

import powerIcon from '../../assets/icons/powerIcon.png';
import lightIcon from '../../assets/icons/lightIcon.png';
import compressorIcon from '../../assets/icons/compressorIcon.png';

export default function Main({ history }) {
    async function toggle(id) {
        var response = await api.put('/circuits', {
            params: { id }
        });

        var responseState = response.data[0].STATE;

        var estado = document.getElementById(id).classList.toggle("active", responseState === 1 ? true : false) ? 'Ligado' : 'Desligado';

        toast(`Circuito ${id} ${estado}`, { autoClose: 1500, className: 'dark-toast' })
    };    

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

                <div className="button" id="18" onClick={() => {toggle("18")}}>
                    <img src={compressorIcon} alt=''></img>
                    <p>COMPRESSOR</p>
                </div>

                
            </div>
        </>
    )
}