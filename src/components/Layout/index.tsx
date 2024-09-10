import React from 'react'
import { Header }  from '../Header'
import { Footer } from '../Footer'

interface ChildrenProp {
    children: React.ReactNode;
}

export const Layout: React.FC<ChildrenProp> = ({children}) => {

    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
