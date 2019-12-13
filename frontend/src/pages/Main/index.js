import React from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { logout, getToken } from '../../services/auth';
import '../../services/authTimeout';

import './styles.css';

import powerIcon from '../../assets/icons/powerIcon.png';
import lightIcon from '../../assets/icons/lightIcon.png';
import compressorIcon from '../../assets/icons/compressorIcon.png';
import authTimeout from '../../services/authTimeout';

export default function Main({ history }) {
    const sessionToken = getToken();

    authTimeout(() => {
        logout(sessionToken);
        history.push('/'); 
    }, 90);

    async function toggle(id) {
        var response = await api.put('/circuits', {
            params: { id }
        })

        var circuitName = response.data[0].NAME;
        var responseState = response.data[0].STATE;

        var state = document.getElementById(id).classList.toggle("active", responseState === 1 ? true : false) ? 'Ligado' : 'Desligado';

        toast(
            `Circuito ${circuitName} ${state}`, 
            { 
                autoClose: 1500, 
                className: 'dark-toast' 
            }
        );
    };    

    function navigateTo(FATHER) {
        history.push({
            pathname: '/Circuit',
            search: `TYPE=${FATHER}`
        })
    };

    async function loadCompressorState() {
        var compressor = await api.get('/circuits', {
            params: { 'ID': '18' }
        });

        var compressorState = compressor.data[0].STATE;

        if (compressorState === 1) {
            document.getElementById("18").classList.toggle("active", true)
        }

        
    };

    loadCompressorState();

    return (
        <>
            <div id="main">
                <div className="button" id="ILUMINAÇÃO" onClick={() => {navigateTo('"ILUMINAÇÃO"')}}>
                    <img src={lightIcon} alt=''></img>
                    <p>ILUMINAÇÃO</p>
                </div>

                <div className="button" id="FORÇA" onClick={() => {navigateTo('"FORÇA"')}}>
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