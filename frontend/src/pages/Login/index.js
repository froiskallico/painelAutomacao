import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    
    const keys = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['X', '0', '<']];

    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/login', { password });

        const { id } = response.data;

        console.log(id);

        if (!id) {
            history.push('/LoginError');
        } else {
            localStorage.setItem('user' , id);
            history.push('/main');
        }
    };

    return (
        <>
            <p>LOGIN</p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="next" type="submit"></button>
            </form>

            <div id="keypad">
                {keys.map(keyLine => (
                    <div className="key-line" key={keyLine}>
                        {keyLine.map(key => (
                            <button className="key" key={key}>{key}</button>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}