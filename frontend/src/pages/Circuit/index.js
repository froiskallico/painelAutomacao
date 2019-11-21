import React from 'react';

import './styles.css';

const qs = require('query-string');

export default function Circuit({ history }) {    
    const parsed = qs.parse(history.location.search);
    
    //ToDo: usar useEffect / useState para listar os circuitos correspondentes à query passada no history;

    return (
        <>
            <div id="main">
                  hello              
            </div>
        </>
    ) 
}