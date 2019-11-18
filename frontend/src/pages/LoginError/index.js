import React from 'react';

export default function LoginError({ history }) {
    function voltar() {
        history.push('/');
    }

    return (
    <>
        <p>Erro</p>
        <p>Usuário não encontrado</p>
        <button id="back" onClick={voltar}>Voltar</button>
    </>
    )
}
