import React from 'react';

import './styles.css';

export default function LoginError({ history }) {
    function voltar() {
        history.push('/');
    }

    return (
    <>
        <h1 style={{'margin-top': '120px'}}>Erro</h1>
        <h1 className="error">Usuário não encontrado</h1>
        <button id="back" onClick={voltar}>Voltar</button>
    </>
    )
}
