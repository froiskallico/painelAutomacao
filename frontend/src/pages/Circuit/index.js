import React, { useState, useEffect } from 'react';
//import { toast } from 'react-toastify';

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

    console.log(circuits);

    return (
        <>
            <ul id="main">
                {
                    circuits.map(circuit => (
                        <li key={circuit.ID} className="miniButton" id={circuit.ID}>
                            <img src={circuit.TYPE === "ILUMINAÇÃO" ? lightIcon : powerIcon} height="30%" alt='' />
                            <p>{circuit.NAME}</p>
                        </li>
                    ))
                }            
            </ul>
        </>
    ) 
}