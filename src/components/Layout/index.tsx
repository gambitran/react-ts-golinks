import React from 'react'
import { Header }  from '../Header'
import { Footer } from '../Footer'
import { Container } from '@mui/material'

interface ChildrenProp {
    children: React.ReactNode;
}

export const Layout: React.FC<ChildrenProp> = ({children}) => {

    return (
        <>
            <Header/>
            <Container>{children}</Container>
            <Footer/>
        </>
    )
}
