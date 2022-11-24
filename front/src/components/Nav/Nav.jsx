import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import Logo from '../Logo/Logo'
import NavStyle from './NavStyle'
import { ImHome, ImNewspaper, ImSwitch, ImUser } from "react-icons/im";

export default function Nav() {
    const [user, setUser] = useState(null);
    const recoveredUser = localStorage.getItem('user');
    let MinhaHorasDeVooProps = {}
    useEffect(() => {
        async function fetchAPI() {
            if (recoveredUser != null) {
                setUser(JSON.parse(recoveredUser));
            }
        }
        fetchAPI()
    }, [recoveredUser]);
    const homeProps = {
        icon: <ImHome />,
        title: 'Início',
        subtitle: 'Bem vindo ao SisHoras'
    }
    const FrvProps = {
        icon: <ImNewspaper />,
        title: 'FRV',
        subtitle: 'Cadastro e Consulta de FRV'
    }
    if (user) {
        MinhaHorasDeVooProps = {
            icon: <ImUser />,
            title: `${user.posto}-${user.especialidade} ${user.nome.toUpperCase()}`,
            subtitle: 'Minhas Horas de Voo e FRVs'
        }
    }
    const { authenticated, logout, clicked, setClicked } = useContext(AuthContext);
    const [sideBar, setSideBar] = useState(false);
    const openSideBar = () => {
        setSideBar(true)
    }
    const closeSideBar = () => {
        setSideBar(false)
    }
    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <NavStyle>
                <div className="container">
                    <div className="topicos">
                        <div onClick={() => setClicked(homeProps)} ><ImHome className='icone' />Início</div>
                        <div onClick={() => setClicked(FrvProps)}><ImNewspaper className='icone' />FRV</div>
                        {<div onClick={() => setClicked(MinhaHorasDeVooProps)}><ImUser className='icone' />Meus Dados</div>}
                        {/* <div onClick={() => setClicked(TripulanteProps)}><ImUser className='icone' />Tripulantes</div> */}
                        <button className='button' onClick={handleLogout}><ImSwitch />Logout</button>
                    </div>
                </div>
            </NavStyle>
        </>
    )
}
