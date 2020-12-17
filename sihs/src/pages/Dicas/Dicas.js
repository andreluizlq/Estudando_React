import { useState } from 'react';
import Header from '../../components/Header/Header';
import HomeCard from '../../components/HomeCard/HomeCard';
import peso from '../Home/images/peso.png';
import folha from '../Home/images/folha.png';
import estrela from '../Home/images/estrela.png';
import './Dicas.css'
import Footer from '../../components/Footer/Footer';


const PagesDicas = () => {

    return (
        <>
            <Header />
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

export default PagesDicas;