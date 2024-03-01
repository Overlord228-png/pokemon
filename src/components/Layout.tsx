import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import "scss/_layout.scss"
import Footer from './Footer'

const Layout:React.FC = () => {
    return (
        <>
            <header className='header' >
                <Header />
            </header>
            
            <main className='main'>
                <Outlet/>
            </main>
            
            <footer className='footer' >
                <Footer />
            </footer>
        </>
    )
}

export default Layout