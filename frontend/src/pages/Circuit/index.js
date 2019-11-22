import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

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

    }, []);

    console.log(circuits);

    return (
        <>
            <ul id="main">
                {
                    //Todo: mapear circuits, adicionar li para cada circuit...
                    circuits.map(circuit => (
                        <li key={circuit.ID} className="button" id={circuit.ID}>
                            <p>{circuit.NAME}</p>
                        </li>
                    ))
                }            
            </ul>
        </>
    ) 
}