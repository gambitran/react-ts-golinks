import React from 'react'
import { Navbar }  from '../Navbar'


interface ChildrenProp {
    children: React.ReactNode;
}

export const Layout: React.FC<ChildrenProp> = ({children}) => {

    return (
        <>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </>
    )
}
