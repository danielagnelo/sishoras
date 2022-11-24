import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import { api, createSession } from '../server/api';
import api from '../server/api';
import { tokenUser } from '../server/api';
import { ImHome } from "react-icons/im";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const defaultProps = {
        icon: <ImHome />,
        title: 'Início',
        subtitle: 'Bem vindo ao SisHoras'
    }
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState();
    const [clicked, setClicked] = useState(defaultProps);

    useEffect(() => {
        api.get("/tokens").then((response) => setUserList(response.data));
        const recoveredUser = localStorage.getItem('user');
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (nip, password, login) => {
        let loggedUser = {
            id: "1",
            nip,
            password,
        };

        userList.map(user => {
            if ((user.nip === nip && user.senha === password) || (user.login == nip && user.senha === password)) {
                loggedUser = user
                localStorage.setItem("user", JSON.stringify(loggedUser));
                setUser(loggedUser);
                navigate("/");
                /* alert('Logado com sucesso') */
            }
        })
        if (loggedUser.om == null) {
            alert('LOGIN OU SENHA INCORRETOS \n              Tente Novamente')
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user')
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{
            authenticated: !!user, user, loading, login, logout, clicked, setClicked
        }}>
            {children}
        </AuthContext.Provider>
    )
}
