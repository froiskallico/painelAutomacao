import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

import powerIcon from '../../assets/icons/powerIcon.png';
import lightIcon from '../../assets/icons/lightIcon.png';

const qs = require('query-string');

export default function Circuit({ history }) {    
    const parsed = qs.parse(history.location.search);
    const [circuits, setCircuits] = useState([]);

    useEffect(() => {
        async function loadCircuits() {
            const response = await api.get('/circuits', {
                params: parsed
            });
            
            setCircuits(response.data);
        }
        
        loadCircuits();

    });

    async function toggle(id) {
        var response = await api.put('/circuits', {
            params: { id }
        })

        var circuitName = response.data[0].NAME;
        var responseState = response.data[0].STATE;

        var state = document.getElementById(id).classList.toggle("active", responseState === 1 ? true : false) ? 'Ligado' : 'Desligado';


        toast(`Circuito ${circuitName} ${state}`, { autoClose: 1500, className: 'dark-toast'})
    };
    return (
        <>
            <ul id="circuits">
                {
                    circuits.map(circuit => (
                        <li key={circuit.ID} className={`miniButton ${circuit.STATE === 1 ? 'active' : ''}`} id={circuit.ID} onClick={() => {toggle(`${circuit.ID}`)}}>
                            <img src={circuit.TYPE === "ILUMINAÇÃO" ? lightIcon : powerIcon} height="30%" alt='' />
                            <p>{circuit.NAME}</p>
                        </li>
                    ))
                }            
            </ul>
        </>
    ) 
}