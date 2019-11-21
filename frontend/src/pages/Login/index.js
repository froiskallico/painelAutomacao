import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    
    const keys = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['X', '0', '<']];

    const [password, setPassword] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/login', { password });

        const { id } = response.data;

        if (!id) {
            history.push('/LoginError');
        } else {
            localStorage.setItem('user', id);
            history.push('/Main');
        }
    };

    async function keyPress(value) {
        if (value === '<') {
            setPassword(password.slice(0, -1))
        } else if (value === 'X') {
            setPassword('')
        } else {
            setPassword(password + value);
        }
    };

    return (
        <>
            <h1>LOGIN</h1>

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
                            <button 
                                className="key" 
                                key={key} 
                                type='button'
                                value={key}
                                onClick={() => {keyPress(key)}}
                            >{key}</button>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}