import React from 'react'
import HeaderStyle from './HeaderStyle'

export default function Header({ children }) {

    return (
        <HeaderStyle>
            <header >
                <h1>
                    <span>{children.icon}</span>{children.title}
                </h1>
                <p>{children.subtitle}</p>
            </header>
        </HeaderStyle>
    )
}
