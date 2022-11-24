import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
import LoginStyle from './style'

export default function LoginPage() {
    const { authenticated, login } = useContext(AuthContext);
    const [nip, setNip] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log({ nip, password });

        login(nip, password); //integração com meu contexto / api
        window.location.reload();
    }
    return (
        <>
            <LoginStyle>
                <body className="container">
                    <form className="local" onSubmit={handleSubmit}>
                        <h1 className="title">SisHoras</h1>
                        <input type="text" id='nip' name='nip' value={nip} onChange={(e) => setNip(e.target.value)} placeholder='Preencha com seu NIP' />
                        <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Preencha com sua Senha' />
                        <button type='submit'>Entrar</button>
                    </form>
                </body>
            </LoginStyle>
        </>
    )
}
