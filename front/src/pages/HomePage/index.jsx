import React, { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import { AuthContext } from '../../contexts/auth';
import { ImHome, ImNewspaper, ImSwitch, ImUser } from "react-icons/im";

import HomeStyle from './style'
import Logo from '../../components/Logo/Logo';
import Frv from '../../components/Content/FRV/Frv';
import Popup from '../../components/Popup/Popup';
import Inicio from '../../components/Content/Inicio/Inicio';
import Tripulante from '../../components/Content/Tripulante/Tripulante';
import ErroPage from '../404Page/ErroPage';

export default function HomeIndex() {
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
    /* const TripulanteProps = {
        icon: <ImUser />,
        title: 'Tripulantes',
        subtitle: 'Cadastro de Tripulantes: Incluir, Listar, Alterar e Excluir!'
    } */
    const { authenticated, logout, clicked } = useContext(AuthContext)
    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <HomeStyle>
                <Popup />
                <div class="grid-container">
                    <div class="item1"><Header>{clicked}</Header></div>
                    <div class="item6"><Logo /></div>
                    <div class="item2"><Nav /></div>
                    <div class="item3"><Container>
                        {clicked.title === 'FRV' ? <Frv /> :
                            clicked.subtitle === 'Minhas Horas de Voo e FRVs' ? <Tripulante /> :
                                clicked.title === 'Início' ? <Inicio /> :
                                    <ErroPage />
                        }
                    </Container></div>
                    <div class="item5"><Footer /></div>
                </div>
            </HomeStyle>
        </>
    )
}
