import Layout from './components/Layout';
import About from './pages/About';
import CardsPokemonInfo from './pages/CardsPokemonInfo';
import Main from './pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='About' element={<About/>}/>
                <Route path='CardsPokemonInfo' element={<CardsPokemonInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
