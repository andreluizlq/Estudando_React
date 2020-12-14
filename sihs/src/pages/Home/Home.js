import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import HomeCard from '../../components/HomeCard/HomeCard';
import peso from './images/peso.png';
import folha from './images/folha.png';
import estrela from './images/estrela.png';
import './Home.css'

const PagesHome = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <div className ="home_cards">
                <HomeCard
                    image={peso}
                />
                <HomeCard
                    image={folha}
                />
                <HomeCard
                    image={estrela}
                />
            </div>
        </>
    );
}

export default PagesHome;