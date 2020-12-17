import { useState } from 'react';
import { useEffect } from 'react';
import FavoritoCard from '../../components/FavoritoCard/FavoritoCard';
import Header from '../../components/Header/Header';
import { info } from '../../data';

const PagesFavoritos = () => {
    const inicial = JSON.parse(localStorage.getItem("meusFavoritos"))
    const [favoritos, setFavoritos] = useState(inicial);

    return (
        <>
            <Header/>
            <div>
                {favoritos.map(i => {
                    return (
                        <FavoritoCard
                        dica = {i}
                        titulo={i.titulo}
                        texto={i.texto}
                        favoritos={favoritos}
                        setFavoritos={setFavoritos}
                        estado={false}
                    />)
                })}
            </div>
        </>
    );
}

export default PagesFavoritos;