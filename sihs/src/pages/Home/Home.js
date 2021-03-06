import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import HomeCard from '../../components/HomeCard/HomeCard';
import Footer from '../../components/Footer/Footer';
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
                    titulo={"Dicas de esportes"}
                    texto={"A maneira mais rápida para você conseguir chegar aos seus objetivos e melhorar o seu treino"}
                />
                <HomeCard
                    image={folha}
                    titulo={"Dicas de alimentação"}
                    texto={"Se mantenha sempre por dentro de como melhorar a sua dieta"}
                />
                <HomeCard
                    image={estrela}
                    titulo={"Dicas mais famosas"}
                    texto={"Veja as dicas mais bem avaliadas do site e fique antenado com tudo que está em alta"}
                /> 
            </div>
            <Footer/>
        </>
    );
}

export default PagesHome;