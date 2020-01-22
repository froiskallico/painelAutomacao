import React, { useState } from 'react';

import api from '../../services/api';

import { login, isAuthenticated, logout } from "../../services/auth";
import { toast } from 'react-toastify';

import authTimeout from '../../services/authTimeout';

export default function Login({ history }) {
    const keys = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['X', '0', '<']];

    const [password, setPassword] = useState('');

    if (isAuthenticated()) {
        logout();
        toast.error("Você saiu!");
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!password) {
            toast.error("Digite uma senha");
        } else {
            toast.info("Autenticando... Por favor aguarde")

            try {
                const response = await api.post('/login', { password });

                toast.dismiss();

                if (response.data.username !== undefined) {
                    login(response.data.username);
                    history.push("/Main");

                    authTimeout(() => {
                      history.push('/');
                      logout();
                    }, 10);

                } else {
                    throw Error("Erro. Usuario nao encontrado");
                }
            } catch (err) {
                history.push("/LoginError");
            }
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
