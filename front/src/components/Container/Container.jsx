import React from 'react'
import ContainerSyle from './ContainerStyle'
export default function Container({ children }) {
    return (
        <>
            <ContainerSyle>
                {children}
            </ContainerSyle>
        </>
    )
}
